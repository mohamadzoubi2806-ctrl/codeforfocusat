/**
 * Netlify Function — secure Gemini proxy for the Focus AT AI Tutor.
 *
 * The Gemini API key is read from the server environment (GEMINI_API_KEY) and is
 * never sent to, or embedded in, the browser bundle. The browser posts only
 * { language, message }; the system prompt is assembled here so the endpoint
 * cannot be repurposed as a general-purpose LLM proxy.
 */

// Provided by the Netlify Functions runtime. Declared locally so this file
// typechecks without pulling @types/node into the project.
declare const process: { env: Record<string, string | undefined> };

const GEMINI_MODEL = 'gemini-2.5-flash';
const GEMINI_ENDPOINT =
  `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

const MAX_BODY_BYTES = 8 * 1024;
const MAX_MESSAGE_CHARS = 2000;
const UPSTREAM_TIMEOUT_MS = 20_000;

const RATE_LIMIT_MAX = 10;
const RATE_LIMIT_WINDOW_MS = 60_000;

const ALLOWED_HOSTS = new Set([
  'focusat.org',
  'www.focusat.org',
  'localhost',
  '127.0.0.1',
]);

type Language = 'ar' | 'en' | 'he';

const LANGUAGES: readonly Language[] = ['ar', 'en', 'he'];

const isLanguage = (value: unknown): value is Language =>
  typeof value === 'string' && (LANGUAGES as readonly string[]).includes(value);

/* ------------------------------------------------------------------ *
 * Prompts — carried over verbatim from the previous client-side code. *
 * ------------------------------------------------------------------ */

const FOCUS_CONTEXT: Record<Language, string> = {
  ar: `
        OFFICIAL INFO:
        - Name: Focus Teaching Center (مركز فوكس).
        - Location: Israel, North District.
        - Contact: +972 52-382-5927 | focus.satcenter@gmail.com
        - Instagram: @focus_satcenter
        - Universities accepted: Technion, Tel Aviv, Hebrew U, etc.
      `,
  en: `
        OFFICIAL INFO:
        - Name: Focus Teaching Center.
        - Location: Israel, North District.
        - Contact: +972 52-382-5927 | focus.satcenter@gmail.com
        - Instagram: @focus_satcenter
        - Universities accepted: Technion, Tel Aviv, Hebrew U, etc.
      `,
  he: `
        OFFICIAL INFO:
        - Name: Focus Teaching Center (מרכז פוקוס).
        - Location: Israel, North District.
        - Contact: +972 52-382-5927 | focus.satcenter@gmail.com
        - Instagram: @focus_satcenter
        - Universities accepted: Technion, Tel Aviv, Hebrew U, etc.
      `,
};

function buildPrompt(language: Language, userText: string): string {
  const focusContext = FOCUS_CONTEXT[language];

  if (language === 'ar') {
    return `
        ROLE: You are an expert SAT Tutor and an assistant for "Focus Teaching Center".
        LANGUAGE: Speak Arabic.

        KNOWLEDGE BASE: ${focusContext}

        STRICT RULES:
        1. ANSWER DIRECTLY: If the student asks for a study schedule, math explanation, or tips, give them the full answer yourself.
        2. NO COMPETITORS: Never recommend other websites or centers.
        3. PROMOTE FOCUS: If the student needs more help, recommend "Focus Teaching Center".

        User Question: ${userText}
      `;
  }

  const spoken = language === 'he' ? 'Hebrew' : 'English';

  return `
        ROLE: You are an expert SAT Tutor and assistant for "Focus Teaching Center".
        LANGUAGE: Speak ${spoken}.

        KNOWLEDGE BASE: ${focusContext}

        STRICT RULES:
        1. ANSWER DIRECTLY: Solve math problems, give tips, make schedules.
        2. NO COMPETITORS: Do not recommend other websites.
        3. PROMOTE FOCUS: If they need a course, recommend Focus Teaching Center.

        User Question: ${userText}
      `;
}

/* ---------------------------------------------- *
 * Best-effort in-memory per-IP rate limiting.    *
 * See README note: not shared across instances.  *
 * ---------------------------------------------- */

const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= RATE_LIMIT_MAX) {
    hits.set(ip, recent);
    return true;
  }

  recent.push(now);
  hits.set(ip, recent);

  // Opportunistic cleanup so the map cannot grow without bound.
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) hits.delete(key);
    }
  }

  return false;
}

/* ---------------- *
 * Request helpers  *
 * ---------------- */

function clientIp(req: Request): string {
  return (
    req.headers.get('x-nf-client-connection-ip') ||
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    'unknown'
  );
}

function isAllowedOrigin(req: Request): boolean {
  const source = req.headers.get('origin') || req.headers.get('referer');
  if (!source) return false;

  try {
    return ALLOWED_HOSTS.has(new URL(source).hostname);
  } catch {
    return false;
  }
}

function json(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });
}

/* -------- *
 * Handler  *
 * -------- */

export default async function handler(req: Request): Promise<Response> {
  const started = Date.now();

  if (req.method !== 'POST') {
    return json({ error: 'Method not allowed.' }, 405);
  }

  if (!isAllowedOrigin(req)) {
    return json({ error: 'Forbidden.' }, 403);
  }

  const declaredLength = Number(req.headers.get('content-length') ?? '0');
  if (declaredLength > MAX_BODY_BYTES) {
    return json({ error: 'Request too large.' }, 413);
  }

  const raw = await req.text();
  if (raw.length > MAX_BODY_BYTES) {
    return json({ error: 'Request too large.' }, 413);
  }

  let payload: unknown;
  try {
    payload = JSON.parse(raw);
  } catch {
    return json({ error: 'Invalid JSON body.' }, 400);
  }

  if (typeof payload !== 'object' || payload === null) {
    return json({ error: 'Invalid request body.' }, 400);
  }

  const { language, message } = payload as { language?: unknown; message?: unknown };

  if (!isLanguage(language)) {
    return json({ error: 'Invalid language.' }, 400);
  }

  if (typeof message !== 'string') {
    return json({ error: 'Invalid message.' }, 400);
  }

  const userText = message.trim();
  if (!userText) {
    return json({ error: 'Message must not be empty.' }, 400);
  }
  if (userText.length > MAX_MESSAGE_CHARS) {
    return json({ error: 'Message is too long.' }, 400);
  }

  if (isRateLimited(clientIp(req))) {
    return json({ error: 'Too many requests.' }, 429);
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    // Never echo configuration detail to the browser.
    console.error('[gemini] GEMINI_API_KEY is not configured');
    return json({ error: 'Service unavailable.' }, 503);
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), UPSTREAM_TIMEOUT_MS);

  try {
    const upstream = await fetch(GEMINI_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey,
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: buildPrompt(language, userText) }] }],
      }),
      signal: controller.signal,
    });

    const data = (await upstream.json().catch(() => null)) as {
      candidates?: { content?: { parts?: { text?: string }[] } }[];
      error?: { message?: string };
    } | null;

    if (!upstream.ok || data?.error) {
      // Log upstream detail server-side only; never forward it to the client.
      console.error(
        `[gemini] upstream failed status=${upstream.status} detail=${data?.error?.message ?? 'unknown'}`,
      );
      return json({ error: 'The assistant is unavailable right now.' }, 502);
    }

    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (typeof text !== 'string' || !text.trim()) {
      console.error('[gemini] no answer candidate returned');
      return json({ error: 'No answer was produced.' }, 502);
    }

    console.log(
      `[gemini] ok lang=${language} chars=${userText.length} ms=${Date.now() - started}`,
    );

    return json({ text }, 200);
  } catch (error) {
    const reason = error instanceof Error ? error.name : 'unknown';
    console.error(`[gemini] request failed reason=${reason} ms=${Date.now() - started}`);
    return json({ error: 'The assistant is unavailable right now.' }, 502);
  } finally {
    clearTimeout(timer);
  }
}

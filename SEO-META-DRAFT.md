# Page titles & meta descriptions — draft for review

**Status:** draft. Nothing here is in the code yet. Edit this file directly, or
tell me what to change, and I'll build `src/lib/i18n.ts` from the approved version.

Guidance used:
- **Titles** target ~50–60 characters so Google doesn't truncate them.
- **Descriptions** target ~150–160 characters. Google rewrites descriptions
  roughly half the time regardless, but a good one improves click-through when
  it is used.
- Every string is grounded in what the page actually says. Nothing invented.

⚠️ **Please check the Arabic and Hebrew especially.** This is customer-facing
marketing copy in languages you speak natively and I do not. Correct it freely —
I would rather you rewrite all of it than ship wording that reads as machine-made.

---

## 1. Home — `/` · `/en` · `/he`

**Arabic**
- Title: `دورات SAT في إسرائيل | مركز Focus للتدريس`
- Description: `تحضير احترافي لاختبار SAT في شمال إسرائيل. بديل معترف به للامتحان النفسي (البسيخومتري) للقبول في الجامعات الإسرائيلية. مجموعات صغيرة ومتابعة شخصية.`

**English**
- Title: `SAT Preparation in Israel | Focus Teaching Center`
- Description: `Professional SAT preparation in northern Israel. A recognised alternative to the Psychometric exam for Israeli university admission. Small groups, personal attention.`

**Hebrew**
- Title: `הכנה ל-SAT בישראל | מרכז Focus`
- Description: `הכנה מקצועית ל-SAT בצפון הארץ. חלופה מוכרת לבחינה הפסיכומטרית לקבלה לאוניברסיטאות בישראל. קבוצות קטנות וליווי אישי.`

---

## 2. What is the SAT — `/what-is-sat` · `/en/what-is-sat` · `/he/what-is-sat`

**Arabic**
- Title: `ما هو اختبار SAT؟ الأقسام والدرجات | Focus`
- Description: `شرح كامل لاختبار SAT: قسم الرياضيات وقسم القراءة والكتابة، نظام احتساب الدرجات، ومدة الامتحان — وكيف يُستخدم للقبول الجامعي في إسرائيل.`

**English**
- Title: `What Is the SAT Exam? Sections & Scoring | Focus`
- Description: `A full guide to the SAT: the Maths and Reading & Writing sections, how scoring works, and how Israeli universities use SAT results for admission.`

**Hebrew**
- Title: `מהי בחינת ה-SAT? מבנה וניקוד | מרכז Focus`
- Description: `מדריך מלא ל-SAT: חלקי המתמטיקה והקריאה והכתיבה, שיטת הניקוד, וכיצד אוניברסיטאות בישראל משתמשות בציון לצורך קבלה.`

---

## 3. Universities — `/universities` · `/en/universities` · `/he/universities`

**Arabic**
- Title: `الجامعات الإسرائيلية وقبول SAT | مركز Focus`
- Description: `التخنيون، تل أبيب، العبرية، بن غوريون، بار إيلان وحيفا — كيف تتعامل كل جامعة مع درجة SAT، مع روابط حاسبات القبول الرسمية.`

**English**
- Title: `Israeli Universities & SAT Admission | Focus`
- Description: `Technion, Tel Aviv, Hebrew University, Ben-Gurion, Bar-Ilan and Haifa — how each treats SAT scores, with links to their official admission calculators.`

**Hebrew**
- Title: `אוניברסיטאות בישראל וקבלה עם SAT | Focus`
- Description: `טכניון, תל אביב, האוניברסיטה העברית, בן-גוריון, בר-אילן וחיפה — כיצד כל מוסד מתייחס לציון SAT, כולל קישורים למחשבוני הקבלה הרשמיים.`

---

## 4. SAT vs. Psychometric — `/comparison` · `/en/comparison` · `/he/comparison`

> ⚠️ The current English title in `Router.tsx` reads "SAT vs ACT Comparison".
> The page contains no ACT content — it compares the SAT with the Psychometric
> exam. Corrected below.

**Arabic**
- Title: `SAT أم البسيخومتري؟ مقارنة شاملة | Focus`
- Description: `مقارنة بين اختبار SAT والامتحان النفسي (البسيخومتري): اللغة، التكلفة، مواعيد الامتحان ومستوى الصعوبة — وأيهما أنسب لملف قبولك الجامعي.`

**English**
- Title: `SAT vs. Psychometric: Which Should You Take? | Focus`
- Description: `Compare the SAT with the Israeli Psychometric exam — language, cost, test dates and difficulty — and see which route better suits your university application.`

**Hebrew**
- Title: `SAT מול פסיכומטרי: מה עדיף? | מרכז Focus`
- Description: `השוואה בין ה-SAT לבחינה הפסיכומטרית — שפה, עלות, מועדים ורמת קושי — ואיזו דרך מתאימה לך יותר לקבלה לאוניברסיטה.`

---

## 5. Course Plan — `/course-plan` · `/en/course-plan` · `/he/course-plan`

**Arabic**
- Title: `خطة دورة SAT — 50 إلى 60 ساعة | مركز Focus`
- Description: `دورة SAT من 50 إلى 60 ساعة: إتقان الرياضيات، القراءة والكتابة، امتحانات تجريبية كاملة مع تحليل الأداء، وتعلّم ضمن مجموعات صغيرة.`

**English**
- Title: `SAT Course Plan — 50–60 Hours | Focus Teaching Center`
- Description: `A 50–60 hour SAT course covering Maths mastery, Reading & Writing, full practice tests with performance analysis, and small-group teaching.`

**Hebrew**
- Title: `תוכנית הקורס ל-SAT — 50-60 שעות | Focus`
- Description: `קורס SAT בן 50–60 שעות: שליטה במתמטיקה, קריאה וכתיבה, מבחני תרגול מלאים עם ניתוח ביצועים ולימוד בקבוצות קטנות.`

---

## 6. Why Focus — `/why-focus` · `/en/why-focus` · `/he/why-focus`

**Arabic**
- Title: `لماذا مركز Focus؟ | تحضير SAT في إسرائيل`
- Description: `منهج مركّز، فهم عميق بدل الحفظ، صفوف صغيرة ومتابعة فردية — تعرّف على أسلوب مركز Focus في التحضير لاختبار SAT.`

**English**
- Title: `Why Choose Focus Center? | SAT Prep in Israel`
- Description: `A focused syllabus, understanding over memorisation, small classes and individual attention — how Focus Teaching Center prepares students for the SAT.`

**Hebrew**
- Title: `למה לבחור במרכז Focus? | הכנה ל-SAT`
- Description: `תוכנית ממוקדת, הבנה לעומק במקום שינון, כיתות קטנות וליווי אישי — כך מרכז Focus מכין תלמידים לבחינת ה-SAT.`

---

## 7. Contact — `/contact` · `/en/contact` · `/he/contact`

**Arabic**
- Title: `اتصل بنا | مركز Focus للتدريس — SAT`
- Description: `تواصل مع مركز Focus عبر واتساب أو البريد الإلكتروني أو نموذج التواصل للاستفسار عن مواعيد دورات SAT والتسجيل.`

**English**
- Title: `Contact Us | Focus Teaching Center — SAT Prep`
- Description: `Get in touch with Focus Teaching Center by WhatsApp, email or the contact form for SAT course dates, availability and registration.`

**Hebrew**
- Title: `צור קשר | מרכז Focus — הכנה ל-SAT`
- Description: `צרו קשר עם מרכז Focus בוואטסאפ, במייל או דרך טופס יצירת הקשר לפרטים על מועדי קורסי SAT והרשמה.`

---

## 8. AI Tutor — `/ai-tutor` · `/en/ai-tutor` · `/he/ai-tutor`

**Arabic**
- Title: `مدرّس SAT بالذكاء الاصطناعي | مركز Focus`
- Description: `اسأل مساعد Focus الذكي عن مسائل الرياضيات أو أسئلة اللغة الإنجليزية، أو اطلب جدول مذاكرة مخصص للتحضير لاختبار SAT.`

**English**
- Title: `Focus AI SAT Tutor | Ask Maths & English Questions`
- Description: `Ask the Focus AI tutor about SAT Maths problems, English questions, or request a personalised study schedule for your exam preparation.`

**Hebrew**
- Title: `מורה SAT מבוסס AI | מרכז Focus`
- Description: `שאלו את העוזר החכם של Focus על שאלות במתמטיקה ובאנגלית ל-SAT, או בקשו תוכנית לימודים אישית לקראת הבחינה.`

---

# Three decisions for you

## A. Brand name — currently four different names

| Where | Name used |
|---|---|
| `index.html` `<title>` | **FocusAT** |
| Header logo | **Focus SAT** |
| Page headings & footer | **Focus Teaching Center** |
| Arabic / Hebrew copy | **مركز فوكس** / **מרכז פוקוס** |

Search engines and returning visitors both benefit from one consistent name.
The drafts above use **Focus Teaching Center** in English and **مركز Focus** /
**מרכז Focus** in Arabic and Hebrew — but tell me which you actually want and
I'll make all 24 consistent.

## B. Two claims worth checking before they go in a meta description

1. **"a recognised alternative to the Psychometric exam"** — your existing meta
   description already says this, and the Universities page backs it up
   per-institution. Fine as long as it's accurate for the universities you name.
2. **"Proven Results"** on the Why Focus page ("students consistently achieve
   high scores"). I deliberately left this out of the meta descriptions — an
   unsubstantiated results claim in a search snippet invites scrutiny. Say the
   word if you have score data and want it in.

## C. Should the descriptions mention price or course dates?

They currently don't, because neither appears anywhere on the site. If you want
"next course starts…" or a price in the snippet, that content has to exist on the
page too — otherwise it's a bounce.

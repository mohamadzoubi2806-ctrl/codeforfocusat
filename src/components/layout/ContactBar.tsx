import { MessageCircle, Mail, Instagram } from 'lucide-react';

interface ContactBarProps {
  lang?: 'en' | 'ar' | 'he';
}

export default function ContactBar({ lang = 'en' }: ContactBarProps) {
  const isRTL = lang === 'ar' || lang === 'he';

  const labels = {
    en: { whatsapp: 'WhatsApp', email: 'Email', instagram: 'Instagram' },
    ar: { whatsapp: 'واتساب', email: 'البريد الإلكتروني', instagram: 'إنستجرام' },
    he: { whatsapp: 'WhatsApp', email: 'אימייל', instagram: 'אינסטגרם' },
  };

  const currentLabels = labels[lang];

  return (
    <div
      dir={isRTL ? 'rtl' : 'ltr'}
      className="fixed bottom-0 left-0 right-0 bg-primary text-primary-foreground shadow-lg z-40"
    >
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">

          <a
            href="https://wa.me/972523825927"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            aria-label={currentLabels.whatsapp}
          >
            <MessageCircle size={20} />
            <div className="flex flex-col">
              <span className="text-xs font-paragraph opacity-90">
                {currentLabels.whatsapp}
              </span>
              <span className="text-sm sm:text-base font-paragraph font-medium" dir="ltr">
                +972 52-382-5927
              </span>
            </div>
          </a>

          <a
            href="mailto:focus.satcenter@gmail.com"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            aria-label={currentLabels.email}
          >
            <Mail size={20} />
            <div className="flex flex-col">
              <span className="text-xs font-paragraph opacity-90">
                {currentLabels.email}
              </span>
              <span className="text-sm sm:text-base font-paragraph font-medium">
                focus.satcenter@gmail.com
              </span>
            </div>
          </a>

          <a
            href="https://www.instagram.com/focus_satcenter/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            aria-label={currentLabels.instagram}
          >
            <Instagram size={20} />
            <div className="flex flex-col">
              <span className="text-xs font-paragraph opacity-90">
                {currentLabels.instagram}
              </span>
              <span className="text-sm sm:text-base font-paragraph font-medium">
                @focus_satcenter
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
import { Mail, MessageCircle, Instagram } from 'lucide-react';

interface FooterProps {
  lang: 'ar' | 'he' | 'en';
}

const footerContent = {
  ar: {
    whatsapp: 'واتساب',
    email: 'البريد الإلكتروني',
    instagram: 'انستغرام',
    copyright: '© 2026 Focus Teaching Center. جميع الحقوق محفوظة.',
  },
  he: {
    whatsapp: 'WhatsApp',
    email: 'אימייל',
    instagram: 'אינסטגרם',
    copyright: '© 2026 Focus Teaching Center. כל הזכויות שמורות.',
  },
  en: {
    whatsapp: 'WhatsApp',
    email: 'Email',
    instagram: 'Instagram',
    copyright: '© 2026 Focus Teaching Center. All rights reserved.',
  },
};

export default function Footer({ lang }: FooterProps) {
  const isRTL = lang === 'ar' || lang === 'he';
  const content = footerContent[lang];

  return (
    <footer className="bg-foreground text-white mt-24 pb-28">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
          
          {/* 1. WhatsApp Section */}
          <div>
            <h3 className={`font-heading text-xl mb-4 flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <MessageCircle size={20} />
              {content.whatsapp}
            </h3>
            <a
              href="https://wa.me/972523825927"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-red hover:text-primary transition-colors font-paragraph block"
              dir="ltr"
            >
              +972 52-382-5927
            </a>
          </div>

          {/* 2. Instagram Section - UPDATED LINK HERE */}
          <div>
            <h3 className={`font-heading text-xl mb-4 flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Instagram size={20} />
              {content.instagram}
            </h3>
            <a
              href="https://www.instagram.com/focus_satcenter/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-red hover:text-primary transition-colors font-paragraph block"
              dir="ltr"
            >
              @focus_satcenter
            </a>
          </div>

          {/* 3. Email Section */}
          <div>
            <h3 className={`font-heading text-xl mb-4 flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Mail size={20} />
              {content.email}
            </h3>
            <a
              href="mailto:focus.satcenter@gmail.com"
              className="text-light-red hover:text-primary transition-colors font-paragraph block"
            >
              focus.satcenter@gmail.com
            </a>
          </div>
          
        </div>

        <div className={`border-t border-secondary pt-8 ${isRTL ? 'text-right' : 'text-left'}`}>
          <p className="text-sm text-secondary-foreground font-paragraph">{content.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
import { Mail, MessageCircle, Instagram } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

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

export default function Footer() {
  const { language, isRTL } = useLanguage();
  const content = footerContent[language];

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>

          <div>
            <h3 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <MessageCircle size={20} className="text-orange-400" />
              {content.whatsapp}
            </h3>
            <a
              href="https://wa.me/972523825927"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-orange-400 transition-colors block"
              dir="ltr"
            >
              +972 52-382-5927
            </a>
          </div>

          <div>
            <h3 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Instagram size={20} className="text-orange-400" />
              {content.instagram}
            </h3>
            <a
              href="https://www.instagram.com/focus_satcenter/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-orange-400 transition-colors block"
              dir="ltr"
            >
              @focus_satcenter
            </a>
          </div>

          <div>
            <h3 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Mail size={20} className="text-orange-400" />
              {content.email}
            </h3>
            <a
              href="mailto:focus.satcenter@gmail.com"
              className="text-gray-300 hover:text-orange-400 transition-colors block"
            >
              focus.satcenter@gmail.com
            </a>
          </div>

        </div>

        <div className={`border-t border-gray-800 pt-8 ${isRTL ? 'text-right' : 'text-left'}`}>
          <p className="text-sm text-gray-400">{content.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
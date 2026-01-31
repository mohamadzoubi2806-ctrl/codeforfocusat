import { Link, useLocation } from 'react-router-dom';
import { Globe } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const navigationLinks = {
  ar: [
    { label: 'الرئيسية', path: '/' },
    { label: 'ما هو SAT', path: '/what-is-sat' },
    { label: 'الجامعات', path: '/universities' },
    { label: 'SAT كبديل', path: '/comparison' },
    { label: 'خطة الدورة', path: '/course-plan' },
    { label: 'مركز Focus', path: '/why-focus' },
    { label: 'اتصل بنا', path: '/contact' },
  ],
  he: [
    { label: 'בית', path: '/' },
    { label: 'מה זה SAT', path: '/what-is-sat' },
    { label: 'אוניברסיטאות', path: '/universities' },
    { label: 'SAT כחלופה', path: '/comparison' },
    { label: 'תכנית הקורס', path: '/course-plan' },
    { label: 'מרכז Focus', path: '/why-focus' },
    { label: 'צור קשר', path: '/contact' },
  ],
  en: [
    { label: 'Home', path: '/' },
    { label: 'What is SAT', path: '/what-is-sat' },
    { label: 'Universities', path: '/universities' },
    { label: 'SAT as Alternative', path: '/comparison' },
    { label: 'Course Plan', path: '/course-plan' },
    { label: 'Why Focus', path: '/why-focus' },
    { label: 'Contact', path: '/contact' },
  ],
};

const languageLabels = {
  en: 'EN',
  ar: 'العربية',
  he: 'עברית'
};

export default function Header() {
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, isRTL } = useLanguage();

  const links = navigationLinks[language];

  return (
    <header className="bg-white shadow-md sticky top-0 z-[60]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center py-4 gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>

          {/* Logo */}
          <Link to="/" className={`flex items-center gap-2 group shrink-0 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg group-hover:shadow-xl transition-all duration-300 flex items-center justify-center overflow-hidden">
                <img
                  src="/logo.svg"
                  alt="Focus SAT"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className={`absolute -bottom-1 w-4 h-4 bg-orange-600 rounded-full border-2 border-white ${isRTL ? '-left-1' : '-right-1'}`}></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-gray-900 leading-tight">Focus SAT</h1>
            </div>
          </Link>

          {/* Navigation - Always Visible */}
          <nav className={`flex gap-2 sm:gap-4 lg:gap-6 items-center flex-wrap flex-1 ${isRTL ? 'flex-row-reverse justify-start' : 'justify-end'}`}>
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-all duration-200 text-xs sm:text-sm lg:text-base font-semibold px-2 py-1.5 lg:px-3 lg:py-2 rounded-lg whitespace-nowrap ${
                    isActive
                      ? 'text-orange-600 bg-orange-50'
                      : 'text-gray-800 hover:text-orange-600 hover:bg-orange-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className={`flex items-center gap-2 px-3 py-2 lg:px-4 lg:py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md hover:shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 ${isRTL ? 'flex-row-reverse' : ''}`}
                aria-label="Switch language"
              >
                <Globe size={18} className="lg:w-5 lg:h-5" />
                <span className="text-sm sm:text-base font-semibold">{languageLabels[language]}</span>
              </button>

              {langMenuOpen && (
                <div className={`absolute mt-3 w-44 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 z-[70] overflow-hidden animate-fadeIn ${isRTL ? 'left-0' : 'right-0'}`}>
                  {(Object.keys(languageLabels) as Array<keyof typeof languageLabels>).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full px-5 py-3 text-sm font-medium transition-all duration-200 ${
                        language === lang
                          ? `bg-gradient-to-r from-orange-50 to-orange-100 text-orange-600 ${isRTL ? 'border-r-4 border-orange-500 text-right' : 'border-l-4 border-orange-500 text-left'}`
                          : `text-gray-700 hover:bg-gray-50 hover:text-orange-600 ${isRTL ? 'text-right hover:pr-6' : 'text-left hover:pl-6'}`
                      }`}
                    >
                      <span className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <Globe size={16} />
                        {languageLabels[lang]}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

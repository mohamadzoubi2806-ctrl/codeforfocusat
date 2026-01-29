import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, isRTL } = useLanguage();

  const links = navigationLinks[language];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg group-hover:shadow-xl transition-all duration-300 flex items-center justify-center overflow-hidden">
                <img
                  src="/whatsapp_image_2025-12-31_at_02.26.34.jpeg"
                  alt="Focus SAT"
                  className="w-12 h-12 object-cover rounded-full"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-orange-600 rounded-full border-2 border-white"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900 leading-tight">Focus SAT</h1>
              <p className="text-xs text-gray-600">Excellence in Education</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className={`hidden lg:flex gap-6 items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors text-sm font-medium ${
                    isActive
                      ? 'text-orange-600 font-bold'
                      : 'text-gray-700 hover:text-orange-600'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Language Switcher - Desktop */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                aria-label="Switch language"
              >
                <Globe size={18} />
                <span className="text-sm font-medium">{languageLabels[language]}</span>
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                  {(Object.keys(languageLabels) as Array<keyof typeof languageLabels>).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                        language === lang
                          ? 'bg-orange-50 text-orange-600 font-medium'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {languageLabels[lang]}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-orange-600"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className={`lg:hidden pb-4 border-t border-gray-100 pt-4 flex flex-col gap-3 ${isRTL ? 'items-end' : 'items-start'}`}>
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`transition-colors text-sm ${
                    isActive
                      ? 'text-orange-600 font-bold'
                      : 'text-gray-700 hover:text-orange-600'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Language Switcher - Mobile */}
            <div className="border-t border-gray-100 pt-3 mt-2 w-full">
              <div className="flex gap-3 items-center">
                <Globe size={18} className="text-gray-600" />
                {(Object.keys(languageLabels) as Array<keyof typeof languageLabels>).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-3 py-1 rounded-md text-sm transition-colors ${
                      language === lang
                        ? 'bg-orange-600 text-white font-medium'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {languageLabels[lang]}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

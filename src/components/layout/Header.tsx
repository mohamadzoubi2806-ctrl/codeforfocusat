import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react'; // Added Sparkles
import { useState } from 'react';

interface HeaderProps {
  lang: 'ar' | 'he' | 'en';
}

const navigationLinks = {
  ar: [
    { label: 'الرئيسية', path: '/ar' },
    { label: 'ما هو SAT', path: '/ar/what-is-sat' },
    { label: 'الجامعات', path: '/ar/universities' },
    { label: 'SAT كبديل معترف به', path: '/ar/comparison' },
    { label: 'خطة الدورة', path: '/ar/course-plan' },
    { label: 'مركز Focus', path: '/ar/why-focus' },
    { label: 'اتصل بنا', path: '/ar/contact' },
    { label: 'مساعد AI', path: '/ar/ai-tutor', isSpecial: true }, // Added AI Link
  ],
  he: [
    { label: 'בית', path: '/he' },
    { label: 'מה זה SAT', path: '/he/what-is-sat' },
    { label: 'אוניברסיטאות', path: '/he/universities' },
    { label: 'SAT כחלופה מוכרת', path: '/he/comparison' },
    { label: 'תכנית הקורס', path: '/he/course-plan' },
    { label: 'מרכז Focus', path: '/he/why-focus' },
    { label: 'צור קשר', path: '/he/contact' },
    { label: 'AI Tutor', path: '/he/ai-tutor', isSpecial: true }, // Added AI Link
  ],
  en: [
    { label: 'Home', path: '/en' },
    { label: 'What is SAT', path: '/en/what-is-sat' },
    { label: 'Universities', path: '/en/universities' },
    { label: 'SAT as Alternative', path: '/en/comparison' },
    { label: 'Course Plan', path: '/en/course-plan' },
    { label: 'Focus Center', path: '/en/why-focus' },
    { label: 'Contact', path: '/en/contact' },
    { label: 'AI Tutor', path: '/en/ai-tutor', isSpecial: true }, // Added AI Link
  ],
};

export default function Header({ lang }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation(); // To check active link
  const isRTL = lang === 'ar' || lang === 'he';
  const links = navigationLinks[lang];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo */}
          <Link to={`/${lang}`} className="flex-shrink-0">
            <img
              src="/whatsapp_image_2025-12-31_at_02.26.34.jpeg"
              alt="Focus Teaching Center"
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className={`hidden lg:flex gap-6 items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
            {links.map((link) => {
              // Special styling for AI Button
              if (link.isSpecial) {
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full font-heading text-sm hover:bg-destructive transition-colors shadow-sm"
                  >
                    <Sparkles size={16} />
                    {link.label}
                  </Link>
                );
              }
              
              // Standard styling for other links
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors font-paragraph text-base ${
                    isActive 
                      ? 'text-primary font-bold' 
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-foreground hover:text-primary"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className={`lg:hidden pb-4 flex flex-col gap-4 ${isRTL ? 'items-end' : 'items-start'}`}>
            {links.map((link) => {
               // Special styling for AI Button in Mobile
               if (link.isSpecial) {
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 text-primary font-heading font-bold"
                  >
                    <Sparkles size={18} />
                    {link.label}
                  </Link>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-foreground hover:text-primary transition-colors font-paragraph text-base"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}
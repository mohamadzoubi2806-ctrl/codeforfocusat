import { Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

export default function AiBubble() {
  const { language } = useLanguage();

  const tooltipText = {
    en: 'AI Tutor',
    ar: 'المعلم الذكي',
    he: 'מורה AI'
  };

  return (
    <Link
      to="/ai-tutor"
      className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300 group"
      aria-label={tooltipText[language]}
    >
      <Bot className="w-8 h-8" />
      <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        {tooltipText[language]}
      </span>
    </Link>
  );
}

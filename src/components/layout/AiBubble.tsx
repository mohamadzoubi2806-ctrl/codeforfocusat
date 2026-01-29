import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

export default function AiBubble() {
  const { language } = useLanguage();

  const buttonText = {
    en: 'Ask Our AI',
    ar: 'اسأل الذكاء الاصطناعي',
    he: 'שאל את ה-AI'
  };

  return (
    <Link
      to="/ai-tutor"
      className="fixed bottom-8 right-8 z-50 flex items-center gap-3 group"
      aria-label="AI Tutor"
    >
      <div className="bg-white text-gray-900 px-6 py-3 rounded-full shadow-lg border-2 border-blue-500 font-semibold text-base transition-all duration-300 hover:shadow-xl">
        {buttonText[language]}
      </div>
      <div className="relative">
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-5 rounded-full shadow-xl hover:scale-110 transition-transform duration-300">
          <Sparkles className="w-7 h-7" />
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
      </div>
    </Link>
  );
}

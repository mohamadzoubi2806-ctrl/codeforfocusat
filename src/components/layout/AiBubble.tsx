import { Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useState, useRef, useEffect } from 'react';

export default function AiBubble() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [position, setPosition] = useState({ x: window.innerWidth - 280, y: window.innerHeight - 120 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const dragRef = useRef({ hasMoved: false });

  const buttonText = {
    en: 'Ask Our AI',
    ar: 'اسأل الذكاء الاصطناعي',
    he: 'שאל את ה-AI'
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        dragRef.current.hasMoved = true;
        const newX = e.clientX - dragStart.x;
        const newY = e.clientY - dragStart.y;

        const maxX = window.innerWidth - 280;
        const maxY = window.innerHeight - 80;

        setPosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY))
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragStart]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    dragRef.current.hasMoved = false;
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleClick = (e: React.MouseEvent) => {
    if (dragRef.current.hasMoved) {
      e.preventDefault();
      dragRef.current.hasMoved = false;
    } else {
      navigate('/ai-tutor');
    }
  };

  return (
    <div
      className="fixed z-50 flex items-center gap-3 group cursor-move"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
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
    </div>
  );
}

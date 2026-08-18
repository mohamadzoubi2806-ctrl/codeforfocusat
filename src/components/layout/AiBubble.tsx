import { Sparkles, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useState, useRef, useEffect } from 'react';

export default function AiBubble() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const isMobile = window.innerWidth < 768;
  const bubbleWidth = isMobile ? 150 : 280;
  const bubbleHeight = isMobile ? 60 : 120;
  const [position, setPosition] = useState({
    x: window.innerWidth - bubbleWidth - 20,
    y: window.innerHeight - bubbleHeight - 20
  });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isTransparent, setIsTransparent] = useState(false);
  const holdTimerRef = useRef<number | null>(null);
  const dragRef = useRef({ hasMoved: false, isDragEnabled: false });

  const buttonText = {
    en: 'Ask AI',
    ar: 'اسأل AI',
    he: 'שאל AI'
  };

  const buttonTextFull = {
    en: 'Ask Our AI',
    ar: 'اسأل الذكاء الاصطناعي',
    he: 'שאל את ה-AI'
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && dragRef.current.isDragEnabled) {
        dragRef.current.hasMoved = true;
        const newX = e.clientX - dragStart.x;
        const newY = e.clientY - dragStart.y;

        const isMobileNow = window.innerWidth < 768;
        const bubbleW = isMobileNow ? 150 : 280;
        const bubbleH = isMobileNow ? 60 : 120;
        const minY = 80;
        const maxX = window.innerWidth - bubbleW;
        const maxY = window.innerHeight - bubbleH;

        setPosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(minY, Math.min(newY, maxY))
        });
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && dragRef.current.isDragEnabled) {
        e.preventDefault();
        dragRef.current.hasMoved = true;
        const touch = e.touches[0];
        const newX = touch.clientX - dragStart.x;
        const newY = touch.clientY - dragStart.y;

        const isMobileNow = window.innerWidth < 768;
        const bubbleW = isMobileNow ? 150 : 280;
        const bubbleH = isMobileNow ? 60 : 120;
        const minY = 80;
        const maxX = window.innerWidth - bubbleW;
        const maxY = window.innerHeight - bubbleH;

        setPosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(minY, Math.min(newY, maxY))
        });
      }
    };

    const handleEnd = () => {
      if (holdTimerRef.current) {
        clearTimeout(holdTimerRef.current);
        holdTimerRef.current = null;
      }
      setIsDragging(false);
      dragRef.current.isDragEnabled = false;
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleEnd);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, dragStart]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    dragRef.current.hasMoved = false;
    dragRef.current.isDragEnabled = false;
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });

    holdTimerRef.current = window.setTimeout(() => {
      dragRef.current.isDragEnabled = true;
    }, 200);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    dragRef.current.hasMoved = false;
    dragRef.current.isDragEnabled = false;
    setIsDragging(true);
    const touch = e.touches[0];
    setDragStart({
      x: touch.clientX - position.x,
      y: touch.clientY - position.y
    });

    holdTimerRef.current = window.setTimeout(() => {
      dragRef.current.isDragEnabled = true;
    }, 200);
  };

  const handleClick = (e: React.MouseEvent) => {
    if (dragRef.current.hasMoved) {
      e.preventDefault();
      dragRef.current.hasMoved = false;
    } else {
      navigate('/ai-tutor');
    }
  };

  const handleTransparencyToggle = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsTransparent(!isTransparent);
  };

  return (
    <div
      className="fixed z-50 flex items-center gap-1.5 md:gap-3 group cursor-pointer transition-opacity duration-300"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: isTransparent ? 0.3 : 1,
        touchAction: 'none'
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onClick={handleClick}
      aria-label="AI Tutor"
    >
      <button
        onClick={handleTransparencyToggle}
        onTouchStart={handleTransparencyToggle}
        className="bg-gray-800 text-white p-1.5 md:p-2 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Toggle transparency"
      >
        {isTransparent ? <Eye className="w-3 h-3 md:w-4 md:h-4" /> : <EyeOff className="w-3 h-3 md:w-4 md:h-4" />}
      </button>
      <div className="bg-white text-gray-900 px-3 py-1.5 md:px-6 md:py-3 rounded-full shadow-lg border-2 border-blue-500 font-semibold text-xs md:text-base transition-all duration-300 hover:shadow-xl">
        <span className="md:hidden">{buttonText[language]}</span>
        <span className="hidden md:inline">{buttonTextFull[language]}</span>
      </div>
      <div className="relative">
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-3 md:p-5 rounded-full shadow-xl hover:scale-110 transition-transform duration-300">
          <Sparkles className="w-4 h-4 md:w-7 md:h-7" />
        </div>
        <div className="absolute -top-0.5 -right-0.5 md:-top-1 md:-right-1 w-3 h-3 md:w-4 md:h-4 bg-green-400 rounded-full border-2 border-white"></div>
      </div>
    </div>
  );
}

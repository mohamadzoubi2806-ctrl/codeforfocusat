import { Link, useLocation } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import './AiBubble.css';

export default function AiBubble() {
  const location = useLocation();
  const currentPath = location.pathname;
  const isAiPage = currentPath.includes('/ai-tutor');

  const [isDragging, setIsDragging] = useState(false);
  const [hasBeenDragged, setHasBeenDragged] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef({ x: 0, y: 0, initialX: 0, initialY: 0 });
  const clickPreventRef = useRef(false);

  useEffect(() => {
    const saved = localStorage.getItem('aiBubblePosition');
    if (saved) {
      try {
        const pos = JSON.parse(saved);
        setPosition(pos);
        setHasBeenDragged(true);
      } catch (e) {
        console.error('Failed to parse saved position');
      }
    }
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest('.ai-bubble-button')) {
      return;
    }

    e.preventDefault();
    setIsDragging(true);
    clickPreventRef.current = false;

    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      initialX: position.x,
      initialY: position.y,
    };

    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - dragStartRef.current.x;
    const deltaY = e.clientY - dragStartRef.current.y;

    if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
      clickPreventRef.current = true;
    }

    const newX = dragStartRef.current.initialX + deltaX;
    const newY = dragStartRef.current.initialY + deltaY;

    setPosition({ x: newX, y: newY });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;

    setIsDragging(false);

    if (clickPreventRef.current) {
      setHasBeenDragged(true);
      localStorage.setItem('aiBubblePosition', JSON.stringify(position));
    }

    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    if (clickPreventRef.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  if (isAiPage) {
    return null;
  }

  const aiRoute = '/ai-tutor';

  const containerStyle: React.CSSProperties = {
    transform: `translate(${position.x}px, ${position.y}px)`,
  };

  return (
    <div
      ref={containerRef}
      className={`ai-bubble-container ${hasBeenDragged ? 'dragged' : ''} ${isDragging ? 'dragging' : ''}`}
      style={containerStyle}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      <div className="ai-bubble-label">
        <span className="ai-bubble-label-text">Ask Our AI</span>
      </div>

      <div className="ai-bubble-button-wrapper">
        <Link
          to={aiRoute}
          className="ai-bubble-button"
          onClick={handleLinkClick}
        >
          <Sparkles className="ai-bubble-icon" />
          <div className="ai-bubble-pulse" />
        </Link>
      </div>
    </div>
  );
}

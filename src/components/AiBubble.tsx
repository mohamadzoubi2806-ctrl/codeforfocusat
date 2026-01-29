import { Link, useLocation } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function AiBubble() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isDragging, setIsDragging] = useState(false);
  const [hasBeenDragged, setHasBeenDragged] = useState(false);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const dragStartPos = useRef({ x: 0, y: 0 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const isAiPage = currentPath.includes('/ai-tutor');

  useEffect(() => {
    const savedPosition = localStorage.getItem('aiBubblePosition');
    if (savedPosition) {
      try {
        const { x: savedX, y: savedY } = JSON.parse(savedPosition);
        x.set(savedX);
        y.set(savedY);
        setHasBeenDragged(true);
      } catch (e) {
        console.error('Failed to parse saved position');
      }
    }
  }, []);

  const constrainPosition = (newX: number, newY: number) => {
    if (!bubbleRef.current) return { x: newX, y: newY };

    const bubbleRect = bubbleRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const maxX = viewportWidth - bubbleRect.width - 16;
    const maxY = viewportHeight - bubbleRect.height - 16;
    const minX = -bubbleRect.left + 16;
    const minY = -bubbleRect.top + 16;

    const constrainedX = Math.max(minX, Math.min(maxX, newX));
    const constrainedY = Math.max(minY, Math.min(maxY, newY));

    return { x: constrainedX, y: constrainedY };
  };

  const handleDragStart = () => {
    dragStartPos.current = { x: x.get(), y: y.get() };
    setIsDragging(true);
  };

  const handleDragEnd = (_event: any, info: any) => {
    const deltaX = Math.abs(info.point.x - dragStartPos.current.x);
    const deltaY = Math.abs(info.point.y - dragStartPos.current.y);
    const wasDragged = deltaX > 5 || deltaY > 5;

    if (wasDragged) {
      setHasBeenDragged(true);
      const constrained = constrainPosition(info.offset.x, info.offset.y);
      x.set(constrained.x);
      y.set(constrained.y);
      localStorage.setItem('aiBubblePosition', JSON.stringify(constrained));
    }

    setTimeout(() => setIsDragging(false), 100);
  };

  const handleClick = (e: React.MouseEvent) => {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  if (isAiPage) {
    return null;
  }

  const aiRoute = '/ai-tutor';

  return (
    <motion.div
      ref={bubbleRef}
      drag
      dragMomentum={false}
      dragElastic={0}
      dragConstraints={{
        top: -(bubbleRef.current?.getBoundingClientRect().top ?? 0) + 16,
        left: -(bubbleRef.current?.getBoundingClientRect().left ?? 0) + 16,
        right: window.innerWidth - (bubbleRef.current?.getBoundingClientRect().right ?? 0) - 16,
        bottom: window.innerHeight - (bubbleRef.current?.getBoundingClientRect().bottom ?? 0) - 16,
      }}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        y: isDragging || hasBeenDragged ? 0 : [0, -15, 0],
        x: isDragging || hasBeenDragged ? 0 : [0, -5, 0]
      }}
      transition={{
        scale: { delay: 0.5, type: 'spring', stiffness: 260, damping: 20 },
        opacity: { delay: 0.5 },
        y: {
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        },
        x: {
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }
      }}
      style={{
        x,
        y,
        touchAction: 'none'
      }}
      className="fixed top-32 right-4 z-50 flex items-center gap-3 cursor-move active:cursor-grabbing"
    >
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.8, type: 'spring', stiffness: 260, damping: 20 }}
        className="bg-white px-4 py-2 rounded-full shadow-lg border-2 border-blue-500 pointer-events-none select-none"
      >
        <span className="text-sm font-semibold text-gray-800 whitespace-nowrap">
          Ask Our AI
        </span>
      </motion.div>

      <motion.div
        animate={{
          rotate: isDragging ? 0 : [0, 5, -5, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <Link
          to={aiRoute}
          className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
          onClick={handleClick}
          draggable={false}
        >
          <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </Link>
      </motion.div>
    </motion.div>
  );
}

import { Link, useLocation } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function AiBubble() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const isAiPage = currentPath.includes('/ai-tutor');

  useEffect(() => {
    const savedPosition = localStorage.getItem('aiBubblePosition');
    if (savedPosition) {
      setPosition(JSON.parse(savedPosition));
    }
  }, []);

  const handleDragEnd = (_event: any, info: any) => {
    const newPosition = { x: info.point.x, y: info.point.y };
    setPosition(newPosition);
    localStorage.setItem('aiBubblePosition', JSON.stringify(newPosition));
    setIsDragging(false);
  };

  if (isAiPage) {
    return null;
  }

  const aiRoute = '/ai-tutor';

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0.1}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={handleDragEnd}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        y: isDragging ? 0 : [0, -15, 0],
        x: isDragging ? 0 : [0, -5, 0]
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
        x: position.x,
        y: position.y
      }}
      className="fixed top-32 right-4 z-50 flex items-center gap-3 cursor-move"
    >
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.8, type: 'spring', stiffness: 260, damping: 20 }}
        className="bg-white px-4 py-2 rounded-full shadow-lg border-2 border-blue-500"
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
          onClick={(e) => isDragging && e.preventDefault()}
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

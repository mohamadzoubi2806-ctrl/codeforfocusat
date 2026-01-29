import { Link, useLocation } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AiBubble() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isAiPage = currentPath.includes('/ai-tutor');

  if (isAiPage) {
    return null;
  }

  const aiRoute = '/ai-tutor';

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed top-32 right-4 z-50 flex items-center gap-3"
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

      <Link
        to={aiRoute}
        className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
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
  );
}

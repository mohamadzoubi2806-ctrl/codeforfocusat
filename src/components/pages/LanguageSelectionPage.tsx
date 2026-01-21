import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function LanguageSelectionPage() {
  return (
    <div className="min-h-screen bg-[#E8E8E8] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-12"
          >
            <img
              src="https://static.wixstatic.com/media/2fc8e4_9c1ce0bcb29f494694243af2451cf0d9~mv2.jpeg"
              alt="Focus Teaching Center"
              className="w-80 h-auto mx-auto rounded-lg shadow-2xl"
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-3xl md:text-4xl font-heading text-foreground mb-12"
          >
            Choose Language / اختر اللغة
          </motion.h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Link
                to="/ar"
                className="block bg-[#B94A48] hover:bg-[#A03C3A] text-white px-12 py-6 rounded-md shadow-lg transition-all hover:shadow-xl font-heading text-2xl min-w-[180px]"
              >
                العربية
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link
                to="/he"
                className="block bg-[#B94A48] hover:bg-[#A03C3A] text-white px-12 py-6 rounded-md shadow-lg transition-all hover:shadow-xl font-heading text-2xl min-w-[180px]"
              >
                עברית
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Link
                to="/en"
                className="block bg-[#B94A48] hover:bg-[#A03C3A] text-white px-12 py-6 rounded-md shadow-lg transition-all hover:shadow-xl font-heading text-2xl min-w-[180px]"
              >
                English
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

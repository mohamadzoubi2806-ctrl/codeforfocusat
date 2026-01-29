import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function LanguageSelectionPage() {
  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'he', name: 'Hebrew', nativeName: 'עברית' },
    { code: 'ar', name: 'Arabic', nativeName: 'العربية' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <img
            src="/whatsapp_image_2025-12-31_at_02.26.34.jpeg"
            alt="Focus SAT Logo"
            className="h-24 mx-auto mb-8"
          />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Focus SAT
          </h1>
          <p className="text-xl text-gray-600">
            Please select your preferred language
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.code}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={`/${lang.code}`}
                className="block p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-orange-500 group"
              >
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {lang.nativeName}
                  </h2>
                  <p className="text-gray-600">
                    {lang.name}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

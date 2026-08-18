import { motion } from 'framer-motion';
import { MessageCircle, BookOpen, Clock, Zap } from 'lucide-react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import { usePageTitle } from '../../../hooks/usePageTitle';

export default function HomePageEn() {
  usePageTitle('Focus Teaching Center - SAT Exam Preparation');
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-orange-50 to-blue-100 pb-20">
      <Header />

      <section className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-[100rem] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading text-gray-900 mb-6 bg-gradient-to-r from-[#9E5A4E] to-[#625591] bg-clip-text text-transparent">
              Focus Teaching Center
            </h1>
            <p className="text-2xl md:text-3xl font-paragraph text-gray-700 mb-8">
              Professional SAT Digital Exam Preparation
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-br from-white to-blue-50 p-8 md:p-12 rounded-2xl mb-12 shadow-lg border border-blue-100"
          >
            <h2 className="text-3xl md:text-4xl font-heading text-gray-900 mb-6">
              What is the SAT Exam?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed font-paragraph mb-6">
              The SAT is a globally recognized university admission exam. It consists of two sections: Reading and Writing, and Math.
              The exam takes approximately two hours and focuses on fundamental skills and logical reasoning.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-paragraph">
             In Israel, the SAT exam is officially recognized by universities as an alternative to the Psychometric Exam, making it a smart option for students seeking university admission.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading text-gray-900 mb-8 text-center">
              Why Students Choose SAT
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-orange-200">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-xl inline-block mb-4 shadow-md">
                  <Clock size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-heading text-gray-900 mb-3">Shorter than Psychometric</h3>
                <p className="text-base text-gray-700 font-paragraph">
                  Two hours instead of three and a half hours
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-blue-200">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl inline-block mb-4 shadow-md">
                  <Zap size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-heading text-gray-900 mb-3">Clearer and More Logical</h3>
                <p className="text-base text-gray-700 font-paragraph">
                  Focuses on understanding and logic instead of tricks and puzzles
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-green-200">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl inline-block mb-4 shadow-md">
                  <BookOpen size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-heading text-gray-900 mb-3">Officially Recognized</h3>
                <p className="text-base text-gray-700 font-paragraph">
                  Accepted at all Israeli universities as an alternative to psychometric
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-gradient-to-r from-orange-500 to-orange-600 p-8 md:p-12 rounded-2xl text-center shadow-2xl"
          >
            <h2 className="text-3xl font-heading text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/90 font-paragraph mb-8 max-w-2xl mx-auto">
              Get a free consultation to understand how we can help you prepare for the SAT exam
            </p>
            <a
              href="https://wa.me/972523825927"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-orange-600 px-8 py-4 rounded-xl font-heading text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
            >
              <MessageCircle size={20} />
              Free Consultation
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

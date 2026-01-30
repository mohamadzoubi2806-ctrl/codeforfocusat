import { motion } from 'framer-motion';
import { MessageCircle, BookOpen, Clock, Zap } from 'lucide-react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import HeroTitle from '../../layout/HeroTitle';
import { usePageTitle } from '../../../hooks/usePageTitle';

export default function HomePageAr() {
  usePageTitle('Focus Teaching Center - SAT Exam Preparation');
  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-br from-blue-50 via-orange-50 to-blue-100 pb-20">
      <Header />

      <section className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-[100rem] mx-auto w-full">
          <HeroTitle />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-br from-white to-blue-50 p-8 md:p-12 rounded-2xl mb-12 shadow-lg border border-blue-100"
          >
            <h2 className="text-3xl md:text-4xl font-heading text-gray-900 mb-6">
              ما هو امتحان SAT؟
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed font-paragraph mb-6">
              SAT هو امتحان قبول جامعي معترف به عالمياً. يتكون من قسمين: القراءة والكتابة، والرياضيات.
              يستغرق الامتحان حوالي ساعتين ويركز على المهارات الأساسية والتفكير المنطقي.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-paragraph">
              في إسرائيل، SAT معترف به رسمياً من قبل جميع الجامعات كبديل معترف به للامتحان البسيخومتري.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading text-gray-900 mb-8 text-center">
              لماذا يختار الطلاب SAT
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-orange-200">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-xl inline-block mb-4 shadow-md">
                  <Clock size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-heading text-gray-900 mb-3">أقصر من البسيخومتري</h3>
                <p className="text-base text-gray-700 font-paragraph">
                  ساعتان بدلاً من ثلاث ساعات ونصف
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-blue-200">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl inline-block mb-4 shadow-md">
                  <Zap size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-heading text-gray-900 mb-3">أوضح وأكثر منطقية</h3>
                <p className="text-base text-gray-700 font-paragraph">
                  يركز على الفهم والمنطق بدلاً من الحيل والألغاز
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-green-200">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl inline-block mb-4 shadow-md">
                  <BookOpen size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-heading text-gray-900 mb-3">معترف به رسمياً</h3>
                <p className="text-base text-gray-700 font-paragraph">
                  مقبول في جميع الجامعات الإسرائيلية كبديل للبسيخومتري
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
              جاهز للبدء؟
            </h2>
            <p className="text-lg text-white/90 font-paragraph mb-8 max-w-2xl mx-auto">
              احصل على استشارة مجانية لفهم كيف يمكننا مساعدتك في التحضير لامتحان SAT
            </p>
            <a
              href="https://wa.me/972523825927"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-orange-600 px-8 py-4 rounded-xl font-heading text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
            >
              <MessageCircle size={20} />
              استشارة مجانية
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
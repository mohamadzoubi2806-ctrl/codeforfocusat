import { motion } from 'framer-motion';
import { BookOpen, Clock, Target, Award } from 'lucide-react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

export default function WhatIsSatPageAr() {
  return (
    <div dir="rtl" className="min-h-screen bg-background pb-20">
      <Header />

      <main className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-heading text-foreground mb-4">
            ما هو امتحان SAT؟
          </h1>
          <p className="text-lg text-secondary max-w-3xl mx-auto font-paragraph">
            كل ما تحتاج معرفته عن امتحان SAT
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-8 md:p-12 rounded-lg mb-12"
        >
          <h2 className="text-3xl font-heading text-foreground mb-6">عن امتحان SAT</h2>
          <p className="text-lg text-foreground leading-relaxed font-paragraph mb-6">
            SAT (اختبار التقييم الدراسي) هو اختبار موحد يستخدم على نطاق واسع للقبول في الجامعات في الولايات المتحدة ومعترف به عالمياً. يقيم الامتحان استعداد الطلاب للجامعة من خلال اختبار المهارات في القراءة والكتابة والرياضيات.
          </p>
          <p className="text-lg text-foreground leading-relaxed font-paragraph">
            يدار SAT من قبل مجلس الكلية (College Board) ومقبول من قبل جميع الجامعات والكليات في الولايات المتحدة، بالإضافة إلى العديد من المؤسسات في جميع أنحاء العالم.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-6 rounded-lg"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-light-red p-2 rounded-lg flex-shrink-0">
                <BookOpen size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-heading text-foreground">بنية الامتحان</h3>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph">
              يتكون SAT من قسمين رئيسيين: القراءة والكتابة، والرياضيات. الصيغة الرقمية تجعل الامتحان أكثر قدرة على التكيف وسهولة في الاستخدام.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-6 rounded-lg"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-light-red p-2 rounded-lg flex-shrink-0">
                <Clock size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-heading text-foreground">المدة</h3>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph">
              إجمالي وقت الامتحان حوالي ساعتين، مما يجعله أقصر بكثير من العديد من الاختبارات الموحدة الأخرى.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white p-6 rounded-lg"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-light-red p-2 rounded-lg flex-shrink-0">
                <Target size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-heading text-foreground">نظام التقييم</h3>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph">
              يتم تقييم SAT على مقياس من 400-1600، يجمع بين درجات القسمين (200-800 لكل منهما).
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white p-6 rounded-lg"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-light-red p-2 rounded-lg flex-shrink-0">
                <Award size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-heading text-foreground">الاعتراف</h3>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph">
              في إسرائيل، SAT معترف به رسمياً من قبل جميع الجامعات كبديل للامتحان السيكومتري.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

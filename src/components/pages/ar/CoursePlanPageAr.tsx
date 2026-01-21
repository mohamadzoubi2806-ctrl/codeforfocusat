import { motion } from 'framer-motion';
import { Clock, BookOpen, Target, Users, Calendar, CheckCircle } from 'lucide-react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import ContactBar from '../../layout/ContactBar';

export default function CoursePlanPageAr() {
  return (
    <div className="min-h-screen bg-background pb-20" dir="rtl">
      <Header lang="ar" />

      <main className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-heading text-foreground mb-4">
            خطة الدورة
          </h1>
          <p className="text-lg text-secondary max-w-3xl mx-auto font-paragraph">
            برنامج شامل من 50-60 ساعة مصمم لتحقيق أقصى نجاح في اختبار SAT
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-primary to-destructive text-white p-8 rounded-lg mb-12 text-center"
        >
          <Clock size={48} className="mx-auto mb-4" />
          <h2 className="text-3xl font-heading mb-2">50-60 ساعة</h2>
          <p className="text-lg font-paragraph">
            مدة الدورة الإجمالية
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-6 rounded-lg"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-light-red p-2 rounded-lg flex-shrink-0">
                <BookOpen size={24} className="text-primary" />
              </div>
              <h2 className="text-xl font-heading text-foreground">إتقان قسم الرياضيات</h2>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph mb-3">
              تغطية شاملة لجميع موضوعات الرياضيات في SAT بما في ذلك الجبر والهندسة والإحصاء والرياضيات المتقدمة.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-foreground font-paragraph">
                <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                <span>استراتيجيات وتقنيات حل المسائل</span>
              </li>
              <li className="flex items-start gap-2 text-foreground font-paragraph">
                <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                <span>أقسام الآلة الحاسبة وكيفية اتقان استعمال ال Desmos</span>
              </li>
              <li className="flex items-start gap-2 text-foreground font-paragraph">
                <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                <span>إدارة الوقت وتحسين الدقة</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-6 rounded-lg"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-light-red p-2 rounded-lg flex-shrink-0">
                <BookOpen size={24} className="text-primary" />
              </div>
              <h2 className="text-xl font-heading text-foreground">التميز في القراءة والكتابة</h2>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph mb-3">
              تطوير مهارات القراءة النقدية والكتابة الضرورية للنجاح في SAT.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-foreground font-paragraph">
                <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                <span>استراتيجيات الفهم القرائي</span>
              </li>
              <li className="flex items-start gap-2 text-foreground font-paragraph">
                <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                <span>قواعد النحو وعلامات الترقيم</span>
              </li>
              <li className="flex items-start gap-2 text-foreground font-paragraph">
                <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                <span>المفردات في السياق</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white p-6 rounded-lg"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-light-red p-2 rounded-lg flex-shrink-0">
                <Target size={24} className="text-primary" />
              </div>
              <h2 className="text-xl font-heading text-foreground">الاختبارات التدريبية والتحليل</h2>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph mb-3">
              اختبارات تدريبية كاملة منتظمة مع تحليل مفصل للأداء.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-foreground font-paragraph">
                <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                <span>اختبارات SAT الرسمية</span>
              </li>
              <li className="flex items-start gap-2 text-foreground font-paragraph">
                <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                <span>ملاحظات شخصية وخطة تحسين</span>
              </li>
              <li className="flex items-start gap-2 text-foreground font-paragraph">
                <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                <span>تتبع التقدم وتحديد نقاط الضعف</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white p-6 rounded-lg"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-light-red p-2 rounded-lg flex-shrink-0">
                <Users size={24} className="text-primary" />
              </div>
              <h2 className="text-xl font-heading text-foreground">التعلم في مجموعات صغيرة</h2>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph mb-3">
              جلسات تفاعلية مع مدرسين ذوي خبرة في مجموعات صغيرة.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-foreground font-paragraph">
                <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                <span>8-10 طلاب كحد أقصى في الفصل</span>
              </li>
              <li className="flex items-start gap-2 text-foreground font-paragraph">
                <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                <span>اهتمام ودعم فردي</span>
              </li>
              <li className="flex items-start gap-2 text-foreground font-paragraph">
                <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                <span>بيئة تعليمية تعاونية</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-white p-8 rounded-lg mb-8"
        >
          <div className="flex items-start gap-3 mb-4">
            <div className="bg-light-red p-2 rounded-lg flex-shrink-0">
              <Calendar size={24} className="text-primary" />
            </div>
            <h2 className="text-2xl font-heading text-foreground">هيكل الدورة</h2>
          </div>
          <div className="space-y-4 font-paragraph">
            <div className="border-r-4 border-primary pr-4">
              <h3 className="font-bold text-foreground mb-1">المرحلة 1: الأساسيات (15-20 ساعة)</h3>
              <p className="text-foreground">
                بناء أساس قوي مع المفاهيم الأساسية والاستراتيجيات الأولية والتعريف بشكل الاختبار.
              </p>
            </div>
            <div className="border-r-4 border-primary pr-4">
              <h3 className="font-bold text-foreground mb-1">المرحلة 2: تطوير المهارات (20-25 ساعة)</h3>
              <p className="text-foreground">
                تقنيات متقدمة، تعمق في موضوعات محددة، وممارسة مكثفة مع أسئلة SAT الحقيقية.
              </p>
            </div>
            <div className="border-r-4 border-primary pr-4">
              <h3 className="font-bold text-foreground mb-1">المرحلة 3: الاستعداد للاختبار (15-20 ساعة)</h3>
              <p className="text-foreground">
                اختبارات تدريبية كاملة، استراتيجيات الاختبار، إدارة الوقت، وجلسات المراجعة النهائية.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-light-red p-8 rounded-lg text-center"
        >
          <p className="text-lg text-foreground leading-relaxed font-paragraph">
            دورتنا الشاملة مصممة لمنحك المهارات والثقة والاستراتيجيات اللازمة للتفوق في SAT وتحقيق أهدافك الأكاديمية.
          </p>
        </motion.div>
      </main>

      <Footer lang="ar" />
      <ContactBar lang="ar" />
    </div>
  );
}

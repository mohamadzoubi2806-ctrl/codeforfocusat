import { motion } from 'framer-motion';
import { MessageCircle, BookOpen, Clock, Zap } from 'lucide-react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import ContactBar from '../../layout/ContactBar';

export default function HomePageAr() {
  return (
    <div dir="rtl" className="min-h-screen bg-background pb-20">
      <Header lang="ar" />

      <section className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-[100rem] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading text-foreground mb-6">
              مركز Focus للتعليم
            </h1>
            <p className="text-2xl md:text-3xl font-paragraph text-secondary mb-8">
              التحضير المهني لامتحان Digital SAT
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-8 md:p-12 rounded-lg mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-6">
              ما هو امتحان SAT؟
            </h2>
            <p className="text-lg text-foreground leading-relaxed font-paragraph mb-6">
              SAT هو امتحان قبول جامعي معترف به عالمياً. يتكون من قسمين: القراءة والكتابة، والرياضيات.
              يستغرق الامتحان حوالي ساعتين ويركز على المهارات الأساسية والتفكير المنطقي.
            </p>
            <p className="text-lg text-foreground leading-relaxed font-paragraph">
              في إسرائيل، SAT معترف به رسمياً من قبل جميع الجامعات كبديل معترف به للامتحان البسيخومتري.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-8 text-center">
              لماذا يختار الطلاب SAT
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-light-orange p-3 rounded-lg inline-block mb-4">
                  <Clock size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-heading text-foreground mb-3">أقصر من البسيخومتري</h3>
                <p className="text-base text-foreground font-paragraph">
                  ساعتان بدلاً من ثلاث ساعات ونصف
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-light-orange p-3 rounded-lg inline-block mb-4">
                  <Zap size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-heading text-foreground mb-3">أوضح وأكثر منطقية</h3>
                <p className="text-base text-foreground font-paragraph">
                  يركز على الفهم والمنطق بدلاً من الحيل والألغاز
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-light-orange p-3 rounded-lg inline-block mb-4">
                  <BookOpen size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-heading text-foreground mb-3">معترف به رسمياً</h3>
                <p className="text-base text-foreground font-paragraph">
                  مقبول في جميع الجامعات الإسرائيلية كبديل للبسيخومتري
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-light-orange p-8 md:p-12 rounded-lg text-center shadow-md"
          >
            <h2 className="text-3xl font-heading text-foreground mb-4">
              جاهز للبدء؟
            </h2>
            <p className="text-lg text-foreground font-paragraph mb-8 max-w-2xl mx-auto">
              احصل على استشارة مجانية لفهم كيف يمكننا مساعدتك في التحضير لامتحان SAT
            </p>
            <a
              href="https://wa.me/972523825927"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-heading text-lg hover:bg-accent transition-all hover:scale-105 shadow-md"
            >
              <MessageCircle size={20} />
              استشارة مجانية
            </a>
          </motion.div>
        </div>
      </section>

      <Footer lang="ar" />
      <ContactBar lang="ar" />
    </div>
  );
}
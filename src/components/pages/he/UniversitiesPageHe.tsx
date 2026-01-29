import { motion } from 'framer-motion';
import { GraduationCap, CheckCircle } from 'lucide-react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

export default function UniversitiesPageHe() {
  const universities = [
    'האוניברסיטה העברית בירושלים',
    'אוניברסיטת תל אביב',
    'הטכניון - מכון טכנולוגי לישראל',
    'אוניברסיטת בן-גוריון בנגב',
    'אוניברסיטת בר-אילן',
    'אוניברסיטת חיפה',
    'מכון ויצמן למדע',
    'אוניברסיטת רייכמן (IDC הרצליה)',
  ];

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
          <div className="flex justify-center mb-6">
            <div className="bg-light-red p-4 rounded-full">
              <GraduationCap size={48} className="text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading text-foreground mb-4">
            אוניברסיטאות שמקבלות SAT
          </h1>
          <p className="text-lg text-secondary max-w-3xl mx-auto font-paragraph">
            כל האוניברסיטאות הישראליות מכירות רשמית במבחן SAT כחלופה למבחן הפסיכומטרי
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-8 md:p-12 rounded-lg mb-12"
        >
          <h2 className="text-3xl font-heading text-foreground mb-6">
            אוניברסיטאות ישראליות
          </h2>
          <p className="text-lg text-foreground leading-relaxed font-paragraph mb-8">
            ה-SAT מוכר רשמית על ידי כל האוניברסיטאות בישראל כחלופה תקפה למבחן הפסיכומטרי.
            זה אומר שאתה יכול להגיש מועמדות לכל אוניברסיטה ישראלית באמצעות ציוני ה-SAT שלך.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {universities.map((university, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                className="flex items-center gap-3 p-4 bg-light-red rounded-lg"
              >
                <CheckCircle size={24} className="text-primary flex-shrink-0" />
                <span className="text-base font-paragraph text-foreground">{university}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-white p-8 rounded-lg"
        >
          <h2 className="text-2xl font-heading text-foreground mb-4">
            הכרה עולמית
          </h2>
          <p className="text-lg text-foreground leading-relaxed font-paragraph">
            מעבר לישראל, ה-SAT מתקבל על ידי אלפי אוניברסיטאות ברחבי העולם, כולל כל האוניברסיטאות
            בארצות הברית ומוסדות רבים באירופה, אסיה ואזורים אחרים. זה נותן לך
            גמישות להגיש מועמדות לאוניברסיטאות בינלאומיות אם תבחר ללמוד בחו"ל.
          </p>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

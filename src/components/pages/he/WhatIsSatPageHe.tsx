import { motion } from 'framer-motion';
import { BookOpen, Clock, Target, Award } from 'lucide-react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import { usePageTitle } from '../../../hooks/usePageTitle';

export default function WhatIsSatPageHe() {
  usePageTitle('What is SAT - Focus Teaching Center');
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
            מה זה מבחן SAT?
          </h1>
          <p className="text-lg text-secondary max-w-3xl mx-auto font-paragraph">
            כל מה שצריך לדעת על מבחן ה-SAT
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-8 md:p-12 rounded-lg mb-12"
        >
          <h2 className="text-3xl font-heading text-foreground mb-6">אודות ה-SAT</h2>
          <p className="text-lg text-foreground leading-relaxed font-paragraph mb-6">
            ה-SAT (Scholastic Assessment Test) הוא מבחן סטנדרטי הנמצא בשימוש נרחב לקבלה לאוניברסיטאות בארצות הברית ומוכר ברחבי העולם. המבחן בוחן את מוכנות הסטודנטים לאוניברסיטה על ידי בדיקת כישורים בקריאה, כתיבה ומתמטיקה.
          </p>
          <p className="text-lg text-foreground leading-relaxed font-paragraph">
            ה-SAT מנוהל על ידי ה-College Board ומתקבל על ידי כל האוניברסיטאות והמכללות בארצות הברית, כמו גם מוסדות רבים ברחבי העולם.
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
              <h3 className="text-xl font-heading text-foreground">מבנה המבחן</h3>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph">
              ה-SAT מורכב משני חלקים עיקריים: קריאה וכתיבה, ומתמטיקה. הפורמט הדיגיטלי הופך את המבחן לאדפטיבי וידידותי יותר למשתמש.
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
              <h3 className="text-xl font-heading text-foreground">משך זמן</h3>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph">
              זמן המבחן הכולל הוא כשעתיים, מה שהופך אותו לקצר משמעותית ממבחנים סטנדרטיים רבים אחרים.
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
              <h3 className="text-xl font-heading text-foreground">ציון</h3>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph">
              ה-SAT מדורג בסקאלה של 400-1600, המשלב את הציונים משני החלקים (200-800 כל אחד).
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
              <h3 className="text-xl font-heading text-foreground">הכרה</h3>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph">
              בישראל, ה-SAT מוכר רשמית על ידי כל האוניברסיטאות כחלופה למבחן הפסיכומטרי.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

import { motion } from 'framer-motion';
import { Clock, BookOpen, Target, Users, Calendar, CheckCircle } from 'lucide-react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

export default function CoursePlanPageHe() {
  return (
    <div className="min-h-screen bg-background pb-20" dir="rtl">
      <Header />

      <main className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-heading text-foreground mb-4">
            תכנית הקורס
          </h1>
          <p className="text-lg text-secondary max-w-3xl mx-auto font-paragraph">
            תוכנית מקיפה בת 50-60 שעות המיועדת למקסם את הצלחתך ב-SAT
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-primary to-destructive text-white p-8 rounded-lg mb-12 text-center"
        >
          <Clock size={48} className="mx-auto mb-4" />
          <h2 className="text-3xl font-heading mb-2">50-60 שעות</h2>
          <p className="text-lg font-paragraph">
            משך הקורס הכולל
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
              <h2 className="text-xl font-heading text-foreground">שליטה במדור המתמטיקה</h2>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph mb-3">
              כיסוי מקיף של כל נושאי המתמטיקה ב-SAT כולל אלגברה, גיאומטריה, סטטיסטיקה ומתמטיקה מתקדמת.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-foreground font-paragraph">
                <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                <span>אסטרטגיות וטכניקות לפתרון בעיות</span>
              </li>
              <li className="flex items-start gap-2 text-foreground font-paragraph">
                <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                <span>הכרת המחשבון ושליטה ב- Desmos</span>
              </li>
              <li className="flex items-start gap-2 text-foreground font-paragraph">
                <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                <span>ניהול זמן ושיפור דיוק</span>
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
              <h2 className="text-xl font-heading text-foreground">מצוינות בקריאה וכתיבה</h2>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph mb-3">
              פיתוח כישורי קריאה ביקורתית וכתיבה חיוניים להצלחה ב-SAT.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-foreground font-paragraph">
                <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                <span>אסטרטגיות הבנת הנקרא</span>
              </li>
              <li className="flex items-start gap-2 text-foreground font-paragraph">
                <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                <span>כללי דקדוק ופיסוק</span>
              </li>
              <li className="flex items-start gap-2 text-foreground font-paragraph">
                <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                <span>אוצר מילים בהקשר</span>
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
              <h2 className="text-xl font-heading text-foreground">מבחני תרגול וניתוח</h2>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph mb-3">
              מבחני תרגול מלאים קבועים עם ניתוח מפורט של הביצועים.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-foreground font-paragraph">
                <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                <span>מבחני SAT רשמיים</span>
              </li>
              <li className="flex items-start gap-2 text-foreground font-paragraph">
                <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                <span>משוב אישי ותוכנית שיפור</span>
              </li>
              <li className="flex items-start gap-2 text-foreground font-paragraph">
                <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                <span>מעקב אחר התקדמות וזיהוי אזורי חולשה</span>
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
              <h2 className="text-xl font-heading text-foreground">למידה בקבוצות קטנות</h2>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph mb-3">
              מפגשים אינטראקטיביים עם מדריכים מנוסים בקבוצות קטנות.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-foreground font-paragraph">
                <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                <span>מקסימום 8-10 תלמידים בכיתה</span>
              </li>
              <li className="flex items-start gap-2 text-foreground font-paragraph">
                <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                <span>תשומת לב ותמיכה אישית</span>
              </li>
              <li className="flex items-start gap-2 text-foreground font-paragraph">
                <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                <span>סביבת למידה שיתופית</span>
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
            <h2 className="text-2xl font-heading text-foreground">מבנה הקורס</h2>
          </div>
          <div className="space-y-4 font-paragraph">
            <div className="border-r-4 border-primary pr-4">
              <h3 className="font-bold text-foreground mb-1">שלב 1: יסודות (15-20 שעות)</h3>
              <p className="text-foreground">
                בניית בסיס חזק עם מושגי יסוד, אסטרטגיות בסיסיות והיכרות עם פורמט המבחן.
              </p>
            </div>
            <div className="border-r-4 border-primary pr-4">
              <h3 className="font-bold text-foreground mb-1">שלב 2: פיתוח מهארות (20-25 שעות)</h3>
              <p className="text-foreground">
                טכניקות מתקדמות, התעמקות בנושאים ספציפיים ותרגול נרחב עם שאלות SAT אמיתיות.
              </p>
            </div>
            <div className="border-r-4 border-primary pr-4">
              <h3 className="font-bold text-foreground mb-1">שלב 3: מוכנות למבחן (15-20 שעות)</h3>
              <p className="text-foreground">
                מבחני תרגול מלאים, אסטרטגיות לקיחת מבחן, ניהול זמן ומפגשי סיכום אחרונים.
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
            הקורס המקיף שלנו נועד לתת לך את המיומנויות, הביטחון והאסטרטגיות הדרושים למצוא ב-SAT ולהשיג את יעדיך האקדמיים.
          </p>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

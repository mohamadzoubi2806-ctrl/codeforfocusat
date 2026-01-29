import { motion } from 'framer-motion';
import { Clock, Zap, Globe, Calculator, RefreshCw, DollarSign, Calendar, Languages, BarChart } from 'lucide-react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

export default function ComparisonPageHe() {
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
            SAT מול פסיכומטרי
          </h1>
          <p className="text-lg text-secondary max-w-3xl mx-auto font-paragraph">
            השוו בין המבחנים וגלו מדוע ה-SAT עשוי להיות הבחירה הנכונה עבורכם
          </p>
        </motion.div>

        <div className="overflow-x-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <table className="w-full">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-6 py-4 text-right font-heading text-lg">מאפיין</th>
                  <th className="px-6 py-4 text-center font-heading text-lg">SAT</th>
                  <th className="px-6 py-4 text-center font-heading text-lg">פסיכומטרי</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-paragraph text-foreground">מדיניות מחשבון</td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-heading text-primary">מחשבון מותר לשימוש</span>
                  </td>
                  <td className="px-6 py-4 text-center font-paragraph text-secondary">אסור בהחלט - חישוב בראש בלבד</td>
                </tr>

                <tr>
                  <td className="px-6 py-4 font-paragraph text-foreground">סגנון מתמטיקה</td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-heading text-primary">מתמטיקה תיכונית ישירה</span>
                  </td>
                  <td className="px-6 py-4 text-center font-paragraph text-secondary">מבחן איי-קיו עם חידות וטריקים</td>
                </tr>

                <tr>
                  <td className="px-6 py-4 font-paragraph text-foreground">פרק מילולי (אנגלית)</td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-heading text-primary">אנגלית אקדמית - מעשית</span>
                  </td>
                  <td className="px-6 py-4 text-center font-paragraph text-secondary">אוצר מילים ארכאי ושירה</td>
                </tr>

                <tr>
                  <td className="px-6 py-4 font-paragraph text-foreground">משך המבחן</td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-heading text-primary">שעתיים ו-14 דקות - עם הפסקה</span>
                  </td>
                  <td className="px-6 py-4 text-center font-paragraph text-secondary">3.5 שעות - מרתון מתיש</td>
                </tr>

                <tr>
                  <td className="px-6 py-4 font-paragraph text-foreground">מספר פרקים</td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-heading text-primary">4 פרקים (2 אנגלית + 2 מתמטיקה)</span>
                  </td>
                  <td className="px-6 py-4 text-center font-paragraph text-secondary">8 פרקים + מטלת כתיבה</td>
                </tr>

                <tr>
                  <td className="px-6 py-4 font-paragraph text-foreground">כלי גרפי</td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-heading text-primary">Desmos (פתרון ויזואלי)</span>
                  </td>
                  <td className="px-6 py-4 text-center font-paragraph text-secondary">ללא כלים - רק דף ועט</td>
                </tr>

                <tr>
                  <td className="px-6 py-4 font-paragraph text-foreground">מטלת כתיבה (חיבור)</td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-heading text-primary">אין</span>
                  </td>
                  <td className="px-6 py-4 text-center font-paragraph text-secondary">חיבור אקדמי (30-35 דקות)</td>
                </tr>

                <tr>
                  <td className="px-6 py-4 font-paragraph text-foreground">פורמט המבחן</td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-heading text-primary">דיגיטלי ואדפטיבי</span>
                  </td>
                  <td className="px-6 py-4 text-center font-paragraph text-secondary">חוברת נייר סטטית</td>
                </tr>

                <tr>
                  <td className="px-6 py-4 font-paragraph text-foreground">עלות כוללת</td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-heading text-primary">$111</span>
                  </td>
                  <td className="px-6 py-4 text-center font-paragraph text-secondary">~645-665 ש"ח</td>
                </tr>

                <tr>
                  <td className="px-6 py-4 font-paragraph text-foreground">הכרה בינלאומית</td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-heading text-primary">גלובלי + כל האוניברסיטאות בישראל</span>
                  </td>
                  <td className="px-6 py-4 text-center font-paragraph text-secondary">ישראל בלבד - ללא ערך בחו"ל</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-6 rounded-lg"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-light-red p-2 rounded-lg flex-shrink-0">
                <Clock size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-heading text-foreground">קצר ויעיל יותר</h3>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph">
              רק שעתיים ו-14 דקות לעומת 3.5 שעות, מה שמפחית עייפות ומשפר את הריכוז.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white p-6 rounded-lg"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-light-red p-2 rounded-lg flex-shrink-0">
                <RefreshCw size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-heading text-foreground">היבחנות ללא הגבלה</h3>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph">
              גשו למבחן כמה פעמים שתרצו עם 7 מועדים בשנה לגמישות מקסימלית.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white p-6 rounded-lg"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-light-red p-2 rounded-lg flex-shrink-0">
                <BarChart size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-heading text-foreground">יתרון ה-Superscore</h3>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph">
              האוניברסיטאות משלבות את הציונים הטובים ביותר שלכם מכל המבחנים לציון הגבוה ביותר.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-white p-6 rounded-lg"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-light-red p-2 rounded-lg flex-shrink-0">
                <Globe size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-heading text-foreground">הזדמנויות גלובליות</h3>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph">
              מתקבל ביותר מ-4,000 אוניברסיטאות ברחבי העולם כולל ארה"ב, אירופה, אסיה וישראל.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-white p-6 rounded-lg"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-light-red p-2 rounded-lg flex-shrink-0">
                <Calculator size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-heading text-foreground">מחשבון מותר</h3>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph">
              השתמשו במחשבון לאורך כל פרק המתמטיקה, בניגוד לאיסור המוחלט בפסיכומטרי.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="bg-white p-6 rounded-lg"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-light-red p-2 rounded-lg flex-shrink-0">
                <Zap size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-heading text-foreground">פורמט דיגיטלי</h3>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph">
              מבחן ממוחשב מודרני עם תוצאות מהירות, בניגוד למבחני הנייר המסורתיים.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="bg-white p-6 rounded-lg"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-light-red p-2 rounded-lg flex-shrink-0">
                <Calendar size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-heading text-foreground">הכנה מהירה יותר</h3>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph">
              דורש בדרך כלל רק 3-6 חודשי הכנה ממוקדת לעומת 6-12 חודשים לפסיכומטרי.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="bg-white p-6 rounded-lg"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-light-red p-2 rounded-lg flex-shrink-0">
                <Languages size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-heading text-foreground">שליטה באנגלית</h3>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph">
              פתחו מיומנויות אנגלית אקדמית שילוו אתכם לאורך כל הקריירה האוניברסיטאית.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
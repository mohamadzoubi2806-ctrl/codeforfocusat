import { motion } from 'framer-motion';
import { Target, Brain, Users, TrendingUp } from 'lucide-react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

export default function WhyFocusPageHe() {
  const advantages = [
    {
      icon: Target,
      title: 'גישה ממוקדת',
      description: 'אנחנו מתרכזים במושגים והכישורים הליבה החשובים ביותר ל-SAT, מסירים הסחות דעת מיותרות ומגדילים את יעילות הלימוד שלך.',
    },
    {
      icon: Brain,
      title: 'הבנה עמוקה',
      description: 'שיטת ההוראה שלנו מדגישה הבנה אמיתית במקום שינון, עוזרת לך לפתח כישורי חשיבה ביקורתית שמשרתים אותך מעבר למבחן.',
    },
    {
      icon: Users,
      title: 'למידה מותאמת אישית',
      description: 'כיתות קטנות ותשומת לב אישית מבטיחים שכל תלמיד מקבל את התמיכה שהוא צריך כדי להצטיין בקצב שלו.',
    },
    {
      icon: TrendingUp,
      title: 'תוצאות מוכחות',
      description: 'התלמידים שלנו משיגים באופן עקבי ציונים גבוהים ומקבלים קבלה לאוניברסיטאות היעד שלהם דרך גישת ההכנה השיטתית שלנו.',
    },
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
          <h1 className="text-4xl md:text-5xl font-heading text-foreground mb-4">
            למה לבחור במרכז Focus?
          </h1>
          <p className="text-lg text-secondary max-w-3xl mx-auto font-paragraph">
            גישה ברורה ולוגית להכנה למבחן SAT
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-light-red p-2 rounded-lg flex-shrink-0">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h2 className="text-xl font-heading text-foreground">{advantage.title}</h2>
                </div>
                <p className="text-base text-foreground leading-relaxed font-paragraph">
                  {advantage.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white p-8 rounded-lg text-center"
        >
          <p className="text-lg text-foreground leading-relaxed font-paragraph">
            אנחנו מתמקדים בהבנה עמוקה במקום שינון, ובלוגיקה במקום טריקים. המטרה שלנו היא להפחית לחץ ומתח, ולבנות ביטחון דרך הבנה אמיתית של החומר.
          </p>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

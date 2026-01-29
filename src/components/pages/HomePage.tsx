import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, BookOpen, GraduationCap, TrendingUp, Users, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const content = {
  en: {
    hero: {
      title: 'Master the SAT with Focus',
      subtitle: 'Expert SAT preparation designed for Israeli students seeking global opportunities',
      cta: 'Get Started',
      ctaSecondary: 'Learn More'
    },
    stats: [
      { value: '1400+', label: 'Average Score' },
      { value: '500+', label: 'Students' },
      { value: '95%', label: 'Success Rate' },
      { value: '10+', label: 'Years Experience' }
    ],
    features: {
      title: 'Why Choose Focus SAT?',
      items: [
        {
          icon: GraduationCap,
          title: 'Expert Instructors',
          description: 'Learn from experienced educators who understand both SAT and Israeli matriculation systems'
        },
        {
          icon: BookOpen,
          title: 'Comprehensive Curriculum',
          description: 'Complete coverage of Math, Reading, and Writing with proven strategies'
        },
        {
          icon: TrendingUp,
          title: 'Proven Results',
          description: 'Our students consistently achieve scores above the national average'
        },
        {
          icon: Users,
          title: 'Small Class Sizes',
          description: 'Personalized attention with maximum 12 students per class'
        }
      ]
    },
    benefits: {
      title: 'SAT Opens Doors',
      subtitle: 'Recognized by top Israeli universities',
      items: [
        'Alternative to Psychometric exam',
        'Accepted by all major Israeli universities',
        'Global recognition for international studies',
        'Comprehensive assessment of academic abilities'
      ]
    },
    cta: {
      title: 'Ready to Begin Your SAT Journey?',
      subtitle: 'Join hundreds of successful students who achieved their dreams',
      button: 'Contact Us Today'
    }
  },
  he: {
    hero: {
      title: 'השתלטו על ה-SAT עם Focus',
      subtitle: 'הכנה מקצועית למבחן SAT המותאמת לתלמידים ישראלים המחפשים הזדמנויות גלובליות',
      cta: 'התחל עכשיו',
      ctaSecondary: 'למד עוד'
    },
    stats: [
      { value: '1400+', label: 'ציון ממוצע' },
      { value: '500+', label: 'תלמידים' },
      { value: '95%', label: 'שיעור הצלחה' },
      { value: '10+', label: 'שנות ניסיון' }
    ],
    features: {
      title: 'למה לבחור ב-Focus SAT?',
      items: [
        {
          icon: GraduationCap,
          title: 'מורים מומחים',
          description: 'למד ממורים מנוסים המבינים גם את ה-SAT וגם את מערכת הבגרות הישראלית'
        },
        {
          icon: BookOpen,
          title: 'תכנית לימודים מקיפה',
          description: 'כיסוי מלא של מתמטיקה, קריאה וכתיבה עם אסטרטגיות מוכחות'
        },
        {
          icon: TrendingUp,
          title: 'תוצאות מוכחות',
          description: 'התלמידים שלנו משיגים בעקביות ציונים מעל הממוצע הארצי'
        },
        {
          icon: Users,
          title: 'כיתות קטנות',
          description: 'תשומת לב אישית עם מקסימום 12 תלמידים בכיתה'
        }
      ]
    },
    benefits: {
      title: 'SAT פותח דלתות',
      subtitle: 'מוכר על ידי האוניברסיטאות המובילות בישראל',
      items: [
        'חלופה למבחן הפסיכומטרי',
        'מוכר על ידי כל האוניברסיטאות הגדולות בישראל',
        'הכרה גלובלית ללימודים בינלאומיים',
        'הערכה מקיפה של יכולות אקדמיות'
      ]
    },
    cta: {
      title: 'מוכנים להתחיל את מסע ה-SAT שלכם?',
      subtitle: 'הצטרפו למאות תלמידים מצליחים שהשיגו את חלומותיהם',
      button: 'צרו קשר היום'
    }
  },
  ar: {
    hero: {
      title: 'أتقن SAT مع Focus',
      subtitle: 'إعداد احترافي لامتحان SAT مصمم للطلاب الإسرائيليين الباحثين عن فرص عالمية',
      cta: 'ابدأ الآن',
      ctaSecondary: 'اعرف المزيد'
    },
    stats: [
      { value: '1400+', label: 'متوسط الدرجات' },
      { value: '500+', label: 'طالب' },
      { value: '95%', label: 'معدل النجاح' },
      { value: '10+', label: 'سنوات الخبرة' }
    ],
    features: {
      title: 'لماذا تختار Focus SAT؟',
      items: [
        {
          icon: GraduationCap,
          title: 'معلمون خبراء',
          description: 'تعلم من معلمين ذوي خبرة يفهمون نظام SAT والبجروت الإسرائيلي'
        },
        {
          icon: BookOpen,
          title: 'منهج شامل',
          description: 'تغطية كاملة للرياضيات والقراءة والكتابة مع استراتيجيات مثبتة'
        },
        {
          icon: TrendingUp,
          title: 'نتائج مثبتة',
          description: 'يحقق طلابنا باستمرار درجات أعلى من المتوسط الوطني'
        },
        {
          icon: Users,
          title: 'فصول صغيرة',
          description: 'اهتمام شخصي مع حد أقصى 12 طالبًا في الفصل'
        }
      ]
    },
    benefits: {
      title: 'SAT يفتح الأبواب',
      subtitle: 'معترف به من قبل أفضل الجامعات الإسرائيلية',
      items: [
        'بديل لامتحان البسيخومتري',
        'معترف به من قبل جميع الجامعات الإسرائيلية الكبرى',
        'اعتراف عالمي للدراسات الدولية',
        'تقييم شامل للقدرات الأكاديمية'
      ]
    },
    cta: {
      title: 'هل أنت مستعد لبدء رحلة SAT الخاصة بك؟',
      subtitle: 'انضم إلى مئات الطلاب الناجحين الذين حققوا أحلامهم',
      button: 'اتصل بنا اليوم'
    }
  }
};

export default function HomePage() {
  const { language, isRTL } = useLanguage();
  const t = content[language];

  return (
    <div className={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-orange-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <div className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
                <Award className="inline-block mr-2 h-4 w-4" />
                Premium SAT Preparation
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {t.hero.cta}
              </Link>
              <Link
                to="/what-is-sat"
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 border-2 border-orange-600"
              >
                {t.hero.ctaSecondary}
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          >
            {t.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.features.title}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.features.items.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">{t.benefits.title}</h2>
            <p className="text-xl text-orange-100">{t.benefits.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {t.benefits.items.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="h-6 w-6 text-orange-200 flex-shrink-0 mt-1" />
                <span className="text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.cta.title}</h2>
            <p className="text-xl text-gray-600 mb-8">{t.cta.subtitle}</p>
            <Link
              to="/contact"
              className="inline-block bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {t.cta.button}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

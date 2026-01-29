import { motion } from 'framer-motion';
import { Clock, Zap, Globe, Calculator, RefreshCw, DollarSign, Calendar, Languages, BarChart } from 'lucide-react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

export default function ComparisonPageAr() {
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
            SAT مقابل البسيخومتري
          </h1>
          <p className="text-lg text-secondary max-w-3xl mx-auto font-paragraph">
            قارن بين الامتحانين واكتشف لماذا قد يكون SAT مناسباً لك
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
                  <th className="px-6 py-4 text-right font-heading text-lg">الميزة</th>
                  <th className="px-6 py-4 text-center font-heading text-lg">SAT</th>
                  <th className="px-6 py-4 text-center font-heading text-lg">البسيخومتري</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-paragraph text-foreground">سياسة الآلة الحاسبة</td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-heading text-primary">يسمح باستخدام آلة حاسبة</span>
                  </td>
                  <td className="px-6 py-4 text-center font-paragraph text-secondary">ممنوعة تماماً - حساب ذهني فقط</td>
                </tr>

                <tr>
                  <td className="px-6 py-4 font-paragraph text-foreground">نمط الرياضيات</td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-heading text-primary">رياضيات ثانوية مباشرة</span>
                  </td>
                  <td className="px-6 py-4 text-center font-paragraph text-secondary">اختبار ذكاء بألغاز منطقية وحيل</td>
                </tr>

                <tr>
                  <td className="px-6 py-4 font-paragraph text-foreground">القسم اللفظي (للناطقين بالعربية)</td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-heading text-primary">إنجليزية أكاديمية - عملية ومفيدة</span>
                  </td>
                  <td className="px-6 py-4 text-center font-paragraph text-secondary">مفردات عربية قديمة وشعر</td>
                </tr>

                <tr>
                  <td className="px-6 py-4 font-paragraph text-foreground">مدة الامتحان</td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-heading text-primary">ساعتان و14 دقيقة- استراحة عشر دقائق بين كل فصلين</span>
                  </td>
                  <td className="px-6 py-4 text-center font-paragraph text-secondary">3.5 ساعة - ماراثون مرهق</td>
                </tr>

                <tr>
                  <td className="px-6 py-4 font-paragraph text-foreground">عدد الفصول</td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-heading text-primary">اربع فصول - فصلين انجليزي + فصلين رياضيات</span>
                  </td>
                  <td className="px-6 py-4 text-center font-paragraph text-secondary">ثمان فصول + مهمة كتابية</td>
                </tr>

                <tr>
                  <td className="px-6 py-4 font-paragraph text-foreground">أداة الرسم البياني</td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-heading text-primary">Desmos تحل الجبر والهندسة بصرياً</span>
                  </td>
                  <td className="px-6 py-4 text-center font-paragraph text-secondary">لا أدوات - ورقة وقلم فقط</td>
                </tr>

                <tr>
                  <td className="px-6 py-4 font-paragraph text-foreground">مهمة كتابية</td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-heading text-primary">لا يوجد</span>
                  </td>
                  <td className="px-6 py-4 text-center font-paragraph text-secondary">مهمة كتابية مدتها 35 دقيقة</td>
                </tr>

                <tr>
                  <td className="px-6 py-4 font-paragraph text-foreground">صيغة الامتحان</td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-heading text-primary">تكيفي - يتكيف مع مستواك</span>
                  </td>
                  <td className="px-6 py-4 text-center font-paragraph text-secondary">كتيب ورقي ثابت - جامد</td>
                </tr>

                <tr>
                  <td className="px-6 py-4 font-paragraph text-foreground">التكلفة الإجمالية</td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-heading text-primary">111$ </span>
                  </td>
                  <td className="px-6 py-4 text-center font-paragraph text-secondary">~645-665 شيكل </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 font-paragraph text-foreground">الاعتراف الدولي</td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-heading text-primary">مقبول في كل جامعات اسرائيل وصالح عالميا</span>
                  </td>
                  <td className="px-6 py-4 text-center font-paragraph text-secondary">إسرائيل فقط - عديم القيمة بالخارج</td>
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
              <h3 className="text-xl font-heading text-foreground">أقصر وأكثر كفاءة</h3>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph">
              ساعتان و14 دقيقة فقط مقارنة بـ 3.5 ساعة، مما يقلل التعب ويحسن التركيز.
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
              <h3 className="text-xl font-heading text-foreground">إعادة غير محدودة</h3>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph">
              خذ SAT بقدر ما تريد مع 7 مواعيد امتحان سنوياً لأقصى قدر من المرونة.
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
              <h3 className="text-xl font-heading text-foreground">ميزة Superscore</h3>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph">
              الجامعات تجمع أفضل درجاتك في الأقسام عبر عدة اختبارات لتحقيق أعلى نتيجة ممكنة.
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
              <h3 className="text-xl font-heading text-foreground">فرص عالمية</h3>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph">
              مقبول في أكثر من 4000 جامعة حول العالم في أمريكا وأوروبا وآسيا وغيرها.
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
              <h3 className="text-xl font-heading text-foreground">آلة حاسبة مسموحة</h3>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph">
              استخدم الآلة الحاسبة طوال قسم الرياضيات، على عكس سياسة عدم استخدامها في البسيخومتري.
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
              <h3 className="text-xl font-heading text-foreground">صيغة رقمية</h3>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph">
              اختبار حديث على الكمبيوتر مع نتائج فورية، على عكس الامتحانات الورقية التقليدية.
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
              <h3 className="text-xl font-heading text-foreground">تحضير أسرع</h3>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph">
              يتطلب عادة 3-6 أشهر فقط من التحضير المركز مقابل 6-12 شهراً للسيكومتري.
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
              <h3 className="text-xl font-heading text-foreground">إتقان الإنجليزية</h3>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph">
              طور مهارات إنجليزية قيمة تفيدك في مسيرتك الأكاديمية والمهنية بأكملها.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

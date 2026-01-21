import { motion } from 'framer-motion';
import { Target, Brain, Users, TrendingUp } from 'lucide-react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import ContactBar from '../../layout/ContactBar';

export default function WhyFocusPageAr() {
  const advantages = [
    {
      icon: Target,
      title: 'نهج مركز',
      description: 'نركز على المفاهيم والمهارات الأساسية الأكثر أهمية لامتحان SAT، مما يلغي الانحرافات غير الضرورية ويعظم كفاءة دراستك.',
    },
    {
      icon: Brain,
      title: 'فهم عميق',
      description: 'تؤكد طريقة التدريس لدينا على الفهم الحقيقي بدلاً من الحفظ، مما يساعدك على تطوير مهارات التفكير النقدي التي تخدمك بعد الامتحان.',
    },
    {
      icon: Users,
      title: 'تعليم شخصي',
      description: 'أحجام الصفوف الصغيرة والاهتمام الفردي يضمن أن كل طالب يحصل على الدعم الذي يحتاجه للتفوق بوتيرته الخاصة.',
    },
    {
      icon: TrendingUp,
      title: 'نتائج مثبتة',
      description: 'يحقق طلابنا باستمرار درجات عالية ويحصلون على القبول في جامعاتهم المستهدفة من خلال نهج التحضير المنهجي لدينا.',
    },
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-background pb-20">
      <Header lang="ar" />

      <main className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-heading text-foreground mb-4">
            لماذا تختار مركز Focus؟
          </h1>
          <p className="text-lg text-secondary max-w-3xl mx-auto font-paragraph">
            نهج واضح ومنطقي للتحضير لامتحان SAT
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
            نركز على الفهم العميق بدلاً من الحفظ، وعلى المنطق بدلاً من الحيل. هدفنا هو تقليل الضغط والتوتر، وبناء الثقة من خلال الفهم الحقيقي للمادة.
          </p>
        </motion.div>
      </main>

      <Footer lang="ar" />
      <ContactBar lang="ar" />
    </div>
  );
}

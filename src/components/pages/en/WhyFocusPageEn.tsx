import { motion } from 'framer-motion';
import { Target, Brain, Users, TrendingUp } from 'lucide-react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

export default function WhyFocusPageEn() {
  const advantages = [
    {
      icon: Target,
      title: 'Focused Approach',
      description: 'We concentrate on the core concepts and skills that matter most for the SAT, eliminating unnecessary distractions and maximizing your study efficiency.',
    },
    {
      icon: Brain,
      title: 'Deep Understanding',
      description: 'Our teaching method emphasizes genuine comprehension over memorization, helping you develop critical thinking skills that serve you beyond the exam.',
    },
    {
      icon: Users,
      title: 'Personalized Learning',
      description: 'Small class sizes and individualized attention ensure that each student receives the support they need to excel at their own pace.',
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Our students consistently achieve high scores and gain admission to their target universities through our systematic preparation approach.',
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <Header />

      <main className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-heading text-foreground mb-4">
            Why Choose Focus Center?
          </h1>
          <p className="text-lg text-secondary max-w-3xl mx-auto font-paragraph">
            A clear and logical approach to SAT preparation
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
            We focus on deep understanding instead of memorization, and on logic instead of tricks.
            Our goal is to reduce pressure and stress, and build confidence through genuine understanding of the material.
          </p>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

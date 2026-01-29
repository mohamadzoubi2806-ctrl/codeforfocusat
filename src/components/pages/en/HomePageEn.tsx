import { motion } from 'framer-motion';
import { MessageCircle, BookOpen, Clock, Zap } from 'lucide-react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

export default function HomePageEn() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <Header />

      <section className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-[100rem] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading text-foreground mb-6">
              Focus Teaching Center
            </h1>
            <p className="text-2xl md:text-3xl font-paragraph text-secondary mb-8">
              Professional SAT Digital Exam Preparation
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-8 md:p-12 rounded-lg mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-6">
              What is the SAT Exam?
            </h2>
            <p className="text-lg text-foreground leading-relaxed font-paragraph mb-6">
              The SAT is a globally recognized university admission exam. It consists of two sections: Reading and Writing, and Math.
              The exam takes approximately two hours and focuses on fundamental skills and logical reasoning.
            </p>
            <p className="text-lg text-foreground leading-relaxed font-paragraph">
              In Israel, the SAT is officially recognized by all universities as a recognized alternative to the psychometric exam.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-8 text-center">
              Why Students Choose SAT
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-light-orange p-3 rounded-lg inline-block mb-4">
                  <Clock size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-heading text-foreground mb-3">Shorter than Psychometric</h3>
                <p className="text-base text-foreground font-paragraph">
                  Two hours instead of three and a half hours
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-light-orange p-3 rounded-lg inline-block mb-4">
                  <Zap size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-heading text-foreground mb-3">Clearer and More Logical</h3>
                <p className="text-base text-foreground font-paragraph">
                  Focuses on understanding and logic instead of tricks and puzzles
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-light-orange p-3 rounded-lg inline-block mb-4">
                  <BookOpen size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-heading text-foreground mb-3">Officially Recognized</h3>
                <p className="text-base text-foreground font-paragraph">
                  Accepted at all Israeli universities as an alternative to psychometric
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
              Ready to Get Started?
            </h2>
            <p className="text-lg text-foreground font-paragraph mb-8 max-w-2xl mx-auto">
              Get a free consultation to understand how we can help you prepare for the SAT exam
            </p>
            <a
              href="https://wa.me/972523825927"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-heading text-lg hover:bg-accent transition-all hover:scale-105 shadow-md"
            >
              <MessageCircle size={20} />
              Free Consultation
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

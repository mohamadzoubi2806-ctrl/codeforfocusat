import { motion } from 'framer-motion';
import { BookOpen, Clock, Target, Award } from 'lucide-react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import { usePageTitle } from '../../../hooks/usePageTitle';

export default function WhatIsSatPageEn() {
  usePageTitle('What is SAT - Focus Teaching Center');
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
            What is the SAT Exam?
          </h1>
          <p className="text-lg text-secondary max-w-3xl mx-auto font-paragraph">
            Everything you need to know about the SAT exam
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-8 md:p-12 rounded-lg mb-12"
        >
          <h2 className="text-3xl font-heading text-foreground mb-6">About the SAT</h2>
          <p className="text-lg text-foreground leading-relaxed font-paragraph mb-6">
            The SAT (Scholastic Assessment Test) is a standardized test widely used for college admissions in the United States and recognized globally. The exam assesses students' readiness for college by testing skills in reading, writing, and mathematics.
          </p>
          <p className="text-lg text-foreground leading-relaxed font-paragraph">
            The SAT is administered by the College Board and is accepted by all universities and colleges in the United States, as well as many institutions worldwide.
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
              <h3 className="text-xl font-heading text-foreground">Exam Structure</h3>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph">
              The SAT consists of two main sections: Reading and Writing, and Math. The digital format makes the exam more adaptive and user-friendly.
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
              <h3 className="text-xl font-heading text-foreground">Duration</h3>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph">
              The total exam time is approximately 2 hours, making it significantly shorter than many other standardized tests.
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
              <h3 className="text-xl font-heading text-foreground">Scoring</h3>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph">
              The SAT is scored on a scale of 400-1600, combining the scores from the two sections (200-800 each).
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
              <h3 className="text-xl font-heading text-foreground">Recognition</h3>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph">
              In Israel, the SAT is officially recognized by all universities as an alternative to the psychometric exam.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

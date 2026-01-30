import { motion } from 'framer-motion';
import { Clock, BookOpen, Target, Users, Calendar, CheckCircle } from 'lucide-react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import { usePageTitle } from '../../../hooks/usePageTitle';

export default function CoursePlanPageEn() {
  usePageTitle('Course Plan - Focus Teaching Center');
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
            Course Plan
          </h1>
          <p className="text-lg text-secondary max-w-3xl mx-auto font-paragraph">
            A comprehensive 50-60 hour program designed to maximize your SAT success
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-primary to-destructive text-white p-8 rounded-lg mb-12 text-center"
        >
          <Clock size={48} className="mx-auto mb-4" />
          <h2 className="text-3xl font-heading mb-2">50-60 Hours</h2>
          <p className="text-lg font-paragraph">
            Total Course Duration
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
              <h2 className="text-xl font-heading text-foreground">Math Section Mastery</h2>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph mb-3">
              Comprehensive coverage of all SAT math topics including algebra, geometry, statistics, and advanced mathematics.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-foreground font-paragraph">
                <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                <span>Problem-solving strategies and techniques</span>
              </li>
              <li className="flex items-start gap-2 text-foreground font-paragraph">
                <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                <span>Calculator Features & Mastering Desmos</span>
              </li>
              <li className="flex items-start gap-2 text-foreground font-paragraph">
                <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                <span>Time management and accuracy improvement</span>
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
              <h2 className="text-xl font-heading text-foreground">Reading & Writing Excellence</h2>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph mb-3">
              Develop critical reading and writing skills essential for SAT success.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-foreground font-paragraph">
                <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                <span>Reading comprehension strategies</span>
              </li>
              <li className="flex items-start gap-2 text-foreground font-paragraph">
                <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                <span>Grammar and punctuation rules</span>
              </li>
              <li className="flex items-start gap-2 text-foreground font-paragraph">
                <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                <span>Vocabulary in context</span>
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
              <h2 className="text-xl font-heading text-foreground">Practice Tests & Analysis</h2>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph mb-3">
              Regular full-length practice tests with detailed performance analysis.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-foreground font-paragraph">
                <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                <span>Official SAT practice tests</span>
              </li>
              <li className="flex items-start gap-2 text-foreground font-paragraph">
                <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                <span>Personalized feedback and improvement plan</span>
              </li>
              <li className="flex items-start gap-2 text-foreground font-paragraph">
                <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                <span>Track progress and identify weak areas</span>
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
              <h2 className="text-xl font-heading text-foreground">Small Group Learning</h2>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph mb-3">
              Interactive sessions with experienced instructors in small groups.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-foreground font-paragraph">
                <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                <span>Maximum 8-10 students per class</span>
              </li>
              <li className="flex items-start gap-2 text-foreground font-paragraph">
                <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                <span>Individual attention and support</span>
              </li>
              <li className="flex items-start gap-2 text-foreground font-paragraph">
                <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                <span>Collaborative learning environment</span>
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
            <h2 className="text-2xl font-heading text-foreground">Course Structure</h2>
          </div>
          <div className="space-y-4 font-paragraph">
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-bold text-foreground mb-1">Phase 1: Foundations (15-20 hours)</h3>
              <p className="text-foreground">
                Build a strong foundation with core concepts, basic strategies, and introduction to test format.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-bold text-foreground mb-1">Phase 2: Skill Development (20-25 hours)</h3>
              <p className="text-foreground">
                Advanced techniques, topic-specific deep dives, and extensive practice with real SAT questions.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-bold text-foreground mb-1">Phase 3: Test Readiness (15-20 hours)</h3>
              <p className="text-foreground">
                Full-length practice tests, test-taking strategies, time management, and final review sessions.
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
            Our comprehensive course is designed to give you the skills, confidence, and strategies needed to excel on the SAT and achieve your academic goals.
          </p>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

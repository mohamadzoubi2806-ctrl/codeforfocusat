import { motion } from 'framer-motion';
import { Clock, Zap, Globe, Calculator, RefreshCw, DollarSign, Calendar, Languages, BarChart } from 'lucide-react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

export default function ComparisonPageEn() {
  return (
    <div dir="ltr" className="min-h-screen bg-background pb-20">
      <Header />

      <main className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-heading text-foreground mb-4">
            SAT vs. Psychometric
          </h1>
          <p className="text-lg text-secondary max-w-3xl mx-auto font-paragraph">
            Compare the two exams and discover why the SAT might be the right choice for you.
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
                  <th className="px-6 py-4 text-left font-heading text-lg">Feature</th>
                  <th className="px-6 py-4 text-center font-heading text-lg">SAT</th>
                  <th className="px-6 py-4 text-center font-heading text-lg">Psychometric</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-paragraph text-foreground">Calculator Policy</td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-heading text-primary">Calculator Allowed (Desmos)</span>
                  </td>
                  <td className="px-6 py-4 text-center font-paragraph text-secondary">Strictly Forbidden - Mental Math Only</td>
                </tr>

                <tr>
                  <td className="px-6 py-4 font-paragraph text-foreground">Math Style</td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-heading text-primary">Direct High School Math</span>
                  </td>
                  <td className="px-6 py-4 text-center font-paragraph text-secondary">IQ Test with Logic Puzzles & Tricks</td>
                </tr>

                <tr>
                  <td className="px-6 py-4 font-paragraph text-foreground">Verbal Section</td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-heading text-primary">Academic English - Practical</span>
                  </td>
                  <td className="px-6 py-4 text-center font-paragraph text-secondary">Archaic Vocabulary & Poetry</td>
                </tr>

                <tr>
                  <td className="px-6 py-4 font-paragraph text-foreground">Duration</td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-heading text-primary">2 Hours 14 Min - With Break</span>
                  </td>
                  <td className="px-6 py-4 text-center font-paragraph text-secondary">3.5 Hours - Exhausting Marathon</td>
                </tr>

                <tr>
                  <td className="px-6 py-4 font-paragraph text-foreground">Sections</td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-heading text-primary">4 Modules (2 Eng + 2 Math)</span>
                  </td>
                  <td className="px-6 py-4 text-center font-paragraph text-secondary">8 Sections + Writing Task</td>
                </tr>

                <tr>
                  <td className="px-6 py-4 font-paragraph text-foreground">Graphing Tool</td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-heading text-primary">Desmos (Visual Solving)</span>
                  </td>
                  <td className="px-6 py-4 text-center font-paragraph text-secondary">No Tools - Pen & Paper Only</td>
                </tr>

                <tr>
                  <td className="px-6 py-4 font-paragraph text-foreground">Writing Task (Essay)</td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-heading text-primary">None</span>
                  </td>
                  <td className="px-6 py-4 text-center font-paragraph text-secondary">Academic Essay (30-35 mins)</td>
                </tr>

                <tr>
                  <td className="px-6 py-4 font-paragraph text-foreground">Format</td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-heading text-primary">Digital & Adaptive</span>
                  </td>
                  <td className="px-6 py-4 text-center font-paragraph text-secondary">Static Paper Booklet</td>
                </tr>

                <tr>
                  <td className="px-6 py-4 font-paragraph text-foreground">Total Cost</td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-heading text-primary">$111</span>
                  </td>
                  <td className="px-6 py-4 text-center font-paragraph text-secondary">~645-665 NIS</td>
                </tr>

                <tr>
                  <td className="px-6 py-4 font-paragraph text-foreground">Recognition</td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-heading text-primary">Global + All Israeli Universities</span>
                  </td>
                  <td className="px-6 py-4 text-center font-paragraph text-secondary">Israel Only - No Global Value</td>
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
              <h3 className="text-xl font-heading text-foreground">Shorter & Efficient</h3>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph">
              Only 2 hours and 14 minutes compared to 3.5 hours, reducing fatigue and improving focus.
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
              <h3 className="text-xl font-heading text-foreground">Unlimited Retakes</h3>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph">
              Take the SAT as many times as you want with 7 test dates per year for maximum flexibility.
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
              <h3 className="text-xl font-heading text-foreground">Superscore Advantage</h3>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph">
              Universities combine your best section scores across multiple tests to get the highest possible total.
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
              <h3 className="text-xl font-heading text-foreground">Global Opportunities</h3>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph">
              Accepted at over 4,000 universities worldwide including the US, Europe, Asia, and Israel.
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
              <h3 className="text-xl font-heading text-foreground">Calculator Allowed</h3>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph">
              Use the calculator throughout the Math section, unlike the strict no-calculator policy in Psychometric.
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
              <h3 className="text-xl font-heading text-foreground">Digital Format</h3>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph">
              A modern computer-based test with faster results, unlike traditional paper-and-pencil exams.
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
              <h3 className="text-xl font-heading text-foreground">Faster Preparation</h3>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph">
              Typically requires only 3-6 months of focused prep compared to 6-12 months for Psychometric.
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
              <h3 className="text-xl font-heading text-foreground">English Mastery</h3>
            </div>
            <p className="text-base text-foreground leading-relaxed font-paragraph">
              Develop valuable academic English skills that serve you throughout your university career.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
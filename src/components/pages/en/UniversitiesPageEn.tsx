import { motion } from 'framer-motion';
import { GraduationCap, CheckCircle } from 'lucide-react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import ContactBar from '../../layout/ContactBar';

export default function UniversitiesPageEn() {
  const universities = [
    'Hebrew University of Jerusalem',
    'Tel Aviv University',
    'Technion - Israel Institute of Technology',
    'Ben-Gurion University of the Negev',
    'Bar-Ilan University',
    'University of Haifa',
    'Weizmann Institute of Science',
    'Reichman University (IDC Herzliya)',
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <Header lang="en" />

      <main className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-light-red p-4 rounded-full">
              <GraduationCap size={48} className="text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading text-foreground mb-4">
            Universities Accepting SAT
          </h1>
          <p className="text-lg text-secondary max-w-3xl mx-auto font-paragraph">
            All Israeli universities officially recognize the SAT as an alternative to the psychometric exam
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-8 md:p-12 rounded-lg mb-12"
        >
          <h2 className="text-3xl font-heading text-foreground mb-6">
            Israeli Universities
          </h2>
          <p className="text-lg text-foreground leading-relaxed font-paragraph mb-8">
            The SAT is officially recognized by all universities in Israel as a valid alternative to the psychometric exam.
            This means you can apply to any Israeli university using your SAT scores.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {universities.map((university, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                className="flex items-center gap-3 p-4 bg-light-red rounded-lg"
              >
                <CheckCircle size={24} className="text-primary flex-shrink-0" />
                <span className="text-base font-paragraph text-foreground">{university}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-white p-8 rounded-lg"
        >
          <h2 className="text-2xl font-heading text-foreground mb-4">
            Global Recognition
          </h2>
          <p className="text-lg text-foreground leading-relaxed font-paragraph">
            Beyond Israel, the SAT is accepted by thousands of universities worldwide, including all universities
            in the United States and many institutions in Europe, Asia, and other regions. This gives you the
            flexibility to apply to international universities if you choose to study abroad.
          </p>
        </motion.div>
      </main>

      <Footer lang="en" />
      <ContactBar lang="en" />
    </div>
  );
}

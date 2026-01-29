import { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calculator, ExternalLink, X } from 'lucide-react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import PageTitle from '../../layout/PageTitle';

// 1. Define the shape of our data locally
type University = {
  id: number;
  name: string;
  nameEn: string; // Used for logic
  description: string;
};

export default function UniversitiesPage() {
  // 2. Static List with English translations
  const universitiesData: University[] = [
    { 
      id: 1, 
      name: 'Technion - Israel Institute of Technology', 
      nameEn: 'technion',
      description: 'The Technion focuses heavily on Math and Physics scores. Admission relies on the Psychometric exam (or SAT) and scientific Bagrut (matriculation) grades.' 
    },
    { 
      id: 2, 
      name: 'Tel Aviv University', 
      nameEn: 'tel aviv',
      description: 'Tel Aviv University requires a Psychometric or SAT score in addition to a Bagrut average. They offer special tracks for international students.' 
    },
    { 
      id: 3, 
      name: 'The Hebrew University of Jerusalem', 
      nameEn: 'hebrew',
      description: 'Considered one of the top universities, Hebrew University accepts the SAT as a full alternative to the Psychometric exam for most majors.' 
    },
    { 
      id: 4, 
      name: 'Ben-Gurion University of the Negev', 
      nameEn: 'ben-gurion',
      description: 'Located in the Negev, known for Engineering and Sciences. They accept the SAT and calculate it into the general admission formula.' 
    },
    { 
      id: 5, 
      name: 'Bar-Ilan University', 
      nameEn: 'bar-ilan',
      description: 'Features diverse academic programs and accepts the SAT. Sometimes requires Hebrew placement exams depending on the track.' 
    },
    { 
      id: 6, 
      name: 'University of Haifa', 
      nameEn: 'haifa',
      description: 'The University of Haifa accepts the SAT and offers a diverse learning environment. Admission requirements vary by faculty.' 
    },
  ];

  const [selectedUniversity, setSelectedUniversity] = useState<University | null>(null);
  const [mathScore, setMathScore] = useState(700);
  const [englishScore, setEnglishScore] = useState(700);

  // --- Logic Functions ---

  const calculateAdmissionScore = (mathScore: number, englishScore: number): number => {
    // Standard Formula: (2/3 Math) + (1/3 English)
    const weightedScore = (2 / 3) * mathScore + (1 / 3) * englishScore;
    return Math.round(weightedScore);
  };

  const getUniversityUrl = (nameEn: string): string | null => {
    const name = nameEn.toLowerCase();
    if (name.includes('technion')) return 'https://int.technion.ac.il/programs/bsc-in-engineering-1st-year-in-english/admission-and-costs/';
    if (name.includes('hebrew')) return 'https://info-overseas.huji.ac.il/admission-requirements-bachelor%E2%80%99s-degrees';
    if (name.includes('tel aviv')) return 'https://en-go.tau.ac.il/General-Requirements';
    if (name.includes('ben-gurion')) return 'https://www.bgu.ac.il/en/study/content-pages/application-process/';
    if (name.includes('bar-ilan') || name.includes('bar ilan')) return 'https://biuinternational.com/admissions/admission-requirements-undergraduate-studies/';
    if (name.includes('haifa')) return 'https://www.haifa.ac.il/2022/05/17/supplement/?lang=en';
    return null;
  };

  const getSekemCalculatorUrl = (nameEn: string): string | null => {
    const name = nameEn.toLowerCase();
    if (name.includes('technion')) return 'https://admissions.technion.ac.il/calculator/';
    if (name.includes('hebrew')) return 'https://info.huji.ac.il/chances';
    if (name.includes('tel aviv')) return 'https://go.tau.ac.il/calc';
    if (name.includes('ben-gurion')) return 'https://bgu4u.bgu.ac.il/html/average_calc/';
    if (name.includes('bar-ilan')) return 'https://cal.biu.ac.il/';
    if (name.includes('haifa')) return 'https://applicants.haifa.ac.il/adm_chances';
    return null;
  };

  return (
    // Changed dir="rtl" to dir="ltr" for English layout
    <div className="min-h-screen bg-background pb-20" dir="ltr">
      <Header />
      
      <main className="w-full">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24">
          <div className="max-w-[100rem] mx-auto px-4 md:px-8">
            <PageTitle
              title="Israeli Universities & SAT Admission"
              subtitle="Explore how leading Israeli universities use SAT scores for admission"
            />
          </div>
        </section>

        {/* Universities Grid */}
        <section className="w-full py-16 md:py-24">
          <div className="max-w-[100rem] mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {universitiesData.map((university, index) => {
                const admissionUrl = getUniversityUrl(university.nameEn);
                return (
                  <motion.div
                    key={university.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200 flex flex-col"
                  >
                    {/* Top Link */}
                    {admissionUrl && (
                      <a
                        href={admissionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-heading text-primary hover:text-destructive underline mb-4 break-all flex items-center gap-1 justify-end"
                      >
                         <ExternalLink size={14} /> Official Link
                      </a>
                    )}

                    {/* Icon */}
                    <div className="mb-4 h-20 flex items-center justify-center bg-gray-50 rounded-lg">
                       <GraduationCap size={40} className="text-secondary" />
                    </div>
                    
                    <div className="mb-4 text-center">
                      <h3 className="text-xl font-heading text-foreground">
                        {university.name}
                      </h3>
                    </div>

                    <p className="text-sm text-secondary line-clamp-3 mb-4 flex-grow font-paragraph text-center">
                      {university.description}
                    </p>

                    <button 
                      onClick={() => setSelectedUniversity(university)}
                      className="w-full bg-primary text-primary-foreground py-2 rounded font-heading hover:bg-destructive transition-colors flex items-center justify-center gap-2"
                    >
                      <Calculator size={18} />
                      View Details & Calculate
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Detailed View Modal */}
        {selectedUniversity && (
          <section className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6 border-b pb-4">
                  <h2 className="text-3xl font-heading text-foreground">
                    {selectedUniversity.name}
                  </h2>
                  <button
                    onClick={() => setSelectedUniversity(null)}
                    className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <X size={24} className="text-secondary" />
                  </button>
                </div>

                <div className="mb-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <p className="text-sm text-secondary mb-1 font-paragraph">Approximate Psychometric Score Formula</p>
                  <p className="text-sm text-foreground font-heading">
                    (2/3 × Math) + (1/3 × English) = Score
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-heading text-foreground mb-4">
                    Psychometric Score Calculator
                  </h3>
                  
                  <div className="space-y-6">
                    {/* Math Slider */}
                    <div>
                      <label className="block text-sm font-heading text-foreground mb-2">
                        SAT Math Score: <span className="text-primary">{mathScore}</span>
                      </label>
                      <input
                        type="range"
                        min="200"
                        max="800"
                        value={mathScore}
                        onChange={(e) => setMathScore(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                      />
                      <div className="flex justify-between text-xs text-secondary mt-1 font-sans">
                        <span>200</span>
                        <span>800</span>
                      </div>
                    </div>

                    {/* English Slider */}
                    <div>
                      <label className="block text-sm font-heading text-foreground mb-2">
                        SAT English Score: <span className="text-primary">{englishScore}</span>
                      </label>
                      <input
                        type="range"
                        min="200"
                        max="800"
                        value={englishScore}
                        onChange={(e) => setEnglishScore(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                      />
                      <div className="flex justify-between text-xs text-secondary mt-1 font-sans">
                        <span>200</span>
                        <span>800</span>
                      </div>
                    </div>

                    {/* Result Box */}
                    <div className="p-6 bg-secondary/5 rounded-lg border-2 border-primary text-center">
                      <p className="text-sm text-secondary mb-2 font-paragraph">Approximate Psychometric Score</p>
                      <p className="text-5xl font-heading text-primary">
                        {calculateAdmissionScore(mathScore, englishScore)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* External Links */}
                {(getUniversityUrl(selectedUniversity.nameEn) || getSekemCalculatorUrl(selectedUniversity.nameEn)) && (
                  <div className="mt-8 pt-6 border-t">
                    <p className="text-lg font-heading text-foreground mb-4">Official Links</p>
                    <div className="flex flex-col gap-3">
                      {getUniversityUrl(selectedUniversity.nameEn) && (
                        <a
                          href={getUniversityUrl(selectedUniversity.nameEn)!}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors text-primary font-heading"
                        >
                          <ExternalLink size={20} />
                          Visit Official Admission Page
                        </a>
                      )}
                      {getSekemCalculatorUrl(selectedUniversity.nameEn) && (
                        <a
                          href={getSekemCalculatorUrl(selectedUniversity.nameEn)!}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors text-primary font-heading"
                        >
                          <Calculator size={20} />
                          Official Admission Calculator (Sekem)
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
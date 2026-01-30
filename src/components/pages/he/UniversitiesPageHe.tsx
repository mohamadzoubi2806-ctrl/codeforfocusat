import { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calculator, ExternalLink, X } from 'lucide-react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import PageTitle from '../../layout/PageTitle';
import { usePageTitle } from '../../../hooks/usePageTitle';

// 1. Define the shape of our data locally
type University = {
  id: number;
  name: string;
  nameEn: string; // Used for logic
  description: string;
};

export default function UniversitiesPageHe() {
  usePageTitle('Universities - Focus Teaching Center');
  // 2. Static List with Hebrew translations
  const universitiesData: University[] = [
    { 
      id: 1, 
      name: 'הטכניון - מכון טכנולוגי לישראל', 
      nameEn: 'technion',
      description: 'הטכניון שם דגש רב על ציוני מתמטיקה ופיזיקה. הקבלה מתבססת על ציון פסיכומטרי (או SAT) וציוני בגרות במקצועות מדעיים.' 
    },
    { 
      id: 2, 
      name: 'אוניברסיטת תל אביב', 
      nameEn: 'tel aviv',
      description: 'אוניברסיטת תל אביב דורשת ציון פסיכומטרי או SAT בנוסף לממוצע בגרות. קיימים מסלולים מיוחדים גם לסטודנטים בינלאומיים.' 
    },
    { 
      id: 3, 
      name: 'האוניברסיטה העברית בירושלים', 
      nameEn: 'hebrew',
      description: 'נחשבת לאחת האוניברסיטאות המובילות, האוניברסיטה העברית מקבלת את ה-SAT כתחליף מלא לפסיכומטרי ברוב החוגים.' 
    },
    { 
      id: 4, 
      name: 'אוניברסיטת בן-גוריון בנגב', 
      nameEn: 'ben-gurion',
      description: 'ממוקמת בנגב וידועה בפקולטות להנדסה ומדעי הטבע. מקבלת ציון SAT ומשקללת אותו בנוסחת הקבלה הכללית (סכם).' 
    },
    { 
      id: 5, 
      name: 'אוניברסיטת בר-אילן', 
      nameEn: 'bar-ilan',
      description: 'מציעה מגוון תוכניות לימוד ומקבלת ציוני SAT. לעיתים נדרשים מבחני מיון בעברית (יע"ל) בהתאם למסלול הנבחר.' 
    },
    { 
      id: 6, 
      name: 'אוניברסיטת חיפה', 
      nameEn: 'haifa',
      description: 'אוניברסיטת חיפה מקבלת SAT ומציעה סביבת לימודים מגוונת. תנאי הקבלה משתנים בין הפקולטות השונות.' 
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
    if (name.includes('technion')) return 'https://admissions.technion.ac.il/';
    if (name.includes('hebrew')) return 'https://info.huji.ac.il/';
    if (name.includes('tel aviv')) return 'https://go.tau.ac.il/';
    if (name.includes('ben-gurion')) return 'https://in.bgu.ac.il/welcome/Pages/default.aspx';
    if (name.includes('bar-ilan')) return 'https://www.biu.ac.il/admissions';
    if (name.includes('haifa')) return 'https://www.haifa.ac.il/';
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
    // Set direction to RTL for Hebrew
    <div className="min-h-screen bg-background pb-20" dir="rtl">
      <Header />
      
      <main className="w-full">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24">
          <div className="max-w-[100rem] mx-auto px-4 md:px-8">
            <PageTitle
              title="אוניברסיטאות בישראל וקבלת מבחן SAT"
              subtitle="גלה כיצד האוניברסיטאות המובילות בישראל משתמשות בציוני SAT בתהליך הקבלה"
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
                        dir="ltr" // Force LTR for the link icon alignment if needed, or keep inherited
                      >
                         <ExternalLink size={14} /> אתר רשמי
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
                      פרטים וחישוב סיכויים
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
                  <p className="text-sm text-secondary mb-1 font-paragraph">נוסחת המרה משוערת לציון פסיכומטרי</p>
                  <p className="text-sm text-foreground font-heading" dir="ltr">
                    (2/3 × Math) + (1/3 × English) = Score
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-heading text-foreground mb-4">
                    מחשבון המרת ציון (הערכה)
                  </h3>
                  
                  <div className="space-y-6">
                    {/* Math Slider */}
                    <div>
                      <label className="block text-sm font-heading text-foreground mb-2">
                        ציון כמותי (SAT): <span className="text-primary">{mathScore}</span>
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
                        ציון אנגלית (SAT): <span className="text-primary">{englishScore}</span>
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
                      <p className="text-sm text-secondary mb-2 font-paragraph">ציון פסיכומטרי משוער</p>
                      <p className="text-5xl font-heading text-primary">
                        {calculateAdmissionScore(mathScore, englishScore)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* External Links */}
                {(getUniversityUrl(selectedUniversity.nameEn) || getSekemCalculatorUrl(selectedUniversity.nameEn)) && (
                  <div className="mt-8 pt-6 border-t">
                    <p className="text-lg font-heading text-foreground mb-4">קישורים רשמיים</p>
                    <div className="flex flex-col gap-3">
                      {getUniversityUrl(selectedUniversity.nameEn) && (
                        <a
                          href={getUniversityUrl(selectedUniversity.nameEn)!}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors text-primary font-heading"
                        >
                          <ExternalLink size={20} />
                          מעבר לאתר הרישום הרשמי
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
                          מחשבון סיכויי קבלה רשמי (סכם)
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
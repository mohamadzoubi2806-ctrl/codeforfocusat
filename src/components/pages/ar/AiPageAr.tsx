// import { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Send, Bot, User, Sparkles, AlertCircle, Mail, X } from 'lucide-react';
// import Header from '../../layout/Header';
// import Footer from '../../layout/Footer';

// // ✅ YOUR API KEY
// const API_KEY = "AIzaSyDyETJgktJTtUHUWsXx8ZB8ni7Ju3I9ka4";
// // ✅ YOUR FORMSPREE ID
// const FORM_ID = "xaqqwkbz";

// type Message = {
//   role: 'user' | 'assistant' | 'error';
//   content: string;
// };

// export default function AiPageAr() {
//   const [messages, setMessages] = useState<Message[]>([
//     { role: 'assistant', content: 'مرحباً! أنا مساعد Focus الذكي. يمكنني مساعدتك في وضع جدول دراسي، شرح مسائل رياضية، أو الإجابة عن تفاصيل التسجيل.' }
//   ]);
//   const [input, setInput] = useState('');
//   const [loading, setLoading] = useState(false);
  
//   // --- NEW STATE FOR CONTACT POPUP ---
//   const [showContactModal, setShowContactModal] = useState(false);
//   const [studentContact, setStudentContact] = useState('');
//   const [sendingReport, setSendingReport] = useState(false);
//   const [reportSent, setReportSent] = useState(false);
//   // -----------------------------------

//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   // --- FUNCTION 1: Open the Popup ---
//   const handleOpenReport = () => {
//     if (messages.length <= 1) return;
//     setShowContactModal(true);
//   };

//   // --- FUNCTION 2: Actually Send the Email ---
//   const submitReportToTeacher = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!studentContact.trim()) return;

//     setSendingReport(true);

//     // 1. Prepare the Data
//     const chatHistory = messages.map(m => 
//       `${m.role.toUpperCase()}: ${m.content}`
//     ).join('\n-------------------\n');

//     try {
//       // 2. Send to Formspree
//       await fetch(`https://formspree.io/f/${FORM_ID}`, {
//         method: 'POST',
//         headers: { 
//           'Content-Type': 'application/json',
//           'Accept': 'application/json' 
//         },
//         body: JSON.stringify({
//           subject: "New Student Lead + Chat Log",
//           student_contact: studentContact, // <--- THIS IS THE PHONE NUMBER
//           message: chatHistory
//         }),
//       });

//       // 3. Success
//       setSendingReport(false);
//       setShowContactModal(false);
//       setReportSent(true);
//       setStudentContact('');
//       setTimeout(() => setReportSent(false), 5000); // Hide success message after 5s

//     } catch (error) {
//       console.error("Failed to send report", error);
//       setSendingReport(false);
//       alert("حدث خطأ أثناء الإرسال. حاول مرة أخرى.");
//     }
//   };

//   const handleSend = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     const userText = input;
//     setMessages((prev) => [...prev, { role: 'user', content: userText }]);
//     setInput('');
//     setLoading(true);

//     try {
//       const focusContext = `
//         OFFICIAL INFO:
//         - Name: Focus Teaching Center (مركز فوكس).
//         - Location: Israel, North District.
//         - Contact: +972 52-382-5927 | focus.satcenter@gmail.com
//         - Instagram: @focus_satcenter
//         - Universities accepted: Technion, Tel Aviv, Hebrew U, etc.
//       `;

//       const modelsResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`);
//       const modelsData = await modelsResponse.json();
      
//       let validModelName = 'models/gemini-1.5-flash'; 
//       if (modelsData.models) {
//         const bestModel = modelsData.models.find((m: any) => 
//           m.name.includes('gemini') && 
//           m.supportedGenerationMethods.includes('generateContent')
//         );
//         if (bestModel) {
//           validModelName = bestModel.name;
//         }
//       }

//       const promptToSend = `
//         ROLE: You are an expert SAT Tutor and an assistant for "Focus Teaching Center".
//         LANGUAGE: Speak Arabic.

//         KNOWLEDGE BASE:
//         ${focusContext}

//         STRICT RULES:
//         1. ANSWER DIRECTLY: If the student asks for a study schedule, math explanation, or tips, give them the full answer yourself.
//         2. NO COMPETITORS: Never recommend other websites or centers.
//         3. PROMOTE FOCUS: If the student needs more help, recommend "Focus Teaching Center".

//         User Question: ${userText}
//       `;

//       const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/${validModelName}:generateContent?key=${API_KEY}`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           contents: [{ parts: [{ text: promptToSend }] }]
//         }),
//       });

//       const data = await response.json();

//       if (data.error) {
//         throw new Error(data.error.message);
//       }

//       if (data.candidates && data.candidates[0].content) {
//         const aiAnswer = data.candidates[0].content.parts[0].text;
//         setMessages((prev) => [...prev, { role: 'assistant', content: aiAnswer }]);
//       } else {
//         throw new Error("No answer candidate found.");
//       }

//     } catch (error: any) {
//       console.error("AI Error:", error);
//       setMessages((prev) => [...prev, { 
//         role: 'error', 
//         content: `خطأ تقني: ${error.message}` 
//       }]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 pb-20" dir="rtl">
//       <Header lang="ar" />

//       <main className="max-w-4xl mx-auto px-4 py-12 relative">
        
//         {/* Success Message Notification */}
//         <AnimatePresence>
//           {reportSent && (
//             <motion.div 
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0 }}
//               className="fixed top-24 left-1/2 -translate-x-1/2 bg-green-100 text-green-800 px-6 py-3 rounded-full shadow-lg border border-green-200 z-50 flex items-center gap-2"
//             >
//               <span>✅ تم إرسال المحادثة للمعلم بنجاح! سنتواصل معك قريباً.</span>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         <motion.div 
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center mb-8"
//         >
//           <div className="inline-flex items-center justify-center p-4 bg-white rounded-full shadow-sm mb-4">
//             <Sparkles className="text-primary w-8 h-8" />
//           </div>
//           <h1 className="text-3xl md:text-4xl font-heading text-foreground mb-2">
//             مساعد Focus الذكي
//           </h1>
//           <p className="text-secondary font-paragraph">
//             اسألني عن الرياضيات، الإنجليزي، أو اطلب جدول دراسي
//           </p>
//         </motion.div>

//         <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden min-h-[500px] flex flex-col relative">
          
//           {/* Messages Area */}
//           <div className="flex-1 p-6 overflow-y-auto space-y-6 max-h-[500px]">
//             {messages.map((msg, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className={`flex items-start gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
//               >
//                 <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
//                   msg.role === 'assistant' ? 'bg-primary text-white' : 
//                   msg.role === 'error' ? 'bg-red-100 text-red-600' : 'bg-gray-200 text-gray-600'
//                 }`}>
//                   {msg.role === 'assistant' ? <Bot size={20} /> : msg.role === 'error' ? <AlertCircle size={20} /> : <User size={20} />}
//                 </div>

//                 <div className={`p-4 rounded-2xl max-w-[80%] font-paragraph leading-relaxed ${
//                   msg.role === 'assistant' 
//                     ? 'bg-gray-100 text-foreground rounded-tr-none' 
//                     : msg.role === 'error'
//                     ? 'bg-red-50 text-red-600 border border-red-200'
//                     : 'bg-primary text-white rounded-tl-none'
//                 }`}>
//                   {msg.content}
//                 </div>
//               </motion.div>
//             ))}
            
//             {loading && (
//               <div className="flex items-start gap-4">
//                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
//                    <Bot size={20} />
//                  </div>
//                  <div className="bg-gray-100 p-4 rounded-2xl rounded-tr-none">
//                    <div className="flex gap-2">
//                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
//                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></span>
//                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
//                    </div>
//                  </div>
//               </div>
//             )}
//             <div ref={messagesEndRef} />
//           </div>

//           {/* SEND TRANSCRIPT BUTTON */}
//           {messages.length > 2 && (
//             <div className="px-6 py-2 bg-yellow-50 border-t border-yellow-100 flex justify-between items-center">
//               <span className="text-xs text-yellow-800 font-paragraph">
//                 هل تحتاج لمساعدة إضافية؟
//               </span>
//               <button 
//                 onClick={handleOpenReport}
//                 className="flex items-center gap-2 text-xs font-heading bg-yellow-500 text-white px-3 py-1.5 rounded hover:bg-yellow-600 transition-colors"
//               >
//                 <Mail size={14} />
//                 أرسل المحادثة للمعلم
//               </button>
//             </div>
//           )}

//           <div className="p-4 bg-gray-50 border-t border-gray-200">
//             <form onSubmit={handleSend} className="flex gap-3">
//               <input
//                 type="text"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 placeholder="اطلب جدول دراسي أو اسأل سؤال..."
//                 className="flex-1 px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-primary font-paragraph"
//                 disabled={loading}
//               />
//               <button
//                 type="submit"
//                 disabled={loading || !input.trim()}
//                 className="bg-primary text-white p-3 rounded-xl hover:bg-destructive transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 <Send size={24} />
//               </button>
//             </form>
//           </div>

//           {/* ----------------- POPUP MODAL ----------------- */}
//           <AnimatePresence>
//             {showContactModal && (
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center p-4 backdrop-blur-sm"
//               >
//                 <motion.div 
//                   initial={{ scale: 0.9, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   exit={{ scale: 0.9, opacity: 0 }}
//                   className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-2xl"
//                 >
//                   <div className="flex justify-between items-center mb-4">
//                     <h3 className="text-lg font-heading font-bold text-foreground">
//                       تواصل مع المعلم
//                     </h3>
//                     <button onClick={() => setShowContactModal(false)} className="text-gray-400 hover:text-red-500">
//                       <X size={20} />
//                     </button>
//                   </div>
                  
//                   <p className="text-sm text-gray-600 mb-4 font-paragraph">
//                     أدخل رقم هاتفك أو بريدك الإلكتروني، وسيقوم المعلم بمراجعة المحادثة والتواصل معك.
//                   </p>

//                   <form onSubmit={submitReportToTeacher} className="space-y-4">
//                     <input 
//                       type="text" 
//                       value={studentContact}
//                       onChange={(e) => setStudentContact(e.target.value)}
//                       placeholder="رقم الهاتف أو البريد الإلكتروني"
//                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-primary focus:outline-none font-paragraph text-right"
//                       required
//                     />
                    
//                     <button 
//                       type="submit"
//                       disabled={sendingReport}
//                       className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-destructive transition-colors disabled:opacity-50"
//                     >
//                       {sendingReport ? 'جاري الإرسال...' : 'إرسال الطلب'}
//                     </button>
//                   </form>
//                 </motion.div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//           {/* ----------------------------------------------- */}

//         </div>

//       </main>

//       <Footer lang="ar" />
//     </div>
//   );
// }
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Sparkles, AlertCircle, Mail, X } from 'lucide-react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

// ✅ YOUR API KEY & FORM ID
const API_KEY = "AIzaSyDyETJgktJTtUHUWsXx8ZB8ni7Ju3I9ka4";
const FORM_ID = "xaqqwkbz";

type Message = {
  role: 'user' | 'assistant' | 'error';
  content: string;
};

export default function AiPageAr() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'مرحباً! أنا مساعد Focus الذكي. يمكنني مساعدتك في وضع جدول دراسي، شرح مسائل رياضية، أو الإجابة عن تفاصيل التسجيل.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [studentContact, setStudentContact] = useState('');
  const [sendingReport, setSendingReport] = useState(false);
  const [reportSent, setReportSent] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleOpenReport = () => {
    if (messages.length <= 1) return;
    setShowContactModal(true);
  };

  const submitReportToTeacher = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentContact.trim()) return;

    setSendingReport(true);
    const chatHistory = messages.map(m => `${m.role.toUpperCase()}: ${m.content}`).join('\n-------------------\n');

    try {
      await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          subject: "New Student Lead + Chat Log",
          student_contact: studentContact,
          message: chatHistory
        }),
      });

      setSendingReport(false);
      setShowContactModal(false);
      setReportSent(true);
      setStudentContact('');
      setTimeout(() => setReportSent(false), 5000);
    } catch (error) {
      console.error("Failed to send report", error);
      setSendingReport(false);
      alert("حدث خطأ أثناء الإرسال. حاول مرة أخرى.");
    }
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input;
    setMessages((prev) => [...prev, { role: 'user', content: userText }]);
    setInput('');
    setLoading(true);

    try {
      const focusContext = `
        OFFICIAL INFO:
        - Name: Focus Teaching Center (مركز فوكس).
        - Location: Israel, North District.
        - Contact: +972 52-382-5927 | focus.satcenter@gmail.com
        - Instagram: @focus_satcenter
        - Universities accepted: Technion, Tel Aviv, Hebrew U, etc.
      `;

      const modelsResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`);
      const modelsData = await modelsResponse.json();
      
      let validModelName = 'models/gemini-1.5-flash'; 
      if (modelsData.models) {
        const bestModel = modelsData.models.find((m: any) => 
          m.name.includes('gemini') && m.supportedGenerationMethods.includes('generateContent')
        );
        if (bestModel) validModelName = bestModel.name;
      }

      const promptToSend = `
        ROLE: You are an expert SAT Tutor and an assistant for "Focus Teaching Center".
        LANGUAGE: Speak Arabic.

        KNOWLEDGE BASE: ${focusContext}

        STRICT RULES:
        1. ANSWER DIRECTLY: If the student asks for a study schedule, math explanation, or tips, give them the full answer yourself.
        2. NO COMPETITORS: Never recommend other websites or centers.
        3. PROMOTE FOCUS: If the student needs more help, recommend "Focus Teaching Center".

        User Question: ${userText}
      `;

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/${validModelName}:generateContent?key=${API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: promptToSend }] }]
        }),
      });

      const data = await response.json();
      if (data.error) throw new Error(data.error.message);

      if (data.candidates && data.candidates[0].content) {
        const aiAnswer = data.candidates[0].content.parts[0].text;
        setMessages((prev) => [...prev, { role: 'assistant', content: aiAnswer }]);
      } else {
        throw new Error("No answer candidate found.");
      }

    } catch (error: any) {
      console.error("AI Error:", error);
      setMessages((prev) => [...prev, { role: 'error', content: `خطأ تقني: ${error.message}` }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20" dir="rtl">
      <Header lang="ar" />

      <main className="max-w-4xl mx-auto px-4 py-12 relative">
        <AnimatePresence>
          {reportSent && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="fixed top-24 left-1/2 -translate-x-1/2 bg-green-100 text-green-800 px-6 py-3 rounded-full shadow-lg border border-green-200 z-50 flex items-center gap-2"
            >
              <span>✅ تم إرسال المحادثة للمعلم بنجاح! سنتواصل معك قريباً.</span>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-4 bg-white rounded-full shadow-sm mb-4">
            <Sparkles className="text-primary w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-heading text-foreground mb-2">مساعد Focus الذكي</h1>
          <p className="text-secondary font-paragraph">اسألني عن الرياضيات، الإنجليزي، أو اطلب جدول دراسي</p>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden min-h-[500px] flex flex-col relative">
          
          <div className="flex-1 p-6 overflow-y-auto space-y-6 max-h-[500px]">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                // ✅ FIXED: In Arabic (RTL), "Assistant" needs row-reverse to be on the Left. User stays on Right.
                className={`flex items-start gap-4 ${msg.role === 'assistant' ? 'flex-row-reverse' : ''}`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.role === 'assistant' ? 'bg-primary text-white' : 
                  msg.role === 'error' ? 'bg-red-100 text-red-600' : 'bg-gray-200 text-gray-600'
                }`}>
                  {msg.role === 'assistant' ? <Bot size={20} /> : msg.role === 'error' ? <AlertCircle size={20} /> : <User size={20} />}
                </div>

                <div className={`p-4 rounded-2xl max-w-[80%] font-paragraph leading-relaxed ${
                  msg.role === 'assistant' 
                    ? 'bg-gray-100 text-foreground rounded-tl-none' // ✅ Fixed Tail for Left Side
                    : msg.role === 'error'
                    ? 'bg-red-50 text-red-600 border border-red-200'
                    : 'bg-primary text-white rounded-tr-none' // ✅ Fixed Tail for Right Side
                }`}>
                  {msg.content}
                </div>
              </motion.div>
            ))}
            
            {loading && (
              <div className="flex items-start gap-4 flex-row-reverse">
                 <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center"><Bot size={20} /></div>
                 <div className="bg-gray-100 p-4 rounded-2xl rounded-tl-none"><div className="flex gap-2"><span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span><span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></span><span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span></div></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {messages.length > 2 && (
            <div className="px-6 py-2 bg-yellow-50 border-t border-yellow-100 flex justify-between items-center">
              <span className="text-xs text-yellow-800 font-paragraph">هل تحتاج لمساعدة إضافية؟</span>
              <button onClick={handleOpenReport} className="flex items-center gap-2 text-xs font-heading bg-yellow-500 text-white px-3 py-1.5 rounded hover:bg-yellow-600 transition-colors">
                <Mail size={14} /> أرسل المحادثة للمعلم
              </button>
            </div>
          )}

          <div className="p-4 bg-gray-50 border-t border-gray-200">
            <form onSubmit={handleSend} className="flex gap-3">
              <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="اطلب جدول دراسي أو اسأل سؤال..." className="flex-1 px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-primary font-paragraph" disabled={loading} />
              <button type="submit" disabled={loading || !input.trim()} className="bg-primary text-white p-3 rounded-xl hover:bg-destructive transition-colors disabled:opacity-50"><Send size={24} /></button>
            </form>
          </div>

          <AnimatePresence>
            {showContactModal && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center p-4 backdrop-blur-sm">
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-2xl">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-heading font-bold text-foreground">تواصل مع المعلم</h3>
                    <button onClick={() => setShowContactModal(false)} className="text-gray-400 hover:text-red-500"><X size={20} /></button>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 font-paragraph">أدخل رقم هاتفك أو بريدك الإلكتروني، وسيقوم المعلم بمراجعة المحادثة والتواصل معك.</p>
                  <form onSubmit={submitReportToTeacher} className="space-y-4">
                    <input type="text" value={studentContact} onChange={(e) => setStudentContact(e.target.value)} placeholder="رقم الهاتف أو البريد الإلكتروني" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-primary focus:outline-none font-paragraph text-right" required />
                    <button type="submit" disabled={sendingReport} className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-destructive transition-colors disabled:opacity-50">{sendingReport ? 'جاري الإرسال...' : 'إرسال الطلب'}</button>
                  </form>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
      <Footer lang="ar" />
    </div>
  );
}
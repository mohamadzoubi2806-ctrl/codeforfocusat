import { motion } from 'framer-motion';
import { useState } from 'react';
import { MessageCircle, Mail, Send, Instagram } from 'lucide-react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import PageTitle from '../../layout/PageTitle';
import { usePageTitle } from '../../../hooks/usePageTitle';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactPageAr() {
  usePageTitle('Contact Us - Focus Teaching Center');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // To show "Sending..."
  const [errorMsg, setErrorMsg] = useState('');    // To show errors if it fails

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);

    try {
      // 1. Send data to Formspree
      const res = await fetch('https://formspree.io/f/xaqqwkbz', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json' 
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Message from ${formData.name}` // Helps avoid Spam
        }),
      });

      // 2. Check if it worked
      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || 'فشل إرسال الرسالة. حاول مرة ثانية.');
      }
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err?.message || 'صار خطأ غير متوقع.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div dir="rtl" className="min-h-screen bg-background pb-20">
      <Header />

      <main className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <PageTitle
          title="اتصل بنا"
          subtitle="نحن هنا للإجابة على جميع أسئلتك"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white p-8 rounded-lg mb-8">
              <h2 className="text-3xl font-heading text-foreground mb-8">معلومات الاتصال</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-light-red p-3 rounded-lg flex-shrink-0">
                    <MessageCircle size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-foreground mb-2">واتساب</h3>
                    <a
                      href="https://wa.me/972523825927"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-primary hover:text-destructive transition-colors font-paragraph"
                      dir="ltr"
                    >
                      +972 52-382-5927
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-light-red p-3 rounded-lg flex-shrink-0">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-foreground mb-2">البريد الإلكتروني</h3>
                    <a
                      href="mailto:focus.satcenter@gmail.com"
                      className="text-lg text-primary hover:text-destructive transition-colors font-paragraph"
                    >
                      focus.satcenter@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-light-red p-3 rounded-lg flex-shrink-0">
                    <Instagram size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-foreground mb-2">إنستجرام</h3>
                    <a
                      href="https://www.instagram.com/focus_satcenter/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-primary hover:text-destructive transition-colors font-paragraph"
                      dir="ltr"
                    >
                      @focus_satcenter
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-light-red p-8 rounded-lg">
              <h3 className="text-2xl font-heading text-foreground mb-4">استشارة مجانية</h3>
              <p className="text-lg text-foreground font-paragraph mb-6">
                تواصل معنا عبر واتساب للحصول على استشارة مجانية وفهم كيف يمكننا مساعدتك في التحضير لامتحان SAT.
              </p>
              <a
                href="https://wa.me/972523825927"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded font-heading text-lg hover:bg-destructive transition-colors"
              >
                ابدأ المحادثة
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-8 rounded-lg"
          >
            <h2 className="text-3xl font-heading text-foreground mb-8">أرسل رسالة</h2>

            {submitted ? (
              <div className="p-6 rounded-lg text-center bg-[#d7ffcdff]">
                <p className="text-lg text-foreground font-paragraph">
                  شكراً لك! تم إرسال رسالتك بنجاح.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-heading text-foreground mb-2">
                    الاسم
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-secondary rounded font-paragraph text-foreground focus:border-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg font-heading text-foreground mb-2">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-secondary rounded font-paragraph text-foreground focus:border-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-lg font-heading text-foreground mb-2">
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-secondary rounded font-paragraph text-foreground focus:border-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-lg font-heading text-foreground mb-2">
                    الرسالة
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-secondary rounded font-paragraph text-foreground focus:border-primary focus:outline-none resize-none"
                  />
                </div>
                
                {/* Show Error Message if any */}
                {errorMsg && <div className="text-red-500 font-paragraph">{errorMsg}</div>}

                <button
                  type="submit"
                  disabled={loading} // Disable button while sending
                  className="w-full bg-primary text-primary-foreground px-8 py-4 rounded font-heading text-lg flex items-center justify-center gap-3 hover:bg-destructive transition-colors disabled:opacity-70"
                >
                  <Send size={20} />
                  {loading ? 'جاري الإرسال...' : 'إرسال الرسالة'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
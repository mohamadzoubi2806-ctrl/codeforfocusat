import { motion } from 'framer-motion';
import { useState } from 'react';
import { MessageCircle, Mail, Send, Instagram } from 'lucide-react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import ContactBar from '../../layout/ContactBar';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactPageEn() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

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
          <h1 className="text-5xl md:text-6xl font-heading text-foreground mb-6">Contact Us</h1>
          <p className="text-xl text-secondary max-w-4xl mx-auto font-paragraph">
            We're here to answer all your questions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white p-8 rounded-lg mb-8">
              <h2 className="text-3xl font-heading text-foreground mb-8">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-light-red p-3 rounded-lg flex-shrink-0">
                    <MessageCircle size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-foreground mb-2">WhatsApp</h3>
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
                    <h3 className="font-heading text-xl text-foreground mb-2">Email</h3>
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
                    <h3 className="font-heading text-xl text-foreground mb-2">Instagram</h3>
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
              <h3 className="text-2xl font-heading text-foreground mb-4">Free Consultation</h3>
              <p className="text-lg text-foreground font-paragraph mb-6">
                Contact us via WhatsApp for a free consultation and understand how we can help you prepare for the SAT exam.
              </p>
              <a
                href="https://wa.me/972523825927"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded font-heading text-lg hover:bg-destructive transition-colors"
              >
                Start Conversation
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-8 rounded-lg"
          >
            <h2 className="text-3xl font-heading text-foreground mb-8">Send a Message</h2>

            {submitted ? (
              <div className="p-6 rounded-lg text-center bg-[#d7ffcdff]">
                <p className="text-lg text-foreground font-paragraph">
                  Thank you! Your message has been sent successfully.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-heading text-foreground mb-2">
                    Name
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
                    Email
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
                    Phone Number
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
                    Message
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

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-8 py-4 rounded font-heading text-lg flex items-center justify-center gap-3 hover:bg-destructive transition-colors"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </main>

      <Footer lang="en" />
      <ContactBar lang="en" />
    </div>
  );
}

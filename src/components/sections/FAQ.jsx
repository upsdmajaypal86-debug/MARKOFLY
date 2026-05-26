import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Section } from '../ui';

// 👉 Replace this path with where you store the provided image in your project
// e.g. import faqCharacter from '../../assets/faq-character.png'
const faqCharacter = '/assets/faq-character.png';

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'Most projects take between 4 to 12 weeks depending on the complexity and scope of the work.'
  },
  {
    question: 'Do you provide maintenance and support?',
    answer: 'Yes, we offer ongoing support and maintenance packages to ensure your digital product remains up-to-date and secure.'
  },
  {
    question: 'How do you handle project communication?',
    answer: 'We use Slack, Trello, and Zoom for regular updates and maintain full transparency throughout the project lifecycle.'
  },
  {
    question: 'What is your pricing structure?',
    answer: 'We offer both fixed-price project-based quotes and value-based monthly retainers depending on your needs.'
  }
];

export const FAQ = () => {
  const [active, setActive] = useState(null);

  const toggleFAQ = useCallback((i) => {
    setActive((prev) => (prev === i ? null : i));
  }, []);

  return (
    <Section id="faq" className="px-4 sm:px-6 lg:px-8">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-start">
        
        {/* LEFT */}
        <div>
          <h4 className="text-primary font-bold tracking-wider uppercase mb-3 text-xs sm:text-sm">
            Questions
          </h4>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 sm:mb-8 leading-tight">
            Frequently Asked <span className="text-primary">Questions.</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg mb-8 sm:mb-10">
            Still have questions? We're here to help. Reach out to our support team for more details about our process and offerings.
          </p>

          {/* ✅ Added your custom image (same styling, no design change) */}
      </div>    

        {/* RIGHT */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, i) => {
            const isActive = active === i;

            return (
              <div
                key={i}
                className={`rounded-2xl sm:rounded-[2rem] border transition-all duration-300 ${
                  isActive
                    ? 'bg-primary/5 border-primary shadow-lg shadow-primary/5'
                    : 'bg-white border-slate-100'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(i)}
                  aria-expanded={isActive}
                  aria-controls={`faq-${i}`}
                  className="w-full px-5 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-4 text-left"
                >
                  <span className="text-base sm:text-lg md:text-xl font-bold text-slate-800">
                    {faq.question}
                  </span>

                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all shrink-0 ${
                      isActive
                        ? 'bg-primary text-white rotate-180'
                        : 'bg-slate-50 text-slate-400'
                    }`}
                  >
                    {isActive ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      id={`faq-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-8 pb-6 sm:pb-8 text-sm sm:text-base text-slate-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
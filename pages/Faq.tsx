import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../constants';
import { Icons } from '../components/ui/Icons';

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
        <p className="text-xl text-slate-600">
           Everything you need to know about our services and process.
        </p>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, idx) => (
          <div 
            key={idx} 
            className={`rounded-2xl border transition-all duration-300 ${openIndex === idx ? 'bg-white border-blue-200 shadow-md' : 'bg-white/50 border-transparent hover:bg-white'}`}
          >
            <button
              onClick={() => toggleAccordion(idx)}
              className="w-full px-6 py-5 flex items-center justify-between focus:outline-none"
            >
              <span className={`font-semibold text-left text-lg ${openIndex === idx ? 'text-blue-600' : 'text-slate-800'}`}>
                {faq.question}
              </span>
              <span className={`transition-transform duration-300 text-slate-400 ${openIndex === idx ? 'rotate-180 text-blue-500' : ''}`}>
                 <Icons.ChevronRight className="rotate-90" />
              </span>
            </button>
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;

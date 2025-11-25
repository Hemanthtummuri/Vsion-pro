import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { Icons } from '../components/ui/Icons';

const Testimonials: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Stories</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Don't just take our word for it. Here is what property owners have to say.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t, idx) => (
          <motion.div 
            key={t.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card p-8 rounded-3xl relative flex flex-col"
          >
            <div className="absolute -top-4 -left-4 text-blue-200 opacity-50">
               <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M14.017 21L14.017 18C14.017 16.896 14.321 15.936 14.929 15.12C15.537 14.288 16.485 13.52 17.773 12.816L18.421 11.52C17.381 11.52 16.597 11.088 16.069 10.224C15.557 9.344 15.301 8.24 15.301 6.912C15.301 5.664 15.597 4.544 16.189 3.552C16.781 2.544 17.629 2.04 18.733 2.04C19.837 2.04 20.677 2.544 21.253 3.552C21.845 4.544 22.141 5.664 22.141 6.912C22.141 9.408 21.437 11.664 20.029 13.68C18.637 15.68 16.633 18.12 14.017 21ZM2.005 21L2.005 18C2.005 16.896 2.309 15.936 2.917 15.12C3.525 14.288 4.473 13.52 5.761 12.816L6.409 11.52C5.369 11.52 4.585 11.088 4.057 10.224C3.545 9.344 3.289 8.24 3.289 6.912C3.289 5.664 3.585 4.544 4.177 3.552C4.769 2.544 5.617 2.04 6.721 2.04C7.825 2.04 8.665 2.544 9.241 3.552C9.833 4.544 10.129 5.664 10.129 6.912C10.129 9.408 9.425 11.664 8.017 13.68C6.625 15.68 4.621 18.12 2.005 21Z" />
               </svg>
            </div>
            
            <p className="text-slate-600 mb-6 italic relative z-10 leading-relaxed flex-grow">"{t.content}"</p>
            
            <div className="flex items-center mt-4 pt-6 border-t border-slate-200">
               <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full mr-4 object-cover" />
               <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <div className="flex items-center text-xs text-slate-500">
                     <Icons.MapPin size={12} className="mr-1" />
                     {t.location}
                  </div>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Video Testimonials Section (Placeholder) */}
      <div className="mt-24 text-center">
         <h2 className="text-2xl font-bold mb-8">Video Testimonials</h2>
         <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="w-full md:w-96 h-56 bg-black rounded-2xl flex items-center justify-center relative cursor-pointer group overflow-hidden">
               <img src="https://picsum.photos/600/400?random=video1" alt="Video Thumb" className="opacity-60 absolute inset-0 w-full h-full object-cover" />
               <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform z-10">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
               </div>
               <p className="absolute bottom-4 left-4 text-white font-semibold z-10">Mr. Sharma, Dubai</p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Testimonials;

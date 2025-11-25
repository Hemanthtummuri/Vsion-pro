import React from 'react';
import { motion } from 'framer-motion';
import { TEAM_MEMBERS } from '../constants';
import { Icons } from '../components/ui/Icons';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-24">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          We are <span className="gradient-text">Vision Properties</span>
        </motion.h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          Bridging the gap between global owners and local assets with transparency, integrity, and technology.
        </p>
      </section>

      {/* Mission & Story */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="text-slate-600 leading-relaxed">
            To revolutionize Indian property management by providing a stress-free, transparent, and professional experience for property owners worldwide. We aim to be the most trusted partner for your real estate assets.
          </p>
          <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
          <h2 className="text-3xl font-bold pt-4">Our Story</h2>
          <p className="text-slate-600 leading-relaxed">
            Founded in 2020 by Arjun Reddy, an NRI who struggled to manage his Bangalore properties from the US. Faced with unreliable brokers and lack of transparency, he built Vision Properties to solve his own problem. Today, we manage over ₹500 Cr worth of assets.
          </p>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-purple-200 rounded-3xl transform rotate-3 scale-105 opacity-50"></div>
          <img 
            src="https://picsum.photos/800/600?random=20" 
            alt="Office" 
            className="relative rounded-3xl shadow-xl w-full object-cover h-[400px]" 
          />
        </div>
      </section>

      {/* Differentiators */}
      <section className="glass rounded-3xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center mb-12">What Makes Us Different</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Zero Commission on Maintenance", desc: "Unlike others, we don't mark up vendor bills. You pay actuals." },
            { title: "Dedicated Manager", desc: "One point of contact for all your properties. No call center loops." },
            { title: "Tech-First Approach", desc: "Live dashboards, digital agreements, and automated tax alerts." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/50 p-6 rounded-2xl border border-white/60">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mb-4">
                {idx + 1}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12">Meet The Leadership</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-center group"
            >
              <div className="relative mb-4 overflow-hidden rounded-2xl aspect-square">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <div className="flex gap-3 text-white">
                    <Icons.Linkedin size={20} />
                    <Icons.Twitter size={20} />
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-blue-600 text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;

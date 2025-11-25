import React from 'react';
import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work Speaks</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          See the difference Vision Properties makes with our transformation stories and detailed reporting.
        </p>
      </div>

      {/* Before/After Section */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold mb-8">Transformations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div key={i} className="glass-card p-4 rounded-2xl">
              <div className="grid grid-cols-2 gap-2 h-64 overflow-hidden rounded-xl">
                 <div className="relative group">
                    <img src={`https://picsum.photos/400/300?random=${i}0`} alt="Before" className="w-full h-full object-cover" />
                    <span className="absolute bottom-2 left-2 bg-red-500/80 text-white text-xs px-2 py-1 rounded">BEFORE</span>
                 </div>
                 <div className="relative group">
                    <img src={`https://picsum.photos/400/300?random=${i}1`} alt="After" className="w-full h-full object-cover" />
                    <span className="absolute bottom-2 left-2 bg-green-500/80 text-white text-xs px-2 py-1 rounded">AFTER</span>
                 </div>
              </div>
              <div className="mt-4">
                 <h3 className="font-bold text-lg">Villa Restoration - Project {i}</h3>
                 <p className="text-sm text-slate-500">Full deep cleaning, painting, and garden restoration completed in 7 days.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reports Demo Section */}
      <section>
        <h2 className="text-2xl font-bold mb-8">Sample Reports</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { title: "Inspection Report", type: "PDF" },
             { title: "Expense Statement", type: "PDF" },
             { title: "Tenant Agreement", type: "PDF" }
           ].map((report, idx) => (
             <motion.div 
               key={idx}
               whileHover={{ y: -5 }}
               className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center space-x-4 cursor-pointer hover:shadow-md"
             >
                <div className="w-12 h-12 bg-red-50 text-red-500 rounded-lg flex items-center justify-center font-bold text-xs">
                   {report.type}
                </div>
                <div>
                  <h4 className="font-bold">{report.title}</h4>
                  <p className="text-xs text-slate-400">View Sample</p>
                </div>
             </motion.div>
           ))}
        </div>
        
        {/* Mock Dashboard Preview */}
        <div className="mt-16 bg-slate-900 rounded-3xl p-4 md:p-8 shadow-2xl relative overflow-hidden group">
           <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
           <div className="relative z-10 text-center mb-8">
              <h3 className="text-white text-2xl font-bold">Client Dashboard Preview</h3>
              <p className="text-slate-400">Real-time access to your property data.</p>
           </div>
           <div className="relative mx-auto max-w-4xl bg-white rounded-t-xl overflow-hidden shadow-2xl h-64 md:h-96 border-4 border-slate-700">
              <img src="https://picsum.photos/1200/800?random=dashboard" alt="Dashboard UI" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <button className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-700 transition">View Live Demo</button>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Icons } from '../components/ui/Icons';
import Button from '../components/ui/Button';
import { SERVICES } from '../constants';

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="space-y-24 pb-12">
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 md:pt-32 md:pb-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-wider mb-6 border border-blue-200">
              TRUSTED BY 500+ NRI FAMILIES
            </span>
            <h1 className="text-5xl md:text-7xl font-bold font-poppins leading-tight mb-6">
              Your Property, <br />
              <span className="gradient-text">Our Responsibility.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Comprehensive property management solutions for NRIs and investors. 
              We protect, maintain, and maximize the value of your Indian real estate assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="primary" className="w-full sm:w-auto">Get Free Consultation</Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="w-full sm:w-auto">Explore Services</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Vision Properties?</h2>
          <p className="text-slate-500">We blend technology with human expertise to deliver peace of mind.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "100% Transparent", desc: "Real-time updates via our app. No hidden fees.", icon: "ShieldCheck" },
            { title: "NRI Specialized", desc: "Processes designed specifically for remote owners.", icon: "Globe" },
            { title: "Vetted Experts", desc: "Legal, technical, and operational experts on call.", icon: "UserCheck" },
            { title: "Tech Driven", desc: "Digital reports, e-signatures, and online payments.", icon: "TrendingUp" }
          ].map((item, idx) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const Icon = (Icons as any)[item.icon] || Icons.Star;
            return (
              <motion.div 
                key={idx}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Services Preview */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Services</h2>
            <p className="text-slate-500 max-w-lg">Everything you need to manage your property from anywhere in the world.</p>
          </div>
          <Link to="/services" className="hidden md:block">
            <Button variant="outline" className="!py-2">View All Services <Icons.ArrowRight size={16} className="ml-2"/></Button>
          </Link>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {SERVICES.slice(0, 6).map((service) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const Icon = (Icons as any)[service.icon] || Icons.Home;
            return (
              <Link to={`/services/${service.id}`} key={service.id} className="group">
                <div className="glass-card p-8 rounded-2xl h-full transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl border border-white/50 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-purple-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                  <div className="relative z-10">
                    <Icon className="w-10 h-10 text-blue-600 mb-6" />
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                    <p className="text-slate-500 text-sm mb-4 line-clamp-3">{service.description}</p>
                    <span className="text-blue-600 text-sm font-semibold flex items-center">
                      Learn More <Icons.ChevronRight size={16} className="ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </motion.div>
        
        <div className="mt-8 md:hidden text-center">
          <Link to="/services">
            <Button variant="outline" className="w-full">View All Services</Button>
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-slate-500">Three simple steps to complete peace of mind.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
             {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200 z-0"></div>

            {[
              { step: "01", title: "Connect", desc: "Schedule a free consultation. We assess your property needs and suggest a plan." },
              { step: "02", title: "Onboard", desc: "Sign the agreement digitally. We collect keys and conduct the initial inspection." },
              { step: "03", title: "Relax", desc: "Access your dashboard. Receive regular reports and rent credits while you relax." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative z-10 text-center"
              >
                <div className="w-24 h-24 mx-auto bg-white rounded-full border-4 border-blue-50 shadow-lg flex items-center justify-center text-3xl font-bold text-blue-600 mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm px-4">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">Trusted Partners & Certifications</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Placeholder logos */}
           {[1, 2, 3, 4, 5].map((i) => (
             <div key={i} className="font-bold text-xl text-slate-400 flex items-center gap-2">
                <Icons.Award size={24}/> <span>PARTNER {i}</span>
             </div>
           ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to experience peace of mind?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Join hundreds of happy property owners who trust Vision Properties.</p>
            <Link to="/contact">
              <Button variant="secondary" className="px-8 py-4 text-lg">Schedule Free Call</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

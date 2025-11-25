import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES } from '../constants';
import { Icons } from '../components/ui/Icons';
import Button from '../components/ui/Button';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon = (Icons as any)[service.icon] || Icons.Home;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Link to="/services" className="inline-flex items-center text-slate-500 hover:text-blue-600 mb-8 transition-colors">
        <Icons.ArrowRight className="rotate-180 mr-2" size={20} /> Back to Services
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-center gap-4 mb-4">
             <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                <Icon size={40} />
             </div>
             <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
          </div>
          
          <div className="prose prose-lg text-slate-600 max-w-none">
            <p className="text-xl leading-relaxed mb-8">{service.fullContent}</p>
            
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Key Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                  <Icons.CheckCircle className="text-green-500 mt-1 mr-3 shrink-0" size={20} />
                  <span className="font-medium text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="glass-card p-6 rounded-2xl sticky top-24">
            <h3 className="text-xl font-bold mb-4">Interested in this service?</h3>
            <p className="text-sm text-slate-500 mb-6">
              Get a custom quote for {service.title}. Prices depend on property size and location.
            </p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
               <div>
                 <label className="block text-xs font-medium text-slate-700 mb-1">Name</label>
                 <input type="text" className="w-full rounded-lg border-slate-200 focus:ring-blue-500 p-2 text-sm" placeholder="Your Name" />
               </div>
               <div>
                 <label className="block text-xs font-medium text-slate-700 mb-1">Email</label>
                 <input type="email" className="w-full rounded-lg border-slate-200 focus:ring-blue-500 p-2 text-sm" placeholder="Your Email" />
               </div>
               <Button variant="primary" className="w-full text-sm">Request Quote</Button>
            </form>
            <div className="mt-6 pt-6 border-t border-slate-200">
               <p className="text-center text-sm font-semibold text-slate-600">Or call us directly</p>
               <a href="tel:+919876543210" className="block text-center text-xl font-bold text-blue-600 mt-1">+91 98765 43210</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;

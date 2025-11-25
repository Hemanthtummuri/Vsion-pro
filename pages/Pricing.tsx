import React from 'react';
import { PRICING } from '../constants';
import { Icons } from '../components/ui/Icons';
import Button from '../components/ui/Button';

const Pricing: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Choose the plan that fits your property needs. No hidden setup fees.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {PRICING.map((plan, idx) => (
          <div 
            key={idx} 
            className={`relative rounded-3xl p-8 transition-transform hover:-translate-y-2 duration-300 flex flex-col ${
              plan.isPopular 
                ? 'bg-slate-900 text-white shadow-2xl scale-105 z-10' 
                : 'glass-card text-slate-800'
            }`}
          >
            {plan.isPopular && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg">
                Most Popular
              </div>
            )}
            <h3 className={`text-xl font-bold mb-2 ${plan.isPopular ? 'text-blue-400' : 'text-blue-600'}`}>
              {plan.name}
            </h3>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className={`text-sm ml-2 ${plan.isPopular ? 'text-slate-400' : 'text-slate-500'}`}>/month</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start text-sm">
                  <Icons.CheckCircle size={18} className={`${plan.isPopular ? 'text-green-400' : 'text-green-600'} mr-3 shrink-0`} />
                  <span className={plan.isPopular ? 'text-slate-300' : 'text-slate-600'}>{feature}</span>
                </li>
              ))}
            </ul>

            <Button 
              variant={plan.isPopular ? 'primary' : 'outline'} 
              className={`w-full ${plan.isPopular ? 'bg-gradient-to-r from-blue-600 to-purple-600 border-none' : ''}`}
            >
              Get Started
            </Button>
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="glass-card rounded-3xl p-8 overflow-x-auto">
        <h3 className="text-2xl font-bold mb-8 text-center">Feature Comparison</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="p-4 border-b border-slate-200">Features</th>
              <th className="p-4 border-b border-slate-200 font-bold text-center">Basic</th>
              <th className="p-4 border-b border-slate-200 font-bold text-center text-blue-600">Standard</th>
              <th className="p-4 border-b border-slate-200 font-bold text-center">Premium</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {[
              { name: "Visits Per Month", b: "1", s: "2", p: "4" },
              { name: "Report Type", b: "Photo", s: "Video + Photo", p: "Live Walkthrough" },
              { name: "Tenant Finding", b: "❌", s: "✅", p: "✅" },
              { name: "Legal Support", b: "Basic", s: "Standard", p: "Priority" },
              { name: "Cleaning", b: "Paid Extra", s: "2x Included", p: "Unlimited" },
            ].map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50/50">
                <td className="p-4 border-b border-slate-100 font-medium">{row.name}</td>
                <td className="p-4 border-b border-slate-100 text-center text-slate-500">{row.b}</td>
                <td className="p-4 border-b border-slate-100 text-center font-bold text-blue-600 bg-blue-50/30">{row.s}</td>
                <td className="p-4 border-b border-slate-100 text-center text-slate-500">{row.p}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pricing;

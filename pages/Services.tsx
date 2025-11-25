import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { Icons } from '../components/ui/Icons';
import Button from '../components/ui/Button';

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Tailored solutions for every stage of your property journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICES.map((service) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const Icon = (Icons as any)[service.icon] || Icons.Home;
          return (
            <div key={service.id} className="glass-card p-8 rounded-3xl hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-blue-50 rounded-2xl text-blue-600 shrink-0">
                <Icon size={32} />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {service.benefits.slice(0, 4).map((benefit, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-500">
                      <Icons.CheckCircle size={14} className="text-green-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link to={`/services/${service.id}`}>
                  <Button variant="outline" className="text-sm">View Details</Button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;

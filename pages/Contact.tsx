import React, { useState } from 'react';
import { Icons } from '../components/ui/Icons';
import Button from '../components/ui/Button';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting us. We will get back to you shortly.');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
             <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
                <p className="text-xl text-slate-600">
                   Have questions about your property? Our experts are ready to help.
                </p>
             </div>

             <div className="space-y-6">
                <div className="flex items-start space-x-4">
                   <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                      <Icons.Phone size={24} />
                   </div>
                   <div>
                      <h3 className="font-bold text-lg">Phone</h3>
                      <p className="text-slate-600">+91 98765 43210</p>
                      <p className="text-slate-500 text-sm">Mon-Sat, 9am - 7pm IST</p>
                   </div>
                </div>

                <div className="flex items-start space-x-4">
                   <div className="p-3 bg-purple-100 rounded-lg text-purple-600">
                      <Icons.Mail size={24} />
                   </div>
                   <div>
                      <h3 className="font-bold text-lg">Email</h3>
                      <p className="text-slate-600">hello@visionproperties.com</p>
                      <p className="text-slate-500 text-sm">24 hour response time</p>
                   </div>
                </div>

                <div className="flex items-start space-x-4">
                   <div className="p-3 bg-pink-100 rounded-lg text-pink-600">
                      <Icons.MapPin size={24} />
                   </div>
                   <div>
                      <h3 className="font-bold text-lg">Headquarters</h3>
                      <p className="text-slate-600">
                         100 Feet Road, Indiranagar,<br/>
                         Bangalore, Karnataka 560038
                      </p>
                   </div>
                </div>
             </div>
             
             {/* Map Placeholder */}
             <div className="h-64 w-full bg-slate-200 rounded-2xl overflow-hidden relative">
                <iframe 
                   title="map"
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.001696423075!2d77.6385!3d12.9719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a7c3697669%3A0x6b510ca24d145136!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1625637284758!5m2!1sen!2sin" 
                   width="100%" 
                   height="100%" 
                   style={{border:0}} 
                   loading="lazy"
                ></iframe>
             </div>
          </div>

          {/* Form */}
          <div className="glass-card p-8 md:p-12 rounded-3xl h-fit">
             <h2 className="text-2xl font-bold mb-8">Send us a message</h2>
             <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Full Name</label>
                      <input 
                         required
                         type="text" 
                         className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition"
                         placeholder="John Doe"
                         value={formState.name}
                         onChange={(e) => setFormState({...formState, name: e.target.value})}
                      />
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Phone</label>
                      <input 
                         required
                         type="tel" 
                         className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition"
                         placeholder="+91..."
                         value={formState.phone}
                         onChange={(e) => setFormState({...formState, phone: e.target.value})}
                      />
                   </div>
                </div>

                <div className="space-y-2">
                   <label className="text-sm font-medium text-slate-700">Email Address</label>
                   <input 
                      required
                      type="email" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition"
                      placeholder="john@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                   />
                </div>

                <div className="space-y-2">
                   <label className="text-sm font-medium text-slate-700">Message</label>
                   <textarea 
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"
                      placeholder="Tell us about your property..."
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                   ></textarea>
                </div>

                <Button type="submit" variant="primary" className="w-full !py-4 text-lg">Send Message</Button>
             </form>
          </div>
       </div>
    </div>
  );
};

export default Contact;

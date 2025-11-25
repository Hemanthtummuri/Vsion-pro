import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Icons } from './ui/Icons';
import Button from './ui/Button';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-inter text-slate-800 bg-slate-50 relative overflow-x-hidden">
      {/* Background Blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navbar */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            <Link to="/" className="flex items-center space-x-2 z-50">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="font-poppins font-bold text-xl tracking-tight text-slate-900">
                Vision<span className="text-blue-600">Prop</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    location.pathname === link.path ? 'text-blue-600 font-semibold' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact">
                <Button variant="primary" className="!px-5 !py-2 !text-sm">Get Started</Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center z-50">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-700 hover:text-blue-600 focus:outline-none"
              >
                {isMobileMenuOpen ? <Icons.X size={24} /> : <Icons.Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass border-t border-slate-200 overflow-hidden"
            >
              <div className="px-4 pt-4 pb-8 space-y-4 flex flex-col items-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-lg font-medium ${
                      location.pathname === link.path ? 'text-blue-600' : 'text-slate-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link to="/contact" className="w-full">
                  <Button variant="primary" className="w-full mt-4">Get Started</Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20 z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 z-10 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="flex items-center space-x-2 mb-4">
                 <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">V</span>
                  </div>
                <span className="font-poppins font-bold text-xl text-white">
                  Vision<span className="text-blue-500">Prop</span>
                </span>
              </Link>
              <p className="text-sm text-slate-400 leading-relaxed">
                Premium property management solutions designed for the modern investor and NRI community.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-blue-400 transition">About Us</Link></li>
                <li><Link to="/services" className="hover:text-blue-400 transition">Services</Link></li>
                <li><Link to="/pricing" className="hover:text-blue-400 transition">Pricing</Link></li>
                <li><Link to="/faq" className="hover:text-blue-400 transition">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/services" className="hover:text-blue-400 transition">Property Monitoring</Link></li>
                <li><Link to="/services" className="hover:text-blue-400 transition">Rental Management</Link></li>
                <li><Link to="/services" className="hover:text-blue-400 transition">Legal Documentation</Link></li>
                <li><Link to="/services" className="hover:text-blue-400 transition">Maintenance</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><Icons.MapPin size={16} /> Indiranagar, Bangalore</li>
                <li className="flex items-center gap-2"><Icons.Phone size={16} /> +91 98765 43210</li>
                <li className="flex items-center gap-2"><Icons.Mail size={16} /> hello@visionprop.com</li>
                <li className="flex gap-4 mt-4">
                  <a href="#" className="hover:text-blue-400"><Icons.Instagram size={20}/></a>
                  <a href="#" className="hover:text-blue-400"><Icons.Twitter size={20}/></a>
                  <a href="#" className="hover:text-blue-400"><Icons.Linkedin size={20}/></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Vision Properties. All rights reserved.
          </div>
        </div>
      </footer>
      
      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-40">
        <a 
          href="https://wa.me/919876543210" 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full text-white shadow-xl hover:bg-green-600 transition-all hover:scale-110"
        >
          <Icons.Phone size={24} className="animate-pulse" />
        </a>
      </div>
    </div>
  );
};

export default Layout;

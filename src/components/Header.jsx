import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // DEFINITIVE MENU ITEMS
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: 'Portfolio' },
    { name: 'Insights', path: 'Insights' },
    { name: 'Contact', path: 'Contact', isButton: true }, // Added isButton flag for styling
  ];

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-neutral-900 py-4 shadow-md">
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif tracking-widest uppercase font-bold text-white">
          Saran Developers
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path === '/' ? '/' : createPageUrl(link.path)}
              className={link.isButton
                ? "border border-white px-6 py-2 text-sm tracking-widest uppercase transition-all hover:bg-amber-600 hover:border-amber-600 hover:text-white text-white"
                : `text-sm font-medium tracking-widest uppercase transition-colors hover:text-amber-600 ${
                  location.pathname === link.path || (link.path !== '/' && location.pathname.includes(link.path.toLowerCase()))
                    ? 'text-amber-600' 
                    : 'text-white/90'
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <nav className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path === '/' ? '/' : createPageUrl(link.path)}
                  className={link.isButton
                    ? "border border-neutral-900 text-neutral-900 px-6 py-2 text-sm tracking-widest uppercase w-full text-center"
                    : "text-neutral-900 font-medium tracking-widest uppercase"}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Button, Logo } from '../ui';
import { cn } from '../../lib/utils';
import {Contact} from '/src/components/sections/Contact.jsx'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar = () => {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
      style={{
        paddingTop: isScrolled ? '12px' : '24px'
      }}
    >
      <div className="container mx-auto max-w-7xl px-4">
        <nav 
          className={cn(
            // py-2 (8px) gives the ultimate slim-line look while everything centers flawlessly
            'flex items-center justify-between gap-4 rounded-full px-6 h-16 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]',
            isScrolled
              ? 'bg-white/85 border border-white/25 shadow-lg backdrop-blur-md'
              : 'bg-white/40 border border-white/10 backdrop-blur-sm'
          )}
        >
          {/* Logo container wrapper */}
          <Link 
            to="/" 
            onClick={() => setMobileMenuOpen(false)} 
            className="flex shrink-0 items-center justify-start h-full py-1"
          >
            <Logo />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1.5">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.href}
                className={({ isActive }) => 
                  cn(
                    'px-4.5 py-1.5 text-[14px] font-medium transition-all duration-300 rounded-full',
                    isActive 
                      ? 'text-primary bg-primary/10' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link to={'/contact'}>
            <Button size="sm" className="ml-2 h-9 rounded-full px-5 text-xs font-semibold bg-primary hover:bg-primary-dark text-white shadow-md shadow-primary/20 transition-all duration-200 hover:-translate-y-[1px]">
              Get Started
            </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-700 md:hidden hover:bg-white/50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="absolute left-4 right-4 mt-3 md:hidden z-[101]"
            >
              <div className="flex flex-col gap-1 rounded-3xl border border-white/40 bg-white/95 p-3 shadow-2xl backdrop-blur-xl">
                {navLinks.map((link) => (
                  <NavLink 
                    key={link.name}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) => 
                      cn(
                        'rounded-2xl px-5 py-2.5 text-base font-medium transition-colors',
                        isActive ? 'bg-primary/10 text-primary' : 'text-slate-700 hover:bg-slate-50'
                      )
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
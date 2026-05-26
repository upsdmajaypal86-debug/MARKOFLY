//import React, { useState, useEffect } from 'react';
//import { motion, AnimatePresence } from 'framer-motion';
//import { Menu, X, ArrowRight } from 'lucide-react';
//import { NavLink, Link, useLocation } from 'react-router-dom';
//import { Button, Logo } from '../ui';
//import { cn } from '../../lib/utils';
//
//const navLinks = [
//  { name: 'Home', href: '/' },
//  { name: 'About', href: '/about' },
//  { name: 'Services', href: '/services' },
//  { name: 'Contact', href: '/contact' },
//];
//
//export const Navbar = () => {
//  const { pathname } = useLocation();
//  const [isScrolled, setIsScrolled] = useState(false);
//  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//  const [mobileMenuPath, setMobileMenuPath] = useState(pathname);
//  const isMobileMenuVisible = mobileMenuOpen && mobileMenuPath === pathname;
//
//  useEffect(() => {
//    const handleScroll = () => setIsScrolled(window.scrollY > 50);
//    window.addEventListener('scroll', handleScroll, { passive: true });
//    return () => window.removeEventListener('scroll', handleScroll);
//  }, []);
//
//  const toggleMobileMenu = () => {
//    if (isMobileMenuVisible) {
//      setMobileMenuOpen(false);
//      return;
//    }
//
//    setMobileMenuPath(pathname);
//    setMobileMenuOpen(true);
//  };
//
//  const closeMobileMenu = () => {
//    setMobileMenuOpen(false);
//  };
//
//  return (
//    <header 
//      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out"
//      style={{
//        perspective: '1000px',
//        paddingTop: isScrolled ? '12px' : '20px'
//      }}
//    >
//      <div className="container mx-auto max-w-7xl px-4">
//        <nav 
//          className={cn(
//            'flex items-center justify-between gap-4 rounded-full px-4 py-1.5 transition-all duration-500 ease-3d',
//            isScrolled
//              ? 'bg-white/80 border border-white/40 shadow-[0_20px_40px_rgba(0,0,0,0.1)] backdrop-blur-xl'
//              : 'bg-transparent border border-transparent'
//          )}
//          style={{
//            transform: isScrolled 
//              ? 'translateY(0) rotateX(0deg)' 
//              : 'translateY(-5px) rotateX(-5deg)',
//            transformStyle: 'preserve-3d'
//          }}
//        >
//          {/* Logo - Styles removed as requested */}
//          <Link to="/" onClick={closeMobileMenu} className="flex shrink-0 items-center transition-transform active:scale-95">
//            <Logo imageClassName="w-[110px] sm:w-[130px]" />
//          </Link>
//
//          {/* Desktop Nav - Slimmer height */}
//          <div className="hidden md:flex items-center gap-1">
//            {navLinks.map((link) => (
//              <NavLink 
//                key={link.name} 
//                to={link.href}
//                className={({ isActive }) => 
//                  cn(
//                    'px-4 py-2 text-sm font-medium transition-colors',
//                    isActive ? 'text-primary' : 'text-slate-600 hover:text-primary'
//                  )
//                }
//              >
//                {link.name}
//              </NavLink>
//            ))}
//            
//            <Button size="sm" className="ml-2 h-9 rounded-full px-5 text-sm">
//              Get Started
//            </Button>
//          </div>
//
//          {/* Mobile Toggle */}
//          <button 
//            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-700 md:hidden"
//            onClick={toggleMobileMenu}
//          >
//            {isMobileMenuVisible ? <X size={20} /> : <Menu size={20} />}
//          </button>
//        </nav>
//
//        {/* Mobile Menu */}
//        <AnimatePresence>
//          {isMobileMenuVisible && (
//            <motion.div
//              initial={{ opacity: 0, y: -10, rotateX: -15 }}
//              animate={{ opacity: 1, y: 0, rotateX: 0 }}
//              exit={{ opacity: 0, y: -10, rotateX: -15 }}
//              className="absolute left-4 right-4 mt-2 md:hidden"
//            >
//              <div className="flex flex-col gap-1 rounded-3xl border border-white/60 bg-white/95 p-2 shadow-2xl backdrop-blur-xl">
//                {navLinks.map((link) => (
//                  <NavLink 
//                    key={link.name}
//                    to={link.href}
//                    onClick={closeMobileMenu}
//                    className="rounded-2xl px-5 py-3 text-base font-medium text-slate-700 hover:bg-slate-50"
//                  >
//                    {link.name}
//                  </NavLink>
//                ))}
//              </div>
//            </motion.div>
//          )}
//        </AnimatePresence>
//      </div>
//
//      <style jsx global>{`
//        .ease-3d {
//          transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
//        }
//      `}</style>
//    </header>
//  );
//};
//
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
                      ? 'text-blue-600 bg-blue-50/80' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link to={'/contact'}>
            <Button size="sm" className="ml-2 h-9 rounded-full px-5 text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-200 transition-all duration-200 hover:-translate-y-[1px]">
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
                        isActive ? 'bg-blue-50 text-blue-600' : 'text-slate-700 hover:bg-slate-50'
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
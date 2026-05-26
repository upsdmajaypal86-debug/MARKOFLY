import React from 'react';
import { Github, Twitter, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';
import { Logo } from '../ui';
import {Services} from '/src/components/sections/Services.jsx'

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
      
      {/* Background blobs */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Agency Bio */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Logo light />
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Crafting premium digital experiences for forward-thinking brands. We merge creativity with technology to build the future of the web.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin, Instagram].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-slate-300 hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              {['Web Design', 'Development', 'Branding', 'UI/UX Design', 'Digital Marketing'].map((link) => (
                <li key={link}>
                  <a href="/services" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                    {link}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-lg font-bold mb-6">Stay in the loop</h4>
            <p className="text-slate-400 mb-6">Receive the latest design trends and insights weekly.</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-3 rounded-full bg-slate-800 border-none text-white focus:ring-2 focus:ring-primary outline-none"
              />
              <button className="px-8 py-3 rounded-full bg-primary font-bold hover:bg-primary-dark transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            &copy; 2026 MARKOFLY. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};


import React from 'react';
import { motion } from 'framer-motion';
import { PageHero } from '../components/layout/PageHero';
import { Contact as ContactSection } from '../components/sections/Contact';
import { FAQ } from '../components/sections/FAQ';

export const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white"
    >
      <PageHero 
        badge="Get In Touch"
        title="Let's start a conversation about your project."
        description="Whether you have a specific project in mind or just want to explore possibilities, our team is ready to help you navigate your digital journey."
      />
      
      <ContactSection />
      <FAQ />
      
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Other ways to connect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-xl mb-2">Email</h3>
              <p className="text-gray-600">hello@antigravity.studio</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-xl mb-2">Social</h3>
              <a href="https://twitter.com/Markofly" className="text-gray-600" target="_blank" rel="noopener noreferrer">@Markofly</a>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-xl mb-2">Office</h3>
              <p className="text-gray-600">Digital Nomads Everywhere</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

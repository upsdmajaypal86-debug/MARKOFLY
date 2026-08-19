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
      
      
    </motion.div>
  );
};

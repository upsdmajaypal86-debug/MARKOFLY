import React from 'react';
import { motion } from 'framer-motion';
import { PageHero } from '../components/layout/PageHero';
import { CTASection } from '../components/layout/CTASection';
import { Services as ServicesSection } from '../components/sections/Services';
import { Process } from '../components/sections/Process';
import { FAQ } from '../components/sections/FAQ';

export const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white"
    >
      <PageHero 
        badge="Our Expertise"
        title="We provide solutions that scale your business."
        description="From strategic design to robust engineering, our comprehensive services are tailored to meet your unique business goals and drive measurable impact."
      />
      
      <ServicesSection />
      <Process />
      <FAQ />
      
      <CTASection 
        title="Ready to start your project?"
        description="We'll help you define your roadmap and build a product that your users will love."
        buttonText="Get a Free Quote"
      />
    </motion.div>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { WhyUs } from '../components/sections/WhyUs';
import { Testimonials } from '../components/sections/Testimonials';
import { CTASection } from '../components/layout/CTASection';
import { Process } from '../components/sections/Process';
import { FAQ } from '../components/sections/FAQ';

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white"
    >
      <Hero />
      <WhyUs />
      <Process />
      <Services />
      <Testimonials />
      <FAQ />
      <CTASection />
    </motion.div>
  );
};

import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Hero } from '../components/sections/Hero';

const Services = lazy(() => import('../components/sections/Services').then((module) => ({ default: module.Services })));
const WhyUs = lazy(() => import('../components/sections/WhyUs').then((module) => ({ default: module.WhyUs })));
const Testimonials = lazy(() => import('../components/sections/Testimonials').then((module) => ({ default: module.Testimonials })));
const CTASection = lazy(() => import('../components/layout/CTASection').then((module) => ({ default: module.CTASection })));
const Process = lazy(() => import('../components/sections/Process').then((module) => ({ default: module.Process })));
const FAQ = lazy(() => import('../components/sections/FAQ').then((module) => ({ default: module.FAQ })));

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
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <WhyUs />
        <Process />
        <Services />
        <Testimonials />
        <FAQ />
        <CTASection />
      </Suspense>
    </motion.div>
  );
};

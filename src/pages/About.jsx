import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Target, Award, Cpu, MessageSquare } from 'lucide-react';
import { Section } from '../components/ui';
import { PageHero } from '../components/layout/PageHero';
import { Vision } from '../components/sections/Vision';
import { CTASection } from '../components/layout/CTASection';

const highlights = [
  { text: 'Strategy-first approach to design', icon: Target },
  { text: 'Award winning creative team', icon: Award },
  { text: 'Future-proof technology stack', icon: Cpu },
  { text: 'Transparent communication', icon: MessageSquare },
];

export const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white"
    >
      <PageHero
        badge="About Us"
        title="We are architects of the digital realm."
        description="A collective of designers, engineers, and strategists united by a single purpose: to build digital experiences that matter."
      />

      <Section id="about" className="bg-gradient-to-b from-white to-slate-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Key Metric Card Container - Replaced raster images for instant paint time */}
          <div className="lg:col-span-5 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative p-8 sm:p-10 rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 blur-2xl pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide">
                  <span>AGENCY IMPACT</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                  Driving digital transformation with purpose
                </h3>
                
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  We bridge the gap between imagination and execution by delivering high-performance, modern digital platforms built for scale.
                </p>

                <div className="pt-6 border-t border-slate-100 grid grid-cols-2 gap-4">
                  <div>
                    <span className="block text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      100%
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-slate-500">
                      Client Commitment
                    </span>
                  </div>
                  <div>
                    <span className="block text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      Modern
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-slate-500">
                      Tech Architecture
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 w-full">
            <h4 className="text-primary font-semibold tracking-widest uppercase mb-3 text-xs">
              About The Agency
            </h4>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              We help human-centric brands build{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                empathetic digital products.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
              We've navigated the rapidly evolving digital landscape to build experiences that don't just look great, but work flawlessly. Our mission is to bridge the gap between imagination and reality.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.text}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 group p-3 rounded-xl hover:bg-white/60 transition duration-200"
                  >
                    <div className="w-8 h-8 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon size={16} />
                    </div>
                    <span className="font-medium text-sm sm:text-base text-slate-700 group-hover:text-slate-900 transition">
                      {item.text}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </Section>

      <Vision />

      <CTASection
        title="Ready to start your project?"
        description="Let's build something extraordinary together."
        buttonText="Get in Touch"
      />
    </motion.div>
  );
};
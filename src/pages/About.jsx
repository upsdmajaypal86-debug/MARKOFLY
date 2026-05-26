import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Section } from '../components/ui';
import { PageHero } from '../components/layout/PageHero';
import { Vision } from '../components/sections/Vision';
import { CTASection } from '../components/layout/CTASection';
import image1 from '../assets/images/img1.avif';
import image2 from '../assets/images/img-2.avif';
export const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white"
    >
      <PageHero 
        badge="About Us"
        title="We are architects of the digital realm."
        description="A collective of designers, engineers, and strategists united by a single purpose: to build digital experiences that matter."
      />

      <Section id="about" className="bg-gradient-to-b from-white to-slate-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
              className="rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <img 
                src={image2} 
                alt="team" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-xl mt-12 hover:shadow-2xl transition-all duration-300"
            >
              <img 
                src={image1} 

                alt="meeting" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Content */}
          <div>
            <h4 className="text-primary font-semibold tracking-widest uppercase mb-3 text-xs">
              About The Agency
            </h4>

            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              We help human-centric brands build{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                empathetic digital products.
              </span>
            </h2>

            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
              we've navigated the rapidly evolving digital landscape 
              to build experiences that don't just look great, but work flawlessly. 
              Our mission is to bridge the gap between imagination and reality.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {[
                'Strategy-first approach to design',
                'Award winning creative team',
                'Future-proof technology stack',
                'Transparent communication'
              ].map((item) => (
                <motion.div 
                  key={item}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="font-medium text-slate-700 group-hover:text-slate-900 transition">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
            
            {/* Experience Card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-[1px] max-w-sm rounded-[2rem] bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30"
            >
              <div className="bg-white/80 backdrop-blur-xl p-6 rounded-[1.8rem] flex items-center gap-6 shadow-lg">
                <div className="text-5xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  50+
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    Successful Launches
                  </p>
                  <p className="text-xs text-slate-500">
                    Across Industries
                  </p>
                </div>
              </div>
            </motion.div>
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
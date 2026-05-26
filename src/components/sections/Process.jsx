import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Search, CheckCircle } from 'lucide-react';
import { Section } from '../ui';

const steps = [
  {
    icon: <Search className="w-6 h-6" />,
    title: 'Discovery',
    desc: 'We start by understanding your goals, audience, and market landscape through deep research.'
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Strategy',
    desc: 'Developing a roadmap that aligns your vision with practical technical and design goals.'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Design & Build',
    desc: 'Our iterative process ensures every pixel and line of code is optimized for performance.'
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: 'Launch & Scale',
    desc: 'Deploying your product and providing the support needed to grow and evolve over time.'
  }
];

export const Process = () => {
  return (
    <Section id="process" className="bg-white">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <h4 className="text-primary font-bold tracking-wider uppercase mb-4 text-sm">How We Work</h4>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Creative Process</h2>
        <p className="text-slate-600 text-lg">
          A streamlined approach to transforming ambitious ideas into world-class digital realities.
        </p>
      </div>

      <div className="relative">
        {/* Connection Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 hidden lg:block" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative z-10 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-white border-8 border-slate-50 shadow-xl flex items-center justify-center text-primary mx-auto mb-8 hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm mx-auto mb-6 shadow-lg shadow-primary/20">
                0{i + 1}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

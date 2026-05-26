import React from 'react';
import { motion } from 'framer-motion';
import { Section, GlassCard } from '../ui';
import { Compass, Lightbulb, Target, ArrowUpRight } from 'lucide-react';

const visionPillars = [
  {
    id: 1,
    title: 'Inclusion',
    description: 'We believe digital experiences should be accessible to everyone, regardless of ability or background.',
    icon: Compass,
    color: 'from-blue-500 to-cyan-400'
  },
  {
    id: 2,
    title: 'Innovation',
    description: 'Pushing the boundaries of what is possible by integrating cutting-edge technology with human intuition.',
    icon: Lightbulb,
    color: 'from-purple-500 to-pink-400'
  },
  {
    id: 3,
    title: 'Impact',
    description: 'Creating meaningful change for brands and their customers through strategy-first digital solutions.',
    icon: Target,
    color: 'from-orange-500 to-amber-400'
  }
];

export const Vision = () => {
  return (
    <Section id="vision" className="relative bg-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="text-secondary font-bold tracking-wider uppercase mb-4 text-sm">Our Philosophy</h4>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-8">
            A vision built on <span className="text-gradient">human values.</span>
          </h2>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-xl">
            At INCREGO, we don't just build websites; we create digital ecosystems that empower brands to reach their full potential while staying true to their human core.
          </p>

          <div className="flex flex-col gap-6">
            {visionPillars.map((pillar, index) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group flex items-start gap-6 p-6 rounded-3xl hover:bg-slate-50 transition-colors cursor-default"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                  <pillar.icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{pillar.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          {/* Abstract 3D Glass Composition */}
          <div className="relative w-full aspect-square max-w-md">
            <GlassCard className="absolute inset-0 rounded-[4rem] border-white/60 bg-white/20 backdrop-blur-3xl shadow-[0_32px_120px_-20px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center p-12 text-center group overflow-hidden">
               {/* Animated inner rings */}
               <div className="absolute inset-0 border-[60px] border-primary/5 rounded-full scale-[1.2] animate-[spin_20s_linear_infinite]" />
               <div className="absolute inset-0 border-[2px] border-secondary/20 rounded-full scale-[0.8] animate-[spin_15s_linear_infinite_reverse]" />
               
               <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-24 h-24 mb-8 bg-gradient-to-tr from-primary to-secondary rounded-3xl flex items-center justify-center text-white shadow-2xl relative z-10"
               >
                  <ArrowUpRight size={48} />
               </motion.div>
               
               <h3 className="text-3xl font-black text-slate-900 mb-4 relative z-10 italic">Forward Always.</h3>
               <p className="text-slate-500 text-sm font-medium relative z-10">
                 Our vision is simple: to make the digital world more human, one interaction at a time.
               </p>

               <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            </GlassCard>

            {/* Floating micro-cards */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 left-10 glass-card p-4 rounded-2xl shadow-xl z-20 border-white/80"
            >
              <div className="text-xs font-bold text-primary uppercase">Innovation</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 right-10 glass-card p-4 rounded-2xl shadow-xl z-20 border-white/80"
            >
              <div className="text-xs font-bold text-secondary uppercase">Humanity</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

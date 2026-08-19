import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Layers, Building2, Star } from 'lucide-react';
import { Section, GlassCard } from '../ui';

const testimonials = [
  {
    id: 1,
    clientName: 'Govind Rajput',
    company: 'Brajurja',
    role: 'CEO',
    category: 'solar',
    text: 'Working with the team was a game-changer for us. Their innovative design and development process transformed our product into something truly world-class.',
  },
  {
    id: 2,
    clientName: 'Sanjiv kumar',
    company: 'EcoLife Solutions',
    role: 'Product Manager',
    category: 'E-commerce',
    text: 'The attention to detail and user experience is unparalleled. They delivered beyond our expectations, well ahead of schedule.',
  },
  {
    id: 3,
    clientName: 'vikram singh',
    company: 'Bloom Health',
    role: 'Founder',
    category: 'Healthcare',
    text: 'Professional, creative, and highly technical. They captured our brand essence perfectly while building a scalable platform.',
  },
  {
    id: 4,
    clientName: 'Ananya sharma',
    company: 'Wonderlust Adventures',
    role: 'Head of Growth',
    category: 'Travel',
    text: 'An exceptional partner for high-scale digital solutions. Communication was seamless and execution was top tier throughout.',
  },
  {
    id: 5,
    clientName: 'Sophia Lin',
    company: 'Aura Systems',
    role: 'Lead Architect',
    category: 'Smart Home',
    text: 'Their technical execution on complex user interfaces set a new standard for our core product offering.',
  },
  {
    id: 6,
    clientName: 'krishna Rajput',
    company: 'Markofly',
    role: 'Founder & CEO',
    category: 'Design',
    text: 'Flawless typography, smooth interactions, and a deep understanding of modern aesthetic benchmarks.',
  },
];

const categories = ['All', 'solar', 'E-commerce', 'Healthcare', 'Travel', 'Smart Home', 'Design'];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

export const Testimonials = () => {
  const [filter, setFilter] = useState('All');

  const filteredTestimonials = useMemo(() => {
    return filter === 'All'
      ? testimonials
      : testimonials.filter((t) => t.category === filter);
  }, [filter]);

  return (
    <Section id="testimonials" className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 px-4 sm:px-6 lg:px-8">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider mb-5">
          <Layers size={14} />
          <span>CLIENT ENDORSEMENTS</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          Trusted by <span className="text-primary">visionaries</span>
        </h2>
        <p className="mt-4 text-slate-600 text-lg">
          Real feedback from visionary founders and team leaders we've helped scale.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex justify-center flex-wrap gap-3 mb-14">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === cat
                ? 'bg-primary text-white shadow-md'
                : 'bg-white/70 backdrop-blur border border-slate-200 text-slate-600 hover:border-primary/40 hover:text-primary'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Testimonials Grid Layout */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {filteredTestimonials.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              layout
              whileHover={{ y: -4 }}
              className="h-full"
            >
              <GlassCard className="group relative flex flex-col justify-between h-full p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200/80 hover:border-primary/40 shadow-sm hover:shadow-xl transition-all duration-300">
                <div>
                  {/* Category Pill & Rating */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {item.category}
                    </span>
                    <div className="flex gap-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-yellow-400" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Quote Body */}
                  <p className="text-slate-700 font-medium text-base leading-relaxed italic mb-8">
                    “{item.text}”
                  </p>
                </div>

                {/* Client & Company Info Header */}
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                      {item.clientName}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      {item.role}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    <Building2 size={14} />
                    <span>{item.company}</span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
};
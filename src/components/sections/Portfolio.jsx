import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Layers, Building2 } from 'lucide-react';
import { Section } from '../ui';

const clients = [
  {
    id: 1,
    clientName: 'Sarah Jenkins',
    company: 'Fintech Dynamics',
    role: 'VP of Product',
    category: 'Fintech',
    tags: ['UI/UX Design', 'React App', 'Design System'],
  },
  {
    id: 2,
    clientName: 'Marcus Vance',
    company: 'EcoShop Global',
    role: 'Founder & CEO',
    category: 'E-commerce',
    tags: ['Shopify Plus', 'Brand Identity', 'Conversion Optimization'],
  },
  {
    id: 3,
    clientName: 'Dr. Aris Thorne',
    company: 'Pulse Health',
    role: 'Chief Medical Officer',
    category: 'Healthcare',
    tags: ['Analytics Dashboard', 'HIPAA Compliance', 'React'],
  },
  {
    id: 4,
    clientName: 'Elena Rostova',
    company: 'Vanguard Expeditions',
    role: 'Head of Marketing',
    category: 'Travel',
    tags: ['Next.js', 'Booking Engine', 'Maps Integration'],
  },
  {
    id: 5,
    clientName: 'David Chen',
    company: 'Aura Automations',
    role: 'Lead Architect',
    category: 'Smart Home',
    tags: ['IoT Dashboard', 'AI Interfaces', 'Mobile UX'],
  },
  {
    id: 6,
    clientName: 'Claire Duprès',
    company: 'Atelier Creative Studio',
    role: 'Creative Director',
    category: 'Design',
    tags: ['WebGL Showcase', 'Interactive Web', 'Branding'],
  },
];

const categories = ['All', 'Fintech', 'E-commerce', 'Healthcare', 'Travel', 'Smart Home', 'Design'];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

export const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const filteredClients = useMemo(() => {
    return filter === 'All' ? clients : clients.filter((c) => c.category === filter);
  }, [filter]);

  return (
    <Section id="portfolio" className="relative py-24 overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-4 py-2 rounded-full mb-5">
          <Layers size={14} /> Client Roster
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Trusted by <span className="text-gradient">industry pioneers</span>
        </h2>
        <p className="text-slate-500 text-lg">
          We partner with visionary companies and leaders to build high-impact digital solutions.
        </p>
      </div>

      {/* Filters */}
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

      {/* Client List Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredClients.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              layout
              whileHover={{ y: -4 }}
              className="group relative flex flex-col justify-between p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200/80 hover:border-primary/40 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {item.category}
                  </span>
                  <div className="p-2 rounded-full bg-slate-100 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-slate-500">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                {/* Company & Client Detail */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-primary font-medium text-sm mb-1">
                    <Building2 size={16} />
                    <span>{item.company}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {item.clientName}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-medium">{item.role}</p>
                </div>
              </div>

              {/* Scope / Deliverables Tags */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-600 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* CTA */}
      <div className="text-center mt-16">
        <button className="px-10 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg hover:scale-105 transition duration-300">
          Work With Us
        </button>
      </div>
    </Section>
  );
};
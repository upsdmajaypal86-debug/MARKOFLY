import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Layers } from 'lucide-react';
import { Section } from '../ui';

const projects = [
  {
    id: 1,
    title: 'Modern Bank App',
    category: 'Fintech',
    description: 'A seamless digital banking experience built for the modern era.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    tags: ['UI/UX', 'React', 'Node.js'],
  },
  {
    id: 2,
    title: 'Eco-Friendly E-com',
    category: 'E-commerce',
    description: 'A sustainable shopping platform with a strong green identity.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
    tags: ['Shopify', 'Design', 'Branding'],
  },
  {
    id: 3,
    title: 'Health Insight Web',
    category: 'Healthcare',
    description: 'Patient-centric health tracking and analytics dashboard.',
    image: 'https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=800',
    tags: ['Dashboard', 'Analytics', 'React'],
  },
  {
    id: 4,
    title: 'Global Travel Portal',
    category: 'Travel',
    description: 'Discover and book extraordinary experiences around the world.',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800',
    tags: ['Next.js', 'Maps API', 'UI/UX'],
  },
  {
    id: 5,
    title: 'AI Smart Home App',
    category: 'Smart Home',
    description: 'Intelligent home automation with AI-powered controls.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800',
    tags: ['IoT', 'AI', 'Mobile App'],
  },
  {
    id: 6,
    title: 'Creative Studio Web',
    category: 'Design',
    description: 'Portfolio and showcase for a world-class design studio.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    tags: ['Branding', 'Animation', 'WebGL'],
  },
];

const categories = ['All', 'Fintech', 'E-commerce', 'Healthcare', 'Travel', 'Smart Home', 'Design'];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

export const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = useMemo(() => {
    return filter === 'All' ? projects : projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <Section id="portfolio" className="relative py-24 overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 blur-3xl" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-4 py-2 rounded-full mb-5">
          <Layers size={14} /> Portfolio
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Crafted with <span className="text-gradient">precision & creativity</span>
        </h2>
        <p className="text-slate-500 text-lg">
          We build beautiful, high-performance digital experiences.
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
                ? 'bg-primary text-white shadow-lg'
                : 'bg-white/70 backdrop-blur border border-slate-200 text-slate-600 hover:border-primary/40 hover:text-primary'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              layout
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl overflow-hidden bg-white/80 backdrop-blur-xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* Floating button */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition">
                  <div className="p-3 rounded-full bg-white text-black shadow-lg">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-500 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-slate-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* CTA */}
      <div className="text-center mt-20">
        <button className="px-10 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg hover:scale-105 transition">
          Explore More Projects
        </button>
      </div>
    </Section>
  );
};
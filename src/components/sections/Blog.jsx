import React from 'react';
import { motion } from 'framer-motion';
import { Section, GlassCard, Button } from '../ui';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Digital Marketing Trends for 2026',
    excerpt: 'Stay ahead of the curve with our comprehensive guide to the evolving digital marketing landscape. From AI to immersive UX.',
    category: 'Marketing',
    author: 'Sarah Johnson',
    date: 'March 15, 2026',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'Why Human-Centric Design is the Future of Web',
    excerpt: 'Explore how empathetic design principles are transforming user experiences and building stronger brand-customer connections.',
    category: 'Design Strategy',
    author: 'Marcus Chen',
    date: 'March 12, 2026',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'Maximizing Web Performance for Better SEO',
    excerpt: 'Technical tips and tricks to optimize your site speed, core web vitals, and search engine visibility starting today.',
    category: 'Development',
    author: 'Alex Rivera',
    date: 'March 10, 2026',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  }
];

export const Blog = () => {
  return (
    <Section id="blog" className="bg-slate-50/50">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h4 className="text-primary font-bold tracking-wider uppercase mb-4 text-sm">Insights & Updates</h4>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
          Latest From <span className="text-gradient">Our Studio.</span>
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Discover expert perspectives on digital innovation, design strategy, and the technology shaping our world.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <GlassCard className="h-full flex flex-col p-0 overflow-hidden border-white/40 ring-1 ring-white/20 group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-primary shadow-sm uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs font-medium text-slate-400 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-primary/60" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User size={14} className="text-primary/60" />
                    <span>{post.author}</span>
                  </div>
                </div>

                <a href={`#blog-${post.id}`} className="group/title">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight group-hover/title:text-primary transition-colors">
                    {post.title}
                  </h3>
                </a>

                <p className="text-slate-600 mb-8 line-clamp-3 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="mt-auto">
                  <button className="flex items-center gap-2 text-sm font-bold text-slate-900 group/btn hover:text-primary transition-colors">
                    Read Full Article
                    <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover/btn:border-primary group-hover/btn:bg-primary group-hover/btn:text-white transition-all">
                      <ArrowRight size={14} className="-rotate-45" />
                    </div>
                  </button>
                </div>
              </div>
            </GlassCard>
          </motion.article>
        ))}
      </div>

      <div className="text-center mt-16">
        <Button variant="secondary" size="lg">Explore Our Full Blog</Button>
      </div>
    </Section>
  );
};

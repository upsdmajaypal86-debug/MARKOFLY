import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Code2, Rocket, Search, Smartphone, ShieldCheck, Target, Cpu } from 'lucide-react';
import { GlassCard, Section } from '../ui';

const services = [
  {
    icon: <Search className="w-8 h-8" />,
    title: 'SEO & Search Strategy',
    desc: 'Increase your search visibility and drive high-quality organic traffic through technical optimization and content strategy.',
    link: '/services/seo',
    cta: 'Explore service',
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: 'Web Development',
    desc: 'Building high-performance, scalable web applications using the latest technologies like React, Next.js, and Node.',
    link: '/services/web-development',
    cta: 'Explore service',
    featured: true,
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Paid Advertising & PPC',
    desc: 'Scale your business with precision-targeted paid advertising across Google, Meta, and LinkedIn to drive immediate ROI.',
    link: '/services/paid-ads',
    cta: 'Explore service',
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Brand Identity',
    desc: 'Crafting unique brand stories and visual identities that resonate with your target audience and command attention.',
    link: '/services/brand-identity',
    cta: 'Explore service',
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: 'Digital Marketing & Growth',
    desc: 'Accelerating your growth through integrated content strategy, email marketing, and multi-channel social management.',
    link: '/services/digital-marketing',
    cta: 'Explore service',
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: 'Business Automation & AI',
    desc: 'Scaling your operations through custom workflow automation, AI integration, and strategic technical advisory.',
    link: '/services/automation',
    cta: 'Explore service',
  }
];

export const Services = () => {
  return (
    <Section id="services">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <h4 className="text-primary font-bold tracking-wider uppercase mb-4 text-sm">What We Do</h4>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Premium Services</h2>
        <p className="text-slate-600 text-lg">
          We provide end-to-end digital solutions designed to help your business scale and succeed in a digital-first world.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <GlassCard
            key={i}
            className={`group border-slate-100 hover:bg-white/80 ${
              service.featured ? 'border-primary/30 bg-white shadow-primary/10' : ''
            }`}
          >
            {service.featured && (
              <span className="mb-5 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Featured
              </span>
            )}
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-500">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              {service.desc}
            </p>
            <Link to={service.link ?? '/contact'} className="font-bold text-primary flex items-center gap-2 group/link">
              {service.cta ?? 'Read More'}
              <div className="w-6 h-[2px] bg-primary scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left" />
            </Link>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
};

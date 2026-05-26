import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Search,
  Zap,
  ShieldCheck,
  Target,
  BarChart3,
  Globe,
  Compass,
  Sparkles,
  MousePointer2,
  Palette,
  Eye,
  Type,
  Layout,
  BookOpen,
  Figma,
} from 'lucide-react';
import { CTASection } from '../components/layout/CTASection';
import { GlassCard, Section } from '../components/ui';
import {
  brandIdentityCapabilities,
  brandIdentityDeliverables,
  brandIdentityFaqs,
  brandIdentityHeroPills,
  brandIdentityHighlights,
  brandIdentityMetrics,
  brandIdentityProcess,
  brandIdentityTechStack,
} from '../content/brandIdentityService';

const highlightIcons = [Eye, ShieldCheck, Zap];
const capabilityIcons = [Compass, Palette, Type, Layout, MousePointer2, BookOpen];

export const BrandIdentityService = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white"
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-[-8%] top-[8%] h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute right-[-8%] top-[16%] h-80 w-80 rounded-full bg-secondary/15 blur-3xl" />
          <div className="absolute bottom-[-6%] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>

        <div className="container mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <Link to="/" className="transition-colors hover:text-primary">
                Home
              </Link>
              <span>/</span>
              <Link to="/services" className="transition-colors hover:text-primary">
                Services
              </Link>
              <span>/</span>
              <span className="font-medium text-slate-700">Brand Identity & Visual Design</span>
            </nav>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Sparkles className="h-4 w-4" />
              Brand Identity & Visual Design
            </div>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-slate-950 md:text-6xl">
              Strategic brand identities built to command attention and build immediate trust.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              We combine deep strategy with visual excellence to create distinctive identities that stick in your audience's 
              minds and tell your brand story with authority.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {brandIdentityHeroPills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {pill}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/20 transition-transform hover:scale-[1.02]"
              >
                Define Your Brand
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-700 transition-colors hover:border-primary/30 hover:text-primary"
              >
                View All Services
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/10 blur-3xl" />
            <GlassCard className="relative overflow-hidden rounded-[2.5rem] border-white/70 bg-white/80 p-0 shadow-[0_28px_90px_rgba(59,130,246,0.18)]">
              <div className="bg-slate-950 px-6 py-6 text-slate-100">
                <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-sky-200/80">
                  <Palette className="h-4 w-4" />
                  Identity Blueprint
                </div>
                <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 font-mono text-sm leading-7 text-slate-300">
                  <p>{'identity = {'}</p>
                  <p className="pl-4 text-sky-300">strategy: 'bold-positioning',</p>
                  <p className="pl-4 text-emerald-300">aesthetic: 'premium-distinctive',</p>
                  <p className="pl-4 text-violet-300">execution: 'pixel-perfect',</p>
                  <p className="pl-4 text-amber-300">output: 'consistency-ready'</p>
                  <p>{'}'}</p>
                </div>
              </div>

              <div className="grid gap-4 p-6 md:grid-cols-3">
                {brandIdentityMetrics.map((metric) => (
                  <div key={metric.label} className="rounded-[1.75rem] border border-slate-100 bg-white p-5 shadow-sm">
                    <div className="text-2xl font-bold text-slate-950">{metric.value}</div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{metric.label}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-100 px-6 py-6">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                   Brand Foundations
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    'Primary & secondary logos',
                    'Curated color palette',
                    'Typography framework',
                    'Usage guidelines',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm font-medium text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <Section className="pt-0">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-primary">Why This Service Works</p>
          <h2 className="text-3xl font-bold text-slate-950 md:text-5xl">
            A brand is more than a logo. It’s a promise and a feeling.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Our branding approach balances strategic positioning, visual harmony, and emotional resonance so your identity
            actually supports your business growth.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {brandIdentityHighlights.map((item, index) => {
            const Icon = highlightIcons[index];

            return (
              <GlassCard key={item.title} className="h-full rounded-[2rem] border-slate-100 bg-white/80 p-8">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-950">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{item.description}</p>
              </GlassCard>
            );
          })}
        </div>
      </Section>

      {/* Capabilities Section */}
      <Section className="bg-slate-50">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-primary">Capabilities</p>
            <h2 className="text-3xl font-bold text-slate-950 md:text-5xl">
              End-to-end visual identity for modern digital brands.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Whether you are launching a new startup or refreshing a legacy brand, we build a cohesive system that 
              ensures you look premium across every channel and touchpoint.
            </p>

            <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Typical deliverables</p>
              <div className="space-y-4">
                {brandIdentityDeliverables.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span className="leading-7 text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {brandIdentityCapabilities.map((item, index) => {
              const Icon = capabilityIcons[index];

              return (
                <GlassCard key={item.title} className="h-full rounded-[2rem] border-slate-100 bg-white/85 p-7">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section>
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-primary">Process</p>
          <h2 className="text-3xl font-bold text-slate-950 md:text-5xl">A structured path to a distinct brand.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            We follow a collaborative branding workflow that ensures your new identity is both visually stunning and 
            strategically sound.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {brandIdentityProcess.map((item) => (
            <div key={item.step} className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
              <div className="relative">
                <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary">{item.step}</p>
                <h3 className="mt-4 text-2xl font-bold text-slate-950">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Tech Stack Section */}
      <Section className="bg-slate-950 text-white">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-sky-300">Design Foundation</p>
            <h2 className="text-3xl font-bold md:text-5xl">
              Professional tools for world-class execution.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              We leverage the same industry-leading tools and design methodologies used by global agencies to ensure your brand 
              is technically perfect and ready for any future application.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {brandIdentityTechStack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: 'Vector-perfect logos',
                description: 'We build your core identity assets as scalable vectors that work from favicons to billboards.',
              },
              {
                title: 'Strategic color theory',
                description: 'Choosing palettes based on psychology, accessibility, and unique market positioning.',
              },
              {
                title: 'Systemized design styles',
                description: 'Building consistent patterns for photography, icons, and illustrations that define your brand.',
              },
              {
                title: 'Future-proof guidelines',
                description: 'Clear documentation that helps your team and partners maintain brand integrity as you grow.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-slate-50">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-primary">FAQ</p>
          <h2 className="text-3xl font-bold text-slate-950 md:text-5xl">Questions brands ask about their look.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Find answers to common questions about timelines, file ownership, and our rebranding process.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {brandIdentityFaqs.map((item) => (
            <article key={item.question} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-slate-950">{item.question}</h3>
              <p className="mt-4 leading-7 text-slate-600">{item.answer}</p>
            </article>
          ))}
        </div>
      </Section>

      <CTASection
        title="Ready to build a brand that lasts?"
        description="Tell us about your brand vision, and we will help perform a quick strategic review of your current identity."
        buttonText="Work on Your Brand"
      />
    </motion.div>
  );
};

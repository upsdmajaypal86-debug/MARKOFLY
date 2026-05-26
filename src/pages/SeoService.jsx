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
} from 'lucide-react';
import { CTASection } from '../components/layout/CTASection';
import { GlassCard, Section } from '../components/ui';
import {
  seoCapabilities,
  seoDeliverables,
  seoFaqs,
  seoHeroPills,
  seoHighlights,
  seoMetrics,
  seoProcess,
  seoTechStack,
} from '../content/seoService';

const highlightIcons = [Target, Zap, ShieldCheck];
const capabilityIcons = [Compass, Search, MousePointer2, BarChart3, Globe, TrendingUp];

export const SeoService = () => {
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
              <span className="font-medium text-slate-700">SEO & Search Strategy</span>
            </nav>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Sparkles className="h-4 w-4" />
              SEO & Search Strategy
            </div>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-slate-950 md:text-6xl">
              Data-driven SEO services built to increase your visibility and drive high-quality organic traffic.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              We identify highest-impact search opportunities, optimize your technical foundation, and craft strategic content 
              to build long-term authority and measurable growth.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {seoHeroPills.map((pill) => (
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
                Start Your Project
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
                  <TrendingUp className="h-4 w-4" />
                  Growth Blueprint
                </div>
                <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 font-mono text-sm leading-7 text-slate-300">
                  <p>{'strategy = {'}</p>
                  <p className="pl-4 text-sky-300">intent: 'high-converting',</p>
                  <p className="pl-4 text-emerald-300">technical: 'zero-friction',</p>
                  <p className="pl-4 text-violet-300">authority: 'trusted-leader',</p>
                  <p className="pl-4 text-amber-300">impact: 'sustainable-growth'</p>
                  <p>{'}'}</p>
                </div>
              </div>

              <div className="grid gap-4 p-6 md:grid-cols-3">
                {seoMetrics.map((metric) => (
                  <div key={metric.label} className="rounded-[1.75rem] border border-slate-100 bg-white p-5 shadow-sm">
                    <div className="text-2xl font-bold text-slate-950">{metric.value}</div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{metric.label}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-100 px-6 py-6">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                  Included in every strategy
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    'Competitor search analysis',
                    'Technical health monitoring',
                    'Keyword performance tracking',
                    'Content optimization guide',
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
            Search engine success is earned through consistency and quality.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Our SEO approach balances technical execution, keyword intent, and high-quality content so your brand
            builds authority that lasts.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {seoHighlights.map((item, index) => {
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
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-primary">What We Do</p>
            <h2 className="text-3xl font-bold text-slate-950 md:text-5xl">
              Comprehensive SEO solutions for brands ready to scale organic traffic.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Whether you need to fix technical bottlenecks, build a content authority, or capture local customers, we shape 
              our SEO strategy around your specific growth targets.
            </p>

            <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Typical deliverables</p>
              <div className="space-y-4">
                {seoDeliverables.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span className="leading-7 text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {seoCapabilities.map((item, index) => {
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
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-primary">Our Process</p>
          <h2 className="text-3xl font-bold text-slate-950 md:text-5xl">A strategic path to search authority.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            We follow a structured SEO workflow that starts with deep analysis and leads to sustainable, measurable results.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {seoProcess.map((item) => (
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
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-sky-300">Tools & Foundations</p>
            <h2 className="text-3xl font-bold md:text-5xl">
              Industry-leading intelligence and technical frameworks.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              We leverage the same tools the worlds top brands use to monitor search trends, track rankings, and identify 
              technical opportunities.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {seoTechStack.map((item) => (
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
                title: 'Data-led insights',
                description: 'We don’t guess. We use the highest-quality data to guide every strategic decision.',
              },
              {
                title: 'Technical excellence',
                description: 'Our deep engineering background means we can actually fix the technical problems we find.',
              },
              {
                title: 'Conversion mindset',
                description: 'Traffic is good. Revenue is better. We optimize for the keywords that drive business.',
              },
              {
                title: 'Transparent reporting',
                description: 'Clear, honest data about your progress, rankings, and competitive landscape.',
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
          <h2 className="text-3xl font-bold text-slate-950 md:text-5xl">Questions brands ask about their visibility.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Find answers to common questions about SEO timelines, expectations, and our technical approach.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {seoFaqs.map((item) => (
            <article key={item.question} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-slate-950">{item.question}</h3>
              <p className="mt-4 leading-7 text-slate-600">{item.answer}</p>
            </article>
          ))}
        </div>
      </Section>

      <CTASection
        title="Ready to own your search results?"
        description="Tell us about your growth targets, and we will help perform a quick audit of your current search visibility."
        buttonText="Book a Free Audit"
      />
    </motion.div>
  );
};

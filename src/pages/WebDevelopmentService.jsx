import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Database,
  Gauge,
  Globe,
  LayoutTemplate,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react';
import { CTASection } from '../components/layout/CTASection';
import { GlassCard, Section } from '../components/ui';
import {
  webDevelopmentCapabilities,
  webDevelopmentDeliverables,
  webDevelopmentFaqs,
  webDevelopmentHeroPills,
  webDevelopmentHighlights,
  webDevelopmentMetrics,
  webDevelopmentProcess,
  webDevelopmentTechStack,
} from '../content/webDevelopmentService';

const highlightIcons = [Search, Gauge, ShieldCheck];
const capabilityIcons = [LayoutTemplate, Rocket, Workflow, Globe, Database, Code2];

export const WebDevelopmentService = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white"
    >
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
              <span className="font-medium text-slate-700">Web Development</span>
            </nav>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Sparkles className="h-4 w-4" />
              Web Development Services
            </div>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-slate-950 md:text-6xl">
              Custom web development services built to help your brand look sharper, load faster, and convert better.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              We plan, design, and develop websites and web applications that blend clean engineering, strong storytelling,
              responsive UX, and technical SEO so your digital presence can support real business growth.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {webDevelopmentHeroPills.map((pill) => (
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
                  <Code2 className="h-4 w-4" />
                  Launch Blueprint
                </div>
                <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 font-mono text-sm leading-7 text-slate-300">
                  <p>{'project = {'}</p>
                  <p className="pl-4 text-sky-300">strategy: 'growth-ready',</p>
                  <p className="pl-4 text-emerald-300">seo: 'crawlable + semantic',</p>
                  <p className="pl-4 text-violet-300">experience: 'fast + responsive',</p>
                  <p className="pl-4 text-amber-300">launch: 'tested + measurable'</p>
                  <p>{'}'}</p>
                </div>
              </div>

              <div className="grid gap-4 p-6 md:grid-cols-3">
                {webDevelopmentMetrics.map((metric) => (
                  <div key={metric.label} className="rounded-[1.75rem] border border-slate-100 bg-white p-5 shadow-sm">
                    <div className="text-2xl font-bold text-slate-950">{metric.value}</div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{metric.label}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-100 px-6 py-6">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                  Included in every build
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    'Semantic page structure',
                    'Responsive component system',
                    'Conversion-focused content blocks',
                    'Launch-ready analytics setup',
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

      <Section className="pt-0">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-primary">Why This Service Works</p>
          <h2 className="text-3xl font-bold text-slate-950 md:text-5xl">
            A modern website should do more than exist. It should create momentum.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Our web development approach balances technical execution, search visibility, and user experience so your site
            supports both brand credibility and measurable growth.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {webDevelopmentHighlights.map((item, index) => {
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

      <Section className="bg-slate-50">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-primary">What We Build</p>
            <h2 className="text-3xl font-bold text-slate-950 md:text-5xl">
              Flexible web development for marketing teams, founders, and scaling brands.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Whether you need a better brand website, a campaign-focused landing page, or a more ambitious web platform,
              we shape the stack and scope around your goals instead of forcing a one-size-fits-all template.
            </p>

            <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Typical deliverables</p>
              <div className="space-y-4">
                {webDevelopmentDeliverables.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span className="leading-7 text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {webDevelopmentCapabilities.map((item, index) => {
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

      <Section>
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-primary">Process</p>
          <h2 className="text-3xl font-bold text-slate-950 md:text-5xl">A clear workflow that keeps projects moving.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            We keep the web development process collaborative and focused so you always know what is being built, why it
            matters, and what comes next.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {webDevelopmentProcess.map((item) => (
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

      <Section className="bg-slate-950 text-white">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-sky-300">Technology and Foundation</p>
            <h2 className="text-3xl font-bold md:text-5xl">
              Built with modern tools, but always chosen around the real job the website needs to do.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              We work with proven front-end and back-end technologies to create a reliable foundation for marketing sites,
              content-driven builds, and custom web platforms that need room to evolve.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {webDevelopmentTechStack.map((item) => (
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
                title: 'Search-ready structure',
                description: 'Strong metadata, internal linking paths, semantic layout, and crawl-aware page architecture.',
              },
              {
                title: 'Conversion-focused UX',
                description: 'Clear information hierarchy, polished interfaces, and calls to action placed with intent.',
              },
              {
                title: 'Scalable content workflows',
                description: 'Flexible CMS and component systems that make future publishing and growth easier.',
              },
              {
                title: 'Clean handoff and support',
                description: 'Documentation, launch guidance, and room for maintenance or feature expansion after go-live.',
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

      <Section className="bg-slate-50">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-primary">FAQ</p>
          <h2 className="text-3xl font-bold text-slate-950 md:text-5xl">Questions brands usually ask before we build.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            These answers cover the most common questions around scope, SEO, timelines, and post-launch support for our
            web development services.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {webDevelopmentFaqs.map((item) => (
            <article key={item.question} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-slate-950">{item.question}</h3>
              <p className="mt-4 leading-7 text-slate-600">{item.answer}</p>
            </article>
          ))}
        </div>
      </Section>

      <CTASection
        title="Need a website that is faster, sharper, and built for growth?"
        description="Tell us what you are launching, redesigning, or scaling, and we will help shape the right web development roadmap."
        buttonText="Book a Discovery Call"
      />
    </motion.div>
  );
};

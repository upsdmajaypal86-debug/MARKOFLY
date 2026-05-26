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
  Cpu,
  Workflow,
  Code2,
  Database,
  Layers,
  Bot,
} from 'lucide-react';
import { CTASection } from '../components/layout/CTASection';
import { GlassCard, Section } from '../components/ui';
import {
  automationCapabilities,
  automationDeliverables,
  automationFaqs,
  automationHeroPills,
  automationHighlights,
  automationMetrics,
  automationProcess,
  automationTechStack,
} from '../content/automationService';

const highlightIcons = [Workflow, Bot, ShieldCheck];
const capabilityIcons = [Layers, Target, Bot, Search, Code2, Database];

export const AutomationService = () => {
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
              <span className="font-medium text-slate-700">Business Automation & AI</span>
            </nav>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Sparkles className="h-4 w-4" />
              Business Automation & AI
            </div>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-slate-950 md:text-6xl">
              Custom business automation and AI integrations built to scale your efficiency.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              We help you scale your business operations without scaling your headcount by connecting your favorite tools, 
              automating manual workflows, and implementing smart AI solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {automationHeroPills.map((pill) => (
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
                Start Automating
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
                  <Workflow className="h-4 w-4" />
                  Efficiency Blueprint
                </div>
                <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 font-mono text-sm leading-7 text-slate-300">
                  <p>{'efficiency = {'}</p>
                  <p className="pl-4 text-sky-300">automation: 'end-to-end',</p>
                  <p className="pl-4 text-emerald-300">ai: 'gen-ai-integrated',</p>
                  <p className="pl-4 text-violet-300">stack: 'modern-no-code-plus',</p>
                  <p className="pl-4 text-amber-300">scaling: 'un-bottlenecked'</p>
                  <p>{'}'}</p>
                </div>
              </div>

              <div className="grid gap-4 p-6 md:grid-cols-3">
                {automationMetrics.map((metric) => (
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
                    'API & tool connections',
                    'Zero-friction error handling',
                    'Efficiency audit report',
                    'Training & documentation',
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
            Technology should work for you, not the other way around.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Our automation approach balances custom engineering, low-code speed, and strategic AI implementation so 
            your operations become a competitive advantage.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {automationHighlights.map((item, index) => {
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
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-primary">Technical Leverage</p>
            <h2 className="text-3xl font-bold text-slate-950 md:text-5xl">
              Scalable automation for teams ready to move faster.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Whether you need to connect your CRM to your marketing stack, build custom internal tools, or implement 
              AI-powered product features, we shape the technical architecture around your specific scaling goals.
            </p>

            <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Typical deliverables</p>
              <div className="space-y-4">
                {automationDeliverables.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span className="leading-7 text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {automationCapabilities.map((item, index) => {
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
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-primary">The Process</p>
          <h2 className="text-3xl font-bold text-slate-950 md:text-5xl">A clear path to an un-bottlenecked business.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            We follow a structured automation workflow that starts with deep operational analysis and ends with reliable, 
            supportive technology.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {automationProcess.map((item) => (
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
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-sky-300">Modern Stack & AI</p>
            <h2 className="text-3xl font-bold md:text-5xl">
              Chosen for speed, chosen for scale, chosen for reliability.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              We work with proven automation frameworks and the latest AI models to create a flexible foundation that works 
              seamlessly across your organization.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {automationTechStack.map((item) => (
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
                title: 'Seamless tool connection',
                description: 'We build the "glue" that allows your favorite tools to share data and trigger actions automatically.',
              },
              {
                title: 'AI implementation strategy',
                description: 'Leveraging LLMs and generative AI for content, customer support, and internal data analysis.',
              },
              {
                title: 'Scalable data architecture',
                description: 'Ensuring your automated workflows are built on a rock-solid data foundation that can grow with you.',
              },
              {
                title: 'Support and maintenance',
                description: 'APIs change, tools update. We provide ongoing advisory to ensure your automations never break.',
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
          <h2 className="text-3xl font-bold text-slate-950 md:text-5xl">Questions brands ask before they automate.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Find answers to common questions about budget, time savings, and how we leverage AI for efficiency.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {automationFaqs.map((item) => (
            <article key={item.question} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-slate-950">{item.question}</h3>
              <p className="mt-4 leading-7 text-slate-600">{item.answer}</p>
            </article>
          ))}
        </div>
      </Section>

      <CTASection
        title="Ready to Scale Smarter?"
        description="Tell us about your manual bottlenecks, and we will help perform a quick operational audit to find automation opportunities."
        buttonText="Book an Efficiency Audit"
      />
    </motion.div>
  );
};

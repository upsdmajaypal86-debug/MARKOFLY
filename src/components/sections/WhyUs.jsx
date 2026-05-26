import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Cpu, 
  Globe, 
  TrendingUp, 
  Sparkles,
  ArrowRight,
  Shield,
  Smartphone
} from 'lucide-react';

// Reusable Feature Card Component
const FeatureCard = ({ icon, title, description, iconBg, iconColor, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-slate-900/50 p-8 rounded-4xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300 group"
    >
      <div className={`w-14 h-14 ${iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <div className={iconColor}>{icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export const WhyUs = () => {
  const features = [
    {
      icon: <Users className="h-7 w-7" />,
      title: "Expert Team",
      description: "Senior strategists, designers, and engineers working as one cross-functional unit.",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
      delay: 0.1
    },
    {
      icon: <Cpu className="h-7 w-7" />,
      title: "Cutting Edge Tech",
      description: "We use AI workflows and modern frameworks to ship products that age well.",
      iconBg: "bg-purple-500/10",
      iconColor: "text-purple-400",
      delay: 0.2
    },
    {
      icon: <Globe className="h-7 w-7" />,
      title: "Global Delivery",
      description: "Reliable execution across time zones with transparent updates at every milestone.",
      iconBg: "bg-pink-500/10",
      iconColor: "text-pink-400",
      delay: 0.3
    },
    {
      icon: <TrendingUp className="h-7 w-7" />,
      title: "Proven Results",
      description: "Every launch is measured against adoption, conversion, and retention goals.",
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-400",
      delay: 0.4
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-blue-500/30">
      

      {/* Main Section */}
      <section className="max-w-7xl mx-auto px-8 py-20 lg:py-32" id="why-choose-us">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase border border-blue-400/20 rounded-full mb-8 bg-blue-400/5"
              >
                Why Choose Us
              </motion.span>
              
              <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
                We deliver outcomes <br />
                <span className="text-secondary">redefine boundaries.</span>
              </h2>
              
              <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                Our process blends research, rapid iteration, and creative precision. 
                We do not just ship products; we build dependable growth systems 
                designed for the future.
              </p>
            </div>

            {/* Award Badge */}
            <div className="inline-flex items-center gap-5 px-6 py-4 bg-slate-900/80 border border-slate-800 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-xl shadow-blue-500/20">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Award-Winning Delivery</h4>
                <p className="text-sm text-slate-500">Recognized by International Design Federation</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <FeatureCard key={i} {...f} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};


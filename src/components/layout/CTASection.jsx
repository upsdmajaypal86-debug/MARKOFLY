import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section } from '../ui/Section';

export const CTASection = ({ 
  title = "Ready to transform your digital presence?", 
  description = "Join hundreds of successful brands that have scaled their business with our premium digital solutions.",
  buttonText = "Get Started Now",
  href = "/contact"
}) => {
  const buttonClassName =
    'inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 group shadow-xl';
  const isInternalLink = href.startsWith('/');

  return (
    <Section className="bg-white">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gray-900 px-6 py-16 md:px-12 md:py-24 text-center shadow-2xl">
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[100px] rounded-full" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[100px] rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            {title}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-400 mb-10 leading-relaxed"
          >
            {description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {isInternalLink ? (
              <Link to={href} className={buttonClassName}>
                {buttonText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <a href={href} className={buttonClassName}>
                {buttonText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

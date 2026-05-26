import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Button, Section } from '../ui';
import HeroImage from '../../assets/girl2.png';
import { Link } from 'react-router-dom';



export const Hero = () => {
  return (
    <Section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-30 blur-3xl pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary rounded-full animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#111827] leading-[1.2] mb-6">
            Building <span className="text-secondary">Empathetic</span> Digital Products.
          </h1>

          <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-md">
            MARKOFLY is a strategy-first digital agency helping human-centric brands bridge the gap between imagination and reality.
          </p>

          <div className="flex flex-wrap items-center gap-8 mb-16">
            <Link to={'/contact'}>
            <Button className="rounded-full px-8 py-4 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity border-none h-auto text-base font-semibold">
              Get Started
            </Button>
            </Link>
          
          </div>

         
           
        </motion.div>

        {/* 3D Visual Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Main Circle Container */}
          <div className="relative w-full max-w-[550px] aspect-square rounded-full border-[1.5px] border-primary/20 p-8 flex items-center justify-center">
            {/* Inner Image Circle */}
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 flex items-center justify-center">
              <img 
                src={HeroImage} 
                alt="MARKOFLY Hero"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            {/* Floating Decorative Icons matching screenshot */}
            <div className="absolute top-[15%] -right-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary">
              <div className="w-6 h-6 border-2 border-primary/40 rounded flex items-center justify-center">
                <div className="w-3 h-4 border border-primary/40 rounded-sm" />
              </div>
            </div>

            <div className="absolute top-[40%] -left-8 w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center p-3">
              <Sparkles className="text-primary w-full h-full" />
            </div>

            <div className="absolute -bottom-4 right-10 w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center p-3">
              <Play className="text-primary w-full h-full fill-primary/20" />
            </div>

            {/* Gradient border ring */}
            <div className="absolute inset-0 rounded-full border-b-[6px] border-r-[6px] border-transparent border-b-[#A855F7]/40 border-r-[#A855F7]/40 -rotate-12 pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
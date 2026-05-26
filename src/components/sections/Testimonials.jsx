//import React, { useState, useCallback } from 'react';
//import { motion, AnimatePresence } from 'framer-motion';
//import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
//import { Section, GlassCard } from '../ui';
//
//const testimonials = [
//  {
//    name: 'Sarah Johnson',
//    role: 'CEO at TechFlow',
//    text: 'Working with Agency was a game-changer for us. Their innovative design and development process transformed our product into something truly world-class.',
//    avatar: 'https://i.pravatar.cc/150?u=sarah'
//  },
//  {
//    name: 'Michael Chen',
//    role: 'Product Manager at EcoLife',
//    text: 'The attention to detail and user experience provided by this agency is unparalleled. They delivered beyond our highest expectations, ahead of schedule.',
//    avatar: 'https://i.pravatar.cc/150?u=michael'
//  },
//  {
//    name: 'Emma Williams',
//    role: 'Founder of Bloom',
//    text: 'Professional, creative, and highly technical. They managed to capture our brand essence perfectly while building a robust scalable platform.',
//    avatar: 'https://i.pravatar.cc/150?u=emma'
//  }
//];
//
//export const Testimonials = () => {
//  const [index, setIndex] = useState(0);
//
//  const next = useCallback(() => {
//    setIndex((prev) => (prev + 1) % testimonials.length);
//  }, []);
//
//  const prev = useCallback(() => {
//    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//  }, []);
//
//  return (
//    <Section id="testimonials" className="bg-slate-50/50 px-4 sm:px-6 lg:px-8">
//      
//      {/* Heading */}
//      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 lg:mb-20">
//        <h4 className="text-primary font-bold tracking-wider uppercase mb-3 text-xs sm:text-sm">
//          Testimonials
//        </h4>
//        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
//          What Our Clients Say
//        </h2>
//        <p className="text-slate-600 text-base sm:text-lg">
//          We build lasting relationships with our clients through exceptional results and transparent collaboration.
//        </p>
//      </div>
//
//      {/* Card */}
//      <div className="max-w-4xl mx-auto relative">
//        <AnimatePresence mode="wait">
//          <motion.div
//            key={index}
//            initial={{ opacity: 0, x: 40 }}
//            animate={{ opacity: 1, x: 0 }}
//            exit={{ opacity: 0, x: -40 }}
//            transition={{ duration: 0.4 }}
//            drag="x"
//            dragConstraints={{ left: 0, right: 0 }}
//            onDragEnd={(e, { offset }) => {
//              if (offset.x > 100) prev();
//              if (offset.x < -100) next();
//            }}
//          >
//            <GlassCard className="p-6 sm:p-10 md:p-14 lg:p-16 text-center shadow-2xl relative border-slate-100">
//              
//              {/* Quote Icon */}
//              <div className="absolute top-6 left-6 sm:top-10 sm:left-10 text-primary/10">
//                <Quote size={50} className="sm:size-[70px]" fill="currentColor" />
//              </div>
//
//              {/* Stars */}
//              <div className="flex items-center justify-center gap-1 mb-6 sm:mb-8">
//                {[...Array(5)].map((_, i) => (
//                  <Star key={i} size={16} className="sm:size-[18px] fill-yellow-400 text-yellow-400" />
//                ))}
//              </div>
//
//              {/* Text */}
//              <p className="text-lg sm:text-xl md:text-2xl italic text-slate-700 leading-relaxed mb-8 sm:mb-10">
//                "{testimonials[index]?.text}"
//              </p>
//
//              {/* Profile */}
//              <div className="flex flex-col items-center">
//                <img 
//                  src={testimonials[index]?.avatar} 
//                  alt={testimonials[index]?.name} 
//                  loading="lazy"
//                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-4 border-white shadow-lg mb-3 sm:mb-4"
//                />
//                <h4 className="text-lg sm:text-xl font-extrabold text-slate-900">
//                  {testimonials[index]?.name}
//                </h4>
//                <p className="text-sm sm:text-base text-slate-500 font-bold">
//                  {testimonials[index]?.role}
//                </p>
//              </div>
//            </GlassCard>
//          </motion.div>
//        </AnimatePresence>
//
//        {/* Controls (hidden on small screens) */}
//        <div className="hidden md:block">
//          <button 
//            onClick={prev}
//            aria-label="Previous testimonial"
//            className="absolute top-1/2 -left-12 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-slate-900 hover:bg-primary hover:text-white transition-all active:scale-95"
//          >
//            <ChevronLeft size={24} />
//          </button>
//
//          <button 
//            onClick={next}
//            aria-label="Next testimonial"
//            className="absolute top-1/2 -right-12 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-slate-900 hover:bg-primary hover:text-white transition-all active:scale-95"
//          >
//            <ChevronRight size={24} />
//          </button>
//        </div>
//      </div>
//
//      {/* Dots */}
//      <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-12">
//        {testimonials.map((_, i) => (
//          <button
//            key={i}
//            onClick={() => setIndex(i)}
//            aria-label={`Go to testimonial ${i + 1}`}
//            className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
//              index === i ? 'w-6 sm:w-8 bg-primary' : 'w-2 sm:w-3 bg-slate-300'
//            }`}
//          />
//        ))}
//      </div>
//    </Section>
//  );
//};



import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Section, GlassCard } from '../ui';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at TechFlow',
    text: 'Working with Agency was a game-changer for us. Their innovative design and development process transformed our product into something truly world-class.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager at EcoLife',
    text: 'The attention to detail and user experience provided by this agency is unparalleled. They delivered beyond expectations, ahead of schedule.',
    avatar: 'https://i.pravatar.cc/150?u=michael'
  },
  {
    name: 'Emma Williams',
    role: 'Founder of Bloom',
    text: 'Professional, creative, and highly technical. They captured our brand essence perfectly while building a scalable platform.',
    avatar: 'https://i.pravatar.cc/150?u=emma'
  }
];

export const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const current = testimonials[index];

  return (
    <Section id="testimonials" className="bg-gradient-to-b from-slate-50 via-white to-slate-50 px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          CLIENT STORIES
        </span>
        <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold text-slate-900">
          Trusted by <span className="text-primary">visionaries</span>
        </h2>
        <p className="mt-4 text-slate-600 text-base sm:text-lg">
          Real feedback from teams we’ve helped scale and transform.
        </p>
      </div>

      {/* Card Wrapper */}
      <div className="max-w-4xl mx-auto relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -20 }}
            transition={{ duration: 0.45 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, { offset }) => {
              if (offset.x > 80) prev();
              if (offset.x < -80) next();
            }}
          >
            <GlassCard className="relative p-8 sm:p-12 md:p-16 rounded-3xl shadow-[0_20px_80px_-20px_rgba(0,0,0,0.15)] border border-white/30 backdrop-blur-xl">
              
              {/* Floating Quote */}
              <div className="absolute -top-6 -left-6 text-primary/10">
                <Quote size={90} />
              </div>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Star size={18} className="fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>

              {/* Text */}
              <motion.p
                key={current.text}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-lg sm:text-2xl font-medium text-slate-700 leading-relaxed italic text-center"
              >
                “{current.text}”
              </motion.p>

              {/* Profile */}
              <div className="mt-10 flex flex-col items-center">
                <div className="relative">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full ring-4 ring-primary/10 shadow-lg"
                  />
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white" />
                </div>

                <h4 className="mt-4 text-lg font-bold text-slate-900">
                  {current.name}
                </h4>
                <p className="text-sm text-slate-500 font-medium">
                  {current.role}
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prev}
          className="hidden md:flex absolute -left-14 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg hover:bg-primary hover:text-white transition"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={next}
          className="hidden md:flex absolute -right-14 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg hover:bg-primary hover:text-white transition"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-10 gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`transition-all duration-300 rounded-full ${
              i === index
                ? 'w-8 h-2 bg-primary'
                : 'w-2 h-2 bg-slate-300'
            }`}
          />
        ))}
      </div>
    </Section>
  );
};

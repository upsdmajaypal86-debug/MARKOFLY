import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';


/**
 * Custom Button Component
 */
export const Button = forwardRef(({ className, variant = 'primary', size = 'md', ...props }, ref) => {
  const variants = {
    primary: 'btn-gradient shadow-lg hover:shadow-primary/20',
    secondary: 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 shadow-sm',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary/5',
    ghost: 'bg-transparent hover:bg-slate-100 text-slate-600',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-full',
    md: 'px-6 py-3 text-base font-medium rounded-full',
    lg: 'px-8 py-4 text-lg font-bold rounded-full',
  };

  return (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center transition-all active:scale-95 disabled:opacity-50',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
});

Button.displayName = 'Button';

/**
 * Glass Card Component
 */
export const GlassCard = ({ 
  children, 
  className,
  hover = true 
}) => {
  return (
    <div className={cn(
      'glass-card p-6 rounded-3xl transition-all duration-500',
      hover && 'hover:translate-y-[-8px] hover:shadow-primary/10 hover:border-primary/20',
      className
    )}>
      {children}
    </div>
  );
};

/**
 * Section Wrapper with Reveal Animation
 */
export const Section = ({ 
  children, 
  id, 
  className,
  container = true 
}) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn('py-16 md:py-24 relative overflow-hidden scroll-mt-24', className)}
    >
      {container ? (
        <div className="container mx-auto px-6 max-w-7xl">
          {children}
        </div>
      ) : children}
    </motion.section>
  );
};
export { Logo } from './Logo';

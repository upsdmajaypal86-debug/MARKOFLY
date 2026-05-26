import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export const Section = ({ 
  children, 
  className, 
  id, 
  containerClassName,
  animate = true,
  delay = 0 
}) => {
  return (
    <section 
      id={id} 
      className={cn("py-20 md:py-24 overflow-hidden", className)}
    >
      <div className={cn("container mx-auto px-4 md:px-6 max-w-7xl", containerClassName)}>
        {animate ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay }}
          >
            {children}
          </motion.div>
        ) : (
          children
        )}
      </div>
    </section>
  );
};

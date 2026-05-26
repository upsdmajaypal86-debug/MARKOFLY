import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4"
    >
      <h1 className="text-8xl font-black mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">404</h1>
      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Page Not Found</h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-md">The page you're looking for doesn't exist or has been moved.</p>
      <Link 
        to="/"
        className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1"
      >
        Go Back Home
      </Link>
    </motion.div>
  );
};

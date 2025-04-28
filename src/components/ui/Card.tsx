import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

const Card: React.FC<CardProps> = ({ className, children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className={clsx(
        'bg-card shadow-md rounded-xl overflow-hidden border border-border/50 hover:shadow-lg transition-shadow',
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default Card;
import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  className,
  titleClassName,
}) => {
  return (
    <section id={id} className={clsx('section-padding', className)}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className={clsx('text-3xl font-bold mb-2', titleClassName)}>{title}</h2>
          {subtitle && <p className="text-xl text-muted-foreground">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
};

export default Section;
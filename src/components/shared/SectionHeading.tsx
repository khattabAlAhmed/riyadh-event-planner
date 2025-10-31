'use client';

import { motion } from 'framer-motion';
import { fadeIn, slideUp } from '@/lib/motion-variants';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

export function SectionHeading({
  title,
  subtitle,
  className,
  align = 'center',
}: SectionHeadingProps) {
  const alignClasses = {
    left: 'text-start',
    center: 'text-center',
    right: 'text-end',
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeIn}
      className={cn('mb-8 md:mb-12', alignClasses[align], className)}
    >
      <motion.h2
        variants={slideUp}
        className="text-3xl md:text-4xl font-bold mb-2"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={slideUp}
          className="text-muted-foreground text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}


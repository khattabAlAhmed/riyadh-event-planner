'use client';

import { motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { fadeIn, slideUp } from '@/lib/motion-variants';
import { cn } from '@/lib/utils';
import { LampContainer } from '../ui/lamp';

interface CTASectionProps {
  title: string;
  subtitle?: string;
  ctaText: string;
  ctaHref: string;
  className?: string;
}

export function CTASection({
  title,
  subtitle,
  ctaText,
  ctaHref,
  className,
}: CTASectionProps) {
  return (
    <section className={cn('relative py-16 md:py-24 bg-muted/50 overflow-hidden', className)}>

      <div className=" container mx-auto px-4 ove">
      <LampContainer>
        <motion.div>
          
        </motion.div>
        </LampContainer>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <motion.h2
            variants={slideUp}
            className="text-3xl md:text-4xl font-bold"
          >
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p
              variants={slideUp}
              className="text-lg text-muted-foreground"
            >
              {subtitle}
            </motion.p>
          )}
          <motion.div variants={slideUp}>
            <Link href={ctaHref}>
              <Button size="lg">{ctaText}</Button>
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}


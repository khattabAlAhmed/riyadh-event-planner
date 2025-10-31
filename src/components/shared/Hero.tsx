'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';
import { fadeIn, slideUp } from '@/lib/motion-variants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { FireworksBackground } from '../animate-ui/components/backgrounds/fireworks';
import { useTheme } from 'next-themes';
import { StarsBackground } from '../animate-ui/components/backgrounds/stars';
import { BackgroundLines } from '../ui/background-lines';
interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  backgroundImage?: string;
  className?: string;
  showFireworks?: boolean;
  showStars?: boolean;
  showLines?: boolean;
}

export function Hero({
  title,
  subtitle,
  ctaText,
  ctaHref = '/quote-request',
  backgroundImage,
  className,
  showFireworks,
  showStars,
  showLines,
}: HeroProps) {
  const { resolvedTheme: theme } = useTheme();
  return (
    <section
      className={cn(
        'relative min-h-[500px] md:min-h-[600px] flex items-center justify-center',
        'bg-gradient-to-b from-primary/10 to-background',
        className
      )}
    >
            <BackgroundLines className={`flex  items-center justify-center w-full flex-col px-4`} showlines={showLines} >

      
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt={title}
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
      )}
      {showFireworks && (
        <FireworksBackground
          className="absolute inset-0 flex items-center justify-center rounded-xl"
          color={theme === 'dark' ? 'yellow' : 'oklch(0.8903 0.1739 171.2690)'}
          population={1}
        />
      )}
      {showStars && (
        <StarsBackground
          className="absolute inset-0 flex items-center justify-center rounded-xl"
          starColor={theme === 'dark' ? '#FFF' : '#000'}
        />
      )}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <motion.h1
            variants={slideUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
          >

            {title}
          </motion.h1>
          <motion.p
            variants={slideUp}
            className="text-lg md:text-xl text-muted-foreground"
          >
            {subtitle}
          </motion.p>
          {ctaText && (
            <motion.div variants={slideUp}>
              <Link href={ctaHref}>
                <Button size="lg" className="mt-4">
                  {ctaText}
                </Button>
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
      </BackgroundLines>
    </section>

  );
}


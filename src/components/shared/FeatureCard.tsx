'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { staggerItem } from '@/lib/motion-variants';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  stat?: string;
  className?: string;
}

export function FeatureCard({
  title,
  description,
  icon,
  stat,
  className,
}: FeatureCardProps) {
  return (
    <motion.div variants={staggerItem}>
      <Card className={cn('h-full text-center', className)}>
        <CardHeader>
          {icon && <div className="mb-4 flex justify-center">{icon}</div>}
          {stat && (
            <div className="text-4xl font-bold text-primary mb-2">{stat}</div>
          )}
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}


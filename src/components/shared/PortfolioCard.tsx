'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { staggerItem } from '@/lib/motion-variants';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface PortfolioCardProps {
  title: string;
  type: string;
  date?: string;
  description?: string;
  image: string;
  onClick?: () => void;
  className?: string;
}

export function PortfolioCard({
  title,
  type,
  date,
  description,
  image,
  onClick,
  className,
}: PortfolioCardProps) {
  return (
    <motion.div variants={staggerItem}>
      <Card
        className={cn('overflow-hidden cursor-pointer hover:shadow-lg transition-shadow', className)}
        onClick={onClick}
      >
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardContent className="p-4">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-semibold">{title}</h3>
            <Badge variant="secondary">{type}</Badge>
          </div>
          {date && <p className="text-sm text-muted-foreground mb-1">{date}</p>}
          {description && (
            <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}


'use client';

import { motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { staggerItem } from '@/lib/motion-variants';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
  image?: string;
  className?: string;
}

export function ServiceCard({
  title,
  description,
  href,
  icon,
  image,
  className,
}: ServiceCardProps) {
  return (
    <motion.div variants={staggerItem}>
      <Card className={cn('h-full flex flex-col hover:shadow-lg transition-shadow', className)}>
        {image && (
          <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <CardHeader>
          {icon && <div className="mb-2">{icon}</div>}
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="mt-auto">
          <Link href={href}>
            <Button variant="outline" className="w-full group">
              Learn More
              <ArrowRight className="ms-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}


'use client';

import { motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { staggerItem } from '@/lib/motion-variants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Calendar, Clock } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  slug: string;
  image: string;
  date: string;
  readTime: number;
  className?: string;
}

export function BlogCard({
  title,
  excerpt,
  slug,
  image,
  date,
  readTime,
  className,
}: BlogCardProps) {
  return (
    <motion.div variants={staggerItem}>
      <Link href={`/blog/${slug}`}>
        <Card className={cn('h-full overflow-hidden hover:shadow-lg transition-shadow', className)}>
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <CardHeader>
            <h3 className="text-xl font-semibold line-clamp-2">{title}</h3>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground line-clamp-3 mb-4">{excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {readTime} min read
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}


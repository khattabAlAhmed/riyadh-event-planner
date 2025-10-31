'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import { staggerItem } from '@/lib/motion-variants';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  name: string;
  role?: string;
  content: string;
  rating: number;
  image?: string;
  className?: string;
}

export function TestimonialCard({
  name,
  role,
  content,
  rating,
  image,
  className,
}: TestimonialCardProps) {
  return (
    <motion.div variants={staggerItem}>
      <Card className={cn('h-full', className)}>
        <CardHeader>
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src={image} alt={name} />
              <AvatarFallback>{name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{name}</p>
              {role && <p className="text-sm text-muted-foreground">{role}</p>}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex gap-1 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  'h-4 w-4',
                  i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted'
                )}
              />
            ))}
          </div>
          <p className="text-muted-foreground italic">&ldquo;{content}&rdquo;</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}


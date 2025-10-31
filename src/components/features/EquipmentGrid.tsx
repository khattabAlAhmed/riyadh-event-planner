'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '@/lib/motion-variants';
import Image from 'next/image';

export interface EquipmentItem {
    id: string;
    title: string;
    description: string;
    image: string;
    category?: string;
    specs?: { label: string; value: string }[];
    features?: string[];
    priceRange?: string;
}

interface EquipmentGridProps {
    items: EquipmentItem[];
    columns?: 2 | 3 | 4;
    showCategory?: boolean;
    className?: string;
}

export function EquipmentGrid({
    items,
    columns = 3,
    showCategory = false,
    className = ''
}: EquipmentGridProps) {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    const gridCols = {
        2: 'md:grid-cols-2',
        3: 'md:grid-cols-2 lg:grid-cols-3',
        4: 'md:grid-cols-2 lg:grid-cols-4'
    };

    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`grid gap-6 ${gridCols[columns]} ${className}`}
        >
            {items.map((item) => (
                <motion.div key={item.id} variants={fadeIn}>
                    <Card
                        className={`h-full hover:shadow-lg transition-all duration-300 cursor-pointer ${selectedItem === item.id ? 'ring-2 ring-primary' : ''
                            }`}
                        onClick={() => setSelectedItem(item.id === selectedItem ? null : item.id)}
                    >
                        <div className="relative h-48 overflow-hidden rounded-t-lg">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-300 hover:scale-110"
                            />
                            {showCategory && item.category && (
                                <Badge className="absolute top-3 start-3">
                                    {item.category}
                                </Badge>
                            )}
                        </div>
                        <CardHeader>
                            <CardTitle className="text-xl">{item.title}</CardTitle>
                            <CardDescription>{item.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {/* Specifications */}
                            {item.specs && item.specs.length > 0 && (
                                <div className="mb-4 space-y-2">
                                    {item.specs.map((spec, index) => (
                                        <div key={index} className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">{spec.label}:</span>
                                            <span className="font-medium">{spec.value}</span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Features */}
                            {item.features && item.features.length > 0 && (
                                <ul className="mb-4 space-y-1">
                                    {item.features.map((feature, index) => (
                                        <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* Price Range */}
                            {item.priceRange && (
                                <div className="pt-4 border-t">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-muted-foreground">Price Range</span>
                                        <span className="font-semibold text-primary">{item.priceRange}</span>
                                    </div>
                                </div>
                            )}

                            {/* Expanded Details */}
                            {selectedItem === item.id && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="mt-4 pt-4 border-t"
                                >
                                    <Button className="w-full" asChild>
                                        <a href="/quote-request">Request Quote</a>
                                    </Button>
                                </motion.div>
                            )}
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </motion.div>
    );
}


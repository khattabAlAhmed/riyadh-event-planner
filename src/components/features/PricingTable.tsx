'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motion-variants';
import { CheckCircle2 } from 'lucide-react';

export interface PricingRow {
  type: string;
  area: string;
  bestUse: string;
  priceRange: string;
  popular?: boolean;
}

interface PricingTableProps {
  title?: string;
  description?: string;
  rows: PricingRow[];
  className?: string;
}

export function PricingTable({
  title = 'Pricing Comparison',
  description,
  rows,
  className = ''
}: PricingTableProps) {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{title}</CardTitle>
          {description && (
            <p className="text-muted-foreground mt-2">{description}</p>
          )}
        </CardHeader>
        <CardContent>
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-start p-4 font-semibold">Type</th>
                  <th className="text-start p-4 font-semibold">Area</th>
                  <th className="text-start p-4 font-semibold">Best Use</th>
                  <th className="text-end p-4 font-semibold">Price Range</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b last:border-0 hover:bg-muted/50 transition-colors ${
                      row.popular ? 'bg-primary/5' : ''
                    }`}
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{row.type}</span>
                        {row.popular && (
                          <Badge variant="default" className="text-xs">
                            Popular
                          </Badge>
                        )}
                      </div>
                    </td>
                    <td className="p-4 text-muted-foreground">{row.area}</td>
                    <td className="p-4 text-muted-foreground">{row.bestUse}</td>
                    <td className="p-4 text-end">
                      <span className="font-semibold text-primary">{row.priceRange}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {rows.map((row, index) => (
              <Card
                key={index}
                className={row.popular ? 'border-primary' : ''}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-lg">{row.type}</h3>
                    {row.popular && (
                      <Badge variant="default">Popular</Badge>
                    )}
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Area:</span>
                      <span className="text-sm font-medium">{row.area}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Best Use:</span>
                      <span className="text-sm font-medium">{row.bestUse}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t">
                      <span className="text-sm font-medium">Price Range:</span>
                      <span className="font-semibold text-primary">{row.priceRange}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Note */}
          <div className="mt-6 p-4 bg-muted/50 rounded-lg">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> Prices are estimates and may vary based on event duration, 
                location, additional services, and customization requirements. Contact us for an 
                accurate quote tailored to your needs.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}


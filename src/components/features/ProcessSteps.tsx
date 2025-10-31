'use client';

import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '@/lib/motion-variants';
import { LucideIcon } from 'lucide-react';

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
  layout?: 'vertical' | 'horizontal';
  className?: string;
}

export function ProcessSteps({
  steps,
  layout = 'vertical',
  className = ''
}: ProcessStepsProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {layout === 'vertical' ? (
        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={fadeIn}
                className="relative"
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="absolute start-6 top-20 w-0.5 h-full bg-gradient-to-b from-primary to-transparent -z-10" />
                )}

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      {/* Step Number Circle */}
                      <div className="shrink-0">
                        <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                          {step.number}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-2">
                          <Icon className="h-6 w-6 text-primary mt-1 shrink-0" />
                          <h3 className="text-xl font-semibold">{step.title}</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.number} variants={fadeIn}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    {/* Step Number Badge */}
                    <div className="inline-flex h-14 w-14 rounded-full bg-primary text-primary-foreground items-center justify-center font-bold text-xl mb-4">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="flex justify-center mb-3">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      )}
    </motion.div>
  );
}


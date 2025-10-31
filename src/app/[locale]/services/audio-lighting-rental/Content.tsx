'use client';

import { useTranslations } from 'next-intl';
import { Hero } from '@/components/shared/Hero';
import { ShareButtons } from '@/components/shared/ShareButtons';
import { CTASection } from '@/components/shared/CTASection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '@/lib/motion-variants';
import { Mic, Volume2, Lightbulb, Sparkles, Radio, Headphones } from 'lucide-react';
import Image from 'next/image';

export default function AudioLightingRentalContent() {
  const t = useTranslations('Services.audioLighting');
  const tCommon = useTranslations('Common');

  const audioSystems = [
    {
      icon: Volume2,
      title: 'Professional Speakers',
      description: 'High-power speakers with crystal-clear sound quality for events of all sizes',
      features: [
        'Line array systems for large venues',
        'Portable PA systems',
        'Subwoofers for deep bass',
        'Various power outputs',
        'Professional grade quality'
      ],
      image: '/placeholder-service-1.jpg'
    },
    {
      icon: Mic,
      title: 'Microphone Systems',
      description: 'Complete microphone solutions for presentations, performances, and speeches',
      features: [
        'Wireless handheld microphones',
        'Lavalier (lapel) microphones',
        'Headset microphones',
        'Podium microphones',
        'Conference mic systems'
      ],
      image: '/placeholder-service-2.jpg'
    },
    {
      icon: Headphones,
      title: 'DJ Services & Equipment',
      description: 'Professional DJ setup with experienced DJs or equipment rental',
      features: [
        'Professional DJ controllers',
        'Mixing consoles',
        'Turntables',
        'Experienced DJ services',
        'Custom playlist curation'
      ],
      image: '/placeholder-service-3.jpg'
    },
    {
      icon: Radio,
      title: 'Sound System Packages',
      description: 'Complete audio solutions tailored to your event needs',
      features: [
        'Small event packages (50-100 guests)',
        'Medium event packages (100-300 guests)',
        'Large event packages (300+ guests)',
        'Custom configurations',
        'Professional sound engineers'
      ],
      image: '/placeholder-portfolio-1.jpg'
    }
  ];

  const lightingSystems = [
    {
      icon: Lightbulb,
      title: 'LED Lighting',
      description: 'Energy-efficient LED lighting in multiple colors and effects',
      features: [
        'RGB color-changing LEDs',
        'Wireless DMX control',
        'Low power consumption',
        'Cool temperature operation',
        'Long-lasting bulbs'
      ],
      image: '/placeholder-portfolio-2.jpg'
    },
    {
      icon: Sparkles,
      title: 'Stage Lighting',
      description: 'Professional stage lighting for performances and presentations',
      features: [
        'Moving head spotlights',
        'Par can lights',
        'Wash lights',
        'Follow spots',
        'Lighting trusses'
      ],
      image: '/placeholder-portfolio-3.jpg'
    },
    {
      icon: Lightbulb,
      title: 'Decorative Lighting',
      description: 'Ambient and decorative lighting to enhance your venue atmosphere',
      features: [
        'String lights',
        'Uplighting',
        'Pin spot lighting',
        'Centerpiece lighting',
        'Pathway lighting'
      ],
      image: '/placeholder-portfolio-4.jpg'
    }
  ];

  const specialEffects = [
    {
      title: 'Smoke & Fog Machines',
      description: 'Create dramatic atmosphere with professional fog effects',
      image: '/placeholder-portfolio-5.jpg'
    },
    {
      title: 'Laser Light Shows',
      description: 'Spectacular laser displays for concerts and major events',
      image: '/placeholder-portfolio-6.jpg'
    },
    {
      title: 'Cold Fireworks',
      description: 'Safe indoor fireworks for grand entrances and celebrations',
      image: '/placeholder-portfolio-7.jpg'
    },
    {
      title: 'Bubble Machines',
      description: 'Fun effects perfect for celebrations and parties',
      image: '/placeholder-portfolio-8.jpg'
    }
  ];

  return (
    <>
      <Hero
        title={t('title')}
        subtitle={t('subtitle')}
        ctaText={tCommon('getStarted')}
        ctaHref="/quote-request"
      />

      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Introduction */}
        <section className="max-w-4xl mx-auto mb-16">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">{t('introTitle')}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              {t('intro1')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('intro2')}
            </p>
          </motion.div>
        </section>

        {/* Audio Systems Section */}
        <section className="mb-16">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold mb-4">{t('audioSystemsTitle')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('audioSystemsSubtitle')}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {audioSystems.map((system, index) => {
              const Icon = system.icon;
              return (
                <motion.div key={index} variants={fadeIn}>
                  <Card className="h-full">
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <Image
                        src={system.image}
                        alt={system.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <Icon className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>{system.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{system.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {system.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* Lighting Systems Section */}
        <section className="mb-16">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold mb-4">{t('lightingSystemsTitle')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('lightingSystemsSubtitle')}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {lightingSystems.map((system, index) => {
              const Icon = system.icon;
              return (
                <motion.div key={index} variants={fadeIn}>
                  <Card className="h-full">
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <Image
                        src={system.image}
                        alt={system.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <Icon className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>{system.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{system.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {system.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* Special Effects Section */}
        <section className="mb-16">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold mb-4">{t('specialEffectsTitle')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('specialEffectsSubtitle')}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {specialEffects.map((effect, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-40 overflow-hidden rounded-t-lg">
                    <Image
                      src={effect.image}
                      alt={effect.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{effect.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{effect.description}</p>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Technical Support */}
        <section className="mb-16">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="text-2xl">{t('technicalSupportTitle')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">On-Site Technicians</h3>
                    <p className="text-muted-foreground">
                      Our experienced audio-visual technicians will be present at your event to ensure everything 
                      runs smoothly. They handle setup, operation, and troubleshooting throughout the event.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Pre-Event Testing</h3>
                    <p className="text-muted-foreground">
                      We conduct thorough sound checks and lighting tests before your event begins to ensure 
                      optimal performance and eliminate any potential issues.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Custom Programming</h3>
                    <p className="text-muted-foreground">
                      Our team can program custom lighting sequences and audio cues tailored to your event's 
                      specific requirements and schedule.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Backup Equipment</h3>
                    <p className="text-muted-foreground">
                      We always bring backup equipment to critical events, ensuring your show goes on without 
                      interruption even if technical issues arise.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Share Buttons */}
        <div className="flex justify-center mb-12">
          <ShareButtons />
        </div>
      </div>

      {/* CTA Section */}
      <CTASection
        title={t('ctaTitle')}
        subtitle={t('ctaSubtitle')}
        ctaText={tCommon('getStarted')}
        ctaHref="/quote-request"
      />
    </>
  );
}


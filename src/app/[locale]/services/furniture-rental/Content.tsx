'use client';

import { useTranslations } from 'next-intl';
import { Hero } from '@/components/shared/Hero';
import { ShareButtons } from '@/components/shared/ShareButtons';
import { CTASection } from '@/components/shared/CTASection';
import { EquipmentGrid, EquipmentItem } from '@/components/features/EquipmentGrid';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motion-variants';
import { CheckCircle2 } from 'lucide-react';

export default function FurnitureRentalContent() {
  const t = useTranslations('Services.furnitureRental');
  const tCommon = useTranslations('Common');

  const chairItems: EquipmentItem[] = [
    {
      id: 'chiavari',
      title: t('chairs.chiavari'),
      description: 'Elegant chairs perfect for upscale events and weddings',
      image: '/placeholder-service-1.jpg',
      category: 'Chairs',
      specs: [
        { label: 'Style', value: 'Chiavari' },
        { label: 'Material', value: 'Wood/Resin' },
        { label: 'Colors', value: 'Gold, Silver, White, Black' }
      ],
      features: [
        'Elegant and comfortable',
        'Stackable for easy storage',
        'Weight capacity: 200kg',
        'Available with cushions'
      ],
      priceRange: 'From 15 SAR/chair'
    },
    {
      id: 'napoleon',
      title: t('chairs.napoleon'),
      description: 'Classic design ideal for formal weddings and events',
      image: '/placeholder-service-2.jpg',
      category: 'Chairs',
      specs: [
        { label: 'Style', value: 'Napoleon' },
        { label: 'Material', value: 'Polycarbonate/Wood' },
        { label: 'Design', value: 'Classic European' }
      ],
      features: [
        'Timeless classic design',
        'Very durable',
        'Multiple color options',
        'Perfect for weddings'
      ],
      priceRange: 'From 18 SAR/chair'
    },
    {
      id: 'plastic',
      title: t('chairs.plastic'),
      description: 'Economical and practical option for large events',
      image: '/placeholder-service-3.jpg',
      category: 'Chairs',
      specs: [
        { label: 'Style', value: 'Plastic' },
        { label: 'Material', value: 'High-grade Plastic' },
        { label: 'Weight', value: 'Lightweight' }
      ],
      features: [
        'Budget-friendly',
        'Weather-resistant',
        'Easy to clean',
        'Multiple colors'
      ],
      priceRange: 'From 8 SAR/chair'
    },
    {
      id: 'transparent',
      title: t('chairs.transparent'),
      description: 'Modern transparent chairs for contemporary events',
      image: '/placeholder-portfolio-1.jpg',
      category: 'Chairs',
      specs: [
        { label: 'Style', value: 'Transparent' },
        { label: 'Material', value: 'Clear Acrylic' },
        { label: 'Design', value: 'Modern' }
      ],
      features: [
        'Contemporary design',
        'Creates spacious feel',
        'Perfect for modern events',
        'Luxury appearance'
      ],
      priceRange: 'From 25 SAR/chair'
    },
    {
      id: 'garden',
      title: t('chairs.garden'),
      description: 'Weather-resistant chairs for outdoor events',
      image: '/placeholder-portfolio-2.jpg',
      category: 'Chairs',
      specs: [
        { label: 'Style', value: 'Outdoor' },
        { label: 'Material', value: 'Weather-resistant' },
        { label: 'Use', value: 'Outdoor Events' }
      ],
      features: [
        'UV resistant',
        'Rust-proof',
        'All-weather use',
        'Comfortable seating'
      ],
      priceRange: 'From 12 SAR/chair'
    }
  ];

  const tableItems: EquipmentItem[] = [
    {
      id: 'round-4',
      title: 'Round Tables (4 Person)',
      description: 'Intimate round tables perfect for small groups',
      image: '/placeholder-portfolio-3.jpg',
      category: 'Tables',
      specs: [
        { label: 'Shape', value: 'Round' },
        { label: 'Capacity', value: '4 Persons' },
        { label: 'Diameter', value: '100cm' }
      ],
      priceRange: 'From 30 SAR/table'
    },
    {
      id: 'round-6',
      title: 'Round Tables (6 Person)',
      description: 'Popular size for weddings and events',
      image: '/placeholder-portfolio-4.jpg',
      category: 'Tables',
      specs: [
        { label: 'Shape', value: 'Round' },
        { label: 'Capacity', value: '6 Persons' },
        { label: 'Diameter', value: '120cm' }
      ],
      priceRange: 'From 40 SAR/table'
    },
    {
      id: 'round-8',
      title: 'Round Tables (8 Person)',
      description: 'Large round tables for family-style dining',
      image: '/placeholder-portfolio-5.jpg',
      category: 'Tables',
      specs: [
        { label: 'Shape', value: 'Round' },
        { label: 'Capacity', value: '8 Persons' },
        { label: 'Diameter', value: '150cm' }
      ],
      priceRange: 'From 50 SAR/table'
    },
    {
      id: 'round-10',
      title: 'Round Tables (10 Person)',
      description: 'Extra large tables for grand events',
      image: '/placeholder-portfolio-6.jpg',
      category: 'Tables',
      specs: [
        { label: 'Shape', value: 'Round' },
        { label: 'Capacity', value: '10 Persons' },
        { label: 'Diameter', value: '180cm' }
      ],
      priceRange: 'From 60 SAR/table'
    },
    {
      id: 'rectangular',
      title: 'Rectangular Tables',
      description: 'Versatile tables for buffets and exhibitions',
      image: '/placeholder-portfolio-7.jpg',
      category: 'Tables',
      specs: [
        { label: 'Shape', value: 'Rectangular' },
        { label: 'Sizes', value: 'Various' },
        { label: 'Use', value: 'Multi-purpose' }
      ],
      features: [
        'Multiple sizes available',
        'Perfect for buffets',
        'Exhibition displays',
        'Conference setups'
      ],
      priceRange: 'From 35 SAR/table'
    },
    {
      id: 'cocktail',
      title: 'Cocktail Tables (High)',
      description: 'Standing tables for cocktail events',
      image: '/placeholder-portfolio-8.jpg',
      category: 'Tables',
      specs: [
        { label: 'Style', value: 'Cocktail' },
        { label: 'Height', value: 'Standing' },
        { label: 'Use', value: 'Standing Events' }
      ],
      features: [
        'Ideal for networking events',
        'Stylish design',
        'Space-efficient',
        'Various sizes'
      ],
      priceRange: 'From 45 SAR/table'
    }
  ];

  const linensAndCovers = [
    'Premium quality table linens',
    'Various colors and patterns',
    'Chair covers with sashes',
    'Custom embroidery available',
    'Table runners and overlays',
    'Napkins and placemats'
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

        {/* Chairs Section */}
        <section className="mb-16">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold mb-4">{t('chairsTitle')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('chairsSubtitle')}
            </p>
          </motion.div>

          <EquipmentGrid items={chairItems} columns={3} showCategory={false} />
        </section>

        {/* Tables Section */}
        <section className="mb-16">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold mb-4">{t('tablesTitle')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('tablesSubtitle')}
            </p>
          </motion.div>

          <EquipmentGrid items={tableItems} columns={3} showCategory={false} />
        </section>

        {/* Linens and Covers */}
        <section className="mb-16">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">{t('linensTitle')}</h2>
            <Card>
              <CardHeader>
                <CardTitle>{t('linensSubtitle')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  {t('linensDesc')}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {linensAndCovers.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Package Info */}
        <section className="mb-16">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="text-2xl">{t('packagesTitle')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-4">
                  {t('packagesDesc')}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span><strong>Wedding Package:</strong> Tables, chairs, and linens for 100+ guests</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span><strong>Corporate Package:</strong> Conference tables and executive chairs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span><strong>Exhibition Package:</strong> Display tables and seating areas</span>
                  </li>
                </ul>
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


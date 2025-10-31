'use client';

import { useTranslations } from 'next-intl';
import { Hero } from '@/components/shared/Hero';
import { ShareButtons } from '@/components/shared/ShareButtons';
import { CTASection } from '@/components/shared/CTASection';
import { TentShowcase } from '@/components/features/TentShowcase';
import { PricingTable, PricingRow } from '@/components/features/PricingTable';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motion-variants';
import { CheckCircle2 } from 'lucide-react';

export default function TentRentalPage() {
  const t = useTranslations('Services.tentRental');
  const tCommon = useTranslations('Common');

  const europeanTents = [
    {
      title: t('pyramid.title'),
      description: t('pyramid.description'),
      specs: [
        { label: 'Structure', value: 'Strong Aluminum' },
        { label: 'Cover Material', value: 'PVC 850 g/m²' },
        { label: 'Height', value: 'Up to 6 meters' },
        { label: 'Size Range', value: '3×3m to 20×20m' }
      ],
      uses: ['Weddings', 'Formal Events', 'VIP Receptions'],
      features: [
        'Fire and water-resistant PVC cover',
        'Wind and rain resistant design',
        'Interior LED lighting available',
        'Air conditioning compatible',
        'Wooden floors or carpets',
        'Side curtains',
        'Luxury interior decorations'
      ],
      images: [
        '/placeholder-tent.jpg',
        '/placeholder-portfolio-1.jpg',
        '/placeholder-portfolio-2.jpg',
        '/placeholder-portfolio-3.jpg'
      ]
    },
    {
      title: t('pagoda.title'),
      description: t('pagoda.description'),
      specs: [
        { label: 'Design', value: 'Small Conical' },
        { label: 'Structure', value: 'Lightweight Aluminum' },
        { label: 'Size', value: 'Small to Medium' },
        { label: 'Setup', value: 'Quick & Easy' }
      ],
      uses: ['Temporary Offices', 'Registration Points', 'Sales Booths'],
      features: [
        'Portable and easy to transport',
        'Quick installation',
        'Customizable design',
        'Ideal for exhibitions',
        'Weather-resistant'
      ],
      images: [
        '/placeholder-service-1.jpg',
        '/placeholder-portfolio-4.jpg',
        '/placeholder-portfolio-5.jpg'
      ]
    },
    {
      title: t('polygon.title'),
      description: t('polygon.description'),
      specs: [
        { label: 'Width', value: 'From 40 meters' },
        { label: 'Height', value: 'Up to 16 meters' },
        { label: 'Design', value: 'Multi-sided' },
        { label: 'Interior', value: 'Column-free' }
      ],
      uses: ['Major Exhibitions', 'International Conferences', 'Concerts', 'Sports Events'],
      features: [
        'Extremely large spaces',
        'No internal columns',
        'Expandable design',
        'Professional grade structure',
        'Suitable for 1000+ guests'
      ],
      images: [
        '/placeholder-exhibition.jpg',
        '/placeholder-portfolio-6.jpg',
        '/placeholder-portfolio-7.jpg',
        '/placeholder-portfolio-8.jpg'
      ]
    },
    {
      title: t('dome.title'),
      description: t('dome.description'),
      specs: [
        { label: 'Diameter', value: '6m to 30m' },
        { label: 'Design', value: 'Semi-spherical' },
        { label: 'Roof Option', value: 'Clear or Standard' },
        { label: 'Ventilation', value: 'Excellent' }
      ],
      uses: ['Exhibition Halls', 'Temporary Restaurants', 'Art Events'],
      features: [
        'Unique modern design',
        'Optional transparent roof',
        'High wind resistance',
        'Natural lighting options',
        'Spacious interior'
      ],
      images: [
        '/placeholder-service-2.jpg',
        '/placeholder-portfolio-9.jpg',
        '/placeholder-portfolio-10.jpg'
      ]
    },
    {
      title: t('arcum.title'),
      description: t('arcum.description'),
      specs: [
        { label: 'Width', value: '8m to 40m' },
        { label: 'Interior', value: 'Column-free' },
        { label: 'Design', value: 'Curved Arches' },
        { label: 'Connection', value: 'Linkable' }
      ],
      uses: ['Large Weddings', 'Trade Exhibitions', 'Conferences'],
      features: [
        'Elegant curved design',
        'Open floor plan',
        'Linkable sections',
        'Exceptional elegance',
        'Professional appearance'
      ],
      images: [
        '/placeholder-service-3.jpg',
        '/placeholder-portfolio-11.jpg',
        '/placeholder-portfolio-12.jpg'
      ]
    },
    {
      title: t('clearSpan.title'),
      description: t('clearSpan.description'),
      specs: [
        { label: 'Material', value: 'Clear Plastic' },
        { label: 'UV Protection', value: 'Yes' },
        { label: 'Insulation', value: 'Thermal' },
        { label: 'View', value: 'Sky View' }
      ],
      uses: ['Night Weddings', 'Luxury Events', 'Fine Dining'],
      features: [
        'Transparent roof and walls',
        'Sky view experience',
        'UV protection',
        'Temperature controlled',
        'Unique ambiance',
        'Perfect for stargazing'
      ],
      images: [
        '/placeholder-wedding.jpg',
        '/placeholder-portfolio-1-1.jpg',
        '/placeholder-portfolio-1-2.jpg',
        '/placeholder-tent.jpg'
      ]
    }
  ];

  const pricingData: PricingRow[] = [
    {
      type: 'Pyramid Tents',
      area: 'Small-Medium',
      bestUse: 'Parties, Receptions',
      priceRange: 'From 100 SAR/day',
      popular: true
    },
    {
      type: 'Pagoda Tents',
      area: 'Small',
      bestUse: 'Temporary Offices',
      priceRange: 'From 80 SAR/day'
    },
    {
      type: 'Polygon Tents',
      area: 'Extra Large',
      bestUse: 'Major Events',
      priceRange: 'Contact for Quote'
    },
    {
      type: 'Dome Tents',
      area: 'Medium-Large',
      bestUse: 'Art & Exhibitions',
      priceRange: 'From 200 SAR/day'
    },
    {
      type: 'Arcum Tents',
      area: 'Large',
      bestUse: 'Weddings, Conferences',
      priceRange: 'From 250 SAR/day',
      popular: true
    },
    {
      type: 'Clear Span Tents',
      area: 'Medium-Large',
      bestUse: 'Luxury Events',
      priceRange: 'From 300 SAR/day'
    }
  ];

  const additionalServices = [
    'Professional installation and dismantling',
    'Transportation to your venue',
    'Air conditioning and heating',
    'Interior lighting systems',
    'Wooden or carpeted flooring',
    'Custom interior decoration',
    'Side walls and curtains',
    'Furniture setup inside tents'
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

        {/* European Tents Section */}
        <section className="mb-16">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">{t('europeanTentsTitle')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('europeanTentsSubtitle')}
            </p>
          </motion.div>

          <div className="space-y-12">
            {europeanTents.map((tent, index) => (
              <TentShowcase key={index} {...tent} />
            ))}
          </div>
        </section>

        {/* Traditional Tents */}
        <section className="mb-16">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">{t('traditionalTentsTitle')}</h2>
            <Card>
              <CardHeader>
                <CardTitle>{t('traditionalTentsSubtitle')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {t('traditionalTentsDesc')}
                </p>
                <ul className="grid md:grid-cols-2 gap-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>Royal Arabian designs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>Ornate decorations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>Traditional seating areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>Cultural authenticity</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Pricing Table */}
        <section className="mb-16">
          <PricingTable
            title={t('pricingTitle')}
            description={t('pricingSubtitle')}
            rows={pricingData}
          />
        </section>

        {/* Additional Services */}
        <section className="mb-16">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">{t('additionalServicesTitle')}</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-lg text-muted-foreground mb-6">
                  {t('additionalServicesDesc')}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {additionalServices.map((service, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>{service}</span>
                    </div>
                  ))}
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


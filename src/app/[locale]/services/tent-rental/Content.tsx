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

export default function TentRentalContent() {
  const t = useTranslations('Services.tentRental');
  const tCommon = useTranslations('Common');

  // Helper function to get array translations
  const getArrayTranslation = (key: string): string[] => {
    return t.raw(key) as string[];
  };

  const europeanTents = [
    {
      title: t('pyramid.title'),
      description: t('pyramid.description'),
      specs: [
        { label: t('pyramid.specs.structure'), value: t('pyramid.specs.structureValue') },
        { label: t('pyramid.specs.coverMaterial'), value: t('pyramid.specs.coverMaterialValue') },
        { label: t('pyramid.specs.height'), value: t('pyramid.specs.heightValue') },
        { label: t('pyramid.specs.sizeRange'), value: t('pyramid.specs.sizeRangeValue') }
      ],
      uses: getArrayTranslation('pyramid.uses'),
      features: getArrayTranslation('pyramid.features'), 
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
        { label: t('pagoda.specs.design'), value: t('pagoda.specs.designValue') },
        { label: t('pagoda.specs.structure'), value: t('pagoda.specs.structureValue') },
        { label: t('pagoda.specs.size'), value: t('pagoda.specs.sizeValue') },
        { label: t('pagoda.specs.setup'), value: t('pagoda.specs.setupValue') }
      ],
      uses: getArrayTranslation('pagoda.uses'),
      features: getArrayTranslation('pagoda.features'),
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
        { label: t('polygon.specs.width'), value: t('polygon.specs.widthValue') },
        { label: t('polygon.specs.height'), value: t('polygon.specs.heightValue') },
        { label: t('polygon.specs.design'), value: t('polygon.specs.designValue') },
        { label: t('polygon.specs.interior'), value: t('polygon.specs.interiorValue') }
      ],
      uses: getArrayTranslation('polygon.uses'),
      features: getArrayTranslation('polygon.features'),
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
        { label: t('dome.specs.diameter'), value: t('dome.specs.diameterValue') },
        { label: t('dome.specs.design'), value: t('dome.specs.designValue') },
        { label: t('dome.specs.roofOption'), value: t('dome.specs.roofOptionValue') },
        { label: t('dome.specs.ventilation'), value: t('dome.specs.ventilationValue') }
      ],
      uses: getArrayTranslation('dome.uses'),
      features: getArrayTranslation('dome.features'),
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
        { label: t('arcum.specs.width'), value: t('arcum.specs.widthValue') },
        { label: t('arcum.specs.interior'), value: t('arcum.specs.interiorValue') },
        { label: t('arcum.specs.design'), value: t('arcum.specs.designValue') },
        { label: t('arcum.specs.connection'), value: t('arcum.specs.connectionValue') }
      ],
      uses: getArrayTranslation('arcum.uses'),
      features: getArrayTranslation('arcum.features'),
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
        { label: t('clearSpan.specs.material'), value: t('clearSpan.specs.materialValue') },
        { label: t('clearSpan.specs.uvProtection'), value: t('clearSpan.specs.uvProtectionValue') },
        { label: t('clearSpan.specs.insulation'), value: t('clearSpan.specs.insulationValue') },
        { label: t('clearSpan.specs.view'), value: t('clearSpan.specs.viewValue') }
      ],
      uses: getArrayTranslation('clearSpan.uses'),
      features: getArrayTranslation('clearSpan.features'),
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
      type: t('pricing.pyramid.type'),
      area: t('pricing.pyramid.area'),
      bestUse: t('pricing.pyramid.bestUse'),
      priceRange: t('pricing.pyramid.priceRange'),
      popular: true
    },
    {
      type: t('pricing.pagoda.type'),
      area: t('pricing.pagoda.area'),
      bestUse: t('pricing.pagoda.bestUse'),
      priceRange: t('pricing.pagoda.priceRange')
    },
    {
      type: t('pricing.polygon.type'),
      area: t('pricing.polygon.area'),
      bestUse: t('pricing.polygon.bestUse'),
      priceRange: t('pricing.polygon.priceRange')
    },
    {
      type: t('pricing.dome.type'),
      area: t('pricing.dome.area'),
      bestUse: t('pricing.dome.bestUse'),
      priceRange: t('pricing.dome.priceRange')
    },
    {
      type: t('pricing.arcum.type'),
      area: t('pricing.arcum.area'),
      bestUse: t('pricing.arcum.bestUse'),
      priceRange: t('pricing.arcum.priceRange'),
      popular: true
    },
    {
      type: t('pricing.clearSpan.type'),
      area: t('pricing.clearSpan.area'),
      bestUse: t('pricing.clearSpan.bestUse'),
      priceRange: t('pricing.clearSpan.priceRange')
    }
  ];

  const additionalServices = getArrayTranslation('additionalServicesList');

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
                    <span>{t('traditionalFeatures.royalArabian')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>{t('traditionalFeatures.ornateDecorations')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>{t('traditionalFeatures.traditionalSeating')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>{t('traditionalFeatures.culturalAuthenticity')}</span>
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


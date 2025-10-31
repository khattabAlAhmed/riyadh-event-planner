'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Hero } from '@/components/shared/Hero';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ServiceCard } from '@/components/shared/ServiceCard';
import { FeatureCard } from '@/components/shared/FeatureCard';
import { TestimonialCard } from '@/components/shared/TestimonialCard';
import { PortfolioCard } from '@/components/shared/PortfolioCard';
import { CTASection } from '@/components/shared/CTASection';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { staggerContainer } from '@/lib/motion-variants';
import { portfolioItems } from '@/data/portfolio-items';
import { testimonials } from '@/data/testimonials';
import { PartyPopper, Building2, Package, Users, Award, Clock, Heart } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { generateLocalBusinessSchema, generateBreadcrumbSchema, renderJsonLd } from '@/lib/structured-data';
import { useTheme } from 'next-themes';
import { HoleBackground } from '@/components/animate-ui/components/backgrounds/hole';

export default function HomeContent() {
  const t = useTranslations('HomePage');
  const tServices = useTranslations('Services');
  const locale = useLocale();
  const { resolvedTheme: theme } = useTheme();
  // Get first 6 portfolio items for preview
  const featuredPortfolio = portfolioItems.slice(0, 6);
  const featuredTestimonials = testimonials.slice(0, 3);

  const getLocalizedContent = (item: { en: string; ar: string }) => {
    return locale === 'ar' ? item.ar : item.en;
  };

  // Generate structured data
  const localBusinessSchema = generateLocalBusinessSchema(locale);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: locale === 'ar' ? 'الرئيسية' : 'Home', url: '/' }
  ], locale);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: renderJsonLd(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: renderJsonLd(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <Hero
        title={t('heroTitle')}
        subtitle={t('heroSubtitle')}
        ctaText={t('heroCTA')}
        ctaHref="/quote-request"
        backgroundImage="https://drive.google.com/thumbnail?id=15JIZYUgT130BcKJhfABbXGjiizJJTi4E&sz=w1000"
        showFireworks={true}
      />

      {/* About Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('aboutTitle')}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t('aboutDescription')}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-lg overflow-hidden"
            >
              <Image
                src="https://drive.google.com/thumbnail?id=1lnBg3SHdgjLPx_ZxUR7dKpZ1QmRiC5_5&sz=w1000"
                alt={t('aboutImageAlt')}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title={t('servicesTitle')}
            align="center"
          />

          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            <ServiceCard
              title={tServices('eventPlanning.title')}
              description={tServices('eventPlanning.description')}
              href="/services/event-planning"
              icon={<PartyPopper className="h-8 w-8 text-primary" />}
              image="https://drive.google.com/thumbnail?id=1DY5fujvlnLqoSBO3PkFzH5dYp3XoCVRp&sz=w1000"
            />
            <ServiceCard
              title={tServices('exhibitions.title')}
              description={tServices('exhibitions.tradeExhibitions.description')}
              href="/services/exhibitions-conferences"
              icon={<Building2 className="h-8 w-8 text-primary" />}
              image="https://drive.google.com/thumbnail?id=1DbeFDu6gserY14tTzk0040FocG1XgOD4&sz=w1000"
            />
            <ServiceCard
              title={tServices('equipmentRental.title')}
              description={tServices('equipmentRental.description')}
              href="/services/equipment-rental"
              icon={<Package className="h-8 w-8 text-primary" />}
              image="https://drive.google.com/thumbnail?id=15JIZYUgT130BcKJhfABbXGjiizJJTi4E&sz=w1000"
            />
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title={t('whyChooseUsTitle')}
            subtitle={t('whyChooseUsSubtitle')}
            align="center"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <FeatureCard
              title={t('featureProjects')}
              description={t('featureProjectsDesc')}
              stat="500+"
              icon={<Award className="h-8 w-8 text-primary" />}
            />
            <FeatureCard
              title={t('featureClients')}
              description={t('featureClientsDesc')}
              stat="1000+"
              icon={<Users className="h-8 w-8 text-primary" />}
            />
            <FeatureCard
              title={t('featureExperience')}
              description={t('featureExperienceDesc')}
              stat="10+"
              icon={<Clock className="h-8 w-8 text-primary" />}
            />
            <FeatureCard
              title={t('featureQuality')}
              description={t('featureQualityDesc')}
              icon={<Heart className="h-8 w-8 text-primary" />}
            />
          </motion.div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title={t('portfolioTitle')}
            subtitle={t('portfolioSubtitle')}
            align="center"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
          >
            {featuredPortfolio.map((item) => (
              <PortfolioCard
                key={item.id}
                title={getLocalizedContent(item.title)}
                type={item.type}
                date={item.date}
                description={getLocalizedContent(item.description)}
                image={item.image}
              />
            ))}
          </motion.div>
          <div className="text-center">
            <Link href="/portfolio">
              <Button>{t('viewAllProjects')}</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title={t('testimonialsTitle')}
            subtitle={t('testimonialsSubtitle')}
            align="center"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {featuredTestimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={getLocalizedContent(testimonial.name)}
                role={testimonial.role ? getLocalizedContent(testimonial.role) : undefined}
                content={getLocalizedContent(testimonial.content)}
                rating={testimonial.rating}
                image={testimonial.image}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
      
        title={t('finalCTATitle')}
        subtitle={t('finalCTASubtitle')}
        ctaText={t('finalCTAButton')}
        ctaHref="/quote-request"
      />
    </>
  );
}


'use client';

import { useTranslations } from 'next-intl';
import { Hero } from '@/components/shared/Hero';
import { ShareButtons } from '@/components/shared/ShareButtons';
import { CTASection } from '@/components/shared/CTASection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '@/lib/motion-variants';
import { Building2, Users, Presentation, Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function ExhibitionsConferencesPage() {
  const t = useTranslations('Services.exhibitions');
  const tCommon = useTranslations('Common');

  const tradeExhibitionsServices = [
    t('tradeExhibitions.services.venueSelection'),
    t('tradeExhibitions.services.boothDesign'),
    t('tradeExhibitions.services.exhibitorManagement'),
    t('tradeExhibitions.services.marketing'),
    t('tradeExhibitions.services.registration'),
    t('tradeExhibitions.services.vendorCoordination')
  ];

  const conferencesServices = [
    t('conferences.services.venueBookings'),
    t('conferences.services.materials'),
    t('conferences.services.speakers'),
    t('conferences.services.scheduling'),
    t('conferences.services.technology'),
    t('conferences.services.interpretation'),
    t('conferences.services.hospitality')
  ];

  const corporateEventTypes = [
    { icon: Briefcase, titleKey: 'corporateEvents.productLaunch', descriptionKey: 'corporateEvents.productLaunchDesc' },
    { icon: Users, titleKey: 'corporateEvents.shareholderMeetings', descriptionKey: 'corporateEvents.shareholderMeetingsDesc' },
    { icon: Presentation, titleKey: 'corporateEvents.trainingWorkshops', descriptionKey: 'corporateEvents.trainingWorkshopsDesc' },
    { icon: Users, titleKey: 'corporateEvents.teamBuilding', descriptionKey: 'corporateEvents.teamBuildingDesc' }
  ];

  const pastProjects = [
    {
      title: 'Riyadh Tech Expo 2024',
      type: 'Trade Exhibition',
      description: 'Organized a major technology exhibition with 150+ exhibitors',
      image: '/placeholder-exhibition.jpg'
    },
    {
      title: 'Healthcare Conference 2024',
      type: 'Professional Conference',
      description: 'Managed international healthcare conference with 500+ attendees',
      image: '/placeholder-portfolio-1.jpg'
    },
    {
      title: 'Saudi Vision Forum',
      type: 'Corporate Event',
      description: 'Coordinated large-scale corporate forum for 1000+ participants',
      image: '/placeholder-portfolio-2.jpg'
    }
  ];

  return (
    <>
      <Hero
        title={t('title')}
        subtitle={t('subtitle')}
        ctaText={tCommon('getStarted')}
        ctaHref="/quote-request"
        showStars={true}
        showFireworks={false}
      />

      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Introduction */}
        <section className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('intro')}
          </p>
        </section>

        {/* Trade Exhibitions */}
        <section className="mb-16">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="h-10 w-10 text-primary" />
              <h2 className="text-3xl font-bold">{t('tradeExhibitions.title')}</h2>
            </div>
            
            <Card className="mb-8">
              <CardContent className="pt-6">
                <p className="text-lg text-muted-foreground mb-6">
                  {t('tradeExhibitions.description')}
                </p>
                
                <h3 className="text-xl font-semibold mb-4">{t('tradeExhibitions.servicesTitle')}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {tradeExhibitionsServices.map((service, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-8">
              <Image
                src="/placeholder-exhibition.jpg"
                alt="Trade Exhibition"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </section>

        {/* Conferences */}
        <section className="mb-16">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Presentation className="h-10 w-10 text-primary" />
              <h2 className="text-3xl font-bold">{t('conferences.title')}</h2>
            </div>
            
            <Card className="mb-8">
              <CardContent className="pt-6">
                <p className="text-lg text-muted-foreground mb-6">
                  {t('conferences.description')}
                </p>
                
                <h3 className="text-xl font-semibold mb-4">{t('conferences.servicesTitle')}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {conferencesServices.map((service, index) => (
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

        {/* Corporate Events */}
        <section className="mb-16">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="h-10 w-10 text-primary" />
              <h2 className="text-3xl font-bold">{t('corporateEvents.title')}</h2>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8">
              {t('corporateEvents.description')}
            </p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6"
            >
              {corporateEventTypes.map((eventType, index) => {
                const Icon = eventType.icon;
                return (
                  <Card key={index}>
                    <CardHeader>
                      <Icon className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>{t(eventType.titleKey)}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{t(eventType.descriptionKey)}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </motion.div>
          </motion.div>
        </section>

        {/* Past Projects */}
        <section className="mb-16">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="h-10 w-10 text-primary" />
              <h2 className="text-3xl font-bold">{t('pastProjects.title')}</h2>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8">
              {t('pastProjects.subtitle')}
            </p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6"
            >
              {pastProjects.map((project, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="text-sm text-primary font-medium mb-1">{project.type}</div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
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
        ctaText={t('ctaButton')}
        ctaHref="/quote-request"
      />
    </>
  );
}


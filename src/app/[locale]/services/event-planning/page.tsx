'use client';

import { useTranslations } from 'next-intl';
import { Hero } from '@/components/shared/Hero';
import { ShareButtons } from '@/components/shared/ShareButtons';
import { CTASection } from '@/components/shared/CTASection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { staggerContainer } from '@/lib/motion-variants';
import { Heart, Cake, GraduationCap, Users, Calendar } from 'lucide-react';
import { FireworksBackground } from '@/components/animate-ui/components/backgrounds/fireworks';
import { BackgroundLines } from '@/components/ui/background-lines';

export default function EventPlanningPage() {
  const t = useTranslations('Services.eventPlanning');
  const tCommon = useTranslations('Common');

  return (
    <>

      <Hero
        title={t('title')}
        subtitle={t('description')}
        ctaText={tCommon('getStarted')}
        ctaHref="/quote-request"
        showFireworks={false}
        showLines={true}
      />

      <div className="container mx-auto px-4 py-12 md:py-16 relative">
        {/* Introduction */}
        
        <section className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('intro')}
          </p>
        </section>

        {/* Event Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t('eventTypesTitle')}</h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            <Card>
              <CardHeader>
                <Heart className="h-8 w-8 text-primary mb-2" />
                <CardTitle>{t('weddings.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{t('weddings.description')}</p>
                <p className="text-sm text-muted-foreground">{t('weddings.includes')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Cake className="h-8 w-8 text-primary mb-2" />
                <CardTitle>{t('birthdays.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t('birthdays.description')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <GraduationCap className="h-8 w-8 text-primary mb-2" />
                <CardTitle>{t('graduations.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t('graduations.description')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>{t('familyEvents.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('familyEvents.description')}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* How We Work */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t('howWeWork.title')}</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: 'step1', icon: Calendar },
              { step: 'step2', icon: Calendar },
              { step: 'step3', icon: Calendar },
              { step: 'step4', icon: Calendar },
              { step: 'step5', icon: Calendar },
            ].map((item, index) => (
              <Card key={item.step}>
                <CardContent className="pt-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">{index + 1}</div>
                  <p className="text-sm">{t(`howWeWork.${item.step}`)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="flex justify-center mb-8">
          <ShareButtons />
        </div>
      </div>

      <CTASection
        title={t('ctaTitle')}
        subtitle={t('ctaSubtitle')}
        ctaText={t('ctaButton')}
        ctaHref="/quote-request"
      />
    </>
  );
}


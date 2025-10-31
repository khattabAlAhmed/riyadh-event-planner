'use client';

import { useTranslations, useLocale } from 'next-intl';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ShareButtons } from '@/components/shared/ShareButtons';
import { StatsCounter } from '@/components/features/StatsCounter';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { staggerContainer } from '@/lib/motion-variants';
import { teamMembers } from '@/data/team-members';

export default function AboutPage() {
  const t = useTranslations('About');
  const locale = useLocale();

  const getLocalizedContent = (item: { en: string; ar: string }) => {
    return locale === 'ar' ? item.ar : item.en;
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <SectionHeading
        title={t('title')}
        align="center"
      />

      {/* Our Story */}
      <section className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">{t('ourStory')}</h2>
        <p className="text-muted-foreground leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>

      {/* Stats */}
      <section className="mt-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-primary mb-2">
                <StatsCounter value={500} suffix="+" />
              </div>
              <p className="text-muted-foreground">{t('stats.projects')}</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-primary mb-2">
                <StatsCounter value={1000} suffix="+" />
              </div>
              <p className="text-muted-foreground">{t('stats.clients')}</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-primary mb-2">
                <StatsCounter value={10} suffix="+" />
              </div>
              <p className="text-muted-foreground">{t('stats.experience')}</p>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Team */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-8 text-center">{t('team')}</h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {teamMembers.map((member) => (
            <Card key={member.id} className="text-center">
              <CardContent className="pt-6">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={member.image} alt={getLocalizedContent(member.name)} />
                  <AvatarFallback>{getLocalizedContent(member.name).charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold">{getLocalizedContent(member.name)}</h3>
                <p className="text-sm text-muted-foreground mb-2">{getLocalizedContent(member.role)}</p>
                <p className="text-sm text-muted-foreground">{getLocalizedContent(member.bio)}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </section>

      <div className="mt-12 flex justify-center">
        <ShareButtons />
      </div>
    </div>
  );
}


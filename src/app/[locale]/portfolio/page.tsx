'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { PortfolioCard } from '@/components/shared/PortfolioCard';
import { ShareButtons } from '@/components/shared/ShareButtons';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { staggerContainer } from '@/lib/motion-variants';
import { portfolioItems } from '@/data/portfolio-items';

export default function PortfolioPage() {
  const t = useTranslations('Portfolio');
  const locale = useLocale();
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const getLocalizedContent = (item: { en: string; ar: string }) => {
    return locale === 'ar' ? item.ar : item.en;
  };

  const getTranslatedType = (type: string) => {
    return t(`types.${type}` as any) || type;
  };

  const filteredItems = selectedFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.type === selectedFilter);

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <SectionHeading
        title={t('title')}
        subtitle={t('subtitle')}
        align="center"
      />

      <Tabs value={selectedFilter} onValueChange={setSelectedFilter} className="mt-8">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="all">{t('filters.all')}</TabsTrigger>
          <TabsTrigger value="wedding">{t('filters.weddings')}</TabsTrigger>
          <TabsTrigger value="birthday">{t('filters.birthdays')}</TabsTrigger>
          <TabsTrigger value="exhibition">{t('filters.exhibitions')}</TabsTrigger>
          <TabsTrigger value="conference">{t('filters.conferences')}</TabsTrigger>
          <TabsTrigger value="corporate">{t('filters.corporate')}</TabsTrigger>
        </TabsList>

        <TabsContent value={selectedFilter} className="mt-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item) => (
              <PortfolioCard
                key={item.id}
                title={getLocalizedContent(item.title)}
                type={getTranslatedType(item.type)}
                date={item.date}
                description={getLocalizedContent(item.description)}
                image={item.image}
              />
            ))}
          </motion.div>
        </TabsContent>
      </Tabs>

      <div className="mt-8 flex justify-center">
        <ShareButtons />
      </div>
    </div>
  );
}


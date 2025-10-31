'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { PortfolioCard } from '@/components/shared/PortfolioCard';
import { ShareButtons } from '@/components/shared/ShareButtons';
import { portfolioItems } from '@/data/portfolio-items';
import {
  Tabs,
  TabsPanel,
  TabsPanels,
  TabsList,
  TabsTab,
} from '@/components/animate-ui/components/base/tabs';

export default function PortfolioContent() {
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
          <TabsTab value="all">{t('filters.all')}</TabsTab>
          <TabsTab value="wedding">{t('filters.weddings')}</TabsTab>
          <TabsTab value="birthday">{t('filters.birthdays')}</TabsTab>
          <TabsTab value="exhibition">{t('filters.exhibitions')}</TabsTab>
          <TabsTab value="conference">{t('filters.conferences')}</TabsTab>
          <TabsTab value="corporate">{t('filters.corporate')}</TabsTab>
        </TabsList>

        <TabsPanels className="mt-8">
          {['all', 'wedding', 'birthday', 'exhibition', 'conference', 'corporate'].map((filterValue) => {
            const items = filterValue === 'all'
              ? portfolioItems
              : portfolioItems.filter(item => item.type === filterValue);
            
            return (
              <TabsPanel key={filterValue} value={filterValue}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((item) => (
                    <PortfolioCard
                      key={item.id}
                      title={getLocalizedContent(item.title)}
                      type={getTranslatedType(item.type)}
                      date={item.date}
                      description={getLocalizedContent(item.description)}
                      image={item.image}
                    />
                  ))}
                </div>
              </TabsPanel>
            );
          })}
        </TabsPanels>
      </Tabs>

      <div className="mt-8 flex justify-center">
        <ShareButtons />
      </div>
    </div>
  );
}


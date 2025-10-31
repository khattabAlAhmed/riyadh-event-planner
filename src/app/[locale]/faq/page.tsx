'use client';

import { useTranslations, useLocale } from 'next-intl';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ShareButtons } from '@/components/shared/ShareButtons';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqItems } from '@/data/faq-items';

export default function FAQPage() {
  const t = useTranslations('FAQ');
  const locale = useLocale();

  const getLocalizedContent = (item: { en: string; ar: string }) => {
    return locale === 'ar' ? item.ar : item.en;
  };

  const categorizedFAQs = {
    services: faqItems.filter(item => item.category === 'services'),
    pricing: faqItems.filter(item => item.category === 'pricing'),
    booking: faqItems.filter(item => item.category === 'booking'),
    equipment: faqItems.filter(item => item.category === 'equipment'),
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <SectionHeading
        title={t('title')}
        align="center"
      />

      <div className="max-w-4xl mx-auto mt-12 space-y-8">
        {/* Services */}
        <div>
          <h2 className="text-2xl font-bold mb-4">{t('services.title')}</h2>
          <Accordion type="single" collapsible className="w-full">
            {categorizedFAQs.services.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>{getLocalizedContent(item.question)}</AccordionTrigger>
                <AccordionContent>{getLocalizedContent(item.answer)}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Pricing */}
        <div>
          <h2 className="text-2xl font-bold mb-4">{t('pricing.title')}</h2>
          <Accordion type="single" collapsible className="w-full">
            {categorizedFAQs.pricing.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>{getLocalizedContent(item.question)}</AccordionTrigger>
                <AccordionContent>{getLocalizedContent(item.answer)}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Booking */}
        <div>
          <h2 className="text-2xl font-bold mb-4">{t('booking.title')}</h2>
          <Accordion type="single" collapsible className="w-full">
            {categorizedFAQs.booking.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>{getLocalizedContent(item.question)}</AccordionTrigger>
                <AccordionContent>{getLocalizedContent(item.answer)}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Equipment */}
        <div>
          <h2 className="text-2xl font-bold mb-4">{t('equipment.title')}</h2>
          <Accordion type="single" collapsible className="w-full">
            {categorizedFAQs.equipment.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>{getLocalizedContent(item.question)}</AccordionTrigger>
                <AccordionContent>{getLocalizedContent(item.answer)}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <ShareButtons />
      </div>
    </div>
  );
}


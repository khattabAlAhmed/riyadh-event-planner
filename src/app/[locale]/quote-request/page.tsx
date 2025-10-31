'use client';

import { useTranslations } from 'next-intl';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { QuoteRequestForm } from '@/components/forms/QuoteRequestForm';
import { ContactInfo } from '@/components/shared/ContactInfo';
import { ShareButtons } from '@/components/shared/ShareButtons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function QuoteRequestPage() {
  const t = useTranslations('QuoteRequest');

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <SectionHeading
        title={t('title')}
        subtitle={t('subtitle')}
        align="center"
      />

      <div className="max-w-4xl mx-auto mt-8">
        <p className="text-center text-muted-foreground mb-8">
          {t('formIntro')}
        </p>

        <QuoteRequestForm />

        {/* Alternative Contact Info */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>{t('contactInfo')}</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactInfo />
          </CardContent>
        </Card>

        {/* Share Buttons */}
        <div className="mt-8 flex justify-center">
          <ShareButtons />
        </div>
      </div>
    </div>
  );
}


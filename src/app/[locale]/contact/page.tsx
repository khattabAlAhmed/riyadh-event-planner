'use client';

import { useTranslations } from 'next-intl';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ContactForm } from '@/components/forms/ContactForm';
import { ContactInfo } from '@/components/shared/ContactInfo';
import { ShareButtons } from '@/components/shared/ShareButtons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ContactPage() {
  const t = useTranslations('Contact');

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <SectionHeading
        title={t('title')}
        subtitle={t('subtitle')}
        align="center"
      />

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-12">
        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>{t('contactInfo')}</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactInfo />
          </CardContent>
        </Card>

        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>{t('formTitle')}</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>

      {/* Map Placeholder */}
      <div className="mt-12">
        <Card>
          <CardContent className="p-0">
            <div className="relative h-96 w-full bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">{t('mapPlaceholder')}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Share Buttons */}
      <div className="mt-8 flex justify-center">
        <ShareButtons />
      </div>
    </div>
  );
}


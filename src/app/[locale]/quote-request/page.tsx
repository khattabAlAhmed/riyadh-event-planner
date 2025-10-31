import type { Metadata } from 'next';
import { generatePageMetadata, generateKeywords } from '@/lib/metadata';
import QuoteRequestContent from './Content';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const title = locale === 'ar' 
    ? 'احصل على عرض سعر | طلب عرض سعر مجاني'
    : 'Get a Quote | Free Quote Request';
  
  const description = locale === 'ar'
    ? 'احصل على عرض سعر مخصص لمناسبتك. املأ النموذج وسنتواصل معك خلال 24 ساعة. خدمات تنظيم الحفلات والمعارض والمؤتمرات في الرياض.'
    : 'Get a custom quote for your event. Fill out the form and we will contact you within 24 hours. Event planning, exhibitions, and conference services in Riyadh.';

  const keywords = locale === 'ar'
    ? generateKeywords(
        'طلب عرض سعر',
        'عرض سعر مجاني',
        'احصل على عرض سعر',
        'تقدير تكلفة الحفل',
        'عرض سعر معرض'
      )
    : generateKeywords(
        'Get a quote',
        'Free quote',
        'Quote request',
        'Event cost estimate',
        'Event planning quote'
      );

  return generatePageMetadata({
    title,
    description,
    keywords,
    path: '/quote-request',
    locale,
  }, locale);
}

export default function QuoteRequestPage() {
  return <QuoteRequestContent />;
}

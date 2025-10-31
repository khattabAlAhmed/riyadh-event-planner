import type { Metadata } from 'next';
import { generatePageMetadata, generateKeywords } from '@/lib/metadata';
import FAQContent from './Content';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const title = locale === 'ar' 
    ? 'الأسئلة الشائعة | شركة تنظيم فعاليات الرياض'
    : 'Frequently Asked Questions | Riyadh Event Planner';
  
  const description = locale === 'ar'
    ? 'إجابات على الأسئلة الشائعة حول خدمات تنظيم الحفلات والمعارض والمؤتمرات وتأجير المعدات في الرياض. تعرف على الأسعار والحجز والخدمات.'
    : 'Answers to frequently asked questions about event planning, exhibitions, conferences, and equipment rental services in Riyadh. Learn about pricing, booking, and services.';

  const keywords = locale === 'ar'
    ? generateKeywords(
        'الأسئلة الشائعة',
        'أسئلة عن الخدمات',
        'أسئلة عن الأسعار',
        'أسئلة عن الحجز',
        'أسئلة عن المعدات'
      )
    : generateKeywords(
        'FAQ',
        'Frequently asked questions',
        'Event planning FAQ',
        'Rental FAQ',
        'Booking questions'
      );

  return generatePageMetadata({
    title,
    description,
    keywords,
    path: '/faq',
    locale,
  }, locale);
}

export default function FAQPage() {
  return <FAQContent />;
}

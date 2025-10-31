import type { Metadata } from 'next';
import { generatePageMetadata, generateKeywords } from '@/lib/metadata';
import ContactContent from './Content';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const title = locale === 'ar' 
    ? 'اتصل بنا | شركة تنظيم فعاليات الرياض'
    : 'Contact Us | Riyadh Event Planner';
  
  const description = locale === 'ar'
    ? 'تواصل معنا للحصول على استشارة مجانية حول خدمات تنظيم الحفلات والمعارض والمؤتمرات في الرياض. متاحون من السبت للخميس من 9ص إلى 6م.'
    : 'Contact us for a free consultation on event planning, exhibitions, and conference services in Riyadh. Available Saturday-Thursday from 9AM to 6PM.';

  const keywords = locale === 'ar'
    ? generateKeywords(
        'اتصل بنا',
        'معلومات التواصل',
        'شركة تنظيم فعاليات الرياض',
        'تواصل معنا',
        'استشارة مجانية'
      )
    : generateKeywords(
        'Contact us',
        'Contact information',
        'Riyadh event planner contact',
        'Get in touch',
        'Free consultation'
      );

  return generatePageMetadata({
    title,
    description,
    keywords,
    path: '/contact',
    locale,
  }, locale);
}

export default function ContactPage() {
  return <ContactContent />;
}

import type { Metadata } from 'next';
import { generatePageMetadata, getMetadataTranslations, generateKeywords } from '@/lib/metadata';
import HomeContent from './Content';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getMetadataTranslations(locale, 'HomePage');

  const title = locale === 'ar' 
    ? 'تنظيم حفلات ومعارض ومؤتمرات في الرياض | شركة تنظيم فعاليات الرياض'
    : 'Riyadh Event Planner | Professional Event Planning & Equipment Rental';
  
  const description = locale === 'ar'
    ? 'شركة تنظيم حفلات ومعارض ومؤتمرات في الرياض. خدمات تنسيق شاملة، تأجير خيام أوروبية، كراسي، طاولات ومعدات. احصل على عرض سعر مجاني اليوم!'
    : 'Professional event planning, exhibitions, and equipment rental services in Riyadh. Comprehensive coordination, European tent rental, chairs, tables and equipment. Get a free quote today!';

  const keywords = locale === 'ar'
    ? generateKeywords(
        'تنظيم حفلات الرياض',
        'شركة تنظيم فعاليات الرياض',
        'تنسيق حفلات بالرياض',
        'أفضل شركة تنظيم حفلات',
        'تنظيم معارض الرياض',
        'تأجير خيام أوروبية الرياض',
        'تأجير كراسي وطاولات الرياض'
      )
    : generateKeywords(
        'Riyadh event planning',
        'Event planner Riyadh',
        'Wedding planning Riyadh',
        'Exhibition organization Riyadh',
        'Tent rental Riyadh',
        'Equipment rental Riyadh'
      );

  return generatePageMetadata({
    title,
    description,
    keywords,
    path: '',
    locale,
  }, locale);
}

export default function HomePage() {
  return <HomeContent />;
}

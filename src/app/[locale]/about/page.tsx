import type { Metadata } from 'next';
import { generatePageMetadata, generateKeywords } from '@/lib/metadata';
import AboutContent from './Content';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const title = locale === 'ar' 
    ? 'من نحن | شركة تنظيم فعاليات الرياض'
    : 'About Us | Riyadh Event Planner';
  
  const description = locale === 'ar'
    ? 'شركة رائدة في تنظيم الفعاليات في الرياض منذ 10 سنوات. فريق محترف من المنسقين والمصممين. 500+ مشروع ناجح و1000+ عميل راض. اكتشف قصتنا ورؤيتنا.'
    : 'Leading event planning company in Riyadh with 10 years of experience. Professional team of coordinators and designers. 500+ successful projects and 1000+ satisfied clients. Discover our story and vision.';

  const keywords = locale === 'ar'
    ? generateKeywords(
        'من نحن',
        'شركة تنظيم فعاليات الرياض',
        'فريق تنظيم الحفلات',
        'خبرة تنظيم الفعاليات',
        'قصتنا'
      )
    : generateKeywords(
        'About us',
        'Riyadh event planning company',
        'Event planning team',
        'Event planning experience',
        'Our story'
      );

  return generatePageMetadata({
    title,
    description,
    keywords,
    path: '/about',
    locale,
  }, locale);
}

export default function AboutPage() {
  return <AboutContent />;
}

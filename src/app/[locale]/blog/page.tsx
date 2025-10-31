import type { Metadata } from 'next';
import { generatePageMetadata, generateKeywords } from '@/lib/metadata';
import BlogContent from './Content';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const title = locale === 'ar' 
    ? 'المدونة | مقالات ونصائح تنظيم الحفلات'
    : 'Blog | Event Planning Articles & Tips';
  
  const description = locale === 'ar'
    ? 'اقرأ أحدث المقالات والنصائح حول تنظيم الحفلات والمعارض والمؤتمرات في الرياض. دليل شامل لتنظيم حفلات زفاف ناجحة، اختيار الخيام، والديكورات.'
    : 'Read the latest articles and tips on event planning, exhibitions, and conferences in Riyadh. Comprehensive guides for successful weddings, tent selection, and decorations.';

  const keywords = locale === 'ar'
    ? generateKeywords(
        'مقالات تنظيم الحفلات',
        'نصائح تنظيم الحفلات',
        'دليل تنظيم حفلات الزفاف',
        'مقالات الخيام',
        'مقالات الديكور'
      )
    : generateKeywords(
        'Event planning articles',
        'Event planning tips',
        'Wedding planning guide',
        'Tent articles',
        'Decoration articles'
      );

  return generatePageMetadata({
    title,
    description,
    keywords,
    path: '/blog',
    locale,
  }, locale);
}

export default function BlogPage() {
  return <BlogContent />;
}

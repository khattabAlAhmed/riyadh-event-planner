import type { Metadata } from 'next';
import { generatePageMetadata, generateKeywords } from '@/lib/metadata';
import PortfolioContent from './Content';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const title = locale === 'ar' 
    ? 'معرض الأعمال | مشاريعنا السابقة'
    : 'Portfolio | Our Previous Projects';
  
  const description = locale === 'ar'
    ? 'استعرض معرض أعمالنا الذي يضم أكثر من 500 مشروع ناجح في تنظيم الحفلات والمعارض والمؤتمرات في الرياض. حفلات زفاف، أعياد ميلاد، معارض تجارية ومؤتمرات.'
    : 'Browse our portfolio featuring 500+ successful projects in event planning, exhibitions, and conferences in Riyadh. Weddings, birthdays, trade exhibitions, and conferences.';

  const keywords = locale === 'ar'
    ? generateKeywords(
        'معرض الأعمال',
        'مشاريعنا السابقة',
        'حفلات زفاف الرياض',
        'معارض الرياض',
        'مؤتمرات الرياض'
      )
    : generateKeywords(
        'Portfolio',
        'Our projects',
        'Riyadh weddings',
        'Riyadh exhibitions',
        'Riyadh conferences'
      );

  return generatePageMetadata({
    title,
    description,
    keywords,
    path: '/portfolio',
    locale,
  }, locale);
}

export default function PortfolioPage() {
  return <PortfolioContent />;
}

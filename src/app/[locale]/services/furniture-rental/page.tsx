import type { Metadata } from 'next';
import { generatePageMetadata, generateKeywords } from '@/lib/metadata';
import FurnitureRentalContent from './Content';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const title = locale === 'ar' 
    ? 'تأجير الكراسي والطاولات | كراسي وطاولات أنيقة لجميع أنواع الفعاليات'
    : 'Furniture Rental | Elegant Chairs & Tables for All Event Types';
  
  const description = locale === 'ar'
    ? 'تأجير كراسي وطاولات أنيقة لجميع أنواع الفعاليات في الرياض. كراسي شيفاري، نابليون، بلاستيكية، وشفافة. طاولات مستديرة ومستطيلة وكوكتيل. أقمشة وأغطية مطابقة.'
    : 'Elegant chair and table rental for all event types in Riyadh. Chiavari, Napoleon, plastic, and transparent chairs. Round, rectangular, and cocktail tables. Matching linens and covers.';

  const keywords = locale === 'ar'
    ? generateKeywords(
        'تأجير كراسي الرياض',
        'تأجير طاولات الرياض',
        'كراسي شيفاري للإيجار',
        'تأجير أثاث الحفلات',
        'كراسي وطاولات للايجار'
      )
    : generateKeywords(
        'Chair rental Riyadh',
        'Table rental Riyadh',
        'Chiavari chair rental',
        'Event furniture rental',
        'Chair and table rental'
      );

  return generatePageMetadata({
    title,
    description,
    keywords,
    path: '/services/furniture-rental',
    locale,
  }, locale);
}

export default function FurnitureRentalPage() {
  return <FurnitureRentalContent />;
}

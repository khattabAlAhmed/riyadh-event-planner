import type { Metadata } from 'next';
import { generatePageMetadata, generateKeywords } from '@/lib/metadata';
import EquipmentRentalContent from './Content';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const title = locale === 'ar' 
    ? 'تأجير المعدات واللوازم | خيام وكراسي وطاولات ومعدات صوتية'
    : 'Equipment & Supplies Rental | Tents, Chairs, Tables & Audio Equipment';
  
  const description = locale === 'ar'
    ? 'تأجير الخيام، الكراسي، الطاولات، والمعدات الصوتية والإضاءة في الرياض. معدات عالية الجودة، توصيل وتركيب احترافي، دعم على مدار الساعة.'
    : 'Rental of tents, chairs, tables, and audio equipment in Riyadh. High-quality equipment, professional delivery and installation, 24/7 support.';

  const keywords = locale === 'ar'
    ? generateKeywords(
        'تأجير معدات حفلات الرياض',
        'تأجير لوازم الحفلات',
        'تأجير كراسي وطاولات الرياض',
        'تأجير خيام الرياض',
        'تأجير معدات صوتية'
      )
    : generateKeywords(
        'Event equipment rental Riyadh',
        'Party supplies rental',
        'Chair and table rental Riyadh',
        'Tent rental Riyadh',
        'Audio equipment rental'
      );

  return generatePageMetadata({
    title,
    description,
    keywords,
    path: '/services/equipment-rental',
    locale,
  }, locale);
}

export default function EquipmentRentalPage() {
  return <EquipmentRentalContent />;
}

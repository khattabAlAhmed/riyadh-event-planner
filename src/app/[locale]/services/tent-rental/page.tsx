import type { Metadata } from 'next';
import { generatePageMetadata, generateKeywords } from '@/lib/metadata';
import TentRentalContent from './Content';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const title = locale === 'ar' 
    ? 'تأجير الخيام | خيام أوروبية وتقليدية فاخرة لجميع المناسبات'
    : 'Tent Rental | Premium European & Traditional Tents for All Occasions';
  
  const description = locale === 'ar'
    ? 'تأجير خيام أوروبية فاخرة لجميع المناسبات في الرياض. خيام هرمية، بيلاجون، دوم، أركوم، وشفافة. تركيب وتفكيك احترافي، تكييف وإضاءة مدمجة.'
    : 'Premium European tent rental for all occasions in Riyadh. Pyramid, polygon, dome, arcum, and clear span tents. Professional installation and dismantling, integrated AC and lighting.';

  const keywords = locale === 'ar'
    ? generateKeywords(
        'تأجير خيام أوروبية الرياض',
        'خيام هرمية للإيجار',
        'تأجير خيام حفلات',
        'خيام فاخرة للمناسبات',
        'تأجير خيام بيلاجون'
      )
    : generateKeywords(
        'European tent rental Riyadh',
        'Pyramid tent rental',
        'Event tent rental',
        'Luxury tent rental',
        'Polygon tent rental'
      );

  return generatePageMetadata({
    title,
    description,
    keywords,
    path: '/services/tent-rental',
    locale,
  }, locale);
}

export default function TentRentalPage() {
  return <TentRentalContent />;
}

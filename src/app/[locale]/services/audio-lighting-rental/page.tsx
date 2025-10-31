import type { Metadata } from 'next';
import { generatePageMetadata, generateKeywords } from '@/lib/metadata';
import AudioLightingRentalContent from './Content';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const title = locale === 'ar' 
    ? 'تأجير المعدات الصوتية والإضاءة | معدات صوتية وإضاءة احترافية'
    : 'Audio & Lighting Rental | Professional Audio & Lighting Equipment';
  
  const description = locale === 'ar'
    ? 'تأجير معدات صوتية وإضاءة احترافية لفعاليات لا تُنسى في الرياض. سماعات احترافية، أنظمة ميكروفونات، إضاءة LED، إضاءة مسرح، ومؤثرات خاصة. دعم فني على مدار الساعة.'
    : 'Professional audio and lighting equipment rental for unforgettable events in Riyadh. Professional speakers, microphone systems, LED lighting, stage lighting, and special effects. 24/7 technical support.';

  const keywords = locale === 'ar'
    ? generateKeywords(
        'تأجير معدات صوتية الرياض',
        'تأجير إضاءة الرياض',
        'معدات صوت احترافية',
        'إضاءة LED للحفلات',
        'تأجير معدات DJ'
      )
    : generateKeywords(
        'Audio equipment rental Riyadh',
        'Lighting rental Riyadh',
        'Professional sound equipment',
        'LED lighting for events',
        'DJ equipment rental'
      );

  return generatePageMetadata({
    title,
    description,
    keywords,
    path: '/services/audio-lighting-rental',
    locale,
  }, locale);
}

export default function AudioLightingRentalPage() {
  return <AudioLightingRentalContent />;
}

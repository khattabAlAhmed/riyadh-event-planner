import type { Metadata } from 'next';
import { generatePageMetadata, generateKeywords } from '@/lib/metadata';
import ExhibitionsConferencesContent from './Content';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const title = locale === 'ar' 
    ? 'تنظيم المعارض والمؤتمرات | معارض تجارية ومؤتمرات مهنية'
    : 'Exhibitions & Conferences | Trade Exhibitions & Professional Conferences';
  
  const description = locale === 'ar'
    ? 'تنظيم وإدارة احترافية للمعارض التجارية والمؤتمرات والفعاليات المؤسسية في الرياض. خدمات شاملة من التخطيط الأولي إلى التنفيذ النهائي.'
    : 'Professional organization and management of trade exhibitions, conferences, and corporate events in Riyadh. Comprehensive services from initial planning to final execution.';

  const keywords = locale === 'ar'
    ? generateKeywords(
        'تنظيم معارض الرياض',
        'تنظيم مؤتمرات بالرياض',
        'شركة تنظيم معارض تجارية',
        'تنظيم فعاليات مؤسسية',
        'إدارة المعارض التجارية'
      )
    : generateKeywords(
        'Exhibition organization Riyadh',
        'Conference organization Riyadh',
        'Trade exhibition planning',
        'Corporate event planning',
        'Exhibition management'
      );

  return generatePageMetadata({
    title,
    description,
    keywords,
    path: '/services/exhibitions-conferences',
    locale,
  }, locale);
}

export default function ExhibitionsConferencesPage() {
  return <ExhibitionsConferencesContent />;
}

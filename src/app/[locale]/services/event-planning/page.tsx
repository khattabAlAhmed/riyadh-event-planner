import type { Metadata } from 'next';
import { generatePageMetadata, generateKeywords } from '@/lib/metadata';
import EventPlanningContent from './Content';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const title = locale === 'ar' 
    ? 'تنظيم الحفلات | حفلات زفاف وأعياد ميلاد وتخرج'
    : 'Event Planning | Weddings, Birthdays & Graduations';
  
  const description = locale === 'ar'
    ? 'خدمات تنظيم شاملة لجميع أنواع الاحتفالات والمناسبات في الرياض. حفلات زفاف، أعياد ميلاد، حفلات تخرج، ومناسبات عائلية. فريق محترف من المنسقين والمصممين.'
    : 'Comprehensive event planning services for all types of celebrations and occasions in Riyadh. Weddings, birthdays, graduations, and family events. Professional team of coordinators and designers.';

  const keywords = locale === 'ar'
    ? generateKeywords(
        'تنظيم حفلات زفاف الرياض',
        'تنسيق حفلات أعياد ميلاد',
        'تنظيم حفلات تخرج الرياض',
        'منظم حفلات محترف',
        'تنظيم المناسبات العائلية'
      )
    : generateKeywords(
        'Wedding planning Riyadh',
        'Birthday party planning',
        'Graduation party planning',
        'Professional event planner',
        'Family event planning'
      );

  return generatePageMetadata({
    title,
    description,
    keywords,
    path: '/services/event-planning',
    locale,
  }, locale);
}

export default function EventPlanningPage() {
  return <EventPlanningContent />;
}

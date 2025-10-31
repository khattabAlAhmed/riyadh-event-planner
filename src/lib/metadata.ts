import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://riyadheventplanner.com';
const siteName = 'Riyadh Event Planner';

export interface MetadataOptions {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  image?: string;
  locale?: string;
}

/**
 * Generate SEO-friendly metadata for pages
 */
export async function generatePageMetadata(
  options: MetadataOptions,
  locale: string
): Promise<Metadata> {
  const {
    title,
    description,
    keywords = [],
    path = '',
    image,
  } = options;

  const currentUrl = `${baseUrl}/${locale}${path}`;
  const defaultImage = `${baseUrl}/og-image.jpg`;
  const ogImage = image || defaultImage;

  // Generate alternate language URLs
  const alternates: Metadata['alternates'] = {
    languages: {},
  };

  routing.locales.forEach((loc) => {
    alternates.languages![loc] = `${baseUrl}/${loc}${path}`;
  });

  return {
    title: {
      default: title,
      template: `%s | ${siteName}`,
    },
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    alternates,
    openGraph: {
      title,
      description,
      url: currentUrl,
      siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: locale === 'ar' ? 'ar_SA' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    metadataBase: new URL(baseUrl),
  };
}

/**
 * Helper to get translations for metadata
 */
export async function getMetadataTranslations(locale: string, namespace: string) {
  return await getTranslations({ locale, namespace });
}

/**
 * Generate keywords array from strings
 */
export function generateKeywords(...keywords: string[]): string[] {
  return keywords.filter(Boolean);
}


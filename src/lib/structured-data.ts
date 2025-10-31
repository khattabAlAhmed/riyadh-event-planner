type JsonLd = Record<string, unknown>;

export function generateLocalBusinessSchema(locale: string = 'en'): JsonLd {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://riyadheventplanner.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}/#organization`,
    name: 'Riyadh Event Planner',
    alternateName: locale === 'ar' ? 'مخطط الفعاليات الرياض' : 'Riyadh Event Planner',
    description: locale === 'ar'
      ? 'شركة تنظيم حفلات ومعارض ومؤتمرات في الرياض. خدمات تنسيق شاملة، تأجير خيام أوروبية، كراسي، طاولات ومعدات.'
      : 'Professional event planning, exhibitions, and equipment rental services in Riyadh. Comprehensive coordination, European tent rental, chairs, tables and equipment.',
    url: baseUrl,
    telephone: '+966-XX-XXX-XXXX', // Replace with actual phone
    email: 'info@riyadheventplanner.com', // Replace with actual email
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'SA',
      addressRegion: 'Riyadh',
      addressLocality: 'Riyadh'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '24.7136', // Riyadh coordinates
      longitude: '46.6753'
    },
    priceRange: '$$',
    areaServed: [
      {
        '@type': 'City',
        name: 'Riyadh'
      },
      {
        '@type': 'Country',
        name: 'Saudi Arabia'
      }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Event Planning Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: locale === 'ar' ? 'تنظيم الحفلات' : 'Event Planning',
            description: locale === 'ar'
              ? 'تنظيم حفلات الزفاف، أعياد الميلاد، والمناسبات الخاصة'
              : 'Wedding, birthday, and special event planning services'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: locale === 'ar' ? 'المعارض والمؤتمرات' : 'Exhibitions & Conferences',
            description: locale === 'ar'
              ? 'تنظيم المعارض التجارية والمؤتمرات المهنية'
              : 'Trade exhibitions and professional conference organization'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: locale === 'ar' ? 'تأجير المعدات' : 'Equipment Rental',
            description: locale === 'ar'
              ? 'تأجير الخيام، الكراسي، الطاولات، والمعدات الصوتية'
              : 'Tent, chair, table, and audio equipment rental'
          }
        }
      ]
    }
  };
}

export function generateServiceSchema(
  serviceName: string,
  serviceDescription: string,
  serviceUrl: string,
  locale: string = 'en'
): JsonLd {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://riyadheventplanner.com';

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${baseUrl}${serviceUrl}`,
    name: serviceName,
    description: serviceDescription,
    provider: {
      '@id': `${baseUrl}/#organization`
    },
    areaServed: {
      '@type': 'City',
      name: 'Riyadh'
    },
    url: `${baseUrl}${serviceUrl}`
  };
}

export function generateArticleSchema(
  title: string,
  description: string,
  url: string,
  imageUrl: string,
  datePublished: string,
  dateModified: string,
  locale: string = 'en'
): JsonLd {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://riyadheventplanner.com';

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: `${baseUrl}${imageUrl}`,
    datePublished: datePublished,
    dateModified: dateModified,
    author: {
      '@type': 'Organization',
      name: 'Riyadh Event Planner',
      url: baseUrl
    },
    publisher: {
      '@type': 'Organization',
      name: 'Riyadh Event Planner',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}${url}`
    }
  };
}

export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>,
  locale: string = 'en'
): JsonLd {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://riyadheventplanner.com';

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`
    }))
  };
}

export function generateReviewSchema(
  reviewerName: string,
  reviewText: string,
  rating: number,
  datePublished: string
): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: reviewerName
    },
    reviewBody: reviewText,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: rating,
      bestRating: 5,
      worstRating: 1
    },
    datePublished: datePublished
  };
}

export function generateAggregateRatingSchema(
  ratingValue: number,
  reviewCount: number
): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    ratingValue: ratingValue,
    reviewCount: reviewCount,
    bestRating: 5,
    worstRating: 1
  };
}

export function renderJsonLd(data: JsonLd): string {
  return JSON.stringify(data);
}

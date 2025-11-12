import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { blogPosts } from '@/data/blog-posts';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://riyadheventplanner.com';

// All public pages in the site
const pages = [
  '',
  'services/event-planning',
  'services/exhibitions-conferences',
  'services/equipment-rental',
  'services/tent-rental',
  'services/furniture-rental',
  'services/audio-lighting-rental',
  'quote-request',
  'contact',
  'portfolio',
  'about',
  'faq',
  'blog',
];

// Blog articles slugs (will be populated from data later)
const blogArticles = [
  'دليل-شامل-لتنظيم-حفل-زفاف-ناجح-في-الرياض',
  'أفضل-أنواع-الخيام-الأوروبية-لحفلات-الزفاف',
  'كيف-تختار-الديكور-المناسب-لحفل-التخرج',
  '10-أفكار-إبداعية-لحفلات-أعياد-الميلاد-للأطفال',
  'أهمية-التخطيط-المسبق-لتنظيم-المعارض-التجارية',

];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  // Generate routes for each locale
  routing.locales.forEach((locale) => {
    // Add all main pages
    pages.forEach((page) => {
      routes.push({
        url: `${baseUrl}/${locale}/${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'daily' : 'weekly',
        priority: page === '' ? 1 : 0.8,
      });
    });

    // Add blog articles
    // blogArticles.forEach((slug) => {
    //   routes.push({
    //     url: `${baseUrl}/${locale}/blog/${slug}`,
    //     lastModified: new Date(),
    //     changeFrequency: 'monthly',
    //     priority: 0.6,
    //   });
    // });
    blogPosts.forEach((post) => {
      routes.push({
        url: `${baseUrl}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    });
  
  });

  return routes;
}


'use client';

import { useTranslations, useLocale } from 'next-intl';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { BlogCard } from '@/components/shared/BlogCard';
import { ShareButtons } from '@/components/shared/ShareButtons';
import { motion } from 'framer-motion';
import { staggerContainer } from '@/lib/motion-variants';
import { blogPosts } from '@/data/blog-posts';
import { formatDate } from '@/lib/format';

export default function BlogPage() {
  const t = useTranslations('Blog');
  const locale = useLocale();

  const getLocalizedContent = (item: { en: string; ar: string }) => {
    return locale === 'ar' ? item.ar : item.en;
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <SectionHeading
        title={t('title')}
        subtitle={t('subtitle')}
        align="center"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
      >
        {blogPosts.map((post) => (
          <BlogCard
            key={post.slug}
            title={getLocalizedContent(post.title)}
            excerpt={getLocalizedContent(post.excerpt)}
            slug={post.slug}
            image={post.image}
            date={formatDate(post.date, locale)}
            readTime={post.readTime}
          />
        ))}
      </motion.div>

      <div className="mt-12 flex justify-center">
        <ShareButtons />
      </div>
    </div>
  );
}


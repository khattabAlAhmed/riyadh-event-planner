import { getTranslations, getLocale } from 'next-intl/server';
import { ShareButtons } from '@/components/shared/ShareButtons';
import { BlogCard } from '@/components/shared/BlogCard';
import { blogPosts } from '@/data/blog-posts';
import { formatDate } from '@/lib/format';
import { notFound } from 'next/navigation';
import Image from 'next/image';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const locale = await getLocale();
  const t = await getTranslations('Blog');

  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  const getLocalizedContent = (item: { en: string; ar: string }) => {
    return locale === 'ar' ? item.ar : item.en;
  };

  const relatedPosts = blogPosts
    .filter(p => p.slug !== slug && p.category === post.category)
    .slice(0, 3);

  return (
    <article className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {getLocalizedContent(post.title)}
        </h1>
        <div className="flex items-center gap-4 text-muted-foreground mb-6">
          <span>{formatDate(post.date, locale)}</span>
          <span>•</span>
          <span>{post.readTime} {t('readTime')}</span>
        </div>
        <div className="relative h-96 w-full rounded-lg overflow-hidden mb-8">
          <Image
            src={post.image}
            alt={getLocalizedContent(post.title)}
            fill
            className="object-cover"
          />
        </div>
      </header>

      {/* Content */}
      <div
        className="prose prose-lg dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: getLocalizedContent(post.content) }}
      />

      {/* Share */}
      <div className="mt-12 pt-8 border-t">
        <p className="text-sm font-medium mb-4">{t('shareArticle')}</p>
        <ShareButtons />
      </div>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-8">{t('relatedArticles')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <BlogCard
                key={relatedPost.slug}
                title={getLocalizedContent(relatedPost.title)}
                excerpt={getLocalizedContent(relatedPost.excerpt)}
                slug={relatedPost.slug}
                image={relatedPost.image}
                date={formatDate(relatedPost.date, locale)}
                readTime={relatedPost.readTime}
              />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}


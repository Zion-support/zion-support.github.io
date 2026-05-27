// ArticleStructuredData – injects JSON-LD schema.org Article / WebPage data
'use client';

import { useMemo } from 'react';

export interface ArticleStructuredDataProps {
  type?: 'Article' | 'BlogPosting' | 'Service' | 'WebPage';
  title: string;
  description: string;
  url: string;
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
  authorName?: string;
  authorUrl?: string;
  publisherName?: string;
  publisherLogo?: string;
  category?: string;
  tags?: string[];
  keywords?: string[];
  siteName?: string;
}

export default function ArticleStructuredData({
  type = 'WebPage',
  title,
  description,
  url,
  image,
  publishedTime,
  modifiedTime,
  authorName = 'Zion Tech Group',
  authorUrl = 'https://ziontechgroup.com',
  publisherName = 'Zion Tech Group',
  publisherLogo = '/favicon.ico',
  category,
  tags = [],
  keywords = [],
  siteName = 'Zion Tech Group',
}: ArticleStructuredDataProps) {
  const json = useMemo(() => {
    const base: Record<string, any> = {
      '@context': 'https://schema.org',
      '@type': type,
      name: title,
      description,
      url,
    };
    if (image) base.image = image;
    if (publishedTime) base.datePublished = publishedTime;
    if (modifiedTime) base.dateModified = modifiedTime;
    if (category) base.articleSection = category;

    // Publisher
    base.publisher = {
      '@type': 'Organization',
      name: publisherName,
      logo: { '@type': 'ImageObject', url: publisherLogo },
      url: 'https://ziontechgroup.com',
    };

    // Author
    base.author = {
      '@type': 'Person',
      name: authorName,
      url: authorUrl,
    };

    // Keywords
    if (keywords.length) base.keywords = keywords.join(', ');
    if (tags.length) base['about'] = tags.map(t => ({ '@type': 'Thing', name: t }));

    return base;
  }, [type, title, description, url, image, publishedTime, modifiedTime,
      authorName, authorUrl, publisherName, publisherLogo, category, tags, keywords]);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

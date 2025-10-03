/**
 * SEO Utilities
 * Helper functions for search engine optimization
 */

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

export const generateMetaTags = (data: SEOData) => {
  const {
    title,
    description,
    keywords = [],
    canonical,
    ogImage = '/images/og-default.jpg',
    ogType = 'website',
    twitterCard = 'summary_large_image'
  } = data;

  return {
    title,
    description,
    keywords: keywords.join(', '),
    canonical,
    'og:title': title,
    'og:description': description,
    'og:image': ogImage,
    'og:type': ogType,
    'og:url': canonical,
    'twitter:card': twitterCard,
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': ogImage,
  };
};

export const generateStructuredData = (data: {
  type: 'Organization' | 'WebSite' | 'Article' | 'Product';
  name: string;
  description?: string;
  url?: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: {
    name: string;
    url?: string;
  };
}) => {
  const baseData: any = {
    '@context': 'https://schema.org',
    '@type': data.type,
    name: data.name,
  };

  if (data.description) baseData.description = data.description;
  if (data.url) baseData.url = data.url;
  if (data.image) baseData.image = data.image;

  if (data.type === 'Article') {
    if (data.datePublished) baseData.datePublished = data.datePublished;
    if (data.dateModified) baseData.dateModified = data.dateModified;
    if (data.author) baseData.author = data.author;
  }

  return baseData;
};

export const generateSitemapEntry = (url: string, lastmod?: string, changefreq?: string, priority?: string) => {
  return {
    url,
    lastmod: lastmod || new Date().toISOString().split('T')[0],
    changefreq: changefreq || 'weekly',
    priority: priority || '0.5',
  };
};
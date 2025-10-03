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
  const baseData = {
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

export const generateRobotsTxt = (sitemapUrl: string, disallowPaths: string[] = []) => {
  const rules = [
    'User-agent: *',
    ...disallowPaths.map(path => `Disallow: ${path}`),
    `Sitemap: ${sitemapUrl}`,
  ];
  
  return rules.join('\n');
};

export const validateSEOData = (data: SEOData): string[] => {
  const errors: string[] = [];

  if (!data.title || data.title.length < 30) {
    errors.push('Title should be at least 30 characters long');
  }

  if (data.title && data.title.length > 60) {
    errors.push('Title should be no more than 60 characters long');
  }

  if (!data.description || data.description.length < 120) {
    errors.push('Description should be at least 120 characters long');
  }

  if (data.description && data.description.length > 160) {
    errors.push('Description should be no more than 160 characters long');
  }

  if (!data.keywords || data.keywords.length === 0) {
    errors.push('Keywords should be provided');
  }

  return errors;
};

export const optimizeTitle = (title: string, maxLength: number = 60): string => {
  if (title.length <= maxLength) return title;
  
  const words = title.split(' ');
  let optimized = '';
  
  for (const word of words) {
    if ((optimized + word).length + 1 <= maxLength) {
      optimized += (optimized ? ' ' : '') + word;
    } else {
      break;
    }
  }
  
  return optimized;
};

export const optimizeDescription = (description: string, maxLength: number = 160): string => {
  if (description.length <= maxLength) return description;
  
  return description.substring(0, maxLength - 3) + '...';
};
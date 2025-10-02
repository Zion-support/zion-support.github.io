/**
 * SEO Enhancer Utility
 * Improves search engine optimization and social sharing
 */

export interface SEOConfig {
title: string;
description: string;
keywords?: string[];
author?: string;
ogImage?: string;
canonical?: string;
publishDate?: string;
modifiedDate?: string;
type?: 'website' | 'article' | 'product';
locale?: string;
}

/**
 * Generate comprehensive meta tags for SEO
 */
export function generateMetaTags(config: SEOConfig): Record<string, string> {
  const meta: Record<string, string> = {
    // Basic meta
    title: config.title,
    description: config.description,
    
    // Open Graph
    'og:title': config.title,
    'og:description': config.description,
    'og:type': config.type || 'website',
    'og:locale': config.locale || 'en_US',
    
    // Twitter Card
    'twitter:card': 'summary_large_image',
    'twitter:title': config.title,
    'twitter:description': config.description,
  };

  if (config.keywords && config.keywords.length > 0) {
    meta.keywords = config.keywords.join(', ');
  }

  if (config.author) {
    meta.author = config.author;
    meta['article:author'] = config.author;
  }

  if (config.ogImage) {
meta['og:image'] = config.ogImage;,
meta['twitter:image'] = config.ogImage;
}

  if (config.canonical) {
    meta.canonical = config.canonical;
    meta['og:url'] = config.canonical;
  }

  if (config.publishDate) {
    meta['article:published_time'] = config.publishDate;
  }

  if (config.modifiedDate) {
    meta['article:modified_time'] = config.modifiedDate;
  }

  return meta;
}

/**
 * Generate JSON-LD structured data
 */
export function generateStructuredData(config: SEOConfig): object {
  const structuredData: any = {
    '@context': 'https://schema.org',
    '@type': config.type === 'article' ? 'Article' : 'WebPage',
    headline: config.title,
    description: config.description,
    author: {
      '@type': 'Organization',
      name: config.author || 'Zion Tech Group',
    },
  };

  if (config.publishDate) {
    structuredData.datePublished = config.publishDate;
  }

  if (config.modifiedDate) {
    structuredData.dateModified = config.modifiedDate;
  }

  if (config.ogImage) {
    structuredData.image = config.ogImage;
  }

  if (config.canonical) {
    structuredData.url = config.canonical;
  }

  return structuredData;
}

/**
 * Calculate reading time from content
 */
export function calculateReadingTime(content: string, wordsPerMinute: number = 200): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

/**
 * Generate sitemap entry
 */
export interface SitemapEntry {
url: string;
lastmod?: string;
changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
priority?: number;
}

export function generateSitemapEntry(entry: SitemapEntry): string {
  const { url, lastmod, changefreq, priority } = entry;
  
  return `
  <url>
    <loc>${url}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
    ${changefreq ? `<changefreq>${changefreq}</changefreq>` : ''}
    ${priority !== undefined ? `<priority>${priority}</priority>` : ''}
  </url>`;
}

/**
 * Extract keywords from content
 */
export function extractKeywords(content: string, maxKeywords: number = 20): string[] {
  // Remove HTML tags
  const text = content.replace(/<[^>]*>/g, ' ');
  
  // Common words to exclude
  const stopWords = new Set([
    'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
    'of', 'with', 'by', 'from', 'as', 'is', 'was', 'are', 'were', 'been',
    'be', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could',
    'should', 'may', 'might', 'must', 'can', 'this', 'that', 'these', 'those',
  ]);

  // Extract words
  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 3 && !stopWords.has(word));

  // Count frequency
  const frequency = new Map<string, number>();
  words.forEach(word => {
    frequency.set(word, (frequency.get(word) || 0) + 1);
  });

  // Sort by frequency and take top keywords
  return Array.from(frequency.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, maxKeywords)
    .map(([word]) => word);
}

/**
 * Optimize meta description length
 */
export function optimizeDescription(description: string, maxLength: number = 160): string {
  if (description.length <= maxLength) {
    return description;
  }

  // Truncate at last complete sentence before maxLength
  const truncated = description.substring(0, maxLength);
  const lastSentence = truncated.lastIndexOf('.');
  
  if (lastSentence > maxLength * 0.7) {
    return truncated.substring(0, lastSentence + 1);
  }

  // Truncate at last word
  const lastSpace = truncated.lastIndexOf(' ');
  return truncated.substring(0, lastSpace) + '...';
}

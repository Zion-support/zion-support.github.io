/**
 * SEO Optimization Utilities
 * Comprehensive SEO enhancement for all pages
 */

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
  articleType?: 'article' | 'blog' | 'news' | 'case-study';
}

/**
 * Generate JSON-LD structured data for articles
 */
export function generateArticleSchema(metadata: SEOMetadata): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: metadata.title,
    description: metadata.description,
    image: metadata.ogImage || 'https://ziontechgroup.com/og-image.jpg',
    datePublished: metadata.publishedDate || new Date().toISOString(),
    dateModified: metadata.modifiedDate || new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: metadata.author || 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Zion Tech Group',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ziontechgroup.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': metadata.canonical || 'https://ziontechgroup.com',
    },
  };

  return JSON.stringify(schema);
}

/**
 * Generate breadcrumb schema
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return JSON.stringify(schema);
}

/**
 * Generate organization schema
 */
export function generateOrganizationSchema(): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    description:
      'Enterprise AI, IT Services, and Digital Transformation Solutions',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-ZION-TECH',
      contactType: 'customer service',
      availableLanguage: ['English'],
    },
    sameAs: [
      'https://twitter.com/ziontechgroup',
      'https://linkedin.com/company/ziontechgroup',
      'https://github.com/Zion-Holdings',
    ],
  };

  return JSON.stringify(schema);
}

/**
 * Optimize meta description
 */
export function optimizeDescription(
  text: string,
  maxLength: number = 155
): string {
  if (text.length <= maxLength) return text;

  // Truncate at word boundary
  const truncated = text.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');

  return lastSpace > 0 ? truncated.slice(0, lastSpace) + '...' : truncated + '...';
}

/**
 * Generate canonical URL
 */
export function generateCanonicalURL(path: string): string {
  const baseURL = 'https://ziontechgroup.com';
  const cleanPath = path.replace(/\/$/, ''); // Remove trailing slash
  return `${baseURL}${cleanPath}`;
}

/**
 * Extract keywords from content
 */
export function extractKeywords(content: string, count: number = 10): string[] {
  // Remove common words
  const stopWords = new Set([
    'the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'i',
    'it', 'for', 'not', 'on', 'with', 'he', 'as', 'you', 'do', 'at',
  ]);

  // Extract words
  const words = content
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 3 && !stopWords.has(word));

  // Count frequency
  const frequency = new Map<string, number>();
  words.forEach(word => {
    frequency.set(word, (frequency.get(word) || 0) + 1);
  });

  // Sort by frequency and return top keywords
  return Array.from(frequency.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, count)
    .map(([word]) => word);
}

/**
 * Generate Open Graph meta tags
 */
export function generateOGTags(metadata: SEOMetadata): Record<string, string> {
  return {
    'og:title': metadata.title,
    'og:description': optimizeDescription(metadata.description),
    'og:image': metadata.ogImage || 'https://ziontechgroup.com/og-image.jpg',
    'og:url': metadata.canonical || 'https://ziontechgroup.com',
    'og:type': metadata.articleType === 'article' ? 'article' : 'website',
    'og:site_name': 'Zion Tech Group',
    'twitter:card': 'summary_large_image',
    'twitter:title': metadata.title,
    'twitter:description': optimizeDescription(metadata.description),
    'twitter:image': metadata.ogImage || 'https://ziontechgroup.com/og-image.jpg',
  };
}

/**
 * Calculate reading time from content
 */
export function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
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
  return `
    <url>
      <loc>${entry.url}</loc>
      ${entry.lastmod ? `<lastmod>${entry.lastmod}</lastmod>` : ''}
      ${entry.changefreq ? `<changefreq>${entry.changefreq}</changefreq>` : ''}
      ${entry.priority ? `<priority>${entry.priority}</priority>` : ''}
    </url>
  `.trim();
}

export default {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateOrganizationSchema,
  optimizeDescription,
  generateCanonicalURL,
  extractKeywords,
  generateOGTags,
  calculateReadingTime,
  generateSitemapEntry,
};
/**
 * SEO Enhancement Utility for Zion Tech Group Website
 * Provides advanced SEO optimization features
 */

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  author?: string;
  publishDate?: string;
  modifiedDate?: string;
  articleSection?: string;
}

/**
 * Generate structured data for blog posts
 */
export function generateArticleStructuredData(config: SEOConfig) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: config.title,
    description: config.description,
    author: {
      '@type': 'Person',
      name: config.author || 'Zion Tech Group',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Zion Tech Group',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ziontechgroup.com/logo.png',
      },
    },
    datePublished: config.publishDate,
    dateModified: config.modifiedDate || config.publishDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': config.canonicalUrl,
    },
    image: config.ogImage || 'https://ziontechgroup.com/og-image.png',
    articleSection: config.articleSection || 'Technology',
    keywords: config.keywords?.join(', '),
  };
}

/**
 * Generate breadcrumb structured data
 */
export function generateBreadcrumbStructuredData(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Optimize meta description for search engines
 */
export function optimizeMetaDescription(description: string): string {
  const maxLength = 155;
  const minLength = 120;

  // Ensure description is within optimal length
  if (description.length > maxLength) {
    return description.substring(0, maxLength - 3) + '...';
  }

  if (description.length < minLength) {
    console.warn(
      `Meta description is shorter than recommended minimum of ${minLength} characters`
    );
  }

  return description;
}

/**
 * Generate optimal page title with branding
 */
export function generateOptimalTitle(
  pageTitle: string,
  includeBranding = true
): string {
  const brandName = 'Zion Tech Group';
  const maxLength = 60;

  let title = pageTitle;
  if (includeBranding) {
    title = `${pageTitle} | ${brandName}`;
  }

  if (title.length > maxLength) {
    console.warn(`Page title exceeds recommended ${maxLength} characters`);
    // Truncate if needed, preserving the brand
    if (includeBranding) {
      const truncatedPageTitle = pageTitle.substring(
        0,
        maxLength - brandName.length - 3
      );
      title = `${truncatedPageTitle}... | ${brandName}`;
    } else {
      title = pageTitle.substring(0, maxLength - 3) + '...';
    }
  }

  return title;
}

/**
 * Extract keywords from content using TF-IDF-like approach
 */
export function extractKeywords(content: string, limit = 10): string[] {
  // Remove common stop words
  const stopWords = new Set([
    'the',
    'a',
    'an',
    'and',
    'or',
    'but',
    'in',
    'on',
    'at',
    'to',
    'for',
    'of',
    'with',
    'by',
    'from',
    'as',
    'is',
    'was',
    'are',
    'were',
    'been',
    'be',
    'have',
    'has',
    'had',
    'do',
    'does',
    'did',
    'will',
    'would',
    'could',
    'should',
    'may',
    'might',
    'can',
    'this',
    'that',
    'these',
    'those',
  ]);

  // Tokenize and count words
  const words = content.toLowerCase().match(/\b\w+\b/g) || [];
  const wordCounts = new Map<string, number>();

  for (const word of words) {
    if (word.length > 3 && !stopWords.has(word)) {
      wordCounts.set(word, (wordCounts.get(word) || 0) + 1);
    }
  }

  // Sort by frequency and return top keywords
  return Array.from(wordCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([word]) => word);
}

/**
 * Generate canonical URL
 */
export function generateCanonicalUrl(path: string): string {
  const baseUrl = 'https://ziontechgroup.com';
  // Remove trailing slash and ensure leading slash
  const cleanPath = path.replace(/\/$/, '');
  return `${baseUrl}${cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`}`;
}

/**
 * Generate social media preview text
 */
export function generateSocialPreview(
  content: string,
  maxLength = 200
): string {
  // Remove HTML tags and extra whitespace
  const cleanContent = content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();

  if (cleanContent.length <= maxLength) {
    return cleanContent;
  }

  // Find the last complete sentence within maxLength
  const truncated = cleanContent.substring(0, maxLength);
  const lastPeriod = truncated.lastIndexOf('.');
  const lastQuestion = truncated.lastIndexOf('?');
  const lastExclamation = truncated.lastIndexOf('!');

  const lastSentenceEnd = Math.max(lastPeriod, lastQuestion, lastExclamation);

  if (lastSentenceEnd > maxLength * 0.7) {
    return cleanContent.substring(0, lastSentenceEnd + 1);
  }

  // If no good sentence break, truncate at word boundary
  const lastSpace = truncated.lastIndexOf(' ');
  return cleanContent.substring(0, lastSpace) + '...';
}

/**
 * Validate SEO configuration
 */
export function validateSEOConfig(config: SEOConfig): {
  valid: boolean;
  warnings: string[];
} {
  const warnings: string[] = [];

  // Check title length
  if (config.title.length < 30) {
    warnings.push('Title is shorter than 30 characters - consider adding more detail');
  }
  if (config.title.length > 60) {
    warnings.push('Title exceeds 60 characters - may be truncated in search results');
  }

  // Check description length
  if (config.description.length < 120) {
    warnings.push(
      'Description is shorter than 120 characters - consider adding more detail'
    );
  }
  if (config.description.length > 155) {
    warnings.push(
      'Description exceeds 155 characters - may be truncated in search results'
    );
  }

  // Check keywords
  if (!config.keywords || config.keywords.length === 0) {
    warnings.push('No keywords provided - consider adding relevant keywords');
  } else if (config.keywords.length > 15) {
    warnings.push('More than 15 keywords may appear spammy - consider reducing');
  }

  // Check canonical URL
  if (!config.canonicalUrl) {
    warnings.push('No canonical URL provided - important for duplicate content prevention');
  }

  return {
    valid: warnings.length === 0,
    warnings,
  };
}

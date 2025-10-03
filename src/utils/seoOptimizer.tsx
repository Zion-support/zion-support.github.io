/**
 * SEO Optimizer Utility
 * Comprehensive SEO tools and meta tag management
 */

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: Record<string, unknown>;
}

export const generateMetaTags = (metadata: SEOMetadata): string => {
  const tags: string[] = [];
  
  // Basic meta tags
  tags.push(`<title>${escapeHtml(metadata.title)}</title>`);
  tags.push(`<meta name="description" content="${escapeHtml(metadata.description)}" />`);
  
  if (metadata.keywords && metadata.keywords.length > 0) {
    tags.push(`<meta name="keywords" content="${metadata.keywords.join(', ')}" />`);
  }
  
  if (metadata.author) {
    tags.push(`<meta name="author" content="${escapeHtml(metadata.author)}" />`);
  }
  
  if (metadata.canonicalUrl) {
    tags.push(`<link rel="canonical" href="${escapeHtml(metadata.canonicalUrl)}" />`);
  }

  // Open Graph tags
  tags.push(`<meta property="og:title" content="${escapeHtml(metadata.ogTitle || metadata.title)}" />`);
  tags.push(`<meta property="og:description" content="${escapeHtml(metadata.ogDescription || metadata.description)}" />`);
  tags.push(`<meta property="og:type" content="${metadata.ogType || 'website'}" />`);
  
  if (metadata.ogImage) {
    tags.push(`<meta property="og:image" content="${escapeHtml(metadata.ogImage)}" />`);
  }
  
  if (metadata.canonicalUrl) {
    tags.push(`<meta property="og:url" content="${escapeHtml(metadata.canonicalUrl)}" />`);
  }
  
  // Twitter Card tags
  tags.push(`<meta name="twitter:card" content="${metadata.twitterCard || 'summary_large_image'}" />`);
  tags.push(`<meta name="twitter:title" content="${escapeHtml(metadata.twitterTitle || metadata.title)}" />`);
  tags.push(`<meta name="twitter:description" content="${escapeHtml(metadata.twitterDescription || metadata.description)}" />`);
  
  if (metadata.twitterImage || metadata.ogImage) {
    tags.push(`<meta name="twitter:image" content="${escapeHtml(metadata.twitterImage || metadata.ogImage || '')}" />`);
  }
  
  return tags.join('\n');
};

/**
 * Generate structured data (JSON-LD)
 */
export const generateStructuredData = (type: string, data: Record<string, unknown>): string => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  } as Record<string, unknown>;
  
  return `<script type="application/ld+json">${JSON.stringify(structuredData, null, 2)}</script>`;
};

export const generateArticleStructuredData = (article: {
  title: string;
  description: string;
  author: string;
  publishDate: string;
  modifiedDate?: string;
  image?: string;
  url: string;
}): string => {
  return generateStructuredData('Article', {
    headline: article.title,
    description: article.description,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    datePublished: article.publishDate,
    dateModified: article.modifiedDate || article.publishDate,
    image: article.image,
    url: article.url,
    publisher: {
      '@type': 'Organization',
      name: 'Zion Tech Group',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ziontechgroup.com/logo.png',
      }
    }
  });
};

export const generateBreadcrumbStructuredData = (breadcrumbs: Array<{ name: string; url: string }>): string => {
  return generateStructuredData('BreadcrumbList', {
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    }))
  });
};

export const generateOrganizationStructuredData = (): string => {
  return generateStructuredData('Organization', {
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    description: 'Leading AI & IT Solutions provider transforming businesses worldwide',
    sameAs: [
      'https://twitter.com/ziontechgroup',
      'https://linkedin.com/company/ziontechgroup',
      'https://github.com/zion-holdings',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-800-ZION-TECH',
      contactType: 'Customer Service',
      email: 'contact@ziontechgroup.com',
    }
  });
};

export const generateFAQStructuredData = (faqs: Array<{ question: string; answer: string }>): string => {
  return generateStructuredData('FAQPage', {
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      }
    }))
  });
};

export const generateSitemapXML = (urls: Array<{ loc: string; lastmod?: string; changefreq?: string; priority?: number }>): string => {
  const urlsXml = urls
    .map((url) => {
      const lastmod = url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : '';
      const changefreq = url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : '';
      const priority = url.priority !== undefined ? `<priority>${url.priority}</priority>` : '';
      return `<url>\n  <loc>${escapeHtml(url.loc)}</loc>\n  ${lastmod}\n  ${changefreq}\n  ${priority}\n</url>`;
    })
    .join('\n');
    
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlsXml}\n</urlset>`;
};

export const generateRobotsTxt = (config: {
  userAgent?: string;
  disallow?: string[];
  allow?: string[];
  sitemap?: string;
}): string => {
  const lines: string[] = [];
  lines.push(`User-agent: ${config.userAgent || '*'}`);
  
  if (config.disallow && config.disallow.length > 0) {
    config.disallow.forEach((path) => lines.push(`Disallow: ${path}`));
  }
  
  if (config.allow && config.allow.length > 0) {
    config.allow.forEach((path) => lines.push(`Allow: ${path}`));
  }
  
  if (config.sitemap) {
    lines.push('');
    lines.push(`Sitemap: ${config.sitemap}`);
  }
  
  return lines.join('\n');
};

/**
 * Optimize title for SEO
 */
export const optimizeTitle = (title: string, maxLength: number = 60): string => {
  if (title.length <= maxLength) return title;
  const truncated = title.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  return lastSpace > 0 ? truncated.substring(0, lastSpace) + '...' : truncated + '...';
};

/**
 * Optimize description for SEO
 */
export const optimizeDescription = (description: string, maxLength: number = 160): string => {
  if (description.length <= maxLength) return description;
  const truncated = description.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  return lastSpace > 0 ? truncated.substring(0, lastSpace) + '...' : truncated + '...';
};

/**
 * Extract keywords from content
 */
export const extractKeywords = (content: string, maxKeywords: number = 10): string[] => {
  // Remove special characters and convert to lowercase
  const cleaned = content.toLowerCase().replace(/[^a-z0-9\s]/g, '');
  const words = cleaned.split(/\s+/);
  const frequency = new Map<string, number>();
  
  words.forEach((word) => {
    if (word.length > 3) {
      frequency.set(word, (frequency.get(word) || 0) + 1);
    }
  });
  
  return Array.from(frequency.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, maxKeywords)
    .map(([word]) => word);
};

/**
 * Generate URL slug from title
 */
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export const validateSEOUrl = (url: string): { valid: boolean; issues: string[] } => {
  const issues: string[] = [];
  
  if (url.length > 100) {
    issues.push('URL is too long (>100 characters)');
  }
  
  if (url.includes('_')) {
    issues.push('URL contains underscores (use hyphens instead)');
  }
  
  if (/[A-Z]/.test(url)) {
    issues.push('URL contains uppercase letters');
  }
  
  if (/\s/.test(url)) {
    issues.push('URL contains spaces');
  }
  
  if (url.split('/').filter(Boolean).length > 5) {
    issues.push('URL has too many path segments (>5)');
  }
  
  return {
    valid: issues.length === 0,
    issues
  };
};

/**
 * Escape HTML for safe meta tag generation
 */
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

/**
 * Calculate reading time
 */
export const calculateReadingTime = (content: string, wordsPerMinute: number = 200): number => {
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

/**
 * Check content quality for SEO
 */
export const checkContentQuality = (
  content: string,
  title: string,
): { score: number; issues: string[]; recommendations: string[] } => {
  const issues: string[] = [];
  const recommendations: string[] = [];
  let score = 100;
  
  // Word count check
  const wordCount = content.trim().split(/\s+/).length;
  if (wordCount < 300) {
    issues.push('Content is too short (<300 words)');
    score -= 20;
  }
  
  // Keyword density check (title in content)
  const titleWords = title.toLowerCase().split(/\s+/);
  const contentLower = content.toLowerCase();
  const titleInContent = titleWords.some((word) => contentLower.includes(word));
  if (!titleInContent) {
    issues.push('Title keywords not found in content');
    score -= 15;
  }
  
  // Heading check
  if (!content.includes('#') && !content.includes('<h')) {
    recommendations.push('Add headings to improve content structure');
    score -= 10;
  }
  
  // Link check
  if (!content.includes('http') && !content.includes('[') && !content.includes('<a')) {
    recommendations.push('Add internal/external links');
    score -= 5;
  }
  
  return { score: Math.max(0, score), issues, recommendations };
};

export default {
  generateMetaTags,
  generateStructuredData,
  generateArticleStructuredData,
  generateBreadcrumbStructuredData,
  generateOrganizationStructuredData,
  generateFAQStructuredData,
  generateSitemapXML,
  generateRobotsTxt,
  optimizeTitle,
  optimizeDescription,
  extractKeywords,
  generateSlug,
  validateSEOUrl,
  calculateReadingTime,
  checkContentQuality
};
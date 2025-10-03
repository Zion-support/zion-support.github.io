/**
 * SEO Optimization utilities for Zion Tech Group website
 */

<<<<<<< HEAD
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
  
=======
interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  canonical?: string;
  robots?: string;
}

/**
 * Generate comprehensive meta tags for SEO
 */
export const generateMetaTags = (metadata: SEOMetadata): string => {
  const tags: string[] = [];

  // Basic meta tags
  tags.push(`<title>${escapeHtml(metadata.title)}</title>`);
  tags.push(`<meta name="description" content="${escapeHtml(metadata.description)}">`);
  
  if (metadata.keywords && metadata.keywords.length > 0) {
    tags.push(`<meta name="keywords" content="${metadata.keywords.join(', ')}">`);
  }

  // Open Graph tags
  tags.push(`<meta property="og:title" content="${escapeHtml(metadata.title)}">`);
  tags.push(`<meta property="og:description" content="${escapeHtml(metadata.description)}">`);
  tags.push(`<meta property="og:type" content="${metadata.type || 'website'}">`);
  
  if (metadata.url) {
    tags.push(`<meta property="og:url" content="${metadata.url}">`);
  }
  
  if (metadata.image) {
    tags.push(`<meta property="og:image" content="${metadata.image}">`);
  }

  // Twitter Card tags
  tags.push(`<meta name="twitter:card" content="summary_large_image">`);
  tags.push(`<meta name="twitter:title" content="${escapeHtml(metadata.title)}">`);
  tags.push(`<meta name="twitter:description" content="${escapeHtml(metadata.description)}">`);
  
  if (metadata.image) {
    tags.push(`<meta name="twitter:image" content="${metadata.image}">`);
  }

  // Additional meta tags
  if (metadata.author) {
    tags.push(`<meta name="author" content="${escapeHtml(metadata.author)}">`);
  }
  
  if (metadata.robots) {
    tags.push(`<meta name="robots" content="${metadata.robots}">`);
  }

  if (metadata.canonical) {
    tags.push(`<link rel="canonical" href="${metadata.canonical}">`);
  }

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-57f8
  return tags.join('\n');
};

/**
 * Generate structured data (JSON-LD)
 */
<<<<<<< HEAD
export const generateStructuredData = (type: string, data: Record<string, unknown>): string => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  } as Record<string, unknown>;
  
  return `<script type="application/ld+json">${JSON.stringify(structuredData, null, 2)}</script>`;
};

=======
export const generateStructuredData = (type: string, data: Record<string, any>): string => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return `<script type="application/ld+json">${JSON.stringify(structuredData, null, 2)}</script>`;
};

/**
 * Generate article structured data
 */
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-57f8
export const generateArticleStructuredData = (article: {
  title: string;
  description: string;
  author: string;
<<<<<<< HEAD
  publishDate: string;
  modifiedDate?: string;
  image?: string;
  url: string;
}): string => {
  return generateStructuredData('Article', {
=======
  image?: string;
  url: string;
  publishDate: string;
  modifiedDate?: string;
  description: string;
  publishDate: string;
}): string => {
  const structuredData = {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-57f8
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
      },
    },
  };

  return generateStructuredData('Article', structuredData);
};

<<<<<<< HEAD
export const generateBreadcrumbStructuredData = (breadcrumbs: Array<{ name: string; url: string }>): string => {
  return generateStructuredData('BreadcrumbList', {
=======
/**
 * Generate breadcrumb structured data
 */
export const generateBreadcrumbStructuredData = (breadcrumbs: Array<{ name: string; url: string }>): string => {
  const structuredData = {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-57f8
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };

  return generateStructuredData('BreadcrumbList', structuredData);
};

<<<<<<< HEAD
export const generateOrganizationStructuredData = (): string => {
  return generateStructuredData('Organization', {
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    description: 'Advanced AI and IT Solutions Provider',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-0123',
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: 'English'
    },
    sameAs: [
      'https://twitter.com/ziontechgroup',
      'https://linkedin.com/company/ziontechgroup',
      'https://github.com/ziontechgroup'
    ]
  });
};

export const generateWebsiteStructuredData = (): string => {
  return generateStructuredData('WebSite', {
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    description: 'Advanced AI and IT Solutions Provider',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://ziontechgroup.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  });
};

export const generateServiceStructuredData = (service: {
  name: string;
  description: string;
  provider: string;
  areaServed?: string;
  serviceType?: string;
}): string => {
  return generateStructuredData('Service', {
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: service.provider
    },
    areaServed: service.areaServed || 'US',
    serviceType: service.serviceType || 'Professional Service'
  });
};

export const generateFAQStructuredData = (faqs: Array<{ question: string; answer: string }>): string => {
  return generateStructuredData('FAQPage', {
    mainEntity: faqs.map(faq => ({
=======
/**
 * Generate organization structured data
 */
export const generateOrganizationStructuredData = (): string => {
  const structuredData = {
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    description: 'Leading AI & IT Solutions provider transforming businesses worldwide',
    sameAs: [
      'https://twitter.com/ziontechgroup',
      'https://linkedin.com/company/ziontechgroup',
      'https://github.com/ziontechgroup',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-800-ZION-TECH',
      contactType: 'Customer Service',
      availableLanguage: ['English'],
    },
  };

  return generateStructuredData('Organization', structuredData);
};

/**
 * Generate FAQ structured data
 */
export const generateFAQStructuredData = (faqs: Array<{ question: string; answer: string }>): string => {
  const structuredData = {
    mainEntity: faqs.map((faq) => ({
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-57f8
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
<<<<<<< HEAD
        text: faq.answer
      }
    }))
  });
};

export const generateSitemap = (urls: Array<{
  url: string;
  lastModified?: string;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}>): string => {
  const sitemapUrls = urls.map(url => {
    const lastMod = url.lastModified ? `<lastmod>${url.lastModified}</lastmod>` : '';
    const changeFreq = url.changeFrequency ? `<changefreq>${url.changeFrequency}</changefreq>` : '';
    const priority = url.priority !== undefined ? `<priority>${url.priority}</priority>` : '';
    
    return `<url>
  <loc>${escapeHtml(url.url)}</loc>
  ${lastMod}
  ${changeFreq}
  ${priority}
</url>`;
  }).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls}
</urlset>`;
};

=======
        text: faq.answer,
      },
    })),
  };

  return generateStructuredData('FAQPage', structuredData);
};

/**
 * Generate sitemap XML
 */
export const generateSitemapXML = (urls: Array<{ loc: string; lastmod?: string; changefreq?: string; priority?: number }>): string => {
  const urlsXml = urls
    .map((url) => {
      const lastmod = url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : '';
      const changefreq = url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : '';
      const priority = url.priority !== undefined ? `<priority>${url.priority}</priority>` : '';
      return `<url>\n  <loc>${escapeHtml(url.loc)}</loc>\n  ${lastmod}\n  ${changefreq}\n  ${priority}\n</url>`;
    })
    .join('');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlsXml}\n</urlset>`;
};

/**
 * Generate robots.txt content
 */
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-57f8
export const generateRobotsTxt = (config: {
  userAgent?: string;
  disallow?: string[];
  allow?: string[];
  sitemap?: string;
}): string => {
  const lines: string[] = [];
  lines.push(`User-agent: ${config.userAgent || '*'}`);
<<<<<<< HEAD
  
  if (config.disallow && config.disallow.length > 0) {
    config.disallow.forEach(path => lines.push(`Disallow: ${path}`));
=======

  if (config.disallow && config.disallow.length > 0) {
    config.disallow.forEach((path) => lines.push(`Disallow: ${path}`));
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-57f8
  }
  
  if (config.allow && config.allow.length > 0) {
<<<<<<< HEAD
    config.allow.forEach(path => lines.push(`Allow: ${path}`));
=======
    config.allow.forEach((path) => lines.push(`Allow: ${path}`));
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-57f8
  }
  
  lines.push('');
  
  if (config.sitemap) {
<<<<<<< HEAD
    lines.push(`Sitemap: ${config.sitemap}`);
  }
  
  return lines.join('\n');
};

export const escapeHtml = (text: string): string => {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  
  return text.replace(/[&<>"']/g, (match) => map[match]);
};

export const generateCanonicalUrl = (baseUrl: string, path: string): string => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl.replace(/\/$/, '')}${cleanPath}`;
};

export const generateOpenGraphImage = (baseUrl: string, imagePath: string, width: number = 1200, height: number = 630): string => {
  const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  return `${baseUrl.replace(/\/$/, '')}${cleanPath}`;
};

export const validateSEOMetadata = (metadata: SEOMetadata): string[] => {
  const errors: string[] = [];
  
  if (!metadata.title || metadata.title.trim().length === 0) {
    errors.push('Title is required');
  } else if (metadata.title.length > 60) {
    errors.push('Title should be less than 60 characters');
  }
  
  if (!metadata.description || metadata.description.trim().length === 0) {
    errors.push('Description is required');
  } else if (metadata.description.length > 160) {
    errors.push('Description should be less than 160 characters');
  }
  
  if (metadata.keywords && metadata.keywords.length > 10) {
    errors.push('Keywords should be limited to 10 items');
  }
  
  return errors;
};

export const optimizeSEOMetadata = (metadata: SEOMetadata): SEOMetadata => {
  return {
    ...metadata,
    title: metadata.title?.trim().substring(0, 60) || '',
    description: metadata.description?.trim().substring(0, 160) || '',
    keywords: metadata.keywords?.slice(0, 10) || [],
    ogTitle: metadata.ogTitle?.trim().substring(0, 60) || metadata.title?.trim().substring(0, 60),
    ogDescription: metadata.ogDescription?.trim().substring(0, 160) || metadata.description?.trim().substring(0, 160),
    twitterTitle: metadata.twitterTitle?.trim().substring(0, 60) || metadata.title?.trim().substring(0, 60),
    twitterDescription: metadata.twitterDescription?.trim().substring(0, 160) || metadata.description?.trim().substring(0, 160)
=======
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
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

/**
 * Validate SEO content
 */
export const validateSEO = (title: string, description: string, content: string): {
  valid: boolean;
  issues: string[];
  recommendations: string[];
} => {
  const issues: string[] = [];
  const recommendations: string[] = [];

  // Title validation
  if (title.length < 30) {
    issues.push('Title is too short (minimum 30 characters)');
  } else if (title.length > 60) {
    issues.push('Title is too long (maximum 60 characters)');
  }

  // Description validation
  if (description.length < 120) {
    issues.push('Description is too short (minimum 120 characters)');
  } else if (description.length > 160) {
    issues.push('Description is too long (maximum 160 characters)');
  }

  // Content validation
  const wordCount = content.trim().split(/\s+/).length;
  if (wordCount < 300) {
    issues.push('Content is too short (minimum 300 words)');
  }

  return {
    valid: issues.length === 0,
    issues,
    recommendations,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-57f8
  };
};

/**
 * Escape HTML characters
 */
<<<<<<< HEAD
function escapeHtml(text: string): string {,,,
  const map: Record<string , string> = {,,
  if (url.split('/').filter(Boolean).length > 5) {';';
    issues.push('URL has too many path segments (>5)');';';
  }
  return { valid: issues.length: = = 0, issues };
};

function escapeHtml(text: string): string {,,,
  const map: Record<string , string> = {,,
    '&': '&amp;',';';
    '<': '&lt;',';';
    '>': '&gt;',';';
    '"': '&quot;',';';
    "'": '&#039;';';
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);';';
=======
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-57f8
}

/**
 * Calculate reading time
 */
<<<<<<< HEAD
export const calculateReadingTime: (content: string, wordsPerMinute: number: 200): number: > {,,,
  export const calculateReadingTime: (content: string, wordsPerMinute: number: 200): number: > {,,,
  const words: content.trim().split(/\s+/).length;,,,
=======
export const calculateReadingTime = (content: string, wordsPerMinute: number = 200): number => {
  const words = content.trim().split(/\s+/).length;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-57f8
  return Math.ceil(words / wordsPerMinute);
};

/**
 * Check content quality for SEO
 */
<<<<<<< HEAD
export const checkContentQuality: (content: string, title: string): {,,,
  score: number;,,
issues: string[];,,,
  recommendations: string[];
} => {
const issues: string[]  = [];,,,
  const recommendations: string[]  = [];,,,
  let score: 100;,,
// Word count check
const wordCount: content.trim().split(/\s+/).length;,,,
  if (wordCount < 300) {
issues.push('Content is too short (<300 words)');';';
score -= 20;
}
  
  // Keyword density check (title in content)
export const checkContentQuality = (
  content: string,
  title: string,
): { score: number; issues: string[]; recommendations: string[] } => {
  const issues: string[] = [];
  const recommendations: string[] = [];
  let score = 100;
  const wordCount = content.trim().split(/\s+/).length;
  if (wordCount < 300) {
    issues.push('Content is too short (<300 words)');
=======
export const checkContentQuality = (content: string, title: string): {
  score: number;
  issues: string[];
  recommendations: string[];
} => {
  const issues: string[] = [];
  const recommendations: string[] = [];
  let score = 100;

  const wordCount = content.trim().split(/\s+/).length;

  // Check word count
  if (wordCount < 300) {
    issues.push('Content is too short');
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-57f8
    score -= 20;
  } else if (wordCount > 2000) {
    recommendations.push('Consider breaking content into multiple sections');
  }
<<<<<<< HEAD
  const titleWords = title.toLowerCase().split(/\s+/);
  const contentLower = content.toLowerCase();
  const titleInContent = titleWords.some((word) => contentLower.includes(word));
=======

  // Check title presence in content
  const titleWords = title.toLowerCase().split(/\s+/);
  const contentLower = content.toLowerCase();
  const titleInContent = titleWords.some((word) => contentLower.includes(word));

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-57f8
  if (!titleInContent) {
    issues.push('Title keywords not found in content');
    score -= 15;
  }
<<<<<<< HEAD
  
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
;
=======

  // Check for headings
  if (!content.includes('<h1>') && !content.includes('<h2>')) {
    recommendations.push('Add proper heading structure (H1, H2)');
    score -= 10;
  }

  // Check for images
  if (!content.includes('<img')) {
    recommendations.push('Add relevant images to improve engagement');
    score -= 5;
  }

  // Check for internal links
  if (!content.includes('href=')) {
    recommendations.push('Add internal links to related content');
    score -= 5;
  }

  return { score: Math.max(0, score), issues, recommendations };
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-57f8

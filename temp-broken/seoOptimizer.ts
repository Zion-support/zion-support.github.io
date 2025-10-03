<<<<<<< HEAD
/**
 * SEO Optimization utilities for Zion Tech Group website
 */

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

  return tags.join('\n');
};

/**
 * Generate structured data (JSON-LD)
 */
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
export const generateArticleStructuredData = (article: {
  title: string;
  description: string;
  author: string;
  image?: string;
  url: string;
  publishDate: string;
  modifiedDate?: string;
}): string => {
  const structuredData = {
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

/**
 * Generate breadcrumb structured data
 */
export const generateBreadcrumbStructuredData = (breadcrumbs: Array<{ name: string; url: string }>): string => {
  const structuredData = {
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };

  return generateStructuredData('BreadcrumbList', structuredData);
};

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
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
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

  lines.push('');

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
  };
};

/**
 * Escape HTML characters
 */
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
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
    score -= 20;
  } else if (wordCount > 2000) {
    recommendations.push('Consider breaking content into multiple sections');
  }

  // Check title presence in content
  const titleWords = title.toLowerCase().split(/\s+/);
  const contentLower = content.toLowerCase();
  const titleInContent = titleWords.some((word) => contentLower.includes(word));

  if (!titleInContent) {
    issues.push('Title keywords not found in content');
    score -= 15;
  }

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
=======
// Enhanced SEO optimization utilities
export class SEOOptimizer {
  private static instance: SEOOptimizer;

  public static getInstance(): SEOOptimizer {
    if (!SEOOptimizer.instance) {
      SEOOptimizer.instance = new SEOOptimizer();
    }
    return SEOOptimizer.instance;
  }

  public generateMetaTags(pageData: {
    title: string;
    description: string;
    keywords?: string[];
    image?: string;
    url?: string;
    type?: string;
  }): string {
    const {
      title,
      description,
      keywords = [],
      image = '/og-image.jpg',
      url = window.location.href,
      type = 'website'
    } = pageData;

    return `
      <title>${this.escapeHtml(title)}</title>
      <meta name="description" content="${this.escapeHtml(description)}">
      <meta name="keywords" content="${keywords.join(', ')}">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      
      <!-- Open Graph / Facebook -->
      <meta property="og:type" content="${type}">
      <meta property="og:url" content="${url}">
      <meta property="og:title" content="${this.escapeHtml(title)}">
      <meta property="og:description" content="${this.escapeHtml(description)}">
      <meta property="og:image" content="${image}">
      
      <!-- Twitter -->
      <meta property="twitter:card" content="summary_large_image">
      <meta property="twitter:url" content="${url}">
      <meta property="twitter:title" content="${this.escapeHtml(title)}">
      <meta property="twitter:description" content="${this.escapeHtml(description)}">
      <meta property="twitter:image" content="${image}">
      
      <!-- Additional SEO -->
      <meta name="robots" content="index, follow">
      <meta name="author" content="Zion Tech Group">
      <link rel="canonical" href="${url}">
    `;
  }

  public generateStructuredData(data: any): string {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo.png",
      "description": "Leading AI and technology solutions provider",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "364 E Main St STE 1008",
        "addressLocality": "Middletown",
        "addressRegion": "DE",
        "postalCode": "19709",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "contactType": "customer service",
        "email": "kleber@ziontechgroup.com"
      },
      "sameAs": [
        "https://github.com/Zion-Holdings",
        "https://linkedin.com/company/zion-tech-group"
      ],
      ...data
    };

    return `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`;
  }

  public optimizeImages(images: string[]): string[] {
    return images.map(img => {
      const baseName = img.replace(/\.[^/.]+$/, '');
      return `
        <picture>
          <source srcset="${baseName}.webp" type="image/webp">
          <source srcset="${baseName}.jpg" type="image/jpeg">
          <img src="${img}" alt="Optimized image" loading="lazy">
        </picture>
      `;
    });
  }

  public generateSitemap(pages: Array<{url: string, lastmod?: string, priority?: number}>): string {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod || new Date().toISOString()}</lastmod>
    <priority>${page.priority || 0.8}</priority>
  </url>
`).join('')}
</urlset>`;

    return sitemap;
  }

  private escapeHtml(text: string): string {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}
>>>>>>> 2a73580aa901b8b9fe4146edb218838bb40e7b1f

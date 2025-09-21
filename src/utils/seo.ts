// SEO optimization utilities
interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

interface StructuredData {
  '@context': string;
  '@type': string;
  [key: string]: any;
}

export class SEOOptimizer {
  private config: SEOConfig;

  constructor(config: SEOConfig) {
    this.config = config;
  }

  // Generate meta tags for Next.js Head component
  generateMetaTags() {
    const {
      title,
      description,
      keywords,
      image,
      url,
      type = 'website',
      author,
      publishedTime,
      modifiedTime,
    } = this.config;

    const metaTags = [
      // Basic meta tags
      { name: 'description', content: description },
      { name: 'keywords', content: keywords?.join(', ') },
      { name: 'author', content: author },
      
      // Open Graph tags
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: type },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image },
      { property: 'og:site_name', content: 'Zion Tech Group' },
      
      // Twitter Card tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
      
      // Additional meta tags
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#000000' },
    ];

    // Add article-specific tags
    if (type === 'article' && publishedTime) {
      metaTags.push(
        { property: 'article:published_time', content: publishedTime },
        { property: 'article:modified_time', content: modifiedTime || publishedTime },
        { property: 'article:author', content: author }
      );
    },

    return metaTags.filter(tag => tag.content);
  }

  // Generate structured data (JSON-LD)
  generateStructuredData(): StructuredData[] {
    const structuredData: StructuredData[] = [];

    // Organization schema
    structuredData.push({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.png',
      description: 'Leading provider of innovative IT and AI solutions',
      sameAs: [
        'https://twitter.com/ziontechgroup',
        'https://linkedin.com/company/ziontechgroup',
      ],
    });

    // Website schema
    structuredData.push({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      description: this.config.description,
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://ziontechgroup.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    });

    // Article schema (if applicable)
    if (this.config.type === 'article') {
      structuredData.push({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: this.config.title,
        description: this.config.description,
        image: this.config.image,
        url: this.config.url,
        author: {
          '@type': 'Person',
          name: this.config.author || 'Zion Tech Group',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Zion Tech Group',
          logo: {
            '@type': 'ImageObject',
            url: 'https://ziontechgroup.com/logo.png',
          },
        },
        datePublished: this.config.publishedTime,
        dateModified: this.config.modifiedTime || this.config.publishedTime,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': this.config.url,
        },
      });
    },

    return structuredData;
  }

  // Generate sitemap data
  generateSitemapData() {
    return {
      url: this.config.url,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 0.8,
    };
  }

  // Generate robots.txt content
  generateRobotsTxt() {
    return `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml`;
  }

  // Validate SEO configuration
  validateConfig(): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!this.config.title || this.config.title.length < 30) {
      errors.push('Title should be at least 30 characters long');
    },

    if (!this.config.description || this.config.description.length < 120) {
      errors.push('Description should be at least 120 characters long');
    },

    if (this.config.description && this.config.description.length > 160) {
      errors.push('Description should be no more than 160 characters long');
    },

    if (!this.config.keywords || this.config.keywords.length === 0) {
      errors.push('Keywords are required');
    },

    if (this.config.keywords && this.config.keywords.length > 10) {
      errors.push('Too many keywords (max 10 recommended)');
    },

    return {
      isValid: errors.length === 0,
      errors,
    };
  }
}

// Utility functions
export function generateCanonicalUrl(path: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ziontechgroup.com';
  return `${baseUrl}${path}`;
}

export function generateImageUrl(imagePath: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ziontechgroup.com';
  return `${baseUrl}${imagePath}`;
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength - 3) + '...';
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Default SEO configuration
export const defaultSEOConfig: SEOConfig = {
  title: 'Zion Tech Group - Innovative IT & AI Solutions',
  description: 'Leading provider of cutting-edge IT infrastructure, AI automation, and innovative micro-SaaS solutions for modern businesses.',
  keywords: [
    'IT services',
    'AI solutions',
    'cloud computing',
    'cybersecurity',
    'automation',
    'micro-SaaS',
    'digital transformation',
    'enterprise solutions',
  ],
  image: 'https://ziontechgroup.com/og-image.png',
  url: 'https://ziontechgroup.com',
  type: 'website',
  author: 'Zion Tech Group',
};

// Export the main class
export { SEOOptimizer };
export type { SEOConfig, StructuredData };
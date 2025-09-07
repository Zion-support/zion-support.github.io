/**
 * SEO Improvements Utility
 * Provides various SEO optimization functions
 */

import { Metadata } from 'next';

// Meta tag generation
export const metaTagGeneration = {
  // Generate comprehensive meta tags
  generateMetaTags: (config: {
    title: string;
    description: string;
    keywords?: string[];
    author?: string;
    url?: string;
    image?: string;
    type?: string;
    siteName?: string;
  }): Metadata => {
    const {
      title,
      description,
      keywords = [],
      author = 'Zion Tech Group',
      url,
      image,
      type = 'website',
      siteName = 'Zion Tech Group'
    } = config;

    return {
      title,
      description,
      keywords: keywords.join(', '),
      authors: [{ name: author }],
      creator: author,
      publisher: siteName,
      robots: 'index, follow',
      openGraph: {
        title,
        description,
        url,
        siteName,
        images: image ? [{ url: image, width: 1200, height: 630 }] : undefined,
        locale: 'en_US',
        type: type as any
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: image ? [image] : undefined,
        creator: '@ziontechgroup'
      },
      alternates: {
        canonical: url
      }
    };
  },

  // Generate structured data (JSON-LD)
  generateStructuredData: (type: string, data: any) => {
    const baseStructure = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data
    };

    return JSON.stringify(baseStructure, null, 2);
  },

  // Generate breadcrumb structured data
  generateBreadcrumbStructuredData: (breadcrumbs: Array<{ name: string; url: string }>) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.url
      }))
    };
  }
};

// Content optimization
export const contentOptimization = {
  // Calculate reading time
  calculateReadingTime: (content: string): number => {
    const wordsPerMinute = 200;
    const wordCount = content.trim().split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  },

  // Extract keywords from content
  extractKeywords: (content: string, maxKeywords: number = 10): string[] => {
    const commonWords = new Set([
      'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by',
      'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did',
      'will', 'would', 'could', 'should', 'may', 'might', 'must', 'can', 'this', 'that', 'these', 'those'
    ]);

    const words = content
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(word => word.length > 3 && !commonWords.has(word));

    const wordCount = words.reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(wordCount)
      .sort(([, a], [, b]) => b - a)
      .slice(0, maxKeywords)
      .map(([word]) => word);
  },

  // Generate meta description from content
  generateMetaDescription: (content: string, maxLength: number = 160): string => {
    const cleanContent = content.replace(/<[^>]*>/g, '').trim();
    if (cleanContent.length <= maxLength) return cleanContent;
    
    const truncated = cleanContent.substring(0, maxLength);
    const lastSpace = truncated.lastIndexOf(' ');
    return truncated.substring(0, lastSpace) + '...';
  },

  // Optimize heading structure
  optimizeHeadings: (content: string): { h1Count: number; h2Count: number; issues: string[] } => {
    const h1Matches = content.match(/<h1[^>]*>/g) || [];
    const h2Matches = content.match(/<h2[^>]*>/g) || [];
    
    const issues: string[] = [];
    
    if (h1Matches.length === 0) issues.push('Missing H1 tag');
    if (h1Matches.length > 1) issues.push('Multiple H1 tags found');
    if (h2Matches.length === 0) issues.push('No H2 tags found');
    
    return {
      h1Count: h1Matches.length,
      h2Count: h2Matches.length,
      issues
    };
  }
};

// URL optimization
export const urlOptimization = {
  // Generate SEO-friendly slug
  generateSlug: (text: string): string => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  },

  // Validate URL structure
  validateUrl: (url: string): { isValid: boolean; issues: string[] } => {
    const issues: string[] = [];
    
    if (url.length > 100) issues.push('URL too long (>100 characters)');
    if (url.includes('_')) issues.push('URL contains underscores');
    if (url.match(/[A-Z]/)) issues.push('URL contains uppercase letters');
    if (url.includes('//')) issues.push('URL contains double slashes');
    if (!url.startsWith('/')) issues.push('URL should start with /');
    
    return {
      isValid: issues.length === 0,
      issues
    };
  },

  // Generate canonical URL
  generateCanonicalUrl: (baseUrl: string, path: string): string => {
    const cleanPath = path.replace(/\/+$/, '') || '/';
    return `${baseUrl.replace(/\/+$/, '')}${cleanPath}`;
  }
};

// Image SEO optimization
export const imageOptimization = {
  // Generate alt text suggestions
  generateAltText: (filename: string, context?: string): string => {
    const cleanName = filename
      .replace(/\.[^/.]+$/, '')
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
    
    return context ? `${cleanName} - ${context}` : cleanName;
  },

  // Validate image SEO
  validateImageSEO: (images: Array<{ src: string; alt?: string; title?: string }>) => {
    return images.map(img => {
      const issues: string[] = [];
      
      if (!img.alt) issues.push('Missing alt attribute');
      if (img.alt && img.alt.length > 125) issues.push('Alt text too long');
      if (img.alt && img.alt.toLowerCase().includes('image of')) issues.push('Alt text contains redundant phrase');
      
      return {
        src: img.src,
        issues
      };
    });
  }
};

// Performance SEO
export const performanceSEO = {
  // Generate preload links
  generatePreloadLinks: (resources: Array<{ href: string; as: string; type?: string }>) => {
    return resources.map(resource => ({
      rel: 'preload',
      href: resource.href,
      as: resource.as,
      type: resource.type
    }));
  },

  // Generate prefetch links
  generatePrefetchLinks: (urls: string[]) => {
    return urls.map(url => ({
      rel: 'prefetch',
      href: url
    }));
  },

  // Critical CSS extraction
  extractCriticalCSS: (html: string): string => {
    // Simplified critical CSS extraction
    const aboveFoldSelectors = [
      'body', 'header', 'nav', '.hero', '.banner', 'h1', 'h2',
      '.container', '.wrapper', '.main-content'
    ];
    
    // This is a simplified version - in production, use tools like critical or critters
    return `/* Critical CSS for above-the-fold content */`;
  }
};

// Analytics and tracking
export const analyticsOptimization = {
  // Generate Google Analytics 4 config
  generateGA4Config: (measurementId: string) => ({
    measurementId,
    config: {
      page_title: document?.title,
      page_location: window?.location?.href,
      send_page_view: true,
      anonymize_ip: true,
      cookie_flags: 'SameSite=Strict;Secure'
    }
  }),

  // Generate structured data for analytics
  generateAnalyticsStructuredData: (pageType: string, data: any) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: data.title,
      description: data.description,
      url: data.url,
      mainEntity: {
        '@type': pageType,
        ...data.entity
      }
    };
  }
};

// Sitemap generation
export const sitemapGeneration = {
  // Generate sitemap entry
  generateSitemapEntry: (url: string, lastmod?: string, changefreq?: string, priority?: number) => ({
    url,
    lastmod: lastmod || new Date().toISOString(),
    changefreq: changefreq || 'weekly',
    priority: priority || 0.5
  }),

  // Generate robots.txt content
  generateRobotsTxt: (sitemapUrl: string, disallowedPaths: string[] = []) => {
    const disallowRules = disallowedPaths.map(path => `Disallow: ${path}`).join('\n');
    
    return `User-agent: *
${disallowRules || 'Allow: /'}

Sitemap: ${sitemapUrl}`;
  }
};

export default {
  metaTagGeneration,
  contentOptimization,
  urlOptimization,
  imageOptimization,
  performanceSEO,
  analyticsOptimization,
  sitemapGeneration
};
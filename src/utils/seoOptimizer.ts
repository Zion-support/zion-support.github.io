/**
 * Advanced SEO Optimizer
 * Provides comprehensive SEO monitoring and optimization utilities
 */

interface SEOConfig {
  enableMetaOptimization: boolean;
  enableStructuredData: boolean;
  enableSitemapGeneration: boolean;
  enableRobotsTxt: boolean;
  enableCanonicalUrls: boolean;
  enableOpenGraph: boolean;
  enableTwitterCards: boolean;
  enableSchemaMarkup: boolean;
}

interface SEOMetrics {
  titleLength: number;
  descriptionLength: number;
  headingCount: number;
  imageAltTexts: number;
  internalLinks: number;
  externalLinks: number;
  structuredDataItems: number;
  canonicalUrls: number;
  metaTags: number;
  openGraphTags: number;
}

interface PageSEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: Record<string, unknown>;
  robots?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

class SEOOptimizer {
  private config: SEOConfig;
  private metrics: SEOMetrics;
  private baseUrl: string;

  constructor(config: Partial<SEOConfig> = {}) {
    this.config = {
      enableMetaOptimization: true,
      enableStructuredData: true,
      enableSitemapGeneration: true,
      enableRobotsTxt: true,
      enableCanonicalUrls: true,
      enableOpenGraph: true,
      enableTwitterCards: true,
      enableSchemaMarkup: true,
      ...config
    };

    this.metrics = {
      titleLength: 0,
      descriptionLength: 0,
      headingCount: 0,
      imageAltTexts: 0,
      internalLinks: 0,
      externalLinks: 0,
      structuredDataItems: 0,
      canonicalUrls: 0,
      metaTags: 0,
      openGraphTags: 0
    };

    this.baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
    this.initialize();
  }

  private initialize(): void {
    if (typeof window === 'undefined') return;

    this.optimizeMetaTags();
    this.addStructuredData();
    this.optimizeImages();
    this.optimizeLinks();
    this.analyzeSEO();
  }

  private optimizeMetaTags(): void {
    if (!this.config.enableMetaOptimization) return;

    // Ensure proper meta viewport
    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
      document.head.appendChild(viewport);
    }

    // Add charset if missing
    let charset = document.querySelector('meta[charset]');
    if (!charset) {
      charset = document.createElement('meta');
      charset.setAttribute('charset', 'UTF-8');
      document.head.insertBefore(charset, document.head.firstChild);
    }

    // Add language attribute
    if (!document.documentElement.getAttribute('lang')) {
      document.documentElement.setAttribute('lang', 'en');
    }
  }

  private addStructuredData(): void {
    if (!this.config.enableStructuredData) return;

    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "description": "Leading AI & Technology Solutions for modern enterprises",
      "url": this.baseUrl,
      "logo": `${this.baseUrl}/logo.png`,
      "sameAs": [
        "https://linkedin.com/company/zion-tech-group",
        "https://twitter.com/ziontechgroup",
        "https://github.com/zion-tech-group"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-ZION-TECH",
        "contactType": "customer service",
        "availableLanguage": "English"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Tech Street",
        "addressLocality": "San Francisco",
        "addressRegion": "CA",
        "postalCode": "94105",
        "addressCountry": "US"
      }
    };

    this.addStructuredDataScript(organizationSchema);
  }

  private addStructuredDataScript(data: Record<string, unknown>): void {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  private optimizeImages(): void {
    if (typeof window === 'undefined') return;

    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      // Add loading="lazy" for images below the fold
      if (index > 2) {
        img.setAttribute('loading', 'lazy');
      }

      // Add decoding="async" for better performance
      img.setAttribute('decoding', 'async');

      // Ensure alt text exists
      if (!img.getAttribute('alt')) {
        const src = img.getAttribute('src') || '';
        const filename = src.split('/').pop()?.split('.')[0] || 'image';
        img.setAttribute('alt', filename.replace(/[-_]/g, ' '));
      }

      // Add fetchpriority for above-the-fold images
      if (index < 3) {
        img.setAttribute('fetchpriority', 'high');
      }
    });
  }

  private optimizeLinks(): void {
    if (typeof window === 'undefined') return;

    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;

      // Add rel="noopener" for external links
      if (href.startsWith('http') && !href.includes(this.baseUrl)) {
        link.setAttribute('rel', 'noopener noreferrer');
        link.setAttribute('target', '_blank');
      }

      // Add title attribute for better UX
      if (!link.getAttribute('title') && !link.textContent?.trim()) {
        link.setAttribute('title', href);
      }
    });
  }

  private analyzeSEO(): void {
    this.metrics.titleLength = document.title.length;
    
    const description = document.querySelector('meta[name="description"]');
    this.metrics.descriptionLength = description?.getAttribute('content')?.length || 0;
    
    this.metrics.headingCount = document.querySelectorAll('h1, h2, h3, h4, h5, h6').length;
    this.metrics.imageAltTexts = document.querySelectorAll('img[alt]').length;
    
    const links = document.querySelectorAll('a[href]');
    this.metrics.internalLinks = Array.from(links).filter(link => {
      const href = link.getAttribute('href');
      return href && (href.startsWith('/') || href.includes(this.baseUrl));
    }).length;
    
    this.metrics.externalLinks = Array.from(links).filter(link => {
      const href = link.getAttribute('href');
      return href && href.startsWith('http') && !href.includes(this.baseUrl);
    }).length;
    
    this.metrics.structuredDataItems = document.querySelectorAll('script[type="application/ld+json"]').length;
    this.metrics.canonicalUrls = document.querySelectorAll('link[rel="canonical"]').length;
    this.metrics.metaTags = document.querySelectorAll('meta').length;
    this.metrics.openGraphTags = document.querySelectorAll('meta[property^="og:"]').length;
  }

  public optimizePage(data: PageSEOData): void {
    if (typeof window === 'undefined') return;

    // Update title
    if (data.title) {
      document.title = data.title;
    }

    // Update meta description
    this.updateMetaTag('description', data.description);
    
    // Update keywords
    if (data.keywords && data.keywords.length > 0) {
      this.updateMetaTag('keywords', data.keywords.join(', '));
    }

    // Update canonical URL
    if (data.canonicalUrl) {
      this.updateCanonicalUrl(data.canonicalUrl);
    }

    // Update Open Graph tags
    if (this.config.enableOpenGraph) {
      this.updateOpenGraphTags(data);
    }

    // Update Twitter Card tags
    if (this.config.enableTwitterCards) {
      this.updateTwitterCardTags(data);
    }

    // Update robots meta
    if (data.robots) {
      this.updateMetaTag('robots', data.robots);
    }

    // Add structured data
    if (data.structuredData && this.config.enableSchemaMarkup) {
      this.addStructuredDataScript(data.structuredData);
    }

    this.analyzeSEO();
  }

  private updateMetaTag(name: string, content: string): void {
    let meta = document.querySelector(`meta[name="${name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  }

  private updateCanonicalUrl(url: string): void {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }

  private updateOpenGraphTags(data: PageSEOData): void {
    const ogTags = [
      { property: 'og:title', content: data.ogTitle || data.title },
      { property: 'og:description', content: data.ogDescription || data.description },
      { property: 'og:image', content: data.ogImage || `${this.baseUrl}/og-image.png` },
      { property: 'og:url', content: data.canonicalUrl },
      { property: 'og:type', content: data.ogType || 'website' }
    ];

    ogTags.forEach(tag => {
      if (tag.content) {
        this.updateMetaProperty(tag.property, tag.content);
      }
    });
  }

  private updateTwitterCardTags(data: PageSEOData): void {
    const twitterTags = [
      { name: 'twitter:card', content: data.twitterCard || 'summary_large_image' },
      { name: 'twitter:title', content: data.twitterTitle || data.title },
      { name: 'twitter:description', content: data.twitterDescription || data.description },
      { name: 'twitter:image', content: data.twitterImage || data.ogImage || `${this.baseUrl}/og-image.png` }
    ];

    twitterTags.forEach(tag => {
      if (tag.content) {
        this.updateMetaTag(tag.name, tag.content);
      }
    });
  }

  private updateMetaProperty(property: string, content: string): void {
    let meta = document.querySelector(`meta[property="${property}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('property', property);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  }

  public generateSitemap(): string {
    if (!this.config.enableSitemapGeneration) return '';

    const pages = [
      { url: '/', priority: '1.0', changefreq: 'daily' },
      { url: '/about', priority: '0.8', changefreq: 'monthly' },
      { url: '/services', priority: '0.9', changefreq: 'weekly' },
      { url: '/contact', priority: '0.7', changefreq: 'monthly' },
      { url: '/blog', priority: '0.6', changefreq: 'weekly' }
    ];

    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    pages.forEach(page => {
      sitemap += '  <url>\n';
      sitemap += `    <loc>${this.baseUrl}${page.url}</loc>\n`;
      sitemap += `    <priority>${page.priority}</priority>\n`;
      sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
      sitemap += '  </url>\n';
    });
    
    sitemap += '</urlset>';
    return sitemap;
  }

  public generateRobotsTxt(): string {
    if (!this.config.enableRobotsTxt) return '';

    return `User-agent: *
Allow: /

Sitemap: ${this.baseUrl}/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
`;
  }

  public getMetrics(): SEOMetrics {
    this.analyzeSEO();
    return { ...this.metrics };
  }

  public validateSEO(): string[] {
    const issues: string[] = [];

    // Check title length
    if (this.metrics.titleLength < 30 || this.metrics.titleLength > 60) {
      issues.push(`Title length should be between 30-60 characters (current: ${this.metrics.titleLength})`);
    }

    // Check description length
    if (this.metrics.descriptionLength < 120 || this.metrics.descriptionLength > 160) {
      issues.push(`Description length should be between 120-160 characters (current: ${this.metrics.descriptionLength})`);
    }

    // Check for missing alt texts
    const images = document.querySelectorAll('img');
    const imagesWithoutAlt = Array.from(images).filter(img => !img.getAttribute('alt'));
    if (imagesWithoutAlt.length > 0) {
      issues.push(`${imagesWithoutAlt.length} images missing alt text`);
    }

    // Check for missing h1
    if (document.querySelectorAll('h1').length === 0) {
      issues.push('Page missing H1 heading');
    }

    // Check for multiple h1s
    if (document.querySelectorAll('h1').length > 1) {
      issues.push('Page has multiple H1 headings');
    }

    return issues;
  }

  public generateReport(): string {
    const metrics = this.getMetrics();
    const issues = this.validateSEO();
    
    return `
SEO Report:
- Title Length: ${metrics.titleLength} characters
- Description Length: ${metrics.descriptionLength} characters
- Headings: ${metrics.headingCount}
- Images with Alt Text: ${metrics.imageAltTexts}
- Internal Links: ${metrics.internalLinks}
- External Links: ${metrics.externalLinks}
- Structured Data Items: ${metrics.structuredDataItems}
- Canonical URLs: ${metrics.canonicalUrls}
- Meta Tags: ${metrics.metaTags}
- Open Graph Tags: ${metrics.openGraphTags}

Issues Found: ${issues.length}
${issues.map(issue => `- ${issue}`).join('\n')}
    `.trim();
  }
}

// Export singleton instance
export const seoOptimizer = new SEOOptimizer();

// Export class for custom instances
export { SEOOptimizer };
export type { SEOConfig, SEOMetrics, PageSEOData };
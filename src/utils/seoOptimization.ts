/**
 * SEO Optimization Utilities
 * Advanced SEO tools for the Zion Tech Group website
 */

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl?: string;
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
  language?: string;
  alternateLanguages?: Array<{ hreflang: string; href: string }>;
}

interface PagePerformance {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  speedIndex: number;
  totalBlockingTime: number;
}

export class SEOOptimizer {
  private static instance: SEOOptimizer;
  private currentSEOData: SEOData | null = null;
  private performanceMetrics: Partial<PagePerformance> = {};

  private constructor() {
    this.initializePerformanceMonitoring();
  }

  public static getInstance(): SEOOptimizer {
    if (!SEOOptimizer.instance) {
      SEOOptimizer.instance = new SEOOptimizer();
    }
    return SEOOptimizer.instance;
  }

  public updateSEO(data: SEOData): void {
    this.currentSEOData = data;
    this.updateMetaTags(data);
    this.updateStructuredData(data.structuredData);
    this.updateCanonicalUrl(data.canonicalUrl);
    this.updateRobotsMeta(data.robots);
    this.updateLanguageMeta(data.language, data.alternateLanguages);
  }

  private updateMetaTags(data: SEOData): void {
    // Update title
    document.title = data.title;

    // Update meta description
    this.setMetaTag('description', data.description);

    // Update keywords
    if (data.keywords.length > 0) {
      this.setMetaTag('keywords', data.keywords.join(', '));
    }

    // Update Open Graph tags
    this.setMetaTag('og:title', data.ogTitle || data.title, 'property');
    this.setMetaTag('og:description', data.ogDescription || data.description, 'property');
    this.setMetaTag('og:type', data.ogType || 'website', 'property');
    this.setMetaTag('og:url', data.canonicalUrl || window.location.href, 'property');
    if (data.ogImage) {
      this.setMetaTag('og:image', data.ogImage, 'property');
    }

    // Update Twitter Card tags
    this.setMetaTag('twitter:card', data.twitterCard || 'summary_large_image', 'name');
    this.setMetaTag('twitter:title', data.twitterTitle || data.title, 'name');
    this.setMetaTag('twitter:description', data.twitterDescription || data.description, 'name');
    if (data.twitterImage) {
      this.setMetaTag('twitter:image', data.twitterImage, 'name');
    }
  }

  private setMetaTag(name: string, content: string, attribute: string = 'name'): void {
    let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
    
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, name);
      document.head.appendChild(meta);
    }
    
    meta.content = content;
  }

  private updateStructuredData(data?: Record<string, unknown>): void {
    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    if (data) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    }
  }

  private updateCanonicalUrl(url?: string): void {
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    
    canonical.href = url || window.location.href;
  }

  private updateRobotsMeta(robots?: string): void {
    if (robots) {
      this.setMetaTag('robots', robots);
    }
  }

  private updateLanguageMeta(language?: string, alternateLanguages?: Array<{ hreflang: string; href: string }>): void {
    if (language) {
      document.documentElement.lang = language;
    }

    // Remove existing alternate language links
    const existingAlternates = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingAlternates.forEach(link => link.remove());

    // Add new alternate language links
    if (alternateLanguages) {
      alternateLanguages.forEach(({ hreflang, href }) => {
        const link = document.createElement('link');
        link.rel = 'alternate';
        link.hreflang = hreflang;
        link.href = href;
        document.head.appendChild(link);
      });
    }
  }

  public generateBreadcrumbStructuredData(breadcrumbs: Array<{ name: string; url: string }>): Record<string, unknown> {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((breadcrumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: breadcrumb.name,
        item: breadcrumb.url
      }))
    };
  }

  public generateOrganizationStructuredData(organization: {
    name: string;
    url: string;
    logo?: string;
    description?: string;
    contactInfo?: {
      telephone?: string;
      email?: string;
      address?: string;
    };
    socialMedia?: Array<{ platform: string; url: string }>;
  }): Record<string, unknown> {
    const structuredData: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: organization.name,
      url: organization.url
    };

    if (organization.logo) {
      structuredData.logo = organization.logo;
    }

    if (organization.description) {
      structuredData.description = organization.description;
    }

    if (organization.contactInfo) {
      structuredData.contactPoint = {
        '@type': 'ContactPoint',
        ...organization.contactInfo
      };
    }

    if (organization.socialMedia) {
      structuredData.sameAs = organization.socialMedia.map(social => social.url);
    }

    return structuredData;
  }

  public generateArticleStructuredData(article: {
    headline: string;
    description: string;
    author: string;
    datePublished: string;
    dateModified?: string;
    image?: string;
    url: string;
  }): Record<string, unknown> {
    const structuredData: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.headline,
      description: article.description,
      author: {
        '@type': 'Person',
        name: article.author
      },
      datePublished: article.datePublished,
      url: article.url
    };

    if (article.dateModified) {
      structuredData.dateModified = article.dateModified;
    }

    if (article.image) {
      structuredData.image = article.image;
    }

    return structuredData;
  }

  public generateServiceStructuredData(service: {
    name: string;
    description: string;
    provider: string;
    url: string;
    price?: string;
    priceCurrency?: string;
    category?: string;
  }): Record<string, unknown> {
    const structuredData: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.name,
      description: service.description,
      provider: {
        '@type': 'Organization',
        name: service.provider
      },
      url: service.url
    };

    if (service.price && service.priceCurrency) {
      structuredData.offers = {
        '@type': 'Offer',
        price: service.price,
        priceCurrency: service.priceCurrency
      };
    }

    if (service.category) {
      structuredData.category = service.category;
    }

    return structuredData;
  }

  private initializePerformanceMonitoring(): void {
    if (!('performance' in window)) return;

    // Monitor Core Web Vitals
    this.observeLCP();
    this.observeFID();
    this.observeCLS();
    this.observeFCP();
  }

  private observeLCP(): void {
    if (!('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.performanceMetrics.largestContentfulPaint = lastEntry.startTime;
    });

    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  }

  private observeFID(): void {
    if (!('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        const fid = entry as PerformanceEntry & { processingStart: number };
        this.performanceMetrics.firstInputDelay = fid.processingStart - fid.startTime;
      });
    });

    observer.observe({ entryTypes: ['first-input'] });
  }

  private observeCLS(): void {
    if (!('PerformanceObserver' in window)) return;

    let clsValue = 0;
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        const cls = entry as PerformanceEntry & { hadRecentInput?: boolean; value: number };
        if (!cls.hadRecentInput) {
          clsValue += cls.value;
        }
      });
      this.performanceMetrics.cumulativeLayoutShift = clsValue;
    });

    observer.observe({ entryTypes: ['layout-shift'] });
  }

  private observeFCP(): void {
    if (!('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        if (entry.name === 'first-contentful-paint') {
          this.performanceMetrics.firstContentfulPaint = entry.startTime;
        }
      });
    });

    observer.observe({ entryTypes: ['paint'] });
  }

  public getPerformanceMetrics(): Partial<PagePerformance> {
    return { ...this.performanceMetrics };
  }

  public optimizeImages(): void {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add loading="lazy" for images below the fold
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }

      // Add decoding="async"
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }

      // Add alt text if missing
      if (!img.hasAttribute('alt')) {
        img.setAttribute('alt', '');
      }
    });
  }

  public optimizeLinks(): void {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      const href = link.getAttribute('href');
      
      // Add rel="noopener" for external links
      if (href && href.startsWith('http') && !href.includes(window.location.hostname)) {
        if (!link.hasAttribute('rel') || !link.getAttribute('rel')?.includes('noopener')) {
          const currentRel = link.getAttribute('rel') || '';
          link.setAttribute('rel', currentRel ? `${currentRel} noopener` : 'noopener');
        }
      }
    });
  }

  public generateSitemap(): string {
    const pages = [
      '/',
      '/about',
      '/services',
      '/portfolio',
      '/blog',
      '/contact'
    ];

    const baseUrl = window.location.origin;
    
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;
  }
}

// Export singleton instance
export const seoOptimizer = SEOOptimizer.getInstance();

// Auto-optimize when module is loaded
if (typeof window !== 'undefined') {
  seoOptimizer.optimizeImages();
  seoOptimizer.optimizeLinks();
}
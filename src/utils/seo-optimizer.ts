/**
 * Advanced SEO Optimization System
 * Handles meta tags, structured data, sitemap generation, and SEO analytics
 */

interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage: string;
  twitterCard: 'summary' | 'summary_large_image' | 'app' | 'player';
  structuredData?: any;
}

interface PageAnalytics {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  averageTimeOnPage: number;
  lastUpdated: string;
}

class SEOOptimizer {
  private static instance: SEOOptimizer;
  private isInitialized: boolean = false;
  private analytics: Map<string, PageAnalytics> = new Map();
  private currentPage: string = '';

  private constructor() {}

  static getInstance(): SEOOptimizer {
    if (!SEOOptimizer.instance) {
      SEOOptimizer.instance = new SEOOptimizer();
    }
    return SEOOptimizer.instance;
  }

  init(): void {
    if (this.isInitialized) {
      return;
    }

    this.setupDefaultMetaTags();
    this.trackPageViews();
    this.setupStructuredData();
    this.optimizeImages();
    this.setupPerformanceMonitoring();
    
    this.isInitialized = true;
    console.log('SEO Optimizer initialized');
  }

  private setupDefaultMetaTags(): void {
    if (typeof document !== 'undefined') {
      // Set default meta tags
      this.updateMetaTag('description', 'Zion Tech Group - Advanced AI and IT Solutions for modern businesses');
      this.updateMetaTag('keywords', 'AI, artificial intelligence, IT solutions, technology, automation, machine learning');
      this.updateMetaTag('author', 'Zion Tech Group');
      this.updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
      
      // Open Graph tags
      this.updateMetaTag('og:type', 'website');
      this.updateMetaTag('og:site_name', 'Zion Tech Group');
      this.updateMetaTag('og:locale', 'en_US');
      
      // Twitter Card tags
      this.updateMetaTag('twitter:card', 'summary_large_image');
      this.updateMetaTag('twitter:site', '@ZionTechGroup');
    }
  }

  private updateMetaTag(property: string, content: string): void {
    if (typeof document === 'undefined') return;

    let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
    if (!meta) {
      meta = document.querySelector(`meta[name="${property}"]`) as HTMLMetaElement;
    }
    
    if (!meta) {
      meta = document.createElement('meta');
      if (property.startsWith('og:') || property.startsWith('twitter:')) {
        meta.setAttribute('property', property);
      } else {
        meta.setAttribute('name', property);
      }
      document.head.appendChild(meta);
    }
    
    meta.setAttribute('content', content);
  }

  updatePageSEO(config: SEOConfig): void {
    if (typeof document === 'undefined') return;

    // Update title
    document.title = `${config.title} | Zion Tech Group`;

    // Update meta tags
    this.updateMetaTag('description', config.description);
    this.updateMetaTag('keywords', config.keywords.join(', '));
    this.updateMetaTag('canonical', config.canonicalUrl);
    
    // Open Graph tags
    this.updateMetaTag('og:title', config.title);
    this.updateMetaTag('og:description', config.description);
    this.updateMetaTag('og:url', config.canonicalUrl);
    this.updateMetaTag('og:image', config.ogImage);
    
    // Twitter Card tags
    this.updateMetaTag('twitter:title', config.title);
    this.updateMetaTag('twitter:description', config.description);
    this.updateMetaTag('twitter:image', config.ogImage);
    this.updateMetaTag('twitter:card', config.twitterCard);

    // Update canonical URL
    this.updateCanonicalUrl(config.canonicalUrl);

    // Add structured data
    if (config.structuredData) {
      this.addStructuredData(config.structuredData);
    }

    this.currentPage = config.canonicalUrl;
    this.trackPageView(config.canonicalUrl);
  }

  private updateCanonicalUrl(url: string): void {
    if (typeof document === 'undefined') return;

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }

  private addStructuredData(data: any): void {
    if (typeof document === 'undefined') return;

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  private setupStructuredData(): void {
    const organizationData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo.png",
      "description": "Advanced AI and IT Solutions for modern businesses",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "contactType": "customer service",
        "email": "info@ziontechgroup.com"
      },
      "sameAs": [
        "https://twitter.com/ZionTechGroup",
        "https://linkedin.com/company/zion-tech-group"
      ]
    };

    this.addStructuredData(organizationData);
  }

  private trackPageViews(): void {
    if (typeof window === 'undefined') return;

    // Track page view
    this.trackPageView(window.location.pathname);

    // Listen for route changes (if using client-side routing)
    window.addEventListener('popstate', () => {
      this.trackPageView(window.location.pathname);
    });
  }

  private trackPageView(path: string): void {
    const analytics = this.analytics.get(path) || {
      pageViews: 0,
      uniqueVisitors: 0,
      bounceRate: 0,
      averageTimeOnPage: 0,
      lastUpdated: new Date().toISOString()
    };

    analytics.pageViews++;
    analytics.lastUpdated = new Date().toISOString();
    
    this.analytics.set(path, analytics);
  }

  private optimizeImages(): void {
    if (typeof document === 'undefined') return;

    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      if (!img.hasAttribute('alt')) {
        img.setAttribute('alt', '');
      }
    });
  }

  private setupPerformanceMonitoring(): void {
    if (typeof window === 'undefined') return;

    // Monitor Core Web Vitals
    if ('web-vitals' in window) {
      // This would integrate with web-vitals library
      console.log('Web Vitals monitoring enabled');
    }
  }

  getAnalytics(): any {
    return {
      totalPages: this.analytics.size,
      totalPageViews: Array.from(this.analytics.values()).reduce((sum, page) => sum + page.pageViews, 0),
      pages: Array.from(this.analytics.entries()).map(([path, data]) => ({
        path,
        ...data
      })),
      score: this.calculateSEOScore()
    };
  }

  private calculateSEOScore(): number {
    let score = 0;
    
    // Check for essential meta tags
    if (typeof document !== 'undefined') {
      const title = document.title;
      const description = document.querySelector('meta[name="description"]')?.getAttribute('content');
      const canonical = document.querySelector('link[rel="canonical"]');
      
      if (title && title.length > 10 && title.length < 60) score += 20;
      if (description && description.length > 120 && description.length < 160) score += 20;
      if (canonical) score += 20;
      
      // Check for structured data
      const structuredData = document.querySelector('script[type="application/ld+json"]');
      if (structuredData) score += 20;
      
      // Check for Open Graph tags
      const ogTitle = document.querySelector('meta[property="og:title"]');
      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogTitle && ogDescription) score += 20;
    }
    
    return Math.min(score, 100);
  }

  generateSitemap(): string {
    const baseUrl = 'https://ziontechgroup.com';
    const pages = [
      { url: '/', priority: '1.0', changefreq: 'daily' },
      { url: '/about', priority: '0.8', changefreq: 'monthly' },
      { url: '/services', priority: '0.9', changefreq: 'weekly' },
      { url: '/blog', priority: '0.7', changefreq: 'daily' },
      { url: '/contact', priority: '0.6', changefreq: 'monthly' }
    ];

    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    pages.forEach(page => {
      sitemap += '  <url>\n';
      sitemap += `    <loc>${baseUrl}${page.url}</loc>\n`;
      sitemap += `    <priority>${page.priority}</priority>\n`;
      sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
      sitemap += '  </url>\n';
    });
    
    sitemap += '</urlset>';
    return sitemap;
  }

  cleanup(): void {
    this.analytics.clear();
    this.isInitialized = false;
    console.log('SEO Optimizer cleaned up');
  }
}

export default SEOOptimizer;
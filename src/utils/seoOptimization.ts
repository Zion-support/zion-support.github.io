// Advanced SEO Optimization Utilities

export interface SEOConfig {
  siteName: string;
  siteUrl: string;
  defaultTitle: string;
  defaultDescription: string;
  defaultImage: string;
  twitterHandle?: string;
  facebookAppId?: string;
  enableStructuredData: boolean;
  enableOpenGraph: boolean;
  enableTwitterCards: boolean;
  enableCanonical: boolean;
}

export interface PageSEOData {
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

export class SEOOptimizer {
  private static instance: SEOOptimizer;
  private config: SEOConfig;

  private constructor(config: Partial<SEOConfig> = {}) {
    this.config = {
      siteName: 'Zion Tech Group',
      siteUrl: 'https://ziontechgroup.com',
      defaultTitle: 'Zion Tech Group - Advanced AI and IT Solutions',
      defaultDescription: 'Leading provider of AI-powered solutions, cloud computing, and enterprise technology services. Transform your business with our cutting-edge technology solutions.',
      defaultImage: '/images/og-default.jpg',
      enableStructuredData: true,
      enableOpenGraph: true,
      enableTwitterCards: true,
      enableCanonical: true,
      ...config
    };
    this.initialize();
  }

  public static getInstance(config?: Partial<SEOConfig>): SEOOptimizer {
    if (!SEOOptimizer.instance) {
      SEOOptimizer.instance = new SEOOptimizer(config);
    }
    return SEOOptimizer.instance;
  }

  private initialize(): void {
    this.setupBasicMeta();
    this.setupViewport();
    this.setupRobots();
    this.setupPreconnects();
  }

  private setupBasicMeta(): void {
    this.setMetaTag('charset', 'utf-8');
    this.setMetaTag('name', 'generator', 'React with Vite');
    this.setMetaTag('name', 'theme-color', '#1f2937');
    this.setMetaTag('name', 'msapplication-TileColor', '#1f2937');
  }

  private setupViewport(): void {
    this.setMetaTag('name', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover');
  }

  private setupRobots(): void {
    this.setMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
  }

  private setupPreconnects(): void {
    const preconnects = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.google-analytics.com',
      'https://www.googletagmanager.com'
    ];

    preconnects.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = url;
      if (url.includes('gstatic')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });
  }

  public updatePageSEO(data: PageSEOData): void {
    this.updateTitle(data.title);
    this.updateDescription(data.description);
    
    if (data.keywords) {
      this.updateKeywords(data.keywords);
    }

    if (this.config.enableCanonical) {
      this.updateCanonical(data.url);
    }

    if (this.config.enableOpenGraph) {
      this.updateOpenGraph(data);
    }

    if (this.config.enableTwitterCards) {
      this.updateTwitterCards(data);
    }

    if (this.config.enableStructuredData) {
      this.updateStructuredData(data);
    }

    this.updateAlternateLanguages();
  }

  private updateTitle(title: string): void {
    const fullTitle = title === this.config.defaultTitle 
      ? title 
      : `${title} | ${this.config.siteName}`;
    
    document.title = fullTitle;
    this.setMetaTag('property', 'og:title', title);
    this.setMetaTag('name', 'twitter:title', title);
  }

  private updateDescription(description: string): void {
    this.setMetaTag('name', 'description', description);
    this.setMetaTag('property', 'og:description', description);
    this.setMetaTag('name', 'twitter:description', description);
  }

  private updateKeywords(keywords: string[]): void {
    this.setMetaTag('name', 'keywords', keywords.join(', '));
  }

  private updateCanonical(url?: string): void {
    const canonicalUrl = url || window.location.href;
    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    
    if (canonical) {
      canonical.href = canonicalUrl;
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = canonicalUrl;
      document.head.appendChild(link);
    }
  }

  private updateOpenGraph(data: PageSEOData): void {
    const ogData = {
      'og:site_name': this.config.siteName,
      'og:type': data.type || 'website',
      'og:url': data.url || window.location.href,
      'og:image': data.image || this.config.defaultImage,
      'og:image:width': '1200',
      'og:image:height': '630',
      'og:locale': 'en_US'
    };

    if (data.author) {
      ogData['article:author'] = data.author;
    }

    if (data.publishedTime) {
      ogData['article:published_time'] = data.publishedTime;
    }

    if (data.modifiedTime) {
      ogData['article:modified_time'] = data.modifiedTime;
    }

    if (data.section) {
      ogData['article:section'] = data.section;
    }

    if (data.tags) {
      data.tags.forEach(tag => {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'article:tag');
        meta.content = tag;
        document.head.appendChild(meta);
      });
    }

    Object.entries(ogData).forEach(([property, content]) => {
      this.setMetaTag('property', property, content);
    });

    if (this.config.facebookAppId) {
      this.setMetaTag('property', 'fb:app_id', this.config.facebookAppId);
    }
  }

  private updateTwitterCards(data: PageSEOData): void {
    const twitterData = {
      'twitter:card': 'summary_large_image',
      'twitter:site': this.config.twitterHandle || '@ziontechgroup',
      'twitter:creator': this.config.twitterHandle || '@ziontechgroup',
      'twitter:image': data.image || this.config.defaultImage,
      'twitter:image:alt': `${data.title} - ${this.config.siteName}`
    };

    Object.entries(twitterData).forEach(([name, content]) => {
      this.setMetaTag('name', name, content);
    });
  }

  private updateStructuredData(data: PageSEOData): void {
    // Remove existing structured data
    const existingLD = document.querySelector('script[type="application/ld+json"]');
    if (existingLD) {
      existingLD.remove();
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: this.config.siteName,
      url: this.config.siteUrl,
      logo: `${this.config.siteUrl}/images/logo.png`,
      description: this.config.defaultDescription,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-800-ZION-TECH',
        contactType: 'customer service',
        availableLanguage: ['English']
      },
      sameAs: [
        'https://twitter.com/ziontechgroup',
        'https://linkedin.com/company/ziontechgroup',
        'https://github.com/ziontechgroup'
      ]
    };

    // Add page-specific structured data
    if (data.type === 'article') {
      const articleData = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: data.title,
        description: data.description,
        image: data.image || this.config.defaultImage,
        author: {
          '@type': 'Person',
          name: data.author || this.config.siteName
        },
        publisher: {
          '@type': 'Organization',
          name: this.config.siteName,
          logo: {
            '@type': 'ImageObject',
            url: `${this.config.siteUrl}/images/logo.png`
          }
        },
        datePublished: data.publishedTime,
        dateModified: data.modifiedTime || data.publishedTime
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify([structuredData, articleData]);
      document.head.appendChild(script);
    } else {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }

  private updateAlternateLanguages(): void {
    // Add hreflang for international SEO
    const languages = [
      { code: 'en', region: 'us', url: this.config.siteUrl },
      { code: 'en', region: 'gb', url: this.config.siteUrl },
      { code: 'x-default', region: '', url: this.config.siteUrl }
    ];

    languages.forEach(lang => {
      const hreflang = lang.region ? `${lang.code}-${lang.region}` : lang.code;
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = hreflang;
      link.href = lang.url;
      document.head.appendChild(link);
    });
  }

  private setMetaTag(attribute: string, name: string, content: string): void {
    const selector = `meta[${attribute}="${name}"]`;
    let meta = document.querySelector(selector) as HTMLMetaElement;

    if (meta) {
      meta.content = content;
    } else {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, name);
      meta.content = content;
      document.head.appendChild(meta);
    }
  }

  public generateSitemap(): string {
    const pages = [
      { url: '', priority: '1.0', changefreq: 'weekly' },
      { url: '/about', priority: '0.8', changefreq: 'monthly' },
      { url: '/services', priority: '0.9', changefreq: 'weekly' },
      { url: '/portfolio', priority: '0.8', changefreq: 'monthly' },
      { url: '/blog', priority: '0.7', changefreq: 'weekly' },
      { url: '/contact', priority: '0.6', changefreq: 'monthly' }
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${this.config.siteUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`).join('\n')}
</urlset>`;

    return sitemap;
  }

  public generateRobotsTxt(): string {
    return `User-agent: *
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: ${this.config.siteUrl}/sitemap.xml

# Block access to admin areas
Disallow: /admin/
Disallow: /api/
Disallow: /private/

# Block access to sensitive files
Disallow: /*.json$
Disallow: /*.xml$
Disallow: /*.txt$

# Allow access to assets
Allow: /assets/
Allow: /images/
Allow: /css/
Allow: /js/`;
  }

  public trackPageView(page: string): void {
    // Google Analytics 4
    if (window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: page
      });
    }

    // Google Tag Manager
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_title: document.title,
        page_location: window.location.href,
        page_path: page
      });
    }
  }

  public trackEvent(action: string, category: string, label?: string, value?: number): void {
    if (window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
    }

    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'custom_event',
        event_action: action,
        event_category: category,
        event_label: label,
        event_value: value
      });
    }
  }

  public optimizeImages(): void {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add loading="lazy" for better performance
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }

      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }

      // Ensure alt text is present
      if (!img.hasAttribute('alt')) {
        img.setAttribute('alt', '');
        console.warn('Image missing alt text:', img.src);
      }
    });
  }

  public setupBreadcrumbs(breadcrumbs: Array<{ name: string; url: string }>): void {
    const breadcrumbData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: `${this.config.siteUrl}${crumb.url}`
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(breadcrumbData);
    document.head.appendChild(script);
  }

  public cleanup(): void {
    // Remove dynamically added meta tags and structured data
    const dynamicElements = document.querySelectorAll(
      'script[type="application/ld+json"], meta[property^="og:"], meta[name^="twitter:"]'
    );
    dynamicElements.forEach(el => el.remove());
  }
}

// Initialize SEO optimizer
export const seoOptimizer = SEOOptimizer.getInstance();

// Export utility functions
export const {
  updatePageSEO,
  generateSitemap,
  generateRobotsTxt,
  trackPageView,
  trackEvent,
  optimizeImages,
  setupBreadcrumbs
} = seoOptimizer;

// Global type declarations for analytics
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}
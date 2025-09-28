/**
 * Advanced SEO Manager
 * Comprehensive SEO optimization and management system for the Zion Tech Group website
 */

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
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
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

export interface SEOConfig {
  siteName: string;
  siteUrl: string;
  defaultImage: string;
  twitterHandle?: string;
  facebookAppId?: string;
  googleAnalyticsId?: string;
  googleTagManagerId?: string;
  defaultLanguage: string;
  defaultAuthor: string;
}

export interface SEOAuditResult {
  score: number;
  issues: SEOIssue[];
  recommendations: string[];
  metrics: SEOMetrics;
}

import { SEOIssue } from '../types/comprehensive';


export interface SEOMetrics {
  titleLength: number;
  descriptionLength: number;
  headingStructure: number;
  imageAltTexts: number;
  internalLinks: number;
  externalLinks: number;
  pageLoadSpeed: number;
  mobileFriendly: boolean;
  sslEnabled: boolean;
}

class AdvancedSEOManager {
  private config: SEOConfig;
  private currentSEO: SEOData | null = null;
  private auditResults: SEOAuditResult[] = [];

  constructor(config: SEOConfig) {
    this.config = config;
    this.initializeSEO();
  }

  private initializeSEO(): void {
    // Set up default meta tags
    this.setDefaultMetaTags();
    
    // Initialize structured data
    this.initializeStructuredData();
    
    // Set up analytics
    this.initializeAnalytics();
  }

  private setDefaultMetaTags(): void {
    const metaTags = [
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'robots', content: 'index, follow' },
      { name: 'language', content: this.config.defaultLanguage },
      { name: 'author', content: this.config.defaultAuthor },
      { name: 'generator', content: 'Zion Tech Group' },
      { name: 'theme-color', content: '#1a1a1a' },
      { name: 'msapplication-TileColor', content: '#1a1a1a' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }
    ];

    metaTags.forEach(tag => {
      this.setMetaTag(tag.name, tag.content);
    });
  }

  private initializeStructuredData(): void {
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": this.config.siteName,
      "url": this.config.siteUrl,
      "logo": `${this.config.siteUrl}${this.config.defaultImage}`,
      "description": "Advanced AI and IT Solutions Provider",
      "foundingDate": "2020",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-0123",
        "contactType": "customer service",
        "areaServed": "US",
        "availableLanguage": "English"
      },
      "sameAs": [
        "https://twitter.com/ziontechgroup",
        "https://linkedin.com/company/zion-tech-group",
        "https://github.com/zion-tech-group"
      ]
    };

    this.addStructuredData(organizationSchema);
  }

  private initializeAnalytics(): void {
    if (this.config.googleAnalyticsId) {
      this.loadGoogleAnalytics(this.config.googleAnalyticsId);
    }
    
    if (this.config.googleTagManagerId) {
      this.loadGoogleTagManager(this.config.googleTagManagerId);
    }
  }

  private loadGoogleAnalytics(gaId: string): void {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);

    script.onload = () => {
      const windowWithDataLayer = window as Window & { dataLayer: unknown[]; gtag: (...args: unknown[]) => void };
      windowWithDataLayer.dataLayer = windowWithDataLayer.dataLayer || [];
      function gtag(...args: unknown[]) { windowWithDataLayer.dataLayer.push(args); }
      windowWithDataLayer.gtag = gtag;
      gtag('js', new Date());
      gtag('config', gaId, {
        page_title: document.title,
        page_location: window.location.href
      });
    };
  }

  private loadGoogleTagManager(gtmId: string): void {
    const script = document.createElement('script');
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${gtmId}');
    `;
    document.head.appendChild(script);

    const noscript = document.createElement('noscript');
    noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    document.body.insertBefore(noscript, document.body.firstChild);
  }

  public updateSEO(seoData: Partial<SEOData>): void {
    this.currentSEO = { ...this.currentSEO, ...seoData } as SEOData;
    this.applySEO();
  }

  private applySEO(): void {
    if (!this.currentSEO) return;

    // Update title
    if (this.currentSEO.title) {
      document.title = this.currentSEO.title;
    }

    // Update meta tags
    this.setMetaTag('description', this.currentSEO.description);
    this.setMetaTag('keywords', this.currentSEO.keywords.join(', '));
    this.setMetaTag('robots', this.currentSEO.robots || 'index, follow');
    this.setMetaTag('language', this.currentSEO.language || this.config.defaultLanguage);
    this.setMetaTag('author', this.currentSEO.author || this.config.defaultAuthor);

    // Update canonical URL
    if (this.currentSEO.canonical) {
      this.setCanonicalUrl(this.currentSEO.canonical);
    }

    // Update Open Graph tags
    this.updateOpenGraphTags();

    // Update Twitter Card tags
    this.updateTwitterCardTags();

    // Update structured data
    if (this.currentSEO.structuredData) {
      this.addStructuredData(this.currentSEO.structuredData);
    }
  }

  private setMetaTag(name: string, content: string): void {
    let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = name;
      document.head.appendChild(meta);
    }
    meta.content = content;
  }

  private setCanonicalUrl(url: string): void {
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }

  private updateOpenGraphTags(): void {
    if (!this.currentSEO) return;

    const ogTags = [
      { property: 'og:title', content: this.currentSEO.ogTitle || this.currentSEO.title },
      { property: 'og:description', content: this.currentSEO.ogDescription || this.currentSEO.description },
      { property: 'og:image', content: this.currentSEO.ogImage || `${this.config.siteUrl}${this.config.defaultImage}` },
      { property: 'og:url', content: this.currentSEO.canonical || window.location.href },
      { property: 'og:type', content: this.currentSEO.ogType || 'website' },
      { property: 'og:site_name', content: this.config.siteName },
      { property: 'og:locale', content: this.currentSEO.language || this.config.defaultLanguage }
    ];

    ogTags.forEach(tag => {
      this.setMetaProperty(tag.property, tag.content);
    });
  }

  private updateTwitterCardTags(): void {
    if (!this.currentSEO) return;

    const twitterTags = [
      { name: 'twitter:card', content: this.currentSEO.twitterCard || 'summary_large_image' },
      { name: 'twitter:title', content: this.currentSEO.twitterTitle || this.currentSEO.title },
      { name: 'twitter:description', content: this.currentSEO.twitterDescription || this.currentSEO.description },
      { name: 'twitter:image', content: this.currentSEO.twitterImage || this.currentSEO.ogImage || `${this.config.siteUrl}${this.config.defaultImage}` }
    ];

    if (this.config.twitterHandle) {
      twitterTags.push({ name: 'twitter:site', content: this.config.twitterHandle });
    }

    twitterTags.forEach(tag => {
      this.setMetaTag(tag.name, tag.content);
    });
  }

  private setMetaProperty(property: string, content: string): void {
    let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('property', property);
      document.head.appendChild(meta);
    }
    meta.content = content;
  }

  private addStructuredData(data: Record<string, unknown>): void {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    script.id = `structured-data-${Date.now()}`;
    document.head.appendChild(script);
  }

  public auditPage(): SEOAuditResult {
    const issues: SEOIssue[] = [];
    const recommendations: string[] = [];
    let score = 100;

    // Check title
    const title = document.title;
    if (!title) {
      issues.push({ 
        type: 'error', 
        message: 'Missing page title',
        category: 'content',
        impact: 'high'
      });
      score -= 20;
    } else if (title.length < 30) {
      issues.push({ 
        type: 'warning', 
        message: 'Title too short (recommended: 30-60 characters)', 
        suggestion: 'Add more descriptive words',
        category: 'content',
        impact: 'medium'
      });
      score -= 5;
    } else if (title.length > 60) {
      issues.push({ 
        type: 'warning', 
        message: 'Title too long (recommended: 30-60 characters)', 
        suggestion: 'Shorten the title',
        category: 'content',
        impact: 'medium'
      });
      score -= 5;
    }

    // Check description
    const description = this.getMetaContent('description');
    if (!description) {
      issues.push({ 
        type: 'error', 
        message: 'Missing meta description',
        category: 'content',
        impact: 'high'
      });
      score -= 15;
    } else if (description.length < 120) {
      issues.push({ 
        type: 'warning', 
        message: 'Description too short (recommended: 120-160 characters)', 
        suggestion: 'Add more details about the page',
        category: 'content',
        impact: 'medium'
      });
      score -= 3;
    } else if (description.length > 160) {
      issues.push({ 
        type: 'warning', 
        message: 'Description too long (recommended: 120-160 characters)', 
        suggestion: 'Shorten the description',
        category: 'content',
        impact: 'medium'
      });
      score -= 3;
    }

    // Check headings
    const h1Count = document.querySelectorAll('h1').length;
    if (h1Count === 0) {
      issues.push({ 
        type: 'error', 
        message: 'Missing H1 heading',
        category: 'content',
        impact: 'high'
      });
      score -= 10;
    } else if (h1Count > 1) {
      issues.push({ 
        type: 'warning', 
        message: 'Multiple H1 headings found', 
        suggestion: 'Use only one H1 per page',
        category: 'content',
        impact: 'medium'
      });
      score -= 5;
    }

    // Check images
    const images = document.querySelectorAll('img');
    let imagesWithoutAlt = 0;
    images.forEach(img => {
      if (!img.alt) {
        imagesWithoutAlt++;
      }
    });

    if (imagesWithoutAlt > 0) {
      issues.push({ 
        type: 'warning', 
        message: `${imagesWithoutAlt} images missing alt text`, 
        suggestion: 'Add descriptive alt text to all images',
        category: 'accessibility',
        impact: 'medium'
      });
      score -= imagesWithoutAlt * 2;
    }

    // Check internal links
    const internalLinks = document.querySelectorAll('a[href^="/"], a[href*="' + this.config.siteUrl + '"]');
    if (internalLinks.length < 3) {
      recommendations.push('Add more internal links to improve site structure');
    }

    // Check external links
    const externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="' + this.config.siteUrl + '"])');
    externalLinks.forEach(link => {
      if (!(link as HTMLAnchorElement).rel.includes('nofollow') && !(link as HTMLAnchorElement).rel.includes('noopener')) {
        recommendations.push('Add rel="nofollow noopener" to external links');
      }
    });

    // Generate recommendations based on issues
    if (issues.length > 0) {
      recommendations.push('Fix the issues above to improve SEO score');
    }

    const metrics: SEOMetrics = {
      titleLength: title.length,
      descriptionLength: description.length,
      headingStructure: document.querySelectorAll('h1, h2, h3, h4, h5, h6').length,
      imageAltTexts: images.length - imagesWithoutAlt,
      internalLinks: internalLinks.length,
      externalLinks: externalLinks.length,
      pageLoadSpeed: performance.now(),
      mobileFriendly: this.isMobileFriendly(),
      sslEnabled: location.protocol === 'https:'
    };

    const result: SEOAuditResult = {
      score: Math.max(0, score),
      issues,
      recommendations,
      metrics
    };

    this.auditResults.push(result);
    return result;
  }

  private getMetaContent(name: string): string {
    const meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
    return meta ? meta.content : '';
  }

  private isMobileFriendly(): boolean {
    const viewport = document.querySelector('meta[name="viewport"]') as HTMLMetaElement;
    return viewport ? viewport.content.includes('width=device-width') : false;
  }

  public generateSitemap(): string {
    const pages = [
      { url: '/', priority: '1.0', changefreq: 'daily' },
      { url: '/about', priority: '0.8', changefreq: 'monthly' },
      { url: '/services', priority: '0.9', changefreq: 'weekly' },
      { url: '/portfolio', priority: '0.8', changefreq: 'monthly' },
      { url: '/blog', priority: '0.7', changefreq: 'weekly' },
      { url: '/contact', priority: '0.6', changefreq: 'monthly' }
    ];

    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    pages.forEach(page => {
      sitemap += '  <url>\n';
      sitemap += `    <loc>${this.config.siteUrl}${page.url}</loc>\n`;
      sitemap += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
      sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
      sitemap += `    <priority>${page.priority}</priority>\n`;
      sitemap += '  </url>\n';
    });
    
    sitemap += '</urlset>';
    return sitemap;
  }

  public getAuditHistory(): SEOAuditResult[] {
    return [...this.auditResults];
  }

  public getCurrentSEO(): SEOData | null {
    return this.currentSEO;
  }
}

// Default configuration
const defaultConfig: SEOConfig = {
  siteName: 'Zion Tech Group',
  siteUrl: 'https://ziontechgroup.com',
  defaultImage: '/images/og-image.jpg',
  twitterHandle: '@ziontechgroup',
  defaultLanguage: 'en-US',
  defaultAuthor: 'Zion Tech Group'
};

// Export singleton instance
export const seoManager = new AdvancedSEOManager(defaultConfig);

// Export utility functions
export const updatePageSEO = (seoData: Partial<SEOData>): void => {
  seoManager.updateSEO(seoData);
};

export const auditPageSEO = (): SEOAuditResult => {
  return seoManager.auditPage();
};

export const generateSitemap = (): string => {
  return seoManager.generateSitemap();
};

export default seoManager;
'use client';
/**
 * Advanced SEO Optimization Utility;
 * Provides comprehensive SEO enhancements and monitoring;
 */
interface SEOConfig {
  siteName: string;
  siteUrl: string;
  defaultTitle: string;
  defaultDescription: string;
  defaultImage: string;
  twitterHandle?: string;
  facebookAppId?: string;
  googleAnalyticsId?: string;
  googleTagManagerId?: string;
}
interface PageSEOData {
  title: string;
  description: string;
  keywords: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  nofollow?: boolean;
}
class SEOOptimizer {
  private config: SEOConfig;
  private currentPageData: PageSEOData | null = null;
  constructor(config: SEOConfig) {
    this.config = config;
  }
  /**
   * Initialize SEO optimization;
   */
  init(): void {
    this.setupStructuredData();
    this.setupCanonicalUrls();
    // Meta tags are set individually;
    this.setupPerformanceMonitoring();
  }
  /**
   * Set page-specific SEO data;
   */
  setPageData(data: PageSEOData): void {
    this.currentPageData = data;
    this.updateMetaTags();
    this.updateStructuredData();
  }
  /**
   * Generate optimized title;
   */
  generateTitle(pageTitle?: string): string {
        return title.includes(this.config.siteName) 
      ? title;
      : `${title} | ${this.config.siteName}`;
  }
  /**
   * Generate optimized description;
   */
  generateDescription(pageDescription?: string): string {
        return description.length > 160;
      ? description.substring(0, 157) + '...' 
      : description;
  }
  /**
   * Generate keywords string;
   */
  generateKeywords(pageKeywords?: string[]): string {
        return keywords.join(', ');
  }
  /**
   * Update meta tags;
   */
  private updateMetaTags(): void {
    if (!this.currentPageData) return;
                        // Update title;
    document.title = title;
    // Update or create meta tags;
    this.setMetaTag('description', description);
    this.setMetaTag('keywords', keywords);
    this.setMetaTag('author', this.currentPageData.author || this.config.siteName);
    this.setMetaTag('robots', this.getRobotsContent());
    // Open Graph tags;
    this.setMetaTag('og:title', title, 'property');
    this.setMetaTag('og:description', description, 'property');
    this.setMetaTag('og:image', image, 'property');
    this.setMetaTag('og:url', url, 'property');
    this.setMetaTag('og:type', this.currentPageData.type || 'website', 'property');
    this.setMetaTag('og:site_name', this.config.siteName, 'property');
    // Twitter Card tags;
    if (this.config.twitterHandle) {
      this.setMetaTag('twitter:card', 'summary_large_image');
      this.setMetaTag('twitter:site', `@${this.config.twitterHandle}`);
      this.setMetaTag('twitter:title', title);
      this.setMetaTag('twitter:description', description);
      this.setMetaTag('twitter:image', image);
    }
    // Additional meta tags;
    this.setMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    this.setMetaTag('theme-color', '#1e40af');
    this.setMetaTag('msapplication-TileColor', '#1e40af');
  }
  /**
   * Set meta tag;
   */
  private setMetaTag(name: string, content: string, attribute: string = 'name'): void {
        if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, name);
      document.head.appendChild(meta);
    }
    meta.content = content;
  }
  /**
   * Get robots content;
   */
  private getRobotsContent(): string {
    if (!this.currentPageData) return 'index, follow';
        if (!this.currentPageData.noindex) {
      directives.push('noindex');
    }
    if (!this.currentPageData.nofollow) {
      directives.push('follow');
    } else {
      directives.push('nofollow');
    }
    return directives.join(', ');
  }
  /**
   * Setup structured data;
   */
  private setupStructuredData(): void {
        this.addStructuredData(structuredData);
  }
  /**
   * Update structured data for current page;
   */
  private updateStructuredData(): void {
    if (!this.currentPageData) return;
        // Add article-specific properties;
    if (this.currentPageData.type === 'article') {
      Object.assign(structuredData, {
        author: {
          '@type': 'Person',
          name: this.currentPageData.author || this.config.siteName;
        },
        datePublished: this.currentPageData.publishedTime,
        dateModified: this.currentPageData.modifiedTime,
        articleSection: this.currentPageData.section,
        keywords: this.generateKeywords()
      });
    }
    this.addStructuredData(structuredData);
  }
  /**
   * Add structured data to page;
   */
  private addStructuredData(data: unknown): void {
        script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }
  /**
   * Setup canonical URLs;
   */
  private setupCanonicalUrls(): void {
        canonical.rel = 'canonical';
    canonical.href = window.location.href;
    document.head.appendChild(canonical);
  }
  /**
   * Setup performance monitoring for SEO;
   */
  private setupPerformanceMonitoring(): void {
    // Monitor Core Web Vitals for SEO impact;
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor LCP (Largest Contentful Paint)
      new PerformanceObserver((list) => {
                        if (lastEntry.startTime > 4000) { // Poor LCP;
          this.trackSEOMetric('poor_lcp', lastEntry.startTime);
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] });
      // Monitor CLS (Cumulative Layout Shift)
            new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        if (clsValue > 0.25) { // Poor CLS;
          this.trackSEOMetric('poor_cls', clsValue);
        }
      }).observe({ entryTypes: ['layout-shift'] });
    }
  }
  /**
   * Track SEO-related metrics;
   */
  private trackSEOMetric(metric: string, value: number): void {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'seo_metric', {
        metric_name: metric,
        metric_value: Math.round(value),
        event_category: 'seo'
      });
    }
  }
  /**
   * Generate sitemap data;
   */
  generateSitemapData(): Array<{ url: string; lastmod: string; changefreq: string; priority: number }> {
    // This would typically come from your CMS or routing system;
    return [
      {
        url: this.config.siteUrl,
        lastmod: new Date().toISOString(),
        changefreq: 'daily',
        priority: '1.0'
      }
    ];
  }
  /**
   * Generate robots.txt content;
   */
  generateRobotsTxt(): string {
    return `User-agent: *
Allow: /
Sitemap: ${this.config.siteUrl}/sitemap.xml;
# Disallow admin and private areas;
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /static/`;
  }
  /**
   * Check for SEO issues;
   */
  checkSEOIssues(): string[] {
    const issues: string[] = [];
    // Check title length;
        if (title.length < 30) {
      issues.push('Title is too short (less than 30 characters)');
    } else if (title.length > 60) {
      issues.push('Title is too long (more than 60 characters)');
    }
    // Check description length;
        if (!description) {
      issues.push('Missing meta description');
    } else if (description.length < 120) {
      issues.push('Description is too short (less than 120 characters)');
    } else if (description.length > 160) {
      issues.push('Description is too long (more than 160 characters)');
    }
    // Check for images without alt text;
        images.forEach((img, index) => {
      if (!img.alt) {
        issues.push(`Image ${index + 1} is missing alt text`);
      }
    });
    // Check for heading structure;
        if (h1s.length === 0) {
      issues.push('Page is missing H1 tag');
    } else if (h1s.length > 1) {
      issues.push('Page has multiple H1 tags');
    }
    return issues;
  }
  /**
   * Get SEO score;
   */
  getSEOScore(): number {
        const _maxIssues = 10; // Maximum possible issues;
        return Math.round(score);
  }
}
// Default configuration;
const defaultConfig: SEOConfig = {
  siteName: 'Zion Tech Group',
  siteUrl: 'https://zion.app',
  defaultTitle: 'Advanced AI and IT Solutions',
  defaultDescription: 'Zion Tech Group provides cutting-edge AI and IT solutions for businesses. Transform your operations with our innovative technology and expert consulting services.',
  defaultImage: 'https://zion.app/og-image.jpg',
  twitterHandle: 'ZionTechGroup',
  googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID,
  googleTagManagerId: process.env.GOOGLE_TAG_MANAGER_ID;
}
export export default seoOptimizer;
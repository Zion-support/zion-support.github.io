/**
 * SEO Optimization Utilities
 * Advanced SEO monitoring and optimization tools
 */

export interface SEOMetrics {
  titleLength: number;
  descriptionLength: number;
  headingStructure: number;
  imageAltTexts: number;
  internalLinks: number;
  externalLinks: number;
  metaTags: number;
  structuredData: number;
  pageSpeed: number;
  mobileFriendly: boolean;
}

export interface SEOIssue {
  type: 'error' | 'warning' | 'info';
  element: string;
  message: string;
  suggestion: string;
  impact: 'high' | 'medium' | 'low';
}

export interface StructuredDataItem {
  type: string;
  data: Record<string, unknown>;
}

class SEOOptimizer {
  private metrics: SEOMetrics | null = null;
  private issues: SEOIssue[] = [];
  private structuredData: StructuredDataItem[] = [];

  constructor() {
    this.initializeSEOMonitoring();
  }

  private initializeSEOMonitoring(): void {
    if (typeof window === 'undefined') {
      return;
    }

    this.analyzeCurrentPage();
    this.generateStructuredData();
    this.optimizeMetaTags();
  }

  private analyzeCurrentPage(): void {
    this.metrics = {
      titleLength: this.getTitleLength(),
      descriptionLength: this.getDescriptionLength(),
      headingStructure: this.analyzeHeadingStructure(),
      imageAltTexts: this.countImageAltTexts(),
      internalLinks: this.countInternalLinks(),
      externalLinks: this.countExternalLinks(),
      metaTags: this.countMetaTags(),
      structuredData: this.countStructuredData(),
      pageSpeed: this.estimatePageSpeed(),
      mobileFriendly: this.checkMobileFriendly()
    };

    this.generateSEOIssues();
  }

  private getTitleLength(): number {
    const title = document.title;
    return title ? title.length : 0;
  }

  private getDescriptionLength(): number {
    const metaDescription = document.querySelector('meta[name="description"]');
    return metaDescription ? (metaDescription.getAttribute('content') || '').length : 0;
  }

  private analyzeHeadingStructure(): number {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let score = 100;

    // Check for missing h1
    if (document.querySelectorAll('h1').length === 0) {
      score -= 30;
      this.addIssue({
        type: 'error',
        element: 'h1',
        message: 'No h1 heading found',
        suggestion: 'Add a main h1 heading for better SEO',
        impact: 'high'
      });
    }

    // Check for multiple h1s
    if (document.querySelectorAll('h1').length > 1) {
      score -= 20;
      this.addIssue({
        type: 'warning',
        element: 'h1',
        message: 'Multiple h1 headings found',
        suggestion: 'Use only one h1 per page for better SEO',
        impact: 'medium'
      });
    }

    // Check heading hierarchy
    let previousLevel = 0;
    headings.forEach((heading) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > previousLevel + 1) {
        score -= 10;
        this.addIssue({
          type: 'warning',
          element: heading.tagName,
          message: `Heading level ${level} follows level ${previousLevel}`,
          suggestion: 'Maintain proper heading hierarchy for better SEO',
          impact: 'medium'
        });
      }
      previousLevel = level;
    });

    return Math.max(0, score);
  }

  private countImageAltTexts(): number {
    const images = document.querySelectorAll('img');
    let altTextCount = 0;

    images.forEach((img) => {
      if (img.getAttribute('alt')) {
        altTextCount++;
      } else {
        this.addIssue({
          type: 'warning',
          element: 'img',
          message: 'Image missing alt text',
          suggestion: 'Add alt attribute for better SEO and accessibility',
          impact: 'medium'
        });
      }
    });

    return altTextCount;
  }

  private countInternalLinks(): number {
    const links = document.querySelectorAll('a[href]');
    let internalCount = 0;
    const currentDomain = window.location.hostname;

    links.forEach((link) => {
      const href = link.getAttribute('href');
      if (href) {
        try {
          const url = new URL(href, window.location.origin);
          if (url.hostname === currentDomain) {
            internalCount++;
          }
        } catch {
          // Relative URL
          if (href.startsWith('/') || href.startsWith('./') || href.startsWith('../')) {
            internalCount++;
          }
        }
      }
    });

    return internalCount;
  }

  private countExternalLinks(): number {
    const links = document.querySelectorAll('a[href]');
    let externalCount = 0;
    const currentDomain = window.location.hostname;

    links.forEach((link) => {
      const href = link.getAttribute('href');
      if (href) {
        try {
          const url = new URL(href, window.location.origin);
          if (url.hostname !== currentDomain) {
            externalCount++;
          }
        } catch {
          // Skip relative URLs
        }
      }
    });

    return externalCount;
  }

  private countMetaTags(): number {
    const metaTags = document.querySelectorAll('meta');
    return metaTags.length;
  }

  private countStructuredData(): number {
    const structuredData = document.querySelectorAll('script[type="application/ld+json"]');
    return structuredData.length;
  }

  private estimatePageSpeed(): number {
    // This is a simplified estimation - in a real implementation, you'd use actual performance metrics
    const resources = document.querySelectorAll('img, script, link[rel="stylesheet"]');
    const resourceCount = resources.length;
    
    // Estimate based on resource count (simplified)
    if (resourceCount < 10) return 90;
    if (resourceCount < 20) return 75;
    if (resourceCount < 30) return 60;
    return 45;
  }

  private checkMobileFriendly(): boolean {
    const viewport = document.querySelector('meta[name="viewport"]');
    return viewport !== null;
  }

  private generateSEOIssues(): void {
    this.issues = [];

    // Title issues
    if (this.metrics!.titleLength === 0) {
      this.addIssue({
        type: 'error',
        element: 'title',
        message: 'No page title found',
        suggestion: 'Add a descriptive title tag',
        impact: 'high'
      });
    } else if (this.metrics!.titleLength < 30) {
      this.addIssue({
        type: 'warning',
        element: 'title',
        message: 'Title too short',
        suggestion: 'Make title at least 30 characters for better SEO',
        impact: 'medium'
      });
    } else if (this.metrics!.titleLength > 60) {
      this.addIssue({
        type: 'warning',
        element: 'title',
        message: 'Title too long',
        suggestion: 'Keep title under 60 characters to avoid truncation',
        impact: 'medium'
      });
    }

    // Description issues
    if (this.metrics!.descriptionLength === 0) {
      this.addIssue({
        type: 'error',
        element: 'meta description',
        message: 'No meta description found',
        suggestion: 'Add a meta description tag',
        impact: 'high'
      });
    } else if (this.metrics!.descriptionLength < 120) {
      this.addIssue({
        type: 'warning',
        element: 'meta description',
        message: 'Description too short',
        suggestion: 'Make description at least 120 characters',
        impact: 'medium'
      });
    } else if (this.metrics!.descriptionLength > 160) {
      this.addIssue({
        type: 'warning',
        element: 'meta description',
        message: 'Description too long',
        suggestion: 'Keep description under 160 characters',
        impact: 'medium'
      });
    }

    // Mobile friendliness
    if (!this.metrics!.mobileFriendly) {
      this.addIssue({
        type: 'error',
        element: 'viewport',
        message: 'No viewport meta tag found',
        suggestion: 'Add viewport meta tag for mobile optimization',
        impact: 'high'
      });
    }
  }

  private generateStructuredData(): void {
    // Generate basic structured data for the page
    const structuredData: StructuredDataItem[] = [];

    // Organization data
    structuredData.push({
      type: 'Organization',
      data: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Zion Tech Group',
        url: window.location.origin,
        logo: `${window.location.origin}/logo.png`,
        description: 'Leading AI & Technology Solutions Provider',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'US'
        },
        sameAs: [
          'https://linkedin.com/company/zion-tech-group',
          'https://twitter.com/ziontechgroup'
        ]
      }
    });

    // WebSite data
    structuredData.push({
      type: 'WebSite',
      data: {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Zion Tech Group',
        url: window.location.origin,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${window.location.origin}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      }
    });

    // Breadcrumb data
    const breadcrumbs = this.generateBreadcrumbs();
    if (breadcrumbs.length > 0) {
      structuredData.push({
        type: 'BreadcrumbList',
        data: {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbs
        }
      });
    }

    this.structuredData = structuredData;
    this.injectStructuredData();
  }

  private generateBreadcrumbs(): Array<{ '@type': string; position: number; name: string; item: string }> {
    const pathSegments = window.location.pathname.split('/').filter(segment => segment);
    const breadcrumbs = [];

    breadcrumbs.push({
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: window.location.origin
    });

    let currentPath = window.location.origin;
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      breadcrumbs.push({
        '@type': 'ListItem',
        position: index + 2,
        name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
        item: currentPath
      });
    });

    return breadcrumbs;
  }

  private injectStructuredData(): void {
    this.structuredData.forEach((item) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(item.data);
      document.head.appendChild(script);
    });
  }

  private optimizeMetaTags(): void {
    // Ensure essential meta tags are present
    this.ensureMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    this.ensureMetaTag('robots', 'index, follow');
    this.ensureMetaTag('author', 'Zion Tech Group');
    this.ensureMetaTag('theme-color', '#3b82f6');
  }

  private ensureMetaTag(name: string, content: string): void {
    let meta = document.querySelector(`meta[name="${name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  }

  private addIssue(issue: SEOIssue): void {
    this.issues.push(issue);
  }

  public getMetrics(): SEOMetrics | null {
    return this.metrics;
  }

  public getIssues(): SEOIssue[] {
    return [...this.issues];
  }

  public getStructuredData(): StructuredDataItem[] {
    return [...this.structuredData];
  }

  public getSEOScore(): number {
    if (!this.metrics) return 0;

    let score = 100;

    // Title scoring
    if (this.metrics.titleLength === 0) score -= 20;
    else if (this.metrics.titleLength < 30 || this.metrics.titleLength > 60) score -= 10;

    // Description scoring
    if (this.metrics.descriptionLength === 0) score -= 20;
    else if (this.metrics.descriptionLength < 120 || this.metrics.descriptionLength > 160) score -= 10;

    // Heading structure scoring
    score += (this.metrics.headingStructure - 100) * 0.1;

    // Image alt texts scoring
    const images = document.querySelectorAll('img').length;
    if (images > 0) {
      const altTextRatio = this.metrics.imageAltTexts / images;
      score += (altTextRatio - 1) * 10;
    }

    // Mobile friendliness scoring
    if (!this.metrics.mobileFriendly) score -= 15;

    // Structured data bonus
    if (this.metrics.structuredData > 0) score += 5;

    return Math.min(100, Math.max(0, score));
  }

  public generateSitemap(): string {
    const pages = this.getInternalPages();
    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    pages.forEach(page => {
      sitemap += '  <url>\n';
      sitemap += `    <loc>${page.url}</loc>\n`;
      sitemap += `    <lastmod>${page.lastmod}</lastmod>\n`;
      sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
      sitemap += `    <priority>${page.priority}</priority>\n`;
      sitemap += '  </url>\n';
    });

    sitemap += '</urlset>';
    return sitemap;
  }

  private getInternalPages(): Array<{url: string, lastmod: string, changefreq: string, priority: string}> {
    // This would typically be generated from your routing system
    return [
      {
        url: window.location.origin,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'daily',
        priority: '1.0'
      }
    ];
  }
}

export const seoOptimizer = new SEOOptimizer();
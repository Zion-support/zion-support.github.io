/**
 * Advanced SEO Optimizer
 * Comprehensive SEO optimization utilities for the Zion Tech Group website
 */

interface SEOConfig {
  siteName: string;
  siteUrl: string;
  defaultTitle: string;
  defaultDescription: string;
  defaultImage: string;
  twitterHandle: string;
  facebookAppId: string;
  googleAnalyticsId: string;
  googleTagManagerId: string;
  enableStructuredData: boolean;
  enableSitemap: boolean;
  enableRobotsTxt: boolean;
  enableCanonical: boolean;
  enableOpenGraph: boolean;
  enableTwitterCards: boolean;
  enableMetaOptimization: boolean;
  enableSitemapGeneration: boolean;
  enableCanonicalUrls: boolean;
  enableSchemaMarkup: boolean;
  enablePerformanceSEO: boolean;
  enableAccessibilitySEO: boolean;
}

interface PageSEOData {
  title: string;
  description: string;
  keywords: string[];
  image: string;
  url: string;
  canonical: string;
  noindex: boolean;
  nofollow: boolean;
  structuredData: Record<string, unknown>;
  openGraph: {
    title: string;
    description: string;
    image: string;
    url: string;
    type: string;
    siteName: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    image: string;
    creator: string;
    site: string;
  };
}

interface SEOAuditResult {
  score: number;
  issues: Array<{
    type: 'error' | 'warning' | 'info';
    message: string;
    suggestion: string;
    priority: 'high' | 'medium' | 'low';
  }>;
  recommendations: string[];
  metrics: {
    titleLength: number;
    descriptionLength: number;
    keywordDensity: number;
    headingStructure: boolean;
    imageAltText: boolean;
    internalLinks: number;
    externalLinks: number;
  };
}

const defaultConfig: SEOConfig = {
  siteName: 'Zion Tech Group',
  siteUrl: 'https://ziontechgroup.com',
  defaultTitle: 'Zion Tech Group - Advanced AI and IT Solutions',
  defaultDescription: 'Leading provider of AI-powered IT solutions, cloud services, and digital transformation consulting for enterprises worldwide.',
  defaultImage: 'https://ziontechgroup.com/og-image.jpg',
  twitterHandle: '@ZionTechGroup',
  facebookAppId: '',
  googleAnalyticsId: '',
  googleTagManagerId: '',
  enableStructuredData: true,
  enableSitemap: true,
  enableRobotsTxt: true,
  enableCanonical: true,
  enableOpenGraph: true,
  enableTwitterCards: true,
};

export class AdvancedSEOOptimizer {
  private config: SEOConfig;
  private pages: Map<string, PageSEOData> = new Map();

  constructor(config: Partial<SEOConfig> = {}) {
    this.config = { ...defaultConfig, ...config };
  }

  /**
   * Generate comprehensive SEO data for a page
   */
  generatePageSEO(pageData: Partial<PageSEOData>): PageSEOData {
    const url = pageData.url || window.location.href;
    const title = pageData.title || this.config.defaultTitle;
    const description = pageData.description || this.config.defaultDescription;
    const image = pageData.image || this.config.defaultImage;

    const seoData: PageSEOData = {
      title: this.optimizeTitle(title),
      description: this.optimizeDescription(description),
      keywords: pageData.keywords || this.extractKeywords(title, description),
      image,
      url,
      canonical: this.generateCanonicalUrl(url),
      noindex: pageData.noindex || false,
      nofollow: pageData.nofollow || false,
      structuredData: this.generateStructuredData(pageData),
      openGraph: this.generateOpenGraphData(title, description, image, url) as any,
      twitter: this.generateTwitterCardData(title, description, image) as any,
    };

    this.pages.set(url, seoData);
    return seoData;
  }

  /**
   * Optimize page title for SEO
   */
  private optimizeTitle(title: string): string {
    // Ensure title is within optimal length (50-60 characters)
    if (title.length > 60) {
      title = title.substring(0, 57) + '...';
    }
    
    // Add site name if not present
    if (!title.includes(this.config.siteName)) {
      title = `${title} | ${this.config.siteName}`;
    }

    return title;
  }

  /**
   * Optimize meta description for SEO
   */
  private optimizeDescription(description: string): string {
    // Ensure description is within optimal length (150-160 characters)
    if (description.length > 160) {
      description = description.substring(0, 157) + '...';
    } else if (description.length < 120) {
      // Add call-to-action if description is too short
      description += ' Contact us for a free consultation.';
    }

    return description;
  }

  /**
   * Extract keywords from title and description
   */
  private extractKeywords(title: string, description: string): string[] {
    const text = `${title} ${description}`.toLowerCase();
    const commonWords = ['the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'a', 'an'];
    
    const words = text
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(word => word.length > 3 && !commonWords.includes(word))
      .reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

    return Object.entries(words)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([word]) => word);
  }

  /**
   * Generate canonical URL
   */
  private generateCanonicalUrl(url: string): string {
    if (!this.config.enableCanonical) return '';
    
    // Remove query parameters and fragments
    const canonical = url.split('?')[0].split('#')[0];
    return canonical;
  }

  /**
   * Generate structured data for the page
   */
  private generateStructuredData(pageData: Partial<PageSEOData>): Record<string, unknown> {
    if (!this.config.enableStructuredData) return {};

    const baseStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: this.config.siteName,
      url: this.config.siteUrl,
      logo: `${this.config.siteUrl}/logo.png`,
      description: this.config.defaultDescription,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-555-0123',
        contactType: 'customer service',
        availableLanguage: 'English'
      },
      sameAs: [
        'https://twitter.com/ZionTechGroup',
        'https://linkedin.com/company/zion-tech-group',
        'https://github.com/Zion-Holdings'
      ]
    };

    // Add page-specific structured data
    if (pageData.structuredData) {
      return { ...baseStructuredData, ...pageData.structuredData };
    }

    return baseStructuredData;
  }

  /**
   * Generate Open Graph data
   */
  private generateOpenGraphData(title: string, description: string, image: string, url: string) {
    if (!this.config.enableOpenGraph) return {};

    return {
      title: this.optimizeTitle(title),
      description: this.optimizeDescription(description),
      image,
      url,
      type: 'website',
      siteName: this.config.siteName,
    };
  }

  /**
   * Generate Twitter Card data
   */
  private generateTwitterCardData(title: string, description: string, image: string) {
    if (!this.config.enableTwitterCards) return {};

    return {
      card: 'summary_large_image',
      title: this.optimizeTitle(title),
      description: this.optimizeDescription(description),
      image,
      creator: this.config.twitterHandle,
      site: this.config.twitterHandle,
    };
=======
  canonicalUrl: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  schemaMarkup?: any;
  robots?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

class AdvancedSEOOptimizer {
  private config: SEOConfig;
  private isInitialized = false;
  private currentPageData: PageSEOData | null = null;

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
      enablePerformanceSEO: true,
      enableAccessibilitySEO: true,
      ...config
    };
  }

  /**
   * Initialize the SEO optimizer
   */
  public async initialize(): Promise<void> {
    if (this.isInitialized) return;

    try {
      if (this.config.enableMetaOptimization) {
        this.optimizeMetaTags();
      }

      if (this.config.enableStructuredData) {
        this.addStructuredData();
      }

      if (this.config.enableSitemapGeneration) {
        await this.generateSitemap();
      }

      if (this.config.enableRobotsTxt) {
        await this.generateRobotsTxt();
      }

      if (this.config.enablePerformanceSEO) {
        this.optimizeForPerformance();
      }

      if (this.config.enableAccessibilitySEO) {
        this.optimizeForAccessibility();
      }

      this.isInitialized = true;
      console.log('🔍 Advanced SEO Optimizer initialized');
    } catch (error) {
      console.error('Error initializing SEO optimizer:', error);
    }
  }

  /**
   * Optimize meta tags for better SEO
   */
  private optimizeMetaTags(): void {
    if (typeof document === 'undefined') return;

    // Ensure viewport meta tag
    this.ensureMetaTag('viewport', 'width=device-width, initial-scale=1.0');

    // Add charset if not present
    if (!document.querySelector('meta[charset]')) {
      const charset = document.createElement('meta');
      charset.setAttribute('charset', 'utf-8');
      document.head.insertBefore(charset, document.head.firstChild);
    }

    // Add theme color
    this.ensureMetaTag('theme-color', '#667eea');

    // Add mobile web app capabilities
    this.ensureMetaTag('apple-mobile-web-app-capable', 'yes');
    this.ensureMetaTag('apple-mobile-web-app-status-bar-style', 'default');
    this.ensureMetaTag('apple-mobile-web-app-title', 'Zion Tech Group');
  }

  /**
   * Ensure a meta tag exists with the given name and content
   */
  private ensureMetaTag(name: string, content: string): void {
    if (typeof document === 'undefined') return;

    let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = name;
      document.head.appendChild(meta);
    }
    meta.content = content;
  }

  /**
   * Add structured data for better search engine understanding
   */
  private addStructuredData(): void {
    if (typeof document === 'undefined') return;

    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "description": "Leading AI and Technology Solutions Provider",
      "url": "https://zion.app",
      "logo": "https://zion.app/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-0123",
        "contactType": "customer service",
        "areaServed": "US",
        "availableLanguage": "English"
      },
      "sameAs": [
        "https://linkedin.com/company/zion-tech-group",
        "https://twitter.com/ziontechgroup"
      ],
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

  /**
   * Add structured data script to the page
   */
  private addStructuredDataScript(data: any): void {
    if (typeof document === 'undefined') return;

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  /**
   * Generate sitemap for better crawling
   */
  private async generateSitemap(): Promise<void> {
    if (typeof window === 'undefined') return;

    const pages = [
      { url: '/', priority: 1.0, changefreq: 'daily' },
      { url: '/about', priority: 0.8, changefreq: 'monthly' },
      { url: '/services', priority: 0.9, changefreq: 'weekly' },
      { url: '/contact', priority: 0.7, changefreq: 'monthly' },
      { url: '/blog', priority: 0.8, changefreq: 'weekly' },
      { url: '/portfolio', priority: 0.6, changefreq: 'monthly' }
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>https://zion.app${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    // Store sitemap in localStorage for now (in production, this would be server-generated)
    localStorage.setItem('sitemap', sitemap);
>>>>>>> e8ff974a982d4b1d788e95a271dee39afcb5ce06
  }

  /**
   * Generate robots.txt content
   */
<<<<<<< HEAD
  generateRobotsTxt(): string {
    if (!this.config.enableRobotsTxt) return '';

    return `User-agent: *
Allow: /

# Sitemap
Sitemap: ${this.config.siteUrl}/sitemap.xml
=======
  private async generateRobotsTxt(): Promise<void> {
    if (typeof window === 'undefined') return;

    const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://zion.app/sitemap.xml
>>>>>>> e8ff974a982d4b1d788e95a271dee39afcb5ce06

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
<<<<<<< HEAD
Disallow: /_next/
Disallow: /static/

# Allow important pages
Allow: /
Allow: /services/
Allow: /about/
Allow: /contact/
Allow: /blog/
`;
  }

  /**
   * Generate sitemap XML
   */
  generateSitemap(): string {
    if (!this.config.enableSitemap) return '';

    const pages = Array.from(this.pages.values());
    const staticPages = [
      { url: '/', priority: '1.0', changefreq: 'daily' },
      { url: '/about', priority: '0.8', changefreq: 'monthly' },
      { url: '/services', priority: '0.9', changefreq: 'weekly' },
      { url: '/contact', priority: '0.7', changefreq: 'monthly' },
      { url: '/blog', priority: '0.8', changefreq: 'weekly' },
    ];

    const allPages = [...staticPages, ...pages.map(page => ({
      url: page.url.replace(this.config.siteUrl, ''),
      priority: '0.6',
      changefreq: 'weekly'
    }))];

    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    allPages.forEach(page => {
      sitemap += `
  <url>
    <loc>${this.config.siteUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
    });

    sitemap += `
</urlset>`;

    return sitemap;
  }

  /**
   * Audit page SEO
   */
  async auditPageSEO(url: string): Promise<SEOAuditResult> {
    const pageData = this.pages.get(url);
    if (!pageData) {
      throw new Error(`No SEO data found for page: ${url}`);
    }

    const issues: SEOAuditResult['issues'] = [];
    const recommendations: string[] = [];
    let score = 100;

    // Check title length
    if (pageData.title.length < 30) {
      issues.push({
        type: 'warning',
        message: 'Title is too short (less than 30 characters)',
        suggestion: 'Add more descriptive words to your title',
        priority: 'medium'
      });
      score -= 10;
    } else if (pageData.title.length > 60) {
      issues.push({
        type: 'warning',
        message: 'Title is too long (more than 60 characters)',
        suggestion: 'Shorten your title to improve search engine display',
        priority: 'medium'
      });
      score -= 5;
    }

    // Check description length
    if (pageData.description.length < 120) {
      issues.push({
        type: 'warning',
        message: 'Meta description is too short (less than 120 characters)',
        suggestion: 'Add more compelling content to your description',
        priority: 'medium'
      });
      score -= 10;
    } else if (pageData.description.length > 160) {
      issues.push({
        type: 'warning',
        message: 'Meta description is too long (more than 160 characters)',
        suggestion: 'Shorten your description to avoid truncation',
        priority: 'medium'
      });
      score -= 5;
    }

    // Check for keywords
    if (pageData.keywords.length === 0) {
      issues.push({
        type: 'error',
        message: 'No keywords defined for this page',
        suggestion: 'Add relevant keywords to improve search visibility',
        priority: 'high'
      });
      score -= 20;
    }

    // Check for image alt text (would need DOM analysis in real implementation)
    issues.push({
      type: 'info',
      message: 'Verify all images have descriptive alt text',
      suggestion: 'Add alt attributes to all images for better accessibility',
      priority: 'low'
    });

    // Generate recommendations
    if (score < 80) {
      recommendations.push('Focus on improving title and description optimization');
    }
    if (pageData.keywords.length < 5) {
      recommendations.push('Add more relevant keywords to improve search visibility');
    }
    if (!pageData.structuredData || Object.keys(pageData.structuredData).length === 0) {
      recommendations.push('Add structured data to help search engines understand your content');
    }

    const metrics = {
      titleLength: pageData.title.length,
      descriptionLength: pageData.description.length,
      keywordDensity: pageData.keywords.length,
      headingStructure: true, // Would need DOM analysis
      imageAltText: true, // Would need DOM analysis
      internalLinks: 0, // Would need DOM analysis
      externalLinks: 0, // Would need DOM analysis
    };

    return {
      score: Math.max(0, score),
      issues,
      recommendations,
      metrics
    };
  }

  /**
   * Generate meta tags for HTML head
   */
  generateMetaTags(pageData: PageSEOData): string {
    let metaTags = '';

    // Basic meta tags
    metaTags += `<title>${pageData.title}</title>\n`;
    metaTags += `<meta name="description" content="${pageData.description}">\n`;
    metaTags += `<meta name="keywords" content="${pageData.keywords.join(', ')}">\n`;
    
    if (pageData.canonical) {
      metaTags += `<link rel="canonical" href="${pageData.canonical}">\n`;
    }

    // Robots meta
    if (pageData.noindex || pageData.nofollow) {
      const robots = [];
      if (pageData.noindex) robots.push('noindex');
      if (pageData.nofollow) robots.push('nofollow');
      metaTags += `<meta name="robots" content="${robots.join(', ')}">\n`;
    }

    // Open Graph tags
    if (this.config.enableOpenGraph) {
      metaTags += `<meta property="og:title" content="${pageData.openGraph.title}">\n`;
      metaTags += `<meta property="og:description" content="${pageData.openGraph.description}">\n`;
      metaTags += `<meta property="og:image" content="${pageData.openGraph.image}">\n`;
      metaTags += `<meta property="og:url" content="${pageData.openGraph.url}">\n`;
      metaTags += `<meta property="og:type" content="${pageData.openGraph.type}">\n`;
      metaTags += `<meta property="og:site_name" content="${pageData.openGraph.siteName}">\n`;
    }

    // Twitter Card tags
    if (this.config.enableTwitterCards) {
      metaTags += `<meta name="twitter:card" content="${pageData.twitter.card}">\n`;
      metaTags += `<meta name="twitter:title" content="${pageData.twitter.title}">\n`;
      metaTags += `<meta name="twitter:description" content="${pageData.twitter.description}">\n`;
      metaTags += `<meta name="twitter:image" content="${pageData.twitter.image}">\n`;
      metaTags += `<meta name="twitter:creator" content="${pageData.twitter.creator}">\n`;
      metaTags += `<meta name="twitter:site" content="${pageData.twitter.site}">\n`;
    }

    // Structured data
    if (this.config.enableStructuredData && Object.keys(pageData.structuredData).length > 0) {
      metaTags += `<script type="application/ld+json">${JSON.stringify(pageData.structuredData)}</script>\n`;
    }

    return metaTags;
  }

  /**
   * Update configuration
   */
  updateConfig(newConfig: Partial<SEOConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }

  /**
   * Get current configuration
   */
  getConfig(): SEOConfig {
    return { ...this.config };
  }

  /**
   * Get all pages
   */
  getPages(): Map<string, PageSEOData> {
    return new Map(this.pages);
  }
}

// Export default instance
export const seoOptimizer = new AdvancedSEOOptimizer();

// Export utility functions
export const generatePageSEO = (pageData: Partial<PageSEOData>) => {
  return seoOptimizer.generatePageSEO(pageData);
};

export const auditPageSEO = (url: string) => {
  return seoOptimizer.auditPageSEO(url);
};

export const generateMetaTags = (pageData: PageSEOData) => {
  return seoOptimizer.generateMetaTags(pageData);
};
=======

# Allow important pages
Allow: /services/
Allow: /blog/
Allow: /portfolio/`;

    // Store robots.txt in localStorage for now
    localStorage.setItem('robots.txt', robotsTxt);
  }

  /**
   * Optimize for performance-related SEO
   */
  private optimizeForPerformance(): void {
    if (typeof window === 'undefined') return;

    // Add performance hints
    const hints = [
      { rel: 'preload', href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
      { rel: 'preload', href: '/images/hero-bg.webp', as: 'image' },
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: 'https://cdn.jsdelivr.net' }
    ];

    hints.forEach(hint => {
      const link = document.createElement('link');
      Object.entries(hint).forEach(([key, value]) => {
        link.setAttribute(key, value as string);
      });
      document.head.appendChild(link);
    });
  }

  /**
   * Optimize for accessibility-related SEO
   */
  private optimizeForAccessibility(): void {
    if (typeof document === 'undefined') return;

    // Add skip links
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      background: #000;
      color: #fff;
      padding: 8px;
      text-decoration: none;
      z-index: 1000;
    `;
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add ARIA landmarks
    const main = document.querySelector('main');
    if (main && !main.hasAttribute('role')) {
      main.setAttribute('role', 'main');
    }

    // Add language attribute
    if (!document.documentElement.hasAttribute('lang')) {
      document.documentElement.setAttribute('lang', 'en');
    }
  }

  /**
   * Update page SEO data
   */
  public updatePageSEO(data: PageSEOData): void {
    this.currentPageData = data;
    this.applyPageSEO();
  }

  /**
   * Apply page SEO data to the document
   */
  private applyPageSEO(): void {
    if (!this.currentPageData || typeof document === 'undefined') return;

    const data = this.currentPageData;

    // Update title
    document.title = data.title;

    // Update meta description
    this.ensureMetaTag('description', data.description);

    // Update keywords
    if (data.keywords.length > 0) {
      this.ensureMetaTag('keywords', data.keywords.join(', '));
    }

    // Update canonical URL
    this.ensureCanonicalUrl(data.canonicalUrl);

    // Update Open Graph tags
    if (this.config.enableOpenGraph) {
      this.updateOpenGraphTags(data);
    }

    // Update Twitter Card tags
    if (this.config.enableTwitterCards) {
      this.updateTwitterCardTags(data);
    }

    // Update schema markup
    if (this.config.enableSchemaMarkup && data.schemaMarkup) {
      this.addStructuredDataScript(data.schemaMarkup);
    }

    // Update robots
    if (data.robots) {
      this.ensureMetaTag('robots', data.robots);
    }
  }

  /**
   * Ensure canonical URL is set
   */
  private ensureCanonicalUrl(url: string): void {
    if (typeof document === 'undefined') return;

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }

  /**
   * Update Open Graph tags
   */
  private updateOpenGraphTags(data: PageSEOData): void {
    if (typeof document === 'undefined') return;

    const ogTags = [
      { property: 'og:title', content: data.ogTitle || data.title },
      { property: 'og:description', content: data.ogDescription || data.description },
      { property: 'og:image', content: data.ogImage || 'https://zion.app/og-image.jpg' },
      { property: 'og:url', content: data.ogUrl || data.canonicalUrl },
      { property: 'og:type', content: data.ogType || 'website' },
      { property: 'og:site_name', content: 'Zion Tech Group' }
    ];

    ogTags.forEach(tag => {
      this.ensureMetaTag(tag.property, tag.content);
    });
  }

  /**
   * Update Twitter Card tags
   */
  private updateTwitterCardTags(data: PageSEOData): void {
    if (typeof document === 'undefined') return;

    const twitterTags = [
      { name: 'twitter:card', content: data.twitterCard || 'summary_large_image' },
      { name: 'twitter:title', content: data.twitterTitle || data.title },
      { name: 'twitter:description', content: data.twitterDescription || data.description },
      { name: 'twitter:image', content: data.twitterImage || data.ogImage || 'https://zion.app/og-image.jpg' }
    ];

    twitterTags.forEach(tag => {
      this.ensureMetaTag(tag.name, tag.content);
    });
  }

  /**
   * Generate breadcrumb schema
   */
  public generateBreadcrumbSchema(items: Array<{ name: string; url: string }>): any {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": `https://zion.app${item.url}`
      }))
    };
  }

  /**
   * Generate FAQ schema
   */
  public generateFAQSchema(faqs: Array<{ question: string; answer: string }>): any {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  }

  /**
   * Get current page SEO data
   */
  public getCurrentPageData(): PageSEOData | null {
    return this.currentPageData;
  }

  /**
   * Cleanup resources
   */
  public cleanup(): void {
    this.isInitialized = false;
    this.currentPageData = null;
  }
}

// Export singleton instance
export const advancedSEOOptimizer = new AdvancedSEOOptimizer();

// Export class for custom instances
export { AdvancedSEOOptimizer };
export type { SEOConfig, PageSEOData };
>>>>>>> e8ff974a982d4b1d788e95a271dee39afcb5ce06

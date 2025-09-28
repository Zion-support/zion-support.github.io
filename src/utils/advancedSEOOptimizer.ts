// Advanced SEO Optimizer for comprehensive search engine optimization
// Provides meta tag generation, structured data, sitemap, and performance optimization

interface SEOConfig {
  siteName: string;
  siteUrl: string;
  siteDescription: string;
  defaultKeywords: string[];
  defaultImage: string;
  twitterHandle: string;
  enableMetaOptimization: boolean;
  enableStructuredData: boolean;
  enableSitemap: boolean;
  enableRobotsTxt: boolean;
  enablePerformanceSEO: boolean;
  enableAccessibilitySEO: boolean;
}

interface PageSEOData {
  title: string;
  description: string;
  keywords: string[];
  url: string;
  image?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  changefreq?: string;
  priority?: number;
}

interface SEOAuditResult {
  score: number;
  issues: string[];
  suggestions: string[];
  metrics: {
    titleLength: number;
    descriptionLength: number;
    headingStructure: number;
    imageAltText: number;
    internalLinks: number;
    externalLinks: number;
  };
}

const defaultConfig: SEOConfig = {
  siteName: 'Zion Tech Group',
  siteUrl: 'https://ziontechgroup.com',
  siteDescription: 'Leading provider of AI solutions and technology consulting services',
  defaultKeywords: ['AI solutions', 'technology consulting', 'digital transformation'],
  defaultImage: 'https://ziontechgroup.com/og-image.png',
  twitterHandle: '@ziontechgroup',
  enableMetaOptimization: true,
  enableStructuredData: true,
  enableSitemap: true,
  enableRobotsTxt: true,
  enablePerformanceSEO: true,
  enableAccessibilitySEO: true
};

export class AdvancedSEOOptimizer {
  private config: SEOConfig;
  private isInitialized = false;
  private currentPageData: PageSEOData | null = null;
  private pages = new Map<string, PageSEOData>();

  constructor(config: Partial<SEOConfig> = {}) {
    this.config = { ...defaultConfig, ...config };
  }

  /**
   * Initialize the SEO optimizer
   */
  public async initialize(): Promise<void> {
    if (this.isInitialized) return;

    try {
      await this.generateSitemap();
      await this.generateRobotsTxt();
      this.optimizeForPerformance();
      this.optimizeForAccessibility();
      
      this.isInitialized = true;
      console.log('🚀 Advanced SEO Optimizer initialized');
    } catch (error) {
      console.error('Error initializing SEO optimizer:', error);
    }
  }

  /**
   * Generate meta tags for a page
   */
  public generateMetaTags(pageData: PageSEOData): {
    title: string;
    description: string;
    keywords: string;
    canonical: string;
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
    ogUrl: string;
    ogType: string;
    twitterCard: string;
    twitterTitle: string;
    twitterDescription: string;
    twitterImage: string;
  } {
    const title = this.optimizeTitle(pageData.title);
    const description = this.optimizeDescription(pageData.description);
    const keywords = this.optimizeKeywords(pageData.keywords);
    const canonical = this.generateCanonicalUrl(pageData.url);
    const image = this.optimizeImage(pageData.image);

    return {
      title,
      description,
      keywords,
      canonical,
      ogTitle: title,
      ogDescription: description,
      ogImage: image,
      ogUrl: pageData.url,
      ogType: pageData.type || 'website',
      twitterCard: 'summary_large_image',
      twitterTitle: title,
      twitterDescription: description,
      twitterImage: image
    };
  }

  /**
   * Optimize page title for SEO
   */
  private optimizeTitle(title: string): string {
    if (!title) return this.config.siteName;
    
    // Ensure title is within optimal length (50-60 characters)
    const maxLength = 60;
    if (title.length > maxLength) {
      title = title.substring(0, maxLength - 3) + '...';
    }
    
    return title;
  }

  /**
   * Optimize meta description for SEO
   */
  private optimizeDescription(description: string): string {
    if (!description) return this.config.siteDescription;
    
    // Ensure description is within optimal length (150-160 characters)
    const maxLength = 160;
    if (description.length > maxLength) {
      description = description.substring(0, maxLength - 3) + '...';
    }
    
    return description;
  }

  /**
   * Optimize keywords for SEO
   */
  private optimizeKeywords(keywords: string[]): string {
    if (!keywords || keywords.length === 0) return this.config.defaultKeywords.join(', ');
    
    // Limit to 10 keywords and ensure they're relevant
    const optimizedKeywords = keywords
      .slice(0, 10)
      .map(keyword => keyword.toLowerCase().trim())
      .filter(keyword => keyword.length > 0);
    
    return optimizedKeywords.join(', ');
  }

  /**
   * Generate canonical URL
   */
  private generateCanonicalUrl(url: string): string {
    if (!url) return this.config.siteUrl;
    
    // Ensure URL is absolute
    if (url.startsWith('/')) {
      return `${this.config.siteUrl}${url}`;
    }
    
    return url;
  }

  /**
   * Optimize image URL for SEO
   */
  private optimizeImage(image: string): string {
    if (!image) return this.config.defaultImage;
    
    // Ensure image URL is absolute
    if (image.startsWith('/')) {
      return `${this.config.siteUrl}${image}`;
    }
    
    return image;
  }

  /**
   * Generate structured data for a page
   */
  public generateStructuredData(pageData: PageSEOData): object {
    const baseStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: pageData.title,
      description: pageData.description,
      url: pageData.url,
      mainEntity: {
        '@type': 'Organization',
        name: this.config.siteName,
        url: this.config.siteUrl,
        logo: this.config.defaultImage
      }
    };

    // Add article-specific structured data
    if (pageData.type === 'article') {
      return {
        ...baseStructuredData,
        '@type': 'Article',
        headline: pageData.title,
        author: {
          '@type': 'Person',
          name: pageData.author || this.config.siteName
        },
        datePublished: pageData.publishedTime,
        dateModified: pageData.modifiedTime,
        section: pageData.section,
        keywords: pageData.keywords
      };
    }

    return baseStructuredData;
  }

  /**
   * Generate sitemap
   */
  private async generateSitemap(): Promise<void> {
    if (!this.config.enableSitemap) return;

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Array.from(this.pages.values()).map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.modifiedTime || new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq || 'monthly'}</changefreq>
    <priority>${page.priority || 0.5}</priority>
  </url>`).join('\n')}
</urlset>`;

    // Store sitemap in localStorage for now (in production, this would be server-generated)
    if (typeof window !== 'undefined') {
      localStorage.setItem('sitemap', sitemap);
    }
  }

  /**
   * Generate robots.txt content
   */
  generateRobotsTxt(): string {
    if (!this.config.enableRobotsTxt) return '';

    return `User-agent: *
Allow: /

# Sitemap
Sitemap: ${this.config.siteUrl}/sitemap.xml
`;
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
      { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }
    ];

    hints.forEach(hint => {
      const link = document.createElement('link');
      Object.entries(hint).forEach(([key, value]) => {
        link.setAttribute(key, value);
      });
      document.head.appendChild(link);
    });
  }

  /**
   * Optimize for accessibility-related SEO
   */
  private optimizeForAccessibility(): void {
    if (typeof window === 'undefined') return;

    // Add skip link
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
      transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', () => {
      skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
      skipLink.style.top = '-40px';
    });

    document.body.insertBefore(skipLink, document.body.firstChild);
  }

  /**
   * Audit page SEO
   */
  public auditPageSEO(url: string): SEOAuditResult {
    const page = this.pages.get(url);
    if (!page) {
      return {
        score: 0,
        issues: ['Page not found in sitemap'],
        suggestions: ['Add page to sitemap'],
        metrics: {
          titleLength: 0,
          descriptionLength: 0,
          headingStructure: 0,
          imageAltText: 0,
          internalLinks: 0,
          externalLinks: 0
        }
      };
    }

    const issues: string[] = [];
    const suggestions: string[] = [];
    let score = 100;

    // Check title length
    if (page.title.length < 30 || page.title.length > 60) {
      issues.push('Title length should be between 30-60 characters');
      score -= 10;
    }

    // Check description length
    if (page.description.length < 120 || page.description.length > 160) {
      issues.push('Description length should be between 120-160 characters');
      score -= 10;
    }

    // Check for keywords in title
    if (!page.title.toLowerCase().includes(page.keywords[0]?.toLowerCase() || '')) {
      suggestions.push('Include primary keyword in title');
      score -= 5;
    }

    // Check for keywords in description
    if (!page.description.toLowerCase().includes(page.keywords[0]?.toLowerCase() || '')) {
      suggestions.push('Include primary keyword in description');
      score -= 5;
    }

    return {
      score: Math.max(0, score),
      issues,
      suggestions,
      metrics: {
        titleLength: page.title.length,
        descriptionLength: page.description.length,
        headingStructure: 0, // Would need DOM analysis
        imageAltText: 0, // Would need DOM analysis
        internalLinks: 0, // Would need DOM analysis
        externalLinks: 0 // Would need DOM analysis
      }
    };
  }

  /**
   * Add page to sitemap
   */
  public addPage(pageData: PageSEOData): void {
    this.pages.set(pageData.url, pageData);
  }

  /**
   * Remove page from sitemap
   */
  public removePage(url: string): void {
    this.pages.delete(url);
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
  return seoOptimizer.generateMetaTags(pageData as PageSEOData);
};

export const auditPageSEO = (url: string) => {
  return seoOptimizer.auditPageSEO(url);
};

export const generateMetaTags = (pageData: PageSEOData) => {
  return seoOptimizer.generateMetaTags(pageData);
};

// Export class for custom instances
export { AdvancedSEOOptimizer };
export type { SEOConfig, PageSEOData };
<<<<<<< HEAD
/**
 * SEO Optimizer Utility
 * Advanced SEO monitoring and optimization tools
 */

interface SEOConfig {
  enableMetaOptimization: boolean;
  enableStructuredData: boolean;
  enableSitemapGeneration: boolean;
  enableRobotsTxt: boolean;
  enableOpenGraph: boolean;
  enableTwitterCards: boolean;
}

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

class SEOOptimizer {
  private config: SEOConfig;
  private baseUrl: string;

  constructor(config: Partial<SEOConfig> = {}) {
    this.config = {
      enableMetaOptimization: true,
      enableStructuredData: true,
      enableSitemapGeneration: true,
      enableRobotsTxt: true,
      enableOpenGraph: true,
      enableTwitterCards: true,
      ...config
    };
    
    this.baseUrl = typeof window !== 'undefined' 
      ? window.location.origin 
      : 'https://zion.app';
  }

  /**
   * Initialize SEO optimization
   */
  public init(): void {
    if (typeof window === 'undefined') return;

    this.optimizeMetaTags();
    this.addStructuredData();
    this.optimizeImages();
    this.addBreadcrumbs();
    this.optimizeInternalLinks();
  }

  /**
   * Optimize meta tags for current page
   */
  public optimizeMetaTags(data: Partial<SEOData>): void {
    if (!this.config.enableMetaOptimization) return;

    const {
      title,
      description,
      keywords,
      canonicalUrl,
      ogTitle,
      ogDescription,
      ogImage,
      twitterCard,
      twitterTitle,
      twitterDescription,
      twitterImage
    } = data;

    // Update title
    if (title) {
      document.title = `${title} | Zion Tech Group`;
    }

    // Update meta description
    this.updateMetaTag('description', description || '');
    
    // Update keywords
    if (keywords && keywords.length > 0) {
      this.updateMetaTag('keywords', keywords.join(', '));
    }

    // Update canonical URL
    if (canonicalUrl) {
      this.updateLinkTag('canonical', canonicalUrl);
    }

    // Open Graph tags
    if (this.config.enableOpenGraph) {
      this.updateMetaTag('og:title', ogTitle || title || '');
      this.updateMetaTag('og:description', ogDescription || description || '');
      this.updateMetaTag('og:url', canonicalUrl || window.location.href);
      this.updateMetaTag('og:type', 'website');
      this.updateMetaTag('og:site_name', 'Zion Tech Group');
      
      if (ogImage) {
        this.updateMetaTag('og:image', ogImage);
        this.updateMetaTag('og:image:width', '1200');
        this.updateMetaTag('og:image:height', '630');
      }
    }

    // Twitter Card tags
    if (this.config.enableTwitterCards) {
      this.updateMetaTag('twitter:card', twitterCard || 'summary_large_image');
      this.updateMetaTag('twitter:title', twitterTitle || title || '');
      this.updateMetaTag('twitter:description', twitterDescription || description || '');
      
      if (twitterImage) {
        this.updateMetaTag('twitter:image', twitterImage);
      }
    }
  }

  /**
   * Add structured data (JSON-LD)
   */
  public addStructuredData(): void {
    if (!this.config.enableStructuredData) return;

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": this.baseUrl,
      "logo": `${this.baseUrl}/logo.png`,
      "description": "Advanced AI and IT Solutions Provider",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-XXX-XXX-XXXX",
        "contactType": "customer service"
      },
      "sameAs": [
        "https://linkedin.com/company/zion-tech-group",
        "https://twitter.com/ziontechgroup"
      ]
    };

    this.addJSONLD(structuredData);
  }

  /**
   * Optimize images for SEO
   */
  private optimizeImages(): void {
    const images = document.querySelectorAll('img');
    
    images.forEach((img) => {
      // Add alt text if missing
      if (!img.alt) {
        img.alt = this.generateAltText(img);
      }

      // Add loading="lazy" for non-critical images
      if (!img.hasAttribute('loading')) {
        img.loading = 'lazy';
      }

      // Add width and height attributes
      if (!img.hasAttribute('width') && !img.hasAttribute('height')) {
        img.width = 800;
        img.height = 600;
      }
    });
  }

  /**
   * Add breadcrumb navigation
   */
  private addBreadcrumbs(): void {
    const breadcrumbs = this.generateBreadcrumbs();
    
    if (breadcrumbs.length > 1) {
      const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": crumb.name,
          "item": crumb.url
        }))
      };

      this.addJSONLD(breadcrumbData);
    }
  }

  /**
   * Optimize internal links
   */
  private optimizeInternalLinks(): void {
    const links = document.querySelectorAll('a[href]');
    
    links.forEach((link) => {
      const href = link.getAttribute('href');
      
      if (href && href.startsWith('/')) {
        // Add rel="noopener" for security
        if (!link.hasAttribute('rel')) {
          link.rel = 'noopener';
        }

        // Add title attribute if missing
        if (!link.hasAttribute('title')) {
          link.title = this.generateLinkTitle(link);
        }
      }
    });
  }

  /**
   * Generate sitemap
   */
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

  /**
   * Generate robots.txt
   */
  public generateRobotsTxt(): string {
    if (!this.config.enableRobotsTxt) return '';

    return `User-agent: *
Allow: /

Sitemap: ${this.baseUrl}/sitemap.xml

# Disallow admin areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /static/`;
  }

  /**
   * Update meta tag
   */
  private updateMetaTag(name: string, content: string): void {
    let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
    
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = name;
      document.head.appendChild(meta);
    }
    
    meta.content = content;
  }

  /**
   * Update link tag
   */
  private updateLinkTag(rel: string, href: string): void {
    let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
    
    if (!link) {
      link = document.createElement('link');
      link.rel = rel;
      document.head.appendChild(link);
    }
    
    link.href = href;
  }

  /**
   * Add JSON-LD structured data
   */
  private addJSONLD(data: any): void {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  /**
   * Generate alt text for image
   */
  private generateAltText(img: HTMLImageElement): string {
    const src = img.src;
    const filename = src.split('/').pop()?.split('.')[0] || 'image';
    return filename.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  }

  /**
   * Generate breadcrumbs from URL
   */
  private generateBreadcrumbs(): Array<{name: string, url: string}> {
    const path = window.location.pathname;
    const segments = path.split('/').filter(Boolean);
    
    const breadcrumbs = [{ name: 'Home', url: '/' }];
    
    let currentPath = '';
    segments.forEach(segment => {
      currentPath += `/${segment}`;
      const name = segment.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      breadcrumbs.push({ name, url: currentPath });
    });
    
    return breadcrumbs;
  }

  /**
   * Generate title for link
   */
  private generateLinkTitle(link: HTMLAnchorElement): string {
    const text = link.textContent?.trim() || '';
    const href = link.getAttribute('href') || '';
    
    if (text) return text;
    
    const filename = href.split('/').pop()?.split('.')[0] || 'page';
    return filename.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  }

  /**
   * Analyze page SEO score
   */
  public analyzeSEO(): { score: number; issues: string[]; recommendations: string[] } {
    const issues: string[] = [];
    const recommendations: string[] = [];
    let score = 100;

    // Check title
    const title = document.title;
    if (!title || title.length < 30) {
      issues.push('Title is too short or missing');
      score -= 20;
    } else if (title.length > 60) {
      issues.push('Title is too long');
      score -= 10;
    }

    // Check meta description
    const description = document.querySelector('meta[name="description"]')?.getAttribute('content');
    if (!description || description.length < 120) {
      issues.push('Meta description is too short or missing');
      score -= 15;
    } else if (description.length > 160) {
      issues.push('Meta description is too long');
      score -= 5;
    }

    // Check images without alt text
    const imagesWithoutAlt = document.querySelectorAll('img:not([alt])');
    if (imagesWithoutAlt.length > 0) {
      issues.push(`${imagesWithoutAlt.length} images missing alt text`);
      score -= imagesWithoutAlt.length * 5;
    }

    // Check headings structure
    const h1Count = document.querySelectorAll('h1').length;
    if (h1Count === 0) {
      issues.push('No H1 heading found');
      score -= 15;
    } else if (h1Count > 1) {
      issues.push('Multiple H1 headings found');
      score -= 10;
    }

    // Generate recommendations
    if (score < 80) {
      recommendations.push('Improve meta tags and content structure');
    }
    if (imagesWithoutAlt.length > 0) {
      recommendations.push('Add alt text to all images');
    }
    if (!description) {
      recommendations.push('Add a compelling meta description');
    }

    return { score: Math.max(0, score), issues, recommendations };
  }
}

// Export singleton instance
export const seoOptimizer = new SEOOptimizer();

// Auto-initialize in browser environment
if (typeof window !== 'undefined') {
  seoOptimizer.init();
}

export default SEOOptimizer;
=======
const seoOptimizer = {
  trackPageView: () => {
    console.log('Page view tracked');
  }
};

export default seoOptimizer;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ca9d

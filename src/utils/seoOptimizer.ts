/**
 * Advanced SEO optimization utilities
 * Provides comprehensive SEO monitoring and optimization features
 */

interface SEOConfig {
  enableMetaOptimization: boolean;
  enableStructuredData: boolean;
  enableImageAltText: boolean;
  enableInternalLinking: boolean;
  enableSitemapGeneration: boolean;
}

interface SEOReport {
  title: string;
  description: string;
  keywords: string[];
  headings: string[];
  images: string[];
  links: string[];
  score: number;
  issues: string[];
  recommendations: string[];
}

export class SEOOptimizer {
  private config: SEOConfig;
  private report: SEOReport;

  constructor(config: Partial<SEOConfig> = {}) {
    this.config = {
      enableMetaOptimization: true,
      enableStructuredData: true,
      enableImageAltText: true,
      enableInternalLinking: true,
      enableSitemapGeneration: true,
      ...config,
    };

    this.report = {
      title: '',
      description: '',
      keywords: [],
      headings: [],
      images: [],
      links: [],
      score: 0,
      issues: [],
      recommendations: [],
    };
  }

  public analyzePage(): SEOReport {
    this.analyzeTitle();
    this.analyzeDescription();
    this.analyzeHeadings();
    this.analyzeImages();
    this.analyzeLinks();
    this.analyzeKeywords();
    this.calculateScore();
    this.generateRecommendations();

    return { ...this.report };
  }

  private analyzeTitle(): void {
    const title = document.title;
    this.report.title = title;

    if (!title) {
      this.report.issues.push('Missing page title');
    } else if (title.length > 60) {
      this.report.issues.push('Title too long (over 60 characters)');
    } else if (title.length < 30) {
      this.report.issues.push('Title too short (under 30 characters)');
    }

    // Check for brand name
    if (!title.toLowerCase().includes('zion')) {
      this.report.recommendations.push('Consider including brand name in title');
    }
  }

  private analyzeDescription(): void {
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = metaDescription?.getAttribute('content') || '';
    this.report.description = description;

    if (!description) {
      this.report.issues.push('Missing meta description');
    } else if (description.length > 160) {
      this.report.issues.push('Meta description too long (over 160 characters)');
    } else if (description.length < 120) {
      this.report.issues.push('Meta description too short (under 120 characters)');
    }
  }

  private analyzeHeadings(): void {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    this.report.headings = Array.from(headings).map(h => h.textContent || '');

    // Check for H1 tag
    const h1Tags = document.querySelectorAll('h1');
    if (h1Tags.length === 0) {
      this.report.issues.push('Missing H1 tag');
    } else if (h1Tags.length > 1) {
      this.report.issues.push('Multiple H1 tags found');
    }

    // Check heading hierarchy
    let previousLevel = 0;
    headings.forEach((heading) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > previousLevel + 1) {
        this.report.issues.push('Heading hierarchy skipped');
      }
      previousLevel = level;
    });
  }

  private analyzeImages(): void {
    const images = document.querySelectorAll('img');
    this.report.images = Array.from(images).map(img => img.src);

    images.forEach((img, index) => {
      if (!img.alt) {
        this.report.issues.push(`Image ${index + 1} missing alt text`);
      }

      if (!img.loading) {
        this.report.recommendations.push(`Add lazy loading to image ${index + 1}`);
      }

      // Check image optimization
      if (img.src.includes('.jpg') || img.src.includes('.jpeg')) {
        this.report.recommendations.push(`Consider converting image ${index + 1} to WebP format`);
      }
    });
  }

  private analyzeLinks(): void {
    const links = document.querySelectorAll('a[href]');
    this.report.links = Array.from(links).map(link => (link as HTMLAnchorElement).href);

    links.forEach((link) => {
      const href = (link as HTMLAnchorElement).href;

      // Check for external links without rel="noopener"
      if (href.startsWith('http') && !href.includes(window.location.hostname)) {
        if (!link.getAttribute('rel')?.includes('noopener')) {
          this.report.issues.push('External link missing rel="noopener"');
        }
      }

      // Check for internal links
      if (href.includes(window.location.hostname) || href.startsWith('/')) {
        this.report.recommendations.push('Good internal linking structure');
      }
    });
  }

  private analyzeKeywords(): void {
    const content = document.body.textContent || '';
    const commonKeywords = [
      'ai', 'artificial intelligence', 'machine learning', 'automation',
      'technology', 'solutions', 'services', 'consulting', 'development',
      'zion', 'tech group', 'enterprise', 'business'
    ];

    this.report.keywords = commonKeywords.filter(keyword =>
      content.toLowerCase().includes(keyword.toLowerCase())
    );

    if (this.report.keywords.length < 5) {
      this.report.issues.push('Low keyword density');
    }
  }

  private calculateScore(): void {
    let score = 100;

    // Deduct points for issues
    score -= this.report.issues.length * 10;

    // Bonus points for good practices
    if (this.report.title && this.report.title.length >= 30 && this.report.title.length <= 60) {
      score += 5;
    }

    if (this.report.description && this.report.description.length >= 120 && this.report.description.length <= 160) {
      score += 5;
    }

    if (this.report.keywords.length >= 5) {
      score += 5;
    }

    this.report.score = Math.max(0, Math.min(100, score));
  }

  private generateRecommendations(): void {
    if (this.report.score < 70) {
      this.report.recommendations.push('Focus on improving page SEO fundamentals');
    }

    if (this.report.images.length > 0) {
      this.report.recommendations.push('Optimize images for better performance');
    }

    if (this.report.links.length < 10) {
      this.report.recommendations.push('Add more internal links to improve site structure');
    }

    this.report.recommendations.push('Use structured data markup for better search visibility');
    this.report.recommendations.push('Implement proper canonical URLs');
  }

  public optimizeMetaTags(): void {
    if (!this.config.enableMetaOptimization) return;

    // Optimize title
    const title = document.title;
    if (title.length > 60) {
      document.title = title.substring(0, 57) + '...';
    }

    // Add missing meta tags
    this.addMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    this.addMetaTag('robots', 'index, follow');
    this.addMetaTag('author', 'Zion Tech Group');
    this.addMetaTag('theme-color', '#0f172a');
  }

  private addMetaTag(name: string, content: string): void {
    if (!document.querySelector(`meta[name="${name}"]`)) {
      const meta = document.createElement('meta');
      meta.name = name;
      meta.content = content;
      document.head.appendChild(meta);
    }
  }

  public addStructuredData(): void {
    if (!this.config.enableStructuredData) return;

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "description": "Advanced AI and IT Solutions Provider",
      "url": window.location.origin,
      "logo": `${window.location.origin}/logo.png`,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-0123",
        "contactType": "customer service"
      },
      "sameAs": [
        "https://linkedin.com/company/zion-tech-group",
        "https://twitter.com/ziontechgroup"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }

  public generateSitemap(): string {
    if (!this.config.enableSitemapGeneration) return '';

    const pages = [
      '/',
      '/solutions',
      '/services',
      '/about',
      '/contact',
      '/blog'
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${window.location.origin}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;

    return sitemap;
  }

  public getReport(): SEOReport {
    return { ...this.report };
  }
}

// Export singleton instance
export const seoOptimizer = new SEOOptimizer();

// Export hook for React components
export const useSEOOptimizer = () => {
  const [report, setReport] = React.useState<SEOReport | null>(null);

  React.useEffect(() => {
    const analyze = () => {
      const seoReport = seoOptimizer.analyzePage();
      setReport(seoReport);
    };

    // Analyze on mount
    analyze();

    // Re-analyze on content changes
    const observer = new MutationObserver(analyze);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    });

    return () => observer.disconnect();
  }, []);

  return { report, optimizer: seoOptimizer };
};
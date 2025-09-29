/**
 * Enhanced SEO Optimizer
 * Advanced SEO monitoring and optimization tools
 */

export interface SEOMetrics {
  titleLength: number;
  descriptionLength: number;
  headingStructure: string[];
  imageAltText: number;
  internalLinks: number;
  externalLinks: number;
  metaTags: number;
  schemaMarkup: boolean;
  sitemapExists: boolean;
  robotsTxtExists: boolean;
  pageSpeed: number;
  mobileFriendly: boolean;
}

export interface SEOIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  category: 'content' | 'technical' | 'performance' | 'accessibility';
  message: string;
  suggestion: string;
  impact: 'high' | 'medium' | 'low';
}

class EnhancedSEOOptimizer {
  private metrics: SEOMetrics | null = null;
  private issues: SEOIssue[] = [];
  private isMonitoring: boolean = false;

  constructor() {
    this.initializeSEOMonitoring();
  }

  private initializeSEOMonitoring(): void {
    if (typeof window === 'undefined') {
      return;
    }

    this.isMonitoring = true;
    this.scanForSEOIssues();
    this.setupStructuredData();
    this.setupMetaTagOptimization();
    this.setupPerformanceMonitoring();
  }

  private scanForSEOIssues(): void {
    // Check title length
    const title = document.title;
    if (title.length < 30) {
      this.addIssue({
        type: 'warning',
        category: 'content',
        message: 'Title too short',
        suggestion: 'Increase title length to 30-60 characters',
        impact: 'medium'
      });
    } else if (title.length > 60) {
      this.addIssue({
        type: 'warning',
        category: 'content',
        message: 'Title too long',
        suggestion: 'Reduce title length to 30-60 characters',
        impact: 'medium'
      });
    }

    // Check meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      this.addIssue({
        type: 'error',
        category: 'content',
        message: 'Missing meta description',
        suggestion: 'Add meta description tag',
        impact: 'high'
      });
    } else {
      const description = metaDescription.getAttribute('content') || '';
      if (description.length < 120) {
        this.addIssue({
          type: 'warning',
          category: 'content',
          message: 'Meta description too short',
          suggestion: 'Increase description length to 120-160 characters',
          impact: 'medium'
        });
      } else if (description.length > 160) {
        this.addIssue({
          type: 'warning',
          category: 'content',
          message: 'Meta description too long',
          suggestion: 'Reduce description length to 120-160 characters',
          impact: 'medium'
        });
      }
    }

    // Check heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const h1Count = document.querySelectorAll('h1').length;
    
    if (h1Count === 0) {
      this.addIssue({
        type: 'error',
        category: 'content',
        message: 'Missing H1 heading',
        suggestion: 'Add at least one H1 heading',
        impact: 'high'
      });
    } else if (h1Count > 1) {
      this.addIssue({
        type: 'warning',
        category: 'content',
        message: 'Multiple H1 headings',
        suggestion: 'Use only one H1 heading per page',
        impact: 'medium'
      });
    }

    // Check for missing alt text
    const images = document.querySelectorAll('img');
    let imagesWithoutAlt = 0;
    images.forEach(img => {
      if (!img.alt) {
        imagesWithoutAlt++;
      }
    });

    if (imagesWithoutAlt > 0) {
      this.addIssue({
        type: 'error',
        category: 'accessibility',
        message: `${imagesWithoutAlt} images missing alt text`,
        suggestion: 'Add alt attributes to all images',
        impact: 'high'
      });
    }

    // Check internal links
    const internalLinks = document.querySelectorAll('a[href^="/"], a[href*="' + window.location.hostname + '"]');
    if (internalLinks.length < 3) {
      this.addIssue({
        type: 'warning',
        category: 'content',
        message: 'Few internal links',
        suggestion: 'Add more internal links to improve site structure',
        impact: 'medium'
      });
    }

    // Check for missing canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      this.addIssue({
        type: 'warning',
        category: 'technical',
        message: 'Missing canonical URL',
        suggestion: 'Add canonical link tag',
        impact: 'medium'
      });
    }

    // Check for missing Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogImage = document.querySelector('meta[property="og:image"]');

    if (!ogTitle || !ogDescription || !ogImage) {
      this.addIssue({
        type: 'warning',
        category: 'content',
        message: 'Missing Open Graph tags',
        suggestion: 'Add og:title, og:description, and og:image meta tags',
        impact: 'medium'
      });
    }
  }

  private setupStructuredData(): void {
    // Add JSON-LD structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": window.location.origin,
      "logo": window.location.origin + "/logo.png",
      "description": "Advanced AI and IT Solutions",
      "sameAs": [
        "https://twitter.com/ziontechgroup",
        "https://linkedin.com/company/ziontechgroup"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }

  private setupMetaTagOptimization(): void {
    // Add viewport meta tag if missing
    if (!document.querySelector('meta[name="viewport"]')) {
      const viewport = document.createElement('meta');
      viewport.name = 'viewport';
      viewport.content = 'width=device-width, initial-scale=1.0';
      document.head.appendChild(viewport);
    }

    // Add theme-color meta tag
    const themeColor = document.createElement('meta');
    themeColor.name = 'theme-color';
    themeColor.content = '#1e40af';
    document.head.appendChild(themeColor);

    // Add robots meta tag
    const robots = document.createElement('meta');
    robots.name = 'robots';
    robots.content = 'index, follow';
    document.head.appendChild(robots);
  }

  private setupPerformanceMonitoring(): void {
    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            if (entry.startTime > 2500) {
              this.addIssue({
                type: 'warning',
                category: 'performance',
                message: 'Slow Largest Contentful Paint',
                suggestion: 'Optimize images and largest content elements',
                impact: 'high'
              });
            }
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }
  }

  private addIssue(issue: Omit<SEOIssue, 'id'>): void {
    const newIssue: SEOIssue = {
      ...issue,
      id: `seo_issue_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };

    this.issues.push(newIssue);
    
    // Keep only last 100 issues
    if (this.issues.length > 100) {
      this.issues = this.issues.slice(-100);
    }
  }

  public getMetrics(): SEOMetrics {
    const title = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = metaDescription?.getAttribute('content') || '';
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(h => h.tagName);
    const images = document.querySelectorAll('img');
    const imagesWithAlt = Array.from(images).filter(img => img.alt).length;
    const internalLinks = document.querySelectorAll('a[href^="/"], a[href*="' + window.location.hostname + '"]').length;
    const externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="' + window.location.hostname + '"])').length;
    const metaTags = document.querySelectorAll('meta').length;
    const schemaMarkup = document.querySelector('script[type="application/ld+json"]') !== null;

    return {
      titleLength: title.length,
      descriptionLength: description.length,
      headingStructure: headings,
      imageAltText: imagesWithAlt,
      internalLinks,
      externalLinks,
      metaTags,
      schemaMarkup,
      sitemapExists: false, // Would need to check server
      robotsTxtExists: false, // Would need to check server
      pageSpeed: 0, // Would need to measure
      mobileFriendly: true // Would need to check
    };
  }

  public getIssues(): SEOIssue[] {
    return [...this.issues];
  }

  public getHighImpactIssues(): SEOIssue[] {
    return this.issues.filter(issue => issue.impact === 'high');
  }

  public getIssuesByCategory(category: SEOIssue['category']): SEOIssue[] {
    return this.issues.filter(issue => issue.category === category);
  }

  public generateSEOScore(): number {
    let score = 100;
    
    // Deduct points for issues
    this.issues.forEach(issue => {
      switch (issue.impact) {
        case 'high':
          score -= 10;
          break;
        case 'medium':
          score -= 5;
          break;
        case 'low':
          score -= 2;
          break;
      }
    });

    return Math.max(0, score);
  }

  public generateRecommendations(): string[] {
    const recommendations: string[] = [];
    
    const highImpactIssues = this.getHighImpactIssues();
    highImpactIssues.forEach(issue => {
      recommendations.push(issue.suggestion);
    });

    // Add general recommendations
    const metrics = this.getMetrics();
    
    if (metrics.titleLength < 30) {
      recommendations.push('Increase page title length');
    }
    
    if (metrics.descriptionLength < 120) {
      recommendations.push('Add or improve meta description');
    }
    
    if (metrics.internalLinks < 3) {
      recommendations.push('Add more internal links');
    }

    return recommendations;
  }

  public updateMetaTags(data: {
    title?: string;
    description?: string;
    keywords?: string[];
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    canonical?: string;
  }): void {
    if (data.title) {
      document.title = data.title;
    }

    if (data.description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', data.description);
    }

    if (data.keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', data.keywords.join(', '));
    }

    if (data.ogTitle) {
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (!ogTitle) {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitle);
      }
      ogTitle.setAttribute('content', data.ogTitle);
    }

    if (data.ogDescription) {
      let ogDescription = document.querySelector('meta[property="og:description"]');
      if (!ogDescription) {
        ogDescription = document.createElement('meta');
        ogDescription.setAttribute('property', 'og:description');
        document.head.appendChild(ogDescription);
      }
      ogDescription.setAttribute('content', data.ogDescription);
    }

    if (data.ogImage) {
      let ogImage = document.querySelector('meta[property="og:image"]');
      if (!ogImage) {
        ogImage = document.createElement('meta');
        ogImage.setAttribute('property', 'og:image');
        document.head.appendChild(ogImage);
      }
      ogImage.setAttribute('content', data.ogImage);
    }

    if (data.canonical) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', data.canonical);
    }
  }

  public cleanup(): void {
    this.isMonitoring = false;
  }
}

export const enhancedSEOOptimizer = new EnhancedSEOOptimizer();
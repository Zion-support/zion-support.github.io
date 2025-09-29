/**
 * Enhanced SEO Optimizer
 * Advanced SEO optimization and monitoring system
 */

interface SEOConfig {
  enableMetaTags: boolean;
  enableStructuredData: boolean;
  enableOpenGraph: boolean;
  enableTwitterCards: boolean;
}

interface SEOMetrics {
  titleOptimization: number;
  metaDescriptionOptimization: number;
  headingStructure: number;
  imageAltText: number;
  overallScore: number;
}

interface SEORecommendation {
  type: 'critical' | 'warning' | 'suggestion';
  category: string;
  message: string;
  action: string;
}

class EnhancedSEOOptimizer {
  private config: SEOConfig;
  private metrics: SEOMetrics;
  private recommendations: SEORecommendation[] = [];
  private isInitialized: boolean = false;

  constructor(config: Partial<SEOConfig> = {}) {
    this.config = {
      enableMetaTags: true,
      enableStructuredData: true,
      enableOpenGraph: true,
      enableTwitterCards: true,
      ...config
    };

    this.metrics = {
      titleOptimization: 0,
      metaDescriptionOptimization: 0,
      headingStructure: 0,
      imageAltText: 0,
      overallScore: 0,
    };
  }

  /**
   * Initialize SEO optimizer
   */
  public initialize(): void {
    if (this.isInitialized) {
      console.warn('SEO Optimizer is already initialized');
      return;
    }

    this.isInitialized = true;
    console.log('🔍 Enhanced SEO Optimizer initialized');

    this.analyzeCurrentPage();
    this.setupMetaTags();
    this.setupStructuredData();
  }

  /**
   * Analyze current page for SEO issues
   */
  private analyzeCurrentPage(): void {
    this.analyzeTitle();
    this.analyzeMetaDescription();
    this.analyzeHeadingStructure();
    this.analyzeImages();
    this.calculateOverallScore();
  }

  /**
   * Analyze page title
   */
  private analyzeTitle(): void {
    const title = document.title;
    let score = 0;
    
    if (title) {
      score += 20;
      
      if (title.length >= 50 && title.length <= 60) {
        score += 30;
      } else if (title.length < 50) {
        this.addRecommendation('warning', 'Title', 
          'Title is too short. Consider adding more descriptive keywords.', 
          'Expand title to 50-60 characters');
      } else {
        this.addRecommendation('warning', 'Title', 
          'Title is too long and may be truncated in search results.', 
          'Shorten title to 50-60 characters');
      }
      
      if (title.toLowerCase().includes('zion')) {
        score += 20;
      }
      
      const keywords = ['ai', 'artificial intelligence', 'technology', 'solutions', 'services'];
      const hasKeywords = keywords.some(keyword => 
        title.toLowerCase().includes(keyword)
      );
      
      if (hasKeywords) {
        score += 30;
      } else {
        this.addRecommendation('suggestion', 'Title', 
          'Consider adding relevant keywords to improve search visibility.', 
          'Include relevant keywords in title');
      }
    } else {
      this.addRecommendation('critical', 'Title', 
        'Page title is missing. This is critical for SEO.', 
        'Add a descriptive page title');
    }
    
    this.metrics.titleOptimization = score;
  }

  /**
   * Analyze meta description
   */
  private analyzeMetaDescription(): void {
    const metaDescription = document.querySelector('meta[name="description"]');
    let score = 0;
    
    if (metaDescription) {
      const content = metaDescription.getAttribute('content') || '';
      score += 20;
      
      if (content.length >= 150 && content.length <= 160) {
        score += 40;
      } else if (content.length < 150) {
        this.addRecommendation('warning', 'Meta Description', 
          'Meta description is too short. Consider adding more details.', 
          'Expand meta description to 150-160 characters');
      } else {
        this.addRecommendation('warning', 'Meta Description', 
          'Meta description is too long and may be truncated.', 
          'Shorten meta description to 150-160 characters');
      }
      
      const ctaWords = ['learn', 'discover', 'explore', 'contact', 'get', 'find'];
      const hasCTA = ctaWords.some(word => 
        content.toLowerCase().includes(word)
      );
      
      if (hasCTA) {
        score += 20;
      }
      
      const keywords = ['ai', 'artificial intelligence', 'technology', 'solutions'];
      const hasKeywords = keywords.some(keyword => 
        content.toLowerCase().includes(keyword)
      );
      
      if (hasKeywords) {
        score += 20;
      } else {
        this.addRecommendation('suggestion', 'Meta Description', 
          'Consider adding relevant keywords to meta description.', 
          'Include relevant keywords in meta description');
      }
    } else {
      this.addRecommendation('critical', 'Meta Description', 
        'Meta description is missing. This is critical for SEO.', 
        'Add a compelling meta description');
    }
    
    this.metrics.metaDescriptionOptimization = score;
  }

  /**
   * Analyze heading structure
   */
  private analyzeHeadingStructure(): void {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let score = 0;
    
    if (headings.length > 0) {
      score += 20;
      
      const h1Tags = document.querySelectorAll('h1');
      if (h1Tags.length === 1) {
        score += 30;
      } else if (h1Tags.length === 0) {
        this.addRecommendation('critical', 'Heading Structure', 
          'Page is missing H1 tag. This is critical for SEO.', 
          'Add a single H1 tag to the page');
      } else {
        this.addRecommendation('warning', 'Heading Structure', 
          'Page has multiple H1 tags. Use only one H1 per page.', 
          'Use only one H1 tag per page');
      }
      
      let hasProperHierarchy = true;
      let previousLevel = 0;
      
      headings.forEach((heading, index) => {
        const level = parseInt(heading.tagName.charAt(1));
        
        if (index > 0 && level > previousLevel + 1) {
          hasProperHierarchy = false;
        }
        
        previousLevel = level;
      });
      
      if (hasProperHierarchy) {
        score += 30;
      } else {
        this.addRecommendation('warning', 'Heading Structure', 
          'Heading hierarchy is not properly structured.', 
          'Maintain proper heading hierarchy (H1 > H2 > H3)');
      }
      
      const keywords = ['ai', 'artificial intelligence', 'technology', 'solutions'];
      let hasKeywordsInHeadings = false;
      
      headings.forEach(heading => {
        const text = heading.textContent?.toLowerCase() || '';
        if (keywords.some(keyword => text.includes(keyword))) {
          hasKeywordsInHeadings = true;
        }
      });
      
      if (hasKeywordsInHeadings) {
        score += 20;
      } else {
        this.addRecommendation('suggestion', 'Heading Structure', 
          'Consider including relevant keywords in headings.', 
          'Include relevant keywords in headings');
      }
    } else {
      this.addRecommendation('critical', 'Heading Structure', 
        'Page has no heading tags. This is critical for SEO.', 
        'Add heading tags to structure content');
    }
    
    this.metrics.headingStructure = score;
  }

  /**
   * Analyze images for alt text
   */
  private analyzeImages(): void {
    const images = document.querySelectorAll('img');
    let score = 0;
    
    if (images.length > 0) {
      let imagesWithAlt = 0;
      
      images.forEach(img => {
        const alt = img.getAttribute('alt');
        if (alt && alt.trim().length > 0) {
          imagesWithAlt++;
        }
      });
      
      const altPercentage = (imagesWithAlt / images.length) * 100;
      score = altPercentage;
      
      if (altPercentage < 100) {
        this.addRecommendation('warning', 'Images', 
          `${Math.round(100 - altPercentage)}% of images are missing alt text.`, 
          'Add descriptive alt text to all images');
      }
      
      const decorativeImages = Array.from(images).filter(img => {
        const alt = img.getAttribute('alt');
        return alt === '' || alt === 'decorative';
      });
      
      if (decorativeImages.length > 0) {
        score += 10;
      }
    }
    
    this.metrics.imageAltText = score;
  }

  /**
   * Setup meta tags
   */
  private setupMetaTags(): void {
    if (!this.config.enableMetaTags) return;
    
    if (!document.querySelector('meta[name="viewport"]')) {
      const viewport = document.createElement('meta');
      viewport.name = 'viewport';
      viewport.content = 'width=device-width, initial-scale=1';
      document.head.appendChild(viewport);
    }
    
    if (!document.querySelector('meta[charset]')) {
      const charset = document.createElement('meta');
      charset.setAttribute('charset', 'utf-8');
      document.head.appendChild(charset);
    }
  }

  /**
   * Setup structured data
   */
  private setupStructuredData(): void {
    if (!this.config.enableStructuredData) return;
    
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "description": "Advanced AI and IT Solutions Provider",
      "url": window.location.origin,
      "logo": `${window.location.origin}/logo.png`,
      "sameAs": [
        "https://linkedin.com/company/zion-tech-group",
        "https://twitter.com/ziontechgroup"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-0123",
        "contactType": "customer service",
        "email": "info@ziontech.com"
      }
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(organizationSchema);
    document.head.appendChild(script);
  }

  /**
   * Add SEO recommendation
   */
  private addRecommendation(type: 'critical' | 'warning' | 'suggestion', category: string, message: string, action: string): void {
    this.recommendations.push({
      type,
      category,
      message,
      action
    });
  }

  /**
   * Calculate overall SEO score
   */
  private calculateOverallScore(): void {
    const scores = [
      this.metrics.titleOptimization,
      this.metrics.metaDescriptionOptimization,
      this.metrics.headingStructure,
      this.metrics.imageAltText
    ];
    
    this.metrics.overallScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
  }

  /**
   * Get current metrics
   */
  public getMetrics(): SEOMetrics {
    return { ...this.metrics };
  }

  /**
   * Get SEO recommendations
   */
  public getRecommendations(): SEORecommendation[] {
    return [...this.recommendations];
  }

  /**
   * Generate SEO report
   */
  public generateReport(): string {
    const metrics = this.getMetrics();
    const recommendations = this.getRecommendations();
    
    let report = `
🔍 Enhanced SEO Report
=====================
Overall Score: ${metrics.overallScore.toFixed(1)}/100

📊 SEO Metrics:
- Title Optimization: ${metrics.titleOptimization.toFixed(1)}/100
- Meta Description: ${metrics.metaDescriptionOptimization.toFixed(1)}/100
- Heading Structure: ${metrics.headingStructure.toFixed(1)}/100
- Image Alt Text: ${metrics.imageAltText.toFixed(1)}/100

📋 Recommendations (${recommendations.length}):
`;

    recommendations.forEach((rec, index) => {
      report += `${index + 1}. [${rec.type.toUpperCase()}] ${rec.message}\n   Action: ${rec.action}\n\n`;
    });
    
    return report;
  }

  /**
   * Cleanup
   */
  public cleanup(): void {
    this.recommendations = [];
    this.isInitialized = false;
  }
}

// Export singleton instance
export const enhancedSEOOptimizer = new EnhancedSEOOptimizer();
export { EnhancedSEOOptimizer };
export default EnhancedSEOOptimizer;
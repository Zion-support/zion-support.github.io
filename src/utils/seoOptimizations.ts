/**
 * Advanced SEO Optimizations
 * Comprehensive SEO enhancement utilities for the Zion Tech Group website
 */

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage: string;
  ogUrl: string;
  ogType: 'website' | 'article';
  ogTitle: string;
  ogDescription: string;
  twitterCard: 'summary' | 'summary_large_image';
  siteName: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
}

export class SEOOptimizer {
  private static instance: SEOOptimizer;
  private currentData: SEOData | null = null;

  static getInstance(): SEOOptimizer {
    if (!SEOOptimizer.instance) {
      SEOOptimizer.instance = new SEOOptimizer();
    }
    return SEOOptimizer.instance;
  }

  // Update meta tags
  updateMetaTags(data: SEOData): void {
    this.currentData = data;
    
    // Update title
    document.title = data.title;

    // Update meta description
    this.updateMetaTag('name', 'description', data.description);
    
    // Update meta keywords
    this.updateMetaTag('name', 'keywords', data.keywords.join(', '));

    // Update canonical URL
    this.updateCanonicalUrl(data.canonicalUrl);

    // Update Open Graph tags
    this.updateOpenGraphTags(data);

    // Update Twitter Card tags
    this.updateTwitterCardTags(data);

    // Update structured data
    this.updateStructuredData(data);
  }

  private updateMetaTag(attribute: string, value: string, content: string): void {
    let meta = document.querySelector(`meta[${attribute}="${value}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, value);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  }

  private updateCanonicalUrl(url: string): void {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }

  private updateOpenGraphTags(data: SEOData): void {
    const ogTags = [
      { property: 'og:title', content: data.ogTitle },
      { property: 'og:description', content: data.ogDescription },
      { property: 'og:image', content: data.ogImage },
      { property: 'og:url', content: data.ogUrl },
      { property: 'og:type', content: data.ogType },
      { property: 'og:site_name', content: data.siteName }
    ];

    ogTags.forEach(tag => {
      this.updateMetaTag('property', tag.property, tag.content);
    });
  }

  private updateTwitterCardTags(data: SEOData): void {
    const twitterTags = [
      { name: 'twitter:card', content: data.twitterCard },
      { name: 'twitter:title', content: data.twitterTitle },
      { name: 'twitter:description', content: data.twitterDescription },
      { name: 'twitter:image', content: data.twitterImage }
    ];

    twitterTags.forEach(tag => {
      this.updateMetaTag('name', tag.name, tag.content);
    });
  }

  private updateStructuredData(data: SEOData): void {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      description: data.description,
      url: data.canonicalUrl,
      logo: data.ogImage,
      sameAs: [
        'https://twitter.com/ziontechgroup',
        'https://linkedin.com/company/zion-tech-group'
      ]
    };

    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }

  // Generate sitemap
  generateSitemap(pages: Array<{ url: string; lastmod: string; changefreq: string; priority: number }>): string {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    return sitemap;
  }

  // Generate robots.txt
  generateRobotsTxt(): string {
    return `User-agent: *
Allow: /

Sitemap: https://zion.app/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
`;
  }

  // Optimize images for SEO
  optimizeImages(): void {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add alt text if missing
      if (!img.alt) {
        img.alt = this.generateAltText(img.src);
      }

      // Add loading="lazy" for non-critical images
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }

      // Add width and height attributes
      if (!img.hasAttribute('width') && !img.hasAttribute('height')) {
        img.addEventListener('load', () => {
          img.setAttribute('width', img.naturalWidth.toString());
          img.setAttribute('height', img.naturalHeight.toString());
        });
      }
    });
  }

  private generateAltText(src: string): string {
    const filename = src.split('/').pop()?.split('.')[0] || 'image';
    return filename.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  }

  // Monitor Core Web Vitals for SEO
  monitorCoreWebVitals(): void {
    if ('PerformanceObserver' in window) {
      // Monitor LCP
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // Monitor FID
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'first-input') {
            const fid = (entry as any).processingStart - entry.startTime;
            console.log('FID:', fid);
          }
        }
      }).observe({ entryTypes: ['first-input'] });

      // Monitor CLS
      new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        if (clsValue > 0) {
          console.log('CLS:', clsValue);
        }
      }).observe({ entryTypes: ['layout-shift'] });
    }
  }

  // Get current SEO data
  getCurrentData(): SEOData | null {
    return this.currentData;
  }
}

// Export singleton instance
export const seoOptimizer = SEOOptimizer.getInstance();

// Utility functions
export const generatePageTitle = (pageName: string, siteName: string = 'Zion Tech Group'): string => {
  return `${pageName} | ${siteName}`;
};

export const generateMetaDescription = (content: string, maxLength: number = 160): string => {
  if (content.length <= maxLength) return content;
  return content.substring(0, maxLength - 3) + '...';
};

export const generateKeywords = (content: string): string[] => {
  const words = content.toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 3);
  
  const wordCount: Record<string, number> = {};
  words.forEach(word => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });
  
  return Object.entries(wordCount)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 10)
    .map(([word]) => word);
};
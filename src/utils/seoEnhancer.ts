/**
 * Advanced SEO Enhancer
 * Comprehensive SEO optimization utilities
 */

interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: any;
  robots?: string;
  language?: string;
  author?: string;
  publisher?: string;
  lastModified?: string;
}

class SEOEnhancer {
  private config: SEOConfig;

  constructor(config: SEOConfig) {
    this.config = config;
  }

  initialize(): void {
    this.updateTitle();
    this.updateMetaTags();
    this.updateStructuredData();
    this.updateCanonicalUrl();
  }

  private updateTitle(): void {
    document.title = this.config.title;
  }

  private updateMetaTags(): void {
    this.updateMetaTag('description', this.config.description);
    this.updateMetaTag('keywords', this.config.keywords.join(', '));
    this.updateMetaTag('robots', this.config.robots || 'index, follow');
    this.updateMetaTag('language', this.config.language || 'en');
    this.updateMetaTag('author', this.config.author || '');
    this.updateMetaTag('publisher', this.config.publisher || '');
    this.updateMetaTag('last-modified', this.config.lastModified || new Date().toISOString());

    // Open Graph tags
    this.updateMetaTag('og:title', this.config.title, 'property');
    this.updateMetaTag('og:description', this.config.description, 'property');
    this.updateMetaTag('og:url', this.config.canonicalUrl, 'property');
    this.updateMetaTag('og:type', this.config.ogType || 'website', 'property');
    if (this.config.ogImage) {
      this.updateMetaTag('og:image', this.config.ogImage, 'property');
    }

    // Twitter Card tags
    if (this.config.twitterCard) {
      this.updateMetaTag('twitter:card', this.config.twitterCard);
      this.updateMetaTag('twitter:title', this.config.title);
      this.updateMetaTag('twitter:description', this.config.description);
      if (this.config.ogImage) {
        this.updateMetaTag('twitter:image', this.config.ogImage);
      }
    }
  }

  private updateMetaTag(name: string, content: string, attribute: string = 'name'): void {
    let metaTag = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
    
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute(attribute, name);
      document.head.appendChild(metaTag);
    }
    
    metaTag.setAttribute('content', content);
  }

  private updateStructuredData(): void {
    if (this.config.structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(this.config.structuredData);
      document.head.appendChild(script);
    }
  }

  private updateCanonicalUrl(): void {
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    
    canonicalLink.href = this.config.canonicalUrl;
  }

  generateSitemap(): string {
    // This would typically generate a sitemap XML
    // For now, return a simple structure
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${this.config.canonicalUrl}</loc>
    <lastmod>${this.config.lastModified || new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;
  }

  generateRobotsTxt(): string {
    return `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Sitemap: ${this.config.canonicalUrl}/sitemap.xml`;
  }
}

export default SEOEnhancer;
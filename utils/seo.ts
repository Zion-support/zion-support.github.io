/**
 * SEO Utilities
 * Enhanced search engine optimization
 */

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonicalUrl?: string;
  robots?: string;
}

export class SEOManager {
  private config: SEOConfig;
  
  constructor(config: SEOConfig) {
    this.config = config;
    this.updateMetaTags();
  }
  
  private updateMetaTags() {
    // Update title
    document.title = this.config.title;
    
    // Update meta description
    this.updateMetaTag('description', this.config.description);
    
    // Update keywords
    this.updateMetaTag('keywords', this.config.keywords.join(', '));
    
    // Update Open Graph tags
    this.updateMetaTag('og:title', this.config.title, 'property');
    this.updateMetaTag('og:description', this.config.description, 'property');
    this.updateMetaTag('og:image', this.config.ogImage, 'property');
    
    // Update canonical URL
    if (this.config.canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = this.config.canonicalUrl;
    }
    
    // Update robots
    this.updateMetaTag('robots', this.config.robots || 'index, follow');
  }
  
  private updateMetaTag(name: string, content: string, attribute: string = 'name') {
    let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, name);
      document.head.appendChild(meta);
    }
    meta.content = content;
  }
  
  generateStructuredData(type: string, data: any) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': type,
      ...data
    });
    document.head.appendChild(script);
  }
  
  updateConfig(newConfig: Partial<SEOConfig>) {
    this.config = { ...this.config, ...newConfig };
    this.updateMetaTags();
  }
}

export const createSEOManager = (config: SEOConfig) => new SEOManager(config);

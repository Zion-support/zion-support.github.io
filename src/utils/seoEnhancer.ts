// SeoEnhancer utility
// This file contains utility functions and configurations

interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: unknown;
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

  init() {
    this.updateTitle();
    this.updateMetaTags();
    this.updateCanonicalUrl();
    this.updateOpenGraphTags();
    this.updateTwitterTags();
    this.updateStructuredData();
  }

  private updateTitle() {
    if (typeof document !== 'undefined') {
      document.title = this.config.title;
    }
  }

  private updateMetaTags() {
    if (typeof document !== 'undefined') {
      // Update description
      this.updateMetaTag('description', this.config.description);
      
      // Update keywords
      this.updateMetaTag('keywords', this.config.keywords.join(', '));
      
      // Update robots
      if (this.config.robots) {
        this.updateMetaTag('robots', this.config.robots);
      }
      
      // Update language
      if (this.config.language) {
        this.updateMetaTag('language', this.config.language);
      }
      
      // Update author
      if (this.config.author) {
        this.updateMetaTag('author', this.config.author);
      }
    }
  }

  private updateMetaTag(name: string, content: string) {
    if (typeof document !== 'undefined') {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    }
  }

  private updateCanonicalUrl() {
    if (typeof document !== 'undefined') {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = this.config.canonicalUrl;
    }
  }

  private updateOpenGraphTags() {
    if (typeof document !== 'undefined') {
      // Update og:title
      this.updateMetaProperty('og:title', this.config.title);
      
      // Update og:description
      this.updateMetaProperty('og:description', this.config.description);
      
      // Update og:url
      this.updateMetaProperty('og:url', this.config.canonicalUrl);
      
      // Update og:type
      if (this.config.ogType) {
        this.updateMetaProperty('og:type', this.config.ogType);
      }
      
      // Update og:image
      if (this.config.ogImage) {
        this.updateMetaProperty('og:image', this.config.ogImage);
      }
    }
  }

  private updateMetaProperty(property: string, content: string) {
    if (typeof document !== 'undefined') {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    }
  }

  private updateTwitterTags() {
    if (typeof document !== 'undefined') {
      // Update twitter:card
      if (this.config.twitterCard) {
        this.updateMetaName('twitter:card', this.config.twitterCard);
      }
      
      // Update twitter:title
      this.updateMetaName('twitter:title', this.config.title);
      
      // Update twitter:description
      this.updateMetaName('twitter:description', this.config.description);
      
      // Update twitter:image
      if (this.config.ogImage) {
        this.updateMetaName('twitter:image', this.config.ogImage);
      }
    }
  }

  private updateMetaName(name: string, content: string) {
    if (typeof document !== 'undefined') {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    }
  }

  private updateStructuredData() {
    if (typeof document !== 'undefined' && this.config.structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(this.config.structuredData);
    }
  }

  cleanup() {
    // Cleanup function if needed
  }
}

// Default SEO configuration
const defaultSEOConfig: SEOConfig = {
  title: 'Zion Tech Group - Advanced AI and IT Solutions',
  description: 'Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology.',
  keywords: ['AI', 'artificial intelligence', 'IT solutions', 'quantum computing', 'automation', 'digital transformation', 'machine learning', 'cybersecurity'],
  canonicalUrl: 'https://ziontechgroup.com',
  ogImage: 'https://ziontechgroup.com/og-image.jpg',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  robots: 'index, follow',
  language: 'en-US',
  author: 'Zion Tech Group',
  publisher: 'Zion Tech Group'
};

// Create and export SEO enhancer instance
const seoEnhancer = new SEOEnhancer(defaultSEOConfig);

export default seoEnhancer;
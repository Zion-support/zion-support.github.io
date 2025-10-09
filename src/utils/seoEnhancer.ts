// SEOEnhancer utility
interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage?: string;
  twitterCard?: string;
}

export class SEOEnhancer {
  private config: SEOConfig;

  constructor(config: SEOConfig) {
    this.config = config;
    this.init();
  }

  init() {
    this.updateTitle();
    this.updateMetaTags();
    this.updateStructuredData();
    this.setupCanonicalUrl();
  }

  private updateTitle() {
    document.title = this.config.title;
  }

  private updateMetaTags() {
    // Update or create meta description
    this.updateMetaTag('description', this.config.description);
    
    // Update or create meta keywords
    this.updateMetaTag('keywords', this.config.keywords.join(', '));
    
    // Update or create Open Graph tags
    this.updateMetaTag('og:title', this.config.title, 'property');
    this.updateMetaTag('og:description', this.config.description, 'property');
    this.updateMetaTag('og:url', this.config.canonicalUrl, 'property');
    this.updateMetaTag('og:type', 'website', 'property');
    
    if (this.config.ogImage) {
      this.updateMetaTag('og:image', this.config.ogImage, 'property');
    }
    
    // Update or create Twitter Card tags
    this.updateMetaTag('twitter:card', this.config.twitterCard || 'summary_large_image', 'name');
    this.updateMetaTag('twitter:title', this.config.title, 'name');
    this.updateMetaTag('twitter:description', this.config.description, 'name');
    
    if (this.config.ogImage) {
      this.updateMetaTag('twitter:image', this.config.ogImage, 'name');
    }
  }

  private updateMetaTag(name: string, content: string, attribute: string = 'name') {
    let metaTag = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
    
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute(attribute, name);
      document.head.appendChild(metaTag);
    }
    
    metaTag.setAttribute('content', content);
  }

  private updateStructuredData() {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "description": this.config.description,
      "url": this.config.canonicalUrl,
      "logo": "https://ziontechgroup.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "contactType": "customer service"
      },
      "sameAs": [
        "https://www.linkedin.com/company/zion-tech-group",
        "https://twitter.com/ziontechgroup"
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

  private setupCanonicalUrl() {
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    
    canonicalLink.href = this.config.canonicalUrl;
  }

  updateConfig(newConfig: Partial<SEOConfig>) {
    this.config = { ...this.config, ...newConfig };
    this.init();
  }
}

export default SEOEnhancer;
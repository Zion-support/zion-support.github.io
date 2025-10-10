// SEOEnhancer utility
// This file contains utility functions and configurations for SEO enhancement

interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
}

export default class SEOEnhancer {
  private config: SEOConfig;

  constructor(config: SEOConfig) {
    this.config = config;
    this.init();
  }

  init() {
    if (typeof window !== 'undefined') {
      this.updateMetaTags();
      this.addStructuredData();
      this.optimizeImages();
    }
  }

  updateMetaTags() {
    // Update title
    document.title = this.config.title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', this.config.description);

    // Update keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', this.config.keywords.join(', '));

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', this.config.canonicalUrl);
  }

  addStructuredData() {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "description": this.config.description,
      "url": this.config.canonicalUrl,
      "logo": `${this.config.canonicalUrl}/logo.png`,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "contactType": "customer service",
        "email": "kleber@ziontechgroup.com"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }

  optimizeImages() {
    // Add alt attributes to images without them
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach(img => {
      img.setAttribute('alt', this.config.title);
    });
  }
}

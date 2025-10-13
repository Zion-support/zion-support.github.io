export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;

}

export interface SeoConfig {
  enabled: boolean;
  metaTags: boolean;
  structuredData: boolean;

}

export class SEOUtils {
  private config: SEOConfig;

  constructor(config: SEOConfig) {
    this.config = config;
  }

  generateMetaTags() {
    return {
      title: this.config.title,
      description: this.config.description,
      keywords: this.config.keywords.join(', '),
      canonical: this.config.canonicalUrl,
      'og:title': this.config.title,
      'og:description': this.config.description,
      'og:image': this.config.ogImage,
      'twitter:card': this.config.twitterCard || 'summary_large_image',
      'twitter:title': this.config.title,
      'twitter:description': this.config.description,
      'twitter:image': this.config.ogImage,
    };
  }

  generateStructuredData() {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "description": this.config.description,
      "url": this.config.canonicalUrl || '',
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
    
    return structuredData;
  }

  updateTitle(title: string) {
    document.title = title;
  }

  updateMetaDescription(description: string) {
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
  }

  updateMetaKeywords(keywords: string[]) {
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords.join(', '));
  }

  updateCanonicalUrl(url: string) {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }

}


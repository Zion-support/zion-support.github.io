export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  robots?: string;
  viewport?: string;
  charset?: string;
  author?: string;
  publisher?: string;
  language?: string;
}

export interface PageSEOProps {
  config: SEOConfig;
  children?: React.ReactNode;
}

export const defaultSEOConfig: SEOConfig = {
  title: 'Zion Tech Group - Advanced AI and IT Solutions',
  description: 'Leading provider of advanced AI and IT solutions for businesses worldwide. Expert services in artificial intelligence, cloud computing, cybersecurity, and digital transformation.',
  keywords: [
    'AI solutions',
    'artificial intelligence',
    'IT services',
    'cloud computing',
    'cybersecurity',
    'digital transformation',
    'machine learning',
    'data analytics',
    'automation',
    'software development'
  ],
  canonicalUrl: 'https://zion.app',
  ogImage: 'https://zion.app/og-image.jpg',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
  charset: 'utf-8',
  author: 'Zion Tech Group',
  publisher: 'Zion Tech Group',
  language: 'en-US'
};

export class SEOUtils {
  private config: SEOConfig;

  constructor(config: SEOConfig = defaultSEOConfig) {
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
      'og:type': this.config.ogType || 'website',
      'twitter:card': this.config.twitterCard || 'summary_large_image',
      'twitter:title': this.config.title,
      'twitter:description': this.config.description,
      'twitter:image': this.config.ogImage,
    };
  }

  updateTitle(title: string): void {
    document.title = title;
  }

  updateMetaDescription(description: string): void {
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
  }

  updateMetaKeywords(keywords: string[]): void {
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords.join(', '));
  }

  updateCanonicalUrl(url: string): void {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }

  updateOpenGraphTags(tags: Record<string, string>): void {
    Object.entries(tags).forEach(([property, content]) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });
  }

  updateTwitterCardTags(tags: Record<string, string>): void {
    Object.entries(tags).forEach(([name, content]) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });
  }

  generateStructuredData(data: Record<string, any>): void {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  getConfig(): SEOConfig {
    return { ...this.config };
  }
}

// Export utility functions
export const seoUtils = new SEOUtils();
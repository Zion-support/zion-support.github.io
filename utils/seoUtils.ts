export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
<<<<<<< HEAD
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: any;
  robots?: string;
  viewport?: string;
  charset?: string;
  author?: string;
  publisher?: string;
  language?: string;
  geo?: {
    latitude?: number;
    longitude?: number;
    region?: string;
    placename?: string;
  };
  alternate?: Array<{
    hreflang: string;
    href: string;
  }>;
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6995
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

<<<<<<< HEAD
export function generateStructuredData(config: SEOConfig) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: config.canonicalUrl || 'https://zion.app',
    logo: config.ogImage || 'https://zion.app/logo.png',
    description: config.description,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'contact@zion.app'
    },
    sameAs: [
      'https://twitter.com/ziontechgroup',
      'https://linkedin.com/company/zion-tech-group',
      'https://github.com/zion-tech-group'
    ]
  };

  return {
    ...structuredData,
    ...config.structuredData
  };
}

export function generateMetaTags(config: SEOConfig) {
  const tags = [
    { name: 'description', content: config.description },
    { name: 'keywords', content: config.keywords.join(', ') },
    { name: 'robots', content: config.robots || 'index, follow' },
    { name: 'viewport', content: config.viewport || 'width=device-width, initial-scale=1.0' },
    { name: 'charset', content: config.charset || 'utf-8' },
    { name: 'author', content: config.author || 'Zion Tech Group' },
    { name: 'publisher', content: config.publisher || 'Zion Tech Group' },
    { name: 'language', content: config.language || 'en-US' },
    
    // Open Graph tags
    { property: 'og:title', content: config.ogTitle || config.title },
    { property: 'og:description', content: config.ogDescription || config.description },
    { property: 'og:type', content: config.ogType || 'website' },
    { property: 'og:url', content: config.canonicalUrl || config.canonical },
    { property: 'og:image', content: config.ogImage },
    { property: 'og:site_name', content: 'Zion Tech Group' },
    
    // Twitter Card tags
    { name: 'twitter:card', content: config.twitterCard || 'summary_large_image' },
    { name: 'twitter:title', content: config.twitterTitle || config.title },
    { name: 'twitter:description', content: config.twitterDescription || config.description },
    { name: 'twitter:image', content: config.twitterImage || config.ogImage },
    
    // Canonical URL
    { rel: 'canonical', href: config.canonicalUrl || config.canonical }
  ];

  // Add geo tags if provided
  if (config.geo) {
    if (config.geo.latitude && config.geo.longitude) {
      tags.push({ name: 'geo.position', content: `${config.geo.latitude};${config.geo.longitude}` });
    }
    if (config.geo.region) {
      tags.push({ name: 'geo.region', content: config.geo.region });
    }
    if (config.geo.placename) {
      tags.push({ name: 'geo.placename', content: config.geo.placename });
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-6995
    }
  }

<<<<<<< HEAD
  // Add alternate language tags if provided
  if (config.alternate) {
    config.alternate.forEach(alt => {
      tags.push({ rel: 'alternate', href: alt.href, hreflang: alt.hreflang } as any);
    });
  }

  return tags.filter(tag => tag.content || tag.href);
}

export function generatePageTitle(config: SEOConfig, siteName = 'Zion Tech Group') {
  if (config.title === siteName) {
    return config.title;
  }
  return `${config.title} | ${siteName}`;
}

export function validateSEOConfig(config: SEOConfig): string[] {
  const errors: string[] = [];
  
  if (!config.title || config.title.trim().length === 0) {
    errors.push('Title is required');
  }
  
  if (!config.description || config.description.trim().length === 0) {
    errors.push('Description is required');
  }
  
  if (config.description && config.description.length > 160) {
    errors.push('Description should be 160 characters or less for optimal SEO');
  }
  
  if (!config.keywords || config.keywords.length === 0) {
    errors.push('Keywords are required');
  }
  
  if (config.keywords && config.keywords.length > 10) {
    errors.push('Keywords should be limited to 10 or fewer for optimal SEO');
  }
  
  return errors;
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-6995
}
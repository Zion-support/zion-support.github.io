export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
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
    }
  }

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
}
interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage: string;
  ogType: string;
  twitterCard: string;
  robots: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  geo?: {
    latitude?: string;
    longitude?: string;
    region?: string;
    placename?: string;
  };
  alternate?: Array<{
    hreflang: string;
    href: string;
  }>;
  structuredData?: any;
  twitterImage?: string;
  viewport?: string;
  charset?: string;
  publisher?: string;
  language?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogSiteName?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterSite?: string;
  twitterCreator?: string;
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
    'business intelligence'
  ],
  canonicalUrl: 'https://zion.app',
  ogImage: '/images/og-image.jpg',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  charset: 'utf-8',
  publisher: 'Zion Tech Group',
  language: 'en-US'
};

export function generateSEOTags(config: SEOConfig): string {
  const tags: string[] = [];

  // Basic meta tags
  tags.push(`<title>${config.title}</title>`);
  tags.push(`<meta name="description" content="${config.description}" />`);
  tags.push(`<meta name="keywords" content="${config.keywords.join(', ')}" />`);
  tags.push(`<meta name="robots" content="${config.robots}" />`);
  tags.push(`<meta name="viewport" content="${config.viewport || 'width=device-width, initial-scale=1'}" />`);
  tags.push(`<meta charset="${config.charset || 'utf-8'}" />`);

  // Canonical URL
  tags.push(`<link rel="canonical" href="${config.canonicalUrl}" />`);

  // Open Graph tags
  tags.push(`<meta property="og:title" content="${config.ogTitle || config.title}" />`);
  tags.push(`<meta property="og:description" content="${config.ogDescription || config.description}" />`);
  tags.push(`<meta property="og:image" content="${config.ogImage}" />`);
  tags.push(`<meta property="og:url" content="${config.ogUrl || config.canonicalUrl}" />`);
  tags.push(`<meta property="og:type" content="${config.ogType}" />`);
  tags.push(`<meta property="og:site_name" content="${config.ogSiteName || 'Zion Tech Group'}" />`);

  // Twitter Card tags
  tags.push(`<meta name="twitter:card" content="${config.twitterCard}" />`);
  tags.push(`<meta name="twitter:title" content="${config.twitterTitle || config.title}" />`);
  tags.push(`<meta name="twitter:description" content="${config.twitterDescription || config.description}" />`);
  if (config.twitterImage || config.ogImage) {
    tags.push(`<meta name="twitter:image" content="${config.twitterImage || config.ogImage}" />`);
  }

  // Geo tags
  if (config.geo) {
    if (config.geo.latitude && config.geo.longitude) {
      tags.push(`<meta name="geo.position" content="${config.geo.latitude};${config.geo.longitude}" />`);
    }
    if (config.geo.region) {
      tags.push(`<meta name="geo.region" content="${config.geo.region}" />`);
    }
    if (config.geo.placename) {
      tags.push(`<meta name="geo.placename" content="${config.geo.placename}" />`);
    }
  }

  // Alternate language tags
  if (config.alternate && config.alternate.length > 0) {
    config.alternate.forEach((alt: { hreflang: string; href: string }) => {
      tags.push(`<link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}" />`);
    });
  }

  // Structured data
  if (config.structuredData) {
    tags.push(`<script type="application/ld+json">${JSON.stringify(config.structuredData)}</script>`);
  }

  return tags.join('\n');
}

export function generatePageSEO(pageConfig: Partial<SEOConfig>): SEOConfig {
  return {
    ...defaultSEOConfig,
    ...pageConfig
  };
}

export function generateStructuredData(config: SEOConfig): any {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    description: config.description,
    url: config.canonicalUrl,
    logo: config.ogImage,
    sameAs: [
      'https://twitter.com/ziontechgroup',
      'https://linkedin.com/company/zion-tech-group'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-0123',
      contactType: 'customer service',
      availableLanguage: ['English']
    }
  };
}
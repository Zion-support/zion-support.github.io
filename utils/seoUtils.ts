interface SEOConfig {
  title: string
  description: string
  keywords: string[]
  canonicalUrl: string
  ogImage: string
  ogType: string
  twitterCard: string
  robots: string
  author?: string
  publishedTime?: string
  modifiedTime?: string
  section?: string
  tags?: string[]
  viewport?: string
  charset?: string
  publisher?: string
  language?: string
  ogTitle?: string
  ogDescription?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  geo?: {
    latitude?: string
    longitude?: string
    region?: string
    placename?: string
  }
  alternate?: Array<{
    href: string
    hreflang: string
  }>
  structuredData?: any
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
  canonicalUrl: 'https://ziontechgroup.com',
  ogImage: 'https://ziontechgroup.com/og-image.jpg',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  robots: 'index, follow',
  author: 'Zion Tech Group',
  publisher: 'Zion Tech Group',
  language: 'en-US',
  charset: 'UTF-8',
  viewport: 'width=device-width, initial-scale=1.0',
  ogTitle: 'Zion Tech Group - Advanced AI and IT Solutions',
  ogDescription: 'Leading provider of advanced AI and IT solutions for businesses worldwide.',
  twitterTitle: 'Zion Tech Group - Advanced AI and IT Solutions',
  twitterDescription: 'Leading provider of advanced AI and IT solutions for businesses worldwide.',
  twitterImage: 'https://ziontechgroup.com/twitter-image.jpg',
  geo: {
    region: 'US',
    placename: 'United States'
  },
  alternate: [
    { href: 'https://ziontechgroup.com/en', hreflang: 'en' },
    { href: 'https://ziontechgroup.com/es', hreflang: 'es' }
  ],
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    description: 'Leading provider of advanced AI and IT solutions for businesses worldwide.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-0123',
      contactType: 'customer service'
    }
  }
}

export function generateSEOTags(config: SEOConfig): string {
  const tags = [
    `<title>${config.title}</title>`,
    `<meta name="description" content="${config.description}">`,
    `<meta name="keywords" content="${config.keywords.join(', ')}">`,
    `<meta name="robots" content="${config.robots}">`,
    `<meta name="author" content="${config.author || 'Zion Tech Group'}">`,
    `<meta charset="${config.charset || 'UTF-8'}">`,
    `<meta name="viewport" content="${config.viewport || 'width=device-width, initial-scale=1.0'}">`,
    `<link rel="canonical" href="${config.canonicalUrl}">`,
    `<meta property="og:title" content="${config.ogTitle || config.title}">`,
    `<meta property="og:description" content="${config.ogDescription || config.description}">`,
    `<meta property="og:image" content="${config.ogImage}">`,
    `<meta property="og:url" content="${config.canonicalUrl}">`,
    `<meta property="og:type" content="${config.ogType}">`,
    `<meta name="twitter:card" content="${config.twitterCard}">`,
    `<meta name="twitter:title" content="${config.twitterTitle || config.title}">`,
    `<meta name="twitter:description" content="${config.twitterDescription || config.description}">`,
    `<meta name="twitter:image" content="${config.twitterImage || config.ogImage}">`
  ];

  if (config.publishedTime) {
    tags.push(`<meta property="article:published_time" content="${config.publishedTime}">`);
  }

  if (config.modifiedTime) {
    tags.push(`<meta property="article:modified_time" content="${config.modifiedTime}">`);
  }

  if (config.section) {
    tags.push(`<meta property="article:section" content="${config.section}">`);
  }

  if (config.tags) {
    config.tags.forEach(tag => {
      tags.push(`<meta property="article:tag" content="${tag}">`);
    });
  }

  if (config.geo) {
    if (config.geo.latitude) {
      tags.push(`<meta name="geo.position" content="${config.geo.latitude};${config.geo.longitude}">`);
    }
    if (config.geo.region) {
      tags.push(`<meta name="geo.region" content="${config.geo.region}">`);
    }
    if (config.geo.placename) {
      tags.push(`<meta name="geo.placename" content="${config.geo.placename}">`);
    }
  }

  if (config.alternate) {
    config.alternate.forEach(alt => {
      tags.push(`<link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}">`);
    });
  }

  if (config.structuredData) {
    tags.push(`<script type="application/ld+json">${JSON.stringify(config.structuredData)}</script>`);
  }

  return tags.join('\n');
}

export function generatePageTitle(pageTitle: string, siteName: string = 'Zion Tech Group'): string {
  return pageTitle ? `${pageTitle} | ${siteName}` : siteName;
}

export function generateMetaDescription(description: string, maxLength: number = 160): string {
  if (description.length <= maxLength) {
    return description;
  }
  return description.substring(0, maxLength - 3) + '...';
}
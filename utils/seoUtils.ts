interface SEOConfig {
  
  title: string,
  description: string,
  keywords: string[];
  canonicalUrl: string,
  ogImage: string,
  ogType: string,
  twitterCard: string,
  robots: string;
author?: string;
publishedTime?: string;
modifiedTime?: string;
section?: string;
tags?: string[]
  viewport?: string;
charset?: string;
publisher?: string;
language?: string;
ogTitle?: string;
ogDescription?: string;
twitterTitle?: string;
twitterDescription?: string;
twitterImage?: string;
geo?: {
    latitude?: string;
longitude?: string;
region?: string;
placename?: string;
  
}
  alternate?: Array<{
    href: string,
  hreflang: string;
  }>
  structuredData?: unknown;
structuredData?: Record<string, unknown>
}

export const,
  defaultSEOConfig: SEOConfig = {
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
  ogImage: 'https://zion.app/og-image.jpg',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  robots: 'index, follow',
  author: 'Zion Tech Group',
  publisher: 'Zion Tech Group',
  language: 'en-US',
  viewport: 'width=device-width, initial-scale=1.0',
  charset: 'UTF-8',
  ogTitle: 'Zion Tech Group - Advanced AI and IT Solutions',
  ogDescription: 'Leading provider of advanced AI and IT solutions for businesses worldwide.',
  twitterTitle: 'Zion Tech Group - Advanced AI and IT Solutions',
  twitterDescription: 'Leading provider of advanced AI and IT solutions for businesses worldwide.',
  twitterImage: '/images/og-image.jpg',
  geo: {
    latitude: '40.7128',
    longitude: '-74.0060',
    region: 'US-NY',
    placename: 'New York'
  },
  alternate: [
    { href: 'https://zion.app/en', hreflang: 'en' },
    { href: 'https://zion.app/es', hreflang: 'es' }
  ],
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://zion.app',
    logo: 'https://zion.app/images/logo.png'
  }
}


export const generateImageAlt = (imagePath: string, alt?: string)  => {
  return alt || `Zion Tech Group - ${imagePath.split('/').pop()?.split('.')[0] || 'image'}`
}

export const generateCanonicalUrl = (path: string, baseUrl: string = 'https://zion.app')  => {
  return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
};

export const defaultMeta = {
  viewport: 'width=device-width, initial-scale=1',
  charset: 'UTF-8'
}

export const generateSEOTags = (config: Partial<SEOConfig> = {})  => {
  const seoConfig = { ...defaultSEOConfig, ...config }
  
  return {
    title: seoConfig.title,
    description: seoConfig.description,
    keywords: seoConfig.keywords.join(', '),
    canonical: seoConfig.canonicalUrl,
    openGraph: {
      title: seoConfig.ogTitle || seoConfig.title,
      description: seoConfig.ogDescription || seoConfig.description,
      url: seoConfig.canonicalUrl,
      type: seoConfig.ogType,
      image: seoConfig.ogImage;
    },
    twitter: {
      card: seoConfig.twitterCard,
      title: seoConfig.twitterTitle || seoConfig.title,
      description: seoConfig.twitterDescription || seoConfig.description,
      image: seoConfig.twitterImage || seoConfig.ogImage;
    },
    robots: seoConfig.robots,
    author: seoConfig.author,
    publisher: seoConfig.publisher,
    language: seoConfig.language;
  }
}
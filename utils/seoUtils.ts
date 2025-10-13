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
  };
  alternate?: Array<{
    href: string;
    hreflang: string;
  }>;
  defaultStructuredData?: any;
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
  defaultStructuredData: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://zion.app',
    logo: 'https://zion.app/images/logo.png'
  }
};

export const generateSEOMeta = (config: SEOConfig) => {
  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords.join(', '),
    robots: config.robots,
    viewport: config.viewport,
    charset: config.charset,
    author: config.author,
    publisher: config.publisher,
    language: config.language,
    'og:title': config.ogTitle || config.title,
    'og:description': config.ogDescription || config.description,
    'og:image': config.ogImage,
    'og:type': config.ogType,
    'og:url': config.canonicalUrl,
    'twitter:card': config.twitterCard,
    'twitter:title': config.twitterTitle || config.title,
    'twitter:description': config.twitterDescription || config.description,
    'twitter:image': config.twitterImage || config.ogImage,
    'geo.region': config.geo?.region,
    'geo.placename': config.geo?.placename,
    'geo.position': config.geo?.latitude && config.geo?.longitude 
      ? `${config.geo.latitude};${config.geo.longitude}` 
      : undefined,
    'canonical': config.canonicalUrl,
    'alternate': config.alternate?.map(alt => ({
      rel: 'alternate',
      hreflang: alt.hreflang,
      href: alt.href
    }))
  };
};

export const generateStructuredData = (config: SEOConfig) => {
  return config.defaultStructuredData ? JSON.stringify(config.defaultStructuredData) : '';
};

export const generateImageAlt = (imagePath: string, alt: string) => {
  return alt || `Zion Tech Group - ${imagePath.split('/').pop()?.split('.')[0] || 'image'}`;
};

export const generateCanonicalUrl = (path: string, baseUrl: string = 'https://zion.app') => {
  return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
};

export const generateSitemap = (pages: Array<{ path: string; lastmod?: string; priority?: number }>) => {
  const baseUrl = 'https://zion.app';
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
    <url>
      <loc>${baseUrl}${page.path}</loc>
      <lastmod>${page.lastmod || new Date().toISOString().split('T')[0]}</lastmod>
      <priority>${page.priority || 0.5}</priority>
    </url>
  `).join('')}
</urlset>`;
};

export const generateRobotsTxt = (config: SEOConfig) => {
  return `User-agent: *
Allow: /

Sitemap: ${config.canonicalUrl}/sitemap.xml`;
};

export default {
  defaultSEOConfig,
  generateSEOMeta,
  generateStructuredData,
  generateImageAlt,
  generateCanonicalUrl,
  generateSitemap,
  generateRobotsTxt
};
interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  robots?: string;
  viewport?: string;
  charset?: string;
  author?: string;
  publisher?: string;
  language?: string;
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
  author: 'Zion Tech Group',
  publisher: 'Zion Tech Group',
  language: 'en-US'
};

export const generateMetaTags = (config: SEOConfig): string => {
  const tags = [
    `<title>${config.title}</title>`,
    `<meta name="description" content="${config.description}" />`,
    `<meta name="keywords" content="${config.keywords.join(', ')}" />`,
    `<meta name="robots" content="${config.robots || 'index, follow'}" />`,
    `<meta name="viewport" content="${config.viewport || 'width=device-width, initial-scale=1'}" />`,
    `<meta charset="${config.charset || 'utf-8'}" />`,
    `<meta name="author" content="${config.author || 'Zion Tech Group'}" />`,
    `<meta name="publisher" content="${config.publisher || 'Zion Tech Group'}" />`,
    `<meta name="language" content="${config.language || 'en-US'}" />`,
    `<link rel="canonical" href="${config.canonicalUrl || 'https://zion.app'}" />`
  ];

  // Open Graph tags
  if (config.ogTitle || config.title) {
    tags.push(`<meta property="og:title" content="${config.ogTitle || config.title}" />`);
  }
  if (config.ogDescription || config.description) {
    tags.push(`<meta property="og:description" content="${config.ogDescription || config.description}" />`);
  }
  if (config.ogImage) {
    tags.push(`<meta property="og:image" content="${config.ogImage}" />`);
  }
  if (config.ogType) {
    tags.push(`<meta property="og:type" content="${config.ogType}" />`);
  }
  if (config.canonicalUrl) {
    tags.push(`<meta property="og:url" content="${config.canonicalUrl}" />`);
  }

  // Twitter Card tags
  if (config.twitterCard) {
    tags.push(`<meta name="twitter:card" content="${config.twitterCard}" />`);
  }
  if (config.twitterTitle || config.title) {
    tags.push(`<meta name="twitter:title" content="${config.twitterTitle || config.title}" />`);
  }
  if (config.twitterDescription || config.description) {
    tags.push(`<meta name="twitter:description" content="${config.twitterDescription || config.description}" />`);
  }
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
    config.alternate.forEach(alt => {
      tags.push(`<link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}" />`);
    });
  }

  // Structured data
  if (config.structuredData) {
    tags.push(`<script type="application/ld+json">${JSON.stringify(config.structuredData)}</script>`);
  }

  return tags.join('\n');
};

export const generateStructuredData = (config: SEOConfig): any => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": config.description,
    "url": config.canonicalUrl || "https://zion.app",
    "logo": config.ogImage || "/images/logo.png",
    "sameAs": [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/zion-tech-group"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-0123",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Tech Street",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94105",
      "addressCountry": "US"
    }
  };
};

export const validateSEOConfig = (config: SEOConfig): string[] => {
  const errors: string[] = [];

  if (!config.title || config.title.length < 10) {
    errors.push('Title should be at least 10 characters long');
  }

  if (!config.description || config.description.length < 120) {
    errors.push('Description should be at least 120 characters long');
  }

  if (!config.keywords || config.keywords.length === 0) {
    errors.push('Keywords should not be empty');
  }

  if (config.title && config.title.length > 60) {
    errors.push('Title should be less than 60 characters for optimal SEO');
  }

  if (config.description && config.description.length > 160) {
    errors.push('Description should be less than 160 characters for optimal SEO');
  }

  return errors;
};

export const optimizeSEOConfig = (config: SEOConfig): SEOConfig => {
  const optimized = { ...config };

  // Ensure title is within optimal length
  if (optimized.title && optimized.title.length > 60) {
    optimized.title = optimized.title.substring(0, 57) + '...';
  }

  // Ensure description is within optimal length
  if (optimized.description && optimized.description.length > 160) {
    optimized.description = optimized.description.substring(0, 157) + '...';
  }

  // Ensure keywords are unique and lowercase
  if (optimized.keywords) {
    optimized.keywords = [...new Set(optimized.keywords.map(k => k.toLowerCase()))];
  }

  return optimized;
};

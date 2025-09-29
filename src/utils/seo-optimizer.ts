/**
 * SEO Optimizer for Zion Tech Group Website
 * 
 * This utility provides comprehensive SEO optimization including:
 * - Meta tags management
 * - Structured data generation
 * - Sitemap generation
 * - Open Graph tags
 * - Twitter Card tags
 * - Schema.org markup
 */

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;
  structuredData?: Record<string, any>;
}

export interface PageSEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogImage: string;
  structuredData: Record<string, any>;
}

// Default SEO configuration
export const defaultSEOConfig: PageSEOConfig = {
  title: 'Zion Tech Group - Leading AI & Technology Solutions',
  description: 'Transform your business with cutting-edge AI, micro SaaS, and IT solutions. Enterprise-grade automation, cloud migration, and digital transformation services.',
  keywords: [
    'AI services',
    'micro SaaS',
    'IT solutions',
    'cloud migration',
    'DevOps',
    'SRE',
    'enterprise software',
    'automation',
    'digital transformation',
    'machine learning',
    'artificial intelligence',
    'business intelligence',
    'data analytics',
    'cloud computing',
    'software development'
  ],
  canonical: 'https://zion.app',
  ogImage: 'https://zion.app/images/og-image.jpg',
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://zion.app',
    logo: 'https://zion.app/images/logo.png',
    description: 'Leading AI & Technology Solutions Provider',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'contact@ziontechgroup.com'
    },
    sameAs: [
      'https://twitter.com/ziontechgroup',
      'https://linkedin.com/company/zion-tech-group',
      'https://github.com/Zion-Holdings'
    ]
  }
};

// Service-specific SEO configurations
export const serviceSEOConfigs: Record<string, PageSEOConfig> = {
  'ai-services': {
    title: 'AI Services - Machine Learning & Artificial Intelligence Solutions',
    description: 'Transform your business with our comprehensive AI services including machine learning, natural language processing, computer vision, and predictive analytics.',
    keywords: [
      'AI services',
      'machine learning',
      'artificial intelligence',
      'ML models',
      'predictive analytics',
      'natural language processing',
      'computer vision',
      'AI consulting',
      'AI implementation',
      'MLOps'
    ],
    canonical: 'https://zion.app/services/ai-services',
    ogImage: 'https://zion.app/images/ai-services-og.jpg',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'AI Services',
      provider: {
        '@type': 'Organization',
        name: 'Zion Tech Group'
      },
      description: 'Comprehensive AI and machine learning services',
      serviceType: 'Artificial Intelligence Services',
      areaServed: 'Worldwide',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'AI Services Catalog',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Machine Learning Model Development'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Natural Language Processing'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Computer Vision Solutions'
            }
          }
        ]
      }
    }
  },
  'micro-saas': {
    title: 'Micro SaaS Development - Custom Software Solutions',
    description: 'Build scalable micro SaaS applications with our expert development team. From MVP to enterprise-grade solutions with modern architecture.',
    keywords: [
      'micro SaaS',
      'SaaS development',
      'custom software',
      'web applications',
      'mobile apps',
      'MVP development',
      'startup development',
      'software consulting',
      'application development',
      'scalable software'
    ],
    canonical: 'https://zion.app/services/micro-saas',
    ogImage: 'https://zion.app/images/micro-saas-og.jpg',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Micro SaaS Development',
      provider: {
        '@type': 'Organization',
        name: 'Zion Tech Group'
      },
      description: 'Custom micro SaaS development services',
      serviceType: 'Software Development Services'
    }
  },
  'it-services': {
    title: 'IT Services - Cloud Migration & DevOps Solutions',
    description: 'Comprehensive IT services including cloud migration, DevOps implementation, infrastructure management, and system administration.',
    keywords: [
      'IT services',
      'cloud migration',
      'DevOps',
      'infrastructure',
      'system administration',
      'cloud computing',
      'AWS',
      'Azure',
      'GCP',
      'Kubernetes',
      'Docker',
      'CI/CD'
    ],
    canonical: 'https://zion.app/services/it-services',
    ogImage: 'https://zion.app/images/it-services-og.jpg',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'IT Services',
      provider: {
        '@type': 'Organization',
        name: 'Zion Tech Group'
      },
      description: 'Comprehensive IT and infrastructure services'
    }
  }
};

// Blog SEO configurations
export const blogSEOConfigs: Record<string, Partial<PageSEOConfig>> = {
  'ai-trends-2025': {
    title: 'AI Trends 2025: What to Expect in Artificial Intelligence',
    description: 'Discover the latest AI trends and predictions for 2025. From generative AI to edge computing, explore what\'s shaping the future of artificial intelligence.',
    keywords: ['AI trends 2025', 'artificial intelligence', 'generative AI', 'machine learning trends', 'AI predictions']
  },
  'micro-saas-success': {
    title: 'Building Successful Micro SaaS: A Complete Guide',
    description: 'Learn how to build and scale successful micro SaaS applications. From MVP development to market strategies, get expert insights.',
    keywords: ['micro SaaS', 'SaaS development', 'startup guide', 'MVP development', 'SaaS scaling']
  }
};

/**
 * Generate SEO meta tags for a page
 */
export function generateSEOMetaTags(seoData: SEOData): string {
  const {
    title,
    description,
    keywords,
    canonical,
    ogTitle,
    ogDescription,
    ogImage,
    ogType = 'website',
    twitterCard = 'summary_large_image',
    twitterSite = '@ziontechgroup',
    twitterCreator = '@ziontechgroup',
    structuredData
  } = seoData;

  const metaTags = [
    // Basic meta tags
    `<title>${title}</title>`,
    `<meta name="description" content="${description}">`,
    `<meta name="viewport" content="width=device-width, initial-scale=1">`,
    `<meta name="robots" content="index, follow">`,
    `<meta name="author" content="Zion Tech Group">`,
    
    // Canonical URL
    canonical ? `<link rel="canonical" href="${canonical}">` : '',
    
    // Keywords
    keywords && keywords.length > 0 ? `<meta name="keywords" content="${keywords.join(', ')}">` : '',
    
    // Open Graph tags
    `<meta property="og:title" content="${ogTitle || title}">`,
    `<meta property="og:description" content="${ogDescription || description}">`,
    `<meta property="og:type" content="${ogType}">`,
    ogImage ? `<meta property="og:image" content="${ogImage}">` : '',
    canonical ? `<meta property="og:url" content="${canonical}">` : '',
    `<meta property="og:site_name" content="Zion Tech Group">`,
    
    // Twitter Card tags
    `<meta name="twitter:card" content="${twitterCard}">`,
    `<meta name="twitter:site" content="${twitterSite}">`,
    `<meta name="twitter:creator" content="${twitterCreator}">`,
    `<meta name="twitter:title" content="${ogTitle || title}">`,
    `<meta name="twitter:description" content="${ogDescription || description}">`,
    ogImage ? `<meta name="twitter:image" content="${ogImage}">` : '',
    
    // Additional meta tags
    `<meta name="theme-color" content="#3b82f6">`,
    `<meta name="msapplication-TileColor" content="#3b82f6">`,
    `<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">`,
    `<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">`,
    `<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">`,
    `<link rel="manifest" href="/site.webmanifest">`
  ].filter(tag => tag !== '').join('\n');

  // Add structured data if provided
  const structuredDataScript = structuredData 
    ? `<script type="application/ld+json">${JSON.stringify(structuredData, null, 2)}</script>`
    : '';

  return `${metaTags}\n${structuredDataScript}`;
}

/**
 * Get SEO configuration for a specific page
 */
export function getPageSEOConfig(pageType: string, pageSlug?: string): PageSEOConfig {
  // Check service pages
  if (serviceSEOConfigs[pageSlug || '']) {
    return serviceSEOConfigs[pageSlug || ''];
  }
  
  // Check blog pages
  if (pageType === 'blog' && pageSlug && blogSEOConfigs[pageSlug]) {
    return { ...defaultSEOConfig, ...blogSEOConfigs[pageSlug] } as PageSEOConfig;
  }
  
  // Return default configuration
  return defaultSEOConfig;
}

/**
 * Generate sitemap XML
 */
export function generateSitemap(pages: Array<{ url: string; lastmod?: string; changefreq?: string; priority?: number }>): string {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${page.url}</loc>
    ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ''}
    ${page.changefreq ? `<changefreq>${page.changefreq}</changefreq>` : ''}
    ${page.priority ? `<priority>${page.priority}</priority>` : ''}
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
}

/**
 * Generate robots.txt content
 */
export function generateRobotsTxt(baseUrl: string): string {
  return `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Allow search engines to crawl static assets
Allow: /images/
Allow: /css/
Allow: /js/
Allow: /fonts/`;
}

/**
 * SEO optimization utilities
 */
export const seoUtils = {
  // Generate breadcrumb structured data
  generateBreadcrumbStructuredData: (breadcrumbs: Array<{ name: string; url: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  }),

  // Generate FAQ structured data
  generateFAQStructuredData: (faqs: Array<{ question: string; answer: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }),

  // Generate article structured data
  generateArticleStructuredData: (article: {
    title: string;
    description: string;
    author: string;
    datePublished: string;
    dateModified?: string;
    image?: string;
    url: string;
  }) => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    author: {
      '@type': 'Organization',
      name: article.author
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    image: article.image,
    url: article.url,
    publisher: {
      '@type': 'Organization',
      name: 'Zion Tech Group',
      logo: {
        '@type': 'ImageObject',
        url: 'https://zion.app/images/logo.png'
      }
    }
  }),

  // Validate SEO data
  validateSEOData: (seoData: SEOData): { isValid: boolean; errors: string[] } => {
    const errors: string[] = [];
    
    if (!seoData.title || seoData.title.length < 30 || seoData.title.length > 60) {
      errors.push('Title should be between 30-60 characters');
    }
    
    if (!seoData.description || seoData.description.length < 120 || seoData.description.length > 160) {
      errors.push('Description should be between 120-160 characters');
    }
    
    if (seoData.keywords && seoData.keywords.length > 10) {
      errors.push('Keywords should not exceed 10 items');
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }
};

export default {
  generateSEOMetaTags,
  getPageSEOConfig,
  generateSitemap,
  generateRobotsTxt,
  seoUtils,
  defaultSEOConfig,
  serviceSEOConfigs,
  blogSEOConfigs
};
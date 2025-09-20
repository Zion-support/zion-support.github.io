/**
 * SEO Optimization Utilities
 * Provides tools for optimizing search engine optimization
 */

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: any;
}

interface PageSEOProps {
  seoData: SEOData;
  children: React.ReactNode;
}origin/main

// Generate meta tags for SEO
export function generateMetaTags(seoData: SEOData) {
  const {
    title,
    description,
    keywords,
    canonicalUrl,
    ogImage,
    ogType = 'website',
    twitterCard = 'summary_large_image',
    structuredData,
  } = seoData;

  const metaTags = [
    // Basic meta tags
    { name: 'description', content: description },
    { name: 'keywords', content: keywords.join(', ') },
    { name: 'robots', content: 'index, follow' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    
    // Open Graph tags
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: ogType },
    { property: 'og:image', content: ogImage },
    { property: 'og:url', content: canonicalUrl },
    
    // Twitter Card tags
    { name: 'twitter:card', content: twitterCard },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: ogImage },
    
    // Additional SEO tags
    { name: 'author', content: 'Zion Holdings' },
    { name: 'generator', content: 'Next.js' },
    { name: 'theme-color', content: '#1f2937' },
  ];

  return metaTags.filter(tag => tag.content);
}

// Generate structured data
export function generateStructuredData(seoData: SEOData, pageType: string = 'WebPage') {
  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': pageType,
    name: seoData.title,
    description: seoData.description,
    url: seoData.canonicalUrl,
    image: seoData.ogImage,
    publisher: {
      '@type': 'Organization',
      name: 'Zion Holdings',
      url: 'https://zion.app',
    },
  };

  if (seoData.structuredData) {
    return { ...baseStructuredData, ...seoData.structuredData };
  }

  return baseStructuredData;
}

// Generate sitemap data
export function generateSitemapData(pages: Array<{ url: string; lastmod?: string; changefreq?: string; priority?: number }>) {
  const sitemap = {
    urlset: {
      '@xmlns': 'http://www.sitemaps.org/schemas/sitemap/0.9',
      url: pages.map(page => ({
        loc: page.url,
        lastmod: page.lastmod || new Date().toISOString().split('T')[0],
        changefreq: page.changefreq || 'weekly',
        priority: page.priority || 0.8,
      })),
    },
  };

  return sitemap;
}

// SEO score calculator
export function calculateSEOScore(seoData: SEOData): number {
  let score = 0;
  const maxScore = 100;

  // Title optimization (20 points)
  if (seoData.title) {
    score += 10;
    if (seoData.title.length >= 30 && seoData.title.length <= 60) {
      score += 10;
    }
  }

  // Description optimization (20 points)
  if (seoData.description) {
    score += 10;
    if (seoData.description.length >= 120 && seoData.description.length <= 160) {
      score += 10;
    }
  }

  // Keywords optimization (15 points)
  if (seoData.keywords && seoData.keywords.length > 0) {
    score += 5;
    if (seoData.keywords.length >= 3 && seoData.keywords.length <= 10) {
      score += 10;
    }
  }

  // Canonical URL (10 points)
  if (seoData.canonicalUrl) {
    score += 10;
  }

  // Open Graph image (10 points)
  if (seoData.ogImage) {
    score += 10;
  }

  // Structured data (15 points)
  if (seoData.structuredData) {
    score += 15;
  }

  // Additional optimizations (10 points)
  if (seoData.title && seoData.title.includes('Zion')) {
    score += 5;
  }
  if (seoData.description && seoData.description.includes('AI')) {
    score += 5;
  }

  return Math.min(score, maxScore);
}

// Generate robots.txt content
export function generateRobotsTxt(domain: string = 'https://zion.app') {
  return `User-agent: *
Allow: /

Sitemap: ${domain}/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Allow important pages
Allow: /
Allow: /services/
Allow: /about/
Allow: /contact/
Allow: /blog/origin/main
`;
}

// Generate breadcrumb structured data
export function generateBreadcrumbStructuredData(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

// Generate FAQ structured data
export function generateFAQStructuredData(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Generate organization structured data
export function generateOrganizationStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Holdings',
    url: 'https://zion.app',
    logo: 'https://zion.app/logo.png',
    description: 'Leading provider of AI-powered solutions and innovative technology services',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-0123',
      contactType: 'customer service',
    },
    sameAs: [
      'https://twitter.com/zionholdings',
      'https://linkedin.com/company/zion-holdings',
    ],
  };
}

// SEO audit function
export function auditSEO(seoData: SEOData) {
  const issues: string[] = [];
  const recommendations: string[] = [];

  // Check title
  if (!seoData.title) {
    issues.push('Missing title tag');
  } else if (seoData.title.length < 30) {
    issues.push('Title too short (less than 30 characters)');
  } else if (seoData.title.length > 60) {
    issues.push('Title too long (more than 60 characters)');
  }

  // Check description
  if (!seoData.description) {
    issues.push('Missing meta description');
  } else if (seoData.description.length < 120) {
    issues.push('Description too short (less than 120 characters)');
  } else if (seoData.description.length > 160) {
    issues.push('Description too long (more than 160 characters)');
  }

  // Check keywords
  if (!seoData.keywords || seoData.keywords.length === 0) {
    issues.push('No keywords specified');
  } else if (seoData.keywords.length > 10) {
    issues.push('Too many keywords (more than 10)');
  }

  // Check canonical URL
  if (!seoData.canonicalUrl) {
    recommendations.push('Add canonical URL to prevent duplicate content issues');
  }

  // Check Open Graph image
  if (!seoData.ogImage) {
    recommendations.push('Add Open Graph image for better social media sharing');
  }

  // Check structured data
  if (!seoData.structuredData) {
    recommendations.push('Add structured data to help search engines understand your content');
  }

  return {
    score: calculateSEOScore(seoData),
    issues,
    recommendations,
  };
}

// Export all utilities
export default {
  generateMetaTags,
  generateStructuredData,
  generateSitemapData,
  calculateSEOScore,
  generateRobotsTxt,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  generateOrganizationStructuredData,
  auditSEO,
};
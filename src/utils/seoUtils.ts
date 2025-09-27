/**
 * SEO utility functions
 * Provides various SEO enhancement functions
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
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: Record<string, unknown>;
}

// Generate meta tags
export const generateMetaTags = (seoData: SEOData): string => {
  const {
    title,
    description,
    keywords = [],
    canonical,
    ogTitle = title,
    ogDescription = description,
    ogImage,
    ogType = 'website',
    twitterCard = 'summary_large_image',
    twitterTitle = title,
    twitterDescription = description,
    twitterImage,
    structuredData
  } = seoData;

  const metaTags = [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    keywords.length > 0 && `<meta name="keywords" content="${keywords.join(', ')}" />`,
    canonical && `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:title" content="${ogTitle}" />`,
    `<meta property="og:description" content="${ogDescription}" />`,
    `<meta property="og:type" content="${ogType}" />`,
    ogImage && `<meta property="og:image" content="${ogImage}" />`,
    `<meta name="twitter:card" content="${twitterCard}" />`,
    `<meta name="twitter:title" content="${twitterTitle}" />`,
    `<meta name="twitter:description" content="${twitterDescription}" />`,
    twitterImage && `<meta name="twitter:image" content="${twitterImage}" />`
  ].filter(Boolean).join('\n');

  const structuredDataScript = structuredData ? 
    `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>` : '';

  return metaTags + (structuredDataScript ? '\n' + structuredDataScript : '');
};

// Generate structured data for organization
export const generateOrganizationStructuredData = (orgData: {
  name: string;
  url: string;
  logo?: string;
  description?: string;
  socialProfiles?: string[];
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: orgData.name,
    url: orgData.url,
    ...(orgData.logo && { logo: orgData.logo }),
    ...(orgData.description && { description: orgData.description }),
    ...(orgData.socialProfiles && orgData.socialProfiles.length > 0 && {
      sameAs: orgData.socialProfiles
    })
  };
};

// Generate structured data for website
export const generateWebsiteStructuredData = (siteData: {
  name: string;
  url: string;
  description?: string;
  publisher?: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteData.name,
    url: siteData.url,
    ...(siteData.description && { description: siteData.description }),
    ...(siteData.publisher && { publisher: { '@type': 'Organization', name: siteData.publisher } })
  };
};

// Generate structured data for breadcrumbs
export const generateBreadcrumbStructuredData = (breadcrumbs: Array<{
  name: string;
  url: string;
}>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
};

// Generate structured data for FAQ
export const generateFAQStructuredData = (faqs: Array<{
  question: string;
  answer: string;
}>) => {
  return {
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
  };
};

// Generate sitemap XML
export const generateSitemap = (pages: Array<{
  url: string;
  lastmod?: string;
  changefreq?: string;
  priority?: number;
}>): string => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `<url>
  <loc>${page.url}</loc>
  ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ''}
  ${page.changefreq ? `<changefreq>${page.changefreq}</changefreq>` : ''}
  ${page.priority ? `<priority>${page.priority}</priority>` : ''}
</url>`).join('\n')}
</urlset>`;

  return sitemap;
};

// Generate robots.txt
export const generateRobotsTxt = (options: {
  allowAll?: boolean;
  disallowPaths?: string[];
  sitemapUrl?: string;
  crawlDelay?: number;
}): string => {
  const { allowAll = true, disallowPaths = [], sitemapUrl, crawlDelay } = options;

  let content = '';
  
  if (allowAll) {
    content += 'User-agent: *\nAllow: /\n';
  } else {
    content += 'User-agent: *\nDisallow: /\n';
  }

  if (disallowPaths.length > 0) {
    disallowPaths.forEach(path => {
      content += `Disallow: ${path}\n`;
    });
  }

  if (crawlDelay) {
    content += `Crawl-delay: ${crawlDelay}\n`;
  }

  if (sitemapUrl) {
    content += `Sitemap: ${sitemapUrl}\n`;
  }

  return content;
};

// Validate SEO data
export const validateSEOData = (seoData: SEOData): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!seoData.title || seoData.title.length === 0) {
    errors.push('Title is required');
  } else if (seoData.title.length > 60) {
    errors.push('Title should be 60 characters or less');
  }

  if (!seoData.description || seoData.description.length === 0) {
    errors.push('Description is required');
  } else if (seoData.description.length > 160) {
    errors.push('Description should be 160 characters or less');
  }

  return { isValid: errors.length === 0, errors };
};

// Generate viewport meta tag
export const generateViewportMeta = (options: {
  width?: string;
  initialScale?: number;
  maximumScale?: number;
  userScalable?: boolean;
}): string => {
  const {
    width = 'device-width',
    initialScale = 1,
    maximumScale = 5,
    userScalable = true
  } = options;

  const content = [
    `width=${width}`,
    `initial-scale=${initialScale}`,
    `maximum-scale=${maximumScale}`,
    `user-scalable=${userScalable ? 'yes' : 'no'}`
  ].join(', ');

  return `<meta name="viewport" content="${content}" />`;
};
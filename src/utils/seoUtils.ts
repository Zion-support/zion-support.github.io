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
  structuredData?: any;
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
    twitterImage = ogImage
  } = seoData;

  const tags = [
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
  ].filter(Boolean);

  return tags.join('\n');
};

// Generate structured data
export const generateStructuredData = (data: any): string => {
  return `<script type="application/ld+json">${JSON.stringify(data, null, 2)}</script>`;
};

// Generate breadcrumb structured data
export const generateBreadcrumbStructuredData = (items: Array<{ name: string; url: string }>): string => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };

  return generateStructuredData(structuredData);
};

// Generate organization structured data
export const generateOrganizationStructuredData = (organization: {
  name: string;
  url: string;
  logo?: string;
  description?: string;
  address?: any;
  contactPoint?: any;
}): string => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: organization.name,
    url: organization.url,
    ...(organization.logo && { logo: organization.logo }),
    ...(organization.description && { description: organization.description }),
    ...(organization.address && { address: organization.address }),
    ...(organization.contactPoint && { contactPoint: organization.contactPoint })
  };

  return generateStructuredData(structuredData);
};

// Generate article structured data
export const generateArticleStructuredData = (article: {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
}): string => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    author: {
      '@type': 'Person',
      name: article.author
    },
    datePublished: article.datePublished,
    ...(article.dateModified && { dateModified: article.dateModified }),
    ...(article.image && { image: article.image }),
    url: article.url
  };

  return generateStructuredData(structuredData);
};

// Generate sitemap
export const generateSitemap = (pages: Array<{
  url: string;
  lastModified?: string;
  changeFrequency?: string;
  priority: number;
}>): string => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `<url>
  <loc>${page.url}</loc>
  ${page.lastModified ? `<lastmod>${page.lastModified}</lastmod>` : ''}
  ${page.changeFrequency ? `<changefreq>${page.changeFrequency}</changefreq>` : ''}
  <priority>${page.priority}</priority>
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
    content += 'User-agent: *\n';
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
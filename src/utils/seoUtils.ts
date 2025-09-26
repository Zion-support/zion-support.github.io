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
export const generateStructuredData = (data: {
  type: 'Organization' | 'WebSite' | 'WebPage' | 'Article' | 'Product' | 'Service';
  name: string;
  description?: string;
  url?: string;
  image?: string;
  logo?: string;
  sameAs?: string[];
  [key: string]: any;
}): string => {
  const baseStructure = {
    '@context': 'https://schema.org',
    '@type': data.type,
    name: data.name,
    ...(data.description && { description: data.description }),
    ...(data.url && { url: data.url }),
    ...(data.image && { image: data.image }),
    ...(data.logo && { logo: data.logo }),
    ...(data.sameAs && { sameAs: data.sameAs })
  };

  // Add type-specific properties
  switch (data.type) {
    case 'Organization':
      return JSON.stringify({
        ...baseStructure,
        ...(data.foundingDate && { foundingDate: data.foundingDate }),
        ...(data.contactPoint && { contactPoint: data.contactPoint })
      });
    
    case 'WebSite':
      return JSON.stringify({
        ...baseStructure,
        ...(data.potentialAction && { potentialAction: data.potentialAction })
      });
    
    case 'Article':
      return JSON.stringify({
        ...baseStructure,
        ...(data.author && { author: data.author }),
        ...(data.publisher && { publisher: data.publisher }),
        ...(data.datePublished && { datePublished: data.datePublished }),
        ...(data.dateModified && { dateModified: data.dateModified })
      });
    
    default:
      return JSON.stringify(baseStructure);
  }
};

// Generate breadcrumb structured data
export const generateBreadcrumbStructuredData = (breadcrumbs: Array<{
  name: string;
  url: string;
}>): string => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  };

  return JSON.stringify(structuredData);
};

// Generate FAQ structured data
export const generateFAQStructuredData = (faqs: Array<{
  question: string;
  answer: string;
}>): string => {
  const structuredData = {
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

  return JSON.stringify(structuredData);
};

// Generate sitemap data
export const generateSitemapData = (pages: Array<{
  url: string;
  lastModified: string;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}>): string => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};

// Generate robots.txt content
export const generateRobotsTxt = (options: {
  allowAll?: boolean;
  disallowPaths?: string[];
  sitemapUrl?: string;
  crawlDelay?: number;
}): string => {
  const { allowAll = true, disallowPaths = [], sitemapUrl, crawlDelay } = options;
  
  let content = '';
  
  if (allowAll) {
    content += 'User-agent: *\n';
    content += 'Allow: /\n';
  } else {
    content += 'User-agent: *\n';
    content += 'Disallow: /\n';
  }
  
  disallowPaths.forEach(path => {
    content += `Disallow: ${path}\n`;
  });
  
  if (crawlDelay) {
    content += `Crawl-delay: ${crawlDelay}\n`;
  }
  
  if (sitemapUrl) {
    content += `Sitemap: ${sitemapUrl}\n`;
  }
  
  return content;
};

// Validate SEO data
export const validateSEOData = (seoData: SEOData): {
  isValid: boolean;
  errors: string[];
} => {
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
  
  if (seoData.keywords && seoData.keywords.length > 10) {
    errors.push('Keywords should be 10 or fewer');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Generate meta viewport tag
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
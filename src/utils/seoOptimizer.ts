/**
 * SEO Optimizer Utility
 * Comprehensive SEO tools and meta tag management
 */

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: Record<string, unknown>;
}

export const generateMetaTags = (metadata: SEOMetadata): string => {
  const tags: string[] = [];
  
  // Basic meta tags
  tags.push(`<title>${escapeHtml(metadata.title)}</title>`);
  tags.push(`<meta name="description" content="${escapeHtml(metadata.description)}" />`);
  
  if (metadata.keywords && metadata.keywords.length > 0) {
    tags.push(`<meta name="keywords" content="${metadata.keywords.join(', ')}" />`);
  }
  if (metadata.author) {
    tags.push(`<meta name="author" content="${escapeHtml(metadata.author)}" />`);
  }
  if (metadata.canonicalUrl) {
    tags.push(`<link rel="canonical" href="${escapeHtml(metadata.canonicalUrl)}" />`);
  }

  // Open Graph tags
  tags.push(`<meta property="og:title" content="${escapeHtml(metadata.ogTitle || metadata.title)}" />`);
  tags.push(`<meta property="og:description" content="${escapeHtml(metadata.ogDescription || metadata.description)}" />`);
  tags.push(`<meta property="og:type" content="${metadata.ogType || 'website'}" />`);
  if (metadata.ogImage) {
    tags.push(`<meta property="og:image" content="${escapeHtml(metadata.ogImage)}" />`);
  }
  if (metadata.canonicalUrl) {
    tags.push(`<meta property="og:url" content="${escapeHtml(metadata.canonicalUrl)}" />`);
  }

  // Twitter Card tags
  tags.push(`<meta name="twitter:card" content="${metadata.twitterCard || 'summary_large_image'}" />`);
  tags.push(`<meta name="twitter:title" content="${escapeHtml(metadata.twitterTitle || metadata.title)}" />`);
  tags.push(`<meta name="twitter:description" content="${escapeHtml(metadata.twitterDescription || metadata.description)}" />`);
  if (metadata.twitterImage || metadata.ogImage) {
    tags.push(`<meta name="twitter:image" content="${escapeHtml(metadata.twitterImage || metadata.ogImage || '')}" />`);
  }
  
  return tags.join('\n');
};

/**
 * Generate structured data (JSON-LD)
 */
export const generateStructuredData = (type: string, data: Record<string, unknown>): string => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  } as Record<string, unknown>;
  
  return `<script type="application/ld+json">${JSON.stringify(structuredData, null, 2)}</script>`;
};

export const generateArticleStructuredData = (article: {
  title: string;
  description: string;
  author: string;
  publishDate: string;
  modifiedDate?: string;
  image?: string;
  url: string;
}): string => {
  return generateStructuredData('Article', {
    headline: article.title,
    description: article.description,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    datePublished: article.publishDate,
    dateModified: article.modifiedDate || article.publishDate,
    image: article.image,
    url: article.url,
    publisher: {
      '@type': 'Organization',
      name: 'Zion Tech Group',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ziontechgroup.com/logo.png',
      }
    }
  });
};

export const generateBreadcrumbStructuredData = (breadcrumbs: Array<{ name: string; url: string }>): string => {
  return generateStructuredData('BreadcrumbList', {
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    }))
  });
};

export const generateOrganizationStructuredData = (): string => {
  return generateStructuredData('Organization', {
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    description: 'Advanced AI and IT Solutions Provider',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-0123',
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: 'English'
    },
    sameAs: [
      'https://twitter.com/ziontechgroup',
      'https://linkedin.com/company/ziontechgroup',
      'https://github.com/ziontechgroup'
    ]
  });
};

export const generateWebsiteStructuredData = (): string => {
  return generateStructuredData('WebSite', {
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    description: 'Advanced AI and IT Solutions Provider',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://ziontechgroup.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  });
};

export const generateServiceStructuredData = (service: {
  name: string;
  description: string;
  provider: string;
  areaServed?: string;
  serviceType?: string;
}): string => {
  return generateStructuredData('Service', {
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: service.provider
    },
    areaServed: service.areaServed || 'US',
    serviceType: service.serviceType || 'Professional Service'
  });
};

export const generateFAQStructuredData = (faqs: Array<{ question: string; answer: string }>): string => {
  return generateStructuredData('FAQPage', {
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  });
};

export const generateSitemap = (urls: Array<{
  url: string;
  lastModified?: string;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}>): string => {
  const sitemapUrls = urls.map(url => {
    const lastMod = url.lastModified ? `<lastmod>${url.lastModified}</lastmod>` : '';
    const changeFreq = url.changeFrequency ? `<changefreq>${url.changeFrequency}</changefreq>` : '';
    const priority = url.priority !== undefined ? `<priority>${url.priority}</priority>` : '';
    
    return `<url>
  <loc>${escapeHtml(url.url)}</loc>
  ${lastMod}
  ${changeFreq}
  ${priority}
</url>`;
  }).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls}
</urlset>`;
};

export const generateRobotsTxt = (config: {
  userAgent?: string;
  disallow?: string[];
  allow?: string[];
  sitemap?: string;
}): string => {
  const lines: string[] = [];
  lines.push(`User-agent: ${config.userAgent || '*'}`);
  
  if (config.disallow && config.disallow.length > 0) {
    config.disallow.forEach(path => lines.push(`Disallow: ${path}`));
  }
  
  if (config.allow && config.allow.length > 0) {
    config.allow.forEach(path => lines.push(`Allow: ${path}`));
  }
  
  lines.push('');
  
  if (config.sitemap) {
    lines.push(`Sitemap: ${config.sitemap}`);
  }
  
  return lines.join('\n');
};

export const escapeHtml = (text: string): string => {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  
  return text.replace(/[&<>"']/g, (match) => map[match]);
};

export const generateCanonicalUrl = (baseUrl: string, path: string): string => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl.replace(/\/$/, '')}${cleanPath}`;
};

export const generateOpenGraphImage = (baseUrl: string, imagePath: string, width: number = 1200, height: number = 630): string => {
  const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  return `${baseUrl.replace(/\/$/, '')}${cleanPath}`;
};

export const validateSEOMetadata = (metadata: SEOMetadata): string[] => {
  const errors: string[] = [];
  
  if (!metadata.title || metadata.title.trim().length === 0) {
    errors.push('Title is required');
  } else if (metadata.title.length > 60) {
    errors.push('Title should be less than 60 characters');
  }
  
  if (!metadata.description || metadata.description.trim().length === 0) {
    errors.push('Description is required');
  } else if (metadata.description.length > 160) {
    errors.push('Description should be less than 160 characters');
  }
  
  if (metadata.keywords && metadata.keywords.length > 10) {
    errors.push('Keywords should be limited to 10 items');
  }
  
  return errors;
};

export const optimizeSEOMetadata = (metadata: SEOMetadata): SEOMetadata => {
  return {
    ...metadata,
    title: metadata.title?.trim().substring(0, 60) || '',
    description: metadata.description?.trim().substring(0, 160) || '',
    keywords: metadata.keywords?.slice(0, 10) || [],
    ogTitle: metadata.ogTitle?.trim().substring(0, 60) || metadata.title?.trim().substring(0, 60),
    ogDescription: metadata.ogDescription?.trim().substring(0, 160) || metadata.description?.trim().substring(0, 160),
    twitterTitle: metadata.twitterTitle?.trim().substring(0, 60) || metadata.title?.trim().substring(0, 60),
    twitterDescription: metadata.twitterDescription?.trim().substring(0, 160) || metadata.description?.trim().substring(0, 160)
  };
};
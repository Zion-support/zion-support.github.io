/**
 * SEO Optimization Utilities
 * Helps improve search engine visibility and social media sharing
 */

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  canonicalUrl?: string;
}

/**
 * Generate comprehensive meta tags for SEO
 */
export function generateMetaTags(config: SEOConfig): string {
  const {
    title,
    description,
    keywords = [],
    image = '/og-image.jpg',
    url = window.location.href,
    type = 'website',
    author,
    publishedTime,
    modifiedTime,
    canonicalUrl,
  } = config;

  const tags: string[] = [];

  // Basic meta tags
  tags.push(`<title>${title}</title>`);
  tags.push(`<meta name="description" content="${description}" />`);
  if (keywords.length > 0) {
    tags.push(`<meta name="keywords" content="${keywords.join(', ')}" />`);
  }

  // Open Graph tags
  tags.push(`<meta property="og:title" content="${title}" />`);
  tags.push(`<meta property="og:description" content="${description}" />`);
  tags.push(`<meta property="og:type" content="${type}" />`);
  tags.push(`<meta property="og:url" content="${url}" />`);
  tags.push(`<meta property="og:image" content="${image}" />`);

  // Twitter Card tags
  tags.push(`<meta name="twitter:card" content="summary_large_image" />`);
  tags.push(`<meta name="twitter:title" content="${title}" />`);
  tags.push(`<meta name="twitter:description" content="${description}" />`);
  tags.push(`<meta name="twitter:image" content="${image}" />`);

  // Article-specific tags
  if (type === 'article') {
    if (author) {
      tags.push(`<meta property="article:author" content="${author}" />`);
    }
    if (publishedTime) {
      tags.push(`<meta property="article:published_time" content="${publishedTime}" />`);
    }
    if (modifiedTime) {
      tags.push(`<meta property="article:modified_time" content="${modifiedTime}" />`);
    }
  }

  // Canonical URL
  if (canonicalUrl) {
    tags.push(`<link rel="canonical" href="${canonicalUrl}" />`);
  }

  return tags.join('\n');
}

/**
 * Generate structured data (JSON-LD) for rich snippets
 */
export function generateStructuredData(type: string, data: Record<string, any>): string {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`;
}

/**
 * Generate breadcrumb structured data
 */
export function generateBreadcrumbs(items: Array<{ name: string; url: string }>): string {
  const breadcrumbList = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return `<script type="application/ld+json">${JSON.stringify(breadcrumbList)}</script>`;
}

/**
 * Generate article structured data
 */
export function generateArticleData(article: {
  title: string;
  description: string;
  author: string;
  publishDate: string;
  modifiedDate?: string;
  image: string;
  url: string;
}): string {
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
  });
}

/**
 * Optimize page title for SEO
 */
export function optimizeTitle(title: string, brandName: string = 'Zion Tech Group'): string {
  // Keep title under 60 characters
  const maxLength = 60;
  const suffix = ` | ${brandName}`;
  const availableLength = maxLength - suffix.length;

  let optimizedTitle = title;
  if (title.length > availableLength) {
    optimizedTitle = title.substring(0, availableLength - 3) + '...';
  }

  return `${optimizedTitle}${suffix}`;
}

/**
 * Optimize meta description for SEO
 */
export function optimizeDescription(description: string): string {
  // Keep description between 150-160 characters
  const maxLength = 160;
  
  if (description.length <= maxLength) {
    return description;
  }

  // Find the last complete sentence within the limit
  const truncated = description.substring(0, maxLength - 3);
  const lastPeriod = truncated.lastIndexOf('.');
  
  if (lastPeriod > 0) {
    return truncated.substring(0, lastPeriod + 1);
  }

  return truncated + '...';
}

/**
 * Generate sitemap entry
 */
export function generateSitemapEntry(url: string, lastmod?: string, priority?: number): string {
  return `
    <url>
      <loc>${url}</loc>
      ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
      ${priority ? `<priority>${priority}</priority>` : ''}
      <changefreq>weekly</changefreq>
    </url>
  `;
}

/**
 * Update page metadata dynamically
 */
export function updatePageMetadata(config: SEOConfig): void {
  // Update title
  document.title = config.title;

  // Update or create meta tags
  const updateMetaTag = (name: string, content: string, isProperty = false) => {
    const attribute = isProperty ? 'property' : 'name';
    let tag = document.querySelector(`meta[${attribute}="${name}"]`);
    
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute(attribute, name);
      document.head.appendChild(tag);
    }
    
    tag.setAttribute('content', content);
  };

  // Update basic tags
  updateMetaTag('description', config.description);
  if (config.keywords && config.keywords.length > 0) {
    updateMetaTag('keywords', config.keywords.join(', '));
  }

  // Update Open Graph tags
  updateMetaTag('og:title', config.title, true);
  updateMetaTag('og:description', config.description, true);
  if (config.image) {
    updateMetaTag('og:image', config.image, true);
  }
  if (config.url) {
    updateMetaTag('og:url', config.url, true);
  }

  // Update Twitter Card tags
  updateMetaTag('twitter:title', config.title);
  updateMetaTag('twitter:description', config.description);
  if (config.image) {
    updateMetaTag('twitter:image', config.image);
  }

  // Update canonical URL
  if (config.canonicalUrl) {
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = config.canonicalUrl;
  }
}

export default {
  generateMetaTags,
  generateStructuredData,
  generateBreadcrumbs,
  generateArticleData,
  optimizeTitle,
  optimizeDescription,
  generateSitemapEntry,
  updatePageMetadata,
};

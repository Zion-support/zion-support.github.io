import React from 'react';

// SEO utilities and hooks

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  locale?: string;
  alternateLocales?: string[];
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export interface StructuredData {
  '@context': string;
  '@type': string;
  [key: string]: unknown;
}

// Generate meta tags for SEO
export const generateMetaTags = (seoData: SEOData): React.ReactElement[] => {
  const tags: React.ReactElement[] = [];
  const baseUrl = process.env.REACT_APP_BASE_URL || window.location.origin;

  // Basic meta tags
  tags.push(
    React.createElement('title', { key: 'title' }, seoData.title),
    React.createElement('meta', { key: 'description', name: 'description', content: seoData.description })
  );

  // Keywords
  if (seoData.keywords && seoData.keywords.length > 0) {
    tags.push(
      React.createElement('meta', { key: 'keywords', name: 'keywords', content: seoData.keywords.join(', ') })
    );
  }

  // Open Graph tags
  tags.push(
    React.createElement('meta', { key: 'og:title', property: 'og:title', content: seoData.title }),
    React.createElement('meta', { key: 'og:description', property: 'og:description', content: seoData.description }),
    React.createElement('meta', { key: 'og:type', property: 'og:type', content: seoData.type || 'website' }),
    React.createElement('meta', { key: 'og:url', property: 'og:url', content: seoData.url || window.location.href })
  );

  if (seoData.image) {
    tags.push(
      React.createElement('meta', { key: 'og:image', property: 'og:image', content: seoData.image }),
      React.createElement('meta', { key: 'og:image:width', property: 'og:image:width', content: '1200' }),
      React.createElement('meta', { key: 'og:image:height', property: 'og:image:height', content: '630' })
    );
  }

  if (seoData.locale) {
    tags.push(
      React.createElement('meta', { key: 'og:locale', property: 'og:locale', content: seoData.locale })
    );
  }

  // Twitter Card tags
  tags.push(
    React.createElement('meta', { key: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' }),
    React.createElement('meta', { key: 'twitter:title', name: 'twitter:title', content: seoData.title }),
    React.createElement('meta', { key: 'twitter:description', name: 'twitter:description', content: seoData.description })
  );

  if (seoData.image) {
    tags.push(
      React.createElement('meta', { key: 'twitter:image', name: 'twitter:image', content: seoData.image })
    );
  }

  // Article specific tags
  if (seoData.type === 'article') {
    if (seoData.author) {
      tags.push(
        React.createElement('meta', { key: 'article:author', property: 'article:author', content: seoData.author })
      );
    }
    if (seoData.publishedTime) {
      tags.push(
        React.createElement('meta', { key: 'article:published_time', property: 'article:published_time', content: seoData.publishedTime })
      );
    }
    if (seoData.modifiedTime) {
      tags.push(
        React.createElement('meta', { key: 'article:modified_time', property: 'article:modified_time', content: seoData.modifiedTime })
      );
    }
    if (seoData.section) {
      tags.push(
        React.createElement('meta', { key: 'article:section', property: 'article:section', content: seoData.section })
      );
    }
    if (seoData.tags && seoData.tags.length > 0) {
      seoData.tags.forEach((tag, index) => {
        tags.push(
          React.createElement('meta', { key: `article:tag-${index}`, property: 'article:tag', content: tag })
        );
      });
    }
  }

  // Canonical URL
  if (seoData.canonical) {
    tags.push(
      React.createElement('link', { key: 'canonical', rel: 'canonical', href: seoData.canonical })
    );
  }

  // Alternate locales
  if (seoData.alternateLocales && seoData.alternateLocales.length > 0) {
    seoData.alternateLocales.forEach((locale, index) => {
      tags.push(
        React.createElement('link', { key: `alternate-${index}`, rel: 'alternate', hrefLang: locale, href: `${baseUrl}/${locale}` })
      );
    });
  }

  // Robots meta
  const robots = [];
  if (seoData.noindex) robots.push('noindex');
  if (seoData.nofollow) robots.push('nofollow');
  if (robots.length > 0) {
    tags.push(
      React.createElement('meta', { key: 'robots', name: 'robots', content: robots.join(', ') })
    );
  }

  return tags;
};

// Generate structured data
export const generateStructuredData = (data: StructuredData): React.ReactElement => 
  React.createElement('script', {
    type: 'application/ld+json',
    dangerouslySetInnerHTML: { __html: JSON.stringify(data) }
  });

// Common structured data schemas
export const generateOrganizationSchema = (orgData: {
  name: string;
  url: string;
  logo?: string;
  description?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint?: {
    telephone: string;
    contactType: string;
    email?: string;
  };
}): StructuredData => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: orgData.name,
  url: orgData.url,
  ...(orgData.logo && { logo: orgData.logo }),
  ...(orgData.description && { description: orgData.description }),
  ...(orgData.address && { address: { '@type': 'PostalAddress', ...orgData.address } }),
  ...(orgData.contactPoint && { contactPoint: { '@type': 'ContactPoint', ...orgData.contactPoint } }),
});

export const generateWebSiteSchema = (siteData: {
  name: string;
  url: string;
  description?: string;
  potentialAction?: {
    '@type': string;
    target: string;
    'query-input': string;
  };
}): StructuredData => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteData.name,
  url: siteData.url,
  ...(siteData.description && { description: siteData.description }),
  ...(siteData.potentialAction && { potentialAction: siteData.potentialAction }),
});

export const generateArticleSchema = (articleData: {
  headline: string;
  description: string;
  image?: string;
  author: {
    name: string;
    url?: string;
  };
  publisher: {
    name: string;
    logo?: string;
  };
  datePublished: string;
  dateModified?: string;
  url: string;
}): StructuredData => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: articleData.headline,
  description: articleData.description,
  ...(articleData.image && { image: articleData.image }),
  author: {
    '@type': 'Person',
    name: articleData.author.name,
    ...(articleData.author.url && { url: articleData.author.url }),
  },
  publisher: {
    '@type': 'Organization',
    name: articleData.publisher.name,
    ...(articleData.publisher.logo && { logo: articleData.publisher.logo }),
  },
  datePublished: articleData.datePublished,
  ...(articleData.dateModified && { dateModified: articleData.dateModified }),
  url: articleData.url,
});

export const generateBreadcrumbSchema = (breadcrumbs: Array<{
  name: string;
  url: string;
}>): StructuredData => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: crumb.url,
  })),
});

// SEO hook
export const useSEO = (seoData: SEOData) => {
  React.useEffect(() => {
    // Update document title
    document.title = seoData.title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', seoData.description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = seoData.description;
      document.head.appendChild(meta);
    }

    // Update canonical URL
    if (seoData.canonical) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', seoData.canonical);
      } else {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        canonical.setAttribute('href', seoData.canonical);
        document.head.appendChild(canonical);
      }
    }
  }, [seoData]);
};

// Generate sitemap
export const generateSitemap = (pages: Array<{
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}>): string => {
  const baseUrl = process.env.REACT_APP_BASE_URL || window.location.origin;
  
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  pages.forEach(page => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${baseUrl}${page.url}</loc>\n`;
    if (page.lastmod) {
      sitemap += `    <lastmod>${page.lastmod}</lastmod>\n`;
    }
    if (page.changefreq) {
      sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
    }
    if (page.priority) {
      sitemap += `    <priority>${page.priority}</priority>\n`;
    }
    sitemap += '  </url>\n';
  });
  
  sitemap += '</urlset>';
  
  return sitemap;
};

// Generate robots.txt
export const generateRobotsTxt = (options: {
  allowAll?: boolean;
  disallowPaths?: string[];
  sitemapUrl?: string;
  crawlDelay?: number;
}): string => {
  let robots = '';
  
  if (options.allowAll) {
    robots += 'User-agent: *\n';
    robots += 'Allow: /\n';
  } else {
    robots += 'User-agent: *\n';
    if (options.disallowPaths && options.disallowPaths.length > 0) {
      options.disallowPaths.forEach(path => {
        robots += `Disallow: ${path}\n`;
      });
    }
  }
  
  if (options.crawlDelay) {
    robots += `Crawl-delay: ${options.crawlDelay}\n`;
  }
  
  if (options.sitemapUrl) {
    robots += `Sitemap: ${options.sitemapUrl}\n`;
  }
  
  return robots;
};

// SEO component
export const SEO: React.FC<{ data: SEOData; structuredData?: StructuredData }> = ({ 
  data, 
  structuredData 
}) => {
  useSEO(data);
  
  return React.createElement(React.Fragment, null,
    ...generateMetaTags(data),
    structuredData && generateStructuredData(structuredData)
  );
};

// URL utilities
export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export const generateCanonicalUrl = (path: string): string => {
  const baseUrl = process.env.REACT_APP_BASE_URL || window.location.origin;
  return `${baseUrl}${path}`;
};

// Performance monitoring for SEO
export const trackSEOMetrics = () => {
  if (typeof window === 'undefined') return;

  // Track Core Web Vitals
  const trackWebVitals = () => {
    // First Contentful Paint
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          // console.log('FCP:', entry.startTime);
        }
      });
    }).observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      // console.log('LCP:', lastEntry.startTime);
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // Cumulative Layout Shift
    let clsValue = 0;
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: unknown) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      // console.log('CLS:', clsValue);
    }).observe({ entryTypes: ['layout-shift'] });
  };

  trackWebVitals();
};

export default {
  generateMetaTags,
  generateStructuredData,
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateArticleSchema,
  generateBreadcrumbSchema,
  useSEO,
  generateSitemap,
  generateRobotsTxt,
  SEO,
  slugify,
  generateCanonicalUrl,
  trackSEOMetrics,
};
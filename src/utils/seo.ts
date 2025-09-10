import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

/**
 * SEO utilities and helpers
 */

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
}

// Update page title and meta tags
export function updateSEO(data: SEOData) {
  if (typeof document === 'undefined') return;
  
  // Update title
  document.title = data.title;
  
  // Update or create meta tags
  updateMetaTag('description', data.description);
  updateMetaTag('keywords', data.keywords?.join(', '));
  updateMetaTag('author', data.author);
  
  // Open Graph tags
  updateMetaTag('og:title', data.title, 'property');
  updateMetaTag('og:description', data.description, 'property');
  updateMetaTag('og:image', data.image, 'property');
  updateMetaTag('og:url', data.url, 'property');
  updateMetaTag('og:type', data.type || 'website', 'property');
  
  // Twitter Card tags
  updateMetaTag('twitter:card', 'summary_large_image');
  updateMetaTag('twitter:title', data.title);
  updateMetaTag('twitter:description', data.description);
  updateMetaTag('twitter:image', data.image);
  
  // Article specific tags
  if (data.type === 'article') {
    updateMetaTag('article:author', data.author, 'property');
    updateMetaTag('article:published_time', data.publishedTime, 'property');
    updateMetaTag('article:modified_time', data.modifiedTime, 'property');
    updateMetaTag('article:section', data.section, 'property');
    
    if (data.tags) {
      data.tags.forEach(tag => {
        updateMetaTag('article:tag', tag, 'property');
      });
    }
  }
  
  // Canonical URL
  updateCanonicalURL(data.url);
}

// Helper function to update or create meta tags
function updateMetaTag(name: string, content: string | undefined, attribute = 'name') {
  if (!content) return;
  
  let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
  
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, name);
    document.head.appendChild(meta);
  }
  
  meta.setAttribute('content', content);
}

// Update canonical URL
function updateCanonicalURL(url?: string) {
  if (!url) return;
  
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  
  canonical.href = url;
}

// Generate structured data
export function generateStructuredData(type: 'Organization' | 'WebSite' | 'Article' | 'Product', data: any) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };
}

// Generate sitemap data
export function generateSitemapData(routes: Array<{
  path: string;
  lastModified: string;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}>) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${route.path}</loc>
    <lastmod>${route.lastModified}</lastmod>
    <changefreq>${route.changeFrequency}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
}

// Generate robots.txt content
export function generateRobotsTxt(domain: string, sitemapPath = '/sitemap.xml') {
  return `User-agent: *
Allow: /

Sitemap: ${domain}${sitemapPath}`;
}

// SEO performance metrics
export function getSEOMetrics() {
  if (typeof window === 'undefined') return null;
  
  const metrics = {
    title: document.title,
    titleLength: document.title.length,
    description: document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
    descriptionLength: document.querySelector('meta[name="description"]')?.getAttribute('content')?.length || 0,
    h1Count: document.querySelectorAll('h1').length,
    h2Count: document.querySelectorAll('h2').length,
    h3Count: document.querySelectorAll('h3').length,
    imageCount: document.querySelectorAll('img').length,
    imageAltCount: document.querySelectorAll('img[alt]').length,
    linkCount: document.querySelectorAll('a').length,
    internalLinkCount: document.querySelectorAll('a[href^="/"]').length,
    externalLinkCount: document.querySelectorAll('a[href^="http"]').length,
    metaTagsCount: document.querySelectorAll('meta').length,
    structuredDataCount: document.querySelectorAll('script[type="application/ld+json"]').length,
  };
  
  // Calculate SEO score
  const score = calculateSEOScore(metrics);
  
  return { ...metrics, score };
}

// Calculate SEO score based on best practices
function calculateSEOScore(metrics: any): number {
  let score = 0;
  const maxScore = 100;
  
  // Title length (30-60 characters is optimal)
  if (metrics.titleLength >= 30 && metrics.titleLength <= 60) {
    score += 10;
  } else if (metrics.titleLength > 0) {
    score += 5;
  }
  
  // Description length (120-160 characters is optimal)
  if (metrics.descriptionLength >= 120 && metrics.descriptionLength <= 160) {
    score += 10;
  } else if (metrics.descriptionLength > 0) {
    score += 5;
  }
  
  // H1 count (should be 1)
  if (metrics.h1Count === 1) {
    score += 10;
  } else if (metrics.h1Count > 0) {
    score += 5;
  }
  
  // Image alt text coverage
  if (metrics.imageCount > 0) {
    const altCoverage = (metrics.imageAltCount / metrics.imageCount) * 100;
    if (altCoverage >= 90) {
      score += 10;
    } else if (altCoverage >= 70) {
      score += 7;
    } else if (altCoverage >= 50) {
      score += 5;
    }
  }
  
  // Heading structure
  if (metrics.h2Count > 0) {
    score += 5;
  }
  if (metrics.h3Count > 0) {
    score += 5;
  }
  
  // Meta tags
  if (metrics.metaTagsCount >= 5) {
    score += 10;
  } else if (metrics.metaTagsCount >= 3) {
    score += 5;
  }
  
  // Structured data
  if (metrics.structuredDataCount > 0) {
    score += 10;
  }
  
  // Link structure
  if (metrics.internalLinkCount > 0) {
    score += 5;
  }
  
  return Math.min(score, maxScore);
}

// Breadcrumb generator
export function generateBreadcrumbs(path: string, baseUrl: string = '') {
  const segments = path.split('/').filter(Boolean);
  const breadcrumbs = [
    { name: 'Home', url: baseUrl }
  ];
  
  let currentPath = baseUrl;
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const name = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    breadcrumbs.push({
      name,
      url: currentPath
    });
  });
  
  return breadcrumbs;
}

// Generate breadcrumb structured data
export function generateBreadcrumbStructuredData(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.name,
      item: breadcrumb.url
    }))
  };
}

// Legacy compatibility functions
export const generateMetaTags = (title: string, description: string, url: string) => {
  return {
    title,
    description,
    'og:title': title,
    'og:description': description,
    'og:url': url,
    'og:type': 'website',
    'twitter:card': 'summary_large_image',
    'twitter:title': title,
    'twitter:description': description,
  };
};

export const generateSitemap = (routes: string[]) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ziontechgroup.com';
  return routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.8,
  }));
};
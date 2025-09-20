import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * SEO Optimization Utilities
 * Comprehensive SEO enhancement system for better search engine visibility
 */

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: any;
  robots?: string;
  viewport?: string;
  themeColor?: string;
  manifest?: string;
  appleTouchIcon?: string;
  favicon?: string;
}

export interface StructuredData {
  '@context': string;
  '@type': string;
  [key: string]: any;
}

// Default SEO configuration
const defaultSEO: Partial<SEOData> = {
  author: 'Zion Tech Group',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#6366f1',
  manifest: '/manifest.webmanifest',
  favicon: '/favicon.ico',
  appleTouchIcon: '/apple-touch-icon.png'
};

// SEO Component
export const SEO: React.FC<SEOData> = ({
  title,
  description,
  keywords = [],
  author,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  ogType,
  twitterCard,
  twitterTitle,
  twitterDescription,
  twitterImage,
  structuredData,
  robots,
  viewport,
  themeColor,
  manifest,
  appleTouchIcon,
  favicon
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullDescription = description || 'Revolutionary AI consciousness, quantum computing, and space technology solutions from Zion Tech Group.';
  const fullOgImage = ogImage || '/images/og-default.jpg';
  const fullCanonical = canonical || window.location.href;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      {author && <meta name="author" content={author} />}
      {robots && <meta name="robots" content={robots} />}
      {viewport && <meta name="viewport" content={viewport} />}
      {themeColor && <meta name="theme-color" content={themeColor} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Favicon and Icons */}
      {favicon && <link rel="icon" href={favicon} />}
      {appleTouchIcon && <link rel="apple-touch-icon" href={appleTouchIcon} />}
      {manifest && <link rel="manifest" href={manifest} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || fullDescription} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:url" content={ogUrl || fullCanonical} />
      <meta property="og:type" content={ogType || 'website'} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard || 'summary_large_image'} />
      <meta name="twitter:title" content={twitterTitle || fullTitle} />
      <meta name="twitter:description" content={twitterDescription || fullDescription} />
      <meta name="twitter:image" content={twitterImage || fullOgImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Additional Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="msapplication-TileColor" content="#6366f1" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
    </Helmet>
  );
};

// Structured Data Generators
export const generateOrganizationStructuredData = (): StructuredData => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Zion Tech Group',
  url: 'https://ziontechgroup.com',
  logo: 'https://ziontechgroup.com/images/logo.png',
  description: 'Revolutionary AI consciousness, quantum computing, and space technology solutions',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '364 E Main St STE 1008',
    addressLocality: 'Middletown',
    addressRegion: 'DE',
    postalCode: '19709',
    addressCountry: 'US'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-302-464-0950',
    contactType: 'customer service',
    email: 'kleber@ziontechgroup.com'
  },
  sameAs: [
    'https://twitter.com/ziontechgroup',
    'https://linkedin.com/company/zion-tech-group',
    'https://github.com/zion-tech-group'
  ]
});

export const generateWebSiteStructuredData = (): StructuredData => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Zion Tech Group',
  url: 'https://ziontechgroup.com',
  description: 'Revolutionary AI consciousness, quantum computing, and space technology solutions',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://ziontechgroup.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
});

export const generateServiceStructuredData = (service: {
  name: string;
  description: string;
  price?: string;
  category: string;
}): StructuredData => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.name,
  description: service.description,
  provider: {
    '@type': 'Organization',
    name: 'Zion Tech Group'
  },
  category: service.category,
  ...(service.price && { offers: { '@type': 'Offer', price: service.price } })
});

export const generateArticleStructuredData = (article: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}): StructuredData => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.title,
  description: article.description,
  author: {
    '@type': 'Person',
    name: article.author
  },
  publisher: {
    '@type': 'Organization',
    name: 'Zion Tech Group',
    logo: {
      '@type': 'ImageObject',
      url: 'https://ziontechgroup.com/images/logo.png'
    }
  },
  datePublished: article.datePublished,
  ...(article.dateModified && { dateModified: article.dateModified }),
  ...(article.image && { image: article.image })
});

// SEO Utility Functions
export const generateSitemap = (pages: Array<{ url: string; lastmod?: string; changefreq?: string; priority?: number }>): string => {
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
};

export const generateRobotsTxt = (): string => {
  return `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Block access to admin areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Allow access to important files
Allow: /manifest.webmanifest
Allow: /sw.js
Allow: /robots.txt
Allow: /sitemap.xml`;
};

// SEO Performance Monitoring
export const measureSEOPerformance = (): void => {
  if ('performance' in window) {
    // Measure Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime);
        }
        if (entry.entryType === 'first-input') {
          console.log('FID:', entry.processingStart - entry.startTime);
        }
        if (entry.entryType === 'layout-shift') {
          console.log('CLS:', entry.value);
        }
      }
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
  }
};

// Meta tag optimization
export const optimizeMetaTags = (): void => {
  // Remove duplicate meta tags
  const existingMetaTags = new Set();
  const metaTags = document.querySelectorAll('meta');
  
  metaTags.forEach(meta => {
    const key = meta.getAttribute('name') || meta.getAttribute('property');
    if (key && existingMetaTags.has(key)) {
      meta.remove();
    } else if (key) {
      existingMetaTags.add(key);
    }
  });
};

// Preload critical resources for SEO
export const preloadCriticalResources = (): void => {
  const criticalResources = [
    { href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
    { href: '/images/hero-bg.jpg', as: 'image' },
    { href: '/manifest.webmanifest', as: 'manifest' }
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.href;
    link.as = resource.as;
    if (resource.type) link.type = resource.type;
    if (resource.crossorigin) link.crossOrigin = resource.crossorigin;
    document.head.appendChild(link);
  });
};

export default {
  SEO,
  generateOrganizationStructuredData,
  generateWebSiteStructuredData,
  generateServiceStructuredData,
  generateArticleStructuredData,
  generateSitemap,
  generateRobotsTxt,
  measureSEOPerformance,
  optimizeMetaTags,
  preloadCriticalResources,
  defaultSEO
};
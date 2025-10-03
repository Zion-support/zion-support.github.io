/**
 * SEO Optimization Utilities
 * Comprehensive SEO enhancements for the Zion website
 */

import { Helmet } from 'react-helmet-async';

// Meta tags utilities
export const seoUtils = {
  // Generate structured data for organization
  generateOrganizationSchema: () => ({
<<<<<<< HEAD
    "@context": "https://schema.org","
    "@type": "Organization","
    "name": "Zion Tech Group","
    "url": "https://zion.app","
    "logo": "https://zion.app/logo.png","
    "description": "Advanced AI and IT Solutions for Enterprise","
    "address": {"
      "@type": "PostalAddress","
      "addressCountry": "US"
    },
    "contactPoint": {"
      "@type": "ContactPoint","
      "telephone": "+1-XXX-XXX-XXXX","
      "contactType": "customer service"
    },
    "sameAs": ["
      "https://twitter.com/ziontech","
=======
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://zion.app",
    "logo": "https://zion.app/logo.png",
    "description": "Advanced AI and IT Solutions for Enterprise",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-XXX-XXX-XXXX",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://twitter.com/ziontech",
>>>>>>> cursor/fix-errors-and-merge-to-main-229c
      "https://linkedin.com/company/zion-tech"
    ]
  }),

  // Generate breadcrumb structured data
  generateBreadcrumbSchema: (items: Array<{name: string, url: string}>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }),

  // Generate FAQ structured data
  generateFAQSchema: (faqs: Array<{question: string, answer: string}>) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }),

  // Generate article structured data
  generateArticleSchema: (article: {
    title: string;
    description: string;
    author: string;
    datePublished: string;
    dateModified: string;
    image?: string;
    url: string;
  }) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "author": {
      "@type": "Person",
      "name": article.author
    },
<<<<<<< HEAD
    "datePublished": article.datePublished,"
    "dateModified": article.dateModified,"
    "image": article.image,"
    "url": article.url,"
    "publisher": {"
      "@type": "Organization","
      "name": "Zion Tech Group","
      "logo": {"
        "@type": "ImageObject","
=======
    "datePublished": article.datePublished,
    "dateModified": article.dateModified,
    "image": article.image,
    "url": article.url,
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "logo": {
        "@type": "ImageObject",
>>>>>>> cursor/fix-errors-and-merge-to-main-229c
        "url": "https://zion.app/logo.png"
      }
    }
  })
};

// Sitemap generation utilities
export const sitemapUtils = {
  // Generate sitemap entries
  generateSitemapEntry: (url: string, lastmod?: string, changefreq?: string, priority?: string) => {
    return {
      url,
      lastmod: lastmod || new Date().toISOString().split('T')[0],
      changefreq: changefreq || 'weekly',
      priority: priority || '0.8'
    };
  },

  // Generate robots.txt content
  generateRobotsTxt: (sitemapUrl: string = 'https://zion.app/sitemap.xml') => {
    return `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}`;
  }
};

// URL optimization utilities
export const urlUtils = {
  // Generate canonical URL
  generateCanonicalUrl: (path: string, baseUrl: string = 'https://zion.app') => {
    return `${baseUrl}${path}`;
  },

  // Generate Open Graph URL
  generateOGUrl: (path: string, baseUrl: string = 'https://zion.app') => {
    return `${baseUrl}${path}`;
  },

  // Generate Twitter Card URL
  generateTwitterUrl: (path: string, baseUrl: string = 'https://zion.app') => {
    return `${baseUrl}${path}`;
  }
};

// Content optimization utilities
export const contentOptimization = {
  // Extract keywords from content
  extractKeywords: (content: string, minLength: number = 3): string[] => {
    const words = content.toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(word => word.length >= minLength);
    
    const wordCount = words.reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    return Object.entries(wordCount)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10)
      .map(([word]) => word);
  },

  // Generate meta description
  generateMetaDescription: (content: string, maxLength: number = 160): string => {
    const cleanContent = content.replace(/<[^>]*>/g, '').trim();
    if (cleanContent.length <= maxLength) return cleanContent;
    
    return cleanContent.substring(0, maxLength - 3) + '...';
  },

  // Generate title tag
  generateTitle: (pageTitle: string, siteName: string = 'Zion Tech Group', separator: string = ' | '): string => {
    return pageTitle ? `${pageTitle}${separator}${siteName}` : siteName;
  }
};

// Performance SEO utilities
export const performanceSEO = {
  // Preload critical resources
  preloadCriticalResources: () => {
    const criticalResources = [
      { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2' },
      { href: '/css/critical.css', as: 'style' },
      { href: '/images/logo.svg', as: 'image' }
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.type) link.type = resource.type;
      document.head.appendChild(link);
    });
  },

  // Optimize images for SEO
  optimizeImageSEO: (src: string, alt: string, width?: number, height?: number): {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    loading: 'lazy';
  } => {
    return {
      src: src.includes('?') ? src : `${src}?w=${width || 800}&h=${height || 600}&f=webp&q=85`,
      alt,
      width,
      height,
      loading: 'lazy' as const
    };
  }
};

// Analytics and tracking utilities
export const analyticsUtils = {
  // Track page views
  trackPageView: (url: string, title: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: title,
        page_location: url
      });
    }
  },

  // Track custom events
  trackEvent: (eventName: string, parameters?: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && (window as Window & { gtag?: Function }).gtag) {
      (window as Window & { gtag: Function }).gtag('event', eventName, parameters);
    }
  },

  // Track conversion events
  trackConversion: (conversionId: string, value?: number) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        send_to: conversionId,
        value=value
      });
    }
  }
};

// Core Web Vitals tracking
export const coreWebVitals = {
  // Track Core Web Vitals
  trackCoreWebVitals: () => {
    if (typeof window === 'undefined') return;

    const trackMetric = (metric: any) => {
      analyticsUtils.trackEvent('core_web_vitals', {
        metric_name: metric.name,
        metric_value=Math.round(metric.value),
        metric_id: metric.id,
        metric_delta: metric.delta
      });
    };

    // Import and track web vitals
    import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB }) => {
      onCLS(trackMetric);
      // onFID(trackMetric); // onFID is deprecated in newer web-vitals versions
      onFCP(trackMetric);
      onLCP(trackMetric);
      onTTFB(trackMetric);
    });
  }
};

// SEO component for React
export const SEOComponent = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  structuredData 
}: {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: any;
}) => {
  const siteName = 'Zion Tech Group';
  const siteUrl = 'https://zion.app';
  const defaultImage = `${siteUrl}/images/og-default.jpg`;
  
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImage = image ? `${siteUrl}${image}` : defaultImage;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />"
      <meta name="keywords" content={keywords} />"
      <link rel="canonical" href={fullUrl} />"
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />"
      <meta property="og:title" content={fullTitle} />"
      <meta property="og:description" content={description} />"
      <meta property="og:url" content={fullUrl} />"
      <meta property="og:image" content={fullImage} />"
      <meta property="og:site_name" content={siteName} />"
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />"
      <meta name="twitter:title" content={fullTitle} />"
      <meta name="twitter:description" content={description} />"
      <meta name="twitter:image" content={fullImage} />"
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">"
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

// Initialize SEO optimizations
export const initializeSEO = () => {
  // Preload critical resources
  performanceSEO.preloadCriticalResources();
  
  // Track Core Web Vitals
  coreWebVitals.trackCoreWebVitals();
  
  // Set up meta tags
  if (typeof document !== 'undefined') {
    const viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1.0';
      document.head.appendChild(meta);
    }
  }
};
/**
 * SEO Optimization Utilities
 * Comprehensive SEO enhancements for the Zion website
 */

import { Helmet } from 'react-helmet-async';

// Meta tags utilities
export const seoUtils = {
  // Generate structured data for organization
  generateOrganizationSchema: () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://zion.app",
    "logo": "https://zion.app/logo.png",
    "description": "Advanced AI and IT Solutions",
    "sameAs": [
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
    "image": {
      "url": article.image || "https://zion.app/logo.png"
    },
    "datePublished": article.datePublished,
    "dateModified": article.dateModified,
    "url": article.url
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

  // Generate full sitemap
  generateSitemap: (entries: Array<{url: string, lastmod?: string, changefreq?: string, priority?: string}>) => {
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(entry => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastmod || new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${entry.changefreq || 'weekly'}</changefreq>
    <priority>${entry.priority || '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;
  }
};

// Meta tags generation utilities
export const metaUtils = {
  // Generate basic meta tags
  generateBasicMeta: (title: string, description: string, url: string) => ({
    title,
    description,
    url,
    ogTitle: title,
    ogDescription: description,
    ogUrl: url,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description
  }),

  // Generate article meta tags
  generateArticleMeta: (article: {
    title: string;
    description: string;
    author: string;
    datePublished: string;
    dateModified: string;
    image?: string;
    url: string;
  }) => ({
    title: article.title,
    description: article.description,
    url: article.url,
    ogTitle: article.title,
    ogDescription: article.description,
    ogUrl: article.url,
    ogType: 'article',
    ogImage: article.image || 'https://zion.app/logo.png',
    articleAuthor: article.author,
    articlePublishedTime: article.datePublished,
    articleModifiedTime: article.dateModified,
    twitterCard: 'summary_large_image',
    twitterTitle: article.title,
    twitterDescription: article.description,
    twitterImage: article.image || 'https://zion.app/logo.png'
  })
};

// SEO component for React
export const SEOComponent: React.FC<{
  title: string;
  description: string;
  url: string;
  type?: 'website' | 'article';
  image?: string;
  author?: string;
  datePublished?: string;
  dateModified?: string;
  structuredData?: any;
}> = ({
  title,
  description,
  url,
  type = 'website',
  image,
  author,
  datePublished,
  dateModified,
  structuredData
}) => {
  const meta = type === 'article' && author && datePublished ? 
    metaUtils.generateArticleMeta({
      title,
      description,
      author,
      datePublished,
      dateModified: dateModified || datePublished,
      image,
      url
    }) :
    metaUtils.generateBasicMeta(title, description, url);

  // Type assertion to handle the union type
  const articleMeta = meta as any;

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta property="og:title" content={meta.ogTitle} />
      <meta property="og:description" content={meta.ogDescription} />
      <meta property="og:url" content={meta.ogUrl} />
      <meta property="og:type" content={meta.ogType} />
      {articleMeta.ogImage && <meta property="og:image" content={articleMeta.ogImage} />}
      {articleMeta.articleAuthor && <meta property="article:author" content={articleMeta.articleAuthor} />}
      {articleMeta.articlePublishedTime && <meta property="article:published_time" content={articleMeta.articlePublishedTime} />}
      {articleMeta.articleModifiedTime && <meta property="article:modified_time" content={articleMeta.articleModifiedTime} />}
      <meta name="twitter:card" content={meta.twitterCard} />
      <meta name="twitter:title" content={meta.twitterTitle} />
      <meta name="twitter:description" content={meta.twitterDescription} />
      {articleMeta.twitterImage && <meta name="twitter:image" content={articleMeta.twitterImage} />}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

// Performance optimization utilities
export const performanceUtils = {
  // Preload critical resources
  preloadCriticalResources: (resources: Array<{href: string, as: string, type?: string}>) => {
    return resources.map(resource => (
      <link
        key={resource.href}
        rel="preload"
        href={resource.href}
        as={resource.as}
        type={resource.type}
      />
    ));
  },

  // Generate critical CSS
  generateCriticalCSS: (css: string) => {
    return <style dangerouslySetInnerHTML={{ __html: css }} />;
  }
};

// Analytics utilities
export const analyticsUtils = {
  // Google Analytics 4
  gtag: (command: string, targetId: string, config?: any) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag(command, targetId, config);
    }
  },

  // Track page views
  trackPageView: (url: string, title: string) => {
    analyticsUtils.gtag('config', 'GA_MEASUREMENT_ID', {
      page_title: title,
      page_location: url
    });
  },

  // Track events
  trackEvent: (eventName: string, parameters?: any) => {
    analyticsUtils.gtag('event', eventName, parameters);
  }
};

export default {
  seoUtils,
  sitemapUtils,
  metaUtils,
  SEOComponent,
  performanceUtils,
  analyticsUtils
};
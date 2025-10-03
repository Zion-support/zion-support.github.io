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
    url: string;
  }) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "author": {
      "@type": "Organization",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group"
    },
    "datePublished": article.datePublished,
    "dateModified": article.dateModified,
    "url": article.url
  })
};

// SEO component for pages
export const SEOHead: React.FC<{
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  structuredData?: object;
}> = ({ title, description, keywords = [], canonical, ogImage, structuredData }) => {
  const fullTitle = `${title} | Zion Tech Group`;
  const defaultOgImage = 'https://zion.app/og-image.jpg';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage || defaultOgImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultOgImage} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

// Utility functions
export const generateSitemap = (pages: Array<{url: string, lastmod: string, changefreq: string, priority: string}>) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
  return sitemap;
};

export const generateRobotsTxt = (allow: boolean = true, sitemapUrl?: string) => {
  const robots = `User-agent: *
${allow ? 'Allow: /' : 'Disallow: /'}
${sitemapUrl ? `Sitemap: ${sitemapUrl}` : ''}`;
  return robots;
};

export const optimizeImageAlt = (src: string, context?: string): string => {
  const filename = src.split('/').pop()?.split('.')[0] || '';
  const cleanFilename = filename.replace(/[-_]/g, ' ');
  
  if (context) {
    return `${context} - ${cleanFilename}`;
  }
  
  return cleanFilename;
};

export const generateMetaDescription = (content: string, maxLength: number = 160): string => {
  const text = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  
  if (text.length <= maxLength) {
    return text;
  }
  
  const truncated = text.substring(0, maxLength - 3);
  const lastSpace = truncated.lastIndexOf(' ');
  
  return lastSpace > 0 ? truncated.substring(0, lastSpace) + '...' : truncated + '...';
};

export default {
  seoUtils,
  SEOHead,
  generateSitemap,
  generateRobotsTxt,
  optimizeImageAlt,
  generateMetaDescription
};
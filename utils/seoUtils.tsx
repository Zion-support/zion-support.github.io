// SEO utilities for the Zion Tech Group website
import { Helmet } from 'react-helmet-async';

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;
  structuredData?: any;
}

export const seoUtils = {
  // Generate meta tags for a page
  generateMetaTags(data: SEOData): React.ReactElement {
    return (
      <Helmet>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        {data.keywords && <meta name="keywords" content={data.keywords.join(', ')} />}
        {data.canonical && <link rel="canonical" href={data.canonical} />}
        
        {/* Open Graph tags */}
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description} />
        <meta property="og:type" content={data.ogType || 'website'} />
        {data.ogImage && <meta property="og:image" content={data.ogImage} />}
        {data.canonical && <meta property="og:url" content={data.canonical} />}
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content={data.twitterCard || 'summary_large_image'} />
        {data.twitterSite && <meta name="twitter:site" content={data.twitterSite} />}
        {data.twitterCreator && <meta name="twitter:creator" content={data.twitterCreator} />}
        <meta name="twitter:title" content={data.title} />
        <meta name="twitter:description" content={data.description} />
        {data.ogImage && <meta name="twitter:image" content={data.ogImage} />}
        
        {/* Structured data */}
        {data.structuredData && (
          <script type="application/ld+json">
            {JSON.stringify(data.structuredData)}
          </script>
        )}
      </Helmet>
    );
  },

  // Generate structured data for organization
  generateOrganizationStructuredData(organization: {
    name: string;
    url: string;
    logo: string;
    description: string;
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
  }): any {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": organization.name,
      "url": organization.url,
      "logo": organization.logo,
      "description": organization.description,
      ...(organization.address && {
        "address": {
          "@type": "PostalAddress",
          "streetAddress": organization.address.streetAddress,
          "addressLocality": organization.address.addressLocality,
          "addressRegion": organization.address.addressRegion,
          "postalCode": organization.address.postalCode,
          "addressCountry": organization.address.addressCountry
        }
      }),
      ...(organization.contactPoint && {
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": organization.contactPoint.telephone,
          "contactType": organization.contactPoint.contactType,
          ...(organization.contactPoint.email && { "email": organization.contactPoint.email })
        }
      })
    };
  },

  // Generate structured data for service
  generateServiceStructuredData(service: {
    name: string;
    description: string;
    provider: string;
    areaServed: string;
    serviceType: string;
    url?: string;
  }): any {
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": service.name,
      "description": service.description,
      "provider": {
        "@type": "Organization",
        "name": service.provider
      },
      "areaServed": service.areaServed,
      "serviceType": service.serviceType,
      ...(service.url && { "url": service.url })
    };
  },

  // Generate breadcrumb structured data
  generateBreadcrumbStructuredData(items: Array<{
    name: string;
    url: string;
  }>): any {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }))
    };
  },

  // Generate FAQ structured data
  generateFAQStructuredData(faqs: Array<{
    question: string;
    answer: string;
  }>): any {
    return {
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
    };
  },

  // Generate sitemap data
  generateSitemapData(pages: Array<{
    url: string;
    lastModified: string;
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority: number;
  }>): string {
    const baseUrl = process.env.REACT_APP_BASE_URL || 'https://ziontechgroup.com';
    
    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    pages.forEach(page => {
      sitemap += '  <url>\n';
      sitemap += `    <loc>${baseUrl}${page.url}</loc>\n`;
      sitemap += `    <lastmod>${page.lastModified}</lastmod>\n`;
      sitemap += `    <changefreq>${page.changeFrequency}</changefreq>\n`;
      sitemap += `    <priority>${page.priority}</priority>\n`;
      sitemap += '  </url>\n';
    });
    
    sitemap += '</urlset>';
    return sitemap;
  },

  // Validate URL structure
  isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  },

  // Generate robots.txt content
  generateRobotsTxt(disallowPaths: string[] = [], sitemapUrl?: string): string {
    let robots = 'User-agent: *\n';
    
    disallowPaths.forEach(path => {
      robots += `Disallow: ${path}\n`;
    });
    
    if (sitemapUrl) {
      robots += `Sitemap: ${sitemapUrl}\n`;
    }
    
    return robots;
  }
};

export default seoUtils;
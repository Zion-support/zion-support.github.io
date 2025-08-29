import React from 'react';
import { Helmet } from 'react-helmet-async';
interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  url?: string;
  image?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  nofollow?: boolean;
}
export function SEO({
  title,
  description,
  canonical,
  url,
  image = '/images/zion-tech-group-og.jpg',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Zion Tech Group',
  section,
  tags = [],
  noindex = false,
  nofollow = false
}: SEOProps) {
  const siteName = 'Zion Tech Group';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const fullCanonical = canonical || window.location.href;
  // Default structured data for organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": siteUrl,
    "logo": `${siteUrl}/images/zion-tech-group-logo.png`,
    "description": "Leading provider of cutting-edge AI solutions, cloud computing, and digital transformation services",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "streetAddress": "364 E Main St STE 1008"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-ZION-TECH",
      "contactType": "customer service",
      "email": "info@ziontechgroup.com"
    },
    "sameAs": [
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup",
      "https://facebook.com/ziontechgroup",
      "https://instagram.com/ziontechgroup"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 39.4496,
        "longitude": -75.7163
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technology Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI & Analytics Solutions",
            "description": "Cutting-edge artificial intelligence and data analytics services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cybersecurity Services",
            "description": "Advanced security protocols and threat protection"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud & DevOps",
            "description": "Scalable cloud infrastructure and development operations"
          }
        }
      ]
    }
  };
  // Merge with custom structured data
  const finalStructuredData = structuredData || defaultStructuredData;
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author || 'Zion Tech Group'} />
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />
      {/* Robots Meta */}
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`} />
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {/* Additional Meta Tags */}
      <meta name="author" content={author} />
      <meta name="keywords" content={tags.join(', ')} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(pageSchema)}
      </script>
      {/* Additional structured data for articles */}
      {type === 'article' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": fullTitle,
            "description": description,
            "image": image,
            "author": {
              "@type": "Organization",
              "name": author || siteName
            },
            "publisher": {
              "@type": "Organization",
              "name": siteName,
              "logo": {
                "@type": "ImageObject",
                "url": "https://ziontechgroup.com/images/zion-logo.png"
              }
            },
            "datePublished": publishedTime,
            "dateModified": modifiedTime,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": fullCanonical
            }
          })}
        </script>
      )}
    </Helmet>
  );
}

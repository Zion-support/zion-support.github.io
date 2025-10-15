interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage: string;
  ogType: string;
  twitterCard: string;
  robots: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  viewport?: string;
  charset?: string;
  publisher?: string;
  language?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  geo?: {
    latitude?: string;
    longitude?: string;
    region?: string;
    placename?: string;
  };
  alternate?: Array<{
    href: string;
    hreflang: string;
  }>;
  structuredData?: Record<string, unknown>;
}

export const defaultSEOConfig: SEOConfig = {
  title: 'Zion Tech Group - Advanced AI and IT Solutions',
  description: 'Leading provider of advanced AI and IT solutions for businesses worldwide. Expert services in artificial intelligence, cloud computing, cybersecurity, and digital transformation.',
  keywords: [
    "AI solutions",
    "artificial intelligence",
    "IT services",
    "cloud computing",
    "cybersecurity",
    "digital transformation",
    "machine learning",
    "data analytics",
    "automation",
    "business intelligence",
  ],
  canonicalUrl: 'https://zion.app',
  ogImage: 'https://zion.app/og-image.jpg',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  robots: 'index, follow',
  author: 'Zion Tech Group',
  publisher: 'Zion Tech Group',
  language: 'en-US',
  viewport: 'width=device-width, initial-scale=1.0',
  charset: 'UTF-8',
  ogTitle: 'Zion Tech Group - Advanced AI and IT Solutions',
  ogDescription: 'Leading provider of advanced AI and IT solutions for businesses worldwide.',
  twitterTitle: 'Zion Tech Group - Advanced AI and IT Solutions',
  twitterDescription: 'Leading provider of advanced AI and IT solutions for businesses worldwide.',
  twitterImage: '/images/og-image.jpg',
  geo: {
    latitude: "40.7128",
    longitude: "-74.0060",
    region: "US-NY",
    placename: "New York",
  },
  alternate: [
    { href: "https://zion.app/en", hreflang: "en" },
    { href: "https://zion.app/es", hreflang: "es" },
  ],
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Zion Tech Group",
    url: "https://zion.app",
    logo: "https://zion.app/images/logo.png",
  },
};


export const generateImageAlt = (imagePath: string, alt?: string) => {
  return alt || `Zion Tech Group - ${imagePath.split('/').pop()?.split('.')[0] || 'image'}`
}

export const generateCanonicalUrl = (path: string, baseUrl: string = 'https://zion.app') => {
  return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
};

export const defaultMeta = {
  viewport: 'width=device-width, initial-scale=1',
  charset: 'UTF-8'
};

// Enhanced SEO meta tags utility
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: Record<string, unknown>;
  noIndex?: boolean;
}

export const generateSEOTags = ({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noIndex = false
}: SEOProps) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const defaultKeywords = [
    'AI solutions',
    '5G technology', 
    'IT services',
    'artificial intelligence',
    'machine learning',
    'cybersecurity',
    'cloud computing',
    'business automation',
    'Zion Tech Group'
  ];
  const allKeywords = [...new Set([...defaultKeywords, ...keywords])].join(', ');

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow'} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#8b5cf6" />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical || 'https://ziontechgroup.com'} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional SEO Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
    </Helmet>
  );
};

// Structured data generators
export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Zion Tech Group",
  "url": "https://ziontechgroup.com",
  "logo": "https://ziontechgroup.com/logo.png",
  "description": "Leading provider of AI solutions, 5G technology, and comprehensive IT services",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "364 E Main St STE 1008",
    "addressLocality": "Middletown",
    "addressRegion": "DE",
    "postalCode": "19709",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-302-464-0950",
    "contactType": "customer service",
    "email": "kleber@ziontechgroup.com"
  },
  "sameAs": [
    "https://facebook.com/ziontechgroup",
    "https://twitter.com/ziontechgroup",
    "https://linkedin.com/company/ziontechgroup",
    "https://instagram.com/ziontechgroup",
    "https://github.com/ziontechgroup"
  ],
  "foundingDate": "2020",
  "numberOfEmployees": "10-50",
  "industry": "Technology",
  "services": [
    "AI Solutions",
    "5G Technology",
    "IT Services",
    "Cybersecurity",
    "Cloud Computing",
    "Business Automation"
  ]
});

export const generateServiceSchema = (serviceName: string, description: string, price?: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "provider": {
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com"
  },
  "offers": price ? {
    "@type": "Offer",
    "price": price,
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  } : undefined,
  "category": "Technology Services",
  "serviceType": "AI and IT Solutions"
});

export const generateBreadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://ziontechgroup.com${item.url}`
  }))
});

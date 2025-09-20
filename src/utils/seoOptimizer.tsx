import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  structuredData?: any;
}

export const SEOOptimizer: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Revolutionary AI & Technology Solutions',
  description = 'Leading provider of AI, quantum computing, space technology, and enterprise IT solutions. Transform your business with cutting-edge technology.',
  keywords = 'AI, artificial intelligence, quantum computing, space technology, enterprise IT, machine learning, automation, Zion Tech Group',
  image = 'https://zion.app/og-image.jpg',
  url = 'https://zion.app',
  type = 'website',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  structuredData
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullUrl = url.startsWith('http') ? url : `https://zion.app${url}`;
  const fullImage = image.startsWith('http') ? image : `https://zion.app${image}`;

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": description,
    "url": fullUrl,
    "logo": "https://zion.app/logo.png",
    "sameAs": [
      "https://linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup",
      "https://github.com/zion-tech-group"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-ZION-TECH",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Tech Street",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94105",
      "addressCountry": "US"
    },
    "foundingDate": "2015",
    "numberOfEmployees": "50+",
    "services": [
      "AI & Machine Learning",
      "Quantum Computing",
      "Space Technology",
      "Enterprise IT Solutions"
    ]
  };

  const articleStructuredData = type === 'article' ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": fullImage,
    "author": {
      "@type": "Organization",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "logo": {
        "@type": "ImageObject",
        "url": "https://zion.app/logo.png"
      }
    },
    "datePublished": publishedTime,
    "dateModified": modifiedTime || publishedTime,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullUrl
    },
    "articleSection": section,
    "keywords": tags.join(', ')
  } : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      
      {/* Theme and App Meta Tags */}
      <meta name="theme-color" content="#667eea" />
      <meta name="msapplication-TileColor" content="#667eea" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || (articleStructuredData || defaultStructuredData))}
      </script>
      
      {/* Additional SEO Scripts */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Zion Tech Group",
          "url": "https://zion.app",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://zion.app/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
    </Helmet>
  );
};

// SEO utility functions
export const generateMetaDescription = (content: string, maxLength: number = 160): string => {
  const cleanContent = content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  if (cleanContent.length <= maxLength) {
    return cleanContent;
  }
  return cleanContent.substring(0, maxLength - 3) + '...';
};

export const generateKeywords = (content: string, maxKeywords: number = 10): string => {
  const words = content
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 3);
  
  const wordCount: Record<string, number> = {};
  words.forEach(word => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });
  
  return Object.entries(wordCount)
    .sort(([,a], [,b]) => b - a)
    .slice(0, maxKeywords)
    .map(([word]) => word)
    .join(', ');
};

export const generateStructuredData = (type: string, data: any) => {
  const baseStructure = {
    "@context": "https://schema.org",
    "@type": type,
    ...data
  };
  
  return baseStructure;
};

export default SEOOptimizer;
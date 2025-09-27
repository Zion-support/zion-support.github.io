import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
}

const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Advanced Technology Solutions',
  description = 'Leading provider of cutting-edge technology solutions including AI, blockchain, quantum computing, and enterprise software development.',
  keywords = ['technology', 'AI', 'blockchain', 'quantum computing', 'enterprise software', 'Zion Tech Group'],
  image = '/images/og-image.jpg',
  url = window.location.href,
  type = 'website'
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="author" content="Zion Tech Group" />
      <meta name="theme-color" content="#1e3a8a" />
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "description": description,
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/images/logo.png",
          "sameAs": [
            "https://twitter.com/ziontechgroup",
            "https://linkedin.com/company/ziontechgroup",
            "https://github.com/ziontechgroup"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
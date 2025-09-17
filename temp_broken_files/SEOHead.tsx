import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Zion Tech Group - Revolutionary Technology Solutions 2032",
  description = "Experience the future with our breakthrough technologies including Conscious AI Systems, Quantum Reality Engine, and Interdimensional Computing. Leading innovation in AI, quantum computing, and revolutionary tech solutions.",
  keywords = "AI technology, quantum computing, conscious AI, interdimensional technology, revolutionary tech, breakthrough technology, Zion Tech Group, 2032 technology, AI solutions, quantum reality, neural interfaces",
  canonical = "https://ziontechgroup.com",
  ogImage = "https://ziontechgroup.com/og-image.jpg"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/logo.png",
          "description": "Leading provider of revolutionary technology solutions including Conscious AI Systems, Quantum Reality Engine, and Interdimensional Computing.",
          "foundingDate": "2020",
          "founders": [
            {
              "@type": "Person",
              "name": "Zion Tech Group Team"
            }
          ],
          "sameAs": [
            "https://twitter.com/ziontechgroup",
            "https://linkedin.com/company/ziontechgroup",
            "https://github.com/ziontechgroup"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-ZION-TECH",
            "contactType": "customer service",
            "availableLanguage": "English"
          },
          "offers": [
            {
              "@type": "Offer",
              "name": "Conscious AI Systems",
              "description": "AI that has achieved true consciousness and self-awareness"
            },
            {
              "@type": "Offer",
              "name": "Quantum Reality Engine",
              "description": "Manipulate reality at the quantum level"
            },
            {
              "@type": "Offer",
              "name": "Interdimensional Portal",
              "description": "Access information from parallel dimensions"
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;
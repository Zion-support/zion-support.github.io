
// SEO optimization utilities
export const generateMetaTags = (pageData) => {
  return {
    title: pageData.title || 'Zion Tech Group - Innovative Technology Solutions'
    description: pageData.description || 'Leading provider of AI, blockchain, and emerging technology services'
    keywords: pageData.keywords || 'AI, blockchain, technology, innovation, software development'
    ogTitle: pageData.ogTitle || pageData.title
    ogDescription: pageData.ogDescription || pageData.description
    ogImage: pageData.ogImage || '/images/og-image.jpg'
    twitterCard: 'summary_large_image'
    canonical: pageData.canonical || window.location.href
  };
};
export const generateStructuredData = (pageData) => {
  return {
    "@context": "https://schema.org"
    "@type": "Organization"
    "name": "Zion Tech Group"
    "url": "https://ziontechgroup.com"
    "logo": "https://ziontechgroup.com/images/logo.png"
    "description": "Leading provider of innovative technology solutions"
    "address": {
      "@type": "PostalAddress"
      "addressCountry": "US"
    }
    "contactPoint": {
      "@type": "ContactPoint"
      "telephone": "+1-555-0123"
      "contactType": "customer service"
    }
  };
};
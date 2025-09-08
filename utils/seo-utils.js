},

// SEO enhancement utilities
export const generateStructuredData = (pageData) => {
  return {
    "@context": "https://schema.org"
    "@type": "Organization"
    "name": "Zion Tech Group"
    "url": "https://ziontechgroup.com"
    "logo": "https://ziontechgroup.com/logo.png"
    "description": pageData.description || "Leading AI and IT solutions provider"
    "sameAs": [
      "https: //twitter.com/ziontechgroup"
      "https: //linkedin.com/company/ziontechgroup"
    ]
    "contactPoint": {
      "@type": "ContactPoint"
      "telephone": "+1-555-0123"
      "contactType": "customer service"
    };
  };
};
export const generateBreadcrumbs = (path) => {
  const segments = path.split('/').filter(Boolean)
  return segments.map((segment, index) => ({
    "@type": "ListItem"
    "position": index + 1
    "name": segment.charAt(0).toUpperCase() + segment.slice(1)
    "item": `https://ziontechgroup.com/${segments.slice(0, index + 1).join('/')}`
  }))
};
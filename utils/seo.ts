// SEO utilities
export const generateMetadata = (title: string, description: string) => {
  return {
    title: `${title} - Zion Tech Group`,
    description,
    openGraph: {
      title: `${title} - Zion Tech Group`,
      description,
      type: 'website',
      url: 'https://ziontechgroup.com',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} - Zion Tech Group`,
      description,
    },
  }
};

export const generateStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Leading provider of AI-powered IT services and solutions",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "email": "contact@ziontechgroup.com"
    }
  }
};

// Structured data for SEO
export const generateStructuredData = (type, data) => {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  };
  
  return JSON.stringify(baseSchema);
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Zion AI',
  url: 'https://zion.ai',
  logo: 'https://zion.ai/images/logo.png',
  description: 'Leading provider of AI-powered solutions',
  sameAs: [
    'https://twitter.com/zionai',
    'https://linkedin.com/company/zionai'
  ]
};
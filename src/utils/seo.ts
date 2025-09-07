// SEO utility functions

export const generateMetaDescription = (content: string, maxLength: number = 160): string => {
  const cleanContent = content.replace(/<[^>]*>/g, '').trim();
  if (cleanContent.length <= maxLength) return cleanContent;
  
  return cleanContent.substring(0, maxLength - 3) + '...';
};

export const generateKeywords = (content: string, maxKeywords: number = 10): string[] => {
  const words = content
    .toLowerCase()
    .replace(/[^a-z\s]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 3);
  
  const wordCount: Record<string, number> = {};
  words.forEach(word => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });
  
  return Object.entries(wordCount)
    .sort(([, a], [, b]) => b - a)
    .slice(0, maxKeywords)
    .map(([word]) => word);
};

export const generateStructuredData = (type: string, data: Record<string, any>) => {
  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  };
  
  return baseStructuredData;
};

export const generateOrganizationData = () => {
  return generateStructuredData('Organization', {
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    description: 'Leading technology solutions provider specializing in AI, cloud computing, and digital transformation.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Tech Street',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94105',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-0123',
      contactType: 'customer service',
      availableLanguage: 'English'
    },
    sameAs: [
      'https://twitter.com/ziontechgroup',
      'https://linkedin.com/company/ziontechgroup',
      'https://github.com/ziontechgroup'
    ]
  });
};

export const generateWebSiteData = () => {
  return generateStructuredData('WebSite', {
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    description: 'Leading technology solutions provider',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://ziontechgroup.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  });
};
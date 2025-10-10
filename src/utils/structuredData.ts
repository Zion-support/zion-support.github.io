interface Organization {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url: string;
  logo: string;
  contactPoint: {
    '@type': string;
    telephone: string;
    contactType: string;
    email: string;
  };
  address: {
    '@type': string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  sameAs: string[];
  offers: {
    '@type': string;
    name: string;
    description: string;
    price: string;
    priceCurrency: string;
    availability: string;
  };
}

interface Service {
  '@type': string;
  name: string;
  description: string;
  provider: {
    '@type': string;
    name: string;
  };
  areaServed: string;
  availableChannel: {
    '@type': string;
    serviceUrl: string;
  };
}

export const generateOrganizationSchema = (): Organization => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Zion Tech Group',
  description: 'Leading provider of AI-powered enterprise solutions and digital transformation services',
  url: 'https://ziontechgroup.com',
  logo: 'https://ziontechgroup.com/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-302-464-0950',
    contactType: 'customer service',
    email: 'kleber@ziontechgroup.com'
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '364 E Main St STE 1008',
    addressLocality: 'Middletown',
    addressRegion: 'DE',
    postalCode: '19709',
    addressCountry: 'US'
  },
  sameAs: [
    'https://linkedin.com/company/zion-tech-group',
    'https://twitter.com/ziontechgroup'
  ],
  offers: {
    '@type': 'Offer',
    name: 'AI Enterprise Transformation Services',
    description: 'Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains',
    price: '50000',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock'
  }
});

export const generateServiceSchema = (serviceName: string, description: string, url: string): Service => ({
  '@type': 'Service',
  name: serviceName,
  description: description,
  provider: {
    '@type': 'Organization',
    name: 'Zion Tech Group'
  },
  areaServed: 'United States',
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: url
  }
});

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
});

export default {
  generateOrganizationSchema,
  generateServiceSchema,
  generateBreadcrumbSchema,
  generateFAQSchema
};
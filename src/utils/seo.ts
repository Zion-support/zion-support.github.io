// SEO utilities and helpers

export interface StructuredData {
  '@context': string;
  '@type': string;
  [key: string]: unknown;
}

export const generateOrganizationSchema = (): StructuredData => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Zion Tech Group',
  url: 'https://ziontechgroup.com',
  logo: 'https://ziontechgroup.com/logo.png',
  description:
    'Leading provider of AI-powered enterprise solutions, automation, and digital transformation services.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-302-464-0950',
    contactType: 'Customer Service',
    areaServed: 'US',
    availableLanguage: ['English'],
  },
  sameAs: [
    'https://www.linkedin.com/company/zion-tech-group',
    'https://twitter.com/ziontechgroup',
  ],
});

export const generateWebsiteSchema = (): StructuredData => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Zion Tech Group',
  url: 'https://ziontechgroup.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://ziontechgroup.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
});

export const generateBreadcrumbSchema = (
  items: Array<{ name: string; url: string }>
): StructuredData => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const generateServiceSchema = (service: {
  name: string;
  description: string;
  provider: string;
}): StructuredData => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.name,
  description: service.description,
  provider: {
    '@type': 'Organization',
    name: service.provider,
  },
  areaServed: 'US',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI & IT Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
        },
      },
    ],
  },
});

export const injectStructuredData = (data: StructuredData | StructuredData[]) => {
  if (typeof window === 'undefined') return;

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(Array.isArray(data) ? data : [data]);
  document.head.appendChild(script);
};

export const generatePageTitle = (
  pageTitle: string,
  separator: string = '|'
): string => {
  const siteName = 'Zion Tech Group';
  return `${pageTitle} ${separator} ${siteName}`;
};

export const generateCanonicalUrl = (path: string): string => {
  const baseUrl = 'https://ziontechgroup.com';
  return `${baseUrl}${path}`;
};

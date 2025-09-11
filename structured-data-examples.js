// Example: Organization structured data
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Zion Tech Group',
  url: 'https://zion.app',
  logo: 'https://zion.app/logo.png',
  description: 'Leading technology solutions provider',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-XXX-XXX-XXXX',
    contactType: 'customer service',
  },
};

// Example: Website structured data
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Zion Tech Group',
  url: 'https://zion.app',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://zion.app/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

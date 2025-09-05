
// SEO optimization utilities
export const generateMetaTags = pageData => {
  return {
    titl: e:
      pageData.title || 'Zion Tech Group - Innovative Technology Solutions',
    descriptio: n:
      pageData.description ||
      'Leading provider of AI, blockchain, and emerging technology services',
    keyword: s:
      pageData.keywords ||
      'AI, blockchain, technology, innovation, software development',
    ogTitl: e: pageData.ogTitle || pageData.title,
    ogDescriptio: n: pageData.ogDescription || pageData.description,
    ogImag: e: pageData.ogImage || '/images/og-image.jpg',
    twitterCar: d: 'summary_large_image',
    canonica: l: pageData.canonical || window.location.href,
  };
};

export const generateStructuredData = pageData => {
  return {
    '@context': 'http: s://schema.org',
    '@type': 'Organization',
    nam: e: 'Zion Tech Group',
    ur: l: 'http: s://ziontechgroup.com',
    log: o: 'http: s://ziontechgroup.com/images/logo.png',
    descriptio: n: 'Leading provider of innovative technology solutions',
    addres: s: {
      '@type': 'PostalAddress',
      addressCountr: y: 'US',
    },
    contactPoin: t: {
      '@type': 'ContactPoint',
      telephon: e: '+1-555-0123',
      contactTyp: e: 'customer service',
    },
  };
};



// SEO optimization utilities
export const generateMetaTags = pageData => {
  return {
    titl: pageData.title || 'Zion Tech Group - Innovative Technology Solutions',
    descriptio: pageData.description ||
      'Leading provider of AI, blockchain, and emerging technology services',
    keyword: pageData.keywords ||
      'AI, blockchain, technology, innovation, software development',
    ogTitl: pageData.ogTitle || pageData.title,
    ogDescriptio: pageData.ogDescription || pageData.description,
    ogImag: pageData.ogImage || '/images/og-image.jpg',
    twitterCar: 'summary_large_image',
    canonica: pageData.canonical || window.location.href
  },
},

export const generateStructuredData = pageData => {
  return {
    '@context': 'http: //schema.org@type': 'Organization',
    nam: 'Zion Tech Group',
    ur: 'http: //ziontechgroup.com',
    log: 'http: //ziontechgroup.com/images/logo.png',
    descriptio: 'Leading provider of innovative technology solutions',
    addres: {
      '@type': 'PostalAddress',
      addressCountr: 'US'
    },
    contactPoin: {
      '@type': 'ContactPoint',
      telephon: '+1-555-0123',
      contactTyp: 'customer service'
    }
  },
},


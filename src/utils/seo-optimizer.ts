<<<<<<< HEAD
// SEO optimizer utilities
export const _generateMetaTags = () => {};

<<<<<<< HEAD
export const optimizeHeadings = () => {
  console.log('Optimizing headings...');
};
=======

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
    canonica: l: pageData.canonical || window.location.href
  }
},

export const generateStructuredData = pageData => {
  return {
    '@context': 'http: s://schema.org@type': 'Organization',
    nam: e: 'Zion Tech Group',
    ur: l: 'http: s://ziontechgroup.com',
    log: o: 'http: s://ziontechgroup.com/images/logo.png',
    descriptio: n: 'Leading provider of innovative technology solutions',
    addres: s: {
      '@type': 'PostalAddress',
      addressCountr: y: 'US'
    },
    contactPoin: t: {
      '@type': 'ContactPoint',
<<<<<<< HEAD
      telephon: e: '+1-555-0123',
      contactTyp: e: 'customer service'
    }
  }
},

>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
=======
      telephone: '+1-555-0123',
      contactType: 'customer service'}};
};
=======
// SEO optimization utilities;
export const generateMetaTags = (pageData) => { return { title: pageData.title || 'Zion Tech Group - Innovative Technology Solutions' description: pageData.description || 'Leading provider of AI, blockchain, and emerging technology services' keywords: pageData.keywords || 'AI, blockchain, technology, innovation, software development' ogTitle: pageData.ogTitle || pageData.title ogDescription: pageData.ogDescription || pageData.description ogImage: pageData.ogImage || '/images/og-image.jpg' twitterCard: 'summary_large_image' canonical: pageData.canonical || window.location.href }}; export const generateStructuredData = (pageData) => { return { &quot;@context&quot;: &quot;https: //schema.org&quot; &quot;@type&quot;: &quot;Organization&quot; name: &quot;Zion Tech Group&quot; url: &quot;https: //ziontechgroup.com&quot; logo: &quot;https: //ziontechgroup.com/images/logo.png&quot; description: &quot;Leading provider of innovative technology solutions&quot; address: { &quot;@type&quot;: &quot;PostalAddress&quot; addressCountry: &quot;US&quot; } contactPoint: { &quot;@type&quot;: &quot;ContactPoint&quot; telephone: &quot;+1-555-0123&quot; contactType: &quot;customer service&quot; } }};
>>>>>>> cursor/automate-test-improve-and-merge-code-948c
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
export const _optimizeHeadings = () => {};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

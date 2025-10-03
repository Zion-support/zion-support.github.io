
// SEO utilities
export const seoOptimizer = {
  // Generate meta tags
  generateMetaTags: (data) => {
    const {
      title = 'Zion AI - Advanced AI Solutions',
      description = 'Leading provider of AI solutions, automation, and digital transformation services.',
      keywords = 'AI, artificial intelligence, automation, digital transformation',
      image = '/images/og-image.jpg',
      url = typeof window !== 'undefined' ? window.location.href : ''
    } = data;
    
    return {
      title,
      description,
      keywords,
      'og:title': title,
      'og:description': description,
      'og:image': image,
      'og:url': url,
      'og:type': 'website',
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': image
    };
  },
  
  // Generate structured data
  generateStructuredData: () => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion AI',
    url: 'https://zion.app',
    logo: 'https://zion.app/images/logo.png',
    description: 'Leading provider of AI solutions and digital transformation services',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'contact@zion.app'
    }
  }),
  
  // Optimize images for SEO
  optimizeImageSEO: (src, alt) => ({
    src,
    alt: alt || 'Zion AI',
    loading: 'lazy',
    decoding: 'async'
  }),
  
  // Generate sitemap entry
  generateSitemapEntry: (url, priority = 0.8, changefreq = 'weekly') => ({
    url,
    lastmod: new Date().toISOString(),
    priority,
    changefreq
  })
};

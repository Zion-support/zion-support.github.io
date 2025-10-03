// Advanced schema markup generator
export const schemaMarkup = {
  // Generate FAQ schema
  generateFAQSchema: (faqs) => {
    return {
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
    };
  },
  
  // Generate service schema
  generateServiceSchema: (service) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.name,
      description: service.description,
      provider: {
        '@type': 'Organization',
        name: 'Zion AI',
        url: 'https://zion.ai'
      },
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: `https://zion.ai/services/${service.slug}`
      }
    };
  },
  
  // Generate breadcrumb schema
  generateBreadcrumbSchema: (breadcrumbs) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: `https://zion.ai${crumb.url}`
      }))
    };
  }
};
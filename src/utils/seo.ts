// Enhanced SEO utilities

export interface SEOData {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  noIndex?: boolean
  structuredData?: any
}

export const seoUtils = {
  generateTitle: (title: string, siteName: string = 'Zion Tech Group'): string => {
    if (title.includes(siteName)) {
      return title
    }
    return `${title} | ${siteName}`
  },

  generateDescription: (description: string, maxLength: number = 160): string => {
    if (description.length <= maxLength) {
      return description
    }
    return description.substring(0, maxLength - 3) + '...'
  },

  generateKeywords: (keywords: string[]): string => {
    return keywords.join(', ')
  },

  generateStructuredData: (data: {
    type: 'Organization' | 'WebSite' | 'WebPage' | 'Article'
    name: string
    url?: string
    description?: string
    [key: string]: any
  }) => {
    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': data.type,
      name: data.name
    }

    if (data.url) baseSchema.url = data.url
    if (data.description) baseSchema.description = data.description

    return {
      ...baseSchema,
      ...data
    }
  },

  generateBreadcrumbStructuredData: (items: Array<{ name: string; url: string }>) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url
      }))
    }
  },

  generateFAQStructuredData: (faqs: Array<{ question: string; answer: string }>) => {
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
    }
  }
}

// Meta tag utilities
export const metaUtils = {
  generateMetaTags: (seoData: SEOData) => {
    const tags = [
      { name: 'title', content: seoData.title },
      { name: 'description', content: seoData.description },
      { name: 'keywords', content: seoData.keywords?.join(', ') || '' },
      { property: 'og:title', content: seoData.title },
      { property: 'og:description', content: seoData.description },
      { property: 'og:type', content: seoData.ogType || 'website' },
      { name: 'twitter:card', content: seoData.twitterCard || 'summary_large_image' },
      { name: 'twitter:title', content: seoData.title },
      { name: 'twitter:description', content: seoData.description }
    ]

    if (seoData.canonical) {
      tags.push({ name: 'canonical', content: seoData.canonical })
    }

    if (seoData.ogImage) {
      tags.push({ property: 'og:image', content: seoData.ogImage })
      tags.push({ name: 'twitter:image', content: seoData.ogImage })
    }

    if (seoData.noIndex) {
      tags.push({ name: 'robots', content: 'noindex,nofollow' })
    }

    return tags
  }
}

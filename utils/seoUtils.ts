interface SEOConfig {
  title: string
  description: string
  keywords: string[]
  canonicalUrl: string
  ogImage: string
  ogType: string
  twitterCard: string
  robots: string
  author?: string
  publishedTime?: string
  modifiedTime?: string
  section?: string
  tags?: string[]
  viewport?: string
  charset?: string
  publisher?: string
  language?: string
  ogTitle?: string
  ogDescription?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  geo?: {
    latitude?: string
    longitude?: string
    region?: string
    placename?: string
  }
  alternate?: Array<{
    href: string
    hreflang: string
  }>
  structuredData?: any
}

export const defaultSEOConfig: SEOConfig = {
  title: 'Zion Tech Group - Advanced AI and IT Solutions'
  description: 'Leading provider of advanced AI and IT solutions for businesses worldwide. Expert services in artificial intelligence, cloud computing, cybersecurity, and digital transformation.'
    'AI solutions'
    'artificial intelligence'
    'IT services'
    'cloud computing'
    'cybersecurity'
    'digital transformation'
    'machine learning'
    'data analytics'
    'automation'
    'business intelligence'
  canonicalUrl: 'https://zion.app'
  ogImage: '/images/og-image.jpg'
  ogType: 'website'
  twitterCard: 'summary_large_image'
  robots: 'index, follow'
  author: 'Zion Tech Group'
  publisher: 'Zion Tech Group'
  language: 'en-US'
  viewport: 'width=device-width, initial-scale=1.0'
  charset: 'UTF-8'
  ogTitle: 'Zion Tech Group - Advanced AI and IT Solutions'
  ogDescription: 'Leading provider of advanced AI and IT solutions for businesses worldwide.'
  twitterTitle: 'Zion Tech Group - Advanced AI and IT Solutions'
  twitterDescription: 'Leading provider of advanced AI and IT solutions for businesses worldwide.'
  twitterImage: '/images/og-image.jpg'
    latitude: '40.7128'
    longitude: '-74.0060'
    region: 'US-NY'
    placename: 'New York'
    { href: 'https://zion.app/en', hreflang: 'en'
    { href: 'https://zion.app/es', hreflang: 'es'
    '@context': 'https://schema.org'
    '@type': 'Organization'
    name: 'Zion Tech Group'
    url: 'https://zion.app'
    logo: 'https://zion.app/images/logo.png'
    keywords: config.keywords.join(', '
    'og:title'
    'og:description'
    'og:image'
    'og:type'
    'og:url'
    'twitter:card'
    'twitter:title'
    'twitter:description'
    'twitter:image'
    'geo.region'
    'geo.placename'
    'geo.position'
  return alt || `Zion Tech Group - ${imagePath.split('/').pop()?.split('.')[0] || 'image'
  return `${baseUrl}${path.startsWith('/'
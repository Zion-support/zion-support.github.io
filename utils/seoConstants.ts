<<<<<<< HEAD
// SEO constants
export const seoConstants = {
  // Add SEO constants here
=======
// SEO constants and configuration

export const SEO_DEFAULTS = {
  title: 'Zion Tech Group - Technology Solutions',
  description: 'Leading technology solutions provider specializing in innovative software development and digital transformation.',
  keywords: 'technology, software development, digital transformation, tech solutions',
  author: 'Zion Tech Group',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0'
}

export const SOCIAL_MEDIA = {
  twitter: {
    card: 'summary_large_image',
    site: '@ziontechgroup',
    creator: '@ziontechgroup'
  },
  facebook: {
    appId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || ''
  },
  linkedin: {
    company: 'zion-tech-group'
  }
}

export const OPEN_GRAPH = {
  type: 'website',
  locale: 'en_US',
  siteName: 'Zion Tech Group'
}

export const STRUCTURED_DATA = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    description: 'Leading technology solutions provider',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-0123',
      contactType: 'customer service'
    }
  }
>>>>>>> cursor/fix-errors-and-merge-to-main-f44d
}
// SEO constants and configuration

export const SEO_DEFAULTS = {
  title: 'Zion Tech Group - Technology Solutions',
  description: 'Leading provider of AI and IT solutions for businesses worldwide. Transform your business with our expert technology services.',
  keywords: 'AI solutions, IT services, technology consulting, business automation, cloud solutions, cybersecurity',
  author: 'Zion Tech Group',
  robots: 'index, follow',
  canonical: 'https://ziontechgroup.com',
  openGraph: {
    type: 'website',
    siteName: 'Zion Tech Group',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ziontechgroup',
    creator: '@ziontechgroup'
  }
};

export const PAGE_SEO = {
  home: {
    title: 'Zion Tech Group - AI & IT Solutions for Modern Businesses',
    description: 'Transform your business with cutting-edge AI and IT solutions. Expert consulting, custom development, and innovative technology services.',
    keywords: 'AI solutions, IT consulting, business automation, technology services, digital transformation'
  },
  about: {
    title: 'About Us - Zion Tech Group | Leading Technology Experts',
    description: 'Learn about Zion Tech Group\'s mission to revolutionize business through innovative AI and IT solutions. Meet our expert team.',
    keywords: 'about us, technology experts, AI specialists, IT professionals, company mission'
  },
  services: {
    title: 'Our Services - AI & IT Solutions | Zion Tech Group',
    description: 'Comprehensive AI and IT services including custom development, cloud solutions, cybersecurity, and business automation.',
    keywords: 'AI services, IT services, custom development, cloud solutions, cybersecurity, business automation'
  },
  contact: {
    title: 'Contact Us - Zion Tech Group | Get In Touch',
    description: 'Get in touch with our expert team for AI and IT solutions. Contact Zion Tech Group for consultation and support.',
    keywords: 'contact us, consultation, support, AI experts, IT specialists'
  }
};

export const STRUCTURED_DATA = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": "Leading provider of AI and IT solutions for businesses worldwide",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "email": "info@ziontechgroup.com"
    },
    "sameAs": [
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup"
    ]
  },
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "description": "AI and IT solutions for modern businesses",
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group"
    }
  }
};

export const META_TAGS = {
  viewport: 'width=device-width, initial-scale=1',
  charset: 'UTF-8',
  'theme-color': '#6366f1',
  'msapplication-TileColor': '#6366f1',
  'apple-mobile-web-app-capable': 'yes',
  'apple-mobile-web-app-status-bar-style': 'black-translucent'
};
// Application constants
export const APP_CONFIG = {
  name: 'Zion Tech Group',
  description: 'Revolutionary AI solutions for enterprise transformation',
  url: 'https://zion.app',
  email: 'contact@zion.app',
  phone: '+1-555-ZION-TECH',
  social: {
    linkedin: 'https://linkedin.com/company/zion-tech-group',
    twitter: 'https://twitter.com/ziontechgroup',
    github: 'https://github.com/zion-tech-group'
  }
};

export const SEO_DEFAULTS = {
  title: 'Zion Tech Group - Revolutionary AI Solutions for Enterprise',
  description: 'Transform your business with Meta-Cognitive AI, Quantum-Neural Networks, and Autonomous Operations. Advanced AI solutions for enterprise digital transformation.',
  keywords: 'AI solutions, enterprise AI, machine learning, artificial intelligence, digital transformation, quantum computing, autonomous operations, meta-cognitive AI',
  ogImage: '/images/og-image.jpg',
  twitterCard: 'summary_large_image'
};

export const ROUTES = {
  home: '/',
  about: '/about',
  contact: '/contact',
  services: '/services',
  blog: '/blog'
} as const;

export const PERFORMANCE_THRESHOLDS = {
  LCP: 2500, // Largest Contentful Paint (ms)
  FID: 100,  // First Input Delay (ms)
  CLS: 0.1,  // Cumulative Layout Shift
  FCP: 1800, // First Contentful Paint (ms)
  TTFB: 800  // Time to First Byte (ms)
} as const;
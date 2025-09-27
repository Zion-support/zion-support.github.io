export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features?: string[];
  price?: string;
}

export const SERVICES: Service[] = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Cutting-edge artificial intelligence solutions to automate and optimize your business processes.',
    icon: '🤖',
    features: ['Custom AI Models', 'Machine Learning Pipelines', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
    price: 'From $5K'
  },
  {
    id: 'cloud',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment solutions for modern applications.',
    icon: '☁️',
    features: ['Cloud Migration', 'DevOps & CI/CD', 'Container Orchestration', 'Serverless Architecture', 'Cloud Security'],
    price: 'From $3K'
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Modern, responsive web applications built with the latest technologies and best practices.',
    icon: '💻',
    features: ['React/Next.js Apps', 'Progressive Web Apps', 'E-commerce Solutions', 'API Development', 'Performance Optimization'],
    price: 'From $2K'
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: '📱',
    features: ['Native iOS/Android', 'React Native', 'Flutter Apps', 'App Store Optimization', 'Push Notifications'],
    price: 'From $4K'
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights with advanced analytics and visualization.',
    icon: '📊',
    features: ['Data Warehousing', 'Business Intelligence', 'Real-time Analytics', 'Data Visualization', 'Predictive Modeling'],
    price: 'From $3K'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and infrastructure.',
    icon: '🔒',
    features: ['Security Audits', 'Penetration Testing', 'Security Monitoring', 'Compliance Management', 'Incident Response'],
    price: 'From $4K'
  }
];

export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Blog', href: '/blog' }
];

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/ziontechgroup',
  linkedin: 'https://linkedin.com/company/ziontechgroup',
  github: 'https://github.com/ziontechgroup',
  email: 'contact@ziontechgroup.com'
};

export const COMPANY_INFO = {
  name: 'Zion Tech Group',
  tagline: 'Innovative Technology Solutions',
  description: 'Leading provider of cutting-edge technology solutions for modern businesses.',
  address: '123 Tech Street, Innovation City, IC 12345',
  phone: '+1 (555) 123-4567',
  email: 'contact@ziontechgroup.com'
};

export const API_ENDPOINTS = {
  services: '/api/services',
  contact: '/api/contact',
  newsletter: '/api/newsletter',
  analytics: '/api/analytics'
};

export const PERFORMANCE_THRESHOLDS = {
  LCP: 2500, // Largest Contentful Paint (ms)
  FID: 100,  // First Input Delay (ms)
  CLS: 0.1,  // Cumulative Layout Shift
  FCP: 1800, // First Contentful Paint (ms)
  TTFB: 600  // Time to First Byte (ms)
};

export const SEO_DEFAULTS = {
  title: 'Zion Tech Group - Innovative Technology Solutions',
  description: 'Leading provider of AI, cloud, web development, and cybersecurity solutions. Transform your business with cutting-edge technology.',
  keywords: ['technology', 'AI', 'machine learning', 'cloud computing', 'web development', 'cybersecurity', 'innovation'],
  ogType: 'website',
  twitterCard: 'summary_large_image'
};
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
    description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
    icon: '📱',
    features: ['Native iOS/Android', 'React Native Apps', 'Flutter Development', 'App Store Optimization', 'Push Notifications'],
    price: 'From $4K'
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    description: 'Advanced data analysis and business intelligence solutions to drive informed decisions.',
    icon: '📊',
    features: ['Data Visualization', 'Business Intelligence', 'Real-time Dashboards', 'Data Warehousing', 'Machine Learning Analytics'],
    price: 'From $3K'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and infrastructure.',
    icon: '🔒',
    features: ['Security Audits', 'Penetration Testing', 'Compliance Management', 'Security Monitoring', 'Incident Response'],
    price: 'From $2K'
  },
  {
    id: 'blockchain',
    title: 'Blockchain Solutions',
    description: 'Decentralized applications and smart contract development for the future of technology.',
    icon: '⛓️',
    features: ['Smart Contracts', 'DeFi Applications', 'NFT Marketplaces', 'Blockchain Integration', 'Cryptocurrency Wallets'],
    price: 'From $6K'
  },
  {
    id: 'iot',
    title: 'IoT Development',
    description: 'Internet of Things solutions to connect and manage your devices and data.',
    icon: '🌐',
    features: ['Device Management', 'Data Collection', 'Real-time Monitoring', 'Edge Computing', 'IoT Security'],
    price: 'From $4K'
  }
];

export const NAVIGATION_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' }
];

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/ziontechgroup',
  twitter: 'https://twitter.com/ziontechgroup',
  github: 'https://github.com/ziontechgroup',
  email: 'mailto:contact@ziontechgroup.com'
};

export const COMPANY_INFO = {
  name: 'Zion Tech Group',
  tagline: 'Innovative Technology Solutions',
  description: 'We deliver cutting-edge technology solutions that drive business growth and digital transformation.',
  address: {
    street: '123 Innovation Drive',
    city: 'Tech City',
    state: 'CA',
    zip: '90210',
    country: 'USA'
  },
  contact: {
    phone: '+1 (555) 123-4567',
    email: 'contact@ziontechgroup.com',
    website: 'https://ziontechgroup.com'
  }
};

export const TECHNOLOGIES = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  backend: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'MongoDB'],
  cloud: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes'],
  mobile: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
  ai: ['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'LangChain']
};

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    content: 'Zion Tech Group transformed our business with their innovative AI solutions. The results exceeded our expectations.',
    rating: 5,
    avatar: '/images/testimonials/sarah.jpg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO',
    company: 'DataCorp',
    content: 'Their cloud migration expertise helped us scale our infrastructure seamlessly. Highly recommended!',
    rating: 5,
    avatar: '/images/testimonials/michael.jpg'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Product Manager',
    company: 'InnovateLab',
    content: 'The mobile app they developed for us has been a game-changer. User engagement increased by 300%.',
    rating: 5,
    avatar: '/images/testimonials/emily.jpg'
  }
];

export const BLOG_CATEGORIES = [
  { id: 'ai-ml', name: 'AI & Machine Learning', slug: 'ai-ml' },
  { id: 'web-dev', name: 'Web Development', slug: 'web-development' },
  { id: 'cloud', name: 'Cloud Computing', slug: 'cloud-computing' },
  { id: 'mobile', name: 'Mobile Development', slug: 'mobile-development' },
  { id: 'security', name: 'Cybersecurity', slug: 'cybersecurity' },
  { id: 'blockchain', name: 'Blockchain', slug: 'blockchain' }
];

export const API_ENDPOINTS = {
  services: '/api/services',
  portfolio: '/api/portfolio',
  blog: '/api/blog',
  contact: '/api/contact',
  analytics: '/api/analytics'
};

export const CACHE_KEYS = {
  services: 'services',
  portfolio: 'portfolio',
  blog: 'blog',
  testimonials: 'testimonials'
};

export const CACHE_TTL = {
  short: 5 * 60 * 1000, // 5 minutes
  medium: 30 * 60 * 1000, // 30 minutes
  long: 60 * 60 * 1000, // 1 hour
  veryLong: 24 * 60 * 60 * 1000 // 24 hours
};

export const ERROR_MESSAGES = {
  generic: 'Something went wrong. Please try again.',
  network: 'Network error. Please check your connection.',
  notFound: 'The requested resource was not found.',
  unauthorized: 'You are not authorized to perform this action.',
  validation: 'Please check your input and try again.'
};

export const SUCCESS_MESSAGES = {
  contactSent: 'Thank you for your message. We will get back to you soon!',
  subscriptionSuccess: 'Successfully subscribed to our newsletter!',
  formSubmitted: 'Form submitted successfully!'
};

export const BREAKPOINTS = {
  mobile: '640px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px'
};

export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 500
};

export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070
};
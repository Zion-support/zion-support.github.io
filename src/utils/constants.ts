// Application constants
export const APP_NAME = "Zion Tech Group";
export const APP_VERSION = "1.0.0";

// API endpoints
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

// Feature flags
export const FEATURES = {
  ANALYTICS: true,
  PERFORMANCE_MONITORING: true,
  ERROR_REPORTING: true,
  SECURITY_MONITORING: true,
  IMAGE_OPTIMIZATION: true,
} as const;

// Service interface and data
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
    id: "ai-ml",
    title: "AI & Machine Learning",
    description:
      "Cutting-edge artificial intelligence solutions to automate and optimize your business processes.",
    icon: "🤖",
    features: [
      "Custom AI Models",
      "Machine Learning Pipelines",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
    ],
    price: "From $5K",
  },
  {
    id: "cloud",
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and deployment solutions for modern applications.",
    icon: "☁️",
    features: [
      "Cloud Migration",
      "DevOps & CI/CD",
      "Container Orchestration",
      "Serverless Architecture",
      "Cloud Security",
    ],
    price: "From $3K",
  },
  {
    id: "web-dev",
    title: "Web Development",
    description:
      "Modern, responsive web applications built with the latest technologies and best practices.",
    icon: "💻",
    features: [
      "React/Next.js Apps",
      "Progressive Web Apps",
      "E-commerce Solutions",
      "API Development",
      "Performance Optimization",
    ],
    price: "From $2K",
  },
  {
    id: "mobile",
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
    icon: "📱",
    features: [
      "Native iOS/Android",
      "React Native",
      "Flutter Apps",
      "App Store Optimization",
      "Push Notifications",
    ],
    price: "From $4K",
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    description:
      "Transform your data into actionable insights with advanced analytics and visualization.",
    icon: "📊",
    features: [
      "Data Warehousing",
      "Business Intelligence",
      "Real-time Analytics",
      "Data Visualization",
      "Predictive Modeling",
    ],
    price: "From $3K",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description:
      "Comprehensive security solutions to protect your digital assets and infrastructure.",
    icon: "🔒",
    features: [
      "Security Audits",
      "Penetration Testing",
      "Security Monitoring",
      "Compliance Management",
      "Incident Response",
    ],
    price: "From $4K",
  },
];

// Service features
export const SERVICE_FEATURES = [
  {
    id: "1",
    icon: "🚀",
    title: "Fast & Scalable",
    description: "Rapid development and deployment of high-quality solutions",
    color: "blue",
  },
  {
    id: "2",
    icon: "🛡️",
    title: "Secure & Reliable",
    description: "Enterprise-grade security and reliability",
    color: "green",
  },
  {
    id: "3",
    icon: "⚡",
    title: "AI-Powered",
    description: "Advanced AI and machine learning capabilities",
    color: "purple",
  },
] as const;

// Navigation items
export const NAVIGATION_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

// Social links
export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/ziontechgroup",
  linkedin: "https://linkedin.com/company/ziontechgroup",
  github: "https://github.com/ziontechgroup",
  email: "contact@ziontechgroup.com",
};

// Company information
export const COMPANY_INFO = {
  name: "Zion Tech Group",
  tagline: "Innovative Technology Solutions",
  description:
    "Leading provider of cutting-edge technology solutions for modern businesses.",
  address: "123 Tech Street, Innovation City, IC 12345",
  phone: "+1 (555) 123-4567",
  email: "contact@ziontechgroup.com",
};

// API endpoints
export const API_ENDPOINTS = {
  services: "/api/services",
  contact: "/api/contact",
  newsletter: "/api/newsletter",
  analytics: "/api/analytics",
};

// Testimonials data
export const TESTIMONIALS = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechCorp",
    content:
      "Zion Tech Solutions transformed our digital infrastructure with their AI-powered solutions.",
    rating: 5,
    avatar: "/images/testimonials/sarah.jpg",
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Founder",
    company: "StartupXYZ",
    content: "The cloud migration was seamless and exceeded our expectations.",
    rating: 5,
    avatar: "/images/testimonials/michael.jpg",
  },
] as const;

// Pricing tiers
export const PRICING_TIERS = [
  {
    id: "starter",
    name: "Starter",
    price: "$2,999",
    description: "Perfect for small businesses",
    features: ["Basic AI Integration", "Cloud Setup", "24/7 Support"],
    popular: false,
  },
  {
    id: "professional",
    name: "Professional",
    price: "$7,999",
    description: "Ideal for growing companies",
    features: [
      "Advanced AI Solutions",
      "Full Cloud Migration",
      "Priority Support",
      "Custom Development",
    ],
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    description: "Tailored for large organizations",
    features: [
      "Custom AI Solutions",
      "Dedicated Team",
      "White-label Options",
      "Advanced Security",
    ],
    popular: false,
  },
] as const;

// Blog posts data
export const BLOG_POSTS = [
  {
    id: "1",
    title: "The Future of AI in Business Automation",
    excerpt:
      "Discover how AI is revolutionizing business processes and automation.",
    publishDate: "2024-01-15",
    readTime: 8,
    category: "Artificial Intelligence",
    featured: true,
  },
] as const;

// Performance thresholds
export const PERFORMANCE_THRESHOLDS = {
  LCP: 2500, // Largest Contentful Paint (ms)
  FID: 100, // First Input Delay (ms)
  CLS: 0.1, // Cumulative Layout Shift
  FCP: 1800, // First Contentful Paint (ms)
  TTFB: 600, // Time to First Byte (ms)
};

// Cache durations (in milliseconds)
export const CACHE_DURATIONS = {
  SHORT: 5 * 60 * 1000, // 5 minutes
  MEDIUM: 30 * 60 * 1000, // 30 minutes
  LONG: 24 * 60 * 60 * 1000, // 24 hours
  VERY_LONG: 7 * 24 * 60 * 60 * 1000, // 7 days
} as const;

// SEO defaults
export const SEO_DEFAULTS = {
  title: "Zion Tech Group - Innovative Technology Solutions",
  description:
    "Leading provider of AI, cloud, web development, and cybersecurity solutions. Transform your business with cutting-edge technology.",
  keywords: [
    "technology",
    "AI",
    "machine learning",
    "cloud computing",
    "web development",
    "cybersecurity",
    "innovation",
  ],
  ogType: "website",
  twitterCard: "summary_large_image",
};

// Error messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR:
    "Network connection failed. Please check your internet connection.",
  SERVER_ERROR: "Server error occurred. Please try again later.",
  VALIDATION_ERROR: "Please check your input and try again.",
  UNAUTHORIZED: "You are not authorized to perform this action.",
  NOT_FOUND: "The requested resource was not found.",
} as const;

// Success messages
export const SUCCESS_MESSAGES = {
  SAVE_SUCCESS: "Changes saved successfully.",
  DELETE_SUCCESS: "Item deleted successfully.",
  UPDATE_SUCCESS: "Item updated successfully.",
  CREATE_SUCCESS: "Item created successfully.",
} as const;

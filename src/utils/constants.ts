// Application constants
export const APP_NAME = "Zion Tech Solutions";
export const APP_VERSION = "1.0.0";

// API endpoints
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

// Feature flags
export const FEATURES = {
  ANALYTICS: true,
  PERFORMANCE_MONITORING: true,
  ERROR_REPORTING: true,
  SECURITY_MONITORING: true,
  IMAGE_OPTIMIZATION: true
} as const;

// Service features
export const SERVICE_FEATURES = [
  {
    id: "1",
    icon: "🚀",
    title: "Fast & Scalable",
    description: "Rapid development and deployment of high-quality solutions",
    color: "blue"
  },
  {
    id: "2", 
    icon: "🛡️",
    title: "Secure & Reliable",
    description: "Enterprise-grade security and reliability",
    color: "green"
  },
  {
    id: "3",
    icon: "⚡",
    title: "AI-Powered",
    description: "Advanced AI and machine learning capabilities",
    color: "purple"
  }
] as const;

// Testimonials data
export const TESTIMONIALS = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechCorp",
    content: "Zion Tech Solutions transformed our digital infrastructure with their AI-powered solutions.",
    rating: 5,
    avatar: "/images/testimonials/sarah.jpg"
  },
  {
    id: "2",
    name: "Michael Chen", 
    role: "Founder",
    company: "StartupXYZ",
    content: "The cloud migration was seamless and exceeded our expectations.",
    rating: 5,
    avatar: "/images/testimonials/michael.jpg"
  }
] as const;

// Pricing tiers
export const PRICING_TIERS = [
  {
    id: "starter",
    name: "Starter",
    price: "$2,999",
    description: "Perfect for small businesses",
    features: ["Basic AI Integration", "Cloud Setup", "24/7 Support"],
    popular: false
  },
  {
    id: "professional", 
    name: "Professional",
    price: "$7,999",
    description: "Ideal for growing companies",
    features: ["Advanced AI Solutions", "Full Cloud Migration", "Priority Support", "Custom Development"],
    popular: true
  },
  {
    id: "enterprise",
    name: "Enterprise", 
    price: "Custom",
    description: "Tailored for large organizations",
    features: ["Custom AI Solutions", "Dedicated Team", "White-label Options", "Advanced Security"],
    popular: false
  }
] as const;

// Blog posts data
export const BLOG_POSTS = [
  {
    id: "1",
    title: "The Future of AI in Business Automation",
    excerpt: "Discover how AI is revolutionizing business processes and automation.",
    publishDate: "2024-01-15",
    readTime: 8,
    category: "Artificial Intelligence",
    featured: true
  }
] as const;

// Performance thresholds
export const PERFORMANCE_THRESHOLDS = {
  LCP: 2500, // Largest Contentful Paint
  FID: 100,  // First Input Delay
  CLS: 0.1,  // Cumulative Layout Shift
  FCP: 1800, // First Contentful Paint
  TTFB: 600  // Time to First Byte
} as const;

// Cache durations (in milliseconds)
export const CACHE_DURATIONS = {
  SHORT: 5 * 60 * 1000,      // 5 minutes
  MEDIUM: 30 * 60 * 1000,    // 30 minutes
  LONG: 24 * 60 * 60 * 1000, // 24 hours
  VERY_LONG: 7 * 24 * 60 * 60 * 1000 // 7 days
} as const;

// Error messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: "Network connection failed. Please check your internet connection.",
  SERVER_ERROR: "Server error occurred. Please try again later.",
  VALIDATION_ERROR: "Please check your input and try again.",
  UNAUTHORIZED: "You are not authorized to perform this action.",
  NOT_FOUND: "The requested resource was not found."
} as const;

// Success messages
export const SUCCESS_MESSAGES = {
  SAVE_SUCCESS: "Changes saved successfully.",
  DELETE_SUCCESS: "Item deleted successfully.",
  UPDATE_SUCCESS: "Item updated successfully.",
  CREATE_SUCCESS: "Item created successfully."
} as const;
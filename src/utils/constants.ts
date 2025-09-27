// Application constants
export const APP_CONFIG = {
  name: "Zion Tech Solutions",
  version: "1.0.0",
  description: "Advanced technology solutions for modern businesses",
  url: "https://ziontechgroup.com",
  email: "contact@ziontechgroup.com",
  phone: "+1 (555) 123-4567"
};

// Feature flags
export const FEATURES = {
  aiIntegration: true,
  cloudMigration: true,
  cybersecurity: true,
  analytics: true,
  support: true
};

// Service categories
export const SERVICE_CATEGORIES = [
  {
    id: "ai-solutions",
    title: "AI Solutions",
    description: "Artificial intelligence and machine learning services",
    icon: "🤖",
    color: "blue"
  },
  {
    id: "cloud-services",
    title: "Cloud Services",
    description: "Cloud migration and infrastructure management",
    icon: "☁️",
    color: "green"
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Security solutions and threat protection",
    icon: "🛡️",
    color: "red"
  },
  {
    id: "development",
    title: "Development",
    description: "Custom software development and consulting",
    icon: "💻",
    color: "purple"
  }
];

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
];

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
];

// Blog posts data
export const BLOG_POSTS = [
  {
    id: "1",
    title: "The Future of AI in Business Automation",
    excerpt: "Exploring how artificial intelligence is revolutionizing business processes.",
    publishDate: "2024-01-15",
    readTime: 8,
    category: "Artificial Intelligence",
    featured: true
  }
];

// Navigation items
export const NAVIGATION_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" }
];

// Social media links
export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/ziontech",
  linkedin: "https://linkedin.com/company/ziontech",
  github: "https://github.com/ziontech",
  facebook: "https://facebook.com/ziontech"
};

// Contact information
export const CONTACT_INFO = {
  address: "123 Technology Drive, Tech City, TC 12345",
  phone: "+1 (555) 123-4567",
  email: "contact@ziontechgroup.com",
  hours: "Monday - Friday: 9:00 AM - 6:00 PM"
};

// API endpoints
export const API_ENDPOINTS = {
  base: "/api",
  contact: "/api/contact",
  services: "/api/services",
  testimonials: "/api/testimonials"
};

// Performance thresholds
export const PERFORMANCE_THRESHOLDS = {
  good: 90,
  needsImprovement: 50,
  poor: 0
};

// Error messages
export const ERROR_MESSAGES = {
  generic: "Something went wrong. Please try again.",
  network: "Network error. Please check your connection.",
  validation: "Please check your input and try again.",
  notFound: "The requested resource was not found."
};

// Success messages
export const SUCCESS_MESSAGES = {
  contactSent: "Thank you! Your message has been sent successfully.",
  subscriptionSuccess: "Successfully subscribed to our newsletter!",
  formSubmitted: "Form submitted successfully!"
};
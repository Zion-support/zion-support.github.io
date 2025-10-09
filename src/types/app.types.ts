/**
 * Application Type Definitions
 * Centralized type definitions for the Zion Tech Group application
 */

export interface PerformanceMetrics {
  name: string;
  value: number;
  timestamp: number;
  category: 'navigation' | 'paint' | 'layout' | 'script' | 'network' | 'custom';
  metadata?: Record<string, any>;
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  price: string;
  features: string[];
  benefits: string[];
  marketPrice: string;
  category: string;
  technologies: string[];
  contactInfo: string;
  popular?: boolean;
}

export interface MicroSAASService {
  id: string;
  title: string;
  description: string;
  icon: string;
  price: string;
  features: string[];
  benefits: string[];
  marketPrice: string;
  category: string;
  technologies: string[];
  contactInfo: string;
  popular?: boolean;
  pricing: {
    monthly: number;
    yearly: number;
    setup?: number;
  };
  advancedFeatures: {
    core: string[];
    advanced: string[];
    integrations: string[];
  };
  support: {
    level: 'basic' | 'premium' | 'enterprise';
    responseTime: string;
    channels: string[];
  };
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  tags: string[];
  slug: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
  featured?: boolean;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    improvement: string;
  }[];
  technologies: string[];
  duration: string;
  featured?: boolean;
}

export interface PricingTier {
  name: string;
  price: number;
  period: 'monthly' | 'yearly';
  features: string[];
  limitations?: string[];
  popular?: boolean;
  cta: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogImage?: string;
  structuredData?: Record<string, any>;
}

export interface AnalyticsEvent {
  event: string;
  category: string;
  label?: string;
  value?: number;
  metadata?: Record<string, any>;
}

export interface FormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  service?: string;
  budget?: string;
  timeline?: string;
}

export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  filters?: Record<string, any>;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}
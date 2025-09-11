export interface Service {
  id: string;
  name: string;
  description: string;
  category: 'micro-saas' | 'ai-services' | 'it-services';
  price: {
    min: number;
    max: number;
    currency: string;
  };
  features: string[];
  technologies: string[];
  delivery_time: string;
  support: string;
  image?: string;
  popular?: boolean;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  site: string;
}

export interface ServiceCategory {
  title: string;
  description: string;
  count: number;
  features: string[];
  href: string;
  color: string;
}

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
}

export interface LoadingState {
  isLoading: boolean;
  error?: string;
}

export interface NavigationItem {
  title: string;
  href: string;
  icon: string;
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  tags: string[];
  image?: string;
  slug: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  currency: string;
  period: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'user' | 'admin';
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

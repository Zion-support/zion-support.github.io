<<<<<<< HEAD
// Global types for the Zion Tech Group application;
=======
// Global types for the Zion Tech Group application

>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
export interface Service {
  id: string;
  name: string;
  description: string;
<<<<<<< HEAD
  category: 'micro-saas' | 'ai-services' | 'it-services';'  price: {'    min: number;
=======
  category: 'micro-saas' | 'ai-services' | 'it-services';
  price: {
    min: number;
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
    max: number;
    currency: string;
  };
  features: string[];
  technologies: string[];
  deliveryTime: string;
  support: string;
  image?: string;
  popular?: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  budget?: string;
  message: string;
<<<<<<< HEAD
  preferredContact: 'email' | 'phone' | 'both';'}'
=======
  preferredContact: 'email' | 'phone' | 'both';
}

>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  skills: string[];
  linkedin?: string;
  github?: string;
  twitter?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  position: string;
  content: string;
  rating: number;
  image?: string;
  project?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  duration: string;
  teamSize: number;
  image: string;
  featured?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  category: string;
  image: string;
  featured?: boolean;
  readTime: number;
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  currency: string;
<<<<<<< HEAD
  period: 'month' | 'year' | 'one-time';'  features: string[];'  limitations?: string[];
=======
  period: 'month' | 'year' | 'one-time';
  features: string[];
  limitations?: string[];
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
  popular?: boolean;
  cta: string;
  description: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginationParams {
  page: number;
  limit: number;
  sort?: string;
<<<<<<< HEAD
  order?: 'asc' | 'desc';'}'
export interface PaginatedResponse<T> {
  data: T[];
  pagination: {;
=======
  order?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
    page: number;
    limit: number;
    total: number;
    pages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
}

export interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
}

export interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: number;
  reducedMotion: boolean;
  screenReader: boolean;
}

export interface UserPreferences {
<<<<<<< HEAD
  theme: 'light' | 'dark' | 'system';'  language: string;'  accessibility: AccessibilitySettings;
  notifications: {;
=======
  theme: 'light' | 'dark' | 'system';
  language: string;
  accessibility: AccessibilitySettings;
  notifications: {
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
    email: boolean;
    browser: boolean;
    marketing: boolean;
  };
}

export interface NavigationItem {
  name: string;
  href: string;
  submenu?: NavigationItem[];
  external?: boolean;
}

export interface SocialLink {
<<<<<<< HEAD
  platform: 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram';'  url: string;'  label: string;
=======
  platform: 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram';
  url: string;
  label: string;
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
<<<<<<< HEAD
  address: {;
=======
  address: {
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
<<<<<<< HEAD
  contact: {;
=======
  contact: {
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
    phone: string;
    email: string;
    website: string;
  };
  social: SocialLink[];
  founded: number;
  employees: string;
  certifications: string[];
}

export interface ErrorInfo {
  message: string;
  code?: string;
  details?: any;
  timestamp: string;
  userAgent?: string;
  url?: string;
}

export interface LoadingState {
  isLoading: boolean;
  error?: string;
  progress?: number;
}

export interface FormField {
  name: string;
  label: string;
<<<<<<< HEAD
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio';'  required: boolean;'  placeholder?: string;
=======
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio';
  required: boolean;
  placeholder?: string;
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
  options?: { value: string; label: string }[];
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    message?: string;
  };
}

export interface FormState {
  values: Record<string, any>;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  isSubmitting: boolean;
  isValid: boolean;
}

<<<<<<< HEAD
// Utility types;
=======
// Utility types
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

<<<<<<< HEAD
// Component prop types;
=======
// Component prop types
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
<<<<<<< HEAD
  'data-testid'?: string;'}'
export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';'  size?: 'sm' | 'md' | 'lg';'  disabled?: boolean;'  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';'}'
export interface InputProps extends BaseComponentProps {
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number';'  placeholder?: string;'  value?: string;
=======
  'data-testid'?: string;
}

export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export interface InputProps extends BaseComponentProps {
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number';
  placeholder?: string;
  value?: string;
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
  onChange?: (value: string) => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;
}

<<<<<<< HEAD
// API types;
=======
// API types
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
export interface ApiError {
  status: number;
  message: string;
  code?: string;
  details?: any;
}

export interface ApiRequest {
<<<<<<< HEAD
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';'  url: string;'  data?: any;
=======
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  url: string;
  data?: any;
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
  params?: Record<string, any>;
  headers?: Record<string, string>;
}

<<<<<<< HEAD
// Environment types;
export interface Environment {
  NODE_ENV: 'development' | 'production' | 'test';'  NEXT_PUBLIC_API_URL?: string;'  NEXT_PUBLIC_APP_URL?: string;
=======
// Environment types
export interface Environment {
  NODE_ENV: 'development' | 'production' | 'test';
  NEXT_PUBLIC_API_URL?: string;
  NEXT_PUBLIC_APP_URL?: string;
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
  NEXT_PUBLIC_GA_ID?: string;
  NEXT_PUBLIC_SENTRY_DSN?: string;
}
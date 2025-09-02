// Global types for the Zion Tech Group application

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
  deliveryTime: string;
  support: string;
  image?: string;
  popular?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  service?: string;
  budget?: string;
  timeline?: string;
  preferredContact: 'email' | 'phone' | 'both';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
  skills: string[];
  experience: string;
  education?: string;
  certifications?: string[];
  location: string;
  timezone: string;
  availability: string;
  languages: string[];
  specialties: string[];
  achievements?: string[];
  socialLinks?: {
    platform: string;
    url: string;
    label: string;
  }[];
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  period: 'month' | 'year' | 'one-time';
  features: string[];
  limitations?: string[];
  popular?: boolean;
  cta: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
  verified?: boolean;
  date?: string;
  service?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  tags: string[];
  category: string;
  image?: string;
  slug: string;
  readTime?: number;
  featured?: boolean;
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

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'user' | 'admin' | 'moderator';
  createdAt: string;
  updatedAt: string;
  preferences: UserPreferences;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  language: string;
  accessibility: AccessibilitySettings;
  notifications: NotificationSettings;
}

export interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  screenReader: boolean;
}

export interface NotificationSettings {
  email: boolean;
  push: boolean;
  sms: boolean;
  marketing: boolean;
}

export interface SocialLink {
  platform: 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram';
  url: string;
  label: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  logo: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  contact: {
    phone: string;
    email: string;
    website: string;
  };
  social: SocialLink[];
  founded: string;
  employees: string;
  industry: string;
  headquarters: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  services: Service[];
  featured?: boolean;
  order: number;
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
  team: string[];
  image?: string;
  testimonial?: Testimonial;
  featured?: boolean;
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio';
  required: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    message?: string;
  };
}

export interface FormConfig {
  fields: FormField[];
  submitText: string;
  successMessage: string;
  errorMessage: string;
}

export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
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
  onChange?: (value: string) => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;
}

export interface ErrorInfo {
  message: string;
  code?: string;
  details?: any;
}

export interface ApiRequest {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  url: string;
  data?: any;
  params?: Record<string, any>;
  headers?: Record<string, string>;
}

export interface EnvironmentConfig {
  NODE_ENV: 'development' | 'production' | 'test';
  NEXT_PUBLIC_API_URL?: string;
  NEXT_PUBLIC_APP_URL?: string;
  NEXT_PUBLIC_GA_ID?: string;
  NEXT_PUBLIC_SENTRY_DSN?: string;
}
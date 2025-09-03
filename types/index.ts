// Global types for the Zion Tech Group application

export interface Service {
  id: string;
  name: string;
  description: string;
  category:
  'micro-saas' |
  'ai-services' |
  'it-services';
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

export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  budget?: string;
  message: string;
  preferredContact:
  'email' |
  'phone' |
  'both';
}

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
  period:
  'month' |
  'year' |
  'one-time';
  features: string[];
  limitations?: string[];
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
  order?:
  'asc' |
  'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
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
  theme:
  'light' |
  'dark' |
  'system';
  language: string;
  accessibility: AccessibilitySettings;
  notifications: {
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
  platform:
  'linkedin' |
  'twitter' |
  'github' |
  'facebook' |
  'instagram';
  url: string;
  label: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
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
  type:
  'text' |
  'email' |
  'tel' |
  'textarea' |
  'select' |
  'checkbox' |
  'radio';
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

export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'critical';
  startDate: Date;
  endDate: Date;
  budget: {
    allocated: number;
    spent: number;
    currency: string;
  };
  team: {
    lead: string;
    members: string[];
    external: string[];
  };
  client: {
    name: string;
    contact: string;
    industry: string;
  };
  deliverables: {
    name: string;
    description: string;
    status: 'pending' | 'in-progress' | 'completed' | 'review';
    dueDate: Date;
  }[];
  risks: {
    description: string;
    probability: 'low' | 'medium' | 'high';
    impact: 'low' | 'medium' | 'high';
    mitigation: string;
  }[];
  dependencies: {
    project: string;
    type: 'blocking' | 'influencing';
    description: string;
  }[];
  metrics: {
    name: string;
    value: number;
    unit: string;
    target: number;
  }[];
  lessons: {
    learned: string;
    category: 'technical' | 'process' | 'communication' | 'management';
    impact: 'positive' | 'negative' | 'neutral';
  }[];
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'manager' | 'developer' | 'client' | 'guest';
  permissions: string[];
  profile: {
    avatar?: string;
    bio?: string;
    skills: string[];
    experience: number;
    location: string;
    timezone: string;
  };
  preferences: {
    theme: 'light' | 'dark' | 'auto';
    language: string;
    notifications: {
      email: boolean;
      push: boolean;
      sms: boolean;
    };
  };
  activity: {
    lastLogin: Date;
    loginCount: number;
    projects: string[];
    tasks: string[];
  };
  subscription: {
    plan: 'free' | 'basic' | 'premium' | 'enterprise';
    status: 'active' | 'inactive' | 'cancelled' | 'expired';
    startDate: Date;
    endDate: Date;
    features: string[];
  };
}

export interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;

export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;

  'data-testid'?: string;
}

export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' |
  'secondary' |
  'outline' |
  'ghost' |
  'danger';
  size?: 'sm' |
  'md' |
  'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export interface InputProps extends BaseComponentProps {
  type?:
  'text' |
  'email' |
  'password' |
  'tel' |
  'url' |
  'number';
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;
}

// API types

export interface ApiError {
  status: number;
  message: string;
  timestamp: Date;
  read: boolean;
  action?: {
    label: string;
    url: string;
  };
  category: 'system' | 'project' | 'team' | 'client' | 'billing';
  priority: 'low' | 'medium' | 'high';
  expires?: Date;
}

export interface ApiRequest {
  method:
  'GET' |
  'POST' |
  'PUT' |
  'DELETE' |
  'PATCH';
  url: string;
  data?: any;
  params?: Record<string, any>;
  headers?: Record<string, string>;
}

// Environment types

export interface Environment {
  NODE_ENV:
  'development' |
  'production' |
  'test';
export interface SEO {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  robots: string;
  og: {
    title: string;
    description: string;
    image: string;
    type: string;
    url: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    image: string;
  };
  structured: {
    type: string;
    data: Record<string, any>;
  }[];
  sitemap: {
    url: string;
    lastmod: Date;
    changefreq: string;
    priority: number;
  }[];
}

export interface Performance {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  fmp: number;
  si: number;
  tbt: number;
  score: number;
  recommendations: {
    type: string;
    description: string;
    impact: 'low' | 'medium' | 'high';
    effort: 'low' | 'medium' | 'high';
  }[];
}

export interface Security {
  score: number;
  vulnerabilities: {
    type: string;
    severity: 'low' | 'medium' | 'high' | 'critical';
    description: string;
    fix: string;
  }[];
  headers: {
    name: string;
    value: string;
    status: 'present' | 'missing' | 'incorrect';
  }[];
  certificates: {
    valid: boolean;
    issuer: string;
    expires: Date;
    algorithm: string;
  };
  compliance: {
    standard: string;
    status: 'compliant' | 'non-compliant' | 'partial';
    issues: string[];
  }[];
}

export interface Accessibility {
  score: number;
  level: 'A' | 'AA' | 'AAA';
  issues: {
    type: string;
    severity: 'error' | 'warning' | 'info';
    description: string;
    element: string;
    fix: string;
  }[];
  features: {
    name: string;
    implemented: boolean;
    description: string;
  }[];
  testing: {
    automated: boolean;
    manual: boolean;
    tools: string[];
    lastTested: Date;
  };
}

export interface ErrorLog {
  id: string;
  timestamp: Date;
  level: 'error' | 'warning' | 'info' | 'debug';
  message: string;
  stack?: string;
  context: {
    url: string;
    userAgent: string;
    userId?: string;
    sessionId?: string;
  };
  resolved: boolean;
  assignedTo?: string;
  resolution?: string;
}

export interface AuditLog {
  id: string;
  timestamp: Date;
  action: string;
  resource: string;
  userId: string;
  details: Record<string, any>;
  ip: string;
  userAgent: string;
  success: boolean;
  error?: string;
}

export interface Configuration {
  environment: 'development' | 'staging' | 'production';
  version: string;
  build: string;
  features: {
    [key: string]: boolean;
  };
  integrations: {
    [key: string]: {
      enabled: boolean;
      config: Record<string, any>;
    };
  };
  limits: {
    [key: string]: number;
  };
  maintenance: {
    enabled: boolean;
    message: string;
    startTime?: Date;
    endTime?: Date;
  };
}
  NEXT_PUBLIC_API_URL?: string;
  NEXT_PUBLIC_APP_URL?: string;
  NEXT_PUBLIC_GA_ID?: string;
  NEXT_PUBLIC_SENTRY_DSN?: string;
}

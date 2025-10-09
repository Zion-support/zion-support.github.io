/**
 * Core types used throughout the application
 */

export interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
  fmp?: number; // First Meaningful Paint
  customMetrics?: Record<string, number>;
}

export interface ErrorInfo {
  message: string;
  stack?: string;
  componentStack?: string;
  errorBoundary?: string;
  timestamp: number;
  userAgent: string;
  url: string;
}

export interface AnalyticsEvent {
  name: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  timestamp: number;
  properties?: Record<string, any>;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: Record<string, unknown>;
  robots?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

export interface Service {
  id: string;
  name: string;
  description: string;
  features: string[];
  benefits: string[];
  price: string;
  marketPrice?: string;
  category: string;
  technologies: string[];
  icon?: string;
  image?: string;
  popular?: boolean;
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
  slug: string;
  featured?: boolean;
  image?: string;
  readTime?: number;
}

export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  message: string;
  budget?: string;
  timeline?: string;
  preferredContact?: string;
}

export interface NewsletterSubscription {
  email: string;
  firstName?: string;
  lastName?: string;
  interests?: string[];
  source?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  position: string;
  content: string;
  rating: number;
  image?: string;
  featured?: boolean;
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
  image?: string;
  featured?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
  email?: string;
  expertise: string[];
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  salary?: string;
  remote?: boolean;
  postedAt: string;
  applicationUrl?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  period: 'monthly' | 'yearly' | 'one-time';
  description: string;
  features: string[];
  limitations?: string[];
  popular?: boolean;
  cta: string;
  ctaLink: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
  external?: boolean;
  badge?: string;
}

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  founded: number;
  employees: string;
  headquarters: string;
  website: string;
  email: string;
  phone: string;
  social: SocialLink[];
}

export interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'auto';
  language: string;
  accessibility: AccessibilitySettings;
  notifications: boolean;
  analytics: boolean;
}

export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  timestamp: number;
}

export interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'page' | 'blog' | 'service' | 'case-study';
  score: number;
  highlights?: string[];
}

export interface SearchFilters {
  type?: string[];
  category?: string[];
  dateRange?: {
    start: string;
    end: string;
  };
  tags?: string[];
}

export interface CacheConfig {
  ttl: number; // Time to live in seconds
  maxSize: number; // Maximum cache size
  strategy: 'lru' | 'fifo' | 'ttl';
}

export interface SecurityHeaders {
  'Content-Security-Policy': string;
  'X-Frame-Options': string;
  'X-Content-Type-Options': string;
  'Referrer-Policy': string;
  'Permissions-Policy': string;
}

export interface MonitoringConfig {
  enabled: boolean;
  sampleRate: number;
  endpoints: string[];
  alerts: {
    errorRate: number;
    responseTime: number;
    availability: number;
  };
}

export interface FeatureFlag {
  name: string;
  enabled: boolean;
  description: string;
  rolloutPercentage: number;
  conditions?: Record<string, any>;
}

export interface A11yViolation {
  id: string;
  type: 'error' | 'warning' | 'info';
  message: string;
  element: string;
  impact: 'minor' | 'moderate' | 'serious' | 'critical';
  help: string;
  helpUrl?: string;
}

export interface PerformanceBudget {
  fcp: number; // First Contentful Paint (ms)
  lcp: number; // Largest Contentful Paint (ms)
  fid: number; // First Input Delay (ms)
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte (ms)
  bundleSize: number; // Bundle size in KB
  imageSize: number; // Total image size in KB
}

export interface AuditResult {
  score: number;
  metrics: PerformanceMetrics;
  recommendations: string[];
  budget: PerformanceBudget;
  passed: boolean;
}

export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  'data-testid'?: string;
}

export interface LoadingState {
  isLoading: boolean;
  error?: string;
  retry?: () => void;
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio';
  required: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  validation?: {
    pattern?: string;
    minLength?: number;
    maxLength?: number;
    custom?: (value: any) => string | null;
  };
}

export interface FormState {
  values: Record<string, any>;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  isSubmitting: boolean;
  isValid: boolean;
}

export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    error: string;
    warning: string;
    success: string;
    info: string;
  };
  typography: {
    fontFamily: string;
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
    };
    fontWeight: {
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
    };
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

export interface Config {
  app: {
    name: string;
    version: string;
    environment: 'development' | 'staging' | 'production';
    debug: boolean;
  };
  api: {
    baseUrl: string;
    timeout: number;
    retries: number;
  };
  analytics: {
    enabled: boolean;
    trackingId?: string;
    debug: boolean;
  };
  monitoring: MonitoringConfig;
  security: {
    headers: SecurityHeaders;
    csp: string;
  };
  performance: {
    budget: PerformanceBudget;
    monitoring: boolean;
  };
  accessibility: {
    enabled: boolean;
    strict: boolean;
    autoFix: boolean;
  };
  features: FeatureFlag[];
  theme: Theme;
}

// Utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type Required<T, K extends keyof T> = T & { [P in K]-?: T[P] };
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
export type NonNullable<T> = T extends null | undefined ? never : T;
export type ValueOf<T> = T[keyof T];
export type KeysOfType<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

// React specific types
export type ReactComponent<T = {}> = React.ComponentType<T>;
export type ReactElement = React.ReactElement;
export type ReactNode = React.ReactNode;
export type Ref<T> = React.Ref<T>;
export type RefObject<T> = React.RefObject<T>;
export type MutableRefObject<T> = React.MutableRefObject<T>;

// Event handler types
export type EventHandler<T = Event> = (event: T) => void;
export type ChangeEventHandler<T = HTMLInputElement> = (event: React.ChangeEvent<T>) => void;
export type FormEventHandler<T = HTMLFormElement> = (event: React.FormEvent<T>) => void;
export type MouseEventHandler<T = HTMLButtonElement> = (event: React.MouseEvent<T>) => void;
export type KeyboardEventHandler<T = HTMLElement> = (event: React.KeyboardEvent<T>) => void;
export type FocusEventHandler<T = HTMLElement> = (event: React.FocusEvent<T>) => void;
export type TouchEventHandler<T = HTMLElement> = (event: React.TouchEvent<T>) => void;
export type WheelEventHandler<T = HTMLElement> = (event: React.WheelEvent<T>) => void;
export type DragEventHandler<T = HTMLElement> = (event: React.DragEvent<T>) => void;
export type ClipboardEventHandler<T = HTMLElement> = (event: React.ClipboardEvent<T>) => void;
export type AnimationEventHandler<T = HTMLElement> = (event: React.AnimationEvent<T>) => void;
export type TransitionEventHandler<T = HTMLElement> = (event: React.TransitionEvent<T>) => void;
/**
 * Application Type Definitions
<<<<<<< HEAD
 * Centralized type definitions for the application
 */

/**
 * Performance Metrics Interface
 * Defines the structure for performance monitoring data
 */
=======
 * Core types used throughout the application
 */

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0b53
export interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
<<<<<<< HEAD
  fmp?: number; // First Meaningful Paint
  customMetrics?: Record<string, number>;
}

/**
 * Performance Report Interface
 * Complete performance report structure
 */
export interface PerformanceReport {
  webVitals: Partial<PerformanceMetrics>;
  resources: ResourceStats;
  memory: MemoryStats | null;
  timestamp: number;
}

/**
 * Resource Statistics Interface
 * Tracks resource loading statistics
 */
export interface ResourceStats {
  total: number;
  scripts: number;
  styles: number;
  images: number;
  fonts: number;
}

/**
 * Memory Statistics Interface
 * Browser memory usage statistics
 */
export interface MemoryStats {
  usedJSHeapSize: number;
  totalJSHeapSize: number;
  jsHeapSizeLimit: number;
}

/**
 * Performance Alert Interface
 * Structure for performance alerts and warnings
 */
export interface PerformanceAlert {
  type: 'warning' | 'error' | 'info';
  message: string;
  metric: keyof PerformanceMetrics;
  value: number;
  threshold: number;
  timestamp: number;
}

/**
 * Layout Shift Interface
 * Extends PerformanceEntry for layout shift tracking
 */
export interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

/**
 * Performance with Memory Interface
 * Extends Performance API with memory information
 */
export interface PerformanceWithMemory extends Performance {
  memory: {
    usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number;
  };
}
=======
}

export interface AppConfig {
  apiUrl: string;
  environment: 'development' | 'staging' | 'production';
  features: {
    analytics: boolean;
    performanceMonitoring: boolean;
    errorTracking: boolean;
  };
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user' | 'guest';
  preferences: UserPreferences;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'auto';
  language: string;
  notifications: boolean;
}

export interface ApiResponse<T = any> {
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
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
  external?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  pricing?: {
    starting: number;
    currency: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  featuredImage?: string;
  seo: SEOData;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  subject: string;
  message: string;
  consent: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  avatar?: string;
  rating: number;
  featured: boolean;
}

export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  featuredImage: string;
  gallery?: string[];
  publishedAt: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  expertise: string[];
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  founded: number;
  headquarters: string;
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  social: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  category: 'performance' | 'security' | 'scalability' | 'reliability';
}

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
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
  order: number;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: 'webinar' | 'conference' | 'workshop' | 'meetup';
  registrationUrl?: string;
  featured: boolean;
}

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  description: string;
  requirements: string[];
  benefits: string[];
  salary?: {
    min: number;
    max: number;
    currency: string;
  };
  postedAt: string;
  applicationUrl: string;
}

export interface NewsletterSubscription {
  email: string;
  preferences: {
    weekly: boolean;
    monthly: boolean;
    announcements: boolean;
    productUpdates: boolean;
  };
  subscribedAt: string;
  status: 'active' | 'unsubscribed' | 'pending';
}

export interface AnalyticsEvent {
  name: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  timestamp: number;
  userId?: string;
  sessionId?: string;
}

export interface PerformanceEntry {
  name: string;
  value: number;
  timestamp: number;
  category: 'navigation' | 'resource' | 'paint' | 'measure' | 'custom';
}

export interface AccessibilityAudit {
  score: number;
  issues: AccessibilityIssue[];
  recommendations: string[];
  timestamp: number;
}

export interface AccessibilityIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  message: string;
  element?: string;
  selector?: string;
  wcagLevel: 'A' | 'AA' | 'AAA';
  impact: 'minor' | 'moderate' | 'serious' | 'critical';
}

export interface SecurityAudit {
  score: number;
  issues: SecurityIssue[];
  recommendations: string[];
  timestamp: number;
}

export interface SecurityIssue {
  id: string;
  type: 'vulnerability' | 'warning' | 'info';
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  affected: string[];
  fix?: string;
}

export interface SEOAudit {
  score: number;
  issues: SEOIssue[];
  recommendations: string[];
  timestamp: number;
}

export interface SEOIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  message: string;
  element?: string;
  impact: 'low' | 'medium' | 'high';
  fix?: string;
}

export interface MonitoringAlert {
  id: string;
  type: 'performance' | 'error' | 'security' | 'uptime';
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  timestamp: number;
  resolved: boolean;
  resolvedAt?: number;
}

export interface SystemHealth {
  status: 'healthy' | 'degraded' | 'down';
  uptime: number;
  responseTime: number;
  errorRate: number;
  lastChecked: number;
  services: ServiceHealth[];
}

export interface ServiceHealth {
  name: string;
  status: 'healthy' | 'degraded' | 'down';
  responseTime: number;
  lastChecked: number;
  dependencies: string[];
}

export interface LogEntry {
  id: string;
  level: 'debug' | 'info' | 'warn' | 'error' | 'fatal';
  message: string;
  timestamp: number;
  source: string;
  context?: Record<string, any>;
  stack?: string;
}

export interface Configuration {
  environment: string;
  api: {
    baseUrl: string;
    timeout: number;
    retries: number;
  };
  features: {
    [key: string]: boolean;
  };
  monitoring: {
    enabled: boolean;
    sampleRate: number;
    endpoints: string[];
  };
  security: {
    csrf: boolean;
    cors: string[];
    rateLimit: {
      windowMs: number;
      max: number;
    };
  };
}

// Utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type PartialExcept<T, K extends keyof T> = Partial<T> & Pick<T, K>;

// Generic response wrapper
export type ApiResult<T> = {
  success: true;
  data: T;
} | {
  success: false;
  error: string;
  code?: string;
};

// Event handler types
export type EventHandler<T = Event> = (event: T) => void;
export type AsyncEventHandler<T = Event> = (event: T) => Promise<void>;

// Component prop types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  'data-testid'?: string;
}

export interface StyledComponentProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

// Form types
export interface FormField<T = any> {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'textarea' | 'select' | 'checkbox' | 'radio';
  required?: boolean;
  placeholder?: string;
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    message?: string;
  };
  options?: Array<{ value: string; label: string }>;
  value?: T;
  onChange?: (value: T) => void;
}

export interface FormState<T = Record<string, any>> {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  touched: Partial<Record<keyof T, boolean>>;
  isSubmitting: boolean;
  isValid: boolean;
}

// Theme types
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
      '5xl': string;
      '6xl': string;
    };
    fontWeight: {
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
    };
    lineHeight: {
      tight: number;
      normal: number;
      relaxed: number;
    };
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
  };
  borderRadius: {
    none: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
}

// Animation types
export interface AnimationConfig {
  duration: number;
  easing: string;
  delay?: number;
  direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
  fillMode?: 'none' | 'forwards' | 'backwards' | 'both';
  iterationCount?: number | 'infinite';
}

export interface TransitionConfig {
  property: string;
  duration: number;
  timingFunction: string;
  delay?: number;
}

// Media types
export interface MediaQuery {
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
  orientation?: 'portrait' | 'landscape';
  resolution?: number;
  aspectRatio?: string;
}

// Layout types
export interface LayoutConfig {
  container: {
    maxWidth: string;
    padding: string;
  };
  grid: {
    columns: number;
    gap: string;
  };
  breakpoints: {
    [key: string]: number;
  };
}

// Accessibility types
export interface A11yConfig {
  skipLinks: boolean;
  focusManagement: boolean;
  keyboardNavigation: boolean;
  screenReaderSupport: boolean;
  highContrast: boolean;
  reducedMotion: boolean;
}

// Performance types
export interface PerformanceConfig {
  lazyLoading: boolean;
  imageOptimization: boolean;
  codeSplitting: boolean;
  preloading: boolean;
  caching: {
    static: number;
    dynamic: number;
  };
}

// SEO types
export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  robots: string;
  canonical?: string;
  openGraph: {
    title: string;
    description: string;
    image: string;
    url: string;
    type: string;
  };
  twitter: {
    card: string;
    site: string;
    creator: string;
  };
  structuredData?: Record<string, any>;
}

// Error types
export interface AppError extends Error {
  code: string;
  statusCode: number;
  context?: Record<string, any>;
  timestamp: number;
  userId?: string;
  sessionId?: string;
}

export interface ErrorReport {
  id: string;
  error: AppError;
  userAgent: string;
  url: string;
  timestamp: number;
  resolved: boolean;
  resolvedAt?: number;
}

// Validation types
export interface ValidationRule<T = any> {
  required?: boolean;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: T) => boolean | string;
  message?: string;
}

export interface ValidationSchema<T = Record<string, any>> {
  [key: string]: ValidationRule<any>;
}

// State management types
export interface StateAction<T = any> {
  type: string;
  payload?: T;
  meta?: Record<string, any>;
}

export interface StateReducer<T = any, A = StateAction> {
  (state: T, action: A): T;
}

export interface StateStore<T = any> {
  state: T;
  dispatch: (action: StateAction) => void;
  subscribe: (listener: (state: T) => void) => () => void;
  getState: () => T;
}

// API types
export interface ApiEndpoint {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  path: string;
  handler: (req: any, res: any) => Promise<any>;
  middleware?: Array<(req: any, res: any, next: () => void) => void>;
  validation?: ValidationSchema;
  rateLimit?: {
    windowMs: number;
    max: number;
  };
}

export interface ApiRoute {
  [key: string]: ApiEndpoint;
}

// Database types
export interface DatabaseConfig {
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
  ssl: boolean;
  pool: {
    min: number;
    max: number;
    idle: number;
  };
}

export interface DatabaseQuery {
  sql: string;
  params?: any[];
  timeout?: number;
}

export interface DatabaseResult<T = any> {
  rows: T[];
  rowCount: number;
  fields: Array<{
    name: string;
    dataTypeID: number;
  }>;
}

// Cache types
export interface CacheConfig {
  type: 'memory' | 'redis' | 'file';
  ttl: number;
  maxSize?: number;
  compression?: boolean;
}

export interface CacheEntry<T = any> {
  key: string;
  value: T;
  ttl: number;
  createdAt: number;
  accessedAt: number;
}

// Queue types
export interface QueueConfig {
  name: string;
  concurrency: number;
  retryAttempts: number;
  retryDelay: number;
  timeout: number;
}

export interface QueueJob<T = any> {
  id: string;
  type: string;
  data: T;
  priority: number;
  attempts: number;
  maxAttempts: number;
  createdAt: number;
  processedAt?: number;
  failedAt?: number;
  error?: string;
}

// Notification types
export interface NotificationConfig {
  type: 'email' | 'sms' | 'push' | 'webhook';
  template: string;
  variables: Record<string, any>;
  recipients: string[];
  scheduledAt?: number;
}

export interface NotificationTemplate {
  id: string;
  name: string;
  subject: string;
  body: string;
  variables: string[];
  type: 'email' | 'sms' | 'push';
}

// File upload types
export interface FileUpload {
  id: string;
  name: string;
  size: number;
  type: string;
  url: string;
  uploadedAt: number;
  uploadedBy: string;
}

export interface FileUploadConfig {
  maxSize: number;
  allowedTypes: string[];
  destination: string;
  generateThumbnails: boolean;
  compress: boolean;
}

// Search types
export interface SearchConfig {
  index: string;
  fields: string[];
  filters?: Record<string, any>;
  sort?: Array<{ field: string; direction: 'asc' | 'desc' }>;
  limit?: number;
  offset?: number;
}

export interface SearchResult<T = any> {
  hits: T[];
  total: number;
  took: number;
  aggregations?: Record<string, any>;
}

// Export all types
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0b53

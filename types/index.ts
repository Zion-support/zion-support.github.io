// Global types for the Zion Tech Group application;
export interface Service {
  id: string;
   name: string;
   description: string;
   category: 'micro-saas' | 'ai-services' | 'it-services';
   price: { min: number;
   ma,
    x: number;
   currenc,
    y: string}
  features: string[];
  technologies: string[];
  deliveryTim,
    e: string;
  suppor,
    t: string;
  image?: string;
  popular?: boolean}
export interface ContactForm {
  name: string;
   email: string;
   company?: string;
   phone?: string;
   service: string;
   budget?: string;
   messag,
    e: string;
   preferredContac,
    t: 'email' | 'phone' | 'both'}
export interface TeamMember {
  id: string;
   name: string;
   position: string;
   bio: string;
   imag,
    e: string;
   skill,
    s: string[];
   linkedin?: string;
   github?: string;
   twitter?: string}
export interface Testimonial {
  id: string;
   name: string;
   company: string;
   position: string;
   conten,
    t: string;
   ratin,
    g: number;
   image?: string;
   project?: string}
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
   teamSiz,
    e: number;
   imag,
    e: string;
   featured?: boolean}
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
   imag,
    e: string;
   featured?: boolean;
   readTim,
    e: number}
export interface PricingTier {
  id: string;
   name: string;
   price: number;
   currency: string;
   period: 'month' | 'year' | 'one-time';
   features: string[];
   limitations?: string[];
   popular?: boolean;
   ct,
    a: string;
   descriptio,
    n: string}
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string}
export interface PaginationParams {
  page: number;
   limi,
    t: number;
   sort?: string;
   order?: 'asc' | 'desc'}
export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
    hasNex,
    t: boolean;
    hasPre,
    v: boolean}
}
export interface SEOProps {
  title?: string;
   description?: string;
   keywords?: string;
   ogImage?: string;
   url?: string;
   type?: string;
   noindex?: boolean}
export interface PerformanceMetrics {
  fcp?: number;
  // First Contentful Paint
  lcp?: number;
  // Largest Contentful Paint
  fid?: number;
  // First Input Delay
  cls?: number;
  // Cumulative Layout Shift
  ttfb?: number;
  // Time to First Byte
}
export interface AccessibilitySettings {
  highContrast: boolean;
<<<<<<< HEAD
  fontSize: number;
  reducedMotio,
    n: boolean;
  screenReade,
    r: boolean;
}
export interface UserPreferences {'
=======
   fontSize: number;
   reducedMotion: boolean;
   screenReader: boolean}
export interface UserPreferences {
>>>>>>> main
  theme: 'light' | 'dark' | 'system';
   language: string;
   accessibility: AccessibilitySettings;
   notifications: { email: boolean;
   browse,
    r: boolean;
   marketin,
    g: boolean}
}
export interface NavigationItem {
  name: string;
   hre,
    f: string;
   submenu?: NavigationItem[];
   external?: boolean}
export interface SocialLink {'
  platform: 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram';
   ur,
    l: string;
   labe,
    l: string}
export interface CompanyInfo {
  name: string;
   tagline: string;
   description: string;
   address: { street: string;
   city: string;
   state: string;
   zi,
    p: string;
   countr,
    y: string}
contact: {phone: string;
    emai,
    l: string;
    websit,
    e: string}
  social: SocialLink[];
  founded: number;
  employee,
    s: string;
  certification,
    s: string[]}
export interface ErrorInfo {
  message: string;
   code?: string;
   details?: unknown;
   timestamp: string;
   userAgent?: string;
   url?: string}
export interface LoadingState {
  isLoading: boolean;
   error?: string;
   progress?: number}
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio';
  required: boolean;
   placeholder?: string;
  options?: { valu,
    e: string;
   labe,
    l: string}[];
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    message?: string}
}
export interface FormState {
  values: Record<string, unknown>
   errors: Record<string, string>
   touched: Record<string, boolean>
   isSubmitting: boolean;
   isVali,
    d: boolean}
// Utility types;export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]}
;
// Component prop types;
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  'data-testid'?: string}

export interface ButtonProps extends BaseComponentProps {'
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset'}

export interface InputProps extends BaseComponentProps {'
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number';
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  disabled?: boolean;
  required?: boolean}
// API types;
export interface ApiError {
  status: number;
   messag,
    e: string;
   code?: string;
<<<<<<< HEAD
   details?: Record<string, unknown>}
export interface ApiRequest {'
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  ur,
    l: string;
  data?: Record<string, unknown>;
  params?: Record<string, string | number | boolean>;
=======
   details?: unknown}
export interface ApiRequest {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  url: string;
  data?: unknown;
  params?: Record<string, unknown>;
>>>>>>> main
  headers?: Record<string, string>}
// Environment types;
export interface Environment {'
  NODE_ENV: 'development' | 'production' | 'test';
  NEXT_PUBLIC_API_URL?: string;
  NEXT_PUBLIC_APP_URL?: string;
  NEXT_PUBLIC_GA_ID?: string;
  NEXT_PUBLIC_SENTRY_DSN?: string}
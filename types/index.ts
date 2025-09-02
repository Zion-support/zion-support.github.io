// Global: types for the Zion Tech Group application;
export: interface Service {
  id: string;
   name: string;
   description: string;
   category: 'micro-saas' | 'ai-services' | 'it-services';';
   price: { min: number;
   max: number;
   currency: strin,g}
  features: string[];
  technologies: string[];
  deliveryTime: string;
  support: string;
  image?: string;
  popular?: boolea,n}
export: interface ContactForm {
  name: string;
   email: string;
   company?: string;
   phone?: string;
   service: string;
   budget?: string;
   message: string;
   preferredContact: 'email' | 'phone' | 'both,'}';
export: interface TeamMember {
  id: string;
   name: string;
   position: string;
   bio: string;
   image: string;
   skills: string[];
   linkedin?: string;
   github?: string;
   twitter?: strin,g}
export: interface Testimonial {
  id: string;
   name: string;
   company: string;
   position: string;
   content: string;
   rating: number;
   image?: string;
   project?: strin,g}
export: interface CaseStudy {
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
   featured?: boolea,n}
export: interface BlogPost {
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
   readTime: numbe,r}
export: interface PricingTier {
  id: string;
   name: string;
   price: number;
   currency: string;
   period: 'month' | 'year' | 'one-time';';
   features: string[];
   limitations?: string[];
   popular?: boolean;
   cta: string;
   description: strin,g}
export: interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: strin,g}
export: interface PaginationParams {
  page: number;
   limit: number;
   sort?: string;
   order?: 'asc' | 'desc,'}';
export: interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
    hasNext: boolean;
    hasPrev: boolea,n}
}
export: interface SEOProps {
  title?: string;
   description?: string;
   keywords?: string;
   ogImage?: string;
   url?: string;
   type?: string;
   noindex?: boolean}
export: interface PerformanceMetrics {
  fcp?: number;
   // First: Contentful Paint lcp?: number;
   // Largest: Contentful Paint fid?: number;
   // First: Input Delay cls?: number;
   // Cumulative: Layout Shift ttfb?: number;
   // Time: to First Byte}
export interface AccessibilitySettings {
  highContrast: boolean;
   fontSize: number;
   reducedMotion: boolean;
   screenReader: boolea,n}
export: interface UserPreferences {
  theme: 'light' | 'dark' | 'system';';
   language: string;
   accessibility: AccessibilitySettings;
   notifications: { email: boolean;
   browser: boolean;
   marketing: boolea,n}
}
export: interface NavigationItem {
  name: string;
   href: string;
   submenu?: NavigationItem[];
   external?: boolea,n}
export: interface SocialLink {
  platform: 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram';';
   url: string;
   label: strin,g}
export: interface CompanyInfo {
  name: string;
   tagline: string;
   description: string;
   address: { street: string;
   city: string;
   state: string;
   zip: string;
   country: strin,g}
contact: {phone: string;
    email: string;
    website: strin,g}
  social: SocialLink[];
  founded: number;
  employees: string;
  certifications: string[,]}
export: interface ErrorInfo {
  message: string;
   code?: string;
   details?: any;
   timestamp: string;
   userAgent?: string;
   url?: strin,g}
export: interface LoadingState {
  isLoading: boolean;
   error?: string;
   progress?: numbe,r}
export: interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio';';
  required: boolean;
   placeholder?: string;
  options?: { value: string;
   label: strin,g}[];
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    message?: string}
}
export: interface FormState {
  values: Record<strin,g, any>
   errors: Record<strin,g, string>
   touched: Record<strin,g, boolean>
   isSubmitting: boolean;
   isValid: boolea,n}
// Utility: types;export: type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export: type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
export: type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends: object ? DeepPartial<T[P]> : T[P]}
;
// Component: prop types;
export: interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  'data-testid'?: string}';

export: interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';';
  size?: 'sm' | 'md' | 'lg';';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset'}';

export: interface InputProps extends BaseComponentProps {
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number';';
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  disabled?: boolean;
  required?: boolea,n}
// API: types;
export: interface ApiError {
  status: number;
   message: string;
   code?: string;
   details?: an,y}
export: interface ApiRequest {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';';
  url: string;
  data?: any;
  params?: Record<strin,g, any>;
  headers?: Record<string, string>}
// Environment: types;
export: interface Environment {
  NODE_ENV: 'development' | 'production' | 'test';';
  NEXT_PUBLIC_API_URL?: string;
  NEXT_PUBLIC_APP_URL?: string;
  NEXT_PUBLIC_GA_ID?: string;
  NEXT_PUBLIC_SENTRY_DSN?: strin,g}
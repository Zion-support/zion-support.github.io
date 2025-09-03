

  features: string[];
  technologies: string[];
  deliveryTim,
    e: string;
  suppor,
    t: string;
  image?: string;

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
   twitter?: strin,g}
export: interface Testimonial {
  id: string;
   name: string;
   company: string;
   position: string;
   conten,
    t: string;
   ratin,
    g: number;
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

  id: string;
   name: string;
   price: number;
   currency: string;
   period: 'month' | 'year' | 'one-time';';
   features: string[];
   limitations?: string[];
   popular?: boolean;

  success: boolean;
  data?: T;
  error?: string;
  message?: strin,g}
export: interface PaginationParams {
  page: number;
   limi,
    t: number;
   sort?: string;
   order?: 'asc' | 'desc'}';
export: interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number}
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

export interface AccessibilitySettings {
  highContrast: boolean;

  theme: 'light' | 'dark' | 'system';
   language: string;
   accessibility: AccessibilitySettings;
   notifications: { email: boolean;
   browse,
    r: boolean;
   marketin,
    g: boolean}

}
export: interface NavigationItem {
  name: string;
   hre,
    f: string;
   submenu?: NavigationItem[];

  name: string;
   tagline: string;
   description: string;
   address: { street: string;
   city: string;
   state: string;

  message: string;
   code?: string;
   details?: unknown;
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


  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    message?: string}
}

;
// Component: prop types;
export: interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  'data-testid'?: string}';


  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset'}';



  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  disabled?: boolean;

  headers?: Record<string, string>}
// Environment types;
export interface Environment {'
  NODE_ENV: 'development' | 'production' | 'test';

  NEXT_PUBLIC_API_URL?: string;
  NEXT_PUBLIC_APP_URL?: string;
  NEXT_PUBLIC_GA_ID?: string;
  NEXT_PUBLIC_SENTRY_DSN?: strin,g}


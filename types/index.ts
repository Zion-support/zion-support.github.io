<<<<<<< HEAD
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
// Global: types for the Zion Tech Group application;
export: interface Service {
  id: string;
   name: string;
   description: string;
   category: 'micro-saas' | 'ai-services' | 'it-services';
   price: { min: number;
   max: number;
   currency: strin,g}
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
   teamSize: number;
   image: string;
   featured?: boolea,n}
export: interface BlogPost {
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
   readTime: numbe,r}
export: interface PricingTier {
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
   cta: string;
   description: strin,g}
export: interface ApiResponse<T> {
   ct,
    a: string;
   descriptio,
    n: string}
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: strin,g}
export: interface PaginationParams {
  page: number;
   limi,
    t: number;
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
    hasNex,
    t: boolean;
    hasPre,
    v: boolean}
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
  // First Contentful Paint
  lcp?: number;
  // Largest Contentful Paint
  fid?: number;
  // First Input Delay
  cls?: number;
  // Cumulative Layout Shift
  ttfb?: number;
  // Time to First Byte;
}
export interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: number;
  reducedMotio,
    n: boolean;
  screenReade,
    r: boolean;
}
export interface UserPreferences {'
   fontSize: number;
   reducedMotion: boolean;
   screenReader: boolea,n}
export: interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
   language: string;
   accessibility: AccessibilitySettings;
   notifications: { email: boolean;
   browser: boolean;
   marketing: boolea,n}
   screenReader: boolean}
export interface UserPreferences {
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
   external?: boolea,n}
export: interface SocialLink {
  platform: 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram';
   url: string;
   label: strin,g}
export: interface CompanyInfo {
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
   zip: string;
   country: strin,g}
contact: {phone: string;
    email: string;
    website: strin,g}
  social: SocialLink[];
  founded: number;
  employees: string;
  certifications: string[]}
export: interface ErrorInfo {
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
   url?: strin,g}
export: interface LoadingState {
  isLoading: boolean;
   error?: string;
   progress?: numbe,r}
export: interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio';
  required: boolean;
   placeholder?: string;
  options?: { value: string;
   label: strin,g}[];
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
// Component: prop types;
export: interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  'data-testid'?: string}';

export: interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
export interface ButtonProps extends BaseComponentProps {'
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset'}';

export: interface InputProps extends BaseComponentProps {
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number';
export interface InputProps extends BaseComponentProps {'
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
  required?: boolea,n}
// API: types;
export: interface ApiError {
  status: number;
   messag,
    e: string;
   code?: string;
   details?: an,y}
export: interface ApiRequest {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  url: string;
  data?: any;
  params?: Record<strin,g, any>;
  headers?: Record<string, string>}
// Environment: types;
export: interface Environment {
  NODE_ENV: 'development' | 'production' | 'test';
   details?: Record<string, unknown>}
export interface ApiRequest {'
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  ur,
    l: string;
  data?: Record<string, unknown>;
  params?: Record<string, string | number | boolean>;
   details?: unknown}
export interface ApiRequest {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  url: string;
  data?: unknown;
  params?: Record<string, unknown>;
  headers?: Record<string, string>}
// Environment types;
export interface Environment {'
  NODE_ENV: 'development' | 'production' | 'test';
  NEXT_PUBLIC_API_URL?: string;
  NEXT_PUBLIC_APP_URL?: string;
  NEXT_PUBLIC_GA_ID?: string;
  NEXT_PUBLIC_SENTRY_DSN?: strin,g}
=======
// Global types for the Zion Tech Group application export interface Service { id: string; name: string; description: string; category: 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency string, }; features: string[]; technologies string[], deliveryTim, e: string, suppor, t: string; image?: string; popular? boolean, } export interface ContactFormData { name: string; email: string; company?: string; phone?: string; message: string; service?: string; budget?: string; timeline?: string; preferredContact 'email' | 'phone' | 'both', } export interface TeamMember { id: string; name: string; role: string; bio: string; image: string; linkedin?: string; twitter?: string; github?: string; skills: string[]; experience: string; education?: string; certifications?: string[]; location: string; timezone: string; availability: string; languages: string[]; specialties: string[]; achievements?: string[]; socialLinks?: { platform: string; url: string; label string, }[]; } export interface PricingPlan { id: string; name: string; description: string; price: number; currency: string; period: 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; badge? string, } export interface Testimonial { id: string; name: string; company: string; role: string; content: string; rating: number; image?: string; verified?: boolean; date?: string; service? string, } export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; date: string; tags: string[]; category: string; image?: string; slug: string; readTime?: number; featured? boolean, } export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; totalPages: number; hasNext: boolean; hasPrev boolean, }; } export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message? string, } export interface User { id: string; email: string; name: string; avatar?: string; role: 'user' | 'admin' | 'moderator'; createdAt: string; updatedAt: string; preferences UserPreferences, } export interface UserPreferences { theme: 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications NotificationSettings, } export interface AccessibilitySettings { highContrast: boolean; reducedMotion: boolean; fontSize: 'small' | 'medium' | 'large'; screenReader boolean, } export interface NotificationSettings { email: boolean; push: boolean; sms: boolean; marketing boolean, } export interface SocialLink { platform: 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label string, } export interface CompanyInfo { name: string; tagline: string; description: string; logo: string; address: { street: string; city: string; state: string; zip: string; country string, }; contact: { phone: string; email: string; website string, }; social: SocialLink[]; founded: string; employees: string; industry: string; headquarters string, } export interface ServiceCategory { id: string; name: string; description: string; icon: string; services: Service[]; featured?: boolean; order number, } export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; team: string[]; image?: string; testimonial?: Testimonial; featured? boolean, } export interface FormField { name: string; label: string; type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string, label string }[]; id: string; name: string; position: string; bio string, imag, e: string, skill, s: string[]; linkedin?: string; github?: string, twitter? strin,g} export interface Testimonial { id: string; name: string; company: string; position string, conten, t: string, ratin, g: number; image?: string, project? strin,g} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string, featured? boolea,n} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category string, imag, e: string; featured?: boolean, readTime numbe,r} export interface PricingTier { id: string; name: string; price: number; currency: string; period: 'month' | 'year' | 'one-time';'; features: string[]; limitations?: string[]; popular?: boolean; cta: string, description strin,g} export interface ApiResponse<T> { success: boolean; data?: T; error?: string, message? strin,g} export interface PaginationParams { page number, limi, t: number; sort?: string, order? 'asc' | 'desc,'}'; export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean, hasPrev boolea,n} } export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string, noindex? boolean} export interface PerformanceMetrics { fcp?: number; // First: Contentful Paint lcp?: number; // Largest: Contentful Paint fid?: number; // First: Input Delay cls?: number; // Cumulative: Layout Shift ttfb?: number, // Time to First Byte} export interface AccessibilitySettings { highContrast: boolean; fontSize number, reducedMotio, n: boolean, screenReade, r: boolean, } export interface UserPreferences {' theme: 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email boolean, browse, r: boolean, marketin, g: boolean} } export interface NavigationItem { name string, hre, f: string; submenu?: NavigationItem[], external? boolea,n} export interface SocialLink { platform: 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram';'; url: string, label strin,g} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string, country strin,g} contact: {phone: string; email: string, website strin,g} social: SocialLink[]; founded: number; employees: string, certifications string[,]} export interface ErrorInfo { message: string; code?: string; details?: unknown; timestamp: string; userAgent?: string, url? strin,g} export interface LoadingState { isLoading: boolean; error?: string, progress? numbe,r} export interface FormField { name: string; label: string; type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio';'; required: boolean; placeholder?: string; options?: { value: string, label strin,g}[]; validation?: { min?: number; max?: number; pattern?: string; message? string} } export interface FormConfig { fields: FormField[]; submitText: string; successMessage: string; errorMessage string, } export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; 'data-testid'? string; } export interface ButtonProps extends BaseComponentProps { variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'; size?: 'sm' | 'md' | 'lg'; disabled?: boolean; loading?: boolean; onClick? () => void; type?: 'button' | 'submit' | 'reset'; } export interface InputProps extends BaseComponentProps { type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; // Component: prop types; export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string, 'data-testid'? string}'; export interface ButtonProps extends BaseComponentProps { variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';'; size?: 'sm' | 'md' | 'lg';'; disabled?: boolean; loading?: boolean; onClick? () => void, type?: 'button' | 'submit' | 'reset'}'; export interface InputProps extends BaseComponentProps { type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number';'; placeholder?: string; value?: string; onChange?: (value string) => void; error?: string; disabled?: boolean; required? boolean, } export interface ErrorInfo { message: string; code?: string; details? any, } export interface ApiRequest { method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any, params? Record<string, any>; headers?: Record<string, string>; } export interface EnvironmentConfig { NODE_ENV: 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN? string, } headers?: Record<string, string>} // Environment types; export interface Environment {' NODE_ENV: 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string, NEXT_PUBLIC_SENTRY_DSN? strin,g} 
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259

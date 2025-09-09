// Type definitions index
// Global types for the Zion Tech Group application
export interface Service {
  "id": string;
  name: string;
  description: string;
  category:
    | 'micro-saas'
    | 'ai-services'
    | 'it-services';
  price: {
    min: number;
    max: number;
    currency: string};
  "features": string[];
  technologies: string[];
  deliveryTime: string;
  support: string;
  image?: string;
  popular?: boolean}
export interface ContactForm {
  "name": string;

// Type definitions index

export interface ContactInfo {

export interface ContactInfo {
  phone: string;

  email: string;
  address: string;
  site: string;
}

  isLoaded: boolean;
  hasError: boolean;
}

  projectName: string;
  goals: string;
  timeline: string;
  budget: string;
  techStack?: string[];
  talentFilters?: { verifiedOnly?: boolean; regions?: string[] };

// Global types for the Zion Tech Group application

// Contact information
export interface ContactInfo {
// Core Types
export interface ContactInfo {

  phone: string;

  email: string;
  address: string;
  site: string;
}

// Service interfaces




// Global types for the Zion Tech Group application
// Type definitions index;
export interface ContactInfo {
  // TODO: Implement
}
  phone: string;,
  email: string;

  address: string;,
  site: string;

export interface AnimationState {
  // TODO: Implement
  isLoaded: boolean;,
  hasError: boolean;

}

export interface ProjectBrief {
  // TODO: Implement
  projectName: string;,
  goals: string;

  timeline: string;,
  budget: string;
  techStack?: string[];
  talentFilters?: { verifiedOnly?: boolean; regions?: string[] };
// Global types for the Zion Tech Group application;
export interface ContactInfo {;
  // TODO: Implement
  phone: string, email: string,
  address: string, site: string,


export interface Service {;


// Core Types;
  // TODO: Implement

// Service interfaces;
export interface Service {
  // TODO: Implement
  "id": string;"
  name: string;,
  description: string;
  category:"
    | 'micro-saas
    | 'ai-services
    | 'it-services';
  price: {,
  min: number;
    max: number;,
  currency: string};
  "features": string[];"
  technologies: string[];,
  deliveryTime: string;
  support: string;
  image?: string;
  popular?: boolean}
export interface ContactForm {

}
export interface Service {
  features: string[];
  technologies: string[];
  deliveryTim,
    e: string;
  suppor,
    t: string;
  image?: string;

  id: string;
  content: string;
  authorId: string;
  authorRole: string;
  createdAt: string;
}

export interface Offer {
  id: string;
  clientId: string;
  talentSlug: string;
  startDateIso: string;
  scopeSummary: string;
  paymentTerms: PaymentTerms;
  agreementUrl?: string;
  status: 'pending' | 'accepted' | 'declined' | 'expired';
  createdAtIso: string;
}
  // TODO: Implement
}"
  "name": string;"

export interface ServiceCategory {
  // TODO: Implement
  title: string;,
  count: number;,
  features: string[];
  href: string;,
  color: string;

export interface LoadingState {
  // TODO: Implement
  is_loading: boolean;
  error?: string;
export interface FormData {
  // TODO: Implement
  company?: string;
  phone?: string;
  service?: string;
  message: string;
  // TODO: Implement
  service: string;
  budget?: string;
  message: string;,
  name: string;
  price: number;,
  period: string;
  popular?: boolean;
  cta: string;

  category: string;
  price: number;
  duration: string;
  features: string[];
  icon?: string;
  popular?: boolean;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  services: Service[];
  icon?: string;
}

// User interfaces
export interface User {
  id: string;
export interface LoadingState {
  is_loading: boolean;
  error?: string;
export interface FormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  message: string;
export interface ContactForm {
  name: string;
  avatar?: string;
  role: 'admin' | 'user' | 'moderator';
  createdAt: string;
  updatedAt: string;
}

export interface UserProfile {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  bio?: string;
  skills: string[];
  experience: number;
  location: string;
  website?: string;
  socialLinks: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

// Project interfaces
  name: string;  url?: string;
  type?: string;
  noindex?: boolean;
  name: string;
export interface SEOProps {
  // TODO: Implement
  title?: string;
  description?: string;
  url?: string;
  type?: string;
  noindex?: boolean;

  url?: string;
  type?: string;
  noindex?: boolean;

export interface LoadingState {;
  isLoading: boolean, error?: string,

export interface AnimationState {;
  isLoaded: boolean, hasError: boolean,

export interface ContactInfo {,
  phone: string,
  email: string,
  address: string,
  site: string,
};
,
export interface Service {,
  title: string,
  description: string,
  features: string[],
  href: string,
  icon: string,
  color: string,
export interface ServiceCategory {,
  count: number,
export interface SEOProps {,
  keywords?: string,
  canonical?: string,
  ogImage?: string,
  noindex?: boolean,
export interface LoadingState {,
  isLoading: boolean,
  error?: string,
export interface AnimationState {,
  isLoaded: boolean,
  hasError: boolean,

}

export interface LoadingState {
  is_loading: boolean;
  error?: string;
  progress?: number;
}
export interface AnimationState {
  is_loaded: boolean;

  has_error: boolean;
}

export interface FormData {
  name: string;

  email: string;
  company?: string;
  phone?: string;

  service: string;
  budget?: string;
  message: string;
// Project interfaces;
export interface Project {
  id: string;
  title: string;
  description: string;
  status: 'draft' | 'active' | 'completed' | 'cancelled';
  client: string;
  budget: number;
  startDate: string;
  endDate?: string;
  team: string[];
  technologies: string[];
  deliverables: string[];
  createdAt: string;
  updatedAt: string;
}

export interface ProjectTask {
  id: string;
  projectId: string;
  title: string;
  description: string;
  status: 'todo' | 'in_progress' | 'review' | 'done';
  assignee?: string;
  dueDate?: string;
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
  updatedAt: string;
}

// Content interfaces
  // TODO: Implement
  progress?: number;
  // TODO: Implement
  is_loaded: boolean;,
  has_error: boolean;

  // TODO: Implement
  preferredContact:
    | 'email
    | 'phone
    | 'both'}
export interface TeamMember {

  position: string;
  content: string;
  rating: number;
  avatar?: string;
  image?: string;
  project?: string;
}

export interface BlogPost {

  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  featured: boolean;
  image?: string;
  readTime: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;

  "id": string;
  name: string;
  position: string;
  bio: string;
  image: string;
  skills: string[];
  linkedin?: string;
  github?: string;

  "id": string;
  name: string;
  company: string;
  position: string;
  content: string;
  rating: number;
  avatar?: string;
  featured: boolean;
  createdAt: string;
}

export interface CaseStudy {
  "id": string;
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
  featured?: boolean}
export interface BlogPost {
  "id": string;
  title: string;
  excerpt: string;
  // TODO: Implement
  company: string;,
  position: string;
  content: string;,
  rating: number;
  avatar?: string;
  project?: string;

}

export interface PaymentTerms {
  type: 'fixed' | 'hourly' | 'milestone';
  amount?: number;
  hourlyRate?: number;
  milestones?: Milestone[];
}

export interface FeedbackRecord {
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
  position: string;
  content: string;
  rating: number;
  avatar?: string;
  image?: string;

;

  project?: string;
}
export interface BlogPost {

  project?: string;
}

export interface BlogPost {;

  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;

  date: string;

  publishedAt: string;
  updatedAt: string;
  published_at: string;
  updated_at: string;
  tags: string[];
  category: string;
  image: string;

  slug: string;
  featured?: boolean;

  read_time: number;
;
}
export interface TeamMember {

}

export interface TeamMember {;

  id: string;
  name: string;

  role: string;

  position: string;
  bio: string;
  image: string;
  skills: string[];

;

  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;

  }
  linkedin?: string;
  github?: string;
  twitter?: string;

;

}
export interface Project {

  id: string;
  title: string;

  name: string;

  status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled';
;
  description: string;
  image: string;
  technologies: string[];
  live_url?: string;
  github_url?: string;
  featured: boolean;
  status: 'planning' | 'in - progress' | 'completed' | 'on - hold' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'critical';
  start_date: Date;
  end_date: Date;
  budget: {

  id: string, title: string,
  description: string, image: string,
  technologies: string[], liveUrl?: string,

  githubUrl?: string;
  featured: boolean;
  name?: string;
  status?: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled';
  priority?: 'low' | 'medium' | 'high' | 'critical';
  startDate?: Date;
  endDate?: Date;
  budget?: {
    allocated: number;
    spent: number;
    currency: string;
  };

  team?: {

    lead: string;
    members: string[];
    external: string[];
  };

  client?: {

    name: string;
    contact: string;
    industry: string;
  };

  deliverables?: {

    allocated: number;
    spent: number;
    currency: string;
  }
  team: {
    lead: string;
    members: string[];
    external: string[];
  }
  client: {
    name: string;
    contact: string;
    industry: string;
  }
  deliverables: {

    allocated: number;
    spent: number;
    currency: string;
  }
  team: {
    lead: string;
    members: string[];
    external: string[];
  }
  client: {
    name: string;
    contact: string;
    industry: string;
  }
  deliverables: {
    name: string;
    description: string;
    status: 'pending' | 'in - progress' | 'completed' | 'review';
    due_date: Date;
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

export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: string}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string}; contact: { phone: string; email: string; website: string}; certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string}; team: { lead: string; members: string[]; external: string[]}; client: { name: string; contact: string; industry: string}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Date}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React && React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'} export interface InputProps { className?: string; children?: React && React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: string}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string}; contact: { phone: string; email: string; website: string}; certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string}; team: { lead: string; members: string[]; external: string[]}; client: { name: string; contact: string; industry: string}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Date}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React && React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'} export interface InputProps { className?: string; children?: React && React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
export interface Partner {
  name: string, logo: string,
  website: string, description: string,
  tier: 'platinum' | 'gold' | 'silver' | 'bronze',

}

// Pricing Types
export interface FAQ {

export interface FAQ {;

  question: string;
  answer: string;
  category?: string;
}

export interface PricingPlan {;

  id: string;

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
export interface JobOpening {

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  currency: string;
  period: 'month' | 'year' | 'one-time';
  features: string[];
  popular?: boolean;
  cta: string;
  href: string;

export interface FAQ {
  question: string;
  answer: string;
  category?: string;

}
export interface PricingPlan {

  name: string;
  price: number;
  period: string;
  features: string[];
  popular?: boolean;
  cta: string;
}
  href: string;

  name: string;
  href: string;
  children?: NavigationItem[];
}
;
}
}
export interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
}
export interface AccessibilitySettings {
  high_contrast: boolean;
  font_size: number;
  reduced_motion: boolean;
  screen_reader: boolean;
}
export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  language: string;
  accessibility: AccessibilitySettings;
  notifications: {
    email: boolean;
    browser: boolean;
    marketing: boolean;
  }
}

export interface NavigationItem {
  name: string;
  href: string;
  submenu?: NavigationItem[];
  external?: boolean;
}

}

export interface CompanyInfo {
  name: string;
  href: string;
}
export interface FooterSection {
  title: string;
  links: FooterLink[];
}
export interface HeroSection {
  title: string;
  subtitle: string;
  cta: {
    primary: {
      text: string;
      href: string;

    }
    secondary: {
      text: string;
      href: string;
    }
  }

    }
    secondary: {
      text: string;
      href: string;
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
  }
  contact: {
    phone: string;
    email: string;
    website: string;
  }
  certifications: string[];

}

export interface Feature {;

  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Stats {;

  label: string;
  value: string;
  description?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  technologies: string[];
  duration: string;
  team_size: number;
  featured?: boolean;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full - time' | 'part - time' | 'contract';
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  salary?: {
    min: number;
    max: number;
    currency: string;
  }
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image?: string;
  featured: boolean;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: 'webinar' | 'workshop' | 'conference' | 'meetup';
  registration_url?: string;
  image?: string;
}

  message: string;
  code?: string;
  details?: any;
  timestamp: string;
  user_agent?: string;
  url?: string;

  params?: Record<string, any>;
</string>
  headers?: Record<string, string>}
export interface APIResponse<T> {

export interface SuccessResponse<T> {

export type Response<T> = SuccessResponse<T> | ErrorResponse;

export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: string} }; features: 'string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean;' } export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both'} } export interface TeamMember { id: 'string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string;' } } export interface Testimonial { id: 'string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string;' } } export interface CaseStudy { id: 'string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean;' } } export interface BlogPost { id: 'string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number;' } } export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} } export interface ApiResponse<T> { success: 'boolean; data?: T; error?: string; message?: string;' } export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | 'desc'} } export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} } export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} } export interface AccessibilitySettings { highContrast: 'boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean;' } } export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean} }} export interface NavigationItem { name: 'string; href: string; submenu?: NavigationItem[]; external?: boolean;' } } export interface SocialLink { platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string} } export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string} }; contact: { phone: string; email: string; website: string}; certifications: 'string[];' } export interface ErrorInfo { message: 'string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string;' } } export interface LoadingState { isLoading: 'boolean; error?: string; progress?: number;' } } export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string} options?: { value: 'string; label: string' }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string} }; team: { lead: string; members: string[]; external: string[]}; client: { name: string; contact: string; industry: string}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Date}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string} }; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string} }; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'} } export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: 'string) => void; error?: string; required?: boolean;' } } export interface ApiRequest { method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any> headers?: Record<string,string> } } export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string} }

export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: string}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string}; contact: { phone: string; email: string; website: string}; certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string}; team: { lead: string; members: string[]; external: string[]}; client: { name: string; contact: string; industry: string}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Date}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}

export type Response < T> = SuccessResponse < T> | ErrorResponse;
  NEXT_PUBLIC_SENTRY_DSN?: string}

  teamSize: number;
  featured: boolean;
  image?: string;
  createdAt: string;
  updatedAt: string;
}
  NEXT_PUBLIC_SENTRY_DSN?: string}'
export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: string} }; features: 'string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean;' } export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both'} } export interface TeamMember { id: 'string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string;' } } export interface Testimonial { id: 'string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string;' } } export interface CaseStudy { id: 'string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean;' } } export interface BlogPost { id: 'string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number;' } } export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} } export interface ApiResponse<T> { success: 'boolean; data?: T; error?: string; message?: string;' } export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | 'desc'} } export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} } export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} } export interface AccessibilitySettings { highContrast: 'boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean;' } } export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean} }} export interface NavigationItem { name: 'string; href: string; submenu?: NavigationItem[]; external?: boolean;' } } export interface SocialLink { platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string} } export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string} }; contact: { phone: string; email: string; website: string}; certifications: 'string[];' } export interface ErrorInfo { message: 'string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string;' } } export interface LoadingState { isLoading: 'boolean; error?: string; progress?: number;' } } export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string} options?: { value: 'string; label: string' }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string} }; team: { lead: string; members: string[]; external: string[]}; client: { name: string; contact: string; industry: string}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Date}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string} }; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string} }; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'} } export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: 'string) => void; error?: string; required?: boolean;' } } export interface ApiRequest { method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any> headers?: Record<string,string> } } export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string} }'
</T>'
export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: string}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string}; contact: { phone: string; email: string; website: string}; certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string}; team: { lead: string; members: string[]; external: string[]}; client: { name: string; contact: string; industry: string}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Date}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}'
</T>'
export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: string}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string}; contact: { phone: string; email: string; website: string}; certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string}; team: { lead: string; members: string[]; external: string[]}; client: { name: string; contact: string; industry: string}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Date}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}'
</T>'
export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: string}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string}; contact: { phone: string; email: string; website: string}; certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string}; team: { lead: string; members: string[]; external: string[]}; client: { name: string; contact: string; industry: string}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Date}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}'
</T>'
export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: string}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string}; contact: { phone: string; email: string; website: string}; certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string}; team: { lead: string; members: string[]; external: string[]}; client: { name: string; contact: string; industry: string}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Date}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}'
</T>'
export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: string}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string}; contact: { phone: string; email: string; website: string}; certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string}; team: { lead: string; members: string[]; external: string[]}; client: { name: string; contact: string; industry: string}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Date}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}'
</T>'
export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: string}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string}; contact: { phone: string; email: string; website: string}; certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string}; team: { lead: string; members: string[]; external: string[]}; client: { name: string; contact: string; industry: string}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Date}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}'
</T>'
export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: string}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string}; contact: { phone: string; email: string; website: string}; certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string}; team: { lead: string; members: string[]; external: string[]}; client: { name: string; contact: string; industry: string}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Date}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}'
</T>'

// Form interfaces
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  message: string;
  budget?: string;
  timeline?: string;
  source?: string;
}

export interface NewsletterSubscription {
  email: string;
  preferences: {
    weekly: boolean;
    monthly: boolean;
    productUpdates: boolean;
    caseStudies: boolean;
  };
}

// Technology interfaces
export interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'mobile' | 'ai' | 'devops';
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  yearsOfExperience: number;
  projects: number;
}

// Partner interfaces
export interface Partner {
  name: string;
  logo: string;
  website: string;
  description: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';
}

export interface Award {
  title: string;
  organization: string;
  year: number;
  description: string;
  image?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  expiry?: string;
  credentialId?: string;
  image?: string;
}

// Environment
export interface Environment {
  NODE_ENV: 'development' | 'production' | 'test';
  NEXT_PUBLIC_API_URL?: string;
  NEXT_PUBLIC_APP_URL?: string;
  NEXT_PUBLIC_GA_ID?: string;
  NEXT_PUBLIC_SENTRY_DSN?: string;
}

// API Response interfaces
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
  timestamp: string;
}

export interface PaginatedResponse<T> {
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
  stack?: string;
  context: ErrorContext;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

// Component Props Types
export interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

// Component props interfaces

export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: string}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string}; contact: { phone: string; email: string; website: string}; certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string}; team: { lead: string; members: string[]; external: string[]}; client: { name: string; contact: string; industry: string}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Date}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}

export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: string}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string}; contact: { phone: string; email: string; website: string}; certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string}; team: { lead: string; members: string[]; external: string[]}; client: { name: string; contact: string; industry: string}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Date}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: string}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string}; contact: { phone: string; email: string; website: string}; certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string}; team: { lead: string; members: string[]; external: string[]}; client: { name: string; contact: string; industry: string}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Date}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: string}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string}; contact: { phone: string; email: string; website: string}; certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string}; team: { lead: string; members: string[]; external: string[]}; client: { name: string; contact: string; industry: string}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Date}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: string}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string}; contact: { phone: string; email: string; website: string}; certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string}; team: { lead: string; members: string[]; external: string[]}; client: { name: string; contact: string; industry: string}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Date}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
}  NEXT_PUBLIC_SENTRY_DSN?: string}
export interface Service { id: string; name: string,
  description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: string} }; features: 'string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean;' } export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both'} } export interface TeamMember { id: 'string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string;' } } export interface Testimonial { id: 'string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string;' } } export interface CaseStudy { id: 'string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean;' } } export interface BlogPost { id: 'string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number;' } } export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string,
  description: string} } export interface ApiResponse<T> { success: 'boolean; data?: T; error?: string; message?: string;' } export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | 'desc'} } export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} } export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} } export interface AccessibilitySettings { highContrast: 'boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean;' } } export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean} }} export interface NavigationItem { name: 'string; href: string; submenu?: NavigationItem[]; external?: boolean;' } } export interface SocialLink { platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string} } export interface CompanyInfo { name: string; tagline: string,
  description: string; address: { street: string; city: string; state: string; zip: string; country: string} }; contact: { phone: string; email: string; website: string}; certifications: 'string[];' } export interface ErrorInfo { message: 'string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string;' } } export interface LoadingState { isLoading: 'boolean; error?: string; progress?: number;' } } export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string} options?: { value: 'string; label: string' }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string,
  description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string} }; team: { lead: string; members: string[]; external: string[]}; client: { name: string; contact: string; industry: string}; deliverables: { name: string,
  description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Date}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | 'influencing',
  description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string} }; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string} }; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'} } export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: 'string) => void; error?: string; required?: boolean;' } } export interface ApiRequest { method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any> headers?: Record<string,string> } } export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string} }
export interface Service { id: string; name: string,
  description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: string}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string,
  description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string,
  description: string; address: { street: string; city: string; state: string; zip: string; country: string}; contact: { phone: string; email: string; website: string}; certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string,
  description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string}; team: { lead: string; members: string[]; external: string[]}; client: { name: string; contact: string; industry: string}; deliverables: { name: string,
  description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Date}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | 'influencing',
  description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}export interface Service { id: string; name: string,
  description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: string}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string,
  description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string,
  description: string; address: { street: string; city: string; state: string; zip: string; country: string}; contact: { phone: string; email: string; website: string}; certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string,
  description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string}; team: { lead: string; members: string[]; external: string[]}; client: { name: string; contact: string; industry: string}; deliverables: { name: string,
  description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Date}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | 'influencing',
  description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
export interface Service { id: string; name: string,
  description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: string}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string,
  description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string,
  description: string; address: { street: string; city: string; state: string; zip: string; country: string}; contact: { phone: string; email: string; website: string}; certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string,
  description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string}; team: { lead: string; members: string[]; external: string[]}; client: { name: string; contact: string; industry: string}; deliverables: { name: string,
  description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Date}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | 'influencing',
  description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: string}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string}; contact: { phone: string; email: string; website: string}; certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string}; team: { lead: string; members: string[]; external: string[]}; client: { name: string; contact: string; industry: string}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Date}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: string}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string}; contact: { phone: string; email: string; website: string}; certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string}; team: { lead: string; members: string[]; external: string[]}; client: { name: string; contact: string; industry: string}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Date}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: string}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string}; contact: { phone: string; email: string; website: string}; certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string}; team: { lead: string; members: string[]; external: string[]}; client: { name: string; contact: string; industry: string}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Date}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
// Component props interfaces;
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
// API Types
export interface NextApiRequest extends Request {
  body: any;
  query: Record<string, string | string[]>;
  method: string;
  headers: Record<string, string>;
}

export interface NextApiResponse {
  status: (code: number) => NextApiResponse;
  json: (data: any) => void;
  send: (data: any) => void;
  end: (data?: any) => void;
  setHeader: (name: string, value: string) => void;
}

// Environment Variables
export interface ProcessEnv {
  NODE_ENV: 'development' | 'production' | 'test';
  NEXT_PUBLIC_API_URL?: string;
  NEXT_PUBLIC_APP_URL?: string;
  DATABASE_URL?: string;
  NEXTAUTH_SECRET?: string;
  NEXTAUTH_URL?: string;
  OPENAI_API_KEY?: string;
  FIREBASE_PROJECT_ID?: string;
  FIREBASE_CLIENT_EMAIL?: string;
  FIREBASE_PRIVATE_KEY?: string;
}

// Utility Types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// Event Types
export interface CustomEvent<T = any> extends Event {
  detail: T;
}

// Form Types
export interface FormField {
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
// Utility types
export type Status = 'idle' | 'loading' | 'success' | 'error';

export type SortOrder = 'asc' | 'desc';

export type Theme = 'light' | 'dark' | 'system';

// Re-export from other type files
export * from './global';

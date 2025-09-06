  phone: string;
  email: string;
  address: string;
  site: string;
}
export interface Service {

export interface Service {;
  id: string;
  name: string;
  description: string;
  category: 'micro-saas' | 'ai-services' | 'it-services';
  price: {
    min: number;
    max: number;
    currency: string;

export interface ContactInfo {;
export interface ContactInfo {
  phone: string, email: string,
  address: string, site: string,


export interface Service {;

}
export interface Service {

// Core Types
}
export interface Service {
  }
  features: string[];
  technologies: string[];
  delivery_time: string;
  support: string;
  image?: string;
  popular?: boolean;
  title: string;
;

}
export interface ServiceCategory {
  title: string;
  description: string;
  count: number;
  features: string[];
  href: string;
  color: string;
}

export interface SEOProps {;
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
}

export interface LoadingState {;
  isLoading: boolean;
  error?: string;
}

}
export interface SEOProps {
  title?: string;
  description?: string;
}
export interface LoadingState {
  is_loading: boolean;
  error?: string;
export interface FormData {
export interface AnimationState {;
  isLoaded: boolean;
  hasError: boolean;
}
export interface FormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  message: string;
export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  budget?: string;
  message: string;
export interface Testimonial {

export interface Testimonial {;

}

}
export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
  image?: string;
}
export interface LoadingState {
  isLoading: boolean;
  error?: string;
  progress?: number;
}



export interface AnimationState {
  isLoaded: boolean;
  hasError: boolean;
}
export interface FormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  message: string;
}
  preferred_contact: 'email' | 'phone' | 'both';
;
}
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
export interface BlogPost {

  project?: string;
}


export interface BlogPost {;
;
  project?: string;
}
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  published_at: string;
  updated_at: string;
  tags: string[];
  category: string;
  image: string;
  readTime: number;
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
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  }
  linkedin?: string;
  github?: string;
  twitter?: string;
export interface Project {
  "id": string;
  name: string;
  description: string;

export interface Project {;
  id: string;
  title: string;
  id: string;
  title: string;
  name: string;

;
  status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled';
;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
origin/main
  "id": string;
  name: string;
  description: string;
  githubUrl?: string;
  featured: boolean;
  priority: 'low' | 'medium' | 'high' | 'critical';
  start_date: Date;
  end_date: Date;
  budget: {
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
    lead: string;
    members: string[];
    external: string[];
  };
    name: string;
    contact: string;
    industry: string;
  };
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
    description: string;
    probability: 'low' | 'medium' | 'high';
    impact: 'low' | 'medium' | 'high';
    mitigation: string;
  }[];
    project: string;
    type: 'blocking' | 'influencing';
    description: string;
  }[];
    name: string;
    value: number;
    unit: string;
    target: number;
  }[];
    learned: string;
    category: 'technical' | 'process' | 'communication' | 'management';
    impact: 'positive' | 'negative' | 'neutral';
  }[];
}

}

// Pricing Types
export interface FAQ {



export interface FAQ {;

export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}
  id: string;
  name: string;
  price: number;
  period: string;
  features: string[];
  popular?: boolean;
  cta: string;
  href: string;
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
}
;
}
export interface NavigationItem {
  name: string;
  href: string;
  children?: NavigationItem[];
  submenu?: NavigationItem[];
  external?: boolean;
}
  name: string;
  href: string;
  icon: string;
  platform?: 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram';
  label?: string;
  url?: string;
  platform: 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram';
  url: string;
  label: string;
export interface SocialLink {
;
}
export interface FooterLink {
  name: string;
  href: string;
}
export interface FooterSection {
  title: string;
  links: FooterLink[];
}
export interface HeroSection {

export interface FooterLink {;
  name: string;
  href: string;
}

export interface FooterSection {;
  title: string;
  links: FooterLink[];
}

export interface HeroSection {;
  title: string;
  subtitle: string;
  cta: {
    primary: {
      text: string;
      href: string;



export interface Feature {;


export interface Feature {
  title: string;
  description: string;
  icon: string;
  color: string;
}



export interface Stats {;


export interface Stats {
  label: string;
  value: string;
  description?: string;
}
export interface CaseStudy {


export interface CaseStudy {;
export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  salary?: {
    min: number;
    max: number;
    currency: string;
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
  image?: string;
}

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
  teamSize: number;
  featured?: boolean;
}



export interface JobOpening {;


  id: string;
  title: string;
  department: string;
  location: string;



export interface NewsItem {;


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



export interface Event {;


  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: 'webinar' | 'workshop' | 'conference' | 'meetup';
export interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'mobile' | 'ai' | 'devops';
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  yearsOfExperience: number;
  projects: number;
}

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'page' | 'blog' | 'service' | 'case-study' | 'job';
  score: number;
  highlights?: string[];
}

export interface FilterOption {
  label: string;
  value: string;
  count?: number;
}

export interface SortOption {
  label: string;
  value: string;
  direction: 'asc' | 'desc';
}

export interface Pagination {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  hasNext: boolean;
  hasPrev: boolean;
export interface Environment {
  NODE_ENV: 'development' | 'production' | 'test';
  NEXT_PUBLIC_API_URL?: string;
  NEXT_PUBLIC_APP_URL?: string;
  NEXT_PUBLIC_GA_ID?: string;
  NEXT_PUBLIC_SENTRY_DSN?: string;
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
  }
  preferences: {
    theme: 'light' | 'dark' | 'auto';
    language: string;
    notifications: {
      email: boolean;
      push: boolean;
      sms: boolean;
    }
  }
  activity: {
    last_login: Date;
    login_count: number;
    projects: string[];
    tasks: string[];
  }
  subscription: {
    plan: 'free' | 'basic' | 'premium' | 'enterprise';
    status: 'active' | 'inactive' | 'cancelled' | 'expired';
    start_date: Date;
    end_date: Date;
    features: string[];
  }
}
export interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  action?: {
    label: string;
    url: string;
  }
  category: 'system' | 'project' | 'team' | 'client' | 'billing';
  priority: 'low' | 'medium' | 'high';
  expires?: Date;
}
export interface BaseComponentProps {
  class_name?: string;
  children?: React.ReactNode;
  id?: string;
  disabled?: boolean;
  loading?: boolean;
  on_click?: () => void;
  type?: 'button' | 'submit' | 'reset';
}
export interface InputProps {
  class_name?: string;
  children?: React.ReactNode;
  id?: string;
  disabled?: boolean;
  loading?: boolean;
  on_click?: () => void;
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number';
  placeholder?: string;
  value?: string;
  on_change?: (value: string) => void;
  error?: string;
  required?: boolean;
}
export interface ApiRequest {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  url: string;
  data?: any;
  params?: Record < string, any>;
  headers?: Record < string, string>;
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
export interface ErrorInfo {
  message: string;
  code?: string;
  details?: any;
  timestamp: string;
  user_agent?: string;
  url?: string;
}
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio';
  required: boolean;
  placeholder?: string;
  options?: {
    value: string;
    label: string;
  }[];
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    message?: string;
  }
}
// Environment;
export interface Environment {
  NODE_ENV: 'development' | 'production' | 'test';
  NEXT_PUBLIC_API_URL?: string;
  NEXT_PUBLIC_APP_URL?: string;
  NEXT_PUBLIC_GA_ID?: string;
  NEXT_PUBLIC_SENTRY_DSN?: string;
}
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
  credential_id?: string;
  image?: string;
}
export interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'mobile' | 'ai' | 'devops';
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  yearsOfExperience: number;
  projects: number;
}
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
  interests: string[];
  frequency: 'daily' | 'weekly' | 'monthly';
  subscribed: boolean;
  subscribed_at: string;
}
export interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'page' | 'blog' | 'service' | 'case - study' | 'job';
  score: number;
  highlights?: string[];
}
export interface FilterOption {
  label: string;
  value: string;
  count?: number;
}
export interface SortOption {
  label: string;
  value: string;
  direction: 'asc' | 'desc';
}
export interface Pagination {
  current_page: number;
  total_pages: number;
  total_items: number;
  itemsPerPage: number;
  has_next: boolean;
  has_prev: boolean;
}
  data: T;
  success: boolean;
  message?: string;
  errors?: string[];
  pagination?: Pagination;
}
export interface ErrorResponse {
  success: false;
  message: string;
  errors: string[];
  code?: string;
}
  success: true;
  data: T;
  message?: string;
}
export type Response < T> = SuccessResponse < T> | ErrorResponse;
;
export type Response < T> = SuccessResponse < T> | ErrorResponse;
;

// Core Types
export interface ContactInfo {
<<<<<<< HEAD
  phone: string;
  email: string;
  address: string;
  site: string;
=======
export interface ContactInfo {;
export interface ContactInfo {
  phone: string, email: string,
  address: string, site: string,


export interface Service {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
export interface Service {
<<<<<<< HEAD
  id: string;
  name: string;
  description: string;
  category: 'micro-saas' | 'ai-services' | 'it-services';
  price: {
    min: number;
    max: number;
    currency: string;
<<<<<<< HEAD
  };
=======
  }
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  features: string[];
  technologies: string[];
  deliveryTime: string;
  support: string;
  image?: string;
  popular?: boolean;
<<<<<<< HEAD
}

export interface ServiceCategory {
  title: string;
  description: string;
  count: number;
  features: string[];
  href: string;
  color: string;
}

export interface SEOProps {
  title?: string;
  description?: string;
=======
<<<<<<< HEAD
=======
  title: string;
  href: string;
  icon: string;
  color: string;
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
}
export interface ServiceCategory {
  title: string;
  description: string;
  count: number;
  features: string[];
  href: string;
  color: string;
<<<<<<< HEAD
}

export interface SEOProps {
  title: string;
  description: string;
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
  title: string, description: string,
  features: string[], href: string,
  icon: string, color: string,


export interface ServiceCategory {;
}

export interface ServiceCategory {
  title: string, description: string,
  count: number, features: string[],
  href: string, color: string,


export interface SEOProps {;
  title: string, description: string,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
<<<<<<< HEAD
=======


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
};
,
export interface ServiceCategory {,
  title: string,
  description: string,
  count: number,
  features: string[],
  href: string,
  color: string,
};
,
export interface SEOProps {,
  title: string,
  description: string,
  keywords?: string,
  canonical?: string,
  ogImage?: string,
  noindex?: boolean,
};
,
export interface LoadingState {,
  isLoading: boolean,
  error?: string,
};
,
export interface AnimationState {,
  isLoaded: boolean,
  hasError: boolean,
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}

export interface LoadingState {
  isLoading: boolean;
  error?: string;
<<<<<<< HEAD
  progress?: number;
}

export interface AnimationState {
  isLoaded: boolean;
  hasError: boolean;
}

// Form Types
export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  budget?: string;
  message: string;
  preferredContact: 'email' | 'phone' | 'both';
=======
}

=======
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
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
export interface AnimationState {
  isLoaded: boolean;
  hasError: boolean;
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
}
export interface FormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  message: string;
<<<<<<< HEAD
}

// Content Types
export interface Testimonial {
  id: string;
  name: string;
  company: string;
  position: string;
  content: string;
  rating: number;
  image?: string;
=======
<<<<<<< HEAD
=======
}
export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  budget?: string;
  message: string;
  preferredContact: 'email' | 'phone' | 'both';
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
}
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
<<<<<<< HEAD
  content: string;
  avatar?: string;
  rating?: number;
=======
  position: string;
  content: string;
  rating: number;
  avatar?: string;
  image?: string;
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  project?: string;
}
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
<<<<<<< HEAD
=======
  date: string;
<<<<<<< HEAD
  tags: string[];
  image?: string;
  slug: string;
  publishedAt?: string;
  updatedAt?: string;
  category?: string;
  featured?: boolean;
  readTime?: number;
=======
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  category: string;
  image: string;
<<<<<<< HEAD
  featured?: boolean;
  readTime: number;
=======
  slug: string;
  featured?: boolean;
  readTime: number;
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
}
export interface TeamMember {
  id: string;
  name: string;
<<<<<<< HEAD
=======
  role: string;
<<<<<<< HEAD
  bio: string;
  image: string;
=======
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  position: string;
  bio: string;
  image: string;
  skills: string[];
<<<<<<< HEAD
  linkedin?: string;
  github?: string;
  twitter?: string;
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
<<<<<<< HEAD
  };
  skills?: string[];
  position?: string;
=======
  }
  linkedin?: string;
  github?: string;
  twitter?: string;
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
}
export interface Project {
<<<<<<< HEAD
  id: string;
  name: string;
  description: string;
=======
<<<<<<< HEAD
  id: string;
  title: string;
<<<<<<< HEAD
=======
  name: string;
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
<<<<<<< HEAD
=======
<<<<<<< HEAD
  "id": string;
  name: string;
  description: string;
=======
  githubUrl?: string;
  featured: boolean;
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'critical';
  startDate: Date;
  endDate: Date;
  budget: {
<<<<<<< HEAD
=======
<<<<<<< HEAD
    allocated: number;
    spent: number;
    currency: string};
  "team": {
    lead: string;
    members: string[];
    external: string[]};
  "client": {
    name: string;
    contact: string;
    industry: string};
  "deliverables": {
    name: string;
    description: string;
    status: 'pending' | 'in-progress' | 'completed' | 'review';
    dueDate: Date}[];
  "risks": {
    description: string;
    probability: 'low' | 'medium' | 'high';
    impact: 'low' | 'medium' | 'high';
    mitigation: string}[];
  "dependencies": {
    project: string;
    type: 'blocking' | 'influencing';
    description: string}[];
  "metrics": {
    name: string;
    value: number;
    unit: string;
    target: number}[];
  "lessons": {
    learned: string;
    category: 'technical' | 'process' | 'communication' | 'management';
    impact: 'positive' | 'negative' | 'neutral'}[]}
export interface User {
  "id": string;
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
    timezone: string};
  "preferences": {
    theme: 'light' | 'dark' | 'auto';
    language: string;
    notifications: {
      email: boolean;
      push: boolean;
      sms: boolean}};
  "activity": {
    lastLogin: Date;
    loginCount: number;
    projects: string[];
    tasks: string[]};
  "subscription": {
    plan: 'free' | 'basic' | 'premium' | 'enterprise';
    status: 'active' | 'inactive' | 'cancelled' | 'expired';
    startDate: Date;
    endDate: Date;
    features: string[]}}
export interface Notification {
  "id": string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  action?: {
    label: string;
    url: string};
  "category": 'system' | 'project' | 'team' | 'client' | 'billing';
  priority: 'low' | 'medium' | 'high';
  expires?: Date}
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset'}
// InputProps should not extend BaseComponentProps due to incompatible 'type'
export interface InputProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number';
  placeholder?: string;
  value?: string;
  onChange?: ("value": string) => void;
  error?: string;
  required?: boolean}
// API types
export interface ApiRequest {
  "method": | 'GET'
    | 'POST'
    | 'PUT'
    | 'DELETE'
    | 'PATCH';
  url: string;
  data?: any;
  params?: Record<string, any>;
  headers?: Record<string, string>}
// Environment types
export interface Environment {
  "NODE_ENV": | 'development'
    | 'production'
    | 'test';
  NEXT_PUBLIC_API_URL?: string;
  NEXT_PUBLIC_APP_URL?: string;
  NEXT_PUBLIC_GA_ID?: string;
  NEXT_PUBLIC_SENTRY_DSN?: string}
export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: string} }; features: 'string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean;' } export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both'} } export interface TeamMember { id: 'string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string;' } } export interface Testimonial { id: 'string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string;' } } export interface CaseStudy { id: 'string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean;' } } export interface BlogPost { id: 'string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number;' } } export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} } export interface ApiResponse<T> { success: 'boolean; data?: T; error?: string; message?: string;' } export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | 'desc'} } export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} } export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} } export interface AccessibilitySettings { highContrast: 'boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean;' } } export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean} }} export interface NavigationItem { name: 'string; href: string; submenu?: NavigationItem[]; external?: boolean;' } } export interface SocialLink { platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string} } export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string} }; contact: { phone: string; email: string; website: string}; certifications: 'string[];' } export interface ErrorInfo { message: 'string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string;' } } export interface LoadingState { isLoading: 'boolean; error?: string; progress?: number;' } } export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string} options?: { value: 'string; label: string' }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string} }; team: { lead: string; members: string[]; external: string[]}; client: { name: string; contact: string; industry: string}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Date}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string} }; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string} }; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'} } export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: 'string) => void; error?: string; required?: boolean;' } } export interface ApiRequest { method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any> headers?: Record<string,string> } } export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string} }
<<<<<<< HEAD
export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: string}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string}; contact: { phone: string; email: string; website: string}; certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string}; team: { lead: string; members: string[]; external: string[]}; client: { name: string; contact: string; industry: string}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Date}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
=======
<<<<<<< HEAD
export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: string}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string}; contact: { phone: string; email: string; website: string}; certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string}; team: { lead: string; members: string[]; external: string[]}; client: { name: string; contact: string; industry: string}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Date}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
=======
export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: string}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string}; contact: { phone: string; email: string; website: string}; certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string}; team: { lead: string; members: string[]; external: string[]}; client: { name: string; contact: string; industry: string}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Date}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
  id: string, title: string,
  description: string, image: string,
  technologies: string[], liveUrl?: string,
>>>>>>> origin/automation-improvements-final
  githubUrl?: string;
  featured: boolean;
  name?: string;
  status?: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled';
  priority?: 'low' | 'medium' | 'high' | 'critical';
  startDate?: Date;
  endDate?: Date;
  budget?: {
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    allocated: number;
    spent: number;
    currency: string;
  };
<<<<<<< HEAD
  team: {
=======
  team?: {
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    lead: string;
    members: string[];
    external: string[];
  };
<<<<<<< HEAD
  client: {
=======
  client?: {
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    name: string;
    contact: string;
    industry: string;
  };
<<<<<<< HEAD
  deliverables: {
=======
  deliverables?: {
=======
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
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    name: string;
    description: string;
    status: 'pending' | 'in-progress' | 'completed' | 'review';
    dueDate: Date;
  }[];
<<<<<<< HEAD
  risks: {
=======
<<<<<<< HEAD
  risks?: {
=======
  risks: {
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    description: string;
    probability: 'low' | 'medium' | 'high';
    impact: 'low' | 'medium' | 'high';
    mitigation: string;
  }[];
<<<<<<< HEAD
  dependencies: {
=======
<<<<<<< HEAD
  dependencies?: {
=======
  dependencies: {
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    project: string;
    type: 'blocking' | 'influencing';
    description: string;
  }[];
<<<<<<< HEAD
  metrics: {
=======
<<<<<<< HEAD
  metrics?: {
=======
  metrics: {
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    name: string;
    value: number;
    unit: string;
    target: number;
  }[];
<<<<<<< HEAD
  lessons: {
=======
<<<<<<< HEAD
  lessons?: {
=======
  lessons: {
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    learned: string;
    category: 'technical' | 'process' | 'communication' | 'management';
    impact: 'positive' | 'negative' | 'neutral';
  }[];
}
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: string}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string}; contact: { phone: string; email: string; website: string}; certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string}; team: { lead: string; members: string[]; external: string[]}; client: { name: string; contact: string; industry: string}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Date}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React && React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'} export interface InputProps { className?: string; children?: React && React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: string}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string}; contact: { phone: string; email: string; website: string}; certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string}; team: { lead: string; members: string[]; external: string[]}; client: { name: string; contact: string; industry: string}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Date}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React && React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'} export interface InputProps { className?: string; children?: React && React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
export interface Partner {
  name: string, logo: string,
  website: string, description: string,
  tier: 'platinum' | 'gold' | 'silver' | 'bronze',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}

// Pricing Types
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
  description: string;
=======
export interface FAQ {
  question: string;
  answer: string;
  category?: string;
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
}
export interface PricingPlan {
<<<<<<< HEAD
=======
<<<<<<< HEAD
  id: string;
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  name: string;
  price: number;
  period: string;
  features: string[];
  popular?: boolean;
  cta: string;
  href: string;
<<<<<<< HEAD
}

// API Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface ApiRequest {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  url: string;
  data?: any;
  params?: Record<string, any>;
  headers?: Record<string, string>;
}

export interface PaginationParams {
  page: number;
  limit: number;
  sort?: string;
  order?: 'asc' | 'desc';
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

export interface ErrorResponse {
  success: false;
  message: string;
  errors: string[];
  code?: string;
}

export interface SuccessResponse<T> {
  success: true;
  data: T;
  message?: string;
}

export type Response<T> = SuccessResponse<T> | ErrorResponse;

// UI Types
export interface NavigationItem {
  name: string;
  href: string;
=======
<<<<<<< HEAD
  currency?: string;
  limitations?: string[];
  description?: string;
=======
}
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
  description: string;
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
}
export interface NavigationItem {
  name: string;
  href: string;
  children?: NavigationItem[];
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  submenu?: NavigationItem[];
  external?: boolean;
}
export interface SocialLink {
<<<<<<< HEAD
  platform: 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram';
  url: string;
  label: string;
=======
  name: string;
  href: string;
  icon: string;
<<<<<<< HEAD
  platform?: 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram';
  label?: string;
  url?: string;
=======
  platform: 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram';
  url: string;
  label: string;
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
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
  title: string;
  subtitle: string;
  cta: {
    primary: {
      text: string;
      href: string;
<<<<<<< HEAD
    };
    secondary: {
      text: string;
      href: string;
    };
  };
=======
    }
    secondary: {
      text: string;
      href: string;
    }
  }
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  image?: string;
}
export interface Feature {
  title: string;
  description: string;
  icon: string;
  color: string;
}
export interface Stats {
  label: string;
  value: string;
  description?: string;
}
<<<<<<< HEAD

// User Types
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

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  language: string;
  accessibility: AccessibilitySettings;
  notifications: {
    email: boolean;
    browser: boolean;
    marketing: boolean;
  };
}

export interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: number;
  reducedMotion: boolean;
  screenReader: boolean;
}

// Component Types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export interface InputProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number';
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  required?: boolean;
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

// Notification Types
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
  };
  category: 'system' | 'project' | 'team' | 'client' | 'billing';
  priority: 'low' | 'medium' | 'high';
  expires?: Date;
}

// FAQ Types
export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

// Job Types
export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract';
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  salary?: {
    min: number;
    max: number;
    currency: string;
  };
}

// News Types
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

// Event Types
export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: 'webinar' | 'workshop' | 'conference' | 'meetup';
  registrationUrl?: string;
  image?: string;
}

// Company Types
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

=======
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
  teamSize: number;
  featured?: boolean;
}
export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract';
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
  registrationUrl?: string;
  image?: string;
}
<<<<<<< HEAD

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

>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
export interface Certification {
  name: string;
  issuer: string;
  date: string;
  expiry?: string;
  credentialId?: string;
  image?: string;
}

<<<<<<< HEAD
// Technology Types
=======
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
export interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'mobile' | 'ai' | 'devops';
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  yearsOfExperience: number;
  projects: number;
}

<<<<<<< HEAD
// Performance Types
export interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
}

// Search Types
=======
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
  preferredContact?: 'email' | 'phone' | 'both';
}

export interface NewsletterSubscription {
  email: string;
  interests: string[];
  frequency: 'daily' | 'weekly' | 'monthly';
  subscribed: boolean;
  subscribedAt: string;
}

>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
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
<<<<<<< HEAD
}

// Error Types
=======
  page?: number;
  limit?: number;
  total?: number;
  pages?: number;
}

export interface APIResponse<T> {
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

export interface SuccessResponse<T> {
  success: true;
  data: T;
  message?: string;
}

export type Response<T> = SuccessResponse<T> | ErrorResponse;
<<<<<<< HEAD

=======
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
    lastLogin: Date;
    loginCount: number;
    projects: string[];
    tasks: string[];
  }
  subscription: {
    plan: 'free' | 'basic' | 'premium' | 'enterprise';
    status: 'active' | 'inactive' | 'cancelled' | 'expired';
    startDate: Date;
    endDate: Date;
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
  className?: string;
  children?: React.ReactNode;
  id?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}
export interface InputProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number';
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  required?: boolean;
}
export interface ApiRequest {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  url: string;
  data?: any;
  params?: Record<string, any>;
  headers?: Record<string, string>;
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
  order?: 'asc' | 'desc';
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
  highContrast: boolean;
  fontSize: number;
  reducedMotion: boolean;
  screenReader: boolean;
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
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
export interface ErrorInfo {
  message: string;
  code?: string;
  details?: any;
  timestamp: string;
  userAgent?: string;
  url?: string;
}
<<<<<<< HEAD

// Newsletter Types
export interface NewsletterSubscription {
  email: string;
  interests: string[];
  frequency: 'daily' | 'weekly' | 'monthly';
  subscribed: boolean;
  subscribedAt: string;
}

// Environment Types
=======
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
  }
}
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
// Environment
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
export interface Environment {
  NODE_ENV: 'development' | 'production' | 'test';
  NEXT_PUBLIC_API_URL?: string;
  NEXT_PUBLIC_APP_URL?: string;
  NEXT_PUBLIC_GA_ID?: string;
  NEXT_PUBLIC_SENTRY_DSN?: string;
<<<<<<< HEAD
}
=======
}
<<<<<<< HEAD

// Additional interfaces
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

export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export interface InputProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number';
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  required?: boolean;
}

export interface ApiRequest {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  url: string;
  data?: any;
  params?: Record<string, any>;
  headers?: Record<string, string>;
}

export interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
}

export interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: number;
  reducedMotion: boolean;
  screenReader: boolean;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  language: string;
  accessibility: AccessibilitySettings;
  notifications: {
    email: boolean;
    browser: boolean;
    marketing: boolean;
  };
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
  };
}

export interface PaginationParams {
  page: number;
  limit: number;
  sort?: string;
  order?: 'asc' | 'desc';
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-2c83
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
=======
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
  subscribedAt: string;
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
}
export interface APIResponse<T> {
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
export interface SuccessResponse<T> {
  success: true;
  data: T;
  message?: string;
}
export type Response<T> = SuccessResponse<T> | ErrorResponse;
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a

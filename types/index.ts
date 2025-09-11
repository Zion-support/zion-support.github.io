<<<<<<< HEAD
<<<<<<< HEAD
export interface ContactInfo {
export interface ContactInfo {
export interface ContactInfo {;
  phone: string;
  email: string;
  address: string;
  site: string;
}
export interface Service {
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export interface ContactInfo {;
export interface ContactInfo {
  phone: string, email: string,
  address: string, site: string,


export interface Service {;

}
export interface Service {

  }

  }
=======

export interface ContactInfo {;
export interface ContactInfo {
  phone: string, email: string,
  address: string, site: string,


export interface Service {;

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
export interface Service {

  }

=======
  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  features: string[];
  technologies: string[];
  delivery_time: string;
  support: string;
  image?: string;
  popular?: boolean;
  title: string;
  href: string;
  icon: string;
  color: string;
<<<<<<< HEAD
}
export interface ServiceCategory {

export interface ServiceCategory {;
=======
;

}
export interface ServiceCategory {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  title: string;
  description: string;
  count: number;
  features: string[];
  href: string;
  color: string;
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

=======
<<<<<<< HEAD
=======
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export interface SEOProps {
  title?: string;
  description?: string;
=======

  title: string;
  href: string;
  icon: string;
  color: string;

}
export interface ServiceCategory {
  title: string;
  description: string;
  count: number;
  features: string[];
  href: string;
  color: string;

  title: string, description: string,
  features: string[], href: string,
  icon: string, color: string,


export interface ServiceCategory {;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
export interface SEOProps {
  title?: string;
  description?: string;

  title: string;
  }
  features: string[];
  technologies: string[];
  deliveryTime: string;
  support: string;
  image?: string;
  popular?: boolean;
title: string;
  href: string;
  icon: string;
  color: string;

}
export interface ServiceCategory {
  title: string;
  description: string;
  count: number;
  features: string[];
  href: string;
  color: string;

=======
}

export interface ServiceCategory {
  title: string, description: string,
  count: number, features: string[],
  href: string, color: string,


export interface SEOProps {;
  title: string, description: string,

  keywords?: string;
  canonical?: string;

  og_image?: string;
  url?: string;
  type?: string;

  noindex?: boolean;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
;
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

export interface SEOProps {
  title: string, description: string,
  keywords?: string;
  image?: string;
}
export interface LoadingState {
  is_loading: boolean;
  error?: string;

;

}
export interface AnimationState {
  isLoaded: boolean;
  hasError: boolean;
}
export interface FormData {
export interface AnimationState {;
  isLoaded: boolean;
  hasError: boolean;
}

<<<<<<< HEAD
export interface FormData {;
export interface AnimationState {
  is_loaded: boolean;
  has_error: boolean;
}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export interface FormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  message: string;
}

export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  budget?: string;
  message: string;
<<<<<<< HEAD
=======

}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
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

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  image?: string;
}
export interface LoadingState {
  isLoading: boolean;
  error?: string;
  progress?: number;
}

<<<<<<< HEAD
<<<<<<< HEAD


export interface AnimationState {
  isLoaded: boolean;
  hasError: boolean;
}

export interface AnimationState {
  isLoaded: boolean;
  hasError: boolean;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export interface AnimationState {
  isLoaded: boolean;
  hasError: boolean;
<<<<<<< HEAD
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
export interface FormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  message: string;

<<<<<<< HEAD
<<<<<<< HEAD
}
export interface Testimonial {
  preferredContact: 'email' | 'phone' | 'both';
}
export interface Testimonial {

export interface Testimonial {;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  id: string;
  name: string;
  role: string;
  company: string;
<<<<<<< HEAD
<<<<<<< HEAD
  content: string;
  avatar?: string;
  rating?: number;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  content: string;
  avatar?: string;
  rating?: number;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  position: string;
  content: string;
  rating: number;
  avatar?: string;
  image?: string;
<<<<<<< HEAD
<<<<<<< HEAD
content: string;
  avatar?: string;
  rating?: number;
=======

;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  project?: string;
}
export interface BlogPost {
<<<<<<< HEAD
  project?: string;
}
export interface BlogPost {
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  project?: string;
}


export interface BlogPost {;
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  project?: string;
}
export interface BlogPost {
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
<<<<<<< HEAD
<<<<<<< HEAD
=======

  date: string;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  publishedAt: string;
  updatedAt: string;
  published_at: string;
  updated_at: string;
  date: string;
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

<<<<<<< HEAD
  date: string;
tags: string[];
=======

  date: string;
  tags: string[];
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  image?: string;
  slug: string;
  publishedAt?: string;
  updatedAt?: string;
  category?: string;
  featured?: boolean;
  readTime?: number;
  publishedAt: string;
  updatedAt: string;
<<<<<<< HEAD
  tags: string[];
  category: string;
  image: string;
=======
=======
  published_at: string;
  updated_at: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  tags: string[];
  category: string;
  image: string;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  slug: string;
  featured?: boolean;
  readTime: number;
}
export interface TeamMember {
<<<<<<< HEAD

export interface TeamMember {;
  id: string;
  name: string;
=======
=======
  readTime: number;
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  id: string;
  name: string;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  role: string;
  bio: string;
  image: string;
  position: string;
  bio: string;
  image: string;
  skills: string[];
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
<<<<<<< HEAD
<<<<<<< HEAD
};
skills?: string[];
  position?: string;
}
export interface Project {

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  };
  skills?: string[];
  position?: string;
  }
  linkedin?: string;
  github?: string;
  twitter?: string;
<<<<<<< HEAD
}
export interface Project {
  "id": string;
  name: string;
  description: string;
  status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'critical';
  startDate: Date;
  endDate: Date;
  budget: {
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
export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: string}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string}; contact: { phone: string; email: string; website: string}; certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string}; team: { lead: string; members: string[]; external: string[]}; client: { name: string; contact: string; industry: string}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Date}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: string}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string}; contact: { phone: string; email: string; website: string}; certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string}; team: { lead: string; members: string[]; external: string[]}; client: { name: string; contact: string; industry: string}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Date}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: string}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string}; contact: { phone: string; email: string; website: string}; certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string}; team: { lead: string; members: string[]; external: string[]}; client: { name: string; contact: string; industry: string}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Date}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
ursor/integrate-build-improve-and-re-verify-8f7d
  id: string, title: string,
  description: string, image: string,
  technologies: string[], liveUrl?: string,

export interface Project {;
id: string;
  title: string;
name: string;

  id: string;
  title: string;
  id: string;
  title: string;
  name: string;
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
  status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled';

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
=======

;

}
export interface Project {


  id: string;
  title: string;
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  name: string;


=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled';
=======
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
  status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  priority: 'low' | 'medium' | 'high' | 'critical';
  start_date: Date;
  end_date: Date;
  budget: {
<<<<<<< HEAD




  id: string, title: string,
  description: string, image: string,
  technologies: string[], liveUrl?: string,

  githubUrl?: string;
  featured: boolean;
<<<<<<< HEAD
  priority: 'low' | 'medium' | 'high' | 'critical';
  startDate: Date;
  endDate: Date;
  budget: {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: string}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string}; contact: { phone: string; email: string; website: string}; certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string}; team: { lead: string; members: string[]; external: string[]}; client: { name: string; contact: string; industry: string}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Date}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: string}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string}; contact: { phone: string; email: string; website: string}; certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string}; team: { lead: string; members: string[]; external: string[]}; client: { name: string; contact: string; industry: string}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Date}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: string}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string}; contact: { phone: string; email: string; website: string}; certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string}; team: { lead: string; members: string[]; external: string[]}; client: { name: string; contact: string; industry: string}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Date}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
  id: string, title: string,
  description: string, image: string,
  technologies: string[], liveUrl?: string,
origin/automation-improvements-final
  githubUrl?: string;
  featured: boolean;
<<<<<<< HEAD

  id: string;
  title: string;

  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  name?: string;
  status?: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled';
  priority?: 'low' | 'medium' | 'high' | 'critical';
  startDate?: Date;
  endDate?: Date;
  budget?: {
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    allocated: number;
    spent: number;
    currency: string;
  };
<<<<<<< HEAD
<<<<<<< HEAD
team?: {
=======

  team?: {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  team?: {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    lead: string;
    members: string[];
    external: string[];
  };
<<<<<<< HEAD
<<<<<<< HEAD
client?: {
=======

  client?: {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  client?: {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    name: string;
    contact: string;
    industry: string;
  };
<<<<<<< HEAD
<<<<<<< HEAD
=======

  deliverables?: {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  deliverables?: {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD

<<<<<<< HEAD

  risks: {

deliverables?: {
    name: string;
    description: string;
    status: 'pending' | 'in-progress' | 'completed' | 'review';
    dueDate: Date;
  }[];
  risks?: {
  risks: {
=======
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    name: string;
    description: string;
    status: 'pending' | 'in - progress' | 'completed' | 'review';
    due_date: Date;
  }[];
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  risks: {

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  risks?: {
  risks: {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    description: string;
    probability: 'low' | 'medium' | 'high';
    impact: 'low' | 'medium' | 'high';
    mitigation: string;
  }[];
<<<<<<< HEAD

<<<<<<< HEAD

  dependencies: {

dependencies?: {

  dependencies?: {
  dependencies: {
=======

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  dependencies: {

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  dependencies?: {
  dependencies: {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    project: string;
    type: 'blocking' | 'influencing';
    description: string;
  }[];
<<<<<<< HEAD

<<<<<<< HEAD

  metrics: {

metrics?: {

  metrics?: {
  metrics: {
=======

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  metrics: {

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  metrics?: {
  metrics: {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    name: string;
    value: number;
    unit: string;
    target: number;
  }[];
<<<<<<< HEAD

<<<<<<< HEAD

  lessons: {

lessons?: {

  lessons?: {
  lessons: {
=======

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  lessons: {

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  lessons?: {
  lessons: {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    learned: string;
    category: 'technical' | 'process' | 'communication' | 'management';
    impact: 'positive' | 'negative' | 'neutral';
  }[];
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: string}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string}; contact: { phone: string; email: string; website: string}; certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string}; team: { lead: string; members: string[]; external: string[]}; client: { name: string; contact: string; industry: string}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Date}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React && React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'} export interface InputProps { className?: string; children?: React && React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: string}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string}; contact: { phone: string; email: string; website: string}; certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string}; team: { lead: string; members: string[]; external: string[]}; client: { name: string; contact: string; industry: string}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Date}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React && React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'} export interface InputProps { className?: string; children?: React && React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
export interface Partner {
  name: string, logo: string,
  website: string, description: string,
  tier: 'platinum' | 'gold' | 'silver' | 'bronze',

}

// Pricing Types
<<<<<<< HEAD
export interface FAQ {


export interface FAQ {;
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
export interface FAQ {
=======


export interface FAQ {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  question: string;
  answer: string;
  category?: string;
}
<<<<<<< HEAD
<<<<<<< HEAD
export interface PricingPlan {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



export interface PricingPlan {;

  id: string;
  name: string;
  price: number;
  period: string;
  features: string[];
  popular?: boolean;
  cta: string;
  href: string;
<<<<<<< HEAD

export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}
export interface PricingPlan {

<<<<<<< HEAD
  id: string;

  id: string;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  currency?: string;
  limitations?: string[];
  description?: string;
}
export interface PricingPlan {

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  name: string;
  price: number;
  period: string;
  features: string[];
  popular?: boolean;
  cta: string;
  href: string;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  name: string;
  href: string;
  children?: NavigationItem[];
<<<<<<< HEAD
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  submenu?: NavigationItem[];
  external?: boolean;
}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


export interface SocialLink {;


  name: string;
  href: string;
  icon: string;

  platform: 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram';
  url: string;
  label: string;

;
<<<<<<< HEAD
currency?: string;
  limitations?: string[];
  description?: string;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

}
export interface NavigationItem {
  currency?: string;
  limitations?: string[];
  description?: string;
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
}
export interface NavigationItem {

export interface NavigationItem {;
  name: string;
  href: string;
  children?: NavigationItem[];
  submenu?: NavigationItem[];
  external?: boolean;
}
export interface SocialLink {

export interface SocialLink {;
=======
  submenu?: NavigationItem[];
  external?: boolean;
}

=======


export interface SocialLink {;


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  name: string;
  href: string;
  icon: string;
  platform?: 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram';
  label?: string;
  url?: string;
  platform: 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram';
  url: string;
  label: string;
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

}


=======

}

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

export interface FooterLink {;
  name: string;
  href: string;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}

export interface FooterSection {;
  title: string;
  links: FooterLink[];
}

export interface HeroSection {;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  title: string;
  subtitle: string;
  cta: {
    primary: {
      text: string;
      href: string;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    secondary: {
      text: string;
      href: string;
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    secondary: {
      text: string;
      href: string;
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
  image?: string;
}
export interface Feature {
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  image?: string;
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  image?: string;
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



export interface Feature {;
<<<<<<< HEAD
<<<<<<< HEAD
  image?: string;
}
export interface Feature {
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  title: string;
  description: string;
  icon: string;
  color: string;
}
<<<<<<< HEAD
<<<<<<< HEAD
export interface Stats {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



export interface Stats {;
<<<<<<< HEAD
<<<<<<< HEAD
export interface Stats {
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  label: string;
  value: string;
  description?: string;
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export interface CaseStudy {


export interface CaseStudy {;
=======
export interface CaseStudy {
=======


export interface CaseStudy {;


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
export interface JobOpening {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



export interface JobOpening {;
<<<<<<< HEAD
<<<<<<< HEAD
  teamSize: number;
  featured?: boolean;
}
export interface JobOpening {
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
export interface NewsItem {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



export interface NewsItem {;
<<<<<<< HEAD
<<<<<<< HEAD
export interface NewsItem {
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
export interface Event {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



export interface Event {;
<<<<<<< HEAD
<<<<<<< HEAD
export interface Event {
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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



export interface Technology {
<<<<<<< HEAD
<<<<<<< HEAD
export interface Partner {;
  name: string;
  logo: string;
  website: string;
  description: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';
}

export interface Award {;
  title: string;
  organization: string;
  year: number;
  description: string;
  image?: string;
}

export interface Certification {;
  name: string;
  issuer: string;
  date: string;
  expiry?: string;
  credentialId?: string;
  image?: string;
}

export interface Technology {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'mobile' | 'ai' | 'devops';
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  yearsOfExperience: number;
  projects: number;
}

<<<<<<< HEAD
<<<<<<< HEAD
export interface ContactFormData {;
=======

export interface ContactFormData {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

export interface ContactFormData {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
<<<<<<< HEAD
export interface NewsletterSubscription {;
=======
export interface NewsletterSubscription {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
export interface NewsletterSubscription {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  email: string;
  interests: string[];
  frequency: 'daily' | 'weekly' | 'monthly';
  subscribed: boolean;
  subscribedAt: string;
}

<<<<<<< HEAD
<<<<<<< HEAD
export interface SearchResult {;
=======

export interface SearchResult {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

export interface SearchResult {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'page' | 'blog' | 'service' | 'case-study' | 'job';
  score: number;
  highlights?: string[];
}

<<<<<<< HEAD
<<<<<<< HEAD
export interface FilterOption {;
=======
export interface FilterOption {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
export interface FilterOption {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  label: string;
  value: string;
  count?: number;
}

<<<<<<< HEAD
<<<<<<< HEAD
export interface SortOption {;
=======
export interface SortOption {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
export interface SortOption {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  label: string;
  value: string;
  direction: 'asc' | 'desc';
}

<<<<<<< HEAD
<<<<<<< HEAD
export interface Pagination {;
=======
export interface Pagination {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
export interface Pagination {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  hasNext: boolean;
  hasPrev: boolean;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  page?: number;
  limit?: number;
  total?: number;
  pages?: number;
<<<<<<< HEAD
<<<<<<< HEAD
}

export interface APIResponse<T> {;
=======
}

export interface APIResponse<T> {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  data: T;
  success: boolean;
  message?: string;
  errors?: string[];
  pagination?: Pagination;
}

<<<<<<< HEAD
export interface ErrorResponse {;
=======
export interface ErrorResponse {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  success: false;
  message: string;
  errors: string[];
  code?: string;
}

<<<<<<< HEAD
export interface SuccessResponse<T> {;
=======
export interface SuccessResponse<T> {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  success: true;
  data: T;
  message?: string;
}

export type Response<T> = SuccessResponse<T> | ErrorResponse;

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
export interface ErrorInfo {
  message: string;
  code?: string;
  details?: any;
  timestamp: string;
  userAgent?: string;
  url?: string;
}
<<<<<<< HEAD
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
// Environment
export interface Environment {;
  NODE_ENV: 'development' | 'production' | 'test';
  NEXT_PUBLIC_API_URL?: string;
  NEXT_PUBLIC_APP_URL?: string;
  NEXT_PUBLIC_GA_ID?: string;
  NEXT_PUBLIC_SENTRY_DSN?: string;
}

// Additional interfaces
export interface User {;
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

export interface Notification {;
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

export interface BaseComponentProps {;
  className?: string;
  children?: React.ReactNode;
  id?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export interface InputProps {;
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

export interface ApiRequest {;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  url: string;
  data?: any;
  params?: Record<string, any>;
  headers?: Record<string, string>;
}

export interface PerformanceMetrics {;
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
}

export interface AccessibilitySettings {;
  highContrast: boolean;
  fontSize: number;
  reducedMotion: boolean;
  screenReader: boolean;
}

export interface UserPreferences {;
  theme: 'light' | 'dark' | 'system';
  language: string;
  accessibility: AccessibilitySettings;
  notifications: {
    email: boolean;
    browser: boolean;
    marketing: boolean;
  };
}

export interface CompanyInfo {;
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

export interface ErrorInfo {;
  message: string;
  code?: string;
  details?: any;
  timestamp: string;
  userAgent?: string;
  url?: string;
}

export interface FormField {;
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

export interface PaginationParams {;
  page: number;
  limit: number;
  sort?: string;
  order?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {;
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
export interface ErrorInfo {
  message: string;
  code?: string;
  details?: any;
  timestamp: string;
  userAgent?: string;
  url?: string;
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Environment

export interface Environment {
  NODE_ENV: 'development' | 'production' | 'test';
  NEXT_PUBLIC_API_URL?: string;
  NEXT_PUBLIC_APP_URL?: string;
  NEXT_PUBLIC_GA_ID?: string;
  NEXT_PUBLIC_SENTRY_DSN?: string;

}


=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Environment;
export interface Environment {
  NODE_ENV: 'development' | 'production' | 'test';
  NEXT_PUBLIC_API_URL?: string;
  NEXT_PUBLIC_APP_URL?: string;
  NEXT_PUBLIC_GA_ID?: string;
  NEXT_PUBLIC_SENTRY_DSN?: string;
}
<<<<<<< HEAD
ursor/fix-lint-push-and-merge-to-main-2c83
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

export interface APIResponse < T> {

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

export interface SuccessResponse < T> {

  success: true;
  data: T;
  message?: string;
}

export type Response<T> = SuccessResponse<T> | ErrorResponse;
<<<<<<< HEAD

export interface ContactInfo {




export type Response<T> = SuccessResponse<T> | ErrorResponse;
export type Response<T> = SuccessResponse<T> | ErrorResponse;
export type Response < T> = SuccessResponse < T> | ErrorResponse;
;
<<<<<<< HEAD
export type Response<T> = SuccessResponse<T> | ErrorResponse;

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
origin/cursor/fix-syntax-push-and-merge-to-main-ba45
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
export type Response<T> = SuccessResponse<T> | ErrorResponse;
<<<<<<< HEAD
origin/main
export type Response<T> = SuccessResponse<T> | ErrorResponse;
export interface ContactInfo {

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
export type Response < T> = SuccessResponse < T> | ErrorResponse;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

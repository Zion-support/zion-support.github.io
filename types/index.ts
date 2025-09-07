
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
// Global types for the Zion Tech Group application

>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
export interface Service {
  "id: string;
  name: string;
  description: string;
  category:
    | 'micro-saas
    | ai-services'
    | 'it-services;
  price: {
    min: number;
    max: number;
    currency: string}
  features": string[];
  technologies: string[];
  deliveryTime: string;
  support: string;
  image?: string;

  popular?: boolean}
export interface ContactForm {
  "name: string;
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
// Type definitions index
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

ursor/automate-test-improve-and-merge-code-646c;
// Type definitions index;
export interface ContactInfo  {phone: string;
// Type definitions index

export interface ContactInfo {
  phone: string;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  email: string;
  address: string;
  site: string;

>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
}


  isLoaded: boolean;
  hasError: boolean;
}



  projectName: string;
  goals: string;
  timeline: string;
  budget: string;
  techStack?: string[];
  talentFilters?: { verifiedOnly?: boolean; regions?: string[] }

=======
>>>>>>> origin/main
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======






>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
// Global types for the Zion Tech Group application

// Contact information
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
export interface ContactInfo {
  ;
}
export interface ContactInfo {

=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
  phone: string;

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  email: string;
  address: string;
  site: string;
}

// Service interfaces

=======



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
  talentFilters?: { verifiedOnly?: boolean; regions?: string[] }
// Global types for the Zion Tech Group application;
export interface ContactInfo {
  // TODO: Implement
  phone: string, email: string,
  address: string, site: string,


export interface Service {


// Core Types;
  // TODO: Implement

// Service interfaces;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> main
export interface Service {
  // TODO: Implement
  id": string;"
  name: string;,
  description: string;
  category:
    | micro-saas
    | 'ai-services
    | 'it-services;
  price: {,
  min: number;
    max: number;,
  currency: string}
  features": string[];"
  technologies: string[];,
  deliveryTime: string;
  support: string;
  image?: string;
  popular?: boolean}
export interface ContactForm {}
export interface Service {
  features: string[];
  technologies: string[];
  delivery_time: string;
  support: string;
  image?: string;
  popular?: boolean;

}
  // TODO: Implement
}
  name": string;"

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
export interface ServiceCategory {
  }
  "title": string;
  "description": string;
  "count": number;
  "features": string[];
  "href": string;
  "color": string;
}
export interface LoadingState {
  }
  "is_loading": boolean;
  error?: string;
export interface FormData  {"name": string;
  }
  "email": string;
  company?: string;
  phone?: string;
  service?: string;
  "message": string;
export interface ContactForm  {"name": string;
  }
  "email": string;
  company?: string;
  phone?: string;
  "service": string;
  budget?: string;
  "message": string;
  "name": string;
  "price": number;
  "duration": string;
  "features": string[];
  icon?: string;
  popular?: boolean;
}

=======


export interface ServiceCategory {

>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
export interface FormData {
  name: string;
>>>>>>> main
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  message: string;

export interface ContactForm {
  name: string;

  name: string;
=======
export interface SEOProps {
  // TODO: Implement
  title?: string;
  description?: string;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  url?: string;
  type?: string;
  noindex?: boolean;

  url?: string;
  type?: string;
  noindex?: boolean;




export interface LoadingState {
  isLoading: boolean, error?: string,

export interface AnimationState {
  isLoaded: boolean, hasError: boolean,

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
export interface ContactInfo {,
  phone: string,
  email: string,
  address: string,
  site: string},
,
export interface Service {,
  title: string,
  description: string,
  features: string[],
  href: string,
  icon: string,
  color: string},
,
export interface ServiceCategory {,
  title: string,
  description: string,
  count: number,
  features: string[],
  href: string,
  color: string},
,
export interface SEOProps {,
  title: string,
  description: string,
  keywords?: string,
  canonical?: string,
  ogImage?: string,
  noindex?: boolean
},
,
export interface LoadingState {,
  isLoading: boolean,
  error?: string
},
,
export interface AnimationState {,
  isLoaded: boolean,
  hasError: boolean},
export interface Service {
  title: string,
  description: string,
  icon: React.ComponentType<{ className?: string }>,
  color: string,
  href?: string
}

export interface Feature {
  icon: React.ComponentType<{ className?: string }>,
  title: string,
  description: string,
  color: string}

export interface Stat {
  number: string,
  label: string,
  icon: React.ComponentType<{ className?: string }>
}

export interface FormData {
  name: string,
  email: string,
  company: string,
  service: string,
  message: string}

export interface FormErrors {
  [key: string]: string
}

// Core Types
export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  site: string;
}export interface AnimationState  {isLoaded: boolean;
  hasError: boolean;
}export interface ProjectBrief  {projectName: string;
  goals: string;
  timeline: string;
  budget: string;
  techStack?: string[];
  talentFilters?: { verifiedOnly?: boolean; regions?: string[] }}// Global types for the Zion Tech Group application;
// Contact information;
export interface ContactInfo  {export interface ContactInfo  {export interface ContactInfo  {phone: string, email: string,address: string, site: string,export interface Service  {// Core Types;
export interface ContactInfo  {ursor/fix-netlify-build-and-merge-to-main-9571;
// Global types for the Zion Tech Group application;
// Core Types;
export interface ContactInfo  {phone: string;
  email: string;
  address: string;
  site: string;
}// Service interfaces;
export interface Service  {id: string;
  name: string;
  description: string;
  category:;
    | micro-saas';
    | 'ai-services;
    | it-services';
  price: {min: number;
    max: number;
    currency: string}"features": string[];
  technologies: string[];
  deliveryTime: string;
  support: string;
  image?: string;
  popular?: boolean}
export interface ContactForm  {name: string;
}export interface ServiceCategory  {title: string;
  description: string;
  count: number;
  features: string[];
  href: string;
  color: string;
}export interface LoadingState  {is_loading: boolean;
  error?: string;
export interface FormData  {name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  message: string;
export interface ContactForm  {name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  budget?: string;
  message: string;

export interface Project {
  id: string;
  title: string;
  description: string;
  status: 'draft | active' | 'completed | cancelled';
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


>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
  progress?: number;
}
export interface AnimationState {
  }
  "is_loaded": boolean;
  "has_error": boolean;
export interface AnimationState  {"isLoaded": boolean;
  }
  "hasError": boolean;
}
export interface FormData {
  }
  ursor/fix-netlify-build-and-merge-to-main-9571;
}
export interface FormData {
  }
  "name": string;
  "email": string;
  company?: string;
  phone?: string;
  "name": string;"
  "email": string;
  company?: string;
  phone?: string;
  "service": string;
  budget?: string;

  position: string;
  content: string;
  rating: number;
  avatar?: string;
  image?: string;
  project?: string;
}

>>>>>>> main
export interface BlogPost {

=======
  id: string;
  title: string;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  tags: string[];

}


>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
export interface Testimonial {
  }
  "id": string;
  "name": string;
  "role": string;
  "id": string;"
  "name": string;
  "position": string;
  "bio": string;
  "image": string;
  "skills": string[];
  linkedin?: string;
  github?: string;

  id: string;
  name: string;
  company: string;
  position: string;
  content: string;

  rating: number;

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
export interface CaseStudy {
  }
  "id": string;

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  // TODO: Implement
  company: string;,
  position: string;
  content: string;,
  rating: number;
  avatar?: string;
  project?: string;

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
}
export interface BlogPost {
  "id": string;"title": string;"
  }
  "excerpt": string;
  "content": string;
  "author": string;
  "publishedAt": string;
  "updatedAt": string;
  "tags": string[];
  "category": string;
  "image": string;
  "slug": string;
  featured?: boolean;
  "readTime": number;
}
export interface TeamMember  {"id": string;
  }
  "name": string;
  "role": string;
  "position": string;
  "bio": string;
  "image": string;
  "skills": string[];
  "social": {linkedin?: string;
    }
    twitter?: string;
    github?: string;

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

// Content interfaces
export interface Testimonial {
  "id": string;
  name: string;
  company: string;
  position: string;
  content: string;
  rating: number;
  avatar?: string;
  image?: string;
  project?: string;
}export interface BlogPost  {id: string;
  image?: string;
  project?: string}
export interface CaseStudy  {id: string;
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
export interface BlogPost  {"id": string;title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  category: string;
  image: string;
  slug: string;
  featured?: boolean;
  readTime: number;
}export interface TeamMember  {id: string;
  name: string;
  role: string;
  position: string;
  bio: string;
  image: string;
  skills: string[];
  social: {linkedin?: string;
    twitter?: string;
    github?: string;
  }}export interface Project  {ursor/fix-netlify-build-and-merge-to-main-9571;
  id: string;
  name: string;
  id: string;
  name: string;position: string;
  bio: string;
  image: string;
  skills: string[];
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
  linkedin?: string;
  github?: string;
  twitter?: string}
  twitter?: string;
}
export interface CompanyInfo  {"name": string;
  }
  "tagline": string;
  "description": string;
  "address": {"street": string;
    }
    "city": string;
    "state": string;
    "zip": string;
    "country": string;
  }"contact": {"phone": string;
    }
    "email": string;
    "website": string;
  }"certifications": string[];
}// Content interfaces;

  data?: T;
  error?: string;
  message?: string}
export interface PaginationParams {
  "page": number;"
  }
  "limit": number;
  sort?: string;

  description?: string;
  keywords?: string;
  ogImage?: string;
  url?: string;
  type?: string;
  noindex?: boolean
}
export interface PerformanceMetrics {
  }
  fcp?: number; // First Contentful Paint;
  lcp?: number; // Largest Contentful Paint;
  fid?: number; // First Input Delay;
  cls?: number; // Cumulative Layout Shift;
  ttfb?: number; // Time to First Byte;
}

  code?: string;
  details?: any;
  "timestamp": string;
  userAgent?: string;
  url?: string
}
export interface LoadingState {
  "isLoading": boolean;"
  }
  error?: string;

  placeholder?: string;
  options?: { "value": string; "label": string}[];
  validation?: {min?: number;
    }
    max?: number;
    pattern?: string;
    message?: string}}

  expires?: Date}
export interface BaseComponentProps  {className?: string;
  }
  children?: React.ReactNode;
  id?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;

export interface InputProps  {className?: string;
  }
  children?: React.ReactNode;
  id?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;

  placeholder?: string;
  value?: string;
  onChange?: ("value": string) => void;"
  error?: string;
  required?: boolean}
// API types;

  data?: any;
  params?: Record<string, any>;
  headers?: Record<string, string>}
// Environment types;
  required?: boolean;
}"image": string;
  "technologies": string[];
  liveUrl?: string;
  githubUrl?: string;

  expires?: Date}
export interface BaseComponentProps  {className?: string;
  }
  children?: React.ReactNode;
  id?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;

export interface InputProps  {className?: string;
  }
  children?: React.ReactNode;
  id?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;

}
export interface CompanyInfo {
  }
  "name": string;
  "href": string;
}
export interface FooterSection {
  }
  "title": string;
  "links": FooterLink[];
}
export interface HeroSection {}}
export interface FooterSection {
  }
  "title": string;
  "links": FooterLink[];
}
export interface HeroSection  {ursor/fix-website-loading-errors-and-merge-6662;
}
export interface HeroSection  {"title": string;
  }
  "subtitle": string;
  "cta": {"primary": {"text": string;
      }
      "href": string;}
    "secondary": {"text": string;
      }
      "href": string;
    }
  }}
    "secondary": {"text": string;
      }
      "href": string;
    }
export interface CompanyInfo  {"name": string;
  }
  "tagline": string;
  "description": string;
  "address": {"street": string;
    }
    "city": string;
    "state": string;
    "zip": string;
    "country": string;
  }
  "contact": {"phone": string;
    }
    "email": string;
    "website": string;
  }
  "certifications": string[];
}}
  "certifications": string[];
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

export interface Service { id: string; name: string; description: string; category: | micro-saas' | 'ai-services | it-services'; price: { min: number; max: number; currency: string} } features: 'string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean; } export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | email' | 'phone | both'} } export interface TeamMember { id: 'string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string; } } export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string;' } } export interface CaseStudy { id: 'string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean; } } export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number;' } } export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month | year' | 'one-time; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} } export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string;' } export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc | desc'} } export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} } export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} } export interface AccessibilitySettings { highContrast: 'boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean; } } export interface UserPreferences { theme: | light' | 'dark | system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean} }} export interface NavigationItem { name: 'string; href: string; submenu?: NavigationItem[]; external?: boolean; } } export interface SocialLink { platform: | linkedin' | 'twitter | github' | 'facebook | instagram'; url: string; label: string} } export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string} } contact: { phone: string; email: string; website: string} certifications: 'string[]; } export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string;' } } export interface LoadingState { isLoading: 'boolean; error?: string; progress?: number; } } export interface FormField { name: string; label: string; type: | text' | 'email | tel' | 'textarea | select' | 'checkbox | radio'; required: boolean; placeholder?: string} options?: { value: 'string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: planning' | 'in-progress | completed' | 'on-hold | cancelled'; priority: 'low | medium' | 'high | critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string} } team: { lead: string; members: string[]; external: string[]} client: { name: string; contact: string; industry: string} deliverables: { name: string; description: string; status: 'pending | in-progress' | 'completed | review'; dueDate: Date}[]; risks: { description: string; probability: 'low | medium' | 'high; impact: low' | 'medium | high'; mitigation: string}[]; dependencies: { project: string; type: 'blocking | influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical | process' | 'communication | management'; impact: 'positive | negative' | 'neutral}[]} export interface User { id: string; email: string; name: string; role: admin' | 'manager | developer' | 'client | guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string} } preferences: { theme: 'light | dark' | 'auto; language: string; notifications: { email: boolean; push: boolean; sms: boolean}} activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]} subscription: { plan: free' | 'basic | premium' | 'enterprise; status: active' | 'inactive | cancelled' | 'expired; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: info' | 'success | warning' | 'error; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string} } category: system' | 'project | team' | 'client | billing'; priority: 'low | medium' | 'high; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: button' | 'submit | reset'} } export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text | email' | 'password | tel' | 'url | number'; placeholder?: string; value?: string; onChange?: (value: 'string) => void; error?: string; required?: boolean; } } export interface ApiRequest { method: | GET' | 'POST | PUT' | 'DELETE | PATCH'; url: string; data?: any; params?: Record<string,any> headers?: Record<string,string> } } export interface Environment { NODE_ENV: | 'development | production' | 'test; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string} }

export interface Service { id: string; name: string; description: string; category: | micro-saas' | 'ai-services | it-services'; price: { min: number; max: number; currency: string} features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email | phone' | 'both} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | month' | 'year | one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc | desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light | dark' | 'system; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | linkedin' | 'twitter | github' | 'facebook | instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string} contact: { phone: string; email: string; website: string} certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text | email' | 'tel | textarea' | 'select | checkbox' | 'radio; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: planning' | 'in-progress | completed' | 'on-hold | cancelled'; priority: 'low | medium' | 'high | critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string} team: { lead: string; members: string[]; external: string[]} client: { name: string; contact: string; industry: string} deliverables: { name: string; description: string; status: 'pending | in-progress' | 'completed | review'; dueDate: Date}[]; risks: { description: string; probability: 'low | medium' | 'high; impact: low' | 'medium | high'; mitigation: string}[]; dependencies: { project: string; type: 'blocking | influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical | process' | 'communication | management'; impact: 'positive | negative' | 'neutral}[]} export interface User { id: string; email: string; name: string; role: admin' | 'manager | developer' | 'client | guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string} preferences: { theme: 'light | dark' | 'auto; language: string; notifications: { email: boolean; push: boolean; sms: boolean}} activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]} subscription: { plan: free' | 'basic | premium' | 'enterprise; status: active' | 'inactive | cancelled' | 'expired; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: info' | 'success | warning' | 'error; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string} category: system' | 'project | team' | 'client | billing'; priority: 'low | medium' | 'high; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: button' | 'submit | reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text | email' | 'password | tel' | 'url | number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET | POST' | 'PUT | DELETE' | 'PATCH; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | development' | 'production | test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}








export type Response < T> = SuccessResponse < T> | ErrorResponse;
  NEXT_PUBLIC_SENTRY_DSN?: string}







  teamSize: number;
  featured: boolean;
  image?: string;
  createdAt: string;
  updatedAt: string;
}
  NEXT_PUBLIC_SENTRY_DSN?: string}'
export interface Service { id: string; name: string; description: string; category: | micro-saas | 'ai-services' | it-services; price: { min: number; max: number; currency: string} } features: 'string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean;' } export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | email | 'phone' | both} } export interface TeamMember { id: 'string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string;' } } export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string; } } export interface CaseStudy { id: 'string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean;' } } export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number; } } export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | year | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} } export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string; } export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | desc} } export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} } export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} } export interface AccessibilitySettings { highContrast: 'boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean;' } } export interface UserPreferences { theme: | light | 'dark' | system; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean} }} export interface NavigationItem { name: 'string; href: string; submenu?: NavigationItem[]; external?: boolean;' } } export interface SocialLink { platform: | linkedin | 'twitter' | github | 'facebook' | instagram; url: string; label: string} } export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string} } contact: { phone: string; email: string; website: string} certifications: 'string[];' } export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string; } } export interface LoadingState { isLoading: 'boolean; error?: string; progress?: number;' } } export interface FormField { name: string; label: string; type: | text | 'email' | tel | 'textarea' | select | 'checkbox' | radio; required: boolean; placeholder?: string} options?: { value: 'string; label: string' }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: planning | 'in-progress' | completed | 'on-hold' | cancelled; priority: 'low' | medium | 'high' | critical; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string} } team: { lead: string; members: string[]; external: string[]} client: { name: string; contact: string; industry: string} deliverables: { name: string; description: string; status: 'pending' | in-progress | 'completed' | review; dueDate: Date}[]; risks: { description: string; probability: 'low' | medium | 'high'; impact: low | 'medium' | high; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | influencing; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | process | 'communication' | management; impact: 'positive' | negative | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: admin | 'manager' | developer | 'client' | guest; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string} } preferences: { theme: 'light' | dark | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}} activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]} subscription: { plan: free | 'basic' | premium | 'enterprise'; status: active | 'inactive' | cancelled | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: info | 'success' | warning | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string} } category: system | 'project' | team | 'client' | billing; priority: 'low' | medium | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: button | 'submit' | reset} } export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | email | 'password' | tel | 'url' | number; placeholder?: string; value?: string; onChange?: (value: 'string) => void; error?: string; required?: boolean;' } } export interface ApiRequest { method: | GET | 'POST' | PUT | 'DELETE' | PATCH; url: string; data?: any; params?: Record<string,any> headers?: Record<string,string> } } export interface Environment { NODE_ENV: | 'development' | production | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string} }
</T>
export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | ai-services | 'it-services'; price: { min: number; max: number; currency: string} features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | email | 'phone' | both} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | year | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: asc | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | light | 'dark' | system; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | twitter | 'github' | facebook | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string} contact: { phone: string; email: string; website: string} certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | text | 'email' | tel | 'textarea' | select | 'checkbox' | radio; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | in-progress | 'completed' | on-hold | 'cancelled'; priority: low | 'medium' | high | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string} team: { lead: string; members: string[]; external: string[]} client: { name: string; contact: string; industry: string} deliverables: { name: string; description: string; status: pending | 'in-progress' | completed | 'review'; dueDate: Date}[]; risks: { description: string; probability: low | 'medium' | high; impact: 'low' | medium | 'high'; mitigation: string}[]; dependencies: { project: string; type: blocking | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: technical | 'process' | communication | 'management'; impact: positive | 'negative' | neutral}[]} export interface User { id: string; email: string; name: string; role: 'admin' | manager | 'developer' | client | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string} preferences: { theme: light | 'dark' | auto; language: string; notifications: { email: boolean; push: boolean; sms: boolean}} activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]} subscription: { plan: 'free' | basic | 'premium' | enterprise; status: 'active' | inactive | 'cancelled' | expired; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | success | 'warning' | error; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string} category: 'system' | project | 'team' | client | 'billing'; priority: low | 'medium' | high; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | submit | 'reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: text | 'email' | password | 'tel' | url | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | GET | 'POST' | PUT | 'DELETE' | PATCH; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | production | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
</T>
export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | ai-services | 'it-services'; price: { min: number; max: number; currency: string} features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | email | 'phone' | both} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | year | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: asc | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | light | 'dark' | system; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | twitter | 'github' | facebook | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string} contact: { phone: string; email: string; website: string} certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | text | 'email' | tel | 'textarea' | select | 'checkbox' | radio; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | in-progress | 'completed' | on-hold | 'cancelled'; priority: low | 'medium' | high | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string} team: { lead: string; members: string[]; external: string[]} client: { name: string; contact: string; industry: string} deliverables: { name: string; description: string; status: pending | 'in-progress' | completed | 'review'; dueDate: Date}[]; risks: { description: string; probability: low | 'medium' | high; impact: 'low' | medium | 'high'; mitigation: string}[]; dependencies: { project: string; type: blocking | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: technical | 'process' | communication | 'management'; impact: positive | 'negative' | neutral}[]} export interface User { id: string; email: string; name: string; role: 'admin' | manager | 'developer' | client | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string} preferences: { theme: light | 'dark' | auto; language: string; notifications: { email: boolean; push: boolean; sms: boolean}} activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]} subscription: { plan: 'free' | basic | 'premium' | enterprise; status: 'active' | inactive | 'cancelled' | expired; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | success | 'warning' | error; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string} category: 'system' | project | 'team' | client | 'billing'; priority: low | 'medium' | high; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | submit | 'reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: text | 'email' | password | 'tel' | url | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | GET | 'POST' | PUT | 'DELETE' | PATCH; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | production | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
</T>
export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | ai-services | 'it-services'; price: { min: number; max: number; currency: string} features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | email | 'phone' | both} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | year | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: asc | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | light | 'dark' | system; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | twitter | 'github' | facebook | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string} contact: { phone: string; email: string; website: string} certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | text | 'email' | tel | 'textarea' | select | 'checkbox' | radio; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | in-progress | 'completed' | on-hold | 'cancelled'; priority: low | 'medium' | high | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string} team: { lead: string; members: string[]; external: string[]} client: { name: string; contact: string; industry: string} deliverables: { name: string; description: string; status: pending | 'in-progress' | completed | 'review'; dueDate: Date}[]; risks: { description: string; probability: low | 'medium' | high; impact: 'low' | medium | 'high'; mitigation: string}[]; dependencies: { project: string; type: blocking | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: technical | 'process' | communication | 'management'; impact: positive | 'negative' | neutral}[]} export interface User { id: string; email: string; name: string; role: 'admin' | manager | 'developer' | client | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string} preferences: { theme: light | 'dark' | auto; language: string; notifications: { email: boolean; push: boolean; sms: boolean}} activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]} subscription: { plan: 'free' | basic | 'premium' | enterprise; status: 'active' | inactive | 'cancelled' | expired; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | success | 'warning' | error; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string} category: 'system' | project | 'team' | client | 'billing'; priority: low | 'medium' | high; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | submit | 'reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: text | 'email' | password | 'tel' | url | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | GET | 'POST' | PUT | 'DELETE' | PATCH; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | production | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
</T>
export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | ai-services | 'it-services'; price: { min: number; max: number; currency: string} features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | email | 'phone' | both} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | year | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: asc | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | light | 'dark' | system; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | twitter | 'github' | facebook | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string} contact: { phone: string; email: string; website: string} certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | text | 'email' | tel | 'textarea' | select | 'checkbox' | radio; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | in-progress | 'completed' | on-hold | 'cancelled'; priority: low | 'medium' | high | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string} team: { lead: string; members: string[]; external: string[]} client: { name: string; contact: string; industry: string} deliverables: { name: string; description: string; status: pending | 'in-progress' | completed | 'review'; dueDate: Date}[]; risks: { description: string; probability: low | 'medium' | high; impact: 'low' | medium | 'high'; mitigation: string}[]; dependencies: { project: string; type: blocking | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: technical | 'process' | communication | 'management'; impact: positive | 'negative' | neutral}[]} export interface User { id: string; email: string; name: string; role: 'admin' | manager | 'developer' | client | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string} preferences: { theme: light | 'dark' | auto; language: string; notifications: { email: boolean; push: boolean; sms: boolean}} activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]} subscription: { plan: 'free' | basic | 'premium' | enterprise; status: 'active' | inactive | 'cancelled' | expired; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | success | 'warning' | error; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string} category: 'system' | project | 'team' | client | 'billing'; priority: low | 'medium' | high; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | submit | 'reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: text | 'email' | password | 'tel' | url | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | GET | 'POST' | PUT | 'DELETE' | PATCH; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | production | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
</T>
export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | ai-services | 'it-services'; price: { min: number; max: number; currency: string} features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | email | 'phone' | both} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | year | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: asc | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | light | 'dark' | system; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | twitter | 'github' | facebook | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string} contact: { phone: string; email: string; website: string} certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | text | 'email' | tel | 'textarea' | select | 'checkbox' | radio; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | in-progress | 'completed' | on-hold | 'cancelled'; priority: low | 'medium' | high | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string} team: { lead: string; members: string[]; external: string[]} client: { name: string; contact: string; industry: string} deliverables: { name: string; description: string; status: pending | 'in-progress' | completed | 'review'; dueDate: Date}[]; risks: { description: string; probability: low | 'medium' | high; impact: 'low' | medium | 'high'; mitigation: string}[]; dependencies: { project: string; type: blocking | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: technical | 'process' | communication | 'management'; impact: positive | 'negative' | neutral}[]} export interface User { id: string; email: string; name: string; role: 'admin' | manager | 'developer' | client | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string} preferences: { theme: light | 'dark' | auto; language: string; notifications: { email: boolean; push: boolean; sms: boolean}} activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]} subscription: { plan: 'free' | basic | 'premium' | enterprise; status: 'active' | inactive | 'cancelled' | expired; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | success | 'warning' | error; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string} category: 'system' | project | 'team' | client | 'billing'; priority: low | 'medium' | high; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | submit | 'reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: text | 'email' | password | 'tel' | url | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | GET | 'POST' | PUT | 'DELETE' | PATCH; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | production | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
</T>
export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | ai-services | 'it-services'; price: { min: number; max: number; currency: string} features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | email | 'phone' | both} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | year | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: asc | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | light | 'dark' | system; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | twitter | 'github' | facebook | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string} contact: { phone: string; email: string; website: string} certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | text | 'email' | tel | 'textarea' | select | 'checkbox' | radio; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | in-progress | 'completed' | on-hold | 'cancelled'; priority: low | 'medium' | high | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string} team: { lead: string; members: string[]; external: string[]} client: { name: string; contact: string; industry: string} deliverables: { name: string; description: string; status: pending | 'in-progress' | completed | 'review'; dueDate: Date}[]; risks: { description: string; probability: low | 'medium' | high; impact: 'low' | medium | 'high'; mitigation: string}[]; dependencies: { project: string; type: blocking | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: technical | 'process' | communication | 'management'; impact: positive | 'negative' | neutral}[]} export interface User { id: string; email: string; name: string; role: 'admin' | manager | 'developer' | client | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string} preferences: { theme: light | 'dark' | auto; language: string; notifications: { email: boolean; push: boolean; sms: boolean}} activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]} subscription: { plan: 'free' | basic | 'premium' | enterprise; status: 'active' | inactive | 'cancelled' | expired; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | success | 'warning' | error; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string} category: 'system' | project | 'team' | client | 'billing'; priority: low | 'medium' | high; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | submit | 'reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: text | 'email' | password | 'tel' | url | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | GET | 'POST' | PUT | 'DELETE' | PATCH; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | production | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
</T>
export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | ai-services | 'it-services'; price: { min: number; max: number; currency: string} features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | email | 'phone' | both} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | year | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: asc | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | light | 'dark' | system; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | twitter | 'github' | facebook | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string} contact: { phone: string; email: string; website: string} certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | text | 'email' | tel | 'textarea' | select | 'checkbox' | radio; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | in-progress | 'completed' | on-hold | 'cancelled'; priority: low | 'medium' | high | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string} team: { lead: string; members: string[]; external: string[]} client: { name: string; contact: string; industry: string} deliverables: { name: string; description: string; status: pending | 'in-progress' | completed | 'review'; dueDate: Date}[]; risks: { description: string; probability: low | 'medium' | high; impact: 'low' | medium | 'high'; mitigation: string}[]; dependencies: { project: string; type: blocking | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: technical | 'process' | communication | 'management'; impact: positive | 'negative' | neutral}[]} export interface User { id: string; email: string; name: string; role: 'admin' | manager | 'developer' | client | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string} preferences: { theme: light | 'dark' | auto; language: string; notifications: { email: boolean; push: boolean; sms: boolean}} activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]} subscription: { plan: 'free' | basic | 'premium' | enterprise; status: 'active' | inactive | 'cancelled' | expired; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | success | 'warning' | error; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string} category: 'system' | project | 'team' | client | 'billing'; priority: low | 'medium' | high; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | submit | 'reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: text | 'email' | password | 'tel' | url | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | GET | 'POST' | PUT | 'DELETE' | PATCH; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | production | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
</T>

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
  }
}

// Technology interfaces
export interface Technology {
  name: string;
  category: 'frontend' | backend | 'database' | cloud | 'mobile' | ai | 'devops';
  proficiency: beginner | 'intermediate' | advanced | 'expert';
  yearsOfExperience: number;
  projects: number;
}

// Partner interfaces
export interface Partner {
  name: string;
  logo: string;
  website: string;
  description: string;

}

export interface Award {
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
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
}export interface JobOpening  {id: string;
  title: string;
  department: string;
  location: string;
  type: full-time | 'part-time' | contract;
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  salary?: {min: number;
    max: number;
    currency: string;
  }
}export interface NewsItem  {id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image?: string;

>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
export interface Event {
  id: string;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: 'webinar' | workshop | 'conference' | meetup;
  registrationUrl?: string;
  image?: string;
}export interface Technology  {name: string;
  category: 'frontend' | backend | 'database' | cloud | 'mobile' | ai | 'devops';
  proficiency: beginner | 'intermediate' | advanced | 'expert';
  yearsOfExperience: number;
  projects: number;
}export interface ContactFormData  {name: string;
  email: string;
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
  company?: string;
  phone?: string;
  "service": string;
  "message": string;
  }
  "certifications": string[];
}
export interface ErrorInfo {
  }
  "message": string;
  code?: string;
  details?: any;
  "timestamp": string;
  userAgent?: string;
  url?: string;
}
export interface FormField {

  placeholder?: string;
  validation?: {min?: number;
    }
    max?: number;
    pattern?: string;
    message?: string;

  category?: string;
}
export interface PricingPlan {
  }
  "id": string;
  "name": string;
  "price": number;
  "period": string;
  "features": string[];
  popular?: boolean;
  "cta": string;
  "href": string;
}
export interface FooterLink {
  }
  "name": string;
  "href": string;
}
export interface FooterSection {
  }
  "title": string;
  "links": FooterLink[];
}
export interface HeroSection  {"title": string;
  }
  "subtitle": string;
  "cta": {"primary": {"text": string;
      }
      "href": string;
    }"secondary": {"text": string;
      }
      "href": string;
    }}image?: string;
}
export interface Feature {
  }
  "title": string;
  "description": string;
  "icon": string;
  "color": string;
}
export interface Stats {
  }
  "label": string;
  "value": string;
  description?: string;

  company?: string;
  phone?: string;
  "service": string;
  "message": string;budget?: string;
  timeline?: string;
  source?: string;

  highlights?: string[];
}
export interface FilterOption {
  }
  "label": string;
  "value": string;
  count?: number;

  limit?: number;
  total?: number;
  pages?: number;
}
export interface APIResponse<T>  {"data": T;
  }
  "success": boolean;
  message?: string;
  errors?: string[];
  pagination?: Pagination;
}
export interface ErrorResponse {
  }
  "success": false;
  "message": string;
  "errors": string[];
  code?: string;
}
export interface SuccessResponse<T>  {"success": true;
  }
  "data": T;
  message?: string;
}
export type Response<T> = SuccessResponse<T> | ErrorResponse;
export interface ErrorInfo {
  }
  "message": string;
  code?: string;
  details?: any;
  "timestamp": string;
  user_agent?: string;
  url?: string;
}

  placeholder?: string;
  validation?: {min?: number;
    }
    max?: number;
    pattern?: string;
    message?: string;
  }
}ursor/fix-netlify-build-and-merge-to-main-9571;
// Environment;
  options?: { "value": string; "label": string}[];
  validation?: {
    }
    min?: number;
    max?: number;
    pattern?: string;
    message?: string;
  }
}
// Environment,
data?: any;
  params?: Record<string, any>;
  headers?: Record<string, string>}
// Environment types;

}
export interface Testimonial {
  }
  "id": string; "name": string; "company": string; "position": string; "content": string; "rating": number; image?: string; project?: string
}
export interface CaseStudy {
  }
  "id": string; "title": string; "client": string; "industry": string; "challenge": string; "solution": string; "results": string[]; "technologies": string[]; "duration": string; "teamSize": number; "image": string; featured?: boolean
}
export interface BlogPost {
  }
  "id": string; "title": string; "excerpt": string; "content": string; "author": string; "publishedAt": string; "updatedAt": string; "tags": string[]; "category": string; "image": string; featured?: boolean; "readTime": number}
export interface PricingTier {
  }
  "id": string; "name": string; "price": number; "currency": string; "period": | 'month' | 'year' | 'one-time'; "features": string[]; limitations?: string[]; popular?: boolean; "cta": string; "description": string}'
export interface ApiResponse<T> { "success": boolean; data?: T; error?: string; message?: string}
export interface PaginationParams {
  }
  "page": number; "limit": number; sort?: string; order?: 'asc' | 'desc''
}
export interface PaginatedResponse<T> { "data": T[]; "pagination": { "page": number; "limit": number; "total": number; "pages": number; "hasNext": boolean; "hasPrev": boolean}
export interface SEOProps {
  }
  title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean
}
export interface PerformanceMetrics {
  }
  fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number
}
export interface AccessibilitySettings {
  }
  "highContrast": boolean; "fontSize": number; "reducedMotion": boolean; "screenReader": boolean}
export interface UserPreferences { "theme": | 'light' | 'dark' | 'system'; "language": string; "accessibility": AccessibilitySettings; "notifications": { "email": boolean; "browser": boolean; "marketing": boolean}'
export interface NavigationItem {
  }
  "name": string; "href": string; submenu?: NavigationItem[]; external?: boolean
}
export interface SocialLink {
  }
  "platform": | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; "url": string; "label": string}'
export interface CompanyInfo { "name": string; "tagline": string; "description": string; "address": { "street": string; "city": string; "state": string; "zip": string; "country": strin}"contact": { "phone": string; "email": string; "website": string}"certifications": string[}
export interface ErrorInfo {
  }
  "message": string; code?: string; details?: any; "timestamp": string; userAgent?: string; url?: string
}
export interface LoadingState {
  }
  "isLoading": boolean; error?: string; progress?: number
}
export interface FormField { "name": string; "label": string; "type": | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; "required": boolean; placeholder?: string; options?: { "value": string; "label": string}[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}}'
export interface Project { "id": string; "name": string; "description": string; "status": 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; "priority": 'low' | 'medium' | 'high' | 'critical'; "startDate": Date; "endDate": Date; "budget": { "allocated": number; "spent": number; "currency": strin}"team": { "lead": string; "members": string[]; "external": string[}"client": { "name": string; "contact": string; "industry": strin}"deliverables": { "name": string; "description": string; "status": 'pending' | 'in-progress' | 'completed' | 'review'; "dueDate": Dat}[]; "risks": { "description": string; "probability": 'low' | 'medium' | 'high'; "impact": 'low' | 'medium' | 'high'; "mitigation": strin}[]; "dependencies": { "project": string; "type": 'blocking' | 'influencing'; "description": strin}[]; "metrics": { "name": string; "value": number; "unit": string; "target": numbe}[]; "lessons": { "learned": string; "category": 'technical' | 'process' | 'communication' | 'management'; "impact": 'positive' | 'negative' | 'neutral'}[}'
export interface User { "id": string; "email": string; "name": string; "role": 'admin' | 'manager' | 'developer' | 'client' | 'guest'; "permissions": string[]; "profile": { avatar?: string; bio?: string; "skills": string[]; "experience": number; "location": string; "timezone": strin}"preferences": { "theme": 'light' | 'dark' | 'auto'; "language": string; "notifications": { "email": boolean; "push": boolean; "sms": boolean}"activity": { "lastLogin": Date; "loginCount": number; "projects": string[]; "tasks": string[}"subscription": { "plan": 'free' | 'basic' | 'premium' | 'enterprise'; "status": 'active' | 'inactive' | 'cancelled' | 'expired'; "startDate": Date; "endDate": Date; "features": string[]}'
export interface Notification { "id": string; "type": 'info' | 'success' | 'warning' | 'error'; "title": string; "message": string; "timestamp": Date; "read": boolean; action?: { "label": string; "url": strin}"category": 'system' | 'project' | 'team' | 'client' | 'billing'; "priority": 'low' | 'medium' | 'high'; expires?: Date}'
export interface BaseComponentProps {
  }
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset''
}
export interface InputProps {
  }
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: ("value": string) => void; error?: string; required?: boolean'
}
export interface ApiRequest {
  }
  "method": | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; "url": string; data?: any; params?: Record<string,any>; headers?: Record<string,string>'
}

export interface Environment {
  NODE_ENV: development | 'production' | test;
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
  NEXT_PUBLIC_API_URL?: string;
  NEXT_PUBLIC_APP_URL?: string;
  NEXT_PUBLIC_GA_ID?: string;
  NEXT_PUBLIC_SENTRY_DSN?: string;

}
export interface Award {
  }
  "title": string;
export interface Award {
  }
  "title": string;
  "organization": string;
  "year": number;
  "description": string;
  image?: string;
}
export interface Certification {
  }
  "name": string;
export interface Certification {
  }
  "name": string;
  "issuer": string;
  "date": string;
  expiry?: string;
  credential_id?: string;
  image?: string;
}

}
export interface ContactFormData {
  }
  "name": string;
  "email": string;
  company?: string;
  phone?: string;
  "service": string;
  "message": string;
  budget?: string;
  timeline?: string;
  source?: string;
}

=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  data?: any;
  params?: Record<string, any>;
  headers?: Record<string, string>}
// Environment types

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export interface Environment {

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  "NODE_ENV": | 'development'
    | production
    | 'test';
  NEXT_PUBLIC_API_URL?: string;
  NEXT_PUBLIC_APP_URL?: string;
  NEXT_PUBLIC_GA_ID?: string;


export interface Service { id: string; name: string; description: string; category: | micro-saas | 'ai-services' | it-services; price: { min: number; max: number; currency: string} features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | phone | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | month | 'year' | one-time; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | desc} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | dark | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | linkedin | 'twitter' | github | 'facebook' | instagram; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string} contact: { phone: string; email: string; website: string} certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | email | 'tel' | textarea | 'select' | checkbox | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: planning | 'in-progress' | completed | 'on-hold' | cancelled; priority: 'low' | medium | 'high' | critical; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string} team: { lead: string; members: string[]; external: string[]} client: { name: string; contact: string; industry: string} deliverables: { name: string; description: string; status: 'pending' | in-progress | 'completed' | review; dueDate: Date}[]; risks: { description: string; probability: 'low' | medium | 'high'; impact: low | 'medium' | high; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | influencing; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | process | 'communication' | management; impact: 'positive' | negative | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: admin | 'manager' | developer | 'client' | guest; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string} preferences: { theme: 'light' | dark | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}} activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]} subscription: { plan: free | 'basic' | premium | 'enterprise'; status: active | 'inactive' | cancelled | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: info | 'success' | warning | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string} category: system | 'project' | team | 'client' | billing; priority: 'low' | medium | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: button | 'submit' | reset} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | email | 'password' | tel | 'url' | number; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | POST | 'PUT' | DELETE | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | development | 'production' | test; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | ai-services | 'it-services'; price: { min: number; max: number; currency: string} features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | email | 'phone' | both} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | year | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: asc | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | light | 'dark' | system; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | twitter | 'github' | facebook | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string} contact: { phone: string; email: string; website: string} certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | text | 'email' | tel | 'textarea' | select | 'checkbox' | radio; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | in-progress | 'completed' | on-hold | 'cancelled'; priority: low | 'medium' | high | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string} team: { lead: string; members: string[]; external: string[]} client: { name: string; contact: string; industry: string} deliverables: { name: string; description: string; status: pending | 'in-progress' | completed | 'review'; dueDate: Date}[]; risks: { description: string; probability: low | 'medium' | high; impact: 'low' | medium | 'high'; mitigation: string}[]; dependencies: { project: string; type: blocking | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: technical | 'process' | communication | 'management'; impact: positive | 'negative' | neutral}[]} export interface User { id: string; email: string; name: string; role: 'admin' | manager | 'developer' | client | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string} preferences: { theme: light | 'dark' | auto; language: string; notifications: { email: boolean; push: boolean; sms: boolean}} activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]} subscription: { plan: 'free' | basic | 'premium' | enterprise; status: 'active' | inactive | 'cancelled' | expired; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | success | 'warning' | error; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string} category: 'system' | project | 'team' | client | 'billing'; priority: low | 'medium' | high; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | submit | 'reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: text | 'email' | password | 'tel' | url | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | GET | 'POST' | PUT | 'DELETE' | PATCH; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | production | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
export interface Service { id: string; name: string; description: string; category: | micro-saas | 'ai-services' | it-services; price: { min: number; max: number; currency: string} features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | phone | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | month | 'year' | one-time; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | desc} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | dark | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | linkedin | 'twitter' | github | 'facebook' | instagram; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string} contact: { phone: string; email: string; website: string} certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | email | 'tel' | textarea | 'select' | checkbox | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: planning | 'in-progress' | completed | 'on-hold' | cancelled; priority: 'low' | medium | 'high' | critical; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string} team: { lead: string; members: string[]; external: string[]} client: { name: string; contact: string; industry: string} deliverables: { name: string; description: string; status: 'pending' | in-progress | 'completed' | review; dueDate: Date}[]; risks: { description: string; probability: 'low' | medium | 'high'; impact: low | 'medium' | high; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | influencing; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | process | 'communication' | management; impact: 'positive' | negative | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: admin | 'manager' | developer | 'client' | guest; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string} preferences: { theme: 'light' | dark | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}} activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]} subscription: { plan: free | 'basic' | premium | 'enterprise'; status: active | 'inactive' | cancelled | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: info | 'success' | warning | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string} category: system | 'project' | team | 'client' | billing; priority: 'low' | medium | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: button | 'submit' | reset} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | email | 'password' | tel | 'url' | number; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | POST | 'PUT' | DELETE | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | development | 'production' | test; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | ai-services | 'it-services'; price: { min: number; max: number; currency: string} features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | email | 'phone' | both} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | year | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: asc | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | light | 'dark' | system; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | twitter | 'github' | facebook | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string} contact: { phone: string; email: string; website: string} certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | text | 'email' | tel | 'textarea' | select | 'checkbox' | radio; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | in-progress | 'completed' | on-hold | 'cancelled'; priority: low | 'medium' | high | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string} team: { lead: string; members: string[]; external: string[]} client: { name: string; contact: string; industry: string} deliverables: { name: string; description: string; status: pending | 'in-progress' | completed | 'review'; dueDate: Date}[]; risks: { description: string; probability: low | 'medium' | high; impact: 'low' | medium | 'high'; mitigation: string}[]; dependencies: { project: string; type: blocking | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: technical | 'process' | communication | 'management'; impact: positive | 'negative' | neutral}[]} export interface User { id: string; email: string; name: string; role: 'admin' | manager | 'developer' | client | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string} preferences: { theme: light | 'dark' | auto; language: string; notifications: { email: boolean; push: boolean; sms: boolean}} activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]} subscription: { plan: 'free' | basic | 'premium' | enterprise; status: 'active' | inactive | 'cancelled' | expired; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | success | 'warning' | error; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string} category: 'system' | project | 'team' | client | 'billing'; priority: low | 'medium' | high; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | submit | 'reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: text | 'email' | password | 'tel' | url | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | GET | 'POST' | PUT | 'DELETE' | PATCH; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | production | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}

=======
>>>>>>> main
>>>>>>> main
export interface Service { id: string; name: string; description: string; category: | micro-saas | 'ai-services' | it-services; price: { min: number; max: number; currency: string} features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | phone | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | month | 'year' | one-time; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | desc} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | dark | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | linkedin | 'twitter' | github | 'facebook' | instagram; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string} contact: { phone: string; email: string; website: string} certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | email | 'tel' | textarea | 'select' | checkbox | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: planning | 'in-progress' | completed | 'on-hold' | cancelled; priority: 'low' | medium | 'high' | critical; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string} team: { lead: string; members: string[]; external: string[]} client: { name: string; contact: string; industry: string} deliverables: { name: string; description: string; status: 'pending' | in-progress | 'completed' | review; dueDate: Date}[]; risks: { description: string; probability: 'low' | medium | 'high'; impact: low | 'medium' | high; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | influencing; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | process | 'communication' | management; impact: 'positive' | negative | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: admin | 'manager' | developer | 'client' | guest; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string} preferences: { theme: 'light' | dark | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}} activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]} subscription: { plan: free | 'basic' | premium | 'enterprise'; status: active | 'inactive' | cancelled | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: info | 'success' | warning | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string} category: system | 'project' | team | 'client' | billing; priority: 'low' | medium | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: button | 'submit' | reset} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | email | 'password' | tel | 'url' | number; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | POST | 'PUT' | DELETE | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | development | 'production' | test; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
>>>>>>> main
>>>>>>> origin/main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | ai-services | 'it-services'; price: { min: number; max: number; currency: string} features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | email | 'phone' | both} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | year | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: asc | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | light | 'dark' | system; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | twitter | 'github' | facebook | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string} contact: { phone: string; email: string; website: string} certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | text | 'email' | tel | 'textarea' | select | 'checkbox' | radio; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | in-progress | 'completed' | on-hold | 'cancelled'; priority: low | 'medium' | high | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string} team: { lead: string; members: string[]; external: string[]} client: { name: string; contact: string; industry: string} deliverables: { name: string; description: string; status: pending | 'in-progress' | completed | 'review'; dueDate: Date}[]; risks: { description: string; probability: low | 'medium' | high; impact: 'low' | medium | 'high'; mitigation: string}[]; dependencies: { project: string; type: blocking | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: technical | 'process' | communication | 'management'; impact: positive | 'negative' | neutral}[]} export interface User { id: string; email: string; name: string; role: 'admin' | manager | 'developer' | client | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string} preferences: { theme: light | 'dark' | auto; language: string; notifications: { email: boolean; push: boolean; sms: boolean}} activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]} subscription: { plan: 'free' | basic | 'premium' | enterprise; status: 'active' | inactive | 'cancelled' | expired; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | success | 'warning' | error; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string} category: 'system' | project | 'team' | client | 'billing'; priority: low | 'medium' | high; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | submit | 'reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: text | 'email' | password | 'tel' | url | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | GET | 'POST' | PUT | 'DELETE' | PATCH; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | production | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> e7b4ba039d3ef26c0e950221fd17cd540150e75a
=======
export interface Service { id: string; name: string; description: string; category: | micro-saas | 'ai-services' | it-services; price: { min: number; max: number; currency: string} features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | phone | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | month | 'year' | one-time; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | desc} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | dark | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | linkedin | 'twitter' | github | 'facebook' | instagram; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string} contact: { phone: string; email: string; website: string} certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | email | 'tel' | textarea | 'select' | checkbox | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: planning | 'in-progress' | completed | 'on-hold' | cancelled; priority: 'low' | medium | 'high' | critical; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string} team: { lead: string; members: string[]; external: string[]} client: { name: string; contact: string; industry: string} deliverables: { name: string; description: string; status: 'pending' | in-progress | 'completed' | review; dueDate: Date}[]; risks: { description: string; probability: 'low' | medium | 'high'; impact: low | 'medium' | high; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | influencing; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | process | 'communication' | management; impact: 'positive' | negative | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: admin | 'manager' | developer | 'client' | guest; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string} preferences: { theme: 'light' | dark | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}} activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]} subscription: { plan: free | 'basic' | premium | 'enterprise'; status: active | 'inactive' | cancelled | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: info | 'success' | warning | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string} category: system | 'project' | team | 'client' | billing; priority: 'low' | medium | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: button | 'submit' | reset} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | email | 'password' | tel | 'url' | number; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | POST | 'PUT' | DELETE | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | development | 'production' | test; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
=======
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
=======
export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | ai-services | 'it-services'; price: { min: number; max: number; currency: string} features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | email | 'phone' | both} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | year | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: asc | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | light | 'dark' | system; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | twitter | 'github' | facebook | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string} contact: { phone: string; email: string; website: string} certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | text | 'email' | tel | 'textarea' | select | 'checkbox' | radio; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | in-progress | 'completed' | on-hold | 'cancelled'; priority: low | 'medium' | high | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string} team: { lead: string; members: string[]; external: string[]} client: { name: string; contact: string; industry: string} deliverables: { name: string; description: string; status: pending | 'in-progress' | completed | 'review'; dueDate: Date}[]; risks: { description: string; probability: low | 'medium' | high; impact: 'low' | medium | 'high'; mitigation: string}[]; dependencies: { project: string; type: blocking | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: technical | 'process' | communication | 'management'; impact: positive | 'negative' | neutral}[]} export interface User { id: string; email: string; name: string; role: 'admin' | manager | 'developer' | client | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string} preferences: { theme: light | 'dark' | auto; language: string; notifications: { email: boolean; push: boolean; sms: boolean}} activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]} subscription: { plan: 'free' | basic | 'premium' | enterprise; status: 'active' | inactive | 'cancelled' | expired; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | success | 'warning' | error; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string} category: 'system' | project | 'team' | client | 'billing'; priority: low | 'medium' | high; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | submit | 'reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: text | 'email' | password | 'tel' | url | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | GET | 'POST' | PUT | 'DELETE' | PATCH; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | production | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}



>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export interface Service { id: string; name: string; description: string; category: | micro-saas | 'ai-services' | it-services; price: { min: number; max: number; currency: string} features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | phone | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | month | 'year' | one-time; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | desc} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | dark | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | linkedin | 'twitter' | github | 'facebook' | instagram; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string} contact: { phone: string; email: string; website: string} certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | email | 'tel' | textarea | 'select' | checkbox | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: planning | 'in-progress' | completed | 'on-hold' | cancelled; priority: 'low' | medium | 'high' | critical; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string} team: { lead: string; members: string[]; external: string[]} client: { name: string; contact: string; industry: string} deliverables: { name: string; description: string; status: 'pending' | in-progress | 'completed' | review; dueDate: Date}[]; risks: { description: string; probability: 'low' | medium | 'high'; impact: low | 'medium' | high; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | influencing; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | process | 'communication' | management; impact: 'positive' | negative | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: admin | 'manager' | developer | 'client' | guest; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string} preferences: { theme: 'light' | dark | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}} activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]} subscription: { plan: free | 'basic' | premium | 'enterprise'; status: active | 'inactive' | cancelled | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: info | 'success' | warning | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string} category: system | 'project' | team | 'client' | billing; priority: 'low' | medium | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: button | 'submit' | reset} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | email | 'password' | tel | 'url' | number; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | POST | 'PUT' | DELETE | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | development | 'production' | test; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}



export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | ai-services | 'it-services'; price: { min: number; max: number; currency: string} features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | email | 'phone' | both} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | year | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: asc | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | light | 'dark' | system; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | twitter | 'github' | facebook | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string} contact: { phone: string; email: string; website: string} certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | text | 'email' | tel | 'textarea' | select | 'checkbox' | radio; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | in-progress | 'completed' | on-hold | 'cancelled'; priority: low | 'medium' | high | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string} team: { lead: string; members: string[]; external: string[]} client: { name: string; contact: string; industry: string} deliverables: { name: string; description: string; status: pending | 'in-progress' | completed | 'review'; dueDate: Date}[]; risks: { description: string; probability: low | 'medium' | high; impact: 'low' | medium | 'high'; mitigation: string}[]; dependencies: { project: string; type: blocking | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: technical | 'process' | communication | 'management'; impact: positive | 'negative' | neutral}[]} export interface User { id: string; email: string; name: string; role: 'admin' | manager | 'developer' | client | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string} preferences: { theme: light | 'dark' | auto; language: string; notifications: { email: boolean; push: boolean; sms: boolean}} activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]} subscription: { plan: 'free' | basic | 'premium' | enterprise; status: 'active' | inactive | 'cancelled' | expired; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | success | 'warning' | error; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string} category: 'system' | project | 'team' | client | 'billing'; priority: low | 'medium' | high; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | submit | 'reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: text | 'email' | password | 'tel' | url | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | GET | 'POST' | PUT | 'DELETE' | PATCH; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | production | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}




export interface Service { id: string; name: string; description: string; category: | micro-saas | 'ai-services' | it-services; price: { min: number; max: number; currency: string} features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | phone | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | month | 'year' | one-time; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | desc} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | dark | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | linkedin | 'twitter' | github | 'facebook' | instagram; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string} contact: { phone: string; email: string; website: string} certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | email | 'tel' | textarea | 'select' | checkbox | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: planning | 'in-progress' | completed | 'on-hold' | cancelled; priority: 'low' | medium | 'high' | critical; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string} team: { lead: string; members: string[]; external: string[]} client: { name: string; contact: string; industry: string} deliverables: { name: string; description: string; status: 'pending' | in-progress | 'completed' | review; dueDate: Date}[]; risks: { description: string; probability: 'low' | medium | 'high'; impact: low | 'medium' | high; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | influencing; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | process | 'communication' | management; impact: 'positive' | negative | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: admin | 'manager' | developer | 'client' | guest; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string} preferences: { theme: 'light' | dark | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}} activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]} subscription: { plan: free | 'basic' | premium | 'enterprise'; status: active | 'inactive' | cancelled | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: info | 'success' | warning | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string} category: system | 'project' | team | 'client' | billing; priority: 'low' | medium | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: button | 'submit' | reset} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | email | 'password' | tel | 'url' | number; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | POST | 'PUT' | DELETE | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | development | 'production' | test; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}

  NEXT_PUBLIC_SENTRY_DSN?: string;
}
// Environment;
>>>>>>> main
export interface Environment {
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  NODE_ENV: 'development' | production | 'test';
  NEXT_PUBLIC_API_URL?: string;
  NEXT_PUBLIC_APP_URL?: string;
  NEXT_PUBLIC_GA_ID?: string;
  NEXT_PUBLIC_SENTRY_DSN?: string;

  title: string;
  description: string;
  url: string;
  type: page | 'blog' | service | 'case - study' | job;
  score: number;
  highlights?: string[];
}
export interface FilterOption  {label: string;
  value: string;
  count?: number;
}
export interface SortOption  {label: string;
  value: string;
  direction: 'asc' | desc;
}
export interface Pagination  {current_page: number;
  total_pages: number;
  total_items: number;
  itemsPerPage: number;
  has_next: boolean;
  has_prev: boolean;

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
}
  data: T;

  errors: string[];
  code?: string;
}
  success: true;
  data: T;
  message?: string;
}export type Response<T> = SuccessResponse<T> | ErrorResponse;ursor/fix-website-loading-errors-and-merge-6662;
}




>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
export type Response<T> = SuccessResponse<T> | ErrorResponse;
export type Response < T>  = SuccessResponse < T> | ErrorResponse;}
ursor/fix-netlify-build-and-merge-to-main-9571;
export type Response<T> = SuccessResponse<T> | ErrorResponse;
export type Response < T> = SuccessResponse < T> | ErrorResponse;}
  NEXT_PUBLIC_SENTRY_DSN?: string}

export interface SEOProps {
  }
  title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean
}

  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;

>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
  }
}


// Error interfaces
export interface ApiError {
  message: string;
  code: string;
  details?: any;
  timestamp: string;
}


=======
>>>>>>> main
>>>>>>> main
export interface Service { id: string; name: string; description: string; category: | micro-saas | 'ai-services' | it-services; price: { min: number; max: number; currency: string} features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | phone | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | month | 'year' | one-time; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | desc} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | dark | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | linkedin | 'twitter' | github | 'facebook' | instagram; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string} contact: { phone: string; email: string; website: string} certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | email | 'tel' | textarea | 'select' | checkbox | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: planning | 'in-progress' | completed | 'on-hold' | cancelled; priority: 'low' | medium | 'high' | critical; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string} team: { lead: string; members: string[]; external: string[]} client: { name: string; contact: string; industry: string} deliverables: { name: string; description: string; status: 'pending' | in-progress | 'completed' | review; dueDate: Date}[]; risks: { description: string; probability: 'low' | medium | 'high'; impact: low | 'medium' | high; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | influencing; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | process | 'communication' | management; impact: 'positive' | negative | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: admin | 'manager' | developer | 'client' | guest; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string} preferences: { theme: 'light' | dark | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}} activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]} subscription: { plan: free | 'basic' | premium | 'enterprise'; status: active | 'inactive' | cancelled | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: info | 'success' | warning | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string} category: system | 'project' | team | 'client' | billing; priority: 'low' | medium | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: button | 'submit' | reset} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | email | 'password' | tel | 'url' | number; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | POST | 'PUT' | DELETE | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | development | 'production' | test; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
>>>>>>> main
>>>>>>> origin/main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | ai-services | 'it-services'; price: { min: number; max: number; currency: string} features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | email | 'phone' | both} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | year | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: asc | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | light | 'dark' | system; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | twitter | 'github' | facebook | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string} contact: { phone: string; email: string; website: string} certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | text | 'email' | tel | 'textarea' | select | 'checkbox' | radio; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | in-progress | 'completed' | on-hold | 'cancelled'; priority: low | 'medium' | high | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string} team: { lead: string; members: string[]; external: string[]} client: { name: string; contact: string; industry: string} deliverables: { name: string; description: string; status: pending | 'in-progress' | completed | 'review'; dueDate: Date}[]; risks: { description: string; probability: low | 'medium' | high; impact: 'low' | medium | 'high'; mitigation: string}[]; dependencies: { project: string; type: blocking | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: technical | 'process' | communication | 'management'; impact: positive | 'negative' | neutral}[]} export interface User { id: string; email: string; name: string; role: 'admin' | manager | 'developer' | client | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string} preferences: { theme: light | 'dark' | auto; language: string; notifications: { email: boolean; push: boolean; sms: boolean}} activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]} subscription: { plan: 'free' | basic | 'premium' | enterprise; status: 'active' | inactive | 'cancelled' | expired; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | success | 'warning' | error; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string} category: 'system' | project | 'team' | client | 'billing'; priority: low | 'medium' | high; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | submit | 'reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: text | 'email' | password | 'tel' | url | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | GET | 'POST' | PUT | 'DELETE' | PATCH; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | production | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> e7b4ba039d3ef26c0e950221fd17cd540150e75a
=======
export interface Service { id: string; name: string; description: string; category: | micro-saas | 'ai-services' | it-services; price: { min: number; max: number; currency: string} features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | phone | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | month | 'year' | one-time; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | desc} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | dark | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | linkedin | 'twitter' | github | 'facebook' | instagram; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string} contact: { phone: string; email: string; website: string} certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | email | 'tel' | textarea | 'select' | checkbox | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: planning | 'in-progress' | completed | 'on-hold' | cancelled; priority: 'low' | medium | 'high' | critical; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string} team: { lead: string; members: string[]; external: string[]} client: { name: string; contact: string; industry: string} deliverables: { name: string; description: string; status: 'pending' | in-progress | 'completed' | review; dueDate: Date}[]; risks: { description: string; probability: 'low' | medium | 'high'; impact: low | 'medium' | high; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | influencing; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | process | 'communication' | management; impact: 'positive' | negative | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: admin | 'manager' | developer | 'client' | guest; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string} preferences: { theme: 'light' | dark | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}} activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]} subscription: { plan: free | 'basic' | premium | 'enterprise'; status: active | 'inactive' | cancelled | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: info | 'success' | warning | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string} category: system | 'project' | team | 'client' | billing; priority: 'low' | medium | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: button | 'submit' | reset} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | email | 'password' | tel | 'url' | number; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | POST | 'PUT' | DELETE | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | development | 'production' | test; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
}  NEXT_PUBLIC_SENTRY_DSN?: string}
export interface Service { id: string; name: string,
  description: string; category: | 'micro-saas' | ai-services | 'it-services'; price: { min: number; max: number; currency: string} } features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean; } export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | phone | 'both'} } export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string; } } export interface Testimonial { id: 'string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string;' } } export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean; } } export interface BlogPost { id: 'string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number;' } } export interface PricingTier { id: string; name: string; price: number; currency: string; period: | month | 'year' | one-time; features: string[]; limitations?: string[]; popular?: boolean; cta: string,
  description: string} } export interface ApiResponse<T> { success: 'boolean; data?: T; error?: string; message?: string;' } export interface PaginationParams { page: number; limit: number; sort?: string; order?: asc | 'desc'} } export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} } export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} } export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean; } } export interface UserPreferences { theme: | 'light' | dark | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean} }} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean; } } export interface SocialLink { platform: | 'linkedin' | twitter | 'github' | facebook | 'instagram'; url: string; label: string} } export interface CompanyInfo { name: string; tagline: string,
  description: string; address: { street: string; city: string; state: string; zip: string; country: string} } contact: { phone: string; email: string; website: string} certifications: string[]; } export interface ErrorInfo { message: 'string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string;' } } export interface LoadingState { isLoading: boolean; error?: string; progress?: number; } } export interface FormField { name: string; label: string; type: | 'text' | email | 'tel' | textarea | 'select' | checkbox | 'radio'; required: boolean; placeholder?: string} options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string,
  description: string; status: 'planning' | in-progress | 'completed' | on-hold | 'cancelled'; priority: low | 'medium' | high | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string} } team: { lead: string; members: string[]; external: string[]} client: { name: string; contact: string; industry: string} deliverables: { name: string,
  description: string; status: pending | 'in-progress' | completed | 'review'; dueDate: Date}[]; risks: { description: string; probability: low | 'medium' | high; impact: 'low' | medium | 'high'; mitigation: string}[]; dependencies: { project: string; type: blocking | 'influencing',
  description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: technical | 'process' | communication | 'management'; impact: positive | 'negative' | neutral}[]} export interface User { id: string; email: string; name: string; role: 'admin' | manager | 'developer' | client | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string} } preferences: { theme: light | 'dark' | auto; language: string; notifications: { email: boolean; push: boolean; sms: boolean}} activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]} subscription: { plan: 'free' | basic | 'premium' | enterprise; status: 'active' | inactive | 'cancelled' | expired; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | success | 'warning' | error; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string} } category: 'system' | project | 'team' | client | 'billing'; priority: low | 'medium' | high; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | submit | 'reset'} } export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: text | 'email' | password | 'tel' | url | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean; } } export interface ApiRequest { method: | 'GET' | POST | 'PUT' | DELETE | 'PATCH'; url: string; data?: any; params?: Record<string,any> headers?: Record<string,string> } } export interface Environment { NODE_ENV: | development | 'production' | test; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string} }
export interface Service { id: string; name: string,
  description: string; category: | 'micro-saas' | ai-services | 'it-services'; price: { min: number; max: number; currency: string} features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | email | 'phone' | both} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | year | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string,
  description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: asc | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | light | 'dark' | system; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | twitter | 'github' | facebook | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string,
  description: string; address: { street: string; city: string; state: string; zip: string; country: string} contact: { phone: string; email: string; website: string} certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | text | 'email' | tel | 'textarea' | select | 'checkbox' | radio; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string,
  description: string; status: 'planning' | in-progress | 'completed' | on-hold | 'cancelled'; priority: low | 'medium' | high | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string} team: { lead: string; members: string[]; external: string[]} client: { name: string; contact: string; industry: string} deliverables: { name: string,
  description: string; status: pending | 'in-progress' | completed | 'review'; dueDate: Date}[]; risks: { description: string; probability: low | 'medium' | high; impact: 'low' | medium | 'high'; mitigation: string}[]; dependencies: { project: string; type: blocking | 'influencing',
  description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: technical | 'process' | communication | 'management'; impact: positive | 'negative' | neutral}[]} export interface User { id: string; email: string; name: string; role: 'admin' | manager | 'developer' | client | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string} preferences: { theme: light | 'dark' | auto; language: string; notifications: { email: boolean; push: boolean; sms: boolean}} activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]} subscription: { plan: 'free' | basic | 'premium' | enterprise; status: 'active' | inactive | 'cancelled' | expired; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | success | 'warning' | error; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string} category: 'system' | project | 'team' | client | 'billing'; priority: low | 'medium' | high; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | submit | 'reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: text | 'email' | password | 'tel' | url | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | GET | 'POST' | PUT | 'DELETE' | PATCH; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | production | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}export interface Service { id: string; name: string,
  description: string; category: | micro-saas | 'ai-services' | it-services; price: { min: number; max: number; currency: string} features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | phone | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | month | 'year' | one-time; features: string[]; limitations?: string[]; popular?: boolean; cta: string,
  description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | desc} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | dark | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | linkedin | 'twitter' | github | 'facebook' | instagram; url: string; label: string} export interface CompanyInfo { name: string; tagline: string,
  description: string; address: { street: string; city: string; state: string; zip: string; country: string} contact: { phone: string; email: string; website: string} certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | email | 'tel' | textarea | 'select' | checkbox | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string,
  description: string; status: planning | 'in-progress' | completed | 'on-hold' | cancelled; priority: 'low' | medium | 'high' | critical; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string} team: { lead: string; members: string[]; external: string[]} client: { name: string; contact: string; industry: string} deliverables: { name: string,
  description: string; status: 'pending' | in-progress | 'completed' | review; dueDate: Date}[]; risks: { description: string; probability: 'low' | medium | 'high'; impact: low | 'medium' | high; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | influencing,
  description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | process | 'communication' | management; impact: 'positive' | negative | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: admin | 'manager' | developer | 'client' | guest; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string} preferences: { theme: 'light' | dark | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}} activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]} subscription: { plan: free | 'basic' | premium | 'enterprise'; status: active | 'inactive' | cancelled | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: info | 'success' | warning | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string} category: system | 'project' | team | 'client' | billing; priority: 'low' | medium | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: button | 'submit' | reset} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | email | 'password' | tel | 'url' | number; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | POST | 'PUT' | DELETE | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | development | 'production' | test; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
export interface Service { id: string; name: string,
  description: string; category: | 'micro-saas' | ai-services | 'it-services'; price: { min: number; max: number; currency: string} features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | email | 'phone' | both} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | year | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string,
  description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: asc | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | light | 'dark' | system; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | twitter | 'github' | facebook | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string,
  description: string; address: { street: string; city: string; state: string; zip: string; country: string} contact: { phone: string; email: string; website: string} certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | text | 'email' | tel | 'textarea' | select | 'checkbox' | radio; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string,
  description: string; status: 'planning' | in-progress | 'completed' | on-hold | 'cancelled'; priority: low | 'medium' | high | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string} team: { lead: string; members: string[]; external: string[]} client: { name: string; contact: string; industry: string} deliverables: { name: string,
  description: string; status: pending | 'in-progress' | completed | 'review'; dueDate: Date}[]; risks: { description: string; probability: low | 'medium' | high; impact: 'low' | medium | 'high'; mitigation: string}[]; dependencies: { project: string; type: blocking | 'influencing',
  description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: technical | 'process' | communication | 'management'; impact: positive | 'negative' | neutral}[]} export interface User { id: string; email: string; name: string; role: 'admin' | manager | 'developer' | client | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string} preferences: { theme: light | 'dark' | auto; language: string; notifications: { email: boolean; push: boolean; sms: boolean}} activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]} subscription: { plan: 'free' | basic | 'premium' | enterprise; status: 'active' | inactive | 'cancelled' | expired; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | success | 'warning' | error; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string} category: 'system' | project | 'team' | client | 'billing'; priority: low | 'medium' | high; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | submit | 'reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: text | 'email' | password | 'tel' | url | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | GET | 'POST' | PUT | 'DELETE' | PATCH; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | production | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export interface Service { id: string; name: string; description: string; category: | micro-saas | 'ai-services' | it-services; price: { min: number; max: number; currency: string} features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | phone | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | month | 'year' | one-time; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | desc} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | dark | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | linkedin | 'twitter' | github | 'facebook' | instagram; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string} contact: { phone: string; email: string; website: string} certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | email | 'tel' | textarea | 'select' | checkbox | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: planning | 'in-progress' | completed | 'on-hold' | cancelled; priority: 'low' | medium | 'high' | critical; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string} team: { lead: string; members: string[]; external: string[]} client: { name: string; contact: string; industry: string} deliverables: { name: string; description: string; status: 'pending' | in-progress | 'completed' | review; dueDate: Date}[]; risks: { description: string; probability: 'low' | medium | 'high'; impact: low | 'medium' | high; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | influencing; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | process | 'communication' | management; impact: 'positive' | negative | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: admin | 'manager' | developer | 'client' | guest; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string} preferences: { theme: 'light' | dark | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}} activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]} subscription: { plan: free | 'basic' | premium | 'enterprise'; status: active | 'inactive' | cancelled | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: info | 'success' | warning | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string} category: system | 'project' | team | 'client' | billing; priority: 'low' | medium | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: button | 'submit' | reset} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | email | 'password' | tel | 'url' | number; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | POST | 'PUT' | DELETE | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | development | 'production' | test; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | ai-services | 'it-services'; price: { min: number; max: number; currency: string} features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | email | 'phone' | both} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | year | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: asc | 'desc'} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | light | 'dark' | system; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | 'linkedin' | twitter | 'github' | facebook | 'instagram'; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string} contact: { phone: string; email: string; website: string} certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | text | 'email' | tel | 'textarea' | select | 'checkbox' | radio; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: 'planning' | in-progress | 'completed' | on-hold | 'cancelled'; priority: low | 'medium' | high | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string} team: { lead: string; members: string[]; external: string[]} client: { name: string; contact: string; industry: string} deliverables: { name: string; description: string; status: pending | 'in-progress' | completed | 'review'; dueDate: Date}[]; risks: { description: string; probability: low | 'medium' | high; impact: 'low' | medium | 'high'; mitigation: string}[]; dependencies: { project: string; type: blocking | 'influencing'; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: technical | 'process' | communication | 'management'; impact: positive | 'negative' | neutral}[]} export interface User { id: string; email: string; name: string; role: 'admin' | manager | 'developer' | client | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string} preferences: { theme: light | 'dark' | auto; language: string; notifications: { email: boolean; push: boolean; sms: boolean}} activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]} subscription: { plan: 'free' | basic | 'premium' | enterprise; status: 'active' | inactive | 'cancelled' | expired; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: 'info' | success | 'warning' | error; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string} category: 'system' | project | 'team' | client | 'billing'; priority: low | 'medium' | high; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | submit | 'reset'} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: text | 'email' | password | 'tel' | url | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | GET | 'POST' | PUT | 'DELETE' | PATCH; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | 'development' | production | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
export interface Service { id: string; name: string; description: string; category: | micro-saas | 'ai-services' | it-services; price: { min: number; max: number; currency: string} features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean} export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | phone | 'both'} export interface TeamMember { id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string} export interface Testimonial { id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string} export interface CaseStudy { id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean} export interface BlogPost { id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number} export interface PricingTier { id: string; name: string; price: number; currency: string; period: | month | 'year' | one-time; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string} export interface ApiResponse<T> { success: boolean; data?: T; error?: string; message?: string} export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | desc} export interface PaginatedResponse<T> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean}} export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} export interface AccessibilitySettings { highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean} export interface UserPreferences { theme: | 'light' | dark | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean}} export interface NavigationItem { name: string; href: string; submenu?: NavigationItem[]; external?: boolean} export interface SocialLink { platform: | linkedin | 'twitter' | github | 'facebook' | instagram; url: string; label: string} export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string} contact: { phone: string; email: string; website: string} certifications: string[]} export interface ErrorInfo { message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string} export interface LoadingState { isLoading: boolean; error?: string; progress?: number} export interface FormField { name: string; label: string; type: | 'text' | email | 'tel' | textarea | 'select' | checkbox | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string }[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}} export interface Project { id: string; name: string; description: string; status: planning | 'in-progress' | completed | 'on-hold' | cancelled; priority: 'low' | medium | 'high' | critical; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string} team: { lead: string; members: string[]; external: string[]} client: { name: string; contact: string; industry: string} deliverables: { name: string; description: string; status: 'pending' | in-progress | 'completed' | review; dueDate: Date}[]; risks: { description: string; probability: 'low' | medium | 'high'; impact: low | 'medium' | high; mitigation: string}[]; dependencies: { project: string; type: 'blocking' | influencing; description: string}[]; metrics: { name: string; value: number; unit: string; target: number}[]; lessons: { learned: string; category: 'technical' | process | 'communication' | management; impact: 'positive' | negative | 'neutral'}[]} export interface User { id: string; email: string; name: string; role: admin | 'manager' | developer | 'client' | guest; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string} preferences: { theme: 'light' | dark | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean}} activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[]} subscription: { plan: free | 'basic' | premium | 'enterprise'; status: active | 'inactive' | cancelled | 'expired'; startDate: Date; endDate: Date; features: string[]}} export interface Notification { id: string; type: info | 'success' | warning | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string} category: system | 'project' | team | 'client' | billing; priority: 'low' | medium | 'high'; expires?: Date} export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: button | 'submit' | reset} export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | email | 'password' | tel | 'url' | number; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean} export interface ApiRequest { method: | 'GET' | POST | 'PUT' | DELETE | 'PATCH'; url: string; data?: any; params?: Record<string,any>; headers?: Record<string,string>} export interface Environment { NODE_ENV: | development | 'production' | test; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
// Component props interfaces;
>>>>>>> main
export interface ButtonProps {
  variant?: 'primary' | secondary | 'outline' | ghost;
  size?: 'sm' | md | 'lg';
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  type?: button | 'submit' | reset;
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
}
export interface InputProps {

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6

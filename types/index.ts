<<<<<<< HEAD;
ursor/automate-test-improve-and-merge-code-646c;
// Type definitions index;

export interface ContactInfo {
  phone: string;
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-53a1;
// Type definitions index;
export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  site: string;}
}
}

export interface AnimationState {
  isLoaded: boolean;
  hasError: boolean;}
}
}

export interface ProjectBrief {
  projectName: string;
  goals: string;
  timeline: string;
  budget: string;}
  techStack?: string[];}
  talentFilters?: { verifiedOnly?: boolean; regions?: string[] };
}
<<<<<<< HEAD;
// Global types for the Zion Tech Group application;
export interface ContactInfo {
  ;

export interface ContactInfo {
  phone: string, email: string,
  address: string, site: string,


export interface Service {;

// Core Types;
export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  site: string;}
}
}

export interface AnimationState {
  isLoaded: boolean;
  hasError: boolean;}
}
}

export interface ProjectBrief  {projectName: string;
  goals: string;
  timeline: string;
  budget: string;}
  techStack?: string[];}
  talentFilters?: { verifiedOnly?: boolean; regions?: string[] }}// Global types for the Zion Tech Group application;
// Contact information;

export interface ContactInfo  {export interface ContactInfo  {export interface ContactInfo  {phone: string, email: string,address: string, site: string,export interface Service  {// Core Types;

export interface ContactInfo  {ursor/fix-netlify-build-and-merge-to-main-9571;
// Global types for the Zion Tech Group application;
// Core Types;

export interface ContactInfo  {phone: string;
  email: string;
  address: string;}
  site: string;}
}// Service interfaces;

export interface Service  {\"id\": string;
  name: string;
  description: string;
  category:;
    | 'micro-saas';
    | 'ai-services';
    | 'it-services';
  price: {min: number;
    max: number;}
    currency: strin,}
}\"features\": string[];
  technologies: string[];
  deliveryTime: string;
  support: string;
  image?: string;
  popular?: boolean}

export interface ContactForm {
  \"name\": string;}
}
}

export interface ServiceCategory {
  title: string;
  description: string;
  count: number;
  features: string[];
  href: string;
  color: string;}
}
}

export interface LoadingState {
  is_loading: boolean;
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
  name: string;
=======

// Service interfaces;
export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-53a1;
price: number;
  duration: string;
  features: string[];
  icon?: string;
  popular?: boolean;
<<<<<<< HEAD}
}
}

export interface ServiceCategory  {title: string;
  description: string;
  count: number;
  features: string[];}
  cta: string;}
}
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-53a1;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  services: Service[];}
  icon?: string;}
}

// User interfaces;
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'admin' | 'user' | 'moderator';
  createdAt: string;}
  updatedAt: string;}
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
    github?: string;}
    twitter?: string;}
  };
}

// Project interfaces;
export interface Project {
  id: string;
  title: string;
  description: string;
<<<<<<< HEAD;
count: number;
  features: string[];href: string;}
}
}

export interface SEOProps  {title?: string;
  description?: string;title: string;
  href: string;
  icon: string;}
  color: string;;}
}
}

export interface ServiceCategory {
  title: string, description: string,count: number, features: string[],href: string, color: string,export interface SEOProps  {title: string, description: string,keywords?: string;
  canonical?: string;og_image?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;

export interface PerformanceMetrics  {fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;}
}
}

export interface AccessibilitySettings {
  high_contrast: boolean;
  font_size: number;
  reduced_motion: boolean;
  screen_reader: boolean;}
}
}

export interface UserPreferences  {theme: 'light' | 'dark' | 'system';
  language: string;
  accessibility: AccessibilitySettings;
  notifications: {email: boolean;
    browser: boolean;}
    marketing: boolean;}
  }
}

export interface CompanyInfo {
  name: string;}
}
}

export interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
}
export interface LoadingState  {isLoading: boolean, error?: string,export interface AnimationState  {isLoaded: boolean, hasError: boolean,export interface ContactInfo {,phone: string,email: string,address: string,site: string;}
},export interface Service {,title: string,description: string,features: string[],href: string,icon: string,color: string;}
},export interface ServiceCategory {,title: string,description: string,count: number,features: string[],href: string,color: string;}
},export interface SEOProps {,title: string,description: string,keywords?: string,canonical?: string,ogImage?: string,noindex?: boolean;}
},export interface LoadingState {,isLoading: boolean,error?: string;}
},export interface AnimationState {,isLoaded: boolean,hasError: boolean;}
}url?: string;
  type?: string;
  noindex?: boolean;}

export interface LoadingState {
  is_loading: boolean;
  error?: string;
  progress?: number;}
}
}

export interface AnimationState {
  is_loaded: boolean;
  has_error: boolean;

export interface AnimationState  {isLoaded: boolean;
  hasError: boolean;}
}
}

export interface FormData {
  ursor/fix-netlify-build-and-merge-to-main-9571;}
}
}

export interface FormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  \"name\": string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  budget?: string;
  message: string;
  preferredContact:;
    | 'email';
    | 'phone';}
    | 'both'}
}

export interface TeamMember {
  \"id\": string;
  service?: string;
  message: string;
  project?: string;}
}
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  \"id\": string;
  name: string;
  position: string;
  bio: string;
  image: string;
  skills: string[];
  linkedin?: string;
  github?: string;}
  twitter?: string}
}

export interface Testimonial  {\"id\": string;
  name: string;company: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;}
    country: string,}
};

  contact: {
    phone: string;
    email: string;}
    website: string,}
};

  certifications: string[];
}

// Content interfaces;
=======
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
  createdAt: string;}
  updatedAt: string;}
}

// Content interfaces;
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  featured: boolean;
  image?: string;}
  readTime: number;}
}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-53a1;
export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
<<<<<<< HEAD;
image?: string;
  project?: string;}
}
}

export interface BlogPost {
  id: string;
  image?: string;
  project?: string;
=======
  featured: boolean;
  createdAt: string;}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-53a1}
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
  duration: string;
  teamSize: number;
<<<<<<< HEAD;
image: string;}
  featured?: boolean}
}

export interface BlogPost {
  \"id\": string;title: string;
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
  readTime: number;}
}
}

export interface TeamMember  {id: string;
  name: string;
  role: string;
  position: string;
  bio: string;
  image: string;
  skills: string[];
  social: {linkedin?: string;
    twitter?: string;}
    github?: string;}
  }}

export interface Project  {ursor/fix-netlify-build-and-merge-to-main-9571;
  id: string;
  name: string;
  id: string;
  name: string;position: string;
  bio: string;
  image: string;
  skills: string[];
  linkedin?: string;}
  github?: string;}
  twitter?: string}
  twitter?: string;
}

export interface CompanyInfo  {name: string;
  tagline: string;
  description: string;
  address: {street: string;
    city: string;
    state: string;
    zip: string;}
    country: string;}
  }contact: {phone: string;
    email: string;}
    website: string;}
  }certifications: string[];
}// Content interfaces;

export interface Testimonial {
  \"id\": string;
  name: string;
  company: string;
  position: string;
  content: string;
  rating: number;
  image?: string;}
  project?: string}
}

export interface CaseStudy {
  \"id\": string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  duration: string;
  teamSize: number;
  image: string;}
  featured?: boolean}
}

export interface BlogPost {
  \"id\": string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  category: string;
  image: string;
  featured?: boolean;}
  readTime: number,}
}

export interface PricingTier {
  \"id\": string;
  name: string;
  price: number;
  currency: string;
  period:;
    | 'month';
    | 'year';
    | 'one-time';
  features: string[];
  limitations?: string[];
  popular?: boolean;
  cta: string;}
  description: string,}
}

export interface ApiResponse<T />  {\"success\": boolean;
  data?: T;}
  error?: string;}
  message?: string}

export interface PaginationParams {
  \"page\": number;
  limit: number;
  sort?: string;}
  order?: 'asc' | 'desc'}
}

export interface PaginatedResponse<T />  {\"data\": T[];
  pagination: {page: number;
    limit: number;
    total: number;
    pages: number;
    hasNext: boolean;}
    hasPrev: boolean,}
}

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  url?: string;
  type?: string;}
  noindex?: boolean}
}

export interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint;
  lcp?: number; // Largest Contentful Paint;
  fid?: number; // First Input Delay;
  cls?: number; // Cumulative Layout Shift;
  ttfb?: number; // Time to First Byte;}
}
}

export interface AccessibilitySettings {
  \"highContrast\": boolean;
  fontSize: number;
  reducedMotion: boolean;}
  screenReader: boolean,}
}

export interface UserPreferences  {\"theme\": | 'light';
    | 'dark';
    | 'system';
  language: string;
  accessibility: AccessibilitySettings;
  notifications: {email: boolean;
    browser: boolean;}
    marketing: boolean,}
}

export interface NavigationItem {
  \"name\": string;
  href: string;
  submenu?: NavigationItem[];}
  external?: boolean}
}

export interface SocialLink {
  \"platform\": | 'linkedin';
    | 'twitter';
    | 'github';
    | 'facebook';
    | 'instagram';
  url: string;}
  label: string,}
}

export interface CompanyInfo  {\"name\": string;
  tagline: string;
  description: string;
  address: {street: string;
    city: string;
    state: string;
    zip: string;}
    country: strin,}
}\"contact\": {phone: string;}
    email: string;}
    website: string}\"certifications\": string[,
}

export interface ErrorInfo {
  \"message\": string;
  code?: string;
  details?: any;
  timestamp: string;
  userAgent?: string;}
  url?: string}
}

export interface LoadingState {
  \"isLoading\": boolean;
  error?: string;}
  progress?: number}
}

export interface FormField  {\"name\": string;
  label: string;
  type:;
    | 'text';
    | 'email';
    | 'tel';
    | 'textarea';
    | 'select';
    | 'checkbox';
    | 'radio';
  required: boolean;
  placeholder?: string;}
  options?: { value: string; label: string,}
}[];
  validation?: {min?: number;
    max?: number;}
    pattern?: string;}
    message?: string}}

export interface Project  {\"id\": string;
  name: string;
  description: string;
  status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'critical';
  startDate: Date;
  endDate: Date;
  budget: {allocated: number;
    spent: number;}
    currency: strin,}
}\"team\": {lead: string;
    members: string[];}
    external: string[,}
}\"client\": {name: string;
    contact: string;}
    industry: strin,}
}\"deliverables\": {name: string;
    description: string;
    status: 'pending' | 'in-progress' | 'completed' | 'review';}
    dueDate: Dat,}
}[];
  \"risks\": {description: string;
    probability: 'low' | 'medium' | 'high';
    impact: 'low' | 'medium' | 'high';}
    mitigation: strin,}
}[];
  \"dependencies\": {project: string;
    type: 'blocking' | 'influencing';}
    description: strin,}
}[];
  \"metrics\": {name: string;
    value: number;
    unit: string;}
    target: numbe,}
}[];
  \"lessons\": {learned: string;}
    category: 'technical' | 'process' | 'communication' | 'management';}
    impact: 'positive' | 'negative' | 'neutral'}[,
}

export interface User  {\"id\": string;
  email: string;
  name: string;
  role: 'admin' | 'manager' | 'developer' | 'client' | 'guest';
  permissions: string[];
  profile: {avatar?: string;
    bio?: string;
    skills: string[];
    experience: number;
    location: string;}
    timezone: strin,}
}\"preferences\": {theme: 'light' | 'dark' | 'auto';
    language: string;
    notifications: {email: boolean;
      push: boolean;}
      sms: boolean,}
}\"activity\": {lastLogin: Date;
    loginCount: number;
    projects: string[];}
    tasks: string[,}
}\"subscription\": {plan: 'free' | 'basic' | 'premium' | 'enterprise';
    status: 'active' | 'inactive' | 'cancelled' | 'expired';
    startDate: Date;
    endDate: Date;}
    features: string[],}
}

export interface Notification  {\"id\": string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  action?: {label: string;}
    url: strin,}
}\"category\": 'system' | 'project' | 'team' | 'client' | 'billing';
  priority: 'low' | 'medium' | 'high';
  expires?: Date}

export interface BaseComponentProps  {className?: string;
  children?: React.ReactNode;
  id?: string;
  disabled?: boolean;
  loading?: boolean;}
  onClick?: () => void;}
  type?: 'button' | 'submit' | 'reset'}
// InputProps should not extend BaseComponentProps due to incompatible 'type';

export interface InputProps  {className?: string;
  children?: React.ReactNode;
  id?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number';
  placeholder?: string;
  value?: string;
  onChange?: (\"value\": string) => void;}
  error?: string;}
  required?: boolean}
// API types;

export interface ApiRequest  {\"method\": | 'GET';
    | 'POST';
    | 'PUT';
    | 'DELETE';
    | 'PATCH';
  url: string;
  data?: any;}
  params?: Record<string, any />;}
  headers?: Record<string, string />}
// Environment types;
  required?: boolean;
}image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'critical';
  startDate: Date;
  endDate: Date;
  budget: {allocated: number;
    spent: number;}
    currency: strin,}
}\"team\": {lead: string;
    members: string[];}
    external: string[,}
}\"client\": {name: string;
    contact: string;}
    industry: strin,}
}\"deliverables\": {name: string;
    description: string;
    status: 'pending' | 'in-progress' | 'completed' | 'review';}
    dueDate: Dat,}
}[];
  \"risks\": {description: string;
    probability: 'low' | 'medium' | 'high';
    impact: 'low' | 'medium' | 'high';}
    mitigation: strin,}
}[];
  \"dependencies\": {project: string;
    type: 'blocking' | 'influencing';}
    description: strin,}
}[];
  \"metrics\": {name: string;
    value: number;
    unit: string;}
    target: numbe,}
}[];
  \"lessons\": {learned: string;}
    category: 'technical' | 'process' | 'communication' | 'management';}
    impact: 'positive' | 'negative' | 'neutral'}[,
}

export interface User  {\"id\": string;
  email: string;
  name: string;
  role: 'admin' | 'manager' | 'developer' | 'client' | 'guest';
  permissions: string[];
  profile: {avatar?: string;
    bio?: string;
    skills: string[];
    experience: number;
    location: string;}
    timezone: strin,}
}\"preferences\": {theme: 'light' | 'dark' | 'auto';
    language: string;
    notifications: {email: boolean;
      push: boolean;}
      sms: boolean,}
}\"activity\": {lastLogin: Date;
    loginCount: number;
    projects: string[];}
    tasks: string[,}
}\"subscription\": {plan: 'free' | 'basic' | 'premium' | 'enterprise';
    status: 'active' | 'inactive' | 'cancelled' | 'expired';
    startDate: Date;
    endDate: Date;}
    features: string[],}
}

export interface Notification  {\"id\": string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  action?: {label: string;}
    url: strin,}
}\"category\": 'system' | 'project' | 'team' | 'client' | 'billing';
  priority: 'low' | 'medium' | 'high';
  expires?: Date}

export interface BaseComponentProps  {className?: string;
  children?: React.ReactNode;
  id?: string;
  disabled?: boolean;
  loading?: boolean;}
  onClick?: () => void;}
  type?: 'button' | 'submit' | 'reset'}
// InputProps should not extend BaseComponentProps due to incompatible 'type';

export interface InputProps  {className?: string;
  children?: React.ReactNode;
  id?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number';
  placeholder?: string;
  value?: string;
  onChange?: (\"value\": string) => void;}
  error?: string;}
  required?: boolean}
// API types;

export interface ApiRequest {
  \"method\": | 'GET';
    | 'POST';
    | 'PUT';
    | 'DELETE';
    | 'PATCH';
  url: string;
  label: string;;

export interface SocialLink  {platform: 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram';
  url: string;}
  label: string;}
}

export interface CompanyInfo {
  name: string;
  href: string;}
}
}

export interface FooterSection {
  title: string;
  links: FooterLink[];}
}
}

export interface HeroSection {}}

export interface FooterSection {
  title: string;
  links: FooterLink[];}
}
}

export interface HeroSection  {ursor/fix-website-loading-errors-and-merge-6662;

export interface HeroSection  {title: string;
  subtitle: string;}
  cta: {primary: {text: string;}
      href: string;}
    secondary: {text: string;}
      href: string;}
    }
  }}
    secondary: {text: string;}
      href: string;}
    }

export interface CompanyInfo  {name: string;
  tagline: string;
  description: string;
  address: {street: string;
    city: string;
    state: string;
    zip: string;}
    country: string;}
  }
  contact: {phone: string;
    email: string;}
    website: string;}
  }
  certifications: string[];
}}
  certifications: string[];
}

export interface Feature {
  title: string;}
}
}

export interface Feature {
  ;


  title: string;
  description: string;
  icon: string;
  color: string;}
}
}

export interface Stats {
  label: string;
  value: string;
  description?: string;}
}
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
  featured?: boolean;}
}
}

export interface JobOpening  {id: string;
  title: string;
  department: string;
  location: string;
  type: 'full - time' | 'part - time' | 'contract';
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  salary?: {min: number;
    max: number;}
    currency: string;}
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
  featured: boolean;}
}
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
  image?: string;}
}
}

export interface CaseStudy {
  export interface CaseStudy  {id: string;
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
  featured?: boolean;}
}
}

export interface JobOpening  {id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract';
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  salary?: {min: number;
    max: number;}
    currency: string;}
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
  featured: boolean;}
}
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
  image?: string;}
}
}

export interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'mobile' | 'ai' | 'devops';
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  yearsOfExperience: number;
  projects: number;}
}
}

export interface ContactFormData  {name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;}
  message: string;}
  }
  certifications: string[];
}

export interface ErrorInfo {
  message: string;
  code?: string;
  details?: any;
  timestamp: string;
  userAgent?: string;
  url?: string;}
}
}

export interface FormField {
  name: string;

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio';
  required: boolean;
  placeholder?: string;
  validation?: {min?: number;
    max?: number;
    pattern?: string;
    message?: string;

export interface Partner  {name: string;
  logo: string;
  website: string;
  description: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';}
}
}

export interface FAQ {
  question: string;
  answer: string;
  category?: string;}
}
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  features: string[];
  popular?: boolean;
  cta: string;
  href: string;}
}
}

export interface FooterLink {
  name: string;
  href: string;}
}
}

export interface FooterSection {
  title: string;
  links: FooterLink[];}
}
}

export interface HeroSection  {title: string;
  subtitle: string;
  cta: {primary: {text: string;}
      href: string;}
    }secondary: {text: string;}
      href: string;}
    }}image?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
  color: string;}
}
}

export interface Stats {
  label: string;
  value: string;
  description?: string;}
}
}

export interface JobOpening  {id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract';
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  salary?: {min: number;
    max: number;}
    currency: string;}
  }}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image?: string;
  featured: boolean;}
}
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
  image?: string;}
}
}

export interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'mobile' | 'ai' | 'devops';
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  yearsOfExperience: number;
  projects: number;

=======
  featured: boolean;
  image?: string;
  createdAt: string;
  updatedAt: string;}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-53a1}
}

// Form interfaces;
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  message: string;budget?: string;
  timeline?: string;
  source?: string;
<<<<<<< HEAD;
preferredContact?: 'email' | 'phone' | 'both';

=======}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-53a1}
}

export interface NewsletterSubscription {
  email: string;
<<<<<<< HEAD;
interests: string[];
  frequency: 'daily' | 'weekly' | 'monthly';
  subscribed: boolean;
  subscribedAt: string;}
}
}

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'page' | 'blog' | 'service' | 'case-study' | 'job';
  score: number;
  highlights?: string[];}
}
}

export interface FilterOption {
  label: string;
  value: string;
  count?: number;}
}
}

export interface SortOption {
  label: string;
  value: string;
  direction: 'asc' | 'desc';}
}
}

export interface Pagination {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  hasNext: boolean;
  hasPrev: boolean;page?: number;
  limit?: number;
  total?: number;
  pages?: number;}
}
}

export interface APIResponse<T />  {data: T;
  success: boolean;
  message?: string;
  errors?: string[];}
  pagination?: Pagination;}
}

export interface ErrorResponse {
  success: false;
  message: string;
  errors: string[];
  code?: string;}
}
}

export interface SuccessResponse<T />  {success: true;
  data: T;}
  message?: string;}
}

export type Response<T /> = SuccessResponse<T /> | ErrorResponse;

export interface ErrorInfo {
  message: string;
  code?: string;
  details?: any;
  timestamp: string;
  user_agent?: string;
  url?: string;}
}
}

export interface FormField  {name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio';
  required: boolean;
  placeholder?: string;
  validation?: {min?: number;
    max?: number;
    pattern?: string;}
    message?: string;}
  }
}ursor/fix-netlify-build-and-merge-to-main-9571;
// Environment;
  options?: { value: string; label: string,}
}[];
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;}
    message?: string;}
  }
}

// Environment;
data?: any;
  params?: Record<string, any />;
  headers?: Record<string, string />}
// Environment types;

export interface Environment {
  \"NODE_ENV\": | 'development';
    | 'production';
    | 'test';
  NEXT_PUBLIC_API_URL?: string;
  NEXT_PUBLIC_APP_URL?: string;
  NEXT_PUBLIC_GA_ID?: string;}
  NEXT_PUBLIC_SENTRY_DSN?: string}
}

export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: string},
}features: 'string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean;' }

export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both'},
}

export interface TeamMember { id: 'string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string;' } }

export interface Testimonial { id: 'string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string;' } }

export interface CaseStudy { id: 'string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean;' } }

export interface BlogPost { id: 'string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number;' } }

export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string},
}

export interface ApiResponse<T /> { success: 'boolean; data?: T; error?: string; message?: string;' }

export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | 'desc'} }

export interface PaginatedResponse<T /> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean,}
}

export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} }

export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} }

export interface AccessibilitySettings { highContrast: 'boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean;' } }

export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean} ,
}

export interface NavigationItem { name: 'string; href: string; submenu?: NavigationItem[]; external?: boolean;' } }

export interface SocialLink { platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string},
}

export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string},
}contact: { phone: string; email: string; website: strin,}
}certifications: 'string[];' }

export interface ErrorInfo { message: 'string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string;' } }

export interface LoadingState { isLoading: 'boolean; error?: string; progress?: number;' } }

export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string} options?: { value: 'string; label: string',}
}[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}}

export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string},
}team: { lead: string; members: string[]; external: string[,}
}client: { name: string; contact: string; industry: strin,}
}deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Dat,}
}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: strin,}
}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: strin,}
}[]; metrics: { name: string; value: number; unit: string; target: numbe,}
}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[,
}

export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string},
}preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean,}
}activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[,}
}subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[],}
}

export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string},
}category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date}

export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'} }

export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: 'string) => void; error?: string; required?: boolean;' } }

export interface ApiRequest { method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any /> headers?: Record<string,string /> } }

export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string} }

export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: strin,}
}features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean}

export interface ContactForm {}
  name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both',}
}

export interface TeamMember {}
  id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string}
}

export interface Testimonial {}
  id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string}
}

export interface CaseStudy {}
  id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean}
}

export interface BlogPost {}
  id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number,}
}

export interface PricingTier {}
  id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string,}
}

export interface ApiResponse<T /> { success: boolean; data?: T; error?: string; message?: string}

export interface PaginationParams {}
  page: number; limit: number; sort?: string; order?: 'asc' | 'desc'}
}

export interface PaginatedResponse<T /> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean,}
}

export interface SEOProps {}
  title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean}
}

export interface PerformanceMetrics {}
  fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number}
}

export interface AccessibilitySettings {}
  highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean,}
}

export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean,}
}

export interface NavigationItem {}
  name: string; href: string; submenu?: NavigationItem[]; external?: boolean}
}

export interface SocialLink {}
  platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string,}
}

export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: strin,}
}contact: { phone: string; email: string; website: string}certifications: string[,
}

export interface ErrorInfo {}
  message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string}
}

export interface LoadingState {}
  isLoading: boolean; error?: string; progress?: number}
}

export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string,}
}[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}}

export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: strin,}
}team: { lead: string; members: string[]; external: string[,}
}client: { name: string; contact: string; industry: strin,}
}deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Dat,}
}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: strin,}
}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: strin,}
}[]; metrics: { name: string; value: number; unit: string; target: numbe,}
}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[,
}

export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: strin,}
}preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean,}
}activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[,}
}subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[],}
}

export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: strin,}
}category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date}

export interface BaseComponentProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'}
}

export interface InputProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean}
}

export interface ApiRequest {}
  method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any />; headers?: Record<string,string />}
}

export interface Environment {}
  NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
}

export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: strin,}
}features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean}

export interface ContactForm {}
  name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both',}
}

export interface TeamMember {}
  id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string}
}

export interface Testimonial {}
  id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string}
}

export interface CaseStudy {}
  id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean}
}

export interface BlogPost {}
  id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number,}
}

export interface PricingTier {}
  id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string,}
}

export interface ApiResponse<T /> { success: boolean; data?: T; error?: string; message?: string}

export interface PaginationParams {}
  page: number; limit: number; sort?: string; order?: 'asc' | 'desc'}
}

export interface PaginatedResponse<T /> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean,}
}

export interface SEOProps {}
  title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean}
}

export interface PerformanceMetrics {}
  fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number}
}

export interface AccessibilitySettings {}
  highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean,}
}

export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean,}
}

export interface NavigationItem {}
  name: string; href: string; submenu?: NavigationItem[]; external?: boolean}
}

export interface SocialLink {}
  platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string,}
}

export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: strin,}
}contact: { phone: string; email: string; website: string}certifications: string[,
}

export interface ErrorInfo {}
  message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string}
}

export interface LoadingState {}
  isLoading: boolean; error?: string; progress?: number}
}

export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string,}
}[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}}

export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: strin,}
}team: { lead: string; members: string[]; external: string[,}
}client: { name: string; contact: string; industry: strin,}
}deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Dat,}
}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: strin,}
}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: strin,}
}[]; metrics: { name: string; value: number; unit: string; target: numbe,}
}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[,
}

export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: strin,}
}preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean,}
}activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[,}
}subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[],}
}

export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: strin,}
}category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date}

export interface BaseComponentProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'}
}

export interface InputProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean}
}

export interface ApiRequest {}
  method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any />; headers?: Record<string,string />}
}

export interface Environment {}
  NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
}

export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: strin,}
}features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean}

export interface ContactForm {}
  name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both',}
}

export interface TeamMember {}
  id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string}
}

export interface Testimonial {}
  id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string}
}

export interface CaseStudy {}
  id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean}
}

export interface BlogPost {}
  id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number,}
}

export interface PricingTier {}
  id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string,}
}

export interface ApiResponse<T /> { success: boolean; data?: T; error?: string; message?: string}

export interface PaginationParams {}
  page: number; limit: number; sort?: string; order?: 'asc' | 'desc'}
}

export interface PaginatedResponse<T /> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean,}
}

export interface SEOProps {}
  title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean}
}

export interface PerformanceMetrics {}
  fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number}
}

export interface AccessibilitySettings {}
  highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean,}
}

export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean,}
}

export interface NavigationItem {}
  name: string; href: string; submenu?: NavigationItem[]; external?: boolean}
}

export interface SocialLink {}
  platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string,}
}

export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: strin,}
}contact: { phone: string; email: string; website: string}certifications: string[,
}

export interface ErrorInfo {}
  message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string}
}

export interface LoadingState {}
  isLoading: boolean; error?: string; progress?: number}
}

export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string,}
}[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}}

export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: strin,}
}team: { lead: string; members: string[]; external: string[,}
}client: { name: string; contact: string; industry: strin,}
}deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Dat,}
}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: strin,}
}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: strin,}
}[]; metrics: { name: string; value: number; unit: string; target: numbe,}
}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[,
}

export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: strin,}
}preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean,}
}activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[,}
}subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[],}
}

export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: strin,}
}category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date}

export interface BaseComponentProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'}
}

export interface InputProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean}
}

export interface ApiRequest {}
  method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any />; headers?: Record<string,string />}
}

export interface Environment {}
  NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
}

export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: strin,}
}features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean}

export interface ContactForm {}
  name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both',}
}

export interface TeamMember {}
  id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string}
}

export interface Testimonial {}
  id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string}
}

export interface CaseStudy {}
  id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean}
}

export interface BlogPost {}
  id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number,}
}

export interface PricingTier {}
  id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string,}
}

export interface ApiResponse<T /> { success: boolean; data?: T; error?: string; message?: string}

export interface PaginationParams {}
  page: number; limit: number; sort?: string; order?: 'asc' | 'desc'}
}

export interface PaginatedResponse<T /> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean,}
}

export interface SEOProps {}
  title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean}
}

export interface PerformanceMetrics {}
  fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number}
}

export interface AccessibilitySettings {}
  highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean,}
}

export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean,}
}

export interface NavigationItem {}
  name: string; href: string; submenu?: NavigationItem[]; external?: boolean}
}

export interface SocialLink {}
  platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string,}
}

export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: strin,}
}contact: { phone: string; email: string; website: string}certifications: string[,
}

export interface ErrorInfo {}
  message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string}
}

export interface LoadingState {}
  isLoading: boolean; error?: string; progress?: number}
}

export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string,}
}[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}}

export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: strin,}
}team: { lead: string; members: string[]; external: string[,}
}client: { name: string; contact: string; industry: strin,}
}deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Dat,}
}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: strin,}
}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: strin,}
}[]; metrics: { name: string; value: number; unit: string; target: numbe,}
}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[,
}

export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: strin,}
}preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean,}
}activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[,}
}subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[],}
}

export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: strin,}
}category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date}

export interface BaseComponentProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'}
}

export interface InputProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean}
}

export interface ApiRequest {}
  method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any />; headers?: Record<string,string />}
}

export interface Environment {}
  NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
}

export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: strin,}
}features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean}

export interface ContactForm {}
  name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both',}
}

export interface TeamMember {}
  id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string}
}

export interface Testimonial {}
  id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string}
}

export interface CaseStudy {}
  id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean}
}

export interface BlogPost {}
  id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number,}
}

export interface PricingTier {}
  id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string,}
}

export interface ApiResponse<T /> { success: boolean; data?: T; error?: string; message?: string}

export interface PaginationParams {}
  page: number; limit: number; sort?: string; order?: 'asc' | 'desc'}
}

export interface PaginatedResponse<T /> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean,}
}

export interface SEOProps {}
  title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean}
}

export interface PerformanceMetrics {}
  fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number}
}

export interface AccessibilitySettings {}
  highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean,}
}

export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean,}
}

export interface NavigationItem {}
  name: string; href: string; submenu?: NavigationItem[]; external?: boolean}
}

export interface SocialLink {}
  platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string,}
}

export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: strin,}
}contact: { phone: string; email: string; website: string}certifications: string[,
}

export interface ErrorInfo {}
  message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string}
}

export interface LoadingState {}
  isLoading: boolean; error?: string; progress?: number}
}

export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string,}
}[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}}

export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: strin,}
}team: { lead: string; members: string[]; external: string[,}
}client: { name: string; contact: string; industry: strin,}
}deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Dat,}
}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: strin,}
}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: strin,}
}[]; metrics: { name: string; value: number; unit: string; target: numbe,}
}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[,
}

export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: strin,}
}preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean,}
}activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[,}
}subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[],}
}

export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: strin,}
}category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date}

export interface BaseComponentProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'}
}

export interface InputProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean}
}

export interface ApiRequest {}
  method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any />; headers?: Record<string,string />}
}

export interface Environment {}
  NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
}

export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: strin,}
}features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean}

export interface ContactForm {}
  name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both',}
}

export interface TeamMember {}
  id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string}
}

export interface Testimonial {}
  id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string}
}

export interface CaseStudy {}
  id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean}
}

export interface BlogPost {}
  id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number,}
}

export interface PricingTier {}
  id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string,}
}

export interface ApiResponse<T /> { success: boolean; data?: T; error?: string; message?: string}

export interface PaginationParams {}
  page: number; limit: number; sort?: string; order?: 'asc' | 'desc'}
}

export interface PaginatedResponse<T /> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean,}
}

export interface SEOProps {}
  title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean}
}

export interface PerformanceMetrics {}
  fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number}
}

export interface AccessibilitySettings {}
  highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean,}
}

export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean,}
}

export interface NavigationItem {}
  name: string; href: string; submenu?: NavigationItem[]; external?: boolean}
}

export interface SocialLink {}
  platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string,}
}

export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: strin,}
}contact: { phone: string; email: string; website: string}certifications: string[,
}

export interface ErrorInfo {}
  message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string}
}

export interface LoadingState {}
  isLoading: boolean; error?: string; progress?: number}
}

export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string,}
}[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}}

export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: strin,}
}team: { lead: string; members: string[]; external: string[,}
}client: { name: string; contact: string; industry: strin,}
}deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Dat,}
}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: strin,}
}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: strin,}
}[]; metrics: { name: string; value: number; unit: string; target: numbe,}
}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[,
}

export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: strin,}
}preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean,}
}activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[,}
}subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[],}
}

export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: strin,}
}category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date}

export interface BaseComponentProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'}
}

export interface InputProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean}
}

export interface ApiRequest {}
  method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any />; headers?: Record<string,string />}
}

export interface Environment {}
  NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
}

export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: strin,}
}features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean}

export interface ContactForm {}
  name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both',}
}

export interface TeamMember {}
  id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string}
}

export interface Testimonial {}
  id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string}
}

export interface CaseStudy {}
  id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean}
}

export interface BlogPost {}
  id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number,}
}

export interface PricingTier {}
  id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string,}
}

export interface ApiResponse<T /> { success: boolean; data?: T; error?: string; message?: string}

export interface PaginationParams {}
  page: number; limit: number; sort?: string; order?: 'asc' | 'desc'}
}

export interface PaginatedResponse<T /> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean,}
}

export interface SEOProps {}
  title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean}
}

export interface PerformanceMetrics {}
  fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number}
}

export interface AccessibilitySettings {}
  highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean,}
}

export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean,}
}

export interface NavigationItem {}
  name: string; href: string; submenu?: NavigationItem[]; external?: boolean}
}

export interface SocialLink {}
  platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string,}
}

export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: strin,}
}contact: { phone: string; email: string; website: string}certifications: string[,
}

export interface ErrorInfo {}
  message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string}
}

export interface LoadingState {}
  isLoading: boolean; error?: string; progress?: number}
}

export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string,}
}[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}}

export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: strin,}
}team: { lead: string; members: string[]; external: string[,}
}client: { name: string; contact: string; industry: strin,}
}deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Dat,}
}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: strin,}
}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: strin,}
}[]; metrics: { name: string; value: number; unit: string; target: numbe,}
}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[,
}

export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: strin,}
}preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean,}
}activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[,}
}subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[],}
}

export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: strin,}
}category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date}

export interface BaseComponentProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'}
}

export interface InputProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean}
}

export interface ApiRequest {}
  method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any />; headers?: Record<string,string />}
}

export interface Environment {}
  NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
}

export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: strin,}
}features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean}

export interface ContactForm {}
  name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both',}
}

export interface TeamMember {}
  id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string}
}

export interface Testimonial {}
  id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string}
}

export interface CaseStudy {}
  id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean}
}

export interface BlogPost {}
  id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number,}
}

export interface PricingTier {}
  id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string,}
}

export interface ApiResponse<T /> { success: boolean; data?: T; error?: string; message?: string}

export interface PaginationParams {}
  page: number; limit: number; sort?: string; order?: 'asc' | 'desc'}
}

export interface PaginatedResponse<T /> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean,}
}

export interface SEOProps {}
  title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean}
}

export interface PerformanceMetrics {}
  fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number}
}

export interface AccessibilitySettings {}
  highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean,}
}

export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean,}
}

export interface NavigationItem {}
  name: string; href: string; submenu?: NavigationItem[]; external?: boolean}
}

export interface SocialLink {}
  platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string,}
}

export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: strin,}
}contact: { phone: string; email: string; website: string}certifications: string[,
}

export interface ErrorInfo {}
  message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string}
}

export interface LoadingState {}
  isLoading: boolean; error?: string; progress?: number}
}

export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string,}
}[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}}

export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: strin,}
}team: { lead: string; members: string[]; external: string[,}
}client: { name: string; contact: string; industry: strin,}
}deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Dat,}
}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: strin,}
}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: strin,}
}[]; metrics: { name: string; value: number; unit: string; target: numbe,}
}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[,
}

export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: strin,}
}preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean,}
}activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[,}
}subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[],}
}

export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: strin,}
}category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date}

export interface BaseComponentProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'}
}

export interface InputProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean}
}

export interface ApiRequest {}
  method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any />; headers?: Record<string,string />}
}

export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
  NEXT_PUBLIC_SENTRY_DSN?: string;
}}ursor/fix-website-loading-errors-and-merge-6662;

export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: strin,}
}features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean}

export interface ContactForm {}
  name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both',}
}

export interface TeamMember {}
  id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string}
}

export interface Testimonial {}
  id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string}
}

export interface CaseStudy {}
  id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean}
}

export interface BlogPost {}
  id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number,}
}

export interface PricingTier {}
  id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string,}
}

export interface ApiResponse<T /> { success: boolean; data?: T; error?: string; message?: string}

export interface PaginationParams {}
  page: number; limit: number; sort?: string; order?: 'asc' | 'desc'}
}

export interface PaginatedResponse<T /> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean,}
}

export interface SEOProps {}
  title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean}
}

export interface PerformanceMetrics {}
  fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number}
}

export interface AccessibilitySettings {}
  highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean,}
}

export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean,}
}

export interface NavigationItem {}
  name: string; href: string; submenu?: NavigationItem[]; external?: boolean}
}

export interface SocialLink {}
  platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string,}
}

export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: strin,}
}contact: { phone: string; email: string; website: string}certifications: string[,
}

export interface ErrorInfo {}
  message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string}
}

export interface LoadingState {}
  isLoading: boolean; error?: string; progress?: number}
}

export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string,}
}[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}}

export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: strin,}
}team: { lead: string; members: string[]; external: string[,}
}client: { name: string; contact: string; industry: strin,}
}deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Dat,}
}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: strin,}
}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: strin,}
}[]; metrics: { name: string; value: number; unit: string; target: numbe,}
}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[,
}

export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: strin,}
}preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean,}
}activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[,}
}subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[],}
}

export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: strin,}
}category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date}

export interface BaseComponentProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'}
}

export interface InputProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean}
}

export interface ApiRequest {}
  method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any />; headers?: Record<string,string />}
}

export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
  NEXT_PUBLIC_SENTRY_DSN?: string;
}

export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: strin,}
}features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean}

export interface ContactForm {}
  name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both',}
}

export interface TeamMember {}
  id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string}
}

export interface Testimonial {}
  id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string}
}

export interface CaseStudy {}
  id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean}
}

export interface BlogPost {}
  id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number,}
}

export interface PricingTier {}
  id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string,}
}

export interface ApiResponse<T /> { success: boolean; data?: T; error?: string; message?: string}

export interface PaginationParams {}
  page: number; limit: number; sort?: string; order?: 'asc' | 'desc'}
}

export interface PaginatedResponse<T /> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean,}
}

export interface SEOProps {}
  title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean}
}

export interface PerformanceMetrics {}
  fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number}
}

export interface AccessibilitySettings {}
  highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean,}
}

export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean,}
}

export interface NavigationItem {}
  name: string; href: string; submenu?: NavigationItem[]; external?: boolean}
}

export interface SocialLink {}
  platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string,}
}

export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: strin,}
}contact: { phone: string; email: string; website: string}certifications: string[,
}

export interface ErrorInfo {}
  message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string}
}

export interface LoadingState {}
  isLoading: boolean; error?: string; progress?: number}
}

export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string,}
}[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}}

export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: strin,}
}team: { lead: string; members: string[]; external: string[,}
}client: { name: string; contact: string; industry: strin,}
}deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Dat,}
}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: strin,}
}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: strin,}
}[]; metrics: { name: string; value: number; unit: string; target: numbe,}
}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[,
}

export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: strin,}
}preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean,}
}activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[,}
}subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[],}
}

export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: strin,}
}category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date}

export interface BaseComponentProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'}
}

export interface InputProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean}
}

export interface ApiRequest {}
  method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any />; headers?: Record<string,string />}
}

export interface Environment {}
  NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
}

export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: strin,}
}features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean}

export interface ContactForm {}
  name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both',}
}

export interface TeamMember {}
  id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string}
}

export interface Testimonial {}
  id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string}
}

export interface CaseStudy {}
  id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean}
}

export interface BlogPost {}
  id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number,}
}

export interface PricingTier {}
  id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string,}
}

export interface ApiResponse<T /> { success: boolean; data?: T; error?: string; message?: string}

export interface PaginationParams {}
  page: number; limit: number; sort?: string; order?: 'asc' | 'desc'}
}

export interface PaginatedResponse<T /> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean,}
}

export interface SEOProps {}
  title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean}
}

export interface PerformanceMetrics {}
  fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number}
}

export interface AccessibilitySettings {}
  highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean,}
}

export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean,}
}

export interface NavigationItem {}
  name: string; href: string; submenu?: NavigationItem[]; external?: boolean}
}

export interface SocialLink {}
  platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string,}
}

export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: strin,}
}contact: { phone: string; email: string; website: string}certifications: string[,
}

export interface ErrorInfo {}
  message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string}
}

export interface LoadingState {}
  isLoading: boolean; error?: string; progress?: number}
}

export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string,}
}[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}}

export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: strin,}
}team: { lead: string; members: string[]; external: string[,}
}client: { name: string; contact: string; industry: strin,}
}deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Dat,}
}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: strin,}
}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: strin,}
}[]; metrics: { name: string; value: number; unit: string; target: numbe,}
}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[,
}

export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: strin,}
}preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean,}
}activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[,}
}subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[],}
}

export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: strin,}
}category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date}

export interface BaseComponentProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'}
}

export interface InputProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean}
}

export interface ApiRequest {}
  method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any />; headers?: Record<string,string />}
}

export interface Environment {}
  NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
}

export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: strin,}
}features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean}

export interface ContactForm {}
  name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both',}
}

export interface TeamMember {}
  id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string}
}

export interface Testimonial {}
  id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string}
}

export interface CaseStudy {}
  id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean}
}

export interface BlogPost {}
  id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number,}
}

export interface PricingTier {}
  id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string,}
}

export interface ApiResponse<T /> { success: boolean; data?: T; error?: string; message?: string}

export interface PaginationParams {}
  page: number; limit: number; sort?: string; order?: 'asc' | 'desc'}
}

export interface PaginatedResponse<T /> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean,}
}

export interface SEOProps {}
  title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean}
}

export interface PerformanceMetrics {}
  fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number}
}

export interface AccessibilitySettings {}
  highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean,}
}

export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean,}
}

export interface NavigationItem {}
  name: string; href: string; submenu?: NavigationItem[]; external?: boolean}
}

export interface SocialLink {}
  platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string,}
}

export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: strin,}
}contact: { phone: string; email: string; website: string}certifications: string[,
}

export interface ErrorInfo {}
  message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string}
}

export interface LoadingState {}
  isLoading: boolean; error?: string; progress?: number}
}

export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string,}
}[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}}

export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: strin,}
}team: { lead: string; members: string[]; external: string[,}
}client: { name: string; contact: string; industry: strin,}
}deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Dat,}
}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: strin,}
}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: strin,}
}[]; metrics: { name: string; value: number; unit: string; target: numbe,}
}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[,
}

export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: strin,}
}preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean,}
}activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[,}
}subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[],}
}

export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: strin,}
}category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date}

export interface BaseComponentProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'}
}

export interface InputProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean}
}

export interface ApiRequest {}
  method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any />; headers?: Record<string,string />}
}

export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
  NEXT_PUBLIC_SENTRY_DSN?: string;// Environment;

export interface Environment  {NODE_ENV: 'development' | 'production' | 'test';}
}
export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: string},
}; features: 'string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean;' }

export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both'},
}

export interface TeamMember { id: 'string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string;' } }

export interface Testimonial { id: 'string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string;' } }

export interface CaseStudy { id: 'string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean;' } }

export interface BlogPost { id: 'string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number;' } }

export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string},
}

export interface ApiResponse<T /> { success: 'boolean; data?: T; error?: string; message?: string;' }

export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | 'desc'} }

export interface PaginatedResponse<T /> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean,}
}

export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} }

export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} }

export interface AccessibilitySettings { highContrast: 'boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean;' } }

export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean} ,
}

export interface NavigationItem { name: 'string; href: string; submenu?: NavigationItem[]; external?: boolean;' } }

export interface SocialLink { platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string},
}

export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string},
}; contact: { phone: string; email: string; website: strin,}
}; certifications: 'string[];' }

export interface ErrorInfo { message: 'string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string;' } }

export interface LoadingState { isLoading: 'boolean; error?: string; progress?: number;' } }

export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string} options?: { value: 'string; label: string',}
}[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}}

export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string},
}; team: { lead: string; members: string[]; external: string[,}
}; client: { name: string; contact: string; industry: strin,}
}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Dat,}
}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: strin,}
}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: strin,}
}[]; metrics: { name: string; value: number; unit: string; target: numbe,}
}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[,
}

export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string},
}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean,}
}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[,}
}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[],}
}

export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string},
}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date}

export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'} }

export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: 'string) => void; error?: string; required?: boolean;' } }

export interface ApiRequest { method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any /> headers?: Record<string,string /> } }

export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string} }

export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: strin,}
}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean}

export interface ContactForm {}
  name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both',}
}

export interface TeamMember {}
  id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string}
}

export interface Testimonial {}
  id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string}
}

export interface CaseStudy {}
  id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean}
}

export interface BlogPost {}
  id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number,}
}

export interface PricingTier {}
  id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string,}
}

export interface ApiResponse<T /> { success: boolean; data?: T; error?: string; message?: string}

export interface PaginationParams {}
  page: number; limit: number; sort?: string; order?: 'asc' | 'desc'}
}

export interface PaginatedResponse<T /> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean,}
}

export interface SEOProps {}
  title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean}
}

export interface PerformanceMetrics {}
  fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number}
}

export interface AccessibilitySettings {}
  highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean,}
}

export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean,}
}

export interface NavigationItem {}
  name: string; href: string; submenu?: NavigationItem[]; external?: boolean}
}

export interface SocialLink {}
  platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string,}
}

export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: strin,}
}; contact: { phone: string; email: string; website: strin,}
}; certifications: string[,
}

export interface ErrorInfo {}
  message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string}
}

export interface LoadingState {}
  isLoading: boolean; error?: string; progress?: number}
}

export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string,}
}[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}}

export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: strin,}
}; team: { lead: string; members: string[]; external: string[,}
}; client: { name: string; contact: string; industry: strin,}
}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Dat,}
}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: strin,}
}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: strin,}
}[]; metrics: { name: string; value: number; unit: string; target: numbe,}
}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[,
}

export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: strin,}
}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean,}
}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[,}
}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[],}
}

export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: strin,}
}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date}

export interface BaseComponentProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'}
}

export interface InputProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean}
}

export interface ApiRequest {}
  method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any />; headers?: Record<string,string />}
}

export interface Environment {}
  NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
}

export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: strin,}
}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean}

export interface ContactForm {}
  name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both',}
}

export interface TeamMember {}
  id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string}
}

export interface Testimonial {}
  id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string}
}

export interface CaseStudy {}
  id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean}
}

export interface BlogPost {}
  id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number,}
}

export interface PricingTier {}
  id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string,}
}

export interface ApiResponse<T /> { success: boolean; data?: T; error?: string; message?: string}

export interface PaginationParams {}
  page: number; limit: number; sort?: string; order?: 'asc' | 'desc'}
}

export interface PaginatedResponse<T /> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean,}
}

export interface SEOProps {}
  title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean}
}

export interface PerformanceMetrics {}
  fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number}
}

export interface AccessibilitySettings {}
  highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean,}
}

export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean,}
}

export interface NavigationItem {}
  name: string; href: string; submenu?: NavigationItem[]; external?: boolean}
}

export interface SocialLink {}
  platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string,}
}

export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: strin,}
}; contact: { phone: string; email: string; website: strin,}
}; certifications: string[,
}

export interface ErrorInfo {}
  message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string}
}

export interface LoadingState {}
  isLoading: boolean; error?: string; progress?: number}
}

export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string,}
}[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}}

export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: strin,}
}; team: { lead: string; members: string[]; external: string[,}
}; client: { name: string; contact: string; industry: strin,}
}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Dat,}
}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: strin,}
}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: strin,}
}[]; metrics: { name: string; value: number; unit: string; target: numbe,}
}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[,
}

export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: strin,}
}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean,}
}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[,}
}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[],}
}

export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: strin,}
}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date}

export interface BaseComponentProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'}
}

export interface InputProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean}
}

export interface ApiRequest {}
  method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any />; headers?: Record<string,string />}
}

export interface Environment {}
  NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
}

export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: strin,}
}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean}

export interface ContactForm {}
  name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both',}
}

export interface TeamMember {}
  id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string}
}

export interface Testimonial {}
  id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string}
}

export interface CaseStudy {}
  id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean}
}

export interface BlogPost {}
  id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number,}
}

export interface PricingTier {}
  id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string,}
}

export interface ApiResponse<T /> { success: boolean; data?: T; error?: string; message?: string}

export interface PaginationParams {}
  page: number; limit: number; sort?: string; order?: 'asc' | 'desc'}
}

export interface PaginatedResponse<T /> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean,}
}

export interface SEOProps {}
  title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean}
}

export interface PerformanceMetrics {}
  fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number}
}

export interface AccessibilitySettings {}
  highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean,}
}

export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean,}
}

export interface NavigationItem {}
  name: string; href: string; submenu?: NavigationItem[]; external?: boolean}
}

export interface SocialLink {}
  platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string,}
}

export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: strin,}
}; contact: { phone: string; email: string; website: strin,}
}; certifications: string[,
}

export interface ErrorInfo {}
  message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string}
}

export interface LoadingState {}
  isLoading: boolean; error?: string; progress?: number}
}

export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string,}
}[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}}

export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: strin,}
}; team: { lead: string; members: string[]; external: string[,}
}; client: { name: string; contact: string; industry: strin,}
}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Dat,}
}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: strin,}
}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: strin,}
}[]; metrics: { name: string; value: number; unit: string; target: numbe,}
}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[,
}

export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: strin,}
}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean,}
}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[,}
}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[],}
}

export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: strin,}
}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date}

export interface BaseComponentProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'}
}

export interface InputProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean}
}

export interface ApiRequest {}
  method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any />; headers?: Record<string,string />}
}

export interface Environment {}
  NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
}

export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: strin,}
}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean}

export interface ContactForm {}
  name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both',}
}

export interface TeamMember {}
  id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string}
}

export interface Testimonial {}
  id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string}
}

export interface CaseStudy {}
  id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean}
}

export interface BlogPost {}
  id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number,}
}

export interface PricingTier {}
  id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string,}
}

export interface ApiResponse<T /> { success: boolean; data?: T; error?: string; message?: string}

export interface PaginationParams {}
  page: number; limit: number; sort?: string; order?: 'asc' | 'desc'}
}

export interface PaginatedResponse<T /> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean,}
}

export interface SEOProps {}
  title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean}
}

export interface PerformanceMetrics {}
  fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number}
}

export interface AccessibilitySettings {}
  highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean,}
}

export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean,}
}

export interface NavigationItem {}
  name: string; href: string; submenu?: NavigationItem[]; external?: boolean}
}

export interface SocialLink {}
  platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string,}
}

export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: strin,}
}; contact: { phone: string; email: string; website: strin,}
}; certifications: string[,
}

export interface ErrorInfo {}
  message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string}
}

export interface LoadingState {}
  isLoading: boolean; error?: string; progress?: number}
}

export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string,}
}[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}}

export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: strin,}
}; team: { lead: string; members: string[]; external: string[,}
}; client: { name: string; contact: string; industry: strin,}
}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Dat,}
}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: strin,}
}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: strin,}
}[]; metrics: { name: string; value: number; unit: string; target: numbe,}
}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[,
}

export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: strin,}
}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean,}
}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[,}
}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[],}
}

export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: strin,}
}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date}

export interface BaseComponentProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'}
}

export interface InputProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean}
}

export interface ApiRequest {}
  method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any />; headers?: Record<string,string />}
}

export interface Environment {}
  NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
}

export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: strin,}
}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean}

export interface ContactForm {}
  name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both',}
}

export interface TeamMember {}
  id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string}
}

export interface Testimonial {}
  id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string}
}

export interface CaseStudy {}
  id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean}
}

export interface BlogPost {}
  id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number,}
}

export interface PricingTier {}
  id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string,}
}

export interface ApiResponse<T /> { success: boolean; data?: T; error?: string; message?: string}

export interface PaginationParams {}
  page: number; limit: number; sort?: string; order?: 'asc' | 'desc'}
}

export interface PaginatedResponse<T /> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean,}
}

export interface SEOProps {}
  title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean}
}

export interface PerformanceMetrics {}
  fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number}
}

export interface AccessibilitySettings {}
  highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean,}
}

export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean,}
}

export interface NavigationItem {}
  name: string; href: string; submenu?: NavigationItem[]; external?: boolean}
}

export interface SocialLink {}
  platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string,}
}

export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: strin,}
}; contact: { phone: string; email: string; website: strin,}
}; certifications: string[,
}

export interface ErrorInfo {}
  message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string}
}

export interface LoadingState {}
  isLoading: boolean; error?: string; progress?: number}
}

export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string,}
}[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}}

export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: strin,}
}; team: { lead: string; members: string[]; external: string[,}
}; client: { name: string; contact: string; industry: strin,}
}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Dat,}
}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: strin,}
}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: strin,}
}[]; metrics: { name: string; value: number; unit: string; target: numbe,}
}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[,
}

export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: strin,}
}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean,}
}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[,}
}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[],}
}

export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: strin,}
}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date}

export interface BaseComponentProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'}
}

export interface InputProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean}
}

export interface ApiRequest {}
  method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any />; headers?: Record<string,string />}
}

export interface Environment {}
  NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
}

export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: strin,}
}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean}

export interface ContactForm {}
  name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both',}
}

export interface TeamMember {}
  id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string}
}

export interface Testimonial {}
  id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string}
}

export interface CaseStudy {}
  id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean}
}

export interface BlogPost {}
  id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number,}
}

export interface PricingTier {}
  id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string,}
}

export interface ApiResponse<T /> { success: boolean; data?: T; error?: string; message?: string}

export interface PaginationParams {}
  page: number; limit: number; sort?: string; order?: 'asc' | 'desc'}
}

export interface PaginatedResponse<T /> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean,}
}

export interface SEOProps {}
  title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean}
}

export interface PerformanceMetrics {}
  fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number}
}

export interface AccessibilitySettings {}
  highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean,}
}

export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean,}
}

export interface NavigationItem {}
  name: string; href: string; submenu?: NavigationItem[]; external?: boolean}
}

export interface SocialLink {}
  platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string,}
}

export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: strin,}
}; contact: { phone: string; email: string; website: strin,}
}; certifications: string[,
}

export interface ErrorInfo {}
  message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string}
}

export interface LoadingState {}
  isLoading: boolean; error?: string; progress?: number}
}

export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string,}
}[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}}

export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: strin,}
}; team: { lead: string; members: string[]; external: string[,}
}; client: { name: string; contact: string; industry: strin,}
}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Dat,}
}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: strin,}
}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: strin,}
}[]; metrics: { name: string; value: number; unit: string; target: numbe,}
}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[,
}

export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: strin,}
}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean,}
}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[,}
}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[],}
}

export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: strin,}
}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date}

export interface BaseComponentProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'}
}

export interface InputProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean}
}

export interface ApiRequest {}
  method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any />; headers?: Record<string,string />}
}

export interface Environment {}
  NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
}

export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: strin,}
}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean}

export interface ContactForm {}
  name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both',}
}

export interface TeamMember {}
  id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string}
}

export interface Testimonial {}
  id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string}
}

export interface CaseStudy {}
  id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean}
}

export interface BlogPost {}
  id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number,}
}

export interface PricingTier {}
  id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string,}
}

export interface ApiResponse<T /> { success: boolean; data?: T; error?: string; message?: string}

export interface PaginationParams {}
  page: number; limit: number; sort?: string; order?: 'asc' | 'desc'}
}

export interface PaginatedResponse<T /> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean,}
}

export interface SEOProps {}
  title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean}
}

export interface PerformanceMetrics {}
  fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number}
}

export interface AccessibilitySettings {}
  highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean,}
}

export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean,}
}

export interface NavigationItem {}
  name: string; href: string; submenu?: NavigationItem[]; external?: boolean}
}

export interface SocialLink {}
  platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string,}
}

export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: strin,}
}; contact: { phone: string; email: string; website: strin,}
}; certifications: string[,
}

export interface ErrorInfo {}
  message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string}
}

export interface LoadingState {}
  isLoading: boolean; error?: string; progress?: number}
}

export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string,}
}[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}}

export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: strin,}
}; team: { lead: string; members: string[]; external: string[,}
}; client: { name: string; contact: string; industry: strin,}
}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Dat,}
}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: strin,}
}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: strin,}
}[]; metrics: { name: string; value: number; unit: string; target: numbe,}
}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[,
}

export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: strin,}
}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean,}
}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[,}
}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[],}
}

export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: strin,}
}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date}

export interface BaseComponentProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'}
}

export interface InputProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean}
}

export interface ApiRequest {}
  method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any />; headers?: Record<string,string />}
}

export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
  NEXT_PUBLIC_SENTRY_DSN?: string;
}

}


// Environment;

export interface Environment {
  NODE_ENV: 'development' | 'production' | 'test';
  NEXT_PUBLIC_API_URL?: string;
  NEXT_PUBLIC_APP_URL?: string;
  NEXT_PUBLIC_GA_ID?: string;
  NEXT_PUBLIC_SENTRY_DSN?: string;}
}
}

=======
  preferences: {
    weekly: boolean;
    monthly: boolean;
    productUpdates: boolean;}
    caseStudies: boolean;}
  };
}

// Technology interfaces;
export interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'mobile' | 'ai' | 'devops';
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  yearsOfExperience: number;}
  projects: number;}
}

// Partner interfaces;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-53a1;
export interface Partner {
  name: string;
  logo: string;
  website: string;
  description: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';}
}
}

<<<<<<< HEAD;
export interface Award {
  title: string;

=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-53a1;
export interface Award {
  title: string;
  organization: string;
  year: number;
  description: string;
  image?: string;}
}
}

<<<<<<< HEAD;
export interface Certification {
  name: string;

=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-53a1;
export interface Certification {
  name: string;
  issuer: string;
  date: string;
  expiry?: string;
  credentialId?: string;
  image?: string;}
}
}

<<<<<<< HEAD;
export interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'mobile' | 'ai' | 'devops';
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  yearsOfExperience: number;
  projects: number;}
}
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
  source?: string;}
}
}

export interface NewsletterSubscription {
  email: string;
  interests: string[];
  frequency: 'daily' | 'weekly' | 'monthly';
  subscribed: boolean;
  subscribed_at: string;}
}
}

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'page' | 'blog' | 'service' | 'case - study' | 'job';
  score: number;
  highlights?: string[];}
}
}

export interface FilterOption {
  label: string;
  value: string;
  count?: number;}
}
}

export interface SortOption {
  label: string;
  value: string;
  direction: 'asc' | 'desc';}
}
}

export interface Pagination  {current_page: number;
  total_pages: number;
  total_items: number;
  itemsPerPage: number;
  has_next: boolean;
  has_prev: boolean;
=======
// Environment;
export interface Environment {
  NODE_ENV: 'development' | 'production' | 'test';
  NEXT_PUBLIC_API_URL?: string;
  NEXT_PUBLIC_APP_URL?: string;
  NEXT_PUBLIC_GA_ID?: string;
  NEXT_PUBLIC_SENTRY_DSN?: string;}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-53a1}
}

// API Response interfaces;
export interface ApiResponse<T /> {
  data: T;
  message: string;
  success: boolean;}
  timestamp: string;}
}

<<<<<<< HEAD;
export interface ErrorResponse  {success: false;
=======
export interface PaginatedResponse<T /> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;}
    totalPages: number;}
  };
}

// Error interfaces;
export interface ApiError {
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-53a1;
message: string;
  code: string;
  details?: any;}
  timestamp: string;}
}

// Component props interfaces;
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;}
  type?: 'button' | 'submit' | 'reset';}
}

<<<<<<< HEAD;
export type Response<T /> = SuccessResponse<T /> | ErrorResponse;ursor/fix-website-loading-errors-and-merge-6662;
}

export type Response<T /> = SuccessResponse<T /> | ErrorResponse;

export type Response < T>  = SuccessResponse < T> | ErrorResponse;}
ursor/fix-netlify-build-and-merge-to-main-9571;

export type Response<T /> = SuccessResponse<T /> | ErrorResponse;

export type Response < T> = SuccessResponse < T> | ErrorResponse;}
  NEXT_PUBLIC_SENTRY_DSN?: string}

export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: string},
}features: 'string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean;' }

export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both'},
}

export interface TeamMember { id: 'string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string;' } }

export interface Testimonial { id: 'string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string;' } }

export interface CaseStudy { id: 'string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean;' } }

export interface BlogPost { id: 'string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number;' } }

export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string},
}

export interface ApiResponse<T /> { success: 'boolean; data?: T; error?: string; message?: string;' }

export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | 'desc'} }

export interface PaginatedResponse<T /> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean,}
}

export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} }

export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} }

export interface AccessibilitySettings { highContrast: 'boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean;' } }

export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean} ,
}

export interface NavigationItem { name: 'string; href: string; submenu?: NavigationItem[]; external?: boolean;' } }

export interface SocialLink { platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string},
}

export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string},
}contact: { phone: string; email: string; website: strin,}
}certifications: 'string[];' }

export interface ErrorInfo { message: 'string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string;' } }

export interface LoadingState { isLoading: 'boolean; error?: string; progress?: number;' } }

export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string} options?: { value: 'string; label: string',}
}[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}}

export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string},
}team: { lead: string; members: string[]; external: string[,}
}client: { name: string; contact: string; industry: strin,}
}deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Dat,}
}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: strin,}
}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: strin,}
}[]; metrics: { name: string; value: number; unit: string; target: numbe,}
}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[,
}

export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string},
}preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean,}
}activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[,}
}subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[],}
}

export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string},
}category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date}

export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'} }

export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: 'string) => void; error?: string; required?: boolean;' } }

export interface ApiRequest { method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any /> headers?: Record<string,string /> } }

export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string} }

export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: strin,}
}features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean}

export interface ContactForm {}
  name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both',}
}

export interface TeamMember {}
  id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string}
}

export interface Testimonial {}
  id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string}
}

export interface CaseStudy {}
  id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean}
}

export interface BlogPost {}
  id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number,}
}

export interface PricingTier {}
  id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string,}
}

export interface ApiResponse<T /> { success: boolean; data?: T; error?: string; message?: string}

export interface PaginationParams {}
  page: number; limit: number; sort?: string; order?: 'asc' | 'desc'}
}

export interface PaginatedResponse<T /> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean,}
}

export interface SEOProps {}
  title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean}
}

export interface PerformanceMetrics {}
  fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number}
}

export interface AccessibilitySettings {}
  highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean,}
}

export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean,}
}

export interface NavigationItem {}
  name: string; href: string; submenu?: NavigationItem[]; external?: boolean}
}

export interface SocialLink {}
  platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string,}
}

export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: strin,}
}contact: { phone: string; email: string; website: string}certifications: string[,
}

export interface ErrorInfo {}
  message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string}
}

export interface LoadingState {}
  isLoading: boolean; error?: string; progress?: number}
}

export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string,}
}[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}}

export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: strin,}
}team: { lead: string; members: string[]; external: string[,}
}client: { name: string; contact: string; industry: strin,}
}deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Dat,}
}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: strin,}
}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: strin,}
}[]; metrics: { name: string; value: number; unit: string; target: numbe,}
}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[,
}

export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: strin,}
}preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean,}
}activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[,}
}subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[],}
}

export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: strin,}
}category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date}

export interface BaseComponentProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'}
}

export interface InputProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean}
}

export interface ApiRequest {}
  method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any />; headers?: Record<string,string />}
}

export interface Environment {}
  NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
}

export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: strin,}
}features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean}

export interface ContactForm {}
  name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both',}
}

export interface TeamMember {}
  id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string}
}

export interface Testimonial {}
  id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string}
}

export interface CaseStudy {}
  id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean}
}

export interface BlogPost {}
  id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number,}
}

export interface PricingTier {}
  id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string,}
}

export interface ApiResponse<T /> { success: boolean; data?: T; error?: string; message?: string}

export interface PaginationParams {}
  page: number; limit: number; sort?: string; order?: 'asc' | 'desc'}
}

export interface PaginatedResponse<T /> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean,}
}

export interface SEOProps {}
  title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean}
}

export interface PerformanceMetrics {}
  fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number}
}

export interface AccessibilitySettings {}
  highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean,}
}

export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean,}
}

export interface NavigationItem {}
  name: string; href: string; submenu?: NavigationItem[]; external?: boolean}
}

export interface SocialLink {}
  platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string,}
}

export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: strin,}
}contact: { phone: string; email: string; website: string}certifications: string[,
}

export interface ErrorInfo {}
  message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string}
}

export interface LoadingState {}
  isLoading: boolean; error?: string; progress?: number}
}

export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string,}
}[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}}

export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: strin,}
}team: { lead: string; members: string[]; external: string[,}
}client: { name: string; contact: string; industry: strin,}
}deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Dat,}
}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: strin,}
}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: strin,}
}[]; metrics: { name: string; value: number; unit: string; target: numbe,}
}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[,
}

export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: strin,}
}preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean,}
}activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[,}
}subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[],}
}

export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: strin,}
}category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date}

export interface BaseComponentProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'}
}

export interface InputProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean}
}

export interface ApiRequest {}
  method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any />; headers?: Record<string,string />}
}

export interface Environment {}
  NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
}

export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: strin,}
}features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean}

export interface ContactForm {}
  name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both',}
}

export interface TeamMember {}
  id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string}
}

export interface Testimonial {}
  id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string}
}

export interface CaseStudy {}
  id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean}
}

export interface BlogPost {}
  id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number,}
}

export interface PricingTier {}
  id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string,}
}

export interface ApiResponse<T /> { success: boolean; data?: T; error?: string; message?: string}

export interface PaginationParams {}
  page: number; limit: number; sort?: string; order?: 'asc' | 'desc'}
}

export interface PaginatedResponse<T /> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean,}
}

export interface SEOProps {}
  title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean}
}

export interface PerformanceMetrics {}
  fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number}
}

export interface AccessibilitySettings {}
  highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean,}
}

export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean,}
}

export interface NavigationItem {}
  name: string; href: string; submenu?: NavigationItem[]; external?: boolean}
}

export interface SocialLink {}
  platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string,}
}

export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: strin,}
}contact: { phone: string; email: string; website: string}certifications: string[,
}

export interface ErrorInfo {}
  message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string}
}

export interface LoadingState {}
  isLoading: boolean; error?: string; progress?: number}
}

export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string,}
}[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}}

export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: strin,}
}team: { lead: string; members: string[]; external: string[,}
}client: { name: string; contact: string; industry: strin,}
}deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Dat,}
}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: strin,}
}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: strin,}
}[]; metrics: { name: string; value: number; unit: string; target: numbe,}
}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[,
}

export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: strin,}
}preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean,}
}activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[,}
}subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[],}
}

export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: strin,}
}category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date}

export interface BaseComponentProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'}
}

export interface InputProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean}
}

export interface ApiRequest {}
  method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any />; headers?: Record<string,string />}
}

export interface Environment {}
  NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
}

export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: strin,}
}features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean}

export interface ContactForm {}
  name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both',}
}

export interface TeamMember {}
  id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string}
}

export interface Testimonial {}
  id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string}
}

export interface CaseStudy {}
  id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean}
}

export interface BlogPost {}
  id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number,}
}

export interface PricingTier {}
  id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string,}
}

export interface ApiResponse<T /> { success: boolean; data?: T; error?: string; message?: string}

export interface PaginationParams {}
  page: number; limit: number; sort?: string; order?: 'asc' | 'desc'}
}

export interface PaginatedResponse<T /> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean,}
}

export interface SEOProps {}
  title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean}
}

export interface PerformanceMetrics {}
  fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number}
}

export interface AccessibilitySettings {}
  highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean,}
}

export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean,}
}

export interface NavigationItem {}
  name: string; href: string; submenu?: NavigationItem[]; external?: boolean}
}

export interface SocialLink {}
  platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string,}
}

export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: strin,}
}contact: { phone: string; email: string; website: string}certifications: string[,
}

export interface ErrorInfo {}
  message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string}
}

export interface LoadingState {}
  isLoading: boolean; error?: string; progress?: number}
}

export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string,}
}[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}}

export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: strin,}
}team: { lead: string; members: string[]; external: string[,}
}client: { name: string; contact: string; industry: strin,}
}deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Dat,}
}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: strin,}
}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: strin,}
}[]; metrics: { name: string; value: number; unit: string; target: numbe,}
}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[,
}

export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: strin,}
}preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean,}
}activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[,}
}subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[],}
}

export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: strin,}
}category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date}

export interface BaseComponentProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'}
}

export interface InputProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean}
}

export interface ApiRequest {}
  method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any />; headers?: Record<string,string />}
}

export interface Environment {}
  NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
}

export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: strin,}
}features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean}

export interface ContactForm {}
  name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both',}
}

export interface TeamMember {}
  id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string}
}

export interface Testimonial {}
  id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string}
}

export interface CaseStudy {}
  id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean}
}

export interface BlogPost {}
  id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number,}
}

export interface PricingTier {}
  id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string,}
}

export interface ApiResponse<T /> { success: boolean; data?: T; error?: string; message?: string}

export interface PaginationParams {}
  page: number; limit: number; sort?: string; order?: 'asc' | 'desc'}
}

export interface PaginatedResponse<T /> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean,}
}

export interface SEOProps {}
  title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean}
}

export interface PerformanceMetrics {}
  fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number}
}

export interface AccessibilitySettings {}
  highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean,}
}

export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean,}
}

export interface NavigationItem {}
  name: string; href: string; submenu?: NavigationItem[]; external?: boolean}
}

export interface SocialLink {}
  platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string,}
}

export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: strin,}
}contact: { phone: string; email: string; website: string}certifications: string[,
}

export interface ErrorInfo {}
  message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string}
}

export interface LoadingState {}
  isLoading: boolean; error?: string; progress?: number}
}

export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string,}
}[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}}

export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: strin,}
}team: { lead: string; members: string[]; external: string[,}
}client: { name: string; contact: string; industry: strin,}
}deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Dat,}
}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: strin,}
}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: strin,}
}[]; metrics: { name: string; value: number; unit: string; target: numbe,}
}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[,
}

export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: strin,}
}preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean,}
}activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[,}
}subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[],}
}

export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: strin,}
}category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date}

export interface BaseComponentProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'}
}

export interface InputProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean}
}

export interface ApiRequest {}
  method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any />; headers?: Record<string,string />}
}

export interface Environment {}
  NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
}

export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: strin,}
}features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean}

export interface ContactForm {}
  name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both',}
}

export interface TeamMember {}
  id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string}
}

export interface Testimonial {}
  id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string}
}

export interface CaseStudy {}
  id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean}
}

export interface BlogPost {}
  id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number,}
}

export interface PricingTier {}
  id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string,}
}

export interface ApiResponse<T /> { success: boolean; data?: T; error?: string; message?: string}

export interface PaginationParams {}
  page: number; limit: number; sort?: string; order?: 'asc' | 'desc'}
}

export interface PaginatedResponse<T /> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean,}
}

export interface SEOProps {}
  title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean}
}

export interface PerformanceMetrics {}
  fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number}
}

export interface AccessibilitySettings {}
  highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean,}
}

export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean,}
}

export interface NavigationItem {}
  name: string; href: string; submenu?: NavigationItem[]; external?: boolean}
}

export interface SocialLink {}
  platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string,}
}

export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: strin,}
}contact: { phone: string; email: string; website: string}certifications: string[,
}

export interface ErrorInfo {}
  message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string}
}

export interface LoadingState {}
  isLoading: boolean; error?: string; progress?: number}
}

export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string,}
}[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}}

export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: strin,}
}team: { lead: string; members: string[]; external: string[,}
}client: { name: string; contact: string; industry: strin,}
}deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Dat,}
}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: strin,}
}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: strin,}
}[]; metrics: { name: string; value: number; unit: string; target: numbe,}
}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[,
}

export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: strin,}
}preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean,}
}activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[,}
}subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[],}
}

export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: strin,}
}category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date}

export interface BaseComponentProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'}
}

export interface InputProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean}
}

export interface ApiRequest {}
  method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any />; headers?: Record<string,string />}
}

export interface Environment {}
  NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
}

export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: strin,}
}features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean}

export interface ContactForm {}
  name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both',}
}

export interface TeamMember {}
  id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string}
}

export interface Testimonial {}
  id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string}
}

export interface CaseStudy {}
  id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean}
}

export interface BlogPost {}
  id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number,}
}

export interface PricingTier {}
  id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string,}
}

export interface ApiResponse<T /> { success: boolean; data?: T; error?: string; message?: string}

export interface PaginationParams {}
  page: number; limit: number; sort?: string; order?: 'asc' | 'desc'}
}

export interface PaginatedResponse<T /> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean,}
}

export interface SEOProps {}
  title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean}
}

export interface PerformanceMetrics {}
  fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number}
}

export interface AccessibilitySettings {}
  highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean,}
}

export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean,}
}

export interface NavigationItem {}
  name: string; href: string; submenu?: NavigationItem[]; external?: boolean}
}

export interface SocialLink {}
  platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string,}
}

export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: strin,}
}contact: { phone: string; email: string; website: string}certifications: string[,
}

export interface ErrorInfo {}
  message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string}
}

export interface LoadingState {}
  isLoading: boolean; error?: string; progress?: number}
}

export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string,}
}[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}}

export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: strin,}
}team: { lead: string; members: string[]; external: string[,}
}client: { name: string; contact: string; industry: strin,}
}deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Dat,}
}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: strin,}
}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: strin,}
}[]; metrics: { name: string; value: number; unit: string; target: numbe,}
}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[,
}

export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: strin,}
}preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean,}
}activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[,}
}subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[],}
}

export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: strin,}
}category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date}

export interface BaseComponentProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'}
}

export interface InputProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean}
}

export interface ApiRequest {}
  method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any />; headers?: Record<string,string />}
}

export interface Environment {}
  NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
}

export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: strin,}
}features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean}

export interface ContactForm {}
  name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both',}
}

export interface TeamMember {}
  id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string}
}

export interface Testimonial {}
  id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string}
}

export interface CaseStudy {}
  id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean}
}

export interface BlogPost {}
  id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number,}
}

export interface PricingTier {}
  id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string,}
}

export interface ApiResponse<T /> { success: boolean; data?: T; error?: string; message?: string}

export interface PaginationParams {}
  page: number; limit: number; sort?: string; order?: 'asc' | 'desc'}
}

export interface PaginatedResponse<T /> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean,}
}

export interface SEOProps {}
  title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean}
}

export interface PerformanceMetrics {}
  fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number}
}

export interface AccessibilitySettings {}
  highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean,}
}

export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean,}
}

export interface NavigationItem {}
  name: string; href: string; submenu?: NavigationItem[]; external?: boolean}
}

export interface SocialLink {}
  platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string,}
}

export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: strin,}
}contact: { phone: string; email: string; website: string}certifications: string[,
}

export interface ErrorInfo {}
  message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string}
}

export interface LoadingState {}
  isLoading: boolean; error?: string; progress?: number}
}

export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string,}
}[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}}

export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: strin,}
}team: { lead: string; members: string[]; external: string[,}
}client: { name: string; contact: string; industry: strin,}
}deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Dat,}
}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: strin,}
}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: strin,}
}[]; metrics: { name: string; value: number; unit: string; target: numbe,}
}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[,
}

export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: strin,}
}preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean,}
}activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[,}
}subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[],}
}

export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: strin,}
}category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date}

export interface BaseComponentProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'}
}

export interface InputProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean}
}

export interface ApiRequest {}
  method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any />; headers?: Record<string,string />}
}

export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}ursor/automate-test-improve-and-merge-code-646c;

export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: strin,}
}features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean}

export interface ContactForm {}
  name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both',}
}

export interface TeamMember {}
  id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string}
}

export interface Testimonial {}
  id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string}
}

export interface CaseStudy {}
  id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean}
}

export interface BlogPost {}
  id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number,}
}

export interface PricingTier {}
  id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string,}
}

export interface ApiResponse<T /> { success: boolean; data?: T; error?: string; message?: string}

export interface PaginationParams {}
  page: number; limit: number; sort?: string; order?: 'asc' | 'desc'}
}

export interface PaginatedResponse<T /> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean,}
}

export interface SEOProps {}
  title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean}
}

export interface PerformanceMetrics {}
  fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number}
}

export interface AccessibilitySettings {}
  highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean,}
}

export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean,}
}

export interface NavigationItem {}
  name: string; href: string; submenu?: NavigationItem[]; external?: boolean}
}

export interface SocialLink {}
  platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string,}
}

export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: strin,}
}contact: { phone: string; email: string; website: string}certifications: string[,
}

export interface ErrorInfo {}
  message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string}
}

export interface LoadingState {}
  isLoading: boolean; error?: string; progress?: number}
}

export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string,}
}[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}}

export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: strin,}
}team: { lead: string; members: string[]; external: string[,}
}client: { name: string; contact: string; industry: strin,}
}deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Dat,}
}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: strin,}
}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: strin,}
}[]; metrics: { name: string; value: number; unit: string; target: numbe,}
}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[,
}

export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: strin,}
}preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean,}
}activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[,}
}subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[],}
}

export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: strin,}
}category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date}

export interface BaseComponentProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'}
}

export interface InputProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean}
}

export interface ApiRequest {}
  method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any />; headers?: Record<string,string />}
}

export interface Environment {}
  NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
}

export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: string},
}; features: 'string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean;' }

export interface ContactForm { name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both'},
}

export interface TeamMember { id: 'string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string;' } }

export interface Testimonial { id: 'string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string;' } }

export interface CaseStudy { id: 'string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean;' } }

export interface BlogPost { id: 'string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number;' } }

export interface PricingTier { id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string},
}

export interface ApiResponse<T /> { success: 'boolean; data?: T; error?: string; message?: string;' }

export interface PaginationParams { page: number; limit: number; sort?: string; order?: 'asc' | 'desc'} }

export interface PaginatedResponse<T /> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean,}
}

export interface SEOProps { title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean} }

export interface PerformanceMetrics { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number} }

export interface AccessibilitySettings { highContrast: 'boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean;' } }

export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean} ,
}

export interface NavigationItem { name: 'string; href: string; submenu?: NavigationItem[]; external?: boolean;' } }

export interface SocialLink { platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string},
}

export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: string},
}; contact: { phone: string; email: string; website: strin,}
}; certifications: 'string[];' }

export interface ErrorInfo { message: 'string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string;' } }

export interface LoadingState { isLoading: 'boolean; error?: string; progress?: number;' } }

export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string} options?: { value: 'string; label: string',}
}[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}}

export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: string},
}; team: { lead: string; members: string[]; external: string[,}
}; client: { name: string; contact: string; industry: strin,}
}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Dat,}
}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: strin,}
}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: strin,}
}[]; metrics: { name: string; value: number; unit: string; target: numbe,}
}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[,
}

export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: string},
}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean,}
}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[,}
}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[],}
}

export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: string},
}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date}

export interface BaseComponentProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'} }

export interface InputProps { className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: 'string) => void; error?: string; required?: boolean;' } }

export interface ApiRequest { method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any /> headers?: Record<string,string /> } }

export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string} }

export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: strin,}
}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean}

export interface ContactForm {}
  name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both',}
}

export interface TeamMember {}
  id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string}
}

export interface Testimonial {}
  id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string}
}

export interface CaseStudy {}
  id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean}
}

export interface BlogPost {}
  id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number,}
}

export interface PricingTier {}
  id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string,}
}

export interface ApiResponse<T /> { success: boolean; data?: T; error?: string; message?: string}

export interface PaginationParams {}
  page: number; limit: number; sort?: string; order?: 'asc' | 'desc'}
}

export interface PaginatedResponse<T /> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean,}
}

export interface SEOProps {}
  title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean}
}

export interface PerformanceMetrics {}
  fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number}
}

export interface AccessibilitySettings {}
  highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean,}
}

export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean,}
}

export interface NavigationItem {}
  name: string; href: string; submenu?: NavigationItem[]; external?: boolean}
}

export interface SocialLink {}
  platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string,}
}

export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: strin,}
}; contact: { phone: string; email: string; website: strin,}
}; certifications: string[,
}

export interface ErrorInfo {}
  message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string}
}

export interface LoadingState {}
  isLoading: boolean; error?: string; progress?: number}
}

export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string,}
}[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}}

export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: strin,}
}; team: { lead: string; members: string[]; external: string[,}
}; client: { name: string; contact: string; industry: strin,}
}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Dat,}
}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: strin,}
}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: strin,}
}[]; metrics: { name: string; value: number; unit: string; target: numbe,}
}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[,
}

export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: strin,}
}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean,}
}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[,}
}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[],}
}

export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: strin,}
}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date}

export interface BaseComponentProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'}
}

export interface InputProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean}
}

export interface ApiRequest {}
  method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any />; headers?: Record<string,string />}
}

export interface Environment {}
  NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
}

export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: strin,}
}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean}

export interface ContactForm {}
  name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both',}
}

export interface TeamMember {}
  id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string}
}

export interface Testimonial {}
  id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string}
}

export interface CaseStudy {}
  id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean}
}

export interface BlogPost {}
  id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number,}
}

export interface PricingTier {}
  id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string,}
}

export interface ApiResponse<T /> { success: boolean; data?: T; error?: string; message?: string}

export interface PaginationParams {}
  page: number; limit: number; sort?: string; order?: 'asc' | 'desc'}
}

export interface PaginatedResponse<T /> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean,}
}

export interface SEOProps {}
  title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean}
}

export interface PerformanceMetrics {}
  fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number}
}

export interface AccessibilitySettings {}
  highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean,}
}

export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean,}
}

export interface NavigationItem {}
  name: string; href: string; submenu?: NavigationItem[]; external?: boolean}
}

export interface SocialLink {}
  platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string,}
}

export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: strin,}
}; contact: { phone: string; email: string; website: strin,}
}; certifications: string[,
}

export interface ErrorInfo {}
  message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string}
}

export interface LoadingState {}
  isLoading: boolean; error?: string; progress?: number}
}

export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string,}
}[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}}

export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: strin,}
}; team: { lead: string; members: string[]; external: string[,}
}; client: { name: string; contact: string; industry: strin,}
}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Dat,}
}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: strin,}
}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: strin,}
}[]; metrics: { name: string; value: number; unit: string; target: numbe,}
}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[,
}

export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: strin,}
}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean,}
}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[,}
}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[],}
}

export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: strin,}
}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date}

export interface BaseComponentProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'}
}

export interface InputProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean}
}

export interface ApiRequest {}
  method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any />; headers?: Record<string,string />}
}

export interface Environment {}
  NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
}

export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: strin,}
}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean}

export interface ContactForm {}
  name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both',}
}

export interface TeamMember {}
  id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string}
}

export interface Testimonial {}
  id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string}
}

export interface CaseStudy {}
  id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean}
}

export interface BlogPost {}
  id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number,}
}

export interface PricingTier {}
  id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string,}
}

export interface ApiResponse<T /> { success: boolean; data?: T; error?: string; message?: string}

export interface PaginationParams {}
  page: number; limit: number; sort?: string; order?: 'asc' | 'desc'}
}

export interface PaginatedResponse<T /> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean,}
}

export interface SEOProps {}
  title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean}
}

export interface PerformanceMetrics {}
  fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number}
}

export interface AccessibilitySettings {}
  highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean,}
}

export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean,}
}

export interface NavigationItem {}
  name: string; href: string; submenu?: NavigationItem[]; external?: boolean}
}

export interface SocialLink {}
  platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string,}
}

export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: strin,}
}; contact: { phone: string; email: string; website: strin,}
}; certifications: string[,
}

export interface ErrorInfo {}
  message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string}
}

export interface LoadingState {}
  isLoading: boolean; error?: string; progress?: number}
}

export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string,}
}[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}}

export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: strin,}
}; team: { lead: string; members: string[]; external: string[,}
}; client: { name: string; contact: string; industry: strin,}
}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Dat,}
}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: strin,}
}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: strin,}
}[]; metrics: { name: string; value: number; unit: string; target: numbe,}
}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[,
}

export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: strin,}
}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean,}
}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[,}
}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[],}
}

export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: strin,}
}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date}

export interface BaseComponentProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'}
}

export interface InputProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean}
}

export interface ApiRequest {}
  method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any />; headers?: Record<string,string />}
}

export interface Environment {}
  NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
}

export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: strin,}
}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean}

export interface ContactForm {}
  name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both',}
}

export interface TeamMember {}
  id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string}
}

export interface Testimonial {}
  id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string}
}

export interface CaseStudy {}
  id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean}
}

export interface BlogPost {}
  id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number,}
}

export interface PricingTier {}
  id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string,}
}

export interface ApiResponse<T /> { success: boolean; data?: T; error?: string; message?: string}

export interface PaginationParams {}
  page: number; limit: number; sort?: string; order?: 'asc' | 'desc'}
}

export interface PaginatedResponse<T /> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean,}
}

export interface SEOProps {}
  title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean}
}

export interface PerformanceMetrics {}
  fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number}
}

export interface AccessibilitySettings {}
  highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean,}
}

export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean,}
}

export interface NavigationItem {}
  name: string; href: string; submenu?: NavigationItem[]; external?: boolean}
}

export interface SocialLink {}
  platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string,}
}

export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: strin,}
}; contact: { phone: string; email: string; website: strin,}
}; certifications: string[,
}

export interface ErrorInfo {}
  message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string}
}

export interface LoadingState {}
  isLoading: boolean; error?: string; progress?: number}
}

export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string,}
}[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}}

export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: strin,}
}; team: { lead: string; members: string[]; external: string[,}
}; client: { name: string; contact: string; industry: strin,}
}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Dat,}
}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: strin,}
}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: strin,}
}[]; metrics: { name: string; value: number; unit: string; target: numbe,}
}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[,
}

export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: strin,}
}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean,}
}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[,}
}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[],}
}

export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: strin,}
}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date}

export interface BaseComponentProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'}
}

export interface InputProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean}
}

export interface ApiRequest {}
  method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any />; headers?: Record<string,string />}
}

export interface Environment {}
  NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
}

export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: strin,}
}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean}

export interface ContactForm {}
  name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both',}
}

export interface TeamMember {}
  id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string}
}

export interface Testimonial {}
  id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string}
}

export interface CaseStudy {}
  id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean}
}

export interface BlogPost {}
  id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number,}
}

export interface PricingTier {}
  id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string,}
}

export interface ApiResponse<T /> { success: boolean; data?: T; error?: string; message?: string}

export interface PaginationParams {}
  page: number; limit: number; sort?: string; order?: 'asc' | 'desc'}
}

export interface PaginatedResponse<T /> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean,}
}

export interface SEOProps {}
  title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean}
}

export interface PerformanceMetrics {}
  fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number}
}

export interface AccessibilitySettings {}
  highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean,}
}

export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean,}
}

export interface NavigationItem {}
  name: string; href: string; submenu?: NavigationItem[]; external?: boolean}
}

export interface SocialLink {}
  platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string,}
}

export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: strin,}
}; contact: { phone: string; email: string; website: strin,}
}; certifications: string[,
}

export interface ErrorInfo {}
  message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string}
}

export interface LoadingState {}
  isLoading: boolean; error?: string; progress?: number}
}

export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string,}
}[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}}

export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: strin,}
}; team: { lead: string; members: string[]; external: string[,}
}; client: { name: string; contact: string; industry: strin,}
}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Dat,}
}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: strin,}
}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: strin,}
}[]; metrics: { name: string; value: number; unit: string; target: numbe,}
}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[,
}

export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: strin,}
}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean,}
}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[,}
}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[],}
}

export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: strin,}
}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date}

export interface BaseComponentProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'}
}

export interface InputProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean}
}

export interface ApiRequest {}
  method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any />; headers?: Record<string,string />}
}

export interface Environment {}
  NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
}

export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: strin,}
}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean}

export interface ContactForm {}
  name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both',}
}

export interface TeamMember {}
  id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string}
}

export interface Testimonial {}
  id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string}
}

export interface CaseStudy {}
  id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean}
}

export interface BlogPost {}
  id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number,}
}

export interface PricingTier {}
  id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string,}
}

export interface ApiResponse<T /> { success: boolean; data?: T; error?: string; message?: string}

export interface PaginationParams {}
  page: number; limit: number; sort?: string; order?: 'asc' | 'desc'}
}

export interface PaginatedResponse<T /> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean,}
}

export interface SEOProps {}
  title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean}
}

export interface PerformanceMetrics {}
  fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number}
}

export interface AccessibilitySettings {}
  highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean,}
}

export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean,}
}

export interface NavigationItem {}
  name: string; href: string; submenu?: NavigationItem[]; external?: boolean}
}

export interface SocialLink {}
  platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string,}
}

export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: strin,}
}; contact: { phone: string; email: string; website: strin,}
}; certifications: string[,
}

export interface ErrorInfo {}
  message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string}
}

export interface LoadingState {}
  isLoading: boolean; error?: string; progress?: number}
}

export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string,}
}[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}}

export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: strin,}
}; team: { lead: string; members: string[]; external: string[,}
}; client: { name: string; contact: string; industry: strin,}
}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Dat,}
}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: strin,}
}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: strin,}
}[]; metrics: { name: string; value: number; unit: string; target: numbe,}
}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[,
}

export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: strin,}
}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean,}
}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[,}
}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[],}
}

export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: strin,}
}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date}

export interface BaseComponentProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'}
}

export interface InputProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean}
}

export interface ApiRequest {}
  method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any />; headers?: Record<string,string />}
}

export interface Environment {}
  NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
}

export interface Service { id: string; name: string; description: string; category: | 'micro-saas' | 'ai-services' | 'it-services'; price: { min: number; max: number; currency: strin,}
}; features: string[]; technologies: string[]; deliveryTime: string; support: string; image?: string; popular?: boolean}

export interface ContactForm {}
  name: string; email: string; company?: string; phone?: string; service: string; budget?: string; message: string; preferredContact: | 'email' | 'phone' | 'both',}
}

export interface TeamMember {}
  id: string; name: string; position: string; bio: string; image: string; skills: string[]; linkedin?: string; github?: string; twitter?: string}
}

export interface Testimonial {}
  id: string; name: string; company: string; position: string; content: string; rating: number; image?: string; project?: string}
}

export interface CaseStudy {}
  id: string; title: string; client: string; industry: string; challenge: string; solution: string; results: string[]; technologies: string[]; duration: string; teamSize: number; image: string; featured?: boolean}
}

export interface BlogPost {}
  id: string; title: string; excerpt: string; content: string; author: string; publishedAt: string; updatedAt: string; tags: string[]; category: string; image: string; featured?: boolean; readTime: number,}
}

export interface PricingTier {}
  id: string; name: string; price: number; currency: string; period: | 'month' | 'year' | 'one-time'; features: string[]; limitations?: string[]; popular?: boolean; cta: string; description: string,}
}

export interface ApiResponse<T /> { success: boolean; data?: T; error?: string; message?: string}

export interface PaginationParams {}
  page: number; limit: number; sort?: string; order?: 'asc' | 'desc'}
}

export interface PaginatedResponse<T /> { data: T[]; pagination: { page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean,}
}

export interface SEOProps {}
  title?: string; description?: string; keywords?: string; ogImage?: string; url?: string; type?: string; noindex?: boolean}
}

export interface PerformanceMetrics {}
  fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number}
}

export interface AccessibilitySettings {}
  highContrast: boolean; fontSize: number; reducedMotion: boolean; screenReader: boolean,}
}

export interface UserPreferences { theme: | 'light' | 'dark' | 'system'; language: string; accessibility: AccessibilitySettings; notifications: { email: boolean; browser: boolean; marketing: boolean,}
}

export interface NavigationItem {}
  name: string; href: string; submenu?: NavigationItem[]; external?: boolean}
}

export interface SocialLink {}
  platform: | 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram'; url: string; label: string,}
}

export interface CompanyInfo { name: string; tagline: string; description: string; address: { street: string; city: string; state: string; zip: string; country: strin,}
}; contact: { phone: string; email: string; website: strin,}
}; certifications: string[,
}

export interface ErrorInfo {}
  message: string; code?: string; details?: any; timestamp: string; userAgent?: string; url?: string}
}

export interface LoadingState {}
  isLoading: boolean; error?: string; progress?: number}
}

export interface FormField { name: string; label: string; type: | 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'; required: boolean; placeholder?: string; options?: { value: string; label: string,}
}[]; validation?: { min?: number; max?: number; pattern?: string; message?: string}}

export interface Project { id: string; name: string; description: string; status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'; priority: 'low' | 'medium' | 'high' | 'critical'; startDate: Date; endDate: Date; budget: { allocated: number; spent: number; currency: strin,}
}; team: { lead: string; members: string[]; external: string[,}
}; client: { name: string; contact: string; industry: strin,}
}; deliverables: { name: string; description: string; status: 'pending' | 'in-progress' | 'completed' | 'review'; dueDate: Dat,}
}[]; risks: { description: string; probability: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high'; mitigation: strin,}
}[]; dependencies: { project: string; type: 'blocking' | 'influencing'; description: strin,}
}[]; metrics: { name: string; value: number; unit: string; target: numbe,}
}[]; lessons: { learned: string; category: 'technical' | 'process' | 'communication' | 'management'; impact: 'positive' | 'negative' | 'neutral'}[,
}

export interface User { id: string; email: string; name: string; role: 'admin' | 'manager' | 'developer' | 'client' | 'guest'; permissions: string[]; profile: { avatar?: string; bio?: string; skills: string[]; experience: number; location: string; timezone: strin,}
}; preferences: { theme: 'light' | 'dark' | 'auto'; language: string; notifications: { email: boolean; push: boolean; sms: boolean,}
}; activity: { lastLogin: Date; loginCount: number; projects: string[]; tasks: string[,}
}; subscription: { plan: 'free' | 'basic' | 'premium' | 'enterprise'; status: 'active' | 'inactive' | 'cancelled' | 'expired'; startDate: Date; endDate: Date; features: string[],}
}

export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error'; title: string; message: string; timestamp: Date; read: boolean; action?: { label: string; url: strin,}
}; category: 'system' | 'project' | 'team' | 'client' | 'billing'; priority: 'low' | 'medium' | 'high'; expires?: Date}

export interface BaseComponentProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'button' | 'submit' | 'reset'}
}

export interface InputProps {}
  className?: string; children?: React.ReactNode; id?: string; disabled?: boolean; loading?: boolean; onClick?: () => void; type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'; placeholder?: string; value?: string; onChange?: (value: string) => void; error?: string; required?: boolean}
}

export interface ApiRequest {}
  method: | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; url: string; data?: any; params?: Record<string,any />; headers?: Record<string,string />}
}

export interface Environment { NODE_ENV: | 'development' | 'production' | 'test'; NEXT_PUBLIC_API_URL?: string; NEXT_PUBLIC_APP_URL?: string; NEXT_PUBLIC_GA_ID?: string; NEXT_PUBLIC_SENTRY_DSN?: string}
=======
export interface InputProps {
  type?: 'text' | 'email' | 'password' | 'tel' | 'url';
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;}
  label?: string;}
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;}
  size?: 'sm' | 'md' | 'lg' | 'xl';}
}

// Utility types;
export type Status = 'idle' | 'loading' | 'success' | 'error';

export type SortOrder = 'asc' | 'desc';

export type Theme = 'light' | 'dark' | 'system';

// Re-export from other type files;
export * from './moderation';
export * from './global';
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-53a1;
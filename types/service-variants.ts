export interface ServiceVariant {
  id: string;
  name: string;
  description: string;
  category: string;
  features: string[];
  pricing: {
    basic: number;
    premium: number;
    enterprise: number;
  };
  technologies: string[];
  timeline: string;
  deliverables: string[];
}

export type ServiceCategory = 
  | 'ai-development'
  | 'cloud-services'
  | 'web-development'
  | 'mobile-development'
  | 'blockchain'
  | 'iot'
  | 'cybersecurity'
  | 'data-analytics'
  | 'digital-transformation'
  | 'consulting';

export type ServiceTheme = 
  | 'modern'
  | 'futuristic'
  | 'minimal'
  | 'corporate'
  | 'creative'
  | 'tech'
  | 'enterprise'
  | 'startup'
  | 'healthcare'
  | 'finance'
  | 'education'
  | 'retail'
  | 'manufacturing'
  | 'government'
  | 'nonprofit';

export interface ServicePackage {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  features: string[];
  included: string[];
  notIncluded: string[];
  recommended: boolean;
}

export interface ServiceTestimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export interface ServiceCaseStudy {
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
  image?: string;
}

export interface ServiceFAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ServiceProcess {
  id: string;
  step: number;
  title: string;
  description: string;
  duration: string;
  deliverables: string[];
}

export interface ServiceTeam {
  id: string;
  name: string;
  role: string;
  expertise: string[];
  experience: string;
  image?: string;
  linkedin?: string;
}

export interface ServiceTechnology {
  id: string;
  name: string;
  category: string;
  description: string;
  logo?: string;
  website?: string;
}

export interface ServiceIndustry {
  id: string;
  name: string;
  description: string;
  challenges: string[];
  solutions: string[];
  caseStudies: string[];
  technologies: string[];
}

export interface ServiceLocation {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  timezone: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface ServiceContact {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  department: string;
  availability: string;
  timezone: string;
}

export interface ServiceDocumentation {
  id: string;
  title: string;
  type: 'pdf' | 'doc' | 'html' | 'markdown';
  url: string;
  description: string;
  version: string;
  lastUpdated: string;
}

export interface ServiceSupport {
  id: string;
  type: 'email' | 'phone' | 'chat' | 'ticket';
  availability: string;
  responseTime: string;
  description: string;
  contact: string;
}

export interface ServiceCompliance {
  id: string;
  standard: string;
  description: string;
  certification: string;
  validUntil: string;
  scope: string[];
}

export interface ServiceSecurity {
  id: string;
  measure: string;
  description: string;
  implementation: string;
  compliance: string[];
  testing: string;
}

export interface ServicePerformance {
  id: string;
  metric: string;
  value: string;
  unit: string;
  description: string;
  benchmark: string;
}

export interface ServiceIntegration {
  id: string;
  name: string;
  type: 'api' | 'webhook' | 'sdk' | 'plugin';
  description: string;
  documentation: string;
  status: 'available' | 'beta' | 'planned';
}

export interface ServiceUpdate {
  id: string;
  version: string;
  date: string;
  type: 'feature' | 'bugfix' | 'security' | 'performance';
  description: string;
  changes: string[];
  breaking: boolean;
}
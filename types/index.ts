}
export interface Service {

  }

  }
  features: string[];
  technologies: string[];
  delivery_time: string;
  support: string;
  image?: string;
  popular?: boolean;
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
}
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
  email: string;
  company?: string;
  phone?: string;
  service: string;
  budget?: string;
  message: string;
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


  id: string;
  name: string;
  role: string;
  company: string;
export interface BlogPost {

  project?: string;
}


export interface BlogPost {;
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

}

// Pricing Types
export interface FAQ {


export interface FAQ {;
  question: string;
  answer: string;
  category?: string;
}
  name: string;
  price: number;
  period: string;
  features: string[];
  popular?: boolean;
  cta: string;
  href: string;
}
export interface PricingPlan {

  id: string;

  id: string;

  name: string;
  price: number;
  period: string;
  features: string[];
  popular?: boolean;
  cta: string;
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

}


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
  }
  image?: string;
}
  title: string;
  description: string;
  icon: string;
  color: string;
}
  label: string;
  value: string;
  description?: string;
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
  id: string;
  title: string;
  department: string;
  location: string;
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
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: 'webinar' | 'workshop' | 'conference' | 'meetup';
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
export type Response<T> = SuccessResponse<T> | ErrorResponse;
export type Response < T> = SuccessResponse < T> | ErrorResponse;
;

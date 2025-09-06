
  phone: string;
  email: string;
  address: string;
  site: string;
}

  id: string;
  name: string;
  description: string;
  category: 'micro-saas' | 'ai-services' | 'it-services';
  price: {
    min: number;
    max: number;
    currency: string;
  }
  features: string[];
  technologies: string[];
  deliveryTime: string;
  support: string;
  image?: string;
  popular?: boolean;

}

  title: string;
  description: string;
  count: number;
  features: string[];
  href: string;
  color: string;

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

export interface AnimationState {;
  isLoaded: boolean;
  hasError: boolean;
}

export interface FormData {;

  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  message: string;

}

  id: string;
  name: string;
  role: string;
  company: string;

  project?: string;
}

  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;

}

  id: string;
  name: string;
  role: string;

  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;

}

  id: string, title: string,
  description: string, image: string,
  technologies: string[], liveUrl?: string,

export interface Project {;

  id: string;
  title: string;

  name: string;

  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;

  githubUrl?: string;
  featured: boolean;

  status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'critical';
  startDate: Date;
  endDate: Date;
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

    name: string;
    description: string;
    status: 'pending' | 'in-progress' | 'completed' | 'review';
    dueDate: Date;
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

  name: string;
  href: string;
  children?: NavigationItem[];
  submenu?: NavigationItem[];
  external?: boolean;
}

  name: string;
  href: string;
  icon: string;

}

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
  registrationUrl?: string;
  image?: string;
}

// Environment
export interface Environment {;
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

export type Response<T> = SuccessResponse<T> | ErrorResponse;

export interface ContactInfo {


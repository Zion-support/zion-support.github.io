

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


// Service interfaces;
export interface Service {
  id: string;
  name: string;
  description: string;
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


export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;

  featured: boolean;
  createdAt: string;}

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

  featured: boolean;
  image?: string;
  createdAt: string;
  updatedAt: string;}

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
}

}

export interface NewsletterSubscription {
  email: string;

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

export interface Partner {
  name: string;
  logo: string;
  website: string;
  description: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';}
}
}



export interface Award {
  title: string;
  organization: string;
  year: number;
  description: string;
  image?: string;}
}
}



export interface Certification {
  name: string;
  issuer: string;
  date: string;
  expiry?: string;
  credentialId?: string;
  image?: string;}
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

// API Response interfaces;
export interface ApiResponse<T /> {
  data: T;
  message: string;
  success: boolean;}
  timestamp: string;}
}


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

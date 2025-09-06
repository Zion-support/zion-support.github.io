<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

export interface ContactInfo {;
export interface ContactInfo {
  phone: string, email: string,
  address: string, site: string,


export interface Service {;

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
=======
// Core Types
export interface ContactInfo {
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  phone: string;
  email: string;
  address: string;
  site: string;
}
export interface Service {
=======
}
export interface Service {

  }

=======
  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  features: string[];
  technologies: string[];
  delivery_time: string;
  support: string;
  image?: string;
  popular?: boolean;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

  title: string;
  href: string;
  icon: string;
  color: string;
;

}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
export interface ServiceCategory {
  title: string;
  description: string;
  count: number;
  features: string[];
  href: string;
  color: string;
}
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
export interface SEOProps {
  title?: string;
  description?: string;
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
  keywords?: string;
  canonical?: string;
  ogImage?: string;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  url?: string;
  type?: string;
  noindex?: boolean;
<<<<<<< HEAD
=======
  url?: string;
  type?: string;

  noindex?: boolean;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b



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

<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
}

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export interface LoadingState {
  is_loading: boolean;
  error?: string;
<<<<<<< HEAD
  progress?: number;
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
export interface AnimationState {
  is_loaded: boolean;
  has_error: boolean;
=======

export interface AnimationState {
  isLoaded: boolean;
  hasError: boolean;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}

<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export interface FormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  message: string;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
  project?: string;
}

export interface Testimonial {
=======
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

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export interface AnimationState {
>>>>>>> main
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


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  id: string;
  name: string;
  role: string;
  company: string;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  position: string;
  content: string;
  rating: number;
  avatar?: string;
  image?: string;
<<<<<<< HEAD
=======

;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  project?: string;
}

export interface BlogPost {
<<<<<<< HEAD
=======
=======

  project?: string;
}


export interface BlogPost {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
<<<<<<< HEAD
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  category: string;
  image: string;
  slug: string;
  featured?: boolean;
  readTime: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
=======

  date: string;

  publishedAt: string;
  updatedAt: string;
=======
  published_at: string;
  updated_at: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  tags: string[];
  category: string;
  image: string;

  slug: string;
  featured?: boolean;

=======
  read_time: number;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
export interface TeamMember {
=======

}


export interface TeamMember {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  id: string;
  name: string;

  role: string;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  position: string;
  bio: string;
  image: string;
  skills: string[];
<<<<<<< HEAD
=======


=======
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
<<<<<<< HEAD
  };
}

export interface Project {
  id: string;
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
    allocated: number;
    spent: number;
    currency: string;
  };
  team: {
    lead: string;
    members: string[];
    external: string[];
  };
  client: {
    name: string;
    contact: string;
    industry: string;
  };
  deliverables: {
    name: string;
    description: string;
    status: 'pending' | 'in-progress' | 'completed' | 'review';
    dueDate: Date;
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  budget?: string;
  message: string;
<<<<<<< HEAD
  preferredContact: 'email' | 'phone' | 'both';
}
<<<<<<< HEAD

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

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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


  id: string;
  name: string;
  role: string;
  company: string;

  position: string;
  content: string;
  rating: number;
  avatar?: string;
  image?: string;

;

  project?: string;
}
export interface BlogPost {
=======

  project?: string;
}


export interface BlogPost {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;

  date: string;

  publishedAt: string;
  updatedAt: string;
=======
  published_at: string;
  updated_at: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  tags: string[];
  category: string;
  image: string;

  slug: string;
  featured?: boolean;

=======
  read_time: number;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
export interface TeamMember {
=======

}


export interface TeamMember {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  id: string;
  name: string;

  role: string;

  position: string;
  bio: string;
  image: string;
  skills: string[];


=======
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

=======

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
  linkedin?: string;
  github?: string;
  twitter?: string;

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
  live_url?: string;
  github_url?: string;
  featured: boolean;
  status: 'planning' | 'in - progress' | 'completed' | 'on - hold' | 'cancelled';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  priority: 'low' | 'medium' | 'high' | 'critical';
  start_date: Date;
  end_date: Date;
  budget: {


=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
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
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
    name: string;
    description: string;
    status: 'pending' | 'in - progress' | 'completed' | 'review';
    due_date: Date;
  }[];


=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  risks: {

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    description: string;
    probability: 'low' | 'medium' | 'high';
    impact: 'low' | 'medium' | 'high';
    mitigation: string;
  }[];


=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  dependencies: {

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    project: string;
    type: 'blocking' | 'influencing';
    description: string;
  }[];


=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  metrics: {

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    name: string;
    value: number;
    unit: string;
    target: number;
  }[];


=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  lessons: {

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
=======
export interface FAQ {
=======


export interface FAQ {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  question: string;
  answer: string;
  category?: string;
}
<<<<<<< HEAD



export interface PricingPlan {;

  id: string;
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

<<<<<<< HEAD
export interface PricingPlan {;
=======
export interface PricingPlan {
<<<<<<< HEAD
>>>>>>> main
  id: string;
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  name: string;
  price: number;
  currency: string;
  period: 'month' | 'year' | 'one-time';
  features: string[];
<<<<<<< HEAD
  popular?: boolean;
  cta: string;
  href: string;

export interface FAQ {
  question: string;
  answer: string;
  category?: string;

}
export interface PricingPlan {


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  name: string;
  price: number;
  period: string;
  features: string[];
  popular?: boolean;
  cta: string;
}
  href: string;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b


  name: string;
  href: string;
  children?: NavigationItem[];
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
  limitations?: string[];
  popular?: boolean;
  cta: string;
  description: string;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD

export interface NavigationItem {
  name: string;
  href: string;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  submenu?: NavigationItem[];
  external?: boolean;
}

<<<<<<< HEAD
=======


export interface SocialLink {;


  name: string;
  href: string;
  icon: string;

  platform: 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram';
  url: string;
  label: string;

;

<<<<<<< HEAD
=======
export interface SocialLink {
  platform: 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram';
  url: string;
  label: string;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}

export interface CompanyInfo {
=======
}
export interface FooterLink {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  name: string;
<<<<<<< HEAD
  href: string;
}
export interface FooterSection {
  title: string;
  links: FooterLink[];
}
export interface HeroSection {
=======

}


export interface FooterLink {;
  name: string;
  href: string;
}

export interface FooterSection {;
  title: string;
  links: FooterLink[];
}

export interface HeroSection {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

=======
    }
    secondary: {
      text: string;
      href: string;
    }
=======
=======
export interface CompanyInfo {
  name: string;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  tagline: string;
  description: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  }
<<<<<<< HEAD
  contact: {
    phone: string;
    email: string;
    website: string;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  }
  certifications: string[];
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  image?: string;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
}

<<<<<<< HEAD


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

export interface CaseStudy {
=======


export interface CaseStudy {;


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
  registrationUrl?: string;
  image?: string;
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
export interface Partner {;
=======
<<<<<<< HEAD
export interface Partner {
>>>>>>> main
  name: string;
  logo: string;
  website: string;
  description: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b


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
<<<<<<< HEAD
=======
=======
  }
  certifications: string[];
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
  budget?: string;
  timeline?: string;
  source?: string;
  preferredContact?: 'email' | 'phone' | 'both';
}

export interface NewsletterSubscription {;
  email: string;
  interests: string[];
  frequency: 'daily' | 'weekly' | 'monthly';
  subscribed: boolean;
  subscribedAt: string;
}

export interface SearchResult {;
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'page' | 'blog' | 'service' | 'case-study' | 'job';
  score: number;
  highlights?: string[];
}

export interface FilterOption {;
  label: string;
  value: string;
  count?: number;
}

export interface SortOption {;
  label: string;
  value: string;
  direction: 'asc' | 'desc';
}

export interface Pagination {;
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  hasNext: boolean;
  hasPrev: boolean;
  page?: number;
  limit?: number;
  total?: number;
  pages?: number;
}

export interface APIResponse<T> {;
  data: T;
  success: boolean;
  message?: string;
  errors?: string[];
  pagination?: Pagination;
}

export interface ErrorResponse {;
  success: false;
  message: string;
  errors: string[];
  code?: string;
}

export interface SuccessResponse<T> {;
  success: true;
  data: T;
  message?: string;
}

export type Response<T> = SuccessResponse<T> | ErrorResponse;
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
  };
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

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    message?: string;
<<<<<<< HEAD
=======
  };
}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1488

// Environment
export interface Environment {;
  NODE_ENV: 'development' | 'production' | 'test';
  NEXT_PUBLIC_API_URL?: string;
  NEXT_PUBLIC_APP_URL?: string;
  NEXT_PUBLIC_GA_ID?: string;
  NEXT_PUBLIC_SENTRY_DSN?: string;
}

<<<<<<< HEAD
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-2c83
=======
<<<<<<< HEAD
export interface ContactInfo {

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
export interface Partner {
  name: string;
  logo: string;
  website: string;
  description: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';
}
<<<<<<< HEAD

export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  features: string[];
  popular?: boolean;
  cta: string;
  href: string;
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
    };
    secondary: {
      text: string;
      href: string;
    };
  };
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

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
  options?: { value: string; label: string }[];
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    message?: string;
  }
}
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

// Environment
export interface Environment {
  NODE_ENV: 'development' | 'production' | 'test';
  NEXT_PUBLIC_API_URL?: string;
  NEXT_PUBLIC_APP_URL?: string;
  NEXT_PUBLIC_GA_ID?: string;
  NEXT_PUBLIC_SENTRY_DSN?: string;
<<<<<<< HEAD

}


=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
// Environment;
export interface Environment {
  NODE_ENV: 'development' | 'production' | 'test';
  NEXT_PUBLIC_API_URL?: string;
  NEXT_PUBLIC_APP_URL?: string;
  NEXT_PUBLIC_GA_ID?: string;
  NEXT_PUBLIC_SENTRY_DSN?: string;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD




=======
export type Response<T> = SuccessResponse<T> | ErrorResponse;
>>>>>>> origin/main
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export type Response<T> = SuccessResponse<T> | ErrorResponse;
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
export type Response < T> = SuccessResponse < T> | ErrorResponse;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1488
>>>>>>> main
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

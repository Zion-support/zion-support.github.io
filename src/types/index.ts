// Service types
export interface Service {
  name: string;
  description: string;
  price: string;
  features: string[];
  category: string;
  popular?: boolean;
  enterprise?: boolean;
  icon: React.ComponentType<{ className?: string }>;
  link: string;
}

export interface MicroSAASService extends Service {
  category: 'Productivity' | 'Analytics' | 'Support' | 'Content' | 'Marketing' | 'Finance' | 'Automation' | 'Sales' | 'Design' | 'Development' | 'Health' | 'E-commerce' | 'Security' | 'Creative' | 'Computer Vision' | 'Document Management' | 'Testing' | 'Manufacturing' | 'Insurance' | 'Education' | 'HR' | 'Legal' | 'Operations';
}

export interface AIService extends Service {
  category: 'Healthcare AI' | 'Environmental AI' | 'Space Technology' | 'Financial AI' | 'Quantum AI' | 'Computer Vision' | 'Supply Chain AI';
  enterprise: boolean;
}

export interface ITService extends Service {
  category: 'Cloud Services' | 'Security' | 'Infrastructure' | 'Support' | 'Development' | 'DevOps' | 'Database' | 'Networking' | 'AI Infrastructure' | 'Blockchain' | 'API Management' | 'Blockchain Security';
}

// Testimonial type
export interface Testimonial {
  content: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

// Stat type
export interface Stat {
  number: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

// Navigation types
export interface NavigationLink {
  name: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface ServiceCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
  hoverColor: string;
  services: ServiceLink[];
}

export interface ServiceLink {
  name: string;
  path: string;
  description: string;
  icon: string;
  popular: boolean;
}

// SEO types
export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogImage?: string;
  structuredData?: object;
}
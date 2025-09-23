export interface Service {
  id: string;
  name: string;
  category: 'AI Services' | 'IT Services' | 'Micro SAAS' | 'Blockchain' | 'IoT & Edge' | 'Cybersecurity' | 'Cloud & DevOps' | 'Data & Analytics';
  description: string;
  features: string[];
  pricing: {
    starter: string;
    professional: string;
    enterprise: string;
    custom?: string;
  };
  technologyStack: string[];
  benefits: string[];
  useCases: string[];
  status: 'active' | 'beta' | 'coming-soon';
  priority: number;
  demoUrl?: string;
  documentationUrl?: string;
  contactInfo: {
    email: string;
    phone: string;
    address: string;
  };
}

export const services: Service[] = [];

export const getCategories = () => {
  return Array.from(new Set(services.map((service) => service.category)));
};
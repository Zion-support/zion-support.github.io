export interface Service {
  id: string,
  name: string,
  category: 'AI Services' | 'IT Services' | 'Micro SAAS' | 'Blockchain' | 'IoT & Edge' | 'Cybersecurity' | 'Cloud & DevOps' | 'Data & Analytics',
  description: string,
  features: string[],
  pricing: {
    starter: string,
    professional: string,
    enterprise: string,
export interface Service {id: string;
  name: string;
  category: 'AI Services' | 'IT Services' | 'Micro SAAS' | 'Blockchain' | 'IoT & Edge' | 'Cybersecurity' | 'Cloud & DevOps' | 'Data & Analytics',
  description: string;
  features: string[];  pricing: {;
    starter: string;
    professional: string;
    enterprise: string;
=======    custom?: string;
    address: string;
  }
}
export const services: Service[] = [;
  // AI Services;
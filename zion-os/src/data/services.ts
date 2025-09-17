export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  features: string[];
  isPopular?: boolean;
}

export const services: Service[] = [
  {
    id: '1',
    name: 'AI Development',
    description: 'Custom AI solutions for your business needs',
    category: 'AI',
    price: 5000,
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision'],
    isPopular: true
  },
  {
    id: '2',
    name: 'Blockchain Solutions',
    description: 'Secure and decentralized applications',
    category: 'Blockchain',
    price: 8000,
    features: ['Smart Contracts', 'DeFi', 'NFTs']
  },
  {
    id: '3',
    name: 'Cloud Migration',
    description: 'Seamless cloud infrastructure migration',
    category: 'Cloud',
    price: 3000,
    features: ['AWS', 'Azure', 'Google Cloud']
  }
];

export function getServicesByCategory(category: string): Service[] {
  return services.filter(service => service.category === category);
}

export function getPopularServices(): Service[] {
  return services.filter(service => service.isPopular);
}
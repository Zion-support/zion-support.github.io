export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features?: string[];
  price?: string;
}

export const SERVICES: Service[] = [
  {
    id: 'ai-development',
    title: 'AI Development',
    description: 'Custom AI solutions for your business needs',
    icon: '🤖',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision'],
    price: 'Starting at $5,000'
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions for modern businesses',
    icon: '☁️',
    features: ['AWS/Azure/GCP', 'DevOps', 'Containerization'],
    price: 'Starting at $3,000'
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Modern, responsive web applications',
    icon: '🌐',
    features: ['React/Next.js', 'Node.js', 'Database Design'],
    price: 'Starting at $2,500'
  }
];

export const COMPANY_INFO = {
  name: 'Zion Tech Solutions',
  tagline: 'AI-Powered Business Solutions',
  email: 'contact@zion.app',
  phone: '+1 (555) 123-4567',
  address: '123 Tech Street, Silicon Valley, CA 94000'
};
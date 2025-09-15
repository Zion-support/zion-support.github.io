export interface Service {
  id: string;
  name: string;
  category:
    | 'AI Services'
    | 'IT Services'
    | 'Micro SAAS'
    | 'Blockchain'
    | 'IoT & Edge'
    | 'Cybersecurity'
    | 'Cloud & DevOps'
    | 'Data & Analytics';
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

export const services: Service[] = [
  {
    id: 'ai-code-assistant',
    name: 'ZionAI Code Assistant',
    category: 'AI Services',
    description:
      'Advanced AI-powered code generation, review, and optimization platform with context-aware suggestions and multi-language support.',
    features: [
      'Real-time code completion and suggestions',
      'Automated code review and optimization',
      'Multi-language support (Python, JavaScript, Go, Rust)',
      'Security vulnerability detection',
      'Code documentation generation',
      'Integration with popular IDEs',
      'Custom model fine-tuning for enterprise codebases'
    ],
    pricing: {
      starter: '$29/month',
      professional: '$99/month',
      enterprise: '$299/month',
      custom: 'Contact for enterprise pricing'
    },
    technologyStack: ['OpenAI GPT-4', 'Claude 3', 'Python', 'React', 'Node.js', 'PostgreSQL'],
    benefits: [
      'Reduce development time by 40-60%',
      'Improve code quality and security',
      'Lower maintenance costs',
      'Accelerate team onboarding',
      '24/7 AI assistance'
    ],
    useCases: [
      'Software development teams',
      'Startups and scale-ups',
      'Enterprise development',
      'Freelance developers',
      'Educational institutions'
    ],
    status: 'active',
    priority: 1,
    demoUrl: 'https://ziontechgroup.com/demo/ai-code-assistant',
    documentationUrl: 'https://ziontechgroup.com/docs/ai-code-assistant',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  }
];

export const getServicesByCategory = (category: Service['category']) => {
  return services.filter((service) => service.category === category);
};

export const getServiceById = (id: string) => {
  return services.find((service) => service.id === id);
};

export const getCategories = () => {
  return Array.from(new Set(services.map((service) => service.category)));
};

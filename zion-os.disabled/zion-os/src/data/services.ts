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

export const services: Service[] = [
  {
    id: 'ai-code-assistant',
    name: 'ZionAI Code Assistant',
    category: 'AI Services',
    description: 'Advanced AI-powered code generation, review, and optimization platform with context-aware suggestions and multi-language support.',
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
  },
  {
    id: 'ai-content-generator',
    name: 'ContentForge AI',
    category: 'AI Services',
    description: 'Enterprise-grade AI content generation platform for marketing, documentation, and creative writing with brand voice consistency.',
    features: [
      'Multi-format content generation (blogs, emails, social media)',
      'Brand voice training and consistency',
      'SEO optimization and keyword research',
      'Multi-language content creation',
      'Plagiarism detection and originality scoring',
      'Content performance analytics',
      'Team collaboration and approval workflows'
    ],
    pricing: {
      starter: '$49/month',
      professional: '$149/month',
      enterprise: '$399/month'
    },
    technologyStack: ['GPT-4', 'Claude 3', 'BERT', 'React', 'FastAPI', 'MongoDB'],
    benefits: [
      '10x faster content creation',
      'Consistent brand messaging',
      'Improved SEO performance',
      'Cost-effective content marketing',
      'Scalable content operations'
    ],
    useCases: [
      'Marketing agencies',
      'E-commerce businesses',
      'Content creators',
      'Enterprise marketing teams',
      'Educational institutions'
    ],
    status: 'active',
    priority: 2,
    demoUrl: 'https://ziontechgroup.com/demo/content-forge',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'managed-it-services',
    name: 'ZionTech Managed IT',
    category: 'IT Services',
    description: 'Comprehensive managed IT services including 24/7 monitoring, cybersecurity, cloud management, and strategic technology consulting.',
    features: [
      '24/7 network monitoring and support',
      'Cybersecurity threat detection and response',
      'Cloud infrastructure management (AWS, Azure, GCP)',
      'Backup and disaster recovery',
      'Help desk and user support',
      'Technology roadmap planning',
      'Compliance and audit support'
    ],
    pricing: {
      starter: '$99/month per user',
      professional: '$149/month per user',
      enterprise: '$199/month per user'
    },
    technologyStack: ['Microsoft 365', 'AWS', 'Azure', 'Cisco', 'Fortinet', 'Veeam'],
    benefits: [
      'Reduce IT costs by 25-40%',
      'Improve system uptime to 99.9%',
      'Enhanced security posture',
      'Predictable monthly costs',
      'Access to enterprise-grade tools'
    ],
    useCases: [
      'Small to medium businesses',
      'Healthcare organizations',
      'Financial services',
      'Manufacturing companies',
      'Professional services firms'
    ],
    status: 'active',
    priority: 3,
    demoUrl: 'https://ziontechgroup.com/demo/managed-it',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  }
];

export const getServicesByCategory = (category: Service['category']) => {
  return services.filter(service => service.category === category);
};

export const getServiceById = (id: string) => {
  return services.find(service => service.id === id);
};

export const getCategories = () => {
  return Array.from(new Set(services.map(service => service.category)));
};
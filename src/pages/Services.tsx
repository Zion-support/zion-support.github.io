import React, { useState } from 'react';
=======
import { useState, useMemo } from 'react';
>>>>>>> origin/cursor/check-and-fix-github-actions-e92c
=======
import { useState } from 'react';
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
import { motion } from 'framer-motion';
=======
import React, { useState, useEffect } from 'react';
import { SEO } from "@/components/SEO";
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6b26
=======
import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
=======
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
>>>>>>> 93cb4347559d7aad42ba431e1ae67c54c6aa6cb9
import { 
  Brain, 
  Cpu, 
  Cloud, 
  Shield, 
  Rocket, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Target,
  Award,
  Globe,
  Settings,
  Database,
  Network
} from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-8e2b
import { Link } from 'react-router-dom';
=======
  Sparkles,
  FileText
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0f9b
} from 'lucide-react';
=======
import { Link } from 'react-router-dom';
import { Brain, Cloud, Shield, Zap, ArrowRight, Search } from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-24bd
=======
import { Star, CheckCircle } from 'lucide-react';
>>>>>>> origin/cursor/build-and-fix-errors-c9ef

        }
      ]
    },
    {
      id: 'quantum',
      title: 'Quantum Technology',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      description: 'Next-generation quantum computing solutions',
      services: [
        {
          name: 'Quantum Machine Learning Platform',
          path: '/comprehensive-services-showcase',
          description: 'Revolutionary platform combining quantum computing with ML',
          icon: Brain,
          features: ['Quantum ML algorithms', 'Hybrid workflows', 'Performance benchmarking'],
          pricing: 'Starting from $2,500/month'
        },
        {
          name: 'Quantum Internet Platform',
          path: '/comprehensive-services-showcase',
          description: 'Ultra-secure quantum communications network',
          icon: Cpu,
          features: ['Quantum key distribution', 'Unbreakable encryption', 'Quantum networks'],
          pricing: 'Starting from $4,000/month'
        }
      ]
    },
    {
      id: 'emerging-tech',
      title: 'Emerging Technologies',
      icon: Rocket,
      color: 'from-purple-500 to-pink-500',
      description: 'Cutting-edge technologies of the future',
      services: [
        {
          name: 'Edge AI Computing Platform',
          path: '/comprehensive-services-showcase',
          description: 'AI processing at the edge for real-time decisions',
          icon: Rocket,
          features: ['Edge AI deployment', 'Low latency processing', 'Privacy-preserving AI'],
          pricing: 'Starting from $899/month'
        },
        {
          name: 'Neuromorphic Computing',
          path: '/comprehensive-services-showcase',
          description: 'Brain-inspired computing for ultra-efficient AI',
          icon: Rocket,
          features: ['Spiking neural networks', 'Ultra-low power', 'Cognitive computing'],
          pricing: 'Starting from $3,500/month'
        },
        {
          name: '6G Network Infrastructure',
          path: '/comprehensive-services-showcase',
          description: 'Next-generation 6G network solutions',
          icon: Rocket,
          features: ['Terahertz speeds', 'Ultra-low latency', 'AI optimization'],
          pricing: 'Starting from $5,000/month'
        }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      description: 'Comprehensive security and compliance solutions',
      services: [
        {
          name: 'Cybersecurity Services',
          path: '/services/cybersecurity',
          description: 'Complete security solutions for your business',
          icon: Shield,
          features: ['Threat detection', 'Vulnerability assessment', 'Incident response'],
          pricing: 'Starting from $3,500/month'
        },
        {
          name: 'SOC2 Compliance Automation',
          path: '/soc2-compliance-automation',
          description: 'Automated compliance management and monitoring',
          icon: Lock,
          features: ['Automated audits', 'Real-time monitoring', 'Compliance reporting'],
          pricing: 'Starting from $4,500/month'
        }
      ]
    },
    {
      id: 'infrastructure',
      title: 'Cloud & Infrastructure',
      icon: Cpu,
      color: 'from-blue-500 to-indigo-500',
      description: 'Scalable cloud solutions and infrastructure management',
      services: [
        {
          name: 'Cloud-Native Development Platform',
          path: '/comprehensive-services-showcase',
          description: 'Enterprise-grade cloud-native development platform',
          icon: Cloud,
          features: ['Kubernetes orchestration', 'Microservices architecture', 'CI/CD pipelines'],
          pricing: 'Starting from $800/month'
        },
        {
          name: 'AI-Powered IT Operations',
          path: '/comprehensive-services-showcase',
          description: 'Intelligent IT operations with AI automation',
          icon: Network,
          features: ['AI monitoring', 'Predictive analytics', 'Automated incident response'],
          pricing: 'Starting from $1,500/month'
        },
        {
          name: 'Enterprise Data Management',
          path: '/comprehensive-services-showcase',
          description: 'Comprehensive data governance and management',
          icon: Network,
          features: ['Data governance', 'Quality management', 'Compliance monitoring'],
          pricing: 'Starting from $1,000/month'
        }
      ]
    },
    {
      id: 'business',
      title: 'Business Operations',
      icon: Building,
      color: 'from-green-500 to-emerald-500',
      description: 'Streamlined business process automation',
      services: [
        {
          name: 'AI Retail Intelligence Platform',
          path: '/comprehensive-services-showcase',
          description: 'Comprehensive retail analytics and customer intelligence',
          icon: Building,
          features: ['Customer behavior analysis', 'Inventory optimization', 'Personalized recommendations'],
          pricing: 'Starting from $399/month'
        },
        {
          name: 'AI Real Estate Analytics',
          path: '/comprehensive-services-showcase',
          description: 'Intelligent real estate market analysis and insights',
          icon: Database,
          features: ['Market trend analysis', 'Property value prediction', 'Investment scoring'],
          pricing: 'Starting from $299/month'
        }
      ]
    },
    {
      id: 'industry',
      title: 'Industry Solutions',
      icon: Target,
      color: 'from-orange-500 to-yellow-500',
      description: 'Tailored solutions for specific industries',
      services: [
        {
          name: 'AI Adaptive Learning Platform',
          path: '/comprehensive-services-showcase',
          description: 'Intelligent learning platform with personalized education',
          icon: Heart,
          features: ['Personalized learning paths', 'Progress tracking', 'Performance analytics'],
          pricing: 'Starting from $199/month'
        },
        {
          name: 'AI Logistics Optimization',
          path: '/comprehensive-services-showcase',
          description: 'Intelligent logistics and supply chain optimization',
          icon: DollarSign,
          features: ['Route optimization', 'Delivery prediction', 'Supply chain analytics'],
          pricing: 'Starting from $499/month'
        },
        {
          name: 'AI Energy Optimization',
          path: '/comprehensive-services-showcase',
          description: 'Intelligent energy management and optimization',
          icon: Cpu,
          features: ['Energy consumption analysis', 'Cost optimization', 'Sustainability reporting'],
          pricing: 'Starting from $399/month'
        }
      ]
    },
    {
      id: 'specialized-it',
      title: 'Specialized IT Services',
      icon: Shield,
      color: 'from-indigo-500 to-purple-500',
      description: 'Advanced IT solutions and specialized services',
      services: [
        {
          name: 'Zero Trust Security Platform',
          path: '/comprehensive-services-showcase',
          description: 'Comprehensive zero trust security implementation',
          icon: Shield,
          features: ['Continuous verification', 'Least privilege access', 'Micro-segmentation'],
          pricing: 'Starting from $1,200/month'
        },
        {
          name: 'DevOps Automation Platform',
          path: '/comprehensive-services-showcase',
          description: 'Comprehensive DevOps automation and CI/CD',
          icon: Shield,
          features: ['CI/CD pipelines', 'Infrastructure as code', 'Automated testing'],
          pricing: 'Starting from $600/month'
        },
        {
          name: 'Application Performance Management',
          path: '/comprehensive-services-showcase',
          description: 'Advanced application performance monitoring',
          icon: Shield,
          features: ['Real-time monitoring', 'Performance analytics', 'User experience tracking'],
          pricing: 'Starting from $900/month'
        }
      ]
    }
>>>>>>> origin/cursor/expand-services-and-deploy-updates-9864
  ];
  
  const categories = ['all', ...SERVICE_CATEGORIES];
  const subcategories = ['all', ...SERVICE_SUBCATEGORIES];
  
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSubcategory = selectedSubcategory === 'all' || service.subcategory === selectedSubcategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (service.tags && service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
    return matchesCategory && matchesSubcategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.title.localeCompare(b.title);
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
=======
  const filteredServices = COMPREHENSIVE_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (service.tags && service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));

    return matchesCategory && matchesSearch;
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
  });

  const categories = ['all', ...Array.from(new Set(COMPREHENSIVE_SERVICES.map(service => service.category)))];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    },
    {
      icon: Database,
=======
      color: "from-zion-purple to-zion-blue",
      services: [
        "Data Engineering",
        "Business Intelligence",
        "Data Warehousing",
        "Real-time Analytics",
        "Data Visualization",
        "Big Data Processing"
      ],
      link: "/ai-services/predictive-analytics"
    },
    {
      title: "Digital Transformation",
      description: "End-to-end digital transformation consulting",
      icon: Zap,
      color: "from-zion-blue to-zion-purple",
      services: [
        "Digital Strategy",
        "Process Automation",
        "Change Management",
        "Technology Assessment",
        "Digital Roadmap",
        "Implementation Support"
      ],
      link: "/it-services/digital-transformation"
>>>>>>> 93cb4347559d7aad42ba431e1ae67c54c6aa6cb9
    }
  ];

  const featuredServices = [
    {
    }
  ];

  const industries = [
    }
  ];

    }
  ];

  return (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';
import { Search, Filter, Star, Clock, Users, Shield, Zap, Brain, Globe, Code, Database, Cloud, Lock, BarChart3, Rocket, Target, TrendingUp, Award, CheckCircle, ArrowRight } from 'lucide-react';

export function Services() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPricing, setSelectedPricing] = useState('All');

  const categories = ['All', ...Array.from(new Set(COMPREHENSIVE_SERVICES.map(service => service.category)))];
  const pricingModels = ['All', ...Array.from(new Set(COMPREHENSIVE_SERVICES.map(service => service.pricingModel)))];

  const filteredServices = useMemo(() => {
    return COMPREHENSIVE_SERVICES.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      const matchesPricing = selectedPricing === 'All' || service.pricingModel === selectedPricing;
      
      return matchesSearch && matchesCategory && matchesPricing;
    });
  }, [searchTerm, selectedCategory, selectedPricing]);

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI & Machine Learning': <Brain className="w-6 h-6" />,
      'Cybersecurity': <Shield className="w-6 h-6" />,
      'Cloud Computing': <Cloud className="w-6 h-6" />,
      'Web Development': <Code className="w-6 h-6" />,
      'Mobile Development': <Code className="w-6 h-6" />,
      'Data Analytics': <BarChart3 className="w-6 h-6" />,
      'DevOps & Automation': <Zap className="w-6 h-6" />,
      'Blockchain': <Database className="w-6 h-6" />,
      'IoT Solutions': <Globe className="w-6 h-6" />,
      'Digital Marketing': <TrendingUp className="w-6 h-6" />,
      'IT Consulting': <Users className="w-6 h-6" />,
      'Software Testing': <CheckCircle className="w-6 h-6" />
    };
    return iconMap[category] || <Rocket className="w-6 h-6" />;
  };

  const getPricingDisplay = (service: typeof COMPREHENSIVE_SERVICES[0]) => {
    switch (service.pricingModel) {
      case 'one-time':
        return `${service.currency}${service.price.toLocaleString()}`;
      case 'monthly':
        return `${service.currency}${service.price.toLocaleString()}/month`;
      case 'yearly':
        return `${service.currency}${service.price.toLocaleString()}/year`;
      case 'per-user':
        return `${service.currency}${service.price.toLocaleString()}/user`;
      case 'per-project':
        return `${service.currency}${service.price.toLocaleString()}/project`;
      default:
        return `${service.currency}${service.price.toLocaleString()}`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light text-white">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-zion-cyan/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          </p>
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent animate-neon-pulse">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Discover our comprehensive suite of cutting-edge technology solutions designed to transform your business and drive innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-zion-cyan">
              {COMPREHENSIVE_SERVICES.length}+ Services
            </span>
            <span className="px-4 py-2 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full text-zion-cyan">
              AI-Powered Solutions
            </span>
            <span className="px-4 py-2 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-zion-cyan">
              Enterprise Grade
            </span>
          </div>
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
import { motion } from 'framer-motion';
import { Search, CheckCircle, ArrowRight, Phone } from 'lucide-react';
=======
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star, ExternalLink, Zap, Shield, Cloud, Brain, Globe, Lock, Cpu, Database, Network, Code, BarChart3, Users, Smartphone, Server, Key, Eye, Rocket, Target, TrendingUp, Award, Clock, CheckCircle, ArrowRight } from 'lucide-react';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9077

interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  price: string;
  features: string[];
  technology: string[];
  icon: React.ComponentType<any>;
  popular?: boolean;
  new?: boolean;
  marketPrice: string;
  benefits: string[];
  useCases: string[];
  link: string;
}

const services: Service[] = [
  // AI & Machine Learning Services
  {
    id: 'ai-content-generator',
    name: 'AI Content Generator Pro',
    description: 'Advanced AI-powered content creation platform for blogs, social media, and marketing materials with SEO optimization.',
    category: 'AI & Machine Learning',
    price: '$299/month',
    marketPrice: '$500-800/month',
    features: [
      'Multi-language content generation',
      'SEO-optimized writing',
      'Brand voice customization',
      'Plagiarism-free content',
      'Content calendar planning',
      'Performance analytics'
    ],
    technology: ['GPT-4', 'BERT', 'Python', 'React', 'Node.js', 'MongoDB'],
    icon: Brain,
    popular: true,
    benefits: [
      'Save 80% of content creation time',
      'Improve SEO rankings by 40%',
      'Maintain consistent brand voice',
      'Scale content production 10x'
    ],
    useCases: [
      'Marketing agencies',
      'E-commerce businesses',
      'Content creators',
      'Startups and enterprises'
    ],
    link: 'https://ziontechgroup.com/ai-content-generator'
  },
  {
    id: 'ai-customer-support',
    name: 'AI Customer Support Suite',
    description: 'Intelligent customer support automation with 24/7 availability, multilingual support, and seamless human handoff.',
    category: 'AI & Machine Learning',
    price: '$199/month',
    marketPrice: '$300-600/month',
    features: [
      'Natural language processing',
      'Multi-language support',
      'Sentiment analysis',
      'Ticket routing automation',
      'Knowledge base integration',
      'Performance analytics'
    ],
    technology: ['NLP', 'Machine Learning', 'Python', 'React', 'WebSocket', 'Redis'],
    icon: Users,
    popular: true,
    benefits: [
      'Reduce support costs by 60%',
      'Improve response time by 90%',
      'Handle 80% of queries automatically',
      '24/7 customer availability'
    ],
    useCases: [
      'E-commerce platforms',
      'SaaS companies',
      'Customer service teams',
      'Online businesses'
    ],
    link: 'https://ziontechgroup.com/ai-customer-support'
  },
  {
    id: 'ai-data-analytics',
    name: 'AI-Powered Business Intelligence',
    description: 'Advanced analytics platform that transforms raw data into actionable insights using machine learning algorithms.',
    category: 'AI & Machine Learning',
    price: '$499/month',
    marketPrice: '$800-1500/month',
    features: [
      'Predictive analytics',
      'Real-time dashboards',
      'Custom reporting',
      'Data visualization',
      'Automated insights',
      'API integrations'
    ],
    technology: ['TensorFlow', 'Python', 'React', 'D3.js', 'PostgreSQL', 'Redis'],
    icon: BarChart3,
    new: true,
    benefits: [
      'Make data-driven decisions faster',
      'Identify trends before competitors',
      'Reduce manual reporting by 70%',
      'Improve forecasting accuracy by 85%'
    ],
    useCases: [
      'Financial institutions',
      'Retail businesses',
      'Manufacturing companies',
      'Healthcare organizations'
    ],
    link: 'https://ziontechgroup.com/ai-business-intelligence'
  },

  // Cybersecurity Services
  {
    id: 'threat-detection',
    name: 'Advanced Threat Detection System',
    description: 'Real-time cybersecurity monitoring with AI-powered threat detection, automated response, and compliance reporting.',
    category: 'Cybersecurity',
    price: '$399/month',
    marketPrice: '$600-1200/month',
    features: [
      'Real-time threat monitoring',
      'AI-powered detection',
      'Automated incident response',
      'Compliance reporting',
      'Vulnerability assessment',
      'Security training modules'
    ],
    technology: ['Machine Learning', 'Python', 'Elasticsearch', 'Kafka', 'React', 'Docker'],
    icon: Shield,
    popular: true,
    benefits: [
      'Detect threats 90% faster',
      'Reduce false positives by 70%',
      'Meet compliance requirements',
      'Protect against zero-day attacks'
    ],
    useCases: [
      'Financial services',
      'Healthcare organizations',
      'Government agencies',
      'Enterprise businesses'
    ],
    link: 'https://ziontechgroup.com/threat-detection'
  },
  {
    id: 'identity-management',
    name: 'Zero Trust Identity Management',
    description: 'Comprehensive identity and access management solution with multi-factor authentication and behavioral analytics.',
    category: 'Cybersecurity',
    price: '$299/month',
    marketPrice: '$400-800/month',
    features: [
      'Multi-factor authentication',
      'Single sign-on (SSO)',
      'Role-based access control',
      'Behavioral analytics',
      'Audit logging',
      'API security'
    ],
    technology: ['OAuth 2.0', 'SAML', 'React', 'Node.js', 'PostgreSQL', 'Redis'],
    icon: Key,
    new: true,
    benefits: [
      'Reduce security breaches by 80%',
      'Simplify user access management',
      'Meet compliance requirements',
      'Improve user experience'
    ],
    useCases: [
      'Enterprise organizations',
      'Healthcare providers',
      'Financial institutions',
      'Educational institutions'
    ],
    link: 'https://ziontechgroup.com/identity-management'
  },

  // Cloud & DevOps Services
  {
    id: 'cloud-automation',
    name: 'Cloud Infrastructure Automation',
    description: 'Automated cloud infrastructure management with cost optimization, auto-scaling, and disaster recovery.',
    category: 'Cloud & DevOps',
    price: '$599/month',
    marketPrice: '$800-2000/month',
    features: [
      'Infrastructure as Code',
      'Auto-scaling',
      'Cost optimization',
      'Disaster recovery',
      'Monitoring & alerting',
      'Security compliance'
    ],
    technology: ['Terraform', 'Kubernetes', 'AWS/Azure/GCP', 'Docker', 'Prometheus', 'Grafana'],
    icon: Cloud,
    popular: true,
    benefits: [
      'Reduce infrastructure costs by 40%',
      'Deploy 10x faster',
      'Improve reliability to 99.99%',
      'Automate compliance checks'
    ],
    useCases: [
      'Startups scaling rapidly',
      'Enterprise cloud migration',
      'DevOps teams',
      'E-commerce platforms'
    ],
    link: 'https://ziontechgroup.com/cloud-automation'
  },
  {
    id: 'ci-cd-pipeline',
    name: 'Enterprise CI/CD Pipeline',
    description: 'Complete continuous integration and deployment pipeline with automated testing, security scanning, and rollback capabilities.',
    category: 'Cloud & DevOps',
    price: '$399/month',
    marketPrice: '$500-1000/month',
    features: [
      'Automated testing',
      'Security scanning',
      'Deployment automation',
      'Rollback capabilities',
      'Performance monitoring',
      'Team collaboration tools'
    ],
    technology: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'SonarQube', 'React'],
    icon: Rocket,
    benefits: [
      'Deploy code 50x faster',
      'Reduce deployment failures by 90%',
      'Improve code quality',
      'Enable team collaboration'
    ],
    useCases: [
      'Software development teams',
      'DevOps engineers',
      'Startups and enterprises',
      'Digital agencies'
    ],
    link: 'https://ziontechgroup.com/ci-cd-pipeline'
  },

  // Blockchain & Web3 Services
  {
    id: 'defi-platform',
    name: 'DeFi Platform Development',
    description: 'Custom decentralized finance platform development with smart contracts, liquidity pools, and yield farming.',
    category: 'Blockchain',
    price: '$2,999/month',
    marketPrice: '$5000-15000/month',
    features: [
      'Smart contract development',
      'Liquidity pool management',
      'Yield farming protocols',
      'Cross-chain bridges',
      'Security auditing',
      'User interface'
    ],
    technology: ['Solidity', 'Ethereum', 'Polygon', 'Web3.js', 'React', 'Hardhat'],
    icon: Lock,
    new: true,
    benefits: [
      'Launch DeFi protocols faster',
      'Ensure smart contract security',
      'Access to DeFi market',
      'Innovative financial products'
    ],
    useCases: [
      'Financial startups',
      'Crypto projects',
      'Traditional banks',
      'Investment firms'
    ],
    link: 'https://ziontechgroup.com/defi-platform'
  },
  {
    id: 'nft-marketplace',
    name: 'NFT Marketplace Platform',
    description: 'Complete NFT marketplace with minting, trading, auctions, and royalty distribution systems.',
    category: 'Blockchain',
    price: '$1,999/month',
    marketPrice: '$3000-8000/month',
    features: [
      'NFT minting tools',
      'Marketplace functionality',
      'Auction system',
      'Royalty distribution',
      'Multi-chain support',
      'Analytics dashboard'
    ],
    technology: ['Solidity', 'IPFS', 'Ethereum', 'Polygon', 'React', 'Node.js'],
    icon: Globe,
    benefits: [
      'Launch NFT marketplace quickly',
      'Generate revenue from trading fees',
      'Support multiple blockchains',
      'Built-in royalty system'
    ],
    useCases: [
      'Art galleries',
      'Gaming companies',
      'Content creators',
      'Brands and celebrities'
    ],
    link: 'https://ziontechgroup.com/nft-marketplace'
  },

  // IoT & Edge Computing
  {
    id: 'iot-platform',
    name: 'Enterprise IoT Management Platform',
    description: 'Comprehensive IoT platform for device management, data collection, analytics, and automation.',
    category: 'IoT',
    price: '$799/month',
    marketPrice: '$1000-3000/month',
    features: [
      'Device management',
      'Real-time monitoring',
      'Data analytics',
      'Automation rules',
      'Security protocols',
      'API integrations'
    ],
    technology: ['MQTT', 'Node.js', 'React', 'MongoDB', 'Redis', 'Docker'],
    icon: Smartphone,
    popular: true,
    benefits: [
      'Monitor thousands of devices',
      'Reduce operational costs by 30%',
      'Improve efficiency through automation',
      'Real-time insights and alerts'
    ],
    useCases: [
      'Manufacturing companies',
      'Smart cities',
      'Healthcare facilities',
      'Energy companies'
    ],
    link: 'https://ziontechgroup.com/iot-platform'
  },
  {
    id: 'edge-computing',
    name: 'Edge Computing Solutions',
    description: 'Edge computing infrastructure for low-latency applications, real-time processing, and distributed computing.',
    category: 'IoT',
    price: '$1,299/month',
    marketPrice: '$2000-5000/month',
    features: [
      'Edge node deployment',
      'Real-time processing',
      'Load balancing',
      'Security protocols',
      'Monitoring tools',
      'API management'
    ],
    technology: ['Kubernetes', 'Docker', 'Python', 'React', 'PostgreSQL', 'Redis'],
    icon: Server,
    new: true,
    benefits: [
      'Reduce latency by 90%',
      'Process data closer to source',
      'Improve application performance',
      'Reduce bandwidth costs'
    ],
    useCases: [
      'Gaming companies',
      'Financial trading platforms',
      'Autonomous vehicles',
      'Smart manufacturing'
    ],
    link: 'https://ziontechgroup.com/edge-computing'
  },

  // Quantum Computing Services
  {
    id: 'quantum-algorithms',
    name: 'Quantum Algorithm Development',
    description: 'Custom quantum algorithm development for optimization, cryptography, and machine learning applications.',
    category: 'Quantum Computing',
    price: '$3,999/month',
    marketPrice: '$5000-20000/month',
    features: [
      'Custom algorithm development',
      'Quantum circuit design',
      'Optimization problems',
      'Cryptography solutions',
      'Performance testing',
      'Documentation & training'
    ],
    technology: ['Qiskit', 'Cirq', 'Python', 'Quantum circuits', 'IBM Quantum', 'Google Quantum'],
    icon: Cpu,
    new: true,
    benefits: [
      'Solve complex problems faster',
      'Access quantum advantage',
      'Future-proof your applications',
      'Competitive edge in research'
    ],
    useCases: [
      'Research institutions',
      'Pharmaceutical companies',
      'Financial services',
      'Government agencies'
    ],
    link: 'https://ziontechgroup.com/quantum-algorithms'
  },

  // Data & Analytics Services
  {
    id: 'data-warehouse',
    name: 'Modern Data Warehouse',
    description: 'Cloud-native data warehouse with real-time analytics, ETL pipelines, and business intelligence tools.',
    category: 'Data & Analytics',
    price: '$899/month',
    marketPrice: '$1200-3000/month',
    features: [
      'Real-time data processing',
      'ETL pipeline automation',
      'Business intelligence tools',
      'Data governance',
      'Security & compliance',
      'Scalable architecture'
    ],
    technology: ['Snowflake', 'Apache Airflow', 'dbt', 'React', 'Python', 'Docker'],
    icon: Database,
    popular: true,
    benefits: [
      'Unify all data sources',
      'Real-time insights',
      'Scale with business growth',
      'Reduce data silos'
    ],
    useCases: [
      'E-commerce companies',
      'Financial services',
      'Healthcare organizations',
      'Retail businesses'
    ],
    link: 'https://ziontechgroup.com/data-warehouse'
  }
];

const categories = [
  'All', 
  'AI & Machine Learning', 
  'Cybersecurity', 
  'Cloud & DevOps', 
  'Blockchain', 
  'IoT', 
  'Quantum Computing',
  'Data & Analytics'
];

const priceRanges = ['all', '0-500', '500-1000', '1000-2000', '2000-4000', '4000+'];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const filteredServices = useMemo(() => {
    let filtered = services;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.technology.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by price range
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(service => {
        const price = parseInt(service.price.replace(/[^0-9]/g, ''));
        if (max === 0) return price >= min;
        return price >= min && price <= max;
      });
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
          const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
          return priceA - priceB;
        case 'popularity':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        case 'new':
          return (b.new ? 1 : 0) - (a.new ? 1 : 0);
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [selectedCategory, searchTerm, priceRange, sortBy]);

  const getPriceRangeLabel = (range: string) => {
    switch (range) {
      case '0-500': return 'Under $500/month';
      case '500-1000': return '$500 - $1,000/month';
      case '1000-2000': return '$1,000 - $2,000/month';
      case '2000-4000': return '$2,000 - $4,000/month';
      case '4000+': return 'Over $4,000/month';
      default: return 'All Prices';
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9077
    }
  };

  return (
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            </div>
=======
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
          </p>
=======
import React from 'react';
=======
import React from 'react';
import { motion } from 'framer-motion';
>>>>>>> origin/cursor/build-and-fix-errors-e276
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Globe, 
  Database, 
  Smartphone, 
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
=======
          {/* Category Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            <button
              onClick={() => handleCategorySelect('all')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/30'
                  : 'bg-white/10 text-zion-slate-light hover:bg-white/20 border border-zion-cyan/30'
              }`}
>>>>>>> origin/cursor/check-and-fix-github-actions-e92c
            >
              Get Started
            </Link>
            <Link 
              to="/pricing" 
              className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Pricing
            </Link>
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-f30b
=======
      title: "AI Consciousness Simulator",
      description: "Advanced AI consciousness research platform for understanding human cognition",
      icon: Brain,
      color: "from-zion-cyan to-zion-blue",
      link: "/ai-services/consciousness-simulator"
    },
    {
      title: "Quantum Computing Suite",
      description: "Next-generation quantum computing solutions for complex problem solving",
      icon: Atom,
      color: "from-zion-purple to-zion-cyan",
      link: "/emerging-tech/quantum-computing"
    },
    {
      title: "Green IT Solutions",
      description: "Sustainable technology infrastructure for environmentally conscious businesses",
      icon: Heart,
      color: "from-zion-cyan to-zion-green",
      link: "/green-it"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered", icon: CheckCircle },
    { number: "99.9%", label: "Client Satisfaction", icon: Star },
    { number: "24/7", label: "Support Available", icon: Shield },
    { number: "50+", label: "Expert Engineers", icon: Users }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold text-white mb-6"
            >
              Our
              <span className="block bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                Services
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto"
            >
              Comprehensive technology solutions designed to drive innovation, enhance security, 
              and accelerate your business growth in the digital age.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Featured Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover our most innovative and cutting-edge solutions that are transforming industries worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={service.link}>
                  <div className="bg-zion-slate/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 h-full">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-zion-slate-light mb-6">
                      {service.description}
                    </p>
                    <div className="flex items-center text-zion-cyan group-hover:text-zion-purple transition-colors duration-300">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
>>>>>>> 93cb4347559d7aad42ba431e1ae67c54c6aa6cb9
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Core Service Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
                  {category.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {category.services.map((service, serviceIndex) => (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-zion-blue-dark via-zion-blue-light to-zion-purple overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-zion-cyan/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-zion-purple/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zion-cyan/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9077
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
              </div>
            ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3
          </div>
        </div>
      </section>

                }`}
              >
                {category.name}
              </button>
            ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-24bd
          </div>
        </motion.div>
=======
        </section>
>>>>>>> origin/cursor/build-and-fix-errors-c9ef

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Revolutionary Technology Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Discover our cutting-edge portfolio of innovative technology solutions designed to transform your business. 
              From AI-powered analytics to quantum computing platforms, we're building the future today.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-zion-slate-light">
              <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Zap className="w-4 h-4 text-zion-cyan" />
                {services.length}+ Revolutionary Services
              </span>
              <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="w-4 h-4 text-zion-cyan" />
                99.9% Uptime Guarantee
              </span>
              <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Brain className="w-4 h-4 text-zion-cyan" />
                AI-Powered Solutions
              </span>
              <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="w-4 h-4 text-zion-cyan" />
                Competitive Pricing
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-16 px-6 bg-zion-blue-dark/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 shadow-2xl"
          >
            <div className="grid md:grid-cols-4 gap-6">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-zion-slate-light mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan transition-all duration-300"
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
          className="mb-12"
        >
          <div className="bg-zion-blue-light/20 backdrop-blur-md border border-zion-purple/30 rounded-2xl p-6">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search services, features, or use cases..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              {/* Category Filter */}
              <div className="flex-1 min-w-48">
                <label className="block text-zion-slate-light text-sm font-medium mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan"
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
              {/* Pricing Filter */}
              <div className="flex-1 min-w-48">
                <label className="block text-zion-slate-light text-sm font-medium mb-2">Pricing Model</label>
                <select
                  value={selectedPricing}
                  onChange={(e) => setSelectedPricing(e.target.value)}
                  className="w-full px-3 py-2 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan"
                >
                  {pricingModels.map(model => (
                    <option key={model} value={model}>{model.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</option>
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
                  ))}
                </select>
              </div>

              <motion.div
                key={service.id}
                variants={itemVariants}
                className="futuristic-card group"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 bg-gradient-to-r ${categoryColor} rounded-xl`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-200">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-400">{service.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-cyan-400">${service.price}</div>
                    <div className="text-sm text-gray-400">per month</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>

                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                      >
                        {tag}
                      </span>
                    ))}
=======
      <section className="py-20 bg-zion-slate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Service Categories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Explore our comprehensive range of technology services designed to meet every business need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{category.title}</h3>
                    <p className="text-zion-slate-light mb-4">{category.description}</p>
                    <ul className="space-y-2 mb-6">
                      {category.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-center text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                          {service}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={category.link}
                      className="inline-flex items-center text-zion-cyan hover:text-zion-purple transition-colors duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
>>>>>>> 93cb4347559d7aad42ba431e1ae67c54c6aa6cb9
              </motion.div>
            );
          })}
        </motion.div>

=======
        {/* Additional Services Links */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Explore More Services</h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Discover our comprehensive portfolio of innovative micro SAAS and specialized IT solutions.
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
              <Link
                to="/services/comprehensive"
                className="bg-zion-blue-light/20 rounded-lg p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <h3 className="text-xl font-bold text-white mb-3">Comprehensive Services</h3>
                <p className="text-zion-slate-light mb-4">
                  Explore our complete portfolio of micro SAAS and IT solutions with transparent pricing and detailed features.
                </p>
                <div className="text-zion-cyan hover:text-zion-cyan-light flex items-center justify-center group">
                  View All Services <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
              
              <Link
                to="/services/innovative-showcase"
                className="bg-zion-blue-light/20 rounded-lg p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <h3 className="text-xl font-bold text-white mb-3">Innovative Showcase</h3>
                <p className="text-zion-slate-light mb-4">
                  Discover cutting-edge solutions including AI-powered business intelligence and advanced cybersecurity platforms.
                </p>
                <div className="text-zion-cyan hover:text-zion-cyan-light flex items-center justify-center group">
                  Explore Innovations <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </section>

>>>>>>> origin/cursor/expand-services-and-deploy-updates-0c6c
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-24bd
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          )}
        </div>
      </section>

            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
              >
                View All Services
>>>>>>> origin/cursor/expand-services-and-deploy-updates-9864
              </Link>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-xl text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center group hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Sales Team
              </a>
=======
const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Transform your business with cutting-edge AI solutions including predictive analytics, natural language processing, and automated decision-making systems.",
      features: ["Predictive Analytics", "NLP Solutions", "Computer Vision", "AI Automation"],
      price: "From $2,500/month",
      color: "from-purple-500 to-pink-500",
      link: "/ai-services"
    },
    {
      icon: Cpu,
      title: "Micro SAAS Services",
      description: "Custom software solutions designed for modern businesses, from workflow automation to customer relationship management systems.",
      features: ["Custom Development", "Workflow Automation", "CRM Systems", "API Integration"],
      price: "From $15,000",
      color: "from-blue-500 to-cyan-500",
      link: "/micro-saas-services"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure, CI/CD pipelines, and automated deployment solutions that accelerate your development cycle.",
      features: ["Cloud Migration", "DevOps Automation", "Kubernetes", "Infrastructure as Code"],
      price: "From $35,000",
      color: "from-green-500 to-emerald-500",
      link: "/cloud-devops"
    },
    {
      icon: Shield,
      title: "Enterprise Solutions",
      description: "Comprehensive business technology solutions designed for enterprise-scale operations and digital transformation.",
      features: ["Digital Transformation", "Enterprise Security", "System Integration", "Compliance Management"],
      price: "From $50,000",
      color: "from-orange-500 to-red-500",
      link: "/enterprise-solutions"
    },
    {
      icon: Rocket,
      title: "Digital Transformation",
      description: "End-to-end business modernization through strategic digital transformation, process optimization, and innovation management.",
      features: ["Strategy Development", "Process Optimization", "Change Management", "Innovation Labs"],
      price: "From $75,000",
      color: "from-indigo-500 to-purple-500",
      link: "/digital-transformation"
    },
    {
      icon: Zap,
      title: "Emerging Technology",
      description: "Next-generation technology solutions including quantum computing, blockchain, IoT, AR/VR, and green technology.",
      features: ["Quantum Computing", "Blockchain Solutions", "IoT Platforms", "AR/VR Applications"],
      price: "From $75,000",
      color: "from-yellow-500 to-orange-500",
      link: "/emerging-tech"
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Custom Solutions",
      description: "Tailored technology solutions designed specifically for your business needs and requirements."
    },
    {
      icon: Award,
      title: "Proven Expertise",
      description: "15+ years of experience delivering complex technology solutions across industries."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serve customers worldwide with scalable, cloud-based solutions and global infrastructure."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security protocols and compliance frameworks for enterprise environments."
=======
  BarChart3,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Clock,
  Award
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: 'AI Solutions & Machine Learning',
      description: 'Cutting-edge artificial intelligence solutions that transform your business operations.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI-Powered Automation',
        'Custom AI Solutions'
      ],
      href: '/services/ai',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & DevOps',
      description: 'Scalable cloud solutions and automated deployment pipelines for modern applications.',
      features: [
        'AWS, Azure & GCP Migration',
        'Container Orchestration',
        'Serverless Architecture',
        'CI/CD Pipelines',
        'Infrastructure as Code',
        'Cloud Security & Compliance'
      ],
      href: '/services/cloud',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30'
    },
    {
      icon: Shield,
      title: 'Cybersecurity & Compliance',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      features: [
        'Zero Trust Security',
        'Penetration Testing',
        'Security Audits',
        'Compliance Management',
        'Incident Response',
        'Security Training'
      ],
      href: '/services/security',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30'
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'End-to-end business process modernization and digital strategy implementation.',
      features: [
        'Process Automation',
        'Legacy System Modernization',
        'API Integration',
        'Data Migration',
        'Change Management',
        'Digital Strategy Consulting'
      ],
      href: '/services/transformation',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30'
    },
    {
      icon: Smartphone,
      title: 'Web & Mobile Development',
      description: 'Custom web and mobile applications built with modern technologies and best practices.',
      features: [
        'React & Next.js Development',
        'Mobile App Development',
        'Progressive Web Apps',
        'E-commerce Solutions',
        'API Development',
        'Performance Optimization'
      ],
      href: '/services/development',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/30'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights with advanced analytics and visualization.',
      features: [
        'Data Warehousing',
        'Business Intelligence',
        'Real-time Analytics',
        'Data Visualization',
        'Predictive Modeling',
        'Data Governance'
      ],
      href: '/services/analytics',
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30'
>>>>>>> origin/cursor/build-and-fix-errors-e276
    }
  ];

  const stats = [
            </div>
          </motion.div>
        </div>
      </section>

=======
              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                <div className="space-y-2 text-zion-slate-light">
                  <p>📱 +1 (302) 464-0950</p>
                  <p>✉️ kleber@ziontechgroup.com</p>
                  <p>📍 364 E Main St STE 1008<br />Middletown DE 19709</p>
>>>>>>> origin/main
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Innovation First</h3>
                <p className="text-gray-300">Cutting-edge AI and quantum technologies that keep you ahead of the competition</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Proven Excellence</h3>
                <p className="text-gray-300">Trusted by enterprises worldwide with a track record of successful implementations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Expert Support</h3>
                <p className="text-gray-300">24/7 expert support and dedicated success managers for your business</p>
              </div>
            </div>
          </div>
        </div>
=======
        </motion.div>
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
=======
                  </div>
                </div>

                {/* Rating and Reviews */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-zion-slate-light'
                        }`}
                      />
                    ))}
                    <span className="text-zion-slate-light text-sm ml-2">
                      {service.rating} ({service.reviewCount} reviews)
                    </span>
                  </div>
                  <div className="text-zion-cyan text-sm font-medium">
                    AI Score: {service.aiScore}%
                  </div>
                </div>

                {/* Contact Info */}
                <div className="mb-6 p-4 bg-zion-blue-light/5 rounded-lg border border-zion-cyan/20">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2">Contact Information:</h4>
                  <p>📧 {service.author.name}</p>
                  <p>📱 {service.author.id}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Link
                    to={service.link}
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium text-center hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/contact"
                    className="px-6 py-3 border border-zion-cyan text-zion-cyan rounded-lg font-medium hover:bg-zion-cyan hover:text-white transition-all duration-300"
                  >
                    Get Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results Message */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-zion-slate-light mb-6">
                Try adjusting your search terms or category filter
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
=======
                {/* Technology Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                    <Code className="w-4 h-4 text-zion-cyan" />
                    Technology:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technology.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="bg-white/10 text-zion-slate-light text-xs px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold py-3 px-4 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105 transform"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-zion-slate-light text-lg mb-4">No services found matching your criteria</div>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchTerm('');
                  setPriceRange('all');
                }}
                className="bg-zion-cyan text-white px-6 py-3 rounded-lg hover:bg-zion-cyan-dark transition-colors"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9077
              >
                Clear Filters
              </button>
            </motion.div>
          )}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
      </div>
    </div>
  );
}
=======
      {/* Featured Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our most popular and impactful solutions that are transforming businesses worldwide.
=======
    { value: '200+', label: 'Projects Delivered', icon: CheckCircle, color: 'text-green-400' },
    { value: '99.99%', label: 'Uptime Guarantee', icon: Shield, color: 'text-blue-400' },
    { value: '24/7', label: 'Support Available', icon: Clock, color: 'text-purple-400' },
    { value: '15+', label: 'Years Experience', icon: Award, color: 'text-yellow-400' }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your requirements and business objectives to understand your needs.',
      icon: Globe
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Our experts design a tailored solution that aligns with your goals and budget.',
      icon: Brain
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'We build and thoroughly test your solution using industry best practices.',
      icon: Zap
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'Smooth deployment followed by ongoing support and maintenance.',
      icon: Cloud
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Comprehensive technology solutions designed to transform your business and drive innovation. 
              From AI and cloud infrastructure to cybersecurity and digital transformation.
>>>>>>> origin/cursor/build-and-fix-errors-e276
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-zion-blue-dark to-zion-blue text-white rounded-xl p-8 hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-6">
                  <service.icon className="w-16 h-16 text-zion-cyan" />
=======
      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Results Summary */}
          <div className="text-center mb-12">
            <p className="text-zion-slate-light">
              {isLoading ? 'Searching...' : `Showing ${totalResults} services`}
              {query && ` for "${query}"`}
              {selectedCategory !== 'all' && ` in ${selectedCategory}`}
            </p>
          </div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            {paginatedResults.results.map((service) => (
              <motion.div key={service.id} variants={itemVariants}>
                <div className="group bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm rounded-xl overflow-hidden border border-zion-blue-light/30 hover:border-zion-cyan/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-zion-cyan/20">
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <OptimizedImage
                      src={`https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs font-medium rounded-full">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Service Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="px-2 py-1 rounded-md bg-zion-slate/30 text-zion-slate-light text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Service Details */}
                    <div className="space-y-2 mb-4 text-sm text-zion-slate-light">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-zion-cyan" />
                        <span>Delivery: {service.estimatedDelivery}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-zion-cyan" />
                        <span>Support: {service.supportLevel}</span>
                      </div>
                    </div>
                    
                    {/* Price and CTA */}
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-zion-cyan">
                        {service.currency}{service.price.toLocaleString()}
                        <span className="text-sm text-zion-slate-light font-normal">/{service.pricingModel}</span>
                      </div>
                      <button className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 transform hover:scale-105">
                        Get Quote
                      </button>
                    </div>
                  </div>
>>>>>>> origin/cursor/check-and-fix-github-actions-e92c
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-zion-slate-light mb-6 text-center leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-zion-slate-light">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <Link 
                    to={service.link}
                    className="inline-flex items-center px-6 py-2 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
                  >
                    {service.cta}
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3

export default Services;
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
    </div>
  );
};

export default Services;
>>>>>>> origin/cursor/website-audit-and-enhancement-24bd
=======
                    <li key={serviceIndex} className="flex items-center gap-2 text-sm text-zion-slate-light">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                      {service}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={category.link}
                  className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light font-semibold text-sm transition-colors"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emerging Technologies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Emerging Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergingTech.map((tech, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:border-zion-cyan/50 transition-all duration-300">
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-xl flex items-center justify-center text-zion-cyan mx-auto mb-4">
                  {tech.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{tech.title}</h3>
                <p className="text-zion-slate-light text-sm leading-relaxed">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-zion-cyan rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Expert Team</h3>
                    <p className="text-zion-slate-light">15+ years of experience in cutting-edge technologies</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-zion-cyan rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Proven Results</h3>
                    <p className="text-zion-slate-light">500+ successful projects delivered worldwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-zion-cyan rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">24/7 Support</h3>
                    <p className="text-zion-slate-light">Round-the-clock technical support and maintenance</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-zion-cyan rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Scalable Solutions</h3>
                    <p className="text-zion-slate-light">Built to grow with your business needs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Get Started?</h3>
              <p className="text-zion-slate-light mb-6">
                Let's discuss your project requirements and create a custom solution that drives results.
              </p>
              <div className="space-y-4">
                <Link 
                  to="/contact"
                  className="w-full bg-zion-cyan hover:bg-zion-cyan-light text-white py-3 px-6 rounded-lg font-semibold transition-colors text-center block"
                >
                  Schedule a Consultation
                </Link>
                <Link 
                  to="/request-quote"
                  className="w-full border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white py-3 px-6 rounded-lg font-semibold transition-colors text-center block"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Transform Your Business Today</h2>
          <p className="text-lg text-zion-slate-light mb-8">
            Join hundreds of companies already leveraging our technology solutions to achieve unprecedented growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Your Project
            </Link>
            <Link 
              to="/about" 
              className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
=======
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>
>>>>>>> 93cb4347559d7aad42ba431e1ae67c54c6aa6cb9
        </div>
      </section>
    </div>
  );
=======
      {/* Stats Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-zion-slate-light">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Technology Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive solutions designed to drive innovation and transform your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-zion-slate-light mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-zion-cyan mb-4">{service.price}</div>
                    <Link
                      to={service.link}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Proven expertise across diverse industries and business sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue border border-zion-blue-light rounded-xl p-6 text-center hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{industry.name}</h3>
                <p className="text-zion-slate-light">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the benefits of professional technology services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-zion-slate-light">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Let's discuss how our technology services can drive innovation and growth for your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-zion-blue-dark font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white hover:text-zion-blue-dark transition-all duration-300"
              >
                Get Free Quote
              </Link>
=======
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-zion-purple via-zion-blue-light to-zion-cyan relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-zion-purple/20 via-zion-blue-light/20 to-zion-cyan/20"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how our technology services can help you achieve your goals and stay ahead of the competition. 
              Our team of experts is ready to guide you through the digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-white text-zion-purple font-semibold py-4 px-8 rounded-lg hover:bg-zion-slate-light transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+13024640950"
                className="bg-transparent text-white font-semibold py-4 px-8 rounded-lg border-2 border-white hover:bg-white hover:text-zion-purple transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>Call Now</span>
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9077
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-89a0
=======
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:border-zion-cyan/50 transition-all duration-300">
                <div className="w-16 h-16 bg-zion-cyan rounded-lg flex items-center justify-center mb-4 text-white">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
                <p className="text-zion-slate-light mb-4">{category.description}</p>
                <ul className="space-y-2 mb-6">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-start gap-2 text-zion-slate-light text-sm">
                      <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                      {service}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={category.link}
                  className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emerging Technologies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Emerging Technologies</h2>
          <p className="text-lg text-zion-slate-light text-center max-w-3xl mx-auto mb-12">
            Stay ahead of the curve with our cutting-edge technology solutions that are shaping the future.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergingTechServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 text-center">
                <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-zion-slate-light text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Zion Tech Group?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Expert Team</h3>
              <p className="text-zion-slate-light">
                Our team of experienced professionals brings 15+ years of expertise 
                in cutting-edge technologies and industry best practices.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Proven Results</h3>
              <p className="text-zion-slate-light">
                We've successfully delivered 500+ projects across various industries, 
                consistently exceeding client expectations and driving measurable results.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Security First</h3>
              <p className="text-zion-slate-light">
                Enterprise-grade security and compliance standards ensure your data 
                and systems remain protected at all times.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation Driven</h3>
              <p className="text-zion-slate-light">
                We stay at the forefront of technology trends, continuously innovating 
                to deliver cutting-edge solutions that give you a competitive advantage.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Global Reach</h3>
              <p className="text-zion-slate-light">
                Serving clients worldwide with 24/7 support and localized expertise 
                to ensure your success regardless of your location.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Fast Delivery</h3>
              <p className="text-zion-slate-light">
                Agile development methodologies and efficient processes ensure 
                rapid delivery without compromising quality or security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Service Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Discovery</h3>
              <p className="text-zion-slate-light">
                We analyze your requirements, understand your business goals, 
                and design a tailored solution strategy.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Planning</h3>
              <p className="text-zion-slate-light">
                Detailed project planning, architecture design, and timeline 
                development to ensure successful execution.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Development</h3>
              <p className="text-zion-slate-light">
                Agile development with regular updates, testing, and quality 
                assurance to deliver exceptional results.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Launch & Support</h3>
              <p className="text-zion-slate-light">
                Smooth deployment, comprehensive training, and ongoing support 
                to ensure long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-zion-slate-light mb-8">
            Let's discuss your project requirements and explore how our innovative 
            solutions can drive your success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Your Project
            </Link>
            <Link 
              to="/request-quote" 
              className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
>>>>>>> origin/cursor/website-audit-and-enhancement-f30b
=======
}
>>>>>>> origin/cursor/build-and-fix-errors-e276
=======
}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9077
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
              {/* Results Count */}
              <div className="flex items-end">
                <span className="text-zion-slate-light">
                  {filteredServices.length} services found
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20"
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-zion-purple/20 rounded-lg text-zion-cyan">
                    {getCategoryIcon(service.category)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white group-hover:text-zion-cyan transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zion-slate-light text-sm">{service.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-zion-cyan">
                    {getPricingDisplay(service)}
                  </div>
                  <div className="text-xs text-zion-slate-light capitalize">
                    {service.pricingModel.replace('-', ' ')}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-zion-slate-light mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* Key Features */}
              <div className="mb-4">
                <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4 text-zion-cyan" />
                  Key Features
                </h4>
                <div className="space-y-1">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                      <CheckCircle className="w-3 h-3 text-zion-cyan flex-shrink-0" />
                      <span className="line-clamp-1">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Details */}
              <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                <div className="flex items-center gap-2 text-zion-slate-light">
                  <Clock className="w-4 h-4 text-zion-cyan" />
                  <span>{service.estimatedDelivery}</span>
                </div>
                <div className="flex items-center gap-2 text-zion-slate-light">
                  <Shield className="w-4 h-4 text-zion-cyan" />
                  <span className="capitalize">{service.supportLevel}</span>
                </div>
              </div>

              {/* Market Price */}
              <div className="mb-4 p-3 bg-zion-blue-dark/30 rounded-lg">
                <div className="text-xs text-zion-slate-light mb-1">Market Price Range</div>
                <div className="text-zion-cyan font-medium">{service.marketPrice}</div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {service.tags.slice(0, 3).map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-xs text-zion-cyan"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Contact Info */}
              <div className="border-t border-zion-purple/20 pt-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-zion-slate-light">
                    <div>📧 {service.contactInfo.email}</div>
                    <div>📱 {service.contactInfo.phone}</div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2"
                  >
                    Get Quote
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-md">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let's discuss how our cutting-edge solutions can drive innovation and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                View Case Studies
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
=======
}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
=======
};

export default Services;
>>>>>>> 93cb4347559d7aad42ba431e1ae67c54c6aa6cb9

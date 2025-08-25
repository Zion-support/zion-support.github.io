<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-89a0
import React, { useState } from 'react';
=======
import { useState, useMemo } from 'react';
>>>>>>> origin/cursor/check-and-fix-github-actions-e92c
=======
import { useState } from 'react';
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
import { motion } from 'framer-motion';
<<<<<<< HEAD
<<<<<<< HEAD
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';
import { INNOVATIVE_MICRO_SAAS_SERVICES } from '../data/innovativeMicroSaasServices';
import { ADVANCED_ENTERPRISE_SOLUTIONS } from '../data/advancedEnterpriseSolutions';
import { SPECIALIZED_IT_SERVICES } from '../data/specializedITServices';
=======
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES, SERVICE_SUBCATEGORIES } from '../data/comprehensiveServices';
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
=======
import React, { useState, useEffect } from 'react';
import { SEO } from "@/components/SEO";
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6b26
=======
import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
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
<<<<<<< HEAD
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Users, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Database,
  Lock,
  Globe,
  Cpu,
  Rocket,
  Sparkles,
  ArrowRight,
  CheckCircle,
<<<<<<< HEAD
  TrendingUp,
  Target,
  Award,
  Phone,
  Mail,
  MapPin
=======
  Clock,
  TrendingUp,
<<<<<<< HEAD
  FileText,
  MessageCircle,
  Truck
>>>>>>> origin/cursor/expand-services-and-deploy-updates-50ba
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

<<<<<<< HEAD
const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('name');

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const allServices = [
    ...COMPREHENSIVE_SERVICES,
    ...INNOVATIVE_MICRO_SAAS_SERVICES,
    ...ADVANCED_ENTERPRISE_SOLUTIONS,
    ...SPECIALIZED_IT_SERVICES
=======
  const serviceCategories = [
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      description: 'Intelligent solutions powered by artificial intelligence',
      services: [
        {
          name: 'AI Financial Advisor Platform',
          path: '/comprehensive-services-showcase',
          description: 'Intelligent financial advisory with AI-powered investment recommendations',
          icon: Brain,
          features: ['AI investment advice', 'Portfolio optimization', 'Real-time market analysis'],
          pricing: 'Starting from $299/month'
        },
        {
          name: 'AI Healthcare Diagnostics',
          path: '/comprehensive-services-showcase',
          description: 'Advanced medical diagnostic platform using AI',
          icon: Brain,
          features: ['Medical image analysis', 'Symptom assessment', 'Treatment recommendations'],
          pricing: 'Starting from $899/month'
        },
        {
          name: 'AI Legal Research Assistant',
          path: '/comprehensive-services-showcase',
          description: 'AI-powered legal research and case analysis',
          icon: Brain,
          features: ['Case law analysis', 'Legal document review', 'Precedent identification'],
          pricing: 'Starting from $199/month'
        },
        {
<<<<<<< HEAD
          name: 'AI Manufacturing Optimization',
          path: '/comprehensive-services-showcase',
          description: 'Intelligent manufacturing process optimization',
          icon: Brain,
          features: ['Production optimization', 'Predictive maintenance', 'Quality control'],
          pricing: 'Starting from $599/month'
=======
          name: 'AI Marketing Automation',
          path: '/services/ai-marketing-automation',
          description: 'Smart marketing optimization and automation',
          icon: Target,
          features: ['Customer segmentation', 'Campaign optimization', 'ROI tracking'],
          pricing: 'Starting from $2,500/month'
        },
        {
          name: 'AI Legal Document Automation',
          path: '/services/ai-legal-document-automation',
          description: 'AI-powered legal document generation and compliance',
          icon: FileText,
          features: ['Smart document generation', 'Compliance monitoring', 'Legal research automation'],
          pricing: 'Starting from $299/month'
        },
        {
          name: 'AI Healthcare Analytics',
          path: '/services/ai-healthcare-analytics',
          description: 'AI-powered healthcare diagnostics and patient monitoring',
          icon: Heart,
          features: ['Predictive diagnostics', 'Real-time monitoring', 'Population health analytics'],
          pricing: 'Starting from $799/month'
        },
        {
          name: 'AI Financial Trading',
          path: '/services/ai-financial-trading',
          description: 'AI-powered trading algorithms and portfolio optimization',
          icon: TrendingUp,
          features: ['AI trading algorithms', 'Risk management', 'High-frequency trading'],
          pricing: 'Starting from $99/month'
        },
        {
          name: 'AI Supply Chain Optimization',
          path: '/services/ai-supply-chain-optimization',
          description: 'AI-powered supply chain management and optimization',
          icon: Truck,
          features: ['Demand forecasting', 'Route optimization', 'Inventory management'],
          pricing: 'Starting from $499/month'
        },
        {
          name: 'AI Customer Service Automation',
          path: '/services/ai-customer-service-automation',
          description: 'AI-powered customer support and service automation',
          icon: MessageCircle,
          features: ['AI chatbots', 'Multi-channel support', 'Smart routing'],
          pricing: 'Starting from $199/month'
>>>>>>> origin/cursor/expand-services-and-deploy-updates-50ba
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
<<<<<<< HEAD
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Database, 
  Cloud, 
  Brain, 
  Shield, 
  Zap,
  Globe,
  Smartphone,
  Cpu,
  Network,
  Lock,
  BarChart3,
<<<<<<< HEAD
  Users,
  Rocket,
  Target,
  TrendingUp
} from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed to meet your specific business needs and challenges.',
      services: [
        'Web Applications',
        'Mobile Apps',
        'Desktop Software',
        'API Development',
        'System Integration',
        'Legacy System Modernization'
      ],
      link: '/services/custom-software'
    },
    {
      icon: Database,
      title: 'Data Analytics & AI',
      description: 'Transform your data into actionable insights with advanced analytics and machine learning.',
      services: [
        'Business Intelligence',
        'Predictive Analytics',
        'Machine Learning Models',
        'Data Visualization',
        'Big Data Processing',
        'AI-Powered Insights'
      ],
      link: '/services/data-analytics-ai'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Scalable infrastructure and streamlined development processes for modern applications.',
      services: [
        'Cloud Migration',
        'Infrastructure as Code',
        'CI/CD Pipelines',
        'Container Orchestration',
        'Serverless Architecture',
        'Cloud Security'
      ],
      link: '/services/cloud-devops'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Cutting-edge AI solutions that automate processes and enhance decision-making.',
      services: [
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Modeling',
        'AI Automation',
        'Neural Networks',
        'AI Ethics & Governance'
      ],
      link: '/services/ai-machine-learning'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      services: [
        'Security Audits',
        'Penetration Testing',
        'Incident Response',
        'Compliance Management',
        'Security Training',
        'Threat Intelligence'
      ],
      link: '/services/cybersecurity'
    },
    {
      icon: Globe,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your business operations.',
      services: [
        'Process Automation',
        'Digital Strategy',
        'Change Management',
        'Technology Assessment',
        'Digital Maturity Analysis',
        'Implementation Support'
      ],
      link: '/services/digital-transformation'
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3
    }
  ];

  const featuredServices = [
    {
      icon: Zap,
      title: 'AI-Powered Business Intelligence',
      description: 'Advanced analytics platform that provides real-time insights and predictive capabilities.',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reporting', 'Data integration'],
      cta: 'Learn More',
      link: '/services/ai-business-intelligence'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['iOS & Android', 'Cross-platform', 'UI/UX Design', 'App Store optimization'],
      cta: 'Get Started',
      link: '/services/mobile-development'
    },
    {
      icon: Cpu,
      title: 'Enterprise Solutions',
      description: 'Scalable enterprise-grade solutions that grow with your business needs.',
      features: ['High availability', 'Scalable architecture', 'Enterprise security', '24/7 support'],
      cta: 'Contact Sales',
      link: '/services/enterprise-solutions'
=======
  ArrowRight,
  CheckCircle,
  Search,
  Filter,
  Star,
  Award,
  Clock,
  TrendingUp
} from 'lucide-react';

export default function Services() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI & Machine Learning",
      description: "Custom AI solutions including predictive analytics, natural language processing, and computer vision.",
      features: ["Machine Learning Models", "Predictive Analytics", "NLP Solutions", "Computer Vision", "AI Consulting"],
      category: "AI/ML",
      price: "From $5,000",
      duration: "4-12 weeks",
      rating: 4.9,
      popular: true,
      tags: ["AI", "Machine Learning", "Analytics", "Automation"]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions including threat detection, compliance, and risk management.",
      features: ["Threat Detection", "Compliance & Audit", "Risk Assessment", "Security Monitoring", "Incident Response"],
      category: "Security",
      price: "From $3,500",
      duration: "2-8 weeks",
      rating: 4.8,
      popular: false,
      tags: ["Security", "Compliance", "Risk Management", "Monitoring"]
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Cloud & Infrastructure",
      description: "Cloud migration, infrastructure management, and scalable solutions for modern businesses.",
      features: ["Cloud Migration", "Infrastructure Management", "Scalable Solutions", "DevOps", "Monitoring"],
      category: "Cloud",
      price: "From $4,200",
      duration: "6-16 weeks",
      rating: 4.7,
      popular: false,
      tags: ["Cloud", "Infrastructure", "DevOps", "Scalability"]
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Digital Transformation",
      description: "End-to-end digital transformation services to modernize your business operations.",
      features: ["Process Automation", "Digital Workflows", "Legacy Modernization", "Change Management", "Training"],
      category: "Transformation",
      price: "From $8,000",
      duration: "8-24 weeks",
      rating: 4.9,
      popular: true,
      tags: ["Transformation", "Automation", "Modernization", "Process"]
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "IT Consulting",
      description: "Strategic IT consulting to align technology with your business objectives.",
      features: ["Technology Strategy", "Architecture Design", "Implementation Planning", "Performance Optimization", "ROI Analysis"],
      category: "Consulting",
      price: "From $2,500",
      duration: "1-4 weeks",
      rating: 4.8,
      popular: false,
      tags: ["Consulting", "Strategy", "Architecture", "Planning"]
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Global Solutions",
      description: "Worldwide technology solutions with local expertise and 24/7 support.",
      features: ["Global Deployment", "Local Expertise", "24/7 Support", "Multi-language Support", "Compliance"],
      category: "Global",
      price: "From $6,000",
      duration: "12-32 weeks",
      rating: 4.9,
      popular: false,
      tags: ["Global", "Deployment", "Support", "Compliance"]
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6b26
    }
  ];

  const industries = [
<<<<<<< HEAD
    'Healthcare',
    'Finance',
    'Manufacturing',
    'Retail',
    'Education',
    'Government',
    'Non-profit',
    'Technology'
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning': return Brain;
      case 'Cybersecurity': return Shield;
      case 'Cloud & Infrastructure': return Cloud;
      case 'Data & Analytics': return Database;
      case 'Digital Transformation': return Sparkles;
      case 'Web & Mobile Development': return Globe;
      case 'IT Support & Consulting': return Users;
      case 'Blockchain & Web3': return Lock;
      case 'Internet of Things': return Cpu;
      case 'Voice AI': return Brain;
      case 'Quantum Security': return Shield;
      case 'Content Creation': return Sparkles;
      default: return Rocket;
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  Globe, 
  Database, 
  Smartphone,
  BarChart3,
  Lock,
  Cpu,
  Network
} from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-12 h-12" />,
      description: "Cutting-edge artificial intelligence solutions that transform your business operations",
      services: [
        "Custom AI Models",
        "Machine Learning Pipelines",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "AI Chatbots & Assistants"
      ],
      link: "/ai-services",
      color: "from-zion-cyan to-zion-blue"
    },
    {
      title: "Micro SAAS Solutions",
      icon: <Zap className="w-12 h-12" />,
      description: "Scalable software-as-a-service applications built for modern businesses",
      services: [
        "Custom Web Applications",
        "Mobile App Development",
        "API Development",
        "Database Design",
        "Cloud Integration",
        "Performance Optimization"
      ],
      link: "/micro-saas-services",
      color: "from-zion-purple to-zion-purple-light"
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-12 h-12" />,
      description: "Enterprise-grade cloud infrastructure and development operations",
      services: [
        "AWS/Azure/GCP Setup",
        "Container Orchestration",
        "CI/CD Pipelines",
        "Infrastructure as Code",
        "Monitoring & Logging",
        "Auto-scaling Solutions"
      ],
      link: "/cloud-devops-solutions",
      color: "from-zion-blue to-zion-cyan"
    },
    {
      title: "Cybersecurity",
      icon: <Shield className="w-12 h-12" />,
      description: "Comprehensive security solutions to protect your digital assets",
      services: [
        "Security Audits",
        "Penetration Testing",
        "Compliance Management",
        "Threat Detection",
        "Incident Response",
        "Security Training"
      ],
      link: "/advanced-cybersecurity-suite",
      color: "from-zion-purple-light to-zion-cyan"
    },
    {
      title: "Digital Transformation",
      icon: <Globe className="w-12 h-12" />,
      description: "End-to-end digital transformation strategies for modern enterprises",
      services: [
        "Process Automation",
        "Legacy System Modernization",
        "Data Migration",
        "Change Management",
        "Digital Strategy Consulting",
        "Technology Roadmapping"
      ],
      link: "/digital-transformation",
      color: "from-zion-cyan to-zion-purple"
    },
    {
      title: "Enterprise Solutions",
      icon: <Users className="w-12 h-12" />,
      description: "Large-scale enterprise software and infrastructure solutions",
      services: [
        "ERP Systems",
        "CRM Platforms",
        "Business Intelligence",
        "Data Warehousing",
        "Enterprise Integration",
        "Custom Enterprise Apps"
      ],
      link: "/enterprise-solutions",
      color: "from-zion-blue to-zion-purple-light"
>>>>>>> origin/cursor/website-audit-and-enhancement-e1a1
    }
  ];

<<<<<<< HEAD
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning': return 'from-purple-500 to-pink-500';
      case 'Cybersecurity': return 'from-red-500 to-pink-500';
      case 'Cloud & Infrastructure': return 'from-blue-500 to-indigo-500';
      case 'Data & Analytics': return 'from-green-500 to-emerald-500';
      case 'Digital Transformation': return 'from-orange-500 to-yellow-500';
      case 'Web & Mobile Development': return 'from-cyan-500 to-blue-500';
      case 'IT Support & Consulting': return 'from-gray-500 to-slate-500';
      case 'Blockchain & Web3': return 'from-purple-500 to-violet-500';
      case 'Internet of Things': return 'from-teal-500 to-cyan-500';
      case 'Voice AI': return 'from-pink-500 to-rose-500';
      case 'Quantum Security': return 'from-indigo-500 to-purple-500';
      case 'Content Creation': return 'from-yellow-500 to-orange-500';
      default: return 'from-gray-500 to-slate-500';
=======
  const emergingTech = [
    {
      title: "Quantum Computing",
      icon: <Cpu className="w-8 h-8" />,
      description: "Next-generation quantum computing solutions for complex problem-solving"
    },
    {
      title: "Blockchain & Web3",
      icon: <Network className="w-8 h-8" />,
      description: "Decentralized applications and blockchain infrastructure development"
    },
    {
      title: "IoT Solutions",
      icon: <Smartphone className="w-8 h-8" />,
      description: "Internet of Things platforms and connected device management"
    },
    {
      title: "Edge Computing",
      icon: <BarChart3 className="w-8 h-8" />,
      description: "Distributed computing solutions for real-time data processing"
>>>>>>> origin/cursor/website-audit-and-enhancement-e1a1
    }
  ];

  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="min-h-screen futuristic-bg">
      {/* Animated Background */}
      <div className="absolute inset-0 quantum-mesh opacity-20"></div>
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-cyan-500 text-xs animate-matrix-rain opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
=======
  const services = [
    {
      id: 1,
      name: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions for business automation and intelligence",
      category: "ai",
      icon: Brain,
      link: "/ai-services",
      features: ["Custom AI Development", "Machine Learning Models", "Natural Language Processing", "Computer Vision"]
    },
    {
      id: 2,
      name: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and automated deployment solutions",
      category: "cloud",
      icon: Cloud,
      link: "/cloud-devops-solutions",
      features: ["Cloud Migration", "DevOps Automation", "Kubernetes Management", "Infrastructure as Code"]
    },
    {
      id: 3,
      name: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets",
      category: "security",
      icon: Shield,
      link: "/advanced-services",
      features: ["Security Audits", "Threat Protection", "Compliance Management", "24/7 Monitoring"]
    },
    {
      id: 4,
      name: "Digital Transformation",
      description: "End-to-end business transformation and modernization services",
      category: "transformation",
      icon: Zap,
      link: "/digital-transformation",
      features: ["Process Automation", "Legacy Modernization", "Change Management", "Strategic Consulting"]
    },
    {
      id: 5,
      name: "Micro SAAS Services",
      description: "Specialized software solutions for specific business needs",
      category: "saas",
      icon: Zap,
      link: "/micro-saas-services",
      features: ["Custom Applications", "API Development", "Database Solutions", "Web Applications"]
    },
    {
      id: 6,
      name: "Enterprise Solutions",
      description: "Comprehensive business solutions for large organizations",
      category: "enterprise",
      icon: Shield,
      link: "/enterprise-solutions",
      features: ["ERP Integration", "Business Intelligence", "Workflow Automation", "Enterprise Architecture"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'ai', name: 'AI & ML' },
    { id: 'cloud', name: 'Cloud & DevOps' },
    { id: 'security', name: 'Cybersecurity' },
    { id: 'transformation', name: 'Digital Transformation' },
    { id: 'saas', name: 'Micro SAAS' },
    { id: 'enterprise', name: 'Enterprise' }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
>>>>>>> origin/cursor/website-audit-and-enhancement-24bd
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
<<<<<<< HEAD
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text neon-cyan">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of cutting-edge AI, cybersecurity, and technology solutions 
            designed to transform your business and drive innovation.
=======
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive AI, IT, and technology solutions to transform your business
>>>>>>> origin/cursor/website-audit-and-enhancement-24bd
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Search and Filters</h2>
          
          {/* New Services 2025 Banner */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-gradient-to-r from-zion-cyan/20 to-blue-500/20 border border-zion-cyan/30 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-3">🚀 New for 2025!</h3>
                <p className="text-zion-slate-light mb-4">
                  Explore our latest innovative services including AI-powered solutions, quantum computing, specialized micro-SaaS platforms, and emerging technologies.
                </p>
                <a
                  href="/innovative-services-2025"
                  className="inline-flex items-center space-x-2 bg-zion-cyan hover:bg-zion-cyan/80 text-black font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  <span>View All New Services 2025</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
=======
=======
import React, { useState, useMemo } from 'react';
=======
>>>>>>> origin/cursor/build-project-and-deploy-with-netlify-1c1d
import { motion } from 'framer-motion';
import { Search, CheckCircle, ArrowRight, Phone } from 'lucide-react';

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
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
    }
  };

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zion-blue-dark/50 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover our comprehensive range of cutting-edge technology solutions designed to transform your business
            </p>
          </motion.div>

          {/* Enhanced Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-8"
          >
            <div className="relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for services, technologies, or solutions..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-zion-cyan/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
                {query && (
                  <button
                    onClick={() => setQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Search Suggestions */}
              {suggestions.length > 0 && query && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => setQuery(suggestion)}
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      <div className="flex items-center gap-3">
                        <Search className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-700 dark:text-gray-300">{suggestion}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
>>>>>>> origin/cursor/check-and-fix-github-actions-e92c
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
<<<<<<< HEAD
                className="w-full pl-12 pr-4 py-3 futuristic-input"
              />
=======
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-cyan text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Comprehensive technology solutions designed to transform your business 
              and drive sustainable growth in the digital age.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
              >
                Get Started
              </Link>
              <Link 
                to="/request-quote" 
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue-dark transition-colors"
              >
                Request Quote
              </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3
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
<<<<<<< HEAD
  Cpu,
  BarChart3,
  Users,
  Lock,
  Rocket,
  Building2
} from 'lucide-react';

<<<<<<< HEAD
const Services = () => {
  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-8 h-8" />,
      description: "Cutting-edge artificial intelligence and machine learning solutions",
      services: [
        "AI-Powered Business Intelligence",
        "Machine Learning Model Development",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics",
        "AI Chatbots & Virtual Assistants"
      ],
      link: "/ai-services"
    },
    {
      title: "Micro SAAS Development",
      icon: <Zap className="w-8 h-8" />,
      description: "Scalable software-as-a-service solutions for modern businesses",
      services: [
        "Custom SAAS Platform Development",
        "API Development & Integration",
        "User Management Systems",
        "Subscription & Billing Systems",
        "Multi-tenant Architecture",
        "SAAS Analytics & Reporting"
      ],
      link: "/micro-saas-services"
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-8 h-8" />,
      description: "Scalable cloud infrastructure and DevOps automation",
      services: [
        "Cloud Migration & Strategy",
        "AWS/Azure/GCP Solutions",
        "Container Orchestration (Kubernetes)",
        "CI/CD Pipeline Automation",
        "Infrastructure as Code",
        "Cloud Security & Compliance"
      ],
      link: "/cloud-devops-solutions"
    },
    {
      title: "Digital Transformation",
      icon: <Rocket className="w-8 h-8" />,
      description: "End-to-end digital transformation consulting and implementation",
      services: [
        "Digital Strategy Consulting",
        "Process Automation",
        "Legacy System Modernization",
        "Change Management",
        "Digital Workplace Solutions",
        "Customer Experience Optimization"
      ],
      link: "/digital-transformation"
    },
    {
      title: "Enterprise Solutions",
      icon: <Building2 className="w-8 h-8" />,
      description: "Enterprise-grade technology solutions for large organizations",
      services: [
        "Enterprise Software Development",
        "System Integration",
        "Data Management & Analytics",
        "Business Process Automation",
        "Enterprise Security Solutions",
        "Scalable Architecture Design"
      ],
      link: "/enterprise-solutions"
    },
    {
      title: "Cybersecurity",
      icon: <Shield className="w-8 h-8" />,
      description: "Comprehensive security solutions to protect your business",
      services: [
        "Security Audits & Assessments",
        "Penetration Testing",
        "Security Architecture Design",
        "Compliance Management (SOC2, ISO)",
        "Incident Response Planning",
        "Security Training & Awareness"
      ],
      link: "/cybersecurity"
    }
  ];

  const emergingTechServices = [
    {
      title: "Quantum Computing",
      description: "Exploring the future of computing with quantum algorithms and solutions",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "Blockchain & Web3",
      description: "Decentralized solutions and blockchain technology implementation",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "IoT Solutions",
      description: "Internet of Things infrastructure and smart device integration",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: "Edge Computing",
      description: "Distributed computing solutions for real-time data processing",
      icon: <Database className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Comprehensive technology solutions designed to transform your business, 
            from AI-powered insights to scalable cloud infrastructure.
          </p>
>>>>>>> origin/cursor/website-audit-and-enhancement-f30b
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
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-enhancement-e1a1
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-f30b
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-cyan-300 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full futuristic-input"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>

            {/* Subcategory Filter */}
            <div>
              <label className="block text-sm font-medium text-cyan-300 mb-2">Subcategory</label>
              <select
                value={selectedSubcategory}
                onChange={(e) => setSelectedSubcategory(e.target.value)}
                className="w-full futuristic-input"
              >
                {subcategories.map((subcategory) => (
                  <option key={subcategory} value={subcategory}>
                    {subcategory === 'all' ? 'All Subcategories' : subcategory}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm font-medium text-cyan-300 mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full futuristic-input"
              >
                <option value="name">Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="category">Category</option>
              </select>
            </div>
=======
      {/* Service Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Explore our comprehensive range of technology services designed to meet 
              every aspect of your digital transformation journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
                <div className="flex justify-center mb-4">
                  <category.icon className="w-16 h-16 text-zion-cyan" />
                </div>
                <h3 className="text-2xl font-bold text-zion-blue-dark mb-3 text-center">
                  {category.title}
                </h3>
                <p className="text-zion-slate mb-6 text-center leading-relaxed">
=======
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-f30b
      {/* Service Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Core Service Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
<<<<<<< HEAD
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 group">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                <p className="text-zion-slate-light mb-4 text-sm leading-relaxed">
>>>>>>> origin/cursor/website-audit-and-enhancement-e1a1
                  {category.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {category.services.map((service, serviceIndex) => (
<<<<<<< HEAD
                    <li key={serviceIndex} className="flex items-center text-zion-slate">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                      {service}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <Link 
                    to={category.link}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light font-semibold transition-colors"
                  >
                    Learn More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
=======
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light text-white">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-zion-cyan/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-zion-purple/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '6s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div
            className="text-center"
=======
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
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
<<<<<<< HEAD
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent animate-neon-pulse"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Our Services
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover our comprehensive range of AI, IT, and Micro SaaS solutions designed to transform your business
            </motion.p>
          </motion.div>
        </section>

        {/* Search and Filter Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Search */}
              <div>
                <label htmlFor="search" className="block text-sm font-medium text-zion-slate-light mb-2">
                  Search Services
                </label>
                <input
                  type="text"
                  id="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by name, description, or tags..."
                  className="w-full px-4 py-3 bg-zion-blue-light/20 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                />
              </div>

              {/* Category Filter */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-zion-slate-light mb-2">
                  Filter by Category
                </label>
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-zion-blue-light/20 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                >
                  {categories.map((category) => (
                    <option key={category} value={category} className="bg-zion-blue-dark text-white">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
              </div>
            ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3
          </div>
        </div>
      </section>

<<<<<<< HEAD
          {/* Results Count */}
          <div className="text-center">
            <p className="text-gray-300">
              Showing <span className="text-cyan-400 font-semibold">{sortedServices.length}</span> of{' '}
              <span className="text-cyan-400 font-semibold">{allServices.length}</span> services
            </p>
=======
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 backdrop-blur-sm"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            </div>
          </div>
<<<<<<< HEAD

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
<<<<<<< HEAD
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
=======
                key={category}
                onClick={() => handleCategorySelect(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/30'
                    : 'bg-white/10 text-zion-slate-light hover:bg-white/20 border border-zion-cyan/30'
>>>>>>> origin/cursor/check-and-fix-github-actions-e92c
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

<<<<<<< HEAD
        {/* Services Grid */}
<<<<<<< HEAD
        <motion.div
<<<<<<< HEAD
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {sortedServices.map((service, index) => {
            const IconComponent = getCategoryIcon(service.category);
            const categoryColor = getCategoryColor(service.category);
            
            return (
=======
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
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="block text-sm font-medium text-zion-slate-light mb-2">Price Range</label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan transition-all duration-300"
                >
                  {priceRanges.map(range => (
                    <option key={range} value={range}>{getPriceRangeLabel(range)}</option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium text-zion-slate-light mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan transition-all duration-300"
                >
                  <option value="name">Name</option>
                  <option value="price">Price</option>
                  <option value="popularity">Popularity</option>
                  <option value="new">Newest</option>
                </select>
              </div>

              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-zion-slate-light mb-2">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h2>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Choose from our comprehensive range of technology services designed to drive innovation and growth. 
              Each service is carefully crafted to deliver real business value and competitive advantage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
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

<<<<<<< HEAD
                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-300 mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
=======
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 transform hover:-translate-y-2"
              >
                {/* Service Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs font-medium rounded-full border border-zion-cyan/30">
                      {service.category}
                    </span>
                    {service.badge && (
                      <span className={`px-3 py-1 text-xs font-medium rounded-full border ${
                        service.badge === 'Popular' ? 'bg-zion-purple/20 text-zion-purple border-zion-purple/30' :
                        service.badge === 'New' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                        service.badge === 'Featured' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                        service.badge === 'Premium' ? 'bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30' :
                        'bg-zion-purple/20 text-zion-purple border-zion-purple/30'
                      }`}>
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-zion-cyan transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-zion-cyan">
                      {service.price.currency}{service.price.monthly.toLocaleString()}
                    </span>
                    <span className="text-zion-slate-light text-sm">/month</span>
                  </div>
                  {service.price.yearly && (
                    <div className="text-zion-slate-light text-sm">
                      {service.price.currency}{service.price.yearly.toLocaleString()}/year (Save {Math.round((1 - service.price.yearly / (service.price.monthly * 12)) * 100)}%)
                    </div>
                  )}
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-zion-purple mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-xs text-zion-slate-light flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

<<<<<<< HEAD
                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-300 mb-2">Benefits</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <TrendingUp className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Market Price Comparison */}
                <div className="mb-4 p-3 bg-gray-800/30 rounded-lg border border-gray-700/50">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Market Price:</span>
                    <span className="text-gray-300 line-through">${service.marketPrice}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Our Price:</span>
                    <span className="text-cyan-400 font-semibold">${service.price}</span>
                  </div>
                  <div className="text-xs text-green-400 text-center mt-1">
                    Save ${Number(service.marketPrice) - service.price}/month
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Link
                    to="/contact"
                    className="flex-1 futuristic-btn neon-glow neon-cyan text-center"
                  >
                    Get Quote
                  </Link>
                  <Link
                    to={`/services/${service.id}`}
                    className="flex-1 futuristic-btn neon-glow neon-purple text-center"
                  >
                    Learn More
                  </Link>
                </div>

                {/* Service Tags */}
                {service.tags && service.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30"
=======
                {/* Tags */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {service.tags.slice(0, 4).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-zion-blue-light/20 text-zion-slate-light text-xs rounded border border-zion-blue-light/30"
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
                      >
                        {tag}
                      </span>
                    ))}
<<<<<<< HEAD
                  </div>
                )}
=======
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:border-blue-400/50 hover:bg-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/20"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition-colors group-hover:translate-x-1 transition-transform duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-24bd
              </motion.div>
            );
          })}
        </motion.div>

<<<<<<< HEAD
<<<<<<< HEAD
=======
        {/* Enhanced Services Section */}
        <div className="mt-16 mb-16">
          <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-2xl p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full px-6 py-3 mb-4">
                <Sparkles className="h-5 w-5 text-purple-400" />
                <span className="text-purple-400 font-medium">New & Enhanced</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Discover Our Enhanced Innovative Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our cutting-edge suite of AI-powered services, quantum solutions, and innovative micro SAAS platforms designed to transform your business operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">AI Legal Contract Analyzer</h3>
                <p className="text-gray-400 text-sm mb-4">Advanced AI platform for legal contract analysis and risk assessment.</p>
                <div className="text-2xl font-bold text-purple-400 mb-4">$1,299/month</div>
                <Link
                  to="/enhanced-innovative-services"
                  className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-600 text-white font-medium rounded-lg hover:from-purple-600 hover:to-cyan-700 transition-all duration-200"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Autonomous Financial Advisor</h3>
                <p className="text-gray-400 text-sm mb-4">AI-driven financial advisory and portfolio optimization platform.</p>
                <div className="text-2xl font-bold text-purple-400 mb-4">$2,499/month</div>
                <Link
                  to="/enhanced-innovative-services"
                  className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-600 text-white font-medium rounded-lg hover:from-purple-600 hover:to-cyan-700 transition-all duration-200"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">AI Healthcare Diagnostics</h3>
                <p className="text-gray-400 text-sm mb-4">AI-powered medical image analysis and diagnostic assistance.</p>
                <div className="text-2xl font-bold text-purple-400 mb-4">$3,999/month</div>
                <Link
                  to="/enhanced-innovative-services"
                  className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-600 text-white font-medium rounded-lg hover:from-purple-600 hover:to-cyan-700 transition-all duration-200"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            
            <div className="text-center">
              <Link
                to="/enhanced-innovative-services"
                className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-600 text-white font-medium rounded-lg hover:from-purple-600 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105"
              >
                <span>View All Enhanced Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0f9b
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
<<<<<<< HEAD
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-md">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let's discuss how our technology solutions can accelerate your growth and 
              give you a competitive edge in the market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
<<<<<<< HEAD
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center group hover:scale-105"
              >
                Get Free Consultation
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
=======
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/comprehensive-services-showcase"
                className="px-8 py-3 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
=======
    { name: "Healthcare", icon: "🏥", description: "HIPAA compliant solutions for healthcare providers" },
    { name: "Finance", icon: "🏦", description: "Secure financial technology solutions" },
    { name: "Retail", icon: "🛍️", description: "E-commerce and retail technology platforms" },
    { name: "Manufacturing", icon: "🏭", description: "Industry 4.0 and smart manufacturing" },
    { name: "Education", icon: "🎓", description: "EdTech solutions for modern learning" },
    { name: "Government", icon: "🏛️", description: "Secure government technology solutions" }
  ];

  const categories = ['all', 'AI/ML', 'Security', 'Cloud', 'Transformation', 'Consulting', 'Global'];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    const colors = {
      'AI/ML': 'from-purple-500 to-pink-500',
      'Security': 'from-red-500 to-orange-500',
      'Cloud': 'from-blue-500 to-cyan-500',
      'Transformation': 'from-green-500 to-teal-500',
      'Consulting': 'from-indigo-500 to-purple-500',
      'Global': 'from-yellow-500 to-orange-500'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen relative">
      <SEO 
        title="Comprehensive Technology Services - Zion Tech Group"
        description="Transform your business with our comprehensive technology services including AI & Machine Learning, Cybersecurity, Cloud Infrastructure, Digital Transformation, IT Consulting, and Global Solutions. Expert consulting and implementation services."
        url="https://ziontechgroup.com/services"
        keywords="AI services, cybersecurity, cloud computing, digital transformation, IT consulting, technology services, Zion Tech Group"
        ogImage="https://ziontechgroup.com/services-og-image.jpg"
        twitterCard="summary_large_image"
      />

      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-900">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse animate-quantum-float"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animate-quantum-float animation-delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animate-quantum-float animation-delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 overflow-hidden">
        <div className="relative z-10 container mx-auto text-center">
          <div className={`animate-fade-in-up transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="neon-text">
                Our Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Comprehensive technology solutions designed to transform your business and drive innovation.
              From AI to cybersecurity, we deliver the expertise you need to succeed.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-black'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                    }`}
                  >
                    {category === 'all' ? 'All Services' : category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-16 px-4">
        <div className="relative z-10 container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What We <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Offer</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover our comprehensive range of technology services designed to meet your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div 
                key={index} 
                className={`group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                    ⭐ Popular
                  </div>
                )}
                
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Service Meta */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <span className="text-cyan-400 font-medium">{service.price}</span>
                  <span className="text-gray-500 flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.duration}
                  </span>
                </div>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm ml-2">{service.rating}</span>
                </div>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* CTA */}
                <Link 
                  to={`/services/${service.category.toLowerCase()}`}
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                >
                  Learn More 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
          
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search terms or category filter</p>
            </div>
=======
          {/* Filters and Sort Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8"
          >
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-zion-slate-light rounded-lg transition-colors"
              >
                <Filter className="w-4 h-4" />
                Filters
              </button>
              
              {Object.keys(filters).length > 0 && (
                <button
                  onClick={clearFilters}
                  className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm hover:bg-red-500/30 transition-colors"
                >
                  Clear Filters
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-zion-slate-light text-sm">Sort by:</span>
              <button
                onClick={() => handleSort('title')}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                  sortBy === 'title' ? 'bg-zion-cyan/20 text-zion-cyan' : 'bg-white/10 text-zion-slate-light hover:bg-white/20'
                }`}
              >
                Name
                {sortBy === 'title' && (
                  sortOrder === 'asc' ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />
                )}
              </button>
              <button
                onClick={() => handleSort('price')}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                  sortBy === 'price' ? 'bg-zion-cyan/20 text-zion-cyan' : 'bg-white/10 text-zion-slate-light hover:bg-white/20'
                }`}
              >
                Price
                {sortBy === 'price' && (
                  sortOrder === 'asc' ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />
                )}
              </button>
            </div>
          </motion.div>

          {/* Filters Panel */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white/10 backdrop-blur-sm border border-zion-cyan/30 rounded-xl p-6 mb-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-zion-slate-light text-sm font-medium mb-2">Pricing Model</label>
                  <select
                    value={filters.pricingModel || ''}
                    onChange={(e) => setFilter('pricingModel', e.target.value || '')}
                    className="w-full px-3 py-2 bg-white/10 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                  >
                    <option value="">All Models</option>
                    <option value="monthly">Monthly</option>
                    <option value="one-time">One-time</option>
                    <option value="custom">Custom</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-zion-slate-light text-sm font-medium mb-2">Support Level</label>
                  <select
                    value={filters.supportLevel || ''}
                    onChange={(e) => setFilter('supportLevel', e.target.value || '')}
                    className="w-full px-3 py-2 bg-white/10 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                  >
                    <option value="">All Levels</option>
                    <option value="basic">Basic</option>
                    <option value="premium">Premium</option>
                    <option value="enterprise">Enterprise</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-zion-slate-light text-sm font-medium mb-2">Price Range</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={filters.minPrice || ''}
                      onChange={(e) => setFilter('minPrice', e.target.value ? Number(e.target.value) : '')}
                      className="flex-1 px-3 py-2 bg-white/10 border border-zion-cyan/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={filters.maxPrice || ''}
                      onChange={(e) => setFilter('maxPrice', e.target.value ? Number(e.target.value) : '')}
                      className="flex-1 px-3 py-2 bg-white/10 border border-zion-cyan/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
>>>>>>> origin/cursor/check-and-fix-github-actions-e92c
          )}
        </div>
      </section>

<<<<<<< HEAD
      {/* Industries Section */}
      <section className="relative py-16 px-4">
        <div className="relative z-10 container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries We <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Serve</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We have extensive experience across multiple industries, delivering tailored solutions for your specific needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div 
                key={industry.name} 
                className="group bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl p-6 text-center border border-gray-700/30 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {industry.name}
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 px-4">
        <div className="relative z-10 container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Projects Completed", icon: "🚀" },
              { number: "50+", label: "Expert Consultants", icon: "👥" },
              { number: "98%", label: "Client Satisfaction", icon: "⭐" },
              { number: "24/7", label: "Support Available", icon: "🔄" }
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 px-4">
        <div className="relative z-10 container mx-auto text-center">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-12 border border-gray-700/50">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can transform your business. Contact our experts today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="quantum-button text-lg px-8 py-4"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6b26
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
<<<<<<< HEAD
    { label: "Services Delivered", value: "500+", icon: CheckCircle },
    { label: "Happy Clients", value: "200+", icon: Users },
    { label: "Success Rate", value: "99%", icon: Star },
    { label: "Years Experience", value: "15+", icon: Award }
  ];

  const industries = [
    { name: "Technology", icon: "💻", description: "Software companies, SaaS platforms, tech startups" },
    { name: "Finance", icon: "💰", description: "Banks, insurance companies, fintech firms" },
    { name: "Healthcare", icon: "🏥", description: "Hospitals, clinics, health tech companies" },
    { name: "Manufacturing", icon: "🏭", description: "Industrial companies, factories, production facilities" },
    { name: "Retail", icon: "🛍️", description: "E-commerce, retail chains, online marketplaces" },
    { name: "Government", icon: "🏛️", description: "Federal, state, and local government agencies" }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="Services - Zion Tech Group"
        description="Comprehensive technology services including AI, micro SAAS, cloud DevOps, enterprise solutions, digital transformation, and emerging technologies."
        keywords="technology services, AI services, micro SAAS, cloud DevOps, enterprise solutions, digital transformation, Zion Tech Group"
        canonical="https://ziontechgroup.com/services"
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-cyan opacity-95" />
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-zion-cyan opacity-60 blur-sm"
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-3/4 right-1/4 w-6 h-6 rounded-full bg-zion-blue-light opacity-40 blur-sm"
            animate={{ y: [0, 20, 0], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-zion-cyan via-zion-blue-light to-zion-blue bg-clip-text text-transparent">
                Our
              </span>
              <br />
              <span className="text-white">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              Comprehensive technology services designed to drive innovation and transform your business operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Request Quote
              </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-8e2b
            </div>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
        {/* Footer Section */}
        <div className="bg-zion-slate-dark py-12 border-t border-zion-blue-light">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
                <p className="text-zion-slate-light mb-4">
                  Pioneering the future of technology with revolutionary AI consciousness, 
                  quantum computing, and autonomous solutions that transform businesses worldwide.
                </p>
                <div className="flex items-center gap-4 text-zion-slate-light">
                  <a href="https://ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                    ziontechgroup.com
                  </a>
=======
        {/* No Results */}
        {sortedServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-gray-400 mb-6">Try adjusting your search criteria or filters</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedSubcategory('all');
              }}
              className="futuristic-btn neon-glow neon-cyan"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

<<<<<<< HEAD
        {/* Services Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text neon-cyan">
              Why Choose Zion Tech Group?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
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
<<<<<<< HEAD
          </div>
<<<<<<< HEAD
        </div>

        {/* Comprehensive Services Showcase CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Discover Our Complete Portfolio
            </h2>
            <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
              Explore our comprehensive showcase featuring 30+ cutting-edge AI solutions, emerging technologies, and specialized IT services. 
              From micro SAAS applications to quantum computing platforms, we have the tools you need to stay ahead.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6 text-sm text-gray-400">
              <div>• AI-Powered Business Solutions</div>
              <div>• Emerging Technology Platforms</div>
              <div>• Specialized IT Services</div>
            </div>
            <Link
              to="/comprehensive-services-showcase"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
            >
              Explore Comprehensive Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
=======
            
            <div className="border-t border-zion-blue-light mt-8 pt-8 text-center">
              <p className="text-zion-slate-light text-sm">
                © 2024 Zion Tech Group. All rights reserved. | 
                <a href="/contact" className="ml-2 hover:text-zion-cyan transition-colors">Privacy Policy</a> | 
                <a href="/contact" className="ml-2 hover:text-zion-cyan transition-colors">Terms of Service</a>
              </p>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-89a0
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
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </section>

        {/* Call to Action */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            className="text-center bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-3xl p-12 border border-zion-cyan/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Can't find exactly what you're looking for? Our team can create a custom solution tailored to your specific needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
            >
              <span>Contact Us</span>
              <CheckCircle className="w-5 h-5" />
            </Link>
          </motion.div>
        </section>
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
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
<<<<<<< HEAD
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              We have deep expertise across multiple industries and understand the unique 
              challenges and opportunities each sector presents.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-zion-blue-dark">
                  {industry}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions 
              that drive real business value and sustainable growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                Rapid Delivery
              </h3>
              <p className="text-zion-slate">
                Agile development methodologies ensure quick turnaround times without compromising quality.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                Expert Team
              </h3>
              <p className="text-zion-slate">
                Skilled professionals with deep expertise in the latest technologies and industry best practices.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                Quality Assurance
              </h3>
              <p className="text-zion-slate">
                Rigorous testing and quality control processes ensure reliable and robust solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                Continuous Support
              </h3>
              <p className="text-zion-slate">
                Ongoing maintenance, updates, and support to ensure your solutions evolve with your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Let's discuss your project requirements and how our services can help 
            you achieve your business objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link 
              to="/request-quote" 
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue-dark transition-colors"
            >
              Get Free Quote
            </Link>
          </div>
=======
          </motion.div>

          {/* Pagination */}
          {paginatedResults.totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={!paginatedResults.hasPrevPage}
                className="px-4 py-2 bg-white/10 text-zion-slate-light rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
              >
                Previous
              </button>
              
              <span className="px-4 py-2 text-zion-slate-light">
                Page {currentPage} of {paginatedResults.totalPages}
              </span>
              
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={!paginatedResults.hasNextPage}
                className="px-4 py-2 bg-white/10 text-zion-slate-light rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
              >
                Next
              </button>
            </div>
          )}
>>>>>>> origin/cursor/check-and-fix-github-actions-e92c
        </div>
      </section>
    </div>
  );
};
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3

export default Services;
<<<<<<< HEAD
=======
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 border border-blue-400/30 rounded-2xl p-12 backdrop-blur-md">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our services can transform your business and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border border-blue-400 text-blue-400 rounded-lg text-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Request Quote
              </Link>
            </div>
          </div>
<<<<<<< HEAD
        </motion.div>
      </div>
=======
        </div>
      </section>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6b26
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
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
};

const CheckCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default Services;
>>>>>>> origin/cursor/website-audit-and-enhancement-e1a1
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
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
>>>>>>> origin/cursor/website-audit-and-enhancement-8e2b
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

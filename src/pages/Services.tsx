<<<<<<< HEAD
import React, { useState } from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';
import { INNOVATIVE_MICRO_SAAS_SERVICES } from '../data/innovativeMicroSaasServices';
import { ADVANCED_ENTERPRISE_SOLUTIONS } from '../data/advancedEnterpriseSolutions';
import { SPECIALIZED_IT_SERVICES } from '../data/specializedITServices';
=======
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES, SERVICE_SUBCATEGORIES } from '../data/comprehensiveServices';
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
import { Link } from 'react-router-dom';
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

export function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('name');

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
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
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
    }
  ];

  const industries = [
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
    }
  };

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
    }
  };

  return (
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
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text neon-cyan">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of cutting-edge AI, cybersecurity, and technology solutions 
            designed to transform your business and drive innovation.
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
          </div>
        </div>
      </section>

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
                  {category.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {category.services.map((service, serviceIndex) => (
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
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {sortedServices.map((service, index) => {
            const IconComponent = getCategoryIcon(service.category);
            const categoryColor = getCategoryColor(service.category);
            
            return (
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
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

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
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

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
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
            </div>
          </div>
        </motion.div>

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
          </div>
        </div>
=======
        </motion.div>
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
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
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-zion-blue-dark to-zion-blue text-white rounded-xl p-8 hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-6">
                  <service.icon className="w-16 h-16 text-zion-cyan" />
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
        </div>
      </section>
    </div>
  );
};
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3

export default Services;

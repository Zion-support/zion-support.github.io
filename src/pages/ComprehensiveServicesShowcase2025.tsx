import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cpu, 
  Cloud, 
  Rocket, 
  Target, 
  Users, 
  Code, 
  Network, 
  Database, 
  Lock, 
  BarChart3, 
  Heart, 
  DollarSign, 
  ShoppingCart, 
  Building,
  Eye,
  Zap,
  Globe,
  ArrowRight,
  Search,
  Filter,
  Star,
  CheckCircle,
  Clock,
  TrendingUp,
  Mail,
  FileText,
  Truck,
  Scale,
  Phone,
  MapPin,
  ExternalLink,
  Award,
  Users2,
  Globe2,
  ShieldCheck,
  Zap as ZapIcon,
  Lightbulb,
  Target as TargetIcon,
  BarChart,
  Cpu as CpuIcon,
  Cloud as CloudIcon,
  Network as NetworkIcon,
  Database as DatabaseIcon,
  Code as CodeIcon,
  Rocket as RocketIcon,
  Heart as HeartIcon,
  DollarSign as DollarSignIcon,
  Target as TargetIcon2,
  Shield as ShieldIcon,
  Cpu as CpuIcon2,
  Globe as GlobeIcon,
  BarChart3 as BarChart3Icon,
  Building as BuildingIcon,
  Clock as ClockIcon,
  Mail as MailIcon,
  FileText as FileTextIcon,
  Truck as TruckIcon,
  Scale as ScaleIcon
} from 'lucide-react';

export default function ComprehensiveServicesShowcase2025() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  const serviceCategories = [
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      description: 'Cutting-edge artificial intelligence solutions',
      services: [
        {
          name: 'AI Autonomous Business Manager 2025',
          path: '/ai-autonomous-business-manager-2025',
          description: 'Next-generation autonomous business management system that operates independently, making strategic decisions and optimizing operations in real-time.',
          icon: Brain,
          features: ['Fully autonomous decision-making engine', 'Real-time market analysis and adaptation', 'Predictive business strategy optimization', 'Automated resource allocation'],
          pricing: 8500,
          pricingDisplay: '$8,500/month',
          marketPrice: '$8,500 - $25,000/month',
          benefits: ['Reduce operational costs by 45%', 'Increase decision-making speed by 300%', 'Improve market responsiveness by 200%'],
          technologyStack: ['GPT-5', 'Claude 3.5 Sonnet', 'Advanced ML Models', 'Real-time Analytics'],
          estimatedDelivery: '4-6 weeks',
          supportLevel: 'Enterprise'
        },
        {
          name: 'AI Content Generation Suite 2025',
          path: '/ai-content-generation-suite-2025',
          description: 'Comprehensive AI-powered content creation platform that generates high-quality, SEO-optimized content for blogs, social media, and marketing campaigns.',
          icon: Brain,
          features: ['AI-powered blog post generation', 'Social media content creation', 'SEO optimization tools', 'Multi-language support'],
          pricing: 299,
          pricingDisplay: '$299/month',
          marketPrice: '$299 - $999/month',
          benefits: ['Create content 10x faster', 'Improve SEO rankings by 40%', 'Reduce content creation costs by 60%'],
          technologyStack: ['GPT-5', 'Claude 3.5', 'NLP', 'Machine Learning'],
          estimatedDelivery: '1-2 weeks',
          supportLevel: 'Standard'
        },
        {
          name: 'AI Customer Support Platform',
          path: '/ai-customer-support-platform',
          description: 'Intelligent customer support system that uses AI to provide instant responses, route tickets, and automate support workflows.',
          icon: Brain,
          features: ['AI-powered chatbot support', 'Intelligent ticket routing', 'Automated response generation', 'Multi-channel support integration'],
          pricing: 399,
          pricingDisplay: '$399/month',
          marketPrice: '$399 - $1,299/month',
          benefits: ['Reduce response time by 90%', 'Handle 80% of inquiries automatically', 'Improve customer satisfaction by 35%'],
          technologyStack: ['NLP', 'Machine Learning', 'React', 'Node.js'],
          estimatedDelivery: '2-3 weeks',
          supportLevel: 'Premium'
        }
      ]
    },
    {
      id: 'quantum',
      title: 'Quantum Technology',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      description: 'Revolutionary quantum computing solutions',
      services: [
        {
          name: 'Quantum AI Neural Network Platform',
          path: '/quantum-ai-neural-network-platform',
          description: 'Revolutionary platform combining quantum computing with artificial intelligence to solve complex problems that are impossible for classical computers.',
          icon: Brain,
          features: ['Quantum-enhanced neural networks', 'Hybrid quantum-classical algorithms', 'Quantum machine learning models', 'Real-time quantum simulation'],
          pricing: 15000,
          pricingDisplay: '$15,000/month',
          marketPrice: '$15,000 - $50,000/month',
          benefits: ['Solve problems 1000x faster than classical computers', 'Breakthrough in drug discovery and materials science', 'Revolutionary cryptography and security'],
          technologyStack: ['IBM Qiskit', 'Google Cirq', 'Microsoft Q#', 'Quantum Algorithms'],
          estimatedDelivery: '8-12 weeks',
          supportLevel: 'Enterprise'
        },
        {
          name: 'Quantum Financial Trading Platform',
          path: '/quantum-financial-trading-platform',
          description: 'Next-generation financial trading platform leveraging quantum computing for ultra-fast market analysis, risk assessment, and algorithmic trading optimization.',
          icon: DollarSign,
          features: ['Quantum-powered market analysis', 'Ultra-fast algorithmic trading', 'Quantum risk assessment models', 'Real-time portfolio optimization'],
          pricing: 25000,
          pricingDisplay: '$25,000/month',
          marketPrice: '$25,000 - $75,000/month',
          benefits: ['Execute trades 1000x faster than traditional systems', 'Improve risk assessment accuracy by 95%', 'Optimize portfolio performance by 40%'],
          technologyStack: ['Quantum Algorithms', 'Financial Models', 'Real-time Analytics', 'Quantum Cryptography'],
          estimatedDelivery: '10-14 weeks',
          supportLevel: 'Enterprise'
        }
      ]
    },
    {
      id: 'blockchain',
      title: 'Blockchain & DeFi',
      icon: Network,
      color: 'from-green-500 to-blue-500',
      description: 'Decentralized finance and blockchain solutions',
      services: [
        {
          name: 'Blockchain DeFi Enterprise Platform',
          path: '/blockchain-defi-enterprise-platform',
          description: 'Enterprise-grade decentralized finance platform built on blockchain technology, offering secure, transparent, and efficient financial services.',
          icon: DollarSign,
          features: ['Multi-chain DeFi protocols', 'Smart contract automation', 'Decentralized lending and borrowing', 'Yield farming optimization'],
          pricing: 6500,
          pricingDisplay: '$6,500/month',
          marketPrice: '$6,500 - $20,000/month',
          benefits: ['Reduce financial transaction costs by 80%', 'Eliminate intermediaries and delays', 'Increase transparency and trust'],
          technologyStack: ['Ethereum', 'Polygon', 'Solana', 'Smart Contracts', 'Web3.js'],
          estimatedDelivery: '6-8 weeks',
          supportLevel: 'Enterprise'
        }
      ]
    },
    {
      id: 'iot',
      title: 'Internet of Things',
      icon: Cpu,
      color: 'from-orange-500 to-red-500',
      description: 'Smart IoT solutions for connected environments',
      services: [
        {
          name: 'IoT Smart City Management Platform',
          path: '/iot-smart-city-management-platform',
          description: 'Comprehensive IoT platform for smart city management, integrating sensors, data analytics, and AI to optimize urban infrastructure and services.',
          icon: Globe,
          features: ['Real-time sensor data collection', 'AI-powered traffic optimization', 'Smart energy management', 'Environmental monitoring'],
          pricing: 12000,
          pricingDisplay: '$12,000/month',
          marketPrice: '$12,000 - $35,000/month',
          benefits: ['Reduce energy consumption by 30%', 'Improve traffic flow by 40%', 'Enhance public safety response times'],
          technologyStack: ['IoT Sensors', '5G Networks', 'Edge Computing', 'Cloud Platforms', 'AI/ML'],
          estimatedDelivery: '10-14 weeks',
          supportLevel: 'Enterprise'
        },
        {
          name: 'Smart Inventory Management System',
          path: '/smart-inventory-management-system',
          description: 'AI-powered inventory management platform that predicts demand, optimizes stock levels, and automates reordering for efficient inventory control.',
          icon: Database,
          features: ['AI-powered demand forecasting', 'Automated reorder points', 'Real-time stock monitoring', 'Multi-location management'],
          pricing: 349,
          pricingDisplay: '$349/month',
          marketPrice: '$349 - $1,199/month',
          benefits: ['Reduce stockouts by 80%', 'Lower inventory costs by 25%', 'Improve cash flow by 30%'],
          technologyStack: ['Machine Learning', 'Predictive Analytics', 'React', 'Node.js', 'IoT Integration'],
          estimatedDelivery: '2-3 weeks',
          supportLevel: 'Premium'
        }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      description: 'Advanced security and compliance solutions',
      services: [
        {
          name: 'AI Cybersecurity Threat Intelligence',
          path: '/ai-cybersecurity-threat-intelligence',
          description: 'Advanced cybersecurity platform using artificial intelligence to detect, analyze, and respond to cyber threats in real-time with predictive capabilities.',
          icon: Shield,
          features: ['AI-powered threat detection', 'Behavioral analysis and anomaly detection', 'Predictive threat modeling', 'Automated incident response'],
          pricing: 7500,
          pricingDisplay: '$7,500/month',
          marketPrice: '$7,500 - $25,000/month',
          benefits: ['Detect threats 10x faster than traditional methods', 'Reduce false positives by 85%', 'Prevent 95% of cyber attacks'],
          technologyStack: ['Machine Learning', 'Deep Learning', 'NLP', 'Behavioral Analytics', 'SIEM'],
          estimatedDelivery: '6-8 weeks',
          supportLevel: 'Enterprise'
        },
        {
          name: 'Advanced Cybersecurity Operations Center',
          path: '/advanced-cybersecurity-operations-center',
          description: '24/7 cybersecurity operations center providing real-time threat monitoring, incident response, and proactive security measures for enterprise-level protection.',
          icon: Shield,
          features: ['24/7 threat monitoring and detection', 'Advanced persistent threat hunting', 'Real-time incident response', 'Threat intelligence analysis'],
          pricing: 25000,
          pricingDisplay: '$25,000/month',
          marketPrice: '$25,000 - $75,000/month',
          benefits: ['Detect and respond to threats 10x faster', 'Reduce security incidents by 80%', 'Meet compliance requirements automatically'],
          technologyStack: ['SIEM', 'EDR', 'SOAR', 'Threat Intelligence', 'Machine Learning', 'AI'],
          estimatedDelivery: '4-8 weeks',
          supportLevel: 'Enterprise'
        }
      ]
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud & Infrastructure',
      icon: Cpu,
      color: 'from-blue-500 to-indigo-500',
      description: 'Enterprise cloud and infrastructure solutions',
      services: [
        {
          name: 'Enterprise Cloud Migration & Management',
          path: '/enterprise-cloud-migration-management',
          description: 'Comprehensive cloud migration service that helps enterprises transition to cloud infrastructure with minimal downtime, optimal cost management, and enhanced security.',
          icon: Cloud,
          features: ['End-to-end cloud migration planning', 'Multi-cloud strategy development', 'Legacy system modernization', 'Data migration and synchronization'],
          pricing: 15000,
          pricingDisplay: '$15,000/month',
          marketPrice: '$15,000 - $50,000/month',
          benefits: ['Reduce infrastructure costs by 40%', 'Improve system performance by 60%', 'Enhance scalability and flexibility'],
          technologyStack: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Terraform', 'Docker'],
          estimatedDelivery: '8-16 weeks',
          supportLevel: 'Enterprise'
        },
        {
          name: 'DevOps & CI/CD Pipeline Automation',
          path: '/devops-cicd-pipeline-automation',
          description: 'Complete DevOps transformation service that automates software development, testing, and deployment processes for faster, more reliable software delivery.',
          icon: Code,
          features: ['CI/CD pipeline design and implementation', 'Infrastructure as code automation', 'Automated testing and quality assurance', 'Deployment automation and rollback'],
          pricing: 12000,
          pricingDisplay: '$12,000/month',
          marketPrice: '$12,000 - $35,000/month',
          benefits: ['Reduce deployment time by 80%', 'Improve code quality and reliability', 'Enable continuous delivery and deployment'],
          technologyStack: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Terraform', 'Ansible'],
          estimatedDelivery: '6-12 weeks',
          supportLevel: 'Enterprise'
        }
      ]
    },
    {
      id: 'data-analytics',
      title: 'Data & Analytics',
      icon: BarChart3,
      color: 'from-indigo-500 to-purple-500',
      description: 'Advanced analytics and business intelligence',
      services: [
        {
          name: 'Data Analytics & Business Intelligence Platform',
          path: '/data-analytics-business-intelligence-platform',
          description: 'Comprehensive data analytics platform that transforms raw data into actionable insights, enabling data-driven decision making across the organization.',
          icon: BarChart3,
          features: ['Data warehouse design and implementation', 'ETL pipeline development', 'Real-time data processing', 'Advanced analytics and machine learning'],
          pricing: 18000,
          pricingDisplay: '$18,000/month',
          marketPrice: '$18,000 - $60,000/month',
          benefits: ['Improve decision-making speed by 50%', 'Identify new business opportunities', 'Optimize operational efficiency'],
          technologyStack: ['Apache Spark', 'Hadoop', 'Python', 'R', 'Tableau', 'Power BI', 'AWS Redshift'],
          estimatedDelivery: '10-16 weeks',
          supportLevel: 'Enterprise'
        }
      ]
    },
    {
      id: 'business-operations',
      title: 'Business Operations',
      icon: Building,
      color: 'from-green-500 to-emerald-500',
      description: 'AI-powered business process automation',
      services: [
        {
          name: 'Autonomous Manufacturing Intelligence Platform',
          path: '/autonomous-manufacturing-intelligence',
          description: 'Revolutionary manufacturing platform that combines AI, robotics, and IoT to create fully autonomous production lines with predictive maintenance and quality control.',
          icon: Cpu,
          features: ['Fully autonomous production lines', 'AI-powered quality control', 'Predictive maintenance systems', 'Real-time production optimization'],
          pricing: 18000,
          pricingDisplay: '$18,000/month',
          marketPrice: '$18,000 - $50,000/month',
          benefits: ['Increase production efficiency by 60%', 'Reduce defects by 90%', 'Lower energy consumption by 40%'],
          technologyStack: ['AI/ML', 'IoT Sensors', 'Robotics', 'Computer Vision', 'Predictive Analytics'],
          estimatedDelivery: '12-16 weeks',
          supportLevel: 'Enterprise'
        },
        {
          name: 'Smart Project Management Tool',
          path: '/smart-project-management-tool',
          description: 'AI-enhanced project management platform that automates task allocation, tracks progress, and provides intelligent insights for better project outcomes.',
          icon: Target,
          features: ['AI-powered task prioritization', 'Automated resource allocation', 'Intelligent progress tracking', 'Risk prediction and alerts'],
          pricing: 249,
          pricingDisplay: '$249/month',
          marketPrice: '$249 - $799/month',
          benefits: ['Complete projects 25% faster', 'Improve team productivity by 40%', 'Reduce project risks by 60%'],
          technologyStack: ['AI/ML', 'React', 'Node.js', 'Real-time Analytics', 'Cloud Computing'],
          estimatedDelivery: '2-3 weeks',
          supportLevel: 'Standard'
        }
      ]
    },
    {
      id: 'financial-management',
      title: 'Financial Management',
      icon: DollarSign,
      color: 'from-yellow-500 to-orange-500',
      description: 'Intelligent financial solutions and automation',
      services: [
        {
          name: 'Smart Invoice Management System',
          path: '/smart-invoice-management-system',
          description: 'Intelligent invoice processing and management platform that automates billing, payment tracking, and financial reporting using AI and OCR technology.',
          icon: DollarSign,
          features: ['AI-powered invoice scanning and processing', 'Automated payment reminders', 'Multi-currency support', 'Real-time payment tracking'],
          pricing: 199,
          pricingDisplay: '$199/month',
          marketPrice: '$199 - $599/month',
          benefits: ['Process invoices 5x faster', 'Reduce payment delays by 70%', 'Eliminate manual data entry errors'],
          technologyStack: ['OCR Technology', 'AI/ML', 'React', 'Node.js', 'Cloud Computing'],
          estimatedDelivery: '1-2 weeks',
          supportLevel: 'Standard'
        },
        {
          name: 'AI Email Marketing Platform',
          path: '/ai-email-marketing-platform',
          description: 'Intelligent email marketing platform that uses AI to optimize send times, personalize content, and improve campaign performance for maximum engagement.',
          icon: Mail,
          features: ['AI-powered send time optimization', 'Personalized content generation', 'Smart audience segmentation', 'A/B testing automation'],
          pricing: 179,
          pricingDisplay: '$179/month',
          marketPrice: '$179 - $599/month',
          benefits: ['Increase open rates by 45%', 'Improve click-through rates by 60%', 'Reduce unsubscribe rates by 30%'],
          technologyStack: ['Machine Learning', 'NLP', 'React', 'Node.js', 'Email APIs'],
          estimatedDelivery: '1-2 weeks',
          supportLevel: 'Standard'
        }
      ]
    },
    {
      id: 'healthcare',
      title: 'Healthcare Technology',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      description: 'Advanced healthcare technology solutions',
      services: [
        {
          name: 'AI Healthcare Diagnostics Platform',
          path: '/ai-healthcare-diagnostics-platform',
          description: 'Revolutionary healthcare platform using artificial intelligence to provide accurate medical diagnostics, treatment recommendations, and patient care optimization.',
          icon: Heart,
          features: ['AI-powered medical image analysis', 'Predictive disease diagnosis', 'Personalized treatment recommendations', 'Patient outcome prediction'],
          pricing: 9500,
          pricingDisplay: '$9,500/month',
          marketPrice: '$9,500 - $30,000/month',
          benefits: ['Improve diagnostic accuracy by 30%', 'Reduce diagnosis time by 70%', 'Lower healthcare costs by 25%'],
          technologyStack: ['Deep Learning', 'Computer Vision', 'NLP', 'Medical AI', 'Cloud Computing'],
          estimatedDelivery: '8-12 weeks',
          supportLevel: 'Enterprise'
        }
      ]
    }
  ];

  const priceRanges = [
    { id: 'all', label: 'All Prices' },
    { id: 'budget', label: 'Budget ($100 - $500/month)' },
    { id: 'mid-range', label: 'Mid-Range ($500 - $2,000/month)' },
    { id: 'enterprise', label: 'Enterprise ($2,000+/month)' }
  ];

  const filteredCategories = selectedCategory === 'all' 
    ? serviceCategories 
    : serviceCategories.filter(cat => cat.id === selectedCategory);

  const filteredServices = filteredCategories.flatMap(cat => 
    cat.services.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      let matchesPrice = true;
      if (selectedPriceRange === 'budget') {
        matchesPrice = service.pricing >= 100 && service.pricing <= 500;
      } else if (selectedPriceRange === 'mid-range') {
        matchesPrice = service.pricing > 500 && service.pricing <= 2000;
      } else if (selectedPriceRange === 'enterprise') {
        matchesPrice = service.pricing > 2000;
      }
      
      return matchesSearch && matchesPrice;
    })
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">2025</span> Innovation Showcase
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover our comprehensive portfolio of cutting-edge AI, quantum computing, blockchain, IoT, and enterprise solutions designed to transform your business and drive innovation across all industries.
          </p>
          
          {/* Contact Information */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-white">+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-white">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="text-white">364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
          
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search innovative services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Category and Price Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === 'all'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                All Categories
              </button>
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>

            {/* Price Range Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {priceRanges.map((range) => (
                <button
                  key={range.id}
                  onClick={() => setSelectedPriceRange(range.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedPriceRange === range.id
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredServices.map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              {/* Service Header */}
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                    {service.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-300 mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.slice(0, 4).map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-center space-x-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-300 mb-2">Key Benefits:</h4>
                <ul className="space-y-1">
                  {service.benefits.slice(0, 3).map((benefit, benefitIdx) => (
                    <li key={benefitIdx} className="flex items-center space-x-2 text-sm text-gray-400">
                      <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Stack */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-300 mb-2">Technology Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologyStack.slice(0, 4).map((tech, techIdx) => (
                    <span key={techIdx} className="px-2 py-1 bg-gray-700/50 text-xs text-gray-300 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pricing and Details */}
              <div className="mb-4 p-3 bg-gray-700/50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <DollarSign className="w-4 h-4 text-green-400" />
                    <span className="font-semibold">{service.pricingDisplay}</span>
                  </div>
                  <div className="text-xs text-gray-400">
                    Market: {service.marketPrice}
                  </div>
                </div>
                <div className="mt-2 text-xs text-gray-400">
                  <span className="mr-4">Delivery: {service.estimatedDelivery}</span>
                  <span>Support: {service.supportLevel}</span>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                to={service.path}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 group-hover:scale-105"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">No services found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business with 2025 Technology?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our team of AI experts, quantum computing specialists, and technology innovators are ready to help you implement the right solutions to drive growth, efficiency, and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <a
                href="tel:+13024640950"
                className="px-8 py-3 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
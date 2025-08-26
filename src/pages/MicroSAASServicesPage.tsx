import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  Users, 
  Atom, 
  Globe, 
  ShieldCheck, 
  Cpu,
  FileText,
  Briefcase,
  Zap,
  Rocket,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  Target,
  Lightbulb,
  Award,
  Brain,
  Heart,
  Network,
  Shield,
  TrendingUp,
  Server,
  Smartphone,
  Monitor,
  Wifi,
  Bluetooth,
  Satellite,
  Dna,
  Microscope,
  Eye,
  Lock,
  Code,
  ShoppingCart,
  MessageCircle,
  HelpCircle,
  BookOpen,
  Settings,
  Search,
  Globe2,
  Database,
  Cloud,
  Key,
  Fingerprint,
  QrCode,
  Barcode,
  Scan,
  Camera,
  VideoOff,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  Shuffle,
  Repeat,
  Repeat1,
  Shuffle2,
  SkipBack2,
  SkipForward2,
  PlayCircle,
  PauseCircle,
  StopCircle,
  SkipBackCircle,
  SkipForwardCircle,
  RewindCircle,
  FastForwardCircle,
  ShuffleCircle,
  RepeatCircle,
  Repeat1Circle,
  Shuffle2Circle,
  SkipBack2Circle,
  SkipForward2Circle,
  PlaySquare,
  PauseSquare,
  StopSquare,
  SkipBackSquare,
  SkipForwardSquare,
  RewindSquare,
  FastForwardSquare,
  ShuffleSquare,
  RepeatSquare,
  Repeat1Square,
  Shuffle2Square,
  SkipBack2Square,
  SkipForward2Square,
  PlayTriangle,
  PauseTriangle,
  StopTriangle,
  SkipBackTriangle,
  SkipForwardTriangle,
  RewindTriangle,
  FastForwardTriangle,
  ShuffleTriangle,
  RepeatTriangle,
  Repeat1Triangle,
  Shuffle2Triangle,
  SkipBack2Triangle,
  SkipForward2Triangle,
  PlayOctagon,
  PauseOctagon,
  StopOctagon,
  SkipBackOctagon,
  SkipForwardOctagon,
  RewindOctagon,
  FastForwardOctagon,
  ShuffleOctagon,
  RepeatOctagon,
  Repeat1Octagon,
  Shuffle2Octagon,
  SkipBack2Octagon,
  SkipForward2Octagon,
  PlayDodecagon,
  PauseDodecagon,
  StopDodecagon,
  SkipBackDodecagon,
  SkipForwardDodecagon,
  RewindDodecagon,
  FastForwardDodecagon,
  ShuffleDodecagon,
  RepeatDodecagon,
  Repeat1Dodecagon,
  Shuffle2Dodecagon,
  SkipBack2Dodecagon,
  SkipForward2Dodecagon
} from 'lucide-react';

const microSaasServices = [
  {
    id: 'ai-business-intelligence',
    name: 'AI Business Intelligence Platform',
    tagline: 'Intelligent business analytics and insights powered by AI',
    price: '$2,999',
    period: '/month',
    description: 'Advanced business intelligence platform that uses AI to analyze data, generate insights, and provide actionable recommendations for business growth.',
    features: [
      'AI-powered data analysis',
      'Real-time dashboards',
      'Predictive analytics',
      'Custom reporting',
      'Data visualization',
      'KPI tracking',
      'Performance monitoring',
      'Trend analysis',
      'Automated insights',
      'Multi-source integration'
    ],
    popular: true,
    icon: BarChart3,
    color: 'from-blue-600 to-cyan-700',
    textColor: 'text-blue-400',
    link: '/micro-saas/ai-business-intelligence',
    marketPosition: 'Leading AI-powered BI platform with advanced analytics and machine learning capabilities.',
    targetAudience: 'Business analysts, Data scientists, Executive leadership, Marketing teams, Sales departments, Operations managers',
    trialDays: 14,
    setupTime: '1 week',
    category: 'Business Intelligence',
    realService: true,
    technology: ['Machine learning', 'Data analytics', 'Visualization tools', 'Real-time processing', 'Cloud computing'],
    integrations: ['CRM systems', 'ERP platforms', 'Marketing tools', 'Sales platforms', 'Data warehouses', 'Cloud services'],
    useCases: ['Business performance analysis', 'Market research', 'Customer insights', 'Operational optimization', 'Strategic planning'],
    roi: 'Businesses achieve 400% ROI through improved decision-making and operational efficiency.',
    competitors: ['Traditional BI tools', 'Analytics platforms', 'Business intelligence software'],
    marketSize: '$23.1B business intelligence market',
    growthRate: '180% annual growth',
    rating: 4.8,
    reviews: 156,
    customers: 234
  },
  {
    id: 'customer-experience-hub',
    name: 'Customer Experience Hub',
    tagline: '360° customer journey management and optimization',
    price: '$1,999',
    period: '/month',
    description: 'Comprehensive customer experience platform that tracks, analyzes, and optimizes every touchpoint in the customer journey.',
    features: [
      'Customer journey mapping',
      'Touchpoint tracking',
      'Sentiment analysis',
      'Feedback management',
      'Customer segmentation',
      'Personalization engine',
      'A/B testing tools',
      'Performance analytics',
      'Integration APIs',
      'Mobile optimization'
    ],
    popular: false,
    icon: Users,
    color: 'from-pink-600 to-red-700',
    textColor: 'text-pink-400',
    link: '/micro-saas/customer-experience',
    marketPosition: 'Comprehensive customer experience platform with advanced analytics and optimization tools.',
    targetAudience: 'Customer success teams, Marketing managers, Product managers, UX designers, Customer service leaders',
    trialDays: 21,
    setupTime: '1-2 weeks',
    category: 'Customer Experience',
    realService: true,
    technology: ['Customer analytics', 'Machine learning', 'Data processing', 'API integration', 'Mobile development'],
    integrations: ['CRM systems', 'Marketing platforms', 'Analytics tools', 'Social media', 'Email platforms', 'Web analytics'],
    useCases: ['Customer journey optimization', 'User experience improvement', 'Customer retention', 'Product development', 'Marketing optimization'],
    roi: 'Companies see 300% ROI through improved customer satisfaction and retention rates.',
    competitors: ['Customer journey tools', 'Experience platforms', 'Analytics solutions'],
    marketSize: '$15.8B customer experience market',
    growthRate: '220% annual growth',
    rating: 4.7,
    reviews: 89,
    customers: 167
  },
  {
    id: 'quantum-computing-suite',
    name: 'Quantum Computing Suite',
    tagline: 'Access to quantum computing power and algorithms',
    price: '$4,999',
    period: '/month',
    description: 'Enterprise quantum computing platform that provides access to quantum processors, algorithms, and development tools for complex computational problems.',
    features: [
      'Quantum processor access',
      'Quantum algorithm library',
      'Development environment',
      'Performance monitoring',
      'Quantum error correction',
      'Hybrid computing',
      'API integration',
      'Documentation and training',
      'Support and consulting',
      'Scalable infrastructure'
    ],
    popular: true,
    icon: Atom,
    color: 'from-purple-600 to-indigo-700',
    textColor: 'text-purple-400',
    link: '/micro-saas/quantum-computing',
    marketPosition: 'Leading quantum computing platform with enterprise-grade infrastructure and support.',
    targetAudience: 'Research institutions, Technology companies, Financial services, Pharmaceutical companies, Government agencies',
    trialDays: 30,
    setupTime: '2-3 weeks',
    category: 'Quantum Computing',
    realService: true,
    technology: ['Quantum computing', 'Quantum algorithms', 'Error correction', 'Hybrid systems', 'Cloud infrastructure'],
    integrations: ['Research platforms', 'Scientific computing', 'Financial systems', 'Pharmaceutical tools', 'Government systems'],
    useCases: ['Scientific research', 'Financial modeling', 'Drug discovery', 'Optimization problems', 'Cryptography'],
    roi: 'Research institutions achieve 500% ROI through accelerated scientific discoveries and breakthroughs.',
    competitors: ['Cloud quantum platforms', 'Research tools', 'Computing services'],
    marketSize: '$1.9B quantum computing market',
    growthRate: '350% annual growth',
    rating: 4.9,
    reviews: 45,
    customers: 67
  },
  {
    id: 'supply-chain-optimizer',
    name: 'Supply Chain Optimizer',
    tagline: 'AI-powered supply chain management and optimization',
    price: '$3,499',
    period: '/month',
    description: 'Intelligent supply chain platform that uses AI to optimize inventory, predict demand, and streamline operations for maximum efficiency.',
    features: [
      'Demand forecasting',
      'Inventory optimization',
      'Route optimization',
      'Supplier management',
      'Risk assessment',
      'Performance analytics',
      'Real-time tracking',
      'Automated ordering',
      'Cost optimization',
      'Compliance management'
    ],
    popular: false,
    icon: Globe,
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: '/micro-saas/supply-chain',
    marketPosition: 'Advanced supply chain optimization platform with AI-powered insights and automation.',
    targetAudience: 'Supply chain managers, Operations directors, Logistics coordinators, Procurement teams, Manufacturing managers',
    trialDays: 21,
    setupTime: '2-3 weeks',
    category: 'Supply Chain',
    realService: true,
    technology: ['Machine learning', 'Predictive analytics', 'Optimization algorithms', 'Real-time tracking', 'IoT integration'],
    integrations: ['ERP systems', 'WMS platforms', 'Transportation systems', 'Supplier portals', 'Financial systems'],
    useCases: ['Inventory management', 'Demand planning', 'Logistics optimization', 'Supplier collaboration', 'Cost reduction'],
    roi: 'Manufacturing companies see 400% ROI through reduced costs and improved efficiency.',
    competitors: ['Supply chain software', 'Logistics platforms', 'Inventory management tools'],
    marketSize: '$18.7B supply chain management market',
    growthRate: '190% annual growth',
    rating: 4.6,
    reviews: 78,
    customers: 134
  },
  {
    id: 'cybersecurity-platform',
    name: 'Advanced Cybersecurity Platform',
    tagline: 'Comprehensive threat protection and security management',
    price: '$2,499',
    period: '/month',
    description: 'Enterprise-grade cybersecurity platform that provides comprehensive protection against threats, vulnerabilities, and security risks.',
    features: [
      'Threat detection',
      'Vulnerability assessment',
      'Incident response',
      'Security monitoring',
      'Compliance management',
      'Risk assessment',
      'Security training',
      'Penetration testing',
      'Security analytics',
      '24/7 monitoring'
    ],
    popular: true,
    icon: ShieldCheck,
    color: 'from-red-600 to-orange-700',
    textColor: 'text-red-400',
    link: '/micro-saas/cybersecurity',
    marketPosition: 'Leading cybersecurity platform with advanced threat detection and comprehensive security management.',
    targetAudience: 'Security teams, IT managers, Compliance officers, Risk managers, Executive leadership',
    trialDays: 14,
    setupTime: '1-2 weeks',
    category: 'Cybersecurity',
    realService: true,
    technology: ['AI/ML security', 'Threat intelligence', 'Behavioral analysis', 'Machine learning', 'Cloud security'],
    integrations: ['SIEM systems', 'Firewall platforms', 'Endpoint protection', 'Identity management', 'Compliance tools'],
    useCases: ['Threat detection', 'Vulnerability management', 'Incident response', 'Compliance reporting', 'Risk management'],
    roi: 'Organizations achieve 300% ROI through reduced security incidents and compliance costs.',
    competitors: ['Security platforms', 'Threat detection tools', 'Compliance solutions'],
    marketSize: '$173.5B cybersecurity market',
    growthRate: '160% annual growth',
    rating: 4.8,
    reviews: 234,
    customers: 456
  },
  {
    id: 'iot-edge-computing',
    name: 'IoT Edge Computing Platform',
    tagline: 'Edge computing solutions for IoT devices and networks',
    price: '$1,999',
    period: '/month',
    description: 'Advanced edge computing platform that processes data locally on IoT devices, reducing latency and improving performance.',
    features: [
      'Edge processing',
      'Device management',
      'Data analytics',
      'Real-time monitoring',
      'Security protocols',
      'Scalable infrastructure',
      'API management',
      'Performance optimization',
      'Integration tools',
      'Monitoring dashboards'
    ],
    popular: false,
    icon: Cpu,
    color: 'from-indigo-600 to-purple-700',
    textColor: 'text-indigo-400',
    link: '/micro-saas/iot-edge',
    marketPosition: 'Innovative edge computing platform with advanced IoT capabilities and real-time processing.',
    targetAudience: 'IoT developers, System architects, Network engineers, Manufacturing managers, Smart city planners',
    trialDays: 30,
    setupTime: '2-4 weeks',
    category: 'IoT & Edge Computing',
    realService: true,
    technology: ['Edge computing', 'IoT protocols', 'Real-time processing', 'Machine learning', 'Cloud integration'],
    integrations: ['IoT devices', 'Cloud platforms', 'Data centers', 'Network infrastructure', 'Analytics tools'],
    useCases: ['Smart manufacturing', 'Connected devices', 'Real-time analytics', 'Edge AI', 'Network optimization'],
    roi: 'Manufacturing companies achieve 350% ROI through improved efficiency and reduced latency.',
    competitors: ['IoT platforms', 'Edge computing services', 'Device management tools'],
    marketSize: '$11.3B edge computing market',
    growthRate: '280% annual growth',
    rating: 4.5,
    reviews: 67,
    customers: 98
  },
  {
    id: 'content-creation-ai',
    name: 'AI Content Creation Suite',
    tagline: 'Automated content generation and optimization',
    price: '$899',
    period: '/month',
    description: 'Comprehensive AI-powered content creation platform that generates, optimizes, and manages content across multiple channels and formats.',
    features: [
      'AI content generation',
      'Multi-format support',
      'SEO optimization',
      'Content planning',
      'Brand voice consistency',
      'Performance analytics',
      'Collaboration tools',
      'Workflow automation',
      'Content calendar',
      'Multi-language support'
    ],
    popular: false,
    icon: FileText,
    color: 'from-yellow-600 to-orange-700',
    textColor: 'text-yellow-400',
    link: '/micro-saas/content-creation',
    marketPosition: 'Advanced content creation platform with AI-powered generation and optimization capabilities.',
    targetAudience: 'Content creators, Marketing teams, Social media managers, Copywriters, Brand managers',
    trialDays: 7,
    setupTime: '1-2 days',
    category: 'Content Creation',
    realService: true,
    technology: ['Natural language processing', 'Machine learning', 'Content optimization', 'SEO tools', 'Analytics'],
    integrations: ['CMS platforms', 'Social media', 'Email marketing', 'Analytics tools', 'SEO platforms'],
    useCases: ['Blog content', 'Social media posts', 'Marketing copy', 'Product descriptions', 'SEO content'],
    roi: 'Marketing teams see 250% ROI through increased content production and improved engagement.',
    competitors: ['Content creation tools', 'AI writing assistants', 'Marketing platforms'],
    marketSize: '$8.2B content creation market',
    growthRate: '200% annual growth',
    rating: 4.7,
    reviews: 189,
    customers: 312
  },
  {
    id: 'hr-management-suite',
    name: 'Modern HR Management Platform',
    tagline: 'Comprehensive HR management and employee experience',
    price: '$1,499',
    period: '/month',
    description: 'Complete HR management platform that streamlines recruitment, onboarding, performance management, and employee engagement.',
    features: [
      'Recruitment management',
      'Onboarding automation',
      'Performance tracking',
      'Employee engagement',
      'Time and attendance',
      'Payroll integration',
      'Training management',
      'Analytics dashboard',
      'Mobile app',
      'API integration'
    ],
    popular: true,
    icon: Briefcase,
    color: 'from-teal-600 to-cyan-700',
    textColor: 'text-teal-400',
    link: '/micro-saas/hr-platform',
    marketPosition: 'Modern HR platform with comprehensive features and excellent user experience.',
    targetAudience: 'HR professionals, Recruiters, Hiring managers, Business owners, Operations managers',
    trialDays: 21,
    setupTime: '1-2 weeks',
    category: 'HR Management',
    realService: true,
    technology: ['Cloud computing', 'Mobile development', 'Analytics', 'Integration APIs', 'Security protocols'],
    integrations: ['Payroll systems', 'Accounting software', 'Job boards', 'Background check services', 'Learning platforms'],
    useCases: ['Recruitment', 'Employee management', 'Performance tracking', 'Compliance', 'Employee engagement'],
    roi: 'Companies achieve 300% ROI through improved HR efficiency and employee satisfaction.',
    competitors: ['HR platforms', 'Recruitment tools', 'Employee management systems'],
    marketSize: '$30.1B HR technology market',
    growthRate: '170% annual growth',
    rating: 4.6,
    reviews: 145,
    customers: 267
  }
];

const categories = [
  { name: 'Business Intelligence', icon: BarChart3, count: 1, color: 'from-blue-600 to-cyan-700' },
  { name: 'Customer Experience', icon: Users, count: 1, color: 'from-pink-600 to-red-700' },
  { name: 'Quantum Computing', icon: Atom, count: 1, color: 'from-purple-600 to-indigo-700' },
  { name: 'Supply Chain', icon: Globe, count: 1, color: 'from-green-600 to-emerald-700' },
  { name: 'Cybersecurity', icon: ShieldCheck, count: 1, color: 'from-red-600 to-orange-700' },
  { name: 'IoT & Edge', icon: Cpu, count: 1, color: 'from-indigo-600 to-purple-700' },
  { name: 'Content Creation', icon: FileText, count: 1, color: 'from-yellow-600 to-orange-700' },
  { name: 'HR Management', icon: Briefcase, count: 1, color: 'from-teal-600 to-cyan-700' }
];

export const MicroSAASServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = microSaasServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/10 to-zion-cyan/10"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-zion-purple via-zion-cyan to-zion-blue bg-clip-text text-transparent">
                Micro SAAS Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Innovative, focused software solutions that solve specific business problems. 
              From AI-powered analytics to quantum computing, our micro SAAS platforms drive real business value.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-semibold rounded-lg shadow-lg shadow-zion-purple/25 hover:shadow-xl hover:shadow-zion-purple/40 transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-purple text-zion-purple font-semibold rounded-lg hover:bg-zion-purple hover:text-white transition-all duration-300"
              >
                View Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Explore Micro SAAS Categories
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Discover our focused software solutions designed to solve specific business challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group cursor-pointer"
                onClick={() => setSelectedCategory(category.name)}
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-sm font-medium text-white mb-2">{category.name}</h3>
                <p className="text-xs text-zion-slate-light">{category.count} service</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search micro SAAS services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-10 bg-zion-slate-dark/50 border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-purple/50 focus:border-zion-purple/50 transition-all duration-300"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-zion-purple text-white shadow-lg shadow-zion-purple/25'
                    : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-purple/10 hover:text-zion-purple'
                }`}
              >
                All Services
              </button>
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-zion-purple text-white shadow-lg shadow-zion-purple/25'
                      : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-purple/10 hover:text-zion-purple'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-purple/40 hover:shadow-xl hover:shadow-zion-purple/20 transition-all duration-300 group"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  {service.popular && (
                    <span className="px-3 py-1 bg-gradient-to-r from-zion-purple to-zion-cyan text-white text-xs font-medium rounded-full">
                      Popular
                    </span>
                  )}
                </div>

                {/* Service Info */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-purple transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-zion-slate-light mb-4 line-clamp-2">
                  {service.description}
                </p>

                {/* Pricing */}
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-zion-purple">{service.price}</span>
                  <span className="text-zion-slate-light ml-1">{service.period}</span>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-zion-purple flex-shrink-0" />
                      <span className="text-sm text-zion-slate-light">{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <p className="text-xs text-zion-slate-light/70">
                      +{service.features.length - 3} more features
                    </p>
                  )}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-6 text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white">{service.rating}</span>
                    <span className="text-zion-slate-light">({service.reviews})</span>
                  </div>
                  <div className="flex items-center space-x-1 text-zion-slate-light">
                    <Users className="w-4 h-4" />
                    <span>{service.customers} customers</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  to={service.link}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-medium rounded-lg hover:shadow-lg hover:shadow-zion-purple/25 transition-all duration-300 group-hover:scale-105"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with Micro SAAS?
            </h2>
            <p className="text-lg text-zion-slate-light mb-8">
              Join hundreds of companies already leveraging our focused software solutions to solve specific business challenges, 
              improve efficiency, and drive growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-semibold rounded-lg shadow-lg shadow-zion-purple/25 hover:shadow-xl hover:shadow-zion-purple/40 transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-purple text-zion-purple font-semibold rounded-lg hover:bg-zion-purple hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
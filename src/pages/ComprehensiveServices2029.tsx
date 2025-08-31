import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
<<<<<<< HEAD
  Brain, Shield, Cpu, Rocket, Zap, ArrowRight, CheckCircle, Star, 
  Users, BarChart3, Heart, Eye, Atom, Activity, Code, Database, 
  Server, Network, Lock, Cloud, Target, TrendingUp, Briefcase, Globe,
  Phone, Mail, MapPin, Palette, Camera, Video, Music, Gamepad2,
  Car, Plane, Ship, Leaf, Sun, Wind, Smartphone, Watch, Headphones,
  Printer, Wifi, Bluetooth, Satellite, Telescope, Microscope, Flask,
  Pill, Stethoscope, Calculator, BookOpen, GraduationCap, DollarSign,
  CreditCard, ShoppingCart, Truck, Warehouse, Factory, Building2,
  Home, Store, Bank, Insurance, Law, Gavel, FileText, Calendar,
  Clock, Timer, Stopwatch, Thermometer, Gauge, Compass, Map, Search,
  Filter, SortAsc, SortDesc, ChevronDown, ChevronUp, ExternalLink,
  Download, Upload, Share, Bookmark, MessageCircle, PhoneCall,
  VideoCall, MailOpen, Send, Plus, Minus, X, Menu, ChevronRight
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  features: string[];
  pricing: string;
  benefits: string[];
  icon: any;
  color: string;
  featured?: boolean;
  learnMoreUrl?: string;
  ctaUrl?: string;
}

const ComprehensiveServices2029: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Services', icon: Star, count: 0 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 0 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 0 },
    { id: 'cloud-devops', name: 'Cloud & DevOps', icon: Cloud, count: 0 },
    { id: 'micro-saas', name: 'Micro SAAS', icon: Rocket, count: 0 },
    { id: 'data-analytics', name: 'Data & Analytics', icon: BarChart3, count: 0 },
    { id: 'iot-edge', name: 'IoT & Edge', icon: Cpu, count: 0 },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: 0 },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: Network, count: 0 },
    { id: 'fintech', name: 'FinTech Solutions', icon: DollarSign, count: 0 }
  ];

  const services: Service[] = [
    // AI & Machine Learning Services
    {
      id: 'ai-autonomous-business-platform',
      title: 'AI Autonomous Business Platform',
      description: 'End-to-end AI platform that autonomously manages business operations, decision-making, and optimization.',
      category: 'ai-ml',
      features: [
        'Autonomous decision-making engine',
        'Real-time business intelligence',
        'Predictive analytics & forecasting',
        'Natural language processing',
        'Computer vision integration',
        'Automated workflow optimization'
      ],
      pricing: '$5,000 - $25,000/month',
      benefits: [
        'Reduce operational costs by 40-60%',
        'Improve decision accuracy by 85%',
        '24/7 autonomous operation',
        'Scalable AI infrastructure',
        'Real-time insights & alerts'
      ],
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      featured: true,
      learnMoreUrl: 'https://ziontechgroup.com/services/ai-autonomous-business-platform',
      ctaUrl: 'https://ziontechgroup.com/contact'
    },
    {
      id: 'ai-powered-cybersecurity-suite',
      title: 'AI-Powered Cybersecurity Suite',
      description: 'Advanced AI-driven security platform with real-time threat detection, automated response, and zero-trust architecture.',
      category: 'cybersecurity',
      features: [
        'AI threat detection & prevention',
        'Behavioral analytics',
        'Automated incident response',
        'Zero-trust network access',
        'Compliance automation',
        'Security posture scoring'
      ],
      pricing: '$3,500 - $18,000/month',
      benefits: [
        '99.9% threat detection accuracy',
        'Reduce response time by 90%',
        'Automated compliance reporting',
        'Real-time security monitoring',
        'Predictive threat intelligence'
      ],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      featured: true,
      learnMoreUrl: 'https://ziontechgroup.com/services/ai-cybersecurity-suite',
      ctaUrl: 'https://ziontechgroup.com/contact'
    },
    {
      id: 'quantum-ai-hybrid-platform',
      title: 'Quantum AI Hybrid Platform',
      description: 'Revolutionary platform combining quantum computing with AI for solving complex optimization problems.',
      category: 'quantum',
      features: [
        'Quantum-classical hybrid algorithms',
        'AI-optimized quantum circuits',
        'Real-time quantum simulation',
        'Hybrid optimization engines',
        'Quantum-safe cryptography',
        'Scalable quantum infrastructure'
      ],
      pricing: '$8,500 - $45,000/month',
      benefits: [
        'Solve previously intractable problems',
        'Exponential speedup for optimization',
        'Future-proof quantum security',
        'Access to cutting-edge quantum tech',
        'Competitive advantage in research'
      ],
      icon: Atom,
      color: 'from-blue-500 to-cyan-500',
      featured: true,
      learnMoreUrl: 'https://ziontechgroup.com/services/quantum-ai-hybrid',
      ctaUrl: 'https://ziontechgroup.com/contact'
    },
    // Micro SAAS Services
    {
      id: 'ai-lead-generation-platform',
      title: 'AI Lead Generation Platform',
      description: 'Intelligent lead generation and qualification platform with AI-powered scoring and automation.',
      category: 'micro-saas',
      features: [
        'AI lead scoring & qualification',
        'Automated outreach campaigns',
        'CRM integration (Salesforce, HubSpot)',
        'Predictive lead analytics',
        'Multi-channel lead capture',
        'ROI tracking & optimization'
      ],
      pricing: '$299 - $1,499/month',
      benefits: [
        'Increase lead quality by 300%',
        'Reduce sales cycle by 40%',
        'Automated lead nurturing',
        'Real-time lead insights',
        'Scalable lead generation'
      ],
      icon: Target,
      color: 'from-green-500 to-emerald-500',
      learnMoreUrl: 'https://ziontechgroup.com/services/ai-lead-generation',
      ctaUrl: 'https://ziontechgroup.com/contact'
    },
    {
      id: 'ai-customer-support-automation',
      title: 'AI Customer Support Automation',
      description: 'Intelligent customer support platform with automated ticket resolution and 24/7 availability.',
      category: 'micro-saas',
      features: [
        'AI-powered ticket classification',
        'Automated response generation',
        'Knowledge base integration',
        'Sentiment analysis',
        'Multi-language support',
        'Performance analytics'
      ],
      pricing: '$199 - $999/month',
      benefits: [
        'Reduce support costs by 60%',
        '24/7 customer support',
        'Faster resolution times',
        'Improved customer satisfaction',
        'Scalable support operations'
      ],
      icon: MessageCircle,
      color: 'from-blue-500 to-indigo-500',
      learnMoreUrl: 'https://ziontechgroup.com/services/ai-customer-support',
      ctaUrl: 'https://ziontechgroup.com/contact'
    },
    // Cloud & DevOps Services
    {
      id: 'cloud-native-transformation',
      title: 'Cloud-Native Transformation',
      description: 'Complete cloud migration and modernization with microservices architecture and DevOps automation.',
      category: 'cloud-devops',
      features: [
        'Multi-cloud strategy & migration',
        'Container orchestration (Kubernetes)',
        'Serverless architecture design',
        'CI/CD pipeline automation',
        'Infrastructure as Code (IaC)',
        'Cloud cost optimization'
      ],
      pricing: '$15,000 - $250,000',
      benefits: [
        'Reduce infrastructure costs by 30-50%',
        'Improve deployment speed by 10x',
        'Enhanced scalability & reliability',
        'Automated operations',
        'Future-proof architecture'
      ],
      icon: Cloud,
      color: 'from-sky-500 to-blue-500',
      learnMoreUrl: 'https://ziontechgroup.com/services/cloud-transformation',
      ctaUrl: 'https://ziontechgroup.com/contact'
    },
    // Data & Analytics Services
    {
      id: 'ai-data-analytics-platform',
      title: 'AI Data Analytics Platform',
      description: 'Comprehensive data analytics platform with AI-powered insights, visualization, and predictive modeling.',
      category: 'data-analytics',
      features: [
        'Real-time data processing',
        'AI-powered insights generation',
        'Interactive dashboards',
        'Predictive modeling',
        'Data governance & security',
        'Multi-source data integration'
      ],
      pricing: '$4,000 - $20,000/month',
      benefits: [
        'Unlock hidden data insights',
        'Improve decision-making speed',
        'Automated reporting',
        'Real-time business intelligence',
        'Scalable analytics infrastructure'
      ],
      icon: BarChart3,
      color: 'from-emerald-500 to-teal-500',
      learnMoreUrl: 'https://ziontechgroup.com/services/ai-data-analytics',
      ctaUrl: 'https://ziontechgroup.com/contact'
    },
    // IoT & Edge Services
    {
      id: 'iot-edge-intelligence-platform',
      title: 'IoT Edge Intelligence Platform',
      description: 'Intelligent IoT platform with edge computing capabilities for real-time data processing and analytics.',
      category: 'iot-edge',
      features: [
        'Edge AI processing',
        'Real-time data analytics',
        'Device management & monitoring',
        'Predictive maintenance',
        'Security & compliance',
        'Scalable IoT infrastructure'
      ],
      pricing: '$6,000 - $35,000/month',
      benefits: [
        'Reduce latency by 90%',
        'Lower bandwidth costs',
        'Real-time decision making',
        'Enhanced security',
        'Scalable IoT operations'
      ],
      icon: Cpu,
      color: 'from-orange-500 to-red-500',
      learnMoreUrl: 'https://ziontechgroup.com/services/iot-edge-platform',
      ctaUrl: 'https://ziontechgroup.com/contact'
    },
    // Blockchain & Web3 Services
    {
      id: 'blockchain-web3-solutions',
      title: 'Blockchain & Web3 Solutions',
      description: 'Comprehensive blockchain development and Web3 integration services for modern applications.',
      category: 'blockchain',
      features: [
        'Smart contract development',
        'DeFi platform development',
        'NFT marketplace creation',
        'Web3 integration',
        'Blockchain consulting',
        'Security auditing'
      ],
      pricing: '$10,000 - $100,000',
      benefits: [
        'Transparent & secure transactions',
        'Reduced intermediary costs',
        'Enhanced data integrity',
        'Innovative business models',
        'Future-proof technology'
      ],
      icon: Network,
      color: 'from-purple-500 to-violet-500',
      learnMoreUrl: 'https://ziontechgroup.com/services/blockchain-web3',
      ctaUrl: 'https://ziontechgroup.com/contact'
    },
    // FinTech Solutions
    {
      id: 'fintech-innovation-platform',
      title: 'FinTech Innovation Platform',
      description: 'Next-generation financial technology platform with AI-powered risk assessment and automated compliance.',
      category: 'fintech',
      features: [
        'AI risk assessment',
        'Automated compliance',
        'Real-time fraud detection',
        'Digital payment solutions',
        'Regulatory reporting',
        'Financial analytics'
      ],
      pricing: '$5,000 - $30,000/month',
      benefits: [
        'Reduce fraud by 95%',
        'Automate compliance processes',
        'Improve risk assessment',
        'Enhanced customer experience',
        'Regulatory compliance'
      ],
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      learnMoreUrl: 'https://ziontechgroup.com/services/fintech-platform',
      ctaUrl: 'https://ziontechgroup.com/contact'
    }
  ];

  // Calculate category counts
  categories.forEach(cat => {
    cat.count = services.filter(service => 
      cat.id === 'all' || service.category === cat.id
    ).length;
  });

  const filteredServices = services.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Zion Tech Group</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Future Technology Solutions</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
              <a href="/services" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Services</a>
              <a href="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
              <a href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Comprehensive
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {' '}Technology Services
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              Discover our cutting-edge AI, IT, and micro SAAS solutions designed to transform your business and drive innovation.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{category.name}</span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
=======
  Globe, 
  Zap, 
  Shield, 
  Cloud, 
  Database, 
  Lock, 
  Cpu, 
  Network,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp
} from 'lucide-react';

const ComprehensiveServices2029: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Globe, count: 150 },
    { id: 'ai', name: 'AI Services', icon: Zap, count: 45 },
    { id: 'it', name: 'IT Infrastructure', icon: Shield, count: 38 },
    { id: 'cloud', name: 'Cloud Solutions', icon: Cloud, count: 32 },
    { id: 'security', name: 'Cybersecurity', icon: Lock, count: 28 },
    { id: 'data', name: 'Data Analytics', icon: Database, count: 25 },
    { id: 'micro-saas', name: 'Micro SAAS', icon: Cpu, count: 22 }
  ];

  const featuredServices = [
    {
      id: 1,
      title: "AI-Powered Business Intelligence",
      description: "Advanced analytics and insights powered by machine learning algorithms",
      category: "ai",
      price: "$2,500/month",
      features: ["Real-time analytics", "Predictive modeling", "Custom dashboards", "API integration"],
      icon: Zap,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Cloud Infrastructure Management",
      description: "Comprehensive cloud infrastructure optimization and management",
      category: "cloud",
      price: "$1,800/month",
      features: ["Multi-cloud support", "Cost optimization", "Security compliance", "24/7 monitoring"],
      icon: Cloud,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Zero-Trust Security Framework",
      description: "Modern security architecture with continuous verification",
      category: "security",
      price: "$3,200/month",
      features: ["Identity verification", "Network segmentation", "Threat detection", "Compliance reporting"],
      icon: Shield,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Micro SAAS Platform",
      description: "Scalable microservices architecture for rapid deployment",
      category: "micro-saas",
      price: "$1,500/month",
      features: ["Modular design", "Auto-scaling", "API-first approach", "Developer tools"],
      icon: Cpu,
      color: "from-orange-500 to-red-500"
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? featuredServices 
    : featuredServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Comprehensive Services 2029
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Discover our complete portfolio of cutting-edge technology solutions designed to transform your business
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/micro-saas-innovation-hub-2029"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Explore Micro SAAS
              </a>
              <a 
                href="/it-infrastructure-innovation-2029"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                IT Infrastructure
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
                <span className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full text-sm">
                  {category.count}
                </span>
              </button>
            ))}
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
<<<<<<< HEAD
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
<<<<<<< HEAD
                className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 overflow-hidden ${
                  service.featured ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {/* Service Header */}
                <div className={`p-6 bg-gradient-to-r ${service.color} text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <service.icon className="w-8 h-8" />
                    {service.featured && (
                      <Star className="w-6 h-6 text-yellow-300" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/90 text-sm">{service.description}</p>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <TrendingUp className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Pricing</h4>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{service.pricing}</p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={service.ctaUrl || '/contact'}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Get Started
                    </a>
                    {service.learnMoreUrl && (
                      <a
                        href={service.learnMoreUrl}
                        className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-center py-3 px-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300"
                      >
                        Learn More
                      </a>
                    )}
=======
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <div className="flex items-center justify-between">
                    <service.icon className="w-12 h-12" />
                    <span className="text-2xl font-bold">{service.price}</span>
                  </div>
                  <h3 className="text-xl font-bold mt-4">{service.title}</h3>
                  <p className="text-blue-100 mt-2">{service.description}</p>
                </div>
                
                <div className="p-6">
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Category: {serviceCategories.find(c => c.id === service.category)?.name}
                    </span>
                    <a 
                      href={`/${service.category}-services`}
                      className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
<<<<<<< HEAD

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No services found</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Try adjusting your search terms or category filter
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl lg:text-4xl font-bold text-white mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
          >
            Let our team of experts help you implement cutting-edge technology solutions that drive growth and innovation.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call +1 302 464 0950
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
              <p className="text-gray-400 text-sm">
                Pioneering the future of technology with AI-powered solutions that transform businesses and empower innovation.
              </p>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/services" className="hover:text-white transition-colors">All Services</a></li>
                <li><a href="/innovative-services-showcase-2029" className="hover:text-white transition-colors">Innovative Services</a></li>
                <li><a href="/comprehensive-pricing-guide-2029" className="hover:text-white transition-colors">Pricing Guide</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Contact</h4>
              <div className="text-sm text-gray-400 space-y-2">
                <p>+1 302 464 0950</p>
                <p>kleber@ziontechgroup.com</p>
                <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
=======
        </div>
      </section>

      {/* Innovation Hub Links */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Explore Our Innovation Hubs
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Dive deeper into specialized technology domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">AI Innovation Hub</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Discover cutting-edge AI solutions and autonomous systems
              </p>
              <a 
                href="/ai-services-innovation-2029"
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                <span>Explore AI Hub</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Micro SAAS Hub</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Scalable microservices and SAAS solutions for modern businesses
              </p>
              <a 
                href="/micro-saas-innovation-hub-2029"
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                <span>Explore SAAS Hub</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">IT Infrastructure</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Robust infrastructure solutions for enterprise-scale operations
              </p>
              <a 
                href="/it-infrastructure-innovation-2029"
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                <span>Explore Infrastructure</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our comprehensive services can drive innovation and growth for your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started
            </a>
            <a 
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call +1 302 464 0950
            </a>
          </div>
          <div className="mt-8 text-gray-400">
            <p>Email: kleber@ziontechgroup.com</p>
            <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
    </div>
  );
};

export default ComprehensiveServices2029;
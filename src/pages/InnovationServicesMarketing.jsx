import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Users, 
  BarChart3, 
  Cpu,
  Network,
  Code,
  Search,
  MessageSquare,
  FileText,
  TrendingUp,
  Target,
  Rocket,
  Atom,
  Mail,
  Phone,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Eye,
  Lock,
  Globe,
  Database,
  Palette,
  Camera,
  Video,
  Music,
  BookOpen,
  Calendar,
  ExternalLink,
  Sparkles,
  Gauge,
  Workflow,
  Heart,
  Truck,
  Building,
  Server,
  Smartphone,
  Clock,
  Satellite,
  TestTube,
  Beaker,
  Pill,
  Stethoscope,
  Syringe,
  HeartPulse,
  Activity,
  Thermometer,
  Droplet,
  EyeOff,
  Key,
  Fingerprint,
  Scan,
  QrCode,
  CreditCard,
  Wallet,
  PiggyBank,
  TrendingDown,
  BarChart,
  PieChart,
  LineChart,
  ScatterChart,
  AreaChart,
  CandlestickChart,
  GanttChart,
  Kanban,
  Timer,
  Stopwatch,
  Warehouse,
  Factory,
  Package,
  Navigation,
  Route,
  Compass,
  Leaf,
  Sun,
  Wind,
  Droplets,
  Mountain,
  TreePine,
  Recycle,
  Lightbulb,
  Battery,
  Wifi,
  Bluetooth,
  Radio,
  Telescope,
  Microscope,
  Gamepad2,
  Car,
  Plane,
  Ship,
  Train
} from 'lucide-react';

const InnovationServicesMarketing = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: 0 },
    { id: 'ai', name: 'AI Services', icon: Brain, count: 0 },
    { id: 'it', name: 'IT Services', icon: Cpu, count: 0 },
    { id: 'saas', name: 'Micro SAAS', icon: Cloud, count: 0 },
    { id: 'security', name: 'Security', icon: Shield, count: 0 },
    { id: 'quantum', name: 'Quantum Tech', icon: Atom, count: 0 },
    { id: 'emerging', name: 'Emerging Tech', icon: Rocket, count: 0 }
  ];

  const innovationServices = [
    // AI Services
    {
      id: 'ai-quantum-hybrid-platform',
      name: 'AI-Quantum Hybrid Platform',
      category: 'ai',
      description: 'Revolutionary platform combining artificial intelligence with quantum computing for unprecedented computational power.',
      features: ['Quantum Neural Networks', 'Quantum Algorithm Optimization', 'Real-time Quantum Processing', 'Quantum-Safe Security', 'Quantum Analytics', 'Hybrid Computing'],
      pricing: { monthly: 999, yearly: 9999, enterprise: 'Custom' },
      icon: Atom,
      link: '/services/ai-quantum-hybrid-platform',
      popular: true,
      highlights: ['1000x faster computations', 'Quantum-safe security', 'Hybrid quantum-classical AI'],
      rating: 4.9,
      reviews: 156,
      badge: 'Revolutionary',
      color: 'from-purple-600 to-pink-700'
    },
    {
      id: 'ai-cybersecurity-platform',
      name: 'AI-Powered Cybersecurity Platform',
      category: 'ai',
      description: 'Next-generation cybersecurity powered by artificial intelligence and machine learning algorithms.',
      features: ['AI Threat Detection', 'Zero-Day Protection', 'Network Security', 'Data Encryption', 'Continuous Monitoring', 'Automated Response'],
      pricing: { monthly: 399, yearly: 3999, enterprise: 'Custom' },
      icon: Shield,
      link: '/services/ai-cybersecurity-platform',
      popular: true,
      highlights: ['99.9% threat blocking', '< 1 second response time', 'AI-powered automation'],
      rating: 4.9,
      reviews: 289,
      badge: 'Enterprise',
      color: 'from-red-600 to-orange-700'
    },
    {
      id: 'ai-healthcare-platform',
      name: 'AI Healthcare Analytics Platform',
      category: 'ai',
      description: 'Healthcare data analytics and patient outcome prediction using advanced AI algorithms.',
      features: ['Patient Analytics', 'Treatment Optimization', 'Risk Assessment', 'Clinical Decision Support', 'Population Health', 'Predictive Modeling'],
      pricing: { monthly: 499, yearly: 4999, enterprise: 'Custom' },
      icon: Brain,
      link: '/services/ai-healthcare-analytics-platform',
      popular: false,
      highlights: ['Patient outcome prediction', 'Treatment optimization', 'Population health analytics'],
      rating: 4.8,
      reviews: 234,
      badge: 'Healthcare',
      color: 'from-green-600 to-blue-700'
    },
    {
      id: 'ai-supply-chain-optimization',
      name: 'AI Supply Chain Optimization Platform',
      category: 'ai',
      description: 'Intelligent supply chain management with predictive analytics and real-time optimization.',
      features: ['Demand Forecasting', 'Route Optimization', 'Inventory Management', 'Risk Assessment', 'Real-time Analytics', 'Global Optimization'],
      pricing: { monthly: 299, yearly: 2999, enterprise: 'Custom' },
      icon: Truck,
      link: '/services/ai-supply-chain-optimization',
      popular: true,
      highlights: ['30% cost reduction', '95% forecast accuracy', '40% efficiency increase'],
      rating: 4.8,
      reviews: 178,
      badge: 'Logistics',
      color: 'from-blue-600 to-cyan-700'
    },
    {
      id: 'ai-autonomous-business-operations-platform',
      name: 'AI Autonomous Business Operations Platform',
      category: 'ai',
      description: 'Fully automated business processes with intelligent decision making and resource optimization.',
      features: ['Process Automation', 'Decision Intelligence', 'Resource Optimization', 'Performance Monitoring', 'Predictive Analytics', 'Autonomous Operations'],
      pricing: { monthly: 599, yearly: 5999, enterprise: 'Custom' },
      icon: Zap,
      link: '/services/ai-autonomous-business-operations-platform',
      popular: true,
      highlights: ['100% process automation', 'Intelligent decision making', 'Resource optimization'],
      rating: 4.8,
      reviews: 198,
      badge: 'Autonomous',
      color: 'from-emerald-600 to-teal-700'
    },

    // IT Services
    {
      id: 'it-infrastructure',
      name: 'IT Infrastructure Management',
      category: 'it',
      description: 'Comprehensive IT infrastructure design, deployment, and management solutions.',
      features: ['Network Design', 'Cloud Migration', 'Server Management', 'Monitoring', 'Performance Optimization', 'Capacity Planning'],
      pricing: { monthly: 199, yearly: 1999, enterprise: 'Custom' },
      icon: Cpu,
      link: '/it-services',
      popular: false,
      highlights: ['Infrastructure monitoring', 'Performance optimization', 'Capacity planning'],
      rating: 4.7,
      reviews: 167,
      badge: 'Infrastructure',
      color: 'from-gray-600 to-slate-700'
    },
    {
      id: 'cloud-solutions',
      name: 'Cloud Solutions & DevOps',
      category: 'it',
      description: 'Cloud-native solutions with automated DevOps practices and infrastructure as code.',
      features: ['Cloud Architecture', 'CI/CD Pipelines', 'Containerization', 'Monitoring', 'Auto-scaling', 'Security Scanning'],
      pricing: { monthly: 249, yearly: 2499, enterprise: 'Custom' },
      icon: Cloud,
      link: '/cloud-solutions',
      popular: false,
      highlights: ['CI/CD automation', 'Infrastructure as code', 'Auto-scaling'],
      rating: 4.8,
      reviews: 234,
      badge: 'DevOps',
      color: 'from-blue-600 to-indigo-700'
    },
    {
      id: 'digital-transformation',
      name: 'Digital Transformation Consulting',
      category: 'it',
      description: 'Strategic digital transformation planning and implementation for modern businesses.',
      features: ['Strategy Development', 'Process Optimization', 'Technology Selection', 'Change Management', 'ROI Analysis', 'Implementation Support'],
      pricing: { monthly: 399, yearly: 3999, enterprise: 'Custom' },
      icon: Rocket,
      link: '/digital-transformation',
      popular: false,
      highlights: ['Strategic planning', 'Process optimization', 'Change management'],
      rating: 4.6,
      reviews: 145,
      badge: 'Consulting',
      color: 'from-orange-600 to-red-700'
    },

    // Micro SAAS Services
    {
      id: 'micro-crm',
      name: 'Micro CRM Platform',
      category: 'saas',
      description: 'Lightweight CRM solution for small to medium businesses with essential features.',
      features: ['Contact Management', 'Sales Tracking', 'Email Integration', 'Reporting', 'Mobile App', 'API Access'],
      pricing: { monthly: 29, yearly: 299, enterprise: 'Custom' },
      icon: Users,
      link: '/services/micro-crm',
      popular: false,
      highlights: ['Easy to use', 'Affordable pricing', 'Essential features'],
      rating: 4.5,
      reviews: 89,
      badge: 'CRM',
      color: 'from-blue-600 to-cyan-700'
    },
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator Pro',
      category: 'ai',
      description: 'AI-powered content creation for marketing and communications with brand voice consistency.',
      features: ['Content Writing', 'SEO Optimization', 'Multi-language Support', 'Brand Voice', 'Content Templates', 'Quality Control'],
      pricing: { monthly: 49, yearly: 499, enterprise: 'Custom' },
      icon: FileText,
      link: '/services/ai-content-generator',
      popular: false,
      highlights: ['AI content creation', 'SEO optimization', 'Brand consistency'],
      rating: 4.4,
      reviews: 76,
      badge: 'Content AI',
      color: 'from-violet-600 to-purple-700'
    },
    {
      id: 'ai-seo-optimizer',
      name: 'AI SEO Optimizer',
      category: 'ai',
      description: 'Intelligent SEO optimization and keyword analysis using advanced AI algorithms.',
      features: ['Keyword Research', 'Content Optimization', 'Ranking Analysis', 'Competitor Insights', 'Performance Tracking', 'AI Recommendations'],
      pricing: { monthly: 39, yearly: 399, enterprise: 'Custom' },
      icon: Search,
      link: '/services/ai-powered-seo',
      popular: false,
      highlights: ['AI keyword research', 'Content optimization', 'Competitor analysis'],
      rating: 4.3,
      reviews: 65,
      badge: 'SEO AI',
      color: 'from-lime-600 to-green-700'
    },
    {
      id: 'ai-customer-support-automation',
      name: 'AI Customer Support Automation',
      category: 'ai',
      description: 'Automated customer support with intelligent response system and chatbot integration.',
      features: ['Chatbot Integration', 'Ticket Management', 'Knowledge Base', 'Analytics', 'Sentiment Analysis', 'Smart Routing'],
      pricing: { monthly: 79, yearly: 799, enterprise: 'Custom' },
      icon: MessageSquare,
      link: '/services/ai-customer-support-automation',
      popular: false,
      highlights: ['Intelligent chatbots', 'Smart ticket routing', 'Sentiment analysis'],
      rating: 4.5,
      reviews: 134,
      badge: 'Support AI',
      color: 'from-cyan-600 to-blue-700'
    },

    // Security Services
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Services',
      category: 'security',
      description: 'End-to-end cybersecurity solutions for modern businesses with comprehensive protection.',
      features: ['Security Audits', 'Penetration Testing', 'Incident Response', 'Training', 'Compliance', 'Threat Intelligence'],
      pricing: { monthly: 299, yearly: 2999, enterprise: 'Custom' },
      icon: Shield,
      link: '/services/cybersecurity',
      popular: true,
      highlights: ['Comprehensive protection', 'Expert team', '24/7 monitoring'],
      rating: 4.8,
      reviews: 234,
      badge: 'Security',
      color: 'from-red-600 to-orange-700'
    },
    {
      id: 'ai-cybersecurity-suite',
      name: 'AI Cybersecurity Suite',
      category: 'security',
      description: 'Comprehensive cybersecurity with AI-powered threat detection and response automation.',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Compliance', 'Behavioral Analysis', 'Risk Scoring'],
      pricing: { monthly: 199, yearly: 1999, enterprise: 'Custom' },
      icon: Shield,
      link: '/services/ai-cybersecurity-suite',
      popular: false,
      highlights: ['AI behavioral analysis', 'Automated threat response', 'Compliance automation'],
      rating: 4.7,
      reviews: 134,
      badge: 'AI Security',
      color: 'from-orange-600 to-red-700'
    },
    {
      id: 'zero-trust-network-architecture',
      name: 'Zero Trust Network Architecture',
      category: 'security',
      description: 'Zero trust security framework implementation for modern enterprise networks.',
      features: ['Identity Verification', 'Access Control', 'Network Segmentation', 'Monitoring', 'Threat Detection', 'Compliance'],
      pricing: { monthly: 249, yearly: 2499, enterprise: 'Custom' },
      icon: Lock,
      link: '/services/zero-trust-network-architecture',
      popular: false,
      highlights: ['Identity verification', 'Access control', 'Network segmentation'],
      rating: 4.6,
      reviews: 89,
      badge: 'Zero Trust',
      color: 'from-indigo-600 to-purple-700'
    },

    // Quantum Technology
    {
      id: 'quantum-computing-solutions',
      name: 'Quantum Computing Solutions',
      category: 'quantum',
      description: 'Next-generation quantum computing services for complex problem solving and optimization.',
      features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Scientific Computing', 'Research Support', 'Quantum Training'],
      pricing: { monthly: 999, yearly: 9999, enterprise: 'Custom' },
      icon: Atom,
      link: '/services/quantum-computing-solutions',
      popular: true,
      highlights: ['1000x faster computations', 'Quantum-safe security', 'Advanced algorithms'],
      rating: 4.9,
      reviews: 45,
      badge: 'Future Tech',
      color: 'from-purple-600 to-pink-700'
    },
    {
      id: 'quantum-cryptography',
      name: 'Quantum Cryptography Solutions',
      category: 'quantum',
      description: 'Quantum-safe cryptography for future-proof security in the quantum era.',
      features: ['Quantum Key Distribution', 'Post-Quantum Cryptography', 'Quantum Random Numbers', 'Secure Communication', 'Future-Proof Security', 'Quantum Networks'],
      pricing: { monthly: 599, yearly: 5999, enterprise: 'Custom' },
      icon: Lock,
      link: '/services/quantum-cryptography',
      popular: false,
      highlights: ['Quantum key distribution', 'Post-quantum crypto', 'Future-proof security'],
      rating: 4.8,
      reviews: 67,
      badge: 'Quantum Safe',
      color: 'from-purple-600 to-pink-700'
    },

    // Emerging Technology
    {
      id: 'blockchain-enterprise-solutions',
      name: 'Blockchain Enterprise Solutions',
      category: 'emerging',
      description: 'Enterprise blockchain solutions for business transformation and digital innovation.',
      features: ['Smart Contracts', 'Supply Chain', 'Identity Management', 'Compliance', 'DeFi Solutions', 'Tokenization'],
      pricing: { monthly: 399, yearly: 3999, enterprise: 'Custom' },
      icon: Lock,
      link: '/services/blockchain-enterprise-solutions',
      popular: false,
      highlights: ['Smart contracts', 'Supply chain', 'Identity management'],
      rating: 4.4,
      reviews: 78,
      badge: 'Blockchain',
      color: 'from-orange-600 to-red-700'
    },
    {
      id: 'digital-twin',
      name: 'Digital Twin Platform',
      category: 'emerging',
      description: 'Digital twin solutions for physical assets and processes with real-time monitoring.',
      features: ['3D Modeling', 'Real-time Monitoring', 'Predictive Analytics', 'Simulation', 'IoT Integration', 'Performance Optimization'],
      pricing: { monthly: 299, yearly: 2999, enterprise: 'Custom' },
      icon: Cpu,
      link: '/services/digital-twin',
      popular: false,
      highlights: ['3D modeling', 'Real-time monitoring', 'Predictive analytics'],
      rating: 4.5,
      reviews: 67,
      badge: 'Digital Twin',
      color: 'from-blue-600 to-indigo-700'
    },
    {
      id: 'space-tech',
      name: 'Space Technology Solutions',
      category: 'emerging',
      description: 'Innovative solutions for space industry applications and satellite technology.',
      features: ['Satellite Data', 'Space Analytics', 'Mission Planning', 'Research Support', 'Space Communications', 'Orbital Mechanics'],
      pricing: { monthly: 599, yearly: 5999, enterprise: 'Custom' },
      icon: Satellite,
      link: '/services/space-tech',
      popular: false,
      highlights: ['Satellite analytics', 'Mission planning', 'Space communications'],
      rating: 4.6,
      reviews: 34,
      badge: 'Space Tech',
      color: 'from-indigo-600 to-purple-700'
    },

    // Sustainability
    {
      id: 'sustainability',
      name: 'Sustainability Analytics Platform',
      category: 'emerging',
      description: 'Environmental impact measurement and optimization for sustainable business practices.',
      features: ['Carbon Tracking', 'ESG Reporting', 'Sustainability Metrics', 'Goal Setting', 'Impact Assessment', 'Green Certification'],
      pricing: { monthly: 99, yearly: 999, enterprise: 'Custom' },
      icon: Leaf,
      link: '/services/sustainability',
      popular: false,
      highlights: ['Carbon footprint tracking', 'ESG reporting', 'Green certification'],
      rating: 4.4,
      reviews: 78,
      badge: 'Green Tech',
      color: 'from-green-600 to-teal-700'
    },
    {
      id: 'green-it',
      name: 'Green IT Solutions',
      category: 'emerging',
      description: 'Sustainable IT solutions for environmental responsibility and energy efficiency.',
      features: ['Energy Optimization', 'Carbon Footprint', 'Sustainable Hardware', 'Green Cloud', 'E-waste Management', 'Renewable Energy'],
      pricing: { monthly: 149, yearly: 1499, enterprise: 'Custom' },
      icon: Globe,
      link: '/services/green-it',
      popular: false,
      highlights: ['Energy optimization', 'Sustainable hardware', 'Green cloud'],
      rating: 4.3,
      reviews: 45,
      badge: 'Eco IT',
      color: 'from-emerald-600 to-green-700'
    }
  ];

  // Calculate category counts
  useEffect(() => {
    categories.forEach(cat => {
      if (cat.id === 'all') {
        cat.count = innovationServices.length;
      } else {
        cat.count = innovationServices.filter(service => service.category === cat.id).length;
      }
    });
  }, []);

  const filteredServices = innovationServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Innovation Services Marketing
            </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Innovation Services Marketing
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto mb-8"
          >
            Discover our comprehensive portfolio of innovative micro SAAS, IT services, and AI solutions designed to transform your business and drive innovation
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="text-white font-semibold">{innovationServices.length}+ Innovation Services</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="text-white font-semibold">AI-Powered Solutions</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="text-white font-semibold">Enterprise Ready</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search innovation services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {service.popular && (
                <div className="absolute -top-3 left-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Popular
                </div>
              )}

              {/* Service Header */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex flex-col items-end">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      service.badge === 'Revolutionary' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' :
                      service.badge === 'Enterprise' ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white' :
                      service.badge === 'Healthcare' ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white' :
                      service.badge === 'Logistics' ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white' :
                      'bg-gradient-to-r from-gray-500 to-slate-500 text-white'
                    }`}>
                      {service.badge}
                    </span>
                    <div className="flex items-center mt-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300 ml-1">{service.rating}</span>
                      <span className="text-xs text-gray-400 ml-1">({service.reviews})</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {service.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-blue-300 mb-3">Key Highlights</h4>
                <div className="space-y-2">
                  {service.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-blue-300 mb-3">Features</h4>
                <div className="grid grid-cols-1 gap-2">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-sm text-gray-400">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>
              </div>

              {/* Pricing and CTA */}
              <div className="border-t border-blue-500/20 pt-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-2xl font-bold text-white">${service.pricing.monthly}</div>
                    <div className="text-sm text-gray-400">per month</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">Yearly</div>
                    <div className="text-lg font-semibold text-white">
                      ${service.pricing.yearly}
                    </div>
                  </div>
                </div>
                <Link
                  to={service.link}
                  className="w-full block text-center py-3 px-6 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group-hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Innovate?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get in touch with our innovation experts to discuss how our cutting-edge services can transform your business and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center gap-2 bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
          <div className="mt-6 text-blue-100">
            <p className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" />
              364 E Main St STE 1008, Middletown DE 19709
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovationServicesMarketing;
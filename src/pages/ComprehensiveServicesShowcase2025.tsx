import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  Globe, 
  Cpu, 
  Lock, 
  Heart, 
  Users, 
  ShoppingCart, 
  BookOpen, 
  MessageCircle, 
  HelpCircle, 
  DollarSign, 
  Gauge, 
  Workflow, 
  Atom, 
  Star, 
  Target, 
  TrendingUp, 
  Award, 
  Code, 
  Truck, 
  Building, 
  BarChart3, 
  PenTool, 
  Eye, 
  Server, 
  Smartphone, 
  Database, 
  Network, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  Satellite, 
  FileText,
  Zap,
  Palette,
  Camera,
  Video,
  Music,
  Gamepad2,
  Car,
  Plane,
  Ship,
  Train,
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
  Flask,
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
  Calendar,
  Timer,
  Stopwatch,
  Warehouse,
  Factory,
  Package,
  Navigation,
  Route,
  Compass,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const comprehensiveServices2025 = [
    // AI-Quantum Hybrid Platform
    {
      id: 'ai-quantum-hybrid-platform',
      name: 'AI-Quantum Hybrid Platform',
      description: 'Revolutionary platform combining artificial intelligence with quantum computing for unprecedented computational power.',
      category: 'ai-quantum',
      price: '$5,000/month',
      features: ['Quantum Neural Networks', 'Quantum Algorithm Optimization', 'Real-time Quantum Processing', 'Quantum-Safe Security', 'Quantum Analytics', 'Hybrid Computing'],
      icon: Atom,
      badge: 'Revolutionary',
      color: 'from-purple-600 to-pink-700',
      link: '/services/AI-Quantum-Hybrid-Platform',
      marketPrice: '$6,500/month',
      savings: '23%',
      rating: 4.9,
      reviews: 156,
      highlights: ['1000x faster computations', 'Quantum-safe security', 'Hybrid quantum-classical AI']
    },

    // AI-Powered Cybersecurity Platform
    {
      id: 'ai-cybersecurity-platform',
      name: 'AI-Powered Cybersecurity Platform',
      description: 'Next-generation cybersecurity powered by artificial intelligence, providing proactive threat detection and automated response.',
      category: 'cybersecurity',
      price: '$2,500/month',
      features: ['AI Threat Detection', 'Zero-Day Protection', 'Network Security', 'Data Encryption', 'Continuous Monitoring', 'Automated Response'],
      icon: Shield,
      badge: 'Enterprise',
      color: 'from-red-600 to-orange-700',
      link: '/services/AI-Cybersecurity-Platform',
      marketPrice: '$3,200/month',
      savings: '22%',
      rating: 4.9,
      reviews: 289,
      highlights: ['99.9% threat blocking', '< 1 second response time', 'AI-powered automation']
    },

    // AI-Powered Healthcare Platform
    {
      id: 'ai-healthcare-platform',
      name: 'AI-Powered Healthcare Platform',
      description: 'Revolutionary healthcare technology combining AI with medical expertise for superior patient care and diagnostics.',
      category: 'healthcare',
      price: '$3,500/month',
      features: ['AI Diagnostic Assistant', 'Predictive Healthcare', 'Virtual Health Monitoring', 'HIPAA Compliant Security', 'Healthcare Analytics', 'Automated Workflows'],
      icon: Heart,
      badge: 'Healthcare',
      color: 'from-green-600 to-blue-700',
      link: '/services/AI-Healthcare-Platform',
      marketPrice: '$4,500/month',
      savings: '22%',
      rating: 4.8,
      reviews: 234,
      highlights: ['95% diagnostic accuracy', '25% cost reduction', 'HIPAA compliance']
    },

    // AI-Powered Supply Chain Optimization
    {
      id: 'ai-supply-chain-optimization',
      name: 'AI-Powered Supply Chain Optimization',
      description: 'Revolutionary supply chain technology combining AI with logistics expertise for unprecedented efficiency and cost savings.',
      category: 'supply-chain',
      price: '$2,800/month',
      features: ['AI Demand Forecasting', 'Route Optimization', 'Inventory Management', 'Global Supply Chain', 'Real-time Analytics', 'Automated Operations'],
      icon: Truck,
      badge: 'Logistics',
      color: 'from-blue-600 to-cyan-700',
      link: '/services/AI-Supply-Chain-Optimization',
      marketPrice: '$3,600/month',
      savings: '22%',
      rating: 4.8,
      reviews: 178,
      highlights: ['30% cost reduction', '95% forecast accuracy', '40% efficiency increase']
    },

    // AI Content Marketing Suite
    {
      id: 'ai-content-marketing-suite',
      name: 'AI Content Marketing Suite',
      description: 'Complete content creation, optimization, and distribution platform powered by advanced AI.',
      category: 'ai-services',
      price: '$1,900/month',
      features: ['Content Creation', 'SEO Optimization', 'Social Media Management', 'Analytics Dashboard', 'Multi-platform Publishing'],
      icon: PenTool,
      badge: 'Marketing',
      color: 'from-pink-600 to-rose-700',
      link: '/services/ai-content-marketing-suite',
      marketPrice: '$2,500/month',
      savings: '24%',
      rating: 4.7,
      reviews: 94,
      highlights: ['AI-powered content', 'SEO optimization', 'Multi-platform publishing']
    },

    // AI Customer Support Automation
    {
      id: 'ai-customer-support-automation',
      name: 'AI Customer Support Automation',
      description: 'Intelligent customer service automation with chatbots, ticket routing, and sentiment analysis.',
      category: 'ai-services',
      price: '$1,600/month',
      features: ['Smart Chatbots', 'Ticket Routing', 'Sentiment Analysis', 'Knowledge Base', 'Performance Metrics'],
      icon: MessageCircle,
      badge: 'Support',
      color: 'from-cyan-600 to-blue-700',
      link: '/services/ai-customer-support-automation',
      marketPrice: '$2,100/month',
      savings: '24%',
      rating: 4.8,
      reviews: 203,
      highlights: ['Smart chatbots', 'Sentiment analysis', 'Automated routing']
    },

    // AI Project Management Platform
    {
      id: 'ai-project-management',
      name: 'AI Project Management Platform',
      description: 'Intelligent project planning, resource allocation, and risk management with AI insights.',
      category: 'ai-services',
      price: '$2,300/month',
      features: ['Smart Planning', 'Resource Optimization', 'Risk Management', 'Team Collaboration', 'Progress Tracking'],
      icon: Workflow,
      badge: 'Management',
      color: 'from-orange-600 to-red-700',
      link: '/services/ai-project-management',
      marketPrice: '$2,900/month',
      savings: '21%',
      rating: 4.9,
      reviews: 178,
      highlights: ['AI-powered planning', 'Risk management', 'Resource optimization']
    },

    // Cloud DevOps Platform
    {
      id: 'cloud-devops-platform',
      name: 'Cloud DevOps Automation Platform',
      description: 'Comprehensive DevOps automation with CI/CD pipelines, infrastructure as code, and monitoring.',
      category: 'it-infrastructure',
      price: '$3,200/month',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Alerting', 'Security Scanning', 'Auto-scaling'],
      icon: Cloud,
      badge: 'DevOps',
      color: 'from-blue-600 to-indigo-700',
      link: '/services/cloud-devops',
      marketPrice: '$4,100/month',
      savings: '22%',
      rating: 4.9,
      reviews: 234,
      highlights: ['CI/CD automation', 'Infrastructure as code', 'Auto-scaling']
    },

    // IT Infrastructure Management
    {
      id: 'it-infrastructure-management',
      name: 'IT Infrastructure Management Suite',
      description: 'Complete IT infrastructure monitoring, management, and optimization platform.',
      category: 'it-infrastructure',
      price: '$2,800/month',
      features: ['Infrastructure Monitoring', 'Performance Optimization', 'Capacity Planning', 'Security Management', 'Backup & Recovery'],
      icon: Server,
      badge: 'Infrastructure',
      color: 'from-gray-600 to-slate-700',
      link: '/services/it-infrastructure',
      marketPrice: '$3,500/month',
      savings: '20%',
      rating: 4.8,
      reviews: 167,
      highlights: ['Infrastructure monitoring', 'Performance optimization', 'Capacity planning']
    },

    // FinOps Cloud Cost Optimizer
    {
      id: 'finops-advisor',
      name: 'FinOps Cloud Cost Optimizer',
      description: 'Cloud cost optimization and financial operations management platform for enterprises.',
      category: 'micro-saas',
      price: '$1,200/month',
      features: ['Cost Optimization', 'Budget Management', 'Resource Tracking', 'Cost Allocation', 'Savings Recommendations'],
      icon: DollarSign,
      badge: 'FinOps',
      color: 'from-green-600 to-emerald-700',
      link: '/services/finops-advisor',
      marketPrice: '$1,600/month',
      savings: '25%',
      rating: 4.7,
      reviews: 76,
      highlights: ['Cost optimization', 'Budget management', 'Resource tracking']
    },

    // Zero Trust Network Access
    {
      id: 'zero-trust-network',
      name: 'Zero Trust Network Access Platform',
      description: 'Secure network access control with identity verification and continuous monitoring.',
      category: 'micro-saas',
      price: '$2,100/month',
      features: ['Identity Verification', 'Access Control', 'Continuous Monitoring', 'Threat Detection', 'Compliance Reporting'],
      icon: Lock,
      badge: 'Security',
      color: 'from-indigo-600 to-purple-700',
      link: '/services/zero-trust-network-access',
      marketPrice: '$2,700/month',
      savings: '22%',
      rating: 4.8,
      reviews: 134,
      highlights: ['Zero trust security', 'Identity verification', 'Continuous monitoring']
    },

    // Quantum Computing Solutions
    {
      id: 'quantum-computing-platform',
      name: 'Quantum Computing Solutions',
      description: 'Quantum computing services for optimization, cryptography, and scientific computing.',
      category: 'emerging-tech',
      price: '$5,000/month',
      features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Scientific Computing', 'Research Support'],
      icon: Atom,
      badge: 'Future',
      color: 'from-purple-600 to-pink-700',
      link: '/services/quantum-computing',
      marketPrice: '$6,500/month',
      savings: '23%',
      rating: 4.9,
      reviews: 45,
      highlights: ['Quantum algorithms', 'Optimization problems', 'Scientific computing']
    },

    // Edge Computing Platform
    {
      id: 'edge-computing-platform',
      name: 'Edge Computing Platform',
      description: 'Distributed edge computing platform for IoT, real-time processing, and low-latency applications.',
      category: 'emerging-tech',
      price: '$2,800/month',
      features: ['Edge Nodes', 'Real-time Processing', 'IoT Integration', 'Low Latency', 'Scalable Architecture'],
      icon: Cpu,
      badge: 'Edge',
      color: 'from-blue-600 to-cyan-700',
      link: '/services/edge-computing',
      marketPrice: '$3,600/month',
      savings: '22%',
      rating: 4.8,
      reviews: 123,
      highlights: ['Edge computing', 'Real-time processing', 'IoT integration']
    },

    // Enterprise Blockchain Platform
    {
      id: 'blockchain-platform',
      name: 'Enterprise Blockchain Platform',
      description: 'Scalable blockchain solutions for supply chain, finance, and digital identity management.',
      category: 'emerging-tech',
      price: '$3,200/month',
      features: ['Smart Contracts', 'Supply Chain Tracking', 'Digital Identity', 'Token Management', 'Consensus Mechanisms'],
      icon: Globe,
      badge: 'Blockchain',
      color: 'from-green-600 to-blue-700',
      link: '/services/blockchain',
      marketPrice: '$4,100/month',
      savings: '22%',
      rating: 4.7,
      reviews: 167,
      highlights: ['Smart contracts', 'Supply chain tracking', 'Digital identity']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Star, count: comprehensiveServices2025.length },
    { id: 'ai-quantum', name: 'AI-Quantum Hybrid', icon: Atom, count: comprehensiveServices2025.filter(s => s.category === 'ai-quantum').length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: comprehensiveServices2025.filter(s => s.category === 'cybersecurity').length },
    { id: 'healthcare', name: 'Healthcare', icon: Heart, count: comprehensiveServices2025.filter(s => s.category === 'healthcare').length },
    { id: 'supply-chain', name: 'Supply Chain', icon: Truck, count: comprehensiveServices2025.filter(s => s.category === 'supply-chain').length },
    { id: 'ai-services', name: 'AI Services', icon: Brain, count: comprehensiveServices2025.filter(s => s.category === 'ai-services').length },
    { id: 'it-infrastructure', name: 'IT Infrastructure', icon: Server, count: comprehensiveServices2025.filter(s => s.category === 'it-infrastructure').length },
    { id: 'micro-saas', name: 'Micro SaaS', icon: Code, count: comprehensiveServices2025.filter(s => s.category === 'micro-saas').length },
    { id: 'emerging-tech', name: 'Emerging Tech', icon: Rocket, count: comprehensiveServices2025.filter(s => s.category === 'emerging-tech').length }
  ];

  const filteredServices = comprehensiveServices2025.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              2025 Innovation Showcase
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Comprehensive Services Showcase
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover our complete portfolio of cutting-edge AI, cybersecurity, healthcare, supply chain, 
              and emerging technology solutions designed to transform your business.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Get Started Today
            </Link>
            <Link
              to="#services"
              className="inline-flex items-center px-8 py-4 rounded-lg border-2 border-purple-500 text-purple-300 font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              <Eye className="w-5 h-5 mr-2" />
              Explore Services
            </Link>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20"
          >
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-2xl mx-auto">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 bg-slate-800/80 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                      : 'bg-slate-800/80 text-gray-300 hover:bg-slate-700/80 border border-purple-500/30'
                  }`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.name}
                  <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {filteredServices.length} innovative services designed to transform your business
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${searchTerm}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/80 to-purple-800/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  {/* Service Header */}
                  <div className="mb-6">
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
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-purple-300 mb-3">Key Highlights</h4>
                    <div className="space-y-2">
                      {service.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center text-sm text-gray-300">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-purple-300 mb-3">Features</h4>
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
                  <div className="border-t border-purple-500/20 pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-2xl font-bold text-white">{service.price}</div>
                        <div className="text-sm text-gray-400 line-through">{service.marketPrice}</div>
                      </div>
                      <div className="text-right">
                        <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Save {service.savings}
                        </div>
                      </div>
                    </div>
                    <Link
                      to={service.link}
                      className="w-full block text-center py-3 px-6 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 group-hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 inline" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-300 mb-6">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchTerm('');
                }}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
              >
                View All Services
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose from our comprehensive portfolio of innovative services and start your transformation journey today
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-2 text-purple-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-2 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-2 text-purple-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <Link
                to="https://ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 rounded-lg border-2 border-purple-500 text-purple-300 font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                <Globe className="w-5 h-5 mr-2" />
                Visit Our Website
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesShowcase2025;

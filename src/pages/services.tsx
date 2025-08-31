import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Search, 
  Filter, 
  Star, 
  ArrowRight, 
  ChevronDown, 
  Brain, 
  Cpu, 
  Database, 
  Network, 
  Shield, 
  Rocket, 
  Users, 
  BarChart3, 
  Code, 
  Server, 
  Chip, 
  Globe, 
  Zap, 
  Lock, 
  ShieldCheck,
  TrendingUp,
  CheckCircle,
  Clock,
  DollarSign,
  Target,
  Handshake,
  Lightbulb,
  Atom,
  Cloud,
  Smartphone,
  Building,
  Heart,
  ShoppingCart,
  Eye,
  PenTool,
  Leaf,
  Satellite,
  FileText,
  Sparkles,
  Workflow,
  Truck
} from 'lucide-react';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    { id: 'all', name: 'All Services', count: 0, icon: Rocket, color: 'from-blue-500 to-cyan-500' },
    { id: 'ai', name: 'AI & Machine Learning', count: 0, icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'quantum', name: 'Quantum Computing', count: 0, icon: Atom, color: 'from-orange-500 to-red-500' },
    { id: 'it', name: 'IT Infrastructure', count: 0, icon: Server, color: 'from-green-500 to-emerald-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 0, icon: Shield, color: 'from-indigo-500 to-purple-500' },
    { id: 'cloud', name: 'Cloud & DevOps', count: 0, icon: Cloud, color: 'from-blue-500 to-indigo-500' },
    { id: 'saas', name: 'Micro SAAS', count: 0, icon: Code, color: 'from-cyan-500 to-blue-500' },
    { id: 'blockchain', name: 'Blockchain & Web3', count: 0, icon: Database, color: 'from-green-500 to-blue-500' }
  ];

  const services = [
    {
      id: 'ai-content-creation',
      name: 'AI Content Creation Studio Pro',
      description: 'Advanced AI-powered content creation platform for marketing, writing, and creative projects.',
      category: 'ai',
      icon: PenTool,
      color: 'from-purple-500 to-pink-500',
      features: ['Content Generation', 'SEO Optimization', 'Multi-language Support', 'Brand Voice Training'],
      price: 'Starting at $2,999/month',
      rating: 4.9,
      reviews: 127,
      href: '/services/ai-content-creation',
      featured: true
    },
    {
      id: 'quantum-trading',
      name: 'Quantum AI Trading Platform',
      description: 'Next-generation quantum computing-powered trading platform for financial markets.',
      category: 'quantum',
      icon: Atom,
      color: 'from-orange-500 to-red-500',
      features: ['Quantum Algorithms', 'Real-time Analysis', 'Risk Management', 'Multi-asset Support'],
      price: 'Starting at $5,999/month',
      rating: 4.8,
      reviews: 89,
      href: '/services/ai-powered-financial-trading-platform',
      featured: true
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity Suite',
      description: 'Comprehensive AI-powered cybersecurity solution for enterprise protection.',
      category: 'cybersecurity',
      icon: Shield,
      color: 'from-indigo-500 to-purple-500',
      features: ['Threat Detection', 'Automated Response', 'Compliance Management', '24/7 Monitoring'],
      price: 'Starting at $3,999/month',
      rating: 4.9,
      reviews: 156,
      href: '/services/ai-cybersecurity-suite',
      featured: true
    },
    {
      id: 'cloud-devops',
      name: 'Cloud DevOps Platform',
      description: 'Enterprise-grade cloud infrastructure and DevOps automation platform.',
      category: 'cloud',
      icon: Cloud,
      color: 'from-blue-500 to-indigo-500',
      features: ['Infrastructure as Code', 'CI/CD Pipelines', 'Monitoring & Alerting', 'Auto-scaling'],
      price: 'Starting at $2,499/month',
      rating: 4.7,
      reviews: 98,
      href: '/services/cloud-devops',
      featured: true
    },
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare Analytics Platform',
      description: 'Advanced healthcare analytics and patient care optimization using AI.',
      category: 'ai',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      features: ['Patient Analytics', 'Treatment Optimization', 'Predictive Diagnostics', 'HIPAA Compliance'],
      price: 'Starting at $4,999/month',
      rating: 4.8,
      reviews: 73,
      href: '/services/ai-healthcare-analytics-platform',
      featured: false
    },
    {
      id: 'blockchain-enterprise',
      name: 'Blockchain Enterprise Solutions',
      description: 'Enterprise blockchain solutions for supply chain, finance, and governance.',
      category: 'blockchain',
      icon: Database,
      color: 'from-green-500 to-blue-500',
      features: ['Smart Contracts', 'Supply Chain Tracking', 'Digital Identity', 'Regulatory Compliance'],
      price: 'Starting at $3,499/month',
      rating: 4.6,
      reviews: 64,
      href: '/services/blockchain-enterprise-solutions',
      featured: false
    },
    {
      id: 'iot-edge',
      name: 'IoT Edge Computing Platform',
      description: 'Intelligent edge computing platform for IoT devices and real-time processing.',
      category: 'it',
      icon: Cpu,
      color: 'from-green-500 to-emerald-500',
      features: ['Edge AI', 'Real-time Processing', 'Device Management', 'Data Analytics'],
      price: 'Starting at $2,999/month',
      rating: 4.7,
      reviews: 82,
      href: '/services/ai-iot-edge-computing-platform',
      featured: false
    },
    {
      id: 'micro-saas',
      name: 'Micro SAAS Solutions',
      description: 'Custom micro SAAS applications tailored to specific business needs.',
      category: 'saas',
      icon: Code,
      color: 'from-cyan-500 to-blue-500',
      features: ['Custom Development', 'Scalable Architecture', 'API Integration', 'User Management'],
      price: 'Starting at $1,999/month',
      rating: 4.8,
      reviews: 95,
      href: '/services/micro-saas-solutions',
      featured: false
    },
    // New Innovative Services
    {
      id: 'ai-autonomous-business',
      name: 'AI Autonomous Business Operations Platform',
      description: 'Revolutionary AI platform that autonomously manages and optimizes business operations.',
      category: 'ai',
      icon: Brain,
      color: 'from-indigo-500 to-purple-500',
      features: ['Autonomous Operations', 'AI Decision Making', 'Process Optimization', 'Predictive Analytics'],
      price: 'Starting at $8,999/month',
      rating: 4.9,
      reviews: 45,
      href: '/services/AI-Autonomous-Business-Operations-Platform',
      featured: true
    },
    {
      id: 'quantum-ai-cybersecurity',
      name: 'Quantum AI Cybersecurity Platform',
      description: 'Next-generation cybersecurity platform combining quantum computing and AI for ultimate protection.',
      category: 'cybersecurity',
      icon: Shield,
      color: 'from-purple-500 to-pink-500',
      features: ['Quantum Encryption', 'AI Threat Detection', 'Advanced Security', 'Real-time Protection'],
      price: 'Starting at $12,999/month',
      rating: 4.9,
      reviews: 38,
      href: '/services/Quantum-AI-Cybersecurity-Platform',
      featured: true
    },
    {
      id: 'ai-space-technology',
      name: 'AI Space Technology Platform',
      description: 'Cutting-edge AI platform for space exploration, satellite management, and space analytics.',
      category: 'ai',
      icon: Satellite,
      color: 'from-blue-500 to-cyan-500',
      features: ['Space Analytics', 'Satellite Management', 'AI Exploration', 'Space Data Processing'],
      price: 'Starting at $15,999/month',
      rating: 4.8,
      reviews: 29,
      href: '/services/AI-Space-Technology-Platform',
      featured: true
    },
    {
      id: 'ai-financial-technology',
      name: 'AI Financial Technology Platform',
      description: 'Advanced AI-powered fintech platform for banking, trading, and financial services.',
      category: 'ai',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      features: ['AI Trading', 'Risk Management', 'Financial Analytics', 'Regulatory Compliance'],
      price: 'Starting at $9,999/month',
      rating: 4.9,
      reviews: 52,
      href: '/services/AI-Financial-Technology-Platform',
      featured: true
    },
    {
      id: 'ai-data-governance',
      name: 'AI Data Governance Platform',
      description: 'Comprehensive AI-powered data governance platform for compliance and data quality management.',
      category: 'ai',
      icon: Database,
      color: 'from-indigo-500 to-purple-500',
      features: ['Data Compliance', 'Quality Management', 'Access Control', 'Real-time Monitoring'],
      price: 'Starting at $6,999/month',
      rating: 4.8,
      reviews: 67,
      href: '/services/AI-Data-Governance-Platform',
      featured: false
    },
    {
      id: 'ai-esg-compliance',
      name: 'AI ESG Compliance Platform',
      description: 'AI-powered environmental, social, and governance compliance platform for sustainable business.',
      category: 'ai',
      icon: Leaf,
      color: 'from-green-500 to-blue-500',
      features: ['ESG Analytics', 'Sustainability Tracking', 'Compliance Monitoring', 'Risk Assessment'],
      price: 'Starting at $7,999/month',
      rating: 4.8,
      reviews: 43,
      href: '/services/AI-ESG-Compliance-Platform',
      featured: false
    },
    {
      id: 'ai-digital-twin',
      name: 'AI Digital Twin Platform',
      description: 'Intelligent digital twin platform for IoT integration and predictive analytics.',
      category: 'ai',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500',
      features: ['Digital Twins', 'IoT Integration', 'Real-time Analytics', 'Predictive Maintenance'],
      price: 'Starting at $9,999/month',
      rating: 4.7,
      reviews: 58,
      href: '/services/AI-Digital-Twin-Platform',
      featured: false
    },
    {
      id: 'ai-edge-computing',
      name: 'AI Edge Computing Platform',
      description: 'Advanced edge computing platform for real-time processing and IoT integration.',
      category: 'it',
      icon: Network,
      color: 'from-orange-500 to-red-500',
      features: ['Edge Processing', 'IoT Integration', 'Real-time Analytics', 'Distributed Computing'],
      price: 'Starting at $8,999/month',
      rating: 4.8,
      reviews: 41,
      href: '/services/AI-Edge-Computing-Platform',
      featured: false
    },
    {
      id: 'ai-supply-chain-risk',
      name: 'AI Supply Chain Risk Management Platform',
      description: 'Comprehensive supply chain risk management platform with AI-powered analytics and monitoring.',
      category: 'ai',
      icon: Truck,
      color: 'from-teal-500 to-blue-500',
      features: ['Risk Assessment', 'Supply Chain Visibility', 'Predictive Analytics', 'Real-time Monitoring'],
      price: 'Starting at $9,999/month',
      rating: 4.8,
      reviews: 49,
      href: '/services/AI-Supply-Chain-Risk-Management-Platform',
      featured: false
    }
  ];

  // Calculate category counts
  React.useEffect(() => {
    const updatedCategories = categories.map(cat => ({
      ...cat,
      count: cat.id === 'all' ? services.length : services.filter(s => s.category === cat.id).length
    }));
    // Update categories state if needed
  }, [services]);

  const filteredServices = services.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'featured':
        return b.featured ? 1 : -1;
      case 'rating':
        return b.rating - a.rating;
      case 'price-low':
        return parseInt(a.price.match(/\d+/)?.[0] || '0') - parseInt(b.price.match(/\d+/)?.[0] || '0');
      case 'price-high':
        return parseInt(b.price.match(/\d+/)?.[0] || '0') - parseInt(a.price.match(/\d+/)?.[0] || '0');
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Services - Zion Tech Group"
        description="Explore our comprehensive range of AI, quantum computing, cybersecurity, and technology services designed to transform your business."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cutting-Edge{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Technology Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              From AI and quantum computing to cybersecurity and cloud solutions, we deliver 
              innovative technology services that drive business transformation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                Get Started
              </Link>
              <Link
                to="/solutions"
                className="px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-200"
              >
                View Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 appearance-none"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>

              {/* Sort */}
              <div className="relative">
                <TrendingUp className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 appearance-none"
                >
                  <option value="featured">Featured First</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300 group hover:scale-105"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  {service.featured && (
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                </div>

                {/* Service Content */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                  {service.name}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price and Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-cyan-400 font-semibold">{service.price}</div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-white">{service.rating}</span>
                    </div>
                    <span className="text-sm text-gray-400">({service.reviews})</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  to={service.href}
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 flex items-center justify-center space-x-2 group-hover:scale-105"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our team of experts is ready to help you implement cutting-edge technology solutions 
              that drive growth, efficiency, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                Get Started Today
              </Link>
              <Link
                to="/solutions"
                className="px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-200"
              >
                View Industry Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

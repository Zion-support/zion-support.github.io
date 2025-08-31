import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Heart, 
  Truck, 
  Atom, 
  Cpu, 
  Cloud, 
  ShoppingCart, 
  Zap, 
  Target, 
  Users, 
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Lightbulb,
  Rocket,
  Sparkles,
  BarChart3,
  FileText,
  MessageCircle,
  Search,
  Settings,
  Palette,
  Clock,
  DollarSign,
  Eye,
  Lock,
  Database,
  Network,
  Package,
  Warehouse,
  Route,
  BarChart,
  PieChart,
  LineChart,
  ScatterChart,
  AreaChart,
  GanttChart,
  Kanban,
  Calendar,
  Timer,
  Stopwatch,
  MapPin,
  Navigation,
  Phone,
  Mail,
  MapPin as MapPinIcon,
  Filter,
  Grid,
  List,
  Zap as ZapIcon
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Services', icon: Star, count: 0 },
    { id: 'ai', name: 'AI Services', icon: Brain, count: 0 },
    { id: 'it', name: 'IT Services', icon: Cpu, count: 0 },
    { id: 'saas', name: 'Micro SAAS', icon: Cloud, count: 0 }
  ];

  const allServices = [
    // AI Services
    {
      id: 'ai-quantum-hybrid',
      title: 'AI Quantum Hybrid Platform',
      description: 'Revolutionary quantum-classical hybrid computing platform combining quantum mechanics with classical computing orchestrated by AI algorithms.',
      category: 'ai',
      icon: Atom,
      href: '/services/ai-quantum-hybrid-platform',
      features: ['Quantum-Classical Hybrid Processing', 'AI-Powered Error Correction', 'Quantum Machine Learning'],
      pricing: 'Starting at $2,500/month',
      badge: 'Revolutionary',
      color: 'from-cyan-500 to-purple-600',
      rating: 4.9,
      reviews: 156
    },
    {
      id: 'ai-cybersecurity',
      title: 'AI Cybersecurity Platform',
      description: 'Next-generation cybersecurity powered by artificial intelligence providing real-time threat detection and automated response.',
      category: 'ai',
      icon: Shield,
      href: '/services/ai-cybersecurity-platform',
      features: ['AI-Powered Threat Detection', 'Intelligent Incident Response', 'Advanced Analytics & Reporting'],
      pricing: 'Starting at $1,200/month',
      badge: 'Enterprise',
      color: 'from-red-500 to-orange-600',
      rating: 4.9,
      reviews: 289
    },
    {
      id: 'ai-healthcare',
      title: 'AI Healthcare Platform',
      description: 'Transform healthcare delivery with AI-powered diagnosis, predictive analytics, and personalized medicine solutions.',
      category: 'ai',
      icon: Heart,
      href: '/services/ai-healthcare-platform',
      features: ['AI-Powered Diagnosis', 'Predictive Analytics', 'Medical Imaging AI'],
      pricing: 'Starting at $800/month',
      badge: 'Healthcare',
      color: 'from-green-500 to-blue-600',
      rating: 4.8,
      reviews: 234
    },
    {
      id: 'ai-supply-chain',
      title: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain optimization with AI-powered forecasting, route optimization, and real-time visibility.',
      category: 'ai',
      icon: Truck,
      href: '/services/ai-supply-chain-optimization',
      features: ['AI-Powered Demand Forecasting', 'Intelligent Route Optimization', 'Real-time Supply Chain Visibility'],
      pricing: 'Starting at $1,500/month',
      badge: 'Logistics',
      color: 'from-blue-500 to-cyan-600',
      rating: 4.8,
      reviews: 178
    },

    // IT Services
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and automated deployment solutions for modern applications.',
      category: 'it',
      icon: Cloud,
      href: '/services/cloud-devops',
      features: ['Cloud Migration', 'CI/CD Pipelines', 'Infrastructure as Code'],
      pricing: 'Starting at $2,000/month',
      badge: 'DevOps',
      color: 'from-blue-500 to-indigo-600',
      rating: 4.9,
      reviews: 234
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'Comprehensive digital transformation services to modernize your business operations.',
      category: 'it',
      icon: Rocket,
      href: '/services/digital-transformation',
      features: ['Process Automation', 'Legacy System Modernization', 'Change Management'],
      pricing: 'Starting at $5,000/month',
      badge: 'Transformation',
      color: 'from-purple-500 to-pink-600',
      rating: 4.9,
      reviews: 167
    },
    {
      id: 'it-infrastructure',
      title: 'IT Infrastructure',
      description: 'Enterprise-grade IT infrastructure solutions for reliable and scalable operations.',
      category: 'it',
      icon: Cpu,
      href: '/services/it-infrastructure',
      features: ['Network Design', 'Server Management', 'Storage Solutions'],
      pricing: 'Starting at $3,500/month',
      badge: 'Infrastructure',
      color: 'from-gray-500 to-slate-600',
      rating: 4.8,
      reviews: 189
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive cybersecurity services to protect your digital assets and ensure compliance.',
      category: 'it',
      icon: Lock,
      href: '/services/cybersecurity',
      features: ['Security Assessment', 'Penetration Testing', 'Compliance Management'],
      pricing: 'Starting at $2,500/month',
      badge: 'Security',
      color: 'from-red-500 to-pink-600',
      rating: 4.8,
      reviews: 145
    },

    // Micro SAAS Services
    {
      id: 'micro-crm',
      title: 'Micro CRM Platform',
      description: 'Lightweight customer relationship management solution for small to medium businesses.',
      category: 'saas',
      icon: Users,
      href: '/services/micro-crm',
      features: ['Contact Management', 'Lead Tracking', 'Sales Pipeline'],
      pricing: 'Starting at $99/month',
      badge: 'Business',
      color: 'from-green-500 to-emerald-600',
      rating: 4.7,
      reviews: 89
    },
    {
      id: 'employee-scheduling',
      title: 'Employee Scheduling SaaS',
      description: 'Intelligent employee scheduling and workforce management platform.',
      category: 'saas',
      icon: Calendar,
      href: '/services/employee-scheduling-saas',
      features: ['Smart Scheduling', 'Time Tracking', 'Shift Management'],
      pricing: 'Starting at $150/month',
      badge: 'HR',
      color: 'from-blue-500 to-cyan-600',
      rating: 4.8,
      reviews: 123
    },
    {
      id: 'returns-management',
      title: 'Returns Management SaaS',
      description: 'Streamlined returns and reverse logistics management solution.',
      category: 'saas',
      icon: Package,
      href: '/services/returns-management-saas',
      features: ['Returns Processing', 'Refund Management', 'Analytics'],
      pricing: 'Starting at $200/month',
      badge: 'E-commerce',
      color: 'from-orange-500 to-red-600',
      rating: 4.7,
      reviews: 67
    },
    {
      id: 'seo-auditor',
      title: 'SEO Auditor Tool',
      description: 'Comprehensive SEO analysis and optimization platform for digital marketers.',
      category: 'saas',
      icon: Search,
      href: '/services/seo-auditor',
      features: ['Technical SEO', 'Content Analysis', 'Competitor Research'],
      pricing: 'Starting at $79/month',
      badge: 'Marketing',
      color: 'from-purple-500 to-indigo-600',
      rating: 4.6,
      reviews: 156
    }
  ];

  // Update category counts
  categories.forEach(category => {
    if (category.id === 'all') {
      category.count = allServices.length;
    } else {
      category.count = allServices.filter(service => service.category === category.id).length;
    }
  });

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.badge.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008, Middletown DE 19709"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Our Services | Zion Tech Group"
        description="Explore our comprehensive portfolio of AI-powered solutions, IT services, and micro SAAS platforms. Transform your business with cutting-edge technology."
        keywords="AI services, IT services, micro SAAS, quantum computing, cybersecurity, healthcare AI, supply chain optimization, cloud DevOps, digital transformation"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full">
                <ZapIcon className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive portfolio of innovative AI-powered solutions, 
              enterprise IT services, and scalable micro SAAS platforms designed 
              to transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/comprehensive-services-showcase-2025"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-500 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View Full Showcase
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-60"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 8 + i * 0.4,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-2xl mx-auto">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 bg-slate-800/80 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'bg-slate-800/80 text-gray-300 hover:bg-slate-700/80 border border-slate-600'
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

            {/* View Mode Toggle */}
            <div className="flex justify-center">
              <div className="flex bg-slate-800/80 rounded-lg p-1 border border-slate-600">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'grid' 
                      ? 'bg-cyan-500 text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'list' 
                      ? 'bg-cyan-500 text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {selectedCategory === 'all' ? 'All Services' : `${categories.find(c => c.id === selectedCategory)?.name}`}
            </h2>
            <p className="text-gray-300">
              {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {filteredServices.length === 0 ? (
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
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                View All Services
              </button>
            </motion.div>
          ) : (
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 group ${
                    viewMode === 'list' ? 'flex items-start space-x-6' : ''
                  }`}
                >
                  {/* Service Icon */}
                  <div className={`${viewMode === 'list' ? 'flex-shrink-0' : 'mb-6'}`}>
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          service.badge === 'Revolutionary' ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white' :
                          service.badge === 'Enterprise' ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white' :
                          service.badge === 'Healthcare' ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white' :
                          service.badge === 'Logistics' ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white' :
                          service.badge === 'DevOps' ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white' :
                          service.badge === 'Transformation' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' :
                          service.badge === 'Infrastructure' ? 'bg-gradient-to-r from-gray-500 to-slate-500 text-white' :
                          service.badge === 'Security' ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white' :
                          service.badge === 'Business' ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' :
                          service.badge === 'HR' ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white' :
                          service.badge === 'E-commerce' ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white' :
                          'bg-gradient-to-r from-purple-500 to-indigo-500 text-white'
                        }`}>
                          {service.badge}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300 ml-1">{service.rating}</span>
                        <span className="text-xs text-gray-400 ml-1">({service.reviews})</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-300 mb-3">Key Features</h4>
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing and CTA */}
                    <div className="border-t border-slate-600/50 pt-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-cyan-400 font-semibold">{service.pricing}</div>
                        <Link
                          to={service.href}
                          className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                      <Link
                        to={service.href}
                        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r ${service.color} text-white hover:scale-105`}
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our comprehensive services can help you achieve your goals
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <MapPinIcon className="w-5 h-5 text-cyan-400" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Consultation
              </Link>
              <Link
                to="/comprehensive-services-showcase-2025"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-500 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View Full Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

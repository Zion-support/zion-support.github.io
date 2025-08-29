import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  ArrowRight, 
  Brain, 
  Shield, 
  TrendingUp, 
  Globe, 
  Heart, 
  Rocket, 
  Users, 
  PenTool, 
  Settings,
  Cloud,
  Lock,
  Atom,
  Cpu,
  Link,
  RefreshCw,
  Leaf,
  Server,
  Zap,
  Star,
  CheckCircle,
  DollarSign,
  Clock,
  Target,
  BarChart3,
  Award,
  Sparkles,
  Flame,
  Crown,
  Infinity,
  Gauge,
  GitFork,
  Code,
  Database,
  Network,
  Smartphone,
  Building,
  Factory,
  City,
  Car,
  Home,
  Truck,
  MessageCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import { COMPREHENSIVE_SERVICES_INDEX_2030, SERVICE_CATEGORIES_2030, SERVICE_STATISTICS_2030 } from '../data/comprehensiveServicesIndex2030';

export default function ComprehensiveServicesLanding2030() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Featured services for hero section
  const featuredServices = [
    {
      id: 'ai-autonomous-research-assistant-2030',
      name: 'AI Autonomous Research Assistant 2030',
      description: 'Fully autonomous research platform that conducts comprehensive market analysis, competitive intelligence, and trend forecasting without human intervention.',
      category: 'AI & Research',
      price: 2499,
      monthlyPrice: 249,
      setupTime: '2-4 weeks',
      roi: '800%',
      rating: 4.9,
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      features: ['Autonomous research', 'Real-time intelligence', 'Predictive forecasting', '90% time reduction']
    },
    {
      id: 'quantum-ai-trading-platform-2030',
      name: 'Quantum AI Trading Platform 2030',
      description: 'Next-generation trading platform combining quantum computing algorithms with AI to deliver unprecedented market prediction accuracy and execution speed.',
      category: 'AI & FinTech',
      price: 5999,
      monthlyPrice: 599,
      setupTime: '4-8 weeks',
      roi: '1200%',
      rating: 4.9,
      icon: TrendingUp,
      color: 'from-indigo-500 to-purple-500',
      features: ['Quantum computing', 'AI predictions', 'Real-time execution', '40% accuracy increase']
    },
    {
      id: 'ai-holographic-workspace-2030',
      name: 'AI Holographic Workspace 2030',
      description: 'Revolutionary 3D holographic workspace that transforms remote collaboration, design, and creative processes through immersive AI-powered interactions.',
      category: 'AI & Metaverse',
      price: 3499,
      monthlyPrice: 349,
      setupTime: '2-3 weeks',
      roi: '750%',
      rating: 4.7,
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      features: ['3D holographic workspace', 'AI spatial computing', 'Real-time collaboration', '75% efficiency increase']
    },
    {
      id: 'enterprise-cloud-migration-2030',
      name: 'Enterprise Cloud Migration 2030',
      description: 'Comprehensive cloud migration service that transforms legacy infrastructure to modern cloud platforms with zero downtime and maximum efficiency.',
      category: 'Cloud & DevOps',
      price: 25000,
      monthlyPrice: 2500,
      setupTime: '8-16 weeks',
      roi: '400%',
      rating: 4.9,
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      features: ['Zero-downtime migration', 'AI optimization', 'Multi-cloud strategy', '40% cost reduction']
    }
  ];

  // Service categories with icons and colors
  const categoryData = {
    'AI & Research': { icon: Brain, color: 'from-purple-500 to-pink-500' },
    'AI & Operations': { icon: Settings, color: 'from-gray-500 to-slate-500' },
    'AI & FinTech': { icon: TrendingUp, color: 'from-indigo-500 to-purple-500' },
    'AI & Metaverse': { icon: Globe, color: 'from-blue-500 to-cyan-500' },
    'AI & Healthcare': { icon: Heart, color: 'from-red-500 to-pink-500' },
    'AI & Space Tech': { icon: Rocket, color: 'from-purple-500 to-indigo-500' },
    'AI & Content': { icon: PenTool, color: 'from-blue-500 to-indigo-500' },
    'Cloud & DevOps': { icon: Cloud, color: 'from-blue-500 to-cyan-500' },
    'Cybersecurity': { icon: Shield, color: 'from-red-500 to-orange-500' },
    'Quantum Computing': { icon: Atom, color: 'from-indigo-500 to-purple-500' },
    'IoT & Edge Computing': { icon: Cpu, color: 'from-teal-500 to-cyan-500' },
    'Blockchain & Web3': { icon: Link, color: 'from-yellow-500 to-orange-500' },
    'Digital Twin': { icon: RefreshCw, color: 'from-blue-500 to-indigo-500' },
    'Space Technology': { icon: Rocket, color: 'from-indigo-500 to-purple-500' },
    'Sustainable Technology': { icon: Leaf, color: 'from-green-500 to-teal-500' },
    'IT Infrastructure': { icon: Server, color: 'from-slate-500 to-gray-500' },
    'Emerging Technology': { icon: Zap, color: 'from-violet-500 to-purple-500' }
  };

  // Filter services by category and search
  const filteredServices = COMPREHENSIVE_SERVICES_INDEX_2030.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-futuristic">
      <SEO 
        title="Comprehensive AI & IT Services 2030 | Zion Tech Group"
        description="Discover our comprehensive suite of AI-powered services, micro SAAS solutions, and enterprise IT services for 2030. Transform your business with cutting-edge technology."
        keywords="AI services 2030, micro SAAS, enterprise IT, quantum computing, cybersecurity, cloud migration, digital transformation"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-20"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Comprehensive Services 2030
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Transform your business with our cutting-edge AI services, innovative micro SAAS solutions, and enterprise-grade IT services. 
              Stay ahead of the competition with technology that's already in the future.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-cyan-400/20">
                <div className="text-3xl font-bold text-cyan-400">{SERVICE_STATISTICS_2030.totalServices}+</div>
                <div className="text-slate-400">Services Available</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-blue-400/20">
                <div className="text-3xl font-bold text-blue-400">{SERVICE_STATISTICS_2030.totalCategories}</div>
                <div className="text-slate-400">Categories</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-purple-400/20">
                <div className="text-3xl font-bold text-purple-400">{SERVICE_STATISTICS_2030.averageRating}/5</div>
                <div className="text-slate-400">Average Rating</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-green-400/20">
                <div className="text-3xl font-bold text-green-400">800%+</div>
                <div className="text-slate-400">Average ROI</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RouterLink
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </RouterLink>
              <RouterLink
                to="/pricing"
                className="inline-flex items-center px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 text-white font-semibold rounded-lg border border-slate-600 hover:border-slate-500 transition-all duration-300"
              >
                View Pricing
                <DollarSign className="ml-2 w-5 h-5" />
              </RouterLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-slate-900">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Services 2030
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Our most innovative and high-impact services that are transforming industries and driving unprecedented ROI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <RouterLink to={`/services/${service.id}`}>
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs text-slate-500">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="text-cyan-400 font-semibold">${service.price.toLocaleString()}</div>
                      <div className="text-green-400 font-semibold">{service.roi} ROI</div>
                    </div>
                  </div>
                </RouterLink>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="all">All Categories</option>
                  {SERVICE_CATEGORIES_2030.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {SERVICE_CATEGORIES_2030.slice(0, 8).map(category => {
                  const categoryInfo = categoryData[category as keyof typeof categoryData];
                  if (!categoryInfo) return null;
                  
                  return (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        activeCategory === category
                          ? `bg-gradient-to-r ${categoryInfo.color} text-white`
                          : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'
                      }`}
                    >
                      <categoryInfo.icon className="w-4 h-4 inline mr-2" />
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              All Services 2030
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Explore our comprehensive catalog of AI-powered services, enterprise IT solutions, and innovative micro SAAS products.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => {
              const categoryInfo = categoryData[service.category as keyof typeof categoryData];
              if (!categoryInfo) return null;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <RouterLink to={`/services/${service.id}`}>
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${categoryInfo.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <categoryInfo.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-cyan-400 font-semibold">${service.price?.toLocaleString() || 'Custom'}</div>
                          <div className="text-xs text-slate-500">{service.category}</div>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                        {service.name}
                      </h3>
                      
                      <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                        {service.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center text-slate-500">
                          <Star className="w-4 h-4 text-yellow-500 mr-1" />
                          {service.rating}
                        </div>
                        {service.roi && (
                          <div className="text-green-400 font-semibold">{service.roi}</div>
                        )}
                        {service.setupTime && (
                          <div className="text-slate-500 text-xs">{service.setupTime}</div>
                        )}
                      </div>
                    </div>
                  </RouterLink>
                </motion.div>
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-slate-400 text-lg mb-4">No services found matching your criteria</div>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchTerm('');
                }}
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Join thousands of organizations already leveraging our AI-powered services to achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RouterLink
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                Start Your Transformation
                <ArrowRight className="ml-2 w-5 h-5" />
              </RouterLink>
              <RouterLink
                to="/schedule-demo"
                className="inline-flex items-center px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 text-white font-semibold rounded-lg border border-slate-600 hover:border-slate-500 transition-all duration-300"
              >
                Schedule Demo
                <MessageCircle className="ml-2 w-5 h-5" />
              </RouterLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-slate-900">
        <div className="container-responsive">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-slate-400">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-slate-400">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-slate-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
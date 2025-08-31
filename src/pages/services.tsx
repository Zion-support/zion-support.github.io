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
      href: '/services/AI-Content-Creation-Studio-Pro',
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
      href: '/services/Quantum-AI-Trading-Platform',
      featured: true
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity Suite',
      description: 'Comprehensive AI-powered cybersecurity solution for enterprise protection.',
      category: 'cybersecurity',
      icon: Shield,
      color: 'from-indigo-500 to-purple-500',
      features: ['Threat Detection', 'Behavioral Analysis', 'Incident Response', 'Compliance Management'],
      price: 'Starting at $3,999/month',
      rating: 4.9,
      reviews: 156,
      href: '/services/ai-cybersecurity-suite',
      featured: true
    },
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare Analytics Platform',
      description: 'Advanced AI platform for healthcare data analysis and predictive diagnostics.',
      category: 'ai',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      features: ['Patient Analytics', 'Diagnostic Support', 'Treatment Optimization', 'HIPAA Compliance'],
      price: 'Starting at $4,999/month',
      rating: 4.8,
      reviews: 94,
      href: '/services/ai-healthcare-analytics-platform',
      featured: false
    },
    {
      id: 'ai-financial-trading',
      name: 'AI Financial Trading Platform',
      description: 'Intelligent trading platform powered by advanced AI algorithms.',
      category: 'ai',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      features: ['Algorithmic Trading', 'Market Analysis', 'Portfolio Management', 'Risk Assessment'],
      price: 'Starting at $3,499/month',
      rating: 4.7,
      reviews: 112,
      href: '/services/ai-financial-trading-platform',
      featured: false
    },
    {
      id: 'ai-hr-platform',
      name: 'AI HR Platform',
      description: 'Comprehensive AI-powered human resources management solution.',
      category: 'ai',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      features: ['Recruitment AI', 'Performance Analytics', 'Employee Engagement', 'Compliance Tracking'],
      price: 'Starting at $2,499/month',
      rating: 4.6,
      reviews: 78,
      href: '/services/ai-hr-platform',
      featured: false
    },
    {
      id: 'ai-iot-edge',
      name: 'AI IoT Edge Computing Platform',
      description: 'Intelligent edge computing solution for IoT devices and real-time processing.',
      category: 'ai',
      icon: Chip,
      color: 'from-cyan-500 to-blue-500',
      features: ['Edge AI', 'Real-time Processing', 'Device Management', 'Data Analytics'],
      price: 'Starting at $3,999/month',
      rating: 4.7,
      reviews: 65,
      href: '/services/ai-iot-edge-computing-platform',
      featured: false
    },
    {
      id: 'ai-predictive-maintenance',
      name: 'AI Predictive Maintenance',
      description: 'AI-powered predictive maintenance solution for industrial equipment.',
      category: 'ai',
      icon: Cpu,
      color: 'from-orange-500 to-yellow-500',
      features: ['Equipment Monitoring', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization'],
      price: 'Starting at $2,999/month',
      rating: 4.8,
      reviews: 89,
      href: '/services/ai-predictive-maintenance',
      featured: false
    },
    {
      id: 'ai-workflow-automation',
      name: 'AI Workflow Automation',
      description: 'Intelligent workflow automation platform for business process optimization.',
      category: 'ai',
      icon: Workflow,
      color: 'from-purple-500 to-indigo-500',
      features: ['Process Automation', 'Intelligent Routing', 'Performance Analytics', 'Integration APIs'],
      price: 'Starting at $2,799/month',
      rating: 4.7,
      reviews: 73,
      href: '/services/ai-workflow-automation',
      featured: false
    },
    {
      id: 'ai-powered-seo',
      name: 'AI-Powered SEO',
      description: 'Advanced SEO optimization platform powered by artificial intelligence.',
      category: 'ai',
      icon: Eye,
      color: 'from-green-500 to-blue-500',
      features: ['Keyword Research', 'Content Optimization', 'Ranking Analysis', 'Competitor Tracking'],
      price: 'Starting at $1,999/month',
      rating: 4.6,
      reviews: 156,
      href: '/services/ai-powered-seo',
      featured: false
    },
    {
      id: 'ai-marketing-automation',
      name: 'AI Marketing Automation',
      description: 'Intelligent marketing automation platform for customer engagement.',
      category: 'ai',
      icon: Target,
      color: 'from-pink-500 to-purple-500',
      features: ['Campaign Automation', 'Customer Segmentation', 'Personalization', 'Analytics Dashboard'],
      price: 'Starting at $2,299/month',
      rating: 4.7,
      reviews: 98,
      href: '/services/ai-marketing-automation',
      featured: false
    },
    {
      id: 'ai-project-management',
      name: 'AI Project Management Platform',
      description: 'Intelligent project management solution with AI-powered insights.',
      category: 'ai',
      icon: BarChart3,
      color: 'from-blue-500 to-indigo-500',
      features: ['Task Automation', 'Resource Optimization', 'Risk Assessment', 'Progress Tracking'],
      price: 'Starting at $2,199/month',
      rating: 4.6,
      reviews: 87,
      href: '/services/ai-project-management-platform',
      featured: false
    },
    {
      id: 'ai-supply-chain',
      name: 'AI Supply Chain Optimization',
      description: 'AI-powered supply chain optimization and management platform.',
      category: 'ai',
      icon: Truck,
      color: 'from-green-500 to-teal-500',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Supplier Management'],
      price: 'Starting at $3,299/month',
      rating: 4.8,
      reviews: 67,
      href: '/services/ai-supply-chain-optimization',
      featured: false
    },
    {
      id: 'ai-legal-automation',
      name: 'AI Legal Document Automation',
      description: 'Intelligent legal document automation and analysis platform.',
      category: 'ai',
      icon: FileText,
      color: 'from-indigo-500 to-purple-500',
      features: ['Document Generation', 'Contract Analysis', 'Compliance Checking', 'Legal Research'],
      price: 'Starting at $3,799/month',
      rating: 4.7,
      reviews: 54,
      href: '/services/ai-legal-document-automation',
      featured: false
    },
    {
      id: 'ai-content-optimizer',
      name: 'AI Content Optimizer Pro',
      description: 'Advanced content optimization platform powered by AI.',
      category: 'ai',
      icon: PenTool,
      color: 'from-orange-500 to-red-500',
      features: ['Content Analysis', 'SEO Optimization', 'Readability Scoring', 'Performance Tracking'],
      price: 'Starting at $1,799/month',
      rating: 4.6,
      reviews: 123,
      href: '/services/ai-content-optimizer-pro',
      featured: false
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing Solutions',
      description: 'Enterprise quantum computing solutions for complex problem solving.',
      category: 'quantum',
      icon: Atom,
      color: 'from-purple-500 to-pink-500',
      features: ['Quantum Algorithms', 'Problem Solving', 'Research Support', 'Consulting Services'],
      price: 'Starting at $8,999/month',
      rating: 4.9,
      reviews: 45,
      href: '/services/quantum-computing',
      featured: false
    },
    {
      id: 'it-infrastructure',
      name: 'IT Infrastructure Management',
      description: 'Comprehensive IT infrastructure management and optimization services.',
      category: 'it',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      features: ['Infrastructure Design', 'Performance Optimization', 'Monitoring & Alerting', '24/7 Support'],
      price: 'Starting at $4,999/month',
      rating: 4.8,
      reviews: 134,
      href: '/it-services',
      featured: false
    },
    {
      id: 'micro-saas',
      name: 'Micro SAAS Solutions',
      description: 'Innovative software-as-a-service solutions for modern businesses.',
      category: 'saas',
      icon: Code,
      color: 'from-cyan-500 to-blue-500',
      features: ['Custom Development', 'Scalable Architecture', 'API Integration', 'Analytics Dashboard'],
      price: 'Starting at $1,999/month',
      rating: 4.7,
      reviews: 89,
      href: '/services/micro-saas-solutions',
      featured: false
    },
    {
      id: 'blockchain-solutions',
      name: 'Blockchain Enterprise Solutions',
      description: 'Enterprise-grade blockchain solutions for secure transactions and data integrity.',
      category: 'blockchain',
      icon: Database,
      color: 'from-green-500 to-blue-500',
      features: ['Smart Contracts', 'Supply Chain Tracking', 'Digital Identity', 'Asset Management'],
      price: 'Starting at $5,999/month',
      rating: 4.8,
      reviews: 67,
      href: '/services/blockchain-enterprise-solutions',
      featured: false
    },
    {
      id: 'cloud-devops',
      name: 'Cloud & DevOps Services',
      description: 'Comprehensive cloud infrastructure and DevOps automation services.',
      category: 'cloud',
      icon: Cloud,
      color: 'from-blue-500 to-indigo-500',
      features: ['Cloud Migration', 'CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Logging'],
      price: 'Starting at $3,999/month',
      rating: 4.7,
      reviews: 112,
      href: '/services/cloud-devops',
      featured: false
    }
  ];

  // Update category counts
  categories.forEach(category => {
    category.count = services.filter(service => 
      category.id === 'all' || service.category === category.id
    ).length;
  });

  const filteredServices = services.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'featured':
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      case 'rating':
        return b.rating - a.rating;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price':
        return parseFloat(a.price.replace(/[^0-9]/g, '')) - parseFloat(b.price.replace(/[^0-9]/g, ''));
      default:
        return 0;
    }
  });

  return (
    <>
      <SEO 
        title="Services - Zion Tech Group"
        description="Explore Zion Tech Group's comprehensive range of AI services, quantum computing solutions, IT infrastructure, and innovative technology services."
        keywords="AI services, quantum computing, IT infrastructure, cybersecurity, micro SAAS, blockchain, Zion Tech Group services"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of cutting-edge technology services designed to transform 
              your business and drive innovation across all industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-4">
              <label className="text-gray-300 text-sm font-medium">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                <option value="featured">Featured</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Name A-Z</option>
                <option value="price">Price Low-High</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${searchTerm}-${sortBy}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={service.href} className="block">
                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 group-hover:border-cyan-400/50 transition-all duration-300 group-hover:scale-105 h-full">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}>
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        {service.featured && (
                          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                            Featured
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-slate-700/50 text-gray-300 px-2 py-1 rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                          {service.features.length > 3 && (
                            <span className="text-xs bg-slate-700/50 text-gray-300 px-2 py-1 rounded-full">
                              +{service.features.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-600/50">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-300">{service.rating}</span>
                            <span className="text-xs text-gray-400">({service.reviews})</span>
                          </div>
                          <div className="text-sm text-gray-400">
                            {service.price}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {sortedServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-gray-400 text-lg mb-4">No services found</div>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can transform your business and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200"
              >
                <Users className="w-5 h-5 mr-2" />
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

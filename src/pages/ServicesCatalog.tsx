import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Users, 
  Building2, 
  Rocket, 
  Cpu, 
  Database, 
  Lock, 
  Code, 
  Server, 
  Chip, 
  Wifi, 
  Bot, 
  Workflow, 
  Eye, 
  Sparkles, 
  Atom, 
  Leaf, 
  Gamepad2, 
  Coins, 
  Satellite, 
  Activity, 
  MessageCircle, 
  BarChart, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Star,
  Target,
  Handshake,
  Lightbulb,
  Settings,
  ShoppingCart,
  Heart,
  GraduationCap,
  FileText,
  Globe,
  Smartphone,
  Network,
  Palette,
  Monitor,
  ShieldCheck,
  Globe2,
  Briefcase,
  DollarSign,
  BookOpen,
  Scale,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Award,
  Clock
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  category: string;
  subcategory: string;
  description: string;
  price: number;
  features: string[];
  tags: string[];
  icon: React.ComponentType<any>;
  color: string;
  href: string;
  estimatedDelivery: string;
  innovationLevel: string;
  marketPrice: string;
  roi: string;
}

export default function ServicesCatalog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const services: Service[] = [
    // AI Services
    {
      id: 'ai-supply-chain',
      title: 'AI Supply Chain Optimization',
      category: 'AI Services',
      subcategory: 'Operations',
      description: 'Optimize your supply chain with AI-powered analytics and predictive modeling',
      price: 2500,
      features: ['Predictive Analytics', 'Demand Forecasting', 'Inventory Optimization', 'Route Optimization'],
      tags: ['AI', 'Supply Chain', 'Analytics', 'Operations'],
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      href: '/services/ai-supply-chain-optimization',
      estimatedDelivery: '4-6 weeks',
      innovationLevel: 'Advanced',
      marketPrice: '$3,500',
      roi: '300%'
    },
    {
      id: 'ai-cybersecurity',
      title: 'AI Cybersecurity Platform',
      category: 'AI Services',
      subcategory: 'Security',
      description: 'Advanced AI-powered cybersecurity platform for enterprise protection',
      price: 3500,
      features: ['Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Risk Assessment'],
      tags: ['AI', 'Cybersecurity', 'Security', 'Enterprise'],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      href: '/services/ai-cybersecurity-platform',
      estimatedDelivery: '6-8 weeks',
      innovationLevel: 'Cutting-Edge',
      marketPrice: '$5,000',
      roi: '400%'
    },
    {
      id: 'ai-healthcare',
      title: 'AI Healthcare Platform',
      category: 'AI Services',
      subcategory: 'Healthcare',
      description: 'Comprehensive healthcare technology solutions powered by AI',
      price: 4000,
      features: ['Patient Analytics', 'Diagnostic Support', 'Treatment Planning', 'Health Monitoring'],
      tags: ['AI', 'Healthcare', 'Medical', 'Analytics'],
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      href: '/services/ai-healthcare-platform',
      estimatedDelivery: '8-10 weeks',
      innovationLevel: 'Advanced',
      marketPrice: '$6,000',
      roi: '350%'
    },
    {
      id: 'ai-quantum',
      title: 'AI Quantum Hybrid Platform',
      category: 'AI Services',
      subcategory: 'Quantum Computing',
      description: 'Next-generation quantum AI platform for complex problem solving',
      price: 8000,
      features: ['Quantum Algorithms', 'Hybrid Processing', 'Advanced ML', 'Scalable Architecture'],
      tags: ['AI', 'Quantum', 'Advanced', 'Research'],
      icon: Atom,
      color: 'from-purple-500 to-indigo-500',
      href: '/services/ai-quantum-hybrid-platform',
      estimatedDelivery: '12-16 weeks',
      innovationLevel: 'Revolutionary',
      marketPrice: '$12,000',
      roi: '500%'
    },
    // IT Services
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps Solutions',
      category: 'IT Services',
      subcategory: 'Infrastructure',
      description: 'Comprehensive cloud infrastructure and DevOps automation services',
      price: 2000,
      features: ['Cloud Migration', 'CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring'],
      tags: ['Cloud', 'DevOps', 'Infrastructure', 'Automation'],
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      href: '/it-services',
      estimatedDelivery: '3-5 weeks',
      innovationLevel: 'Advanced',
      marketPrice: '$3,000',
      roi: '250%'
    },
    {
      id: 'cybersecurity-suite',
      title: 'Cybersecurity Suite',
      category: 'IT Services',
      subcategory: 'Security',
      description: 'Complete enterprise cybersecurity and compliance solutions',
      price: 3000,
      features: ['Network Security', 'Endpoint Protection', 'Compliance Management', 'Incident Response'],
      tags: ['Cybersecurity', 'Security', 'Compliance', 'Enterprise'],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      href: '/it-services',
      estimatedDelivery: '4-6 weeks',
      innovationLevel: 'Advanced',
      marketPrice: '$4,500',
      roi: '300%'
    },
    {
      id: 'it-infrastructure',
      title: 'IT Infrastructure Management',
      category: 'IT Services',
      subcategory: 'Infrastructure',
      description: 'Professional IT infrastructure management and optimization services',
      price: 1500,
      features: ['Infrastructure Design', 'Performance Optimization', 'Maintenance', 'Support'],
      tags: ['IT', 'Infrastructure', 'Management', 'Support'],
      icon: Server,
      color: 'from-gray-500 to-blue-500',
      href: '/it-services',
      estimatedDelivery: '2-4 weeks',
      innovationLevel: 'Professional',
      marketPrice: '$2,500',
      roi: '200%'
    },
    // Micro SaaS
    {
      id: 'ai-lead-scoring',
      title: 'AI Lead Scoring',
      category: 'Micro SaaS',
      subcategory: 'Sales',
      description: 'Intelligent lead qualification and scoring automation',
      price: 500,
      features: ['Lead Scoring', 'CRM Integration', 'Analytics Dashboard', 'Automated Workflows'],
      tags: ['AI', 'Sales', 'Automation', 'CRM'],
      icon: Target,
      color: 'from-green-500 to-emerald-500',
      href: '/micro-saas',
      estimatedDelivery: '1-2 weeks',
      innovationLevel: 'Advanced',
      marketPrice: '$800',
      roi: '400%'
    },
    {
      id: 'ai-chatbot',
      title: 'Website AI Chatbot',
      category: 'Micro SaaS',
      subcategory: 'Support',
      description: 'AI-powered customer support chatbot for websites',
      price: 300,
      features: ['24/7 Support', 'Multi-language', 'Integration APIs', 'Analytics'],
      tags: ['AI', 'Chatbot', 'Support', 'Customer Service'],
      icon: MessageCircle,
      color: 'from-blue-500 to-cyan-500',
      href: '/micro-saas',
      estimatedDelivery: '1 week',
      innovationLevel: 'Advanced',
      marketPrice: '$500',
      roi: '300%'
    },
    {
      id: 'ai-seo',
      title: 'AI SEO Optimizer',
      category: 'Micro SaaS',
      subcategory: 'Marketing',
      description: 'Automated SEO optimization and content improvement',
      price: 400,
      features: ['Keyword Analysis', 'Content Optimization', 'Performance Tracking', 'Competitor Analysis'],
      tags: ['AI', 'SEO', 'Marketing', 'Content'],
      icon: Search,
      color: 'from-purple-500 to-pink-500',
      href: '/micro-saas',
      estimatedDelivery: '1-2 weeks',
      innovationLevel: 'Advanced',
      marketPrice: '$600',
      roi: '350%'
    }
  ];

  const categories = useMemo(() => {
    const cats = [...new Set(services.map(service => service.category))];
    return cats.sort();
  }, []);

  const filteredServices = useMemo(() => {
    let filtered = services;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Filter by price range
    if (priceRange !== 'all') {
      filtered = filtered.filter(service => {
        const price = service.price;
        switch (priceRange) {
          case 'low':
            return price <= 1000;
          case 'medium':
            return price > 1000 && price <= 3000;
          case 'high':
            return price > 3000;
          default:
            return true;
        }
      });
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.title.localeCompare(b.title);
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, priceRange, sortBy]);

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    website: "https://ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709"
  };

  return (
    <div className="min-h-screen bg-zion-blue pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Services Catalog
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Browse our comprehensive catalog of AI, IT, and Micro SaaS solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-zion-cyan/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-zion-purple/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-white">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5" />
              <div>
                <p className="text-sm text-zion-slate-light">Phone</p>
                <p className="font-semibold">{contactInfo.phone}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5" />
              <div>
                <p className="text-sm text-zion-slate-light">Email</p>
                <p className="font-semibold">{contactInfo.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Globe className="w-5 h-5" />
              <div>
                <p className="text-sm text-zion-slate-light">Website</p>
                <a href={contactInfo.website} className="font-semibold hover:underline" target="_blank" rel="noopener noreferrer">
                  {contactInfo.website.replace('https://', '')}
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5" />
              <div>
                <p className="text-sm text-zion-slate-light">Address</p>
                <p className="font-semibold text-sm">{contactInfo.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto">
          <div className="bg-zion-blue border border-zion-purple/30 rounded-2xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-zion-blue-darker border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 bg-zion-blue-darker border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                >
                  <option value="all">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-4 py-2 bg-zion-blue-darker border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                >
                  <option value="all">All Prices</option>
                  <option value="low">Under $1,000</option>
                  <option value="medium">$1,000 - $3,000</option>
                  <option value="high">Over $3,000</option>
                </select>
              </div>

              {/* Sort By */}
              <div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-2 bg-zion-blue-darker border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="category">Sort by Category</option>
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                    viewMode === 'grid' 
                      ? 'bg-zion-cyan text-white' 
                      : 'bg-zion-blue-darker text-white hover:bg-zion-purple/20'
                  }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                    viewMode === 'list' 
                      ? 'bg-zion-cyan text-white' 
                      : 'bg-zion-blue-darker text-white hover:bg-zion-purple/20'
                  }`}
                >
                  List
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {filteredServices.length} Services Available
            </h2>
            <p className="text-zion-slate-light">
              Discover cutting-edge solutions designed to transform your business operations
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="bg-zion-blue border border-zion-purple/30 rounded-2xl p-6 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105 h-full">
                    {/* Service Header */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${service.color}`}>
                          <service.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-white">
                            ${service.price.toLocaleString()}
                          </div>
                          <div className="text-sm text-zion-slate-light">per month</div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                        {service.title}
                      </h3>
                      
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                          {service.category}
                        </span>
                        {service.subcategory && (
                          <span className="px-2 py-1 bg-zion-purple/20 text-zion-purple-light text-xs rounded-full">
                            {service.subcategory}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                      <div className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-xs text-zion-slate-light">
                            <CheckCircle className="w-3 h-3 text-zion-cyan flex-shrink-0" />
                            <span className="line-clamp-1">{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-xs text-zion-slate-light">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Market Info */}
                    <div className="mb-6">
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="text-center p-2 bg-zion-cyan/20 rounded">
                          <div className="text-zion-cyan">Market Price</div>
                          <div className="text-white font-semibold">{service.marketPrice}</div>
                        </div>
                        <div className="text-center p-2 bg-zion-purple/20 rounded">
                          <div className="text-zion-purple-light">ROI</div>
                          <div className="text-white font-semibold">{service.roi}</div>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex space-x-3">
                      <Link
                        to={service.href}
                        className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-lg text-center text-sm font-semibold hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <a
                        href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.title}&body=Hi, I'm interested in learning more about your ${service.title} service. Please provide more information about pricing, features, and implementation.`}
                        className="px-4 py-2 border border-zion-purple/30 text-zion-cyan rounded-lg text-sm font-semibold hover:bg-zion-purple/20 transition-all duration-300 flex items-center justify-center"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-4 pt-4 border-t border-zion-purple/20">
                      <div className="grid grid-cols-2 gap-4 text-xs text-zion-slate-light">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{service.estimatedDelivery}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Award className="w-3 h-3" />
                          <span>{service.innovationLevel}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-zion-blue border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                    <div className="flex-1">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color}`}>
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                          <p className="text-zion-slate-light mb-3">{service.description}</p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full">
                              {service.category}
                            </span>
                            {service.subcategory && (
                              <span className="px-3 py-1 bg-zion-purple/20 text-zion-purple-light text-sm rounded-full">
                                {service.subcategory}
                              </span>
                            )}
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <span className="text-zion-slate-light">Price:</span>
                              <div className="text-white font-semibold">${service.price.toLocaleString()}/month</div>
                            </div>
                            <div>
                              <span className="text-zion-slate-light">ROI:</span>
                              <div className="text-white font-semibold">{service.roi}</div>
                            </div>
                            <div>
                              <span className="text-zion-slate-light">Delivery:</span>
                              <div className="text-white font-semibold">{service.estimatedDelivery}</div>
                            </div>
                            <div>
                              <span className="text-zion-slate-light">Level:</span>
                              <div className="text-white font-semibold">{service.innovationLevel}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-3">
                      <Link
                        to={service.href}
                        className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-3 rounded-lg text-center font-semibold hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <a
                        href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.title}&body=Hi, I'm interested in learning more about your ${service.title} service. Please provide more information about pricing, features, and implementation.`}
                        className="border border-zion-purple/30 text-zion-cyan px-6 py-3 rounded-lg font-semibold hover:bg-zion-purple/20 transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Get Quote</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-zion-slate-light text-lg mb-4">No services found matching your criteria</div>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setPriceRange('all');
                }}
                className="text-zion-cyan hover:text-zion-cyan-light underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-blue">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Let's discuss how our comprehensive services can drive growth, 
              efficiency, and competitive advantage for your organization.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-6">
                <Phone className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-zion-slate-light mb-3">Speak directly with our experts</p>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-zion-cyan hover:text-zion-cyan-light font-semibold"
                >
                  {contactInfo.phone}
                </a>
              </div>
              
              <div className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-6">
                <Mail className="w-12 h-12 text-zion-purple-light mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-zion-slate-light mb-3">Get detailed information and quotes</p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-zion-purple-light hover:text-zion-purple font-semibold"
                >
                  {contactInfo.email}
                </a>
              </div>
              
              <div className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-6">
                <Globe className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Visit Website</h3>
                <p className="text-zion-slate-light mb-3">Explore our full portfolio</p>
                <a
                  href={contactInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zion-cyan hover:text-zion-cyan-light font-semibold flex items-center justify-center space-x-1"
                >
                  <span>Visit Site</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Schedule a Free Consultation
              </h3>
              <p className="text-zion-slate-light mb-6">
                Get personalized recommendations and implementation strategies for your business needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`mailto:${contactInfo.email}?subject=Free Consultation Request&body=Hi, I'd like to schedule a free consultation to discuss how your comprehensive services can benefit my business. Please let me know available times.`}
                  className="bg-white text-zion-purple px-8 py-3 rounded-lg font-semibold hover:bg-zion-slate-light transition-colors duration-300"
                >
                  Schedule Consultation
                </a>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-zion-purple transition-colors duration-300"
                >
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


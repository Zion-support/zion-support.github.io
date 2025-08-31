import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Brain,
  Cpu,
  Cloud,
  Shield,
  Zap,
  Rocket,
  Database,
  Network,
  Code,
  Server,
  Chip,
  Lock,
  BarChart3,
  Users,
  Target,
  Handshake,
  Lightbulb,
  Atom,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette,
  Building2,
  Factory,
  Car,
  ShoppingCart,
  GraduationCap,
  Heart,
  ShieldCheck,
  Globe2,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  CheckCircle,
  Star,
  ArrowRight,
  ChevronDown,
  Filter,
  Grid,
  List,
  TrendingUp,
  Award,
  Globe,
  Zap as Lightning,
  Layers,
  Cpu as Processor,
  Database as DataIcon,
  Network as NetworkIcon,
  Code as CodeIcon,
  Server as ServerIcon,
  Chip as ChipIcon,
  Lock as LockIcon,
  BarChart as ChartIcon,
  Users as UsersIcon,
  Target as TargetIcon,
  Handshake as HandshakeIcon,
  Lightbulb as LightbulbIcon,
  Atom as AtomIcon,
  Gamepad2 as GamepadIcon,
  Coins as CoinsIcon,
  Satellite as SatelliteIcon,
  Activity as ActivityIcon,
  FileText as FileIcon,
  MessageCircle as MessageIcon,
  Search as SearchIcon,
  BarChart as BarChartIcon,
  Users2 as Users2Icon,
  Settings as SettingsIcon,
  Palette as PaletteIcon,
  Building2 as BuildingIcon,
  Factory as FactoryIcon,
  Car as CarIcon,
  ShoppingCart as ShoppingIcon,
  GraduationCap as GraduationIcon,
  Heart as HeartIcon,
  ShieldCheck as ShieldCheckIcon,
  Globe2 as Globe2Icon,
  Bot as BotIcon,
  Workflow as WorkflowIcon,
  Eye as EyeIcon,
  Sparkles as SparklesIcon,
  X
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedService, setSelectedService] = useState<any>(null);

  const allServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025;

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀', color: 'from-cyan-500 to-blue-600' },
    { id: 'AI & Automation', name: 'AI & Automation', count: allServices.filter(s => s.category === 'AI & Automation').length, icon: '🤖', color: 'from-purple-500 to-pink-500' },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: allServices.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️', color: 'from-purple-500 to-indigo-500' },
    { id: 'Blockchain', name: 'Blockchain', count: allServices.filter(s => s.category === 'Blockchain').length, icon: '🔗', color: 'from-green-500 to-emerald-500' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: allServices.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥', color: 'from-red-500 to-pink-500' },
    { id: 'Edge Computing', name: 'Edge Computing', count: allServices.filter(s => s.category === 'Edge Computing').length, icon: '🌐', color: 'from-blue-500 to-cyan-500' },
    { id: 'Metaverse', name: 'Metaverse', count: allServices.filter(s => s.category === 'Metaverse').length, icon: '🌍', color: 'from-purple-500 to-indigo-500' },
    { id: 'AI & Content', name: 'AI & Content', count: allServices.filter(s => s.category === 'AI & Content').length, icon: '✍️', color: 'from-orange-500 to-red-500' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️', color: 'from-green-500 to-blue-500' },
    { id: 'AI & HR', name: 'AI & HR', count: allServices.filter(s => s.category === 'AI & HR').length, icon: '👥', color: 'from-purple-500 to-cyan-500' }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price':
        return a.price - b.price;
      case 'reviews':
        return b.reviewCount - a.reviewCount;
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'AI & Automation': Brain,
      'Quantum Computing': Atom,
      'Blockchain': Coins,
      'AI & Healthcare': Heart,
      'Edge Computing': Satellite,
      'Metaverse': Gamepad2,
      'AI & Content': FileText,
      'Cybersecurity': Shield,
      'AI & HR': Users2,
      'AI Development': Code,
      'Digital Marketing': BarChart,
      'Customer Service': MessageCircle,
      'Financial Technology': DollarSign,
      'Supply Chain': Network,
      'Healthcare Technology': Heart,
      'Manufacturing': Factory,
      'Retail & E-commerce': ShoppingCart,
      'Education Technology': GraduationCap,
      'Government Technology': Building2,
      'Space Technology': Satellite
    };
    return iconMap[category] || Brain;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI & Automation': 'from-purple-500 to-pink-500',
      'Quantum Computing': 'from-purple-500 to-indigo-500',
      'Blockchain': 'from-green-500 to-emerald-500',
      'AI & Healthcare': 'from-red-500 to-pink-500',
      'Edge Computing': 'from-blue-500 to-cyan-500',
      'Metaverse': 'from-purple-500 to-indigo-500',
      'AI & Content': 'from-orange-500 to-red-500',
      'Cybersecurity': 'from-green-500 to-blue-500',
      'AI & HR': 'from-purple-500 to-cyan-500',
      'AI Development': 'from-blue-500 to-cyan-500',
      'Digital Marketing': 'from-green-500 to-blue-500',
      'Customer Service': 'from-blue-500 to-indigo-500',
      'Financial Technology': 'from-green-500 to-emerald-500',
      'Supply Chain': 'from-orange-500 to-red-500',
      'Healthcare Technology': 'from-red-500 to-pink-500',
      'Manufacturing': 'from-blue-500 to-indigo-500',
      'Retail & E-commerce': 'from-yellow-500 to-orange-500',
      'Education Technology': 'from-purple-500 to-pink-500',
      'Government Technology': 'from-gray-500 to-blue-500',
      'Space Technology': 'from-indigo-500 to-purple-500'
    };
    return colorMap[category] || 'from-cyan-500 to-blue-600';
  };

  return (
    <>
      <Helmet>
        <title>Comprehensive Services Showcase 2025 - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive portfolio of innovative AI, IT, and micro SAAS services. From cutting-edge AI solutions to enterprise-grade infrastructure, discover how Zion Tech Group can transform your business." />
        <meta name="keywords" content="AI services, IT services, micro SAAS, digital transformation, cloud solutions, cybersecurity, quantum computing, blockchain, edge computing, metaverse" />
        <meta property="og:title" content="Comprehensive Services Showcase 2025 - Zion Tech Group" />
        <meta property="og:description" content="Explore our comprehensive portfolio of innovative AI, IT, and micro SAAS services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/comprehensive-services-showcase-2025" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-32">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Comprehensive Services
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Showcase 2025
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Discover our complete portfolio of innovative AI, IT, and micro SAAS solutions designed to 
                accelerate your digital transformation and drive business growth.
              </p>
              
              {/* Contact Information */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center">
                    <Phone className="w-6 h-6 text-cyan-400 mb-2" />
                    <div className="text-white font-semibold">+1 302 464 0950</div>
                    <div className="text-gray-300 text-sm">Call us anytime</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <Mail className="w-6 h-6 text-cyan-400 mb-2" />
                    <div className="text-white font-semibold">kleber@ziontechgroup.com</div>
                    <div className="text-gray-300 text-sm">Send us an email</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <MapPin className="w-6 h-6 text-cyan-400 mb-2" />
                    <div className="text-white font-semibold">Middletown, DE</div>
                    <div className="text-gray-300 text-sm">Global services</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
                >
                  Learn More About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="px-4 mb-12">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                {/* Search */}
                <div className="flex-1 max-w-md">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        activeCategory === category.id
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                          : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                      }`}
                    >
                      <span className="mr-2">{category.icon}</span>
                      {category.name}
                      <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Sort and View */}
                <div className="flex items-center gap-4">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    <option value="rating">Sort by Rating</option>
                    <option value="price">Sort by Price</option>
                    <option value="reviews">Sort by Reviews</option>
                    <option value="name">Sort by Name</option>
                  </select>

                  <div className="flex bg-slate-700 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-md transition-colors ${
                        viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-md transition-colors ${
                        viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-white' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-4 pb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
            >
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className={viewMode === 'grid' ? 'group' : 'bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700'}
                >
                  {viewMode === 'grid' ? (
                    // Grid View
                    <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600 hover:border-slate-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl h-full">
                      <div className={`w-16 h-16 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        {React.createElement(getCategoryIcon(service.category), { className: 'w-8 h-8 text-white' })}
                      </div>
                      
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-400 leading-relaxed mb-4">
                        {service.description}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.tags.slice(0, 3).map((tag, idx) => (
                          <span key={idx} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* Stats */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white font-semibold">{service.rating}</span>
                          <span className="text-gray-400 text-sm">({service.reviewCount})</span>
                        </div>
                        <div className="text-cyan-400 font-bold">
                          ${service.price.toLocaleString()}
                        </div>
                      </div>
                      
                      {/* Features */}
                      <div className="mb-4">
                        <div className="text-sm text-gray-500 mb-2">Key Features:</div>
                        <div className="space-y-1">
                          {service.tags.slice(0, 4).map((tag, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-400">
                              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                              {tag}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* CTA */}
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                          Setup: {service.setupTime}
                        </div>
                        <button
                          onClick={() => setSelectedService(service)}
                          className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  ) : (
                    // List View
                    <div className="flex items-start space-x-6">
                      <div className={`w-20 h-20 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                        {React.createElement(getCategoryIcon(service.category), { className: 'w-10 h-10 text-white' })}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-2xl font-semibold text-white">
                            {service.title}
                          </h3>
                          <div className="text-2xl font-bold text-cyan-400">
                            ${service.price.toLocaleString()}
                          </div>
                        </div>
                        
                        <p className="text-gray-300 leading-relaxed mb-4">
                          {service.description}
                        </p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div className="text-center">
                            <div className="text-white font-semibold">{service.rating}</div>
                            <div className="text-gray-400 text-sm">Rating</div>
                          </div>
                          <div className="text-center">
                            <div className="text-white font-semibold">{service.reviewCount}</div>
                            <div className="text-gray-400 text-sm">Reviews</div>
                          </div>
                          <div className="text-center">
                            <div className="text-white font-semibold">{service.aiScore}%</div>
                            <div className="text-gray-400 text-sm">AI Score</div>
                          </div>
                          <div className="text-center">
                            <div className="text-white font-semibold">{service.setupTime}</div>
                            <div className="text-gray-400 text-sm">Setup</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {service.tags.slice(0, 5).map((tag, idx) => (
                              <span key={idx} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <button
                            onClick={() => setSelectedService(service)}
                            className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                          >
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
            
            {/* No Results */}
            {sortedServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
                <p className="text-gray-400 mb-6">Try adjusting your search criteria or category filter.</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Service Detail Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${getCategoryColor(selectedService.category)} rounded-2xl flex items-center justify-center`}>
                        {React.createElement(getCategoryIcon(selectedService.category), { className: 'w-8 h-8 text-white' })}
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-white">{selectedService.title}</h2>
                        <p className="text-gray-400">{selectedService.category}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Description</h3>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {selectedService.description}
                      </p>
                      
                      <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {selectedService.tags.map((tag: string, idx: number) => (
                          <div key={idx} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                            {tag}
                          </div>
                        ))}
                      </div>
                      
                      <h3 className="text-xl font-semibold text-white mb-4">Integrations</h3>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {selectedService.integrations.map((integration: string, idx: number) => (
                          <span key={idx} className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded-full">
                            {integration}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <div className="bg-slate-700/50 rounded-xl p-6 mb-6">
                        <h3 className="text-xl font-semibold text-white mb-4">Pricing & Details</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Price:</span>
                            <span className="text-2xl font-bold text-cyan-400">${selectedService.price.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Market Price:</span>
                            <span className="text-white">{selectedService.marketPrice}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Setup Time:</span>
                            <span className="text-white">{selectedService.setupTime}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">ROI:</span>
                            <span className="text-green-400">{selectedService.roi}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">AI Score:</span>
                            <span className="text-white">{selectedService.aiScore}%</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-slate-700/50 rounded-xl p-6 mb-6">
                        <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <Phone className="w-5 h-5 text-cyan-400" />
                            <span className="text-white">{selectedService.contactInfo.phone}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Mail className="w-5 h-5 text-cyan-400" />
                            <span className="text-white">{selectedService.contactInfo.email}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <MapPin className="w-5 h-5 text-cyan-400" />
                            <span className="text-white">{selectedService.contactInfo.address}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-3">
                        <Link
                          to="/contact"
                          className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                        >
                          Get Started
                        </Link>
                        <a
                          href={selectedService.contactInfo.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 border border-cyan-400 text-cyan-400 text-center py-3 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ComprehensiveServicesShowcase2025;

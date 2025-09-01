  CheckCircle,
      name: "Energy & Utilities",
      description: "Sustainability analytics, smart grid optimization, and renewable energy management",
      icon: Zap,
      color: "yellow"
    },
    {
      name: "Smart Cities",
      description: "Infrastructure digital twins, sustainability monitoring, and urban optimization",
      icon: Globe,
      color: "cyan"
=======
=======
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  Shield, 
  Zap, 
  Brain, 
  Cloud, 
  Lock, 
  TrendingUp,
  Users,
  Globe,
  Cpu,
  Database,
  Rocket,
  Leaf,
  Building,
  BarChart3,
  Code,
  Server,
  Smartphone,
  Network,
  Clock,
  ArrowRight,
  Phone,
  Mail,
  Globe,
  MapPin,
  Video,
  Music,
  FileText,
  Calendar,
  Award,
  Clock,
  DollarSign
=======
  ExternalLink,
  CheckCircle,
  Award,
  Target,
  Lightbulb,
  Sparkles,
  Eye,
  Heart,
  DollarSign,
  Calendar,
  Settings,
  Monitor,
  Smartphone as MobileIcon,
  Globe as WebIcon,
  Shield as SecurityIcon,
  Zap as PerformanceIcon
} from 'lucide-react';
import { comprehensiveServices2025Enhanced, serviceCategories } from '../data/comprehensive-services-2025-enhanced';

export function ComprehensiveServicesShowcase2025() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  const filteredServices = comprehensiveServices2025Enhanced.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
      case 'category':
        return a.category.localeCompare(b.category);
      case 'popularity':
        return (b.badges.includes('Popular') ? 1 : 0) - (a.badges.includes('Popular') ? 1 : 0);
      default:
        return a.title.localeCompare(b.title);
    }
  ];

  const pricingComparison = [
    {
      plan: "Starter",
      price: "$399-799",
      period: "/month",
      description: "Perfect for small businesses",
      features: ["Basic AI features", "Standard support", "Core functionality", "Up to 100 users"]
    },
    {
      plan: "Professional",
      price: "$999-1,999",
      period: "/month",
      description: "Ideal for growing companies",
      features: ["Advanced AI capabilities", "Priority support", "Custom integrations", "Up to 1,000 users"]
    },
    {
      plan: "Enterprise",
      price: "$2,499-12,999",
      period: "/month",
      description: "For large organizations",
      features: ["Custom AI models", "24/7 dedicated support", "Advanced security", "Unlimited users"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; text: string; border: string; hover: string } } = {
      purple: {
        bg: "bg-purple-500/20",
        text: "text-purple-400",
        border: "border-purple-500/50",
        hover: "hover:border-purple-400"
      },
      blue: {
        bg: "bg-blue-500/20",
        text: "text-blue-400",
        border: "border-blue-500/50",
        hover: "hover:border-blue-400"
      },
      green: {
        bg: "bg-green-500/20",
        text: "text-green-400",
        border: "border-green-500/50",
        hover: "hover:border-green-400"
      },
      indigo: {
        bg: "bg-indigo-500/20",
        text: "text-indigo-400",
        border: "border-indigo-500/50",
        hover: "hover:border-indigo-400"
      }
    };
    return colors[color] || colors.purple;
  };

  const openServiceModal = (service: any) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Micro SaaS': return <Code className="w-6 h-6" />;
      case 'AI Solutions': return <Brain className="w-6 h-6" />;
      case 'IT Services': return <Server className="w-6 h-6" />;
      case 'Digital Twin': return <Globe className="w-6 h-6" />;
      case 'Sustainable Tech': return <Leaf className="w-6 h-6" />;
      default: return <Zap className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Micro SaaS': return 'from-blue-600 to-cyan-700';
      case 'AI Solutions': return 'from-purple-600 to-indigo-700';
      case 'IT Services': return 'from-green-600 to-emerald-700';
      case 'Digital Twin': return 'from-orange-600 to-red-700';
      case 'Sustainable Tech': return 'from-green-500 to-emerald-600';
      default: return 'from-gray-600 to-slate-700';
    }
  };

  return (
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
=======
      {/* Header */}
      <div className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
=======
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20"></div>
        <div className="relative z-10 container mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Zion Tech Group
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-cyan-200 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Revolutionary AI, Micro SaaS, and IT Solutions for the Future
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4 text-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full border border-cyan-500/30">
              AI-Powered Solutions
            </span>
            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full border border-purple-500/30">
              Micro SaaS Platform
            </span>
            <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full border border-green-500/30">
              Enterprise IT Services
            </span>
            <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full border border-orange-500/30">
              Emerging Technologies
            </span>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-black/50 backdrop-blur-xl border-b border-cyan-500/30 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="flex items-center space-x-2 text-cyan-400">
                <Phone className="w-5 h-5" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2 text-cyan-400">
                <Mail className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-cyan-400">
              <MapPin className="w-5 h-5" />
              <span>364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services, features, or capabilities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-xl border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Filters and Controls */}
            <div className="flex flex-wrap gap-4 items-center">
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/10 backdrop-blur-xl border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="all">All Categories</option>
                {serviceCategories.map(category => (
                  <option key={category.slug} value={category.name}>{category.name}</option>
                ))}
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-white/10 backdrop-blur-xl border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="category">Sort by Category</option>
                <option value="popularity">Sort by Popularity</option>
              </select>

              {/* View Mode */}
              <div className="flex bg-white/10 backdrop-blur-xl border border-cyan-500/30 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-cyan-300">
              Showing {filteredServices.length} of {comprehensiveServices2025Enhanced.length} services
            </p>
          </div>

          {/* Services Grid */}
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            <AnimatePresence>
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105 ${
                    viewMode === 'list' ? 'flex flex-col lg:flex-row gap-6' : ''
                  }`}
                >
                  {/* Service Header */}
                  <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${getCategoryColor(service.category)}`}>
                        {getCategoryIcon(service.category)}
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-2xl font-bold text-white">{service.price}</span>
                        <span className="text-sm text-gray-400">per {service.billing}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.shortDescription}</p>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.badges.map((badge, badgeIndex) => (
                        <span
                          key={badgeIndex}
                          className="px-2 py-1 text-xs font-medium bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Benefits</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                            <TrendingUp className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Service Actions */}
                  <div className={`flex flex-col gap-3 ${viewMode === 'list' ? 'lg:w-64' : ''}`}>
                    <button
                      onClick={() => openServiceModal(service)}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Eye className="w-5 h-5" />
                      <span>View Details</span>
                    </button>
                    
                    <a
                      href={service.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 border border-cyan-500/30"
                    >
                      <span>{service.ctaLabel}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    {/* Quick Info */}
                    <div className="bg-white/5 rounded-lg p-3 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">ROI:</span>
                        <span className="text-green-400 font-medium">{service.roi}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Trial:</span>
                        <span className="text-cyan-400 font-medium">{service.trialDays} days</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Setup:</span>
                        <span className="text-cyan-400 font-medium">{service.setupTime}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Service Modal */}
      <AnimatePresence>
        {showModal && selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-zion-slate-dark border border-cyan-500/30 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-cyan-500/30">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${getCategoryColor(selectedService.category)}`}>
                        {getCategoryIcon(selectedService.category)}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white">{selectedService.title}</h2>
                        <p className="text-cyan-400">{selectedService.category}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-lg">{selectedService.description}</p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-white p-2"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Pricing and Quick Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Pricing</h3>
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{selectedService.price}</div>
                    <div className="text-gray-400">per {selectedService.billing}</div>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">ROI:</span>
                        <span className="text-green-400">{selectedService.roi}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Trial:</span>
                        <span className="text-cyan-400">{selectedService.trialDays} days</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Setup:</span>
                        <span className="text-cyan-400">{selectedService.setupTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Market Position</h3>
                    <p className="text-gray-300 text-sm mb-3">{selectedService.marketPosition}</p>
                    <div className="space-y-2">
                      <div className="text-sm">
                        <span className="text-gray-400">Competitors:</span>
                        <div className="text-cyan-400 mt-1">{selectedService.competitors.join(', ')}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Contact Information</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-cyan-400" />
                        <span className="text-cyan-400">{selectedService.contactInfo.mobile}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-cyan-400" />
                        <span className="text-cyan-400">{selectedService.contactInfo.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-cyan-400" />
                        <span className="text-cyan-400">{selectedService.contactInfo.address}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features and Capabilities */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Features</h3>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Capabilities</h3>
                    <ul className="space-y-2">
                      {selectedService.capabilities.map((capability, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-300">
                          <Zap className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Benefits and Use Cases */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Benefits</h3>
                    <ul className="space-y-2">
                      {selectedService.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Use Cases</h3>
                    <ul className="space-y-2">
                      {selectedService.useCases.map((useCase, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-300">
                          <Target className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technology and Integrations */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Technology Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.technologyStack.map((tech, index) => (
                        <span key={index} className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-300 rounded border border-cyan-500/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Integrations</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.integrations.map((integration, index) => (
                        <span key={index} className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded border border-purple-500/30">
                          {integration}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Target Industries and Compliance */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Target Industries</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.targetIndustries.map((industry, index) => (
                        <span key={index} className="px-2 py-1 text-xs bg-green-500/20 text-green-300 rounded border border-green-500/30">
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Compliance & Security</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-medium text-cyan-400 mb-1">Compliance</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedService.compliance.map((compliance, index) => (
                            <span key={index} className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded border border-blue-500/30">
                              {compliance}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-cyan-400 mb-1">Security Features</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedService.security.map((security, index) => (
                            <span key={index} className="px-2 py-1 text-xs bg-red-500/20 text-red-300 rounded border border-red-500/30">
                              {security}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Scalability */}
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-3">Scalability</h3>
                  <p className="text-gray-300">{selectedService.scalability}</p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-cyan-500/30 flex flex-col sm:flex-row gap-3">
                <a
                  href={selectedService.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>{selectedService.ctaLabel}</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
                <button
                  onClick={closeModal}
                  className="px-6 py-3 text-gray-400 hover:text-white font-semibold border border-gray-600 hover:border-gray-500 rounded-lg transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-cyan-200 mb-8">
              Join hundreds of companies already leveraging Zion Tech Group's cutting-edge solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 text-lg"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 text-lg border border-cyan-500/30"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-lg flex items-center justify-center text-zion-cyan mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Service Portfolio
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Explore our comprehensive range of services organized by category. Each service is designed 
              to work independently or integrate seamlessly with others for maximum business impact.
            </p>
          </motion.div>

          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="bg-zion-blue-dark border border-zion-purple/30 rounded-lg p-8"
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center text-zion-cyan">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    <p className="text-zion-slate-light">{category.description}</p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: serviceIndex * 0.1 }}
                      className="bg-zion-blue-darker border border-zion-purple/20 rounded-lg p-6 hover:border-zion-cyan/50 transition-all"
                    >
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-zion-cyan/20 rounded-lg flex items-center justify-center text-zion-cyan">
                          {service.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">{service.name}</h4>
                          <p className="text-sm text-zion-slate-light">{service.description}</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h5>
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="text-xs text-zion-slate-light flex items-center">
                              <CheckCircle className="w-3 h-3 text-zion-cyan mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <div className="text-sm text-zion-slate-light">
                          Starting at: <span className="text-zion-cyan font-semibold">{service.pricing}</span>
                        </div>
                      </div>

                      <Link
                        to={service.href}
                        className="w-full bg-zion-cyan text-zion-blue-dark px-4 py-2 rounded-lg text-sm font-semibold hover:bg-zion-cyan-light transition-colors text-center block"
                      >
                        Learn More
                      </Link>
                    </motion.div>
                  ))}
                </div>
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
            viewport={{ once: true }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Services Showcase 2025
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Discover our complete portfolio of innovative AI, IT, and micro-SaaS services designed to transform your business and drive digital innovation.
            </p>
            
            {/* Contact Information */}
            <div className="bg-slate-700/50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Zion Tech Group</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-slate-300">
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Globe className="w-5 h-5 text-blue-400" />
                  <span>ziontechgroup.com</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <MapPin className="w-5 h-5 text-blue-400 inline mr-2" />
                <span className="text-slate-300">364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-slate-800/50 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Prices</option>
                <option value="low">$0 - $500/month</option>
                <option value="medium">$501 - $1,500/month</option>
                <option value="high">$1,501+/month</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-slate-300 mb-6">
          Showing {filteredServices.length} of {allServices.length} services
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            >
              {/* Service Header */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    {getCategoryIcon(service.category)}
                    <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">
                      {service.innovationLevel}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">
                      {service.currency}{service.price}
                    </div>
                    <div className="text-sm text-slate-400">per {service.pricingModel}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-slate-300 text-sm mb-3">{service.description}</p>
                
                <div className="flex items-center space-x-4 text-sm text-slate-400 mb-3">
                  <span className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{service.estimatedDelivery}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{service.supportLevel}</span>
                  </span>
                </div>
              </div>

              {/* Market Information */}
              <div className="bg-slate-700/50 rounded-lg p-3 mb-4">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-slate-400">Market Price:</span>
                    <div className="text-white font-medium">{service.marketPrice}</div>
                  </div>
                  <div>
                    <span className="text-slate-400">ROI:</span>
                    <div className="text-green-400 font-medium">{service.roi}</div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Features</h4>
                <div className="space-y-1">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-xs text-slate-400 text-center">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Benefits</h4>
                <div className="space-y-1">
                  {service.benefits.slice(0, 2).map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-slate-300">
                      <TrendingUp className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {service.tags.slice(0, 4).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Button */}
              <div className="flex space-x-2">
                <a
                  href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Get Quote</span>
                </a>
                <a
                  href={`tel:${service.contactInfo.phone}`}
                  className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-slate-400 text-lg mb-4">
              No services found matching your criteria
            </div>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedPriceRange('all');
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="bg-slate-800/50 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 rounded-full">
                <Star className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive AI Services Showcase 2025
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our cutting-edge AI-powered solutions designed to transform industries 
              and drive unprecedented growth. From business intelligence to quantum trading, 
              we have the technology to revolutionize your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Explore Services
              </button>
              <button className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Revolutionary AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Each service is built with cutting-edge technology and designed to deliver 
              measurable results for your business.
            </p>
          </motion.div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-slate-700 rounded-2xl p-8 hover:bg-slate-600 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className={`p-4 bg-gradient-to-r ${service.color} rounded-full w-fit mb-6`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 text-lg mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <span key={benefitIndex} className="px-3 py-1 bg-slate-600 text-green-400 rounded-full text-sm">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Core Features:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-gray-300">
                            <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="text-2xl font-bold text-white">
                        {service.pricing}
                      </div>
                      <a
                        href={service.link}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  <div className="bg-slate-600 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-white mb-4 text-center">Technology Stack</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="p-3 bg-slate-500 rounded-lg mb-2">
                          <Brain className="h-6 w-6 text-blue-400 mx-auto" />
                        </div>
                        <p className="text-sm text-gray-300">AI/ML</p>
                      </div>
                      <div className="text-center">
                        <div className="p-3 bg-slate-500 rounded-lg mb-2">
                          <Database className="h-6 w-6 text-green-400 mx-auto" />
                        </div>
                        <p className="text-sm text-gray-300">Big Data</p>
                      </div>
                      <div className="text-center">
                        <div className="p-3 bg-slate-500 rounded-lg mb-2">
                          <Shield className="h-6 w-6 text-purple-400 mx-auto" />
                        </div>
                        <p className="text-sm text-gray-300">Security</p>
                      </div>
                      <div className="text-center">
                        <div className="p-3 bg-slate-500 rounded-lg mb-2">
                          <Zap className="h-6 w-6 text-yellow-400 mx-auto" />
                        </div>
                        <p className="text-sm text-gray-300">Performance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI solutions are designed to work across various industries and use cases.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-700 p-6 rounded-xl text-center hover:bg-slate-600 transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg w-fit mx-auto mb-4">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{industry}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join thousands of businesses that have transformed their operations with our AI solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-fit mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{benefit.value}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading organizations that are already experiencing the future with AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-fit mx-auto mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-fit mx-auto mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-300">
                  <a href="tel:+13024640950" className="hover:text-blue-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-fit mx-auto mb-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-300">
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );

// Missing icon components
const Truck = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM21 17a2 2 0 11-4 0 2 2 0 014 0zM21 13V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6m16 0v4a2 2 0 01-2 2H7a2 2 0 01-2-2v-4m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
  </svg>
);

const Leaf = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const Home = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);
=======
}

export default ComprehensiveServicesShowcase2025;

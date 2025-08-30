<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Filter,
  Star,
  ArrowRight,
  ChevronDown,
  Globe,
  Zap,
  Shield,
  Brain,
  Cloud,
  Lock,
  Users,
  TrendingUp,
  Award,
  Clock,
  DollarSign,
=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Globe,
  ArrowRight,
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  CheckCircle,
  Play,
  BarChart3,
  Cpu,
  Eye,
  MessageSquare,
  Database,
  Network,
  Rocket,
  Target,
  Award,
  Clock,
  Star,
  Search,
  Filter,
  DollarSign,
  Clock,
  Users,
  Target,
  CheckCircle,
  ExternalLink,
  Phone,
  Mail,
<<<<<<< HEAD
  MapPin,
  Target,
  Lightbulb,
  BarChart,
  PieChart,
  LineChart,
  Activity,
  FileText,
  MessageCircle,
  Calendar,
  Settings,
  Monitor,
  Truck,
  Car,
  Clipboard,
  Link,
  Microscope,
  X,
  Atom,
  Heart,
  Leaf
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';

interface ServiceContact {
  mobile: string;
  email: string;
  address: string;
  website: string;

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
=======
  MapPin
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { ADVANCED_MICRO_SAAS_SERVICES_2025 } from '../data/advancedMicroSaasServices2025';
import { EMERGING_TECH_SERVICES_2025 } from '../data/emergingTechServices2025';

export default function ComprehensiveServicesShowcase2025() {
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  const allServices = [
    ...ADVANCED_MICRO_SAAS_SERVICES_2025,
    ...EMERGING_TECH_SERVICES_2025
  ];

<<<<<<< HEAD
  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];
    const matchesInnovation = innovationLevel === 'all' || service.innovationLevel === innovationLevel;

    return matchesCategory && matchesSearch && matchesPrice && matchesInnovation;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.title.localeCompare(b.title);
      case 'innovation':
        const innovationOrder = { 'Breakthrough': 3, 'Revolutionary': 2, 'Advanced': 1 };
        return (innovationOrder[b.innovationLevel as keyof typeof innovationOrder] || 0) - (innovationOrder[a.innovationLevel as keyof typeof innovationOrder] || 0);
      default:
        return 0;

  });

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1


  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"


=======
  const categories = ['all', ...new Set(allServices.map(service => service.category))];
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'low', label: 'Under $1,000/month' },
    { value: 'medium', label: '$1,000 - $5,000/month' },
    { value: 'high', label: '$5,000 - $15,000/month' },
    { value: 'premium', label: 'Over $15,000/month' }
  ];

  const filteredServices = COMPREHENSIVE_PRICING_GUIDE_2025
    .filter(service =>
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .filter(service => selectedCategory === 'all' || service.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'innovation':
          return getInnovationScore(b.innovationLevel) - getInnovationScore(a.innovationLevel);
        case 'price':
          return a.price - b.price;
        case 'roi':
          return parseFloat(b.roi.split('%')[0]) - parseFloat(a.roi.split('%')[0]);
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  const getPriceRange = (price: number) => {
    if (price < 1000) return 'low';
    if (price < 5000) return 'medium';
    if (price < 15000) return 'high';
    return 'premium';
  };

  const getPriceRangeColor = (range: string) => {
    switch (range) {
      case 'low': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-blue-100 text-blue-800';
      case 'high': return 'bg-yellow-100 text-yellow-800';
      case 'premium': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Services Showcase 2025 - Zion Tech Group"
        description="Explore our comprehensive portfolio of advanced micro SAAS services, emerging technology solutions, and innovative AI-powered platforms. From quantum computing to edge AI, discover cutting-edge solutions for your business."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD
            className="mb-8"

            <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Comprehensive AI Services Showcase 2025
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
              Comprehensive AI Services Showcase 2025
            </h2>
            <p className="text-xl lg:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              Discover our complete portfolio of cutting-edge AI-powered micro SAAS services,
              designed to transform your business and drive innovation across all industries.
=======
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Showcase 2025
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Discover our cutting-edge micro SAAS, IT, and AI services that are revolutionizing industries.
              Each service is designed with real-world applications, proven ROI, and market-leading innovation.
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-white">
                <Users className="w-5 h-5" />
                <span>500+ Enterprise Clients</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span>300% Average ROI</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div>
              <select
<<<<<<< HEAD
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-slate-light/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"

                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="innovation">Innovation Level</option>
=======
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-slate-800 text-white">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
<<<<<<< HEAD
              <div className="flex bg-zion-slate-dark border border-zion-slate-light/20 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-zion-cyan text-white'
                      : 'text-zion-slate-light hover:text-white'
                  }`}

                  Grid
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    viewMode === 'list'
                      ? 'bg-zion-cyan text-white'
                      : 'text-zion-slate-light hover:text-white'
                  }`}

                  List
                </button>
              </div>
            </div>
          </div>

          {/* Advanced Filters */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-zion-slate-light mb-2">
                Price Range: ${priceRange[0]} - ${priceRange[1]}
              </label>
              <div className="flex gap-2">
                <input
                  type="range"
                  min="0"
                  max="10000"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="flex-1"
                />
                <input
                  type="range"
                  min="0"
                  max="10000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="flex-1"
                />
              </div>
            </div>

            {/* Innovation Level */}
            <div>
              <label className="block text-sm font-medium text-zion-slate-light mb-2">
                Innovation Level
              </label>
              <select
                value={innovationLevel}
                onChange={(e) => setInnovationLevel(e.target.value)}
                className="w-full px-3 py-2 bg-zion-slate-dark border border-zion-slate-light/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"

                <option value="all">All Levels</option>
                <option value="Breakthrough">Breakthrough</option>
                <option value="Revolutionary">Revolutionary</option>
                <option value="Advanced">Advanced</option>
=======
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {priceRanges.map(range => (
                  <option key={range.value} value={range.value} className="bg-slate-800 text-white">
                    {range.label}
                  </option>
                ))}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
              </select>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </section>

      {/* Categories */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/25'
                    : 'bg-zion-slate-dark text-zion-slate-light hover:bg-zion-slate hover:text-white border border-zion-slate-light/20'
                }`}

                <span className="mr-2">{category.icon}</span>
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}

            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`bg-zion-slate-dark/50 backdrop-blur-sm rounded-2xl border border-zion-slate-light/20 hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105 cursor-pointer ${
                  viewMode === 'list' ? 'p-6' : 'p-6'
                }`}
                onClick={() => handleServiceClick(service)}

                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center">
                    {React.createElement(getCategoryIcon(service.category), { className: "w-6 h-6 text-white" })}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-zion-cyan">${service.price.toLocaleString()}</div>
                    <div className="text-sm text-zion-slate-light">/month</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-zion-slate-light mb-4 line-clamp-3">{service.description}</p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zion-slate-light">Category:</span>
                    <span className="text-sm text-white font-medium">{service.category}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zion-slate-light">Innovation:</span>
                    <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                      service.innovationLevel === 'Breakthrough' ? 'bg-red-500/20 text-red-400' :
                      service.innovationLevel === 'Revolutionary' ? 'bg-purple-500/20 text-purple-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {service.innovationLevel}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zion-slate-light">ROI:</span>
                    <span className="text-sm text-green-400 font-medium">{service.roi}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-zion-slate-light/20">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zion-slate-light">Delivery:</span>
                    <span className="text-sm text-white">{service.estimatedDelivery}</span>
                  </div>
                </div>

                <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-medium hover:from-zion-cyan/80 hover:to-zion-blue/80 transition-all duration-300">
                  Learn More
                </button>
              </motion.div>
            ))}
          </motion.div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-zion-slate-light">Try adjusting your search criteria or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}

            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-12">
              We're not just another technology company. We're your strategic partner in digital transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI-First Approach",
                description: "Every solution is built with cutting-edge AI at its core, ensuring maximum efficiency and innovation."
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-grade security with SOC 2 compliance, ensuring your data and operations are always protected."
              },
              {
                icon: Zap,
                title: "Rapid Implementation",
                description: "Get up and running in weeks, not months, with our proven implementation methodology."

            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"

                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}

            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Let's discuss how our AI-powered solutions can drive your success.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="h-6 w-6 text-zion-cyan" />
                <span className="text-white">+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="h-6 w-6 text-zion-cyan" />
                <span className="text-white">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Globe className="h-6 w-6 text-zion-cyan" />
                <span className="text-white">ziontechgroup.com</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-semibold hover:from-zion-cyan/80 hover:to-zion-blue/80 transition-all duration-300 transform hover:scale-105">
                Schedule a Demo
              </button>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Get Started Today
              </button>
            </div>
          </motion.div>
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
            onClick={closeModal}

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-zion-slate-dark rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}

              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedService.title}</h2>
                    <p className="text-zion-slate-light text-lg">{selectedService.description}</p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-zion-slate-light hover:text-white transition-colors"

                    <X className="w-6 h-6" />
=======
      </div>

      {/* Services Grid */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {filteredServices.length} Innovative Services Available
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Each service is designed with real-world applications, proven ROI, and market-leading innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300 group"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 bg-gradient-to-r ${getInnovationColor(service.innovationLevel)} rounded-lg flex items-center justify-center`}>
                      {React.createElement(getCategoryIcon(service.category), { className: "w-6 h-6 text-white" })}
                    </div>
                    <div>
                      <span className="text-gray-400">APIs:</span> {service.technicalSpecs.apiEndpoints}
                    </div>
                  </div>
                </div>
              )}

              {/* Market Info */}
              {service.marketSize && (
                <div className="mb-4 p-3 bg-white/5 rounded-lg">
                  <div className="text-xs text-gray-300">
                    <span className="text-gray-400">Market Size:</span> {service.marketSize}
                  </div>
                </div>
              )}

              {/* Contact and CTA */}
              <div className="border-t border-white/20 pt-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm text-gray-400">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.estimatedDelivery}
                    </div>
                  </div>
                  <div className="text-sm text-gray-400">
                    <div className="flex items-center">
                      <Target className="w-4 h-4 mr-1" />
                      {service.supportLevel}
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                    Get Quote
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                  </button>
                  <button className="px-4 py-2 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-200">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team of experts is ready to help you implement these innovative solutions
            and drive your business forward with cutting-edge technology.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Website</h3>
              <p className="text-gray-300">Explore our full range of services</p>
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                ziontechgroup.com
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Journey
            </a>
            <a
              href="tel:+13024640950"
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
};

export default ComprehensiveServicesShowcase2025;
}}}}}}}}
=======
}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

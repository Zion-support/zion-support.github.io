import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Zap, 
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
  Target, 
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
  Phone, 
  Mail, 
  MapPin,
  ChevronDown,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { ADDITIONAL_INNOVATIVE_SERVICES_2025 } from '../data/additionalInnovativeServices2025';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';
import { Link } from 'react-router-dom';

export default function EnhancedServicesShowcase2025() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');

  // Combine all services
  const allServices = [...INNOVATIVE_MICRO_SAAS_SERVICES_2025, ...ADDITIONAL_INNOVATIVE_SERVICES_2025];

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(allServices.map(service => service.category)))];

  // Price ranges
  const priceRanges = [
    'All',
    'Under $500',
    '$500 - $1,000',
    '$1,000 - $2,000',
    '$2,000 - $5,000',
    'Over $5,000'
  ];

  // Filter services based on search and filters
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    
    let matchesPrice = true;
    if (selectedPriceRange !== 'All') {
      const price = service.price;
      switch (selectedPriceRange) {
        case 'Under $500':
          matchesPrice = price < 500;
          break;
        case '$500 - $1,000':
          matchesPrice = price >= 500 && price < 1000;
          break;
        case '$1,000 - $2,000':
          matchesPrice = price >= 1000 && price < 2000;
          break;
        case '$2,000 - $5,000':
          matchesPrice = price >= 2000 && price < 5000;
          break;
        case 'Over $5,000':
          matchesPrice = price >= 5000;
          break;
      }
    }
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.title.localeCompare(b.title);
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const ServiceCard = ({ service, index }: { service: any; index: number }) => (
    <motion.div
      variants={itemVariants}
      className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-400/20 transition-all duration-500 group"
    >
      {/* Service Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-sm text-cyan-400 font-medium">{service.category}</p>
        </div>
        <div className="flex items-center space-x-2">
          {service.featured && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
              <Star className="w-3 h-3 mr-1" />
              Featured
            </span>
          )}
          {service.trending && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-500/20 text-red-400 border border-red-500/30">
              <TrendingUp className="w-3 h-3 mr-1" />
              Trending
            </span>
          )}
        </div>
      </div>

      {/* Service Description */}
      <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>

      {/* Price and ROI */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-2xl font-bold text-cyan-400">
            ${service.price.toLocaleString()}
          </span>
          <span className="text-sm text-gray-400 ml-1">/month</span>
        </div>
        <div className="text-right">
          <span className="text-sm text-green-400 font-medium">ROI: {service.roi}</span>
          <p className="text-xs text-gray-400">{service.marketPrice}</p>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-white mb-2">Key Features</h4>
        <div className="flex flex-wrap gap-1">
          {service.features.slice(0, 3).map((feature: string, idx: number) => (
            <span
              key={idx}
              className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-slate-700/50 text-gray-300 border border-slate-600/50"
            >
              <CheckCircle className="w-3 h-3 mr-1 text-green-400" />
              {feature}
            </span>
          ))}
          {service.features.length > 3 && (
            <span className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-slate-700/50 text-gray-400 border border-slate-600/50">
              +{service.features.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Benefits */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-white mb-2">Key Benefits</h4>
        <ul className="space-y-1">
          {service.benefits.slice(0, 2).map((benefit: string, idx: number) => (
            <li key={idx} className="flex items-start text-xs text-gray-300">
              <ArrowRight className="w-3 h-3 mr-2 mt-0.5 text-cyan-400 flex-shrink-0" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      {/* Technical Specs */}
      {service.technicalSpecs && (
        <div className="mb-4 p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
          <h4 className="text-sm font-semibold text-white mb-2">Technical Specs</h4>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <span className="text-gray-400">Uptime:</span>
              <span className="text-green-400 ml-1">{service.technicalSpecs.uptime}</span>
            </div>
            <div>
              <span className="text-gray-400">APIs:</span>
              <span className="text-cyan-400 ml-1">{service.technicalSpecs.apiEndpoints}</span>
            </div>
          </div>
        </div>
      )}

      {/* Contact Info */}
      <div className="mb-4 p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center text-gray-400">
            <Phone className="w-3 h-3 mr-1" />
            {service.contactInfo.phone}
          </div>
          <div className="flex items-center text-gray-400">
            <Mail className="w-3 h-3 mr-1" />
            {service.contactInfo.email}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2">
        <Link
          to={`/services/${service.id}`}
          className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-medium"
        >
          Learn More
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
        <a
          href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
          className="inline-flex items-center justify-center px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all duration-300"
        >
          <Mail className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Enhanced Services Showcase 2025 - Zion Tech Group" 
        description="Discover our comprehensive range of innovative AI-powered services, IT solutions, and cutting-edge technology services designed to transform your business in 2025 and beyond."
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1),transparent_50%)]"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Revolutionary 2025 Services
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Enhanced Services Showcase 2025
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Experience the future of technology with our comprehensive suite of AI-powered services, 
              innovative micro SAAS solutions, and cutting-edge IT services designed to propel your business 
              into the next generation of digital transformation.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">{allServices.length}+</div>
                <div className="text-sm text-gray-400">Innovative Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">99.9%</div>
                <div className="text-sm text-gray-400">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">24/7</div>
                <div className="text-sm text-gray-400">Expert Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">500%</div>
                <div className="text-sm text-gray-400">Average ROI</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services, features, or technologies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  {priceRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name</option>
                  <option value="rating">Rating</option>
                </select>
              </div>

              {/* View Mode */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">View Mode</label>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                      viewMode === 'grid' 
                        ? 'bg-cyan-500 text-white' 
                        : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                    }`}
                  >
                    Grid
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                      viewMode === 'list' 
                        ? 'bg-cyan-500 text-white' 
                        : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                    }`}
                  >
                    List
                  </button>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-sm text-gray-400">
              Showing {filteredServices.length} of {allServices.length} services
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {sortedServices.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}
            >
              {sortedServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search criteria or filters to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setSelectedPriceRange('All');
                }}
                className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our experts to discuss how our innovative services can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors duration-300 font-medium"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors duration-300 font-medium"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Website: <a href="https://ziontechgroup.com" className="text-cyan-400 hover:underline">ziontechgroup.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
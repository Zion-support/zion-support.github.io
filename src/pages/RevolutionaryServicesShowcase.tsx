import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Brain,
  Shield,
  Cpu,
  Rocket,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  BarChart3,
  Heart,
  Eye,
  Atom,
  Activity,
  Code,
  Database,
  Server,
  Network,
  Lock,
  Cloud,
  Target,
  TrendingUp,
  Briefcase,
  Globe,
  Phone,
  Mail,
  MapPin,
  Search,
  Filter,
  DollarSign,
  Clock,
  Award,
  TrendingDown,
  Sparkles,
  Crown,
  Gem,
  Lightbulb,
  ShieldCheck,
  CpuIcon,
  Satellite,
  Code
} from 'lucide-react';
import { REVOLUTIONARY_SERVICES_2025 } from '../data/revolutionaryServices2025';

export function RevolutionaryServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('innovation');

  const categories = [
    { id: 'all', name: 'All Categories', icon: Globe, color: 'from-gray-500 to-gray-600' },
    { id: 'AI & Financial Services', name: 'AI & Financial Services', icon: Brain, color: 'from-purple-500 to-pink-600' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', icon: Heart, color: 'from-red-500 to-pink-600' },
    { id: 'Quantum Computing', name: 'Quantum Computing', icon: Atom, color: 'from-blue-500 to-cyan-600' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-600' },
    { id: 'IoT & Edge Computing', name: 'IoT & Edge Computing', icon: Cpu, color: 'from-green-500 to-emerald-600' },
    { id: 'AI & Marketing', name: 'AI & Marketing', icon: TrendingUp, color: 'from-yellow-500 to-orange-600' },
    { id: 'Blockchain & Web3', name: 'Blockchain & Web3', icon: Code, color: 'from-indigo-500 to-purple-600' },
    { id: 'Space Technology', name: 'Space Technology', icon: Satellite, color: 'from-purple-500 to-indigo-600' },
    { id: 'AI & Project Management', name: 'AI & Project Management', icon: Target, color: 'from-teal-500 to-blue-600' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $2,000', range: '< $2,000' },
    { id: 'medium', name: '$2,000 - $4,000', range: '$2,000 - $4,000' },
    { id: 'high', name: 'Over $4,000', range: '> $4,000' }
  ];

  const sortOptions = [
    { id: 'innovation', name: 'Innovation Level', icon: Sparkles },
    { id: 'price', name: 'Price', icon: DollarSign },
    { id: 'roi', name: 'ROI', icon: TrendingUp },
    { id: 'delivery', name: 'Delivery Time', icon: Clock }
  ];

  const filteredServices = REVOLUTIONARY_SERVICES_2025.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    let matchesPrice = true;
    if (priceRange === 'low') {
      matchesPrice = service.price < 2000;
    } else if (priceRange === 'medium') {
      matchesPrice = service.price >= 2000 && service.price <= 4000;
    } else if (priceRange === 'high') {
      matchesPrice = service.price > 4000;
    }
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'roi':
        return parseInt(b.roi.replace('%', '')) - parseInt(a.roi.replace('%', ''));
      case 'delivery':
        return parseInt(a.estimatedDelivery.split('-')[0]) - parseInt(b.estimatedDelivery.split('-')[0]);
      case 'innovation':
      default:
        const innovationOrder = { 'Revolutionary': 3, 'Advanced': 2, 'Standard': 1 };
        return (innovationOrder[b.innovationLevel as keyof typeof innovationOrder] || 0) - 
               (innovationOrder[a.innovationLevel as keyof typeof innovationOrder] || 0);
    }
  });

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData ? categoryData.icon : Globe;
  };

  const getCategoryColor = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData ? categoryData.color : 'from-gray-500 to-gray-600';
  };

  const getPriceRange = (price: number) => {
    if (price < 2000) return 'low';
    if (price <= 4000) return 'medium';
    return 'high';
  };

  const getPriceColor = (price: number) => {
    const range = getPriceRange(price);
    switch (range) {
      case 'low': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'high': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getInnovationIcon = (level: string) => {
    switch (level) {
      case 'Revolutionary': return Crown;
      case 'Advanced': return Gem;
      case 'Standard': return Star;
      default: return Star;
    }
  };

  const getInnovationColor = (level: string) => {
    switch (level) {
      case 'Revolutionary': return 'text-yellow-400';
      case 'Advanced': return 'text-blue-400';
      case 'Standard': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen py-8 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                <Sparkles className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Revolutionary Services 2025
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Discover our cutting-edge micro SAAS services, AI-powered platforms, and emerging technology solutions. 
              Each service is designed with proven ROI and market-leading capabilities to transform your business.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 text-cyan-400">
                <Crown className="w-5 h-5" />
                <span>Revolutionary Innovation</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-400">
                <Gem className="w-5 h-5" />
                <span>Advanced Technology</span>
              </div>
              <div className="flex items-center space-x-2 text-green-400">
                <Star className="w-5 h-5" />
                <span>Proven Solutions</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Filters and Search */}
        <div className="bg-gray-800 rounded-xl p-6 mb-8 border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>

            {/* Price Range Filter */}
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              {priceRanges.map((range) => (
                <option key={range.id} value={range.id}>
                  {range.name}
                </option>
              ))}
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {sortedServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-cyan-500/30 group"
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-lg flex items-center justify-center`}>
                    {(() => {
                      const IconComponent = getCategoryIcon(service.category);
                      return <IconComponent className="w-6 h-6 text-white" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-400">{service.category}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {(() => {
                    const InnovationIcon = getInnovationIcon(service.innovationLevel);
                    return <InnovationIcon className={`w-5 h-5 ${getInnovationColor(service.innovationLevel)}`} />;
                  })()}
                  <span className={`text-xs font-medium ${getInnovationColor(service.innovationLevel)}`}>
                    {service.innovationLevel}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Key Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Features</h4>
                <div className="space-y-1">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-xs text-gray-400">
                      <CheckCircle className="w-3 h-3 text-cyan-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-xs text-gray-500">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>
              </div>

              {/* Pricing and ROI */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className={`text-2xl font-bold ${getPriceColor(service.price)}`}>
                    ${service.price.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-400">per month</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400">
                    {service.roi}
                  </div>
                  <div className="text-xs text-gray-400">ROI</div>
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Benefits</h4>
                <div className="space-y-1">
                  {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start space-x-2 text-xs text-gray-400">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specs */}
              {service.technicalSpecs && (
                <div className="mb-4 p-3 bg-gray-700 rounded-lg">
                  <h4 className="text-sm font-semibold text-white mb-2">Technical Specs</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-gray-400">Uptime:</span>
                      <span className="text-white ml-1">{service.technicalSpecs.uptime}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">APIs:</span>
                      <span className="text-white ml-1">{service.technicalSpecs.apiEndpoints}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Market Info */}
              <div className="mb-4 text-xs text-gray-400">
                <div className="flex justify-between">
                  <span>Market Size: {service.marketSize}</span>
                  <span>Delivery: {service.estimatedDelivery}</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-2">
                <Link
                  to={`/services/${service.id}`}
                  className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                >
                  Learn More
                </Link>
                <Link
                  to="/contact"
                  className="block w-full text-center bg-transparent text-cyan-400 px-4 py-2 rounded-lg font-semibold border border-cyan-400 hover:bg-cyan-400/10 transition-colors"
                >
                  Contact Sales
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Results Summary */}
        <div className="mt-12 text-center">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-2">
              Found {sortedServices.length} Revolutionary Services
            </h3>
            <p className="text-gray-400">
              Ready to transform your business with cutting-edge technology solutions?
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-semibold transform hover:scale-105"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center space-x-2 px-8 py-3 bg-transparent text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-200 font-semibold border-2 border-cyan-400"
              >
                <span>Request Custom Quote</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Revolutionize Your Business?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Our team of experts is ready to help you implement these cutting-edge solutions. 
              Contact us today to discuss your specific needs and get started on your digital transformation journey.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3 text-white">
                <Phone className="w-6 h-6" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-white">
                <Mail className="w-6 h-6" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-white">
                <MapPin className="w-6 h-6" />
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Contact Our Team</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent text-white rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold text-lg border-2 border-white"
              >
                <span>Request Custom Quote</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
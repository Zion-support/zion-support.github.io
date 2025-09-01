import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {

  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Shield, 
  Brain, 
  Database, 
  Globe,
  Zap,
  Award,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle,
  Clock,
  DollarSign,
  Users,
  Target,
  BarChart3
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2032 } from '../data/innovativeMicroSaasServices2032';

const InnovativeServicesShowcase2032: React.FC = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['All', 'AI & Legal Tech', 'Cybersecurity', 'AI & Healthcare', 'Blockchain & Supply Chain', 'IoT & Edge Computing', 'AI & FinTech', 'AI & Marketing', 'AI & Quantum Computing', 'AI & Customer Experience', 'AI & Supply Chain'];

  const priceRanges = [
    'All',
    'Under $500',
    '$500 - $1,000',
    '$1,000 - $2,000',
    '$2,000+'
  ];

  const filteredServices = useMemo(() => {

    let filtered = INNOVATIVE_MICRO_SAAS_SERVICES_2032;

    // Filter by search term
    if (searchTerm) {

      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {

      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Filter by price range
    if (selectedPriceRange !== 'All') {

      switch (selectedPriceRange) {

        case 'Under $500':
          filtered = filtered.filter(service => service.price < 500);
          break;
        case '$500 - $1,000':
          filtered = filtered.filter(service => service.price >= 500 && service.price < 1000);
          break;
        case '$1,000 - $2,000':
          filtered = filtered.filter(service => service.price >= 1000 && service.price < 2000);
          break;
        case '$2,000+':
          filtered = filtered.filter(service => service.price >= 2000);
          break;
      }
    }

    // Sort services
    switch (sortBy) {

      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'featured':
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      case 'trending':
        filtered.sort((a, b) => (b.trending ? 1 : 0) - (a.trending ? 1 : 0));
        break;
      case 'name':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy]);

  const getCategoryIcon = (category: string) => {

    switch (category) {

      case 'AI & Legal Tech':
        return <Shield className="w-6 h-6" />;
      case 'Cybersecurity':
        return <Shield className="w-6 h-6" />;
      case 'AI & Healthcare':
        return <Brain className="w-6 h-6" />;
      case 'Blockchain & Supply Chain':
        return <Database className="w-6 h-6" />;
      case 'IoT & Edge Computing':
        return <Globe className="w-6 h-6" />;
      case 'AI & FinTech':
        return <DollarSign className="w-6 h-6" />;
      case 'AI & Marketing':
        return <Target className="w-6 h-6" />;
      case 'AI & Quantum Computing':
        return <Zap className="w-6 h-6" />;
      case 'AI & Customer Experience':
        return <Users className="w-6 h-6" />;
      case 'AI & Supply Chain':
        return <BarChart3 className="w-6 h-6" />;
      default:
        return <Star className="w-6 h-6" />;
    }
  };

  const getInnovationBadge = (level: string) => {

    switch (level) {

      case 'Revolutionary':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            <Zap className="w-3 h-3 mr-1" />
            Revolutionary
          </span>
        );
      case 'Advanced':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
            <Star className="w-3 h-3 mr-1" />
            Advanced
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-500 text-white">
            {level}
          </span>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <div className="container mx-auto px-4 py-16 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Innovative Services 2032
          </h1>
          <p className="text-xl mb-8 max-w-4xl mx-auto text-gray-300">
            Discover our cutting-edge micro SAAS services, AI solutions, and revolutionary technology platforms designed to transform your business in 2032 and beyond.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center text-blue-400">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>10+ Revolutionary Services</span>
            </div>
            <div className="flex items-center text-green-400">
              <TrendingUp className="w-5 h-5 mr-2" />
              <span>Proven ROI</span>
            </div>
            <div className="flex items-center text-purple-400">
              <Award className="w-5 h-5 mr-2" />
              <span>Industry Leading</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-4 text-white">Ready to Transform Your Business?</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center justify-center text-cyan-300">
              <Phone className="w-4 h-4 mr-2" />
              <a href="tel:+13024640950" className="hover:text-cyan-200">+1 302 464 0950</a>
            </div>
            <div className="flex items-center justify-center text-cyan-300">
              <Mail className="w-4 h-4 mr-2" />
              <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-200">kleber@ziontechgroup.com</a>
            </div>
            <div className="flex items-center justify-center text-cyan-300">
              <MapPin className="w-4 h-4 mr-2" />
              <span>364 E Main St STE 1008, Middletown, DE 19709</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Filters and Search */}
      <div className="container mx-auto px-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-gray-800 text-white">
                  {category}
                </option>
              ))}
            </select>

            {/* Price Range Filter */}
            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {priceRanges.map(range => (
                <option key={range} value={range} className="bg-gray-800 text-white">
                  {range}
                </option>
              ))}
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="featured" className="bg-gray-800 text-white">Featured First</option>
              <option value="trending" className="bg-gray-800 text-white">Trending</option>
              <option value="price-low" className="bg-gray-800 text-white">Price: Low to High</option>
              <option value="price-high" className="bg-gray-800 text-white">Price: High to Low</option>
              <option value="name" className="bg-gray-800 text-white">Name: A to Z</option>
            </select>
          </div>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center text-blue-400 mb-2">
                  {getCategoryIcon(service.category)}
                </div>
                <div className="flex flex-col items-end">
                  {service.featured && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 mb-2">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </span>
                  )}
                  {service.trending && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-500/20 text-red-300 border border-red-500/30">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Trending
                    </span>
                  )}
                </div>
              </div>

              {/* Service Title and Innovation Level */}
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <div className="flex items-center justify-between mb-3">
                {getInnovationBadge(service.innovationLevel)}
                <span className="text-sm text-gray-400">{service.category}</span>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>

              {/* Key Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="text-xs text-gray-400 flex items-start">
                      <CheckCircle className="w-3 h-3 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                <ul className="space-y-1">
                  {service.benefits.slice(0, 2).map((benefit, idx) => (
                    <li key={idx} className="text-xs text-gray-400 flex items-start">
                      <TrendingUp className="w-3 h-3 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing and ROI */}
              <div className="mb-4 p-3 bg-white/5 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-blue-400">
                    ${service.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-400">/month</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-green-400">ROI: {service.roi}</span>
                  <span className="text-gray-400">{service.pricingModel}</span>
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  Market: {service.marketPrice}
                </div>
              </div>

              {/* Technical Specs */}
              {service.technicalSpecs && (
                <div className="mb-4 p-3 bg-white/5 rounded-lg">
                  <h4 className="text-sm font-semibold text-white mb-2">Technical Specs:</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
                    <div>
                      <span className="font-medium">Uptime:</span> {service.technicalSpecs.uptime}
                    </div>
                    <div>
                      <span className="font-medium">API Endpoints:</span> {service.technicalSpecs.apiEndpoints}
                    </div>
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {service.tags.slice(0, 4).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Service Details */}
              <div className="grid grid-cols-2 gap-2 mb-4 text-xs text-gray-400">
                <div className="flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {service.estimatedDelivery}
                </div>
                <div className="flex items-center">
                  <Users className="w-3 h-3 mr-1" />
                  {service.supportLevel}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-2">
                <a
                  href={`https://ziontechgroup.com/contact?service=${service.id}`}
                  className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center"
                >
                  Get Started
                </a>
                <a
                  href={`https://ziontechgroup.com/services/${service.id}`}
                  className="w-full px-4 py-2 border border-blue-500/30 text-blue-300 text-sm font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300 text-center"
                >
                  Learn More
                </a>
              </div>

              {/* Contact Info */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>Contact: {service.contactInfo.phone}</span>
                  <a
                    href={`mailto:${service.contactInfo.email}`}
                    className="text-blue-400 hover:text-blue-300"
                  >
                    {service.contactInfo.email}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-gray-400 text-xl mb-4">No services found matching your criteria</div>
            <button
              onClick={() => {

                setSearchTerm('');
                setSelectedCategory('All');
                setSelectedPriceRange('All');
                setSortBy('featured');
              }}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="container mx-auto px-4 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Our innovative services are designed to give you a competitive edge in 2032. 
            Contact us today to discuss how we can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://ziontechgroup.com/contact"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Schedule a Consultation
            </a>
            <a
              href="tel:+13024640950"
              className="px-8 py-3 border border-blue-500 text-blue-300 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300"
            >
              Call +1 302 464 0950
            </a>
          </div>
          <div className="mt-6 text-sm text-gray-400">
            <p>Visit us at: <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300">ziontechgroup.com</a></p>
            <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InnovativeServicesShowcase2032;
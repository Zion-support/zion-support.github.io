import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Zap, 
  Shield, 
  Globe, 
  Cpu,
  Brain,
  Blockchain,
  Wifi,
  Eye,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle,
  Clock,
  Users,
  Target,
  BarChart3
} from 'lucide-react';
import { ADVANCED_MICRO_SAAS_SERVICES } from '../data/advancedMicroSaasServices';
import { EMERGING_TECH_INNOVATIVE_SERVICES } from '../data/emergingTechInnovativeServices';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: {
    monthly: number;
    yearly: number;
    currency: string;
    pricingModel: string;
  };
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
    address: string;
  };
  technology: string[];
  integrations: string[];
  compliance: string[];
  roi: string;
  competitors: string[];
  marketTrend: string;
  innovationLevel: string;
  launchDate: string;
  status: 'Active' | 'Beta' | 'Coming Soon';
}

const ComprehensiveServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Combine all services
  const allServices: Service[] = [
    ...ADVANCED_MICRO_SAAS_SERVICES,
    ...EMERGING_TECH_INNOVATIVE_SERVICES
  ];

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(allServices.map(service => service.category)))];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      
      let matchesPrice = true;
      if (selectedPriceRange !== 'All') {
        const [min, max] = selectedPriceRange.split('-').map(Number);
        if (max) {
          matchesPrice = service.price.monthly >= min && service.price.monthly <= max;
        } else {
          matchesPrice = service.price.monthly >= min;
        }
      }
      
      return matchesSearch && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.title.localeCompare(b.title);
        case 'price':
          return a.price.monthly - b.price.monthly;
        case 'roi':
          return parseInt(b.roi.split('%')[0]) - parseInt(a.roi.split('%')[0]);
        case 'newest':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
        default:
          return 0;
      }
    });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
      case 'AI & Business Intelligence':
      case 'AI & Customer Service':
      case 'AI & Project Management':
      case 'AI & Financial Services':
      case 'AI & Human Resources':
      case 'Artificial Intelligence':
        return <Brain className="w-6 h-6" />;
      case 'Blockchain & Web3':
        return <Blockchain className="w-6 h-6" />;
      case 'Internet of Things':
        return <Wifi className="w-6 h-6" />;
      case 'Quantum Computing':
        return <Cpu className="w-6 h-6" />;
      case 'Extended Reality':
        return <Eye className="w-6 h-6" />;
      default:
        return <Zap className="w-6 h-6" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Beta':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Coming Soon':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getSupportLevelColor = (level: string) => {
    switch (level) {
      case 'enterprise':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'premium':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'standard':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Zion Tech Group
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Comprehensive Micro SAAS Services & Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Discover our cutting-edge AI-powered services, emerging technology solutions, and innovative micro SAAS platforms designed to transform your business operations and drive exponential growth.
            </p>
            
            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-blue-300">Get Started Today</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>Middletown, DE</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/20 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-white/20 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Price Range Filter */}
            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="px-4 py-2 bg-white/20 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">All Prices</option>
              <option value="0-100">$0 - $100</option>
              <option value="100-500">$100 - $500</option>
              <option value="500-1000">$500 - $1,000</option>
              <option value="1000-2000">$1,000 - $2,000</option>
              <option value="2000-">$2,000+</option>
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-white/20 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="roi">Sort by ROI</option>
              <option value="newest">Sort by Newest</option>
            </select>
          </div>

          {/* View Mode Toggle */}
          <div className="flex justify-center mt-4">
            <div className="bg-white/10 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  viewMode === 'grid' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                Grid View
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  viewMode === 'list' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                List View
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-6">
          <p className="text-gray-300">
            Showing {filteredServices.length} of {allServices.length} services
          </p>
        </div>

        {/* Services Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-blue-400/50"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {getCategoryIcon(service.category)}
                    <div>
                      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                      <p className="text-sm text-gray-400">{service.category}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(service.status)}`}>
                      {service.status}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getSupportLevelColor(service.supportLevel)}`}>
                      {service.supportLevel}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>

                {/* Price */}
                <div className="bg-white/10 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-blue-400">
                        {service.price.currency}{service.price.monthly}
                        <span className="text-sm text-gray-400">/month</span>
                      </p>
                      <p className="text-sm text-gray-400">
                        {service.price.currency}{service.price.yearly}/year (save 17%)
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-400">Market Price</p>
                      <p className="text-sm text-green-400">{service.marketPrice}</p>
                    </div>
                  </div>
                </div>

                {/* ROI */}
                <div className="bg-green-500/20 rounded-lg p-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    <span className="text-green-400 font-semibold">ROI: {service.roi}</span>
                  </div>
                </div>

                {/* Features Preview */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                  <div className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-blue-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <p className="text-xs text-gray-500">+{service.features.length - 3} more features</p>
                    )}
                  </div>
                </div>

                {/* Service Details */}
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{service.estimatedDelivery}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3" />
                    <span>{service.supportLevel}</span>
                  </div>
                </div>

                {/* Contact Button */}
                <div className="space-y-2">
                  <a
                    href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-center block transition-colors duration-200"
                  >
                    Get Started
                  </a>
                  <a
                    href={service.contactInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg text-center block transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>Learn More</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
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
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Service Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        {getCategoryIcon(service.category)}
                        <div>
                          <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                          <p className="text-gray-400">{service.category} • {service.subcategory}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(service.status)}`}>
                          {service.status}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getSupportLevelColor(service.supportLevel)}`}>
                          {service.supportLevel}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4">{service.description}</p>

                    {/* Features and Benefits */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                              <CheckCircle className="w-4 h-4 text-blue-400" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.slice(0, 4).map((benefit, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                              <Star className="w-4 h-4 text-yellow-400" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Pricing and Contact */}
                  <div className="space-y-4">
                    {/* Price */}
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-blue-400">
                          {service.price.currency}{service.price.monthly}
                          <span className="text-sm text-gray-400">/month</span>
                        </p>
                        <p className="text-sm text-gray-400">
                          {service.price.currency}{service.price.yearly}/year
                        </p>
                        <p className="text-xs text-green-400 mt-1">Save 17% annually</p>
                      </div>
                    </div>

                    {/* ROI */}
                    <div className="bg-green-500/20 rounded-lg p-3">
                      <div className="flex items-center justify-center space-x-2">
                        <TrendingUp className="w-5 h-5 text-green-400" />
                        <span className="text-green-400 font-semibold">ROI: {service.roi}</span>
                      </div>
                    </div>

                    {/* Market Info */}
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <p className="text-xs text-gray-400">Market Price</p>
                      <p className="text-sm text-green-400 font-semibold">{service.marketPrice}</p>
                    </div>

                    {/* Contact */}
                    <div className="space-y-2">
                      <a
                        href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg text-center block transition-colors duration-200 font-semibold"
                      >
                        Contact Sales
                      </a>
                      <a
                        href={service.contactInfo.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-white/10 hover:bg-white/20 text-white py-3 px-4 rounded-lg text-center block transition-colors duration-200 flex items-center justify-center space-x-2"
                      >
                        <span>Visit Website</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">No services found matching your criteria</div>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setSelectedPriceRange('All');
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-colors duration-200"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Contact CTA Section */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team of experts is ready to help you implement the perfect solution for your business needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-blue-400 font-semibold">+1 302 464 0950</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-blue-400 font-semibold">kleber@ziontechgroup.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-blue-400 font-semibold">Middletown, DE</p>
            </div>
          </div>

          <div className="space-x-4">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Business Consultation Request"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg text-lg font-semibold transition-colors duration-200 inline-block"
            >
              Get Free Consultation
            </a>
            <a
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white py-3 px-8 rounded-lg text-lg font-semibold transition-colors duration-200 inline-block"
            >
              Visit Our Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveServicesShowcase;
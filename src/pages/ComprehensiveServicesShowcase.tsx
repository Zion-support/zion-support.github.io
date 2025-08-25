import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Users, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Lock,
  Cpu,
  Database,
  Network,
  Code,
  BarChart3,
  Target,
  Lightbulb,
  Rocket,
  Phone,
  Mail,
  Globe,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { ADVANCED_MICRO_SAAS_SERVICES } from '../data/advancedMicroSaasServices';
import { EMERGING_TECH_SERVICES } from '../data/emergingTechServices';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
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
  };
  technology?: string[];
  integrations?: string[];
  compliance?: string[];
  roi?: string;
  competitors?: string[];
  marketTrend?: string;
  innovationLevel?: string;
}

const ComprehensiveServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 15000]);
  const [sortBy, setSortBy] = useState<string>('name');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  // Combine all services
  const allServices: Service[] = [
    ...ADVANCED_MICRO_SAAS_SERVICES,
    ...EMERGING_TECH_SERVICES,
    ...COMPREHENSIVE_SERVICES
  ];

  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];
  
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (service.tags && service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
    const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.title.localeCompare(b.title);
      case 'category':
        return a.category.localeCompare(b.category);
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
        duration: 0.5
      }
    }
  };

  const toggleServiceExpansion = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const formatPrice = (price: number, currency: string) => {
    if (price >= 1000) {
      return `${currency}${(price / 1000).toFixed(1)}k`;
    }
    return `${currency}${price}`;
  };

  const getSupportLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'enterprise':
        return 'bg-purple-600';
      case 'premium':
        return 'bg-blue-600';
      case 'standard':
        return 'bg-green-600';
      default:
        return 'bg-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      {/* Header Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Comprehensive Services Showcase
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover our complete portfolio of cutting-edge technology solutions, from AI-powered micro-SaaS to emerging quantum technologies
          </p>
          
          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-gray-800 text-white">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="category">Sort by Category</option>
              </select>
            </div>

            {/* Price Range Filter */}
            <div className="bg-gray-800/30 p-4 rounded-lg">
              <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="0"
                  max="15000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="flex-1"
                />
                <span className="text-sm text-gray-300">
                  {formatPrice(priceRange[0], '$')} - {formatPrice(priceRange[1], '$')}/month
                </span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">{allServices.length}</div>
              <div className="text-gray-400">Total Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">{categories.length - 1}</div>
              <div className="text-gray-400">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">{filteredServices.length}</div>
              <div className="text-gray-400">Filtered Results</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {sortedServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              {/* Service Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-400 text-sm mb-3">{service.description}</p>
                  </div>
                  <button
                    onClick={() => toggleServiceExpansion(service.id)}
                    className="ml-2 p-1 text-gray-400 hover:text-white transition-colors"
                  >
                    {expandedService === service.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </div>

                {/* Category and Price */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                    {service.category}
                  </span>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-cyan-400">
                      {formatPrice(service.price, service.currency)}
                    </div>
                    <div className="text-gray-400 text-sm">per {service.pricingModel}</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  {service.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                      +{service.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Support Level */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-400">Support Level:</span>
                  <span className={`px-2 py-1 text-xs text-white rounded ${getSupportLevelColor(service.supportLevel)}`}>
                    {service.supportLevel}
                  </span>
                </div>

                {/* Quick Info */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center text-gray-400">
                    <Clock size={16} className="mr-2" />
                    {service.estimatedDelivery}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Users size={16} className="mr-2" />
                    {service.targetAudience.length} audiences
                  </div>
                </div>

                {/* Contact Info */}
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-400">
                      <Phone size={16} className="mr-2" />
                      {service.contactInfo.phone}
                    </div>
                    <a
                      href={`mailto:${service.contactInfo.email}`}
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Mail size={16} className="mr-2" />
                      Contact
                    </a>
                  </div>
                </div>
              </div>

              {/* Expanded Details */}
              {expandedService === service.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="border-t border-gray-700 bg-gray-900/50"
                >
                  <div className="p-6 space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <CheckCircle size={20} className="mr-2 text-green-400" />
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-300">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <TrendingUp size={20} className="mr-2 text-blue-400" />
                        Benefits
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-300">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Use Cases */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <Target size={20} className="mr-2 text-purple-400" />
                        Use Cases
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.useCases.map((useCase, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full border border-purple-600/30"
                          >
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Technology Stack */}
                    {service.technology && (
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                          <Code size={20} className="mr-2 text-green-400" />
                          Technology Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technology.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-green-600/20 text-green-300 text-xs rounded-full border border-green-600/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* ROI and Market Info */}
                    {service.roi && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                            <Award size={20} className="mr-2 text-yellow-400" />
                            ROI
                          </h4>
                          <p className="text-yellow-400 font-semibold">{service.roi}</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                            <Globe size={20} className="mr-2 text-cyan-400" />
                            Market Price
                          </h4>
                          <p className="text-cyan-400 font-semibold">{service.marketPrice}</p>
                        </div>
                      </div>
                    )}

                    {/* Innovation Level */}
                    {service.innovationLevel && (
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                          <Lightbulb size={20} className="mr-2 text-yellow-400" />
                          Innovation Level
                        </h4>
                        <p className="text-gray-300 text-sm">{service.innovationLevel}</p>
                      </div>
                    )}

                    {/* CTA */}
                    <div className="pt-4 border-t border-gray-700">
                      <div className="flex flex-col sm:flex-row gap-3">
                        <a
                          href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                          className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg text-center font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center"
                        >
                          <Mail size={20} className="mr-2" />
                          Get Quote
                        </a>
                        <a
                          href={`tel:${service.contactInfo.phone}`}
                          className="flex-1 bg-gray-700 text-white px-6 py-3 rounded-lg text-center font-semibold hover:bg-gray-600 transition-all duration-300 flex items-center justify-center"
                        >
                          <Phone size={20} className="mr-2" />
                          Call Now
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {sortedServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-300 mb-2">No services found</h3>
            <p className="text-gray-400">Try adjusting your search criteria or filters</p>
          </motion.div>
        )}

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our team of experts is ready to help you implement the perfect solution for your needs. 
              Get in touch today to start your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center"
              >
                <Phone size={24} className="mr-2" />
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-gray-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-600 transition-all duration-300 flex items-center justify-center"
              >
                <Mail size={24} className="mr-2" />
                Email Us
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Website: <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">https://ziontechgroup.com</a></p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComprehensiveServicesShowcase;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
  ChevronUp,
  ExternalLink
} from 'lucide-react';
import { ADVANCED_MICRO_SAAS_SERVICES } from '../data/advancedMicroSaasServices';
import { EMERGING_TECH_SERVICES } from '../data/emergingTechServices';

// Use the actual service types from the data files
type Service = typeof ADVANCED_MICRO_SAAS_SERVICES[0] | typeof EMERGING_TECH_SERVICES[0];

// Helper functions to safely access service properties
const getServiceProperty = (service: Service, property: string, defaultValue: string): string => {
  if (property in service) {
    const value = (service as any)[property];
    if (value !== undefined && value !== null) {
      return String(value);
    }
  }
  return defaultValue;
};

const getServiceTags = (service: Service): string[] => {
  if ('tags' in service && service.tags) {
    return service.tags;
  }
  return [];
};

const getServicePrice = (service: Service): { price: number; currency: string; pricingModel: string } => {
  if ('price' in service && typeof service.price === 'object') {
    // EmergingTechService has a price object
    const priceObj = service.price as any;
    return {
      price: priceObj.monthly || priceObj.yearly || priceObj.oneTime || 0,
      currency: priceObj.currency || '$',
      pricingModel: priceObj.pricingModel || 'custom'
    };
  } else if ('price' in service && typeof service.price === 'number') {
    // AdvancedMicroSaasService has a direct price number
    return {
      price: service.price,
      currency: (service as any).currency || '$',
      pricingModel: (service as any).pricingModel || 'monthly'
    };
  }
  return { price: 0, currency: '$', pricingModel: 'custom' };
};

const InnovativeMicroSaasServices: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  // Combine all services
  const allServices: Service[] = [
    ...ADVANCED_MICRO_SAAS_SERVICES,
    ...EMERGING_TECH_SERVICES
  ];

  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];
  
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
<<<<<<< HEAD
    const matchesSearch = getServiceProperty(service, 'title', '').toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         getServiceTags(service).some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
=======
<<<<<<< HEAD
    const serviceTitle = 'title' in service ? service.title : service.name;
    const matchesSearch = serviceTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ('tags' in service && service.tags && service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
=======
    const matchesSearch = getServiceProperty(service, 'title', '').toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         getServiceTags(service).some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
>>>>>>> origin/cursor/website-audit-and-enhancement-3843
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    return matchesCategory && matchesSearch;
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
            Innovative Micro-SaaS Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover our cutting-edge micro-SaaS solutions that combine AI, quantum computing, and emerging technologies to transform your business
          </p>
          
          {/* Hero CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/comprehensive-services-showcase"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Globe size={24} className="mr-2" />
              View Complete Portfolio
            </Link>
            <a
              href="tel:+13024640950"
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Phone size={24} className="mr-2" />
              Call +1 302 464 0950
            </a>
          </div>
          
          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search innovative services..."
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
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">{allServices.length}</div>
              <div className="text-gray-400">Innovative Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">{categories.length - 1}</div>
              <div className="text-gray-400">Technology Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">{filteredServices.length}</div>
              <div className="text-gray-400">Available Solutions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">24/7</div>
              <div className="text-gray-400">Expert Support</div>
            </div>
          </div>
        </motion.div>

        {/* Featured Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Innovative Solutions
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.slice(0, 6).map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                {/* Service Header */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
<<<<<<< HEAD
                      <h3 className="text-xl font-bold text-white mb-2">{getServiceProperty(service, 'title', 'Service')}</h3>
=======
<<<<<<< HEAD
                      <h3 className="text-xl font-bold text-white mb-2">{'title' in service ? service.title : service.name}</h3>
=======
                      <h3 className="text-xl font-bold text-white mb-2">{getServiceProperty(service, 'title', 'Service')}</h3>
>>>>>>> origin/cursor/website-audit-and-enhancement-3843
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
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
<<<<<<< HEAD
                        {formatPrice(getServicePrice(service).price, getServicePrice(service).currency)}
                      </div>
                      <div className="text-gray-400 text-sm">per {getServicePrice(service).pricingModel}</div>
=======
<<<<<<< HEAD
                        {typeof service.price === 'number' ? formatPrice(service.price, 'currency' in service ? (service.currency as string) : '$') : 
                         'price' in service && typeof service.price === 'object' ? 
                         `$${service.price.monthly || service.price.yearly || service.price.oneTime}` : '$99'}
                      </div>
                      <div className="text-gray-400 text-sm">per {'pricingModel' in service ? service.pricingModel : 'month'}
                      </div>
=======
                        {formatPrice(getServicePrice(service).price, getServicePrice(service).currency)}
                      </div>
                      <div className="text-gray-400 text-sm">per {getServicePrice(service).pricingModel}</div>
>>>>>>> origin/cursor/website-audit-and-enhancement-3843
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
                    </div>
                  </div>

                  {/* Tags */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
                  {'tags' in service && service.tags && (
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
                  )}

                  {/* Support Level */}
                  {'supportLevel' in service && (
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-400">Support Level:</span>
                      <span className={`px-2 py-1 text-xs text-white rounded ${getSupportLevelColor(service.supportLevel)}`}>
                        {service.supportLevel}
                      </span>
                    </div>
                  )}
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
                  <div className="flex flex-wrap gap-2 mb-4">
                    {getServiceTags(service).slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {getServiceTags(service).length > 3 && (
                      <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                        +{getServiceTags(service).length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Support Level */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-400">Support Level:</span>
                    <span className={`px-2 py-1 text-xs text-white rounded ${getSupportLevelColor(getServiceProperty(service, 'supportLevel', 'standard'))}`}>
                      {getServiceProperty(service, 'supportLevel', 'standard')}
                    </span>
                  </div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-3843
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7

                  {/* Quick Info */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center text-gray-400">
                      <Clock size={16} className="mr-2" />
<<<<<<< HEAD
                      {getServiceProperty(service, 'estimatedDelivery', 'Custom')}
=======
<<<<<<< HEAD
                      {'estimatedDelivery' in service ? service.estimatedDelivery : '2-4 weeks'}
=======
                      {getServiceProperty(service, 'estimatedDelivery', 'Custom')}
>>>>>>> origin/cursor/website-audit-and-enhancement-3843
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
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
                          {service.features.slice(0, 6).map((feature, index) => (
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
                          {service.benefits.slice(0, 4).map((benefit, index) => (
                            <div key={index} className="flex items-center text-sm text-gray-300">
                              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                              {benefit}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Innovation Level */}
<<<<<<< HEAD
                      {getServiceProperty(service, 'innovationLevel', '') && (
=======
<<<<<<< HEAD
                      {'innovationLevel' in service && service.innovationLevel && (
=======
                      {getServiceProperty(service, 'innovationLevel', '') && (
>>>>>>> origin/cursor/website-audit-and-enhancement-3843
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                            <Lightbulb size={20} className="mr-2 text-yellow-400" />
                            Innovation Level
                          </h4>
<<<<<<< HEAD
                          <p className="text-gray-300 text-sm">{getServiceProperty(service, 'innovationLevel', '')}</p>
=======
<<<<<<< HEAD
                                                      <p className="text-gray-300 text-sm">{service.innovationLevel as string}</p>
=======
                          <p className="text-gray-300 text-sm">{getServiceProperty(service, 'innovationLevel', '')}</p>
>>>>>>> origin/cursor/website-audit-and-enhancement-3843
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
                        </div>
                      )}

                      {/* CTA */}
                      <div className="pt-4 border-t border-gray-700">
                        <div className="flex flex-col sm:flex-row gap-3">
                          <a
<<<<<<< HEAD
                            href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${getServiceProperty(service, 'title', 'Service')}`}
=======
<<<<<<< HEAD
                            href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${'title' in service ? service.title : service.name}`}
=======
                            href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${getServiceProperty(service, 'title', 'Service')}`}
>>>>>>> origin/cursor/website-audit-and-enhancement-3843
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
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
          </div>

          {/* View All Services CTA */}
          {filteredServices.length > 6 && (
            <div className="text-center mt-12">
              <Link
                to="/comprehensive-services-showcase"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
              >
                <Globe size={24} className="mr-2" />
                View All {allServices.length} Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          )}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Innovate?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our team of technology experts is ready to help you implement cutting-edge solutions that will give you a competitive advantage. 
              Get in touch today to start your innovation journey.
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
              <Link
                to="/comprehensive-services-showcase"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <ExternalLink size={24} className="mr-2" />
                View Portfolio
              </Link>
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

export default InnovativeMicroSaasServices;
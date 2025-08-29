import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  ChevronDown, 
  ChevronUp,
  Star,
  Users,
  Globe,
  Lock,
  Code,
  BarChart3,
  Target,
  Rocket,
  Lightbulb,
  Award,
  Clock,
  DollarSign,
  TrendingUp,
  Eye,
  Handshake,
  Building,
  ShieldCheck,
  Network2,
  Smartphone as Mobile,
  Server as Infrastructure,
  Monitor as Analytics,
  Zap as Lightning,
  Users2,
  Award as Trophy,
  Clock as Time,
  DollarSign as Money,
  TrendingUp as Growth,
  Eye as Vision,
  Handshake as Partnership,
  Building as Enterprise,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle,
  ArrowRight,
  Shield,
  Brain,
  Cloud,
  Database,
  Smartphone,
  Server,
  Monitor,
  Cpu,
  Network,
  Smartphone as IoT,
  Server as Edge,
  Monitor as Healthcare,
  Cpu as FinTech
} from 'lucide-react';
import SEO from '@/components/SEO';
import { 
  ALL_EXPANDED_SERVICES_2027, 
  EXPANDED_SERVICE_CATEGORIES,
  getExpandedServicesByCategory,
  searchExpandedServices,
  type ExpandedService2027 
} from '@/data/expandedInnovativeServices2027';

const ExpandedServicesShowcase2027: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [filteredServices, setFilteredServices] = useState<ExpandedService2027[]>(ALL_EXPANDED_SERVICES_2027);

  useEffect(() => {
    let services = getExpandedServicesByCategory(selectedCategory);
    if (searchQuery) {
      services = searchExpandedServices(searchQuery);
    }
    setFilteredServices(services);
  }, [selectedCategory, searchQuery]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Cybersecurity':
        return Shield;
      case 'Data Analytics':
        return BarChart3;
      case 'Cloud & DevOps':
        return Cloud;
      case 'IoT & Edge Computing':
        return IoT;
      case 'Financial Technology':
        return FinTech;
      case 'Healthcare Technology':
        return Healthcare;
      default:
        return Rocket;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Cybersecurity':
        return 'from-red-500 to-pink-600';
      case 'Data Analytics':
        return 'from-blue-500 to-cyan-600';
      case 'Cloud & DevOps':
        return 'from-indigo-500 to-purple-600';
      case 'IoT & Edge Computing':
        return 'from-green-500 to-emerald-600';
      case 'Financial Technology':
        return 'from-yellow-500 to-orange-600';
      case 'Healthcare Technology':
        return 'from-teal-500 to-blue-600';
      default:
        return 'from-gray-500 to-slate-600';
    }
  };

  const formatPrice = (pricing: ExpandedService2027['pricing']) => {
    if (pricing.model === 'Transaction Fees + Governance') {
      return 'Free + Transaction Fees';
    }
    return `$${pricing.basePrice.toLocaleString()}/month`;
  };

  const renderServiceCard = (service: ExpandedService2027) => {
    const CategoryIcon = getCategoryIcon(service.category);
    const categoryColor = getCategoryColor(service.category);

    return (
      <motion.div
        key={service.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-700 overflow-hidden"
      >
        {/* Header */}
        <div className={`bg-gradient-to-r ${categoryColor} p-6 text-white`}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <CategoryIcon className="w-8 h-8" />
              <div>
                <h3 className="text-xl font-bold">{service.name}</h3>
                <p className="text-sm opacity-90">{service.category}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 fill-current" />
              <span className="font-semibold">{service.rating}</span>
              <span className="text-sm opacity-90">({service.reviews})</span>
            </div>
          </div>
          <p className="text-sm opacity-90">{service.subcategory}</p>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
            {service.description}
          </p>

          {/* Pricing */}
          <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Starting Price</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {formatPrice(service.pricing)}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500 dark:text-gray-400">Market Price</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  {service.marketPrice}
                </p>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features</h4>
            <div className="space-y-1">
              {service.features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                </div>
              ))}
              {service.features.length > 3 && (
                <button
                  onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {expandedService === service.id ? 'Show less' : `+${service.features.length - 3} more features`}
                </button>
              )}
            </div>
          </div>

          {/* Expanded Features */}
          <AnimatePresence>
            {expandedService === service.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-4"
              >
                <div className="space-y-1">
                  {service.features.slice(3).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Benefits */}
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Benefits</h4>
            <div className="grid grid-cols-2 gap-2">
              {service.benefits.slice(0, 4).map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specs */}
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technical Specs</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500 dark:text-gray-400">Uptime</p>
                <p className="font-semibold text-gray-900 dark:text-white">{service.technicalSpecs.uptime}</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">API Endpoints</p>
                <p className="font-semibold text-gray-900 dark:text-white">{service.technicalSpecs.apiEndpoints}</p>
              </div>
            </div>
          </div>

          {/* ROI and Setup */}
          <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
            <div>
              <p className="text-gray-500 dark:text-gray-400">ROI</p>
              <p className="font-semibold text-green-600">{service.roi}</p>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400">Setup Time</p>
              <p className="font-semibold text-gray-900 dark:text-white">{service.setupTime}</p>
            </div>
          </div>

          {/* Contact and Actions */}
          <div className="border-t border-gray-200 dark:border-slate-700 pt-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <Phone className="w-4 h-4" />
                <span>{service.contactInfo.phone}</span>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                service.status === 'active' ? 'bg-green-100 text-green-800' :
                service.status === 'beta' ? 'bg-yellow-100 text-yellow-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {service.status.toUpperCase()}
              </span>
            </div>
            
            <div className="flex space-x-2">
              <a
                href={`mailto:${service.contactInfo.email}`}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </a>
              <a
                href={service.contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gray-100 hover:bg-gray-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-gray-700 dark:text-gray-300 text-center py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Learn More</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const renderServiceList = (service: ExpandedService2027) => {
    const CategoryIcon = getCategoryIcon(service.category);
    const categoryColor = getCategoryColor(service.category);

    return (
      <motion.div
        key={service.id}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-slate-700 p-6"
      >
        <div className="flex items-start space-x-4">
          {/* Icon and Category */}
          <div className={`bg-gradient-to-r ${categoryColor} p-3 rounded-lg text-white flex-shrink-0`}>
            <CategoryIcon className="w-6 h-6" />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{service.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{service.category} • {service.subcategory}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm font-semibold">{service.rating}</span>
                <span className="text-xs text-gray-500">({service.reviews})</span>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
              {service.description}
            </p>

            {/* Key Info */}
            <div className="grid grid-cols-4 gap-4 mb-3 text-sm">
              <div>
                <p className="text-gray-500 dark:text-gray-400">Price</p>
                <p className="font-semibold text-gray-900 dark:text-white">{formatPrice(service.pricing)}</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">ROI</p>
                <p className="font-semibold text-green-600">{service.roi}</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Setup</p>
                <p className="font-semibold text-gray-900 dark:text-white">{service.setupTime}</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Status</p>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  service.status === 'active' ? 'bg-green-100 text-green-800' :
                  service.status === 'beta' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {service.status.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-3">
              <a
                href={`mailto:${service.contactInfo.email}`}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Sales</span>
              </a>
              <a
                href={service.contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 hover:bg-gray-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Learn More</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <SEO 
        title="Expanded Innovative Services 2027 - Zion Tech Group"
        description="Discover our comprehensive portfolio of advanced micro SAAS, IT infrastructure, and AI services. From quantum cybersecurity to healthcare AI, explore cutting-edge solutions."
        keywords="micro SAAS, IT services, AI services, cybersecurity, data analytics, cloud DevOps, IoT, fintech, healthcare technology"
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Expanded Innovative Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                2027
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Discover our comprehensive portfolio of advanced micro SAAS, IT infrastructure, and AI services. 
              From quantum cybersecurity to healthcare AI, explore cutting-edge solutions that drive innovation and growth.
            </motion.p>
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 inline-block"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <p className="font-semibold text-gray-900 dark:text-white">+1 302 464 0950</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="font-semibold text-gray-900 dark:text-white">kleber@ziontechgroup.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Address</p>
                    <p className="font-semibold text-gray-900 dark:text-white">364 E Main St STE 1008</p>
                    <p className="font-semibold text-gray-900 dark:text-white">Middletown DE 19709</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filters and Search */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
              >
                {EXPANDED_SERVICE_CATEGORIES.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              {/* View Mode Toggle */}
              <div className="flex items-center space-x-2 bg-gray-100 dark:bg-slate-700 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    viewMode === 'grid' 
                      ? 'bg-white dark:bg-slate-600 text-gray-900 dark:text-white shadow-sm' 
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    viewMode === 'list' 
                      ? 'bg-white dark:bg-slate-600 text-gray-900 dark:text-white shadow-sm' 
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Services Count */}
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-300">
            Showing {filteredServices.length} of {ALL_EXPANDED_SERVICES_2027.length} services
          </p>
        </div>

        {/* Services Grid/List */}
        {filteredServices.length > 0 ? (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
            {filteredServices.map((service) => 
              viewMode === 'grid' ? renderServiceCard(service) : renderServiceList(service)
            )}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 dark:text-gray-500 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No services found</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Try adjusting your search criteria or category filter
            </p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our innovative services are designed to drive growth, efficiency, and competitive advantage. 
            Contact us today to discuss how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Get Started</span>
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandedServicesShowcase2027;
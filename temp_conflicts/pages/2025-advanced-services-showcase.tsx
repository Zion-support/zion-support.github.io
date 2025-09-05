import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, Grid, List, Star, CheckCircle, ArrowRight, Check,
  Brain, Atom, Shield, Building, Globe,
  Users, TrendingUp, Award, Phone, Mail, MapPin
} from 'lucide-react';

// Import our new service data
import { advancedEnterpriseServices2025 } from '../data/2025-advanced-enterprise-services-expansion';
import { innovativeMicroSaasExpansion2025 } from '../data/2025-innovative-micro-saas-expansion';
import { cuttingEdgeITInfrastructureServices } from '../data/2025-cutting-edge-it-infrastructure';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const allServices = [
  ...advancedEnterpriseServices2025,
      ...innovativeMicroSaasExpansion2025,
  ...cuttingEdgeITInfrastructureServices
];

const categories = [
  {
    id: 'all',
    name: 'All Services',
    icon: <Grid className=&quot;w-6 h-6&quot; />,
    color: 'from-gray-500 to-slate-500',
    description: 'Complete portfolio of advanced services'
  },
  {
    id: 'enterprise',
    name: 'Enterprise Solutions',
    icon: <Building className=&quot;w-6 h-6&quot; />,
    color: 'from-blue-500 to-purple-500',
    description: 'Enterprise-grade AI and IT solutions'
  },
  {
    id: 'micro-saas',
    name: 'Micro SAAS',
    icon: <Globe className=&quot;w-6 h-6&quot; />,
    color: 'from-green-500 to-emerald-500',
    description: 'Innovative micro SAAS solutions'
  },
  {
    id: 'infrastructure',
    name: 'IT Infrastructure',
    icon: <Shield className=&quot;w-6 h-6&quot; />,
    color: 'from-orange-500 to-red-500',
    description: 'Cutting-edge infrastructure services'
  },
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    icon: <Brain className=&quot;w-6 h-6&quot; />,
    color: 'from-purple-500 to-pink-500',
    description: 'Advanced AI and ML platforms'
  },
  {
    id: 'quantum',
    name: 'Quantum Computing',
    icon: <Atom className=&quot;w-6 h-6&quot; />,
    color: 'from-violet-500 to-indigo-500',
    description: 'Quantum computing solutions'
  }
];

const getServiceCategory = (service: any) => {
  if (service.category) return service.category;
  return 'Other';
};

const getServicePricing = (service: any) => {
  if (service.price) return `${service.price}${service.period}`;
  if (service.pricing?.starter) return service.pricing.starter;
  if (service.pricing?.monthly) return `$${service.pricing.monthly}/month`;
  return 'Contact for pricing';
};

const getServiceFeatures = (service: any) => {
  if (service.features) return service.features;
  if (service.keyFeatures) return service.keyFeatures;
  return [];
};



export default function AdvancedServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredServices, setFilteredServices] = useState(allServices);

  useEffect(() => {
    let filtered = allServices;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => {
        const category = getServiceCategory(service).toLowerCase();
        if (selectedCategory === 'enterprise') return category.includes('enterprise') || category.includes('legal') || category.includes('financial');
        if (selectedCategory === 'micro-saas') return category.includes('marketing') || category.includes('social') || category.includes('customer') || category.includes('project');
        if (selectedCategory === 'infrastructure') return category.includes('infrastructure') || category.includes('network') || category.includes('data center') || category.includes('edge');
        if (selectedCategory === 'ai-ml') return category.includes('ai') || category.includes('machine learning') || category.includes('nlp') || category.includes('ml');
        if (selectedCategory === 'quantum') return category.includes('quantum') || category.includes('quantum-resistant');
        return false;
      });
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
        getServiceCategory(service).toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredServices(filtered);
  }, [selectedCategory, searchTerm]);

  const ServiceCard = ({ service }: { service: any }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 ${
        service.popular ? 'ring-2 ring-blue-500' : ''
      }`}
    >
      {service.popular && (
        <div className=&quot;absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1&quot;>
          <Star className=&quot;w-4 h-4&quot; />
          Popular
        </div>
      )}
      
      <div className={`h-32 bg-gradient-to-br ${service.color} flex items-center justify-center`}>
        <span className=&quot;text-4xl&quot;>{service.icon}</span>
      </div>
      
      <div className=&quot;p-6&quot;>
        <div className=&quot;flex items-start justify-between mb-3&quot;>
          <h3 className=&quot;text-xl font-bold text-gray-900 dark:text-white mb-2&quot;>
            {service.name}
          </h3>
        </div>
        
        <p className=&quot;text-gray-600 dark:text-gray-300 mb-4 line-clamp-2&quot;>
          {service.tagline}
        </p>
        
        <div className=&quot;flex items-center justify-between mb-4&quot;>
          <span className=&quot;text-2xl font-bold text-gray-900 dark:text-white&quot;>
            {getServicePricing(service)}
          </span>
          <span className=&quot;text-sm text-gray-500 dark:text-gray-400&quot;>
            {service.trialDays} day trial
          </span>
        </div>
        
        <div className=&quot;space-y-3 mb-6&quot;>
          <div className=&quot;flex items-center gap-2&quot;>
            <CheckCircle className=&quot;w-4 h-4 text-green-500&quot; />
            <span className=&quot;text-sm text-gray-600 dark:text-gray-400&quot;>
              {service.setupTime} setup
            </span>
          </div>
          <div className=&quot;flex items-center gap-2&quot;>
            <Users className=&quot;w-4 h-4 text-blue-500&quot; />
            <span className=&quot;text-sm text-gray-600 dark:text-gray-400&quot;>
              {service.customers ? service.customers.toLocaleString() : '1000'}+ customers
            </span>
          </div>
          <div className=&quot;flex items-center gap-2&quot;>
            <Star className=&quot;w-4 h-4 text-yellow-500&quot; />
            <span className=&quot;text-sm text-gray-600 dark:text-gray-400&quot;>
              {service.rating}/5 ({service.reviews} reviews)
            </span>
          </div>
        </div>
        
        <div className=&quot;mb-6&quot;>
          <h4 className=&quot;font-semibold text-gray-900 dark:text-white mb-2&quot;>Key Features:</h4>
          <div className=&quot;space-y-1&quot;>
            {getServiceFeatures(service).slice(0, 3).map((feature: string, index: number) => (
              <div key={index} className=&quot;flex items-center gap-2&quot;>
                <Check className=&quot;w-3 h-3 text-green-500&quot; />
                <span className=&quot;text-sm text-gray-600 dark:text-gray-400&quot;>{feature}</span>
              </div>
            ))}
            {getServiceFeatures(service).length > 3 && (
              <span className=&quot;text-sm text-gray-500 dark:text-gray-400&quot;>
                +{getServiceFeatures(service).length - 3} more features
              </span>
            )}
          </div>
        </div>
        
        <div className=&quot;mb-6&quot;>
          <h4 className=&quot;font-semibold text-gray-900 dark:text-white mb-2&quot;>ROI & Benefits:</h4>
          <p className=&quot;text-sm text-gray-600 dark:text-gray-400&quot;>
            {service.roi}
          </p>
        </div>
        
        <div className=&quot;mb-6&quot;>
          <h4 className=&quot;font-semibold text-gray-900 dark:text-white mb-2&quot;>Market Position:</h4>
          <p className=&quot;text-sm text-gray-600 dark:text-gray-400&quot;>
            {service.marketPosition}
          </p>
        </div>
        
        <div className=&quot;flex items-center justify-between&quot;>
          <a
            href={service.link}
            className=&quot;inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105&quot;
          >
            Learn More
            <ArrowRight className=&quot;w-4 h-4&quot; />
          </Link>
          
          <a
            href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
            className=&quot;inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300&quot;
          >
            Contact
          </Link>
        </div>
      </div>
    </motion.div>
  );

  const ServiceList = ({ service }: { service: any }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${
        service.popular ? 'ring-2 ring-blue-500' : ''
      }`}
    >
      <div className=&quot;p-6&quot;>
        <div className=&quot;flex items-start gap-6&quot;>
          <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
            <span className=&quot;text-3xl&quot;>{service.icon}</span>
          </div>
          
          <div className=&quot;flex-1&quot;>
            <div className=&quot;flex items-start justify-between mb-3&quot;>
              <div>
                <h3 className=&quot;text-xl font-bold text-gray-900 dark:text-white mb-2&quot;>
                  {service.name}
                  {service.popular && (
                    <span className=&quot;ml-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold&quot;>
                      Popular
                    </span>
                  )}
                </h3>
                <p className=&quot;text-gray-600 dark:text-gray-300 mb-3&quot;>
                  {service.tagline}
                </p>
              </div>
              
              <div className=&quot;text-right&quot;>
                <div className=&quot;text-2xl font-bold text-gray-900 dark:text-white&quot;>
                  {getServicePricing(service)}
                </div>
                <div className=&quot;text-sm text-gray-500 dark:text-gray-400&quot;>
                  {service.trialDays} day trial
                </div>
              </div>
            </div>
            
            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-4 mb-4&quot;>
              <div className=&quot;flex items-center gap-2&quot;>
                <CheckCircle className=&quot;w-4 h-4 text-green-500&quot; />
                <span className=&quot;text-sm text-gray-600 dark:text-gray-400&quot;>
                  {service.setupTime} setup
                </span>
              </div>
              <div className=&quot;flex items-center gap-2&quot;>
                <Users className=&quot;w-4 h-4 text-blue-500&quot; />
                <span className=&quot;text-sm text-gray-600 dark:text-gray-400&quot;>
                  {service.customers ? service.customers.toLocaleString() : '1000'}+ customers
                </span>
              </div>
              <div className=&quot;flex items-center gap-2&quot;>
                <Star className=&quot;w-4 h-4 text-yellow-500&quot; />
                <span className=&quot;text-sm text-gray-600 dark:text-gray-400&quot;>
                  {service.rating}/5 ({service.reviews} reviews)
                </span>
              </div>
            </div>
            
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6 mb-4&quot;>
              <div>
                <h4 className=&quot;font-semibold text-gray-900 dark:text-white mb-2&quot;>Key Features:</h4>
                <div className=&quot;space-y-1&quot;>
                  {getServiceFeatures(service).slice(0, 4).map((feature: string, index: number) => (
                    <div key={index} className=&quot;flex items-center gap-2&quot;>
                      <Check className=&quot;w-3 h-3 text-green-500&quot; />
                      <span className=&quot;text-sm text-gray-600 dark:text-gray-400&quot;>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className=&quot;font-semibold text-gray-900 dark:text-white mb-2&quot;>ROI & Benefits:</h4>
                <p className=&quot;text-sm text-gray-600 dark:text-gray-400 mb-3&quot;>
                  {service.roi}
                </p>
                
                <h4 className=&quot;font-semibold text-gray-900 dark:text-white mb-2&quot;>Market Position:</h4>
                <p className=&quot;text-sm text-gray-600 dark:text-gray-400&quot;>
                  {service.marketPosition}
                </p>
              </div>
            </div>
            
            <div className=&quot;flex items-center gap-4&quot;>
              <a
                href={service.link}
                className=&quot;inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105&quot;
              >
                Learn More
                <ArrowRight className=&quot;w-4 h-4&quot; />
              </Link>
              
              <a
                href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
                className=&quot;inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300&quot;
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800&quot;>
      <SEO 
        title=&quot;2025 Advanced Services Showcase - Zion Tech Group&quot;
        description=&quot;Discover our comprehensive portfolio of advanced AI services, micro SAAS solutions, and cutting-edge IT infrastructure. Real, innovative, and market-ready solutions for modern businesses.&quot;
        keywords={[&quot;AI services&quot;, &quot;micro SAAS&quot;, &quot;IT infrastructure&quot;, &quot;quantum computing&quot;, &quot;enterprise solutions&quot;, &quot;Zion Tech Group&quot;]}
      />
      
      {/* Hero Section */}
      <div className=&quot;relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700&quot;>
        <div className=&quot;absolute inset-0 bg-black opacity-20&quot;></div>
        <div className=&quot;relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24&quot;>
          <div className=&quot;text-center&quot;>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-4xl md:text-6xl font-bold text-white mb-6&quot;
            >
              2025 Advanced Services Showcase
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className=&quot;text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto&quot;
            >
              Discover our comprehensive portfolio of real, innovative, and market-ready solutions. 
              From AI-powered enterprise services to cutting-edge quantum computing platforms.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;
            >
              <div className=&quot;flex items-center gap-2 text-white&quot;>
                <CheckCircle className=&quot;w-5 h-5 text-green-300&quot; />
                <span>30+ New Services</span>
              </div>
              <div className=&quot;flex items-center gap-2 text-white&quot;>
                <CheckCircle className=&quot;w-5 h-5 text-green-300&quot; />
                <span>Real Implementations</span>
              </div>
              <div className=&quot;flex items-center gap-2 text-white&quot;>
                <CheckCircle className=&quot;w-5 h-5 text-green-300&quot; />
                <span>Market Validated</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className=&quot;bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6&quot;>
          <div className=&quot;flex flex-col md:flex-row items-center justify-between gap-4&quot;>
            <div className=&quot;flex items-center gap-6&quot;>
              <div className=&quot;flex items-center gap-2&quot;>
                <Phone className=&quot;w-5 h-5 text-blue-600&quot; />
                <span className=&quot;text-gray-700 dark:text-gray-300&quot;>{contactInfo.mobile}</span>
              </div>
              <div className=&quot;flex items-center gap-2&quot;>
                <Mail className=&quot;w-5 h-5 text-blue-600&quot; />
                <span className=&quot;text-gray-700 dark:text-gray-300&quot;>{contactInfo.email}</span>
              </div>
              <div className=&quot;flex items-center gap-2&quot;>
                <MapPin className=&quot;w-5 h-5 text-blue-600&quot; />
                <span className=&quot;text-gray-700 dark:text-gray-300&quot;>{contactInfo.address}</span>
              </div>
            </div>
            <div className=&quot;flex items-center gap-4&quot;>
              <a
                href={`mailto:${contactInfo.email}?subject=Services Inquiry`}
                className=&quot;inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300&quot;
              >
                Get Quote
                <ArrowRight className=&quot;w-4 h-4&quot; />
              </Link>
              <a
                href={contactInfo.website}
                target=&quot;_blank&quot;
                rel=&quot;noopener noreferrer&quot;
                className=&quot;inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300&quot;
              >
                Visit Website
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12&quot;>
        {/* Filters and Search */}
        <div className=&quot;mb-8&quot;>
          <div className=&quot;flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between&quot;>
            <div className=&quot;flex-1&quot;>
              <div className=&quot;relative max-w-md&quot;>
                <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5&quot; />
                <input
                  type=&quot;text&quot;
                  placeholder=&quot;Search services...&quot;
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className=&quot;w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent&quot;
                />
              </div>
            </div>
            
            <div className=&quot;flex items-center gap-4&quot;>
              <div className=&quot;flex items-center gap-2&quot;>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid' 
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  <Grid className=&quot;w-5 h-5&quot; />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'list' 
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  <List className=&quot;w-5 h-5&quot; />
                </button>
              </div>
            </div>
          </div>
          
          {/* Category Filters */}
          <div className=&quot;mt-6&quot;>
            <div className=&quot;flex flex-wrap gap-3&quot;>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                  } ${category.color}`}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className=&quot;mb-8&quot;>
          <div className=&quot;bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700&quot;>
            <div className=&quot;flex flex-col md:flex-row items-start md:items-center justify-between gap-4&quot;>
              <div>
                <h2 className=&quot;text-2xl font-bold text-gray-900 dark:text-white mb-2&quot;>
                  {filteredServices.length} Services Found
                </h2>
                <p className=&quot;text-gray-600 dark:text-gray-400&quot;>
                  {selectedCategory !== 'all' && `Filtered by: ${categories.find(c => c.id === selectedCategory)?.name}`}
                  {searchTerm && ` • Search: &quot;${searchTerm}&quot;`}
                </p>
              </div>
              
              <div className=&quot;flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400&quot;>
                <div className=&quot;flex items-center gap-2&quot;>
                  <TrendingUp className=&quot;w-4 h-4 text-green-500&quot; />
                  <span>Market Growth: 150%+ YoY</span>
                </div>
                <div className=&quot;flex items-center gap-2&quot;>
                  <Award className=&quot;w-4 h-4 text-blue-500&quot; />
                  <span>4.8+ Average Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid/List */}
        <div className=&quot;space-y-6&quot;>
          {filteredServices.length === 0 ? (
            <div className=&quot;text-center py-12&quot;>
              <div className=&quot;text-gray-400 dark:text-gray-500 text-6xl mb-4&quot;>🔍</div>
              <h3 className=&quot;text-xl font-semibold text-gray-900 dark:text-white mb-2&quot;>
                No services found
              </h3>
              <p className=&quot;text-gray-600 dark:text-gray-400&quot;>
                Try adjusting your search terms or category filters.
              </p>
            </div>
          ) : (
            <AnimatePresence>
              {viewMode === 'grid' ? (
                <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
                          {filteredServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
                </div>
              ) : (
                <div className=&quot;space-y-6&quot;>
                  {filteredServices.map((service) => (
                    <ServiceList key={service.id} service={service} />
                  ))}
                </div>
              )}
            </AnimatePresence>
          )}
        </div>

        {/* Call to Action */}
        <div className=&quot;mt-16 text-center&quot;>
          <div className=&quot;bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-6&quot;>
              Ready to Transform Your Business?
            </h2>
            <p className=&quot;text-xl text-blue-100 mb-8 max-w-3xl mx-auto&quot;>
              Our team of experts is ready to help you implement these cutting-edge solutions. 
              Get in touch today to discuss your specific needs and discover how we can drive your success.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;>
              <a
                href={`mailto:${contactInfo.email}?subject=Business Transformation Consultation`}
                className=&quot;inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105&quot;
              >
                Start Your Transformation
                <ArrowRight className=&quot;w-5 h-5&quot; />
              </Link>
              <a
                href={`tel:${contactInfo.mobile}`}
                className=&quot;inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300&quot;
              >
                <Phone className=&quot;w-5 h-5&quot; />
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
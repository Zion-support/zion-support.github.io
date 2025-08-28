import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  ShoppingCart, 
  Zap, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Globe,
  DollarSign,
  TrendingUp,
  Users,
  BarChart3,
  Target,
  FileText,
  Heart,
  Truck,
  Lock,
  Server,
  Code,
  Building,
  Rocket,
  Atom,
  Network,
  Eye,
  Satellite,
  MessageCircle,
  HelpCircle,
  Search,
  Filter,
  Grid,
  List
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2029 } from '../data/innovativeMicroSaasServices2029';
import { COMPREHENSIVE_IT_SERVICES_2029 } from '../data/comprehensiveITServices2029';
import { COMPREHENSIVE_AI_SERVICES_2029 } from '../data/comprehensiveAIServices2029';

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  website: "https://ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

const categories = [
  { id: 'all', name: 'All Services', icon: Grid, color: 'bg-blue-500' },
  { id: 'ai', name: 'AI Services', icon: Brain, color: 'bg-purple-500' },
  { id: 'it', name: 'IT Services', icon: Cloud, color: 'bg-green-500' },
  { id: 'micro-saas', name: 'Micro SaaS', icon: ShoppingCart, color: 'bg-orange-500' }
];

const pricingTiers = [
  { id: 'all', name: 'All Pricing', range: 'All ranges' },
  { id: 'budget', name: 'Budget', range: '$149 - $499/month' },
  { id: 'premium', name: 'Premium', range: '$500 - $1,999/month' },
  { id: 'enterprise', name: 'Enterprise', range: '$2,000+/month' }
];

export default function ComprehensiveServicesShowcase2029() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPricing, setSelectedPricing] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');

  // Combine all services
  const allServices = [
    ...INNOVATIVE_MICRO_SAAS_SERVICES_2029.map(service => ({ ...service, type: 'micro-saas' })),
    ...COMPREHENSIVE_IT_SERVICES_2029.map(service => ({ ...service, type: 'it' })),
    ...COMPREHENSIVE_AI_SERVICES_2029.map(service => ({ ...service, type: 'ai' }))
  ];

  // Filter services based on selection
  const filteredServices = allServices.filter(service => {
    const categoryMatch = selectedCategory === 'all' || service.type === selectedCategory;
    const pricingMatch = selectedPricing === 'all' || 
      (selectedPricing === 'budget' && service.price < 500) ||
      (selectedPricing === 'premium' && service.price >= 500 && service.price < 2000) ||
      (selectedPricing === 'enterprise' && service.price >= 2000);
    const searchMatch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       service.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    return categoryMatch && pricingMatch && searchMatch;
  });

  const getCategoryIcon = (type: string) => {
    switch (type) {
      case 'ai': return Brain;
      case 'it': return Cloud;
      case 'micro-saas': return ShoppingCart;
      default: return Zap;
    }
  };

  const getCategoryColor = (type: string) => {
    switch (type) {
      case 'ai': return 'bg-purple-500';
      case 'it': return 'bg-green-500';
      case 'micro-saas': return 'bg-orange-500';
      default: return 'bg-blue-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              2029 Comprehensive Services Showcase
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Discover our cutting-edge AI services, comprehensive IT solutions, and innovative micro SaaS platforms designed to transform your business
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/20 rounded-full px-6 py-3">
                <Brain className="w-5 h-5" />
                <span className="font-medium">AI-Powered Solutions</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 rounded-full px-6 py-3">
                <Cloud className="w-5 h-5" />
                <span className="font-medium">Enterprise IT</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 rounded-full px-6 py-3">
                <ShoppingCart className="w-5 h-5" />
                <span className="font-medium">Micro SaaS</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Banner */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-600" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-600" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get Quote
              </a>
              <a
                href={contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Globe className="w-4 h-4 mr-2" />
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Category and Pricing Filters */}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {pricingTiers.map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => setSelectedPricing(tier.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedPricing === tier.id
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tier.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {filteredServices.length} Services Available
          </h2>
          <p className="text-gray-600">
            Filtered by {categories.find(c => c.id === selectedCategory)?.name} • {pricingTiers.find(p => p.id === selectedPricing)?.name}
          </p>
        </div>

        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden"
              >
                {/* Service Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-2 rounded-lg ${getCategoryColor(service.type)}`}>
                      {React.createElement(getCategoryIcon(service.type), { className: "w-6 h-6 text-white" })}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">
                        {service.currency}{service.price}
                      </div>
                      <div className="text-sm text-gray-500 capitalize">
                        per {service.pricingModel}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center space-x-2 mt-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      service.innovationLevel === 'Cutting-Edge' 
                        ? 'bg-purple-100 text-purple-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {service.innovationLevel}
                    </span>
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {service.roi} ROI
                    </span>
                  </div>
                </div>

                {/* Service Features */}
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-sm text-blue-600 font-medium">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>

                  {/* Service Actions */}
                  <div className="mt-6 space-y-3">
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Contact Sales
                    </button>
                    <div className="grid grid-cols-2 gap-2">
                      <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                        View Demo
                      </button>
                      <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                        Documentation
                      </button>
                    </div>
                  </div>
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
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 p-6"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                  <div className="flex-1">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${getCategoryColor(service.type)}`}>
                        {React.createElement(getCategoryIcon(service.type), { className: "w-6 h-6 text-white" })}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-3">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap items-center space-x-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            service.innovationLevel === 'Cutting-Edge' 
                              ? 'bg-purple-100 text-purple-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {service.innovationLevel}
                          </span>
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {service.roi} ROI
                          </span>
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            {service.estimatedDelivery}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:text-right">
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      {service.currency}{service.price}
                    </div>
                    <div className="text-sm text-gray-500 capitalize mb-4">
                      per {service.pricingModel}
                    </div>
                    <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                      Get Quote
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters or search terms to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedPricing('all');
                setSearchTerm('');
              }}
              className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our expert team is ready to help you implement the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
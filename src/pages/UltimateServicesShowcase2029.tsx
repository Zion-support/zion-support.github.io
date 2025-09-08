import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Rocket, 
  Factory, 
  Shield, 
  Globe, 
  Heart, 
  Car, 
  GraduationCap,
  Building2,
  Leaf,
  Hammer,
  Hotel,
  ShoppingCart,
  Scale,
  Home,
  Zap,
  Satellite,
  Dna,
  Lock,
  Truck,
  BookOpen,
  Palette,
  Cpu,
  Network,
  Database,
  Cloud,
  BarChart3,
  Users,
  Target,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Globe as GlobeIcon,
  DollarSign,
  Clock,
  Award,
  Lightbulb,
  Zap as ZapIcon
} from 'lucide-react';
import { ADVANCED_INNOVATIVE_SERVICES_2029 } from '../data/advancedInnovativeServices2029';
import { SPECIALIZED_INDUSTRY_SOLUTIONS_2029 } from '../data/specializedIndustrySolutions2029';
import { COMPREHENSIVE_PRICING_GUIDE_2029 } from '../data/comprehensivePricingGuide2029';

const UltimateServicesShowcase2029: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const allServices = [...ADVANCED_INNOVATIVE_SERVICES_2029, ...SPECIALIZED_INDUSTRY_SOLUTIONS_2029];
  
  const categories = [
    { id: 'all', name: 'All Services', icon: Star, color: 'text-blue-600' },
    { id: 'Quantum AI', name: 'Quantum AI', icon: Brain, color: 'text-purple-600' },
    { id: 'AI Manufacturing', name: 'AI Manufacturing', icon: Factory, color: 'text-green-600' },
    { id: 'Space Tech', name: 'Space Tech', icon: Rocket, color: 'text-indigo-600' },
    { id: 'Healthcare AI', name: 'Healthcare AI', icon: Heart, color: 'text-red-600' },
    { id: 'Legal Tech', name: 'Legal Tech', icon: Scale, color: 'text-yellow-600' },
    { id: 'Real Estate Tech', name: 'Real Estate Tech', icon: Home, color: 'text-orange-600' },
    { id: 'AgTech', name: 'Agriculture Tech', icon: Leaf, color: 'text-emerald-600' },
    { id: 'Energy Tech', name: 'Energy Tech', icon: Zap, color: 'text-amber-600' },
    { id: 'Construction Tech', name: 'Construction Tech', icon: Hammer, color: 'text-gray-600' },
    { id: 'Hospitality Tech', name: 'Hospitality Tech', icon: Hotel, color: 'text-pink-600' },
    { id: 'Retail Tech', name: 'Retail Tech', icon: ShoppingCart, color: 'text-cyan-600' }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
    if (categoryData) {
      const IconComponent = categoryData.icon;
      return <IconComponent className={`w-6 h-6 ${categoryData.color}`} />;
    }
    return <Star className="w-6 h-6 text-gray-600" />;
  };

  const getPricingInfo = (serviceId: string) => {
    return COMPREHENSIVE_PRICING_GUIDE_2029.find(pricing => pricing.serviceId === serviceId);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Zion Tech Group
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-blue-600 mb-6">
              2029 Ultimate Services Showcase
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover our revolutionary micro SAAS, IT, and AI services that are transforming industries 
              and creating unprecedented value for businesses worldwide.
            </p>
            
            {/* Contact Information */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-600" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-600" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <GlobeIcon className="w-5 h-5 text-blue-600" />
                <span>https://ziontechgroup.com</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300 hover:bg-blue-50'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              {/* Service Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {getCategoryIcon(service.category)}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-500">{service.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">
                      {formatPrice(service.price)}
                    </div>
                    <div className="text-sm text-gray-500">/month</div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {service.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{service.tags.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Service Features */}
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="line-clamp-2">{feature}</span>
                    </li>
                  ))}
                  {service.features.length > 3 && (
                    <li className="text-sm text-blue-600 font-medium">
                      +{service.features.length - 3} more features
                    </li>
                  )}
                </ul>

                {/* Benefits */}
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <h5 className="font-semibold text-green-800 mb-2">Key Benefits</h5>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-green-700 flex items-start gap-2">
                        <TrendingUp className="w-3 h-3 text-green-600 mt-1 flex-shrink-0" />
                        <span className="line-clamp-2">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ROI and Market Info */}
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="text-center p-2 bg-blue-50 rounded-lg">
                    <div className="font-semibold text-blue-800">ROI</div>
                    <div className="text-blue-600">{service.roi}</div>
                  </div>
                  <div className="text-center p-2 bg-purple-50 rounded-lg">
                    <div className="font-semibold text-purple-800">Market Price</div>
                    <div className="text-purple-600 text-xs">{service.marketPrice}</div>
                  </div>
                </div>

                {/* Contact Button */}
                <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2">
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No services found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    {getCategoryIcon(selectedService.category)}
                    <span className="text-sm text-gray-500">{selectedService.category}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedService.title}
                  </h2>
                  <p className="text-gray-600">{selectedService.description}</p>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Pricing Information */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Pricing & ROI</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">
                      {formatPrice(selectedService.price)}
                    </div>
                    <div className="text-sm text-blue-700">per month</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{selectedService.roi}</div>
                    <div className="text-sm text-green-700">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-purple-600">
                      {selectedService.estimatedDelivery}
                    </div>
                    <div className="text-sm text-purple-700">Delivery</div>
                  </div>
                </div>
              </div>

              {/* Features and Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Features</h3>
                  <ul className="space-y-2">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
                  <ul className="space-y-2">
                    {selectedService.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600">
                        <TrendingUp className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Use Cases and Target Audience */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Use Cases</h3>
                  <ul className="space-y-2">
                    {selectedService.useCases.map((useCase, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600">
                        <Target className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span>{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Target Audience</h3>
                  <ul className="space-y-2">
                    {selectedService.targetAudience.map((audience, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600">
                        <Users className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>{audience}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technical Specifications */}
              {selectedService.technicalSpecs && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Technology Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.technicalSpecs.technology.map((tech, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Integrations</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.technicalSpecs.integrations.map((integration, index) => (
                          <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-sm rounded">
                            {integration}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Market Information */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Market Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <div className="text-sm text-gray-600">Market Size</div>
                    <div className="font-semibold text-gray-900">{selectedService.marketSize}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Innovation Level</div>
                    <div className="font-semibold text-gray-900">{selectedService.innovationLevel}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Support Level</div>
                    <div className="font-semibold text-gray-900">{selectedService.supportLevel}</div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Get Started Today</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className="text-blue-800">{selectedService.contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="text-blue-800">{selectedService.contactInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GlobeIcon className="w-5 h-5 text-blue-600" />
                    <span className="text-blue-800">{selectedService.contactInfo.website}</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
                  Contact Us for Custom Quote
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Leading the future of technology with revolutionary micro SAAS, IT, and AI services 
              that transform businesses and create unprecedented value.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <GlobeIcon className="w-5 h-5" />
                <span>https://ziontechgroup.com</span>
              </div>
            </div>
            <div className="text-gray-500 text-sm">
              © 2029 Zion Tech Group. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Search icon component
const Search: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

// X icon component
const X: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default UltimateServicesShowcase2029;
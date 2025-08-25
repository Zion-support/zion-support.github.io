import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Globe, 
  Cpu,
  Building2,
  ShoppingCart,
  Truck,
  GraduationCap,
  Scale,
  Home,
  Factory,
  Heart,
  DollarSign,
  Target,
  Clock,
  Star,
  ArrowRight,
  Phone,
  Mail,
  ExternalLink,
  Play,
  Search
} from 'lucide-react';
import { NEXT_GEN_INNOVATIVE_SERVICES } from '../data/nextGenInnovativeServices';

const NextGenInnovativeServices: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedService, setSelectedService] = useState<any>(null);

  const categories = [
    { id: 'all', name: 'All Services', icon: <Globe className="w-4 h-4" /> },
    { id: 'AI & Financial Services', name: 'Financial Services', icon: <DollarSign className="w-4 h-4" /> },
    { id: 'AI & Healthcare', name: 'Healthcare', icon: <Heart className="w-4 h-4" /> },
    { id: 'AI & Supply Chain', name: 'Supply Chain', icon: <Truck className="w-4 h-4" /> },
    { id: 'AI & Energy', name: 'Energy', icon: <Zap className="w-4 h-4" /> },
    { id: 'AI & Legal Tech', name: 'Legal Tech', icon: <Scale className="w-4 h-4" /> },
    { id: 'AI & Real Estate', name: 'Real Estate', icon: <Home className="w-4 h-4" /> },
    { id: 'AI & Education', name: 'Education', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'AI & Manufacturing', name: 'Manufacturing', icon: <Factory className="w-4 h-4" /> },
    { id: 'AI & Retail', name: 'Retail', icon: <ShoppingCart className="w-4 h-4" /> },
    { id: 'AI & Transportation', name: 'Transportation', icon: <Truck className="w-4 h-4" /> },
    { id: 'AI & Human Resources', name: 'Human Resources', icon: <Users className="w-4 h-4" /> },
    { id: 'AI & Marketing', name: 'Marketing', icon: <Target className="w-4 h-4" /> }
  ];

  const filteredServices = NEXT_GEN_INNOVATIVE_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Financial Services': return <DollarSign className="w-6 h-6" />;
      case 'AI & Healthcare': return <Heart className="w-6 h-6" />;
      case 'AI & Supply Chain': return <Truck className="w-6 h-6" />;
      case 'AI & Energy': return <Zap className="w-6 h-6" />;
      case 'AI & Legal Tech': return <Scale className="w-6 h-6" />;
      case 'AI & Real Estate': return <Home className="w-6 h-6" />;
      case 'AI & Education': return <GraduationCap className="w-6 h-6" />;
      case 'AI & Manufacturing': return <Factory className="w-6 h-6" />;
      case 'AI & Retail': return <ShoppingCart className="w-6 h-6" />;
      case 'AI & Transportation': return <Truck className="w-6 h-6" />;
      case 'AI & Human Resources': return <Users className="w-6 h-6" />;
      case 'AI & Marketing': return <Target className="w-6 h-6" />;
      default: return <Brain className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Next-Generation AI Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge AI solutions that transform industries and drive business growth. 
              Real-world applications with proven ROI and market validation.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-80 px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
              <button
                onClick={() => window.location.href = 'mailto:kleber@ziontechgroup.com'}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get Custom Quote
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Service Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                    {getCategoryIcon(service.category)}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">
                      ${service.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500">per month</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {service.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Service Details */}
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4 text-blue-600" />
                      Key Benefits
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-500">Market Size</div>
                      <div className="font-semibold text-gray-900">{service.marketSize}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">ROI</div>
                      <div className="font-semibold text-green-600">{service.roi}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Implementation</div>
                      <div className="font-semibold text-gray-900">{service.implementationTime}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Support</div>
                      <div className="font-semibold text-gray-900 capitalize">{service.supportLevel}</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 space-y-3">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <BarChart3 className="w-4 h-4" />
                    View Details
                  </button>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => window.open(service.websiteUrl, '_blank')}
                      className="flex-1 px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Website
                    </button>
                    {service.demoUrl && (
                      <button
                        onClick={() => window.open(service.demoUrl, '_blank')}
                        className="flex-1 px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-sm"
                      >
                        <Play className="w-4 h-4" />
                        Demo
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-600">Try adjusting your search or category filter.</p>
          </div>
        )}
      </div>

      {/* Contact Section */}
      <div className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our AI experts are ready to help you implement these cutting-edge solutions. 
              Get in touch for a personalized consultation and custom implementation plan.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <Phone className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600">+1 302 464 0950</p>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <Mail className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600">kleber@ziontechgroup.com</p>
              </div>
              
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <Globe className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600">ziontechgroup.com</p>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={() => window.location.href = 'mailto:kleber@ziontechgroup.com?subject=AI Services Consultation'}
                className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold flex items-center gap-2 mx-auto"
              >
                <Mail className="w-5 h-5" />
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </div>
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
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedService.title}
                  </h2>
                  <p className="text-gray-600">{selectedService.description}</p>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Features</h3>
                  <ul className="space-y-2">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Use Cases</h3>
                  <ul className="space-y-2">
                    {selectedService.useCases.map((useCase, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">${selectedService.price.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Monthly</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">{selectedService.marketSize}</div>
                    <div className="text-sm text-gray-600">Market Size</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">{selectedService.roi}</div>
                    <div className="text-sm text-gray-600">ROI</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">{selectedService.implementationTime}</div>
                    <div className="text-sm text-gray-600">Implementation</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => window.open(selectedService.websiteUrl, '_blank')}
                  className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  Visit Website
                </button>
                {selectedService.demoUrl && (
                  <button
                    onClick={() => window.open(selectedService.demoUrl, '_blank')}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                  >
                    <Play className="w-5 h-5" />
                    View Demo
                  </button>
                )}
                <button
                  onClick={() => window.location.href = `mailto:kleber@ziontechgroup.com?subject=Inquiry about ${selectedService.title}`}
                  className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Get Quote
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default NextGenInnovativeServices;
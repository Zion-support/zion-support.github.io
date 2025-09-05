import React, { useState } from 'react';
import { INNOVATIVE_SERVICES } from '../data/servicesData';
import { IT_SERVICES } from '../data/itServicesData';
import { AI_SERVICES } from '../data/aiServicesData';
import { MICRO_SAAS_SERVICES } from '../data/microSaasServicesData';
:src_backup_temp/pages/EnhancedServicesShowcase2025.tsx
import { ADVANCED_MICRO_SAAS_SERVICES } from '../data/advancedMicroSaasServices2025';
import { ADVANCED_IT_SERVICES } from '../data/advancedITServices2025';
import { ADVANCED_AI_SERVICES } from '../data/advancedAIServices2025';

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
  roi: string;
  innovationLevel: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  technicalSpecs?: {
    technology: string[];
    integrations: string[];
    apiEndpoints: number;
    uptime: string;
    security: string[];
  };
  competitors?: string[];
  marketSize?: string;
:src_backup_temp/pages/EnhancedServicesShowcase2025.tsx
  pricingTiers?: {
    basic: { price: number; features: string[] };
    pro: { price: number; features: string[] };
    enterprise: { price: number; features: string[] };
  };
  specialOffer?: string;
  launchDate?: string;
  industryFocus?: string[];
}

const EnhancedServicesShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const allServices = [
    ...INNOVATIVE_SERVICES.map(s => ({ ...s, serviceType: 'Innovative Services' })),
    ...IT_SERVICES.map(s => ({ ...s, serviceType: 'IT Services' })),
    ...AI_SERVICES.map(s => ({ ...s, serviceType: 'AI Services' })),
:src_backup_temp/pages/EnhancedServicesShowcase2025.tsx
    ...MICRO_SAAS_SERVICES.map(s => ({ ...s, serviceType: 'Micro SAAS Services' })),
    ...ADVANCED_MICRO_SAAS_SERVICES.map(s => ({ ...s, serviceType: 'Advanced Micro SAAS Services' })),
    ...ADVANCED_IT_SERVICES.map(s => ({ ...s, serviceType: 'Advanced IT Services' })),
    ...ADVANCED_AI_SERVICES.map(s => ({ ...s, serviceType: 'Advanced AI Services' }))
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length },
    { id: 'AI & Analytics', name: 'AI & Analytics', count: allServices.filter(s => s.category.includes('AI') || s.category.includes('Analytics')).length },
    { id: 'Project Management', name: 'Project Management', count: allServices.filter(s => s.category.includes('Project Management')).length },
    { id: 'Customer Support', name: 'Customer Support', count: allServices.filter(s => s.category.includes('Customer Support')).length },
    { id: 'Financial Technology', name: 'Financial Technology', count: allServices.filter(s => s.category.includes('Financial') || s.category.includes('Finance')).length },
    { id: 'Marketing Technology', name: 'Marketing Technology', count: allServices.filter(s => s.category.includes('Marketing')).length },
    { id: 'Human Resources', name: 'Human Resources', count: allServices.filter(s => s.category.includes('HR') || s.category.includes('Human Resources')).length },
    { id: 'Content Creation', name: 'Content Creation', count: allServices.filter(s => s.category.includes('Content')).length },
    { id: 'Data Analytics', name: 'Data Analytics', count: allServices.filter(s => s.category.includes('Data') || s.category.includes('Analytics')).length },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category.includes('Security') || s.category.includes('Cybersecurity')).length },
    { id: 'E-commerce', name: 'E-commerce', count: allServices.filter(s => s.category.includes('E-commerce')).length },
    { id: 'Workflow Automation', name: 'Workflow Automation', count: allServices.filter(s => s.category.includes('Workflow') || s.category.includes('Automation')).length },
    { id: 'Cloud Services', name: 'Cloud Services', count: allServices.filter(s => s.category.includes('Cloud')).length },
    { id: 'DevOps', name: 'DevOps', count: allServices.filter(s => s.category.includes('DevOps')).length },
    { id: 'Network Services', name: 'Network Services', count: allServices.filter(s => s.category.includes('Network')).length }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory);
    ...MICRO_SAAS_SERVICES.map(s => ({ ...s, serviceType: 'Micro SAAS Services' }))
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀' },
    { id: 'AI & Analytics', name: 'AI & Analytics', count: allServices.filter(s => s.category.includes('AI') || s.category.includes('Analytics')).length, icon: '🤖' },
    { id: 'Cloud Services', name: 'Cloud Services', count: allServices.filter(s => s.category.includes('Cloud')).length, icon: '☁️' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category.includes('Security') || s.category.includes('Cybersecurity')).length, icon: '🔒' },
    { id: 'DevOps', name: 'DevOps', count: allServices.filter(s => s.category.includes('DevOps')).length, icon: '⚙️' },
    { id: 'Marketing', name: 'Marketing', count: allServices.filter(s => s.category.includes('Marketing') || s.category.includes('Social Media')).length, icon: '📈' },
    { id: 'Project Management', name: 'Project Management', count: allServices.filter(s => s.category.includes('Project Management')).length, icon: '📋' },
    { id: 'CRM', name: 'CRM', count: allServices.filter(s => s.category.includes('CRM')).length, icon: '👥' },
    { id: 'Analytics', name: 'Analytics', count: allServices.filter(s => s.category.includes('Analytics')).length, icon: '📊' },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: allServices.filter(s => s.category.includes('Quantum')).length, icon: '⚛️' },
    { id: 'Blockchain', name: 'Blockchain', count: allServices.filter(s => s.category.includes('Blockchain')).length, icon: '⛓️' },
    { id: 'Fintech', name: 'Fintech', count: allServices.filter(s => s.category.includes('Financial') || s.category.includes('Fintech')).length, icon: '💰' }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      service.category.includes(selectedCategory) || 
      service.subcategory.includes(selectedCategory);
    
    const matchesSearch = searchTerm === '' || 
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
:src_backup_temp/pages/EnhancedServicesShowcase2025.tsx
    return matchesCategory && matchesSearch;
  });

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    website: "https://ziontechgroup.com"
    
    return matchesCategory && matchesSearch;
  });

  const formatPrice = (price: number, currency: string, model: string) => {
    if (model === 'monthly') {
      return `${currency}${price.toLocaleString()}/month`;
    } else if (model === 'project') {
      return `${currency}${price.toLocaleString()}/project`;
    }
    return `${currency}${price.toLocaleString()}`;
  };

  const getInnovationLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'cutting-edge': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'advanced': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'standard': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getServiceTypeColor = (type: string) => {
    switch (type) {
      case 'AI Services': return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case 'IT Services': return 'bg-gradient-to-r from-blue-500 to-cyan-500';
      case 'Micro SAAS Services': return 'bg-gradient-to-r from-green-500 to-emerald-500';
      case 'Innovative Services': return 'bg-gradient-to-r from-orange-500 to-red-500';
      default: return 'bg-gradient-to-r from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
:src_backup_temp/pages/EnhancedServicesShowcase2025.tsx
      <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Zion Tech Group - Advanced Technology Services
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Leading provider of innovative micro SAAS, IT services, and AI solutions. 
              Transform your business with cutting-edge technology and expert implementation.
            </p>
            
            {/* Contact Information Banner */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold mb-4">Get Started Today</h2>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-cyan-400 font-semibold">Phone</div>
                  <a href={`tel:${contactInfo.phone}`} className="text-white hover:text-cyan-400 transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
                <div>
                  <div className="text-cyan-400 font-semibold">Email</div>
                  <a href={`mailto:${contactInfo.email}`} className="text-white hover:text-cyan-400 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div>
                  <div className="text-cyan-400 font-semibold">Address</div>
                  <div className="text-white">{contactInfo.address}</div>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search services, features, or technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-cyan-400"
              />
      <div className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Revolutionary Technology Services
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Discover our cutting-edge portfolio of AI-powered solutions, quantum computing services, 
              and innovative micro SAAS platforms designed to transform your business and drive unprecedented growth.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-yellow-400">{allServices.length}+</div>
                <div className="text-sm text-blue-100">Services Available</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-green-400">24/7</div>
                <div className="text-sm text-blue-100">Expert Support</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-blue-400">99.9%</div>
                <div className="text-sm text-blue-100">Uptime Guarantee</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-purple-400">500%</div>
                <div className="text-sm text-blue-100">Average ROI</div>
              </div>
            </div>
          </div>
        </div>
      </div>

:src_backup_temp/pages/EnhancedServicesShowcase2025.tsx
      {/* Services Overview */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From micro SAAS applications to enterprise AI solutions, we provide end-to-end 
              technology services that drive business growth and innovation.
            </p>
          </div>

          {/* Service Statistics */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">{allServices.length}+</div>
              <div className="text-gray-600">Services Available</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">300%+</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50'
                }`}
              >
                {category.name} ({category.count})
      {/* Contact Info Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg">
              <div className="flex items-center justify-center">
                <span className="mr-2">📞</span>
                <strong>Phone:</strong> +1 302 464 0950
              </div>
              <div className="flex items-center justify-center">
                <span className="mr-2">✉️</span>
                <strong>Email:</strong> kleber@ziontechgroup.com
              </div>
              <div className="flex items-center justify-center">
                <span className="mr-2">🌐</span>
                <strong>Website:</strong> 
                <a href="https://ziontechgroup.com" className="underline ml-1 hover:text-yellow-300">
                  https://ziontechgroup.com
                </a>
              </div>
            </div>
            <div className="mt-4 text-sm">
              <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From quantum computing to AI-powered micro SAAS solutions, we offer cutting-edge technology 
              services that drive innovation and growth across all industries.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search services, technologies, or industries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border-2 border-gray-200 hover:border-blue-300'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
:src_backup_temp/pages/EnhancedServicesShowcase2025.tsx
      </div>

      {/* Services Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map(service => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <div className="text-sm text-blue-600 font-medium mb-2">{service.category}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">{service.currency}{service.price}</div>
                    <div className="text-sm text-gray-500">/{service.pricingModel}</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>

                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-700 mb-2">Key Features:</div>
                  <div className="flex flex-wrap gap-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                    {service.features.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{service.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-700 mb-2">Benefits:</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Market Price:</span>
                    <span className="font-medium">{service.marketPrice}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">ROI:</span>
                    <span className="font-medium text-green-600">{service.roi}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Delivery:</span>
                    <span className="font-medium">{service.estimatedDelivery}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </button>
                  <a
                    href={`mailto:${contactInfo.email}?subject=Interest in ${service.title}`}
                    className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-center"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">No services found matching your criteria.</div>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="mt-4 text-blue-600 hover:text-blue-800"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedService.title}</h2>
                  <div className="text-lg text-blue-600 font-medium">{selectedService.category}</div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">Description</h3>
                    <p className="text-gray-600">{selectedService.description}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">Features</h3>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">✓</span>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">Benefits</h3>
                    <ul className="space-y-2">
                      {selectedService.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">→</span>
                          <span className="text-gray-600">{benefit}</span>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer group transform hover:-translate-y-2"
              onClick={() => setSelectedService(service)}
            >
              {/* Service Type Badge */}
              <div className={`h-2 ${getServiceTypeColor(service.serviceType)}`}></div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-blue-600 font-medium mb-2">{service.serviceType}</p>
                    <p className="text-sm text-gray-600 mb-2">{service.category} • {service.subcategory}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getInnovationLevelColor(service.innovationLevel)}`}>
                    {service.innovationLevel}
                  </span>
                </div>

                <p className="text-gray-700 mb-4 line-clamp-3">{service.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-green-600">
                    {formatPrice(service.price, service.currency, service.pricingModel)}
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Market Price</div>
                    <div className="text-sm font-medium">{service.marketPrice}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span>ROI: <strong className="text-green-600">{service.roi}</strong></span>
                  <span>Delivery: <strong>{service.estimatedDelivery}</strong></span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-blue-100 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                  {service.tags.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      +{service.tags.length - 3} more
                    </span>
                  )}
                </div>

                {service.specialOffer && (
                  <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3 mb-4">
                    <div className="text-sm font-medium text-yellow-800">
                      🎉 {service.specialOffer}
                    </div>
                  </div>
                )}

                <div className="text-center">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium transform hover:scale-105">
                    View Details & Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Detail Modal */}
        {selectedService && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-2">{selectedService.title}</h2>
                    <p className="text-xl text-blue-600 font-medium mb-2">{selectedService.serviceType}</p>
                    <p className="text-gray-600 text-lg">{selectedService.category} • {selectedService.subcategory}</p>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-gray-400 hover:text-gray-600 text-3xl font-bold"
                  >
                    ×
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Description</h3>
                    <p className="text-gray-700 mb-6 text-lg leading-relaxed">{selectedService.description}</p>

                    <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                    <ul className="space-y-3 mb-6">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-3 text-xl">✓</span>
                          <span className="text-gray-700 text-lg">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-2xl font-bold mb-4">Benefits</h3>
                    <ul className="space-y-3 mb-6">
                      {selectedService.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-500 mr-3 text-xl">→</span>
                          <span className="text-gray-700 text-lg">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
:src_backup_temp/pages/EnhancedServicesShowcase2025.tsx
                </div>

                <div>
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-semibold mb-4">Pricing & Details</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Price:</span>
                        <span className="font-semibold text-2xl text-green-600">
                          {selectedService.currency}{selectedService.price}/{selectedService.pricingModel}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Market Price:</span>
                        <span className="font-medium">{selectedService.marketPrice}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">ROI:</span>
                        <span className="font-medium text-green-600">{selectedService.roi}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Delivery:</span>
                        <span className="font-medium">{selectedService.estimatedDelivery}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Support:</span>
                        <span className="font-medium">{selectedService.supportLevel}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">Use Cases</h3>
                    <ul className="space-y-1">
                      {selectedService.useCases.map((useCase, index) => (
                        <li key={index} className="text-gray-600">• {useCase}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">Target Audience</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.targetAudience.map((audience, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                        >
                          {audience}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <span className="text-blue-600 font-medium mr-2">Phone:</span>
                        <a href={`tel:${contactInfo.phone}`} className="text-blue-600 hover:underline">
                          {contactInfo.phone}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <span className="text-blue-600 font-medium mr-2">Email:</span>
                        <a href={`mailto:${contactInfo.email}`} className="text-blue-600 hover:underline">
                          {contactInfo.email}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <span className="text-blue-600 font-medium mr-2">Address:</span>
                        <span className="text-gray-700">{contactInfo.address}</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <a
                        href={`mailto:${contactInfo.email}?subject=Interest in ${selectedService.title}`}
                        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block"
                      >
                        Get Quote Now
                      </a>

                  <div>
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl mb-6 border border-blue-200">
                      <h3 className="text-2xl font-bold mb-4">Pricing & Details</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-lg">Price:</span>
                          <span className="text-3xl font-bold text-green-600">
                            {formatPrice(selectedService.price, selectedService.currency, selectedService.pricingModel)}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-lg">Market Price:</span>
                          <span className="text-lg">{selectedService.marketPrice}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-lg">ROI:</span>
                          <span className="text-green-600 font-bold text-lg">{selectedService.roi}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-lg">Delivery:</span>
                          <span className="text-lg">{selectedService.estimatedDelivery}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-lg">Support:</span>
                          <span className="capitalize text-lg">{selectedService.supportLevel}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-lg">Innovation Level:</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getInnovationLevelColor(selectedService.innovationLevel)}`}>
                            {selectedService.innovationLevel}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl mb-6 border border-green-200">
                      <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                      <div className="space-y-3">
                        <p className="text-lg"><strong>Phone:</strong> {selectedService.contactInfo.phone}</p>
                        <p className="text-lg"><strong>Email:</strong> {selectedService.contactInfo.email}</p>
                        <p className="text-lg"><strong>Website:</strong> 
                          <a href={selectedService.contactInfo.website} className="text-blue-600 hover:underline ml-1">
                            {selectedService.contactInfo.website}
                          </a>
                        </p>
                      </div>
                    </div>

                    {selectedService.technicalSpecs && (
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold mb-4">Technical Specifications</h3>
                        <div className="space-y-4">
                          <div>
                            <span className="font-medium text-lg">Technologies:</span>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {selectedService.technicalSpecs.technology.map((tech, index) => (
                                <span key={index} className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="text-lg">
                            <span className="font-medium">Uptime:</span> {selectedService.technicalSpecs.uptime}
                          </div>
                          <div className="text-lg">
                            <span className="font-medium">API Endpoints:</span> {selectedService.technicalSpecs.apiEndpoints}
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="text-center">
                      <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium text-lg transform hover:scale-105">
                        Get Started Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
:src_backup_temp/pages/EnhancedServicesShowcase2025.tsx
        </div>
      )}

      {/* Footer CTA */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact Zion Tech Group today for a free consultation and discover how our 
            advanced technology solutions can accelerate your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${contactInfo.phone}`}
              className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
            >
              Call {contactInfo.phone}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition-colors text-lg font-medium"
            >
              Email {contactInfo.email}
            </a>
        )}

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of companies already using our cutting-edge technology services 
            to drive innovation, reduce costs, and accelerate growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 py-4 px-8 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors">
              Schedule a Demo
            </button>
            <button className="border-2 border-white text-white py-4 px-8 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors">
              Download Our Catalog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedServicesShowcase2025;
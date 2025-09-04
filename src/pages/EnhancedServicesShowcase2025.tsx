import React, { useState } from 'react';
import { INNOVATIVE_SERVICES } from '../data/servicesData';
import { IT_SERVICES } from '../data/itServicesData';
import { AI_SERVICES } from '../data/aiServicesData';
import { MICRO_SAAS_SERVICES } from '../data/microSaasServicesData';
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
  pricingTiers?: {
    basic: { price: number; features: string[] };
    pro: { price: number; features: string[] };
    enterprise: { price: number; features: string[] };
  };
}

const EnhancedServicesShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const allServices = [
    ...INNOVATIVE_SERVICES.map(s => ({ ...s, serviceType: 'Innovative Services' })),
    ...IT_SERVICES.map(s => ({ ...s, serviceType: 'IT Services' })),
    ...AI_SERVICES.map(s => ({ ...s, serviceType: 'AI Services' })),
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
    const matchesSearch = searchTerm === '' || 
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
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
            </div>
          </div>
        </div>
      </div>

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
              </button>
            ))}
          </div>
        </div>
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
                        </li>
                      ))}
                    </ul>
                  </div>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedServicesShowcase2025;
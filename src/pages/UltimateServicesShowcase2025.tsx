import React, { useState } from 'react';
import { newMicroSaasServices2025, newITServices2025, newAIServices2025, zionContact } from '../data/comprehensiveNewServices2025';

interface Service {
  id: string;
  name: string;
  category: string;
  pricing: string;
  description: string;
  price: number;
  pricingModel: string;
  features: string[];
  benefits: string[];
  targetAudience: string[];
  tags: string[];
  contactInfo: {
    phone: string;
    email: string;
    website: string;
    address: string;
  };
  marketPrice: string;
  competitors: string[];
  roi: string;
  setupTime: string;
  integrations: string[];
  freeTier: boolean;
  trialPeriod: string;
  innovationLevel: string;
  marketSize: string;
  growthRate: string;
  useCases: string[];
  technologies: string[];
}

const UltimateServicesShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const allServices = [
    ...newMicroSaasServices2025.map(s => ({ ...s, serviceType: 'Micro SAAS Services' })),
    ...newITServices2025.map(s => ({ ...s, serviceType: 'IT Services' })),
    ...newAIServices2025.map(s => ({ ...s, serviceType: 'AI Services' }))
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length },
    { id: 'Micro SAAS Services', name: 'Micro SAAS Services', count: newMicroSaasServices2025.length },
    { id: 'IT Services', name: 'IT Services', count: newITServices2025.length },
    { id: 'AI Services', name: 'AI Services', count: newAIServices2025.length },
    { id: 'Content Marketing', name: 'Content Marketing', count: allServices.filter(s => s.category.includes('Content') || s.category.includes('Marketing')).length },
    { id: 'E-commerce', name: 'E-commerce', count: allServices.filter(s => s.category.includes('E-commerce')).length },
    { id: 'Customer Experience', name: 'Customer Experience', count: allServices.filter(s => s.category.includes('Customer')).length },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category.includes('Security') || s.category.includes('Cybersecurity')).length },
    { id: 'Cloud Computing', name: 'Cloud Computing', count: allServices.filter(s => s.category.includes('Cloud')).length },
    { id: 'Financial Technology', name: 'Financial Technology', count: allServices.filter(s => s.category.includes('Financial') || s.category.includes('FinTech')).length }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.serviceType === selectedCategory || service.category.includes(selectedCategory);
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatPrice = (price: number, currency: string, model: string) => {
    if (model === 'month') {
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
      case 'Micro SAAS Services': return 'bg-cyan-100 text-cyan-800';
      case 'IT Services': return 'bg-orange-100 text-orange-800';
      case 'AI Services': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Ultimate Technology Services 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Discover our comprehensive portfolio of innovative micro SAAS services, cutting-edge IT solutions, and revolutionary AI platforms designed to transform your business and drive unprecedented growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <strong>{newMicroSaasServices2025.length}+</strong> Micro SAAS Services
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <strong>{newITServices2025.length}+</strong> IT Solutions
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <strong>{newAIServices2025.length}+</strong> AI Platforms
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <div className="flex flex-wrap justify-center gap-8 text-lg">
              <div className="flex items-center gap-2">
                <span className="font-semibold">📞 Phone:</span>
                <a href={`tel:${zionContact.phone}`} className="hover:text-cyan-200 transition-colors">
                  {zionContact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">✉️ Email:</span>
                <a href={`mailto:${zionContact.email}`} className="hover:text-cyan-200 transition-colors">
                  {zionContact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">🌐 Website:</span>
                <a href={zionContact.website} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-200 transition-colors">
                  {zionContact.website}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">📍 Address:</span>
                <span>{zionContact.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
          <div className="text-sm text-gray-600">
            Showing {filteredServices.length} of {allServices.length} services
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getServiceTypeColor(service.serviceType)}`}>
                        {service.serviceType}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getInnovationLevelColor(service.innovationLevel)}`}>
                        {service.innovationLevel}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{service.description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">{service.pricing}</span>
                    <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {service.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {service.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        +{service.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-green-600 font-medium">ROI: {service.roi}</span>
                    <span className="text-gray-500">Setup: {service.setupTime}</span>
                  </div>

                  <div className="pt-2">
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
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
              className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getServiceTypeColor(selectedService.serviceType)}`}>
                      {selectedService.serviceType}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getInnovationLevelColor(selectedService.innovationLevel)}`}>
                      {selectedService.innovationLevel}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedService.name}</h2>
                  <p className="text-gray-600 text-lg">{selectedService.description}</p>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">Pricing & ROI</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Our Price:</span>
                      <span className="text-2xl font-bold text-blue-600">{selectedService.pricing}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Market Price:</span>
                      <span className="text-gray-600">{selectedService.marketPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">ROI:</span>
                      <span className="text-green-600 font-bold">{selectedService.roi}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Setup Time:</span>
                      <span className="text-gray-600">{selectedService.setupTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Free Tier:</span>
                      <span className={selectedService.freeTier ? 'text-green-600' : 'text-red-600'}>
                        {selectedService.freeTier ? 'Yes' : 'No'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Trial Period:</span>
                      <span className="text-gray-600">{selectedService.trialPeriod}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Market Information</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Market Size:</span>
                      <span className="text-gray-600">{selectedService.marketSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Growth Rate:</span>
                      <span className="text-green-600">{selectedService.growthRate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Category:</span>
                      <span className="text-gray-600">{selectedService.category}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedService.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedService.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-blue-500">→</span>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Target Audience</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedService.targetAudience.map((audience, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {audience}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Use Cases</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedService.useCases.map((useCase, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-purple-500">•</span>
                      <span className="text-gray-700">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedService.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Integrations</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedService.integrations.map((integration, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                    >
                      {integration}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Competitors</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedService.competitors.map((competitor, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm"
                    >
                      {competitor}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="text-sm text-gray-600 mb-2">Contact Information:</div>
                    <div className="space-y-1 text-sm">
                      <div>📞 Phone: <a href={`tel:${selectedService.contactInfo.phone}`} className="text-blue-600 hover:underline">{selectedService.contactInfo.phone}</a></div>
                      <div>✉️ Email: <a href={`mailto:${selectedService.contactInfo.email}`} className="text-blue-600 hover:underline">{selectedService.contactInfo.email}</a></div>
                      <div>🌐 Website: <a href={selectedService.contactInfo.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{selectedService.contactInfo.website}</a></div>
                      <div>📍 Address: {selectedService.contactInfo.address}</div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                      Request Quote
                    </button>
                    <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
                      Schedule Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Your Business Today
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of businesses that have already transformed their operations with our innovative technology solutions. 
            Get started with a free consultation and discover how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors">
              Get Free Consultation
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors">
              View All Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateServicesShowcase2025;
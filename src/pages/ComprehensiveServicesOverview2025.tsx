import React, { useState } from 'react';
import { advancedAIAutomationServices2025 } from '../data/2025-advanced-ai-automation-services';
import { specializedITInfrastructureServices2025 } from '../data/2025-specialized-it-infrastructure-services';
import { innovativeMicroSaasSolutions2025 } from '../data/2025-innovative-micro-saas-solutions';
import { emergingTechnologyServices2025 } from '../data/2025-emerging-technology-services';

const ComprehensiveServicesOverview2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<any>(null);

  const allServices = [
    ...advancedAIAutomationServices2025.map(service => ({ ...service, category: 'AI Automation' })),
    ...specializedITInfrastructureServices2025.map(service => ({ ...service, category: 'IT Infrastructure' })),
    ...innovativeMicroSaasSolutions2025.map(service => ({ ...service, category: 'Micro SAAS Solutions' })),
    ...emergingTechnologyServices2025.map(service => ({ ...service, category: 'Emerging Technology' }))
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length },
    { id: 'AI Automation', name: 'AI Automation', count: advancedAIAutomationServices2025.length },
    { id: 'IT Infrastructure', name: 'IT Infrastructure', count: specializedITInfrastructureServices2025.length },
    { id: 'Micro SAAS Solutions', name: 'Micro SAAS Solutions', count: innovativeMicroSaasSolutions2025.length },
    { id: 'Emerging Technology', name: 'Emerging Technology', count: emergingTechnologyServices2025.length }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Zion Tech Group
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Comprehensive Services 2025
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover our extensive portfolio of cutting-edge micro SAAS solutions, IT services, AI-powered innovations, and emerging technology services designed to transform your business
          </p>
          
          {/* Key Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">{allServices.length}+</div>
              <div className="text-sm text-gray-300">Total Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-cyan-400 mb-2">4</div>
              <div className="text-sm text-gray-300">Service Categories</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-2">99%</div>
              <div className="text-sm text-gray-300">Client Satisfaction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-sm text-gray-300">Support Available</div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 border border-white/20 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-center">Contact Zion Tech Group</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
              <div>
                <p className="text-lg font-semibold text-blue-400 mb-2">Contact Details</p>
                <p><strong>Mobile:</strong> +1 302 464 0950</p>
                <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-cyan-400 mb-2">Address</p>
                <p>364 E Main St STE 1008</p>
                <p>Middletown DE 19709</p>
              </div>
            </div>
            <div className="text-center mt-6">
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Visit Our Website
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{service.icon}</div>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-blue-400">{service.price}</div>
                  <div className="text-gray-400 text-sm">{service.period}</div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>Category: {service.category}</span>
                  <span>Setup: {service.setupTime}</span>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'fill-current' : 'fill-gray-600'}`} viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-400">({service.reviews} reviews)</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="text-5xl">{selectedService.icon}</div>
                  <div>
                    <h2 className="text-3xl font-bold">{selectedService.name}</h2>
                    <p className="text-xl text-gray-300">{selectedService.tagline}</p>
                    <p className="text-sm text-gray-400 mt-1">Category: {selectedService.category}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Service Overview</h3>
                  <p className="text-gray-300 mb-6">{selectedService.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-300">
                          <span className="text-green-400">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Technology Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.technology.map((tech, index) => (
                        <span key={index} className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Use Cases:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.useCases.map((useCase, index) => (
                        <span key={index} className="bg-green-600/20 text-green-300 px-2 py-1 rounded text-sm">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="bg-white/10 rounded-lg p-6 mb-6">
                    <h4 className="font-semibold mb-4">Pricing & Information</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Price:</span>
                        <span className="text-2xl font-bold text-blue-400">{selectedService.price}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Period:</span>
                        <span>{selectedService.period}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Trial:</span>
                        <span>{selectedService.trialDays} days</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Setup Time:</span>
                        <span>{selectedService.setupTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Rating:</span>
                        <span className="flex items-center gap-1">
                          <span className="text-yellow-400">{selectedService.rating}</span>
                          <span className="text-gray-400">/5</span>
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Customers:</span>
                        <span>{selectedService.customers}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-lg p-6 mb-6">
                    <h4 className="font-semibold mb-4">Market Information</h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-medium">Market Position:</span>
                        <p className="text-gray-300 mt-1">{selectedService.marketPosition}</p>
                      </div>
                      <div>
                        <span className="font-medium">Target Audience:</span>
                        <p className="text-gray-300 mt-1">{selectedService.targetAudience}</p>
                      </div>
                      <div>
                        <span className="font-medium">ROI:</span>
                        <p className="text-gray-300 mt-1">{selectedService.roi}</p>
                      </div>
                      <div>
                        <span className="font-medium">Market Size:</span>
                        <p className="text-gray-300 mt-1">{selectedService.marketSize}</p>
                      </div>
                      <div>
                        <span className="font-medium">Growth Rate:</span>
                        <p className="text-gray-300 mt-1">{selectedService.growthRate}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-lg p-6 mb-6">
                    <h4 className="font-semibold mb-4">Competitors</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.competitors.map((competitor, index) => (
                        <span key={index} className="bg-red-600/20 text-red-300 px-2 py-1 rounded text-sm">
                          {competitor}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={selectedService.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-lg text-center font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                    >
                      Learn More
                    </a>
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${selectedService.name}`}
                      className="flex-1 bg-white/10 text-white py-3 px-6 rounded-lg text-center font-semibold hover:bg-white/20 transition-all duration-300"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our innovative services can help drive your digital transformation and competitive advantage
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Get Custom Quote
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              Call Us: +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesOverview2025;
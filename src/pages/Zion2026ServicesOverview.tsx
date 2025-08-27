import React, { useState } from 'react';
import { zion2026InnovativeMicroSAASServices } from '../../data/zion-2026-innovative-micro-saas-services';

const Zion2026ServicesOverview: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    'all',
    'AI & Automation',
    'Cybersecurity & Quantum',
    'Healthcare & AI',
    'Blockchain & Supply Chain',
    'Fintech & AI',
    'IoT & Edge Computing',
    'AI & Content Creation',
    'Quantum & Machine Learning',
    'AI & Customer Service',
    'Space Technology'
  ];

  const filteredServices = zion2026InnovativeMicroSAASServices.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'AI & Automation': 'from-purple-600 to-indigo-700',
      'Cybersecurity & Quantum': 'from-green-600 to-emerald-700',
      'Healthcare & AI': 'from-blue-600 to-cyan-700',
      'Blockchain & Supply Chain': 'from-orange-600 to-red-700',
      'Fintech & AI': 'from-yellow-600 to-orange-700',
      'IoT & Edge Computing': 'from-indigo-600 to-purple-700',
      'AI & Content Creation': 'from-pink-600 to-rose-700',
      'Quantum & Machine Learning': 'from-cyan-600 to-blue-700',
      'AI & Customer Service': 'from-teal-600 to-green-700',
      'Space Technology': 'from-gray-600 to-slate-700'
    };
    return colors[category] || 'from-gray-600 to-slate-700';
  };

  const selectedServiceData = selectedService 
    ? zion2026InnovativeMicroSAASServices.find(service => service.id === selectedService)
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Zion Tech Group
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-zion-cyan mb-8">
              2026 Services Overview
            </h2>
            <p className="text-xl md:text-2xl text-zion-cyan-light max-w-4xl mx-auto mb-12">
              Comprehensive overview of our innovative micro SAAS services with detailed technology insights and implementation information
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <div className="text-3xl font-bold text-zion-cyan mb-2">
                  {zion2026InnovativeMicroSAASServices.length}
                </div>
                <div className="text-zion-cyan-light">Total Services</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <div className="text-3xl font-bold text-zion-cyan mb-2">
                  {categories.length - 1}
                </div>
                <div className="text-zion-cyan-light">Categories</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <div className="text-3xl font-bold text-zion-cyan mb-2">
                  {zion2026InnovativeMicroSAASServices.reduce((sum, service) => sum + service.customers, 0).toLocaleString()}
                </div>
                <div className="text-zion-cyan-light">Total Customers</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <div className="text-3xl font-bold text-zion-cyan mb-2">
                  {(zion2026InnovativeMicroSAASServices.reduce((sum, service) => sum + service.rating, 0) / zion2026InnovativeMicroSAASServices.length).toFixed(1)}
                </div>
                <div className="text-zion-cyan-light">Avg Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-gradient-to-r from-zion-cyan to-zion-purple py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-2xl font-bold mb-2">Contact Us</div>
              <div className="text-lg">Mobile: +1 302 464 0950</div>
              <div className="text-lg">Email: kleber@ziontechgroup.com</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">Address</div>
              <div className="text-lg">364 E Main St STE 1008</div>
              <div className="text-lg">Middletown DE 19709</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">Website</div>
              <div className="text-lg">
                <a href="https://ziontechgroup.com" className="underline hover:text-zion-cyan-light">
                  ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Services List */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sticky top-8">
              <h3 className="text-xl font-bold text-zion-cyan mb-4">Services by Category</h3>
              
              {/* Category Filter */}
              <div className="mb-6">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 bg-white/20 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-zion-slate-dark text-white">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Services List */}
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {filteredServices.map(service => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                      selectedService === service.id
                        ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white'
                        : 'bg-white/10 text-zion-cyan-light hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{service.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold truncate">{service.name}</div>
                        <div className="text-sm opacity-80 truncate">{service.tagline}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Service Details */}
          <div className="lg:col-span-2">
            {selectedServiceData ? (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                {/* Service Header */}
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">{selectedServiceData.icon}</div>
                  <h1 className="text-4xl font-bold text-white mb-4">{selectedServiceData.name}</h1>
                  <p className="text-xl text-zion-cyan-light mb-6">{selectedServiceData.tagline}</p>
                  
                  {/* Popular Badge */}
                  {selectedServiceData.popular && (
                    <div className="inline-block bg-gradient-to-r from-zion-cyan to-zion-purple text-white text-sm font-bold px-4 py-2 rounded-full mb-6">
                      ⭐ POPULAR SERVICE
                    </div>
                  )}

                  {/* Price and Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="text-2xl font-bold text-zion-cyan">{selectedServiceData.price}</div>
                      <div className="text-zion-cyan-light">{selectedServiceData.period}</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="text-2xl font-bold text-zion-cyan">{selectedServiceData.rating}</div>
                      <div className="text-zion-cyan-light">Rating</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="text-2xl font-bold text-zion-cyan">{selectedServiceData.customers.toLocaleString()}</div>
                      <div className="text-zion-cyan-light">Customers</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="text-2xl font-bold text-zion-cyan">{selectedServiceData.trialDays}</div>
                      <div className="text-zion-cyan-light">Trial Days</div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-zion-cyan mb-4">Description</h2>
                  <p className="text-zion-cyan-light leading-relaxed">{selectedServiceData.description}</p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-zion-cyan mb-4">Key Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedServiceData.features.map((feature, index) => (
                      <div key={index} className="flex items-center bg-white/5 rounded-lg p-3">
                        <span className="text-zion-cyan mr-3">✓</span>
                        <span className="text-white">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Stack */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-zion-cyan mb-4">Technology Stack</h2>
                  <div className="flex flex-wrap gap-2">
                    {selectedServiceData.technology.map((tech, index) => (
                      <span key={index} className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 text-zion-cyan px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Integrations */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-zion-cyan mb-4">Integrations</h2>
                  <div className="flex flex-wrap gap-2">
                    {selectedServiceData.integrations.map((integration, index) => (
                      <span key={index} className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                        {integration}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Use Cases */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-zion-cyan mb-4">Use Cases</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedServiceData.useCases.map((useCase, index) => (
                      <div key={index} className="bg-white/5 rounded-lg p-3">
                        <span className="text-zion-cyan-light">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Market Information */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-zion-cyan mb-4">Market Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/5 rounded-xl p-4">
                      <h3 className="font-bold text-white mb-2">Market Position</h3>
                      <p className="text-zion-cyan-light text-sm">{selectedServiceData.marketPosition}</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4">
                      <h3 className="font-bold text-white mb-2">Target Audience</h3>
                      <p className="text-zion-cyan-light text-sm">{selectedServiceData.targetAudience}</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4">
                      <h3 className="font-bold text-white mb-2">Market Size</h3>
                      <p className="text-zion-cyan-light text-sm">{selectedServiceData.marketSize}</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4">
                      <h3 className="font-bold text-white mb-2">Growth Rate</h3>
                      <p className="text-zion-cyan-light text-sm">{selectedServiceData.growthRate}</p>
                    </div>
                  </div>
                </div>

                {/* ROI and Implementation */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-zion-cyan mb-4">ROI & Implementation</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-xl p-4">
                      <h3 className="font-bold text-zion-cyan mb-2">Expected ROI</h3>
                      <p className="text-zion-cyan-light text-sm">{selectedServiceData.roi}</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4">
                      <h3 className="font-bold text-white mb-2">Implementation Details</h3>
                      <p className="text-zion-cyan-light text-sm">{selectedServiceData.implementationDetails}</p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="text-center">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href={selectedServiceData.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-bold rounded-lg hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-200"
                    >
                      Learn More
                    </a>
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${selectedServiceData.name}`}
                      className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-bold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-200"
                    >
                      Get Quote
                    </a>
                    <a
                      href="tel:+13024640950"
                      className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-bold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-200"
                    >
                      Call Us
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-zion-cyan mb-2">Select a Service</h3>
                <p className="text-zion-cyan-light">Choose a service from the left sidebar to view detailed information</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-zion-cyan to-zion-purple py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need More Information?
          </h2>
          <p className="text-xl text-zion-cyan-light mb-8">
            Our team is ready to help you understand how our services can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center px-8 py-4 bg-white text-zion-cyan font-bold rounded-lg hover:bg-zion-cyan-light transition-colors duration-200"
            >
              📧 Contact Us
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-zion-cyan transition-colors duration-200"
            >
              📞 Call +1 302 464 0950
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zion2026ServicesOverview;
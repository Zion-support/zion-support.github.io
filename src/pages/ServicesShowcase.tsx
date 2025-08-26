import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ADVANCED_INNOVATIVE_SERVICES_2025 } from '../data/advancedInnovativeServices2025';
import { SPECIALIZED_INDUSTRY_SOLUTIONS_2025 } from '../data/specializedIndustrySolutions2025';

const ServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const allServices = [
    ...ADVANCED_INNOVATIVE_SERVICES_2025,
    ...SPECIALIZED_INDUSTRY_SOLUTIONS_2025
  ];

  const categories = [
    'all',
    'Advanced AI & ML',
    'Blockchain & Web3',
    'Quantum Computing',
    'Advanced Cybersecurity',
    'Edge Computing & IoT',
    'Advanced Data Analytics',
    'Autonomous Systems',
    'Digital Twin Technology',
    'Metaverse & VR/AR',
    'Green Technology',
    'Healthcare & Life Sciences',
    'Financial Services & Banking',
    'Manufacturing & Industry 4.0',
    'Retail & E-commerce',
    'Transportation & Logistics',
    'Energy & Utilities',
    'Education & EdTech',
    'Real Estate & Property Management',
    'Legal & Compliance'
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Advanced
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Innovative Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover our cutting-edge technology solutions designed to transform your business and drive innovation across industries. 
            From AI and quantum computing to specialized industry solutions, we provide the tools you need to stay ahead of the competition.
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
              />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-slate-800">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Ready to Get Started?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-300">📞 <strong>Phone:</strong></p>
                <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">+1 302 464 0950</a>
              </div>
              <div>
                <p className="text-gray-300">✉️ <strong>Email:</strong></p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray-300">📍 <strong>Address:</strong></p>
                <p className="text-gray-300">364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {filteredServices.length} Cutting-Edge Solutions Available
            </h2>
            <p className="text-xl text-gray-300">
              Each service is designed to deliver measurable results and competitive advantages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Service Header */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full">
                      {service.innovationLevel}
                    </span>
                    <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full">
                      {service.supportLevel}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-400 mb-2">{service.category} • {service.subcategory}</p>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-xs text-gray-400">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="text-xs text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing & ROI */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <h4 className="text-sm font-semibold text-yellow-400">Pricing:</h4>
                      <p className="text-sm text-gray-300">{service.currency}{service.price.toLocaleString()}/{service.pricingModel}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-purple-400">ROI:</h4>
                      <p className="text-sm text-gray-300">{service.roi}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400">Market: {service.marketPrice}</p>
                </div>

                {/* Technical Specs */}
                {service.technicalSpecs && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Technical Specs:</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-gray-400">API Endpoints:</span>
                        <p className="text-gray-300">{service.technicalSpecs.apiEndpoints}</p>
                      </div>
                      <div>
                        <span className="text-gray-400">Uptime:</span>
                        <p className="text-gray-300">{service.technicalSpecs.uptime}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Use Cases */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-orange-400 mb-2">Perfect For:</h4>
                  <p className="text-xs text-gray-300">{service.useCases.slice(0, 3).join(', ')}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2">
                  {service.demoUrl && (
                    <a
                      href={service.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                      🚀 View Demo
                    </a>
                  )}
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-4 py-2 border border-blue-400 text-blue-400 text-sm font-medium rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
                  >
                    💬 Get Quote
                  </Link>
                </div>

                {/* Delivery & Support */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>📅 {service.estimatedDelivery}</span>
                    <span>🎯 {service.supportLevel} support</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-400">No services found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Transform Your Business with Cutting-Edge Technology
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our innovative solutions are designed to give you a competitive edge in today's rapidly evolving digital landscape.
            Let's discuss how we can help you achieve your goals.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-2">🚀</div>
              <h3 className="text-lg font-semibold text-white mb-2">Innovation First</h3>
              <p className="text-sm text-gray-300">Cutting-edge AI, quantum computing, and emerging technologies</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-2">💼</div>
              <h3 className="text-lg font-semibold text-white mb-2">Industry Expertise</h3>
              <p className="text-sm text-gray-300">Specialized solutions for healthcare, finance, manufacturing, and more</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-2">📈</div>
              <h3 className="text-lg font-semibold text-white mb-2">Proven Results</h3>
              <p className="text-sm text-gray-300">Measurable ROI and performance improvements across industries</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Start Your Transformation
            </Link>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              Call: +1 302 464 0950
            </a>
          </div>

          <div className="mb-6">
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center px-6 py-2 text-blue-400 hover:text-blue-300 border border-blue-400 rounded-lg transition-all duration-300"
            >
              📧 Email: kleber@ziontechgroup.com
            </a>
          </div>

          <div className="text-sm text-gray-400">
            <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>🌐 Website: <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300">https://ziontechgroup.com</a></p>
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Service Categories
            </h2>
            <p className="text-xl text-gray-300">
              Explore our wide range of innovative solutions across different technology domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.filter(cat => cat !== 'all').map((category, index) => {
              const categoryServices = allServices.filter(service => service.category === category);
              const avgPrice = categoryServices.length > 0 
                ? categoryServices.reduce((sum, service) => sum + service.price, 0) / categoryServices.length 
                : 0;
              
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{category}</h3>
                  <p className="text-sm text-gray-400 mb-4">{categoryServices.length} services available</p>
                  <p className="text-sm text-blue-400 mb-2">Starting from ${Math.round(avgPrice).toLocaleString()}/month</p>
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className="w-full px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    View Services
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesShowcase;
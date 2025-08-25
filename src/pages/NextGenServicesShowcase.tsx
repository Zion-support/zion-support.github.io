import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NEXT_GEN_INNOVATIVE_SERVICES } from '../data/nextGenInnovativeServices';
import { ADVANCED_IT_INFRASTRUCTURE_SERVICES } from '../data/advancedITInfrastructureServices';
import { SPECIALIZED_AI_SERVICES } from '../data/specializedAIServices';

const NextGenServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const allServices = [
    ...NEXT_GEN_INNOVATIVE_SERVICES,
    ...ADVANCED_IT_INFRASTRUCTURE_SERVICES,
    ...SPECIALIZED_AI_SERVICES
  ];

  const categories = ['all', ...new Set(allServices.map(service => service.category))];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Next-Generation
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Innovative Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover cutting-edge micro SAAS solutions, advanced IT infrastructure, and specialized AI services 
              that transform businesses and drive innovation across industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Get Started Today
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-300 bg-transparent hover:bg-gray-700 transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-300 mb-2">
                Search Services
              </label>
              <input
                type="text"
                id="search"
                placeholder="Search by service name, description, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">
                Filter by Category
              </label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-gray-800 text-white">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-gray-600/30"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-300 bg-blue-900/30 rounded-full mb-2">
                  {service.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="text-xs text-gray-400 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Benefits:</h4>
                <ul className="space-y-1">
                  {service.benefits.slice(0, 2).map((benefit, index) => (
                    <li key={index} className="text-xs text-gray-400 flex items-center">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing and Contact */}
              <div className="border-t border-gray-600/30 pt-4">
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <span className="text-2xl font-bold text-white">
                      {service.currency}{service.price.toLocaleString()}
                    </span>
                    <span className="text-gray-400 text-sm">/{service.pricingModel}</span>
                  </div>
                  <span className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded">
                    {service.supportLevel}
                  </span>
                </div>
                
                <div className="text-xs text-gray-400 mb-3">
                  Market Price: {service.marketPrice}
                </div>

                <div className="flex gap-2">
                  <Link
                    to={`/services/${service.id}`}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg text-center transition-colors"
                  >
                    Learn More
                  </Link>
                  <a
                    href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                    className="flex-1 bg-gray-600 hover:bg-gray-700 text-white text-sm font-medium py-2 px-4 rounded-lg text-center transition-colors"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our team of experts is ready to help you implement these cutting-edge solutions. 
              Get in touch today to discuss your specific needs and discover how we can drive innovation in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Service Inquiry"
                className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-300 bg-transparent hover:bg-gray-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Email kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>

        {/* Company Information */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">About Zion Tech Group</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-300">
              <div>
                <h4 className="font-semibold text-white mb-2">Contact Information</h4>
                <p>Mobile: +1 302 464 0950</p>
                <p>Email: kleber@ziontechgroup.com</p>
                <p>Website: <a href="https://ziontechgroup.com" className="text-blue-400 hover:underline">ziontechgroup.com</a></p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Address</h4>
                <p>364 E Main St STE 1008</p>
                <p>Middletown, DE 19709</p>
                <p>United States</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Why Choose Us</h4>
                <p>• Cutting-edge technology</p>
                <p>• Expert implementation</p>
                <p>• Proven ROI</p>
                <p>• 24/7 support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenServicesShowcase;
import React, { useState } from 'react';
import { ENHANCED_ZION_TECH_SERVICES_2025, getEnhancedServiceCategories, getEnhancedServicesByCategory } from '../data/enhancedZionTechServices2025';

const EnhancedZionTechServices2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('name');

  const categories = ['All', ...getEnhancedServiceCategories()];
  
  const filteredServices = ENHANCED_ZION_TECH_SERVICES_2025.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'rating':
        return b.rating - a.rating;
      case 'aiScore':
        return b.aiScore - a.aiScore;
      default:
        return a.title.localeCompare(b.title);
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Zion Tech Group
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Enhanced Services 2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Cutting-edge micro SAAS, IT services, and AI solutions designed to transform your business. 
              Real solutions with proven results and comprehensive support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">+1 302 464 0950</div>
                <div className="text-gray-400">Call us directly</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-semibold text-purple-400">kleber@ziontechgroup.com</div>
                <div className="text-gray-400">Email for inquiries</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-green-400">364 E Main St STE 1008</div>
                <div className="text-gray-400">Middletown DE 19709</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Comprehensive Service Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From AI-powered business solutions to cutting-edge quantum computing, 
            we provide the technology foundation your business needs to thrive in 2025 and beyond.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">{ENHANCED_ZION_TECH_SERVICES_2025.length}</div>
            <div className="text-gray-400">Total Services</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">$599</div>
            <div className="text-gray-400">Starting Price</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">4.8+</div>
            <div className="text-gray-400">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
            <div className="text-gray-400">Support Available</div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="rating">Sort by Rating</option>
              <option value="aiScore">Sort by AI Score</option>
            </select>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedServices.map((service) => (
            <div key={service.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              {/* Service Header */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full">
                    {service.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400">★</span>
                    <span className="text-white">{service.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </div>

              {/* AI Score */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">AI Intelligence Score</span>
                  <span className="text-lg font-bold text-green-400">{service.aiScore}/100</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${service.aiScore}%` }}
                  ></div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="text-xs text-gray-400 flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                <ul className="space-y-1">
                  {service.benefits.slice(0, 2).map((benefit, index) => (
                    <li key={index} className="text-xs text-gray-400 flex items-center">
                      <span className="text-blue-400 mr-2">→</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing */}
              <div className="mb-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">${service.price}</div>
                  <div className="text-sm text-gray-400">per month</div>
                  {service.pricing?.yearly && (
                    <div className="text-xs text-green-400 mt-1">
                      ${service.pricing.yearly}/year (Save ${(service.price * 12 - service.pricing.yearly).toLocaleString()})
                    </div>
                  )}
                </div>
              </div>

              {/* Tags */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {service.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact and Action */}
              <div className="space-y-3">
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold"
                >
                  Learn More
                </a>
                <div className="text-center">
                  <a
                    href={`mailto:${service.contactInfo.email}`}
                    className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Contact Sales
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-2">Call Us</div>
              <div className="text-white text-lg">+1 302 464 0950</div>
              <div className="text-gray-400 text-sm">Available 24/7</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-2">Email Us</div>
              <div className="text-white text-lg">kleber@ziontechgroup.com</div>
              <div className="text-gray-400 text-sm">Quick response guaranteed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-2">Visit Us</div>
              <div className="text-white text-lg">364 E Main St STE 1008</div>
              <div className="text-gray-400 text-sm">Middletown DE 19709</div>
            </div>
          </div>
        </div>

        {/* Why Choose Zion Tech Group */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Zion Tech Group?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2">Cutting-Edge Technology</h3>
              <p className="text-gray-400">Access to the latest AI, quantum computing, and emerging technologies</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
              <p className="text-gray-400">Real solutions with measurable business impact and ROI</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
              <p className="text-gray-400">SOC2 compliance, HIPAA-ready, and enterprise-grade security</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-white mb-2">Global Support</h3>
              <p className="text-gray-400">24/7 support and global deployment capabilities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedZionTechServices2025;
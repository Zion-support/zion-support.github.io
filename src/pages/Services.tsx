import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { enhancedMicroSaasServices2025 } from '../data/comprehensiveServices2025';

const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('name');

  const categories = [
    'all',
    'Productivity',
    'Finance',
    'Marketing',
    'CRM',
    'Analytics',
    'Scheduling',
    'Quantum Computing',
    'AI Architecture',
    'Edge Computing',
    'Privacy AI',
    'AI Governance',
    'AI Ecosystem'
  ];

  const filteredServices = enhancedMicroSaasServices2025
    .filter(service => 
      selectedCategory === 'all' || service.category === selectedCategory
    )
    .filter(service =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'category':
          return a.category.localeCompare(b.category);
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const formatPrice = (price: number, model: string) => {
    if (model === 'monthly') {
      return `$${price}/month`;
    } else if (model === 'one-time') {
      return `$${price.toLocaleString()}`;
    }
    return `$${price}`;
  };

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      'Productivity': '⚡',
      'Finance': '💰',
      'Marketing': '📢',
      'CRM': '👥',
      'Analytics': '📊',
      'Scheduling': '📅',
      'Quantum Computing': '🔮',
      'AI Architecture': '🧠',
      'Edge Computing': '🌐',
      'Privacy AI': '🔒',
      'AI Governance': '⚖️',
      'AI Ecosystem': '🌍'
    };
    return icons[category] || '🚀';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comprehensive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Micro SAAS Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover our cutting-edge collection of 35+ innovative micro SAAS solutions, 
            from AI-powered productivity tools to revolutionary quantum computing platforms. 
            Each service is designed to transform your business and drive innovation.
          </p>
          
          {/* Navigation to Comprehensive Services */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link
              to="/comprehensive-services-2025"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
            >
              🚀 Enhanced 2025 Services
            </Link>
            <Link
              to="/enhanced-services-2025"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
            >
              📊 Services Showcase
            </Link>
            <Link
              to="/comprehensive-services-overview-2025"
              className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
            >
              🔍 Services Overview
            </Link>
          </div>
          
          {/* Contact Info */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-blue-400 mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p><span className="text-blue-400">Phone:</span> +1 302 464 0950</p>
                <p><span className="text-blue-400">Email:</span> kleber@ziontechgroup.com</p>
              </div>
              <div>
                <p><span className="text-blue-400">Website:</span> ziontechgroup.com</p>
                <p><span className="text-blue-400">Address:</span> 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
          
          {/* Innovative Services Preview */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Discover Our Innovative Services</h3>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Explore cutting-edge solutions including quantum computing, blockchain, IoT, and advanced cybersecurity
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-green-800/30 to-emerald-700/30 backdrop-blur-lg rounded-xl p-6 border border-green-600/30">
                <div className="text-3xl mb-3">⚛️</div>
                <h4 className="text-lg font-semibold text-white mb-2">Quantum Computing</h4>
                <p className="text-sm text-gray-300">Revolutionary quantum solutions for complex problems</p>
              </div>
              <div className="bg-gradient-to-br from-orange-800/30 to-red-700/30 backdrop-blur-lg rounded-xl p-6 border border-orange-600/30">
                <div className="text-3xl mb-3">🔗</div>
                <h4 className="text-lg font-semibold text-white mb-2">Blockchain & Web3</h4>
                <p className="text-sm text-gray-300">DeFi, NFTs, and decentralized applications</p>
              </div>
              <div className="bg-gradient-to-br from-teal-800/30 to-cyan-700/30 backdrop-blur-lg rounded-xl p-6 border border-teal-600/30">
                <div className="text-3xl mb-3">🏙️</div>
                <h4 className="text-lg font-semibold text-white mb-2">IoT & Edge Computing</h4>
                <p className="text-sm text-gray-300">Smart cities, industrial IoT, and healthcare monitoring</p>
              </div>
              <div className="bg-gradient-to-br from-pink-800/30 to-rose-700/30 backdrop-blur-lg rounded-xl p-6 border border-pink-600/30">
                <div className="text-3xl mb-3">🔒</div>
                <h4 className="text-lg font-semibold text-white mb-2">Advanced Cybersecurity</h4>
                <p className="text-sm text-gray-300">Zero-trust security and quantum-resistant cryptography</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
              />
              <svg className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category === 'all' ? 'All Categories' : category}
                </button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="category">Sort by Category</option>
            </select>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {filteredServices.length} Services Found
            </h2>
            <p className="text-gray-300">
              Showing {filteredServices.length} of {enhancedMicroSaasServices2025.length} total services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{getCategoryIcon(service.category)}</div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      service.pricing === 'Freemium' ? 'bg-green-500/20 text-green-400' :
                      service.pricing === 'Professional' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {service.pricing}
                    </span>
                  </div>
                </div>

                {/* Service Title and Description */}
                <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>

                {/* Pricing */}
                <div className="mb-4">
                  <div className="text-2xl font-bold text-blue-400">
                    {formatPrice(service.price, service.pricingModel)}
                  </div>
                  <div className="text-sm text-gray-400">
                    Market Price: {service.marketPrice}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-400 mb-3">Key Features:</h4>
                  <div className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-xs text-gray-500">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-green-400 mb-3">Benefits:</h4>
                  <div className="space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Info */}
                <div className="mb-6 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Setup Time:</span>
                    <span className="text-white">{service.setupTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">ROI:</span>
                    <span className="text-green-400">{service.roi}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Users:</span>
                    <span className="text-white">{service.userLimit}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {service.tags.slice(0, 4).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <a
                    href={service.contactInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                  >
                    Learn More
                  </a>
                  <a
                    href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
                    className="block w-full text-center px-4 py-2 bg-white/10 text-blue-400 font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
                  >
                    Contact Sales
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-300">Try adjusting your search criteria or category filter</p>
            </div>
          )}
        </div>
      </section>

      {/* Innovative Services 2025 Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Discover Our Latest Innovations
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Explore our comprehensive portfolio of cutting-edge micro SAAS solutions, AI services, and next-generation technologies for 2025
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/advanced-services-showcase-2025"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              View Advanced Services 2025
            </Link>
            <Link
              to="/innovative-services-2025"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300"
            >
              View Innovative Services 2025
            </Link>
            <Link
              to="/comprehensive-pricing-2025"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-indigo-700 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team of experts is ready to help you implement the perfect solution for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Service Inquiry"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Contact Us Today
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

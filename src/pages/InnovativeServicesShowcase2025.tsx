import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { innovativeMicroSaasServices2025 } from '../data/2025-innovative-micro-saas-expansion';
import { specializedIndustrySolutions2025 } from '../data/2025-specialized-industry-solutions';
import { emergingTechServices2025 } from '../data/2025-emerging-tech-services';

const InnovativeServicesShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Combine all services
  const allServices = [
    ...innovativeMicroSaasServices2025,
    ...specializedIndustrySolutions2025,
    ...emergingTechServices2025
  ];

  const categories = [
    'all',
    'Quantum AI & Research',
    'Edge AI & IoT',
    'Blockchain & Web3',
    'Sustainable AI',
    'Healthcare AI',
    'Financial AI',
    'Cybersecurity AI',
    'Logistics & Supply Chain AI',
    'Education AI',
    'Aerospace & Defense',
    'Automotive & Transportation',
    'Energy & Utilities',
    'Manufacturing & Industry 4.0',
    'Healthcare & Life Sciences',
    'Retail & E-commerce',
    'Construction & Real Estate',
    'Agriculture & Food',
    'Quantum Computing',
    'Neuromorphic Computing',
    'DNA Computing',
    'Photonic Computing',
    'Biological Computing',
    'Swarm Robotics',
    'Brain-Computer Interfaces',
    'Synthetic Biology'
  ];

  const filteredServices = allServices
    .filter(service => 
      selectedCategory === 'all' || service.category === selectedCategory
    )
    .filter(service =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
        case 'category':
          return a.category.localeCompare(b.category);
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      'Quantum AI & Research': '🔮',
      'Edge AI & IoT': '🌐',
      'Blockchain & Web3': '⛓️',
      'Sustainable AI': '🌱',
      'Healthcare AI': '🏥',
      'Financial AI': '💰',
      'Cybersecurity AI': '🔒',
      'Logistics & Supply Chain AI': '🚚',
      'Education AI': '🎓',
      'Aerospace & Defense': '✈️',
      'Automotive & Transportation': '🚗',
      'Energy & Utilities': '⚡',
      'Manufacturing & Industry 4.0': '🏭',
      'Healthcare & Life Sciences': '🧬',
      'Retail & E-commerce': '🛍️',
      'Construction & Real Estate': '🏗️',
      'Agriculture & Food': '🌾',
      'Quantum Computing': '⚛️',
      'Neuromorphic Computing': '🧠',
      'DNA Computing': '🧬',
      'Photonic Computing': '💡',
      'Biological Computing': '🦠',
      'Swarm Robotics': '🤖',
      'Brain-Computer Interfaces': '🧠',
      'Synthetic Biology': '🧪'
    };
    return icons[category] || '🚀';
  };

  const getTechnologyBadge = (service: any) => {
    if (service.quantumFeatures) return 'Quantum';
    if (service.blockchainFeatures) return 'Blockchain';
    if (service.edgeComputing) return 'Edge Computing';
    if (service.aiCapabilities) return 'AI/ML';
    if (service.sustainabilityMetrics) return 'Sustainability';
    if (service.technology) return service.technology;
    return 'Innovative';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Innovative
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Micro SAAS Services 2025
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover our cutting-edge collection of 50+ innovative micro SAAS solutions, 
            from quantum AI research platforms to emerging technology services. 
            Each service is designed to transform industries and drive innovation.
          </p>
          
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
                <p><span className="text-blue-400">Address:</span> 364 E Main St STE 1008 Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Search Services</label>
                <input
                  type="text"
                  placeholder="Search by name, description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="name">Name</option>
                  <option value="price">Price</option>
                  <option value="category">Category</option>
                  <option value="rating">Rating</option>
                </select>
              </div>

              {/* View Mode */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">View Mode</label>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-3 py-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-600' : 'bg-white/10'}`}
                  >
                    Grid
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-3 py-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-600' : 'bg-white/10'}`}
                  >
                    List
                  </button>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="text-center">
              <p className="text-gray-300">
                Showing {filteredServices.length} of {allServices.length} services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 overflow-hidden hover:border-blue-400 transition-all duration-300 hover:transform hover:scale-105">
                  {/* Service Header */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-2xl">{getCategoryIcon(service.category)}</div>
                      <span className="px-2 py-1 bg-blue-600 text-xs font-semibold rounded-full">
                        {getTechnologyBadge(service)}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-blue-400">{service.name}</h3>
                    <p className="text-sm text-gray-300 mb-3">{service.tagline}</p>
                    
                    {/* Price */}
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-green-400">{service.price}</span>
                      <span className="text-gray-400">{service.period}</span>
                    </div>

                    {/* Features Preview */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                      <ul className="text-xs text-gray-400 space-y-1">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <span className="text-green-400 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 text-center text-xs">
                      <div>
                        <div className="text-blue-400 font-semibold">{service.rating}</div>
                        <div className="text-gray-400">Rating</div>
                      </div>
                      <div>
                        <div className="text-blue-400 font-semibold">{service.customers}</div>
                        <div className="text-gray-400">Customers</div>
                      </div>
                      <div>
                        <div className="text-blue-400 font-semibold">{service.trialDays}</div>
                        <div className="text-gray-400">Trial Days</div>
                      </div>
                    </div>
                  </div>

                  {/* Service Footer */}
                  <div className="bg-white/5 px-6 py-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">{service.category}</span>
                      <Link
                        to={`/services/${service.id}`}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors duration-200"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-6 hover:border-blue-400 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Service Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="text-3xl">{getCategoryIcon(service.category)}</div>
                        <div>
                          <h3 className="text-xl font-bold text-blue-400 mb-2">{service.name}</h3>
                          <p className="text-gray-300 mb-2">{service.tagline}</p>
                          <p className="text-sm text-gray-400">{service.description}</p>
                        </div>
                      </div>
                      
                      {/* Features */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {service.features.slice(0, 6).map((feature, index) => (
                            <div key={index} className="flex items-center text-xs text-gray-400">
                              <span className="text-green-400 mr-2">✓</span>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Service Details */}
                    <div className="space-y-4">
                      {/* Price */}
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400">{service.price}</div>
                        <div className="text-gray-400">{service.period}</div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 text-center text-sm">
                        <div>
                          <div className="text-blue-400 font-semibold">{service.rating}</div>
                          <div className="text-gray-400">Rating</div>
                        </div>
                        <div>
                          <div className="text-blue-400 font-semibold">{service.customers}</div>
                          <div className="text-gray-400">Customers</div>
                        </div>
                      </div>

                      {/* Technology Badge */}
                      <div className="text-center">
                        <span className="px-3 py-1 bg-blue-600 text-xs font-semibold rounded-full">
                          {getTechnologyBadge(service)}
                        </span>
                      </div>

                      {/* Action Button */}
                      <div className="text-center">
                        <Link
                          to={`/services/${service.id}`}
                          className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors duration-200"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-6 text-blue-100">
              Join thousands of companies already using our innovative micro SAAS services to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2025;
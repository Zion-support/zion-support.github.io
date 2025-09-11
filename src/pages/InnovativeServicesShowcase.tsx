import React, { useState, useMemo } from 'react';
import { INNOVATIVE_SERVICES_2025, getServicesByCategory, getServicesByPriceRange, getTopRatedServices } from '../data/innovativeServices2025';

const InnovativeServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('rating');

  const categories = ['all', 'AI Services', 'IT Services', 'Micro SAAS', 'Business', 'Development'];
  const priceRanges = [
    { label: 'All Prices', value: 'all' },
    { label: 'Under $100', value: '0-100' },
    { label: '$100 - $500', value: '100-500' },
    { label: '$500 - $1000', value: '500-1000' },
    { label: '$1000 - $3000', value: '1000-3000' },
    { label: 'Over $3000', value: '3000+' }
  ];
  const sortOptions = [
    { label: 'Highest Rated', value: 'rating' },
    { label: 'Highest AI Score', value: 'aiScore' },
    { label: 'Lowest Price', value: 'price' },
    { label: 'Newest Launch', value: 'launchDate' }
  ];

  const filteredServices = useMemo(() => {
    let filtered = INNOVATIVE_SERVICES_2025;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Filter by price range
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      if (priceRange === '3000+') {
        filtered = filtered.filter(service => service.price >= 3000);
      } else {
        filtered = filtered.filter(service => service.price >= min && service.price <= max);
      }
    }

    // Sort services
    switch (sortBy) {
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'aiScore':
        filtered.sort((a, b) => b.aiScore - a.aiScore);
        break;
      case 'price':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'launchDate':
        filtered.sort((a, b) => new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime());
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, priceRange, sortBy]);

  const ServiceCard: React.FC<{ service: typeof INNOVATIVE_SERVICES_2025[0] }> = ({ service }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
        <div className="flex items-center space-x-2">
          <span className="text-yellow-500">★</span>
          <span className="text-sm text-gray-600">{service.rating}</span>
          <span className="text-xs text-gray-400">({service.reviews})</span>
        </div>
      </div>
      
      <p className="text-gray-600 mb-4">{service.description}</p>
      
      <div className="flex items-center justify-between mb-4">
        <span className="text-2xl font-bold text-blue-600">{service.marketPrice}</span>
        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
          AI Score: {service.aiScore}
        </span>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          {service.features.slice(0, 4).map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          {service.benefits.slice(0, 3).map((benefit, index) => (
            <li key={index} className="flex items-center">
              <span className="text-blue-500 mr-2">→</span>
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2">Technology Stack:</h4>
        <div className="flex flex-wrap gap-2">
          {service.technology.map((tech, index) => (
            <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <span>Delivery: {service.estimatedDelivery}</span>
          <span>Support: {service.supportLevel}</span>
        </div>
        
        <div className="flex space-x-3">
          <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
            Get Quote
          </button>
          <button className="flex-1 border border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Innovative Services 2025</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Discover Zion Tech Group's cutting-edge AI, IT, and Micro SAAS solutions designed to transform your business and drive innovation.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              View All Services
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>

      {/* Contact Info Banner */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to Get Started?</h3>
              <p className="text-gray-600">Contact our team for personalized solutions and pricing</p>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
              <div className="flex items-center">
                <span className="text-blue-600 mr-2">📞</span>
                <span className="text-gray-700">+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-600 mr-2">✉️</span>
                <span className="text-gray-700">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-600 mr-2">🌐</span>
                <span className="text-gray-700">ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search Services</label>
              <input
                type="text"
                placeholder="Search by name, description, or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {priceRanges.map(range => (
                  <option key={range.value} value={range.value}>{range.label}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredServices.length} of {INNOVATIVE_SERVICES_2025.length} services
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters</p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our innovative services are designed to give you a competitive edge in today's rapidly evolving technology landscape.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule a Consultation
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovativeServicesShowcase;
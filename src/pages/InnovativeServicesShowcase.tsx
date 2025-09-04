import React, { useState, useMemo } from 'react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025, getServicesByCategory, MicroSaasService } from '../data/innovativeMicroSaasServices2025';

const InnovativeServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('innovationLevel');

  const categories = ['All', 'AI Development Tools', 'AI Document Processing', 'Blockchain & Web3', 'Cybersecurity', 'Financial Technology', 'Healthcare Technology', 'Sustainability & ESG'];

  const filteredServices = useMemo(() => {
    let services = getServicesByCategory(selectedCategory);
    
    if (searchTerm) {
      services = services.filter(service => 
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    return services.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'innovationLevel':
          const levels = { 'Revolutionary': 4, 'Cutting-edge': 3, 'Advanced': 2, 'Standard': 1 };
          return (levels[b.innovationLevel as keyof typeof levels] || 0) - (levels[a.innovationLevel as keyof typeof levels] || 0);
        case 'roi':
          return parseFloat(b.roi) - parseFloat(a.roi);
        default:
          return 0;
      }
    });
  }, [selectedCategory, searchTerm, sortBy]);

  const getInnovationBadgeColor = (level: string) => {
    switch (level) {
      case 'Revolutionary': return 'bg-gradient-to-r from-purple-600 to-pink-600';
      case 'Cutting-edge': return 'bg-gradient-to-r from-blue-600 to-cyan-600';
      case 'Advanced': return 'bg-gradient-to-r from-green-600 to-emerald-600';
      default: return 'bg-gradient-to-r from-gray-600 to-gray-700';
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Innovative Micro SAAS Services 2025
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge micro SAAS solutions powered by AI, blockchain, and emerging technologies. 
            Transform your business with our comprehensive suite of innovative services.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Services
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name, description, or tags..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="innovationLevel">Innovation Level</option>
                <option value="price">Price</option>
                <option value="roi">ROI</option>
              </select>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Service Header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${getInnovationBadgeColor(service.innovationLevel)}`}>
                    {service.innovationLevel}
                  </span>
                  <span className="text-2xl font-bold text-blue-600">
                    {formatPrice(service.price)}
                    <span className="text-sm text-gray-500">/month</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
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

                {/* Key Benefits */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ROI and Market Info */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-gray-500">ROI:</span>
                    <span className="font-semibold text-green-600 ml-1">{service.roi}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Delivery:</span>
                    <span className="font-semibold ml-1">{service.estimatedDelivery}</span>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="border-t pt-4">
                  <div className="text-sm text-gray-600 mb-2">
                    <strong>Contact:</strong>
                  </div>
                  <div className="text-sm space-y-1">
                    <div>📞 {service.contactInfo.phone}</div>
                    <div>✉️ {service.contactInfo.email}</div>
                    <div>🌐 <a href={service.contactInfo.website} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                      {service.contactInfo.website}
                    </a></div>
                  </div>
                </div>
              </div>

              {/* Service Footer */}
              <div className="bg-gray-50 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    <div>Market Price: {service.marketPrice}</div>
                    <div>Market Size: {service.marketSize}</div>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">
              No services found matching your criteria.
            </div>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="mt-4 text-blue-600 hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Summary Stats */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Portfolio Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{INNOVATIVE_MICRO_SAAS_SERVICES_2025.length}</div>
              <div className="text-gray-600">Total Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">
                {INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.innovationLevel === 'Revolutionary').length}
              </div>
              <div className="text-gray-600">Revolutionary</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">
                {INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.innovationLevel === 'Cutting-edge').length}
              </div>
              <div className="text-gray-600">Cutting-edge</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">
                {INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.innovationLevel === 'Advanced').length}
              </div>
              <div className="text-gray-600">Advanced</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-6">
            Contact us today to discuss how our innovative micro SAAS services can drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call: +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Email: kleber@ziontechgroup.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovativeServicesShowcase;
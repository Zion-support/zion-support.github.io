import React, { useState, useEffect } from 'react';
import { zion2026InnovativeMicroSAASServices } from '../../data/zion-2026-innovative-micro-saas-services';
import { Zion2026InnovativeMicroSAASService } from '../../data/zion-2026-innovative-micro-saas-services';

const Zion2026InnovativeServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('popular');

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

  const filteredServices = zion2026InnovativeMicroSAASServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.popular ? 1 : -1;
      case 'price-low':
        return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
      case 'price-high':
        return parseFloat(b.price.replace('$', '').replace(',', '')) - parseFloat(a.price.replace('$', '').replace(',', ''));
      case 'rating':
        return b.rating - a.rating;
      case 'customers':
        return b.customers - a.customers;
      default:
        return 0;
    }
  });

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
              2026 Innovative Micro SAAS Services
            </h2>
            <p className="text-xl md:text-2xl text-zion-cyan-light max-w-4xl mx-auto mb-12">
              Revolutionary AI, Quantum Computing, Blockchain, and Emerging Technology Solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{zion2026InnovativeMicroSAASServices.length}</div>
                <div className="text-zion-cyan-light">Innovative Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">$500B+</div>
                <div className="text-zion-cyan-light">Total Addressable Market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">4.8+</div>
                <div className="text-zion-cyan-light">Average Rating</div>
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

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-zion-cyan mb-2">Search Services</label>
              <input
                type="text"
                placeholder="Search by name, description, or features..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 bg-white/20 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-cyan-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-zion-cyan mb-2">Category</label>
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

            {/* Sort By */}
            <div>
              <label className="block text-sm font-medium text-zion-cyan mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 bg-white/20 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                <option value="popular" className="bg-zion-slate-dark text-white">Most Popular</option>
                <option value="price-low" className="bg-zion-slate-dark text-white">Price: Low to High</option>
                <option value="price-high" className="bg-zion-slate-dark text-white">Price: High to Low</option>
                <option value="rating" className="bg-zion-slate-dark text-white">Highest Rating</option>
                <option value="customers" className="bg-zion-slate-dark text-white">Most Customers</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-zion-cyan-light text-lg">
            Showing {filteredServices.length} of {zion2026InnovativeMicroSAASServices.length} services
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-zion-cyan mb-2">No Services Found</h3>
            <p className="text-zion-cyan-light">Try adjusting your search criteria or category filter.</p>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-zion-cyan to-zion-purple py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-cyan-light mb-8">
            Join thousands of businesses already using Zion Tech Group's innovative solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center px-8 py-4 bg-white text-zion-cyan font-bold rounded-lg hover:bg-zion-cyan-light transition-colors duration-200"
            >
              📧 Get Started Today
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

interface ServiceCardProps {
  service: Zion2026InnovativeMicroSAASService;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-zion-cyan/20 hover:border-zion-cyan/40">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="text-4xl mb-4">{service.icon}</div>
        <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
        <p className="text-zion-cyan-light text-sm mb-4">{service.tagline}</p>
        
        {/* Popular Badge */}
        {service.popular && (
          <div className="inline-block bg-gradient-to-r from-zion-cyan to-zion-purple text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
            ⭐ POPULAR
          </div>
        )}

        {/* Price */}
        <div className="text-3xl font-bold text-zion-cyan mb-2">
          {service.price}
          <span className="text-lg text-zion-cyan-light">{service.period}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-zion-cyan-light text-sm mb-6 leading-relaxed">
        {service.description}
      </p>

      {/* Key Features */}
      <div className="mb-6">
        <h4 className="text-zion-cyan font-semibold mb-3">Key Features:</h4>
        <div className="grid grid-cols-1 gap-2">
          {service.features.slice(0, isExpanded ? service.features.length : 5).map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-zion-cyan-light">
              <span className="text-zion-cyan mr-2">✓</span>
              {feature}
            </div>
          ))}
        </div>
        {service.features.length > 5 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-zion-cyan text-sm hover:text-zion-cyan-light transition-colors duration-200 mt-2"
          >
            {isExpanded ? 'Show Less' : `Show ${service.features.length - 5} More`}
          </button>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6 text-center">
        <div>
          <div className="text-lg font-bold text-zion-cyan">{service.rating}</div>
          <div className="text-xs text-zion-cyan-light">Rating</div>
        </div>
        <div>
          <div className="text-lg font-bold text-zion-cyan">{service.customers.toLocaleString()}</div>
          <div className="text-xs text-zion-cyan-light">Customers</div>
        </div>
        <div>
          <div className="text-lg font-bold text-zion-cyan">{service.trialDays}</div>
          <div className="text-xs text-zion-cyan-light">Trial Days</div>
        </div>
      </div>

      {/* Market Info */}
      <div className="mb-6">
        <div className="text-xs text-zion-cyan-light mb-2">
          <strong>Market Size:</strong> {service.marketSize}
        </div>
        <div className="text-xs text-zion-cyan-light mb-2">
          <strong>Growth Rate:</strong> {service.growthRate}
        </div>
        <div className="text-xs text-zion-cyan-light">
          <strong>Setup Time:</strong> {service.setupTime}
        </div>
      </div>

      {/* ROI */}
      <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-lg p-4 mb-6">
        <div className="text-sm text-zion-cyan font-semibold mb-1">Expected ROI</div>
        <div className="text-xs text-zion-cyan-light">{service.roi}</div>
      </div>

      {/* Actions */}
      <div className="space-y-3">
        <a
          href={service.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-bold py-3 px-4 rounded-lg hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-200"
        >
          Learn More
        </a>
        <a
          href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`}
          className="block w-full text-center border border-zion-cyan text-zion-cyan font-bold py-3 px-4 rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-200"
        >
          Get Quote
        </a>
      </div>

      {/* Category Badge */}
      <div className="mt-4 text-center">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
          {service.category}
        </span>
      </div>
    </div>
  );
};

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

export default Zion2026InnovativeServicesShowcase;
import React, { useState } from 'react';
import { ULTIMATE_MICRO_SAAS_SERVICES_2025 } from '../data/ultimateMicroSaasServices2025';
import { INNOVATIVE_ENTERPRISE_SOLUTIONS_2025 } from '../data/innovativeEnterpriseSolutions2025';
import { EMERGING_TECHNOLOGY_SOLUTIONS_2025 } from '../data/emergingTechnologySolutions2025';
const UltimateServicesShowcase2025 = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedPriceRange, setSelectedPriceRange] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('name');
    // Combine all services
    const allServices = [
        ...ULTIMATE_MICRO_SAAS_SERVICES_2025,
        ...INNOVATIVE_ENTERPRISE_SOLUTIONS_2025,
        ...EMERGING_TECHNOLOGY_SOLUTIONS_2025
    ];
    // Get unique categories
    const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];
    // Filter and sort services
    const filteredServices = allServices
        .filter(service => {
        const categoryMatch = selectedCategory === 'all' || service.category === selectedCategory;
        const priceMatch = selectedPriceRange === 'all' ||
            (selectedPriceRange === 'low' && service.price < 5000) ||
            (selectedPriceRange === 'medium' && service.price >= 5000 && service.price < 15000) ||
            (selectedPriceRange === 'high' && service.price >= 15000);
        const searchMatch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        return categoryMatch && priceMatch && searchMatch;
    })
        .sort((a, b) => {
        switch (sortBy) {
            case 'price':
                return a.price - b.price;
            case 'name':
                return a.title.localeCompare(b.title);
            case 'category':
                return a.category.localeCompare(b.category);
            default:
                return 0;
        }
    });
    const formatPrice = (price) => {
        if (price >= 1000) {
            return `$${(price / 1000).toFixed(1)}K`;
        }
        return `$${price}`;
    };
    const getSupportLevelColor = (level) => {
        switch (level) {
            case 'enterprise':
                return 'bg-purple-600';
            case 'premium':
                return 'bg-blue-600';
            default:
                return 'bg-green-600';
        }
    };
    return (<div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Ultimate Services Showcase 2025
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Discover our comprehensive portfolio of innovative micro SAAS services, IT solutions, and AI-powered platforms. 
            Transform your business with cutting-edge technology solutions designed for the future.
          </p>
        </div>
        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-6 mb-8 border border-blue-500/30">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Contact Zion Tech Group</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-lg font-semibold text-blue-300 mb-2">Phone</h3>
                <p className="text-lg">+1 302 464 0950</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-300 mb-2">Email</h3>
                <p className="text-lg">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-300 mb-2">Address</h3>
                <p className="text-lg">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div className="mt-4">
              <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                Visit Our Website
              </a>
            </div>
          </div>
        </div>
        {/* Filters and Search */}
        <div className="bg-gray-800/50 rounded-xl p-6 mb-8 border border-gray-600/30">
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
              <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                {categories.map(category => (<option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
              <select value={selectedPriceRange} onChange={(e) => setSelectedPriceRange(e.target.value)} className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="all">All Prices</option>
                <option value="low">Under $5K/month</option>
                <option value="medium">$5K - $15K/month</option>
                <option value="high">Over $15K/month</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="category">Category</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Search</label>
              <input type="text" placeholder="Search services..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
          </div>
        </div>
        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredServices.map((service) => (<div key={service.id} className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-6 border border-gray-600/30 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
              {/* Service Header */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getSupportLevelColor(service.supportLevel)}`}>
                    {service.supportLevel}
                  </span>
                  <span className="text-2xl font-bold text-cyan-400">
                    {formatPrice(service.price)}
                    <span className="text-sm text-gray-400">/{service.pricingModel}</span>
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {service.tags.slice(0, 3).map((tag, index) => (<span key={index} className="px-2 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-full border border-blue-700/50">
                      {tag}
                    </span>))}
                </div>
              </div>
              {/* Key Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-blue-300 mb-2">Key Features</h4>
                <ul className="text-xs text-gray-300 space-y-1">
                  {service.features.slice(0, 3).map((feature, index) => (<li key={index} className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      {feature}
                    </li>))}
                </ul>
              </div>
              {/* Benefits */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-green-300 mb-2">Key Benefits</h4>
                <ul className="text-xs text-gray-300 space-y-1">
                  {service.benefits.slice(0, 2).map((benefit, index) => (<li key={index} className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      {benefit}
                    </li>))}
                </ul>
              </div>
              {/* ROI */}
              {service.roi && (<div className="mb-4">
                  <h4 className="text-sm font-semibold text-yellow-300 mb-2">ROI</h4>
                  <div className="text-xs text-gray-300">
                    <span className="text-yellow-400 mr-2">📈</span>
                    {service.roi}
                  </div>
                </div>)}
              {/* Technology */}
              {service.technology && (<div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple-300 mb-2">Technology</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.technology.slice(0, 4).map((tech, index) => (<span key={index} className="px-2 py-1 bg-purple-900/30 text-purple-300 text-xs rounded border border-purple-700/50">
                        {tech}
                      </span>))}
                  </div>
                </div>)}
              {/* Market Price Comparison */}
              <div className="mb-4 p-3 bg-gray-700/50 rounded-lg">
                <h4 className="text-sm font-semibold text-orange-300 mb-1">Market Price</h4>
                <p className="text-xs text-gray-300">{service.marketPrice}</p>
                <p className="text-xs text-cyan-400 mt-1">Our Price: {formatPrice(service.price)}/{service.pricingModel}</p>
              </div>
              {/* Contact and Action */}
              <div className="border-t border-gray-600/30 pt-4">
                <div className="text-center mb-3">
                  <p className="text-xs text-gray-400 mb-2">Ready to get started?</p>
                  <div className="flex flex-col space-y-2">
                    <a href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`} className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                      Contact Us
                    </a>
                    <a href={`tel:${service.contactInfo.phone}`} className="bg-gray-700 hover:bg-gray-600 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-all duration-300">
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>))}
        </div>
        {/* Summary Statistics */}
        <div className="mt-16 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-8 border border-blue-500/30">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Services Portfolio Summary</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">{allServices.length}</div>
                <div className="text-gray-300">Total Services</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">
                  ${(allServices.reduce((sum, service) => sum + service.price, 0) / 1000).toFixed(0)}K
                </div>
                <div className="text-gray-300">Total Portfolio Value</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  {Array.from(new Set(allServices.map(service => service.category))).length}
                </div>
                <div className="text-gray-300">Technology Categories</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-400 mb-2">
                  {Array.from(new Set(allServices.map(service => service.industryFocus || []).flat())).length}
                </div>
                <div className="text-gray-300">Industry Focus</div>
              </div>
            </div>
          </div>
        </div>
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 rounded-2xl p-8 border border-cyan-500/30">
            <h2 className="text-3xl font-bold mb-4 text-cyan-400">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
              Our team of experts is ready to help you implement these cutting-edge solutions. 
              Get in touch today to discuss how we can accelerate your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:kleber@ziontechgroup.com?subject=Business Transformation Consultation" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </a>
              <a href="tel:+13024640950" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>);
};
export default UltimateServicesShowcase2025;

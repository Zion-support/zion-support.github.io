// Removed unused: import React, { useState } from 'react';
import { SEO } from "@/components/SEO";
import { Link } from 'react-router-dom';
import { Rocket, CheckCircle, ArrowRight, Phone, Mail, MapPin, ExternalLink, Search } from 'lucide-react';
import { ULTIMATE_REAL_SERVICES_2025, ULTIMATE_SERVICE_CATEGORIES_2025, ULTIMATE_PRICING_TIERS_2025, ULTIMATE_CONTACT_INFO_2025, ULTIMATE_SERVICE_GUARANTEES_2025 } from '@/data/ultimateRealServices2025';
export default function UltimateServicesShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['all', ...Object.keys(ULTIMATE_SERVICE_CATEGORIES_2025)];

  const filteredServices = ULTIMATE_REAL_SERVICES_2025.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

// Removed unused:   const getCategoryIcon = (category: string) => {
    if (category === 'all') return <Rocket className="w-6 h-6" />;
    return ULTIMATE_SERVICE_CATEGORIES_2025[category]?.icon ? 
      <span className="text-2xl">{ULTIMATE_SERVICE_CATEGORIES_2025[category].icon}</span> : 
      <Rocket className="w-6 h-6" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Ultimate Innovative Services 2025 | Zion Tech Group"
        description="Discover our revolutionary AI-powered, quantum-secure, and autonomous business solutions. Transform your business with cutting-edge technology."
        keywords="AI services, quantum computing, autonomous systems, cybersecurity, business automation, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
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
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-400">{service.category}</p>
                  </div>
                </div>
                {service?.featured && (
                  <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold rounded-full">
                    Featured
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

              {/* Pricing and ROI */}
              <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-white">${service.price.toLocaleString()}</span>
                  <span className="text-gray-400">One-time</span>
                </div>
                <p className="text-sm text-gray-300 mb-2">
                  <strong>Market Price:</strong> {service?.marketPrice}
                </p>
                <p className="text-sm text-gray-300 mb-2">
                  <strong>ROI:</strong> {service?.roi}
                </p>
                <p className="text-xs text-gray-400">
                  <strong>Setup Time:</strong> {service?.setupTime}
                </p>
              </div>

              {/* Integrations */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Integrations</h4>
                <div className="flex flex-wrap gap-2">
                  {service?.integrations.slice(0, 4).map((integration, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-md border border-green-400/30"
                    >
                      {integration}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
                <h4 className="text-white font-semibold mb-3">Contact Information</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-blue-400" />
                    <span>{service?.contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <span>{service?.contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span className="text-xs">{service?.contactInfo.address}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to={`/services/${service.id}`}
                  className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href={service?.contactInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-3 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Contact Information */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="text-center">
                  <p className="text-sm text-gray-400 mb-2">Ready to get started?</p>
                  <div className="flex flex-col sm:flex-row gap-2 text-sm">
                    <a
                      href="tel:+13024640950"
                      className="inline-flex items-center justify-center px-3 py-2 bg-green-600/20 text-green-300 rounded-md border border-green-400/30 hover:bg-green-600/30 transition-colors"
                    >
                      <Phone className="w-3 h-3 mr-1" />
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

      {/* Comprehensive Footer */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 border-t border-blue-400/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Comp Info */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">Zion Tech Group</h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Leading provider of innovative AI, cybersecurity, and digital transformation solutions. 
                We help businesses thrive in the digital age with cutting-edge technology and expert guidance.
              </p>
              <div className="flex space-x-4">
                <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span>{ULTIMATE_CONTACT_INFO_2025.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>{ULTIMATE_CONTACT_INFO_2025.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="text-xs">{ULTIMATE_CONTACT_INFO_2025.address}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2025 Zion Tech Group. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Search icon component
const Search = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);
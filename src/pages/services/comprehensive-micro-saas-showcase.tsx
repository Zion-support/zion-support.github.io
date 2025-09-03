import { Search, Filter, Star, ExternalLink, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { REAL_MICRO_SAAS_SERVICES_2025, SERVICE_CATEGORIES, ZION_CONTACT_INFO } from '../../data/realMicroSaasServices2025';


export default function ComprehensiveMicroSaasShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredServices = REAL_MICRO_SAAS_SERVICES_2025.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Comprehensive Micro SAAS Services
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Discover our complete suite of 15+ innovative AI and IT micro SAAS solutions designed to transform your business.
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark/50 border border-zion-slate rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-3 bg-zion-slate-dark/50 border border-zion-slate rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="All">All Categories</option>
                  {SERVICE_CATEGORIES.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-lg p-6 border border-zion-slate hover:border-indigo-500 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-zion-slate-light text-sm mb-3">{service.description}</p>
                  </div>
                  {service.featured && (
                    <span className="bg-indigo-600 text-white px-2 py-1 rounded-full text-xs font-semibold ml-2">
                      Featured
                    </span>
                  )}
                </div>

                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-zion-slate-light text-sm ml-2">
                    {service.rating} ({service.reviewCount} reviews)
                  </span>
                </div>

                <div className="mb-4">
                  <div className="text-2xl font-bold text-indigo-400 mb-1">
                    {service.currency}{service.price}/{service.pricingModel}
                  </div>
                  <div className="text-zion-slate-light text-sm">
                    Market Price: {service.marketPrice}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-zion-slate-light mb-2">Key Features:</div>
                  <ul className="text-sm text-zion-slate-light space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-indigo-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {service.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-zion-slate text-zion-slate-light px-2 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link
                    href={service.website}
                    className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors text-center text-sm font-semibold"
                  >
                    Learn More
                  </Link>
                  <Link
                    href="/contact"
                    className="flex-1 border border-indigo-600 text-indigo-400 py-2 px-4 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors text-center text-sm font-semibold"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/30">
        <div className="max-w-7xl mx-auto">
          <div className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-lg p-8 border border-zion-slate">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
                Contact our experts to discuss which services are right for your business needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Phone className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-zion-slate-light">{ZION_CONTACT_INFO.phone}</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-zion-slate-light">{ZION_CONTACT_INFO.email}</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-zion-slate-light">{ZION_CONTACT_INFO.address}</p>
              </div>
            </div>
            <div className="text-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-lg font-semibold"
              >
                Contact Us Now <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
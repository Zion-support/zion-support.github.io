import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';
import { SPECIALIZED_IT_SERVICES_2025 } from '../data/specializedITServices2025';
import { Link } from 'react-router-dom';

function InnovativeServicesShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);

  const allServices = [...INNOVATIVE_MICRO_SAAS_SERVICES_2025, ...SPECIALIZED_IT_SERVICES_2025];
  
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];
  
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (service.tags && service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
    const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const getInnovationBadge = (level: string) => {
    const colors = {
      'Revolutionary': 'bg-gradient-to-r from-purple-600 to-pink-600',
      'Breakthrough': 'bg-gradient-to-r from-blue-600 to-cyan-600',
      'Advanced': 'bg-gradient-to-r from-green-600 to-emerald-600'
    };
    return colors[level as keyof typeof colors] || 'bg-gray-600';
  };

  const getMarketTrendBadge = (trend: string) => {
    const colors = {
      'Exponential Growth': 'bg-gradient-to-r from-red-600 to-orange-600',
      'High Growth': 'bg-gradient-to-r from-green-600 to-blue-600',
      'Emerging Market': 'bg-gradient-to-r from-purple-600 to-indigo-600'
    };
    return colors[trend as keyof typeof colors] || 'bg-gray-600';
  };

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-quantum-gradient opacity-20 animate-pulse"></div>
      <div className="absolute inset-0 bg-quantum-mesh"></div>
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-zion-cyan text-xs animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-holographic-gradient bg-clip-text text-transparent animate-holographic-shift">
            Innovative Services 2025
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Discover our cutting-edge micro SAAS solutions, IT services, and AI-powered platforms designed to transform your business and drive innovation in the digital age
          </p>
          
          {/* Contact Information */}
          <div className="bg-zion-blue-light/20 backdrop-blur-sm rounded-lg p-6 mb-8 border border-zion-cyan/30">
            <h3 className="text-2xl font-bold text-zion-cyan mb-4">Ready to Transform Your Business?</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-zion-slate-light">📞 Phone:</span>
                <a href="tel:+13024640950" className="text-white hover:text-zion-cyan ml-2">+1 302 464 0950</a>
              </div>
              <div>
                <span className="text-zion-slate-light">✉️ Email:</span>
                <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-zion-cyan ml-2">kleber@ziontechgroup.com</a>
              </div>
              <div>
                <span className="text-zion-slate-light">🌐 Website:</span>
                <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-zion-cyan ml-2">ziontechgroup.com</a>
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="grid md:grid-cols-3 gap-4">
              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 backdrop-blur-sm"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-cyan">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 backdrop-blur-sm"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-zion-blue-dark text-white">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>

              {/* Price Range Filter */}
              <div className="flex items-center space-x-2">
                <input
                  type="range"
                  min="0"
                  max="5000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="flex-1"
                />
                <span className="text-sm text-zion-slate-light whitespace-nowrap">
                  ${priceRange[0]} - ${priceRange[1]}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-zion-blue-light/10 backdrop-blur-sm rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group"
            >
              {/* Service Header */}
              <div className="p-6 border-b border-zion-cyan/20">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h3>
                  <div className="flex flex-col items-end space-y-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getInnovationBadge(service.innovationLevel || 'Advanced')}`}>
                      {service.innovationLevel || 'Advanced'}
                    </span>
                    {service.marketTrend && (
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getMarketTrendBadge(service.marketTrend)}`}>
                        {service.marketTrend}
                      </span>
                    )}
                  </div>
                </div>
                
                <p className="text-zion-slate-light text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Pricing */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-zion-cyan">
                    ${service.price.toLocaleString()}
                    <span className="text-sm text-zion-slate-light font-normal">/{service.pricingModel}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-zion-slate-light">Market Price</div>
                    <div className="text-sm text-white">{service.marketPrice}</div>
                  </div>
                </div>
              </div>

              {/* Service Details */}
              <div className="p-6 space-y-4">
                {/* Features */}
                <div>
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features</h4>
                  <div className="grid grid-cols-1 gap-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center text-xs text-zion-slate-light">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-xs text-zion-cyan mt-1">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2">Benefits</h4>
                  <div className="grid grid-cols-1 gap-1">
                    {service.benefits.slice(0, 3).map((benefit, index) => (
                      <div key={index} className="flex items-center text-xs text-zion-slate-light">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* ROI */}
                {service.roi && (
                  <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-3">
                    <div className="text-sm font-semibold text-green-400">Expected ROI</div>
                    <div className="text-lg font-bold text-green-300">{service.roi}</div>
                  </div>
                )}

                {/* Technology Stack */}
                {service.technology && (
                  <div>
                    <h4 className="text-sm font-semibold text-zion-cyan mb-2">Technology Stack</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.technology.slice(0, 4).map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-zion-blue-light/20 rounded text-xs text-zion-slate-light">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Contact Button */}
                <div className="pt-4">
                  <a
                    href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                    className="w-full bg-gradient-to-r from-zion-cyan to-blue-600 hover:from-blue-600 hover:to-zion-cyan text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Get Quote
                  </a>
                </div>

                {/* Additional Contact Info */}
                <div className="text-center text-xs text-zion-slate-light space-y-1">
                  <div>📞 {service.contactInfo.phone}</div>
                  <div>✉️ {service.contactInfo.email}</div>
                  <div>🌐 <a href={service.contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-zion-cyan">Visit Website</a></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-zion-cyan/30">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Our innovative services are designed to give you a competitive edge in the digital landscape. 
              Contact us today to discuss how we can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-zion-cyan hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                📞 Call Now: +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-transparent border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                ✉️ Send Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default InnovativeServicesShowcase2025;
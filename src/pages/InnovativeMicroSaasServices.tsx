import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { INNOVATIVE_MICRO_SAAS_SERVICES, INNOVATIVE_SERVICE_CATEGORIES } from '../data/innovativeMicroSaasServices';

export function InnovativeMicroSaasServices() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);

  const allServices = [...INNOVATIVE_MICRO_SAAS_SERVICES];
  
  const categories = ['all', ...INNOVATIVE_SERVICE_CATEGORIES];
  
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

  const maxPrice = Math.max(...allServices.map(s => s.price));
  const minPrice = Math.min(...allServices.map(s => s.price));

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
            Innovative Micro SAAS Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Discover our cutting-edge collection of AI-powered, quantum-ready, and blockchain-enabled micro SAAS solutions designed to transform your business operations
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search innovative services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 backdrop-blur-sm"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zion-cyan">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-zion-cyan text-zion-blue-dark shadow-lg shadow-zion-cyan/25'
                    : 'bg-zion-blue-light/20 text-zion-slate-light hover:bg-zion-blue-light/30 hover:text-white border border-zion-cyan/30'
                }`}
              >
                {category === 'all' ? 'All Services' : category}
              </button>
            ))}
          </div>

          {/* Price Range Filter */}
          <div className="max-w-md mx-auto mb-8">
            <label className="block text-zion-slate-light text-sm font-medium mb-2">
              Price Range: ${priceRange[0]} - ${priceRange[1]}
            </label>
            <div className="flex gap-4 items-center">
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                value={priceRange[0]}
                onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                className="flex-1 h-2 bg-zion-blue-light/20 rounded-lg appearance-none cursor-pointer slider"
              />
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="flex-1 h-2 bg-zion-blue-light/20 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group bg-zion-blue-light/10 backdrop-blur-md border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 hover:bg-zion-blue-light/20 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group-hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              {/* Service Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mb-6 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">
                  {service.category.includes('AI') ? '🤖' : 
                   service.category.includes('Cybersecurity') ? '🔒' :
                   service.category.includes('Quantum') ? '⚛️' :
                   service.category.includes('Blockchain') ? '🔗' :
                   service.category.includes('IoT') ? '📡' :
                   service.category.includes('Cloud') ? '☁️' :
                   service.category.includes('Data') ? '📊' :
                   service.category.includes('Healthcare') ? '🏥' :
                   service.category.includes('Financial') ? '💰' :
                   service.category.includes('Education') ? '🎓' :
                   service.category.includes('Legal') ? '⚖️' :
                   service.category.includes('Real Estate') ? '🏠' :
                   service.category.includes('Manufacturing') ? '🏭' :
                   service.category.includes('Energy') ? '⚡' : '🚀'}
                </span>
              </div>
              
              {/* Service Content */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-zion-slate-light leading-relaxed mb-4">
                  {service.description}
                </p>
                
                {/* Tags */}
                {service.tags && service.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full border border-zion-cyan/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-white">
                    ${service.price.toLocaleString()}
                  </span>
                  <span className="text-zion-slate-light text-sm">
                    {service.pricingModel}
                  </span>
                </div>

                {/* Category */}
                <div className="text-zion-cyan text-sm font-medium mb-4">
                  {service.category}
                </div>
              </div>
              
              {/* CTA Button */}
              <button
                className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-105"
              >
                Learn More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Service Count */}
        <div className="text-center mb-16">
          <p className="text-zion-slate-light text-lg">
            Showing {filteredServices.length} of {allServices.length} innovative services
          </p>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-md">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let's discuss how our innovative technology solutions can accelerate your growth and 
              give you a competitive edge in the market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center group hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-xl text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center group hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Sales Team
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer Section */}
        <div className="bg-zion-slate-dark py-12 border-t border-zion-blue-light mt-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
                <p className="text-zion-slate-light mb-4">
                  Pioneering the future of technology with revolutionary AI consciousness, 
                  quantum computing, and autonomous solutions that transform businesses worldwide.
                </p>
                <div className="flex items-center gap-4 text-zion-slate-light">
                  <a href="https://ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                    ziontechgroup.com
                  </a>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                <div className="space-y-2 text-zion-slate-light">
                  <p>📱 +1 302 464 0950</p>
                  <p>✉️ kleber@ziontechgroup.com</p>
                  <p>📍 364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
                <div className="space-y-2">
                  <a href="/services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    All Services
                  </a>
                  <a href="/ai-solutions" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    AI Solutions
                  </a>
                  <a href="/quantum-technology" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Quantum Technology
                  </a>
                  <a href="/blockchain-solutions" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Blockchain Solutions
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-zion-blue-light mt-8 pt-8 text-center">
              <p className="text-zion-slate-light text-sm">
                © 2024 Zion Tech Group. All rights reserved. | 
                <a href="/privacy" className="ml-2 hover:text-zion-cyan transition-colors">Privacy Policy</a> | 
                <a href="/terms" className="ml-2 hover:text-zion-cyan transition-colors">Terms of Service</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-zion-blue-dark border border-zion-cyan/30 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold text-white">{selectedService.title}</h2>
              <button
                onClick={() => setSelectedService(null)}
                className="text-zion-slate-light hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-zion-cyan mb-3">Description</h3>
                <p className="text-zion-slate-light">{selectedService.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-zion-cyan mb-3">Features</h3>
                  <ul className="space-y-2">
                    {selectedService.features.map((feature: string, index: number) => (
                      <li key={index} className="text-zion-slate-light flex items-center gap-2">
                        <span className="text-zion-cyan">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-zion-cyan mb-3">Benefits</h3>
                  <ul className="space-y-2">
                    {selectedService.benefits.map((benefit: string, index: number) => (
                      <li key={index} className="text-zion-slate-light flex items-center gap-2">
                        <span className="text-zion-cyan">→</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-zion-cyan mb-2">Pricing</h3>
                  <p className="text-2xl font-bold text-white">${selectedService.price.toLocaleString()}</p>
                  <p className="text-zion-slate-light text-sm">{selectedService.pricingModel}</p>
                  <p className="text-zion-slate-light text-sm mt-1">Market: {selectedService.marketPrice}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-zion-cyan mb-2">Delivery</h3>
                  <p className="text-white">{selectedService.estimatedDelivery}</p>
                  <p className="text-zion-slate-light text-sm mt-1">Support: {selectedService.supportLevel}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-zion-cyan mb-2">Category</h3>
                  <p className="text-white">{selectedService.category}</p>
                  <p className="text-zion-slate-light text-sm mt-1">{selectedService.subcategory}</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-zion-cyan mb-3">Use Cases</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedService.useCases.map((useCase: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-zion-cyan/10 text-zion-cyan text-sm rounded-full border border-zion-cyan/20"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <a
                  href={selectedService.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 px-6 rounded-lg font-semibold text-center hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Visit Website
                </a>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${selectedService.title}`}
                  className="flex-1 border-2 border-zion-cyan text-zion-cyan py-3 px-6 rounded-lg font-semibold text-center hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InnovativeMicroSaasServices;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { INNOVATIVE_SERVICES_2025 } from '../data/innovativeNewServices2025';
import { SPECIALIZED_IT_SERVICES_2025 } from '../data/specializedITServices2025';
import { Link } from 'react-router-dom';

export function InnovativeServicesShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedService, setSelectedService] = useState<any>(null);

  const allServices = [...INNOVATIVE_SERVICES_2025, ...SPECIALIZED_IT_SERVICES_2025];
  
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];
  
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (service.tags && service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
    return matchesCategory && matchesSearch;
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

  const openServiceModal = (service: any) => {
    setSelectedService(service);
  };

  const closeServiceModal = () => {
    setSelectedService(null);
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
            2025 Innovative Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Discover our cutting-edge micro SAAS services, IT solutions, and AI-powered platforms designed to transform your business in 2025 and beyond
          </p>
          
          {/* Contact Information */}
          <div className="bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg p-6 mb-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-zion-cyan mb-4">Ready to Transform Your Business?</h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-zion-slate-light">Phone</p>
                <p className="text-white font-semibold">+1 302 464 0950</p>
              </div>
              <div>
                <p className="text-zion-slate-light">Email</p>
                <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <p className="text-zion-slate-light">Website</p>
                <a href="https://ziontechgroup.com" className="text-zion-cyan hover:text-white transition-colors">
                  ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
          
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
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-zion-cyan text-black shadow-lg shadow-zion-cyan/50'
                    : 'bg-zion-blue-light/20 text-zion-slate-light hover:bg-zion-blue-light/30 hover:text-white border border-zion-cyan/30'
                }`}
              >
                {category === 'all' ? 'All Services' : category}
              </button>
            ))}
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
              className="group relative"
            >
              <div className="bg-zion-blue-light/10 border border-zion-cyan/20 rounded-xl p-6 h-full hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                   onClick={() => openServiceModal(service)}>
                
                {/* Service Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light text-sm mb-3">
                    {service.category} • {service.subcategory}
                  </p>
                </div>

                {/* Description */}
                <p className="text-zion-slate-light mb-4 line-clamp-3">
                  {service.description}
                </p>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-zion-cyan">
                      ${service.price.toLocaleString()}
                    </span>
                    <span className="text-zion-slate-light text-sm">
                      /{service.pricingModel}
                    </span>
                  </div>
                  <p className="text-zion-slate-light text-sm">
                    Market: {service.marketPrice}
                  </p>
                </div>

                {/* ROI */}
                <div className="mb-4 p-3 bg-zion-cyan/10 border border-zion-cyan/20 rounded-lg">
                  <p className="text-zion-cyan font-semibold text-sm">
                    Expected ROI: {service.roi}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-zion-blue-light/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30"
                    >
                      {tag}
                    </span>
                  ))}
                  {service.tags.length > 3 && (
                    <span className="px-2 py-1 bg-zion-blue-light/20 text-zion-slate-light text-xs rounded-full">
                      +{service.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* CTA Button */}
                <button className="w-full bg-zion-cyan text-black font-semibold py-3 px-4 rounded-lg hover:bg-zion-cyan/80 transition-colors">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-zion-slate-light text-xl">
              No services found matching your criteria. Try adjusting your search or category filter.
            </p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-sm">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Lead the Future?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Our innovative 2025 services are designed to give you a competitive edge in the rapidly evolving technology landscape. 
              Contact us today to discuss how we can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-zion-cyan text-black font-bold py-4 px-8 rounded-lg hover:bg-zion-cyan/80 transition-colors text-lg"
              >
                Call Now: +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-transparent border-2 border-zion-cyan text-zion-cyan font-bold py-4 px-8 rounded-lg hover:bg-zion-cyan hover:text-black transition-colors text-lg"
              >
                Email Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-zion-blue-dark border border-zion-cyan/30 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold text-white">{selectedService.title}</h2>
              <button
                onClick={closeServiceModal}
                className="text-zion-slate-light hover:text-white text-2xl"
              >
                ×
              </button>
            </div>

            <div className="space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-xl font-semibold text-zion-cyan mb-2">Description</h3>
                <p className="text-zion-slate-light">{selectedService.description}</p>
              </div>

              {/* Pricing */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-zion-cyan mb-2">Pricing</h3>
                  <div className="bg-zion-blue-light/20 p-4 rounded-lg">
                    <p className="text-3xl font-bold text-zion-cyan">${selectedService.price.toLocaleString()}</p>
                    <p className="text-zion-slate-light">per {selectedService.pricingModel}</p>
                    <p className="text-zion-slate-light text-sm">Market: {selectedService.marketPrice}</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-zion-cyan mb-2">ROI</h3>
                  <div className="bg-zion-cyan/10 p-4 rounded-lg border border-zion-cyan/20">
                    <p className="text-white font-semibold">{selectedService.roi}</p>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xl font-semibold text-zion-cyan mb-2">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-2">
                  {selectedService.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                      <span className="text-zion-slate-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-xl font-semibold text-zion-cyan mb-2">Benefits</h3>
                <div className="grid md:grid-cols-2 gap-2">
                  {selectedService.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                      <span className="text-zion-slate-light">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology & Integrations */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-zion-cyan mb-2">Technology Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.technology.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-zion-blue-light/20 text-zion-cyan text-sm rounded-full border border-zion-cyan/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-zion-cyan mb-2">Integrations</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.integrations.map((integration, index) => (
                      <span key={index} className="px-3 py-1 bg-zion-blue-light/20 text-zion-cyan text-sm rounded-full border border-zion-cyan/30">
                        {integration}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-zion-blue-light/20 p-6 rounded-lg border border-zion-cyan/30">
                <h3 className="text-xl font-semibold text-zion-cyan mb-4">Get Started Today</h3>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-zion-slate-light">Phone</p>
                    <a href={`tel:${selectedService.contactInfo.phone}`} className="text-zion-cyan hover:text-white transition-colors">
                      {selectedService.contactInfo.phone}
                    </a>
                  </div>
                  <div>
                    <p className="text-zion-slate-light">Email</p>
                    <a href={`mailto:${selectedService.contactInfo.email}`} className="text-zion-cyan hover:text-white transition-colors">
                      {selectedService.contactInfo.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-zion-slate-light">Website</p>
                    <a href={selectedService.contactInfo.website} className="text-zion-cyan hover:text-white transition-colors">
                      {selectedService.contactInfo.website.replace('https://', '')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InnovativeServicesShowcase2025;
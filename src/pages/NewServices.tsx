import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';
import { ADVANCED_INNOVATIVE_SERVICES } from '../data/advancedInnovativeServices';
import { EMERGING_TECH_SERVICES } from '../data/emergingTechServices';

export function NewServices() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedService, setSelectedService] = useState<any>(null);

  // Combine all services
  const allServices = [
    ...COMPREHENSIVE_SERVICES,
    ...ADVANCED_INNOVATIVE_SERVICES,
    ...EMERGING_TECH_SERVICES
  ];
  
  // Get unique categories
  const categories = ['all', ...Array.from(new Set(allServices.map(s => s.category)))];
  
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (('tags' in service && service.tags) ? service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) : false);
    return matchesCategory && matchesSearch;
  });

  // Helper function to safely access service properties
  const getServiceProperty = (service: any, property: string, defaultValue: string = 'N/A') => {
    return service && property in service ? service[property] : defaultValue;
  };

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
            Revolutionary Tech Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Experience the future of technology with our cutting-edge AI, quantum, and blockchain solutions. 
            Transform your business with services that were once science fiction.
          </p>
          
          {/* Service Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-zion-blue-light/20 backdrop-blur-sm rounded-lg p-6 border border-zion-cyan/30">
              <div className="text-3xl font-bold text-zion-cyan mb-2">{allServices.length}+</div>
              <div className="text-zion-slate-light">Innovative Services</div>
            </div>
            <div className="bg-zion-blue-light/20 backdrop-blur-sm rounded-lg p-6 border border-zion-cyan/30">
              <div className="text-3xl font-bold text-zion-cyan mb-2">{categories.length - 1}</div>
              <div className="text-zion-slate-light">Technology Categories</div>
            </div>
            <div className="bg-zion-blue-light/20 backdrop-blur-sm rounded-lg p-6 border border-zion-cyan/30">
              <div className="text-3xl font-bold text-zion-cyan mb-2">24/7</div>
              <div className="text-zion-slate-light">Expert Support</div>
            </div>
            <div className="bg-zion-blue-light/20 backdrop-blur-sm rounded-lg p-6 border border-zion-cyan/30">
              <div className="text-3xl font-bold text-zion-cyan mb-2">100%</div>
              <div className="text-zion-slate-light">Client Satisfaction</div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-zion-blue-light/20 backdrop-blur-sm rounded-lg p-6 mb-8 border border-zion-cyan/30">
            <h3 className="text-2xl font-bold text-zion-cyan mb-4">Ready to Transform Your Business?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-zion-cyan text-2xl mb-2">📱</div>
                <p className="font-semibold">Mobile</p>
                <p className="text-zion-slate-light">+1 302 464 0950</p>
              </div>
              <div>
                <div className="text-zion-cyan text-2xl mb-2">✉️</div>
                <p className="font-semibold">Email</p>
                <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <div className="text-zion-cyan text-2xl mb-2">🌐</div>
                <p className="font-semibold">Website</p>
                <p className="text-zion-slate-light">ziontechgroup.com</p>
              </div>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search revolutionary services..."
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
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-zion-cyan text-zion-blue-dark shadow-lg shadow-zion-cyan/30'
                    : 'bg-zion-blue-light/20 text-zion-slate-light hover:bg-zion-blue-light/30 border border-zion-cyan/30'
                }`}
              >
                {category === 'all' ? 'All Services' : category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-zion-cyan">
            Featured Revolutionary Services
          </h2>
          
          {/* Featured Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.slice(0, 6).map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-zion-blue-light/10 backdrop-blur-sm rounded-xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                {/* Service Header */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs px-2 py-1 bg-zion-cyan/20 text-zion-cyan rounded-full">
                      {service.category}
                    </span>
                    <span className="text-zion-cyan font-bold text-lg">
                      ${service.price.toLocaleString()}
                      <span className="text-sm text-zion-slate-light">/month</span>
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-zion-cyan font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-zion-slate-light text-sm flex items-center">
                        <span className="text-zion-cyan mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-zion-slate-light text-sm text-center">
                        +{service.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-zion-cyan font-semibold mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="text-zion-slate-light text-sm flex items-center">
                        <span className="text-zion-cyan mr-2">→</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Service Footer */}
                <div className="border-t border-zion-cyan/20 pt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zion-slate-light">
                      Delivery: {getServiceProperty(service, 'estimatedDelivery', 'Custom')}
                    </span>
                    <span className="text-zion-cyan font-medium">
                      {getServiceProperty(service, 'supportLevel', 'Premium')} support
                    </span>
                  </div>
                  <div className="mt-3 text-center">
                    <span className="text-zion-slate-light text-sm">
                      Market Price: {service.marketPrice}
                    </span>
                  </div>
                </div>

                {/* Tags */}
                {getServiceProperty(service, 'tags') && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {getServiceProperty(service, 'tags').slice(0, 4).map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-zion-blue-light/20 text-zion-slate-light rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-zion-cyan">
            Complete Service Portfolio
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-zion-blue-light/10 backdrop-blur-sm rounded-xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                {/* Service Header */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs px-2 py-1 bg-zion-cyan/20 text-zion-cyan rounded-full">
                      {service.category}
                    </span>
                    <span className="text-zion-cyan font-bold text-lg">
                      ${service.price.toLocaleString()}
                      <span className="text-sm text-zion-slate-light">/month</span>
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-zion-cyan font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-zion-slate-light text-sm flex items-center">
                        <span className="text-zion-cyan mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-zion-slate-light text-sm text-center">
                        +{service.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-zion-cyan font-semibold mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="text-zion-slate-light text-sm flex items-center">
                        <span className="text-zion-cyan mr-2">→</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Service Footer */}
                <div className="border-t border-zion-cyan/20 pt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zion-slate-light">
                      Delivery: {getServiceProperty(service, 'estimatedDelivery', 'Custom')}
                    </span>
                    <span className="text-zion-cyan font-medium">
                      {getServiceProperty(service, 'supportLevel', 'Premium')} support
                    </span>
                  </div>
                  <div className="mt-3 text-center">
                    <span className="text-zion-slate-light text-sm">
                      Market Price: {service.marketPrice}
                    </span>
                  </div>
                </div>

                {/* Tags */}
                {getServiceProperty(service, 'tags') && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {getServiceProperty(service, 'tags').slice(0, 4).map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-zion-blue-light/20 text-zion-slate-light rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-zion-slate-light text-xl mb-4">
              No services found matching your criteria
            </div>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-zion-cyan text-zion-blue-dark rounded-lg font-medium hover:bg-zion-cyan/90 transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Service Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 text-zion-slate-light"
        >
          <p className="text-lg">
            Showing {filteredServices.length} of {allServices.length} revolutionary services
          </p>
          <p className="text-sm mt-2">
            Contact us to learn more about any service or request a custom solution
          </p>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-md">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let's discuss how our revolutionary technology solutions can accelerate your growth and 
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
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-zion-blue-dark border border-zion-cyan/30 rounded-xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold text-white">{selectedService.title}</h2>
              <button
                onClick={() => setSelectedService(null)}
                className="text-zion-slate-light hover:text-white text-2xl"
              >
                ×
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-zion-cyan mb-3">Service Details</h3>
                <p className="text-zion-slate-light mb-4">{selectedService.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-zion-cyan font-medium">Category:</span>
                    <span className="text-white ml-2">{selectedService.category}</span>
                  </div>
                  <div>
                    <span className="text-zion-cyan font-medium">Subcategory:</span>
                    <span className="text-white ml-2">{selectedService.subcategory}</span>
                  </div>
                  <div>
                    <span className="text-zion-cyan font-medium">Price:</span>
                    <span className="text-white ml-2">${selectedService.price.toLocaleString()}/{selectedService.pricingModel}</span>
                  </div>
                  <div>
                    <span className="text-zion-cyan font-medium">Delivery:</span>
                    <span className="text-white ml-2">{selectedService.estimatedDelivery}</span>
                  </div>
                  <div>
                    <span className="text-zion-cyan font-medium">Support:</span>
                    <span className="text-white ml-2">{selectedService.supportLevel}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-zion-cyan mb-3">Features & Benefits</h3>
                
                <div className="mb-6">
                  <h4 className="text-white font-medium mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="text-zion-slate-light text-sm flex items-center">
                        <span className="text-zion-cyan mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-medium mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {selectedService.benefits.map((benefit, index) => (
                      <li key={index} className="text-zion-slate-light text-sm flex items-center">
                        <span className="text-zion-cyan mr-2">→</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-medium mb-2">Use Cases:</h4>
                  <ul className="space-y-1">
                    {selectedService.useCases.map((useCase, index) => (
                      <li key={index} className="text-zion-slate-light text-sm flex items-center">
                        <span className="text-zion-cyan mr-2">•</span>
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-8 p-6 bg-zion-blue-light/20 rounded-lg border border-zion-cyan/30">
              <h3 className="text-xl font-semibold text-zion-cyan mb-4">Get Started Today</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-zion-cyan text-2xl mb-2">📱</div>
                  <p className="font-semibold text-white">Call Us</p>
                  <p className="text-zion-slate-light">+1 302 464 0950</p>
                </div>
                <div>
                  <div className="text-zion-cyan text-2xl mb-2">✉️</div>
                  <p className="font-semibold text-white">Email Us</p>
                  <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
                </div>
                <div>
                  <div className="text-zion-cyan text-2xl mb-2">🌐</div>
                  <p className="font-semibold text-white">Visit Website</p>
                  <p className="text-zion-slate-light">ziontechgroup.com</p>
                </div>
              </div>
              <div className="text-center mt-4">
                <p className="text-zion-slate-light text-sm">
                  Market Price: {selectedService.marketPrice} | 
                  Estimated Delivery: {selectedService.estimatedDelivery}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default NewServices;
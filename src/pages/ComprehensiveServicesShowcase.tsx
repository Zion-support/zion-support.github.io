import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';
import { INNOVATIVE_MICRO_SAAS_SERVICES } from '../data/innovativeMicroSaasServices';

export function ComprehensiveServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);

  // Combine all services
  const allServices = [...COMPREHENSIVE_SERVICES, ...INNOVATIVE_MICRO_SAAS_SERVICES];
  
  // Get unique categories
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
            Comprehensive Services Showcase
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Discover our complete portfolio of cutting-edge AI, Quantum Computing, Blockchain, and IT services designed to transform your business operations and drive innovation
          </p>
          
          {/* Contact Information */}
          <div className="bg-zion-blue-light/20 backdrop-blur-sm rounded-lg p-6 mb-8 border border-zion-cyan/30">
            <h3 className="text-2xl font-semibold mb-4 text-zion-cyan">Contact Zion Tech Group</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <strong>Phone:</strong><br />
                <a href="tel:+13024640950" className="text-zion-cyan hover:text-white transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div>
                <strong>Email:</strong><br />
                <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div>
                <strong>Address:</strong><br />
                364 E Main St STE 1008<br />
                Middletown DE 19709
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
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-zion-cyan text-zion-blue-dark shadow-lg shadow-zion-cyan/30'
                    : 'bg-zion-blue-light/20 text-white hover:bg-zion-blue-light/30 border border-zion-cyan/30'
                }`}
              >
                {category === 'all' ? 'All Services' : category}
              </button>
            ))}
          </div>

          {/* Price Range Filter */}
          <div className="max-w-md mx-auto mb-8">
            <label className="block text-sm font-medium mb-2">Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
            <div className="flex gap-4">
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                value={priceRange[0]}
                onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                className="flex-1"
              />
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="flex-1"
              />
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
              <div className="p-6">
                {/* Service Header */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-zion-cyan bg-zion-cyan/10 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                    <span className="text-xs text-zion-slate-light">
                      {service.subcategory}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-zion-cyan">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="text-xs text-zion-slate-light flex items-center">
                        <span className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-zion-cyan">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, index) => (
                      <li key={index} className="text-xs text-zion-slate-light flex items-center">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing & Contact */}
                <div className="border-t border-zion-cyan/20 pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-2xl font-bold text-zion-cyan">
                        ${service.price.toLocaleString()}
                      </span>
                      <span className="text-sm text-zion-slate-light ml-1">/{service.pricingModel}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-zion-slate-light line-through">
                        {service.marketPrice}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-zion-slate-light mb-3">
                    <span>Delivery: {service.estimatedDelivery}</span>
                    <span>Support: {service.supportLevel}</span>
                  </div>

                  {/* Contact Buttons */}
                  <div className="flex gap-2">
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}
                      className="flex-1 bg-zion-cyan text-zion-blue-dark px-4 py-2 rounded-lg text-sm font-medium hover:bg-zion-cyan/80 transition-colors text-center"
                    >
                      Get Quote
                    </a>
                    <a
                      href="tel:+13024640950"
                      className="bg-zion-blue-light/20 border border-zion-cyan/30 text-zion-cyan px-4 py-2 rounded-lg text-sm font-medium hover:bg-zion-cyan/20 transition-colors"
                    >
                      Call Now
                    </a>
                  </div>
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
          <div className="bg-zion-blue-light/20 backdrop-blur-sm rounded-2xl p-12 border border-zion-cyan/30">
            <h2 className="text-4xl font-bold mb-6 bg-holographic-gradient bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Our team of experts is ready to help you implement cutting-edge solutions that will revolutionize your operations and drive unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Business Transformation Consultation"
                className="bg-zion-cyan text-zion-blue-dark px-8 py-4 rounded-lg text-lg font-semibold hover:bg-zion-cyan/80 transition-colors shadow-lg shadow-zion-cyan/30"
              >
                Start Your Transformation
              </a>
              <a
                href="tel:+13024640950"
                className="bg-zion-blue-light/20 border-2 border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg text-lg font-semibold hover:bg-zion-cyan/20 transition-colors"
              >
                Speak with an Expert
              </a>
            </div>
          </div>
        </motion.div>

        {/* Service Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-zion-cyan mb-2">
                {allServices.length}+
              </div>
              <div className="text-zion-slate-light">Innovative Services</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-zion-cyan mb-2">
                {Array.from(new Set(allServices.map(s => s.category))).length}
              </div>
              <div className="text-zion-slate-light">Technology Categories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-zion-cyan mb-2">
                24/7
              </div>
              <div className="text-zion-slate-light">Expert Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-zion-cyan mb-2">
                99.9%
              </div>
              <div className="text-zion-slate-light">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
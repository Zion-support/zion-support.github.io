import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';
import { INNOVATIVE_MICRO_SAAS_SERVICES } from '../data/innovativeMicroSaasServices';

export function InnovativeServicesMarketing() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Combine all services
  const allServices = [...COMPREHENSIVE_SERVICES, ...INNOVATIVE_MICRO_SAAS_SERVICES];
  
  // Get unique categories
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
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-holographic-gradient bg-clip-text text-transparent animate-holographic-shift">
            Zion Tech Group
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-zion-cyan">
            Revolutionary Technology Solutions
          </h2>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-5xl mx-auto leading-relaxed">
            Discover our comprehensive portfolio of cutting-edge AI, Quantum Computing, Blockchain, and IT services. 
            Transform your business with innovative solutions that deliver measurable results and competitive advantages.
          </p>
          
          {/* Contact Information */}
          <div className="bg-zion-blue-light/20 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-zion-cyan/30">
            <h3 className="text-3xl font-semibold mb-6 text-zion-cyan">Contact Zion Tech Group</h3>
            <div className="grid md:grid-cols-3 gap-8 text-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-zion-cyan mb-2">📞 Phone</div>
                <a href="tel:+13024640950" className="text-zion-cyan hover:text-white transition-colors text-xl">
                  +1 302 464 0950
                </a>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-zion-cyan mb-2">✉️ Email</div>
                <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:text-white transition-colors text-xl">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-zion-cyan mb-2">📍 Address</div>
                <div className="text-zion-slate-light">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </div>
              </div>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search innovative services, features, or technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-8 py-6 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-2xl text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-4 focus:ring-zion-cyan/20 backdrop-blur-sm text-lg"
              />
              <div className="absolute right-6 top-1/2 transform -translate-y-1/2 text-zion-cyan">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-zion-cyan text-zion-blue-dark shadow-2xl shadow-zion-cyan/40 transform scale-105'
                    : 'bg-zion-blue-light/20 text-white hover:bg-zion-blue-light/30 border border-zion-cyan/30 hover:border-zion-cyan/50'
                }`}
              >
                {category === 'all' ? 'All Services' : category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services Showcase */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-zion-blue-light/10 backdrop-blur-sm rounded-2xl border border-zion-cyan/20 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group overflow-hidden"
            >
              {/* Service Header */}
              <div className="p-8 border-b border-zion-cyan/20">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-zion-cyan bg-zion-cyan/10 px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                  <span className="text-sm text-zion-slate-light bg-zion-blue-light/20 px-3 py-1 rounded-full">
                    {service.subcategory}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-zion-cyan transition-colors leading-tight">
                  {service.title}
                </h3>
                <p className="text-zion-slate-light leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Service Details */}
              <div className="p-8">
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-zion-cyan">🚀 Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 5).map((feature, index) => (
                      <li key={index} className="text-zion-slate-light flex items-start">
                        <span className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-zion-cyan">💡 Business Benefits</h4>
                  <ul className="space-y-2">
                    {service.benefits.slice(0, 4).map((benefit, index) => (
                      <li key={index} className="text-zion-slate-light flex items-start">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Use Cases */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-zion-cyan">🎯 Perfect For</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.slice(0, 4).map((useCase, index) => (
                      <span key={index} className="text-xs bg-zion-blue-light/20 text-zion-slate-light px-3 py-1 rounded-full border border-zion-cyan/20">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pricing & Market Comparison */}
                <div className="bg-zion-blue-light/20 rounded-xl p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-3xl font-bold text-zion-cyan">
                        ${service.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-zion-slate-light">per {service.pricingModel}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-zion-slate-light line-through">
                        Market Price: {service.marketPrice}
                      </div>
                      <div className="text-lg font-semibold text-green-400">
                        Save up to {Math.round(((parseInt(service.marketPrice.replace(/[^0-9]/g, '')) - service.price) / parseInt(service.marketPrice.replace(/[^0-9]/g, ''))) * 100)}%
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center">
                      <div className="text-zion-cyan font-semibold">Delivery</div>
                      <div className="text-zion-slate-light">{service.estimatedDelivery}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-zion-cyan font-semibold">Support</div>
                      <div className="text-zion-slate-light capitalize">{service.supportLevel}</div>
                    </div>
                  </div>
                </div>

                {/* Contact Actions */}
                <div className="space-y-3">
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}
                    className="w-full bg-zion-cyan text-zion-blue-dark px-6 py-4 rounded-xl text-lg font-semibold hover:bg-zion-cyan/80 transition-colors text-center block shadow-lg shadow-zion-cyan/30"
                  >
                    🚀 Get Started Today
                  </a>
                  <div className="flex gap-3">
                    <a
                      href="tel:+13024640950"
                      className="flex-1 bg-zion-blue-light/20 border border-zion-cyan/30 text-zion-cyan px-4 py-3 rounded-xl text-sm font-medium hover:bg-zion-cyan/20 transition-colors text-center"
                    >
                      📞 Call Expert
                    </a>
                    <a
                      href="https://ziontechgroup.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-zion-blue-light/20 border border-zion-cyan/30 text-zion-cyan px-4 py-3 rounded-xl text-sm font-medium hover:bg-zion-cyan/20 transition-colors text-center"
                    >
                      🌐 Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-24"
        >
          <div className="bg-zion-blue-light/20 backdrop-blur-sm rounded-3xl p-16 border border-zion-cyan/30">
            <h2 className="text-5xl font-bold mb-8 bg-holographic-gradient bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed">
              Join hundreds of forward-thinking companies that have already revolutionized their operations with our cutting-edge technology solutions. 
              Our team of experts is ready to guide you through your digital transformation journey.
            </p>
            
            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-zion-cyan mb-2">
                  {allServices.length}+
                </div>
                <div className="text-zion-slate-light text-lg">Innovative Services</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-zion-cyan mb-2">
                  {Array.from(new Set(allServices.map(s => s.category))).length}
                </div>
                <div className="text-zion-slate-light text-lg">Technology Categories</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-zion-cyan mb-2">
                  24/7
                </div>
                <div className="text-zion-slate-light text-lg">Expert Support</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-zion-cyan mb-2">
                  99.9%
                </div>
                <div className="text-zion-slate-light text-lg">Client Satisfaction</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Business Transformation Consultation"
                className="bg-zion-cyan text-zion-blue-dark px-12 py-6 rounded-2xl text-2xl font-bold hover:bg-zion-cyan/80 transition-colors shadow-2xl shadow-zion-cyan/40 transform hover:scale-105"
              >
                🚀 Start Your Transformation
              </a>
              <a
                href="tel:+13024640950"
                className="bg-zion-blue-light/20 border-2 border-zion-cyan text-zion-cyan px-12 py-6 rounded-2xl text-2xl font-bold hover:bg-zion-cyan/20 transition-colors"
              >
                📞 Speak with an Expert
              </a>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Zion Tech Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-24"
        >
          <h2 className="text-4xl font-bold text-center mb-16 text-zion-cyan">Why Choose Zion Tech Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold mb-4">Cutting-Edge Innovation</h3>
              <p className="text-zion-slate-light">
                Stay ahead of the competition with the latest AI, Quantum Computing, and Blockchain technologies. 
                Our solutions are built on the bleeding edge of technological advancement.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">💎</div>
              <h3 className="text-2xl font-bold mb-4">Premium Quality</h3>
              <p className="text-zion-slate-light">
                Every service is crafted with attention to detail and industry best practices. 
                We deliver enterprise-grade solutions that scale with your business.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4">Proven Results</h3>
              <p className="text-zion-slate-light">
                Our solutions deliver measurable business outcomes. 
                See increased efficiency, reduced costs, and improved customer satisfaction.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
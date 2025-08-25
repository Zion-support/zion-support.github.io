<<<<<<< HEAD
=======
<<<<<<< HEAD
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ENHANCED_INNOVATIVE_SERVICES } from '../data/enhancedInnovativeServices';
import { Link } from 'react-router-dom';

export function EnhancedInnovativeServices() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedService, setSelectedService] = useState<any>(null);

  const allServices = [...ENHANCED_INNOVATIVE_SERVICES];
  
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
            Enhanced Innovative Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Discover our cutting-edge AI-powered solutions and micro SAAS services designed to transform industries and drive business growth
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
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-zion-cyan text-zion-blue-dark shadow-lg shadow-zion-cyan/30'
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
              className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-xl hover:shadow-zion-cyan/20 group cursor-pointer"
              onClick={() => openServiceModal(service)}
            >
              {/* Service Header */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full font-medium">
                    {service.category}
                  </span>
                  <span className="text-2xl font-bold text-zion-cyan">
                    {service.currency}{service.price.toLocaleString()}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-zion-slate-light text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features Preview */}
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                <div className="space-y-1">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center text-zion-slate-light text-sm">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-zion-cyan text-sm font-medium">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>
              </div>

              {/* Benefits Preview */}
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                <div className="space-y-1">
                  {service.benefits.slice(0, 2).map((benefit, index) => (
                    <div key={index} className="flex items-center text-zion-slate-light text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {service.tags.slice(0, 4).map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-zion-blue-light/20 text-zion-slate-light text-xs rounded-md border border-zion-cyan/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Service Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-zion-cyan/20">
                <div className="text-sm text-zion-slate-light">
                  <div>Delivery: {service.estimatedDelivery}</div>
                  <div>Support: {service.supportLevel}</div>
                </div>
                <button className="px-4 py-2 bg-zion-cyan text-zion-blue-dark font-medium rounded-lg hover:bg-zion-cyan/90 transition-colors duration-300">
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
            <div className="text-zion-slate-light text-xl mb-4">
              No services found matching your criteria
            </div>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-zion-cyan text-zion-blue-dark font-medium rounded-lg hover:bg-zion-cyan/90 transition-colors duration-300"
            >
              View All Services
            </button>
          </motion.div>
        )}

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20 p-8 bg-zion-blue-light/10 rounded-2xl border border-zion-cyan/20"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-zion-slate-light text-lg mb-6 max-w-2xl mx-auto">
            Our AI-powered solutions are designed to drive innovation, increase efficiency, and deliver measurable results. 
            Contact us today to discuss how we can help your organization thrive in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="px-8 py-4 bg-zion-cyan text-zion-blue-dark font-bold rounded-lg hover:bg-zion-cyan/90 transition-colors duration-300 flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="px-8 py-4 bg-transparent text-zion-cyan font-bold rounded-lg border-2 border-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark transition-all duration-300 flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us
            </a>
          </div>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-zion-blue-dark border border-zion-cyan/30 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-white">{selectedService.title}</h2>
                <button
                  onClick={closeServiceModal}
                  className="text-zion-slate-light hover:text-white transition-colors duration-300"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Service Details */}
              <div className="space-y-6">
                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-zion-blue-light/10 p-4 rounded-lg border border-zion-cyan/20">
                    <h4 className="text-zion-cyan font-semibold mb-2">Category</h4>
                    <p className="text-white">{selectedService.category}</p>
                  </div>
                  <div className="bg-zion-blue-light/10 p-4 rounded-lg border border-zion-cyan/20">
                    <h4 className="text-zion-cyan font-semibold mb-2">Subcategory</h4>
                    <p className="text-white">{selectedService.subcategory}</p>
                  </div>
                  <div className="bg-zion-blue-light/10 p-4 rounded-lg border border-zion-cyan/20">
                    <h4 className="text-zion-cyan font-semibold mb-2">Pricing</h4>
                    <p className="text-white text-2xl font-bold">{selectedService.currency}{selectedService.price.toLocaleString()}/{selectedService.pricingModel}</p>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-2">Description</h4>
                  <p className="text-zion-slate-light leading-relaxed">{selectedService.description}</p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3">Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedService.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center text-zion-slate-light">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3">Benefits</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedService.benefits.map((benefit: string, index: number) => (
                      <div key={index} className="flex items-center text-zion-slate-light">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Use Cases & Target Audience */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-3">Use Cases</h4>
                    <div className="space-y-2">
                      {selectedService.useCases.map((useCase: string, index: number) => (
                        <div key={index} className="text-zion-slate-light text-sm">• {useCase}</div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-3">Target Audience</h4>
                    <div className="space-y-2">
                      {selectedService.targetAudience.map((audience: string, index: number) => (
                        <div key={index} className="text-zion-slate-light text-sm">• {audience}</div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Technical Specs & Integrations */}
                {selectedService.technicalSpecs && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-zion-cyan font-semibold mb-3">Technical Specifications</h4>
                      <div className="space-y-2">
                        {selectedService.technicalSpecs.map((spec: string, index: number) => (
                          <div key={index} className="text-zion-slate-light text-sm">• {spec}</div>
                        ))}
                      </div>
                    </div>
                    {selectedService.integrations && (
                      <div>
                        <h4 className="text-zion-cyan font-semibold mb-3">Integrations</h4>
                        <div className="space-y-2">
                          {selectedService.integrations.map((integration: string, index: number) => (
                            <div key={index} className="text-zion-slate-light text-sm">• {integration}</div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Compliance */}
                {selectedService.compliance && (
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-3">Compliance & Standards</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.compliance.map((compliance: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full border border-zion-cyan/30"
                        >
                          {compliance}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Additional Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-zion-blue-light/10 p-4 rounded-lg border border-zion-cyan/20">
                    <h4 className="text-zion-cyan font-semibold mb-2">Delivery Time</h4>
                    <p className="text-white">{selectedService.estimatedDelivery}</p>
                  </div>
                  <div className="bg-zion-blue-light/10 p-4 rounded-lg border border-zion-cyan/20">
                    <h4 className="text-zion-cyan font-semibold mb-2">Support Level</h4>
                    <p className="text-white">{selectedService.supportLevel}</p>
                  </div>
                  <div className="bg-zion-blue-light/10 p-4 rounded-lg border border-zion-cyan/20">
                    <h4 className="text-zion-cyan font-semibold mb-2">Market Price</h4>
                    <p className="text-white">{selectedService.marketPrice}</p>
                  </div>
                </div>

                {/* Contact & Action */}
                <div className="bg-zion-blue-light/10 p-6 rounded-lg border border-zion-cyan/20">
                  <h4 className="text-zion-cyan font-semibold mb-4">Get Started Today</h4>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:+13024640950"
                      className="px-6 py-3 bg-zion-cyan text-zion-blue-dark font-bold rounded-lg hover:bg-zion-cyan/90 transition-colors duration-300 flex items-center justify-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call +1 302 464 0950
                    </a>
                    <a
                      href="mailto:kleber@ziontechgroup.com"
                      className="px-6 py-3 bg-transparent text-zion-cyan font-bold rounded-lg border-2 border-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark transition-all duration-300 flex items-center justify-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email kleber@ziontechgroup.com
                    </a>
                  </div>
                  <div className="mt-4 text-center text-zion-slate-light text-sm">
                    <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                    <p>Website: <a href="https://ziontechgroup.com" className="text-zion-cyan hover:underline">https://ziontechgroup.com</a></p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
import React from 'react';
import { EnhancedInnovativeServicesShowcase } from '@/components/services/EnhancedInnovativeServicesShowcase';
import EnhancedSEO from '@/components/EnhancedSEO';

export default function EnhancedInnovativeServicesPage() {
  return (
    <>
              <EnhancedSEO
          title="Enhanced Innovative Services | Zion Tech Group"
          description="Discover our cutting-edge suite of AI-powered services, quantum solutions, and innovative micro SAAS platforms designed to transform your business operations and drive innovation."
          keywords="AI services, quantum computing, micro SAAS, cybersecurity, healthcare AI, fintech, supply chain optimization, energy management, customer experience, data governance, talent acquisition"
          image="/images/enhanced-innovative-services-og.jpg"
          url="https://ziontechgroup.com/enhanced-innovative-services"
        />
      
      <EnhancedInnovativeServicesShowcase />
    </>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0f9b
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  );
}
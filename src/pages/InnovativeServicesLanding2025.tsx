import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { INNOVATIVE_SERVICES_2025 } from '../data/innovativeNewServices2025';
import { SPECIALIZED_IT_SERVICES_2025 } from '../data/specializedITServices2025';

export function InnovativeServicesLanding2025() {
  const [selectedService, setSelectedService] = useState<any>(null);

  const allServices = [...INNOVATIVE_SERVICES_2025, ...SPECIALIZED_IT_SERVICES_2025];
  
  const categories = Array.from(new Set(allServices.map(service => service.category)));

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

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-holographic-gradient bg-clip-text text-transparent animate-holographic-shift">
                2025 Innovation Hub
              </h1>
              <p className="text-2xl md:text-3xl text-zion-slate-light mb-12 max-w-5xl mx-auto leading-relaxed">
                Transform your business with cutting-edge micro SAAS services, AI-powered solutions, and quantum-ready infrastructure. 
                Stay ahead of the competition with our innovative 2025 technology portfolio.
              </p>
              
              {/* Contact CTA */}
              <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-2xl p-8 mb-12 backdrop-blur-sm max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-6">Ready to Lead the Future?</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <p className="text-zion-slate-light text-lg">Phone</p>
                    <a href="tel:+13024640950" className="text-2xl font-bold text-zion-cyan hover:text-white transition-colors">
                      +1 302 464 0950
                    </a>
                  </div>
                  <div>
                    <p className="text-zion-slate-light text-lg">Email</p>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-xl font-bold text-zion-cyan hover:text-white transition-colors">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                  <div>
                    <p className="text-zion-slate-light text-lg">Website</p>
                    <a href="https://ziontechgroup.com" className="text-xl font-bold text-zion-cyan hover:text-white transition-colors">
                      ziontechgroup.com
                    </a>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-zion-cyan text-black font-bold py-4 px-8 rounded-lg hover:bg-zion-cyan/80 transition-colors text-lg"
                  >
                    Call Now
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="bg-transparent border-2 border-zion-cyan text-zion-cyan font-bold py-4 px-8 rounded-lg hover:bg-zion-cyan hover:text-black transition-colors text-lg"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-white mb-6">
                Revolutionary Services Portfolio
              </h2>
              <p className="text-xl text-zion-slate-light max-w-4xl mx-auto">
                Our comprehensive suite of innovative services covers every aspect of modern business transformation, 
                from AI-powered automation to quantum-ready security infrastructure.
              </p>
            </motion.div>

            {/* Category Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {categories.map((category, index) => {
                const categoryServices = allServices.filter(service => service.category === category);
                const avgPrice = Math.round(categoryServices.reduce((sum, service) => sum + service.price, 0) / categoryServices.length);
                
                return (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-zion-blue-light/10 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300 backdrop-blur-sm"
                  >
                    <h3 className="text-2xl font-bold text-white mb-4">{category}</h3>
                    <p className="text-zion-slate-light mb-4">
                      {categoryServices.length} innovative services
                    </p>
                    <p className="text-zion-cyan font-semibold mb-4">
                      Starting from ${avgPrice.toLocaleString()}/month
                    </p>
                    <div className="space-y-2">
                      {categoryServices.slice(0, 3).map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                          <span className="text-zion-slate-light text-sm">{service.title}</span>
                        </div>
                      ))}
                      {categoryServices.length > 3 && (
                        <p className="text-zion-slate-light text-sm">
                          +{categoryServices.length - 3} more services
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-blue-light/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-white mb-6">
                Featured Innovation Services
              </h2>
              <p className="text-xl text-zion-slate-light max-w-4xl mx-auto">
                Discover our most cutting-edge services that are reshaping industries and creating new opportunities for businesses worldwide.
              </p>
            </motion.div>

            {/* Featured Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allServices.slice(0, 6).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
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
                      {service.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-zion-blue-light/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button className="w-full bg-zion-cyan text-black font-semibold py-3 px-4 rounded-lg hover:bg-zion-cyan/80 transition-colors">
                      Learn More
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View All Services CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mt-12"
            >
              <a
                href="/innovative-services-2025"
                className="inline-block bg-transparent border-2 border-zion-cyan text-zion-cyan font-bold py-4 px-8 rounded-lg hover:bg-zion-cyan hover:text-black transition-colors text-lg"
              >
                View All {allServices.length} Services
              </a>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Zion Tech Group */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-zion-slate-light max-w-4xl mx-auto">
                We're not just another technology company. We're your strategic innovation partner, 
                committed to transforming your business with cutting-edge solutions and unparalleled expertise.
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Cutting-Edge Innovation",
                  description: "Access to the latest AI, quantum computing, and emerging technologies before they become mainstream.",
                  icon: "🚀"
                },
                {
                  title: "Proven ROI",
                  description: "Our services deliver measurable returns, with most clients seeing 300-800% ROI within 6-18 months.",
                  icon: "💰"
                },
                {
                  title: "Expert Team",
                  description: "World-class engineers, data scientists, and business strategists with decades of combined experience.",
                  icon: "👥"
                },
                {
                  title: "Future-Proof Solutions",
                  description: "Built with scalability and adaptability in mind, ensuring your investment grows with your business.",
                  icon: "🔮"
                },
                {
                  title: "24/7 Support",
                  description: "Round-the-clock technical support and strategic guidance to ensure your success.",
                  icon: "🔄"
                },
                {
                  title: "Global Reach",
                  description: "Serving clients worldwide with localized solutions and international compliance expertise.",
                  icon: "🌍"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-6xl mb-4">{benefit.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-zion-slate-light">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <h2 className="text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8">
                Join the ranks of forward-thinking companies that are already leveraging our innovative 2025 services 
                to gain competitive advantages and drive unprecedented growth.
              </p>
              
              <div className="bg-zion-blue-dark/50 border border-zion-cyan/30 rounded-2xl p-8 mb-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-zion-cyan mb-6">Contact Information</h3>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <p className="text-zion-slate-light">Phone</p>
                    <a href="tel:+13024640950" className="text-xl font-bold text-white hover:text-zion-cyan transition-colors">
                      +1 302 464 0950
                    </a>
                  </div>
                  <div>
                    <p className="text-zion-slate-light">Email</p>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-xl font-bold text-white hover:text-zion-cyan transition-colors">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                  <div>
                    <p className="text-zion-slate-light">Address</p>
                    <p className="text-white">
                      364 E Main St STE 1008<br />
                      Middletown DE 19709
                    </p>
                  </div>
                </div>
              </div>
              
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
                  Get Free Consultation
                </a>
              </div>
            </motion.div>
          </div>
        </section>
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

export default InnovativeServicesLanding2025;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';
import { SPECIALIZED_IT_SERVICES_2025 } from '../data/specializedITServices2025';

function ComprehensiveServicesOverview() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const allServices = [...INNOVATIVE_MICRO_SAAS_SERVICES_2025, ...SPECIALIZED_IT_SERVICES_2025];
  
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];
  
  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory);

  const getServiceStats = () => {
    const totalServices = allServices.length;
    const totalValue = allServices.reduce((sum, service) => sum + service.price, 0);
    const avgPrice = Math.round(totalValue / totalServices);
    const revolutionaryServices = allServices.filter(s => s.innovationLevel === 'Revolutionary').length;
    
    return { totalServices, avgPrice, revolutionaryServices };
  };

  const stats = getServiceStats();

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-quantum-gradient opacity-20 animate-pulse"></div>
      <div className="absolute inset-0 bg-quantum-mesh"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-holographic-gradient bg-clip-text text-transparent animate-holographic-shift">
            Comprehensive Services Overview
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Discover our complete portfolio of innovative micro SAAS solutions, IT services, and AI-powered platforms designed to transform your business
          </p>

          {/* Contact Information Banner */}
          <div className="bg-gradient-to-r from-zion-cyan/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-zion-cyan/30">
            <h3 className="text-2xl font-bold text-zion-cyan mb-4">Transform Your Business Today</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{stats.totalServices}+</div>
                <div className="text-zion-slate-light">Innovative Services</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">${stats.avgPrice.toLocaleString()}</div>
                <div className="text-zion-slate-light">Average Monthly Price</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{stats.revolutionaryServices}</div>
                <div className="text-zion-slate-light">Revolutionary Solutions</div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center bg-zion-cyan hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 mr-4"
              >
                📞 Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center bg-transparent border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                ✉️ Get Quote
              </a>
            </div>
          </div>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/25'
                    : 'bg-zion-blue-light/20 text-zion-slate-light hover:bg-zion-blue-light/30 border border-zion-cyan/30'
                }`}
              >
                {category === 'all' ? 'All Services' : category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services Overview Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zion-blue-light/10 backdrop-blur-sm rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group"
            >
              {/* Service Header */}
              <div className="p-6 border-b border-zion-cyan/20">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-white group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h3>
                  <div className="flex flex-col items-end space-y-1">
                    {service.innovationLevel && (
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold text-white ${
                        service.innovationLevel === 'Revolutionary' ? 'bg-gradient-to-r from-purple-600 to-pink-600' :
                        service.innovationLevel === 'Breakthrough' ? 'bg-gradient-to-r from-blue-600 to-cyan-600' :
                        'bg-gradient-to-r from-green-600 to-emerald-600'
                      }`}>
                        {service.innovationLevel}
                      </span>
                    )}
                    {service.marketTrend && (
                      <span className="px-2 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-orange-600 to-red-600">
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
                  <div className="text-xl font-bold text-zion-cyan">
                    ${service.price.toLocaleString()}
                    <span className="text-sm text-zion-slate-light font-normal">/{service.pricingModel}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-zion-slate-light">Market Price</div>
                    <div className="text-sm text-white">{service.marketPrice}</div>
                  </div>
                </div>
              </div>

              {/* Service Details */}
              <div className="p-6 space-y-4">
                {/* Key Benefits */}
                <div>
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Benefits</h4>
                  <div className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
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
                    <div className="text-base font-bold text-green-300">{service.roi}</div>
                  </div>
                )}

                {/* Technology Stack */}
                {service.technology && (
                  <div>
                    <h4 className="text-sm font-semibold text-zion-cyan mb-2">Technology</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.technology.slice(0, 3).map((tech, index) => (
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
                    className="w-full bg-gradient-to-r from-zion-cyan to-blue-600 hover:from-blue-600 hover:to-zion-cyan text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25 flex items-center justify-center text-sm"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-zion-cyan/30">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Our team of experts is ready to help you choose the right services and implement solutions that will transform your business. 
              Contact us today for a personalized consultation.
            </p>
            
            {/* Contact Options */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl mb-2">📞</div>
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-zion-slate-light text-sm mb-3">Speak directly with our experts</p>
                <a
                  href="tel:+13024640950"
                  className="text-zion-cyan hover:text-white transition-colors font-semibold"
                >
                  +1 302 464 0950
                </a>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-2">✉️</div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-zion-slate-light text-sm mb-3">Get detailed information and quotes</p>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="text-zion-cyan hover:text-white transition-colors font-semibold"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-2">🌐</div>
                <h3 className="text-lg font-semibold text-white mb-2">Visit Website</h3>
                <p className="text-zion-slate-light text-sm mb-3">Explore our full portfolio</p>
                <a
                  href="https://ziontechgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zion-cyan hover:text-white transition-colors font-semibold"
                >
                  ziontechgroup.com
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-zion-cyan hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                📞 Call Now
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-transparent border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                ✉️ Send Email
              </a>
              <Link
                to="/innovative-services-2025"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                🚀 View All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ComprehensiveServicesOverview;
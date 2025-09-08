import React from 'react';
import EnhancedComprehensiveServicesShowcase from '../components/EnhancedComprehensiveServicesShowcase';

const InnovativeServicesShowcase2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Zion Tech Group
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Innovative Services 2025
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover our comprehensive portfolio of cutting-edge micro SAAS solutions, IT services, and AI-powered innovations designed to transform your business and drive competitive advantage in the digital age
          </p>
          
          {/* Key Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
              <div className="text-sm text-gray-300">Innovative Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-cyan-400 mb-2">8</div>
              <div className="text-sm text-gray-300">Technology Categories</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-2">99%</div>
              <div className="text-sm text-gray-300">Client Satisfaction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-sm text-gray-300">Support Available</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Explore Services
            </a>
            <a
              href="/comprehensive-pricing-2025"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300"
            >
              View Pricing
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              Get Custom Quote
            </a>
          </div>
        </div>
      </section>

>>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f:src/pages/InnovativeServicesShowcase2025.tsx.cleanup-backup.1756208768
      {/* Category Filter */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                onClick={() => setSelectedService(service.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{service.icon}</span>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs px-2 py-1 rounded-full font-medium">
                      Popular
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-white">{service.price}</span>
                  <span className="text-gray-400">{service.period}</span>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>
                
                <div className="space-y-2 mb-4">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 bg-white/10 px-2 py-1 rounded">
                    {service.category.replace('-', ' ').toUpperCase()}
                  </span>
                  <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                    Learn More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedServiceData && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <span className="text-6xl">{selectedServiceData.icon}</span>
                  <div>
                    <h2 className="text-3xl font-bold text-white">{selectedServiceData.name}</h2>
                    <p className="text-xl text-gray-300">{selectedServiceData.tagline}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Service Overview</h3>
                  <p className="text-gray-300 mb-6">{selectedServiceData.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <div className="space-y-2">
                      {selectedServiceData.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Target Audience</h4>
                    <p className="text-gray-300">{selectedServiceData.targetAudience}</p>
                  </div>
                </div>

                <div>
                  <div className="bg-white/10 rounded-xl p-6 mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Pricing & Market</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Price:</span>
                        <span className="text-white font-semibold">{selectedServiceData.price}{selectedServiceData.period}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">ROI:</span>
                        <span className="text-green-400 font-semibold">{selectedServiceData.roi}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Market Size:</span>
                        <span className="text-white font-semibold">{selectedServiceData.marketSize}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Growth Rate:</span>
                        <span className="text-blue-400 font-semibold">{selectedServiceData.growthRate}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Competitive Analysis</h4>
                    <p className="text-gray-300 mb-3">{selectedServiceData.marketPosition}</p>
                    <div>
                      <span className="text-gray-400 text-sm">Competitors:</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {selectedServiceData.competitors.map((competitor, index) => (
                          <span key={index} className="bg-red-500/20 text-red-300 text-xs px-2 py-1 rounded">
                            {competitor}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={selectedServiceData.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit Service
                    </a>
                    <a
                      href="mailto:kleber@ziontechgroup.com?subject=Inquiry about service"
                      className="flex-1 bg-white/10 text-white py-3 px-6 rounded-xl font-semibold text-center hover:bg-white/20 transition-all duration-300"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our innovative services are designed to give you a competitive edge in today's rapidly evolving technology landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Service consultation request"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="bg-white/10 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </motion.div>
      {/* Why Choose Zion Tech Group */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven business expertise to deliver solutions that drive real results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation First</h3>
              <p className="text-gray-300">
                We stay ahead of technology trends, offering the latest AI, quantum computing, and emerging tech solutions
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-semibold text-white mb-3">Business Focused</h3>
              <p className="text-gray-300">
                Every solution is designed with ROI in mind, ensuring measurable business impact and value creation
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-white mb-3">Enterprise Grade</h3>
              <p className="text-gray-300">
                Built with security, scalability, and compliance in mind for enterprise-level reliability
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold text-white mb-3">Global Reach</h3>
              <p className="text-gray-300">
                Serving clients worldwide with localized support and compliance expertise
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-3">Rapid Deployment</h3>
              <p className="text-gray-300">
                Quick implementation and setup with minimal disruption to your business operations
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-white mb-3">Dedicated Support</h3>
              <p className="text-gray-300">
                24/7 technical support and dedicated account management for your success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions across multiple technology domains to meet all your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-blue-500/30">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-white mb-3">AI & Machine Learning</h3>
              <p className="text-gray-300 text-sm mb-4">
                Advanced AI solutions for business intelligence, predictive analytics, and intelligent automation
              </p>
              <div className="text-blue-400 text-sm font-semibold">Starting at $1,499/month</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-600/20 to-teal-600/20 rounded-xl p-6 border border-green-500/30">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-semibold text-white mb-3">Cybersecurity</h3>
              <p className="text-gray-300 text-sm mb-4">
                Quantum-resistant security, threat detection, and compliance automation for enterprise protection
              </p>
              <div className="text-green-400 text-sm font-semibold">Starting at $3,999/month</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-purple-500/30">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-semibold text-white mb-3">Cloud & DevOps</h3>
              <p className="text-gray-300 text-sm mb-4">
                AI-powered cloud orchestration, multi-cloud management, and automated infrastructure
              </p>
              <div className="text-purple-400 text-sm font-semibold">Starting at $1,999/month</div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-xl p-6 border border-orange-500/30">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-semibold text-white mb-3">Industry Solutions</h3>
              <p className="text-gray-300 text-sm mb-4">
                Specialized solutions for healthcare, fintech, manufacturing, energy, and space technology
              </p>
              <div className="text-orange-400 text-sm font-semibold">Starting at $4,999/month</div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Position & Competitive Advantage */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Market Position & Competitive Advantage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leading the industry with breakthrough technologies and proven business value
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Technology Leadership</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                  <span>First-to-market quantum computing solutions for financial services</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                  <span>AI-powered healthcare analytics with 40% improvement in patient outcomes</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                  <span>Quantum-resistant cybersecurity with 3-year technology advantage</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                  <span>Space technology platform for commercial satellite operations</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Business Impact</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></span>
                  <span>Average 400% ROI across all service categories</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></span>
                  <span>30-70% reduction in operational costs</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></span>
                  <span>50% faster time-to-market for new products</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></span>
                  <span>99% client satisfaction and retention rate</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <EnhancedComprehensiveServicesShowcase />
      </section>

      {/* Contact & Get Started */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our innovative services can help drive your digital transformation and competitive advantage
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-2xl mb-2">📧</div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300 text-sm mb-3">Get detailed information and custom quotes</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">
                kleber@ziontechgroup.com
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-2xl mb-2">📞</div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300 text-sm mb-3">Speak directly with our experts</p>
              <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">
                +1 302 464 0950
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-2xl mb-2">📍</div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300 text-sm mb-3">Schedule an in-person meeting</p>
              <p className="text-blue-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Innovative Services 2025 Inquiry"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Get Custom Quote
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2025;
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { innovativeMicroSaasServices2030, innovativeITInfrastructureServices2030, innovativeAIServices2030 } from '../data/innovativeMicroSaasServices2030';

const InnovativeServicesShowcase2030: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Innovative Micro SAAS Services 2030 | Zion Tech Group</title>
        <meta name="description" content="Discover cutting-edge micro SAAS services, IT infrastructure, and AI solutions for 2030. Quantum computing, AI-powered platforms, and revolutionary technology solutions." />
        <meta name="keywords" content="micro SAAS, AI services, quantum computing, IT infrastructure, cybersecurity, blockchain, healthcare AI, financial technology" />
        <link rel="canonical" href="https://ziontechgroup.com/innovative-services-showcase-2030" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="relative z-10">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Innovative Services 2030
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionary micro SAAS services, cutting-edge IT infrastructure, and AI-powered solutions 
                designed to transform your business and secure your future in the quantum age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Call Now: +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
                >
                  Email: kleber@ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>
        </section>

        {/* Contact Information Banner */}
        <section className="bg-black/50 backdrop-blur-sm border-y border-purple-500/30 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-1">Phone</h3>
                <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-1">Email</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-1">Address</h3>
                <p className="text-green-400 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Micro SAAS Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Micro SAAS Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge software solutions that leverage quantum computing, AI, and blockchain technology 
                to solve real-world business challenges and drive unprecedented growth.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {innovativeMicroSaasServices2030.map((service) => (
                <div key={service.id} className="bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-purple-400/50">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {service.pricing}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-purple-400 font-semibold">Price</p>
                      <p className="text-white text-2xl font-bold">${service.price.toLocaleString()}/month</p>
                    </div>
                    <div>
                      <p className="text-purple-400 font-semibold">Market Price</p>
                      <p className="text-white">{service.marketPrice}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      <p>ROI: {service.roi}</p>
                      <p>Setup: {service.setupTime}</p>
                    </div>
                    <a 
                      href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}&body=Hi, I'm interested in learning more about ${service.name}. Please provide additional information.`}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Infrastructure Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced IT Infrastructure Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Next-generation infrastructure solutions that combine quantum computing, AI, and advanced 
                security protocols to deliver unmatched performance and reliability.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {innovativeITInfrastructureServices2030.map((service) => (
                <div key={service.id} className="bg-white/5 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-blue-400/50">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {service.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-blue-400 font-semibold">Hourly Rate</p>
                      <p className="text-white text-2xl font-bold">${service.hourlyRate}/hr</p>
                    </div>
                    <div>
                      <p className="text-blue-400 font-semibold">Project Rate</p>
                      <p className="text-white">${service.projectRate.toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <svg className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      <p>Response: {service.responseTime}</p>
                      <p>SLA: {service.sla}</p>
                    </div>
                    <a 
                      href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}&body=Hi, I'm interested in learning more about ${service.name}. Please provide additional information.`}
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge artificial intelligence solutions that leverage quantum computing and advanced 
                machine learning to solve complex problems and drive innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {innovativeAIServices2030.map((service) => (
                <div key={service.id} className="bg-white/5 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-pink-400/50">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <span className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {service.pricing}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-pink-400 font-semibold">Price</p>
                      <p className="text-white text-2xl font-bold">${service.price.toLocaleString()}/month</p>
                    </div>
                    <div>
                      <p className="text-pink-400 font-semibold">AI Score</p>
                      <p className="text-white text-2xl font-bold">{service.aiScore}/10</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">AI Capabilities</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <svg className="w-5 h-5 text-pink-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      <p>Accuracy: {service.accuracy}</p>
                      <p>Innovation: {service.innovationLevel}</p>
                    </div>
                    <a 
                      href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}&body=Hi, I'm interested in learning more about ${service.name}. Please provide additional information.`}
                      className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of technology with Zion Tech Group's innovative services. 
              Our cutting-edge solutions are designed to give you a competitive advantage in 2030 and beyond.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Lightning Fast</h3>
                <p className="text-gray-300 text-sm">Deploy in weeks, not months</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Proven Results</h3>
                <p className="text-gray-300 text-sm">300-500% ROI guaranteed</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-300 text-sm">Expert assistance anytime</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+13024640950"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Call Now: +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
              >
                Schedule a Demo
              </a>
            </div>
          </div>
        </section>

        {/* Footer Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-8">
                Get in Touch Today
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="text-left">
                  <h4 className="text-white font-semibold mb-4">Contact Information</h4>
                  <div className="space-y-3 text-gray-300">
                    <p><strong>Phone:</strong> <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300">+1 302 464 0950</a></p>
                    <p><strong>Email:</strong> <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300">kleber@ziontechgroup.com</a></p>
                    <p><strong>Website:</strong> <a href="https://ziontechgroup.com" className="text-purple-400 hover:text-purple-300">https://ziontechgroup.com</a></p>
                    <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
                  </div>
                </div>
                <div className="text-left">
                  <h4 className="text-white font-semibold mb-4">Why Choose Zion Tech Group?</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Cutting-edge quantum technology</li>
                    <li>• AI-powered solutions</li>
                    <li>• Proven ROI of 300-500%</li>
                    <li>• 24/7 expert support</li>
                    <li>• Global deployment capabilities</li>
                    <li>• Compliance and security focused</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default InnovativeServicesShowcase2030;
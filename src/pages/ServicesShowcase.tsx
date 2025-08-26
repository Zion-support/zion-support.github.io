import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ULTIMATE_MICRO_SAAS_SERVICES_2025 } from '../data/ultimateMicroSaasServices2025';

const ServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = [
    'all',
    'AI & Analytics',
    'AI & Customer Experience',
    'AI & Supply Chain',
    'AI & FinTech',
    'AI & Healthcare',
    'AI & Education',
    'AI & Marketing',
    'AI & Human Resources',
    'AI & Legal Technology',
    'AI & Real Estate',
    'AI & Manufacturing',
    'AI & Energy',
    'AI & Transportation',
    'AI & Agriculture',
    'AI & Environment'
  ];

  const filteredServices = ULTIMATE_MICRO_SAAS_SERVICES_2025.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Ultimate Micro SAAS Services 2025 - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive portfolio of AI-powered micro SAAS services designed to transform your business. From AI analytics to healthcare technology, we have the solutions you need." />
        <meta name="keywords" content="micro SAAS, AI services, business intelligence, customer experience, supply chain, fintech, healthcare, education, marketing, HR, legal tech, real estate, manufacturing, energy, transportation, agriculture, environmental monitoring" />
        <meta property="og:title" content="Ultimate Micro SAAS Services 2025 - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our cutting-edge AI-powered micro SAAS services. Expert solutions for every industry." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/services-showcase" />
        <link rel="canonical" href="https://ziontechgroup.com/services-showcase" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ultimate
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Micro SAAS Services
              </span>
              <br />
              <span className="text-2xl md:text-4xl text-gray-300">2025 Edition</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive portfolio of AI-powered micro SAAS services designed to transform your business. 
              From business intelligence to healthcare technology, we provide cutting-edge solutions for every industry.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-slate-800">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="text-sm text-gray-400">
                <p>Found {filteredServices.length} services matching your criteria</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div
                  key={service.id}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  {/* Service Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-blue-400 bg-blue-400/20 px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                      <span className="text-xs font-semibold text-green-400 bg-green-400/20 px-2 py-1 rounded-full">
                        {service.innovationLevel}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6 p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-green-400">Starting Price</span>
                      <span className="text-lg font-bold text-white">
                        {service.currency}{service.price.toLocaleString()}
                        <span className="text-sm text-gray-400">/{service.pricingModel}</span>
                      </span>
                    </div>
                    <div className="text-xs text-gray-400">
                      Market Range: {service.marketPrice}
                    </div>
                    <div className="text-xs text-yellow-400 mt-1">
                      Expected ROI: {service.roi}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-blue-400 mb-3">Key Features</h4>
                    <div className="space-y-2">
                      {service.features.slice(0, 5).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 flex-shrink-0"></span>
                          <span className="line-clamp-2">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 5 && (
                        <div className="text-xs text-gray-500 text-center">
                          +{service.features.length - 5} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-green-400 mb-3">Key Benefits</h4>
                    <div className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <span className="w-2 h-2 bg-green-400 rounded-full mr-2 flex-shrink-0"></span>
                          <span className="line-clamp-2">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Use Cases */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-yellow-400 mb-3">Use Cases</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.slice(0, 3).map((useCase, idx) => (
                        <span key={idx} className="text-xs bg-yellow-400/20 text-yellow-400 px-2 py-1 rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Target Audience */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-purple-400 mb-3">Target Audience</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.targetAudience.slice(0, 3).map((audience, idx) => (
                        <span key={idx} className="text-xs bg-purple-400/20 text-purple-400 px-2 py-1 rounded-full">
                          {audience}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technical Specs */}
                  {service.technicalSpecs && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3">Technical Specifications</h4>
                      <div className="space-y-2 text-xs text-gray-300">
                        <div className="flex justify-between">
                          <span>Technology:</span>
                          <span className="text-cyan-400">{service.technicalSpecs.technology.slice(0, 2).join(', ')}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Uptime:</span>
                          <span className="text-cyan-400">{service.technicalSpecs.uptime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>API Endpoints:</span>
                          <span className="text-cyan-400">{service.technicalSpecs.apiEndpoints}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Delivery & Support */}
                  <div className="mb-6 p-4 bg-white/5 rounded-lg">
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-gray-400">Delivery:</span>
                        <div className="text-white font-semibold">{service.estimatedDelivery}</div>
                      </div>
                      <div>
                        <span className="text-gray-400">Support:</span>
                        <div className="text-white font-semibold capitalize">{service.supportLevel}</div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                      Get Started
                    </button>
                    <div className="flex gap-2">
                      <a
                        href={`tel:${service.contactInfo.phone}`}
                        className="flex-1 bg-white/10 text-white text-center py-2 px-3 rounded-lg hover:bg-white/20 transition-colors text-sm"
                      >
                        Call Now
                      </a>
                      <a
                        href={`mailto:${service.contactInfo.email}`}
                        className="flex-1 bg-white/10 text-white text-center py-2 px-3 rounded-lg hover:bg-white/20 transition-colors text-sm"
                      >
                        Email
                      </a>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="mt-6 pt-4 border-t border-white/20 text-xs text-gray-400">
                    <div className="space-y-1">
                      <div>📞 {service.contactInfo.phone}</div>
                      <div>✉️ {service.contactInfo.email}</div>
                      <div>🌐 <a href={service.contactInfo.website} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                        {service.contactInfo.website}
                      </a></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our AI-powered micro SAAS services are designed to drive innovation, efficiency, and growth. 
              Let's discuss how we can help you achieve your business goals.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Lightning Fast</h3>
                <p className="text-gray-300 text-sm">Rapid deployment and implementation</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Proven Results</h3>
                <p className="text-gray-300 text-sm">Track record of successful implementations</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Expert Team</h3>
                <p className="text-gray-300 text-sm">Seasoned professionals with deep expertise</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                📞 Call: +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                ✉️ Email: kleber@ziontechgroup.com
              </a>
            </div>
            
            <div className="mb-6">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-2 text-blue-400 hover:text-blue-300 border border-blue-400 rounded-lg transition-all duration-300"
              >
                Schedule a Consultation →
              </Link>
            </div>
            
            <div className="text-sm text-gray-400">
              <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>🌐 Website: <a href="https://ziontechgroup.com" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">https://ziontechgroup.com</a></p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesShowcase;
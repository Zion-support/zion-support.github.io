import React from 'react';
import { Helmet } from 'react-helmet-async';
const ComprehensiveServicesShowcase2027: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>ComprehensiveServicesShowcase2027 | Zion Tech Group</title>
        <meta name="description" content="ComprehensiveServicesShowcase2027 - Revolutionary technology solutions" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm"></div>
          <div className="relative z-10 container mx-auto px-4 py-20">
            <div
              className="text-center"
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
                🚀 COMPREHENSIVE SERVICES • 2027
              </div>
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Comprehensive Services Showcase 2027
              </h1>
              <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
                Discover our complete range of revolutionary technology services designed to transform your business 
                and unlock unprecedented possibilities in the digital age.
              </p>
            </div>
          </div>
        </div>
        {/* Services Overview */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Service Categories</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              From AI solutions to space technology, we offer comprehensive services across all major technology domains
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.category}
                whileInView={{ opacity: 1, y: 0 }}
                className={`bg-gradient-to-br ${service.color}/30 backdrop-blur-sm rounded-xl p-8 border ${service.borderColor} hover:scale-105 transition-all duration-300`}
              >
                <div className="text-6xl mb-4 text-center">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-6 text-center">{service.category}</h3>
                <div className="space-y-3">
                  {service.services.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-sm opacity-90">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <button className={`bg-gradient-to-r ${service.color} px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Featured Solutions */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Solutions</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our most popular and innovative solutions that are transforming industries worldwide
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30"
            >
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-4xl">🌟</span>
                <div>
                  <h3 className="text-2xl font-bold">AI-Powered Business Automation</h3>
                  <p className="text-blue-100">Complete business transformation through AI</p>
                </div>
              </div>
              <p className="text-lg opacity-90 mb-6">
                Transform your business operations with our comprehensive AI automation solutions. 
                From customer service to supply chain management, we help you achieve unprecedented efficiency.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span>50% reduction in operational costs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span>99.9% automation accuracy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span>24/7 intelligent monitoring</span>
                </div>
              </div>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Get Started →
              </button>
            </div>

            <div
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-r from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30"
            >
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-4xl">🚀</span>
                <div>
                  <h3 className="text-2xl font-bold">Quantum Computing Solutions</h3>
                  <p className="text-emerald-100">Solve impossible problems with quantum power</p>
                </div>
              </div>
              <p className="text-lg opacity-90 mb-6">
                Harness the power of quantum computing to solve complex optimization problems, 
                accelerate drug discovery, and revolutionize cryptography.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span>Exponential speed improvements</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span>Unbreakable quantum encryption</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span>Advanced simulation capabilities</span>
                </div>
              </div>
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Solutions →
              </button>
            </div>
          </div>
        </div>
        {/* Pricing Tiers */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Service Tiers</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Choose the perfect service tier for your business needs and budget
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50"
            >
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <div className="text-4xl font-bold mb-6">$5,000<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span>Basic AI consultation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span>Technology assessment</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span>Monthly progress reports</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span>Email support</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-gray-600 to-gray-700 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Get Started
              </button>
            </div>

            <div
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  MOST POPULAR
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Professional</h3>
              <div className="text-4xl font-bold mb-6">$15,000<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span>Full AI implementation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span>Custom solution development</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span>Weekly progress meetings</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span>Priority support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span>Training and onboarding</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Get Started
              </button>
            </div>

            <div
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30"
            >
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <div className="text-4xl font-bold mb-6">$50,000<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span>Complete technology transformation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span>Dedicated team of experts</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span>24/7 support and monitoring</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span>Custom research and development</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span>White-label solutions</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
        {/* Call to Action */}
        <divsection className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Join thousands of companies that have already transformed their operations with our revolutionary technology services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                  Start Your Journey →
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 font-semibold text-lg">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </divsection>
      </div>
    </div>
  );
};


export default ComprehensiveServicesShowcase2027;

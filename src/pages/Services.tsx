import React from 'react';

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Discover our comprehensive range of AI, IT, and micro SAAS solutions designed to transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/innovative-services-showcase-2029"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View All Services
              </a>
              <a
                href="/comprehensive-pricing-guide-2029"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We offer cutting-edge solutions across multiple technology domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Solutions */}
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">AI Solutions</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                Cutting-edge artificial intelligence solutions that automate, optimize, and transform your business processes.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Machine Learning & Analytics
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Natural Language Processing
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Computer Vision
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Predictive Analytics
                </div>
              </div>
              <a
                href="/innovative-services-showcase-2029"
                className="block w-full text-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Learn More
              </a>
            </div>

            {/* IT Services */}
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">IT Services</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                Comprehensive IT infrastructure, cloud solutions, and digital transformation services.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Cloud Infrastructure
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  DevOps & Automation
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Cybersecurity
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Digital Transformation
                </div>
              </div>
              <a
                href="/innovative-services-showcase-2029"
                className="block w-full text-center px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
              >
                Learn More
              </a>
            </div>

            {/* Micro SAAS */}
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">Micro SAAS</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                Scalable software-as-a-service solutions designed for modern businesses and startups.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Custom Development
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  API-First Design
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Scalable Architecture
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Cloud Deployment
                </div>
              </div>
              <a
                href="/innovative-services-showcase-2029"
                className="block w-full text-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our innovative solutions can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started
            </a>
            <a
              href="/comprehensive-pricing-guide-2029"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}


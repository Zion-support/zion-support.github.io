import React from 'react'
import { Link } from 'react-router-dom'

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Business with AI
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Zion Tech Group delivers cutting-edge AI and technology solutions that drive innovation, 
            efficiency, and growth for modern businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link 
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI and technology solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI Services */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Services</h3>
              <p className="text-gray-600 mb-4">
                Advanced artificial intelligence solutions including machine learning, 
                natural language processing, and predictive analytics.
              </p>
              <div className="space-y-2">
                <Link 
                  to="/services/ai-services"
                  className="block text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                >
                  AI Services →
                </Link>
                <Link 
                  to="/services/advanced-ai"
                  className="block text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                >
                  Advanced AI Solutions →
                </Link>
              </div>
            </div>

            {/* Micro SaaS */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Micro SaaS</h3>
              <p className="text-gray-600 mb-4">
                Scalable software solutions designed to solve specific business problems 
                and grow with your business needs.
              </p>
              <div className="space-y-2">
                <Link 
                  to="/services/micro-saas"
                  className="block text-green-600 font-semibold hover:text-green-800 transition-colors"
                >
                  Micro SaaS →
                </Link>
                <Link 
                  to="/services/custom-solutions"
                  className="block text-green-600 font-semibold hover:text-green-800 transition-colors"
                >
                  Custom Solutions →
                </Link>
              </div>
            </div>

            {/* Enterprise Solutions */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise Solutions</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive technology solutions for large organizations, including 
                cloud migration, digital transformation, and enterprise AI.
              </p>
              <div className="space-y-2">
                <Link 
                  to="/services/enterprise"
                  className="block text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                >
                  Enterprise Solutions →
                </Link>
                <Link 
                  to="/services/consulting"
                  className="block text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                >
                  Consulting Services →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Measurable results that speak for themselves.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">10B+</div>
              <div className="text-gray-600">Data Points Processed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
              <div className="text-gray-600">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">5M+</div>
              <div className="text-gray-600">Operations Hours</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help transform your business with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us Today
            </Link>
            <Link 
              to="/about"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
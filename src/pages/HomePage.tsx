import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md: text-6xl font-bold mb-6">
            Transform Your Business with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              AI-Powered Solutions
            </span>
          </h1>
          <p className="text-xl md: text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Enterprise-grade AI, micro SaaS, and IT solutions that drive innovation, 
            efficiency, and growth for modern businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors
            >
              Get Started Today
            </Link>
            <Link 
              to="/solutions
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI Services */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl hover: shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🤖</h3>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Services</h3>
              <p className="text-gray-600 mb-6">
                Advanced artificial intelligence solutions including machine learning, 
                natural language processing, and predictive analytics.
              </p>
              <div className="space-y-2">
                <Link 
                  to="/services/ai-services
                  className="block text-blue-600 font-semibold hover: text-blue-800 transition-colors
                >
                  AI Services →
                </Link>
                <Link 
                  to="/services/advanced-ai
                  className="block text-blue-600 font-semibold hover: text-blue-800 transition-colors text-sm
                >
                  Advanced AI Solutions →
                </Link>
              </div>
            </div>

            {/* Micro SaaS */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-xl hover: shadow-lg transition-shadow">
              <div className="text-4xl mb-4">⚡</h3>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Micro SaaS</h3>
              <p className="text-gray-600 mb-6">
                Scalable software-as-a-service solutions that deliver immediate value 
                and grow with your business needs.
              </p>
              <div className="space-y-2">
                <Link 
                  to="/services/micro-saas
                  className="block text-green-600 font-semibold hover: text-green-800 transition-colors
                >
                  Micro SaaS →
                </Link>
                <Link 
                  to="/services/innovative-micro-saas
                  className="block text-green-600 font-semibold hover: text-green-800 transition-colors text-sm
                >
                  Innovative Micro SaaS →
                </Link>
              </div>
            </div>

            {/* IT Services */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-8 rounded-xl hover: shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🛠️</h3>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">IT Services</h3>
              <p className="text-gray-600 mb-6">
                Complete IT infrastructure management, cloud solutions, and 
                enterprise-grade security services.
              </p>
              <div className="space-y-2">
                <Link 
                  to="/services/it-services
                  className="block text-purple-600 font-semibold hover: text-purple-800 transition-colors
                >
                  IT Services →
                </Link>
                <Link 
                  to="/services/comprehensive-it
                  className="block text-purple-600 font-semibold hover: text-purple-800 transition-colors text-sm
                >
                  Comprehensive IT Solutions →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Solutions for Every Business</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored technology solutions that scale with your organization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover: shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive solutions for large organizations with complex infrastructure needs.
              </p>
              <Link 
                to="/solutions/enterprise
                className="text-blue-600 font-semibold hover: text-blue-800 transition-colors
              >
                Enterprise Solutions →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover: shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SMB</h3>
              <p className="text-gray-600 mb-6">
                Cost-effective solutions designed for small and medium businesses.
              </p>
              <Link 
                to="/solutions/smb
                className="text-blue-600 font-semibold hover: text-blue-800 transition-colors
              >
                SMB Solutions →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover: shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Startup</h3>
              <p className="text-gray-600 mb-6">
                Agile solutions to help startups scale quickly and efficiently.
              </p>
              <Link 
                to="/solutions/startup
                className="text-blue-600 font-semibold hover: text-blue-800 transition-colors
              >
                Startup Solutions →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver cutting-edge technology solutions with unmatched expertise and support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</h3>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Rapid deployment and implementation of solutions</h3>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</h3>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">Enterprise-grade security and 99.9% uptime</h3>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</h3>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Scalable</h3>
              <p className="text-gray-600">Solutions that grow with your business</h3>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</h3>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">Cutting-edge AI and technology solutions</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h3>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's discuss how our AI-powered solutions can drive your success';
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors
            >
              Start Your Project
            </Link>
            <Link 
              to="/about
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Component;
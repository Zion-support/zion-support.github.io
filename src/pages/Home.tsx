import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Zion Tech</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Leading AI-powered technology solutions for modern businesses. Transform your digital future with cutting-edge innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg shadow-2xl"
              >
                Explore Services
              </Link>
              <Link
                to="/contact"
                className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-xl hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-900 to-purple-900 p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">Micro SaaS</h3>
              <p className="text-gray-300 mb-6">
                End-to-end product development with billing, auth, and analytics
              </p>
              <Link to="/services/micro-saas" className="text-blue-400 hover:text-blue-300 font-semibold">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900 to-pink-900 p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Services</h3>
              <p className="text-gray-300 mb-6">
                LLM applications, RAG systems, and MLOps pipelines
              </p>
              <Link to="/services/ai-services" className="text-purple-400 hover:text-purple-300 font-semibold">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-green-900 to-blue-900 p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-2xl font-bold text-white mb-4">IT Services</h3>
              <p className="text-gray-300 mb-6">
                Cloud migration, DevOps, and security solutions
              </p>
              <Link to="/services/it-services" className="text-green-400 hover:text-green-300 font-semibold">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our technology solutions can accelerate your growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Zion Tech Group
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Leading provider of innovative technology solutions, AI-powered services, and digital transformation expertise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Explore Services
            </Link>
            <Link
              to="/innovative-services"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Innovative Services 2025
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to transform your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">AI Solutions</h3>
              <p className="text-gray-300 mb-4">
                Cutting-edge artificial intelligence and machine learning solutions
              </p>
              <Link to="/services" className="text-blue-400 hover:text-blue-300">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">Cloud & DevOps</h3>
              <p className="text-gray-300 mb-4">
                Scalable cloud infrastructure and automated development operations
              </p>
              <Link to="/services" className="text-blue-400 hover:text-blue-300">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">Cybersecurity</h3>
              <p className="text-gray-300 mb-4">
                Enterprise-grade security solutions and threat protection
              </p>
              <Link to="/services" className="text-blue-400 hover:text-blue-300">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Innovative Services Highlight */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Introducing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              {" "}Innovative Services 2025
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover our latest cutting-edge solutions including AI-powered platforms, quantum-ready infrastructure, and innovative micro SAAS services
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="text-lg font-semibold text-white mb-2">24+ New Services</h3>
              <p className="text-sm text-gray-300">Comprehensive portfolio of innovative solutions</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-lg font-semibold text-white mb-2">Competitive Pricing</h3>
              <p className="text-sm text-gray-300">Market-leading rates with proven ROI</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
              <div className="text-4xl mb-3">🤖</div>
              <h3 className="text-lg font-semibold text-white mb-2">AI-Powered</h3>
              <p className="text-sm text-gray-300">Advanced AI with 90%+ accuracy scores</p>
            </div>
          </div>
          <Link
            to="/innovative-services"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
          >
            Explore All Services
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our technology solutions can drive your success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Contact Us Today
            </Link>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              Call Now: +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
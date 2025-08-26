import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Pioneering AI & Quantum Technology Solutions</title>
        <meta name="description" content="Zion Tech Group delivers cutting-edge AI solutions, quantum technology, and innovative IT services. Transform your business with intelligent automation and next-generation cybersecurity." />
        <meta property="og:title" content="Zion Tech Group - Pioneering AI & Quantum Technology Solutions" />
        <meta property="og:description" content="Transform your business with cutting-edge AI solutions, quantum technology, and innovative IT services." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Helmet>

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
              Pioneering the future with cutting-edge AI solutions, quantum technology, and innovative IT services. 
              Transform your business with intelligent automation and next-generation cybersecurity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/zion-2026-innovative-services" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                Explore Zion 2026 Services
              </Link>
              <Link to="/contact" className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
                Get Started
              </Link>
            </div>
          </div>
        </section>

        {/* Zion 2026 Services Preview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Zion 2026 Innovative Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Discover our revolutionary micro SAAS, IT, and AI services designed for the future
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-white mb-3">AI & Automation</h3>
                <p className="text-gray-300 mb-4">Autonomous business operations with AI-driven decision making</p>
                <Link to="/zion-2026-innovative-services" className="text-cyan-400 hover:text-cyan-300">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold text-white mb-3">Cybersecurity & Quantum</h3>
                <p className="text-gray-300 mb-4">Next-generation security with quantum-resistant encryption</p>
                <Link to="/zion-2026-innovative-services" className="text-cyan-400 hover:text-cyan-300">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-xl font-semibold text-white mb-3">Healthcare & AI</h3>
                <p className="text-gray-300 mb-4">AI-powered healthcare analytics and diagnostics</p>
                <Link to="/zion-2026-innovative-services" className="text-cyan-400 hover:text-cyan-300">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-4xl mb-4">⛓️</div>
                <h3 className="text-xl font-semibold text-white mb-3">Blockchain & Supply Chain</h3>
                <p className="text-gray-300 mb-4">Transparent and secure supply chain solutions</p>
                <Link to="/zion-2026-innovative-services" className="text-cyan-400 hover:text-cyan-300">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-semibold text-white mb-3">Fintech & AI</h3>
                <p className="text-gray-300 mb-4">AI-driven risk management and financial solutions</p>
                <Link to="/zion-2026-innovative-services" className="text-cyan-400 hover:text-cyan-300">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold text-white mb-3">IoT & Edge Computing</h3>
                <p className="text-gray-300 mb-4">Optimized edge computing and IoT solutions</p>
                <Link to="/zion-2026-innovative-services" className="text-cyan-400 hover:text-cyan-300">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us to learn more about our innovative services and how we can help you succeed
            </p>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl mb-2">📱</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <p className="text-cyan-400">+1 302 464 0950</p>
                </div>
                <div>
                  <div className="text-2xl mb-2">✉️</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <p className="text-cyan-400">kleber@ziontechgroup.com</p>
                </div>
                <div>
                  <div className="text-2xl mb-2">📍</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                  <p className="text-cyan-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
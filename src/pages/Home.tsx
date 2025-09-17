import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI & Technology Solutions</title>
        <meta name="description" content="Leading provider of advanced AI, quantum computing, and revolutionary technology solutions for enterprises worldwide." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-white mb-6">
                Welcome to Zion Tech Group
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Pioneering the future with advanced AI, quantum computing, and revolutionary technology solutions that transform enterprises worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/services" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Explore Services
                </Link>
                <Link 
                  to="/about" 
                  className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Our Core Technologies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">
                  AI Innovation Hub
                </h3>
                <p className="text-gray-300 mb-4">
                  Cutting-edge artificial intelligence solutions that revolutionize business operations.
                </p>
                <Link to="/ai-innovation-hub-2025" className="text-blue-400 hover:text-blue-300">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Advanced AI Solutions
                </h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive AI platforms designed for enterprise-scale implementations.
                </p>
                <Link to="/advanced-ai-solutions-2025" className="text-blue-400 hover:text-blue-300">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Revolutionary Tech
                </h3>
                <p className="text-gray-300 mb-4">
                  Next-generation technologies that define the future of digital transformation.
                </p>
                <Link to="/revolutionary-tech-2025" className="text-blue-400 hover:text-blue-300">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of enterprises already leveraging our advanced technology solutions.
            </p>
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            >
              Get Started Today
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
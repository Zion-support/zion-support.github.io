import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Empowering businesses with cutting-edge technology solutions for the digital age
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              Explore Services
            </Link>
            <Link
              to="/contact"
              className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              Get Started
            </Link>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Zion Tech Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation First</h3>
              <p className="text-gray-300">
                Cutting-edge solutions that keep you ahead of the competition
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Enterprise Security</h3>
              <p className="text-gray-300">
                Robust security measures to protect your business assets
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
              <p className="text-gray-300">
                High-performance solutions that scale with your business
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition-colors">
              <h3 className="text-lg font-semibold mb-2">AI Solutions</h3>
              <p className="text-gray-300 text-sm mb-4">
                Intelligent automation and decision-making systems
              </p>
              <Link to="/services" className="text-cyan-400 hover:text-cyan-300 text-sm">
                Learn More →
              </Link>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition-colors">
              <h3 className="text-lg font-semibold mb-2">Cybersecurity</h3>
              <p className="text-gray-300 text-sm mb-4">
                Advanced threat protection and security consulting
              </p>
              <Link to="/services" className="text-cyan-400 hover:text-cyan-300 text-sm">
                Learn More →
              </Link>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition-colors">
              <h3 className="text-lg font-semibold mb-2">Cloud & DevOps</h3>
              <p className="text-gray-300 text-sm mb-4">
                Scalable infrastructure and deployment automation
              </p>
              <Link to="/services" className="text-cyan-400 hover:text-cyan-300 text-sm">
                Learn More →
              </Link>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition-colors">
              <h3 className="text-lg font-semibold mb-2">Digital Transformation</h3>
              <p className="text-gray-300 text-sm mb-4">
                Business modernization and process optimization
              </p>
              <Link to="/services" className="text-cyan-400 hover:text-cyan-300 text-sm">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can drive your success
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-4 rounded-lg font-semibold text-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
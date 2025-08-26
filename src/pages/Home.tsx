import React from 'react';
import { Link } from 'react-router-dom';
import EnhancedServicesShowcase from '../components/EnhancedServicesShowcase';

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
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              Get Started
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

      {/* Enhanced Services Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our cutting-edge micro SAAS, AI, and IT services that are transforming businesses worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-lg rounded-xl p-6 border border-slate-600/30 hover:border-blue-500/50 transition-all duration-300">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-3">TaskFlow Pro</h3>
              <p className="text-gray-300 mb-4">
                AI-powered task management and project collaboration platform with intelligent automation
              </p>
              <div className="text-sm text-blue-400 mb-2">Starting at $29/month</div>
              <Link to="/services" className="text-blue-400 hover:text-blue-300 text-sm">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-purple-800/50 to-pink-700/50 backdrop-blur-lg rounded-xl p-6 border border-purple-600/30 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-white mb-3">AI Vision Pro</h3>
              <p className="text-gray-300 mb-4">
                Advanced computer vision platform with real-time object detection and facial recognition
              </p>
              <div className="text-sm text-purple-400 mb-2">$0.05 per API call</div>
              <Link to="/services" className="text-purple-400 hover:text-purple-300 text-sm">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-blue-800/50 to-indigo-700/50 backdrop-blur-lg rounded-xl p-6 border border-blue-600/30 hover:border-blue-500/50 transition-all duration-300">
              <div className="text-3xl mb-4">☁️</div>
              <h3 className="text-xl font-semibold text-white mb-3">Cloud Migration</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive cloud migration services with strategy planning and implementation
              </p>
              <div className="text-sm text-blue-400 mb-2">$150/hour</div>
              <Link to="/services" className="text-blue-400 hover:text-blue-300 text-sm">
                Learn More →
              </Link>
            </div>
          </div>
          
          {/* Additional Innovative Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="bg-gradient-to-br from-green-800/50 to-emerald-700/50 backdrop-blur-lg rounded-xl p-6 border border-green-600/30 hover:border-green-500/50 transition-all duration-300">
              <div className="text-3xl mb-4">⚛️</div>
              <h3 className="text-xl font-semibold text-white mb-3">QuantumAI Analytics</h3>
              <p className="text-gray-300 mb-4">
                Revolutionary quantum computing-powered analytics platform for complex optimization problems
              </p>
              <div className="text-sm text-green-400 mb-2">Starting at $5,000/month</div>
              <Link to="/services" className="text-green-400 hover:text-green-300 text-sm">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-orange-800/50 to-red-700/50 backdrop-blur-lg rounded-xl p-6 border border-orange-600/30 hover:border-orange-500/50 transition-all duration-300">
              <div className="text-3xl mb-4">🔗</div>
              <h3 className="text-xl font-semibold text-white mb-3">DeFi Pro Suite</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive DeFi platform with yield farming, liquidity provision, and automated trading strategies
              </p>
              <div className="text-sm text-orange-400 mb-2">Starting at $1,200/month</div>
              <Link to="/services" className="text-orange-400 hover:text-orange-300 text-sm">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-teal-800/50 to-cyan-700/50 backdrop-blur-lg rounded-xl p-6 border border-teal-600/30 hover:border-teal-500/50 transition-all duration-300">
              <div className="text-3xl mb-4">🏙️</div>
              <h3 className="text-xl font-semibold text-white mb-3">Smart City IoT Platform</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive IoT platform for smart city management with real-time monitoring and analytics
              </p>
              <div className="text-sm text-teal-400 mb-2">Starting at $2,500/month</div>
              <Link to="/services" className="text-teal-400 hover:text-teal-300 text-sm">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver innovative solutions with proven results and exceptional support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold text-white mb-2">Proven Results</h3>
              <p className="text-gray-300 text-sm">
                Our solutions deliver measurable ROI and business transformation
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-lg font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-gray-300 text-sm">
                SOC 2 compliant with industry-leading security standards
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-lg font-semibold text-white mb-2">Innovation First</h3>
              <p className="text-gray-300 text-sm">
                Cutting-edge AI and technology solutions for modern businesses
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-lg font-semibold text-white mb-2">Premium Support</h3>
              <p className="text-gray-300 text-sm">
                24/7 support with dedicated account management
              </p>
            </div>
          </div>
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
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              Visit Our Website
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
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
            Leading provider of innovative technology solutions, AI-powered services, and digital transformation expertise. 
            Visit us at <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300 underline">ziontechgroup.com</a>
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
              <div className="text-sm text-green-400 mb-3">Starting at $2,500/month</div>
              <Link to="/services" className="text-blue-400 hover:text-blue-300">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">Cloud & DevOps</h3>
              <p className="text-gray-300 mb-4">
                Scalable cloud infrastructure and automated development operations
              </p>
              <div className="text-sm text-green-400 mb-3">Starting at $1,800/month</div>
              <Link to="/services" className="text-blue-400 hover:text-blue-300">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">Cybersecurity</h3>
              <p className="text-gray-300 mb-4">
                Enterprise-grade security solutions and threat protection
              </p>
              <div className="text-sm text-green-400 mb-3">Starting at $3,000/month</div>
              <Link to="/services" className="text-blue-400 hover:text-blue-300">
                Learn More →
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">Micro SAAS Services</h3>
              <p className="text-gray-300 mb-4">
                AI-powered content generation, smart invoice management, social media automation, and more
              </p>
              <div className="text-sm text-green-400 mb-3">Starting at $79/month</div>
              <Link to="/services" className="text-blue-400 hover:text-blue-300">
                Learn More →
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">Advanced IT Services</h3>
              <p className="text-gray-300 mb-4">
                Zero trust security, edge computing, 5G optimization, quantum-safe cryptography, and more
              </p>
              <div className="text-sm text-green-400 mb-3">Starting at $299/month</div>
              <Link to="/services" className="text-blue-400 hover:text-blue-300">
                Learn More →
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">Digital Transformation</h3>
              <p className="text-gray-300 mb-4">
                End-to-end digital transformation consulting and implementation
              </p>
              <div className="text-sm text-green-400 mb-3">Starting at $5,000/month</div>
              <Link to="/services" className="text-blue-400 hover:text-blue-300">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We deliver innovative solutions that drive real business results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation First</h3>
              <p className="text-gray-300">Cutting-edge AI and emerging technologies</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-3">Fast Delivery</h3>
              <p className="text-gray-300">Rapid implementation and deployment</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security and compliance</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-white mb-3">Proven Results</h3>
              <p className="text-gray-300">Measurable ROI and business impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Services Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              2025 Advanced Technology Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cutting-edge AI, quantum computing, metaverse development, and emerging technology solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-lg rounded-xl p-6 border border-blue-400/30">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-lg font-semibold text-white mb-3">Enterprise AI Solutions</h3>
              <p className="text-gray-300 text-sm mb-4">
                Advanced AI-powered analytics, business process automation, and customer experience platforms
              </p>
              <div className="text-sm text-green-400 mb-3">Starting at $5,000/month</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-xl p-6 border border-purple-400/30">
              <div className="text-3xl mb-4">⚛️</div>
              <h3 className="text-lg font-semibold text-white mb-3">Quantum Computing</h3>
              <p className="text-gray-300 text-sm mb-4">
                Quantum strategy development, algorithm optimization, and implementation planning
              </p>
              <div className="text-sm text-green-400 mb-3">Starting at $8,000/month</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-lg rounded-xl p-6 border border-green-400/30">
              <div className="text-3xl mb-4">🥽</div>
              <h3 className="text-lg font-semibold text-white mb-3">Metaverse Development</h3>
              <p className="text-gray-300 text-sm mb-4">
                VR/AR platforms, 3D asset creation, interactive experiences, and virtual commerce
              </p>
              <div className="text-sm text-green-400 mb-3">Starting at $10,000/month</div>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              to="/advanced-services-2025"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Explore Advanced Services 2025
            </Link>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
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
              Call: +1 302 464 0950
            </a>
          </div>
          <div className="text-sm text-gray-400 space-y-1">
            <p>📧 Email: <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a></p>
            <p>🌐 Website: <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300">ziontechgroup.com</a></p>
            <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
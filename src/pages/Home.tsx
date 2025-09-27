import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Leading the future of technology with AI, blockchain, and innovative solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="btn-primary px-8 py-4 text-lg font-semibold rounded-lg"
            >
              Explore Our Services
            </Link>
            <Link
              to="/contact"
              className="btn-secondary px-8 py-4 text-lg font-semibold rounded-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Core Technologies</h2>
          <p className="text-xl text-gray-300">Cutting-edge solutions for modern businesses</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300">
            <div className="text-6xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold text-white mb-4">AI Solutions</h3>
            <p className="text-gray-300 mb-6">
              Advanced artificial intelligence solutions that transform your business operations
              and drive innovation across all industries.
            </p>
            <Link to="/services" className="text-blue-400 hover:text-blue-300 font-semibold">
              Learn More →
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300">
            <div className="text-6xl mb-4">🔗</div>
            <h3 className="text-2xl font-bold text-white mb-4">Blockchain</h3>
            <p className="text-gray-300 mb-6">
              Secure, decentralized solutions powered by blockchain technology
              for transparent and efficient business processes.
            </p>
            <Link to="/services" className="text-blue-400 hover:text-blue-300 font-semibold">
              Explore →
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300">
            <div className="text-6xl mb-4">☁️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Cloud Services</h3>
            <p className="text-gray-300 mb-6">
              Scalable cloud infrastructure and deployment solutions
              that grow with your business needs.
            </p>
            <Link to="/services" className="text-blue-400 hover:text-blue-300 font-semibold">
              Discover →
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-xl text-gray-300">Numbers that speak for themselves</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-gray-300">Expert Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of companies that trust Zion Tech Group for their technology needs.
            Let's build the future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-primary px-8 py-4 text-lg font-semibold rounded-lg"
            >
              Start Your Project
            </Link>
            <Link
              to="/about"
              className="btn-secondary px-8 py-4 text-lg font-semibold rounded-lg"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
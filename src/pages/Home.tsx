import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Helmet>
        <title>Zion Tech Group - Revolutionary Technology Solutions</title>
        <meta name="description" content="Leading the way in AI, quantum computing, and next-generation innovations. Revolutionary technology solutions for the future." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Revolutionary technology solutions and insights for the future. 
            Leading the way in AI, quantum computing, and next-generation innovations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Explore Services
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-lg transition-all duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Revolutionary <span className="gradient-text">Technologies</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-6xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Innovation</h3>
              <p className="text-gray-300">
                Cutting-edge artificial intelligence solutions that transform businesses and industries.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-6xl mb-4">⚛️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum Computing</h3>
              <p className="text-gray-300">
                Next-generation quantum computing technologies for unprecedented computational power.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-6xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold text-white mb-4">Neural Interfaces</h3>
              <p className="text-gray-300">
                Revolutionary brain-computer interfaces that bridge the gap between mind and machine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Our <span className="gradient-text">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">AI Solutions</h3>
              <p className="text-blue-100">Custom AI implementations for your business needs.</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Quantum Computing</h3>
              <p className="text-green-100">Quantum algorithms and computing solutions.</p>
            </div>
            <div className="bg-gradient-to-br from-pink-500 to-red-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Neural Networks</h3>
              <p className="text-pink-100">Advanced neural network architectures and training.</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Tech Consulting</h3>
              <p className="text-yellow-100">Strategic technology consulting and planning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join us in shaping the next generation of technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              to="/blog"
              className="border-2 border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900 font-semibold py-4 px-8 rounded-lg transition-all duration-200"
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
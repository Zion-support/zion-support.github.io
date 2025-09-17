import React from 'react';
import { Helmet } from 'react-helmet-async';

const NextGenInnovationHub2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <Helmet>
        <title>Next-Gen Innovation Hub 2026 | Zion Tech Group</title>
        <meta name="description" content="Explore the future of innovation with our Next-Gen Innovation Hub featuring cutting-edge technologies for 2026." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🧠 NEXT-GEN INNOVATION • JANUARY 2026
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Next-Gen Innovation Hub 2026
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover and explore the most revolutionary technologies shaping humanity's future
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Innovations
            </button>
            <button className="bg-white/20 text-white px-8 py-4 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>

        {/* Innovation Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-4">AI & Machine Learning</h3>
            <p className="text-gray-300 mb-6">
              Advanced artificial intelligence systems that will transform every industry
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
              Explore AI
            </button>
          </div>

          <div className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4">Quantum Computing</h3>
            <p className="text-gray-300 mb-6">
              Quantum computing breakthroughs that will solve impossible problems
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
              Explore Quantum
            </button>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
            <div className="text-4xl mb-4">🧬</div>
            <h3 className="text-2xl font-bold mb-4">Biotechnology</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary biotech solutions that will enhance human capabilities
            </p>
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
              Explore BioTech
            </button>
          </div>
        </div>

        {/* Featured Innovations */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Innovations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold mb-4">Conscious AI Systems</h3>
              <p className="text-gray-300 mb-6">
                AI systems with genuine consciousness that can think, feel, and create alongside humans.
              </p>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                  Live Demo
                </span>
                <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4">Quantum Reality Manipulation</h3>
              <p className="text-gray-300 mb-6">
                Control digital environments through quantum-powered interfaces that respond to thought and gesture.
              </p>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-semibold">
                  Beta Testing
                </span>
                <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30">
          <h2 className="text-4xl font-bold mb-6">Ready to Shape the Future?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us in building the next generation of technological innovations that will transform the world.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Get Started
            </button>
            <button className="bg-white/20 text-white px-8 py-4 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold text-lg">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2026;
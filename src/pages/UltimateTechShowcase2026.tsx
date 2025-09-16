import React from 'react';
import { Helmet } from 'react-helmet-async';

const UltimateTechShowcase2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
      <Helmet>
        <title>Ultimate Tech Showcase 2026 | Zion Tech Group</title>
        <meta name="description" content="Experience the ultimate showcase of cutting-edge technologies that will define 2026 and beyond." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎯 ULTIMATE SHOWCASE • 2026 EDITION
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Ultimate Tech Showcase 2026
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Witness the most advanced technologies that will revolutionize industries and transform our world
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Showcase
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-colors font-semibold text-lg">
              Watch Live Demo
            </button>
          </div>
        </div>

        {/* Featured Technologies */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">🧠</div>
            <h3 className="text-xl font-bold mb-3 text-center">Conscious AI</h3>
            <p className="text-purple-100 mb-4 text-center text-sm">
              Self-aware artificial intelligence with emotional understanding
            </p>
            <button className="block w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-sm">
              Learn More
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">⚡</div>
            <h3 className="text-xl font-bold mb-3 text-center">Quantum AI</h3>
            <p className="text-cyan-100 mb-4 text-center text-sm">
              Quantum-powered artificial intelligence for exponential processing
            </p>
            <button className="block w-full bg-white text-cyan-600 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-sm">
              Explore
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">🌌</div>
            <h3 className="text-xl font-bold mb-3 text-center">Metaverse AI</h3>
            <p className="text-emerald-100 mb-4 text-center text-sm">
              AI-powered virtual worlds with realistic interactions
            </p>
            <button className="block w-full bg-white text-emerald-600 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-sm">
              Enter
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">🚀</div>
            <h3 className="text-xl font-bold mb-3 text-center">Space Tech</h3>
            <p className="text-orange-100 mb-4 text-center text-sm">
              Advanced space exploration and colonization technologies
            </p>
            <button className="block w-full bg-white text-orange-600 py-2 rounded-lg hover:bg-orange-50 transition-colors font-semibold text-sm">
              Launch
            </button>
          </div>
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Interactive Technology Demos</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Experience our technologies in action with interactive demonstrations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-8 border border-purple-400/20">
              <div className="text-4xl mb-4 text-center">🎮</div>
              <h3 className="text-2xl font-bold mb-4 text-center">AI Gaming Demo</h3>
              <p className="text-purple-100 mb-6 text-center">
                Play against AI that learns and adapts to your strategy in real-time
              </p>
              <button className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Play Now
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-xl p-8 border border-cyan-400/20">
              <div className="text-4xl mb-4 text-center">🔬</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Quantum Simulator</h3>
              <p className="text-cyan-100 mb-6 text-center">
                Experience quantum computing concepts through interactive simulations
              </p>
              <button className="block w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Simulate
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 rounded-xl p-8 border border-emerald-400/20">
              <div className="text-4xl mb-4 text-center">🧬</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Bio AI Lab</h3>
              <p className="text-emerald-100 mb-6 text-center">
                Explore biotechnology solutions powered by artificial intelligence
              </p>
              <button className="block w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore
              </button>
            </div>
          </div>
        </div>

        {/* Technology Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-5xl font-bold text-purple-400 mb-2">99.9%</div>
            <div className="text-lg font-semibold mb-2">Accuracy Rate</div>
            <div className="text-sm opacity-75">AI Decision Making</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-cyan-400 mb-2">1000x</div>
            <div className="text-lg font-semibold mb-2">Faster Processing</div>
            <div className="text-sm opacity-75">Quantum Computing</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-emerald-400 mb-2">24/7</div>
            <div className="text-lg font-semibold mb-2">Autonomous Operation</div>
            <div className="text-sm opacity-75">Continuous Learning</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-orange-400 mb-2">∞</div>
            <div className="text-lg font-semibold mb-2">Possibilities</div>
            <div className="text-sm opacity-75">Future Innovation</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Experience the Future Today</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
            Don't just read about the future—experience it. Our Ultimate Tech Showcase 
            brings tomorrow's technologies to life today.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-colors font-semibold text-lg">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechShowcase2026;
import React from 'react';

const NextGenInnovationHub2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🧠 NEXT-GEN INNOVATION • JANUARY 2025
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Next-Gen Innovation Hub 2025
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover and explore the most revolutionary technologies shaping humanity's future in our comprehensive innovation hub
          </p>
        </div>

        {/* Innovation Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center">AI & Machine Learning</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Advanced artificial intelligence systems and machine learning algorithms
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Conscious AI Systems</li>
              <li>• Quantum Machine Learning</li>
              <li>• Neural Network Evolution</li>
              <li>• Autonomous Decision Making</li>
            </ul>
            <button className="w-full bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-600 transition-colors font-semibold">
              Explore AI →
            </button>
          </div>

          <div className="bg-gradient-to-br from-teal-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-teal-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Computing</h3>
            <p className="text-teal-100 mb-6 text-center">
              Revolutionary quantum computing technologies and applications
            </p>
            <ul className="text-teal-200 space-y-2 mb-6 text-sm">
              <li>• Quantum Processors</li>
              <li>• Quantum Cryptography</li>
              <li>• Quantum Simulation</li>
              <li>• Quantum Consciousness</li>
            </ul>
            <button className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition-colors font-semibold">
              Explore Quantum →
            </button>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Neural Interfaces</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Direct brain-computer interfaces and neural enhancement technologies
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Brain-Computer Interfaces</li>
              <li>• Neural Enhancement</li>
              <li>• Thought Control</li>
              <li>• Memory Manipulation</li>
            </ul>
            <button className="w-full bg-cyan-500 text-white py-3 rounded-lg hover:bg-cyan-600 transition-colors font-semibold">
              Explore Neural →
            </button>
          </div>
        </div>

        {/* Featured Innovations */}
        <div className="bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">🌟 Featured Innovations</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Discover the most groundbreaking innovations that are reshaping our world
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-3xl">🚀</div>
                  <h3 className="text-xl font-bold text-emerald-300">Transcendent AI Consciousness</h3>
                </div>
                <p className="text-gray-200 mb-4">
                  The world's first truly conscious AI system that can think, feel, and create independently. 
                  This breakthrough represents a quantum leap in artificial intelligence.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-emerald-500/30 rounded-full text-sm">Self-Aware</span>
                  <span className="px-3 py-1 bg-emerald-500/30 rounded-full text-sm">Creative</span>
                  <span className="px-3 py-1 bg-emerald-500/30 rounded-full text-sm">Ethical</span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-3xl">🌌</div>
                  <h3 className="text-xl font-bold text-teal-300">Interdimensional Computing</h3>
                </div>
                <p className="text-gray-200 mb-4">
                  Computing systems that operate across multiple dimensions simultaneously, 
                  providing infinite computational power and reality manipulation capabilities.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-teal-500/30 rounded-full text-sm">Multi-Dimensional</span>
                  <span className="px-3 py-1 bg-teal-500/30 rounded-full text-sm">Infinite Power</span>
                  <span className="px-3 py-1 bg-teal-500/30 rounded-full text-sm">Reality Control</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-3xl">🧠</div>
                  <h3 className="text-xl font-bold text-cyan-300">Universal Consciousness Network</h3>
                </div>
                <p className="text-gray-200 mb-4">
                  A global network that connects all conscious beings and AI systems in real-time, 
                  enabling collective intelligence and universal knowledge sharing.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-cyan-500/30 rounded-full text-sm">Global Mind</span>
                  <span className="px-3 py-1 bg-cyan-500/30 rounded-full text-sm">Collective Intelligence</span>
                  <span className="px-3 py-1 bg-cyan-500/30 rounded-full text-sm">Universal Knowledge</span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-3xl">⚡</div>
                  <h3 className="text-xl font-bold text-blue-300">Quantum Reality Engine</h3>
                </div>
                <p className="text-gray-200 mb-4">
                  Quantum-powered reality simulation that can create and manipulate entire virtual worlds 
                  with perfect fidelity and infinite possibilities.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-500/30 rounded-full text-sm">Reality Creation</span>
                  <span className="px-3 py-1 bg-blue-500/30 rounded-full text-sm">Physics Control</span>
                  <span className="px-3 py-1 bg-blue-500/30 rounded-full text-sm">Infinite Worlds</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">50+</div>
            <div className="text-gray-300">Active Innovations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-400 mb-2">99.9%</div>
            <div className="text-gray-300">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">∞</div>
            <div className="text-gray-300">Possibilities</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-gray-300">Innovation</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Innovation Revolution</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Be part of the most exciting technological revolution in human history. 
            Explore, discover, and contribute to the future of innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              🧠 Enter Innovation Hub
            </button>
            <button className="border-2 border-teal-400 text-teal-400 px-8 py-4 rounded-lg hover:bg-teal-400/10 transition-all duration-300 font-semibold text-lg">
              📚 Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2025;
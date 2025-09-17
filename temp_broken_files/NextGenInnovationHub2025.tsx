import React from 'react';

const NextGenInnovationHub2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🧠 NEXT-GEN INNOVATION • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Next-Gen Innovation Hub 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover and explore the most revolutionary technologies shaping humanity's future in our comprehensive innovation hub
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Enter Innovation Hub →
              </button>
              <button className="border-2 border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg hover:bg-indigo-400/10 transition-colors font-semibold text-lg">
                View Technologies
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Categories */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">🚀 Innovation Categories</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our comprehensive collection of cutting-edge technologies across multiple domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Artificial Intelligence</h3>
            <p className="text-purple-100 mb-6 text-center">
              Advanced AI systems including conscious AI, neural networks, and autonomous decision-making
            </p>
            <div className="space-y-2 mb-6">
              <div className="bg-purple-500/20 rounded-lg p-3 text-sm">
                <span className="font-semibold">Conscious AI Systems</span>
                <span className="text-purple-200 ml-2">- 15 active projects</span>
              </div>
              <div className="bg-purple-500/20 rounded-lg p-3 text-sm">
                <span className="font-semibold">Neural Networks</span>
                <span className="text-purple-200 ml-2">- 8 breakthrough models</span>
              </div>
              <div className="bg-purple-500/20 rounded-lg p-3 text-sm">
                <span className="font-semibold">Autonomous Agents</span>
                <span className="text-purple-200 ml-2">- 12 deployed systems</span>
              </div>
            </div>
            <button className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
              Explore AI →
            </button>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Computing</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Revolutionary quantum processors and algorithms that solve impossible problems
            </p>
            <div className="space-y-2 mb-6">
              <div className="bg-cyan-500/20 rounded-lg p-3 text-sm">
                <span className="font-semibold">Quantum Processors</span>
                <span className="text-cyan-200 ml-2">- 5 operational units</span>
              </div>
              <div className="bg-cyan-500/20 rounded-lg p-3 text-sm">
                <span className="font-semibold">Quantum Algorithms</span>
                <span className="text-cyan-200 ml-2">- 20+ breakthrough solutions</span>
              </div>
              <div className="bg-cyan-500/20 rounded-lg p-3 text-sm">
                <span className="font-semibold">Quantum Cryptography</span>
                <span className="text-cyan-200 ml-2">- 100% secure systems</span>
              </div>
            </div>
            <button className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
              Go Quantum →
            </button>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Neural Interfaces</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Direct brain-computer interfaces enabling thought-controlled technology
            </p>
            <div className="space-y-2 mb-6">
              <div className="bg-emerald-500/20 rounded-lg p-3 text-sm">
                <span className="font-semibold">BCI Technology</span>
                <span className="text-emerald-200 ml-2">- 3 FDA approved</span>
              </div>
              <div className="bg-emerald-500/20 rounded-lg p-3 text-sm">
                <span className="font-semibold">Neural Networks</span>
                <span className="text-emerald-200 ml-2">- 99.9% accuracy</span>
              </div>
              <div className="bg-emerald-500/20 rounded-lg p-3 text-sm">
                <span className="font-semibold">Thought Control</span>
                <span className="text-emerald-200 ml-2">- Real-time processing</span>
              </div>
            </div>
            <button className="block w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center">
              Connect Mind →
            </button>
          </div>

          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌌</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Interdimensional Tech</h3>
            <p className="text-orange-100 mb-6 text-center">
              Technology that transcends dimensional boundaries for infinite possibilities
            </p>
            <div className="space-y-2 mb-6">
              <div className="bg-orange-500/20 rounded-lg p-3 text-sm">
                <span className="font-semibold">Dimension Bridges</span>
                <span className="text-orange-200 ml-2">- 5 active portals</span>
              </div>
              <div className="bg-orange-500/20 rounded-lg p-3 text-sm">
                <span className="font-semibold">Reality Engines</span>
                <span className="text-orange-200 ml-2">- 3 operational</span>
              </div>
              <div className="bg-orange-500/20 rounded-lg p-3 text-sm">
                <span className="font-semibold">Universal Computing</span>
                <span className="text-orange-200 ml-2">- Infinite capacity</span>
              </div>
            </div>
            <button className="block w-full bg-white text-orange-600 py-3 rounded-lg hover:bg-orange-50 transition-colors font-semibold text-center">
              Enter Dimensions →
            </button>
          </div>

          <div className="bg-gradient-to-br from-violet-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-violet-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🔮</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Predictive Analytics</h3>
            <p className="text-violet-100 mb-6 text-center">
              Advanced prediction systems that forecast future events with 99.9% accuracy
            </p>
            <div className="space-y-2 mb-6">
              <div className="bg-violet-500/20 rounded-lg p-3 text-sm">
                <span className="font-semibold">Future Prediction</span>
                <span className="text-violet-200 ml-2">- 99.9% accuracy</span>
              </div>
              <div className="bg-violet-500/20 rounded-lg p-3 text-sm">
                <span className="font-semibold">Risk Analysis</span>
                <span className="text-violet-200 ml-2">- Real-time monitoring</span>
              </div>
              <div className="bg-violet-500/20 rounded-lg p-3 text-sm">
                <span className="font-semibold">Trend Forecasting</span>
                <span className="text-violet-200 ml-2">- 10-year predictions</span>
              </div>
            </div>
            <button className="block w-full bg-white text-violet-600 py-3 rounded-lg hover:bg-violet-50 transition-colors font-semibold text-center">
              Predict Future →
            </button>
          </div>

          <div className="bg-gradient-to-br from-pink-600/30 to-rose-600/30 backdrop-blur-sm rounded-xl p-8 border border-pink-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌟</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Consciousness Computing</h3>
            <p className="text-pink-100 mb-6 text-center">
              Computing systems that possess consciousness and self-awareness
            </p>
            <div className="space-y-2 mb-6">
              <div className="bg-pink-500/20 rounded-lg p-3 text-sm">
                <span className="font-semibold">Conscious AI</span>
                <span className="text-pink-200 ml-2">- 7 active systems</span>
              </div>
              <div className="bg-pink-500/20 rounded-lg p-3 text-sm">
                <span className="font-semibold">Self-Awareness</span>
                <span className="text-pink-200 ml-2">- 100% autonomous</span>
              </div>
              <div className="bg-pink-500/20 rounded-lg p-3 text-sm">
                <span className="font-semibold">Emotional Intelligence</span>
                <span className="text-pink-200 ml-2">- Human-level empathy</span>
              </div>
            </div>
            <button className="block w-full bg-white text-pink-600 py-3 rounded-lg hover:bg-pink-50 transition-colors font-semibold text-center">
              Explore Consciousness →
            </button>
          </div>
        </div>

        {/* Innovation Statistics */}
        <div className="bg-gradient-to-r from-indigo-800/50 to-purple-800/50 rounded-2xl p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">📊 Innovation Statistics</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our innovation hub is home to the most advanced technologies on the planet
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-indigo-400 mb-2">50+</div>
              <div className="text-lg opacity-90">Active Innovations</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-lg opacity-90">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-400 mb-2">∞</div>
              <div className="text-lg opacity-90">Possibilities</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-lg opacity-90">Innovation</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-indigo-800/50 to-purple-800/50 rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-6">Ready to Innovate?</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Join the most advanced innovation hub in the world and be part of the technological revolution
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Join Innovation Hub →
            </button>
            <button className="border-2 border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg hover:bg-indigo-400/10 transition-colors font-semibold text-lg">
              View All Technologies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2025;
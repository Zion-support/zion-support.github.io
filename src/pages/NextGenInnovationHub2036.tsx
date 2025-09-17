import React from 'react';

const NextGenInnovationHub2036: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🧠 INNOVATION HUB • JANUARY 2036
          </div>
          <h1 className="text-6xl font-bold mb-6">🧠 Next-Gen Innovation Hub 2036</h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover and explore the most revolutionary technologies shaping humanity's future
          </p>
        </div>

        {/* Innovation Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🧠</div>
            <h3 className="text-xl font-bold mb-3 text-center">AI & Consciousness</h3>
            <p className="text-purple-200 text-sm mb-4 text-center">
              Self-aware AI systems and consciousness research
            </p>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">50+</div>
              <div className="text-blue-200 text-sm">Active Projects</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">⚡</div>
            <h3 className="text-xl font-bold mb-3 text-center">Quantum Computing</h3>
            <p className="text-cyan-200 text-sm mb-4 text-center">
              Quantum processors and quantum consciousness
            </p>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-1">25+</div>
              <div className="text-blue-200 text-sm">Breakthroughs</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🌌</div>
            <h3 className="text-xl font-bold mb-3 text-center">Interdimensional Tech</h3>
            <p className="text-emerald-200 text-sm mb-4 text-center">
              Technology that accesses parallel dimensions
            </p>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400 mb-1">15+</div>
              <div className="text-blue-200 text-sm">Active Research</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-600/30 to-rose-600/30 backdrop-blur-sm rounded-xl p-6 border border-pink-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🚀</div>
            <h3 className="text-xl font-bold mb-3 text-center">Space Technology</h3>
            <p className="text-pink-200 text-sm mb-4 text-center">
              Advanced propulsion and space exploration
            </p>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-400 mb-1">30+</div>
              <div className="text-blue-200 text-sm">Innovations</div>
            </div>
          </div>
        </div>

        {/* Innovation Statistics */}
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">📊 Innovation Statistics</h2>
            <p className="text-xl opacity-90">
              Unprecedented achievements in technological advancement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-lg font-semibold mb-1">Active Innovations</div>
              <div className="text-sm text-purple-300">Currently in development</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-lg font-semibold mb-1">Success Rate</div>
              <div className="text-sm text-cyan-300">Project completion</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">1000+</div>
              <div className="text-lg font-semibold mb-1">Researchers</div>
              <div className="text-sm text-emerald-300">Global team</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">∞</div>
              <div className="text-lg font-semibold mb-1">Possibilities</div>
              <div className="text-sm text-pink-300">Future potential</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join the Innovation Revolution?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Be part of the most exciting technological advancement in human history
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Innovations →
            </button>
            <button className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-lg">
              Submit Your Innovation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2036;
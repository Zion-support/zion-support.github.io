import React from 'react';

const NextGenInnovationHub2036: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 NEXT-GEN INNOVATION • JANUARY 2036
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Next-Gen Innovation Hub 2036
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            The world's most advanced innovation laboratory featuring cutting-edge research, 
            development, and deployment of revolutionary technologies that will shape the future
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Hub →
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-white transition-colors font-semibold text-lg">
              Join Research
            </button>
          </div>
        </div>

        {/* Innovation Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">🧠</div>
            <h3 className="text-xl font-bold mb-3 text-center">AI Research</h3>
            <p className="text-cyan-100 mb-4 text-center text-sm">
              Advanced artificial intelligence and machine learning research
            </p>
            <div className="text-center">
              <span className="text-cyan-300 text-sm font-semibold">50+ Active Projects</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">⚡</div>
            <h3 className="text-xl font-bold mb-3 text-center">Quantum Computing</h3>
            <p className="text-blue-100 mb-4 text-center text-sm">
              Quantum computing and quantum information processing
            </p>
            <div className="text-center">
              <span className="text-blue-300 text-sm font-semibold">30+ Breakthroughs</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">🌌</div>
            <h3 className="text-xl font-bold mb-3 text-center">Space Technology</h3>
            <p className="text-indigo-100 mb-4 text-center text-sm">
              Interstellar travel and space colonization technology
            </p>
            <div className="text-center">
              <span className="text-indigo-300 text-sm font-semibold">25+ Missions</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">🧬</div>
            <h3 className="text-xl font-bold mb-3 text-center">Biotechnology</h3>
            <p className="text-purple-100 mb-4 text-center text-sm">
              Genetic engineering and life extension research
            </p>
            <div className="text-center">
              <span className="text-purple-300 text-sm font-semibold">40+ Discoveries</span>
            </div>
          </div>
        </div>

        {/* Featured Research Projects */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">🔬 Featured Research Projects</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Cutting-edge research projects that are pushing the boundaries of what's possible
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-green-500 text-white text-xs rounded-full">ACTIVE</span>
                <span className="text-sm opacity-80">Phase 3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Consciousness Transfer Technology</h3>
              <p className="text-cyan-100 mb-4">
                Revolutionary technology for transferring human consciousness between biological and artificial bodies.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-cyan-300 text-sm">85% Complete</span>
                <button className="text-cyan-300 hover:text-white font-semibold text-sm">
                  View Details →
                </button>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30">
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-yellow-500 text-white text-xs rounded-full">TESTING</span>
                <span className="text-sm opacity-80">Phase 2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Quantum Reality Engine</h3>
              <p className="text-blue-100 mb-4">
                Advanced quantum computing system capable of manipulating reality at the quantum level.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-blue-300 text-sm">60% Complete</span>
                <button className="text-blue-300 hover:text-white font-semibold text-sm">
                  View Details →
                </button>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30">
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-purple-500 text-white text-xs rounded-full">CONCEPT</span>
                <span className="text-sm opacity-80">Phase 1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Interdimensional Portal</h3>
              <p className="text-indigo-100 mb-4">
                Technology for creating stable portals between different dimensions and parallel universes.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-indigo-300 text-sm">25% Complete</span>
                <button className="text-indigo-300 hover:text-white font-semibold text-sm">
                  View Details →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Statistics */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">📊 Innovation Statistics</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our impact on technological advancement and innovation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-300 mb-2">500+</div>
              <div className="text-lg font-semibold mb-1">Research Projects</div>
              <div className="text-sm opacity-80">Active innovations</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-300 mb-2">1000+</div>
              <div className="text-lg font-semibold mb-1">Scientists</div>
              <div className="text-sm opacity-80">World-class researchers</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-indigo-300 mb-2">50+</div>
              <div className="text-lg font-semibold mb-1">Countries</div>
              <div className="text-sm opacity-80">Global collaboration</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-300 mb-2">∞</div>
              <div className="text-lg font-semibold mb-1">Possibilities</div>
              <div className="text-sm opacity-80">Unlimited potential</div>
            </div>
          </div>
        </div>

        {/* Research Facilities */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">🏢 Research Facilities</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              State-of-the-art facilities equipped with the most advanced technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
              <h3 className="text-2xl font-bold mb-4">🧠 AI Research Center</h3>
              <ul className="space-y-3 text-cyan-100">
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Quantum AI Processing Units</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Consciousness Simulation Labs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Neural Network Training Facilities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Ethical AI Development Labs</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30">
              <h3 className="text-2xl font-bold mb-4">⚡ Quantum Computing Lab</h3>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>1000-Qubit Quantum Processors</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Quantum Entanglement Chambers</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Reality Manipulation Test Beds</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Dimensional Computing Arrays</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-6">Join the Innovation Revolution</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Be part of the most advanced research and development community in the world
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Join Research Team
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-colors font-semibold text-lg">
              Visit Innovation Hub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2036;
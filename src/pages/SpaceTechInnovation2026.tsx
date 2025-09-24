import React from 'react';

const SpaceTechInnovation2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 SPACE TECH • 2026
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            Space Technology Innovation 2026
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Revolutionary space technologies that will enable humanity to explore the cosmos like never before.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-4">Fusion Propulsion</h3>
            <p className="text-gray-300 mb-6">
              Nuclear fusion engines that can reach Mars in just 30 days instead of 6 months.
            </p>
            <a href="/contact" className="inline-block bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300">
              Learn More
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-4xl mb-4">🌌</div>
            <h3 className="text-2xl font-bold text-white mb-4">Space Habitats</h3>
            <p className="text-gray-300 mb-6">
              Self-sustaining space habitats with artificial gravity and life support systems.
            </p>
            <a href="/contact" className="inline-block bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300">
              Learn More
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold text-white mb-4">Quantum Communication</h3>
            <p className="text-gray-300 mb-6">
              Instantaneous communication across vast distances using quantum entanglement.
            </p>
            <a href="/contact" className="inline-block bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300">
              Learn More
            </a>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Explore Space?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Space Journey
            </a>
            <a href="/pages/ComprehensiveServices2025" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Explore All Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceTechInnovation2026;
import React from 'react';

const QuantumComputingRevolution2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              ⚡ QUANTUM REVOLUTION • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Quantum Computing Revolution 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience the power of quantum computing that's solving impossible problems and unlocking new possibilities
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Start Quantum Journey →
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-900 transition-all duration-300 font-semibold text-lg">
                View Quantum Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quantum Features Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">⚡ Quantum Computing Capabilities</h2>
          <p className="text-xl opacity-90">Harness the power of quantum mechanics for unprecedented computing</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🔬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Supremacy</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Achieve computational advantages that classical computers cannot match
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Exponential speedup</li>
              <li>• Parallel processing</li>
              <li>• Quantum entanglement</li>
              <li>• Superposition states</li>
            </ul>
            <button className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
              Explore Supremacy →
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🔐</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Cryptography</h3>
            <p className="text-blue-100 mb-6 text-center">
              Unbreakable security through quantum key distribution and encryption
            </p>
            <ul className="text-blue-200 space-y-2 mb-6 text-sm">
              <li>• Quantum key distribution</li>
              <li>• Unhackable encryption</li>
              <li>• Quantum random numbers</li>
              <li>• Future-proof security</li>
            </ul>
            <button className="block w-full bg-white text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-center">
              Secure with Quantum →
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Molecular Simulation</h3>
            <p className="text-indigo-100 mb-6 text-center">
              Simulate complex molecular interactions for drug discovery and materials science
            </p>
            <ul className="text-indigo-200 space-y-2 mb-6 text-sm">
              <li>• Drug discovery</li>
              <li>• Materials design</li>
              <li>• Chemical reactions</li>
              <li>• Protein folding</li>
            </ul>
            <button className="block w-full bg-white text-indigo-600 py-3 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-center">
              Simulate Molecules →
            </button>
          </div>
        </div>
      </div>

      {/* Quantum Applications */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-br from-cyan-800/50 to-blue-800/50 backdrop-blur-sm rounded-2xl p-12 border border-cyan-400/30">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">🚀 Quantum Applications</h2>
            <p className="text-xl opacity-90">Real-world applications powered by quantum computing</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Financial Optimization</h3>
              <div className="space-y-4">
                <div className="bg-black/30 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">📈 Portfolio Optimization</h4>
                  <p className="text-sm opacity-80">Quantum algorithms for optimal investment strategies</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">💰 Risk Analysis</h4>
                  <p className="text-sm opacity-80">Advanced risk modeling with quantum computing</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">⚡ High-Frequency Trading</h4>
                  <p className="text-sm opacity-80">Ultra-fast trading algorithms</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Scientific Research</h3>
              <div className="space-y-4">
                <div className="bg-black/30 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">🔬 Climate Modeling</h4>
                  <p className="text-sm opacity-80">Complex climate simulations and predictions</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">🧪 Drug Discovery</h4>
                  <p className="text-sm opacity-80">Accelerated pharmaceutical research</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">🌌 Space Exploration</h4>
                  <p className="text-sm opacity-80">Advanced space mission planning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quantum Performance Metrics */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">📊 Quantum Performance</h2>
          <p className="text-xl opacity-90">See the incredible performance improvements</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">10^15</div>
            <div className="text-lg font-semibold mb-2">Speed Increase</div>
            <div className="text-sm opacity-80">Times faster than classical computers</div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
            <div className="text-lg font-semibold mb-2">Accuracy Rate</div>
            <div className="text-sm opacity-80">Quantum error correction</div>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30 text-center">
            <div className="text-4xl font-bold text-indigo-400 mb-2">∞</div>
            <div className="text-lg font-semibold mb-2">Scalability</div>
            <div className="text-sm opacity-80">Unlimited processing power</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">0</div>
            <div className="text-lg font-semibold mb-2">Energy Waste</div>
            <div className="text-sm opacity-80">Perfect efficiency</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready for Quantum Computing?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join the quantum revolution and unlock unlimited computational power
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Quantum Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumComputingRevolution2025;
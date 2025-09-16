import React from 'react';

const QuantumComputingBreakthrough2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            ⚡ QUANTUM COMPUTING BREAKTHROUGH 2025
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            The Quantum Revolution Begins
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the power of quantum computing that's solving problems previously thought impossible, 
            revolutionizing cryptography, optimization, and scientific discovery.
          </p>
        </div>

        {/* Quantum Capabilities */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30">
            <div className="text-6xl mb-6">⚡</div>
            <h3 className="text-3xl font-bold mb-4">Quantum Supremacy Achieved</h3>
            <p className="text-lg opacity-90 mb-6">
              Our quantum computers have achieved computational supremacy, solving problems in minutes that would take classical computers millennia.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>1000+ Qubit Systems</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>99.9% Quantum Fidelity</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Error-Corrected Operations</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Room Temperature Operation</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/30 to-indigo-600/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
            <div className="text-6xl mb-6">🔬</div>
            <h3 className="text-3xl font-bold mb-4">Scientific Breakthroughs</h3>
            <p className="text-lg opacity-90 mb-6">
              Quantum computing is accelerating scientific discovery across multiple fields, from drug development to climate modeling.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>Molecular Simulation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>Climate Modeling</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>Material Science</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>Cryptographic Security</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quantum Applications Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30">
            <div className="text-4xl mb-4 text-center">🔐</div>
            <h4 className="text-xl font-bold mb-3 text-center">Quantum Cryptography</h4>
            <p className="text-indigo-100 text-center text-sm mb-4">
              Unbreakable encryption using quantum principles for ultimate data security.
            </p>
            <ul className="text-indigo-200 text-xs space-y-1">
              <li>• Quantum Key Distribution</li>
              <li>• Post-Quantum Algorithms</li>
              <li>• Quantum Random Number Generation</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
            <div className="text-4xl mb-4 text-center">🎯</div>
            <h4 className="text-xl font-bold mb-3 text-center">Optimization Problems</h4>
            <p className="text-purple-100 text-center text-sm mb-4">
              Solving complex optimization challenges in logistics, finance, and resource allocation.
            </p>
            <ul className="text-purple-200 text-xs space-y-1">
              <li>• Supply Chain Optimization</li>
              <li>• Portfolio Management</li>
              <li>• Route Planning</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
            <div className="text-4xl mb-4 text-center">🧬</div>
            <h4 className="text-xl font-bold mb-3 text-center">Drug Discovery</h4>
            <p className="text-cyan-100 text-center text-sm mb-4">
              Accelerating pharmaceutical research through quantum molecular simulation.
            </p>
            <ul className="text-cyan-200 text-xs space-y-1">
              <li>• Protein Folding Simulation</li>
              <li>• Drug Interaction Modeling</li>
              <li>• Molecular Design</li>
            </ul>
          </div>
        </div>

        {/* Performance Comparison */}
        <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Quantum vs Classical Computing</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Classical Computing</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Factorization (2048-bit)</span>
                  <span className="text-red-400">300 trillion years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Database Search (1M records)</span>
                  <span className="text-red-400">500,000 operations</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Optimization (1000 variables)</span>
                  <span className="text-red-400">Exponential time</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Quantum Computing</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Factorization (2048-bit)</span>
                  <span className="text-green-400">8 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Database Search (1M records)</span>
                  <span className="text-green-400">1,000 operations</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Optimization (1000 variables)</span>
                  <span className="text-green-400">Polynomial time</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quantum Technologies */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-400 mb-2">1000+</div>
            <div className="text-lg opacity-90">Qubits</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-lg opacity-90">Fidelity</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-indigo-400 mb-2">10^15</div>
            <div className="text-lg opacity-90">Speed Increase</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-lg opacity-90">Availability</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Experience the Quantum Future</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Be among the first to harness the power of quantum computing and solve problems that were previously impossible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Access Quantum Cloud
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumComputingBreakthrough2025;
import React from 'react';

const QuantumComputingRevolution2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
            ⚡ QUANTUM BREAKTHROUGH • JANUARY 2025
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Quantum Computing Revolution 2025
          </h1>
          <p className="text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Experience exponential computing power with quantum technology that solves 
            impossible problems and unlocks new frontiers of innovation
          </p>
        </div>

        {/* Quantum Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-cyan-200">
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-cyan-800">Exponential Speed</h3>
            <p className="text-gray-600 mb-6 text-center">
              Quantum computers process information exponentially faster than classical computers, 
              solving complex problems in seconds that would take years
            </p>
            <ul className="text-cyan-700 space-y-2 text-sm">
              <li>• Quantum superposition</li>
              <li>• Parallel processing</li>
              <li>• Exponential speedup</li>
              <li>• Complex optimization</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-200">
            <div className="text-6xl mb-4 text-center">🔐</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-blue-800">Quantum Cryptography</h3>
            <p className="text-gray-600 mb-6 text-center">
              Unbreakable security through quantum key distribution and quantum-resistant encryption methods
            </p>
            <ul className="text-blue-700 space-y-2 text-sm">
              <li>• Quantum key distribution</li>
              <li>• Unbreakable encryption</li>
              <li>• Quantum-resistant algorithms</li>
              <li>• Secure communications</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-indigo-200">
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-indigo-800">Molecular Simulation</h3>
            <p className="text-gray-600 mb-6 text-center">
              Simulate complex molecular interactions and chemical reactions with unprecedented accuracy
            </p>
            <ul className="text-indigo-700 space-y-2 text-sm">
              <li>• Drug discovery</li>
              <li>• Material science</li>
              <li>• Chemical optimization</li>
              <li>• Molecular modeling</li>
            </ul>
          </div>
        </div>

        {/* Quantum Applications Showcase */}
        <div className="bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900 rounded-3xl p-12 mb-16 text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">🌟 Quantum Applications</h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              Discover how quantum computing is revolutionizing industries and solving previously impossible problems
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">💊 Drug Discovery</h3>
              <p className="text-cyan-100 mb-6">
                Accelerate pharmaceutical research by simulating molecular interactions and drug effectiveness
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  <span>Molecular interaction simulation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  <span>Drug effectiveness prediction</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  <span>Side effect analysis</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">🏦 Financial Modeling</h3>
              <p className="text-blue-100 mb-6">
                Optimize investment portfolios and risk management with quantum-powered financial algorithms
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>Portfolio optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>Risk assessment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>Market prediction</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quantum Technology Stack */}
        <div className="bg-white rounded-3xl p-12 shadow-xl mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">🔧 Quantum Technology Stack</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our comprehensive quantum computing platform provides everything you need to harness quantum power
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6">Q</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Quantum Hardware</h3>
              <p className="text-gray-600 mb-4">
                State-of-the-art quantum processors with high fidelity and low error rates
              </p>
              <ul className="text-left text-gray-600 space-y-1 text-sm">
                <li>• Superconducting qubits</li>
                <li>• Ion trap systems</li>
                <li>• Photonic quantum</li>
                <li>• Error correction</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6">S</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Quantum Software</h3>
              <p className="text-gray-600 mb-4">
                Advanced quantum programming languages and development tools
              </p>
              <ul className="text-left text-gray-600 space-y-1 text-sm">
                <li>• Qiskit framework</li>
                <li>• Cirq platform</li>
                <li>• Quantum algorithms</li>
                <li>• Debugging tools</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6">A</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Quantum Algorithms</h3>
              <p className="text-gray-600 mb-4">
                Optimized quantum algorithms for specific problem domains
              </p>
              <ul className="text-left text-gray-600 space-y-1 text-sm">
                <li>• Shor's algorithm</li>
                <li>• Grover's search</li>
                <li>• VQE optimization</li>
                <li>• QAOA problems</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6">C</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Quantum Cloud</h3>
              <p className="text-gray-600 mb-4">
                Cloud-based quantum computing access and management
              </p>
              <ul className="text-left text-gray-600 space-y-1 text-sm">
                <li>• Cloud access</li>
                <li>• Resource management</li>
                <li>• Job scheduling</li>
                <li>• Result analysis</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quantum Performance Metrics */}
        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">📊 Quantum Performance</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Experience unprecedented computing power with our quantum solutions
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-600 mb-2">10^15</div>
              <div className="text-gray-600 font-semibold">Operations/Second</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600 font-semibold">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-indigo-600 mb-2">1000x</div>
              <div className="text-gray-600 font-semibold">Speed Increase</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">∞</div>
              <div className="text-gray-600 font-semibold">Possibilities</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Harness Quantum Power?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join the quantum revolution and unlock exponential computing power for your most complex challenges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Start Quantum Journey
            </a>
            <a 
              href="/pages/InnovativeServicesShowcase2025" 
              className="border-2 border-cyan-600 text-cyan-600 px-8 py-4 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-lg"
            >
              Explore All Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumComputingRevolution2025;
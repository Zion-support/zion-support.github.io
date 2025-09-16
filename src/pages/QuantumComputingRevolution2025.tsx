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
              ⚡ QUANTUM BREAKTHROUGH • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Quantum Computing Revolution 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience exponential computational power with our breakthrough quantum computing technology 
              that solves impossible problems and unlocks new dimensions of possibility.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Enter Quantum Realm →
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-900 transition-all duration-300 font-semibold text-lg">
                Explore Capabilities
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quantum Features */}
      <div className="py-20 bg-gradient-to-b from-cyan-900/50 to-blue-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Revolutionary Quantum Capabilities</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Harness the power of quantum mechanics to achieve computational feats previously thought impossible
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-4 text-center">⚡</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Exponential Speed</h3>
              <p className="text-cyan-100 mb-6 text-center">
                Process complex calculations 10^15 times faster than classical computers using quantum superposition
              </p>
              <ul className="text-cyan-200 space-y-2 text-sm">
                <li>• Quantum parallel processing</li>
                <li>• Instant optimization</li>
                <li>• Real-time simulation</li>
                <li>• Massive data processing</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-4 text-center">🔐</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Quantum Cryptography</h3>
              <p className="text-blue-100 mb-6 text-center">
                Unbreakable encryption using quantum key distribution and quantum entanglement principles
              </p>
              <ul className="text-blue-200 space-y-2 text-sm">
                <li>• Quantum key distribution</li>
                <li>• Entanglement-based security</li>
                <li>• Hack-proof communication</li>
                <li>• Future-proof encryption</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-4 text-center">🧬</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Molecular Simulation</h3>
              <p className="text-indigo-100 mb-6 text-center">
                Simulate molecular interactions at quantum level for drug discovery and materials science
              </p>
              <ul className="text-indigo-200 space-y-2 text-sm">
                <li>• Protein folding simulation</li>
                <li>• Drug discovery acceleration</li>
                <li>• Material design</li>
                <li>• Chemical reaction modeling</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Quantum Architecture */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Advanced Quantum Architecture</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Built on cutting-edge quantum hardware with error correction and fault tolerance
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Quantum Processing Units</h3>
              <p className="text-lg opacity-90 mb-6">
                Our quantum computers feature advanced superconducting qubits with 99.9% fidelity, 
                enabling complex quantum algorithms and error correction protocols.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span>1000+ logical qubits with error correction</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span>99.9% gate fidelity</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
                  <span>Quantum volume of 2^64</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span>Coherence time > 100ms</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-2xl p-8 border border-cyan-400/30">
              <h4 className="text-2xl font-bold mb-4 text-center">Quantum Performance</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Computational Speed</span>
                    <span>10^15x</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Error Rate</span>
                    <span>0.1%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-3 rounded-full" style={{width: '99.9%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Quantum Volume</span>
                    <span>2^64</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Coherence Time</span>
                    <span>100ms+</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Applications */}
      <div className="py-20 bg-gradient-to-b from-blue-900/50 to-indigo-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Revolutionary Applications</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Transform industries with quantum computing power
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">💊</div>
              <h3 className="text-xl font-bold mb-3 text-center">Drug Discovery</h3>
              <p className="text-cyan-100 text-sm text-center">
                Accelerate pharmaceutical research with quantum molecular simulation
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-xl p-6 border border-blue-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">🔒</div>
              <h3 className="text-xl font-bold mb-3 text-center">Cybersecurity</h3>
              <p className="text-blue-100 text-sm text-center">
                Unbreakable quantum encryption for ultimate data protection
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-xl p-6 border border-indigo-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">🌐</div>
              <h3 className="text-xl font-bold mb-3 text-center">Optimization</h3>
              <p className="text-indigo-100 text-sm text-center">
                Solve complex optimization problems in logistics and finance
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">🤖</div>
              <h3 className="text-xl font-bold mb-3 text-center">AI Enhancement</h3>
              <p className="text-purple-100 text-sm text-center">
                Supercharge machine learning with quantum algorithms
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quantum Algorithms */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Advanced Quantum Algorithms</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Leverage powerful quantum algorithms for specific problem domains
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-xl p-6 border border-cyan-400/30">
              <h3 className="text-xl font-bold mb-3 text-center">Shor's Algorithm</h3>
              <p className="text-cyan-100 text-sm text-center mb-4">
                Factor large integers exponentially faster than classical computers
              </p>
              <div className="text-xs text-cyan-200">
                • Cryptography breaking<br/>
                • Security analysis<br/>
                • Prime factorization
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-xl p-6 border border-blue-400/30">
              <h3 className="text-xl font-bold mb-3 text-center">Grover's Algorithm</h3>
              <p className="text-blue-100 text-sm text-center mb-4">
                Search unsorted databases with quadratic speedup
              </p>
              <div className="text-xs text-blue-200">
                • Database search<br/>
                • Optimization problems<br/>
                • Pattern matching
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-xl p-6 border border-indigo-400/30">
              <h3 className="text-xl font-bold mb-3 text-center">VQE Algorithm</h3>
              <p className="text-indigo-100 text-sm text-center mb-4">
                Variational quantum eigensolver for quantum chemistry
              </p>
              <div className="text-xs text-indigo-200">
                • Molecular simulation<br/>
                • Drug discovery<br/>
                • Material science
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Quantum Computing?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the quantum revolution and unlock unlimited computational power
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Quantum Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-900 transition-all duration-300 font-semibold text-lg">
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumComputingRevolution2025;
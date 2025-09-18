import React, { useState } from 'react';

const QuantumComputingSolutions2026: React.FC = () => {
  const [selectedSolution, setSelectedSolution] = useState('overview');

  const solutions = [
    { id: 'overview', label: 'Overview', icon: '🌌' },
    { id: 'hardware', label: 'Hardware', icon: '⚡' },
    { id: 'algorithms', label: 'Algorithms', icon: '🧮' },
    { id: 'applications', label: 'Applications', icon: '🚀' },
    { id: 'security', label: 'Security', icon: '🔐' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            ⚡ QUANTUM COMPUTING • JANUARY 2026
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Quantum Computing Solutions 2026
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Revolutionary quantum computing technologies that solve impossible problems and unlock new possibilities
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Solutions
            </button>
            <button className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-400 hover:text-white transition-colors font-semibold text-lg">
              Request Demo
            </button>
          </div>
        </div>

        {/* Quantum Advantage Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-6 text-center border border-blue-400/30">
            <div className="text-3xl font-bold mb-2">1000x</div>
            <div className="text-blue-200">Speed Improvement</div>
          </div>
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 text-center border border-purple-400/30">
            <div className="text-3xl font-bold mb-2">99.9%</div>
            <div className="text-purple-200">Accuracy Rate</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 text-center border border-emerald-400/30">
            <div className="text-3xl font-bold mb-2">10^15</div>
            <div className="text-emerald-200">Operations/Second</div>
          </div>
          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-6 text-center border border-orange-400/30">
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-orange-200">Availability</div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          {solutions.map((solution) => (
            <button
              key={solution.id}
              onClick={() => setSelectedSolution(solution.id)}
              className={`px-6 py-3 mx-2 mb-4 rounded-lg font-semibold transition-all duration-300 ${
                selectedSolution === solution.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-white/10 text-blue-200 hover:bg-white/20'
              }`}
            >
              <span className="mr-2">{solution.icon}</span>
              {solution.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {selectedSolution === 'overview' && (
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30">
                <h3 className="text-3xl font-bold mb-6">What is Quantum Computing?</h3>
                <p className="text-blue-100 mb-6 text-lg">
                  Quantum computing harnesses the principles of quantum mechanics to process information in ways 
                  that classical computers cannot. By leveraging quantum bits (qubits) that can exist in multiple 
                  states simultaneously, quantum computers can solve complex problems exponentially faster.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🌊</span>
                    <div>
                      <h4 className="font-bold text-blue-200">Superposition</h4>
                      <p className="text-blue-100 text-sm">Qubits can exist in multiple states at once</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🔗</span>
                    <div>
                      <h4 className="font-bold text-blue-200">Entanglement</h4>
                      <p className="text-blue-100 text-sm">Qubits can be correlated across vast distances</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">⚡</span>
                    <div>
                      <h4 className="font-bold text-blue-200">Interference</h4>
                      <p className="text-blue-100 text-sm">Quantum states can interfere constructively or destructively</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
                <h3 className="text-3xl font-bold mb-6">Quantum Advantage</h3>
                <p className="text-purple-100 mb-6 text-lg">
                  Our quantum computing solutions provide exponential speedup for specific problem classes, 
                  enabling breakthroughs in optimization, simulation, and cryptography.
                </p>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-bold text-purple-200 mb-2">Optimization Problems</h4>
                    <p className="text-purple-100 text-sm">Solve complex logistics, scheduling, and resource allocation problems</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-bold text-purple-200 mb-2">Molecular Simulation</h4>
                    <p className="text-purple-100 text-sm">Accelerate drug discovery and materials science research</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-bold text-purple-200 mb-2">Cryptography</h4>
                    <p className="text-purple-100 text-sm">Develop quantum-resistant encryption and secure communications</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold mb-6">Why Choose Our Quantum Solutions?</h2>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div>
                  <div className="text-4xl mb-4">🏆</div>
                  <h3 className="text-xl font-bold mb-3">Industry Leading</h3>
                  <p className="text-blue-100">Cutting-edge quantum hardware and software solutions</p>
                </div>
                <div>
                  <div className="text-4xl mb-4">🔬</div>
                  <h3 className="text-xl font-bold mb-3">Research Backed</h3>
                  <p className="text-blue-100">Built on decades of quantum research and development</p>
                </div>
                <div>
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-bold mb-3">Future Ready</h3>
                  <p className="text-blue-100">Scalable solutions that grow with your needs</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedSolution === 'hardware' && (
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
                <h3 className="text-2xl font-bold mb-4">Quantum Processors</h3>
                <p className="text-cyan-100 mb-6">
                  High-fidelity quantum processors with advanced error correction and scalability
                </p>
                <ul className="text-cyan-200 space-y-2">
                  <li>• 1000+ logical qubits</li>
                  <li>• 99.9% gate fidelity</li>
                  <li>• Advanced error correction</li>
                  <li>• Modular architecture</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
                <h3 className="text-2xl font-bold mb-4">Cryogenic Systems</h3>
                <p className="text-emerald-100 mb-6">
                  Ultra-low temperature systems for optimal quantum state preservation
                </p>
                <ul className="text-emerald-200 space-y-2">
                  <li>• Millikelvin temperatures</li>
                  <li>• Advanced cooling technology</li>
                  <li>• Vibration isolation</li>
                  <li>• Magnetic field shielding</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
                <h3 className="text-2xl font-bold mb-4">Control Systems</h3>
                <p className="text-purple-100 mb-6">
                  Precision control electronics for quantum gate operations
                </p>
                <ul className="text-purple-200 space-y-2">
                  <li>• Nanosecond timing precision</li>
                  <li>• Low-noise amplifiers</li>
                  <li>• Digital signal processing</li>
                  <li>• Real-time feedback</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30">
                <h3 className="text-2xl font-bold mb-4">Quantum Networks</h3>
                <p className="text-orange-100 mb-6">
                  Distributed quantum computing and communication networks
                </p>
                <ul className="text-orange-200 space-y-2">
                  <li>• Quantum entanglement distribution</li>
                  <li>• Quantum teleportation</li>
                  <li>• Secure quantum communication</li>
                  <li>• Quantum internet protocols</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {selectedSolution === 'algorithms' && (
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30">
                <h3 className="text-2xl font-bold mb-4">Shor's Algorithm</h3>
                <p className="text-indigo-100 mb-6">
                  Quantum algorithm for integer factorization with exponential speedup
                </p>
                <div className="space-y-3">
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-bold text-indigo-200">Applications</h4>
                    <ul className="text-indigo-100 text-sm mt-2 space-y-1">
                      <li>• Cryptography breaking</li>
                      <li>• Number theory research</li>
                      <li>• Security analysis</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30">
                <h3 className="text-2xl font-bold mb-4">Grover's Algorithm</h3>
                <p className="text-blue-100 mb-6">
                  Quantum search algorithm with quadratic speedup for unstructured search
                </p>
                <div className="space-y-3">
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-bold text-blue-200">Applications</h4>
                    <ul className="text-blue-100 text-sm mt-2 space-y-1">
                      <li>• Database search</li>
                      <li>• Optimization problems</li>
                      <li>• Machine learning</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-600/30 to-emerald-600/30 backdrop-blur-sm rounded-xl p-8 border border-green-400/30">
                <h3 className="text-2xl font-bold mb-4">VQE Algorithm</h3>
                <p className="text-green-100 mb-6">
                  Variational Quantum Eigensolver for quantum chemistry and optimization
                </p>
                <div className="space-y-3">
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-bold text-green-200">Applications</h4>
                    <ul className="text-green-100 text-sm mt-2 space-y-1">
                      <li>• Molecular simulation</li>
                      <li>• Drug discovery</li>
                      <li>• Materials science</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-pink-400/30">
                <h3 className="text-2xl font-bold mb-4">QAOA Algorithm</h3>
                <p className="text-pink-100 mb-6">
                  Quantum Approximate Optimization Algorithm for combinatorial optimization
                </p>
                <div className="space-y-3">
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-bold text-pink-200">Applications</h4>
                    <ul className="text-pink-100 text-sm mt-2 space-y-1">
                      <li>• Traveling salesman</li>
                      <li>• Portfolio optimization</li>
                      <li>• Resource allocation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedSolution === 'applications' && (
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30">
                <div className="text-4xl mb-4">💊</div>
                <h3 className="text-xl font-bold mb-4">Drug Discovery</h3>
                <p className="text-blue-100 mb-4">
                  Accelerate pharmaceutical research with quantum molecular simulation
                </p>
                <ul className="text-blue-200 space-y-1 text-sm">
                  <li>• Protein folding prediction</li>
                  <li>• Drug-target interaction</li>
                  <li>• Molecular optimization</li>
                  <li>• Side effect prediction</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-600/30 to-emerald-600/30 backdrop-blur-sm rounded-xl p-8 border border-green-400/30">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-bold mb-4">Climate Modeling</h3>
                <p className="text-green-100 mb-4">
                  Advanced climate simulation and environmental impact analysis
                </p>
                <ul className="text-green-200 space-y-1 text-sm">
                  <li>• Weather prediction</li>
                  <li>• Climate change modeling</li>
                  <li>• Carbon capture optimization</li>
                  <li>• Renewable energy planning</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="text-xl font-bold mb-4">Financial Services</h3>
                <p className="text-purple-100 mb-4">
                  Quantum algorithms for risk analysis and portfolio optimization
                </p>
                <ul className="text-purple-200 space-y-1 text-sm">
                  <li>• Risk assessment</li>
                  <li>• Portfolio optimization</li>
                  <li>• Fraud detection</li>
                  <li>• Algorithmic trading</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30">
                <div className="text-4xl mb-4">🚚</div>
                <h3 className="text-xl font-bold mb-4">Logistics</h3>
                <p className="text-orange-100 mb-4">
                  Optimize supply chains and transportation networks
                </p>
                <ul className="text-orange-200 space-y-1 text-sm">
                  <li>• Route optimization</li>
                  <li>• Inventory management</li>
                  <li>• Resource allocation</li>
                  <li>• Scheduling optimization</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-teal-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-teal-400/30">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-xl font-bold mb-4">Materials Science</h3>
                <p className="text-teal-100 mb-4">
                  Discover new materials with quantum simulation
                </p>
                <ul className="text-teal-200 space-y-1 text-sm">
                  <li>• Superconductor design</li>
                  <li>• Battery optimization</li>
                  <li>• Catalysis research</li>
                  <li>• Nanomaterial properties</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-600/30 to-orange-600/30 backdrop-blur-sm rounded-xl p-8 border border-yellow-400/30">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold mb-4">Machine Learning</h3>
                <p className="text-yellow-100 mb-4">
                  Quantum machine learning for pattern recognition
                </p>
                <ul className="text-yellow-200 space-y-1 text-sm">
                  <li>• Quantum neural networks</li>
                  <li>• Feature selection</li>
                  <li>• Clustering algorithms</li>
                  <li>• Classification tasks</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {selectedSolution === 'security' && (
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-red-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-red-400/30">
                <h3 className="text-2xl font-bold mb-4">Quantum Cryptography</h3>
                <p className="text-red-100 mb-6">
                  Unbreakable encryption using quantum key distribution and quantum-resistant algorithms
                </p>
                <ul className="text-red-200 space-y-2">
                  <li>• Quantum key distribution (QKD)</li>
                  <li>• Post-quantum cryptography</li>
                  <li>• Quantum random number generation</li>
                  <li>• Secure quantum communication</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30">
                <h3 className="text-2xl font-bold mb-4">Quantum Security Protocols</h3>
                <p className="text-indigo-100 mb-6">
                  Advanced security protocols designed for the quantum era
                </p>
                <ul className="text-indigo-200 space-y-2">
                  <li>• Quantum digital signatures</li>
                  <li>• Quantum authentication</li>
                  <li>• Quantum secure multi-party computation</li>
                  <li>• Quantum blockchain</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12">
              <h2 className="text-4xl font-bold mb-8 text-center">Quantum Security Features</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🔒</div>
                  <h3 className="text-xl font-bold mb-3">Unbreakable Encryption</h3>
                  <p className="text-red-100">Quantum mechanics ensures information security</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🛡️</div>
                  <h3 className="text-xl font-bold mb-3">Future-Proof</h3>
                  <p className="text-red-100">Resistant to quantum computer attacks</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold mb-3">Real-Time</h3>
                  <p className="text-red-100">Instant detection of eavesdropping</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-4xl font-bold mb-6">Ready for Quantum Computing?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Transform your business with the power of quantum computing. 
              Get started with our comprehensive quantum solutions today.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Get Started
              </button>
              <button className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-400 hover:text-white transition-colors font-semibold text-lg">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumComputingSolutions2026;
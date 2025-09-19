import React from 'react';

const QuantumComputingRevolution2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
            ⚛️ QUANTUM BREAKTHROUGH • JANUARY 2025
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Quantum Computing Revolution 2025
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
            Experience the power of quantum computing that's solving impossible problems and unlocking new possibilities across all sectors.
          </p>
        </div>

        {/* Quantum Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-cyan-200">
            <div className="text-6xl mb-6 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-cyan-800">Quantum Supremacy</h3>
            <p className="text-gray-600 mb-6 text-center">
              Achieve computational supremacy with quantum processors that outperform classical computers by orders of magnitude.
            </p>
            <ul className="text-cyan-700 space-y-2 text-sm">
              <li>• 1000+ logical qubits</li>
              <li>• Quantum error correction</li>
              <li>• Coherence time optimization</li>
              <li>• Scalable architecture</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-200">
            <div className="text-6xl mb-6 text-center">🔬</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-blue-800">Molecular Simulation</h3>
            <p className="text-gray-600 mb-6 text-center">
              Simulate complex molecular structures and chemical reactions with unprecedented accuracy and speed.
            </p>
            <ul className="text-blue-700 space-y-2 text-sm">
              <li>• Drug discovery acceleration</li>
              <li>• Material science breakthroughs</li>
              <li>• Climate modeling</li>
              <li>• Protein folding</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-indigo-200">
            <div className="text-6xl mb-6 text-center">🔐</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-indigo-800">Quantum Cryptography</h3>
            <p className="text-gray-600 mb-6 text-center">
              Unbreakable encryption and secure communication protocols powered by quantum mechanics principles.
            </p>
            <ul className="text-indigo-700 space-y-2 text-sm">
              <li>• Quantum key distribution</li>
              <li>• Post-quantum cryptography</li>
              <li>• Secure communications</li>
              <li>• Quantum random numbers</li>
            </ul>
          </div>
        </div>

        {/* Quantum Applications */}
        <div className="bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900 rounded-3xl p-12 mb-16 text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">🌟 Quantum Applications</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our quantum computing solutions are revolutionizing industries with exponential speed improvements and breakthrough capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-cyan-600 rounded-full p-3">
                  <span className="text-2xl">🧬</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Drug Discovery</h3>
                  <p className="text-cyan-100 mb-4">
                    Accelerate pharmaceutical research by simulating molecular interactions and drug efficacy with quantum precision.
                  </p>
                  <div className="bg-cyan-800/50 rounded-lg p-4">
                    <div className="text-sm text-cyan-200">
                      <strong>Impact:</strong> 10x faster drug development, 90% cost reduction
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 rounded-full p-3">
                  <span className="text-2xl">🌍</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Climate Modeling</h3>
                  <p className="text-blue-100 mb-4">
                    Model complex climate systems and predict environmental changes with unprecedented accuracy and detail.
                  </p>
                  <div className="bg-blue-800/50 rounded-lg p-4">
                    <div className="text-sm text-blue-200">
                      <strong>Accuracy:</strong> 99.9% climate prediction accuracy
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-600 rounded-full p-3">
                  <span className="text-2xl">💰</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Financial Optimization</h3>
                  <p className="text-indigo-100 mb-4">
                    Solve complex portfolio optimization and risk management problems with quantum algorithms.
                  </p>
                  <div className="bg-indigo-800/50 rounded-lg p-4">
                    <div className="text-sm text-indigo-200">
                      <strong>Performance:</strong> 1000x faster optimization
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 rounded-full p-3">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Quantum Machine Learning</h3>
                  <p className="text-purple-100 mb-4">
                    Leverage quantum algorithms for machine learning tasks with exponential speed improvements.
                  </p>
                  <div className="bg-purple-800/50 rounded-lg p-4">
                    <div className="text-sm text-purple-200">
                      <strong>Speed:</strong> Exponential speedup for ML tasks
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-6">Ready for Quantum Computing?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the quantum revolution and unlock unprecedented computational power for your business challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-50 transition-colors">
              Explore Quantum Solutions
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-cyan-600 transition-colors">
              Schedule Quantum Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumComputingRevolution2025;
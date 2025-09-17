import React from 'react';

const QuantumComputingRevolution2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6">
            Quantum Computing <span className="gradient-text">Revolution 2025</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Experience the power of quantum computing that will revolutionize cryptography, 
            optimization, and scientific computing with unprecedented computational capabilities.
          </p>
        </div>

        {/* Hero Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Quantum Supremacy Achieved
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Our quantum computing solutions leverage the principles of quantum mechanics 
                to solve complex problems that are impossible for classical computers, 
                opening new frontiers in science and technology.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
                  Quantum Algorithms
                </span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                  Quantum Cryptography
                </span>
                <span className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium">
                  Quantum Optimization
                </span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  Quantum Simulation
                </span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500 to-pink-500 rounded-xl h-80 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-6xl mb-4">⚛️</div>
                <p className="text-xl font-semibold">Quantum Computing</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-xl font-bold text-white mb-3">Quantum Algorithms</h3>
            <p className="text-gray-300">
              Advanced quantum algorithms that solve complex optimization and simulation problems exponentially faster.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">🔐</div>
            <h3 className="text-xl font-bold text-white mb-3">Quantum Cryptography</h3>
            <p className="text-gray-300">
              Unbreakable encryption methods based on quantum principles for ultimate data security.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-white mb-3">Quantum Speedup</h3>
            <p className="text-gray-300">
              Exponential speedup for specific computational tasks compared to classical computers.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">🧪</div>
            <h3 className="text-xl font-bold text-white mb-3">Quantum Simulation</h3>
            <p className="text-gray-300">
              Simulate quantum systems and materials for breakthrough discoveries in science and engineering.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-white mb-3">Quantum Optimization</h3>
            <p className="text-gray-300">
              Solve complex optimization problems in logistics, finance, and resource allocation.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-bold text-white mb-3">Quantum Cloud</h3>
            <p className="text-gray-300">
              Access quantum computing power through our secure cloud-based quantum services.
            </p>
          </div>
        </div>

        {/* Applications Section */}
        <div className="bg-white/5 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Revolutionary Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-500 rounded-lg p-3">
                  <div className="text-2xl">🏦</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Financial Modeling</h3>
                  <p className="text-gray-300">
                    Advanced portfolio optimization and risk analysis using quantum algorithms.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-purple-500 rounded-lg p-3">
                  <div className="text-2xl">🧬</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Drug Discovery</h3>
                  <p className="text-gray-300">
                    Accelerate pharmaceutical research through quantum molecular simulation.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-pink-500 rounded-lg p-3">
                  <div className="text-2xl">🚀</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Space Exploration</h3>
                  <p className="text-gray-300">
                    Optimize space mission planning and navigation using quantum computing.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 rounded-lg p-3">
                  <div className="text-2xl">🔒</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Cybersecurity</h3>
                  <p className="text-gray-300">
                    Quantum-resistant encryption and secure communication protocols.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-green-500 rounded-lg p-3">
                  <div className="text-2xl">🌱</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Climate Modeling</h3>
                  <p className="text-gray-300">
                    Complex climate simulations for better environmental predictions.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500 rounded-lg p-3">
                  <div className="text-2xl">🤖</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">AI Enhancement</h3>
                  <p className="text-gray-300">
                    Quantum machine learning for more powerful AI systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-pink-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready for the Quantum Revolution?</h2>
          <p className="text-xl mb-6 opacity-90">
            Join us in exploring the limitless possibilities of quantum computing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Learn More
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumComputingRevolution2025;
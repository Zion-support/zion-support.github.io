import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const QuantumComputingRevolution2025: React.FC = () => {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValue(prev => (prev + 1) % 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center text-white">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              ⚡ QUANTUM COMPUTING REVOLUTION • 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Quantum Computing Revolution
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience the future of computing with quantum technology that solves problems 
              exponentially faster than classical computers. Join the quantum revolution today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Quantum Solutions
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 font-semibold text-lg">
                Watch Quantum Demo
              </button>
            </div>
          </div>
        </div>

      {/* Quantum Capabilities Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Quantum Computing Capabilities</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our quantum computing solutions leverage the power of quantum mechanics to solve 
            complex problems that are impossible for classical computers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🔬</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Molecular Simulation</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Simulate complex molecular structures and chemical reactions with unprecedented accuracy
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Drug discovery acceleration</li>
              <li>• Material science breakthroughs</li>
              <li>• Chemical reaction optimization</li>
              <li>• Protein folding prediction</li>
            </ul>
            <div className="text-center">
              <span className="inline-block bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-lg text-sm font-semibold">
                Available Now
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🔐</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Quantum Cryptography</h3>
            <p className="text-purple-100 mb-6 text-center">
              Unbreakable encryption using quantum key distribution and quantum-resistant algorithms
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Quantum key distribution</li>
              <li>• Post-quantum cryptography</li>
              <li>• Secure communication</li>
              <li>• Quantum random number generation</li>
            </ul>
            <div className="text-center">
              <span className="inline-block bg-purple-500/20 text-purple-300 px-4 py-2 rounded-lg text-sm font-semibold">
                Beta Testing
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">📊</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Optimization Problems</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Solve complex optimization problems in logistics, finance, and resource allocation
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Portfolio optimization</li>
              <li>• Supply chain optimization</li>
              <li>• Traffic flow optimization</li>
              <li>• Energy grid optimization</li>
            </ul>
            <div className="text-center">
              <span className="inline-block bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-lg text-sm font-semibold">
                Live Demo
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Quantum Machine Learning</h3>
            <p className="text-orange-100 mb-6 text-center">
              Accelerate machine learning algorithms using quantum computing principles
            </p>
            <ul className="text-orange-200 space-y-2 mb-6 text-sm">
              <li>• Quantum neural networks</li>
              <li>• Quantum feature mapping</li>
              <li>• Quantum clustering</li>
              <li>• Quantum classification</li>
            </ul>
            <div className="text-center">
              <span className="inline-block bg-orange-500/20 text-orange-300 px-4 py-2 rounded-lg text-sm font-semibold">
                Research Phase
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌐</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Quantum Internet</h3>
            <p className="text-indigo-100 mb-6 text-center">
              Build the next generation of internet with quantum entanglement and teleportation
            </p>
            <ul className="text-indigo-200 space-y-2 mb-6 text-sm">
              <li>• Quantum teleportation</li>
              <li>• Quantum networks</li>
              <li>• Distributed quantum computing</li>
              <li>• Quantum cloud services</li>
            </ul>
            <div className="text-center">
              <span className="inline-block bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-lg text-sm font-semibold">
                Prototype
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-600/20 to-rose-600/20 backdrop-blur-sm rounded-2xl p-8 border border-pink-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Quantum Supremacy</h3>
            <p className="text-pink-100 mb-6 text-center">
              Achieve computational advantages over classical computers in specific problem domains
            </p>
            <ul className="text-pink-200 space-y-2 mb-6 text-sm">
              <li>• Quantum advantage demonstration</li>
              <li>• Benchmarking studies</li>
              <li>• Performance comparisons</li>
              <li>• Scalability analysis</li>
            </ul>
            <div className="text-center">
              <span className="inline-block bg-pink-500/20 text-pink-300 px-4 py-2 rounded-lg text-sm font-semibold">
                Achieved
              </span>
            </div>
          </div>
        </div>

        {/* Quantum Performance Metrics */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Quantum Performance Metrics</h2>
            <p className="text-xl text-gray-300">Real-world performance data from our quantum computing implementations</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">{animatedValue}M</div>
              <div className="text-white font-semibold mb-1">Qubits</div>
              <div className="text-gray-400 text-sm">Quantum processing units</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">10^15</div>
              <div className="text-white font-semibold mb-1">Speedup</div>
              <div className="text-gray-400 text-sm">vs classical computers</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">99.9%</div>
              <div className="text-white font-semibold mb-1">Accuracy</div>
              <div className="text-gray-400 text-sm">Quantum error correction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-white font-semibold mb-1">Availability</div>
              <div className="text-gray-400 text-sm">Quantum cloud access</div>
            </div>
          </div>
        </div>

        {/* Quantum Use Cases */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Quantum Computing Use Cases</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how quantum computing is transforming industries and solving previously impossible problems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">💊</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Pharmaceutical Research</h3>
                  <p className="text-gray-300 mb-6">
                    Accelerate drug discovery by simulating molecular interactions and predicting drug efficacy 
                    with quantum precision. Reduce development time from years to months.
                  </p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div>• Molecular dynamics simulation</div>
                    <div>• Drug-target interaction modeling</div>
                    <div>• Side effect prediction</div>
                    <div>• Personalized medicine optimization</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🏦</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Financial Services</h3>
                  <p className="text-gray-300 mb-6">
                    Optimize trading strategies, risk assessment, and portfolio management using quantum algorithms 
                    that process vast amounts of market data in real-time.
                  </p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div>• Portfolio optimization</div>
                    <div>• Risk modeling</div>
                    <div>• Fraud detection</div>
                    <div>• Algorithmic trading</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🚀</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Aerospace & Defense</h3>
                  <p className="text-gray-300 mb-6">
                    Design advanced materials, optimize flight paths, and enhance security systems using 
                    quantum computing for mission-critical applications.
                  </p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div>• Material design optimization</div>
                    <div>• Flight path planning</div>
                    <div>• Cryptographic security</div>
                    <div>• Sensor data processing</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🌱</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Climate Science</h3>
                  <p className="text-gray-300 mb-6">
                    Model complex climate systems, optimize renewable energy grids, and develop sustainable 
                    solutions using quantum-enhanced simulations.
                  </p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div>• Climate modeling</div>
                    <div>• Energy grid optimization</div>
                    <div>• Carbon capture simulation</div>
                    <div>• Weather prediction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Enter the Quantum Era?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the quantum computing revolution and discover how our quantum solutions can solve 
            your most complex challenges and unlock new possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/pages/ComprehensiveServices2025" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Explore Quantum Services
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 font-semibold text-lg"
            >
              Schedule Quantum Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumComputingRevolution2025;
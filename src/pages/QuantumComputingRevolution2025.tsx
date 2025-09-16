import React from 'react';
import { motion } from 'framer-motion';

const QuantumComputingRevolution2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
            ⚡ QUANTUM BREAKTHROUGH 2025 • REVOLUTIONARY COMPUTING
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            Quantum Computing Revolution 2025
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
            Experience exponential computing power with our quantum solutions that solve impossible problems and unlock new possibilities across industries.
          </p>
        </div>

        {/* Quantum Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-cyan-200">
            <div className="text-6xl mb-6 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-cyan-800">Quantum Supremacy</h3>
            <p className="text-gray-600 mb-6 text-center">
              Achieve computational advantages that are impossible with classical computers, solving problems in seconds that would take millennia.
            </p>
            <ul className="text-cyan-700 space-y-2 text-sm">
              <li>• 10^18x speed improvement</li>
              <li>• Quantum entanglement</li>
              <li>• Superposition states</li>
              <li>• Quantum interference</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-200">
            <div className="text-6xl mb-6 text-center">🔐</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-blue-800">Quantum Cryptography</h3>
            <p className="text-gray-600 mb-6 text-center">
              Unbreakable security protocols using quantum principles that guarantee absolute data protection against any future threats.
            </p>
            <ul className="text-blue-700 space-y-2 text-sm">
              <li>• Quantum key distribution</li>
              <li>• Unhackable encryption</li>
              <li>• Quantum random numbers</li>
              <li>• Future-proof security</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-indigo-200">
            <div className="text-6xl mb-6 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-indigo-800">Molecular Simulation</h3>
            <p className="text-gray-600 mb-6 text-center">
              Simulate complex molecular interactions with unprecedented accuracy, accelerating drug discovery and materials science.
            </p>
            <ul className="text-indigo-700 space-y-2 text-sm">
              <li>• Drug discovery acceleration</li>
              <li>• Materials optimization</li>
              <li>• Chemical reaction modeling</li>
              <li>• Protein folding prediction</li>
            </ul>
          </div>
        </div>

        {/* Quantum Applications */}
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-12 mb-16 text-white">
          <h2 className="text-4xl font-bold text-center mb-12">Quantum Applications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold mb-2">Healthcare</h3>
              <p className="text-sm opacity-90">Drug discovery, personalized medicine, and disease modeling</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-xl font-bold mb-2">Finance</h3>
              <p className="text-sm opacity-90">Risk analysis, portfolio optimization, and fraud detection</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-2">Climate</h3>
              <p className="text-sm opacity-90">Climate modeling, carbon capture, and renewable energy</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Space</h3>
              <p className="text-sm opacity-90">Space exploration, satellite optimization, and cosmic research</p>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Quantum Performance</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-5xl font-bold text-cyan-600 mb-4">10^18x</div>
              <h3 className="text-xl font-bold mb-2">Speed Improvement</h3>
              <p className="text-gray-600">Exponential computational advantage over classical systems</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-5xl font-bold text-blue-600 mb-4">99.99%</div>
              <h3 className="text-xl font-bold mb-2">Accuracy Rate</h3>
              <p className="text-gray-600">Unprecedented precision in quantum calculations</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-5xl font-bold text-indigo-600 mb-4">∞</div>
              <h3 className="text-xl font-bold mb-2">Possibilities</h3>
              <p className="text-gray-600">Unlimited potential for solving complex problems</p>
            </div>
          </div>
        </div>

        {/* Quantum Implementation */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Implementation Journey</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-lg font-bold text-cyan-600">1</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-center">Quantum Readiness</h3>
              <p className="text-gray-600 text-sm text-center">Assess your organization's quantum computing readiness and identify use cases</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-lg font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-center">Algorithm Development</h3>
              <p className="text-gray-600 text-sm text-center">Develop quantum algorithms tailored to your specific business challenges</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-lg font-bold text-indigo-600">3</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-center">Quantum Integration</h3>
              <p className="text-gray-600 text-sm text-center">Integrate quantum solutions with your existing infrastructure</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-lg font-bold text-purple-600">4</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-center">Optimization</h3>
              <p className="text-gray-600 text-sm text-center">Continuous optimization and scaling of quantum systems</p>
            </div>
          </div>
        </motion.div>

        {/* Quantum Software Stack */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-slate-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-purple-400/30"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">💻 Quantum Software Ecosystem</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Comprehensive software tools and frameworks for quantum algorithm development and deployment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-cyan-600/30 to-blue-600/30 rounded-xl p-6 border border-cyan-400/30">
                <h3 className="text-2xl font-bold text-white mb-4">🔧 Quantum Development Kits</h3>
                <p className="text-cyan-200 mb-4">
                  Complete development environments for quantum algorithm design and testing.
                </p>
                <ul className="text-cyan-300 space-y-2 text-sm">
                  <li>• Qiskit, Cirq, PennyLane integration</li>
                  <li>• Quantum circuit simulators</li>
                  <li>• Hybrid classical-quantum algorithms</li>
                  <li>• Cloud quantum computing access</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-xl p-6 border border-purple-400/30">
                <h3 className="text-2xl font-bold text-white mb-4">🧮 Quantum Algorithms Library</h3>
                <p className="text-purple-200 mb-4">
                  Pre-built quantum algorithms for common optimization and simulation problems.
                </p>
                <ul className="text-purple-300 space-y-2 text-sm">
                  <li>• QAOA for optimization</li>
                  <li>• VQE for chemistry</li>
                  <li>• Quantum machine learning</li>
                  <li>• Quantum cryptography protocols</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-emerald-600/30 to-teal-600/30 rounded-xl p-6 border border-emerald-400/30">
                <h3 className="text-2xl font-bold text-white mb-4">☁️ Quantum Cloud Platform</h3>
                <p className="text-emerald-200 mb-4">
                  Access to quantum computers through secure cloud infrastructure.
                </p>
                <ul className="text-emerald-300 space-y-2 text-sm">
                  <li>• Multi-cloud quantum access</li>
                  <li>• Real-time job scheduling</li>
                  <li>• Quantum error mitigation</li>
                  <li>• Hybrid classical-quantum workflows</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-orange-600/30 to-red-600/30 rounded-xl p-6 border border-orange-400/30">
                <h3 className="text-2xl font-bold text-white mb-4">🔍 Quantum Error Correction</h3>
                <p className="text-orange-200 mb-4">
                  Advanced error correction techniques for reliable quantum computation.
                </p>
                <ul className="text-orange-300 space-y-2 text-sm">
                  <li>• Surface code implementation</li>
                  <li>• Logical qubit encoding</li>
                  <li>• Error syndrome detection</li>
                  <li>• Fault-tolerant operations</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-2xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-6">Enter the Quantum Era</h2>
          <p className="text-xl mb-8 opacity-90">
            Be among the first to harness the power of quantum computing and gain unprecedented competitive advantages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Quantum Journey
            </a>
            <a href="/pages/ComprehensiveServices2025" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
              Explore All Services
            </a>
          </div>
        </div>

const QuantumComputingRevolution2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
            ⚡ QUANTUM BREAKTHROUGH • JANUARY 2025
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Quantum Computing Revolution 2025
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
            Experience exponential computing power with our revolutionary quantum solutions that solve 
            impossible problems and unlock new possibilities across industries.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#features" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Quantum Power
            </a>
            <a href="#contact" className="border-2 border-cyan-600 text-cyan-600 px-8 py-4 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-lg">
              Get Quantum Access
            </a>
          </div>
        </div>

        {/* Quantum Features Grid */}
        <div id="features" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-cyan-200">
            <div className="text-5xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Exponential Speed</h3>
            <p className="text-gray-600 mb-6 text-center">
              Process complex calculations millions of times faster than classical computers.
            </p>
            <ul className="text-cyan-600 space-y-2 text-sm">
              <li>• Quantum superposition</li>
              <li>• Parallel processing</li>
              <li>• Exponential speedup</li>
              <li>• Real-time optimization</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-200">
            <div className="text-5xl mb-4 text-center">🔐</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Quantum Cryptography</h3>
            <p className="text-gray-600 mb-6 text-center">
              Unbreakable security through quantum key distribution and quantum-resistant algorithms.
            </p>
            <ul className="text-blue-600 space-y-2 text-sm">
              <li>• Quantum key distribution</li>
              <li>• Unbreakable encryption</li>
              <li>• Quantum-resistant algorithms</li>
              <li>• Future-proof security</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-indigo-200">
            <div className="text-5xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Molecular Simulation</h3>
            <p className="text-gray-600 mb-6 text-center">
              Simulate complex molecular structures and chemical reactions with unprecedented accuracy.
            </p>
            <ul className="text-indigo-600 space-y-2 text-sm">
              <li>• Drug discovery</li>
              <li>• Material science</li>
              <li>• Chemical optimization</li>
              <li>• Molecular modeling</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-200">
            <div className="text-5xl mb-4 text-center">🎯</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Optimization Problems</h3>
            <p className="text-gray-600 mb-6 text-center">
              Solve complex optimization challenges that are impossible for classical computers.
            </p>
            <ul className="text-purple-600 space-y-2 text-sm">
              <li>• Supply chain optimization</li>
              <li>• Portfolio management</li>
              <li>• Route optimization</li>
              <li>• Resource allocation</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-teal-200">
            <div className="text-5xl mb-4 text-center">🔮</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Quantum Machine Learning</h3>
            <p className="text-gray-600 mb-6 text-center">
              Leverage quantum algorithms for enhanced machine learning and pattern recognition.
            </p>
            <ul className="text-teal-600 space-y-2 text-sm">
              <li>• Quantum neural networks</li>
              <li>• Enhanced pattern recognition</li>
              <li>• Quantum feature mapping</li>
              <li>• Accelerated training</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-emerald-200">
            <div className="text-5xl mb-4 text-center">🌊</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Quantum Algorithms</h3>
            <p className="text-gray-600 mb-6 text-center">
              Advanced quantum algorithms that provide exponential speedup for specific problems.
            </p>
            <ul className="text-emerald-600 space-y-2 text-sm">
              <li>• Shor's algorithm</li>
              <li>• Grover's algorithm</li>
              <li>• Quantum Fourier transform</li>
              <li>• Custom quantum circuits</li>
            </ul>
          </div>
        </div>

        {/* Quantum Applications */}
        <div className="bg-gradient-to-r from-cyan-900 to-blue-900 rounded-2xl p-12 mb-16 text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">🚀 Quantum Applications</h2>
            <p className="text-xl opacity-90">Revolutionary applications across industries</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">💊</div>
              <h3 className="text-lg font-bold mb-2">Drug Discovery</h3>
              <p className="text-cyan-100 text-sm">Accelerate pharmaceutical research with quantum molecular simulation</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🏦</div>
              <h3 className="text-lg font-bold mb-2">Financial Modeling</h3>
              <p className="text-cyan-100 text-sm">Advanced risk analysis and portfolio optimization</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🔬</div>
              <h3 className="text-lg font-bold mb-2">Materials Science</h3>
              <p className="text-cyan-100 text-sm">Design new materials with quantum simulation</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🌐</div>
              <h3 className="text-lg font-bold mb-2">Climate Modeling</h3>
              <p className="text-cyan-100 text-sm">Complex climate simulations and weather prediction</p>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="text-4xl mb-4 text-center">💊</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Pharmaceutical Breakthrough</h3>
            <p className="text-gray-600 mb-4 text-center">
              Quantum simulation reduced drug discovery time from 10 years to 2 years, saving $500M in R&D costs.
            </p>
            <div className="text-center">
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold">
                $500M Saved
              </span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="text-4xl mb-4 text-center">🏦</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Financial Optimization</h3>
            <p className="text-gray-600 mb-4 text-center">
              Quantum algorithms optimized trading strategies, increasing returns by 40% while reducing risk by 60%.
            </p>
            <div className="text-center">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold">
                +40% Returns
              </span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="text-4xl mb-4 text-center">🔬</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Material Innovation</h3>
            <p className="text-gray-600 mb-4 text-center">
              Discovered new superconducting materials 1000x faster than classical methods, enabling breakthrough technologies.
            </p>
            <div className="text-center">
              <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-bold">
                1000x Faster
              </span>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-white rounded-2xl p-12 shadow-xl mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">⚡ Quantum Technology Stack</h2>
            <p className="text-xl text-gray-600">Advanced quantum computing infrastructure</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-4xl mb-3">🔬</div>
              <h3 className="font-bold text-gray-900 mb-2">Quantum Processors</h3>
              <p className="text-sm text-gray-600">High-fidelity qubits</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-4xl mb-3">❄️</div>
              <h3 className="font-bold text-gray-900 mb-2">Cryogenic Systems</h3>
              <p className="text-sm text-gray-600">Ultra-low temperature</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-4xl mb-3">🧮</div>
              <h3 className="font-bold text-gray-900 mb-2">Quantum Algorithms</h3>
              <p className="text-sm text-gray-600">Optimized circuits</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-4xl mb-3">🌐</div>
              <h3 className="font-bold text-gray-900 mb-2">Quantum Cloud</h3>
              <p className="text-sm text-gray-600">Scalable access</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div id="contact" className="text-center bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-4">Ready for Quantum Revolution?</h2>
          <p className="text-xl mb-8 opacity-90">
            Unlock the power of quantum computing and solve problems that were previously impossible.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/contact" className="bg-white text-cyan-600 px-8 py-4 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-lg">
              Start Quantum Journey
            </a>
            <a href="/pages/ComprehensiveServices2025" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
              Explore All Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumComputingRevolution2025;

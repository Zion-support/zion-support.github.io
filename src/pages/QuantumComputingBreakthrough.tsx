import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const QuantumComputingBreakthrough: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full text-sm font-semibold mb-6">
            ⚡ QUANTUM BREAKTHROUGH 2025
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            Quantum Computing Revolution
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Experience the future of computing with quantum technology that's solving problems 
            impossible for classical computers and unlocking new possibilities in science, finance, and cryptography.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Explore Quantum Solutions
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-indigo-900 transition-colors">
              Watch Quantum Demo
            </button>
          </div>
        </div>

        {/* Quantum Advantages */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-4">Exponential Speed</h3>
            <p className="text-gray-300 mb-6">
              Quantum computers can process certain calculations exponentially faster than classical computers, 
              revolutionizing fields like optimization and simulation.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Quantum parallelism</li>
              <li>• Superposition states</li>
              <li>• Entanglement effects</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-4xl mb-4">🔐</div>
            <h3 className="text-2xl font-bold text-white mb-4">Quantum Cryptography</h3>
            <p className="text-gray-300 mb-6">
              Unbreakable encryption methods based on quantum mechanics principles, 
              ensuring ultimate security for sensitive data and communications.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Quantum key distribution</li>
              <li>• Unbreakable encryption</li>
              <li>• Future-proof security</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-4xl mb-4">🧬</div>
            <h3 className="text-2xl font-bold text-white mb-4">Molecular Simulation</h3>
            <p className="text-gray-300 mb-6">
              Accurate modeling of molecular behavior for drug discovery, 
              materials science, and chemical engineering breakthroughs.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Drug discovery acceleration</li>
              <li>• Material design</li>
              <li>• Chemical optimization</li>
            </ul>
          </div>
        </div>

        {/* Quantum Applications */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Quantum Applications</h2>
            <p className="text-xl text-purple-100">Transforming industries with quantum advantage</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">💊</div>
              <h4 className="text-lg font-semibold text-white mb-2">Pharmaceuticals</h4>
              <p className="text-purple-100 text-sm">Accelerated drug discovery and molecular modeling</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🏦</div>
              <h4 className="text-lg font-semibold text-white mb-2">Finance</h4>
              <p className="text-purple-100 text-sm">Portfolio optimization and risk analysis</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🌍</div>
              <h4 className="text-lg font-semibold text-white mb-2">Climate Science</h4>
              <p className="text-purple-100 text-sm">Climate modeling and carbon capture optimization</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🔬</div>
              <h4 className="text-lg font-semibold text-white mb-2">Research</h4>
              <p className="text-purple-100 text-sm">Scientific discovery and theoretical physics</p>
            </div>
          </div>
        </div>

        {/* Quantum vs Classical */}
        <div className="bg-white rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quantum vs Classical Computing</h2>
            <p className="text-xl text-gray-600">Understanding the fundamental differences</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Classical Computing</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-600">Binary bits (0 or 1)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-600">Sequential processing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-600">Limited by Moore's Law</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-600">Exponential time complexity for certain problems</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quantum Computing</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">Quantum bits (qubits) in superposition</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">Parallel processing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">Exponential scaling potential</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">Polynomial time for quantum algorithms</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quantum Timeline */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Quantum Computing Timeline</h2>
            <p className="text-xl text-indigo-100">The journey to quantum advantage</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                2020
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Quantum Supremacy</h4>
              <p className="text-indigo-100 text-sm">Google achieves quantum advantage on specific problems</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                2023
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Error Correction</h4>
              <p className="text-indigo-100 text-sm">IBM demonstrates logical qubits with error correction</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                2025
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Practical Applications</h4>
              <p className="text-indigo-100 text-sm">Real-world quantum solutions in production</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                2030
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Quantum Internet</h4>
              <p className="text-indigo-100 text-sm">Global quantum communication networks</p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">1000+</div>
            <div className="text-gray-300">Qubits by 2025</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">$65B</div>
            <div className="text-gray-300">Quantum Market Size</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">10^6</div>
            <div className="text-gray-300">Speed Improvement</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">95%</div>
            <div className="text-gray-300">Error Reduction</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Harness Quantum Power?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the quantum revolution with Zion Tech Group's cutting-edge quantum computing solutions. 
            Get ahead of the competition with technology that's reshaping the future.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Quantum Journey
            </button>
            <button className="border border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-indigo-900 transition-colors text-lg">
              Explore Quantum Solutions
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default QuantumComputingBreakthrough;
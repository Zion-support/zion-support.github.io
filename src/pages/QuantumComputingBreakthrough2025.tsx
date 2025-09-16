import React from 'react';

const QuantumComputingBreakthrough2025: React.FC = () => {
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
              Quantum Computing Breakthrough 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Unlock the power of quantum computing with our revolutionary 1000-qubit quantum processors
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Quantum Power →
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-900 transition-all duration-300 font-semibold text-lg">
                View Performance
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quantum Stats */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-5xl font-bold text-cyan-400 mb-2">1000+</div>
            <div className="text-lg opacity-90">Qubits</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-400 mb-2">99.9%</div>
            <div className="text-lg opacity-90">Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-indigo-400 mb-2">10^15</div>
            <div className="text-lg opacity-90">Operations/sec</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-purple-400 mb-2">-273°C</div>
            <div className="text-lg opacity-90">Operating Temp</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Exponential Speed</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Solve complex problems millions of times faster than classical computers
            </p>
            <ul className="text-cyan-200 space-y-2 text-sm">
              <li>• Cryptography breaking</li>
              <li>• Optimization problems</li>
              <li>• Drug discovery</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🔐</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Security</h3>
            <p className="text-blue-100 mb-6 text-center">
              Unbreakable encryption using quantum key distribution and quantum cryptography
            </p>
            <ul className="text-blue-200 space-y-2 text-sm">
              <li>• Quantum key distribution</li>
              <li>• Unbreakable encryption</li>
              <li>• Secure communications</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Molecular Simulation</h3>
            <p className="text-indigo-100 mb-6 text-center">
              Simulate complex molecular interactions for breakthrough discoveries
            </p>
            <ul className="text-indigo-200 space-y-2 text-sm">
              <li>• Protein folding</li>
              <li>• Drug design</li>
              <li>• Material science</li>
            </ul>
          </div>
        </div>

        {/* Technology Showcase */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Quantum Computing Technologies</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Discover the revolutionary technologies powering our quantum computing solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-2xl">
                  🔬
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Superconducting Qubits</h3>
                  <p className="text-cyan-200">Ultra-stable quantum bits operating at near absolute zero</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center text-2xl">
                  🌊
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Quantum Entanglement</h3>
                  <p className="text-blue-200">Instantaneous correlation between quantum particles</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-2xl">
                  🎯
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Quantum Error Correction</h3>
                  <p className="text-indigo-200">Advanced algorithms to maintain quantum coherence</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">Quantum Performance Monitor</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-cyan-400">Quantum Coherence</span>
                  <span className="text-white font-mono">99.97%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" style={{width: '99.97%'}}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-blue-400">Gate Fidelity</span>
                  <span className="text-white font-mono">99.95%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full" style={{width: '99.95%'}}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-indigo-400">Entanglement Rate</span>
                  <span className="text-white font-mono">1.2M/s</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Revolutionary Applications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
              <div className="text-4xl mb-4">💊</div>
              <h3 className="text-xl font-bold mb-2">Drug Discovery</h3>
              <p className="text-cyan-200 text-sm">Accelerate drug development with quantum molecular simulation</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-bold mb-2">Cybersecurity</h3>
              <p className="text-blue-200 text-sm">Unbreakable quantum encryption for ultimate security</p>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-2">Financial Modeling</h3>
              <p className="text-indigo-200 text-sm">Complex risk analysis and portfolio optimization</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-2">Climate Modeling</h3>
              <p className="text-purple-200 text-sm">Accurate climate prediction and environmental analysis</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Quantum Computing?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Harness the power of quantum computing to solve your most complex challenges
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

export default QuantumComputingBreakthrough2025;
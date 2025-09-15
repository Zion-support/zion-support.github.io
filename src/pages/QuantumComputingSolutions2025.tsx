import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const QuantumComputingSolutions2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
            ⚡ QUANTUM COMPUTING • JANUARY 2025
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Quantum Computing Solutions 2025
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
            Harness the power of quantum mechanics to solve the world's most complex problems 
            with exponential speedup and revolutionary computational capabilities.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Quantum Solutions →
            </button>
            <button className="border-2 border-cyan-600 text-cyan-600 px-8 py-4 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-lg">
              Request Quantum Demo
            </button>
          </div>
        </div>

        {/* Quantum Advantage Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">⚡ Quantum Advantage</h2>
          <div className="bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 rounded-3xl p-12 text-white">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-4">Exponential Speedup</h3>
                <p className="text-cyan-100 mb-4">
                  Solve problems in seconds that would take classical computers millions of years
                </p>
                <div className="text-3xl font-bold text-cyan-400">10^15x Faster</div>
              </div>
              
              <div className="text-center">
                <div className="text-6xl mb-4">🔐</div>
                <h3 className="text-2xl font-bold mb-4">Quantum Cryptography</h3>
                <p className="text-cyan-100 mb-4">
                  Unbreakable encryption using the principles of quantum mechanics
                </p>
                <div className="text-3xl font-bold text-cyan-400">100% Secure</div>
              </div>
              
              <div className="text-center">
                <div className="text-6xl mb-4">🧬</div>
                <h3 className="text-2xl font-bold mb-4">Molecular Simulation</h3>
                <p className="text-cyan-100 mb-4">
                  Model complex molecular interactions for drug discovery and materials science
                </p>
                <div className="text-3xl font-bold text-cyan-400">Atomic Precision</div>
              </div>
            </div>
          </div>
        </section>

        {/* Quantum Solutions */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">🔬 Quantum Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">💊</div>
              <h3 className="text-2xl font-bold mb-4">Drug Discovery</h3>
              <p className="text-gray-600 mb-6">
                Accelerate pharmaceutical research by simulating molecular interactions 
                and predicting drug efficacy with quantum precision.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Protein Folding Simulation</li>
                <li>• Drug-Target Interaction</li>
                <li>• Side Effect Prediction</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🏦</div>
              <h3 className="text-2xl font-bold mb-4">Financial Optimization</h3>
              <p className="text-gray-600 mb-6">
                Optimize complex financial portfolios and risk management strategies 
                using quantum algorithms for superior returns.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Portfolio Optimization</li>
                <li>• Risk Assessment</li>
                <li>• Fraud Detection</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold mb-4">Climate Modeling</h3>
              <p className="text-gray-600 mb-6">
                Model complex climate systems and predict environmental changes 
                with unprecedented accuracy and detail.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Weather Prediction</li>
                <li>• Carbon Capture Simulation</li>
                <li>• Renewable Energy Optimization</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold mb-4">Quantum Security</h3>
              <p className="text-gray-600 mb-6">
                Implement quantum-resistant cryptography and quantum key distribution 
                for ultimate data protection.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Quantum Key Distribution</li>
                <li>• Post-Quantum Cryptography</li>
                <li>• Secure Communication</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🚗</div>
              <h3 className="text-2xl font-bold mb-4">Autonomous Vehicles</h3>
              <p className="text-gray-600 mb-6">
                Optimize routing, traffic management, and decision-making algorithms 
                for autonomous vehicle systems.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Route Optimization</li>
                <li>• Traffic Flow Analysis</li>
                <li>• Collision Avoidance</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold mb-4">Machine Learning</h3>
              <p className="text-gray-600 mb-6">
                Accelerate machine learning training and inference using quantum 
                machine learning algorithms.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Quantum Neural Networks</li>
                <li>• Quantum Feature Maps</li>
                <li>• Quantum Optimization</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quantum Hardware */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">🔧 Quantum Hardware</h2>
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold mb-6">Quantum Processors</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg">Superconducting Qubits</span>
                    <span className="text-2xl font-bold text-cyan-400">128 Qubits</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg">Trapped Ion Qubits</span>
                    <span className="text-2xl font-bold text-green-400">64 Qubits</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg">Topological Qubits</span>
                    <span className="text-2xl font-bold text-purple-400">32 Qubits</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg">Coherence Time</span>
                    <span className="text-2xl font-bold text-yellow-400">100ms</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-6">Quantum Infrastructure</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="w-3 h-3 bg-cyan-400 rounded-full"></span>
                    <span>Cryogenic Cooling Systems</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                    <span>Quantum Error Correction</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-3 h-3 bg-purple-400 rounded-full"></span>
                    <span>Quantum-Classical Interface</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                    <span>Quantum Network Protocols</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-3 h-3 bg-pink-400 rounded-full"></span>
                    <span>Quantum Software Stack</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quantum Algorithms */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">🧮 Quantum Algorithms</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-3">Shor's Algorithm</h3>
              <p className="text-gray-600 text-sm mb-4">
                Factor large integers exponentially faster than classical computers
              </p>
              <div className="text-cyan-600 font-semibold">Cryptography Breaking</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-3">Grover's Algorithm</h3>
              <p className="text-gray-600 text-sm mb-4">
                Search unsorted databases with quadratic speedup
              </p>
              <div className="text-cyan-600 font-semibold">Database Search</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-3">VQE Algorithm</h3>
              <p className="text-gray-600 text-sm mb-4">
                Variational Quantum Eigensolver for quantum chemistry
              </p>
              <div className="text-cyan-600 font-semibold">Molecular Simulation</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-3">QAOA Algorithm</h3>
              <p className="text-gray-600 text-sm mb-4">
                Quantum Approximate Optimization Algorithm
              </p>
              <div className="text-cyan-600 font-semibold">Combinatorial Optimization</div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">🏆 Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-semibold">+500%</span>
                <span className="text-sm text-gray-500">Efficiency Gain</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Pharmaceutical Breakthrough</h3>
              <p className="text-gray-600 mb-4">
                Reduced drug discovery time from 10 years to 2 years using quantum molecular simulation
              </p>
              <div className="text-sm text-gray-500">Client: Global Pharma Company</div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-semibold">$50M</span>
                <span className="text-sm text-gray-500">Cost Savings</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Financial Optimization</h3>
              <p className="text-gray-600 mb-4">
                Optimized investment portfolio using quantum algorithms, achieving 40% better returns
              </p>
              <div className="text-sm text-gray-500">Client: Investment Bank</div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full font-semibold">99.9%</span>
                <span className="text-sm text-gray-500">Accuracy</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Climate Prediction</h3>
              <p className="text-gray-600 mb-4">
                Achieved unprecedented accuracy in long-term climate modeling and weather prediction
              </p>
              <div className="text-sm text-gray-500">Client: National Weather Service</div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">Experience Quantum Computing</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join the quantum revolution and solve your most complex problems with 
              the power of quantum computing. Get started with our quantum cloud platform.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg">
                Start Quantum Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-colors font-semibold text-lg">
                Schedule Quantum Demo
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default QuantumComputingSolutions2025;
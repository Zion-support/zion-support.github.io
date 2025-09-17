import React from 'react';
import { Helmet } from 'react-helmet-async';
const QuantumComputingSolutions2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              ⚛️ QUANTUM BREAKTHROUGH • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Quantum Computing Solutions 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Harness the power of quantum mechanics to solve complex problems that are impossible for classical computers. Experience exponential speedup and revolutionary computational capabilities.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Quantum Solutions
              </button>
              <button className="border-2 border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg hover:bg-indigo-400/10 transition-colors font-semibold text-lg">
                Watch Quantum Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Quantum Computing Showcase */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">⚛️ Revolutionary Quantum Technologies</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Experience the future of computing with quantum supremacy and exponential processing power
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Quantum Supremacy */}
          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Supremacy</h3>
            <p className="text-indigo-100 mb-6 text-center">
              Achieve computational tasks that are impossible for classical computers
            </p>
            <ul className="text-indigo-200 space-y-2 mb-6 text-sm">
              <li>• Exponential Speedup</li>
              <li>• Parallel Processing</li>
              <li>• Quantum Entanglement</li>
              <li>• Superposition States</li>
            </ul>
            <button className="block w-full bg-white text-indigo-600 py-3 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-center">
              Learn More →
            </button>
          </div>
          {/* Quantum Cryptography */}
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🔐</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Cryptography</h3>
            <p className="text-purple-100 mb-6 text-center">
              Unbreakable security through quantum key distribution and quantum-resistant algorithms
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Quantum Key Distribution</li>
              <li>• Unbreakable Encryption</li>
              <li>• Quantum Random Numbers</li>
              <li>• Future-Proof Security</li>
            </ul>
            <button className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
              Explore Security →
            </button>
          </div>
          {/* Quantum Machine Learning */}
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Machine Learning</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Accelerate AI training and optimization with quantum algorithms
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Quantum Neural Networks</li>
              <li>• Optimization Algorithms</li>
              <li>• Pattern Recognition</li>
              <li>• Data Processing</li>
            </ul>
            <button className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
              See Performance →
            </button>
          </div>
        </div>
        {/* Quantum Applications */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">🎯 Quantum Applications</h2>
            <p className="text-xl opacity-90">Revolutionary solutions powered by quantum computing</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30">
              <h3 className="text-2xl font-bold mb-4">🔬 Drug Discovery</h3>
              <p className="text-indigo-100 mb-6">
                Accelerate pharmaceutical research with quantum molecular simulation and drug optimization algorithms.
              </p>
              <ul className="text-indigo-200 space-y-2 mb-6">
                <li>• Molecular Simulation</li>
                <li>• Drug Optimization</li>
                <li>• Protein Folding</li>
                <li>• Chemical Reactions</li>
              </ul>
              <div className="text-center">
                <span className="text-3xl font-bold text-indigo-400">1000x</span>
                <span className="text-lg ml-2">Faster Discovery</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
              <h3 className="text-2xl font-bold mb-4">🌐 Financial Modeling</h3>
              <p className="text-purple-100 mb-6">
                Revolutionize financial analysis with quantum portfolio optimization and risk assessment.
              </p>
              <ul className="text-purple-200 space-y-2 mb-6">
                <li>• Portfolio Optimization</li>
                <li>• Risk Assessment</li>
                <li>• Market Simulation</li>
                <li>• Algorithmic Trading</li>
              </ul>
              <div className="text-center">
                <span className="text-3xl font-bold text-purple-400">99.9%</span>
                <span className="text-lg ml-2">Accuracy Rate</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
              <h3 className="text-2xl font-bold mb-4">🌍 Climate Modeling</h3>
              <p className="text-cyan-100 mb-6">
                Tackle climate change with quantum-powered weather prediction and environmental modeling.
              </p>
              <ul className="text-cyan-200 space-y-2 mb-6">
                <li>• Weather Prediction</li>
                <li>• Climate Simulation</li>
                <li>• Environmental Analysis</li>
                <li>• Carbon Footprint</li>
              </ul>
              <div className="text-center">
                <span className="text-3xl font-bold text-cyan-400">50x</span>
                <span className="text-lg ml-2">More Accurate</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
              <h3 className="text-2xl font-bold mb-4">🔒 Cybersecurity</h3>
              <p className="text-emerald-100 mb-6">
                Protect against quantum threats with quantum-resistant cryptography and security protocols.
              </p>
              <ul className="text-emerald-200 space-y-2 mb-6">
                <li>• Quantum-Resistant Crypto</li>
                <li>• Threat Detection</li>
                <li>• Secure Communication</li>
                <li>• Data Protection</li>
              </ul>
              <div className="text-center">
                <span className="text-3xl font-bold text-emerald-400">∞</span>
                <span className="text-lg ml-2">Security Level</span>
              </div>
            </div>
          </div>
        </div>
        {/* Quantum Performance Metrics */}
        <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">📊 Quantum Performance Metrics</h2>
            <p className="text-xl opacity-90">Measurable results from our quantum implementations</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-indigo-400 mb-2">10^15</div>
              <div className="text-lg opacity-90">Operations/Second</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-lg opacity-90">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">1000x</div>
              <div className="text-lg opacity-90">Speed Increase</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">∞</div>
              <div className="text-lg opacity-90">Security Level</div>
            </div>
          </div>
        </div>
        {/* Quantum Technology Stack */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">⚙️ Quantum Technology Stack</h2>
            <p className="text-xl opacity-90">Complete quantum computing infrastructure</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30 text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-2">Quantum Hardware</h3>
              <p className="text-indigo-200 text-sm">Advanced quantum processors and cooling systems</p>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 text-center">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold mb-2">Quantum Software</h3>
              <p className="text-purple-200 text-sm">Programming frameworks and development tools</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 text-center">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold mb-2">Quantum Cloud</h3>
              <p className="text-cyan-200 text-sm">Scalable quantum computing as a service</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2">Quantum Security</h3>
              <p className="text-emerald-200 text-sm">Quantum-resistant security protocols</p>
            </div>
          </div>
        </div>
        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Harness Quantum Power?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the quantum revolution and solve problems that were previously impossible. Get started with our quantum computing solutions today.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Quantum Journey
            </button>
            <button className="border-2 border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg hover:bg-indigo-400/10 transition-colors font-semibold text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuantumComputingSolutions2025;
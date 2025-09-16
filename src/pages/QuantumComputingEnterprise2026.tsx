import React from 'react';
import { Link } from 'react-router-dom';

const QuantumComputingEnterprise2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Quantum Computing for Enterprise
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Harness the power of quantum computing to solve complex business problems and gain competitive advantage
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-cyan-600 rounded-full text-sm">Quantum Algorithms</span>
            <span className="px-4 py-2 bg-purple-600 rounded-full text-sm">Optimization</span>
            <span className="px-4 py-2 bg-indigo-600 rounded-full text-sm">Cryptography</span>
            <span className="px-4 py-2 bg-pink-600 rounded-full text-sm">Machine Learning</span>
          </div>
        </div>

        {/* Quantum Advantage Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Quantum Advantage in Business</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Portfolio Optimization</h3>
              <p className="text-gray-300 text-sm">Optimize investment portfolios with quantum algorithms that consider millions of variables simultaneously</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Supply Chain</h3>
              <p className="text-gray-300 text-sm">Solve complex logistics problems and optimize supply chain networks with quantum computing</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cryptography</h3>
              <p className="text-gray-300 text-sm">Implement quantum-resistant encryption and secure communications for the quantum era</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Drug Discovery</h3>
              <p className="text-gray-300 text-sm">Accelerate pharmaceutical research with quantum simulations of molecular interactions</p>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Enterprise Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-xl p-8 border border-cyan-500/30">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Financial Modeling</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-cyan-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Risk assessment and portfolio optimization
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-cyan-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Monte Carlo simulations with quantum speedup
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-cyan-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Fraud detection and pattern recognition
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-8 border border-purple-500/30">
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">Manufacturing Optimization</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-purple-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Production scheduling and resource allocation
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-purple-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Quality control and defect prediction
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-purple-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Predictive maintenance optimization
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quantum Hardware Status */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Current Quantum Hardware Landscape</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-3 text-cyan-400">IBM Quantum</h3>
              <p className="text-gray-300 mb-4">Leading provider of quantum computing services with 1000+ qubit systems</p>
              <div className="text-sm text-gray-400">
                <div>Qubits: 1000+</div>
                <div>Coherence: 100μs</div>
                <div>Error Rate: 0.1%</div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">Google Quantum AI</h3>
              <p className="text-gray-300 mb-4">Pioneering quantum supremacy with advanced error correction</p>
              <div className="text-sm text-gray-400">
                <div>Qubits: 70+</div>
                <div>Coherence: 200μs</div>
                <div>Error Rate: 0.05%</div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-3 text-pink-400">IonQ</h3>
              <p className="text-gray-300 mb-4">Trapped ion quantum computers with high fidelity operations</p>
              <div className="text-sm text-gray-400">
                <div>Qubits: 32+</div>
                <div>Coherence: 10ms</div>
                <div>Error Rate: 0.01%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Quantum Readiness Timeline</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-500"></div>
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-sm font-bold z-10">Q1</div>
                <div className="ml-8 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 flex-1">
                  <h3 className="text-xl font-semibold mb-2">Quantum Assessment</h3>
                  <p className="text-gray-300">Evaluate current systems and identify quantum-ready applications</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-sm font-bold z-10">Q2</div>
                <div className="ml-8 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 flex-1">
                  <h3 className="text-xl font-semibold mb-2">Pilot Programs</h3>
                  <p className="text-gray-300">Launch small-scale quantum computing pilot projects</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-sm font-bold z-10">Q3</div>
                <div className="ml-8 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 flex-1">
                  <h3 className="text-xl font-semibold mb-2">Integration</h3>
                  <p className="text-gray-300">Integrate quantum solutions into existing business processes</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-sm font-bold z-10">Q4</div>
                <div className="ml-8 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 flex-1">
                  <h3 className="text-xl font-semibold mb-2">Scale & Optimize</h3>
                  <p className="text-gray-300">Scale successful quantum implementations across the organization</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready for the Quantum Revolution?</h2>
          <p className="text-xl mb-8 text-cyan-100">
            Start your quantum computing journey today and gain competitive advantage
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
            <Link 
              to="/blog" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumComputingEnterprise2026;
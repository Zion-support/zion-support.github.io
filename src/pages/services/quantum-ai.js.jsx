import React from 'react';
import { Link } from 'react-router-dom';
const QuantumAIServices = () => {
    return (<div className="min-h-screen bg-slate-900 text-white">
      {/* Header Section */}
      <div className="pt-20 pb-16 bg-gradient-to-br from-slate-900 via-blue-900/20 to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Quantum AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Harness the power of quantum computing combined with artificial intelligence 
              to solve complex problems that were previously impossible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg">
                Get Started
              </Link>
              <Link to="/quantum-neural-network-platform" className="border border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 text-lg">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Services Overview */}
      <div className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Our Quantum AI Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-700/50 p-8 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Quantum Neural Networks</h3>
              <p className="text-gray-300 mb-4">
                Advanced neural network architectures optimized for quantum computing, 
                enabling faster training and superior performance.
              </p>
              <Link to="/quantum-neural-network-platform" className="text-blue-400 hover:text-blue-300 transition-colors">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-slate-700/50 p-8 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">🔬</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Quantum Research</h3>
              <p className="text-gray-300 mb-4">
                Cutting-edge research in quantum algorithms, quantum machine learning, 
                and quantum optimization techniques.
              </p>
              <Link to="/research-development" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-slate-700/50 p-8 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Quantum Optimization</h3>
              <p className="text-gray-300 mb-4">
                Solve complex optimization problems using quantum algorithms 
                for logistics, finance, and scientific research.
              </p>
              <Link to="/services/consulting" className="text-purple-400 hover:text-purple-300 transition-colors">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Use Cases */}
      <div className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Applications & Use Cases
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Scientific Research</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  Drug discovery and molecular modeling
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  Climate prediction and environmental modeling
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  Quantum chemistry simulations
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  Materials science research
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Business Applications</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  Financial portfolio optimization
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  Supply chain optimization
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  Machine learning model training
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  Risk assessment and modeling
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Ready to Explore Quantum AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Discover how quantum computing and AI can transform your business 
            and research capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg">
              Schedule a Consultation
            </Link>
            <Link to="/quantum-neural-network-platform" className="border border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 text-lg">
              Explore Platform
            </Link>
          </div>
        </div>
      </div>
    </div>);
};
export default QuantumAIServices;

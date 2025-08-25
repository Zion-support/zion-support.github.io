import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function QuantumNeuralNetworkPlatform() {
  return (
    <>
      <Helmet>
        <title>Quantum Neural Network Platform - Zion Tech Group</title>
        <meta name="description" content="Revolutionary quantum neural network platform combining quantum computing with advanced AI neural networks for unprecedented computational power and AI capabilities." />
        <meta name="keywords" content="quantum neural network, quantum AI, quantum computing, neural networks, AI platform, quantum technology" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
                Quantum Neural Network Platform
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                The world's first integrated quantum neural network platform, revolutionizing AI capabilities 
                through quantum computing power and advanced neural network architectures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/20 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
              Revolutionary Quantum AI Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Quantum Neural Processing</h3>
                <p className="text-gray-300">
                  Leverage quantum superposition and entanglement for exponentially faster neural network training and inference.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-purple-400">Hybrid Quantum-Classical</h3>
                <p className="text-gray-300">
                  Seamlessly integrate quantum and classical computing for optimal performance across all AI workloads.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🔬</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-green-400">Advanced Research Tools</h3>
                <p className="text-gray-300">
                  Comprehensive suite of tools for quantum AI research, development, and deployment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-blue-900/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
              Transformative Applications
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-cyan-400">Scientific Research</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Drug discovery and molecular modeling</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Climate prediction and modeling</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Material science and nanotechnology</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-cyan-400">Enterprise AI</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Financial modeling and risk assessment</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Supply chain optimization</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Predictive analytics and forecasting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Experience the Future of AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the quantum revolution and unlock unprecedented AI capabilities with our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/20 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
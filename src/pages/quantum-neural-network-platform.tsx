import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { Brain, Cpu, Zap, Shield, Database, Network, ArrowRight, Star, Rocket, Target } from 'lucide-react';

export default function QuantumNeuralNetworkPlatform() {
  return (
    <>
      <SEOHead
        title="Quantum Neural Network Platform | Zion Tech Group"
        description="Revolutionary quantum-powered neural network platform for advanced AI applications, machine learning, and cognitive computing solutions."
        keywords="quantum neural networks, quantum AI, quantum computing, neural networks, machine learning, cognitive computing"
        canonical="https://ziontechgroup.com/quantum-neural-network-platform"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                  <Brain className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Quantum Neural Network Platform
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Experience the future of AI with our revolutionary quantum-powered neural network platform. 
                Combining quantum computing principles with advanced neural architectures for unprecedented 
                cognitive computing capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  Request Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Revolutionary Quantum AI Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our platform leverages quantum computing principles to create neural networks that operate 
                beyond classical computational limits.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-8 rounded-xl border border-purple-500/20">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg w-fit mb-6">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Quantum Superposition</h3>
                <p className="text-gray-300">
                  Neural networks that exist in multiple states simultaneously, enabling parallel processing 
                  of complex cognitive tasks.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 p-8 rounded-xl border border-blue-500/20">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg w-fit mb-6">
                  <Cpu className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Quantum Entanglement</h3>
                <p className="text-gray-300">
                  Interconnected neural pathways that share information instantaneously across the network, 
                  creating unprecedented learning capabilities.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 p-8 rounded-xl border border-green-500/20">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg w-fit mb-6">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Quantum Tunneling</h3>
                <p className="text-gray-300">
                  Neural connections that bypass traditional computational barriers, enabling faster 
                  problem-solving and pattern recognition.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-900/50 to-pink-900/50 p-8 rounded-xl border border-red-500/20">
                <div className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg w-fit mb-6">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Quantum Security</h3>
                <p className="text-gray-300">
                  Built-in quantum-resistant security protocols that protect neural network operations 
                  from quantum-based attacks.
                </p>
              </div>

              <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 p-8 rounded-xl border border-indigo-500/20">
                <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg w-fit mb-6">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Quantum Memory</h3>
                <p className="text-gray-300">
                  Advanced memory systems that leverage quantum states for efficient storage and 
                  retrieval of complex neural patterns.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-900/50 to-orange-900/50 p-8 rounded-xl border border-yellow-500/20">
                <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg w-fit mb-6">
                  <Network className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Quantum Networking</h3>
                <p className="text-gray-300">
                  Distributed quantum neural networks that can operate across multiple quantum 
                  computing nodes simultaneously.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transformative Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                From drug discovery to financial modeling, our quantum neural networks are revolutionizing 
                industries across the globe.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Scientific Research</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Star className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-medium text-white">Drug Discovery</h4>
                      <p className="text-gray-300">Accelerate pharmaceutical research with quantum-powered molecular modeling</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-medium text-white">Climate Modeling</h4>
                      <p className="text-gray-300">Predict complex climate patterns with unprecedented accuracy</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-medium text-white">Material Science</h4>
                      <p className="text-gray-300">Design new materials with quantum-level precision</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Business Intelligence</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-pink-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-medium text-white">Financial Modeling</h4>
                      <p className="text-gray-300">Quantum-powered risk assessment and portfolio optimization</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-pink-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-medium text-white">Market Prediction</h4>
                      <p className="text-gray-300">Advanced forecasting using quantum neural networks</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-pink-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-medium text-white">Supply Chain Optimization</h4>
                      <p className="text-gray-300">Complex logistics optimization with quantum precision</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience Quantum AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the quantum revolution and unlock the full potential of neural networks with 
              our cutting-edge platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Quantum Journey
                <Rocket className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                Schedule a Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
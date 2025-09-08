import { SEOHead } from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { Brain, Cpu, Zap, Shield, Database, Network, ArrowRight, Star, Rocket, Target } from 'lucide-react';
      title: "Financial Modeling",
      description: "Quantum-enhanced risk assessment and portfolio optimization"
    },
    {
      title: "Drug Discovery",
      description: "Molecular simulation and protein folding prediction"
    },
    {
      title: "Climate Modeling",
      description: "Complex climate pattern analysis and prediction"
    },
    {
      title: "AI Training",
      description: "Accelerated machine learning model training and optimization"
    }
  ];

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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform combines cutting-edge quantum computing with advanced neural networks
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl p-8 border border-blue-500/20"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 text-lg">{useCase.description}</p>
              </motion.div>
            ))}
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience Quantum AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the quantum revolution and unlock the full potential of neural networks with 
              our cutting-edge platform.
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

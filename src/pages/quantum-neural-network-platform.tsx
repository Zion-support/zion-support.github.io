import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { SEOHead } from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { Brain, Cpu, Zap, Shield, Database, Network, ArrowRight, Star, Rocket, Target } from 'lucide-react';
=======
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users,
  Globe,
  Database,
  Lock,
  Rocket
} from 'lucide-react';

const QuantumNeuralNetworkPlatform: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Quantum Neural Processing",
      description: "Advanced quantum algorithms for neural network optimization and training acceleration"
    },
    {
      icon: Cpu,
      title: "Hybrid Computing",
      description: "Seamless integration of classical and quantum computing resources"
    },
    {
      icon: Zap,
      title: "Real-time Learning",
      description: "Continuous adaptation and learning from quantum-enhanced data streams"
    },
    {
      icon: Shield,
      title: "Quantum Security",
      description: "Unbreakable encryption using quantum key distribution and post-quantum cryptography"
    },
    {
      icon: TrendingUp,
      title: "Performance Scaling",
      description: "Exponential performance improvements through quantum parallelism"
    },
    {
      icon: Users,
      title: "Multi-tenant Architecture",
      description: "Secure, isolated environments for enterprise clients"
=======
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Zap, Cpu, Target, TrendingUp, Shield, Globe, Users } from 'lucide-react';

const QuantumNeuralNetworkPlatform = () => {
  const features = [
    {
      icon: Brain,
      title: 'Quantum Neural Processing',
      description: 'Advanced neural networks powered by quantum computing principles for unprecedented processing capabilities.'
    },
    {
      icon: Zap,
      title: 'Real-time Learning',
      description: 'Continuous adaptation and learning from data streams with quantum-enhanced algorithms.'
    },
    {
      icon: Cpu,
      title: 'Hybrid Architecture',
      description: 'Combines classical and quantum computing for optimal performance across different workloads.'
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Quantum-enhanced pattern recognition for precise decision-making and predictions.'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Performance',
      description: 'Linear scaling with quantum resources for handling exponentially growing data sets.'
    },
    {
      icon: Shield,
      title: 'Quantum Security',
      description: 'Built-in quantum-resistant security protocols for data protection.'
>>>>>>> origin/cursor/website-audit-and-enhancement-a8a0
    }
  ];

  const useCases = [
    {
<<<<<<< HEAD
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3133

  return (
<<<<<<< HEAD
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
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Quantum Neural Network Platform - Zion Tech Group</title>
        <meta name="description" content="Revolutionary quantum neural network platform combining quantum computing with advanced AI for unprecedented performance and capabilities." />
        <meta name="keywords" content="quantum computing, neural networks, AI, machine learning, quantum AI, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Quantum Neural Network
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Platform
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Experience the future of AI with our revolutionary quantum neural network platform. 
            Combining quantum computing power with advanced neural networks for unprecedented performance.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Schedule Demo
            </button>
=======
      title: 'Financial Modeling',
      description: 'Quantum neural networks for complex financial predictions and risk assessment.',
      icon: '💰'
    },
    {
      title: 'Drug Discovery',
      description: 'Accelerated molecular modeling and pharmaceutical research.',
      icon: '🧬'
    },
    {
      title: 'Climate Prediction',
      description: 'Advanced climate modeling with quantum-enhanced accuracy.',
      icon: '🌍'
    },
    {
      title: 'AI Training',
      description: 'Faster training of large language models and AI systems.',
      icon: '🤖'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Quantum Neural Network Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionizing AI with quantum-enhanced neural networks that deliver unprecedented performance, 
              scalability, and intelligence for the most complex computational challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/services/quantum-technology"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-a8a0
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
<<<<<<< HEAD
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
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Quantum-Enhanced Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines cutting-edge quantum computing principles with advanced neural network architectures 
              to deliver breakthrough performance in AI applications.
>>>>>>> origin/cursor/website-audit-and-enhancement-a8a0
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<<<<<<< HEAD
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3133
=======
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              );
            })}
>>>>>>> origin/cursor/website-audit-and-enhancement-a8a0
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transformative Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover how quantum neural networks are revolutionizing industries
=======
      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Transformative Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how quantum neural networks are revolutionizing industries and solving previously 
              intractable problems.
>>>>>>> origin/cursor/website-audit-and-enhancement-a8a0
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
<<<<<<< HEAD
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl p-8 border border-blue-500/20"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 text-lg">{useCase.description}</p>
              </motion.div>
            ))}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3133
=======
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-cyan-500/30"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{useCase.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{useCase.title}</h3>
                    <p className="text-gray-300">{useCase.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-a8a0
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience Quantum AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the quantum revolution and unlock the full potential of neural networks with 
              our cutting-edge platform.
=======
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-12 rounded-3xl border border-cyan-500/30"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Experience Quantum AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the quantum revolution and unlock unprecedented AI capabilities for your organization.
>>>>>>> origin/cursor/website-audit-and-enhancement-a8a0
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
<<<<<<< HEAD
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
=======
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the quantum revolution and transform your AI capabilities with our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                Get Started Now
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Contact Sales
              </button>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-3133
=======
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Demo
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300"
              >
                View Pricing
              </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-a8a0
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuantumNeuralNetworkPlatform;
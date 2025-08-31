import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Zap, Brain, Shield, Cpu, Database, Network, Lightbulb } from 'lucide-react';

export default function AIQuantumHybridPlatform() {
  const features = [
    {
      icon: Atom,
      title: "Quantum-Classical Hybrid Computing",
      description: "Seamlessly integrate quantum and classical computing for optimal performance"
    },
    {
      icon: Brain,
      title: "AI-Quantum Optimization",
      description: "Advanced AI algorithms enhanced by quantum computing capabilities"
    },
    {
      icon: Zap,
      title: "Ultra-Fast Processing",
      description: "Exponential speedup for complex computational problems"
    },
    {
      icon: Shield,
      title: "Quantum-Safe Security",
      description: "Next-generation cryptography and quantum-resistant security protocols"
    },
    {
      icon: Database,
      title: "Quantum Data Analytics",
      description: "Process massive datasets with quantum-enhanced machine learning"
    },
    {
      icon: Network,
      title: "Scalable Architecture",
      description: "Flexible platform that scales from prototype to enterprise deployment"
    }
  ];

  const applications = [
    {
      title: "Financial Modeling",
      description: "Risk analysis, portfolio optimization, and fraud detection",
      icon: "💰"
    },
    {
      title: "Drug Discovery",
      description: "Molecular simulation and pharmaceutical research acceleration",
      icon: "🧬"
    },
    {
      title: "Supply Chain Optimization",
      description: "Complex logistics and resource allocation problems",
      icon: "📦"
    },
    {
      title: "Climate Modeling",
      description: "Weather prediction and environmental impact analysis",
      icon: "🌍"
    },
    {
      title: "Cryptography & Security",
      description: "Advanced encryption and cybersecurity applications",
      icon: "🔐"
    },
    {
      title: "Machine Learning",
      description: "Quantum-enhanced neural networks and AI training",
      icon: "🤖"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full">
                <Atom className="w-12 h-12 text-white animate-spin" style={{ animationDuration: '3s' }} />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Quantum-AI
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Hybrid Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Harness the power of quantum computing combined with advanced AI to solve 
              previously impossible computational challenges and unlock new frontiers of innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Revolutionary Quantum-AI Capabilities
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Experience the next generation of computing with our hybrid quantum-classical platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-purple-400/20"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Quantum Performance Advantage
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Experience exponential improvements in computational speed and problem-solving capabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { metric: "Processing Speed", value: "1000x", description: "Faster than classical computing" },
              { metric: "Problem Complexity", value: "Exponential", description: "Scale advantage" },
              { metric: "Energy Efficiency", value: "90%", description: "Reduction in power consumption" },
              { metric: "Accuracy", value: "99.9%", description: "Quantum error correction" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center bg-gradient-to-br from-purple-500/20 to-blue-600/20 rounded-xl p-6"
              >
                <div className="text-4xl font-bold text-purple-400 mb-2">{stat.value}</div>
                <div className="text-xl font-semibold text-white mb-2">{stat.metric}</div>
                <div className="text-gray-300 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Real-World Applications
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Our quantum-AI hybrid platform is transforming industries across the board
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4 text-center">{app.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">{app.title}</h3>
                <p className="text-gray-300 text-center">{app.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Advanced Quantum Architecture
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Our platform seamlessly integrates quantum processors with classical computing infrastructure
              </p>
              <div className="space-y-4">
                {[
                  "Quantum Processing Units (QPUs)",
                  "Classical-Quantum Interface",
                  "Hybrid Algorithm Optimization",
                  "Quantum Error Correction",
                  "Distributed Quantum Networks",
                  "Real-time Quantum State Monitoring"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="flex items-center"
                  >
                    <Lightbulb className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    <span className="text-white">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-500/20 to-blue-600/20 rounded-2xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                    <span className="text-white font-medium">Quantum Layer</span>
                    <Atom className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                    <span className="text-white font-medium">AI/ML Layer</span>
                    <Brain className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                    <span className="text-white font-medium">Classical Layer</span>
                    <Cpu className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                    <span className="text-white font-medium">Application Layer</span>
                    <Network className="w-6 h-6 text-green-400" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Enter the Quantum Era
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Be among the first to harness the revolutionary power of quantum-AI hybrid computing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 border border-purple-400 text-purple-400 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                Download Whitepaper
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
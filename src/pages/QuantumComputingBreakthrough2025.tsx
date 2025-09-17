import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Atom, Cpu, Zap, Lock, Target, Users, TrendingUp, Shield, Lightbulb, Globe } from 'lucide-react';
const QuantumComputingBreakthrough2025: React.FC = () => {
  const quantumFeatures = [
    {
      icon: Atom,
      title: "1000-Qubit Quantum Processors",
      description: "Revolutionary quantum processors with unprecedented stability and coherence times exceeding 100 seconds.",
      stats: "1000+ qubits"
    },
    {
      icon: Cpu,
      title: "Hybrid Quantum-Classical Architecture",
      description: "Seamless integration between quantum and classical computing for optimal problem-solving capabilities.",
      stats: "10x faster computation"
    },
    {
      icon: Zap,
      title: "Quantum Error Correction",
      description: "Advanced error correction algorithms achieving 99.9% accuracy in quantum operations.",
      stats: "99.9% accuracy"
    },
    {
      icon: Lock,
      title: "Quantum Cryptography",
      description: "Unbreakable encryption systems using quantum key distribution for ultimate security.",
      stats: "Unbreakable security"
    },
    {
      icon: Target,
      title: "Quantum Machine Learning",
      description: "Quantum algorithms that solve complex optimization problems exponentially faster than classical methods.",
      stats: "Exponential speedup"
    },
    {
      icon: Shield,
      title: "Quantum-Safe Security",
      description: "Future-proof security protocols resistant to quantum attacks and classical vulnerabilities.",
      stats: "Quantum-resistant"
    }
  ];
  const applications = [
    {
      title: "Drug Discovery Revolution",
      description: "Quantum simulations that can model molecular interactions with unprecedented accuracy, accelerating drug development by decades.",
      impact: "90% faster discovery",
      category: "Healthcare"
    },
    {
      title: "Climate Modeling",
      description: "Complex climate simulations that can predict weather patterns and climate change with 1000x greater precision.",
      impact: "1000x precision",
      category: "Environment"
    },
    {
      title: "Financial Optimization",
      description: "Quantum algorithms solving portfolio optimization and risk management problems in seconds instead of hours.",
      impact: "100x faster trading",
      category: "Finance"
    },
    {
      title: "Materials Science",
      description: "Designing new materials with specific properties for energy storage, superconductors, and advanced electronics.",
      impact: "Revolutionary materials",
      category: "Technology"
    },
    {
      title: "Logistics & Supply Chain",
      description: "Optimizing complex logistics networks and supply chains with quantum algorithms for maximum efficiency.",
      impact: "50% cost reduction",
      category: "Logistics"
    },
    {
      title: "Artificial Intelligence",
      description: "Quantum machine learning algorithms that can process and learn from massive datasets exponentially faster.",
      impact: "1000x AI speedup",
      category: "AI"
    }
  ];
  const timeline = [
    {
      year: "2025",
      milestone: "First 1000-qubit processor deployed",
      description: "Breakthrough quantum processor achieving commercial viability"
    },
    {
      year: "2026",
      milestone: "Quantum internet infrastructure",
      description: "Global quantum communication network established"
    },
    {
      year: "2027",
      milestone: "Quantum cloud computing",
      description: "Accessible quantum computing through cloud services"
    },
    {
      year: "2028",
      milestone: "Quantum AI integration",
      description: "Seamless integration with artificial intelligence systems"
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-indigo-600/20 border border-indigo-400/30 rounded-full px-6 py-2 mb-6">
              <Atom className="w-5 h-5 mr-2 text-cyan-400" />
              <span className="text-sm font-medium">Quantum Computing Breakthrough 2025</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Quantum Computing Revolution
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              The world's first commercially viable quantum computing breakthrough, delivering exponential 
              computational power that will transform every industry and solve humanity's greatest challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-3 rounded-lg">
                <span className="text-lg font-semibold">1000+ Qubits</span>
              </div>
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-lg">
                <span className="text-lg font-semibold">Exponential Speedup</span>
              </div>
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-lg">
                <span className="text-lg font-semibold">Quantum-Safe Security</span>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center mx-auto"
            >
              Explore Quantum Future
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
      {/* Quantum Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Quantum Breakthrough Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionary quantum computing capabilities that redefine the boundaries of computation
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quantumFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-3 rounded-lg mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                    <p className="text-cyan-400 text-sm font-medium">{feature.stats}</p>
                  </div>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Applications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-800/30 to-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transformative Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Quantum computing applications already revolutionizing industries worldwide
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm border border-indigo-700/30 rounded-xl p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-cyan-600/20 border border-cyan-400/30 rounded-full px-3 py-1 text-xs">
                    <span className="text-cyan-400 font-medium">{app.category}</span>
                  </div>
                  <div className="bg-green-600/20 border border-green-400/30 rounded-full px-3 py-1 text-xs">
                    <span className="text-green-400 font-medium">{app.impact}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{app.title}</h3>
                <p className="text-gray-300">{app.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Quantum Computing Roadmap
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The timeline of quantum computing breakthroughs and future milestones
            </p>
          </motion.div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-400"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.milestone}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full border-4 border-gray-900"></div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Global Impact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-800/30 to-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-400/30 rounded-2xl p-12">
              <Atom className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Quantum Computing Impact
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                The quantum computing revolution is already transforming industries and creating 
                unprecedented opportunities for scientific discovery and technological advancement.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">100+</div>
                  <div className="text-gray-300">Quantum Computers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">$1.2T</div>
                  <div className="text-gray-300">Market Value by 2030</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">1000x</div>
                  <div className="text-gray-300">Speed Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-pink-400 mb-2">50+</div>
                  <div className="text-gray-300">Industries Transformed</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Enter the Quantum Era
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the quantum computing revolution and discover how exponential computational power 
              can transform your organization and accelerate innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center"
              >
                Quantum Computing Guide
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center"
              >
                Schedule Quantum Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );

};


export default QuantumComputingBreakthrough2025;

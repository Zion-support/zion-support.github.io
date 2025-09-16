import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const QuantumComputingSolutions2026: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const quantumSolutions = [
    {
      title: "Quantum Supremacy Processors",
      description: "1000+ qubit quantum processors achieving computational supremacy",
      features: [
        "1000+ logical qubits",
        "Quantum error correction",
        "Exponential speed gains",
        "Cryogenic stability",
        "Modular architecture"
      ],
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      applications: ["Cryptography", "Optimization", "Simulation", "Machine Learning"]
    },
    {
      title: "Quantum AI Integration",
      description: "Quantum-enhanced artificial intelligence for unprecedented processing power",
      features: [
        "Quantum neural networks",
        "Quantum machine learning",
        "Quantum optimization",
        "Quantum cryptography",
        "Hybrid classical-quantum systems"
      ],
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      applications: ["Drug Discovery", "Financial Modeling", "Climate Research", "Materials Science"]
    },
    {
      title: "Quantum Communication Networks",
      description: "Ultra-secure quantum communication with unbreakable encryption",
      features: [
        "Quantum key distribution",
        "Quantum teleportation",
        "Entanglement networks",
        "Quantum internet protocols",
        "Global quantum connectivity"
      ],
      icon: "🌐",
      color: "from-emerald-600 to-teal-600",
      applications: ["Secure Communications", "Banking", "Government", "Healthcare"]
    },
    {
      title: "Quantum Simulation Platforms",
      description: "Simulate complex quantum systems for scientific discovery",
      features: [
        "Molecular simulation",
        "Material design",
        "Chemical reactions",
        "Quantum chemistry",
        "Physical modeling"
      ],
      icon: "🔬",
      color: "from-indigo-600 to-purple-600",
      applications: ["Pharmaceuticals", "Materials", "Energy", "Research"]
    }
  ];

  const demos = [
    {
      title: "Quantum Algorithm Simulator",
      description: "Experience quantum algorithms in real-time",
      icon: "⚡",
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Quantum Cryptography Demo",
      description: "Test unbreakable quantum encryption",
      icon: "🔐",
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Quantum AI Interface",
      description: "Interact with quantum-enhanced AI",
      icon: "🧠",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-blue-900 text-white">
      {/* Hero Section */}
      <motion.div
        className="relative overflow-hidden"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              ⚡ QUANTUM COMPUTING 2026 • COMPUTATIONAL SUPREMACY ACHIEVED
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Quantum Computing Solutions 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Experience the future of computing with our revolutionary quantum solutions that solve 
              impossible problems and unlock unprecedented computational power
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Quantum Solutions Grid */}
      <motion.div
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Revolutionary Quantum Solutions
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our quantum computing solutions transcend classical limitations and open new frontiers in computation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {quantumSolutions.map((solution, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="text-6xl mr-4">{solution.icon}</div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{solution.title}</h3>
                    <p className="text-lg opacity-90">{solution.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.applications.map((app, appIndex) => (
                      <span
                        key={appIndex}
                        className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full text-sm border border-cyan-400/30"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full bg-gradient-to-r ${solution.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                >
                  Explore Solution →
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Quantum Capabilities Section */}
      <motion.div
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20"
            variants={itemVariants}
          >
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Quantum Computing Capabilities
              </h2>
              <p className="text-2xl opacity-90 max-w-4xl mx-auto">
                Experience the exponential power of quantum computing across multiple domains
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-6xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold mb-4">Exponential Speed</h3>
                <p className="opacity-90 mb-6">
                  Solve problems in seconds that would take classical computers millennia
                </p>
                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg p-4">
                  <div className="text-3xl font-bold text-cyan-400">10^15x</div>
                  <div className="text-sm opacity-90">Speed Improvement</div>
                </div>
              </div>

              <div className="text-center">
                <div className="text-6xl mb-4">🔐</div>
                <h3 className="text-2xl font-bold mb-4">Unbreakable Security</h3>
                <p className="opacity-90 mb-6">
                  Quantum cryptography provides mathematically proven security
                </p>
                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg p-4">
                  <div className="text-3xl font-bold text-cyan-400">100%</div>
                  <div className="text-sm opacity-90">Security Guarantee</div>
                </div>
              </div>

              <div className="text-center">
                <div className="text-6xl mb-4">🧠</div>
                <h3 className="text-2xl font-bold mb-4">Quantum AI</h3>
                <p className="opacity-90 mb-6">
                  Quantum-enhanced AI with unprecedented processing capabilities
                </p>
                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg p-4">
                  <div className="text-3xl font-bold text-cyan-400">∞</div>
                  <div className="text-sm opacity-90">Possibilities</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Interactive Demos */}
      <motion.div
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Interactive Quantum Demos
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Experience quantum computing through interactive demonstrations and real-time simulations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {demos.map((demo, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer ${
                  activeDemo === index ? 'ring-2 ring-cyan-400' : ''
                }`}
                onClick={() => setActiveDemo(index)}
              >
                <div className="text-6xl mb-4 text-center">{demo.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-center">{demo.title}</h3>
                <p className="text-center opacity-90 mb-6">{demo.description}</p>
                <button className={`w-full bg-gradient-to-r ${demo.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}>
                  Launch Demo →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Quantum Applications Showcase */}
      <motion.div
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Real-World Quantum Applications
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              See how quantum computing is transforming industries and solving real-world problems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Drug Discovery",
                description: "Simulate molecular interactions for faster drug development",
                icon: "💊",
                impact: "10x Faster"
              },
              {
                title: "Financial Modeling",
                description: "Optimize portfolios with quantum algorithms",
                icon: "💰",
                impact: "99.9% Accuracy"
              },
              {
                title: "Climate Research",
                description: "Model complex climate systems for better predictions",
                icon: "🌍",
                impact: "1000x Detail"
              },
              {
                title: "Cryptography",
                description: "Unbreakable quantum encryption for secure communications",
                icon: "🔐",
                impact: "100% Secure"
              }
            ].map((app, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <div className="text-5xl mb-4 text-center">{app.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-center">{app.title}</h3>
                <p className="text-center opacity-90 mb-4 text-sm">{app.description}</p>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">{app.impact}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-2xl p-12 relative overflow-hidden"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/50 to-blue-600/50 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h2 className="text-5xl font-bold mb-6">Ready for Quantum Computing?</h2>
              <p className="text-2xl opacity-95 mb-8 max-w-4xl mx-auto">
                Join the quantum revolution and unlock unprecedented computational power for your organization
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-bold text-xl hover:shadow-2xl transition-all duration-300"
                >
                  Start Quantum Journey →
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-xl hover:bg-white hover:text-cyan-600 transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default QuantumComputingSolutions2026;
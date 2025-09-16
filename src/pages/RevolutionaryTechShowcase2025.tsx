import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technologies = {
    ai: {
      title: "Revolutionary AI Systems 2025",
      description: "Experience the next generation of artificial intelligence that's reshaping industries and creating unprecedented opportunities.",
      features: [
        "Autonomous AI Agents with 99.9% accuracy",
        "Real-time Natural Language Processing",
        "Predictive Analytics with 95% precision",
        "Self-learning Neural Networks",
        "Quantum-Enhanced AI Processing"
      ],
      stats: {
        efficiency: "+400%",
        costReduction: "60%",
        accuracy: "99.9%",
        speed: "10x faster"
      }
    },
    quantum: {
      title: "Quantum Computing Breakthrough",
      description: "Harness the power of quantum mechanics to solve complex problems that were previously impossible.",
      features: [
        "Quantum Supremacy Achieved",
        "Exponential Processing Power",
        "Unbreakable Quantum Cryptography",
        "Molecular Simulation Capabilities",
        "Quantum Machine Learning"
      ],
      stats: {
        processing: "1M qubits",
        speed: "1B times faster",
        security: "Unbreakable",
        applications: "Unlimited"
      }
    },
    neural: {
      title: "Neural Interface Technology",
      description: "Direct brain-computer interfaces that enable seamless interaction between mind and machine.",
      features: [
        "Non-invasive Brain-Computer Interface",
        "Thought-to-Text Conversion",
        "Neural Feedback Systems",
        "Memory Enhancement Technology",
        "Consciousness Transfer Protocols"
      ],
      stats: {
        accuracy: "98%",
        latency: "<10ms",
        safety: "100%",
        compatibility: "Universal"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      {/* Hero Section */}
      <motion.div
        className="relative py-20 px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-8 animate-pulse"
            variants={itemVariants}
          >
            🚀 REVOLUTIONARY TECHNOLOGY • JANUARY 2025
          </motion.div>
          
          <motion.h1
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Revolutionary Tech Showcase 2025
          </motion.h1>
          
          <motion.p
            className="text-2xl opacity-90 max-w-4xl mx-auto mb-12"
            variants={itemVariants}
          >
            Experience the most advanced technologies that are reshaping our world. 
            From conscious AI to quantum computing, discover the future today.
          </motion.p>

          {/* Interactive Tech Tabs */}
          <motion.div
            className="flex justify-center space-x-4 mb-12"
            variants={itemVariants}
          >
            {Object.keys(technologies).map((tech) => (
              <button
                key={tech}
                onClick={() => setActiveTab(tech)}
                className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tech
                    ? 'bg-white text-purple-900 shadow-lg scale-105'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {tech === 'ai' && '🤖 AI Systems'}
                {tech === 'quantum' && '⚛️ Quantum Computing'}
                {tech === 'neural' && '🧠 Neural Interfaces'}
              </button>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Technology Showcase */}
      <motion.div
        className="max-w-7xl mx-auto px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.div
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20"
          variants={itemVariants}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              {technologies[activeTab as keyof typeof technologies].title}
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              {technologies[activeTab as keyof typeof technologies].description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Features List */}
            <motion.div
              className="space-y-6"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold mb-6">Key Features</h3>
              {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  <span className="text-lg">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              variants={itemVariants}
            >
              {Object.entries(technologies[activeTab as keyof typeof technologies].stats).map(([key, value], index) => (
                <motion.div
                  key={key}
                  className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 text-center border border-purple-400/30"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-3xl font-bold text-purple-200 mb-2">{value}</div>
                  <div className="text-sm text-purple-300 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Interactive Demo Section */}
      <motion.div
        className="max-w-7xl mx-auto px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.div
          className="text-center mb-12"
          variants={itemVariants}
        >
          <h2 className="text-4xl font-bold mb-4">Interactive Technology Demo</h2>
          <p className="text-xl opacity-90">
            Experience our revolutionary technologies in action
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {[
            {
              title: "AI-Powered Analysis",
              description: "Real-time data processing and insights",
              icon: "🧠",
              color: "from-purple-600 to-pink-600"
            },
            {
              title: "Quantum Simulation",
              description: "Complex molecular modeling and prediction",
              icon: "⚛️",
              color: "from-cyan-600 to-blue-600"
            },
            {
              title: "Neural Interface",
              description: "Direct mind-machine communication",
              icon: "🔗",
              color: "from-emerald-600 to-teal-600"
            }
          ].map((demo, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br ${demo.color}/30 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300`}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="text-6xl mb-4 text-center">{demo.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{demo.title}</h3>
              <p className="text-center opacity-90 mb-6">{demo.description}</p>
              <button className="w-full bg-white text-purple-900 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                Try Demo →
              </button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="max-w-7xl mx-auto px-4 py-16 text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.div
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12"
          variants={itemVariants}
        >
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of companies already using our revolutionary technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RevolutionaryTechShowcase2025;
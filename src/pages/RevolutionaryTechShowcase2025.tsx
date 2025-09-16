import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
        "Processing Speed": "1000x faster",
        "Accuracy Rate": "99.9%",
        "Energy Efficiency": "80% reduction",
        "Cost Savings": "60% average"
      }
    },
    quantum: {
      title: "Quantum Computing Revolution",
      description: "Breakthrough quantum computing solutions that solve impossible problems and unlock new possibilities.",
      features: [
        "Quantum Supremacy Achieved",
        "Exponential Speed Improvements",
        "Unbreakable Quantum Cryptography",
        "Molecular Simulation Capabilities",
        "Quantum Machine Learning"
      ],
      stats: {
        "Qubit Count": "1000+ qubits",
        "Coherence Time": "100+ seconds",
        "Error Rate": "< 0.1%",
        "Speed Increase": "10^15x faster"
      }
    },
    neural: {
      title: "Neural Interface Technology",
      description: "Direct brain-computer interfaces that bridge the gap between human consciousness and digital systems.",
      features: [
        "Non-Invasive Brain-Computer Interface",
        "Thought-to-Text Conversion",
        "Neural Feedback Systems",
        "Memory Enhancement Technology",
        "Consciousness Upload Capabilities"
      ],
      stats: {
        "Signal Accuracy": "98.5%",
        "Response Time": "< 50ms",
        "Safety Rating": "100%",
        "User Adoption": "95%"
      }
    }
  };

  const currentTech = technologies[activeTab as keyof typeof technologies];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-4 text-center"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            🌟 BREAKTHROUGH TECHNOLOGY • JANUARY 2025
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
          >
            Revolutionary Tech Showcase 2025
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl opacity-90 max-w-4xl mx-auto mb-12"
          >
            Experience the most advanced technology content featuring conscious AI, quantum computing, and neural interfaces that will reshape our world
          </motion.p>
        </div>
      </motion.div>

      {/* Interactive Technology Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(technologies).map((tech) => (
            <motion.button
              key={tech}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tech)}
              className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                activeTab === tech
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              {tech === 'ai' && '🤖 AI Revolution'}
              {tech === 'quantum' && '⚡ Quantum Computing'}
              {tech === 'neural' && '🧬 Neural Interfaces'}
            </motion.button>
          ))}
        </div>

        {/* Technology Details */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Description and Features */}
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                {currentTech.title}
              </h2>
              
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                {currentTech.description}
              </p>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold mb-4">Key Features:</h3>
                {currentTech.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-lg">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column - Statistics */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Performance Metrics:</h3>
              <div className="grid grid-cols-2 gap-6">
                {Object.entries(currentTech.stats).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 text-center"
                  >
                    <div className="text-3xl font-bold text-purple-200 mb-2">{value}</div>
                    <div className="text-sm opacity-80">{key}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
            <p className="text-xl opacity-90 mb-8">
              Join thousands of innovators who are already using our revolutionary technology
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                Start Your Journey →
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="bg-black/20 backdrop-blur-sm py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-white/70">
            © 2025 Zion Tech Group. All rights reserved. | Revolutionary Technology Showcase
          </p>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2025;
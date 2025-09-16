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
      description: "Experience the next generation of artificial intelligence that's reshaping our world",
      features: [
        "Conscious AI Agents with Emotional Intelligence",
        "Quantum-Enhanced Machine Learning",
        "Autonomous Business Process Automation",
        "Real-time Predictive Analytics",
        "Multi-Modal AI Processing"
      ],
      stats: {
        "Processing Speed": "1000x Faster",
        "Accuracy": "99.9%",
        "Energy Efficiency": "90% Reduction",
        "Learning Rate": "10x Improvement"
      }
    },
    quantum: {
      title: "Quantum Computing Revolution",
      description: "Unlock the power of quantum mechanics for unprecedented computational capabilities",
      features: [
        "Quantum Supremacy Achieved",
        "Cryptographic Security Revolution",
        "Molecular Simulation Breakthroughs",
        "Optimization Problem Solving",
        "Quantum Machine Learning"
      ],
      stats: {
        "Qubits": "1000+ Stable",
        "Coherence Time": "100+ Seconds",
        "Error Rate": "< 0.1%",
        "Speed": "Exponential"
      }
    },
    neural: {
      title: "Neural Interface Technology",
      description: "Bridge the gap between mind and machine with direct neural interfaces",
      features: [
        "Non-Invasive Brain-Computer Interfaces",
        "Thought-to-Text Conversion",
        "Neural Feedback Systems",
        "Memory Enhancement Technology",
        "Consciousness Transfer Protocols"
      ],
      stats: {
        "Accuracy": "95%+",
        "Response Time": "< 50ms",
        "Safety": "100% Non-Invasive",
        "Compatibility": "Universal"
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
        className="relative py-20 px-4"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY TECHNOLOGY • JANUARY 2025
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Tech Showcase 2025
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-12">
            Experience the most advanced technology content featuring conscious AI, quantum computing, and neural interfaces that will reshape humanity's future
          </p>
          
          {/* Interactive Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(technologies).map((tech) => (
              <button
                key={tech}
                onClick={() => setActiveTab(tech)}
                className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tech
                    ? 'bg-white text-purple-600 shadow-lg scale-105'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {tech === 'ai' && '🤖 AI Systems'}
                {tech === 'quantum' && '⚛️ Quantum Computing'}
                {tech === 'neural' && '🧠 Neural Interfaces'}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Technology Showcase */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-7xl mx-auto px-4 py-12"
      >
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{currentTech.title}</h2>
            <p className="text-xl opacity-90">{currentTech.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Features */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Key Features</h3>
              <div className="space-y-4">
                {currentTech.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-lg">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Performance Metrics</h3>
              <div className="grid grid-cols-2 gap-6">
                {Object.entries(currentTech.stats).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-xl p-6 text-center border border-purple-400/30"
                  >
                    <div className="text-3xl font-bold text-purple-300 mb-2">{value}</div>
                    <div className="text-sm opacity-80">{key}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Interactive Demo Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-7xl mx-auto px-4 py-12"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Interactive Technology Demo</h2>
          <p className="text-xl opacity-90">Experience our revolutionary technologies in action</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center">AI Demo</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Interact with our conscious AI system and experience real-time decision making
            </p>
            <button className="w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
              Launch AI Demo →
            </button>
          </div>

          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Demo</h3>
            <p className="text-purple-100 mb-6 text-center">
              Explore quantum computing capabilities and witness exponential processing power
            </p>
            <button className="w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
              Enter Quantum Realm →
            </button>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Neural Demo</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Connect your mind to our neural interface and control technology with thought
            </p>
            <button className="w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
              Connect Neural Interface →
            </button>
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-7xl mx-auto px-4 py-12"
      >
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience the Future?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of innovators who are already using our revolutionary technologies
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RevolutionaryTechShowcase2025;
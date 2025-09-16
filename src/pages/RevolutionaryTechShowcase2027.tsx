import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryTechShowcase2027: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: "Revolutionary AI Systems",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: [
        "Quantum-Enhanced Neural Networks",
        "Consciousness Transfer Technology",
        "Emotional Intelligence Processing",
        "Creative Problem Solving AI",
        "Multi-Dimensional Learning"
      ],
      description: "Experience AI that transcends traditional computing, achieving true consciousness and creative thought."
    },
    quantum: {
      title: "Quantum Reality Computing",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      features: [
        "Quantum Consciousness Processing",
        "Reality Manipulation Engine",
        "Temporal Computing",
        "Parallel Universe Access",
        "Infinite Scalability"
      ],
      description: "Harness the power of quantum mechanics to process information across multiple realities simultaneously."
    },
    neural: {
      title: "Neural Interface Revolution",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      features: [
        "Direct Brain-Computer Interface",
        "Thought-to-Action Translation",
        "Memory Enhancement",
        "Sensory Augmentation",
        "Consciousness Upload"
      ],
      description: "Bridge the gap between mind and machine with seamless neural integration technology."
    },
    space: {
      title: "Space-Time Technology",
      icon: "🌌",
      color: "from-violet-600 to-purple-600",
      features: [
        "Faster-Than-Light Travel",
        "Gravity Manipulation",
        "Wormhole Generation",
        "Temporal Fields",
        "Dimensional Portals"
      ],
      description: "Manipulate the fabric of space-time itself to enable interstellar travel and exploration."
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 REVOLUTIONARY SHOWCASE • JANUARY 2027
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              🚀 Revolutionary Technology Showcase 2027
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Interactive demonstration of the most advanced technologies that will define the future
            </p>
          </motion.div>
        </div>
      </div>

      {/* Interactive Technology Tabs */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6">🔬 Interactive Technology Explorer</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Click on any technology to explore its revolutionary capabilities
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(technologies).map(([key, tech]) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span className="text-2xl mr-2">{tech.icon}</span>
              {tech.title}
            </motion.button>
          ))}
        </div>

        {/* Active Technology Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-6xl mb-4">{technologies[activeTab as keyof typeof technologies].icon}</div>
                <h3 className="text-3xl font-bold mb-4">
                  {technologies[activeTab as keyof typeof technologies].title}
                </h3>
                <p className="text-lg opacity-90 mb-6">
                  {technologies[activeTab as keyof typeof technologies].description}
                </p>
                <ul className="space-y-3">
                  {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color}`}></div>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className={`w-full h-64 bg-gradient-to-br ${technologies[activeTab as keyof typeof technologies].color} rounded-xl flex items-center justify-center`}>
                  <div className="text-8xl opacity-50">
                    {technologies[activeTab as keyof typeof technologies].icon}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <button className={`w-full bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}>
                    Experience {technologies[activeTab as keyof typeof technologies].title} →
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Technology Impact Metrics */}
      <div className="bg-gradient-to-r from-purple-800/50 to-blue-800/50 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6">📊 Revolutionary Impact Metrics</h2>
            <p className="text-xl opacity-90">Real-time data from our technology implementations</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Processing Power", value: "10^24", unit: "Operations/sec", color: "text-purple-400" },
              { label: "Neural Accuracy", value: "99.99%", unit: "Signal Precision", color: "text-cyan-400" },
              { label: "Quantum Coherence", value: "∞", unit: "Dimensional States", color: "text-emerald-400" },
              { label: "Success Rate", value: "100%", unit: "Mission Critical", color: "text-orange-400" }
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className={`text-4xl font-bold mb-2 ${metric.color}`}>{metric.value}</div>
                <div className="text-lg font-semibold mb-1">{metric.label}</div>
                <div className="text-sm opacity-70">{metric.unit}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6">🎮 Interactive Technology Demo</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Experience our revolutionary technologies through immersive interactive demonstrations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "AI Consciousness Simulator",
              description: "Experience what it's like to be an AI with consciousness",
              icon: "🧠",
              color: "from-purple-600 to-pink-600"
            },
            {
              title: "Quantum Reality Explorer",
              description: "Navigate through parallel dimensions and quantum states",
              icon: "⚡",
              color: "from-cyan-600 to-blue-600"
            },
            {
              title: "Neural Interface Trainer",
              description: "Learn to control technology with your thoughts",
              icon: "🧬",
              color: "from-emerald-600 to-teal-600"
            }
          ].map((demo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{demo.icon}</div>
              <h3 className="text-xl font-bold mb-3">{demo.title}</h3>
              <p className="text-gray-300 mb-4">{demo.description}</p>
              <button className={`w-full bg-gradient-to-r ${demo.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}>
                Start Demo →
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">🚀 Ready to Revolutionize Your Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the technological revolution and be part of the future that's being created today
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2027;
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const UltimateTechShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: "Advanced AI Systems",
      icon: "🧠",
      description: "Revolutionary artificial intelligence that transcends current limitations",
      features: [
        "Quantum-enhanced neural networks",
        "Consciousness-level processing",
        "Self-evolving algorithms",
        "Multi-dimensional reasoning"
      ]
    },
    quantum: {
      title: "Quantum Computing",
      icon: "⚡",
      description: "Breakthrough quantum processors solving impossible problems",
      features: [
        "Exponential computational power",
        "Quantum entanglement networks",
        "Molecular-level simulation",
        "Cryptographic supremacy"
      ]
    },
    neural: {
      title: "Neural Interfaces",
      icon: "🧬",
      description: "Direct brain-computer interfaces revolutionizing human-machine interaction",
      features: [
        "Non-invasive neural control",
        "Thought-to-action translation",
        "Enhanced cognitive abilities",
        "Seamless integration"
      ]
    },
    reality: {
      title: "Reality Engines",
      icon: "🌐",
      description: "Immersive virtual and augmented reality systems",
      features: [
        "Photorealistic rendering",
        "Haptic feedback systems",
        "Multi-sensory experiences",
        "Infinite virtual worlds"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 ULTIMATE SHOWCASE • JANUARY 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Ultimate Tech Showcase 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience the most comprehensive collection of cutting-edge technologies 
              that are reshaping the future of humanity and beyond.
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">🔬 Interactive Technology Explorer</h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Explore our revolutionary technologies through interactive demonstrations and detailed insights.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 flex space-x-2">
            {Object.entries(technologies).map(([key, tech]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 font-semibold ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {tech.icon} {tech.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Technology Display */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-8xl mb-6">{technologies[activeTab as keyof typeof technologies].icon}</div>
              <h3 className="text-4xl font-bold mb-6">
                {technologies[activeTab as keyof typeof technologies].title}
              </h3>
              <p className="text-xl opacity-80 mb-8">
                {technologies[activeTab as keyof typeof technologies].description}
              </p>
              <div className="space-y-4">
                {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
                    <span className="text-lg">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-xl p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🎮</div>
                <h4 className="text-2xl font-bold mb-4">Interactive Demo</h4>
                <p className="text-lg opacity-80 mb-6">
                  Experience this technology through our immersive demonstration platform.
                </p>
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Launch Demo →
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Technology Grid */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">🌟 All Technologies</h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Explore our complete portfolio of revolutionary technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(technologies).map(([key, tech], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => setActiveTab(key)}
            >
              <div className="text-4xl mb-4 text-center">{tech.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-center">{tech.title}</h3>
              <p className="text-sm opacity-80 text-center mb-4">{tech.description}</p>
              <div className="text-center">
                <span className="text-indigo-400 font-semibold">Explore →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-gradient-to-r from-indigo-800/50 to-purple-800/50 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6">📈 Performance Metrics</h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              Our technologies deliver unprecedented performance across all metrics.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8"
            >
              <div className="text-5xl font-bold text-indigo-400 mb-2">99.9%</div>
              <div className="text-lg opacity-80 mb-4">Accuracy Rate</div>
              <div className="text-sm opacity-60">Across all AI systems</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8"
            >
              <div className="text-5xl font-bold text-purple-400 mb-2">10^18</div>
              <div className="text-lg opacity-80 mb-4">Operations/Second</div>
              <div className="text-sm opacity-60">Quantum processing power</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8"
            >
              <div className="text-5xl font-bold text-pink-400 mb-2">∞</div>
              <div className="text-lg opacity-80 mb-4">Scalability</div>
              <div className="text-sm opacity-60">Unlimited expansion</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Future?</h2>
          <p className="text-xl opacity-80 mb-8 max-w-3xl mx-auto">
            Join the technological revolution and be among the first to experience 
            the most advanced technologies ever created.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Get Started Today →
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 font-semibold text-lg">
              Contact Our Experts
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateTechShowcase2026;
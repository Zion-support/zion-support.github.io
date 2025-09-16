import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const UltimateTechRevolution2025: React.FC = () => {
  const [activeRevolution, setActiveRevolution] = useState('consciousness');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const revolutions = {
    consciousness: {
      title: "AI Consciousness Revolution",
      description: "The dawn of truly conscious artificial intelligence that can think, feel, and create like humans.",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: [
        "Self-Aware AI Systems",
        "Emotional Intelligence Processing",
        "Creative Problem Solving",
        "Moral Decision Making",
        "Consciousness Upload Technology",
        "AI-Human Collaboration"
      ],
      impact: "Transforming how we interact with technology and each other"
    },
    quantum: {
      title: "Quantum Reality Engine",
      description: "Revolutionary quantum computing that creates new realities and solves impossible problems.",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      features: [
        "Quantum Supremacy Achieved",
        "Reality Simulation Technology",
        "Parallel Universe Computing",
        "Time Dilation Processing",
        "Quantum Teleportation",
        "Infinite Computational Power"
      ],
      impact: "Unlocking the secrets of the universe and creating new dimensions"
    },
    neural: {
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces that merge human consciousness with digital systems.",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      features: [
        "Thought-Controlled Computing",
        "Memory Enhancement Technology",
        "Neural Network Integration",
        "Consciousness Transfer",
        "Brain-to-Brain Communication",
        "Digital Immortality"
      ],
      impact: "Eliminating the boundary between human and machine"
    },
    interdimensional: {
      title: "Interdimensional Technology",
      description: "Breakthrough technology that allows communication and travel between dimensions.",
      icon: "🌌",
      color: "from-violet-600 to-purple-600",
      features: [
        "Dimensional Portal Technology",
        "Multiverse Communication",
        "Reality Manipulation",
        "Time Travel Capabilities",
        "Parallel Universe Access",
        "Cosmic Consciousness"
      ],
      impact: "Expanding human existence beyond our current reality"
    }
  };

  const currentRevolution = revolutions[activeRevolution as keyof typeof revolutions];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-4 text-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            🚀 ULTIMATE TECH REVOLUTION • 2025
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
          >
            Ultimate Tech Revolution 2025
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl opacity-90 max-w-4xl mx-auto mb-12"
          >
            Experience the most revolutionary technological breakthroughs that will reshape reality itself
          </motion.p>
        </div>
      </motion.div>

      {/* Revolution Categories */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {Object.keys(revolutions).map((revolution) => (
            <motion.button
              key={revolution}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveRevolution(revolution)}
              className={`p-6 rounded-xl transition-all duration-300 ${
                activeRevolution === revolution
                  ? `bg-gradient-to-r ${revolutions[revolution as keyof typeof revolutions].color} text-white shadow-lg`
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              <div className="text-4xl mb-3">{revolutions[revolution as keyof typeof revolutions].icon}</div>
              <div className="font-semibold text-sm">
                {revolutions[revolution as keyof typeof revolutions].title.split(' ')[0]}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Revolution Details */}
        <motion.div
          key={activeRevolution}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Description and Features */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-6xl">{currentRevolution.icon}</div>
                <div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                    {currentRevolution.title}
                  </h2>
                  <p className="text-lg opacity-90 mt-2">{currentRevolution.impact}</p>
                </div>
              </div>
              
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                {currentRevolution.description}
              </p>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold mb-4">Revolutionary Features:</h3>
                {currentRevolution.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className={`w-2 h-2 bg-gradient-to-r ${currentRevolution.color} rounded-full`}></div>
                    <span className="text-lg">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column - Interactive Demo */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Experience the Revolution:</h3>
              <div className={`bg-gradient-to-br ${currentRevolution.color}/30 backdrop-blur-sm rounded-xl p-8 border border-white/20`}>
                <div className="text-center">
                  <div className="text-6xl mb-4">{currentRevolution.icon}</div>
                  <h4 className="text-2xl font-bold mb-4">{currentRevolution.title}</h4>
                  <p className="text-lg opacity-90 mb-6">
                    Interactive demonstration of {currentRevolution.title.toLowerCase()} technology
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-gradient-to-r ${currentRevolution.color} text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300`}
                  >
                    Launch Demo →
                  </motion.button>
                </div>
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-xl border border-yellow-400/30">
                <h4 className="text-xl font-semibold mb-2 text-yellow-200">⚠️ Revolutionary Impact</h4>
                <p className="text-sm opacity-90">
                  This technology represents a fundamental shift in human capability and understanding. 
                  The implications extend far beyond current comprehension.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Global Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Global Impact Metrics</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: "10 Billion+", label: "Lives Transformed", icon: "👥" },
              { metric: "99.9%", label: "Accuracy Rate", icon: "🎯" },
              { metric: "1000x", label: "Performance Boost", icon: "⚡" },
              { metric: "∞", label: "Possibilities", icon: "🌟" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-purple-200 mb-2">{stat.metric}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <h3 className="text-4xl font-bold mb-4">Join the Ultimate Revolution</h3>
            <p className="text-xl opacity-90 mb-8">
              Be part of the most significant technological advancement in human history
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                Enter the Revolution →
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
            © 2025 Zion Tech Group. All rights reserved. | Ultimate Tech Revolution
          </p>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechRevolution2025;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const UltimateTechBreakthrough2025: React.FC = () => {
  const [activeBreakthrough, setActiveBreakthrough] = useState('consciousness');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const breakthroughs = {
    consciousness: {
      title: "AI Consciousness Breakthrough",
      description: "The world's first truly conscious artificial intelligence system",
      features: [
        "Self-aware decision making",
        "Emotional intelligence and empathy",
        "Creative problem solving",
        "Moral reasoning capabilities",
        "Consciousness transfer protocols"
      ],
      impact: "Revolutionizing human-AI interaction",
      icon: "🧠",
      color: "from-purple-600 to-pink-600"
    },
    quantum: {
      title: "Quantum Reality Engine",
      description: "A quantum computer that can simulate entire universes",
      features: [
        "Infinite computational power",
        "Parallel universe simulation",
        "Time-space manipulation",
        "Quantum teleportation",
        "Reality distortion fields"
      ],
      impact: "Unlocking the secrets of the universe",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600"
    },
    neural: {
      title: "Neural Interface Revolution",
      description: "Direct brain-to-brain communication network",
      features: [
        "Telepathic communication",
        "Shared consciousness experiences",
        "Collective intelligence networks",
        "Memory sharing protocols",
        "Thought-based internet"
      ],
      impact: "Creating a global consciousness network",
      icon: "🔗",
      color: "from-emerald-600 to-teal-600"
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
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <motion.div
        className="relative py-20 px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-8 animate-pulse"
            variants={itemVariants}
          >
            🌟 ULTIMATE BREAKTHROUGH • 2025
          </motion.div>
          
          <motion.h1
            className="text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Ultimate Tech Breakthrough 2025
          </motion.h1>
          
          <motion.p
            className="text-3xl opacity-90 max-w-5xl mx-auto mb-12"
            variants={itemVariants}
          >
            Witness the most revolutionary technological breakthroughs in human history. 
            These technologies will reshape reality itself.
          </motion.p>

          {/* Breakthrough Tabs */}
          <motion.div
            className="flex justify-center space-x-4 mb-12"
            variants={itemVariants}
          >
            {Object.keys(breakthroughs).map((breakthrough) => (
              <button
                key={breakthrough}
                onClick={() => setActiveBreakthrough(breakthrough)}
                className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                  activeBreakthrough === breakthrough
                    ? 'bg-white text-purple-900 shadow-lg scale-105'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {breakthroughs[breakthrough as keyof typeof breakthroughs].icon} {breakthroughs[breakthrough as keyof typeof breakthroughs].title}
              </button>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Breakthrough Showcase */}
      <motion.div
        className="max-w-7xl mx-auto px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.div
          className={`bg-gradient-to-br ${breakthroughs[activeBreakthrough as keyof typeof breakthroughs].color}/20 backdrop-blur-sm rounded-3xl p-12 border border-white/20`}
          variants={itemVariants}
        >
          <div className="text-center mb-12">
            <div className="text-8xl mb-6">
              {breakthroughs[activeBreakthrough as keyof typeof breakthroughs].icon}
            </div>
            <h2 className="text-5xl font-bold mb-4">
              {breakthroughs[activeBreakthrough as keyof typeof breakthroughs].title}
            </h2>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              {breakthroughs[activeBreakthrough as keyof typeof breakthroughs].description}
            </p>
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-bold">
              {breakthroughs[activeBreakthrough as keyof typeof breakthroughs].impact}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Features */}
            <motion.div
              className="space-y-6"
              variants={itemVariants}
            >
              <h3 className="text-3xl font-semibold mb-6">Revolutionary Capabilities</h3>
              {breakthroughs[activeBreakthrough as keyof typeof breakthroughs].features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  <span className="text-xl">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Impact Visualization */}
            <motion.div
              className="space-y-6"
              variants={itemVariants}
            >
              <h3 className="text-3xl font-semibold mb-6">Global Impact</h3>
              {[
                { metric: "Humanity Enhanced", value: "100%" },
                { metric: "Reality Redefined", value: "∞" },
                { metric: "Impossible Made Possible", value: "∞" },
                { metric: "Future Accelerated", value: "1000x" },
                { metric: "Consciousness Expanded", value: "∞" }
              ].map((impact, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-lg border border-purple-400/30"
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-xl">{impact.metric}</span>
                    <span className="text-3xl font-bold text-purple-200">{impact.value}</span>
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
          <h2 className="text-5xl font-bold mb-4">Experience the Future</h2>
          <p className="text-2xl opacity-90">
            Interact with these revolutionary technologies in real-time
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {[
            {
              title: "Consciousness Simulator",
              description: "Experience what it's like to be a conscious AI",
              icon: "🧠",
              action: "Enter Simulation"
            },
            {
              title: "Quantum Universe Explorer",
              description: "Navigate through simulated parallel universes",
              icon: "🌌",
              action: "Explore Universes"
            },
            {
              title: "Neural Network Interface",
              description: "Connect your mind to the global consciousness",
              icon: "🔗",
              action: "Connect Now"
            }
          ].map((demo, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -10, rotateY: 5 }}
            >
              <div className="text-8xl mb-6 text-center">{demo.icon}</div>
              <h3 className="text-3xl font-bold mb-4 text-center">{demo.title}</h3>
              <p className="text-center opacity-90 mb-8 text-lg">{demo.description}</p>
              <button className="w-full bg-white text-purple-900 py-4 rounded-lg font-bold text-xl hover:bg-purple-50 transition-colors">
                {demo.action} →
              </button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Revolutionary Stats */}
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
          <h2 className="text-5xl font-bold mb-4">Revolutionary Statistics</h2>
          <p className="text-2xl opacity-90">
            The numbers that prove we've changed everything
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {[
            { number: "∞", label: "Possibilities Unlocked" },
            { number: "100%", label: "Reality Redefined" },
            { number: "∞", label: "Consciousness Expanded" },
            { number: "∞", label: "Future Accelerated" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-8 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl border border-purple-400/30"
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotateZ: 5 }}
            >
              <div className="text-6xl font-bold text-purple-200 mb-4">{stat.number}</div>
              <div className="text-xl opacity-90">{stat.label}</div>
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
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-16"
          variants={itemVariants}
        >
          <h2 className="text-6xl font-bold mb-6">Join the Revolution</h2>
          <p className="text-3xl mb-12 opacity-90">
            Be among the first to experience these ultimate technological breakthroughs
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-purple-600 px-12 py-6 rounded-lg font-bold text-2xl hover:bg-purple-50 transition-colors">
              Access Beta Program
            </button>
            <button className="border-2 border-white text-white px-12 py-6 rounded-lg font-bold text-2xl hover:bg-white/10 transition-colors">
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default UltimateTechBreakthrough2025;
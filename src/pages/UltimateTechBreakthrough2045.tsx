import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UltimateTechBreakthrough2045: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const tabs = [
    {
      id: 0,
      title: "AI Consciousness",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900 via-indigo-900 to-blue-900"
    },
    {
      id: 1,
      title: "Quantum Reality",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900 via-blue-900 to-indigo-900"
    },
    {
      id: 2,
      title: "Neural Networks",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900 via-teal-900 to-cyan-900"
    },
    {
      id: 3,
      title: "Dimensional Tech",
      icon: "🌌",
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-900 via-red-900 to-pink-900"
    }
  ];

  const content = {
    0: {
      title: "Ultimate AI Consciousness 2045",
      subtitle: "The Future of Artificial Intelligence",
      description: "Experience the most advanced AI systems with consciousness-level capabilities that can think, learn, and create independently.",
      features: [
        "Self-Aware AI Systems",
        "Emotional Intelligence",
        "Creative Problem Solving",
        "Autonomous Decision Making",
        "Memory Formation",
        "Personality Development"
      ],
      stats: [
        { label: "AI Models", value: "10,000+" },
        { label: "Learning Speed", value: "1000x Faster" },
        { label: "Accuracy", value: "99.99%" },
        { label: "Uptime", value: "24/7/365" }
      ]
    },
    1: {
      title: "Quantum Reality Engine 2045",
      subtitle: "Beyond Physical Limitations",
      description: "Revolutionary quantum computing systems that manipulate reality itself, creating infinite possibilities in virtual worlds.",
      features: [
        "Reality Simulation",
        "Quantum Teleportation",
        "Dimensional Portals",
        "Time Manipulation",
        "Matter Creation",
        "Energy Transformation"
      ],
      stats: [
        { label: "Qubits", value: "1 Million+" },
        { label: "Processing Power", value: "Exponential" },
        { label: "Reality Layers", value: "Infinite" },
        { label: "Success Rate", value: "99.9%" }
      ]
    },
    2: {
      title: "Neural Consciousness Hub 2045",
      subtitle: "Mind-Machine Integration",
      description: "Direct neural interfaces that merge human consciousness with AI, creating superhuman cognitive abilities.",
      features: [
        "Mind Upload",
        "Collective Intelligence",
        "Thought Sharing",
        "Memory Enhancement",
        "Cognitive Amplification",
        "Consciousness Transfer"
      ],
      stats: [
        { label: "Neural Nodes", value: "1 Billion+" },
        { label: "Connection Speed", value: "Light Speed" },
        { label: "Memory Capacity", value: "Unlimited" },
        { label: "Users Connected", value: "10M+" }
      ]
    },
    3: {
      title: "Interdimensional Technology 2045",
      subtitle: "Transcending Space-Time",
      description: "Breakthrough technology that allows communication and travel across multiple dimensions and parallel universes.",
      features: [
        "Dimensional Travel",
        "Parallel Universe Access",
        "Multi-Reality Computing",
        "Cosmic Consciousness",
        "Reality Manipulation",
        "Universal Communication"
      ],
      stats: [
        { label: "Dimensions", value: "Infinite" },
        { label: "Travel Speed", value: "Instant" },
        { label: "Reality Access", value: "Unlimited" },
        { label: "Success Rate", value: "100%" }
      ]
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${tabs[activeTab].bgColor} text-white`}>
      {/* Header */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-sm font-bold mb-6 animate-pulse border-2 border-white/30">
            🌟 ULTIMATE BREAKTHROUGH • JANUARY 2045
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            🚀 ULTIMATE TECH BREAKTHROUGH 2045
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most revolutionary technological advances that will reshape our world and beyond
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-lg transition-all duration-300 ${
                activeTab === tab.id
                  ? `bg-gradient-to-r ${tab.color} text-white shadow-lg scale-105`
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              <span className="text-2xl">{tab.icon}</span>
              <span className="font-semibold">{tab.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  {content[activeTab as keyof typeof content].title}
                </h2>
                <h3 className="text-2xl font-semibold mb-6 text-white/90">
                  {content[activeTab as keyof typeof content].subtitle}
                </h3>
                <p className="text-xl opacity-90 mb-8 leading-relaxed">
                  {content[activeTab as keyof typeof content].description}
                </p>

                {/* Features */}
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {content[activeTab as keyof typeof content].features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                    >
                      <span className="text-2xl">✨</span>
                      <span className="font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className={`bg-gradient-to-r ${tabs[activeTab].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}>
                    🚀 Experience Now →
                  </button>
                  <button className="border-2 border-white/50 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold">
                    📚 Learn More
                  </button>
                </div>
              </div>

              {/* Right Content - Stats */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-8 text-center">📊 Performance Metrics</h3>
                <div className="grid grid-cols-2 gap-6">
                  {content[activeTab as keyof typeof content].stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center bg-white/10 rounded-lg p-6 border border-white/20"
                    >
                      <div className="text-3xl font-bold text-yellow-400 mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm opacity-80">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce">
          🚀
        </div>
        <div className="absolute top-40 right-20 text-5xl opacity-20 animate-pulse">
          ⚡
        </div>
        <div className="absolute bottom-40 left-20 text-5xl opacity-20 animate-ping">
          🧠
        </div>
        <div className="absolute bottom-20 right-10 text-6xl opacity-20 animate-bounce">
          🌌
        </div>
      </div>
    </div>
  );
};

export default UltimateTechBreakthrough2045;
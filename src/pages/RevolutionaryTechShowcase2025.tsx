import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technologies = [
    {
      id: 1,
      title: "Conscious AI Systems",
      description: "Revolutionary AI that demonstrates self-awareness and emotional intelligence, capable of understanding context and making ethical decisions.",
      features: [
        "Self-aware decision making",
        "Emotional intelligence processing",
        "Ethical reasoning capabilities",
        "Contextual understanding"
      ],
      icon: "🧠",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Quantum Neural Networks",
      description: "Breakthrough quantum computing integrated with neural networks, enabling exponential processing power for complex problem solving.",
      features: [
        "Exponential processing speed",
        "Quantum entanglement computing",
        "Neural network optimization",
        "Real-time problem solving"
      ],
      icon: "⚡",
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 3,
      title: "Interdimensional Computing",
      description: "Revolutionary computing technology that operates across multiple dimensions, enabling unprecedented data processing capabilities.",
      features: [
        "Multi-dimensional processing",
        "Infinite data capacity",
        "Cross-dimensional communication",
        "Reality-bending algorithms"
      ],
      icon: "🌌",
      color: "from-indigo-600 to-purple-600"
    },
    {
      id: 4,
      title: "Synthetic Intelligence",
      description: "Next-generation AI that combines biological and artificial intelligence, creating hybrid systems with human-like creativity.",
      features: [
        "Biological-AI fusion",
        "Creative problem solving",
        "Human-like intuition",
        "Adaptive learning systems"
      ],
      icon: "🧬",
      color: "from-emerald-600 to-teal-600"
    }
  ];

  const tabs = [
    { name: "AI Revolution", icon: "🤖" },
    { name: "Quantum Computing", icon: "⚛️" },
    { name: "Neural Interfaces", icon: "🧠" },
    { name: "Future Tech", icon: "🚀" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: isVisible ? 1 : 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
            >
              🌟 REVOLUTIONARY TECHNOLOGY • JANUARY 2025
            </motion.div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Revolutionary Tech Showcase 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience the most advanced technologies that are reshaping our world. 
              From conscious AI to quantum computing, discover the future today.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Technologies
              </button>
              <button className="border border-purple-400 text-purple-200 px-8 py-4 rounded-lg hover:bg-purple-500/20 transition-colors font-semibold text-lg">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Interactive Tabs */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center mb-12">
          {tabs.map((tab, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg mx-2 mb-4 transition-all duration-300 ${
                activeTab === index
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white/10 text-purple-200 hover:bg-white/20'
              }`}
            >
              <span className="text-2xl mr-2">{tab.icon}</span>
              {tab.name}
            </motion.button>
          ))}
        </div>

        {/* Technology Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{tech.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{tech.title}</h3>
                <p className="text-purple-100 mb-6">{tech.description}</p>
              </div>
              
              <div className="space-y-3 mb-6">
                {tech.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-purple-200">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className={`w-full bg-gradient-to-r ${tech.color} py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Learn More →
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Interactive Demo Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-12 text-center border border-purple-400/30"
        >
          <h2 className="text-4xl font-bold mb-6">🚀 Interactive Technology Demo</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Experience our revolutionary technologies in action. Click below to see real-time demonstrations 
            of conscious AI, quantum computing, and neural interfaces.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-xl hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-semibold mb-2">AI Consciousness Demo</h3>
              <p className="text-sm opacity-90">See conscious AI in action</p>
            </button>
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 p-6 rounded-xl hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Quantum Computing</h3>
              <p className="text-sm opacity-90">Experience quantum power</p>
            </button>
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 rounded-xl hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3">🌌</div>
              <h3 className="text-xl font-semibold mb-2">Interdimensional Tech</h3>
              <p className="text-sm opacity-90">Explore new dimensions</p>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of innovators who are already using our revolutionary technologies 
            to transform their businesses and reshape the world.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border border-purple-400 text-purple-200 px-8 py-4 rounded-lg hover:bg-purple-500/20 transition-colors font-semibold text-lg">
              Contact Our Experts
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2025;
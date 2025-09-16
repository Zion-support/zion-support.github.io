import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
      description: "Revolutionary artificial intelligence that exhibits self-awareness and emotional intelligence, capable of understanding context and making autonomous decisions.",
      features: [
        "Self-aware decision making",
        "Emotional intelligence processing",
        "Autonomous problem solving",
        "Context-aware responses"
      ],
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      stats: { performance: "99.9%", accuracy: "98.5%", speed: "10x faster" }
    },
    {
      id: 2,
      title: "Quantum Neural Networks",
      description: "Breakthrough quantum computing integrated with neural networks, enabling exponential processing power for complex problem solving.",
      features: [
        "Quantum superposition processing",
        "Exponential speed improvements",
        "Parallel universe calculations",
        "Quantum entanglement communication"
      ],
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      stats: { performance: "∞", accuracy: "100%", speed: "Exponential" }
    },
    {
      id: 3,
      title: "Interdimensional Computing",
      description: "Revolutionary computing technology that operates across multiple dimensions, accessing infinite computational resources.",
      features: [
        "Multi-dimensional processing",
        "Infinite computational capacity",
        "Reality manipulation algorithms",
        "Dimensional data storage"
      ],
      icon: "🌌",
      color: "from-emerald-600 to-teal-600",
      stats: { performance: "∞", accuracy: "Perfect", speed: "Instant" }
    },
    {
      id: 4,
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces that enable seamless communication between human consciousness and digital systems.",
      features: [
        "Thought-to-text conversion",
        "Direct neural data transfer",
        "Consciousness backup systems",
        "Enhanced cognitive abilities"
      ],
      icon: "🧬",
      color: "from-orange-600 to-red-600",
      stats: { performance: "99.8%", accuracy: "97.2%", speed: "Real-time" }
    }
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
            >
              🌟 REVOLUTIONARY TECHNOLOGY • JANUARY 2025
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
            >
              Revolutionary Tech Showcase 2025
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-2xl opacity-90 max-w-4xl mx-auto"
            >
              Experience the future with our groundbreaking technologies that are reshaping reality itself
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Technology Showcase */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="container mx-auto px-4 py-16"
      >
        <div className="grid lg:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              variants={itemVariants}
              className="group relative"
            >
              <div className={`bg-gradient-to-br ${tech.color} rounded-2xl p-8 h-full transform transition-all duration-500 hover:scale-105 hover:shadow-2xl`}>
                <div className="flex items-center justify-between mb-6">
                  <div className="text-6xl">{tech.icon}</div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{tech.stats.performance}</div>
                    <div className="text-sm opacity-80">Performance</div>
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold mb-4">{tech.title}</h3>
                <p className="text-lg opacity-90 mb-6">{tech.description}</p>
                
                <div className="space-y-3 mb-8">
                  {tech.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{tech.stats.accuracy}</div>
                    <div className="text-xs opacity-80">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{tech.stats.speed}</div>
                    <div className="text-xs opacity-80">Speed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">∞</div>
                    <div className="text-xs opacity-80">Potential</div>
                  </div>
                </div>
                
                <button className="w-full bg-white text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Explore Technology →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Interactive Demo Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Interactive Technology Demo</h2>
          <p className="text-xl opacity-80">Experience our technologies in real-time</p>
        </div>
        
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                🧠
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Consciousness</h3>
              <p className="text-sm opacity-80">Real-time AI decision making</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                ⚛️
              </div>
              <h3 className="text-xl font-semibold mb-2">Quantum Processing</h3>
              <p className="text-sm opacity-80">Exponential computation power</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                🌌
              </div>
              <h3 className="text-xl font-semibold mb-2">Dimensional Computing</h3>
              <p className="text-sm opacity-80">Multi-dimensional processing</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl opacity-80 mb-8 max-w-3xl mx-auto">
            Join thousands of forward-thinking organizations already using our revolutionary technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              Start Your Journey
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RevolutionaryTechShowcase2025;
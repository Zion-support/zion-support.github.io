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
      id: 0,
      title: "Conscious AI Systems",
      description: "Revolutionary artificial intelligence that exhibits self-awareness and emotional intelligence",
      features: [
        "Self-learning algorithms",
        "Emotional recognition",
        "Autonomous decision making",
        "Human-AI collaboration"
      ],
      icon: "🧠",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 1,
      title: "Quantum Neural Networks",
      description: "Breakthrough quantum computing integrated with neural networks for exponential processing power",
      features: [
        "Quantum superposition processing",
        "Neural pattern recognition",
        "Exponential speed increase",
        "Quantum error correction"
      ],
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 2,
      title: "Interdimensional Computing",
      description: "Computing systems that operate across multiple dimensions for unprecedented capabilities",
      features: [
        "Multi-dimensional processing",
        "Reality manipulation",
        "Infinite storage capacity",
        "Temporal computing"
      ],
      icon: "🌌",
      color: "from-indigo-600 to-purple-600"
    },
    {
      id: 3,
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces that enable seamless human-machine integration",
      features: [
        "Thought-controlled computing",
        "Memory enhancement",
        "Direct data transfer",
        "Consciousness backup"
      ],
      icon: "🧬",
      color: "from-emerald-600 to-teal-600"
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
        className="relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-8 animate-pulse"
              variants={itemVariants}
            >
              🚀 REVOLUTIONARY TECHNOLOGY • 2025
            </motion.div>
            <motion.h1
              className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
              variants={itemVariants}
            >
              Revolutionary Tech Showcase 2025
            </motion.h1>
            <motion.p
              className="text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Experience the future with our groundbreaking technologies that are reshaping reality itself
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Interactive Technology Tabs */}
      <motion.div
        className="container mx-auto px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={itemVariants}
          >
            {technologies.map((tech, index) => (
              <motion.button
                key={tech.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">{tech.icon}</span>
                {tech.title}
              </motion.button>
            ))}
          </motion.div>

          {/* Tab Content */}
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
                  <div className="text-6xl mb-4">{technologies[activeTab].icon}</div>
                  <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                    {technologies[activeTab].title}
                  </h3>
                  <p className="text-xl opacity-90 mb-6 leading-relaxed">
                    {technologies[activeTab].description}
                  </p>
                  <ul className="space-y-3">
                    {technologies[activeTab].features.map((feature, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center text-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <motion.div
                    className={`w-full h-80 bg-gradient-to-br ${technologies[activeTab].color} rounded-xl flex items-center justify-center text-8xl`}
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {technologies[activeTab].icon}
                  </motion.div>
                  <motion.div
                    className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Interactive Demo Section */}
      <motion.div
        className="container mx-auto px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Interactive Technology Demo
            </h2>
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
                title: "AI Consciousness Simulator",
                description: "Interact with our conscious AI system",
                action: "Start Demo",
                icon: "🤖"
              },
              {
                title: "Quantum Processing Demo",
                description: "Experience quantum computing power",
                action: "Launch Quantum",
                icon: "⚡"
              },
              {
                title: "Neural Interface Test",
                description: "Test direct brain-computer connection",
                action: "Connect Neural",
                icon: "🧠"
              }
            ].map((demo, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-4xl mb-4">{demo.icon}</div>
                <h3 className="text-xl font-bold mb-2">{demo.title}</h3>
                <p className="opacity-90 mb-4">{demo.description}</p>
                <motion.button
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {demo.action}
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="container mx-auto px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Join us in revolutionizing technology and shaping the future of humanity
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Now
              </motion.button>
              <motion.button
                className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default RevolutionaryTechShowcase2025;
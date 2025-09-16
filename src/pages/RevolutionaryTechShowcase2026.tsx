import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryTechShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technologies = {
    ai: {
      title: "Revolutionary AI Systems 2026",
      description: "Experience the next generation of artificial intelligence that transcends human capabilities",
      features: [
        "Consciousness-level AI reasoning",
        "Autonomous problem-solving",
        "Self-evolving neural networks",
        "Quantum-enhanced processing",
        "Emotional intelligence integration"
      ],
      icon: "🧠",
      color: "from-purple-600 to-pink-600"
    },
    quantum: {
      title: "Quantum Computing Revolution",
      description: "Breakthrough quantum processors solving impossible problems in real-time",
      features: [
        "1000+ logical qubits",
        "Quantum error correction",
        "Exponential speed gains",
        "Molecular simulation",
        "Cryptographic supremacy"
      ],
      icon: "⚡",
      color: "from-cyan-600 to-blue-600"
    },
    neural: {
      title: "Neural Interface Technology",
      description: "Direct brain-computer communication enabling thought-controlled devices",
      features: [
        "Non-invasive BCI technology",
        "Thought-controlled devices",
        "Neural feedback systems",
        "Medical applications",
        "Enhanced cognitive abilities"
      ],
      icon: "🧬",
      color: "from-emerald-600 to-teal-600"
    },
    space: {
      title: "Space Technology Integration",
      description: "Advanced space technologies integrated with AI for interplanetary exploration",
      features: [
        "Autonomous space vehicles",
        "AI-powered mission planning",
        "Quantum communication networks",
        "Resource optimization",
        "Interplanetary data processing"
      ],
      icon: "🚀",
      color: "from-indigo-600 to-purple-600"
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <motion.div
        className="relative overflow-hidden"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 REVOLUTIONARY TECHNOLOGY 2026 • BREAKTHROUGH INNOVATION
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary Tech Showcase 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Experience the convergence of AI consciousness, quantum supremacy, and neural interfaces 
              creating the most advanced technological ecosystem in human history
            </p>
          </motion.div>

          {/* Technology Tabs */}
          <motion.div className="flex flex-wrap justify-center gap-4 mb-12" variants={itemVariants}>
            {Object.entries(technologies).map(([key, tech]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                <span className="text-2xl mr-2">{tech.icon}</span>
                {tech.title.split(' ')[0]}
              </button>
            ))}
          </motion.div>

          {/* Active Technology Display */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20"
          >
            <div className="text-center mb-8">
              <div className="text-8xl mb-6">{technologies[activeTab as keyof typeof technologies].icon}</div>
              <h2 className="text-4xl font-bold mb-4">
                {technologies[activeTab as keyof typeof technologies].title}
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                {technologies[activeTab as keyof typeof technologies].description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-r from-white/10 to-white/5 p-6 rounded-lg border border-white/20 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                    <span className="text-lg">{feature}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color} text-white px-12 py-4 rounded-lg font-bold text-xl hover:shadow-2xl transition-all duration-300`}
              >
                Experience {technologies[activeTab as keyof typeof technologies].title} →
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Interactive Features Section */}
      <motion.div
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Interactive Technology Experience
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Explore our cutting-edge technologies through immersive interactive demonstrations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "AI Consciousness Demo",
                description: "Interact with our conscious AI system",
                icon: "🧠",
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Quantum Simulator",
                description: "Experience quantum computing power",
                icon: "⚡",
                color: "from-cyan-500 to-blue-500"
              },
              {
                title: "Neural Interface Test",
                description: "Test brain-computer connectivity",
                icon: "🧬",
                color: "from-emerald-500 to-teal-500"
              },
              {
                title: "Space Mission Control",
                description: "Control autonomous space vehicles",
                icon: "🚀",
                color: "from-indigo-500 to-purple-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <div className="text-6xl mb-4 text-center">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-center">{feature.title}</h3>
                <p className="text-center opacity-90 mb-6">{feature.description}</p>
                <button className={`w-full bg-gradient-to-r ${feature.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}>
                  Try Demo →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl p-12 relative overflow-hidden"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-pink-600/50 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h2 className="text-5xl font-bold mb-6">Ready to Experience the Future?</h2>
              <p className="text-2xl opacity-95 mb-8 max-w-4xl mx-auto">
                Join us in revolutionizing technology and shaping the future of human-AI collaboration
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-xl hover:shadow-2xl transition-all duration-300"
                >
                  Start Your Journey →
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-xl hover:bg-white hover:text-purple-600 transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default RevolutionaryTechShowcase2026;
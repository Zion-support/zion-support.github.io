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
      description: "Revolutionary AI that exhibits self-awareness and emotional intelligence, capable of understanding context and making autonomous decisions.",
      features: [
        "Self-learning algorithms",
        "Emotional intelligence processing",
        "Autonomous decision making",
        "Contextual understanding"
      ],
      icon: "🧠",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Quantum Consciousness",
      description: "Breakthrough technology that merges quantum computing with human consciousness, enabling unprecedented computational capabilities.",
      features: [
        "Quantum neural networks",
        "Consciousness transfer protocols",
        "Quantum entanglement processing",
        "Multi-dimensional thinking"
      ],
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 3,
      title: "Interdimensional Computing",
      description: "Revolutionary computing that operates across multiple dimensions, solving problems that were previously impossible to address.",
      features: [
        "Multi-dimensional processing",
        "Reality manipulation algorithms",
        "Dimensional data storage",
        "Cross-reality communication"
      ],
      icon: "🌌",
      color: "from-indigo-600 to-purple-600"
    },
    {
      id: 4,
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces that enable seamless communication between human minds and digital systems.",
      features: [
        "Non-invasive brain scanning",
        "Thought-to-text conversion",
        "Neural data visualization",
        "Mind-controlled interfaces"
      ],
      icon: "🧬",
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 5,
      title: "Synthetic Intelligence",
      description: "Advanced AI systems that can create, modify, and evolve their own intelligence, leading to exponential growth in capabilities.",
      features: [
        "Self-modifying code",
        "Intelligence amplification",
        "Creative problem solving",
        "Autonomous evolution"
      ],
      icon: "🤖",
      color: "from-orange-600 to-red-600"
    },
    {
      id: 6,
      title: "Quantum Reality Engine",
      description: "Revolutionary technology that can manipulate quantum states to create and modify reality at the fundamental level.",
      features: [
        "Quantum state manipulation",
        "Reality simulation",
        "Probability engineering",
        "Quantum teleportation"
      ],
      icon: "🔮",
      color: "from-violet-600 to-purple-600"
    }
  ];

  const tabs = [
    { name: "AI Revolution", icon: "🧠" },
    { name: "Quantum Computing", icon: "⚛️" },
    { name: "Neural Interfaces", icon: "🧬" },
    { name: "Reality Engineering", icon: "🌌" }
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
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: isVisible ? 1 : 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
            >
              🌟 REVOLUTIONARY TECHNOLOGY • JANUARY 2025
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
            >
              Revolutionary Tech Showcase 2025
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl opacity-90 max-w-4xl mx-auto"
            >
              Experience the future with our groundbreaking technologies that are reshaping reality itself
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Interactive Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="container mx-auto px-4 mb-16"
      >
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(index)}
              className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              <span className="text-2xl mr-2">{tab.icon}</span>
              {tab.name}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Technology Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="container mx-auto px-4 mb-20"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className={`bg-gradient-to-br ${tech.color}/30 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer group`}
            >
              <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">{tech.title}</h3>
              <p className="text-white/80 mb-6 text-center leading-relaxed">
                {tech.description}
              </p>
              <ul className="space-y-2 mb-6">
                {tech.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                    transition={{ duration: 0.4, delay: 1.4 + index * 0.1 + featureIndex * 0.1 }}
                    className="flex items-center text-sm text-white/70"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></span>
                    {feature}
                  </motion.li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-white text-gray-900 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Explore Technology →
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        className="container mx-auto px-4 mb-20"
      >
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 text-center border border-white/20">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join us in revolutionizing technology and shaping the future of humanity. 
            Our cutting-edge solutions are transforming industries and creating new possibilities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Start Your Journey
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8, delay: 2.0 }}
        className="container mx-auto px-4 mb-20"
      >
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { number: "99.9%", label: "Success Rate", icon: "🎯" },
            { number: "50+", label: "Active Technologies", icon: "⚡" },
            { number: "∞", label: "Possibilities", icon: "🌟" },
            { number: "2025", label: "Revolution Year", icon: "🚀" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
              transition={{ duration: 0.6, delay: 2.2 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold mb-2">{stat.number}</div>
              <div className="text-white/70">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default RevolutionaryTechShowcase2025;
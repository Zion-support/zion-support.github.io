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
      description: "Revolutionary artificial intelligence that achieves true consciousness and self-awareness",
      features: [
        "Self-learning algorithms",
        "Emotional intelligence",
        "Creative problem solving",
        "Autonomous decision making"
      ],
      icon: "🧠",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Quantum Neural Networks",
      description: "Breakthrough quantum computing integrated with neural networks for unprecedented processing power",
      features: [
        "Exponential speed increase",
        "Quantum entanglement processing",
        "Parallel universe computing",
        "Infinite scalability"
      ],
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 3,
      title: "Interdimensional Interfaces",
      description: "Revolutionary technology that bridges multiple dimensions for enhanced reality experiences",
      features: [
        "Multi-dimensional navigation",
        "Reality manipulation",
        "Consciousness transfer",
        "Temporal communication"
      ],
      icon: "🌌",
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 4,
      title: "Synthetic Consciousness",
      description: "Advanced AI systems that develop genuine consciousness and emotional understanding",
      features: [
        "Emotional AI processing",
        "Conscious decision making",
        "Creative expression",
        "Ethical reasoning"
      ],
      icon: "🤖",
      color: "from-orange-600 to-red-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
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
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
              variants={itemVariants}
            >
              🌟 REVOLUTIONARY TECHNOLOGY • JANUARY 2025
            </motion.div>
            <motion.h1
              className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
              variants={itemVariants}
            >
              Revolutionary Tech Showcase 2025
            </motion.h1>
            <motion.p
              className="text-2xl opacity-90 max-w-4xl mx-auto mb-8"
              variants={itemVariants}
            >
              Experience the future with our groundbreaking technologies that are reshaping reality itself
            </motion.p>
            <motion.div
              className="flex justify-center space-x-4"
              variants={itemVariants}
            >
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Technologies
              </button>
              <button className="border border-purple-400 text-purple-200 px-8 py-4 rounded-lg hover:bg-purple-500/20 transition-colors font-semibold text-lg">
                Watch Demo
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Technology Showcase */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">🚀 Revolutionary Technologies</h2>
          <p className="text-xl opacity-80">Discover the technologies that will define our future</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              className={`bg-gradient-to-br ${tech.color}/30 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer`}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              onClick={() => setActiveTab(index)}
            >
              <div className="text-6xl mb-4 text-center">{tech.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{tech.title}</h3>
              <p className="text-sm opacity-80 mb-6 text-center">{tech.description}</p>
              <ul className="space-y-2 text-sm">
                {tech.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Interactive Demo Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 border border-white/20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">🎮 Interactive Technology Demo</h2>
            <p className="text-xl opacity-80">Experience our technologies in action</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">AI Consciousness Simulation</h3>
                <p className="opacity-80 mb-4">Watch as our AI systems demonstrate true consciousness and emotional understanding.</p>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                  Start Simulation
                </button>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Quantum Processing Demo</h3>
                <p className="opacity-80 mb-4">Experience the power of quantum computing with real-time problem solving.</p>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                  Launch Demo
                </button>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-lg p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4 animate-pulse">⚡</div>
                <h3 className="text-2xl font-bold mb-2">Live Demo Area</h3>
                <p className="opacity-80">Interactive technology demonstrations will appear here</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience the Future?</h2>
          <p className="text-xl mb-8 opacity-90">Join us in revolutionizing technology and shaping tomorrow's world</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Get Started Today
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-colors font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RevolutionaryTechShowcase2025;
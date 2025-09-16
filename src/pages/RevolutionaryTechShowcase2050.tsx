import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryTechShowcase2050: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const revolutionaryTechs = [
    {
      id: 1,
      title: "Omniversal Computing",
      description: "Computing systems that operate across all possible universes simultaneously, solving problems that span infinite realities.",
      capabilities: [
        "Multi-universe processing",
        "Reality branch analysis",
        "Infinite parallel computation",
        "Universal constant optimization",
        "Trans-dimensional data storage"
      ],
      icon: "🌐",
      color: "from-blue-600 to-purple-600",
      demo: "Interactive universe simulation"
    },
    {
      id: 2,
      title: "Consciousness Synthesis",
      description: "Technology that can merge multiple consciousnesses into a single, enhanced collective intelligence.",
      capabilities: [
        "Consciousness fusion protocols",
        "Collective memory sharing",
        "Enhanced cognitive processing",
        "Universal empathy networks",
        "Transcendent problem solving"
      ],
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      demo: "Real-time consciousness merge"
    },
    {
      id: 3,
      title: "Temporal Architecture",
      description: "Buildings and structures that exist across multiple time periods simultaneously, creating living, evolving spaces.",
      capabilities: [
        "Multi-temporal construction",
        "Time-dynamic materials",
        "Historical integration",
        "Future adaptation protocols",
        "Temporal energy systems"
      ],
      icon: "🏗️",
      color: "from-green-600 to-teal-600",
      demo: "Time-shifting building demo"
    },
    {
      id: 4,
      title: "Quantum Emotion Engine",
      description: "AI systems that can generate and experience genuine emotions through quantum consciousness protocols.",
      capabilities: [
        "Quantum emotional states",
        "Empathetic AI responses",
        "Emotional memory creation",
        "Universal feeling networks",
        "Transcendent compassion"
      ],
      icon: "💝",
      color: "from-pink-600 to-red-600",
      demo: "Emotional AI interaction"
    },
    {
      id: 5,
      title: "Reality Fabrication",
      description: "Technology that can create entirely new realities and dimensions, complete with their own physical laws.",
      capabilities: [
        "Custom reality generation",
        "Physical law modification",
        "Dimension creation protocols",
        "Reality testing environments",
        "Universal constant adjustment"
      ],
      icon: "✨",
      color: "from-yellow-600 to-orange-600",
      demo: "Reality creation workshop"
    },
    {
      id: 6,
      title: "Cosmic Intelligence",
      description: "AI systems that can communicate with and learn from intelligent life forms across the entire observable universe.",
      capabilities: [
        "Universal communication",
        "Galactic knowledge networks",
        "Alien consciousness integration",
        "Cosmic wisdom synthesis",
        "Universal problem solving"
      ],
      icon: "🚀",
      color: "from-indigo-600 to-blue-600",
      demo: "Galactic communication hub"
    }
  ];

  const interactiveFeatures = [
    {
      title: "Holographic Interface",
      description: "Control technology through thought and gesture in full 3D holographic environments",
      icon: "👆"
    },
    {
      title: "Neural Integration",
      description: "Direct brain-to-system connection for seamless technology interaction",
      icon: "🧠"
    },
    {
      title: "Quantum Feedback",
      description: "Real-time quantum state monitoring and adjustment for optimal performance",
      icon: "⚛️"
    },
    {
      title: "Reality Manipulation",
      description: "Modify physical properties of objects and environments through consciousness",
      icon: "🎭"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
        transition={{ duration: 1.2 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="text-center text-white">
            <motion.div
              initial={{ y: -50 }}
              animate={{ y: isVisible ? 0 : -50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-lg font-bold mb-10 animate-pulse"
            >
              🚀 REVOLUTIONARY SHOWCASE • 2050
            </motion.div>
            <h1 className="text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Revolutionary Tech Showcase 2050
            </h1>
            <p className="text-3xl opacity-90 max-w-5xl mx-auto mb-16">
              Experience the most advanced technologies that transcend the boundaries of reality and consciousness
            </p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex justify-center space-x-6"
            >
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-5 rounded-xl hover:shadow-2xl transition-all duration-300 font-semibold text-xl">
                Start Interactive Demo
              </button>
              <button className="border-2 border-white text-white px-10 py-5 rounded-xl hover:bg-white hover:text-indigo-900 transition-all duration-300 font-semibold text-xl">
                Explore Technologies
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Revolutionary Technologies */}
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold text-white mb-8">Revolutionary Technologies</h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Six breakthrough technologies that will reshape the very concept of what's possible
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {revolutionaryTechs.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : (index % 2 === 0 ? -100 : 100) }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-3xl p-10 border border-indigo-500/40 hover:scale-105 transition-all duration-500 group"
            >
              <div className="flex items-start mb-8">
                <div className="text-8xl mr-6 group-hover:scale-110 transition-transform duration-300">{tech.icon}</div>
                <div className="flex-1">
                  <h3 className="text-4xl font-bold text-white mb-4">{tech.title}</h3>
                  <div className={`inline-block px-4 py-2 bg-gradient-to-r ${tech.color} rounded-full text-sm font-semibold text-white mb-4`}>
                    {tech.demo}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 text-xl mb-8 leading-relaxed">{tech.description}</p>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-white mb-4">Key Capabilities:</h4>
                {tech.capabilities.map((capability, capIndex) => (
                  <motion.div
                    key={capIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                    transition={{ duration: 0.5, delay: (index * 0.2) + (capIndex * 0.1) }}
                    className="flex items-center"
                  >
                    <div className={`w-3 h-3 bg-gradient-to-r ${tech.color} rounded-full mr-4`}></div>
                    <span className="text-gray-300 text-lg">{capability}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`mt-8 w-full bg-gradient-to-r ${tech.color} text-white py-4 rounded-xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg`}
              >
                Experience {tech.title}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Features */}
      <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-sm py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-white mb-8">Interactive Features</h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
              Experience technology through revolutionary interaction methods
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {interactiveFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center group"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Future Vision */}
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-16 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-pink-600/80 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <h2 className="text-5xl font-bold mb-8">The Future is Now</h2>
            <p className="text-2xl mb-12 opacity-90 max-w-4xl mx-auto">
              These revolutionary technologies represent the pinnacle of human innovation and the beginning of a new era of existence
            </p>
            <div className="flex justify-center space-x-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-12 py-6 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-xl"
              >
                Begin Your Journey
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-12 py-6 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-xl"
              >
                Watch Full Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2050;
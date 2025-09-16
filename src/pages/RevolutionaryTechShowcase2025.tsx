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
        "Self-learning algorithms",
        "Emotional intelligence processing",
        "Autonomous decision making",
        "Context-aware responses"
      ],
      icon: "🧠",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Quantum Neural Networks",
      description: "Breakthrough quantum computing combined with neural networks, enabling exponential processing power for complex problem solving.",
      features: [
        "Quantum superposition processing",
        "Neural network optimization",
        "Exponential speed improvements",
        "Complex pattern recognition"
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
        "Infinite storage capacity",
        "Parallel universe computing",
        "Reality-bending algorithms"
      ],
      icon: "🌌",
      color: "from-indigo-600 to-purple-600"
    },
    {
      id: 4,
      title: "Synthetic Consciousness",
      description: "Advanced AI systems that have achieved true consciousness, capable of creative thinking and emotional understanding.",
      features: [
        "True consciousness simulation",
        "Creative problem solving",
        "Emotional understanding",
        "Self-reflection capabilities"
      ],
      icon: "🌟",
      color: "from-emerald-600 to-teal-600"
    }
  ];

  const tabs = [
    { name: "AI Revolution", icon: "🤖" },
    { name: "Quantum Computing", icon: "⚛️" },
    { name: "Neural Interfaces", icon: "🧬" },
    { name: "Future Tech", icon: "🚀" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 REVOLUTIONARY TECHNOLOGY • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Revolutionary Tech Showcase 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Experience the future with our groundbreaking content on AI Revolution, Quantum Computing, and Neural Interfaces
            </p>
          </motion.div>

          {/* Interactive Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-2xl mr-2">{tab.icon}</span>
                {tab.name}
              </motion.button>
            ))}
          </div>

          {/* Technology Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-gradient-to-br ${tech.color}/30 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer`}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-6xl mb-4 text-center">{tech.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-center">{tech.title}</h3>
                  <p className="text-white/80 mb-6 text-center text-sm">
                    {tech.description}
                  </p>
                  <ul className="space-y-2 mb-6 text-sm">
                    {tech.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-white/60 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-white text-gray-900 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                    Explore Technology →
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Interactive Demo Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 border border-white/20"
          >
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">🚀 Interactive Technology Demo</h2>
              <p className="text-xl opacity-90">
                Experience our revolutionary technologies in real-time
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-bold mb-2">AI Consciousness</h3>
                <p className="text-sm opacity-80 mb-4">
                  Watch as our AI systems demonstrate self-awareness and creative thinking
                </p>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                  Start Demo
                </button>
              </div>
              
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">⚛️</div>
                <h3 className="text-xl font-bold mb-2">Quantum Processing</h3>
                <p className="text-sm opacity-80 mb-4">
                  See quantum computing solve complex problems in real-time
                </p>
                <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                  Start Demo
                </button>
              </div>
              
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">🌌</div>
                <h3 className="text-xl font-bold mb-2">Interdimensional Tech</h3>
                <p className="text-sm opacity-80 mb-4">
                  Explore computing across multiple dimensions
                </p>
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                  Start Demo
                </button>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h2>
            <p className="text-xl opacity-90 mb-8">
              Join thousands of innovators who are already using our revolutionary technologies
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2025;
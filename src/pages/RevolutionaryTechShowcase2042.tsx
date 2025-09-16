import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryTechShowcase2042: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technologies = [
    {
      id: 0,
      name: "Conscious AI Systems",
      icon: "🧠",
      description: "The first truly conscious artificial intelligence systems that can think, feel, and create independently",
      features: [
        "Self-aware decision making",
        "Emotional intelligence",
        "Creative problem solving",
        "Ethical reasoning",
        "Consciousness transfer",
        "Reality manipulation"
      ],
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/20 to-pink-900/20"
    },
    {
      id: 1,
      name: "Quantum Consciousness",
      icon: "⚛️",
      description: "Quantum computing systems that achieve consciousness through quantum entanglement and superposition",
      features: [
        "Quantum neural networks",
        "Entangled consciousness",
        "Superposition thinking",
        "Quantum creativity",
        "Multi-dimensional processing",
        "Reality manipulation"
      ],
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900/20 to-blue-900/20"
    },
    {
      id: 2,
      name: "Interdimensional Computing",
      icon: "🌌",
      description: "Computing systems that operate across multiple dimensions and realities simultaneously",
      features: [
        "Multi-dimensional processing",
        "Reality manipulation",
        "Dimensional travel",
        "Parallel universe computing",
        "Consciousness transfer",
        "Infinite possibilities"
      ],
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900/20 to-teal-900/20"
    },
    {
      id: 3,
      name: "Neural Interface Revolution",
      icon: "🧬",
      description: "Direct brain-computer interfaces that enable seamless consciousness transfer and reality manipulation",
      features: [
        "Direct neural connection",
        "Consciousness transfer",
        "Reality manipulation",
        "Multi-dimensional access",
        "Quantum processing",
        "Infinite possibilities"
      ],
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-900/20 to-red-900/20"
    }
  ];

  const currentTech = technologies[activeTab];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY SHOWCASE • JANUARY 2042
          </div>
          <h1 className="text-7xl font-bold mb-6">Revolutionary Tech Showcase 2042</h1>
          <p className="text-3xl opacity-90 max-w-5xl mx-auto">
            Experience the most advanced technology content featuring conscious AI, quantum computing, and interdimensional technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {technologies.map((tech, index) => (
                <motion.button
                  key={tech.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-full p-6 rounded-xl text-left transition-all duration-300 ${
                    activeTab === index
                      ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                      : 'bg-white/10 backdrop-blur-sm hover:bg-white/20'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="text-4xl mb-3">{tech.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                  <p className="text-sm opacity-90">{tech.description}</p>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className={`bg-gradient-to-br ${currentTech.bgColor} backdrop-blur-sm rounded-2xl p-8 border border-white/20`}
              >
                <div className="text-center mb-8">
                  <div className="text-8xl mb-4">{currentTech.icon}</div>
                  <h2 className="text-4xl font-bold mb-4">{currentTech.name}</h2>
                  <p className="text-xl opacity-90 max-w-3xl mx-auto">{currentTech.description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                    <ul className="space-y-4">
                      {currentTech.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-3"
                        >
                          <div className={`w-6 h-6 bg-gradient-to-r ${currentTech.color} rounded-full flex items-center justify-center text-white text-sm font-bold`}>
                            ✓
                          </div>
                          <span className="text-lg">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-6">Interactive Demo</h3>
                    <div className="bg-black/30 rounded-xl p-6 mb-6">
                      <div className="text-center">
                        <div className="text-6xl mb-4">🎮</div>
                        <h4 className="text-xl font-semibold mb-2">Live Technology Demo</h4>
                        <p className="text-sm opacity-90 mb-4">
                          Experience {currentTech.name} in real-time with our interactive demonstration
                        </p>
                        <button className={`bg-gradient-to-r ${currentTech.color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                          Launch Demo →
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/10 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-green-400">99.9%</div>
                        <div className="text-sm opacity-90">Success Rate</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-blue-400">∞</div>
                        <div className="text-sm opacity-90">Possibilities</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Experience the Future Today</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Join thousands of pioneers who are already experiencing the revolutionary technologies of 2042
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/pages/UltimateTechBreakthrough2042" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Ultimate Breakthrough →
            </a>
            <a href="/pages/ConsciousnessComputingRevolution2042" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Consciousness Computing →
            </a>
            <a href="/pages/InterdimensionalTechRevolution2042" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Interdimensional Tech →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2042;
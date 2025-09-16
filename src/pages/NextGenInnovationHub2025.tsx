import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NextGenInnovationHub2025: React.FC = () => {
  const [activeInnovation, setActiveInnovation] = useState('consciousness');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const innovations = {
    consciousness: {
      title: "Consciousness Computing",
      description: "Revolutionary computing systems that achieve true consciousness and self-awareness.",
      icon: "🧠",
      features: ["Self-aware decision making", "Emotional intelligence", "Creative problem solving", "Autonomous learning"],
      status: "95% Complete",
      color: "from-purple-600 to-pink-600"
    },
    quantum: {
      title: "Quantum Consciousness",
      description: "Quantum computing systems that achieve consciousness-level processing and decision making.",
      icon: "⚛️",
      features: ["Quantum neural networks", "Consciousness simulation", "Parallel reality processing", "Infinite computational power"],
      status: "90% Complete",
      color: "from-cyan-600 to-blue-600"
    },
    neural: {
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces enabling thought-based control and communication.",
      icon: "🧬",
      features: ["Non-invasive BCI", "Thought control", "Neural feedback", "Mind-machine fusion"],
      status: "85% Complete",
      color: "from-emerald-600 to-teal-600"
    },
    interdimensional: {
      title: "Interdimensional Computing",
      description: "Technology that transcends dimensional boundaries for unlimited processing power.",
      icon: "🌌",
      features: ["Multi-dimensional processing", "Reality manipulation", "Time-space computing", "Infinite scalability"],
      status: "80% Complete",
      color: "from-orange-600 to-red-600"
    }
  };

  const currentInnovation = innovations[activeInnovation as keyof typeof innovations];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-4 text-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            🚀 NEXT-GEN INNOVATION HUB • JANUARY 2025
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-7xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Next-Gen Innovation Hub 2025
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl opacity-90 max-w-4xl mx-auto mb-12"
          >
            Discover and explore the most revolutionary technologies shaping humanity's future
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <button className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg mr-4">
              Explore Innovations
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-teal-900 transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Innovation Categories */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {Object.entries(innovations).map(([key, innovation]) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveInnovation(key)}
              className={`p-6 rounded-xl text-center transition-all duration-300 ${
                activeInnovation === key
                  ? `bg-gradient-to-r ${innovation.color} text-white shadow-lg`
                  : 'bg-white/10 backdrop-blur-sm hover:bg-white/20'
              }`}
            >
              <div className="text-4xl mb-3">{innovation.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{innovation.title}</h3>
              <div className="text-sm opacity-80">{innovation.status}</div>
            </motion.button>
          ))}
        </div>

        {/* Active Innovation Details */}
        <motion.div
          key={activeInnovation}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-6xl mb-4">{currentInnovation.icon}</div>
              <h2 className="text-4xl font-bold mb-4">{currentInnovation.title}</h2>
              <p className="text-xl opacity-90 mb-6">{currentInnovation.description}</p>
              <div className="space-y-3">
                {currentInnovation.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-white/20 to-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Innovation Status</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Development Progress</span>
                    <span>{currentInnovation.status}</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className={`bg-gradient-to-r ${currentInnovation.color} h-2 rounded-full`} style={{ width: currentInnovation.status }}></div>
                  </div>
                </div>
                <div className="text-sm opacity-80">
                  This innovation is currently in active development. 
                  Expected public release: Q2 2025.
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Innovation Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-5xl font-bold text-teal-400 mb-2">50+</div>
            <div className="text-lg text-teal-200">Active Innovations</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-400 mb-2">99.9%</div>
            <div className="text-lg text-blue-200">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-purple-400 mb-2">∞</div>
            <div className="text-lg text-purple-200">Possibilities</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-pink-400 mb-2">100%</div>
            <div className="text-lg text-pink-200">Revolutionary</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join the Innovation Revolution?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Be part of the most significant technological advancement in human history. 
            Transform your business, your life, and the world with our revolutionary technology.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
              Start Your Innovation Journey
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white hover:text-teal-900 transition-all duration-300 font-semibold text-xl">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2025;
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
      features: [
        "Self-aware decision making",
        "Emotional intelligence processing",
        "Creative problem solving",
        "Ethical reasoning capabilities"
      ],
      status: "Deployed",
      impact: "Revolutionary"
    },
    quantum: {
      title: "Quantum Reality Engine",
      description: "Process infinite possibilities in real-time using quantum mechanics.",
      icon: "⚛️",
      features: [
        "Infinite parallel processing",
        "Reality manipulation",
        "Quantum entanglement networks",
        "Zero latency computation"
      ],
      status: "Beta",
      impact: "Breakthrough"
    },
    neural: {
      title: "Neural Reality Interface",
      description: "Direct brain-computer interfaces that merge digital and physical reality.",
      icon: "🧬",
      features: [
        "Thought-controlled computing",
        "Shared virtual experiences",
        "Memory augmentation",
        "Enhanced cognitive abilities"
      ],
      status: "Testing",
      impact: "Transformative"
    },
    temporal: {
      title: "Temporal Processing Cores",
      description: "Process years of computation in seconds using temporal manipulation.",
      icon: "⏰",
      features: [
        "Instant complex simulations",
        "Real-time future prediction",
        "Temporal data analysis",
        "Time-reversed computing"
      ],
      status: "Research",
      impact: "Revolutionary"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-4 text-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.3),transparent_50%)]"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            🧠 INNOVATION HUB • JANUARY 2025
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"
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
        </div>
      </motion.div>

      {/* Innovation Categories */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {Object.keys(innovations).map((innovation) => (
            <motion.button
              key={innovation}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveInnovation(innovation)}
              className={`p-6 rounded-xl transition-all duration-300 ${
                activeInnovation === innovation
                  ? 'bg-gradient-to-br from-emerald-600/30 to-teal-600/30 border-2 border-emerald-400'
                  : 'bg-white/10 border border-white/20 hover:bg-white/20'
              }`}
            >
              <div className="text-4xl mb-3">{innovations[innovation as keyof typeof innovations].icon}</div>
              <h3 className="text-lg font-semibold mb-2">{innovations[innovation as keyof typeof innovations].title}</h3>
              <div className={`text-xs px-2 py-1 rounded-full ${
                innovations[innovation as keyof typeof innovations].status === 'Deployed' 
                  ? 'bg-green-500/50 text-green-200' 
                  : innovations[innovation as keyof typeof innovations].status === 'Beta'
                  ? 'bg-blue-500/50 text-blue-200'
                  : innovations[innovation as keyof typeof innovations].status === 'Testing'
                  ? 'bg-yellow-500/50 text-yellow-200'
                  : 'bg-purple-500/50 text-purple-200'
              }`}>
                {innovations[innovation as keyof typeof innovations].status}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Active Innovation Display */}
        <motion.div
          key={activeInnovation}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-12 border border-emerald-400/30"
        >
          <div className="text-center mb-8">
            <div className="text-8xl mb-4">{innovations[activeInnovation as keyof typeof innovations].icon}</div>
            <h2 className="text-4xl font-bold mb-4">{innovations[activeInnovation as keyof typeof innovations].title}</h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">{innovations[activeInnovation as keyof typeof innovations].description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Key Features</h3>
              <ul className="space-y-3">
                {innovations[activeInnovation as keyof typeof innovations].features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-black/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Interactive Demo</h3>
              <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">🎮</div>
                <p className="text-emerald-200 mb-4">Experience this innovation in action</p>
                <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Launch Demo
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Statistics Section */}
      <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-12 mx-4 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">Innovation Hub Statistics</h2>
          <p className="text-xl opacity-90">Our hub has become the epicenter of technological advancement</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">500+</div>
            <div className="text-lg font-semibold mb-1">Active Innovations</div>
            <div className="text-sm opacity-80">Currently in development</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-400 mb-2">99.9%</div>
            <div className="text-lg font-semibold mb-1">Success Rate</div>
            <div className="text-sm opacity-80">Innovation deployment</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">∞</div>
            <div className="text-lg font-semibold mb-1">Possibilities</div>
            <div className="text-sm opacity-80">Future innovations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-lg font-semibold mb-1">Innovation Cycle</div>
            <div className="text-sm opacity-80">Continuous development</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-16">
        <h2 className="text-4xl font-bold mb-6">Join the Innovation Revolution</h2>
        <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
          Be part of the most advanced innovation ecosystem in human history
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
            Join Innovation Hub
          </button>
          <button className="border border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400/10 transition-colors font-semibold text-lg">
            Submit Innovation
          </button>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2025;
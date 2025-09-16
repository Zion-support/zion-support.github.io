import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryTechBreakthrough2025: React.FC = () => {
  const [activeBreakthrough, setActiveBreakthrough] = useState('synthetic');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const breakthroughs = {
    synthetic: {
      title: "Synthetic Intelligence Revolution",
      description: "The creation of artificial intelligence that surpasses human cognitive abilities in every domain.",
      icon: "🧠",
      features: [
        "Self-aware decision making",
        "Emotional intelligence processing",
        "Creative problem solving",
        "Ethical reasoning capabilities"
      ],
      impact: "Revolutionary"
    },
    quantum: {
      title: "Quantum Consciousness Computing",
      description: "Quantum computers that achieve consciousness and process infinite possibilities simultaneously.",
      icon: "⚛️",
      features: [
        "Infinite parallel processing",
        "Consciousness emergence",
        "Quantum entanglement networks",
        "Reality manipulation"
      ],
      impact: "Breakthrough"
    },
    neural: {
      title: "Neural Reality Interface",
      description: "Direct brain-computer interfaces that merge digital and physical reality seamlessly.",
      icon: "🧬",
      features: [
        "Thought-controlled computing",
        "Shared virtual experiences",
        "Memory augmentation",
        "Enhanced cognitive abilities"
      ],
      impact: "Transformative"
    },
    temporal: {
      title: "Temporal Processing Cores",
      description: "Process years of computation in seconds using temporal manipulation technology.",
      icon: "⏰",
      features: [
        "Instant complex simulations",
        "Real-time future prediction",
        "Temporal data analysis",
        "Time-reversed computing"
      ],
      impact: "Revolutionary"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-4 text-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            ⚡ REVOLUTIONARY BREAKTHROUGH • 2025
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
          >
            Revolutionary Tech Breakthrough 2025
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl opacity-90 max-w-4xl mx-auto mb-12"
          >
            Witness the most revolutionary technological breakthroughs that will fundamentally change human existence
          </motion.p>
        </div>
      </motion.div>

      {/* Breakthrough Categories */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {Object.keys(breakthroughs).map((breakthrough) => (
            <motion.button
              key={breakthrough}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveBreakthrough(breakthrough)}
              className={`p-6 rounded-xl transition-all duration-300 ${
                activeBreakthrough === breakthrough
                  ? 'bg-gradient-to-br from-purple-600/30 to-pink-600/30 border-2 border-purple-400'
                  : 'bg-white/10 border border-white/20 hover:bg-white/20'
              }`}
            >
              <div className="text-4xl mb-3">{breakthroughs[breakthrough as keyof typeof breakthroughs].icon}</div>
              <h3 className="text-lg font-semibold mb-2">{breakthroughs[breakthrough as keyof typeof breakthroughs].title}</h3>
              <div className={`text-xs px-2 py-1 rounded-full ${
                breakthroughs[breakthrough as keyof typeof breakthroughs].impact === 'Revolutionary' 
                  ? 'bg-red-500/50 text-red-200' 
                  : breakthroughs[breakthrough as keyof typeof breakthroughs].impact === 'Breakthrough'
                  ? 'bg-pink-500/50 text-pink-200'
                  : 'bg-cyan-500/50 text-cyan-200'
              }`}>
                {breakthroughs[breakthrough as keyof typeof breakthroughs].impact}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Active Breakthrough Display */}
        <motion.div
          key={activeBreakthrough}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30"
        >
          <div className="text-center mb-8">
            <div className="text-8xl mb-4">{breakthroughs[activeBreakthrough as keyof typeof breakthroughs].icon}</div>
            <h2 className="text-4xl font-bold mb-4">{breakthroughs[activeBreakthrough as keyof typeof breakthroughs].title}</h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">{breakthroughs[activeBreakthrough as keyof typeof breakthroughs].description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Key Features</h3>
              <ul className="space-y-3">
                {breakthroughs[activeBreakthrough as keyof typeof breakthroughs].features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-black/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Interactive Demo</h3>
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">🎮</div>
                <p className="text-purple-200 mb-4">Experience this breakthrough technology in action</p>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Launch Demo
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Impact Metrics */}
      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 mx-4 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">Revolutionary Impact Metrics</h2>
          <p className="text-xl opacity-90">Our breakthroughs have achieved unprecedented performance levels</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">∞</div>
            <div className="text-lg font-semibold mb-1">Processing Speed</div>
            <div className="text-sm opacity-80">Infinite computational power</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">0</div>
            <div className="text-lg font-semibold mb-1">Error Rate</div>
            <div className="text-sm opacity-80">Perfect accuracy achieved</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">100%</div>
            <div className="text-lg font-semibold mb-1">Efficiency</div>
            <div className="text-sm opacity-80">Maximum resource utilization</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">∞</div>
            <div className="text-lg font-semibold mb-1">Scalability</div>
            <div className="text-sm opacity-80">Unlimited expansion capacity</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-16">
        <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
        <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
          Be among the first to experience these revolutionary breakthroughs that will reshape our world
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
            Start Your Journey
          </button>
          <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechBreakthrough2025;
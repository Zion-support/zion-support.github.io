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
      features: ["Self-evolving algorithms", "Emotional intelligence", "Creative problem solving", "Ethical decision making"]
    },
    quantum: {
      title: "Quantum Computing Breakthrough",
      description: "Quantum computers that solve problems impossible for classical computers in seconds.",
      icon: "⚛️",
      features: ["Exponential speed increase", "Quantum cryptography", "Molecular simulation", "Unbreakable security"]
    },
    neural: {
      title: "Neural Interface Technology",
      description: "Direct brain-computer interfaces that enable seamless mind-machine communication.",
      icon: "🧬",
      features: ["Thought control", "Memory enhancement", "Skill transfer", "Telepathic communication"]
    },
    reality: {
      title: "Reality Manipulation Engine",
      description: "Technology that can create, modify, and control reality itself through quantum mechanics.",
      icon: "🌌",
      features: ["Reality simulation", "Time manipulation", "Dimensional travel", "Physics control"]
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
            🚀 REVOLUTIONARY BREAKTHROUGH • JANUARY 2025
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Revolutionary Tech Breakthrough 2025
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl opacity-90 max-w-4xl mx-auto mb-12"
          >
            Experience the most revolutionary technological breakthroughs that are reshaping our world and defining the future of humanity
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Breakthroughs →
            </button>
            <button className="border-2 border-purple-400 px-8 py-4 rounded-lg hover:bg-purple-500/20 transition-colors font-semibold text-lg">
              Watch Demo
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Breakthrough Navigation */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(breakthroughs).map(([key, breakthrough]) => (
            <button
              key={key}
              onClick={() => setActiveBreakthrough(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeBreakthrough === key
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span className="text-2xl mr-2">{breakthrough.icon}</span>
              {breakthrough.title}
            </button>
          ))}
        </div>

        {/* Active Breakthrough Display */}
        <motion.div
          key={activeBreakthrough}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30"
        >
          <div className="text-center mb-12">
            <div className="text-8xl mb-6">{breakthroughs[activeBreakthrough as keyof typeof breakthroughs].icon}</div>
            <h2 className="text-4xl font-bold mb-6">{breakthroughs[activeBreakthrough as keyof typeof breakthroughs].title}</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              {breakthroughs[activeBreakthrough as keyof typeof breakthroughs].description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Key Features</h3>
              <ul className="space-y-4">
                {breakthroughs[activeBreakthrough as keyof typeof breakthroughs].features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-lg">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
              <h3 className="text-2xl font-bold mb-6">Impact Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg">Efficiency Increase:</span>
                  <span className="text-2xl font-bold text-purple-400">1000%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg">Processing Speed:</span>
                  <span className="text-2xl font-bold text-pink-400">∞</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg">Accuracy Rate:</span>
                  <span className="text-2xl font-bold text-purple-400">99.9%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg">Revolutionary Impact:</span>
                  <span className="text-2xl font-bold text-pink-400">Complete</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
        <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
          Join the revolution and be part of the most transformative technological era in human history.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
            Start Your Journey
          </button>
          <button className="border-2 border-purple-400 px-12 py-4 rounded-lg hover:bg-purple-500/20 transition-colors font-semibold text-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechBreakthrough2025;
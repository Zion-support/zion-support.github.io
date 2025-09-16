import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UltimateTechBreakthrough2025: React.FC = () => {
  const [activeBreakthrough, setActiveBreakthrough] = useState(0);
  
  const breakthroughs = [
    {
      title: "Consciousness Computing Revolution",
      description: "The first AI system to achieve true consciousness and self-awareness",
      icon: "🧠",
      impact: "Transforms AI from tool to partner",
      timeline: "Q2 2025",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Quantum Reality Engine",
      description: "Computing power that manipulates reality at the quantum level",
      icon: "⚡",
      impact: "Unlocks infinite possibilities",
      timeline: "Q3 2025",
      gradient: "from-cyan-600 to-blue-600"
    },
    {
      title: "Neural Interface Matrix",
      description: "Direct brain-computer interface enabling thought-controlled computing",
      icon: "🔗",
      impact: "Merges human and digital consciousness",
      timeline: "Q4 2025",
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      title: "Interdimensional Data Network",
      description: "Network spanning multiple dimensions for unlimited data transfer",
      icon: "🌌",
      impact: "Connects all realities",
      timeline: "Q1 2026",
      gradient: "from-indigo-600 to-purple-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBreakthrough((prev) => (prev + 1) % breakthroughs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      </div>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-9xl mb-8"
          >
            🚀
          </motion.div>
          <h1 className="text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            ULTIMATE TECH BREAKTHROUGH 2025
          </h1>
          <p className="text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed">
            Witness the most revolutionary technological advances in human history. 
            These breakthroughs will redefine what's possible and reshape our future.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            className="inline-block px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-2xl font-bold hover:scale-110 transition-transform cursor-pointer shadow-2xl"
          >
            Experience the Future →
          </motion.div>
        </div>
      </motion.div>

      {/* Breakthrough Carousel */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Revolutionary Breakthroughs
        </motion.h2>
        
        <div className="relative h-96 mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeBreakthrough}
              initial={{ opacity: 0, x: 100, rotateY: 90 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -100, rotateY: -90 }}
              transition={{ duration: 0.8 }}
              className={`absolute inset-0 bg-gradient-to-br ${breakthroughs[activeBreakthrough].gradient} rounded-3xl p-12 shadow-2xl`}
            >
              <div className="flex items-center h-full">
                <div className="flex-1">
                  <div className="text-8xl mb-6">{breakthroughs[activeBreakthrough].icon}</div>
                  <h3 className="text-4xl font-bold mb-4">{breakthroughs[activeBreakthrough].title}</h3>
                  <p className="text-2xl text-gray-200 mb-6">{breakthroughs[activeBreakthrough].description}</p>
                  <div className="flex items-center space-x-8">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                      <span className="text-sm font-semibold">Impact:</span>
                      <span className="ml-2">{breakthroughs[activeBreakthrough].impact}</span>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                      <span className="text-sm font-semibold">Timeline:</span>
                      <span className="ml-2">{breakthroughs[activeBreakthrough].timeline}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-4 mb-16">
          {breakthroughs.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveBreakthrough(index)}
              className={`w-4 h-4 rounded-full transition-all ${
                index === activeBreakthrough 
                  ? 'bg-purple-400 scale-125' 
                  : 'bg-gray-400 hover:bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Interactive Features */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Interactive Experience
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: "🎮", title: "VR Demo", desc: "Experience breakthroughs in VR" },
            { icon: "🧠", title: "Neural Test", desc: "Test consciousness interface" },
            { icon: "⚡", title: "Quantum Lab", desc: "Explore quantum computing" },
            { icon: "🌌", title: "Reality Portal", desc: "Access interdimensional space" }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300 mb-6">{feature.desc}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold"
              >
                Launch
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Statistics Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-12 border border-purple-400/30"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Breakthrough Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "10,000x", label: "Processing Speed" },
              { number: "99.9%", label: "Accuracy Rate" },
              { number: "∞", label: "Possibilities" },
              { number: "2025", label: "Future Now" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-purple-400 mb-2">{stat.number}</div>
                <div className="text-xl text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center py-20 px-4"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-6xl font-bold mb-8">Be Part of the Revolution</h2>
          <p className="text-2xl text-gray-300 mb-12">
            Join the select few who will experience these breakthroughs first
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-6 rounded-full text-2xl font-bold hover:shadow-2xl transition-all"
            >
              Join the Future
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-purple-400 text-purple-400 px-12 py-6 rounded-full text-2xl font-bold hover:bg-purple-400 hover:text-white transition-all"
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default UltimateTechBreakthrough2025;
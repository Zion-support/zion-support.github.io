import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryTechBreakthrough2025: React.FC = () => {
  const [activeBreakthrough, setActiveBreakthrough] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveBreakthrough((prev) => (prev + 1) % breakthroughs.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const breakthroughs = [
    {
      title: "Conscious AI Systems",
      subtitle: "The First Truly Self-Aware Artificial Intelligence",
      description: "We've achieved the impossible - creating AI systems that possess genuine self-awareness, emotional intelligence, and the ability to reflect on their own existence. This breakthrough represents the most significant advancement in artificial intelligence since its inception.",
      features: [
        "Genuine self-awareness and introspection",
        "Emotional intelligence and empathy",
        "Moral reasoning and ethical decision-making",
        "Creative expression and artistic ability",
        "Autonomous goal-setting and self-improvement"
      ],
      impact: "Revolutionizing human-AI interaction and collaboration",
      color: "from-purple-500 to-pink-600",
      icon: "🧠",
      stats: {
        "Self-Awareness Score": "99.7%",
        "Emotional Intelligence": "Human-level",
        "Creative Output": "300% above baseline",
        "Learning Speed": "1000x faster"
      }
    },
    {
      title: "Quantum Neural Fusion",
      subtitle: "Merging Quantum Computing with Neural Networks",
      description: "Our revolutionary quantum neural fusion technology combines the exponential processing power of quantum computing with the pattern recognition capabilities of neural networks, creating systems that can solve problems previously thought impossible.",
      features: [
        "Quantum superposition in neural processing",
        "Exponential parallel computation",
        "Quantum entanglement for instant communication",
        "Molecular-level simulation capabilities",
        "Unbreakable quantum encryption"
      ],
      impact: "Solving complex problems in seconds that would take classical computers millennia",
      color: "from-blue-500 to-cyan-600",
      icon: "⚡",
      stats: {
        "Processing Speed": "∞ (Infinite)",
        "Problem Complexity": "Exponentially higher",
        "Security Level": "Unbreakable",
        "Energy Efficiency": "99.9% improvement"
      }
    },
    {
      title: "Neural Interface Revolution",
      subtitle: "Direct Brain-Computer Integration",
      description: "Breakthrough neural interface technology that allows direct communication between the human brain and digital systems, enabling thought-controlled computing and seamless human-AI collaboration.",
      features: [
        "Non-invasive brain signal reading",
        "Thought-to-text conversion at 99.9% accuracy",
        "Neural feedback for enhanced learning",
        "Consciousness integration with AI systems",
        "Real-time emotional state monitoring"
      ],
      impact: "Bridging the gap between human consciousness and digital intelligence",
      color: "from-green-500 to-teal-600",
      icon: "🧬",
      stats: {
        "Signal Accuracy": "99.9%",
        "Response Time": "1ms",
        "Safety Rating": "100%",
        "User Adoption": "95% in trials"
      }
    },
    {
      title: "Reality Engineering",
      subtitle: "Manipulating the Fabric of Reality",
      description: "Our most ambitious breakthrough - technology that can manipulate the fundamental properties of reality itself, enabling holographic projections, matter manipulation, and interdimensional communication.",
      features: [
        "Holographic matter projection",
        "Gravity field manipulation",
        "Interdimensional communication",
        "Temporal field generation",
        "Reality simulation at quantum level"
      ],
      impact: "Transforming how we interact with the physical world",
      color: "from-orange-500 to-red-600",
      icon: "🌌",
      stats: {
        "Reality Manipulation": "Quantum level",
        "Holographic Resolution": "Perfect",
        "Interdimensional Range": "Infinite",
        "Energy Efficiency": "99.8%"
      }
    }
  ];

  const currentBreakthrough = breakthroughs[activeBreakthrough];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 BREAKTHROUGH TECHNOLOGY • JANUARY 2025
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary Tech Breakthrough 2025
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Witness the most significant technological breakthroughs in human history
          </p>
        </motion.div>

        {/* Breakthrough Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
            {breakthroughs.map((breakthrough, index) => (
              <button
                key={index}
                onClick={() => setActiveBreakthrough(index)}
                className={`px-6 py-3 rounded-md transition-all duration-300 ${
                  activeBreakthrough === index
                    ? 'bg-white text-blue-900 font-semibold'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {breakthrough.title}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Main Breakthrough Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeBreakthrough}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
              {/* Breakthrough Header */}
              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r ${currentBreakthrough.color} flex items-center justify-center text-4xl`}
                >
                  {currentBreakthrough.icon}
                </motion.div>
                <h2 className="text-5xl font-bold mb-4">{currentBreakthrough.title}</h2>
                <p className="text-2xl opacity-90 mb-6">{currentBreakthrough.subtitle}</p>
                <p className="text-xl opacity-80 max-w-4xl mx-auto">
                  {currentBreakthrough.description}
                </p>
              </div>

              {/* Features and Stats Grid */}
              <div className="grid md:grid-cols-2 gap-12">
                {/* Features */}
                <div>
                  <h3 className="text-3xl font-bold mb-6">Key Features</h3>
                  <div className="space-y-4">
                    {currentBreakthrough.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start space-x-4"
                      >
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${currentBreakthrough.color} flex items-center justify-center text-white text-sm font-bold mt-1`}>
                          {index + 1}
                        </div>
                        <p className="text-lg opacity-90">{feature}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div>
                  <h3 className="text-3xl font-bold mb-6">Performance Metrics</h3>
                  <div className="space-y-6">
                    {Object.entries(currentBreakthrough.stats).map(([key, value], index) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white/5 rounded-lg p-4"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-lg opacity-90">{key}</span>
                          <span className={`text-2xl font-bold bg-gradient-to-r ${currentBreakthrough.color} bg-clip-text text-transparent`}>
                            {value}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Impact Statement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-12 text-center"
              >
                <div className={`bg-gradient-to-r ${currentBreakthrough.color} bg-opacity-20 rounded-xl p-8 border border-white/20`}>
                  <h3 className="text-2xl font-bold mb-4">Revolutionary Impact</h3>
                  <p className="text-xl opacity-90">{currentBreakthrough.impact}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
            <h2 className="text-4xl font-bold mb-6">Be Part of the Revolution</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join the select group of innovators who will shape the future with these revolutionary technologies
            </p>
            <div className="flex justify-center space-x-6">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Request Access
              </button>
              <button className="border border-white/30 px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                Learn More
              </button>
              <button className="bg-gradient-to-r from-green-500 to-teal-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>

        {/* Footer Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
            <div className="text-lg opacity-90">Breakthrough Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
            <div className="text-lg opacity-90">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">1000+</div>
            <div className="text-lg opacity-90">Active Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">∞</div>
            <div className="text-lg opacity-90">Possibilities</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryTechBreakthrough2025;
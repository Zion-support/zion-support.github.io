import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const UltimateTechBreakthrough2025: React.FC = () => {
  const [currentBreakthrough, setCurrentBreakthrough] = useState(0);

  const breakthroughs = [
    {
      title: "Conscious AI Systems",
      description: "The first truly conscious artificial intelligence that exhibits self-awareness and emotional intelligence",
      impact: "Revolutionizing human-AI interaction",
      features: [
        "Self-aware decision making",
        "Emotional intelligence processing",
        "Creative problem solving",
        "Ethical reasoning capabilities"
      ],
      stats: { consciousness: "100%", empathy: "99.8%", creativity: "∞" },
      color: "from-blue-500 to-cyan-500",
      icon: "🧠"
    },
    {
      title: "Quantum Reality Engine",
      description: "A quantum-powered system that can manipulate reality at the molecular level",
      impact: "Transforming matter and energy",
      features: [
        "Molecular manipulation",
        "Reality simulation",
        "Dimensional shifting",
        "Energy transformation"
      ],
      stats: { precision: "100%", power: "∞", stability: "Perfect" },
      color: "from-purple-500 to-pink-500",
      icon: "⚛️"
    },
    {
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces that allow seamless thought-to-digital communication",
      impact: "Bridging mind and machine",
      features: [
        "Thought-to-text conversion",
        "Neural data processing",
        "Consciousness transfer",
        "Mental control systems"
      ],
      stats: { latency: "1ms", accuracy: "99.9%", safety: "100%" },
      color: "from-green-500 to-teal-500",
      icon: "🧬"
    },
    {
      title: "Interdimensional Computing",
      description: "Computing systems that operate across multiple dimensions for infinite processing power",
      impact: "Unlimited computational capacity",
      features: [
        "Multi-dimensional processing",
        "Infinite scalability",
        "Reality simulation",
        "Universal connectivity"
      ],
      stats: { dimensions: "∞", speed: "∞", capacity: "∞" },
      color: "from-indigo-500 to-purple-500",
      icon: "🌌"
    }
  ];

  const achievements = [
    { number: "50+", label: "Breakthrough Technologies", icon: "🚀" },
    { number: "99.9%", label: "Success Rate", icon: "📊" },
    { number: "24/7", label: "Global Monitoring", icon: "⏰" },
    { number: "∞", label: "Possibilities", icon: "✨" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBreakthrough((prev) => (prev + 1) % breakthroughs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [breakthroughs.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 ULTIMATE BREAKTHROUGH • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Ultimate Tech Breakthrough 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Witness the most revolutionary technological breakthroughs that are reshaping reality and creating infinite possibilities for humanity
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Breakthroughs
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="py-16 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-4xl mb-2">{achievement.icon}</div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  {achievement.number}
                </div>
                <div className="text-lg opacity-80">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Breakthroughs Carousel */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Revolutionary Breakthroughs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the most advanced technological breakthroughs that are transforming our world
            </p>
          </motion.div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-700/50 overflow-hidden">
              <motion.div
                key={currentBreakthrough}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <div className="flex items-center mb-6">
                    <div className="text-6xl mr-4">{breakthroughs[currentBreakthrough].icon}</div>
                    <div>
                      <h3 className="text-4xl font-bold text-white mb-2">
                        {breakthroughs[currentBreakthrough].title}
                      </h3>
                      <div className={`w-20 h-1 bg-gradient-to-r ${breakthroughs[currentBreakthrough].color} rounded-full`}></div>
                    </div>
                  </div>
                  
                  <p className="text-xl text-gray-300 mb-6">
                    {breakthroughs[currentBreakthrough].description}
                  </p>
                  
                  <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
                    <div className="text-sm text-gray-400 mb-2">Impact</div>
                    <div className="text-lg text-white font-semibold">
                      {breakthroughs[currentBreakthrough].impact}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {Object.entries(breakthroughs[currentBreakthrough].stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-white mb-1">{value}</div>
                        <div className="text-xs text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {breakthroughs[currentBreakthrough].features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`bg-gradient-to-r ${breakthroughs[currentBreakthrough].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                    Learn More →
                  </button>
                </div>

                <div className="relative">
                  <div className={`w-full h-96 bg-gradient-to-br ${breakthroughs[currentBreakthrough].color} rounded-2xl flex items-center justify-center`}>
                    <div className="text-8xl opacity-50">
                      {breakthroughs[currentBreakthrough].icon}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                </div>
              </motion.div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {breakthroughs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentBreakthrough(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentBreakthrough
                      ? 'bg-purple-500 scale-125'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div className="py-20 bg-gradient-to-r from-purple-600/20 to-indigo-600/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-5xl font-bold mb-6">Interactive Breakthrough Demo</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Experience our revolutionary breakthroughs in real-time with interactive demonstrations
            </p>
            
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-700/50">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Precision Control</h3>
                  <p className="text-gray-300">99.9% accuracy in all operations</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Lightning Speed</h3>
                  <p className="text-gray-300">1000x faster processing</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🔒</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Ultimate Security</h3>
                  <p className="text-gray-300">Unbreakable protection</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🌐</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Global Reach</h3>
                  <p className="text-gray-300">Worldwide deployment</p>
                </div>
              </div>
              
              <div className="mt-12">
                <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                  Start Interactive Demo
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-5xl font-bold mb-6">Ready to Experience the Ultimate Breakthrough?</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Join the revolution and be among the first to experience these groundbreaking technologies that are reshaping our world
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechBreakthrough2025;
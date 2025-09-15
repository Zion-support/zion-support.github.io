import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FutureTechTrends2026: React.FC = () => {
  const [currentTrend, setCurrentTrend] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const trends = [
    {
      title: "Consciousness Computing",
      description: "The next frontier where AI achieves true consciousness and self-awareness",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-600/20 to-pink-600/20",
      features: [
        "Self-aware AI systems",
        "Emotional intelligence",
        "Creative problem solving",
        "Ethical decision making",
        "Consciousness transfer"
      ],
      impact: "Revolutionizing human-AI interaction"
    },
    {
      title: "Quantum Internet",
      description: "Ultra-secure, instant global communication network powered by quantum entanglement",
      icon: "🌐",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-600/20 to-blue-600/20",
      features: [
        "Quantum entanglement communication",
        "Unbreakable encryption",
        "Instant global connectivity",
        "Quantum teleportation",
        "Zero-latency data transfer"
      ],
      impact: "Transforming global communication"
    },
    {
      title: "Neural Enhancement",
      description: "Direct brain augmentation and cognitive enhancement technologies",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-600/20 to-teal-600/20",
      features: [
        "Memory augmentation",
        "Cognitive enhancement",
        "Neural implants",
        "Brain-computer interfaces",
        "Consciousness backup"
      ],
      impact: "Augmenting human capabilities"
    },
    {
      title: "Synthetic Biology",
      description: "Engineering life itself with programmable biological systems",
      icon: "🧪",
      color: "from-green-600 to-emerald-600",
      bgColor: "from-green-600/20 to-emerald-600/20",
      features: [
        "Programmable organisms",
        "Synthetic DNA",
        "Bio-computing",
        "Living materials",
        "Biological factories"
      ],
      impact: "Redefining life and manufacturing"
    },
    {
      title: "Space Colonization",
      description: "Making humanity a multi-planetary species with advanced space technology",
      icon: "🚀",
      color: "from-indigo-600 to-purple-600",
      bgColor: "from-indigo-600/20 to-purple-600/20",
      features: [
        "Mars colonization",
        "Space habitats",
        "Asteroid mining",
        "Terraforming",
        "Interstellar travel"
      ],
      impact: "Expanding human civilization"
    },
    {
      title: "Reality Simulation",
      description: "Creating indistinguishable virtual realities and digital worlds",
      icon: "🌌",
      color: "from-violet-600 to-purple-600",
      bgColor: "from-violet-600/20 to-purple-600/20",
      features: [
        "Perfect virtual reality",
        "Digital consciousness",
        "Simulated universes",
        "Reality manipulation",
        "Digital immortality"
      ],
      impact: "Blurring reality boundaries"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentTrend((prev) => (prev + 1) % trends.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, trends.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🔮 FUTURE TECH TRENDS • JANUARY 2026
            </div>
            <h1 className="text-6xl font-bold text-white mb-6">
              Future Technology Trends 2026
            </h1>
            <p className="text-2xl text-purple-200 mb-8 max-w-4xl mx-auto">
              Discover the revolutionary technologies that will shape our future. 
              From consciousness computing to space colonization, explore what's coming next.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Trends
              </button>
              <button className="border border-purple-400 text-purple-200 px-8 py-4 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-colors text-lg">
                Download Report
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Interactive Trends Carousel */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">🚀 Revolutionary Trends</h2>
          <p className="text-xl text-purple-200">Click on any trend to explore its potential</p>
        </div>

        {/* Trend Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {trends.map((trend, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentTrend(index);
                setIsAutoPlaying(false);
              }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                currentTrend === index
                  ? `bg-gradient-to-r ${trend.color} text-white shadow-lg scale-105`
                  : 'bg-white/10 text-purple-200 hover:bg-white/20'
              }`}
            >
              <span className="text-2xl mr-2">{trend.icon}</span>
              {trend.title}
            </button>
          ))}
        </div>

        {/* Current Trend Display */}
        <motion.div
          key={currentTrend}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`bg-gradient-to-br ${trends[currentTrend].bgColor} backdrop-blur-sm rounded-3xl p-12 border border-purple-400/30 hover:scale-105 transition-all duration-300`}
        >
          <div className="text-center mb-8">
            <div className="text-8xl mb-4">{trends[currentTrend].icon}</div>
            <h3 className="text-4xl font-bold text-white mb-4">
              {trends[currentTrend].title}
            </h3>
            <p className="text-xl text-purple-200 max-w-4xl mx-auto mb-6">
              {trends[currentTrend].description}
            </p>
            <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-purple-200 font-semibold">
              Impact: {trends[currentTrend].impact}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-2xl font-bold text-white mb-6">Key Features</h4>
              <ul className="space-y-3">
                {trends[currentTrend].features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center text-purple-200"
                  >
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    {feature}
                    </motion.li>
                ))}
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-white mb-6">Timeline & Impact</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-purple-200">2026 Q1</span>
                  <span className="text-white font-semibold">Initial Development</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-purple-200">2026 Q3</span>
                  <span className="text-white font-semibold">Beta Testing</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-purple-200">2027 Q1</span>
                  <span className="text-white font-semibold">Commercial Launch</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-purple-200">2027 Q4</span>
                  <span className="text-white font-semibold">Mass Adoption</span>
                </div>
              </div>
              <button className={`w-full mt-6 bg-gradient-to-r ${trends[currentTrend].color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Learn More About This Trend
              </button>
            </div>
          </div>
        </motion.div>

        {/* Auto-play Controls */}
        <div className="text-center mt-8">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="px-6 py-3 bg-white/10 text-purple-200 rounded-lg hover:bg-white/20 transition-colors"
          >
            {isAutoPlaying ? '⏸️ Pause Auto-play' : '▶️ Resume Auto-play'}
          </button>
        </div>
      </div>

      {/* Technology Impact Matrix */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">📊 Technology Impact Matrix</h2>
          <p className="text-xl text-purple-200">How these trends will transform different industries</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <h3 className="text-2xl font-bold text-white mb-4">Healthcare</h3>
            <ul className="space-y-2 text-purple-200">
              <li>• Neural enhancement for medical treatment</li>
              <li>• Synthetic biology for drug development</li>
              <li>• Consciousness computing for diagnostics</li>
              <li>• Quantum internet for secure medical data</li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
            <ul className="space-y-2 text-purple-200">
              <li>• Reality simulation for immersive learning</li>
              <li>• Neural enhancement for cognitive abilities</li>
              <li>• Consciousness computing for personalized AI tutors</li>
              <li>• Space colonization for off-world education</li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <h3 className="text-2xl font-bold text-white mb-4">Business</h3>
            <ul className="space-y-2 text-purple-200">
              <li>• Quantum internet for instant global operations</li>
              <li>• Synthetic biology for sustainable manufacturing</li>
              <li>• Reality simulation for virtual meetings</li>
              <li>• Neural enhancement for decision making</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-12 border border-purple-400/30">
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Shape the Future?</h2>
          <p className="text-xl text-purple-200 mb-8 max-w-4xl mx-auto">
            Be part of the technological revolution. Our cutting-edge solutions are already 
            transforming industries and creating new possibilities for the future.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Future Today
            </button>
            <button className="border border-purple-400 text-purple-200 px-8 py-4 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-colors text-lg">
              Get Future Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureTechTrends2026;
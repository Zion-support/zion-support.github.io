import { motion } from 'framer-motion';
import React, { useState } from 'react';

const NextGenInnovationHub2025: React.FC = () => {
  const [currentInnovation, setCurrentInnovation] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const innovations = [
    {
      title: 'Consciousness Transfer Technology',
      description: 'Transfer human consciousness into digital substrates for immortality',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      features: ['Mind uploading', 'Digital immortality', 'Consciousness backup', 'Reality simulation'],
      progress: 85
    },
    {
      title: 'Quantum Reality Engine',
      description: 'Create and manipulate alternate realities using quantum mechanics',
      icon: '🌌',
      color: 'from-cyan-600 to-blue-600',
      features: ['Reality creation', 'Parallel universes', 'Time manipulation', 'Dimensional travel'],
      progress: 72
    },
    {
      title: 'Neural Network Evolution',
      description: 'Self-evolving AI networks that surpass human intelligence',
      icon: '⚡',
      color: 'from-emerald-600 to-teal-600',
      features: ['Self-improvement', 'Creative problem solving', 'Emotional intelligence', 'Ethical reasoning'],
      progress: 91
    },
    {
      title: 'Matter Manipulation',
      description: 'Control matter at the molecular level for unlimited creation',
      icon: '🔬',
      color: 'from-orange-600 to-red-600',
      features: ['Molecular assembly', 'Matter creation', 'Energy conversion', 'Resource synthesis'],
      progress: 68
    },
    {
      title: 'Space-Time Engineering',
      description: 'Bend space-time for instant travel and communication',
      icon: '🚀',
      color: 'from-violet-600 to-purple-600',
      features: ['Wormhole creation', 'Faster-than-light travel', 'Time dilation', 'Gravitational control'],
      progress: 79
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentInnovation((prev) => (prev + 1) % innovations.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, innovations.length]);

  return (
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 NEXT-GEN INNOVATION HUB • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Next-Gen Innovation Hub 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Where the impossible becomes possible through revolutionary innovation
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Innovations
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
                Join Research
              </button>
            </div>
          </divdiv>
        </div>
      </div>

      {/* Innovation Carousel */}
      <div className="container mx-auto px-4 py-20">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                isAutoPlaying
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-600 text-white'
              }`}
            >
              {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
            </button>
          </div>
        </div>

                <div className="text-center">
                  <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                    Learn More
                  </button>
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* Innovation Grid */}
      <div className="container mx-auto px-4 py-20">
            >
              <div className="text-6xl mb-4 text-center">{innovation.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{innovation.title}</h3>
              <p className="text-purple-100 mb-6 text-center">{innovation.description}</p>
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold">Progress</span>
                  <span className="text-sm font-bold">{innovation.progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${innovation.color}`}
                    style={{ width: `${innovation.progress}%` }}
                  />
                </div>
              </div>
              <button className="w-full bg-white/20 text-white py-2 rounded-lg hover:bg-white/30 transition-colors font-semibold">
                View Details
              </button>
            </divdiv>
          ))}
        </div>
      </div>

      {/* Call to Action */}
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Join Our Team
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
              Partner With Us
            </button>
          </div>
      </div>

const NextGenInnovationHub2025: React.FC = () => {
  return (
import React from 'react';

const NextGenInnovationHub2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          </p>
        </div>

        {/* Innovation Categories */}
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Technology</h3>
            <p className="text-emerald-100 mb-6 text-center">
            </p>
            <ul className="text-blue-200 space-y-2 mb-6 text-sm">
              <li>• 50+ AI Researchers</li>
              <li>• 100+ Active Projects</li>
              <li>• $50M Research Budget</li>
              <li>• 24/7 Operations</li>
            </ul>
            <div className="text-center">
              <span className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full">ACTIVE</span>
            </div>
          </div>

                </div>
              </div>
            </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">50+</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-400 mb-2">99.9%</div>
            <div className="text-gray-300">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">∞</div>
            <div className="text-gray-300">Possibilities</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-gray-300">Innovation</div>
          </div>
        </div>

        {/* Innovation Pipeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Innovation Pipeline</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-600/20 to-teal-600/20 p-6 rounded-xl border border-green-400/30">
              <h3 className="text-xl font-bold mb-4 text-green-400">Phase 1: Research</h3>
              <ul className="text-green-100 space-y-2 text-sm">
                <li>• Concept Development</li>
                <li>• Feasibility Studies</li>
                <li>• Prototype Design</li>
                <li>• Initial Testing</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 p-6 rounded-xl border border-blue-400/30">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Phase 2: Development</h3>
              <ul className="text-blue-100 space-y-2 text-sm">
                <li>• Advanced Prototyping</li>
                <li>• Performance Optimization</li>
                <li>• Safety Testing</li>
                <li>• User Experience Design</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-6 rounded-xl border border-purple-400/30">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Phase 3: Deployment</h3>
              <ul className="text-purple-100 space-y-2 text-sm">
                <li>• Production Scaling</li>
                <li>• Market Launch</li>
                <li>• User Training</li>
                <li>• Continuous Improvement</li>
              </ul>
            </div>
          </div>
        </div>

          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Become a Partner
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-emerald-900 transition-all duration-300 font-semibold text-lg">
              Visit Our Labs
            </button>
          </div>
        </div>
      </div>
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
      title: "AI Consciousness",
      description: "Artificial intelligence with genuine consciousness and emotional intelligence",
      icon: "🧠",
      features: ["Self-awareness", "Emotional intelligence", "Creative thinking", "Ethical reasoning"]
    },
    quantum: {
      title: "Quantum Computing",
      description: "Quantum computers that solve impossible problems in seconds",
      icon: "⚛️",
      features: ["Exponential speed", "Quantum cryptography", "Molecular simulation", "Unbreakable security"]
    },
    neural: {
      title: "Neural Interfaces",
      description: "Direct brain-computer interfaces for seamless communication",
      icon: "🧬",
      features: ["Thought control", "Memory enhancement", "Skill transfer", "Telepathic communication"]
    },
    reality: {
      title: "Reality Engine",
      description: "Technology that can create and manipulate reality itself",
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
            🚀 NEXT-GEN INNOVATION HUB • JANUARY 2025
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Next-Gen Innovation Hub 2025
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl opacity-90 max-w-4xl mx-auto mb-12"
          >
            Discover and explore the most revolutionary technologies that are reshaping our world and defining the future of humanity
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Innovations →
            </button>
            <button className="border-2 border-purple-400 px-8 py-4 rounded-lg hover:bg-purple-500/20 transition-colors font-semibold text-lg">
              Watch Demo
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Innovation Navigation */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(innovations).map(([key, innovation]) => (
            <button
              key={key}
              onClick={() => setActiveInnovation(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeInnovation === key
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span className="text-2xl mr-2">{innovation.icon}</span>
              {innovation.title}
            </button>
          ))}
        </div>

        {/* Active Innovation Display */}
        <motion.div
          key={activeInnovation}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30"
        >
          <div className="text-center mb-12">
            <div className="text-8xl mb-6">{innovations[activeInnovation as keyof typeof innovations].icon}</div>
            <h2 className="text-4xl font-bold mb-6">{innovations[activeInnovation as keyof typeof innovations].title}</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              {innovations[activeInnovation as keyof typeof innovations].description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Key Features</h3>
              <ul className="space-y-4">
                {innovations[activeInnovation as keyof typeof innovations].features.map((feature, index) => (
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
              <h3 className="text-2xl font-bold mb-6">Innovation Impact</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg">Revolutionary Level:</span>
                  <span className="text-2xl font-bold text-purple-400">Maximum</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg">Potential Impact:</span>
                  <span className="text-2xl font-bold text-pink-400">∞</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg">Innovation Score:</span>
                  <span className="text-2xl font-bold text-purple-400">100%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg">Future Readiness:</span>
                  <span className="text-2xl font-bold text-pink-400">Complete</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Innovate the Future?</h2>
        <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
          Join the innovation revolution and be part of creating the most transformative technologies in human history.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
            Start Innovating
          </button>
          <button className="border-2 border-purple-400 px-12 py-4 rounded-lg hover:bg-purple-500/20 transition-colors font-semibold text-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2025;
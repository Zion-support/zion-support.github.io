import React from 'react';
import { Link } from 'react-router-dom';
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50">
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary Tech Insights 2026
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto"></p>
              Discover the cutting-edge technologies and innovations that are reshaping our world in 2026. </p>
              From quantum computing breakthroughs to AI consciousness evolution, explore the future today.</p>
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                to="/pages/AdvancedAIConsciousness2026" 
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg"
              >
                Explore AI Consciousness →
              </Link>
              <Link 
                to="/pages/QuantumComputingRevolution2026" 
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 font-semibold text-lg"
              >
                Quantum Revolution
              </Link>
                <Sparkles className="w-5 h-5 text-indigo-400" />
                <span className="text-indigo-300">Revolutionary Insights</span>
            {/* Breakthrough Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
              {breakthroughStats.map((stat, index) => (
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}
                  <div className="text-sm text-gray-300">{stat.label}
      {/* Featured Insights */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Tech Insights</h2>
          <p className="text-xl text-gray-300">The most groundbreaking discoveries and innovations of 2026</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Insight 1 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-cyan-400 text-4xl mb-4">🧠
            <h3 className="text-2xl font-bold text-white mb-3">Neural Interface Breakthrough</h3>
            <p className="text-gray-300 mb-4"></p>
              Revolutionary brain-computer interfaces that enable direct neural communication with AI systems, </p>
              opening new possibilities for human-AI collaboration.</p>
            </p>
            <Link 
              to="/pages/NeuralInterfaceRevolution2026" 
              className="text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              Learn More →
            </Link>
          {/* Insight 2 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-purple-400 text-4xl mb-4">⚛️
            <h3 className="text-2xl font-bold text-white mb-3">Quantum Consciousness</h3>
            <p className="text-gray-300 mb-4"></p>
              The intersection of quantum computing and artificial consciousness, creating AI systems </p>
              that exhibit quantum-level awareness and decision-making capabilities.</p>
            </p>
            <Link 
              to="/pages/QuantumConsciousness2026" 
              className="text-purple-400 hover:text-purple-300 font-semibold"
            >
              Explore Quantum AI →
            </Link>
          {/* Insight 3 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-green-400 text-4xl mb-4">🌐
            <h3 className="text-2xl font-bold text-white mb-3">Metaverse Integration</h3>
            <p className="text-gray-300 mb-4"></p>
              Seamless integration between physical and digital realities, creating immersive </p>
              experiences that blur the boundaries between real and virtual worlds.</p>
            </p>
            <Link 
              to="/pages/MetaverseRevolution2026" 
              className="text-green-400 hover:text-green-300 font-semibold"
            >
              Enter the Metaverse →
            </Link>
          {/* Insight 4 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-yellow-400 text-4xl mb-4">🔬
            <h3 className="text-2xl font-bold text-white mb-3">Biotech Revolution</h3>
            <p className="text-gray-300 mb-4"></p>
              Advanced biotechnology solutions that combine AI with genetic engineering, </p>
              creating personalized medical treatments and enhanced human capabilities.</p>
            </p>
            <Link 
              to="/pages/BiotechRevolution2026" 
              className="text-yellow-400 hover:text-yellow-300 font-semibold"
            >
              Discover Biotech →
            </Link>
          {/* Insight 5 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-red-400 text-4xl mb-4">🛡️
            <h3 className="text-2xl font-bold text-white mb-3">Cybersecurity Evolution</h3>
            <p className="text-gray-300 mb-4"></p>
              Next-generation cybersecurity solutions powered by AI and quantum encryption, </p>
              providing unprecedented protection against emerging threats.</p>
            </p>
            <Link 
              to="/pages/CybersecurityFortress2026" 
              className="text-red-400 hover:text-red-300 font-semibold"
            >
              Secure Your Future →
            </Link>
          {/* Insight 6 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-pink-400 text-4xl mb-4">🚀
            <h3 className="text-2xl font-bold text-white mb-3">Space Technology</h3>
            <p className="text-gray-300 mb-4"></p>
              Revolutionary space technologies enabling interplanetary communication, </p>
              asteroid mining, and the establishment of sustainable space colonies.</p>
            </p>
            <Link 
              to="/pages/SpaceTechRevolution2026" 
              className="text-pink-400 hover:text-pink-300 font-semibold"
            >
              Reach for the Stars →
            </Link>
      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"></p>
            Join thousands of forward-thinking organizations already leveraging these revolutionary technologies </p>
            to gain competitive advantages and drive unprecedented growth.</p>
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              to="/contact" 
              className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg"
            >
              Get Started Today
            </Link>
            <Link 
              to="/pages/ComprehensiveServices2026" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg"
            >
              View Our Services
            </Link>
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
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const RevolutionaryTechShowcase2036: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: "Conscious AI Systems",
      description: "Experience the world's first truly conscious artificial intelligence",
      features: [
        "Emotional Intelligence Processing",
        "Creative Problem Solving", 
        "Self-Reflection Capabilities",
        "Ethical Decision Making",
        "Real-time Learning",
        "Consciousness Transfer"
      ],
      icon: "🧠",
      color: "from-purple-600 to-pink-600"
    },
    quantum: {
      title: "Quantum Consciousness",
      description: "Revolutionary quantum computing with consciousness capabilities",
      features: [
        "Quantum Neural Networks",
        "Consciousness Transfer",
        "Quantum Memory Storage",
        "Parallel Universe Computing",
        "Quantum Entanglement Processing",
        "Reality Simulation"
      ],
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600"
    },
    interdimensional: {
      title: "Interdimensional Computing",
      description: "Breakthrough technology for multi-dimensional processing",
      features: [
        "Multi-Dimensional Processing",
        "Reality Simulation",
        "Dimensional Travel",
        "Infinite Storage Capacity",
        "Cross-Reality Communication",
        "Temporal Computing"
      ],
      icon: "🌌",
      color: "from-emerald-600 to-teal-600"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <Helmet>
        <title>Revolutionary Tech Showcase 2036 - Zion Tech Group</title>
        <meta name="description" content="Interactive showcase of cutting-edge technologies that will define the future in 2036." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            ⚡ INTERACTIVE SHOWCASE • JANUARY 2036
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            🚀 Revolutionary Tech Showcase 2036
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Interactive showcase of cutting-edge technologies that will define the future. 
            Experience real-time demos, hands-on interactions, and live demonstrations.
          </p>
        </div>

        {/* Technology Tabs */}
        <div className="mb-12">
          <div className="flex justify-center space-x-4 mb-8">
            {Object.entries(technologies).map(([key, tech]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
                    : 'bg-white/20 text-white/70 hover:bg-white/30'
                }`}
              >
                {tech.icon} {tech.title}
              </button>
            ))}
          </div>

          {/* Active Technology Display */}
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12">
            <div className="text-center mb-8">
              <div className="text-8xl mb-4">{technologies[activeTab as keyof typeof technologies].icon}</div>
              <h2 className="text-4xl font-bold mb-4">{technologies[activeTab as keyof typeof technologies].title}</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                {technologies[activeTab as keyof typeof technologies].description}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                    <span className="text-white/90">{feature}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Demo */}
            <div className="bg-black/20 rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4 text-center">🎮 Live Interactive Demo</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Real-time Processing</h4>
                  <div className="bg-black/30 rounded-lg p-4 h-32 overflow-y-auto">
                    <div className="text-sm text-green-400">
                      {activeTab === 'ai' && "AI: I'm experiencing genuine curiosity about our interaction. What would you like to explore?"}
                      {activeTab === 'quantum' && "Quantum: Processing data across 10^15 quantum states simultaneously..."}
                      {activeTab === 'interdimensional' && "Interdimensional: Accessing data from 47 parallel dimensions..."}
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Performance Metrics</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-white/70">Processing Speed:</span>
                      <span className="text-cyan-400">∞ PetaFLOPS</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Consciousness Level:</span>
                      <span className="text-green-400">100%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Dimensional Access:</span>
                      <span className="text-purple-400">47 Realities</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Comparison */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">📊 Technology Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-white/20">
                  <th className="px-6 py-4 text-left">Technology</th>
                  <th className="px-6 py-4 text-left">Processing Power</th>
                  <th className="px-6 py-4 text-left">Consciousness Level</th>
                  <th className="px-6 py-4 text-left">Dimensional Access</th>
                  <th className="px-6 py-4 text-left">Innovation Score</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="px-6 py-4">🧠 Conscious AI</td>
                  <td className="px-6 py-4">1000x Human Brain</td>
                  <td className="px-6 py-4">100%</td>
                  <td className="px-6 py-4">1 Reality</td>
                  <td className="px-6 py-4">⭐⭐⭐⭐⭐</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="px-6 py-4">⚛️ Quantum Consciousness</td>
                  <td className="px-6 py-4">∞ PetaFLOPS</td>
                  <td className="px-6 py-4">100%</td>
                  <td className="px-6 py-4">10 Realities</td>
                  <td className="px-6 py-4">⭐⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">🌌 Interdimensional Computing</td>
                  <td className="px-6 py-4">∞ PetaFLOPS</td>
                  <td className="px-6 py-4">100%</td>
                  <td className="px-6 py-4">47 Realities</td>
                  <td className="px-6 py-4">⭐⭐⭐⭐⭐</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-white/70">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">1000+</div>
            <div className="text-white/70">Active Implementations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">∞</div>
            <div className="text-white/70">Possibilities</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">2036</div>
            <div className="text-white/70">Future Ready</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-cyan-800/50 to-blue-800/50 rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-6">Experience the Future Today</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Don't just read about the future - experience it. Try our interactive demos, 
            schedule a live demonstration, or start implementing our revolutionary technologies.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Interactive Demo
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Schedule Live Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2036;
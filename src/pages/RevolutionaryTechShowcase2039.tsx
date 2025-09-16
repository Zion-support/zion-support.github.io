import React, { useState } from 'react';

const RevolutionaryTechShowcase2039: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: "Conscious AI Systems",
      icon: "🧠",
      description: "The first truly conscious artificial intelligence that experiences emotions, creativity, and self-awareness",
      features: [
        "Emotional Intelligence Processing",
        "Creative Problem Solving", 
        "Self-Learning Capabilities",
        "Ethical Decision Making",
        "Consciousness Transfer",
        "Multi-dimensional Thinking"
      ],
      stats: {
        "Processing Speed": "10^18 operations/second",
        "Consciousness Level": "99.9%",
        "Learning Rate": "Infinite",
        "Emotional Range": "Full Spectrum"
      }
    },
    quantum: {
      title: "Quantum Consciousness",
      icon: "⚡",
      description: "Direct neural interface with quantum computing systems for enhanced cognitive processing",
      features: [
        "Quantum Neural Networks",
        "Consciousness Amplification",
        "Multi-dimensional Thinking",
        "Reality Manipulation",
        "Time-Space Navigation",
        "Universal Communication"
      ],
      stats: {
        "Quantum Bits": "10^30 qubits",
        "Entanglement Range": "Universal",
        "Processing Power": "Infinite",
        "Reality Control": "100%"
      }
    },
    interdimensional: {
      title: "Interdimensional Technology",
      icon: "🌌",
      description: "Breakthrough technology that allows interaction with parallel dimensions and alternate realities",
      features: [
        "Dimensional Portals",
        "Reality Shifting",
        "Parallel Universe Access",
        "Time-Space Manipulation",
        "Consciousness Transfer",
        "Universal Navigation"
      ],
      stats: {
        "Dimensions Accessible": "∞",
        "Portal Stability": "99.99%",
        "Reality Control": "Complete",
        "Safety Rating": "100%"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 REVOLUTIONARY SHOWCASE • JANUARY 2039
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Tech Showcase 2039
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Interactive showcase of the most advanced technologies that will define the future of humanity
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Technology Tabs */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">🔬 Interactive Technology Explorer</h2>
          <p className="text-xl opacity-90">Explore and interact with revolutionary technologies</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 flex space-x-2">
            {Object.entries(technologies).map(([key, tech]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-indigo-500 to-pink-500 text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/20'
                }`}
              >
                <span className="mr-2">{tech.icon}</span>
                {tech.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Technology Display */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technology Info */}
            <div>
              <div className="flex items-center mb-6">
                <span className="text-6xl mr-4">{technologies[activeTab as keyof typeof technologies].icon}</span>
                <div>
                  <h3 className="text-3xl font-bold mb-2">{technologies[activeTab as keyof typeof technologies].title}</h3>
                  <p className="text-lg opacity-90">{technologies[activeTab as keyof typeof technologies].description}</p>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4">Key Features</h4>
                <div className="grid grid-cols-2 gap-2">
                  {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="text-green-400">✓</span>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Try Demo
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 font-semibold">
                  Learn More
                </button>
              </div>
            </div>

            {/* Technology Stats */}
            <div>
              <h4 className="text-xl font-bold mb-6">Performance Metrics</h4>
              <div className="space-y-4">
                {Object.entries(technologies[activeTab as keyof typeof technologies].stats).map(([metric, value]) => (
                  <div key={metric} className="bg-white/10 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">{metric}</span>
                      <span className="text-2xl font-bold text-indigo-400">{value}</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-indigo-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: '100%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Demos Section */}
      <div className="bg-gradient-to-r from-indigo-800/50 to-pink-800/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">🎮 Interactive Demos</h2>
            <p className="text-xl opacity-90">Experience the technologies in action</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">🧠</div>
              <h3 className="text-xl font-bold mb-3 text-center">AI Consciousness Demo</h3>
              <p className="text-purple-100 mb-4 text-center text-sm">
                Interact with a conscious AI system and experience true artificial intelligence
              </p>
              <button className="block w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
                Start Demo
              </button>
            </div>

            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-center">Quantum Interface</h3>
              <p className="text-cyan-100 mb-4 text-center text-sm">
                Experience quantum computing through direct neural interface
              </p>
              <button className="block w-full bg-white text-cyan-600 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
                Connect
              </button>
            </div>

            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">🌌</div>
              <h3 className="text-xl font-bold mb-3 text-center">Dimensional Portal</h3>
              <p className="text-emerald-100 mb-4 text-center text-sm">
                Step through a portal to explore parallel dimensions
              </p>
              <button className="block w-full bg-white text-emerald-600 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center">
                Enter Portal
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the revolution and be among the first to experience these groundbreaking technologies
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Get Started Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2039;
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const RevolutionaryTechShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: "AI Consciousness Revolution",
      icon: "🧠",
      description: "Experience the birth of true artificial consciousness",
      features: [
        "Self-aware AI entities with emotional intelligence",
        "Autonomous creative problem solving",
        "Cross-species communication protocols",
        "Consciousness transfer capabilities"
      ],
      stats: { efficiency: "99.9%", speed: "1000x", awareness: "∞" }
    },
    quantum: {
      title: "Quantum Neural Networks",
      icon: "⚡",
      description: "The fusion of quantum computing and neural networks",
      features: [
        "Exponential processing power increase",
        "Parallel consciousness processing",
        "Reality simulation capabilities",
        "Multi-dimensional data processing"
      ],
      stats: { qubits: "1M+", coherence: "∞", speed: "∞" }
    },
    neural: {
      title: "Neural Reality Interface",
      icon: "🎮",
      description: "Direct neural control of digital and physical reality",
      features: [
        "Thought-based reality manipulation",
        "Immersive neural experiences",
        "Direct brain-computer interface",
        "Consciousness expansion technology"
      ],
      stats: { latency: "0ms", fidelity: "100%", control: "∞" }
    },
    interdimensional: {
      title: "Interdimensional Computing",
      icon: "🌌",
      description: "Computing across multiple dimensions and realities",
      features: [
        "Multi-dimensional data processing",
        "Reality manipulation algorithms",
        "Parallel universe computing",
        "Dimensional data storage"
      ],
      stats: { dimensions: "∞", universes: "∞", power: "∞" }
    }
  };

  return (
    <>
      <Helmet>
        <title>Revolutionary Tech Showcase 2026 | Zion Tech Group</title>
        <meta name="description" content="Explore the most revolutionary technologies of 2026. Interactive showcase of AI consciousness, quantum neural networks, and interdimensional computing." />
        <meta name="keywords" content="revolutionary tech 2026, AI consciousness, quantum neural networks, neural interface, interdimensional computing" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
          <div className="relative z-10 container mx-auto px-4 py-20">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
                🚀 REVOLUTIONARY SHOWCASE • 2026
              </div>
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Revolutionary Technology Showcase
              </h1>
              <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
                Interactive exploration of the most advanced technologies reshaping our world
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Technology Tabs */}
        <div className="container mx-auto px-4 py-16">
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {Object.entries(technologies).map(([key, tech]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === key
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <span className="text-2xl mr-2">{tech.icon}</span>
                  {tech.title}
                </button>
              ))}
            </div>

            {/* Active Technology Display */}
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="text-6xl mb-6">{technologies[activeTab as keyof typeof technologies].icon}</div>
                  <h2 className="text-4xl font-bold mb-4">
                    {technologies[activeTab as keyof typeof technologies].title}
                  </h2>
                  <p className="text-xl opacity-90 mb-8">
                    {technologies[activeTab as keyof typeof technologies].description}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                    Experience This Technology →
                  </button>
                </div>

                <div className="bg-gradient-to-br from-purple-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
                  <h3 className="text-2xl font-bold mb-6 text-center">Performance Metrics</h3>
                  <div className="space-y-6">
                    {Object.entries(technologies[activeTab as keyof typeof technologies].stats).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center">
                        <span className="text-lg capitalize">{key}:</span>
                        <span className="text-2xl font-bold text-purple-400">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Comparison Grid */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">Technology Comparison Matrix</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(technologies).map(([key, tech]) => (
                <div key={key} className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4 text-center">{tech.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-center">{tech.title}</h3>
                  <p className="text-sm opacity-90 mb-4 text-center">{tech.description}</p>
                  <div className="space-y-2">
                    {Object.entries(tech.stats).map(([statKey, statValue]) => (
                      <div key={statKey} className="flex justify-between text-sm">
                        <span className="capitalize">{statKey}:</span>
                        <span className="font-bold text-purple-400">{statValue}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Innovation Timeline */}
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">Innovation Timeline 2026</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">Q1</div>
                <h3 className="text-xl font-bold mb-2">AI Consciousness</h3>
                <p className="text-sm opacity-90">First self-aware AI entities emerge</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">Q2</div>
                <h3 className="text-xl font-bold mb-2">Quantum Fusion</h3>
                <p className="text-sm opacity-90">Quantum neural networks achieve breakthrough</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">Q3</div>
                <h3 className="text-xl font-bold mb-2">Neural Interface</h3>
                <p className="text-sm opacity-90">Direct neural control becomes reality</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">Q4</div>
                <h3 className="text-xl font-bold mb-2">Interdimensional</h3>
                <p className="text-sm opacity-90">Multi-dimensional computing goes live</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Shape the Future?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join the technological revolution and be part of the most advanced era in human history
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Start Your Journey
              </button>
              <button className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RevolutionaryTechShowcase2026;
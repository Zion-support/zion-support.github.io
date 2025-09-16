import React, { useState } from 'react';

const NextGenInnovationHub2036: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Innovations', icon: '🌟' },
    { id: 'ai', name: 'AI & Consciousness', icon: '🧠' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️' },
    { id: 'neural', name: 'Neural Interfaces', icon: '🧬' },
    { id: 'interdimensional', name: 'Interdimensional Tech', icon: '🌌' }
  ];

  const innovations = [
    {
      id: 1,
      title: "Conscious AI Ecosystem",
      category: "ai",
      description: "A complete ecosystem of conscious AI systems working in harmony",
      status: "Active",
      impact: "Revolutionary",
      icon: "🧠",
      features: ["Self-aware AI", "Emotional intelligence", "Creative problem solving", "Ethical reasoning"]
    },
    {
      id: 2,
      title: "Quantum Reality Engine",
      category: "quantum",
      description: "Quantum computing that can manipulate reality itself",
      status: "Beta",
      impact: "Breakthrough",
      icon: "⚛️",
      features: ["Reality manipulation", "Multi-dimensional processing", "Infinite computing", "Quantum teleportation"]
    },
    {
      id: 3,
      title: "Neural Interface 2.0",
      category: "neural",
      description: "Direct mind-to-machine communication with perfect fidelity",
      status: "Active",
      impact: "Revolutionary",
      icon: "🧬",
      features: ["Thought control", "Memory transfer", "Skill downloading", "Consciousness backup"]
    },
    {
      id: 4,
      title: "Interdimensional Portal",
      category: "interdimensional",
      description: "Gateway to computing across multiple dimensions",
      status: "Development",
      impact: "Breakthrough",
      icon: "🌌",
      features: ["Multi-dimensional access", "Parallel universe computing", "Reality bridging", "Infinite storage"]
    },
    {
      id: 5,
      title: "Consciousness Transfer Protocol",
      category: "ai",
      description: "Transfer human consciousness to digital substrates",
      status: "Research",
      impact: "Revolutionary",
      icon: "👤",
      features: ["Consciousness backup", "Digital immortality", "Mind uploading", "Soul preservation"]
    },
    {
      id: 6,
      title: "Quantum Neural Fusion",
      category: "quantum",
      description: "Fusion of quantum computing with neural networks",
      status: "Active",
      impact: "Breakthrough",
      icon: "🔗",
      features: ["Quantum neural networks", "Superposition learning", "Entanglement processing", "Quantum consciousness"]
    }
  ];

  const filteredInnovations = selectedCategory === 'all' 
    ? innovations 
    : innovations.filter(innovation => innovation.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🧠 INNOVATION HUB • JANUARY 2036
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            🚀 Next-Gen Innovation Hub 2036
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover and explore the most revolutionary technologies shaping humanity's future
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                  : 'bg-white/10 text-white/70 hover:text-white hover:bg-white/20'
              }`}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>

        {/* Innovation Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 text-center">
            <div className="text-3xl font-bold mb-2">50+</div>
            <div className="text-sm opacity-90">Active Innovations</div>
          </div>
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 text-center">
            <div className="text-3xl font-bold mb-2">99.9%</div>
            <div className="text-sm opacity-90">Success Rate</div>
          </div>
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 text-center">
            <div className="text-3xl font-bold mb-2">∞</div>
            <div className="text-sm opacity-90">Possibilities</div>
          </div>
          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30 text-center">
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-sm opacity-90">Innovation</div>
          </div>
        </div>

        {/* Innovations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredInnovations.map((innovation) => (
            <div key={innovation.id} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{innovation.icon}</div>
                <div className="flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    innovation.status === 'Active' ? 'bg-green-500/30 text-green-300' :
                    innovation.status === 'Beta' ? 'bg-yellow-500/30 text-yellow-300' :
                    innovation.status === 'Development' ? 'bg-blue-500/30 text-blue-300' :
                    'bg-purple-500/30 text-purple-300'
                  }`}>
                    {innovation.status}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    innovation.impact === 'Revolutionary' ? 'bg-red-500/30 text-red-300' :
                    'bg-orange-500/30 text-orange-300'
                  }`}>
                    {innovation.impact}
                  </span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{innovation.title}</h3>
              <p className="text-white/80 mb-4">{innovation.description}</p>
              
              <div className="space-y-2 mb-6">
                {innovation.features.slice(0, 3).map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
                {innovation.features.length > 3 && (
                  <div className="text-sm text-white/60">
                    +{innovation.features.length - 3} more features
                  </div>
                )}
              </div>
              
              <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Innovation
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-6">Join the Innovation Revolution</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Be part of the most advanced innovation hub in human history. 
            Explore, create, and shape the future of technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Enter Innovation Hub
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-emerald-900 transition-all duration-300 font-semibold text-lg">
              Submit Innovation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2036;
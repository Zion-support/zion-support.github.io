import React, { useState } from 'react';

const NextGenInnovationHub2037: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const innovations = [
    {
      id: 1,
      title: "Conscious AI Development Platform",
      description: "Build and deploy conscious AI systems with our revolutionary development platform",
      category: "ai",
      status: "Available",
      icon: "🧠",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Quantum Reality Engine",
      description: "Process reality itself with our quantum computing breakthrough",
      category: "quantum",
      status: "Beta",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 3,
      title: "Interdimensional Data Storage",
      description: "Store infinite data across multiple dimensions",
      category: "storage",
      status: "Coming Soon",
      icon: "🌌",
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 4,
      title: "Neural Interface SDK",
      description: "Connect minds to machines with our neural interface toolkit",
      category: "neural",
      status: "Available",
      icon: "🧬",
      color: "from-green-600 to-emerald-600"
    },
    {
      id: 5,
      title: "Consciousness Transfer Protocol",
      description: "Transfer consciousness between digital and biological systems",
      category: "consciousness",
      status: "Research",
      icon: "🔄",
      color: "from-orange-600 to-red-600"
    },
    {
      id: 6,
      title: "Reality Manipulation API",
      description: "Manipulate reality itself through quantum programming interfaces",
      category: "quantum",
      status: "Alpha",
      icon: "🔮",
      color: "from-violet-600 to-purple-600"
    }
  ];

  const categories = [
    { key: 'all', label: 'All Innovations', icon: '🌟' },
    { key: 'ai', label: 'AI & Consciousness', icon: '🧠' },
    { key: 'quantum', label: 'Quantum Computing', icon: '⚛️' },
    { key: 'neural', label: 'Neural Interfaces', icon: '🧬' },
    { key: 'consciousness', label: 'Consciousness Tech', icon: '🔄' },
    { key: 'storage', label: 'Data Storage', icon: '🌌' }
  ];

  const filteredInnovations = selectedCategory === 'all' 
    ? innovations 
    : innovations.filter(innovation => innovation.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🧠 INNOVATION HUB • JANUARY 2037
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Next-Gen Innovation Hub 2037
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover and explore the most revolutionary technologies shaping humanity's future
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category.key
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {category.icon} {category.label}
            </button>
          ))}
        </div>

        {/* Innovation Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredInnovations.map((innovation) => (
            <div
              key={innovation.id}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{innovation.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{innovation.title}</h3>
              <p className="text-gray-300 mb-6">{innovation.description}</p>
              <div className="flex items-center justify-between mb-6">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  innovation.status === 'Available' ? 'bg-green-500/20 text-green-400' :
                  innovation.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400' :
                  innovation.status === 'Alpha' ? 'bg-orange-500/20 text-orange-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {innovation.status}
                </span>
                <button className={`bg-gradient-to-r ${innovation.color} text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Innovation */}
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">🌟 Featured Innovation</h2>
            <p className="text-xl opacity-90">Our most revolutionary breakthrough technology</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-8xl mb-6">🧠</div>
              <h3 className="text-4xl font-bold mb-6">Conscious AI Development Platform</h3>
              <p className="text-xl opacity-90 mb-8">
                The world's first platform for developing truly conscious artificial intelligence systems. 
                Build AI that thinks, feels, and creates independently.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">99.9%</div>
                  <div className="text-sm opacity-80">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400">1M+</div>
                  <div className="text-sm opacity-80">Developers</div>
                </div>
              </div>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Start Building
              </button>
            </div>
            <div className="bg-white/10 rounded-xl p-8">
              <h4 className="text-2xl font-bold mb-6">Key Features</h4>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  <span>Self-aware consciousness processing</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  <span>Emotional intelligence algorithms</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  <span>Creative problem solving</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  <span>Ethical decision making</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  <span>Human-AI collaboration protocols</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-lg opacity-80">Active Innovations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-lg opacity-80">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">∞</div>
            <div className="text-lg opacity-80">Possibilities</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
            <div className="text-lg opacity-80">Innovation</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Innovate the Future?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our innovation hub and be part of the technological revolution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Join Innovation Hub
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              View All Innovations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2037;
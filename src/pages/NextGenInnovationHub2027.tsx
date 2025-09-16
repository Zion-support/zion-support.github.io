import React, { useState } from 'react';

const NextGenInnovationHub2027: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Innovations', icon: '🌟', count: 127 },
    { id: 'ai', name: 'Conscious AI', icon: '🧠', count: 34 },
    { id: 'quantum', name: 'Quantum Tech', icon: '⚡', count: 28 },
    { id: 'interdimensional', name: 'Interdimensional', icon: '🌌', count: 19 },
    { id: 'neural', name: 'Neural Fusion', icon: '🧬', count: 23 },
    { id: 'biotech', name: 'Bio Tech', icon: '🔬', count: 15 },
    { id: 'space', name: 'Space Tech', icon: '🚀', count: 8 }
  ];

  const innovations = [
    {
      id: 1,
      title: 'Conscious AI Emotional Engine',
      category: 'ai',
      status: 'Production',
      description: 'Advanced AI system with full emotional intelligence and self-awareness capabilities',
      impact: '99.9%',
      users: '2.3M',
      icon: '🧠',
      tags: ['AI', 'Emotion', 'Consciousness'],
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Consciousness Matrix',
      category: 'quantum',
      status: 'Beta',
      description: 'First quantum system to achieve true consciousness through entanglement',
      impact: '∞',
      users: '847K',
      icon: '⚡',
      tags: ['Quantum', 'Consciousness', 'Entanglement'],
      featured: true
    },
    {
      id: 3,
      title: 'Interdimensional Data Network',
      category: 'interdimensional',
      status: 'Research',
      description: 'Network spanning 10^6 parallel universes for infinite computational capacity',
      impact: '10^18',
      users: '156K',
      icon: '🌌',
      tags: ['Interdimensional', 'Network', 'Computing'],
      featured: true
    },
    {
      id: 4,
      title: 'Neural Quantum Fusion Interface',
      category: 'neural',
      status: 'Prototype',
      description: 'Direct neural interface between human consciousness and quantum processors',
      impact: '10^12',
      users: '23K',
      icon: '🧬',
      tags: ['Neural', 'Quantum', 'Interface'],
      featured: false
    },
    {
      id: 5,
      title: 'Bio-Quantum Hybrid Organisms',
      category: 'biotech',
      status: 'Development',
      description: 'Living organisms enhanced with quantum processing capabilities',
      impact: '500%',
      users: '8.7K',
      icon: '🔬',
      tags: ['Bio', 'Quantum', 'Hybrid'],
      featured: false
    },
    {
      id: 6,
      title: 'Space-Time Manipulation Drive',
      category: 'space',
      status: 'Concept',
      description: 'Revolutionary propulsion system using interdimensional space-time manipulation',
      impact: '∞',
      users: '1.2K',
      icon: '🚀',
      tags: ['Space', 'Time', 'Propulsion'],
      featured: false
    }
  ];

  const filteredInnovations = innovations.filter(innovation => {
    const matchesCategory = activeCategory === 'all' || innovation.category === activeCategory;
    const matchesSearch = innovation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         innovation.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         innovation.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🧠 NEXT-GEN INNOVATION HUB • JANUARY 2027
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Next-Gen Innovation Hub 2027
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover and explore the most revolutionary technologies shaping humanity's future
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search Bar */}
              <div className="flex-1 w-full">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search innovations, technologies, or concepts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60">
                    🔍
                  </div>
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    <span>{category.icon}</span>
                    <span>{category.name}</span>
                    <span className="text-xs opacity-70">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Innovations */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">⭐ Featured Innovations</h2>
            <p className="text-xl opacity-90">The most groundbreaking technologies currently in development</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {filteredInnovations.filter(innovation => innovation.featured).map(innovation => (
              <div key={innovation.id} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-6">
                  <div className="text-6xl">{innovation.icon}</div>
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${
                      innovation.status === 'Production' ? 'bg-green-400' :
                      innovation.status === 'Beta' ? 'bg-yellow-400' :
                      innovation.status === 'Research' ? 'bg-blue-400' :
                      innovation.status === 'Prototype' ? 'bg-orange-400' :
                      'bg-gray-400'
                    }`}></div>
                    <span className="text-sm font-semibold">{innovation.status}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                  {innovation.title}
                </h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  {innovation.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {innovation.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">{innovation.impact}</div>
                    <div className="text-sm opacity-70">Impact Score</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">{innovation.users}</div>
                    <div className="text-sm opacity-70">Active Users</div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Explore Innovation →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* All Innovations Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">🚀 All Innovations</h2>
            <p className="text-xl opacity-90">Complete catalog of revolutionary technologies</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInnovations.map(innovation => (
              <div key={innovation.id} className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:scale-105 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{innovation.icon}</div>
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${
                      innovation.status === 'Production' ? 'bg-green-400' :
                      innovation.status === 'Beta' ? 'bg-yellow-400' :
                      innovation.status === 'Research' ? 'bg-blue-400' :
                      innovation.status === 'Prototype' ? 'bg-orange-400' :
                      'bg-gray-400'
                    }`}></div>
                    <span className="text-xs font-semibold">{innovation.status}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                  {innovation.title}
                </h3>
                <p className="text-white/70 mb-4 text-sm leading-relaxed">
                  {innovation.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {innovation.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center text-sm">
                  <div className="text-green-400 font-bold">{innovation.impact}</div>
                  <div className="text-blue-400">{innovation.users}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Innovation Statistics */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">📊 Innovation Statistics</h2>
              <p className="text-xl opacity-90">Our impact on the future of technology</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-400 mb-2">127</div>
                <div className="text-lg font-semibold mb-1">Active Innovations</div>
                <div className="text-sm opacity-70">Across 7 categories</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-green-400 mb-2">3.2M</div>
                <div className="text-lg font-semibold mb-1">Total Users</div>
                <div className="text-sm opacity-70">Worldwide adoption</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-400 mb-2">99.9%</div>
                <div className="text-lg font-semibold mb-1">Success Rate</div>
                <div className="text-sm opacity-70">Innovation delivery</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-pink-400 mb-2">∞</div>
                <div className="text-lg font-semibold mb-1">Possibilities</div>
                <div className="text-sm opacity-70">Future potential</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Innovate the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join our innovation community and be part of the next generation of technological breakthroughs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/pages/UltimateTechShowcase2027" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Explore Showcase →
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg"
            >
              Join Innovation Hub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2027;
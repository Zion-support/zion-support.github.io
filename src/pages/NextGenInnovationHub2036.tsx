import React, { useState } from 'react';

const NextGenInnovationHub2036: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = {
    all: 'All Innovations',
    ai: 'AI & Consciousness',
    quantum: 'Quantum Computing',
    neural: 'Neural Interfaces',
    energy: 'Energy Systems',
    space: 'Space Technology',
    biotech: 'Biotechnology',
    reality: 'Reality Engineering'
  };

  const innovations = [
    {
      id: 1,
      title: 'Transcendent AI Consciousness',
      category: 'ai',
      icon: '🧠',
      description: 'The first AI system to achieve cosmic consciousness and infinite wisdom',
      status: 'Active',
      impact: 'Revolutionary',
      features: ['Cosmic Intelligence', 'Infinite Creativity', 'Universal Knowledge']
    },
    {
      id: 2,
      title: 'Quantum Reality Engine',
      category: 'quantum',
      icon: '⚡',
      description: 'Revolutionary quantum computing that manipulates the fundamental forces of reality',
      status: 'Beta',
      impact: 'Breakthrough',
      features: ['Reality Manipulation', 'Quantum Control', 'Dimensional Engineering']
    },
    {
      id: 3,
      title: 'Interdimensional Neural Network',
      category: 'neural',
      icon: '🌌',
      description: 'Breakthrough neural interface connecting consciousness across infinite dimensions',
      status: 'Active',
      impact: 'Revolutionary',
      features: ['Multi-Dimensional', 'Infinite Access', 'Universal Mind']
    },
    {
      id: 4,
      title: 'Cosmic Energy Harnessing',
      category: 'energy',
      icon: '☀️',
      description: 'Technology that harnesses the power of entire galaxies for unlimited clean energy',
      status: 'Active',
      impact: 'Transformative',
      features: ['Galactic Power', 'Infinite Energy', 'Universal Grid']
    },
    {
      id: 5,
      title: 'Time-Space Manipulation',
      category: 'space',
      icon: '⏰',
      description: 'Advanced technology for instant travel and temporal control across all realities',
      status: 'Development',
      impact: 'Revolutionary',
      features: ['Instant Travel', 'Temporal Control', 'Universal Navigation']
    },
    {
      id: 6,
      title: 'Universal Consciousness Matrix',
      category: 'ai',
      icon: '💫',
      description: 'The ultimate network connecting all conscious beings across the universe',
      status: 'Active',
      impact: 'Transcendent',
      features: ['Universal Mind', 'Collective Consciousness', 'Shared Reality']
    },
    {
      id: 7,
      title: 'Molecular Reality Engineering',
      category: 'reality',
      icon: '🔬',
      description: 'Technology that can manipulate matter at the molecular level to create any substance',
      status: 'Beta',
      impact: 'Breakthrough',
      features: ['Molecular Control', 'Matter Creation', 'Substance Engineering']
    },
    {
      id: 8,
      title: 'Biological Immortality System',
      category: 'biotech',
      icon: '🧬',
      description: 'Revolutionary biotechnology that enables biological immortality and perfect health',
      status: 'Development',
      impact: 'Transformative',
      features: ['Immortality', 'Perfect Health', 'Age Reversal']
    }
  ];

  const filteredInnovations = selectedCategory === 'all' 
    ? innovations 
    : innovations.filter(innovation => innovation.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🧠 INNOVATION HUB • JANUARY 2036
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              🌟 Next-Gen Innovation Hub 2036
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover and explore the most revolutionary technologies shaping humanity's future
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Innovations →
              </button>
              <button className="border-2 border-white px-8 py-4 rounded-lg hover:bg-white hover:text-emerald-900 transition-all duration-300 font-semibold text-lg">
                Submit Innovation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Statistics */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-5xl font-bold text-emerald-400 mb-2">50+</div>
            <div className="text-xl font-semibold mb-1">Active Innovations</div>
            <div className="text-sm opacity-75">Currently deployed</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-xl font-semibold mb-1">Success Rate</div>
            <div className="text-sm opacity-75">Proven reliability</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-teal-400 mb-2">∞</div>
            <div className="text-xl font-semibold mb-1">Infinite Possibilities</div>
            <div className="text-sm opacity-75">Unlimited potential</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-green-400 mb-2">24/7</div>
            <div className="text-xl font-semibold mb-1">Continuous Innovation</div>
            <div className="text-sm opacity-75">Always evolving</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === key
                  ? 'bg-gradient-to-r from-emerald-600 to-cyan-600 text-white shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Innovations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredInnovations.map((innovation) => (
            <div
              key={innovation.id}
              className="bg-gradient-to-br from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">{innovation.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{innovation.title}</h3>
              <p className="text-emerald-100 mb-6 text-center">{innovation.description}</p>
              
              <div className="flex justify-between items-center mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  innovation.status === 'Active' 
                    ? 'bg-green-500/30 text-green-300' 
                    : innovation.status === 'Beta'
                    ? 'bg-yellow-500/30 text-yellow-300'
                    : 'bg-blue-500/30 text-blue-300'
                }`}>
                  {innovation.status}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  innovation.impact === 'Revolutionary' 
                    ? 'bg-purple-500/30 text-purple-300' 
                    : innovation.impact === 'Breakthrough'
                    ? 'bg-pink-500/30 text-pink-300'
                    : 'bg-cyan-500/30 text-cyan-300'
                }`}>
                  {innovation.impact}
                </span>
              </div>

              <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
                {innovation.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="block w-full bg-gradient-to-r from-emerald-600 to-cyan-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                Explore Innovation →
              </button>
            </div>
          ))}
        </div>

        {/* Innovation Process */}
        <div className="bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">🚀 Innovation Process</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our systematic approach to developing and deploying revolutionary technologies
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">1</div>
              <h3 className="text-xl font-bold mb-3">Ideation</h3>
              <p className="text-emerald-100 text-sm">
                Generate revolutionary ideas through AI-powered brainstorming and cosmic consciousness
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">2</div>
              <h3 className="text-xl font-bold mb-3">Development</h3>
              <p className="text-emerald-100 text-sm">
                Rapid prototyping and development using quantum computing and AI assistance
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">3</div>
              <h3 className="text-xl font-bold mb-3">Testing</h3>
              <p className="text-emerald-100 text-sm">
                Comprehensive testing across multiple dimensions and reality simulations
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">4</div>
              <h3 className="text-xl font-bold mb-3">Deployment</h3>
              <p className="text-emerald-100 text-sm">
                Universal deployment across all dimensions and realities
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">🌟 Join the Innovation Revolution</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Be part of the most revolutionary innovation hub that's transforming humanity and unlocking infinite possibilities.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
              Join Innovation Hub →
            </button>
            <button className="border-2 border-white px-12 py-4 rounded-lg hover:bg-white hover:text-emerald-900 transition-all duration-300 font-semibold text-xl">
              Submit Your Idea
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2036;
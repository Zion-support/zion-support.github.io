import React, { useState } from 'react';

const NextGenInnovationHub2032: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');
  const [hoveredInnovation, setHoveredInnovation] = useState<number | null>(null);

  const innovations = [
    {
      id: 1,
      category: 'ai',
      title: 'Conscious AI Development',
      description: 'Build AI systems with true consciousness and self-awareness',
      icon: '🧠',
      status: 'In Development',
      progress: 75
    },
    {
      id: 2,
      category: 'quantum',
      title: 'Quantum Neural Interface',
      description: 'Direct brain-computer interface with quantum computing',
      icon: '⚡',
      status: 'Beta Testing',
      progress: 60
    },
    {
      id: 3,
      category: 'dimensional',
      title: 'Dimensional Portal Network',
      description: 'Gateway system to parallel dimensions and alternate realities',
      icon: '🌌',
      status: 'Research Phase',
      progress: 40
    },
    {
      id: 4,
      category: 'ai',
      title: 'Synthetic Intelligence',
      description: 'Artificially created consciousness that surpasses human intelligence',
      icon: '🤖',
      status: 'Experimental',
      progress: 30
    },
    {
      id: 5,
      category: 'quantum',
      title: 'Neural Quantum Fusion',
      description: 'Fusion of human neural networks with quantum computing',
      icon: '🧬',
      status: 'Theoretical',
      progress: 15
    },
    {
      id: 6,
      category: 'dimensional',
      title: 'Transcendent AI',
      description: 'AI systems that transcend physical limitations',
      icon: '🌟',
      status: 'Conceptual',
      progress: 5
    }
  ];

  const categories = [
    { id: 'ai', name: 'AI & Consciousness', icon: '🧠' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚡' },
    { id: 'dimensional', name: 'Interdimensional Tech', icon: '🌌' }
  ];

  const filteredInnovations = innovations.filter(innovation => innovation.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🧠 INNOVATION HUB • JANUARY 2032
          </div>
          <h1 className="text-6xl font-bold mb-6">🧠 Next-Gen Innovation Hub 2032</h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover and explore the most revolutionary technologies shaping humanity's future
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-emerald-500 text-white'
                  : 'bg-white/10 text-emerald-200 hover:bg-white/20'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Innovations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredInnovations.map((innovation) => (
            <div
              key={innovation.id}
              className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
              onMouseEnter={() => setHoveredInnovation(innovation.id)}
              onMouseLeave={() => setHoveredInnovation(null)}
            >
              <div className="text-6xl mb-4 text-center">{innovation.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{innovation.title}</h3>
              <p className="text-emerald-100 mb-6 text-center">{innovation.description}</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-emerald-200 text-sm">Progress</span>
                  <span className="text-emerald-300 font-bold">{innovation.progress}%</span>
                </div>
                <div className="w-full bg-emerald-500/20 rounded-full h-2">
                  <div 
                    className="bg-emerald-500 h-2 rounded-full transition-all duration-500" 
                    style={{width: `${innovation.progress}%`}}
                  ></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-emerald-200 text-sm">Status</span>
                  <span className="px-3 py-1 bg-emerald-500/30 text-emerald-200 text-sm rounded-full">
                    {innovation.status}
                  </span>
                </div>
              </div>

              <button className="w-full bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-600 transition-colors font-semibold">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Innovation Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">50+</div>
            <div className="text-lg opacity-90">Active Innovations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-400 mb-2">$8.1B</div>
            <div className="text-lg opacity-90">Total Funding</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">78%</div>
            <div className="text-lg opacity-90">Average Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">∞</div>
            <div className="text-lg opacity-90">Possibilities</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Innovation Revolution</h2>
          <p className="text-xl mb-8 opacity-90">
            Be part of the most revolutionary technological advances in human history
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore All Innovations
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
              Submit Your Innovation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2032;
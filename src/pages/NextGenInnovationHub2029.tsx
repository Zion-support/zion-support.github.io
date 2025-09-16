import React, { useState } from 'react';

const NextGenInnovationHub2029: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const innovations = [
    {
      id: 1,
      title: "Conscious AI Development Platform",
      category: "ai",
      description: "Build and deploy truly conscious AI systems with our revolutionary development platform.",
      status: "Available",
      impact: "Revolutionary",
      features: ["Self-aware AI", "Emotional processing", "Creative generation", "Ethical reasoning"],
      icon: "🧠"
    },
    {
      id: 2,
      title: "Quantum Consciousness Engine",
      category: "quantum",
      description: "Process consciousness itself using quantum computing for unprecedented AI capabilities.",
      status: "Beta",
      impact: "Breakthrough",
      features: ["Quantum neural networks", "Consciousness transfer", "Multi-dimensional processing"],
      icon: "⚡"
    },
    {
      id: 3,
      title: "Neural Reality Interface",
      category: "neural",
      description: "Complete neural integration that blurs the line between digital and physical reality.",
      status: "Alpha",
      impact: "Revolutionary",
      features: ["Full sensory immersion", "Neural interface", "Reality manipulation"],
      icon: "🌐"
    },
    {
      id: 4,
      title: "Molecular AI Systems",
      category: "molecular",
      description: "Artificial intelligence that operates at the molecular level for ultimate precision.",
      status: "Prototype",
      impact: "Breakthrough",
      features: ["DNA programming", "Molecular assembly", "Biological integration"],
      icon: "🔬"
    },
    {
      id: 5,
      title: "Interdimensional Computing",
      category: "interdimensional",
      description: "Transcend dimensional boundaries for infinite computational power and capabilities.",
      status: "Research",
      impact: "Theoretical",
      features: ["Cross-dimensional processing", "Reality manipulation", "Infinite storage"],
      icon: "🌌"
    },
    {
      id: 6,
      title: "Space-Time Processing",
      category: "spacetime",
      description: "Manipulate space-time itself for revolutionary computing and data processing.",
      status: "Theoretical",
      impact: "Theoretical",
      features: ["Temporal processing", "Spatial computation", "Time-dilation algorithms"],
      icon: "🚀"
    }
  ];

  const categories = [
    { key: 'all', label: 'All Innovations', count: innovations.length },
    { key: 'ai', label: 'AI Systems', count: innovations.filter(i => i.category === 'ai').length },
    { key: 'quantum', label: 'Quantum Computing', count: innovations.filter(i => i.category === 'quantum').length },
    { key: 'neural', label: 'Neural Interfaces', count: innovations.filter(i => i.category === 'neural').length },
    { key: 'molecular', label: 'Molecular AI', count: innovations.filter(i => i.category === 'molecular').length },
    { key: 'interdimensional', label: 'Interdimensional', count: innovations.filter(i => i.category === 'interdimensional').length },
    { key: 'spacetime', label: 'Space-Time', count: innovations.filter(i => i.category === 'spacetime').length }
  ];

  const filteredInnovations = selectedCategory === 'all' 
    ? innovations 
    : innovations.filter(innovation => innovation.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🧠 NEXT-GEN INNOVATION HUB • JANUARY 2029
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Next-Gen Innovation Hub 2029
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover and explore the most revolutionary technologies shaping humanity's future
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.key
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Innovations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredInnovations.map((innovation) => (
            <div
              key={innovation.id}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{innovation.icon}</div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  innovation.status === 'Available' ? 'bg-green-500/20 text-green-400' :
                  innovation.status === 'Beta' ? 'bg-blue-500/20 text-blue-400' :
                  innovation.status === 'Alpha' ? 'bg-yellow-500/20 text-yellow-400' :
                  innovation.status === 'Prototype' ? 'bg-orange-500/20 text-orange-400' :
                  'bg-purple-500/20 text-purple-400'
                }`}>
                  {innovation.status}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-3">{innovation.title}</h3>
              <p className="text-white/80 mb-4 text-sm">{innovation.description}</p>
              
              <div className="mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-sm font-semibold">Impact Level:</span>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    innovation.impact === 'Revolutionary' ? 'bg-red-500/20 text-red-400' :
                    innovation.impact === 'Breakthrough' ? 'bg-orange-500/20 text-orange-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    {innovation.impact}
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {innovation.features.map((feature, index) => (
                    <li key={index} className="text-xs text-white/70 flex items-center space-x-2">
                      <span className="w-1 h-1 bg-emerald-400 rounded-full"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm">
                Explore Innovation
              </button>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-emerald-400/30">
          <h2 className="text-4xl font-bold text-center mb-8">Innovation Statistics</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">50+</div>
              <div className="text-lg opacity-90">Active Innovations</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-teal-400 mb-2">99.9%</div>
              <div className="text-lg opacity-90">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">∞</div>
              <div className="text-lg opacity-90">Possibilities</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-lg opacity-90">Innovation Support</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Innovation Revolution</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Be part of the most advanced innovation ecosystem in the world. Access cutting-edge technologies and shape the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Join Innovation Hub
            </button>
            <button className="border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400/10 transition-colors font-semibold text-lg">
              View All Innovations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2029;
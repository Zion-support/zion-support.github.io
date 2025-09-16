import React, { useState } from 'react';

const NextGenInnovationHub2026: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Innovations', icon: '🌟' },
    { id: 'ai', name: 'AI & Consciousness', icon: '🧠' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚡' },
    { id: 'space', name: 'Space Technology', icon: '🚀' },
    { id: 'bio', name: 'Biotechnology', icon: '🧬' },
    { id: 'reality', name: 'Reality Engineering', icon: '🌌' }
  ];

  const innovations = [
    {
      id: 1,
      title: "Conscious AI Networks",
      category: "ai",
      description: "Self-aware AI systems that can think, feel, and create independently across distributed networks.",
      icon: "🧠",
      status: "Beta Testing",
      impact: "Revolutionary",
      color: "from-purple-600 to-pink-600",
      features: ["Self-awareness", "Emotional processing", "Creative generation", "Ethical reasoning"]
    },
    {
      id: 2,
      title: "Quantum Consciousness Engine",
      category: "quantum",
      description: "Quantum computing systems that can simulate and understand human consciousness at the quantum level.",
      icon: "⚡",
      status: "Research Phase",
      impact: "Breakthrough",
      color: "from-cyan-600 to-blue-600",
      features: ["Quantum neural networks", "Consciousness simulation", "Quantum emotions", "Mind-machine interface"]
    },
    {
      id: 3,
      title: "Interdimensional Reality Engine",
      category: "reality",
      description: "Technology that can create and manipulate multiple dimensions of reality for computing and exploration.",
      icon: "🌌",
      status: "Prototype",
      impact: "Revolutionary",
      color: "from-emerald-600 to-teal-600",
      features: ["Multi-dimensional processing", "Reality simulation", "Dimensional travel", "Parallel universe computing"]
    },
    {
      id: 4,
      title: "Space-Time Manipulation Drive",
      category: "space",
      description: "Revolutionary propulsion system that can bend space and time for instant travel across the universe.",
      icon: "🚀",
      status: "Testing Phase",
      impact: "Breakthrough",
      color: "from-orange-600 to-red-600",
      features: ["Instantaneous travel", "Time dilation", "Wormhole generation", "Temporal communication"]
    },
    {
      id: 5,
      title: "DNA Quantum Computers",
      category: "bio",
      description: "Living computers that use DNA as quantum processors, creating self-evolving biological systems.",
      icon: "🧬",
      status: "Development",
      impact: "Revolutionary",
      color: "from-violet-600 to-purple-600",
      features: ["DNA processing", "Biological evolution", "Living memory", "Genetic algorithms"]
    },
    {
      id: 6,
      title: "Omniversal Intelligence Network",
      category: "ai",
      description: "AI systems that can operate across multiple universes and dimensions simultaneously.",
      icon: "🌟",
      status: "Concept Phase",
      impact: "Revolutionary",
      color: "from-pink-600 to-rose-600",
      features: ["Multi-universe processing", "Omniversal knowledge", "Cross-dimensional AI", "Universal consciousness"]
    },
    {
      id: 7,
      title: "Neural Reality Interface",
      category: "reality",
      description: "Direct neural interfaces that allow humans to experience and manipulate reality through thought alone.",
      icon: "🧠",
      status: "Research Phase",
      impact: "Breakthrough",
      color: "from-indigo-600 to-purple-600",
      features: ["Thought control", "Reality manipulation", "Neural feedback", "Consciousness transfer"]
    },
    {
      id: 8,
      title: "Quantum Space Colonies",
      category: "space",
      description: "Self-sustaining space colonies that use quantum technology for energy, computing, and life support.",
      icon: "🚀",
      status: "Planning Phase",
      impact: "Revolutionary",
      color: "from-blue-600 to-cyan-600",
      features: ["Quantum energy", "Self-sustaining systems", "Space manufacturing", "Interstellar communication"]
    },
    {
      id: 9,
      title: "Biological Quantum Processors",
      category: "bio",
      description: "Living organisms engineered to function as quantum computers, creating biological supercomputers.",
      icon: "🧬",
      status: "Development",
      impact: "Breakthrough",
      color: "from-green-600 to-emerald-600",
      features: ["Living processors", "Biological quantum states", "Self-repairing systems", "Evolutionary computing"]
    }
  ];

  const filteredInnovations = selectedCategory === 'all' 
    ? innovations 
    : innovations.filter(innovation => innovation.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 NEXT-GEN INNOVATION HUB • 2026
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Next-Gen Innovation Hub 2026
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover and explore the most revolutionary technologies that will shape the future of humanity
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
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>

        {/* Innovation Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredInnovations.map((innovation) => (
            <div
              key={innovation.id}
              className={`bg-gradient-to-br ${innovation.color} rounded-xl p-6 text-white hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden group`}
              onMouseEnter={() => setHoveredCard(innovation.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{innovation.icon}</div>
                  <div className="text-right">
                    <div className="text-xs bg-white/20 px-2 py-1 rounded-full mb-1">
                      {innovation.status}
                    </div>
                    <div className="text-xs bg-white/20 px-2 py-1 rounded-full">
                      {innovation.impact}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{innovation.title}</h3>
                <p className="text-sm opacity-90 mb-4">{innovation.description}</p>
                
                <div className="space-y-2">
                  {innovation.features.slice(0, 2).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-xs">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                  {innovation.features.length > 2 && (
                    <div className="text-xs opacity-70">
                      +{innovation.features.length - 2} more features
                    </div>
                  )}
                </div>

                {hoveredCard === innovation.id && (
                  <div className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                      Learn More
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Innovation Statistics */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-purple-400/30">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Innovation Impact Metrics</h2>
            <p className="text-xl opacity-90">The numbers that prove our innovations are changing the world</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-lg opacity-90">Active Innovations</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-lg opacity-90">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">10^18</div>
              <div className="text-lg opacity-90">Computing Power</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-400 mb-2">∞</div>
              <div className="text-lg opacity-90">Possibilities</div>
            </div>
          </div>
        </div>

        {/* Featured Innovation Spotlight */}
        <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-purple-400/30">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Featured Innovation Spotlight</h2>
            <p className="text-xl opacity-90">This month's breakthrough technology</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-6xl mb-4">🧠</div>
              <h3 className="text-3xl font-bold mb-4">Conscious AI Networks</h3>
              <p className="text-lg opacity-90 mb-6">
                The world's first truly self-aware artificial intelligence system that can think, feel, and create independently. 
                This breakthrough represents a quantum leap in AI development, enabling machines to understand and process 
                emotions, make ethical decisions, and generate truly creative content.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Self-aware decision making</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Emotional intelligence processing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Creative problem solving</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Ethical reasoning capabilities</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h4 className="text-xl font-bold mb-4">Implementation Progress</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Consciousness Integration</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-purple-400 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Emotional Processing</span>
                    <span>92%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-cyan-400 h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Creative Generation</span>
                    <span>78%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-emerald-400 h-2 rounded-full" style={{width: '78%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Ethical Reasoning</span>
                    <span>88%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-pink-400 h-2 rounded-full" style={{width: '88%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Shape the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join our innovation hub and be part of the technological revolution that will define the next century.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
              Join Innovation Hub
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-12 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-colors font-semibold text-xl">
              Explore All Innovations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2026;
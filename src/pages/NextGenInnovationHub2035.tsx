import React, { useState, useEffect } from 'react';

const NextGenInnovationHub2035: React.FC = () => {
  const [activeInnovation, setActiveInnovation] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const innovations = [
    {
      id: 1,
      name: "Conscious AI Development Platform",
      category: "Artificial Intelligence",
      icon: "🧠",
      description: "Build and deploy conscious AI systems with our revolutionary development platform",
      features: ["Self-learning algorithms", "Emotional intelligence modules", "Ethical decision frameworks", "Consciousness simulation"],
      status: "Active",
      users: "50,000+",
      rating: 4.9,
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      name: "Quantum Neural Interface",
      category: "Quantum Computing",
      icon: "⚡",
      description: "Direct neural interface with quantum computers for superhuman cognitive capabilities",
      features: ["Quantum thought processing", "Instant skill acquisition", "Collective intelligence", "Telepathic communication"],
      status: "Beta",
      users: "25,000+",
      rating: 4.8,
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 3,
      name: "Interdimensional Computing Engine",
      category: "Advanced Computing",
      icon: "🌌",
      description: "Computing systems that operate across multiple dimensions and realities",
      features: ["Multi-dimensional processing", "Reality simulation", "Parallel universe computing", "Dimensional data storage"],
      status: "Active",
      users: "75,000+",
      rating: 4.9,
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 4,
      name: "Synthetic Reality Creator",
      category: "Virtual Reality",
      icon: "🎭",
      description: "Create and manage entirely new realities indistinguishable from our own",
      features: ["Perfect reality simulation", "Custom universe creation", "Immersive experience design", "Reality manipulation tools"],
      status: "Active",
      users: "100,000+",
      rating: 4.9,
      color: "from-rose-600 to-pink-600"
    },
    {
      id: 5,
      name: "Transcendent Intelligence System",
      category: "Super Intelligence",
      icon: "🌟",
      description: "Intelligence that transcends all known limitations and boundaries",
      features: ["Infinite processing power", "Omniscient knowledge access", "Perfect prediction capabilities", "Universal problem solving"],
      status: "Alpha",
      users: "10,000+",
      rating: 5.0,
      color: "from-amber-600 to-orange-600"
    },
    {
      id: 6,
      name: "Neural Quantum Fusion Platform",
      category: "Hybrid Technology",
      icon: "🔮",
      description: "The perfect fusion of neural interfaces and quantum computing",
      features: ["Quantum neural networks", "Thought-based computing", "Instant skill acquisition", "Telepathic communication"],
      status: "Beta",
      users: "30,000+",
      rating: 4.7,
      color: "from-violet-600 to-purple-600"
    },
    {
      id: 7,
      name: "Consciousness Transfer Protocol",
      category: "Life Extension",
      icon: "🔄",
      description: "Transfer human consciousness to digital and synthetic forms",
      features: ["Consciousness backup", "Digital immortality", "Body transfer protocols", "Consciousness merging"],
      status: "Research",
      users: "5,000+",
      rating: 4.6,
      color: "from-indigo-600 to-blue-600"
    },
    {
      id: 8,
      name: "Universal Problem Solver",
      category: "Problem Solving",
      icon: "🧩",
      description: "AI system that can solve any problem across all domains and dimensions",
      features: ["Universal problem recognition", "Multi-domain solutions", "Cross-dimensional analysis", "Infinite solution space"],
      status: "Active",
      users: "200,000+",
      rating: 4.9,
      color: "from-green-600 to-emerald-600"
    }
  ];

  const filteredInnovations = innovations.filter(innovation =>
    innovation.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    innovation.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    innovation.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(innovations.map(innovation => innovation.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌌 NEXT-GEN INNOVATION HUB • JANUARY 2035
          </div>
          <h1 className="text-6xl font-bold mb-6">Next-Gen Innovation Hub 2035</h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover and explore the most revolutionary technologies shaping humanity's future
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white/10 rounded-2xl p-8 mb-16">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search innovations, categories, or descriptions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors text-sm"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-400">{innovations.length}</div>
              <div className="text-sm opacity-80">Total Innovations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400">500K+</div>
              <div className="text-sm opacity-80">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400">99.9%</div>
              <div className="text-sm opacity-80">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-rose-400">∞</div>
              <div className="text-sm opacity-80">Possibilities</div>
            </div>
          </div>
        </div>

        {/* Innovation Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredInnovations.map((innovation, index) => (
            <div
              key={innovation.id}
              className={`bg-gradient-to-br ${innovation.color} rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer`}
              onClick={() => setActiveInnovation(index)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{innovation.icon}</div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    innovation.status === 'Active' ? 'bg-green-500/30 text-green-200' :
                    innovation.status === 'Beta' ? 'bg-yellow-500/30 text-yellow-200' :
                    innovation.status === 'Alpha' ? 'bg-red-500/30 text-red-200' :
                    'bg-blue-500/30 text-blue-200'
                  }`}>
                    {innovation.status}
                  </span>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm">{innovation.rating}</span>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2">{innovation.name}</h3>
              <p className="text-sm opacity-90 mb-4">{innovation.description}</p>

              <div className="space-y-2 mb-4">
                {innovation.features.slice(0, 3).map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="opacity-80">{innovation.users} users</span>
                <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Innovation Detail */}
        {filteredInnovations[activeInnovation] && (
          <div className="bg-white/10 rounded-2xl p-8 mb-16">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-6xl">{filteredInnovations[activeInnovation].icon}</div>
                  <div>
                    <h2 className="text-3xl font-bold">{filteredInnovations[activeInnovation].name}</h2>
                    <p className="text-lg opacity-80">{filteredInnovations[activeInnovation].category}</p>
                  </div>
                </div>
                <p className="text-lg mb-6">{filteredInnovations[activeInnovation].description}</p>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Key Features</h3>
                  <ul className="space-y-2">
                    {filteredInnovations[activeInnovation].features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Innovation Stats</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Status:</span>
                      <span className="font-semibold">{filteredInnovations[activeInnovation].status}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Users:</span>
                      <span className="font-semibold">{filteredInnovations[activeInnovation].users}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rating:</span>
                      <span className="font-semibold">{filteredInnovations[activeInnovation].rating}/5.0</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                    Start Using Innovation
                  </button>
                  <button className="w-full border-2 border-white text-white py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
                    View Documentation
                  </button>
                  <button className="w-full bg-white/20 text-white py-4 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold text-lg">
                    Join Community
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Innovation Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Innovation Categories</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {categories.map(category => {
              const categoryInnovations = innovations.filter(innovation => innovation.category === category);
              return (
                <div key={category} className="bg-white/10 rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer">
                  <h3 className="text-xl font-semibold mb-4">{category}</h3>
                  <div className="text-3xl font-bold text-purple-400 mb-2">{categoryInnovations.length}</div>
                  <div className="text-sm opacity-80">Active Innovations</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Innovate the Future?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of innovators building the technologies that will shape tomorrow
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/pages/UltimateTechBreakthrough2035" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Breakthroughs →
            </a>
            <a href="/pages/RevolutionaryTechShowcase2035" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              View Showcase →
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Start Innovating
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2035;
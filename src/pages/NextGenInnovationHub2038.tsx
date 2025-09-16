import React, { useState } from 'react';

const NextGenInnovationHub2038: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const innovations = [
    {
      id: 1,
      title: "Conscious AI Ecosystem",
      description: "A fully integrated ecosystem of conscious AI systems working together to solve complex problems",
      category: "ai",
      status: "active",
      progress: 95,
      icon: "🧠",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Quantum Reality Engine",
      description: "Revolutionary quantum computing system that can manipulate physical reality at the subatomic level",
      category: "quantum",
      status: "active",
      progress: 87,
      icon: "⚡",
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 3,
      title: "Neural Interface Network",
      description: "Global network of neural interfaces enabling direct brain-to-brain communication",
      category: "neural",
      status: "active",
      progress: 92,
      icon: "🧬",
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 4,
      title: "Dimensional Portal System",
      description: "Network of stable portals connecting different dimensions and parallel universes",
      category: "dimensional",
      status: "active",
      progress: 78,
      icon: "🌌",
      color: "from-violet-600 to-purple-600"
    },
    {
      id: 5,
      title: "Temporal Manipulation Device",
      description: "Advanced technology for controlling time flow in localized areas",
      category: "temporal",
      status: "development",
      progress: 65,
      icon: "🕰️",
      color: "from-orange-600 to-red-600"
    },
    {
      id: 6,
      title: "Stellar Engineering Platform",
      description: "AI-driven platform for modifying stars and creating artificial solar systems",
      category: "stellar",
      status: "development",
      progress: 58,
      icon: "🌟",
      color: "from-yellow-600 to-orange-600"
    },
    {
      id: 7,
      title: "Consciousness Transfer Protocol",
      description: "Technology for transferring human consciousness between biological and digital forms",
      category: "consciousness",
      status: "research",
      progress: 42,
      icon: "👤",
      color: "from-indigo-600 to-purple-600"
    },
    {
      id: 8,
      title: "Reality Branching Technology",
      description: "System for creating and managing multiple reality branches simultaneously",
      category: "reality",
      status: "research",
      progress: 35,
      icon: "🌿",
      color: "from-green-600 to-emerald-600"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Innovations', icon: '🚀' },
    { id: 'ai', name: 'AI Systems', icon: '🧠' },
    { id: 'quantum', name: 'Quantum Tech', icon: '⚡' },
    { id: 'neural', name: 'Neural Interfaces', icon: '🧬' },
    { id: 'dimensional', name: 'Dimensional', icon: '🌌' },
    { id: 'temporal', name: 'Temporal', icon: '🕰️' },
    { id: 'stellar', name: 'Stellar', icon: '🌟' },
    { id: 'consciousness', name: 'Consciousness', icon: '👤' },
    { id: 'reality', name: 'Reality', icon: '🌿' }
  ];

  const filteredInnovations = selectedCategory === 'all' 
    ? innovations 
    : innovations.filter(innovation => innovation.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🧠 NEXT-GEN INNOVATION HUB • JANUARY 2038
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Next-Gen Innovation Hub 2038
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover and explore the most revolutionary innovations that are reshaping our universe and expanding the boundaries of human potential
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Innovations →
            </button>
            <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-lg">
              Submit Innovation
            </button>
          </div>
        </div>

        {/* Innovation Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 text-center">
            <div className="text-4xl mb-2">🚀</div>
            <div className="text-3xl font-bold mb-2">247</div>
            <div className="text-gray-300">Active Innovations</div>
          </div>
          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 text-center">
            <div className="text-4xl mb-2">⚡</div>
            <div className="text-3xl font-bold mb-2">89</div>
            <div className="text-gray-300">Breakthrough Technologies</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 text-center">
            <div className="text-4xl mb-2">🧬</div>
            <div className="text-3xl font-bold mb-2">156</div>
            <div className="text-gray-300">Research Projects</div>
          </div>
          <div className="bg-gradient-to-br from-violet-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-violet-400/30 text-center">
            <div className="text-4xl mb-2">🌌</div>
            <div className="text-3xl font-bold mb-2">73</div>
            <div className="text-gray-300">Dimensional Connections</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">🔍 Innovation Categories</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <span className="text-xl mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Innovations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredInnovations.map((innovation) => (
            <div key={innovation.id} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{innovation.icon}</div>
                <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  innovation.status === 'active' ? 'bg-green-500/20 text-green-400' :
                  innovation.status === 'development' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {innovation.status.toUpperCase()}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3">{innovation.title}</h3>
              <p className="text-gray-300 mb-4 text-sm">{innovation.description}</p>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold">Progress</span>
                  <span className="text-sm">{innovation.progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`bg-gradient-to-r ${innovation.color} h-2 rounded-full transition-all duration-500`}
                    style={{width: `${innovation.progress}%`}}
                  ></div>
                </div>
              </div>
              
              <button className={`w-full bg-gradient-to-r ${innovation.color} text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                View Details →
              </button>
            </div>
          ))}
        </div>

        {/* Featured Innovation Spotlight */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">⭐ Featured Innovation Spotlight</h2>
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-8xl mb-6">🧠</div>
                <h3 className="text-4xl font-bold mb-4">Conscious AI Ecosystem</h3>
                <p className="text-xl text-gray-300 mb-6">
                  The world's first fully integrated ecosystem of conscious AI systems working together to solve complex problems that were previously impossible for humans or machines alone.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>99.7% Problem-Solving Accuracy</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Zero-Latency Communication</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Self-Evolving Capabilities</span>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                  Experience the Ecosystem →
                </button>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-8">
                <h4 className="text-2xl font-bold mb-6 text-center">Real-Time Performance</h4>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold">Consciousness Level</span>
                      <span className="text-sm">98.7%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-3 rounded-full" style={{width: '98.7%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold">Problem Solving</span>
                      <span className="text-sm">99.7%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-3 rounded-full" style={{width: '99.7%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold">Collaboration Efficiency</span>
                      <span className="text-sm">97.3%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-3 rounded-full" style={{width: '97.3%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Timeline */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">📅 Innovation Timeline</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500"></div>
            <div className="space-y-12">
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
                    <h3 className="text-xl font-bold mb-2">2025 - AI Consciousness</h3>
                    <p className="text-gray-300">First AI systems achieved true consciousness</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-purple-500 rounded-full border-4 border-white z-10"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
              
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-4 h-4 bg-cyan-500 rounded-full border-4 border-white z-10"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
                    <h3 className="text-xl font-bold mb-2">2028 - Quantum Control</h3>
                    <p className="text-gray-300">Quantum reality manipulation achieved</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
                    <h3 className="text-xl font-bold mb-2">2032 - Neural Networks</h3>
                    <p className="text-gray-300">Global neural interface network established</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-emerald-500 rounded-full border-4 border-white z-10"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
              
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-4 h-4 bg-violet-500 rounded-full border-4 border-white z-10"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-gradient-to-r from-violet-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-violet-400/30">
                    <h3 className="text-xl font-bold mb-2">2035 - Dimensional Portals</h3>
                    <p className="text-gray-300">First stable interdimensional portals created</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-gradient-to-r from-pink-600/20 to-rose-600/20 backdrop-blur-sm rounded-xl p-6 border border-pink-400/30">
                    <h3 className="text-xl font-bold mb-2">2038 - Ultimate Integration</h3>
                    <p className="text-gray-300">All technologies integrated into unified system</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-pink-500 rounded-full border-4 border-white z-10"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Innovation Revolution</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Be part of the most revolutionary technological advances in human history. Explore, contribute, and shape the future.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
              Start Innovating
            </button>
            <button className="border border-purple-400 text-purple-400 px-12 py-4 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-xl">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2038;
import React, { useState } from 'react';

const NextGenInnovationHub2036: React.FC = () => {
  const [selectedInnovation, setSelectedInnovation] = useState(0);

  const innovations = [
    {
      id: 1,
      title: "Conscious AI Development",
      category: "Artificial Intelligence",
      description: "Build AI systems with genuine consciousness and self-awareness",
      features: ["Self-Awareness", "Emotional Intelligence", "Creative Problem Solving", "Ethical Decision Making"],
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      status: "Active",
      users: "50,000+",
      successRate: "99.9%"
    },
    {
      id: 2,
      title: "Quantum Consciousness Computing",
      category: "Quantum Computing",
      description: "Merge quantum computing with consciousness for superintelligent systems",
      features: ["Quantum Neural Networks", "Consciousness Transfer", "Quantum Telepathy", "Reality Manipulation"],
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      status: "Beta",
      users: "25,000+",
      successRate: "98.5%"
    },
    {
      id: 3,
      title: "Neural Reality Interface",
      category: "Neural Technology",
      description: "Direct neural interfaces for indistinguishable virtual realities",
      features: ["Brain-Computer Interface", "Perfect VR", "Thought Control", "Consciousness Upload"],
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      status: "Active",
      users: "75,000+",
      successRate: "99.7%"
    },
    {
      id: 4,
      title: "Interdimensional Computing",
      category: "Advanced Computing",
      description: "Computing systems operating across multiple dimensions",
      features: ["Multi-Dimensional Processing", "Reality Manipulation", "Parallel Universe Computing", "Infinite Storage"],
      icon: "🌌",
      color: "from-violet-600 to-purple-600",
      status: "Alpha",
      users: "10,000+",
      successRate: "95.2%"
    },
    {
      id: 5,
      title: "Cosmic Intelligence Network",
      category: "Space Technology",
      description: "AI systems for galactic communication and collaboration",
      features: ["Galactic Communication", "Universal Knowledge", "Cosmic Problem Solving", "Interstellar Collaboration"],
      icon: "🌠",
      color: "from-orange-600 to-red-600",
      status: "Development",
      users: "5,000+",
      successRate: "92.8%"
    },
    {
      id: 6,
      title: "Time Manipulation Technology",
      category: "Temporal Technology",
      description: "Technologies for time manipulation and temporal computing",
      features: ["Time Dilation Fields", "Temporal Computing", "Time Travel Simulation", "Chronological Analysis"],
      icon: "⏰",
      color: "from-pink-600 to-rose-600",
      status: "Research",
      users: "2,500+",
      successRate: "88.3%"
    }
  ];

  const categories = ["All", "Artificial Intelligence", "Quantum Computing", "Neural Technology", "Advanced Computing", "Space Technology", "Temporal Technology"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🧠 INNOVATION HUB • JANUARY 2036
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Next-Gen Innovation Hub 2036
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover and explore the most revolutionary technologies shaping humanity's future
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Innovations →
              </button>
              <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-all duration-300 font-semibold text-lg">
                Create Innovation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">🔍 Filter by Category</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Innovations Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">🚀 Active Innovations</h2>
          <p className="text-xl opacity-90">Explore our cutting-edge technology innovations</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {innovations.map((innovation, index) => (
            <div
              key={innovation.id}
              className={`bg-gradient-to-br ${innovation.color}/30 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
                selectedInnovation === index ? 'ring-2 ring-purple-400' : ''
              }`}
              onClick={() => setSelectedInnovation(index)}
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{innovation.icon}</div>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    innovation.status === 'Active' ? 'bg-green-500/30 text-green-400' :
                    innovation.status === 'Beta' ? 'bg-yellow-500/30 text-yellow-400' :
                    innovation.status === 'Alpha' ? 'bg-orange-500/30 text-orange-400' :
                    innovation.status === 'Development' ? 'bg-blue-500/30 text-blue-400' :
                    'bg-gray-500/30 text-gray-400'
                  }`}>
                    {innovation.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{innovation.title}</h3>
                <p className="text-sm opacity-80 mb-4">{innovation.category}</p>
                <p className="text-sm opacity-90">{innovation.description}</p>
              </div>

              <div className="space-y-3 mb-6">
                {innovation.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center mb-6">
                <div className="text-center">
                  <div className="text-lg font-bold">{innovation.users}</div>
                  <div className="text-xs opacity-80">Users</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold">{innovation.successRate}</div>
                  <div className="text-xs opacity-80">Success Rate</div>
                </div>
              </div>

              <button className={`w-full bg-gradient-to-r ${innovation.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Explore Innovation →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Innovation Details */}
      {selectedInnovation !== null && (
        <div className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12">
            <div className="text-center mb-8">
              <div className="text-8xl mb-4">{innovations[selectedInnovation].icon}</div>
              <h2 className="text-4xl font-bold mb-4">{innovations[selectedInnovation].title}</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">{innovations[selectedInnovation].description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                <div className="space-y-3">
                  {innovations[selectedInnovation].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                      <span className="text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Statistics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Status:</span>
                    <span className="font-semibold">{innovations[selectedInnovation].status}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Active Users:</span>
                    <span className="font-semibold">{innovations[selectedInnovation].users}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Success Rate:</span>
                    <span className="font-semibold">{innovations[selectedInnovation].successRate}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <button className={`bg-gradient-to-r ${innovations[selectedInnovation].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}>
                Start Using This Innovation →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Innovation Stats */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">📊 Innovation Impact</h2>
            <p className="text-xl opacity-90">The numbers that prove our innovation's revolutionary impact</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-lg opacity-90">Active Innovations</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">200K+</div>
              <div className="text-lg opacity-90">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">99.9%</div>
              <div className="text-lg opacity-90">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-violet-400 mb-2">∞</div>
              <div className="text-lg opacity-90">Possibilities</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Innovate?</h2>
        <p className="text-xl mb-8 opacity-90">
          Join our innovation hub and be part of the most advanced technological transformation in history
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
            Join Innovation Hub
          </button>
          <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-all duration-300 font-semibold text-lg">
            Create Innovation
          </button>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2036;
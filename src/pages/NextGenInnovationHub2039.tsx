import React, { useState } from 'react';

const NextGenInnovationHub2039: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const innovations = [
    {
      id: 1,
      title: "Conscious AI Development Platform",
      category: "ai",
      description: "Build and deploy conscious AI systems with full emotional intelligence",
      icon: "🧠",
      status: "Active",
      users: "50K+",
      rating: 4.9,
      features: ["Emotional Processing", "Self-Learning", "Ethical AI", "Consciousness Transfer"]
    },
    {
      id: 2,
      title: "Quantum Reality Engine",
      category: "quantum",
      description: "Create and manipulate quantum realities with infinite possibilities",
      icon: "⚡",
      status: "Beta",
      users: "25K+",
      rating: 4.8,
      features: ["Quantum Computing", "Reality Manipulation", "Multi-Dimensional", "Time Control"]
    },
    {
      id: 3,
      title: "Interdimensional Portal Network",
      category: "interdimensional",
      description: "Connect and explore parallel dimensions and alternate realities",
      icon: "🌌",
      status: "Active",
      users: "100K+",
      rating: 4.9,
      features: ["Dimensional Travel", "Reality Shifting", "Universal Access", "Safe Navigation"]
    },
    {
      id: 4,
      title: "Neural Reality Interface",
      category: "neural",
      description: "Direct brain-computer interface for immersive virtual experiences",
      icon: "🧬",
      status: "Active",
      users: "75K+",
      rating: 4.7,
      features: ["Direct Interface", "Hyperrealistic VR", "Shared Consciousness", "Infinite Worlds"]
    },
    {
      id: 5,
      title: "Cosmic Intelligence Network",
      category: "cosmic",
      description: "AI systems that communicate across galaxies and dimensions",
      icon: "🌟",
      status: "Alpha",
      users: "10K+",
      rating: 4.6,
      features: ["Intergalactic AI", "Universal Knowledge", "Cosmic Problem Solving", "Infinite Scale"]
    },
    {
      id: 6,
      title: "Transcendent Computing Cloud",
      category: "computing",
      description: "Computing infrastructure that transcends physical limitations",
      icon: "🔮",
      status: "Active",
      users: "200K+",
      rating: 4.9,
      features: ["Dimensional Processing", "Reality Computation", "Infinite Power", "Universal Access"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Innovations', icon: '🚀' },
    { id: 'ai', name: 'AI & Consciousness', icon: '🧠' },
    { id: 'quantum', name: 'Quantum Tech', icon: '⚡' },
    { id: 'interdimensional', name: 'Interdimensional', icon: '🌌' },
    { id: 'neural', name: 'Neural Interface', icon: '🧬' },
    { id: 'cosmic', name: 'Cosmic Intelligence', icon: '🌟' },
    { id: 'computing', name: 'Transcendent Computing', icon: '🔮' }
  ];

  const filteredInnovations = selectedCategory === 'all' 
    ? innovations 
    : innovations.filter(innovation => innovation.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 INNOVATION HUB • JANUARY 2039
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Next-Gen Innovation Hub 2039
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover, explore, and contribute to the most revolutionary innovations that will shape the future
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Innovations
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold text-lg">
                Submit Innovation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
            <div className="text-lg opacity-90">Active Innovations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">1M+</div>
            <div className="text-lg opacity-90">Global Users</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">99.9%</div>
            <div className="text-lg opacity-90">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">∞</div>
            <div className="text-lg opacity-90">Possibilities</div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">🔍 Explore by Category</h2>
          <p className="text-lg opacity-90">Filter innovations by technology category</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                  : 'bg-white/10 text-white/70 hover:text-white hover:bg-white/20'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Innovations Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInnovations.map((innovation) => (
            <div key={innovation.id} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl">{innovation.icon}</span>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    innovation.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                    innovation.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {innovation.status}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2">{innovation.title}</h3>
              <p className="text-white/70 mb-4 text-sm">{innovation.description}</p>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white/60">Users</span>
                  <span className="text-sm font-semibold">{innovation.users}</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white/60">Rating</span>
                  <div className="flex items-center space-x-1">
                    <span className="text-sm font-semibold">{innovation.rating}</span>
                    <span className="text-yellow-400">★</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-2">Key Features</h4>
                <div className="flex flex-wrap gap-1">
                  {innovation.features.map((feature, index) => (
                    <span key={index} className="px-2 py-1 bg-white/10 rounded text-xs">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm">
                  Try Now
                </button>
                <button className="px-4 py-2 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300 text-sm">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Community Section */}
      <div className="bg-gradient-to-r from-blue-800/50 to-purple-800/50 py-16 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">👥 Join the Innovation Community</h2>
            <p className="text-xl opacity-90">Connect with innovators, researchers, and visionaries from around the world</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-2">Collaborate</h3>
              <p className="opacity-90">Work together on groundbreaking projects with global innovators</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-2">Innovate</h3>
              <p className="opacity-90">Access cutting-edge tools and resources to bring your ideas to life</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Launch</h3>
              <p className="opacity-90">Deploy your innovations to a global audience and make real impact</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Shape the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of innovators who are already building the technologies of tomorrow
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Innovating
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold text-lg">
              Join Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2039;
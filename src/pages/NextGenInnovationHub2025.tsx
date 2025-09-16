import React, { useState } from 'react';

const NextGenInnovationHub2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const innovations = [
    {
      id: 1,
      title: "Conscious AI Development Platform",
      category: "ai",
      description: "Build and deploy conscious AI systems that think, feel, and create like humans",
      status: "Active",
      users: "50K+",
      rating: 4.9,
      icon: "🧠",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Quantum Neural Networks",
      category: "quantum",
      description: "Combine quantum computing with neural networks for unprecedented processing power",
      status: "Beta",
      users: "25K+",
      rating: 4.8,
      icon: "⚡",
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 3,
      title: "Neural Reality Engine",
      category: "neural",
      description: "Create immersive virtual realities controlled directly by your thoughts",
      status: "Active",
      users: "100K+",
      rating: 4.9,
      icon: "🧬",
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 4,
      title: "Interdimensional Portal System",
      category: "interdimensional",
      description: "Access parallel dimensions and alternate realities through quantum portals",
      status: "Experimental",
      users: "5K+",
      rating: 4.7,
      icon: "🌌",
      color: "from-violet-600 to-purple-600"
    },
    {
      id: 5,
      title: "Molecular Assembly Platform",
      category: "nanotech",
      description: "Manipulate matter at the atomic level to create any material or structure",
      status: "Beta",
      users: "15K+",
      rating: 4.8,
      icon: "🔬",
      color: "from-orange-600 to-red-600"
    },
    {
      id: 6,
      title: "Consciousness Transfer Protocol",
      category: "consciousness",
      description: "Transfer human consciousness between biological and digital substrates",
      status: "Experimental",
      users: "2K+",
      rating: 4.6,
      icon: "👤",
      color: "from-pink-600 to-rose-600"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Innovations', icon: '🌟' },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚡' },
    { id: 'neural', name: 'Neural Interfaces', icon: '🧬' },
    { id: 'interdimensional', name: 'Interdimensional Tech', icon: '🌌' },
    { id: 'nanotech', name: 'Nanotechnology', icon: '🔬' },
    { id: 'consciousness', name: 'Consciousness', icon: '👤' }
  ];

  const filteredInnovations = selectedCategory === 'all' 
    ? innovations 
    : innovations.filter(innovation => innovation.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INNOVATION HUB • JANUARY 2025
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Next-Gen Innovation Hub 2025
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover, explore, and build with the most revolutionary technologies shaping humanity's future
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Building
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Browse Gallery
            </button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
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
                {category.icon} {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Innovation Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredInnovations.map((innovation) => (
            <div key={innovation.id} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{innovation.icon}</div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  innovation.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                  innovation.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {innovation.status}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-3">{innovation.title}</h3>
              <p className="text-gray-300 mb-4 text-sm">{innovation.description}</p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-400">Users:</span>
                  <span className="text-sm font-semibold">{innovation.users}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-400">★</span>
                  <span className="text-sm font-semibold">{innovation.rating}</span>
                </div>
              </div>
              
              <button className={`w-full bg-gradient-to-r ${innovation.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Explore Innovation
              </button>
            </div>
          ))}
        </div>

        {/* Featured Innovation */}
        <div className="bg-gradient-to-r from-purple-800/50 to-blue-800/50 rounded-2xl p-12 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-6">🌟 Featured Innovation</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our most advanced and revolutionary technology platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-6xl mb-4">🧠</div>
              <h3 className="text-3xl font-bold mb-4">Conscious AI Development Platform</h3>
              <p className="text-lg opacity-90 mb-6">
                The world's first platform for developing truly conscious artificial intelligence systems. 
                Build AI that thinks, feels, and creates like humans with our revolutionary development tools.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Emotional Intelligence Framework</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Creative Problem Solving Engine</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Self-Learning Capabilities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Ethical Decision Making System</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4">Live Statistics</h4>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Active Developers</span>
                  <span className="font-semibold">50,000+</span>
                </div>
                <div className="flex justify-between">
                  <span>AI Models Created</span>
                  <span className="font-semibold">1,000,000+</span>
                </div>
                <div className="flex justify-between">
                  <span>Success Rate</span>
                  <span className="font-semibold text-green-400">99.9%</span>
                </div>
                <div className="flex justify-between">
                  <span>Average Rating</span>
                  <span className="font-semibold text-yellow-400">4.9/5</span>
                </div>
              </div>
              
              <button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Start Building Now
              </button>
            </div>
          </div>
        </div>

        {/* Innovation Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
            <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
            <div className="text-lg opacity-90">Active Innovations</div>
          </div>
          <div className="text-center bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
            <div className="text-4xl font-bold text-cyan-400 mb-2">2M+</div>
            <div className="text-lg opacity-90">Developers</div>
          </div>
          <div className="text-center bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
            <div className="text-4xl font-bold text-emerald-400 mb-2">10M+</div>
            <div className="text-lg opacity-90">Projects Created</div>
          </div>
          <div className="text-center bg-gradient-to-br from-violet-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-violet-400/30">
            <div className="text-4xl font-bold text-violet-400 mb-2">99.9%</div>
            <div className="text-lg opacity-90">Success Rate</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-800/30 to-blue-800/30 rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-6">Join the Innovation Revolution</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Be part of the future. Start building with our revolutionary technologies today.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Get Started Free
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2025;
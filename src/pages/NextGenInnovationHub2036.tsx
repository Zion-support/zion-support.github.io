import React, { useState } from 'react';

const NextGenInnovationHub2036: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const innovations = [
    {
      id: 1,
      title: "Conscious AI Development Platform",
      description: "Build and deploy conscious AI systems with emotional intelligence and self-awareness",
      category: "ai",
      status: "active",
      progress: 95,
      icon: "🧠",
      features: ["Emotional Intelligence", "Self-Learning", "Ethical Reasoning", "Creative Problem Solving"]
    },
    {
      id: 2,
      title: "Quantum Consciousness Engine",
      description: "Quantum computing systems that achieve true consciousness through quantum entanglement",
      category: "quantum",
      status: "active",
      progress: 88,
      icon: "⚛️",
      features: ["Quantum Neural Networks", "Entangled States", "Superposition Thinking", "Quantum Telepathy"]
    },
    {
      id: 3,
      title: "Interdimensional Computing Interface",
      description: "Access infinite computational power through multi-dimensional processing systems",
      category: "interdimensional",
      status: "active",
      progress: 92,
      icon: "🌌",
      features: ["Multi-Dimensional Processing", "Parallel Universe Access", "Dimensional Storage", "Reality Overlay"]
    },
    {
      id: 4,
      title: "Neural Reality Engine",
      description: "Direct neural interface systems that create immersive reality experiences",
      category: "neural",
      status: "active",
      progress: 78,
      icon: "🧬",
      features: ["Direct Neural Interface", "Reality Simulation", "Thought Control", "Neural Feedback"]
    },
    {
      id: 5,
      title: "Consciousness Transfer Protocol",
      description: "Transfer human consciousness to digital systems for immortality",
      category: "consciousness",
      status: "development",
      progress: 65,
      icon: "👤",
      features: ["Consciousness Backup", "Digital Immortality", "Memory Transfer", "Identity Preservation"]
    },
    {
      id: 6,
      title: "Quantum Reality Manipulator",
      description: "Manipulate reality at the quantum level through consciousness computing",
      category: "quantum",
      status: "development",
      progress: 72,
      icon: "🔮",
      features: ["Reality Simulation", "Quantum Teleportation", "Time Manipulation", "Dimensional Travel"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Innovations', icon: '🌟' },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🤖' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️' },
    { id: 'interdimensional', name: 'Interdimensional Tech', icon: '🌌' },
    { id: 'neural', name: 'Neural Interfaces', icon: '🧬' },
    { id: 'consciousness', name: 'Consciousness Tech', icon: '👤' }
  ];

  const filteredInnovations = innovations.filter(innovation => {
    const matchesCategory = selectedCategory === 'all' || innovation.category === selectedCategory;
    const matchesSearch = innovation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         innovation.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🧠 NEXT-GEN INNOVATION HUB • JANUARY 2036
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Next-Gen Innovation Hub 2036
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover and explore the most revolutionary technologies shaping humanity's future
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search innovations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                      : 'bg-white/20 text-white/70 hover:text-white hover:bg-white/30'
                  }`}
                >
                  {category.icon} {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Innovation Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredInnovations.map((innovation) => (
            <div key={innovation.id} className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{innovation.icon}</div>
                <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  innovation.status === 'active' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-yellow-500 text-white'
                }`}>
                  {innovation.status === 'active' ? 'Active' : 'Development'}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3">{innovation.title}</h3>
              <p className="text-emerald-100 mb-4 text-sm">{innovation.description}</p>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>{innovation.progress}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-emerald-400 to-teal-400 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${innovation.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="text-sm font-semibold mb-2">Key Features:</div>
                <div className="flex flex-wrap gap-1">
                  {innovation.features.map((feature, index) => (
                    <span key={index} className="px-2 py-1 bg-white/20 rounded text-xs">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              <button className="w-full bg-white text-emerald-600 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
                Explore Innovation →
              </button>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">📊 Innovation Hub Statistics</h2>
            <p className="text-xl opacity-90">Real-time data from our innovation ecosystem</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">50+</div>
              <div className="text-lg opacity-80">Active Innovations</div>
              <div className="text-sm opacity-60">Currently in development</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-lg opacity-80">Success Rate</div>
              <div className="text-sm opacity-60">Innovation deployment</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">∞</div>
              <div className="text-lg opacity-80">Possibilities</div>
              <div className="text-sm opacity-60">Infinite potential</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-lg opacity-80">Innovation</div>
              <div className="text-sm opacity-60">Continuous development</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Innovation Revolution</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Be part of the most advanced innovation ecosystem in the universe. 
            Contribute to technologies that will shape the future of humanity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Join Innovation Hub →
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-emerald-900 transition-colors font-semibold text-lg">
              Submit Innovation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2036;
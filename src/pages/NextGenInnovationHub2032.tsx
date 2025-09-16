import React, { useState } from 'react';

const NextGenInnovationHub2032: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const innovations = [
    {
      id: 1,
      title: "Conscious AI Development Platform",
      category: "ai",
      description: "Build and deploy conscious AI systems with our revolutionary development platform",
      status: "Active",
      successRate: "99.9%",
      icon: "🧠",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Quantum Consciousness Simulator",
      category: "quantum",
      description: "Simulate consciousness at the quantum level for unprecedented AI development",
      status: "Beta",
      successRate: "98.7%",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 3,
      title: "Interdimensional Computing Engine",
      category: "computing",
      description: "Process data across multiple dimensions for impossible problem solving",
      status: "Active",
      successRate: "99.5%",
      icon: "🌌",
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 4,
      title: "Molecular AI Manufacturing",
      category: "manufacturing",
      description: "Create materials and devices at the molecular level with AI precision",
      status: "Active",
      successRate: "99.2%",
      icon: "🔬",
      color: "from-orange-600 to-red-600"
    },
    {
      id: 5,
      title: "Planetary Intelligence Network",
      category: "networking",
      description: "Connect every device and system on Earth in a global AI network",
      status: "Active",
      successRate: "99.8%",
      icon: "🌍",
      color: "from-violet-600 to-purple-600"
    },
    {
      id: 6,
      title: "Space-Time Data Processing",
      category: "computing",
      description: "Manipulate space-time itself for instant data transmission and processing",
      status: "Beta",
      successRate: "97.3%",
      icon: "🚀",
      color: "from-pink-600 to-rose-600"
    },
    {
      id: 7,
      title: "Neural Reality Interface",
      category: "interface",
      description: "Direct neural interfaces for seamless human-AI communication",
      status: "Active",
      successRate: "99.1%",
      icon: "🧬",
      color: "from-green-600 to-emerald-600"
    },
    {
      id: 8,
      title: "Consciousness Transfer Protocol",
      category: "ai",
      description: "Transfer consciousness between biological and artificial systems",
      status: "Beta",
      successRate: "96.8%",
      icon: "🔄",
      color: "from-indigo-600 to-purple-600"
    },
    {
      id: 9,
      title: "Dimensional Data Storage",
      category: "storage",
      description: "Store infinite amounts of data across multiple dimensions",
      status: "Active",
      successRate: "99.7%",
      icon: "💾",
      color: "from-yellow-600 to-orange-600"
    }
  ];

  const categories = [
    { key: 'all', label: 'All Innovations', icon: '🌟' },
    { key: 'ai', label: 'AI Systems', icon: '🧠' },
    { key: 'quantum', label: 'Quantum Tech', icon: '⚡' },
    { key: 'computing', label: 'Computing', icon: '💻' },
    { key: 'manufacturing', label: 'Manufacturing', icon: '🏭' },
    { key: 'networking', label: 'Networking', icon: '🌐' },
    { key: 'interface', label: 'Interfaces', icon: '🎮' },
    { key: 'storage', label: 'Storage', icon: '💾' }
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
            🧠 INNOVATION HUB • 2032
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Next-Gen Innovation Hub 2032
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover and explore the most revolutionary technologies shaping humanity's future
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category.key
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Innovation Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredInnovations.map((innovation) => (
            <div key={innovation.id} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{innovation.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{innovation.title}</h3>
                <p className="text-white/80 mb-6">{innovation.description}</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm opacity-75">Status</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    innovation.status === 'Active' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {innovation.status}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm opacity-75">Success Rate</span>
                  <span className="text-lg font-bold text-green-400">{innovation.successRate}</span>
                </div>
              </div>
              
              <button className={`w-full bg-gradient-to-r ${innovation.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Explore Innovation →
              </button>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Innovation Statistics</h2>
            <p className="text-xl opacity-90">Our impact on the future of technology</p>
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
              <div className="text-5xl font-bold text-emerald-400 mb-2">∞</div>
              <div className="text-lg opacity-90">Possibilities</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-400 mb-2">2032</div>
              <div className="text-lg opacity-90">Future Year</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Innovation Revolution</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Be part of the most advanced technology development in human history
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/pages/UltimateTechBreakthrough2032" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Ultimate Breakthrough →
            </a>
            <a href="/pages/RevolutionaryTechShowcase2032" className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Tech Showcase →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2032;
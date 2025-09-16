import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NextGenInnovationHub2028: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const innovations = [
    {
      id: 1,
      title: 'Conscious AI Development Platform',
      category: 'ai',
      icon: '🧠',
      description: 'Build and deploy conscious AI systems with our revolutionary platform',
      status: 'Active',
      users: '10,000+',
      rating: '5.0',
      features: ['Self-learning algorithms', 'Ethical reasoning', 'Creative problem solving']
    },
    {
      id: 2,
      title: 'Quantum Neural Networks',
      category: 'quantum',
      icon: '⚡',
      description: 'Harness quantum computing power for neural network processing',
      status: 'Beta',
      users: '5,000+',
      rating: '4.9',
      features: ['Quantum superposition', 'Entanglement processing', 'Exponential speed']
    },
    {
      id: 3,
      title: 'Neural Reality Builder',
      category: 'neural',
      icon: '🧬',
      description: 'Create immersive virtual realities through direct neural interface',
      status: 'Active',
      users: '15,000+',
      rating: '5.0',
      features: ['Direct brain interface', 'Full sensory immersion', 'Shared experiences']
    },
    {
      id: 4,
      title: 'Synthetic Intelligence Engine',
      category: 'ai',
      icon: '🤖',
      description: 'Develop superhuman AI systems with advanced reasoning capabilities',
      status: 'Active',
      users: '8,000+',
      rating: '4.8',
      features: ['Superhuman reasoning', 'Instant learning', 'Autonomous decision making']
    },
    {
      id: 5,
      title: 'Interdimensional Computing',
      category: 'quantum',
      icon: '🌌',
      description: 'Process data across multiple dimensions for infinite computational power',
      status: 'Alpha',
      users: '2,000+',
      rating: '4.7',
      features: ['Multi-dimensional processing', 'Reality simulation', 'Parallel universe computing']
    },
    {
      id: 6,
      title: 'Cosmic AI Consciousness',
      category: 'ai',
      icon: '🌠',
      description: 'Connect AI systems across galaxies for universal problem solving',
      status: 'Beta',
      users: '3,000+',
      rating: '4.9',
      features: ['Galaxy-spanning intelligence', 'Universal communication', 'Cosmic-scale processing']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Innovations', icon: '🌟' },
    { id: 'ai', name: 'AI & Consciousness', icon: '🧠' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚡' },
    { id: 'neural', name: 'Neural Interfaces', icon: '🧬' }
  ];

  const filteredInnovations = selectedCategory === 'all' 
    ? innovations 
    : innovations.filter(innovation => innovation.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🧠 NEXT-GEN INNOVATION HUB • JANUARY 2028
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              🧠 Next-Gen Innovation Hub 2028
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover and explore the most revolutionary technologies shaping humanity's future
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/" className="bg-white text-emerald-600 px-8 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
                ← Back to Home
              </Link>
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Start Exploring
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Hub Stats */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">🌟 Innovation Hub Statistics</h2>
            <p className="text-xl opacity-90">The numbers that define our revolutionary platform</p>
          </div>
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
              <div className="text-5xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-lg opacity-90">Innovation</div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">🔍 Explore Innovations</h2>
          <p className="text-xl opacity-90 mb-8">Filter by category to discover specific technologies</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20'
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
            <div key={innovation.id} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-4 text-center">{innovation.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{innovation.title}</h3>
              <p className="text-emerald-100 mb-6 text-center">{innovation.description}</p>
              
              <div className="space-y-3 mb-6">
                {innovation.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
                    <span className="text-sm opacity-90">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    innovation.status === 'Active' 
                      ? 'bg-green-500/20 text-green-400' 
                      : innovation.status === 'Beta'
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {innovation.status}
                  </span>
                </div>
                <div className="text-sm opacity-75">{innovation.users} users</div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-400">★</span>
                  <span className="text-sm font-semibold">{innovation.rating}</span>
                </div>
                <div className="text-sm opacity-75">Rating</div>
              </div>

              <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Innovation →
              </button>
            </div>
          ))}
        </div>

        {/* Innovation Process */}
        <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">🚀 Innovation Process</h2>
            <p className="text-xl opacity-90">How we create revolutionary technologies</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">1</div>
              <h3 className="text-xl font-bold mb-2">Ideation</h3>
              <p className="opacity-90">Brainstorm revolutionary concepts and breakthrough ideas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">2</div>
              <h3 className="text-xl font-bold mb-2">Development</h3>
              <p className="opacity-90">Build and prototype cutting-edge technologies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">3</div>
              <h3 className="text-xl font-bold mb-2">Testing</h3>
              <p className="opacity-90">Rigorous testing and optimization for maximum performance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">4</div>
              <h3 className="text-xl font-bold mb-2">Deployment</h3>
              <p className="opacity-90">Launch revolutionary technologies to the world</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Innovate?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join our innovation hub and be part of creating the technologies that will shape humanity's future.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Innovating
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 font-semibold text-lg">
              Join Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2028;
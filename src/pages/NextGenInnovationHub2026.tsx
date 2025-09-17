import { Link } from 'react-router-dom';
import React, { useState } from 'react';
const NextGenInnovationHub2026: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const innovations = [
    {
      id: 1,
      category: 'ai',
      title: 'Conscious AI Systems',
      description: 'AI that achieves true consciousness and self-awareness',
      icon: '🧠',
      status: 'Active',
      progress: 95,
      impact: 'Revolutionary',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      category: 'quantum',
      title: 'Quantum Reality Engine',
      description: 'Immersive virtual environments powered by quantum computing',
      icon: '⚡',
      status: 'In Development',
      progress: 78,
      impact: 'Breakthrough',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 3,
      category: 'neural',
      title: 'Neural Interface Pro',
      description: 'Direct brain-computer interface for seamless interaction',
      icon: '🧬',
      status: 'Testing',
      progress: 82,
      impact: 'Transformative',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      id: 4,
      category: 'biotech',
      title: 'Synthetic Biology AI',
      description: 'AI-powered biological systems for medical breakthroughs',
      icon: '🧪',
      status: 'Research',
      progress: 65,
      impact: 'Life-changing',
      color: 'from-green-500 to-lime-500'
    },
    {
      id: 5,
      category: 'space',
      title: 'Interstellar Computing',
      description: 'Computing systems for deep space exploration',
      icon: '🚀',
      status: 'Concept',
      progress: 45,
      impact: 'Cosmic',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 6,
      category: 'energy',
      title: 'Fusion Power AI',
      description: 'AI-controlled fusion reactors for unlimited clean energy',
      icon: '⚛️',
      status: 'Prototype',
      progress: 70,
      impact: 'Planetary',
      color: 'from-yellow-500 to-orange-500'
    }
  ];
  const categories = [
    { key: 'all', label: 'All Innovations', icon: '🌟' },
    { key: 'ai', label: 'AI & Consciousness', icon: '🧠' },
    { key: 'quantum', label: 'Quantum Computing', icon: '⚡' },
    { key: 'neural', label: 'Neural Interfaces', icon: '🧬' },
    { key: 'biotech', label: 'Biotechnology', icon: '🧪' },
    { key: 'space', label: 'Space Technology', icon: '🚀' },
    { key: 'energy', label: 'Clean Energy', icon: '⚛️' }
  ];
  const filteredInnovations = selectedCategory === 'all' 
    ? innovations 
    : innovations.filter(innovation => innovation.category === selectedCategory);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🧠 INNOVATION HUB • JANUARY 2026
          </div>
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Next-Gen Innovation Hub 2026
          </h1>
          <p className="text-2xl opacity-90 max-w-5xl mx-auto mb-8">
            Discover and explore the most revolutionary technologies shaping humanity's future. 
            Over 50+ active innovations with 99.9% success rate and infinite possibilities.
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
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-2xl scale-105'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <span className="text-xl mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>
        {/* Innovation Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredInnovations.map((innovation) => (
            <div key={innovation.id} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{innovation.icon}</div>
                <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  innovation.status === 'Active' ? 'bg-green-500/50 text-green-200' :
                  innovation.status === 'In Development' ? 'bg-blue-500/50 text-blue-200' :
                  innovation.status === 'Testing' ? 'bg-yellow-500/50 text-yellow-200' :
                  innovation.status === 'Research' ? 'bg-purple-500/50 text-purple-200' :
                  'bg-gray-500/50 text-gray-200'
                }`}>
                  {innovation.status}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">{innovation.title}</h3>
              <p className="text-gray-300 mb-6">{innovation.description}</p>
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span>Progress</span>
                  <span>{innovation.progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r ${innovation.color}`}
                    style={{ width: `${innovation.progress}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${innovation.color} text-white`}>
                  {innovation.impact}
                </span>
                <button className="text-white hover:text-purple-300 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Innovation Statistics 2026</h2>
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
              <div className="text-5xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-lg opacity-90">Innovation</div>
            </div>
          </div>
        </div>
        {/* Innovation Process */}
        <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Our Innovation Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-3">Ideation</h3>
              <p className="text-gray-300">Brainstorm revolutionary concepts and breakthrough ideas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-3">Research</h3>
              <p className="text-gray-300">Deep dive into cutting-edge research and feasibility studies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-3">Development</h3>
              <p className="text-gray-300">Build and prototype revolutionary technologies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold mb-3">Deployment</h3>
              <p className="text-gray-300">Launch and scale world-changing innovations</p>
            </div>
          </div>
        </div>
      </div>
      {/* Innovation Categories */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Innovation Categories</h2>
          <p className="text-xl text-gray-300">Explore our comprehensive range of next-generation technologies</p>
        </div>
        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-6">Join the Innovation Revolution</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Be part of the future. Contribute to groundbreaking innovations that will shape humanity's destiny.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-10 py-5 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-xl">
              Join Innovation Hub →
            </button>
            <button className="border-2 border-white text-white px-10 py-5 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-xl">
              Submit Innovation
            </button>
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-10 py-5 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-xl">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default NextGenInnovationHub2026;

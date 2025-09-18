import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white mb-6">
              Next-Gen Innovation Hub 2026
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover the future of technology through our revolutionary innovations
              that are reshaping the world as we know it.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                Get Involved
              </Link>
              <Link 
                to="/research" 
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                View Research
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category.key
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Innovations Grid */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInnovations.map((innovation) => (
            <div
              key={innovation.id}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{innovation.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{innovation.title}</h3>
                <p className="text-gray-300 mb-4">{innovation.description}</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Status:</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    innovation.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                    innovation.status === 'In Development' ? 'bg-blue-500/20 text-blue-400' :
                    innovation.status === 'Testing' ? 'bg-yellow-500/20 text-yellow-400' :
                    innovation.status === 'Research' ? 'bg-purple-500/20 text-purple-400' :
                    innovation.status === 'Concept' ? 'bg-gray-500/20 text-gray-400' :
                    'bg-orange-500/20 text-orange-400'
                  }`}>
                    {innovation.status}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Progress:</span>
                    <span className="text-white font-semibold">{innovation.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${innovation.color}`}
                      style={{ width: `${innovation.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Impact:</span>
                  <span className="text-purple-400 font-semibold">{innovation.impact}</span>
                </div>
              </div>

              <div className="mt-6 text-center">
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Shape the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join us in creating the next generation of technological innovations
            that will transform the world.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
            >
              Join Our Team
            </Link>
            <Link 
              to="/invest" 
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Invest in Innovation
            </Link>
          </div>
        </div>
      </div>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0ddb
    </div>
  );
};

export default NextGenInnovationHub2026;
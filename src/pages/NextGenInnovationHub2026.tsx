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
      timeline: 'Q2 2026'
    },
    {
      id: 2,
      category: 'quantum',
      title: 'Quantum Reality Engine',
      description: 'Computing power that transcends physical limitations',
      icon: '⚛️',
      status: 'Development',
      progress: 78,
      impact: 'Transformative',
      timeline: 'Q3 2026'
    },
    {
      id: 3,
      category: 'biotech',
      title: 'Neural Enhancement Suite',
      description: 'Direct brain-computer interfaces for enhanced cognition',
      icon: '🧬',
      status: 'Research',
      progress: 45,
      impact: 'Breakthrough',
      timeline: 'Q4 2026'
    },
    {
      id: 4,
      category: 'space',
      title: 'Interstellar Communication',
      description: 'Real-time communication across light-years',
      icon: '🛸',
      status: 'Concept',
      progress: 25,
      impact: 'Revolutionary',
      timeline: '2027'
    },
    {
      id: 5,
      category: 'energy',
      title: 'Zero-Point Energy Harvester',
      description: 'Extracting unlimited energy from quantum vacuum',
      icon: '⚡',
      status: 'Research',
      progress: 60,
      impact: 'Transformative',
      timeline: 'Q1 2027'
    },
    {
      id: 6,
      category: 'ai',
      title: 'Universal Translator AI',
      description: 'Real-time translation of any language or communication',
      icon: '🗣️',
      status: 'Active',
      progress: 88,
      impact: 'Breakthrough',
      timeline: 'Q2 2026'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Innovations', icon: '🌟' },
    { id: 'ai', name: 'Artificial Intelligence', icon: '🤖' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️' },
    { id: 'biotech', name: 'Biotechnology', icon: '🧬' },
    { id: 'space', name: 'Space Technology', icon: '🚀' },
    { id: 'energy', name: 'Energy Systems', icon: '⚡' }
  ];

  const filteredInnovations = selectedCategory === 'all' 
    ? innovations 
    : innovations.filter(innovation => innovation.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🧠 INNOVATION HUB • JANUARY 2026
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Next-Gen Innovation Hub 2026
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
            Welcome to the future of innovation. Our cutting-edge hub brings together the brightest minds, 
            most advanced technologies, and revolutionary ideas to create tomorrow's solutions today.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link 
              to="/pages/RevolutionaryTechInsights2026" 
              className="bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg"
            >
              Explore Innovations →
            </Link>
            <Link 
              to="/pages/AdvancedAISolutions2026" 
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 font-semibold text-lg"
            >
              AI Solutions
            </Link>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Innovation Categories</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Innovations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredInnovations.map((innovation) => (
            <div
              key={innovation.id}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-4">{innovation.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{innovation.title}</h3>
              <p className="text-gray-300 mb-4">{innovation.description}</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Status:</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    innovation.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                    innovation.status === 'Development' ? 'bg-yellow-500/20 text-yellow-400' :
                    innovation.status === 'Research' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {innovation.status}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Progress:</span>
                  <span className="text-sm font-semibold">{innovation.progress}%</span>
                </div>
                
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${innovation.progress}%` }}
                  ></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Impact:</span>
                  <span className="text-sm font-semibold text-purple-400">{innovation.impact}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Timeline:</span>
                  <span className="text-sm font-semibold">{innovation.timeline}</span>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Innovate?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our innovation community and be part of the next technological revolution
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg">
              Join Innovation Lab →
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 font-semibold text-lg">
              Submit Your Idea
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2026;
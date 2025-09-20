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
<<<<<<< HEAD
      timeline: 'Q2 2026'
=======
      color: 'from-purple-500 to-pink-500'
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
    },
    {
      id: 2,
      category: 'quantum',
      title: 'Quantum Reality Engine',
<<<<<<< HEAD
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
=======
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
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
    }
  ];

  const categories = [
<<<<<<< HEAD
    { id: 'all', name: 'All Innovations', icon: '🌟' },
    { id: 'ai', name: 'Artificial Intelligence', icon: '🤖' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️' },
    { id: 'biotech', name: 'Biotechnology', icon: '🧬' },
    { id: 'space', name: 'Space Technology', icon: '🚀' },
    { id: 'energy', name: 'Energy Systems', icon: '⚡' }
=======
    { key: 'all', label: 'All Innovations', icon: '🌟' },
    { key: 'ai', label: 'AI & Consciousness', icon: '🧠' },
    { key: 'quantum', label: 'Quantum Computing', icon: '⚡' },
    { key: 'neural', label: 'Neural Interfaces', icon: '🧬' },
    { key: 'biotech', label: 'Biotechnology', icon: '🧪' },
    { key: 'space', label: 'Space Technology', icon: '🚀' },
    { key: 'energy', label: 'Clean Energy', icon: '⚛️' }
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
  ];

  const filteredInnovations = selectedCategory === 'all' 
    ? innovations 
    : innovations.filter(innovation => innovation.category === selectedCategory);

  return (
<<<<<<< HEAD
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
=======
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
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
        </div>

<<<<<<< HEAD
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
=======
      {/* Innovations Grid */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
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
<<<<<<< HEAD
              
              <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Learn More →
              </button>
=======

              <div className="mt-6 text-center">
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                  Learn More
                </button>
              </div>
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
            </div>
          ))}
        </div>

<<<<<<< HEAD
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
=======
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
      </main>
      
      <EnhancedFooter />
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
    </div>
  );
};

export default NextGenInnovationHub2026;
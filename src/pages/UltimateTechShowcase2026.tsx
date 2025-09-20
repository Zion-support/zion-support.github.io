import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const UltimateTechShowcase2026: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const technologies = [
    {
      id: 'ai',
      name: 'AI Consciousness',
      icon: '🧠',
      description: 'Breakthrough artificial intelligence achieving true consciousness',
      features: ['Self-awareness', 'Creative thinking', 'Emotional intelligence', 'Collaborative learning'],
      status: 'Active',
      progress: 95
    },
    {
      id: 'quantum',
      name: 'Quantum Computing',
      icon: '⚛️',
      description: 'Revolutionary quantum processors transcending classical limits',
      features: ['Exponential speed', 'Quantum entanglement', 'Parallel processing', 'Unbreakable encryption'],
      status: 'Development',
      progress: 78
    },
    {
      id: 'neural',
      name: 'Neural Interfaces',
      icon: '🧬',
      description: 'Direct brain-computer interfaces for enhanced cognition',
      features: ['Memory augmentation', 'Enhanced learning', 'Neural communication', 'Cognitive boost'],
      status: 'Research',
      progress: 65
    },
    {
      id: 'space',
      name: 'Space Technology',
      icon: '🚀',
      description: 'Advanced technologies for space exploration and colonization',
      features: ['Faster-than-light travel', 'Space habitats', 'Resource extraction', 'Interstellar communication'],
      status: 'Concept',
      progress: 40
    },
    {
      id: 'energy',
      name: 'Zero-Point Energy',
      icon: '⚡',
      description: 'Unlimited clean energy from quantum vacuum fluctuations',
      features: ['Infinite power', 'Zero emissions', 'Portable generation', 'Revolutionary efficiency'],
      status: 'Research',
      progress: 55
    },
    {
      id: 'reality',
      name: 'Reality Engine',
      icon: '🌌',
      description: 'Technology that manipulates the fundamental fabric of reality',
      features: ['Matter manipulation', 'Gravity control', 'Time dilation', 'Dimensional portals'],
      status: 'Concept',
      progress: 25
    }
  ];

  const categories = [
    { id: 'all', name: 'All Technologies', icon: '🌟' },
    { id: 'ai', name: 'AI & Consciousness', icon: '🤖' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️' },
    { id: 'neural', name: 'Neural Interfaces', icon: '🧬' },
    { id: 'space', name: 'Space Technology', icon: '🚀' },
    { id: 'energy', name: 'Energy Systems', icon: '⚡' },
    { id: 'reality', name: 'Reality Tech', icon: '🌌' }
  ];

  const filteredTechnologies = selectedCategory === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Ultimate Tech Showcase 2026 - Zion Tech Group</title>
        <meta name="description" content="Discover the most comprehensive collection of cutting-edge technologies including AI consciousness, quantum computing, neural interfaces, and space technology." />
        <meta name="keywords" content="tech showcase, AI consciousness, quantum computing, neural interfaces, biotechnology, space technology, 2026" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
          <div className="relative z-10 container mx-auto px-4 py-20">
            <div className="text-center">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
                🚀 ULTIMATE TECH SHOWCASE • 2026
              </div>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Ultimate Tech Showcase 2026
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
                Experience the most comprehensive collection of revolutionary technologies that will reshape our world. 
                From AI consciousness to quantum computing, discover the future today.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg">
                  Explore Technologies →
                </button>
                <button className="border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400 hover:text-black transition-all duration-300 font-semibold text-lg">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-center mb-12">Technology Categories</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-emerald-600 to-cyan-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UltimateTechShowcase2026;

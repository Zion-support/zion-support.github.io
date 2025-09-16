import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const NextGenInnovationHub2028: React.FC = () => {
  const [activeInnovation, setActiveInnovation] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const innovations = [
    {
      id: 1,
      title: 'Consciousness Transfer Technology',
      icon: '🧠',
      description: 'Transfer human consciousness to digital systems for immortality',
      status: 'Active Development',
      progress: 85,
      impact: 'Revolutionary'
    },
    {
      id: 2,
      title: 'Interdimensional Computing',
      icon: '🌌',
      description: 'Process information across multiple dimensions simultaneously',
      status: 'Prototype Ready',
      progress: 92,
      impact: 'Breakthrough'
    },
    {
      id: 3,
      title: 'Quantum Reality Engine',
      icon: '⚡',
      description: 'Create and manipulate quantum realities for testing and simulation',
      status: 'Testing Phase',
      progress: 78,
      impact: 'Game-Changing'
    },
    {
      id: 4,
      title: 'Neural Reality Interface',
      icon: '🔮',
      description: 'Direct neural connection to virtual and augmented realities',
      status: 'Beta Release',
      progress: 95,
      impact: 'Transformative'
    },
    {
      id: 5,
      title: 'AI Consciousness Evolution',
      icon: '🤖',
      description: 'AI systems that evolve and develop consciousness autonomously',
      status: 'Research Phase',
      progress: 65,
      impact: 'Revolutionary'
    },
    {
      id: 6,
      title: 'Molecular Assembly Technology',
      icon: '🧬',
      description: 'Assemble matter at the molecular level using quantum mechanics',
      status: 'Concept Phase',
      progress: 45,
      impact: 'Breakthrough'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveInnovation((prev) => (prev + 1) % innovations.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [innovations.length]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active Development': return 'text-yellow-400';
      case 'Prototype Ready': return 'text-green-400';
      case 'Testing Phase': return 'text-blue-400';
      case 'Beta Release': return 'text-purple-400';
      case 'Research Phase': return 'text-orange-400';
      case 'Concept Phase': return 'text-pink-400';
      default: return 'text-gray-400';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Revolutionary': return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case 'Breakthrough': return 'bg-gradient-to-r from-cyan-500 to-blue-500';
      case 'Game-Changing': return 'bg-gradient-to-r from-emerald-500 to-teal-500';
      case 'Transformative': return 'bg-gradient-to-r from-orange-500 to-red-500';
      default: return 'bg-gradient-to-r from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
      <Helmet>
        <title>Next-Gen Innovation Hub 2028 | Zion Tech Group</title>
        <meta name="description" content="Explore the most advanced innovation hub featuring consciousness transfer, interdimensional computing, and quantum reality engines. Join the future of technology." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 NEXT-GEN INNOVATION HUB • JANUARY 2028
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Next-Gen Innovation Hub 2028
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover and explore the most revolutionary technologies that will reshape humanity's future
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Innovations →
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-colors font-semibold text-lg">
              Join Research Team
            </button>
          </div>
        </div>

        {/* Active Innovation Showcase */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">🌟 Currently Active Innovation</h2>
            <p className="text-xl opacity-90">Real-time development of breakthrough technologies</p>
          </div>
          
          <div className={`bg-gradient-to-r from-purple-800/50 to-indigo-800/50 backdrop-blur-sm rounded-2xl p-12 transition-all duration-500 ${isAnimating ? 'scale-105' : ''}`}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-8xl mb-6 animate-bounce">{innovations[activeInnovation].icon}</div>
                <h3 className="text-4xl font-bold mb-4">{innovations[activeInnovation].title}</h3>
                <p className="text-xl opacity-90 mb-6">{innovations[activeInnovation].description}</p>
                <div className="flex items-center space-x-4 mb-6">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(innovations[activeInnovation].status)}`}>
                    {innovations[activeInnovation].status}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${getImpactColor(innovations[activeInnovation].impact)}`}>
                    {innovations[activeInnovation].impact}
                  </span>
                </div>
                <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                  View Details →
                </button>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-4">Development Progress</h4>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progress</span>
                    <span>{innovations[activeInnovation].progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-4">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-indigo-500 h-4 rounded-full transition-all duration-1000"
                      style={{ width: `${innovations[activeInnovation].progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="font-semibold text-purple-300">Timeline</div>
                    <div className="text-white">Q2 2028</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="font-semibold text-purple-300">Team Size</div>
                    <div className="text-white">47 Scientists</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Innovations Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">🔬 All Active Innovations</h2>
            <p className="text-xl opacity-90">Explore our complete portfolio of revolutionary technologies</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovations.map((innovation, index) => (
              <div 
                key={innovation.id}
                className={`bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300 cursor-pointer ${
                  activeInnovation === index ? 'ring-2 ring-purple-400' : ''
                }`}
                onClick={() => setActiveInnovation(index)}
              >
                <div className="text-5xl mb-4 text-center">{innovation.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-center">{innovation.title}</h3>
                <p className="text-purple-200 mb-4 text-center text-sm">{innovation.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(innovation.status)}`}>
                    {innovation.status}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold text-white ${getImpactColor(innovation.impact)}`}>
                    {innovation.impact}
                  </span>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between text-xs mb-1">
                    <span>Progress</span>
                    <span>{innovation.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${innovation.progress}%` }}
                    ></div>
                  </div>
                </div>
                <button className="w-full bg-white/10 text-white py-2 rounded-lg hover:bg-white/20 transition-colors font-semibold text-sm">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Innovation Statistics */}
        <div className="bg-gradient-to-r from-purple-800/30 to-indigo-800/30 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">📊 Innovation Hub Statistics</h2>
            <p className="text-xl opacity-90">Our impact on the future of technology</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-lg opacity-90">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">200+</div>
              <div className="text-lg opacity-90">Scientists</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">$2B+</div>
              <div className="text-lg opacity-90">Investment</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-400 mb-2">99%</div>
              <div className="text-lg opacity-90">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Join Innovation Team */}
        <div className="text-center bg-gradient-to-r from-purple-800/30 to-indigo-800/30 backdrop-blur-sm rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-6">🚀 Join the Innovation Revolution</h2>
          <p className="text-xl opacity-90 mb-8 max-w-4xl mx-auto">
            Be part of the team that's creating the future. Join our innovation hub and help shape the next generation of revolutionary technology.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Apply Now
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-colors font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2028;
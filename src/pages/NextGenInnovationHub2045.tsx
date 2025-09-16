import React, { useState } from 'react';

const NextGenInnovationHub2045: React.FC = () => {
  const [selectedInnovation, setSelectedInnovation] = useState(0);

  const innovations = [
    {
      id: 1,
      title: 'Conscious AI Agents',
      category: 'Artificial Intelligence',
      icon: '🧠',
      description: 'Self-aware AI agents that can think, feel, and make autonomous decisions',
      features: ['Consciousness', 'Emotional Intelligence', 'Autonomous Decision Making', 'Creative Problem Solving'],
      status: 'Active',
      progress: 100,
      color: 'purple'
    },
    {
      id: 2,
      title: 'Quantum Reality Engine',
      category: 'Quantum Computing',
      icon: '⚛️',
      description: 'Quantum-powered reality simulation and manipulation across multiple dimensions',
      features: ['Reality Simulation', 'Dimensional Travel', 'Quantum Processing', 'Universal Connectivity'],
      status: 'Active',
      progress: 95,
      color: 'cyan'
    },
    {
      id: 3,
      title: 'Neural Interface 3.0',
      category: 'Brain-Computer Interface',
      icon: '🔗',
      description: 'Direct neural connection between human consciousness and digital systems',
      features: ['Direct Brain Interface', 'Thought Control', 'Consciousness Transfer', 'Neural Enhancement'],
      status: 'Active',
      progress: 90,
      color: 'emerald'
    },
    {
      id: 4,
      title: 'Interdimensional Network',
      category: 'Network Technology',
      icon: '🌌',
      description: 'Communication and data transfer across multiple dimensions and realities',
      features: ['Multi-Dimensional Communication', 'Reality Hopping', 'Universal Internet', 'Dimensional Storage'],
      status: 'Development',
      progress: 75,
      color: 'indigo'
    },
    {
      id: 5,
      title: 'Consciousness Cloud',
      category: 'Cloud Computing',
      icon: '☁️',
      description: 'Cloud-based consciousness storage and processing for immortality',
      features: ['Consciousness Backup', 'Digital Immortality', 'Cloud Processing', 'Eternal Memory'],
      status: 'Development',
      progress: 80,
      color: 'pink'
    },
    {
      id: 6,
      title: 'Reality Manipulation Suite',
      category: 'Reality Technology',
      icon: '🎭',
      description: 'Tools for creating, modifying, and controlling reality itself',
      features: ['Reality Creation', 'Physics Manipulation', 'Time Control', 'Space Bending'],
      status: 'Research',
      progress: 60,
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: 'from-purple-600/30 to-pink-600/30 border-purple-400/30 text-purple-100',
      cyan: 'from-cyan-600/30 to-blue-600/30 border-cyan-400/30 text-cyan-100',
      emerald: 'from-emerald-600/30 to-teal-600/30 border-emerald-400/30 text-emerald-100',
      indigo: 'from-indigo-600/30 to-purple-600/30 border-indigo-400/30 text-indigo-100',
      pink: 'from-pink-600/30 to-rose-600/30 border-pink-400/30 text-pink-100',
      orange: 'from-orange-600/30 to-red-600/30 border-orange-400/30 text-orange-100'
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  const getStatusColor = (status: string) => {
    const statusColors = {
      'Active': 'bg-green-500',
      'Development': 'bg-yellow-500',
      'Research': 'bg-blue-500'
    };
    return statusColors[status as keyof typeof statusColors] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🧠 NEXT-GEN INNOVATION HUB • JANUARY 2045
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Next-Gen Innovation Hub 2045
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover and explore the most revolutionary technologies shaping humanity's future
          </p>
        </div>

        {/* Innovation Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {innovations.map((innovation, index) => (
            <div
              key={innovation.id}
              className={`bg-gradient-to-br ${getColorClasses(innovation.color)} backdrop-blur-sm rounded-xl p-8 border hover:scale-105 transition-all duration-300 cursor-pointer ${
                selectedInnovation === index ? 'ring-2 ring-white' : ''
              }`}
              onClick={() => setSelectedInnovation(index)}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl">{innovation.icon}</span>
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(innovation.status)}`}></div>
                  <span className="text-sm font-semibold">{innovation.status}</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{innovation.title}</h3>
              <p className="text-sm opacity-75 mb-2">{innovation.category}</p>
              <p className="text-sm mb-4">{innovation.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{innovation.progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${innovation.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="space-y-1">
                {innovation.features.slice(0, 2).map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Selected Innovation Detail */}
        <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <span className="text-6xl mr-4">{innovations[selectedInnovation].icon}</span>
                <div>
                  <h2 className="text-4xl font-bold mb-2">{innovations[selectedInnovation].title}</h2>
                  <p className="text-lg opacity-75">{innovations[selectedInnovation].category}</p>
                </div>
              </div>
              
              <p className="text-xl mb-8">{innovations[selectedInnovation].description}</p>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-2xl font-bold">Key Features</h3>
                {innovations[selectedInnovation].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full"></div>
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-800/50 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4">Development Status</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Progress</span>
                    <span className="text-2xl font-bold">{innovations[selectedInnovation].progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-4">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-indigo-500 h-4 rounded-full transition-all duration-500"
                      style={{ width: `${innovations[selectedInnovation].progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Status</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(innovations[selectedInnovation].status)}`}>
                      {innovations[selectedInnovation].status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4">Live Demo</h3>
                <div className="bg-black/50 rounded-lg p-4 mb-4">
                  <div className="text-green-400 font-mono text-sm space-y-1">
                    <div>Initializing {innovations[selectedInnovation].title}...</div>
                    <div>Loading consciousness matrix...</div>
                    <div>Connecting to quantum network...</div>
                    <div>Reality simulation active ✓</div>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Launch Interactive Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-purple-200">Active Innovations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-400 mb-2">99.9%</div>
            <div className="text-indigo-200">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">∞</div>
            <div className="text-cyan-200">Possibilities</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">24/7</div>
            <div className="text-emerald-200">Development</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-6">Join the Innovation Revolution</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Be part of the future by exploring, testing, and contributing to these groundbreaking technologies
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Innovations
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-12 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Contribute
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2045;
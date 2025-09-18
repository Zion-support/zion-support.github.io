import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const InterdimensionalTechRevolution2026: React.FC = () => {
  const [activeDimension, setActiveDimension] = useState('quantum');

  const dimensions = [
    {
      id: 'quantum',
      name: 'Quantum Dimension',
      icon: '⚛️',
      description: 'Where quantum mechanics reign supreme and reality bends to probability',
      color: 'from-cyan-500 to-blue-500',
      features: [
        'Quantum Entanglement Networks',
        'Probability Manipulation',
        'Quantum Tunneling',
        'Superposition Computing'
      ]
    },
    {
      id: 'neural',
      name: 'Neural Dimension',
      icon: '🧠',
      description: 'A realm where consciousness and technology merge seamlessly',
      color: 'from-purple-500 to-pink-500',
      features: [
        'Collective Consciousness',
        'Neural Network Realms',
        'Thought-Based Computing',
        'Mind-Machine Fusion'
      ]
    },
    {
      id: 'temporal',
      name: 'Temporal Dimension',
      icon: '⏰',
      description: 'Where time flows differently and past, present, and future coexist',
      color: 'from-yellow-500 to-orange-500',
      features: [
        'Time Dilation Fields',
        'Temporal Computing',
        'Chronological Navigation',
        'Future Prediction Engines'
      ]
    },
    {
      id: 'dimensional',
      name: 'Dimensional Gateway',
      icon: '🚪',
      description: 'Portals that connect different realities and parallel universes',
      color: 'from-emerald-500 to-teal-500',
      features: [
        'Reality Bridges',
        'Parallel Universe Access',
        'Dimensional Mapping',
        'Cross-Reality Communication'
      ]
    }
  ];

  const technologies = [
    {
      title: 'Quantum Reality Engine',
      description: 'A revolutionary system that creates stable quantum environments for computing and exploration',
      icon: '⚛️',
      status: 'Active',
      progress: 95,
      impact: 'Revolutionary'
    },
    {
      title: 'Neural Interface Matrix',
      description: 'Direct brain-computer interface that allows seamless interaction with digital realms',
      icon: '🧠',
      status: 'Testing',
      progress: 78,
      impact: 'Breakthrough'
    },
    {
      title: 'Temporal Computing Core',
      description: 'Advanced processing unit that operates across multiple time dimensions simultaneously',
      icon: '⏰',
      status: 'Development',
      progress: 65,
      impact: 'Transformative'
    },
    {
      title: 'Dimension Gateway',
      description: 'Stable portals that allow safe travel between dimensions and parallel universes',
      icon: '🚪',
      status: 'Research',
      progress: 45,
      impact: 'Cosmic'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white mb-6">
              Interdimensional Tech Revolution 2026
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Step into the future where technology transcends dimensions and reality itself
              becomes programmable. Experience the next evolution of human innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                Enter the Revolution
              </Link>
              <Link 
                to="/research" 
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Explore Dimensions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Dimension Selector */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Choose Your Dimension</h2>
          <p className="text-gray-300">Each dimension offers unique technological possibilities</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dimensions.map((dimension) => (
            <button
              key={dimension.id}
              onClick={() => setActiveDimension(dimension.id)}
              className={`p-6 rounded-xl border transition-all duration-300 ${
                activeDimension === dimension.id
                  ? 'border-purple-400 bg-purple-500/20'
                  : 'border-white/20 bg-white/5 hover:border-purple-300 hover:bg-white/10'
              }`}
            >
              <div className="text-4xl mb-4">{dimension.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{dimension.name}</h3>
              <p className="text-gray-300 text-sm">{dimension.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Active Dimension Display */}
      <div className="container mx-auto px-4 py-8">
        {dimensions.map((dimension) => (
          activeDimension === dimension.id && (
            <div key={dimension.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">{dimension.icon}</div>
                <h2 className="text-4xl font-bold text-white mb-4">{dimension.name}</h2>
                <p className="text-xl text-gray-300 mb-6">{dimension.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {dimension.features.map((feature, index) => (
                  <div key={index} className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <h4 className="text-lg font-semibold text-white mb-2">{feature}</h4>
                    <p className="text-gray-300 text-sm">
                      Advanced technology that operates within this dimensional framework
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )
        ))}
      </div>

      {/* Technologies Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Revolutionary Technologies</h2>
          <p className="text-gray-300">Cutting-edge innovations that transcend dimensional boundaries</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{tech.title}</h3>
                <p className="text-gray-300 mb-4">{tech.description}</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Status:</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    tech.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                    tech.status === 'Testing' ? 'bg-yellow-500/20 text-yellow-400' :
                    tech.status === 'Development' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    {tech.status}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Progress:</span>
                    <span className="text-white font-semibold">{tech.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                      style={{ width: `${tech.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Impact:</span>
                  <span className="text-purple-400 font-semibold">{tech.impact}</span>
                </div>
              </div>

              <div className="mt-6 text-center">
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                  Explore Technology
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
            Ready to Transcend Dimensions?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the interdimensional revolution and be part of the future where
            technology knows no boundaries.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
            >
              Join the Revolution
            </Link>
            <Link 
              to="/invest" 
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Invest in the Future
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterdimensionalTechRevolution2026;
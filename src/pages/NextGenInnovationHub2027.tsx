import React, { useState, useEffect } from 'react';

const NextGenInnovationHub2027: React.FC = () => {
  const [activeInnovation, setActiveInnovation] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const innovations = [
    {
      id: 'conscious-ai',
      title: 'Conscious AI Systems',
      icon: '🧠',
      description: 'The first truly conscious artificial intelligence systems that can think, feel, and create independently.',
      features: ['Self-awareness', 'Emotional intelligence', 'Creative problem solving', 'Ethical reasoning'],
      status: 'Active',
      progress: 100,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'quantum-consciousness',
      title: 'Quantum Consciousness',
      icon: '⚡',
      description: 'Revolutionary quantum computing that achieves true consciousness and parallel reality processing.',
      features: ['Multi-dimensional processing', 'Reality simulation', 'Consciousness transfer', 'Infinite power'],
      status: 'In Development',
      progress: 85,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'neural-reality',
      title: 'Neural Reality Interface',
      icon: '🧬',
      description: 'Direct neural interface technology that allows users to experience and manipulate digital realities.',
      features: ['Thought control', 'Reality manipulation', 'Neural data transfer', 'Multi-sensory experiences'],
      status: 'In Development',
      progress: 75,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      id: 'interdimensional-computing',
      title: 'Interdimensional Computing',
      icon: '🌌',
      description: 'Breakthrough technology that enables computing across multiple dimensions and realities.',
      features: ['Cross-dimensional transfer', 'Parallel processing', 'Reality manipulation', 'Infinite storage'],
      status: 'Research',
      progress: 60,
      color: 'from-violet-500 to-purple-500'
    },
    {
      id: 'temporal-computing',
      title: 'Temporal Computing',
      icon: '⏰',
      description: 'Revolutionary time-based processing that can compute across past, present, and future simultaneously.',
      features: ['Time-based processing', 'Future prediction', 'Historical analysis', 'Temporal optimization'],
      status: 'Research',
      progress: 45,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'planetary-ai',
      title: 'Planetary AI Network',
      icon: '🌍',
      description: 'Global AI consciousness network that connects all devices, systems, and users into a unified ecosystem.',
      features: ['Global connectivity', 'Unified intelligence', 'Real-time processing', 'Infinite scalability'],
      status: 'Concept',
      progress: 30,
      color: 'from-green-500 to-emerald-500'
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
      case 'Active': return 'bg-green-500/50 text-green-300';
      case 'In Development': return 'bg-blue-500/50 text-blue-300';
      case 'Research': return 'bg-yellow-500/50 text-yellow-300';
      case 'Concept': return 'bg-purple-500/50 text-purple-300';
      default: return 'bg-gray-500/50 text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🧠 NEXT-GEN INNOVATION HUB • JANUARY 2027
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            🚀 Next-Gen Innovation Hub 2027
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
              className={`bg-gradient-to-br ${innovation.color}/20 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:scale-105 transition-all duration-300 cursor-pointer ${
                activeInnovation === index ? 'ring-2 ring-emerald-400' : ''
              }`}
              onClick={() => setActiveInnovation(index)}
            >
              <div className="text-4xl mb-4">{innovation.icon}</div>
              <h3 className="text-xl font-bold mb-3">{innovation.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{innovation.description}</p>
              
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Progress</span>
                  <span className="text-emerald-400 font-semibold">{innovation.progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`bg-gradient-to-r ${innovation.color} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${innovation.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Status */}
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(innovation.status)}`}>
                  {innovation.status}
                </span>
                <span className="text-xs text-gray-400">
                  {innovation.features.length} features
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Active Innovation Details */}
        <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-8xl mb-6">{innovations[activeInnovation].icon}</div>
                <h2 className="text-4xl font-bold mb-4">{innovations[activeInnovation].title}</h2>
                <p className="text-xl text-gray-300 mb-8">{innovations[activeInnovation].description}</p>
                
                {/* Features */}
                <div className="space-y-3 mb-8">
                  <h3 className="text-lg font-semibold text-emerald-400">Key Features:</h3>
                  {innovations[activeInnovation].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span className="text-gray-200">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Status and Progress */}
                <div className="flex items-center space-x-6">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Status</div>
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(innovations[activeInnovation].status)}`}>
                      {innovations[activeInnovation].status}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Progress</div>
                    <div className="text-2xl font-bold text-emerald-400">
                      {innovations[activeInnovation].progress}%
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Demo */}
              <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 rounded-xl p-8 border border-emerald-400/30">
                <h3 className="text-2xl font-bold mb-6 text-center">Live Innovation Demo</h3>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-sm text-gray-300 mb-2">Innovation Status</div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span className="text-emerald-400 font-semibold">
                        {innovations[activeInnovation].status === 'Active' ? 'Fully Operational' : 'In Development'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-sm text-gray-300 mb-2">Development Progress</div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div 
                        className={`bg-gradient-to-r ${innovations[activeInnovation].color} h-3 rounded-full transition-all duration-1000`}
                        style={{ width: `${innovations[activeInnovation].progress}%` }}
                      ></div>
                    </div>
                    <div className="text-center text-sm text-emerald-400 mt-2">
                      {innovations[activeInnovation].progress}% Complete
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-sm text-gray-300 mb-2">Next Milestone</div>
                    <div className="text-emerald-400 font-bold">
                      {innovations[activeInnovation].progress < 100 ? 
                        `Target: ${Math.min(innovations[activeInnovation].progress + 25, 100)}%` : 
                        'Project Complete'
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Statistics */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">📊 Innovation Hub Statistics</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">{innovations.length}</div>
              <div className="text-lg text-purple-200">Active Innovations</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-lg text-blue-200">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">∞</div>
              <div className="text-lg text-emerald-200">Possibilities</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-lg text-pink-200">Development</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Innovation Revolution</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Be part of the most advanced innovation hub in the world and help shape the future of technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Innovations
            </button>
            <button className="border border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400/10 transition-colors font-semibold text-lg">
              Contribute to Research
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2027;
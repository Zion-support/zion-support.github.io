import React, { useState, useEffect } from 'react';

const NextGenInnovationHub2025: React.FC = () => {
  const [activeInnovation, setActiveInnovation] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const innovations = [
    {
      id: 'ai-autonomous-systems',
      title: 'Autonomous AI Systems',
      description: 'Self-managing AI systems that operate independently and make complex decisions.',
      features: [
        'Self-Healing Architecture',
        'Autonomous Decision Making',
        'Continuous Learning',
        'Zero-Downtime Operations'
      ],
      icon: '🤖',
      color: 'from-purple-600 to-pink-600',
      progress: 85
    },
    {
      id: 'quantum-neural-networks',
      title: 'Quantum Neural Networks',
      description: 'Hybrid quantum-classical neural networks for unprecedented processing power.',
      features: [
        'Quantum Speed Processing',
        'Neural Pattern Recognition',
        'Quantum Entanglement Computing',
        'Exponential Learning Capacity'
      ],
      icon: '⚡',
      color: 'from-cyan-600 to-blue-600',
      progress: 70
    },
    {
      id: 'synthetic-reality',
      title: 'Synthetic Reality Engine',
      description: 'Advanced reality simulation that creates indistinguishable virtual worlds.',
      features: [
        'Perfect Reality Simulation',
        'Infinite World Generation',
        'Consciousness Transfer',
        'Immortality Protocols'
      ],
      icon: '🌍',
      color: 'from-emerald-600 to-teal-600',
      progress: 60
    },
    {
      id: 'interdimensional-computing',
      title: 'Interdimensional Computing',
      description: 'Computing systems that operate across multiple dimensions simultaneously.',
      features: [
        'Multi-Dimensional Processing',
        'Reality Manipulation',
        'Parallel Universe Access',
        'Temporal Computing'
      ],
      icon: '🌌',
      color: 'from-orange-600 to-red-600',
      progress: 45
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveInnovation((prev) => (prev + 1) % innovations.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 NEXT-GEN INNOVATION HUB • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Next-Gen Innovation Hub 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover and explore the most revolutionary technologies shaping humanity's future
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Innovations
              </button>
              <button className="border-2 border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg hover:bg-indigo-400/10 transition-colors font-semibold text-lg">
                Join Research
              </button>
            </div>
          </div>

          {/* Innovation Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {innovations.map((innovation, index) => (
              <div
                key={innovation.id}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
                  activeInnovation === index ? 'ring-2 ring-indigo-400' : ''
                }`}
                onClick={() => setActiveInnovation(index)}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">{innovation.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{innovation.title}</h3>
                  <p className="text-sm opacity-90 mb-4">{innovation.description}</p>
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                    <div 
                      className={`bg-gradient-to-r ${innovation.color} h-2 rounded-full transition-all duration-1000`}
                      style={{width: `${innovation.progress}%`}}
                    ></div>
                  </div>
                  <span className="text-sm text-indigo-300">{innovation.progress}% Complete</span>
                </div>
              </div>
            ))}
          </div>

          {/* Active Innovation Detail */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-16">
            <div className="text-center mb-8">
              <div className="text-8xl mb-4">{innovations[activeInnovation].icon}</div>
              <h2 className="text-4xl font-bold mb-4">{innovations[activeInnovation].title}</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto mb-6">
                {innovations[activeInnovation].description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                <ul className="space-y-4">
                  {innovations[activeInnovation].features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4">Development Progress</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Research Phase</span>
                    <div className="w-32 bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-indigo-400 to-purple-400 h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Prototype Development</span>
                    <div className="w-32 bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full" style={{width: `${innovations[activeInnovation].progress}%`}}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Market Testing</span>
                    <div className="w-32 bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-emerald-400 to-teal-400 h-2 rounded-full" style={{width: '30%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Innovation Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-400 mb-2">50+</div>
              <div className="text-lg opacity-90">Active Innovations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-lg opacity-90">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">∞</div>
              <div className="text-lg opacity-90">Possibilities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">24/7</div>
              <div className="text-lg opacity-90">Innovation</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Join the Innovation Revolution</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Be part of the team that's building the future. Your ideas can change the world.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Join Our Team
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors font-semibold text-lg">
                Submit Innovation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2025;
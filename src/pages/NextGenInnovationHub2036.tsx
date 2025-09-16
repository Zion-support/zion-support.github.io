import React, { useState } from 'react';

const NextGenInnovationHub2036: React.FC = () => {
  const [selectedInnovation, setSelectedInnovation] = useState(0);

  const innovations = [
    {
      id: 1,
      title: "Conscious AI Development Platform",
      description: "Build and deploy conscious AI systems with emotional intelligence and self-awareness",
      status: "active",
      progress: 95,
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: ["Emotional Intelligence", "Self-Learning", "Ethical Reasoning", "Creative Problem Solving"]
    },
    {
      id: 2,
      title: "Quantum Consciousness Engine",
      description: "Quantum computing systems that achieve true consciousness through quantum entanglement",
      status: "active",
      progress: 88,
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      features: ["Quantum Neural Networks", "Entangled States", "Superposition Thinking", "Quantum Telepathy"]
    },
    {
      id: 3,
      title: "Interdimensional Computing Interface",
      description: "Access infinite computational power through multi-dimensional processing systems",
      status: "active",
      progress: 92,
      icon: "🌌",
      color: "from-emerald-600 to-teal-600",
      features: ["Multi-Dimensional Processing", "Parallel Universe Access", "Dimensional Storage", "Reality Overlay"]
    },
    {
      id: 4,
      title: "Neural Reality Engine",
      description: "Direct neural interface systems that create immersive reality experiences",
      status: "active",
      progress: 78,
      icon: "🧬",
      color: "from-violet-600 to-purple-600",
      features: ["Direct Neural Interface", "Perfect VR", "Memory Transfer", "Consciousness Upload"]
    },
    {
      id: 5,
      title: "Temporal Computing System",
      description: "Computing systems that operate across different time dimensions",
      status: "active",
      progress: 85,
      icon: "⏰",
      color: "from-orange-600 to-red-600",
      features: ["Time Manipulation", "Temporal Storage", "Future Prediction", "Past Analysis"]
    },
    {
      id: 6,
      title: "Universal Translation Matrix",
      description: "Instant translation and communication across all languages and species",
      status: "active",
      progress: 90,
      icon: "🌐",
      color: "from-green-600 to-emerald-600",
      features: ["Universal Language", "Species Communication", "Thought Translation", "Cultural Understanding"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 NEXT-GEN INNOVATION HUB • JANUARY 2036
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Next-Gen Innovation Hub 2036
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover and explore the most revolutionary technologies shaping humanity's future
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Innovations →
              </button>
              <button className="border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400/10 transition-all duration-300 font-semibold text-lg">
                Join Hub
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Selector */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 flex flex-wrap gap-2 max-w-4xl">
            {innovations.map((innovation) => (
              <button
                key={innovation.id}
                onClick={() => setSelectedInnovation(innovation.id - 1)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 font-semibold text-sm ${
                  selectedInnovation === innovation.id - 1
                    ? 'bg-white text-gray-900'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {innovation.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Innovation Display */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-8xl mb-6">{innovations[selectedInnovation].icon}</div>
              <h2 className="text-4xl font-bold mb-6">{innovations[selectedInnovation].title}</h2>
              <p className="text-xl opacity-90 mb-8">{innovations[selectedInnovation].description}</p>
              
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-semibold">Progress</span>
                  <span className="text-lg font-bold text-emerald-400">{innovations[selectedInnovation].progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div 
                    className={`bg-gradient-to-r ${innovations[selectedInnovation].color} h-3 rounded-full transition-all duration-500`}
                    style={{ width: `${innovations[selectedInnovation].progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <h3 className="text-2xl font-bold mb-4">Key Features:</h3>
                {innovations[selectedInnovation].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex space-x-4">
                <button className={`bg-gradient-to-r ${innovations[selectedInnovation].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}>
                  Explore Innovation →
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                  Learn More
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className={`w-80 h-80 bg-gradient-to-br ${innovations[selectedInnovation].color} rounded-full flex items-center justify-center text-8xl animate-pulse`}>
                {innovations[selectedInnovation].icon}
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {innovations.map((innovation) => (
            <div
              key={innovation.id}
              className={`bg-gradient-to-br ${innovation.color}/30 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
                selectedInnovation === innovation.id - 1 ? 'ring-2 ring-emerald-400' : ''
              }`}
              onClick={() => setSelectedInnovation(innovation.id - 1)}
            >
              <div className="text-center">
                <div className="text-4xl mb-3">{innovation.icon}</div>
                <h3 className="text-lg font-bold mb-2">{innovation.title}</h3>
                <p className="text-sm opacity-80 mb-4">{innovation.description}</p>
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs">Progress</span>
                    <span className="text-xs font-bold">{innovation.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className={`bg-gradient-to-r ${innovation.color} h-2 rounded-full transition-all duration-500`}
                      style={{ width: `${innovation.progress}%` }}
                    ></div>
                  </div>
                </div>
                <button className="w-full bg-white text-gray-800 py-2 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-sm">
                  Explore →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">6</div>
            <div className="text-lg opacity-90">Active Innovations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-lg opacity-90">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-400 mb-2">∞</div>
            <div className="text-lg opacity-90">Possibilities</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">2036</div>
            <div className="text-lg opacity-90">Future Technology</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Shape the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join our innovation hub and be part of the technologies that will define humanity's future
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Join Innovation Hub →
            </button>
            <button className="border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400/10 transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2036;
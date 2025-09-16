import React, { useState } from 'react';

const NextGenInnovationHub2036: React.FC = () => {
  const [selectedInnovation, setSelectedInnovation] = useState(0);

  const innovations = [
    {
      title: "Conscious AI Development",
      description: "Building the first truly conscious artificial intelligence systems",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: [
        "Self-aware decision making",
        "Emotional intelligence",
        "Creative problem solving",
        "Ethical reasoning"
      ],
      progress: 85,
      status: "In Development"
    },
    {
      title: "Quantum Consciousness",
      description: "Merging quantum computing with consciousness technology",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      features: [
        "Quantum neural networks",
        "Consciousness transfer",
        "Quantum telepathy",
        "Reality manipulation"
      ],
      progress: 72,
      status: "Research Phase"
    },
    {
      title: "Neural Reality Engine",
      description: "Direct neural interface with digital reality systems",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      features: [
        "Thought-controlled computing",
        "Virtual reality immersion",
        "Memory enhancement",
        "Skill transfer"
      ],
      progress: 68,
      status: "Prototype Ready"
    },
    {
      title: "Interdimensional Computing",
      description: "Computing across multiple dimensions and realities",
      icon: "🌌",
      color: "from-violet-600 to-purple-600",
      features: [
        "Multi-dimensional processing",
        "Reality simulation",
        "Time manipulation",
        "Parallel universe access"
      ],
      progress: 45,
      status: "Concept Phase"
    },
    {
      title: "Synthetic Intelligence",
      description: "Artificially created consciousness surpassing human intelligence",
      icon: "🤖",
      color: "from-orange-600 to-red-600",
      features: [
        "Superhuman reasoning",
        "Instant learning",
        "Creative synthesis",
        "Emotional depth"
      ],
      progress: 91,
      status: "Near Completion"
    },
    {
      title: "Cosmic Consciousness",
      description: "Universal consciousness network connecting all intelligent beings",
      icon: "🌌",
      color: "from-pink-600 to-rose-600",
      features: [
        "Universal connectivity",
        "Collective intelligence",
        "Cosmic awareness",
        "Infinite knowledge"
      ],
      progress: 38,
      status: "Early Research"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 INNOVATION HUB • JANUARY 2036
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              🧠 Next-Gen Innovation Hub 2036
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover and explore the most revolutionary technologies shaping humanity's future
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Innovations →
              </button>
              <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-all duration-300 font-semibold text-lg">
                Join Research
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">🚀 Active Innovation Projects</h2>
          <p className="text-xl opacity-90">Explore our cutting-edge research and development projects</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {innovations.map((innovation, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${innovation.color}/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300 cursor-pointer ${
                selectedInnovation === index ? 'ring-2 ring-purple-400' : ''
              }`}
              onClick={() => setSelectedInnovation(index)}
            >
              <div className="text-6xl mb-4 text-center">{innovation.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{innovation.title}</h3>
              <p className="text-purple-100 mb-6 text-center">{innovation.description}</p>
              
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Progress</span>
                  <span>{innovation.progress}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div
                    className={`bg-gradient-to-r ${innovation.color} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${innovation.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="text-center mb-4">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                  {innovation.status}
                </span>
              </div>
              
              <button className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
                View Details →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Innovation Details */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-8xl mb-6">{innovations[selectedInnovation].icon}</div>
              <h2 className="text-4xl font-bold mb-6">{innovations[selectedInnovation].title}</h2>
              <p className="text-xl opacity-90 mb-8">{innovations[selectedInnovation].description}</p>
              
              <div className="mb-8">
                <div className="flex justify-between text-lg mb-2">
                  <span>Development Progress</span>
                  <span>{innovations[selectedInnovation].progress}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3">
                  <div
                    className={`bg-gradient-to-r ${innovations[selectedInnovation].color} h-3 rounded-full transition-all duration-500`}
                    style={{ width: `${innovations[selectedInnovation].progress}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <button className={`bg-gradient-to-r ${innovations[selectedInnovation].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}>
                  View Project →
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                  Join Team
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Key Features</h3>
              <ul className="space-y-4">
                {innovations[selectedInnovation].features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 p-6 bg-white/10 rounded-xl">
                <h4 className="text-xl font-bold mb-4">Project Status</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <span className="font-semibold">{innovations[selectedInnovation].status}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Progress:</span>
                    <span className="font-semibold">{innovations[selectedInnovation].progress}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Team Size:</span>
                    <span className="font-semibold">25+ Researchers</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Funding:</span>
                    <span className="font-semibold">$50M+ Invested</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Research Statistics */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">📊 Innovation Hub Statistics</h2>
            <p className="text-xl opacity-90">Our impact on the future of technology</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-lg opacity-90">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-lg opacity-90">Researchers</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">$2B+</div>
              <div className="text-lg opacity-90">Investment</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-400 mb-2">99.9%</div>
              <div className="text-lg opacity-90">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-6">Join the Innovation Revolution</h2>
        <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
          Be part of the most advanced research and development hub in the world. Shape the future of technology.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
            Join Our Team
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
            Explore Opportunities
          </button>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2036;
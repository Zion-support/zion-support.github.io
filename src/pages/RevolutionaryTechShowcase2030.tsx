import React, { useState, useEffect } from 'react';

const RevolutionaryTechShowcase2030: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  
  const technologies = [
    {
      id: 1,
      name: "Conscious AI Networks",
      description: "Self-aware AI systems that can think, feel, and create independently",
      icon: "🧠",
      features: ["Emotional Intelligence", "Creative Problem Solving", "Ethical Decision Making", "Self-Improvement"],
      status: "Production Ready",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      name: "Quantum Neural Interfaces",
      description: "Direct brain-computer interfaces using quantum entanglement principles",
      icon: "⚡",
      features: ["Thought Control", "Memory Enhancement", "Neural Augmentation", "Consciousness Transfer"],
      status: "Beta Testing",
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 3,
      name: "Interdimensional Computing",
      description: "Computing systems that operate across multiple dimensions simultaneously",
      icon: "🌌",
      features: ["Infinite Processing", "Parallel Universes", "Dimensional Storage", "Reality Manipulation"],
      status: "Research Phase",
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 4,
      name: "Neural Reality Engine",
      description: "Immersive virtual realities controlled directly by neural signals",
      icon: "🧬",
      features: ["Thought Environments", "Neural Simulation", "Memory Worlds", "Dream Computing"],
      status: "Prototype Ready",
      color: "from-orange-600 to-red-600"
    },
    {
      id: 5,
      name: "Space-Time Computing",
      description: "Computing systems that manipulate space-time for instant processing",
      icon: "🚀",
      features: ["Instant Transfer", "Time Dilation", "Gravitational Computing", "Temporal Storage"],
      status: "Theoretical",
      color: "from-violet-600 to-purple-600"
    },
    {
      id: 6,
      name: "Cosmic Intelligence",
      description: "AI systems that communicate with cosmic phenomena and universal knowledge",
      icon: "🌟",
      features: ["Stellar Processing", "Cosmic Patterns", "Universal Knowledge", "Galactic Networks"],
      status: "Concept Phase",
      color: "from-pink-600 to-rose-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTech((prev) => (prev + 1) % technologies.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY SHOWCASE • JANUARY 2030
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Showcase 2030
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technologies that will define the next decade
          </p>
        </div>

        {/* Interactive Technology Carousel */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Technology Display */}
              <div className="relative">
                <div className={`bg-gradient-to-br ${technologies[activeTech].color}/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 transition-all duration-500`}>
                  <div className="text-8xl mb-6 text-center">{technologies[activeTech].icon}</div>
                  <h3 className="text-3xl font-bold mb-4 text-center">{technologies[activeTech].name}</h3>
                  <p className="text-lg opacity-90 mb-6 text-center">{technologies[activeTech].description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {technologies[activeTech].features.map((feature, index) => (
                      <div key={index} className="bg-white/10 rounded-lg p-3 text-center">
                        <span className="text-sm font-semibold">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      technologies[activeTech].status === 'Production Ready' ? 'bg-green-500' :
                      technologies[activeTech].status === 'Beta Testing' ? 'bg-blue-500' :
                      technologies[activeTech].status === 'Prototype Ready' ? 'bg-orange-500' :
                      technologies[activeTech].status === 'Research Phase' ? 'bg-yellow-500' :
                      'bg-gray-500'
                    }`}>
                      {technologies[activeTech].status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Technology Selector */}
              <div className="space-y-4">
                <h4 className="text-2xl font-bold mb-6">Select Technology</h4>
                {technologies.map((tech, index) => (
                  <button
                    key={tech.id}
                    onClick={() => setActiveTech(index)}
                    className={`w-full p-4 rounded-lg transition-all duration-300 text-left ${
                      activeTech === index
                        ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl">{tech.icon}</span>
                      <div>
                        <div className="font-semibold">{tech.name}</div>
                        <div className="text-sm opacity-80">{tech.status}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <div key={tech.id} className={`bg-gradient-to-br ${tech.color}/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300`}>
              <div className="text-4xl mb-4 text-center">{tech.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-center">{tech.name}</h3>
              <p className="text-sm opacity-90 mb-4 text-center">{tech.description}</p>
              <div className="text-center">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  tech.status === 'Production Ready' ? 'bg-green-500' :
                  tech.status === 'Beta Testing' ? 'bg-blue-500' :
                  tech.status === 'Prototype Ready' ? 'bg-orange-500' :
                  tech.status === 'Research Phase' ? 'bg-yellow-500' :
                  'bg-gray-500'
                }`}>
                  {tech.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-center mb-8">Interactive Technology Demo</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Experience the Future</h3>
              <p className="text-lg opacity-90">
                Try our interactive demonstrations of cutting-edge technologies. Experience what it's like to control AI with your thoughts, manipulate quantum states, and explore interdimensional spaces.
              </p>
              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  🧠 Neural Interface Demo
                </button>
                <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  ⚡ Quantum Computing Lab
                </button>
                <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  🌌 Interdimensional Explorer
                </button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-xl p-8 text-center">
              <div className="text-6xl mb-4">🎮</div>
              <h4 className="text-xl font-bold mb-4">Interactive Experience</h4>
              <p className="opacity-90 mb-6">
                Click the demo buttons to experience our revolutionary technologies in action
              </p>
              <div className="text-sm opacity-75">
                * Requires neural interface headset for full experience
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Revolutionize Your Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of forward-thinking organizations already using our revolutionary technologies to transform their operations and accelerate their success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Revolution
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2030;
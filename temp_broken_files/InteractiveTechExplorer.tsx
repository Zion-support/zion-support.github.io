import React, { useState, useEffect } from 'react';

const InteractiveTechExplorer: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState(0);
  const [isExploring, setIsExploring] = useState(false);
  const [explorationProgress, setExplorationProgress] = useState(0);

  const technologies = [
    {
      name: "Conscious AI",
      description: "AI systems with true consciousness and self-awareness",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: ["Self-learning", "Emotional intelligence", "Creative thinking", "Ethical reasoning"],
      applications: ["Healthcare", "Education", "Creative Arts", "Therapy"],
      impact: 95
    },
    {
      name: "Quantum Reality",
      description: "Quantum computers that can simulate entire realities",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      features: ["Reality simulation", "Parallel processing", "Instant computation", "Universe modeling"],
      applications: ["Scientific Research", "Drug Discovery", "Climate Modeling", "Space Exploration"],
      impact: 98
    },
    {
      name: "Neural Interface",
      description: "Direct brain-computer interfaces for full sensory experience",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      features: ["Full immersion", "Thought control", "Memory enhancement", "Telepathy"],
      applications: ["Medical Rehabilitation", "Gaming", "Education", "Communication"],
      impact: 92
    },
    {
      name: "Omniversal AI",
      description: "AI that operates across multiple dimensions and realities",
      icon: "🌌",
      color: "from-rose-600 to-pink-600",
      features: ["Multi-dimensional", "Reality manipulation", "Infinite processing", "Universal access"],
      applications: ["Research", "Entertainment", "Problem Solving", "Exploration"],
      impact: 99
    }
  ];

  useEffect(() => {
    if (isExploring) {
      const interval = setInterval(() => {
        setExplorationProgress(prev => {
          if (prev >= 100) {
            setIsExploring(false);
            return 100;
          }
        return prev + 2;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isExploring]);

  const startExploration = () => {
    setIsExploring(true);
    setExplorationProgress(0);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECH EXPLORER • 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Explorer
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Explore revolutionary technologies through interactive demonstrations and real-time simulations
          </p>
        </div>

        {/* Technology Selection */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {technologies.map((tech, index) => (
            <button
              key={index}
              onClick={() => setSelectedTech(index)}
              className={`bg-gradient-to-br ${tech.color}/30 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 ${
                selectedTech === index ? 'ring-2 ring-white/50 scale-105' : ''
              }`}
            >
              <div className="text-4xl mb-4 text-center">{tech.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-center">{tech.name}</h3>
              <p className="text-sm opacity-90 text-center">{tech.description}</p>
              <div className="mt-4 text-center">
                <div className="text-2xl font-bold text-green-400">{tech.impact}%</div>
                <div className="text-xs opacity-90">Impact Score</div>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Technology Display */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20 mb-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technology Info */}
            <div>
              <div className="text-8xl mb-6 text-center lg:text-left">{technologies[selectedTech].icon}</div>
              <h3 className="text-4xl font-bold mb-4">{technologies[selectedTech].name}</h3>
              <p className="text-xl opacity-90 mb-8">{technologies[selectedTech].description}</p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-2xl font-bold mb-4">Key Features</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {technologies[selectedTech].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <span className="text-2xl">✨</span>
                        <span className="text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-2xl font-bold mb-4">Applications</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {technologies[selectedTech].applications.map((app, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <span className="text-2xl">🎯</span>
                        <span className="text-lg">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Demo */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white/20 to-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🎮</div>
                  <h4 className="text-2xl font-bold mb-2">Interactive Demo</h4>
                  <p className="opacity-90">Experience this technology in action</p>
                </div>
                
                {isExploring ? (
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400 mb-2">{explorationProgress}%</div>
                      <div className="text-sm opacity-90">Exploration Progress</div>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-4">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-4 rounded-full transition-all duration-300"
                        style={{ width: `${explorationProgress}%` }}
                      ></div>
                    </div>
                    <div className="text-center text-sm opacity-90">
                      {explorationProgress < 50 ? "Initializing technology..." : 
                       explorationProgress < 80 ? "Loading advanced features..." : 
                       "Finalizing experience..."}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-400 mb-2">Ready</div>
                      <div className="text-sm opacity-90">Click to start exploration</div>
                    </div>
                    <button
                      onClick={startExploration}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
                    >
                      Start Interactive Demo
                    </button>
                    <div className="text-center text-sm opacity-90">
                      Experience {technologies[selectedTech].name} through interactive simulation
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Technology Impact Visualization */}
        <div className="bg-gradient-to-r from-purple-800/50 to-pink-800/50 backdrop-blur-sm rounded-2xl p-12 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">📊 Technology Impact Visualization</h3>
            <p className="text-lg opacity-90">Real-time impact metrics for all technologies</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h4 className="text-xl font-bold mb-2">{tech.name}</h4>
                <div className="text-3xl font-bold text-green-400 mb-2">{tech.impact}%</div>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${tech.impact}%` }}
                  ></div>
                </div>
                <div className="text-sm opacity-90">Impact Score</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Explore the Future?</h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Dive deeper into these revolutionary technologies and discover how they can transform your world
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="/pages/UltimateTechShowcase2026"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Explore All Technologies
            </a>
            <a 
              href="/pages/RevolutionaryTechBreakthrough2026"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechExplorer;
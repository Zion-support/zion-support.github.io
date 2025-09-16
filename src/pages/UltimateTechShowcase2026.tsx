import React, { useState, useEffect } from 'react';

const UltimateTechShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      name: "Conscious AI",
      icon: "🧠",
      description: "AI systems with true consciousness and self-awareness",
      features: ["Self-learning", "Emotional intelligence", "Creative thinking", "Ethical reasoning"],
      color: "from-purple-600 to-pink-600"
    },
    {
      name: "Quantum Reality",
      icon: "⚡",
      description: "Quantum computers that can simulate entire realities",
      features: ["Reality simulation", "Parallel processing", "Instant computation", "Universe modeling"],
      color: "from-cyan-600 to-blue-600"
    },
    {
      name: "Neural Interface",
      icon: "🧬",
      description: "Direct brain-computer interfaces for full sensory experience",
      features: ["Full immersion", "Thought control", "Memory enhancement", "Telepathy"],
      color: "from-emerald-600 to-teal-600"
    },
    {
      name: "Omniversal AI",
      icon: "🌌",
      description: "AI that operates across multiple dimensions and realities",
      features: ["Multi-dimensional", "Reality manipulation", "Infinite processing", "Universal access"],
      color: "from-rose-600 to-pink-600"
    },
    {
      name: "Predictive Engine",
      icon: "🔮",
      description: "AI that can predict the future with perfect accuracy",
      features: ["Future prediction", "Scenario simulation", "Risk analysis", "Strategic planning"],
      color: "from-violet-600 to-purple-600"
    },
    {
      name: "Space-Time Tech",
      icon: "🚀",
      description: "Technologies that manipulate space and time",
      features: ["Instant travel", "Time control", "Wormhole creation", "Temporal communication"],
      color: "from-orange-600 to-red-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTab((prev) => (prev + 1) % technologies.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [technologies.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 ULTIMATE SHOWCASE • JANUARY 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Ultimate Tech Showcase 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience the most advanced technologies that are revolutionizing every aspect of human existence
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Technology Tabs */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">🚀 Interactive Technology Explorer</h2>
          <p className="text-xl opacity-90">Click on any technology to explore its capabilities</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {technologies.map((tech, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <span className="text-2xl mr-2">{tech.icon}</span>
              {tech.name}
            </button>
          ))}
        </div>

        {/* Active Technology Display */}
        <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className={`bg-gradient-to-br ${technologies[activeTab].color}/30 backdrop-blur-sm rounded-2xl p-12 border border-white/20`}>
            <div className="text-center mb-8">
              <div className="text-8xl mb-4 animate-bounce">{technologies[activeTab].icon}</div>
              <h3 className="text-4xl font-bold mb-4">{technologies[activeTab].name}</h3>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">{technologies[activeTab].description}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-bold mb-4">Key Features</h4>
                <ul className="space-y-3">
                  {technologies[activeTab].features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <span className="text-2xl">✨</span>
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-2xl font-bold mb-4">Revolutionary Impact</h4>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                    <div className="text-lg">Accuracy Rate</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-3xl font-bold text-blue-400 mb-2">∞</div>
                    <div className="text-lg">Computational Power</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-3xl font-bold text-purple-400 mb-2">0ms</div>
                    <div className="text-lg">Response Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Revolutionary Statistics */}
      <div className="bg-gradient-to-r from-purple-800/50 to-pink-800/50 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">📊 Revolutionary Statistics</h2>
            <p className="text-xl opacity-90">The numbers that prove our revolutionary impact</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white/10 rounded-xl p-6">
              <div className="text-5xl font-bold text-purple-400 mb-2">1M+</div>
              <div className="text-lg opacity-90">Technologies Deployed</div>
            </div>
            <div className="text-center bg-white/10 rounded-xl p-6">
              <div className="text-5xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-lg opacity-90">Success Rate</div>
            </div>
            <div className="text-center bg-white/10 rounded-xl p-6">
              <div className="text-5xl font-bold text-emerald-400 mb-2">24/7</div>
              <div className="text-lg opacity-90">Continuous Operation</div>
            </div>
            <div className="text-center bg-white/10 rounded-xl p-6">
              <div className="text-5xl font-bold text-rose-400 mb-2">∞</div>
              <div className="text-lg opacity-90">Possibilities</div>
            </div>
          </div>
        </div>
      </div>

      {/* Future Vision Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">🔮 Future Vision</h2>
          <p className="text-xl opacity-90">Where these technologies will take us</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
            <div className="text-6xl mb-4 text-center">🌍</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Global Transformation</h3>
            <p className="text-purple-100 text-center">
              Every aspect of human life will be enhanced by these revolutionary technologies
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
            <div className="text-6xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Exploration</h3>
            <p className="text-cyan-100 text-center">
              Instantaneous travel to any point in the universe using space-time manipulation
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Human Evolution</h3>
            <p className="text-emerald-100 text-center">
              Direct neural interfaces will enhance human capabilities beyond imagination
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Experience the Ultimate Future?</h2>
        <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
          Join us in exploring these revolutionary technologies that are reshaping reality itself
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
            Start Your Journey
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold text-lg">
            Schedule Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechShowcase2026;
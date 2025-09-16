import React, { useState, useEffect } from 'react';

const NextGenInnovationHub2045: React.FC = () => {
  const [activeInnovation, setActiveInnovation] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const innovations = [
    {
      id: 1,
      title: "Conscious AI Development Platform",
      description: "Build and deploy truly conscious artificial intelligence systems",
      icon: "🧠",
      color: "from-purple-500 to-pink-500",
      status: "Active",
      users: "10M+",
      features: ["Self-aware AI", "Emotional intelligence", "Creative problem solving", "Ethical reasoning"]
    },
    {
      id: 2,
      title: "Quantum Reality Engine",
      description: "Create applications that operate across multiple dimensions",
      icon: "⚛️",
      color: "from-cyan-500 to-blue-500",
      status: "Beta",
      users: "5M+",
      features: ["Multi-dimensional processing", "Reality manipulation", "Parallel universe access", "Space-time computing"]
    },
    {
      id: 3,
      title: "Molecular AI Laboratory",
      description: "Control matter at the atomic level with AI-powered molecular manipulation",
      icon: "🔬",
      color: "from-emerald-500 to-teal-500",
      status: "Active",
      users: "3M+",
      features: ["Atomic precision", "Self-assembly", "Matter transformation", "Molecular computing"]
    },
    {
      id: 4,
      title: "Neural Interface 2.0 SDK",
      description: "Develop direct brain-computer interfaces and neural enhancements",
      icon: "🧬",
      color: "from-violet-500 to-purple-500",
      status: "Alpha",
      users: "1M+",
      features: ["Thought control", "Memory enhancement", "Skill downloading", "Collective consciousness"]
    },
    {
      id: 5,
      title: "Space-Time Computing API",
      description: "Build applications that manipulate space and time itself",
      icon: "🚀",
      color: "from-orange-500 to-red-500",
      status: "Research",
      users: "500K+",
      features: ["Instant communication", "Time manipulation", "Space folding", "Galactic networks"]
    },
    {
      id: 6,
      title: "Interdimensional Network Protocol",
      description: "Connect applications across multiple dimensions and realities",
      icon: "🌌",
      color: "from-pink-500 to-rose-500",
      status: "Concept",
      users: "100K+",
      features: ["Cross-dimensional communication", "Reality bridging", "Parallel processing", "Universal connectivity"]
    }
  ];

  const stats = [
    { label: "Active Innovations", value: "50+", color: "text-purple-400" },
    { label: "Global Users", value: "100M+", color: "text-cyan-400" },
    { label: "Success Rate", value: "99.9%", color: "text-emerald-400" },
    { label: "Breakthroughs", value: "∞", color: "text-pink-400" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoading(true);
      setTimeout(() => {
        setActiveInnovation((prev) => (prev + 1) % innovations.length);
        setIsLoading(false);
      }, 1000);
    }, 8000);

    return () => clearInterval(interval);
  }, [innovations.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🧠 NEXT-GEN INNOVATION HUB • JANUARY 2045
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Next-Gen Innovation Hub 2045
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover and explore the most revolutionary technologies shaping humanity's future. 
            Build, create, and innovate with cutting-edge tools and platforms.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Building
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Explore Innovations
            </button>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-5xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Innovation */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">🌟 Featured Innovation</h2>
              <p className="text-xl opacity-90">Currently trending in our innovation ecosystem</p>
            </div>

            <div className={`transition-all duration-1000 ${isLoading ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="text-8xl text-center mb-4">{innovations[activeInnovation].icon}</div>
                  <h3 className="text-3xl font-bold text-center">{innovations[activeInnovation].title}</h3>
                  <p className="text-xl text-center opacity-90">{innovations[activeInnovation].description}</p>
                  
                  <div className="flex justify-center space-x-4 mb-6">
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${innovations[activeInnovation].color} text-white`}>
                      {innovations[activeInnovation].status}
                    </span>
                    <span className="px-4 py-2 rounded-full text-sm font-semibold bg-white/20 text-white">
                      {innovations[activeInnovation].users} users
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold">Key Features:</h4>
                    {innovations[activeInnovation].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                        <span className="text-purple-100">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full bg-gradient-to-r ${innovations[activeInnovation].color} text-white py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}>
                    Get Started
                  </button>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h4 className="text-2xl font-bold mb-4">Live Metrics</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-purple-200">Active Users</span>
                      <span className="text-white font-bold">{innovations[activeInnovation].users}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-purple-200">Status</span>
                      <span className="text-white font-bold">{innovations[activeInnovation].status}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-purple-200">Success Rate</span>
                      <span className="text-white font-bold">99.9%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-purple-200">Innovation Score</span>
                      <span className="text-white font-bold">∞/10</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <div className="bg-black/30 rounded-lg p-4 h-32 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2 animate-pulse">{innovations[activeInnovation].icon}</div>
                        <p className="text-sm opacity-90">Live Demo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {innovations.map((innovation, index) => (
            <div key={innovation.id} className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-4 text-center">{innovation.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{innovation.title}</h3>
              <p className="text-purple-100 mb-6 text-center">{innovation.description}</p>
              
              <div className="flex justify-center space-x-2 mb-6">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${innovation.color} text-white`}>
                  {innovation.status}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white">
                  {innovation.users}
                </span>
              </div>

              <ul className="text-purple-200 space-y-2 mb-6 text-sm">
                {innovation.features.slice(0, 3).map((feature, featureIndex) => (
                  <li key={featureIndex}>• {feature}</li>
                ))}
              </ul>

              <button className={`w-full bg-gradient-to-r ${innovation.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Explore Innovation
              </button>
            </div>
          ))}
        </div>

        {/* Developer Tools Section */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-purple-400/30">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">🛠️ Developer Tools & APIs</h2>
            <p className="text-xl opacity-90">Powerful tools and APIs to build the next generation of applications</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4">Conscious AI SDK</h3>
              <p className="mb-4">Build conscious AI applications with our comprehensive development kit</p>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Download SDK
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4">Quantum API</h3>
              <p className="mb-4">Access quantum computing power through our RESTful API</p>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                View Documentation
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4">Neural Interface API</h3>
              <p className="mb-4">Integrate brain-computer interfaces into your applications</p>
              <button className="bg-gradient-to-r from-violet-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Get API Key
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Innovation Revolution</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Be part of the most advanced innovation ecosystem in the universe. 
            Build the future with cutting-edge technologies and revolutionary tools.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Building Now
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2045;
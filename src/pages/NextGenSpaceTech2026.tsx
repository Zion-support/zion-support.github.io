import React, { useState, useEffect } from 'react';

const NextGenSpaceTech2026: React.FC = () => {
  const [currentTech, setCurrentTech] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const spaceTechnologies = [
    {
      title: "Warp Drive Technology",
      description: "Revolutionary faster-than-light travel using space-time manipulation, enabling instant travel across the galaxy.",
      icon: "🌌",
      capabilities: ["FTL Travel", "Space-Time Warping", "Instant Transportation", "Galactic Exploration"],
      color: "from-blue-500 to-indigo-500",
      status: "Operational"
    },
    {
      title: "Dyson Sphere Construction",
      description: "Massive megastructures that harness the entire energy output of stars, providing unlimited power for civilizations.",
      icon: "☀️",
      capabilities: ["Star Energy Harvesting", "Megastructure Engineering", "Unlimited Power", "Civilization Scaling"],
      color: "from-yellow-500 to-orange-500",
      status: "In Development"
    },
    {
      title: "Quantum Teleportation",
      description: "Instant matter and energy transfer across unlimited distances using quantum entanglement principles.",
      icon: "⚡",
      capabilities: ["Instant Matter Transfer", "Quantum Entanglement", "Unlimited Range", "Energy Conservation"],
      color: "from-purple-500 to-pink-500",
      status: "Testing Phase"
    },
    {
      title: "Stellar Engineering",
      description: "Direct manipulation and control of stars themselves, creating artificial solar systems and controlling stellar evolution.",
      icon: "⭐",
      capabilities: ["Star Manipulation", "Solar System Creation", "Stellar Evolution Control", "Artificial Worlds"],
      color: "from-red-500 to-rose-500",
      status: "Research Phase"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % spaceTechnologies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [spaceTechnologies.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Starfield Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-purple-900/30 to-indigo-900/50"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60 animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-full text-lg font-bold mb-8 animate-pulse border border-white/20">
            🚀 NEXT-GEN SPACE TECH 2026 • GALACTIC BREAKTHROUGH
          </div>
          <h1 className="text-8xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent leading-tight">
            Next-Generation
            <br />
            <span className="text-6xl">Space Technology</span>
          </h1>
          <p className="text-2xl max-w-4xl mx-auto opacity-90 leading-relaxed">
            Explore the most advanced space technologies ever conceived. From warp drives to Dyson spheres, 
            witness humanity's journey to become a galactic civilization.
          </p>
        </div>

        {/* Interactive Technology Showcase */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Technology Display */}
            <div className="relative">
              <div className={`bg-gradient-to-br ${spaceTechnologies[currentTech].color}/20 backdrop-blur-sm rounded-3xl p-12 border border-white/20 transition-all duration-700 transform hover:scale-105`}>
                <div className="text-center mb-8">
                  <div className="text-8xl mb-6 animate-bounce">{spaceTechnologies[currentTech].icon}</div>
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <h2 className="text-4xl font-bold">{spaceTechnologies[currentTech].title}</h2>
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      spaceTechnologies[currentTech].status === 'Operational' ? 'bg-green-500/20 text-green-300' :
                      spaceTechnologies[currentTech].status === 'In Development' ? 'bg-yellow-500/20 text-yellow-300' :
                      spaceTechnologies[currentTech].status === 'Testing Phase' ? 'bg-blue-500/20 text-blue-300' :
                      'bg-purple-500/20 text-purple-300'
                    }`}>
                      {spaceTechnologies[currentTech].status}
                    </span>
                  </div>
                  <p className="text-xl opacity-90 leading-relaxed">
                    {spaceTechnologies[currentTech].description}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {spaceTechnologies[currentTech].capabilities.map((capability, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300">
                      <span className="text-sm font-semibold">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technology Navigation */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold mb-8">Revolutionary Space Technologies</h3>
              {spaceTechnologies.map((tech, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTech(index)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                    currentTech === index
                      ? `bg-gradient-to-r ${tech.color}/20 border-white/40 scale-105`
                      : 'bg-white/5 border-white/20 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl">{tech.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-bold">{tech.title}</h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          tech.status === 'Operational' ? 'bg-green-500/20 text-green-300' :
                          tech.status === 'In Development' ? 'bg-yellow-500/20 text-yellow-300' :
                          tech.status === 'Testing Phase' ? 'bg-blue-500/20 text-blue-300' :
                          'bg-purple-500/20 text-purple-300'
                        }`}>
                          {tech.status}
                        </span>
                      </div>
                      <p className="text-sm opacity-80 line-clamp-2">{tech.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Space Mission Capabilities */}
        <div className="bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/20 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Galactic Mission Capabilities
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Revolutionary technologies enabling unprecedented space exploration and colonization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-3">Planet Terraforming</h3>
              <p className="text-sm opacity-90">
                Transform any planet into a habitable world within days using advanced atmospheric engineering
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🛸</div>
              <h3 className="text-xl font-bold mb-3">Interstellar Travel</h3>
              <p className="text-sm opacity-90">
                Travel between star systems in hours using revolutionary warp drive technology
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold mb-3">Space Construction</h3>
              <p className="text-sm opacity-90">
                Build massive space stations and megastructures using autonomous construction drones
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="text-xl font-bold mb-3">Exoplanet Research</h3>
              <p className="text-sm opacity-90">
                Discover and analyze habitable worlds across the galaxy using advanced scanning technology
              </p>
            </div>
          </div>
        </div>

        {/* Future Vision Section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            The Future of Humanity in Space
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-6xl mb-4">🌌</div>
              <h3 className="text-2xl font-bold mb-4">Galactic Empire</h3>
              <p className="opacity-90">
                Human civilization spreading across the galaxy, establishing colonies on thousands of worlds
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-6xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-4">AI-Human Partnership</h3>
              <p className="opacity-90">
                Advanced AI systems working alongside humans to explore and colonize the universe
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4">Energy Abundance</h3>
              <p className="opacity-90">
                Unlimited clean energy from stellar engineering powering advanced civilizations
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12">
            <h2 className="text-4xl font-bold mb-6">Ready to Explore the Galaxy?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join the next generation of space exploration and colonization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors">
                Start Your Space Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-indigo-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenSpaceTech2026;
import React from 'react';

const SpaceTechInnovation2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 SPACE TECH INNOVATION • 2026
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Space Technology Innovation 2026
          </h1>
          <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
            Explore the cutting-edge space technologies that are revolutionizing 
            space exploration, satellite communications, and interplanetary travel.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-800/50 to-indigo-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
            <div className="text-4xl mb-4">🛰️</div>
            <h3 className="text-2xl font-bold mb-4">Satellite Technology</h3>
            <p className="text-gray-300 mb-4">
              Advanced satellite systems for global communication and Earth observation.
            </p>
            <a href="#" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Learn More →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-800/50 to-purple-800/50 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/30">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-4">Rocket Propulsion</h3>
            <p className="text-gray-300 mb-4">
              Next-generation propulsion systems for efficient space travel.
            </p>
            <a href="#" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Learn More →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
            <div className="text-4xl mb-4">🌌</div>
            <h3 className="text-2xl font-bold mb-4">Space Exploration</h3>
            <p className="text-gray-300 mb-4">
              Revolutionary technologies for deep space exploration and colonization.
            </p>
            <a href="#" className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Learn More →
            </a>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-4xl font-bold mb-8">Mission Control Dashboard</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-black/20 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-400">Active Missions</h3>
                <div className="space-y-2">
                  <div className="text-green-400 font-mono text-sm">Mars Rover: Online</div>
                  <div className="text-green-400 font-mono text-sm">ISS: Operational</div>
                  <div className="text-yellow-400 font-mono text-sm">Moon Base: In Progress</div>
                </div>
              </div>
              
              <div className="bg-black/20 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-purple-400">Satellite Network</h3>
                <div className="space-y-2">
                  <div className="text-blue-400 font-mono text-sm">GPS: 32/32 Active</div>
                  <div className="text-blue-400 font-mono text-sm">Starlink: 4,200+ Online</div>
                  <div className="text-blue-400 font-mono text-sm">Weather: 15/15 Operational</div>
                </div>
              </div>
              
              <div className="bg-black/20 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-pink-400">Launch Schedule</h3>
                <div className="space-y-2">
                  <div className="text-cyan-400 font-mono text-sm">Next: Falcon Heavy</div>
                  <div className="text-cyan-400 font-mono text-sm">Date: 2026-03-15</div>
                  <div className="text-cyan-400 font-mono text-sm">Payload: Mars Mission</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceTechInnovation2026;
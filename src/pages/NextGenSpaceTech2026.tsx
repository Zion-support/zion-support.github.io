import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const NextGenSpaceTech2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 SPACE REVOLUTION • 2026
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            Next-Gen Space Technology 2026
          </h1>
          <p className="text-2xl text-purple-200 max-w-4xl mx-auto mb-8">
            Pioneering the future of space exploration with AI-powered spacecraft, quantum communication, and interplanetary infrastructure
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              🚀 Explore Space Future →
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
              🌌 Mission Updates
            </button>
          </div>
        </div>

        {/* Revolutionary Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
            <div className="text-6xl mb-4 text-center">🛸</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Autonomous Spacecraft</h3>
            <p className="text-purple-200 text-center">
              AI-powered spacecraft that can navigate, repair, and make decisions independently during deep space missions
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
            <div className="text-6xl mb-4 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Quantum Communication</h3>
            <p className="text-cyan-200 text-center">
              Instantaneous communication across vast distances using quantum entanglement principles
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
            <div className="text-6xl mb-4 text-center">🏗️</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Space Manufacturing</h3>
            <p className="text-emerald-200 text-center">
              Zero-gravity manufacturing facilities producing advanced materials impossible to create on Earth
            </p>
          </div>
        </div>

        {/* Technology Showcase */}
        <div className="bg-gradient-to-r from-indigo-800/50 to-purple-800/50 rounded-2xl p-12 mb-16 backdrop-blur-sm border border-indigo-400/30">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">🌟 Revolutionary Space Capabilities</h2>
            <p className="text-xl text-indigo-200">Discover how next-gen space tech is expanding human reach</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="text-xl font-semibold text-white mb-3">🛸 Self-Healing Spacecraft</h4>
                <p className="text-gray-300">
                  Advanced materials that can automatically repair damage from micrometeorites and radiation exposure.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="text-xl font-semibold text-white mb-3">🌌 Interplanetary Internet</h4>
                <p className="text-gray-300">
                  Quantum communication network connecting Earth, Mars, and other celestial bodies with instant data transfer.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="text-xl font-semibold text-white mb-3">🔋 Fusion Power Systems</h4>
                <p className="text-gray-300">
                  Compact fusion reactors providing unlimited power for long-duration space missions and colonization.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="text-xl font-semibold text-white mb-3">🌍 Terraforming Technology</h4>
                <p className="text-gray-300">
                  Advanced atmospheric processors and ecosystem engineering for making planets habitable.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="text-xl font-semibold text-white mb-3">🚀 Advanced Propulsion</h4>
                <p className="text-gray-300">
                  Ion drives, plasma engines, and theoretical warp drives for faster-than-light travel.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="text-xl font-semibold text-white mb-3">🧬 Space Biology</h4>
                <p className="text-gray-300">
                  Genetic engineering for creating organisms that can thrive in space environments.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Applications Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">🎯 Space Applications</h2>
            <p className="text-xl text-gray-300">Transforming space exploration and colonization</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3 text-center">🌍</div>
              <h3 className="text-lg font-bold mb-2 text-center text-white">Mars Colonization</h3>
              <p className="text-purple-200 text-sm text-center">
                Self-sustaining habitats and life support systems for permanent human settlement
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3 text-center">🛰️</div>
              <h3 className="text-lg font-bold mb-2 text-center text-white">Satellite Networks</h3>
              <p className="text-cyan-200 text-sm text-center">
                Global internet coverage and Earth observation with advanced satellite constellations
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3 text-center">⛏️</div>
              <h3 className="text-lg font-bold mb-2 text-center text-white">Asteroid Mining</h3>
              <p className="text-emerald-200 text-sm text-center">
                Extracting rare minerals and resources from asteroids for Earth and space use
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3 text-center">🔬</div>
              <h3 className="text-lg font-bold mb-2 text-center text-white">Space Research</h3>
              <p className="text-orange-200 text-sm text-center">
                Zero-gravity laboratories for advanced physics and biological research
              </p>
            </div>
          </div>
        </div>

        {/* Mission Timeline */}
        <div className="bg-gradient-to-r from-purple-800/30 to-indigo-800/30 rounded-2xl p-12 mb-16 backdrop-blur-sm border border-purple-400/30">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">🚀 Mission Timeline 2026-2030</h2>
            <p className="text-xl text-purple-200">Our roadmap to the stars</p>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                2026
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">Mars Sample Return Mission</h3>
                <p className="text-gray-300">Launch of autonomous spacecraft to collect and return samples from Mars surface.</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                2027
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">Lunar Manufacturing Facility</h3>
                <p className="text-gray-300">Establishment of the first space-based manufacturing facility on the Moon.</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                2028
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">Quantum Communication Network</h3>
                <p className="text-gray-300">Deployment of quantum communication satellites for instant Earth-Mars communication.</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                2029
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">Asteroid Mining Operations</h3>
                <p className="text-gray-300">First commercial asteroid mining mission to extract rare earth minerals.</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                2030
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">Mars Colony Foundation</h3>
                <p className="text-gray-300">Establishment of the first permanent human settlement on Mars.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600/30 to-indigo-600/30 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Reach for the Stars?</h2>
            <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
              Join us in pioneering the next frontier of space exploration and be part of humanity's greatest adventure.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                🚀 Join the Mission
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
                🌌 Mission Updates
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NextGenSpaceTech2026;
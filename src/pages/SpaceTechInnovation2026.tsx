import React from 'react';
import { Link } from 'react-router-dom';

const SpaceTechInnovation2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 SPACE TECH REVOLUTION 2026
          </div>
          <h1 className="text-6xl font-bold mb-6">
            Space Technology Innovation 2026
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Revolutionary space technologies that are making interplanetary travel, 
            space colonization, and cosmic exploration a reality for humanity.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#technologies" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Technologies
            </a>
            <a href="#missions" className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors font-semibold text-lg">
              View Missions
            </a>
          </div>
        </div>

        {/* Revolutionary Technologies */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Propulsion</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Breakthrough quantum propulsion systems that enable near-light-speed travel 
              and make interplanetary journeys in days instead of years.
            </p>
            <ul className="text-cyan-200 space-y-2 text-sm">
              <li>• 99% light speed capability</li>
              <li>• Zero fuel consumption</li>
              <li>• Instant acceleration</li>
              <li>• Interstellar travel ready</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌌</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Habitats</h3>
            <p className="text-purple-100 mb-6 text-center">
              Self-sustaining space habitats with artificial gravity, 
              advanced life support, and complete ecosystem management.
            </p>
            <ul className="text-purple-200 space-y-2 text-sm">
              <li>• Artificial gravity systems</li>
              <li>• Closed-loop ecosystems</li>
              <li>• Advanced life support</li>
              <li>• Modular construction</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🛸</div>
            <h3 className="text-2xl font-bold mb-4 text-center">AI Spacecraft</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Autonomous AI spacecraft that can navigate, explore, and make decisions 
              independently during long-duration space missions.
            </p>
            <ul className="text-emerald-200 space-y-2 text-sm">
              <li>• Autonomous navigation</li>
              <li>• Self-repair capabilities</li>
              <li>• Advanced AI decision making</li>
              <li>• Long-duration missions</li>
            </ul>
          </div>
        </div>

        {/* Advanced Space Technologies */}
        <div id="technologies" className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">
            🌟 Advanced Space Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-600/10 to-blue-600/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20">
              <h3 className="text-xl font-bold mb-3 text-cyan-300">🚀 Fusion Drives</h3>
              <p className="text-gray-300 mb-4">
                Compact fusion reactors that provide unlimited energy for space missions, 
                enabling continuous operation for decades without refueling.
              </p>
              <div className="text-sm text-cyan-400 font-semibold">
                Power Output: 1GW | Efficiency: 99.9%
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/10 to-pink-600/10 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20">
              <h3 className="text-xl font-bold mb-3 text-purple-300">🌍 Terraforming Tech</h3>
              <p className="text-gray-300 mb-4">
                Advanced terraforming technologies that can transform hostile planets 
                into habitable environments for human colonization.
              </p>
              <div className="text-sm text-purple-400 font-semibold">
                Transformation Time: 50 years | Success Rate: 95%
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-600/10 to-teal-600/10 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/20">
              <h3 className="text-xl font-bold mb-3 text-emerald-300">🛡️ Space Defense</h3>
              <p className="text-gray-300 mb-4">
                Advanced space defense systems that protect Earth and space colonies 
                from cosmic threats and potential alien encounters.
              </p>
              <div className="text-sm text-emerald-400 font-semibold">
                Protection Radius: 1M km | Response Time: <1s
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-600/10 to-red-600/10 backdrop-blur-sm rounded-xl p-6 border border-orange-400/20">
              <h3 className="text-xl font-bold mb-3 text-orange-300">🔬 Space Mining</h3>
              <p className="text-gray-300 mb-4">
                Automated space mining operations that extract rare minerals and resources 
                from asteroids, moons, and other celestial bodies.
              </p>
              <div className="text-sm text-orange-400 font-semibold">
                Extraction Rate: 1000 tons/day | Resource Value: $1T+
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-600/10 to-purple-600/10 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/20">
              <h3 className="text-xl font-bold mb-3 text-indigo-300">🌐 Space Internet</h3>
              <p className="text-gray-300 mb-4">
                Quantum-encrypted space internet that provides instant communication 
                between Earth and any point in the solar system.
              </p>
              <div className="text-sm text-indigo-400 font-semibold">
                Latency: <1ms | Bandwidth: 1TB/s
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-pink-600/10 to-rose-600/10 backdrop-blur-sm rounded-xl p-6 border border-pink-400/20">
              <h3 className="text-xl font-bold mb-3 text-pink-300">🧬 Space Biology</h3>
              <p className="text-gray-300 mb-4">
                Advanced space biology research that studies life in zero gravity 
                and develops organisms adapted for space environments.
              </p>
              <div className="text-sm text-pink-400 font-semibold">
                Research Scope: 1000+ species | Adaptations: 500+
              </div>
            </div>
          </div>
        </div>

        {/* Mission Showcase */}
        <div id="missions" className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-indigo-400/30">
          <h2 className="text-4xl font-bold text-center mb-12">🚀 Current Missions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
              <h3 className="text-2xl font-bold mb-4 text-cyan-300">Mars Colony Alpha</h3>
              <p className="text-gray-300 mb-6">
                Establishing the first permanent human settlement on Mars with 1,000 colonists 
                and complete self-sufficiency within 5 years.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-cyan-400 font-semibold">Status</div>
                  <div className="text-gray-300">In Progress</div>
                </div>
                <div>
                  <div className="text-cyan-400 font-semibold">Launch Date</div>
                  <div className="text-gray-300">Q2 2026</div>
                </div>
                <div>
                  <div className="text-cyan-400 font-semibold">Duration</div>
                  <div className="text-gray-300">Permanent</div>
                </div>
                <div>
                  <div className="text-cyan-400 font-semibold">Crew Size</div>
                  <div className="text-gray-300">1,000</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
              <h3 className="text-2xl font-bold mb-4 text-purple-300">Europa Exploration</h3>
              <p className="text-gray-300 mb-6">
                Deep space mission to Jupiter's moon Europa to search for extraterrestrial life 
                and study its subsurface ocean.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-purple-400 font-semibold">Status</div>
                  <div className="text-gray-300">Preparing</div>
                </div>
                <div>
                  <div className="text-purple-400 font-semibold">Launch Date</div>
                  <div className="text-gray-300">Q4 2026</div>
                </div>
                <div>
                  <div className="text-purple-400 font-semibold">Duration</div>
                  <div className="text-gray-300">8 years</div>
                </div>
                <div>
                  <div className="text-purple-400 font-semibold">Crew Size</div>
                  <div className="text-gray-300">12</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-12 text-white mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">🏆 Space Achievements</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">15</div>
              <div className="text-cyan-200">Active Missions</div>
              <p className="text-sm mt-2 opacity-90">
                Currently exploring the solar system
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-cyan-200">Spacecraft Launched</div>
              <p className="text-sm mt-2 opacity-90">
                Advanced vehicles in operation
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">99.9%</div>
              <div className="text-cyan-200">Mission Success</div>
              <p className="text-sm mt-2 opacity-90">
                Reliability across all operations
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">$2T</div>
              <div className="text-cyan-200">Value Created</div>
              <p className="text-sm mt-2 opacity-90">
                Economic impact of space technology
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join the Space Revolution
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Be part of humanity's greatest adventure. Explore the cosmos, 
            colonize new worlds, and push the boundaries of what's possible.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/contact" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Join Mission
            </a>
            <a href="/pages/ComprehensiveTechInsights2026" className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors font-semibold text-lg">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceTechInnovation2026;
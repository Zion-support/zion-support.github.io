import React from 'react';

const SpaceTechInnovation2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 SPACE TECHNOLOGY • 2026
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Space Technology Innovation 2026
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Pioneering the next frontier with revolutionary space technologies, advanced propulsion systems, 
            and AI-powered space exploration solutions
          </p>
        </div>

        {/* Revolutionary Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-6 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Advanced Propulsion</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Next-generation propulsion systems enabling faster, more efficient space travel
            </p>
            <ul className="text-cyan-200 space-y-2">
              <li>• Ion propulsion engines</li>
              <li>• Nuclear thermal rockets</li>
              <li>• Solar sail technology</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-6 text-center">🛰️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Satellite Networks</h3>
            <p className="text-purple-100 mb-6 text-center">
              Global satellite constellations providing worldwide connectivity and Earth observation
            </p>
            <ul className="text-purple-200 space-y-2">
              <li>• Low Earth Orbit satellites</li>
              <li>• Quantum communication</li>
              <li>• Real-time Earth monitoring</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-6 text-center">🌌</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Exploration</h3>
            <p className="text-blue-100 mb-6 text-center">
              Autonomous space missions and AI-powered exploration of distant worlds
            </p>
            <ul className="text-blue-200 space-y-2">
              <li>• Mars colonization</li>
              <li>• Asteroid mining</li>
              <li>• Deep space probes</li>
            </ul>
          </div>
        </div>

        {/* Technology Showcase */}
        <div className="bg-gradient-to-r from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-3xl p-12 mb-16 border border-indigo-400/30">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Revolutionary Space Technologies</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Experience the future of space technology with our cutting-edge solutions that are transforming space exploration
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">🚀 Reusable Launch Systems</h3>
              <p className="text-indigo-100 mb-6">
                Revolutionary reusable rocket technology reducing launch costs by 90% and enabling frequent space access
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  <span>Vertical landing capability</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  <span>Rapid turnaround times</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  <span>Cost-effective launches</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">🤖 AI Space Navigation</h3>
              <p className="text-indigo-100 mb-6">
                Autonomous space navigation systems using AI for precise orbital mechanics and mission planning
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  <span>Autonomous docking</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  <span>Collision avoidance</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  <span>Mission optimization</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Space Missions Timeline */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-white/10">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Space Missions 2026</h2>
          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="w-4 h-4 bg-cyan-400 rounded-full"></div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-cyan-400">Mars Sample Return Mission</h3>
                <p className="text-gray-300">First-ever return of Martian soil samples to Earth for analysis</p>
              </div>
              <div className="text-cyan-400 font-bold">Q2 2026</div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-purple-400">Lunar Gateway Station</h3>
                <p className="text-gray-300">First permanent human presence in lunar orbit</p>
              </div>
              <div className="text-purple-400 font-bold">Q3 2026</div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-blue-400">Asteroid Mining Demo</h3>
                <p className="text-gray-300">First commercial asteroid mining demonstration mission</p>
              </div>
              <div className="text-blue-400 font-bold">Q4 2026</div>
            </div>
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-cyan-400/30">
          <h2 className="text-3xl font-bold text-center mb-12">Space Technology Impact 2026</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">$1.2T</div>
              <div className="text-gray-300">Global space economy</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">50,000+</div>
              <div className="text-gray-300">Active satellites</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">90%</div>
              <div className="text-gray-300">Launch cost reduction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-300">Global connectivity</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Reach for the Stars?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Partner with us to leverage cutting-edge space technologies that will revolutionize your industry
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Launch Your Mission
            </a>
            <a href="/pages/ComprehensiveTechInsights2026" className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-colors font-semibold text-lg">
              Explore More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceTechInnovation2026;
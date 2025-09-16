import React from 'react';

const NextGenInnovationHub2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🧠 NEXT-GEN INNOVATION HUB • JANUARY 2025
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Next-Gen Innovation Hub 2025
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover and explore the most revolutionary technologies shaping humanity's future
          </p>
        </div>

        {/* Innovation Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Technology</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Revolutionary space exploration and colonization technologies
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Faster-than-light travel</li>
              <li>• Terraforming capabilities</li>
              <li>• Space habitat construction</li>
              <li>• Interstellar communication</li>
            </ul>
            <div className="text-center">
              <span className="px-3 py-1 bg-emerald-500 text-white rounded-full text-xs font-semibold">
                SPACE
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-teal-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Biotechnology</h3>
            <p className="text-teal-100 mb-6 text-center">
              Advanced biotechnology for human enhancement and medical breakthroughs
            </p>
            <ul className="text-teal-200 space-y-2 mb-6 text-sm">
              <li>• Genetic engineering</li>
              <li>• Regenerative medicine</li>
              <li>• Longevity treatments</li>
              <li>• Human augmentation</li>
            </ul>
            <div className="text-center">
              <span className="px-3 py-1 bg-teal-500 text-white rounded-full text-xs font-semibold">
                BIO
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌊</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Ocean Technology</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Deep ocean exploration and underwater civilization technologies
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Underwater cities</li>
              <li>• Deep sea mining</li>
              <li>• Marine biotechnology</li>
              <li>• Ocean energy systems</li>
            </ul>
            <div className="text-center">
              <span className="px-3 py-1 bg-cyan-500 text-white rounded-full text-xs font-semibold">
                OCEAN
              </span>
            </div>
          </div>
        </div>

        {/* Innovation Showcase */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Active Innovation Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-lg p-6 border border-emerald-400/30">
                <h3 className="text-2xl font-bold mb-4 text-emerald-400">Project Stellaris</h3>
                <p className="text-gray-300 mb-4">
                  Developing faster-than-light travel technology using quantum field manipulation 
                  and space-time distortion principles.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-emerald-300">Progress: 75%</span>
                  <div className="w-32 bg-gray-700 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-600/20 to-cyan-600/20 rounded-lg p-6 border border-teal-400/30">
                <h3 className="text-2xl font-bold mb-4 text-teal-400">Project Genesis</h3>
                <p className="text-gray-300 mb-4">
                  Creating self-sustaining ecosystems for space colonization using advanced 
                  biotechnology and terraforming techniques.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-teal-300">Progress: 60%</span>
                  <div className="w-32 bg-gray-700 rounded-full h-2">
                    <div className="bg-teal-500 h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-lg p-6 border border-cyan-400/30">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Project Neptune</h3>
                <p className="text-gray-300 mb-4">
                  Building underwater cities and sustainable ocean-based civilizations 
                  using advanced materials and energy systems.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-cyan-300">Progress: 45%</span>
                  <div className="w-32 bg-gray-700 rounded-full h-2">
                    <div className="bg-cyan-500 h-2 rounded-full" style={{width: '45%'}}></div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg p-6 border border-blue-400/30">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Project Mind</h3>
                <p className="text-gray-300 mb-4">
                  Developing brain-computer interfaces for enhanced cognitive abilities 
                  and direct neural communication systems.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-300">Progress: 80%</span>
                  <div className="w-32 bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">50+</div>
            <div className="text-gray-300">Active Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-400 mb-2">99.9%</div>
            <div className="text-gray-300">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">∞</div>
            <div className="text-gray-300">Possibilities</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-gray-300">Innovation</div>
          </div>
        </div>

        {/* Innovation Labs */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Innovation Laboratories</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="text-xl font-bold mb-4 text-emerald-400">Quantum Lab</h3>
              <p className="text-gray-300 text-sm">
                Advanced quantum computing research and development facility
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🧪</div>
              <h3 className="text-xl font-bold mb-4 text-teal-400">Bio Lab</h3>
              <p className="text-gray-300 text-sm">
                Biotechnology and genetic engineering research center
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Space Lab</h3>
              <p className="text-gray-300 text-sm">
                Space technology and exploration development facility
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Innovation Revolution</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Be part of the most advanced innovation hub in the world. Collaborate with leading scientists, 
            engineers, and visionaries to create the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Join Innovation Hub →
            </button>
            <button className="border border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400/10 transition-colors font-semibold text-lg">
              Explore Labs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2025;
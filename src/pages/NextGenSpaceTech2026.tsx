import React from 'react';

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black rounded-full text-lg font-bold mb-6 animate-pulse">
            🚀 NEXT-GEN SPACE TECH • 2026
          </div>
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Next-Generation Space Technology
          </h1>
          <p className="text-3xl text-gray-200 max-w-6xl mx-auto mb-8">
            Explore the universe with revolutionary space technologies that make interplanetary travel, space colonization, and cosmic exploration a reality. The future of humanity lies among the stars.
          </p>
        </div>

        {/* Revolutionary Space Technologies */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-cyan-300">Quantum Propulsion</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Revolutionary propulsion systems that enable faster-than-light travel and interplanetary exploration
            </p>
            <ul className="text-cyan-200 space-y-2 text-sm">
              <li>• Faster-than-light travel</li>
              <li>• Zero-fuel propulsion</li>
              <li>• Interstellar navigation</li>
              <li>• Quantum drive systems</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🏗️</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-purple-300">Space Habitats</h3>
            <p className="text-purple-100 mb-6 text-center">
              Self-sustaining space colonies and habitats that support human life in the cosmos
            </p>
            <ul className="text-purple-200 space-y-2 text-sm">
              <li>• Self-sustaining ecosystems</li>
              <li>• Artificial gravity systems</li>
              <li>• Life support technology</li>
              <li>• Space agriculture</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-emerald-300">AI Space Navigation</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Advanced AI systems that navigate spacecraft and manage complex space missions autonomously
            </p>
            <ul className="text-emerald-200 space-y-2 text-sm">
              <li>• Autonomous navigation</li>
              <li>• Mission planning</li>
              <li>• Real-time adaptation</li>
              <li>• Cosmic data analysis</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌌</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-orange-300">Cosmic Exploration</h3>
            <p className="text-orange-100 mb-6 text-center">
              Advanced exploration technologies that discover new worlds and alien civilizations
            </p>
            <ul className="text-orange-200 space-y-2 text-sm">
              <li>• Exoplanet discovery</li>
              <li>• Alien life detection</li>
              <li>• Deep space probes</li>
              <li>• Cosmic mapping</li>
            </ul>
          </div>
        </div>

        {/* Space Mission Capabilities */}
        <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 mb-16 border border-indigo-400/30">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-6">🌟 Revolutionary Space Missions</h2>
            <p className="text-2xl text-gray-200">Discover the unprecedented space exploration capabilities of our next-generation technology</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">🚀 Mars Colonization</h3>
                <p className="text-gray-200 mb-4">Establish permanent human settlements on Mars with our advanced space technology</p>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Terraforming capabilities</li>
                  <li>• Atmospheric generation</li>
                  <li>• Water extraction systems</li>
                  <li>• Sustainable agriculture</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">🌙 Lunar Bases</h3>
                <p className="text-gray-200 mb-4">Build permanent lunar bases that serve as launch pads for deeper space exploration</p>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Lunar habitat construction</li>
                  <li>• Helium-3 mining</li>
                  <li>• Space manufacturing</li>
                  <li>• Launch facility development</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold mb-4 text-emerald-400">🪐 Outer Planet Exploration</h3>
                <p className="text-gray-200 mb-4">Explore the outer planets and their moons with advanced robotic missions</p>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Jupiter moon exploration</li>
                  <li>• Saturn ring analysis</li>
                  <li>• Neptune atmosphere study</li>
                  <li>• Pluto surface mapping</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">⭐ Interstellar Travel</h3>
                <p className="text-gray-200 mb-4">Journey to nearby star systems and explore exoplanets in our galactic neighborhood</p>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Proxima Centauri missions</li>
                  <li>• Exoplanet exploration</li>
                  <li>• Alien life search</li>
                  <li>• Galactic mapping</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Space Technology Applications */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-6">🌍 Earth-Space Integration</h2>
            <p className="text-2xl text-gray-200">How our space technology benefits life on Earth and enables cosmic expansion</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
              <h3 className="text-2xl font-bold mb-4 text-cyan-300">🌍 Earth Monitoring</h3>
              <p className="text-gray-200 mb-6">Advanced satellite systems that monitor Earth's climate, resources, and environmental changes</p>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Climate change tracking</li>
                <li>• Natural disaster prediction</li>
                <li>• Resource monitoring</li>
                <li>• Environmental protection</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
              <h3 className="text-2xl font-bold mb-4 text-purple-300">🛰️ Space Manufacturing</h3>
              <p className="text-gray-200 mb-6">Manufacturing facilities in space that produce materials impossible to create on Earth</p>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Zero-gravity manufacturing</li>
                <li>• Advanced materials production</li>
                <li>• Space-based research</li>
                <li>• Clean energy generation</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30">
              <h3 className="text-2xl font-bold mb-4 text-emerald-300">🌌 Cosmic Communication</h3>
              <p className="text-gray-200 mb-6">Revolutionary communication systems that enable instant contact across vast cosmic distances</p>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Quantum communication</li>
                <li>• Interplanetary internet</li>
                <li>• Deep space communication</li>
                <li>• Alien contact protocols</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Future Vision */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            The Future is Among the Stars
          </h2>
          <p className="text-2xl text-gray-200 max-w-5xl mx-auto mb-8">
            Humanity's destiny lies in the cosmos. Our next-generation space technology makes it possible to explore, colonize, and thrive among the stars. The universe is our new frontier, and the possibilities are infinite.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="/pages/QuantumComputingRevolution2025" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Quantum Tech →
            </a>
            <a href="/pages/RevolutionaryAIBreakthrough2026" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Discover AI Revolution →
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-12 text-center border border-cyan-400/30">
          <h3 className="text-4xl font-bold mb-6 text-cyan-300">Ready to Explore the Cosmos?</h3>
          <p className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto">
            Join us in the next chapter of human exploration. Our revolutionary space technology is ready to take you beyond Earth and into the infinite possibilities of the universe.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="/pages/UltimateTechShowcase2025" className="bg-white text-cyan-600 px-12 py-6 rounded-xl hover:shadow-2xl transition-all duration-300 font-semibold text-xl">
              🚀 Ultimate Tech Showcase
            </a>
            <a href="/pages/RevolutionaryTechInsights2025" className="border-2 border-white text-white px-12 py-6 rounded-xl hover:bg-white hover:text-cyan-600 transition-all duration-300 font-semibold text-xl">
              🔮 Tech Insights
            </a>
            <a href="/pages/SyntheticIntelligence2026" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-6 rounded-xl hover:shadow-2xl transition-all duration-300 font-semibold text-xl">
              🧠 Synthetic AI
            </a>
          </div>
        </motion.div>
=======
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Explore the Cosmos?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join us in the greatest adventure in human history. The universe is waiting, 
            and the future of space exploration starts with you.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-4 rounded-lg text-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Join Mission
            </button>
            <button className="bg-gradient-to-r from-purple-500 to-pink-600 px-10 py-4 rounded-lg text-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenSpaceTech2026;
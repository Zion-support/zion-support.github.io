import React from 'react';

const SpaceTechRevolution2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY: Space Technology 2026
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Space Technology Revolution 2026
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Pioneering the future of space exploration with revolutionary technologies that make 
            interplanetary travel, space colonization, and cosmic commerce a reality.
          </p>
          <div className="flex justify-center space-x-4 mb-12">
            <button className="bg-gradient-to-r from-yellow-500 to-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              🚀 Launch Into Space
            </button>
            <button className="border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300">
              🌌 Explore Technology
            </button>
          </div>
        </div>

        {/* Space Technology Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-800 to-indigo-800 p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-4">Warp Drive Technology</h3>
            <p className="text-gray-300 mb-4">
              Revolutionary propulsion system enabling faster-than-light travel across the galaxy.
            </p>
            <div className="text-blue-400 font-bold">⚡ Light Speed+</div>
          </div>

          <div className="bg-gradient-to-br from-purple-800 to-pink-800 p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-2xl font-bold mb-4">Planetary Colonization</h3>
            <p className="text-gray-300 mb-4">
              Advanced terraforming and colony establishment technology for habitable planets.
            </p>
            <div className="text-green-400 font-bold">🏠 New Worlds</div>
          </div>

          <div className="bg-gradient-to-br from-green-800 to-teal-800 p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4">Quantum Communication</h3>
            <p className="text-gray-300 mb-4">
              Instant communication across vast distances using quantum entanglement.
            </p>
            <div className="text-yellow-400 font-bold">📡 Instant Contact</div>
          </div>
        </div>

        {/* Space Missions */}
        <div className="bg-gradient-to-r from-blue-800 to-purple-800 p-12 rounded-3xl mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Revolutionary Space Missions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">Mars 2026</div>
              <div className="text-lg mb-4">First Human Colony</div>
              <div className="text-gray-300">Establishing the first permanent human settlement on Mars</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">Europa 2027</div>
              <div className="text-lg mb-4">Ocean Exploration</div>
              <div className="text-gray-300">Exploring the subsurface ocean of Jupiter's moon Europa</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">Alpha Centauri 2028</div>
              <div className="text-lg mb-4">Interstellar Mission</div>
              <div className="text-gray-300">First mission to our nearest star system</div>
            </div>
          </div>
        </div>

        {/* Space Technology Applications */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Space Technology Applications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-indigo-800 to-purple-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">🌌 Space Commerce</h3>
              <p className="text-gray-300 mb-4">
                Revolutionary space-based commerce and resource extraction technologies.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Asteroid mining operations</li>
                <li>• Space manufacturing facilities</li>
                <li>• Interplanetary trade networks</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-cyan-800 to-blue-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">🔬 Space Research</h3>
              <p className="text-gray-300 mb-4">
                Advanced research platforms for scientific discovery in space.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Zero-gravity laboratories</li>
                <li>• Cosmic observation platforms</li>
                <li>• Alien life detection systems</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Investment Opportunities */}
        <div className="bg-gradient-to-r from-yellow-800 to-orange-800 p-12 rounded-3xl mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Space Investment Opportunities</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-white mb-2">$500B</div>
              <div className="text-lg">Space Economy Size</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">1000x</div>
              <div className="text-lg">Potential ROI</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-lg">Space Companies</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">∞</div>
              <div className="text-lg">Growth Potential</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Reach for the Stars?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the space revolution and be part of humanity's greatest adventure.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-4 rounded-lg font-bold text-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              🚀 Launch Your Journey
            </button>
            <button className="border-2 border-white px-10 py-4 rounded-lg font-bold text-xl hover:bg-white hover:text-purple-900 transition-all duration-300">
              🌌 Explore Opportunities
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceTechRevolution2026;

import React from 'react';

const SpaceTechInnovation2026: React.FC = () => {
  return (
    <div>
      <div>
        <p>Space Tech Innovation 2026</p>
      </div>
      
      <div>
      {/* Space Technologies */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-gradient-to-br from-blue-800 to-cyan-800 rounded-2xl p-8 text-white transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-4">Fusion Propulsion</h3>
            <p className="text-gray-300">
              Nuclear fusion engines that can reach Mars in just 30 days instead of 6 months.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-800 to-pink-800 rounded-2xl p-8 text-white transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-2xl font-bold mb-4">Mars Habitats</h3>
            <p className="text-gray-300">
              Self-sustaining habitats with advanced life support systems for permanent Mars colonies.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-800 to-emerald-800 rounded-2xl p-8 text-white transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-2xl font-bold mb-4">Terraforming Tech</h3>
            <p className="text-gray-300">
              Advanced atmospheric processors that can make Mars habitable for humans.
            </p>
          </div>

          <div className="bg-gradient-to-br from-yellow-800 to-orange-800 rounded-2xl p-8 text-white transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4">Space Solar Power</h3>
            <p className="text-gray-300">
              Massive solar arrays in space that beam clean energy to Earth and Mars.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-800 to-pink-800 rounded-2xl p-8 text-white transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">🛸</div>
            <h3 className="text-2xl font-bold mb-4">Space Elevators</h3>
            <p className="text-gray-300">
              Carbon nanotube space elevators that make space travel as easy as taking an elevator.
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-800 to-purple-800 rounded-2xl p-8 text-white transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-2xl font-bold mb-4">Space Manufacturing</h3>
            <p className="text-gray-300">
              Zero-gravity manufacturing facilities that create materials impossible to make on Earth.
            </p>
          </div>
        </div>

        {/* Mission Timeline */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Mission Timeline</h2>
          
          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-4 py-2 rounded-full font-bold text-sm">
                2026
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">First Mars Mission Launch</h3>
                <p className="text-gray-300">Unmanned mission to establish infrastructure on Mars</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="bg-gradient-to-r from-purple-400 to-pink-500 text-black px-4 py-2 rounded-full font-bold text-sm">
                2027
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Mars Base Construction</h3>
                <p className="text-gray-300">Robotic construction of the first permanent Mars base</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-black px-4 py-2 rounded-full font-bold text-sm">
                2028
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">First Human Mission</h3>
                <p className="text-gray-300">First humans land on Mars and begin colonization</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full font-bold text-sm">
                2030
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Self-Sustaining Colony</h3>
                <p className="text-gray-300">Mars colony becomes fully self-sustaining</p>
              </div>
            </div>
          </div>
        </div>

        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-400 to-pink-500 text-black px-8 py-4 rounded-full text-xl font-bold inline-block hover:scale-105 transition-transform duration-300 cursor-pointer">
            Join the Space Revolution →
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceTechInnovation2026;
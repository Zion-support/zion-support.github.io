import React from 'react';

const NextGenSpaceTech2027: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌌 NEXT-GEN SPACE TECH 2027
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            The Future of Space Exploration
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Revolutionary space technologies that make interplanetary travel, Mars colonization, 
            and deep space exploration not just possible, but routine. The cosmos awaits.
          </p>
        </div>

        {/* Space Technology Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Faster-Than-Light Propulsion</h3>
            <p className="text-blue-100 mb-6 text-center">
              Breakthrough propulsion systems that enable travel to distant stars in days, not years
            </p>
            <ul className="text-blue-200 space-y-2 text-sm">
              <li>• Alcubierre drive technology</li>
              <li>• Quantum field manipulation</li>
              <li>• Warp bubble generation</li>
              <li>• Interstellar travel capability</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌍</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Terraforming Technology</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Advanced systems to transform Mars and other planets into habitable worlds
            </p>
            <ul className="text-cyan-200 space-y-2 text-sm">
              <li>• Atmospheric generation</li>
              <li>• Water extraction and creation</li>
              <li>• Soil enhancement</li>
              <li>• Climate stabilization</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-teal-600/30 to-emerald-600/30 backdrop-blur-sm rounded-xl p-8 border border-teal-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🏗️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Elevator Systems</h3>
            <p className="text-teal-100 mb-6 text-center">
              Revolutionary space elevators that make space access as easy as taking an elevator
            </p>
            <ul className="text-teal-200 space-y-2 text-sm">
              <li>• Carbon nanotube cables</li>
              <li>• Counterweight systems</li>
              <li>• Magnetic levitation</li>
              <li>• Cost-effective space access</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/30 to-green-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🛸</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Advanced Spacecraft</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Next-generation spacecraft with artificial gravity, life support, and autonomous systems
            </p>
            <ul className="text-emerald-200 space-y-2 text-sm">
              <li>• Artificial gravity generation</li>
              <li>• Closed-loop life support</li>
              <li>• Self-repairing systems</li>
              <li>• Autonomous navigation</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-600/30 to-lime-600/30 backdrop-blur-sm rounded-xl p-8 border border-green-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🏭</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Manufacturing</h3>
            <p className="text-green-100 mb-6 text-center">
              Zero-gravity manufacturing facilities producing materials impossible to create on Earth
            </p>
            <ul className="text-green-200 space-y-2 text-sm">
              <li>• Perfect crystal growth</li>
              <li>• Advanced alloys</li>
              <li>• Pharmaceutical production</li>
              <li>• Space-based construction</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-lime-600/30 to-yellow-600/30 backdrop-blur-sm rounded-xl p-8 border border-lime-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🔬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Research Labs</h3>
            <p className="text-lime-100 mb-6 text-center">
              Advanced research facilities in space for breakthrough scientific discoveries
            </p>
            <ul className="text-lime-200 space-y-2 text-sm">
              <li>• Zero-gravity experiments</li>
              <li>• Cosmic ray research</li>
              <li>• Exoplanet analysis</li>
              <li>• Dark matter studies</li>
            </ul>
          </div>
        </div>

        {/* Mars Colonization Timeline */}
        <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-red-400/30">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">🔴 Mars Colonization Timeline</h2>
            <p className="text-xl opacity-90">Our roadmap to making Mars humanity's second home</p>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">2027</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Phase 1: Infrastructure Setup</h3>
                <p className="text-lg opacity-90 mb-2">
                  Deploy automated construction robots and establish basic life support systems
                </p>
                <ul className="text-sm space-y-1 opacity-80">
                  <li>• Automated habitat construction</li>
                  <li>• Oxygen generation plants</li>
                  <li>• Water extraction systems</li>
                  <li>• Solar power arrays</li>
                </ul>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xl">2028</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Phase 2: First Human Mission</h3>
                <p className="text-lg opacity-90 mb-2">
                  Send the first human colonists to establish permanent settlements
                </p>
                <ul className="text-sm space-y-1 opacity-80">
                  <li>• 12-person crew deployment</li>
                  <li>• Greenhouse construction</li>
                  <li>• Research facility setup</li>
                  <li>• Communication networks</li>
                </ul>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">2029</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Phase 3: Self-Sufficiency</h3>
                <p className="text-lg opacity-90 mb-2">
                  Achieve complete self-sufficiency with food production and resource independence
                </p>
                <ul className="text-sm space-y-1 opacity-80">
                  <li>• Agricultural domes</li>
                  <li>• Manufacturing facilities</li>
                  <li>• Medical centers</li>
                  <li>• Educational institutions</li>
                </ul>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">2030</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Phase 4: City Development</h3>
                <p className="text-lg opacity-90 mb-2">
                  Build the first Martian city with thousands of permanent residents
                </p>
                <ul className="text-sm space-y-1 opacity-80">
                  <li>• Urban planning and development</li>
                  <li>• Transportation systems</li>
                  <li>• Cultural and recreational facilities</li>
                  <li>• Government and administration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Space Simulator */}
        <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-blue-400/30">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">🌌 Space Exploration Simulator</h2>
            <p className="text-xl opacity-90">Experience space travel and Mars colonization in virtual reality</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-center">Mars Mission Simulator</h3>
              <p className="text-center mb-6 opacity-90">
                Experience a complete Mars mission from launch to landing and colonization
              </p>
              <div className="space-y-4 mb-6">
                <div className="bg-white/5 rounded-lg p-3">
                  <strong>Mission Duration:</strong> 2 years (Earth time)
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <strong>Travel Time:</strong> 3 months with FTL propulsion
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <strong>Colony Size:</strong> 50 initial settlers
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Launch Mars Mission →
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-center">Interstellar Explorer</h3>
              <p className="text-center mb-6 opacity-90">
                Journey to distant star systems and explore exoplanets with advanced technology
              </p>
              <div className="space-y-4 mb-6">
                <div className="bg-white/5 rounded-lg p-3">
                  <strong>Destination:</strong> Proxima Centauri b
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <strong>Travel Time:</strong> 1 week with FTL drive
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <strong>Mission Type:</strong> Exploration and research
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Begin Interstellar Journey →
              </button>
            </div>
          </div>
        </div>

        {/* Space Technology Showcase */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-slate-800/50 to-blue-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-400/30">
            <h3 className="text-3xl font-bold mb-6 text-center">🚀 Advanced Propulsion Systems</h3>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-xl font-semibold mb-2">Alcubierre Drive</h4>
                <p className="opacity-90 text-sm">
                  Warp space-time around the spacecraft to achieve faster-than-light travel without violating relativity
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-xl font-semibold mb-2">Ion Propulsion</h4>
                <p className="opacity-90 text-sm">
                  Highly efficient electric propulsion using ionized particles for long-duration space missions
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-xl font-semibold mb-2">Nuclear Thermal</h4>
                <p className="opacity-90 text-sm">
                  Nuclear-powered propulsion systems for high-thrust missions to outer planets
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-blue-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-400/30">
            <h3 className="text-3xl font-bold mb-6 text-center">🛡️ Life Support Systems</h3>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-xl font-semibold mb-2">Closed-Loop Ecology</h4>
                <p className="opacity-90 text-sm">
                  Self-sustaining life support systems that recycle all waste and produce food and oxygen
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-xl font-semibold mb-2">Radiation Shielding</h4>
                <p className="opacity-90 text-sm">
                  Advanced materials and magnetic fields to protect against cosmic radiation
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-xl font-semibold mb-2">Artificial Gravity</h4>
                <p className="opacity-90 text-sm">
                  Rotating habitats and centrifugal force systems to maintain human health in space
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">The Stars Are Calling</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join us in the greatest adventure in human history. The technology is ready, 
            the future is now. Will you be part of humanity's journey to the stars?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Join the Space Program →
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenSpaceTech2027;
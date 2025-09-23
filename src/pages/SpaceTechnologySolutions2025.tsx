import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const SpaceTechnologySolutions2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-100">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-lg font-bold mb-6">
            🚀 SPACE TECH 2025
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Space Technology Solutions
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
            Reach for the stars with our cutting-edge space technology solutions. From satellite networks 
            to interplanetary communication, we're making space accessible and profitable for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              🚀 Launch Demo
            </button>
            <button className="bg-white border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg hover:bg-indigo-50 transition-all duration-300 font-semibold">
              📊 Space ROI Calculator
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors">
              📖 Space Tech Guide
            </button>
          </div>
        </div>

        {/* Space Technology Solutions */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🛰️ Space Technology Solutions</h2>
            <p className="text-xl text-gray-600">Revolutionary space technologies for Earth and beyond</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="text-5xl mb-4">🛰️</div>
              <h3 className="text-2xl font-bold mb-4">Satellite Constellation</h3>
              <p className="text-gray-600 mb-6">
                Global satellite networks providing high-speed internet, GPS services, 
                and real-time Earth observation capabilities worldwide.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Coverage</span>
                  <span className="font-semibold">100% Global</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Latency</span>
                  <span className="font-semibold">< 20ms</span>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Satellites →
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold mb-4">Earth Observation</h3>
              <p className="text-gray-600 mb-6">
                Advanced satellite imaging and monitoring systems for climate tracking, 
                agriculture, urban planning, and environmental protection.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Resolution</span>
                  <span className="font-semibold">0.5m</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Update Frequency</span>
                  <span className="font-semibold">Daily</span>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Monitor Earth →
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="text-5xl mb-4">🌙</div>
              <h3 className="text-2xl font-bold mb-4">Lunar Infrastructure</h3>
              <p className="text-gray-600 mb-6">
                Moon-based facilities for research, manufacturing, and as a launch point 
                for deeper space exploration missions.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Facility Size</span>
                  <span className="font-semibold">1000m²</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Power Output</span>
                  <span className="font-semibold">1MW</span>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Build on Moon →
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4">Space Manufacturing</h3>
              <p className="text-gray-600 mb-6">
                Zero-gravity manufacturing facilities producing advanced materials, 
                pharmaceuticals, and technologies impossible on Earth.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Quality</span>
                  <span className="font-semibold">99.9% Pure</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Production Speed</span>
                  <span className="font-semibold">10x Faster</span>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Manufacture in Space →
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="text-5xl mb-4">🪐</div>
              <h3 className="text-2xl font-bold mb-4">Interplanetary Communication</h3>
              <p className="text-gray-600 mb-6">
                Deep space communication networks enabling real-time data transmission 
                between Earth, Mars, and other celestial bodies.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Range</span>
                  <span className="font-semibold">50M+ km</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Data Rate</span>
                  <span className="font-semibold">1Gbps</span>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Connect Planets →
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4">Space-Based Solar Power</h3>
              <p className="text-gray-600 mb-6">
                Orbital solar power stations collecting unlimited solar energy 
                and transmitting it to Earth via wireless power transfer.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Power Output</span>
                  <span className="font-semibold">1GW</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Efficiency</span>
                  <span className="font-semibold">99%</span>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Harness Space Power →
              </button>
            </div>
          </div>
        </section>

        {/* Space Applications */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🌌 Space Applications</h2>
            <p className="text-xl text-gray-600">Transforming industries with space technology</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-100 rounded-2xl p-8">
              <div className="text-5xl mb-4">📡</div>
              <h3 className="text-3xl font-bold mb-4">Global Connectivity</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Provide high-speed internet access to remote areas, ships, aircraft, 
                and underserved regions using our satellite constellation.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-indigo-600">1B+</div>
                  <div className="text-sm text-gray-600">Users Connected</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600">100Mbps</div>
                  <div className="text-sm text-gray-600">Average Speed</div>
                </div>
              </div>
              <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold">
                Connect Globally →
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-2xl p-8">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-3xl font-bold mb-4">Precision Agriculture</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Optimize farming operations with satellite-based crop monitoring, 
                soil analysis, and precision irrigation management.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">+30%</div>
                  <div className="text-sm text-gray-600">Crop Yield</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-cyan-600">-40%</div>
                  <div className="text-sm text-gray-600">Water Usage</div>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Optimize Agriculture →
              </button>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-3xl font-bold mb-4">Climate Monitoring</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Track climate change, monitor environmental conditions, and predict 
                weather patterns with advanced satellite observation systems.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">99.5%</div>
                  <div className="text-sm text-gray-600">Accuracy</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-emerald-600">Real-time</div>
                  <div className="text-sm text-gray-600">Updates</div>
                </div>
              </div>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                Monitor Climate →
              </button>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-2xl p-8">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-3xl font-bold mb-4">Space Mining</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Extract valuable resources from asteroids and celestial bodies 
                to support Earth's growing demand for rare materials.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600">$1T+</div>
                  <div className="text-sm text-gray-600">Resource Value</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-red-600">Unlimited</div>
                  <div className="text-sm text-gray-600">Supply</div>
                </div>
              </div>
              <button className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold">
                Mine in Space →
              </button>
            </div>
          </div>
        </section>

        {/* Space Technology Timeline */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">📅 Space Technology Timeline</h2>
            <p className="text-xl text-gray-600">Our roadmap to the stars</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-600 to-purple-600"></div>
            
            <div className="space-y-12">
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-2xl mb-2">Q1 2025</div>
                    <h3 className="text-xl font-bold mb-2">Satellite Constellation Launch</h3>
                    <p className="text-gray-600">Deploy first 100 satellites for global coverage</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
              
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-2xl mb-2">Q2 2025</div>
                    <h3 className="text-xl font-bold mb-2">Lunar Base Construction</h3>
                    <p className="text-gray-600">Begin construction of permanent lunar facility</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-2xl mb-2">Q3 2025</div>
                    <h3 className="text-xl font-bold mb-2">Space Manufacturing</h3>
                    <p className="text-gray-600">Launch first zero-gravity production facility</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
              
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-2xl mb-2">Q4 2025</div>
                    <h3 className="text-xl font-bold mb-2">Mars Mission Preparation</h3>
                    <p className="text-gray-600">Prepare infrastructure for Mars colonization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Space Performance Metrics */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-gray-900 to-indigo-900 rounded-2xl p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">📊 Space Technology Metrics</h2>
              <p className="text-xl opacity-90">Proven performance in space</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-indigo-400 mb-2">100%</div>
                <div className="text-lg opacity-90">Global Coverage</div>
                <div className="text-sm opacity-75">Satellite Network</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-lg opacity-90">Uptime</div>
                <div className="text-sm opacity-75">Space Systems</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-400 mb-2">1B+</div>
                <div className="text-lg opacity-90">Users Served</div>
                <div className="text-sm opacity-75">Global Connectivity</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-lg opacity-90">Space Operations</div>
                <div className="text-sm opacity-75">Continuous Service</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Reach for the Stars?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join the space revolution and unlock unlimited possibilities with our space technology solutions. 
              From global connectivity to interplanetary expansion, the future is now.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                🚀 Launch Your Space Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold">
                📞 Schedule Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold">
                💬 Talk to Space Expert
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SpaceTechnologySolutions2025;
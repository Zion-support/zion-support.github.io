import React from 'react';

const InnovationShowcase2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full text-white text-lg font-bold mb-6 animate-pulse">
            🌟 INNOVATION SHOWCASE • 2025
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Innovation Showcase 2025
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
            Discover cutting-edge innovations that are revolutionizing industries and creating new possibilities for the future
          </p>
        </div>

        {/* Innovation Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center">
            <div className="text-6xl mb-6">🚀</div>
            <h3 className="text-2xl font-bold mb-4">Space Technology</h3>
            <p className="text-gray-600 mb-6">
              Revolutionary space exploration and colonization technologies
            </p>
            <ul className="space-y-2 mb-6 text-sm text-left">
              <li>• Interplanetary travel systems</li>
              <li>• Space-based manufacturing</li>
              <li>• Asteroid mining operations</li>
              <li>• Mars colonization tech</li>
            </ul>
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold">
              Explore Space Tech →
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center">
            <div className="text-6xl mb-6">🌊</div>
            <h3 className="text-2xl font-bold mb-4">Ocean Technology</h3>
            <p className="text-gray-600 mb-6">
              Advanced marine exploration and sustainable ocean technologies
            </p>
            <ul className="space-y-2 mb-6 text-sm text-left">
              <li>• Deep sea exploration vehicles</li>
              <li>• Ocean energy harvesting</li>
              <li>• Marine biotechnology</li>
              <li>• Underwater communication</li>
            </ul>
            <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold">
              Dive Deep →
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center">
            <div className="text-6xl mb-6">🏭</div>
            <h3 className="text-2xl font-bold mb-4">Industrial IoT</h3>
            <p className="text-gray-600 mb-6">
              Smart manufacturing and industrial automation solutions
            </p>
            <ul className="space-y-2 mb-6 text-sm text-left">
              <li>• Predictive maintenance systems</li>
              <li>• Smart factory optimization</li>
              <li>• Autonomous manufacturing</li>
              <li>• Real-time quality control</li>
            </ul>
            <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-lg font-semibold">
              Smart Industry →
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center">
            <div className="text-6xl mb-6">🌱</div>
            <h3 className="text-2xl font-bold mb-4">Green Technology</h3>
            <p className="text-gray-600 mb-6">
              Sustainable and eco-friendly technological solutions
            </p>
            <ul className="space-y-2 mb-6 text-sm text-left">
              <li>• Carbon capture systems</li>
              <li>• Renewable energy storage</li>
              <li>• Biodegradable materials</li>
              <li>• Clean water technologies</li>
            </ul>
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold">
              Go Green →
            </div>
          </div>
        </div>

        {/* Featured Innovations */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl p-12 mb-16 text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">🌟 Featured Innovations</h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              Revolutionary technologies that are changing the world
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
              <h3 className="text-2xl font-bold mb-4">🔬 Nano-Robotics</h3>
              <p className="text-lg opacity-90 mb-4">
                Microscopic robots that can perform medical procedures at the cellular level.
              </p>
              <div className="space-y-2 text-sm opacity-80">
                <div>• Targeted drug delivery systems</div>
                <div>• Cellular repair mechanisms</div>
                <div>• Disease detection at molecular level</div>
                <div>• Precision surgical procedures</div>
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
              <h3 className="text-2xl font-bold mb-4">🌐 Digital Twin Technology</h3>
              <p className="text-lg opacity-90 mb-4">
                Real-time digital replicas of physical systems for optimization and simulation.
              </p>
              <div className="space-y-2 text-sm opacity-80">
                <div>• Predictive maintenance models</div>
                <div>• Virtual testing environments</div>
                <div>• Performance optimization</div>
                <div>• Risk assessment systems</div>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Impact */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">📊 Innovation Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="text-6xl mb-4">💰</div>
              <div className="text-4xl font-bold text-green-600 mb-2">$2.5T</div>
              <h3 className="text-xl font-bold mb-3">Market Value</h3>
              <p className="text-gray-600">
                Total market value created by our innovative technologies across industries
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="text-6xl mb-4">🌍</div>
              <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
              <h3 className="text-xl font-bold mb-3">Countries</h3>
              <p className="text-gray-600">
                Global reach of our innovative solutions and technologies
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="text-6xl mb-4">🚀</div>
              <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
              <h3 className="text-xl font-bold mb-3">Innovations</h3>
              <p className="text-gray-600">
                Revolutionary innovations developed and deployed successfully
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-3xl p-12 shadow-xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Join the Innovation Revolution
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Be part of the technological transformation that's reshaping our world
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Innovating
            </a>
            <a href="/pages/AdvancedTechBreakthrough2025" className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-lg">
              Explore More
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InnovationShowcase2025;
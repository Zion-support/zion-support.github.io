import React from 'react';
import { Helmet } from 'react-helmet-async';

const SpaceTechInnovation2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <Helmet>
        <title>Space Tech Innovation 2026 | Zion Tech Group</title>
        <meta name="description" content="Discover revolutionary space technology innovations that will enable human colonization of Mars and beyond" />
        <meta name="keywords" content="space technology, Mars colonization, space innovation, space exploration 2026" />
      </Helmet>
      
      <div className="relative z-10 p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Space Tech Innovation 2026
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Revolutionary space technology that will make human colonization of Mars and deep space exploration a reality.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">Advanced Space Technology</h2>
            <p className="text-gray-300 mb-8">
              Our space technology innovations represent the cutting edge of aerospace engineering, 
              combining advanced propulsion systems, autonomous navigation, and AI-powered mission 
              control to enable unprecedented space exploration capabilities.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Advanced propulsion systems</li>
                  <li>• Autonomous navigation and control</li>
                  <li>• AI-powered mission planning</li>
                  <li>• Life support and sustainability</li>
                  <li>• Interplanetary communication</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Applications</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Mars colonization missions</li>
                  <li>• Asteroid mining operations</li>
                  <li>• Deep space exploration</li>
                  <li>• Satellite constellation management</li>
                  <li>• Space tourism and commercial flights</li>
                </ul>
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

        {/* Technology Specifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Propulsion Systems</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-300">Fusion Engine Power</span>
                <span className="text-white font-bold">10 GW</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-300">Mars Transit Time</span>
                <span className="text-white font-bold">30 days</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-300">Payload Capacity</span>
                <span className="text-white font-bold">1000 tons</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-300">Fuel Efficiency</span>
                <span className="text-white font-bold">1000x better</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Life Support Systems</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-300">Oxygen Generation</span>
                <span className="text-white font-bold">100% recycled</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-300">Water Recycling</span>
                <span className="text-white font-bold">99.9% efficient</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-300">Food Production</span>
                <span className="text-white font-bold">Hydroponic farms</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-300">Radiation Protection</span>
                <span className="text-white font-bold">99.9% effective</span>
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

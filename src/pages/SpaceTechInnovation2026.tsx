import React from 'react';
import { motion } from 'framer-motion';

const SpaceTechInnovation2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-sm font-bold mb-6 text-white">
              🚀 SPACE TECH INNOVATION • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-800 to-purple-800 bg-clip-text text-transparent">
              Space Technology Innovation 2026
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              Revolutionary space technologies and exploration solutions for the next generation of space missions
            </p>
          </motion.div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Advanced Space Technologies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive suite of space technologies designed to revolutionize space exploration and colonization
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-indigo-200">
            <div className="text-5xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">Launch Systems</h3>
            <p className="text-gray-600 mb-6 text-center">
              Advanced launch vehicles and propulsion systems for efficient space access
            </p>
            <ul className="text-gray-500 space-y-2 text-sm">
              <li>• Reusable rockets</li>
              <li>• Advanced propulsion</li>
              <li>• Cost optimization</li>
              <li>• Safety protocols</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-purple-200">
            <div className="text-5xl mb-4 text-center">🛰️</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">Satellite Technology</h3>
            <p className="text-gray-600 mb-6 text-center">
              Next-generation satellites with advanced capabilities and extended lifespans
            </p>
            <ul className="text-gray-500 space-y-2 text-sm">
              <li>• High-resolution imaging</li>
              <li>• Communication networks</li>
              <li>• Earth observation</li>
              <li>• Navigation systems</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-pink-200">
            <div className="text-5xl mb-4 text-center">🌙</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">Lunar Exploration</h3>
            <p className="text-gray-600 mb-6 text-center">
              Comprehensive lunar exploration and colonization technologies
            </p>
            <ul className="text-gray-500 space-y-2 text-sm">
              <li>• Lunar base construction</li>
              <li>• Resource extraction</li>
              <li>• Life support systems</li>
              <li>• Transportation networks</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-cyan-200">
            <div className="text-5xl mb-4 text-center">🔴</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">Mars Mission</h3>
            <p className="text-gray-600 mb-6 text-center">
              Advanced technologies for Mars exploration and eventual colonization
            </p>
            <ul className="text-gray-500 space-y-2 text-sm">
              <li>• Mars rovers</li>
              <li>• Habitat systems</li>
              <li>• Terraforming research</li>
              <li>• Mission planning</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-emerald-200">
            <div className="text-5xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">Power Systems</h3>
            <p className="text-gray-600 mb-6 text-center">
              Advanced power generation and storage systems for space applications
            </p>
            <ul className="text-gray-500 space-y-2 text-sm">
              <li>• Solar arrays</li>
              <li>• Nuclear power</li>
              <li>• Energy storage</li>
              <li>• Power distribution</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-orange-200">
            <div className="text-5xl mb-4 text-center">🔬</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">Research & Development</h3>
            <p className="text-gray-600 mb-6 text-center">
              Cutting-edge research and development in space technology and science
            </p>
            <ul className="text-gray-500 space-y-2 text-sm">
              <li>• Materials science</li>
              <li>• Life sciences</li>
              <li>• Physics research</li>
              <li>• Technology testing</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mission Types */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">🌌 Mission Categories</h2>
            <p className="text-xl text-indigo-100">Comprehensive space exploration and development programs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceTechInnovation2026;
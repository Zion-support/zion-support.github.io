import React from 'react';

const InnovationHub2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-bold mb-6">
            🚀 INNOVATION HUB 2026
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            The Future of Innovation
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Discover groundbreaking technologies and solutions that are reshaping industries and creating new possibilities for the future.
          </p>
        </div>

        {/* Innovation Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {/* Artificial Intelligence */}
          <div className="group bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl">🤖</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Artificial Intelligence</h3>
            <p className="text-gray-600 mb-6">
              Advanced AI solutions including machine learning, natural language processing, and computer vision.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Autonomous Systems
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Predictive Analytics
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Natural Language Processing
              </div>
            </div>
          </div>

          {/* Quantum Computing */}
          <div className="group bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl">⚛️</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Computing</h3>
            <p className="text-gray-600 mb-6">
              Revolutionary quantum computing solutions for complex problem solving and optimization.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Quantum Algorithms
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Cryptography
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Optimization
              </div>
            </div>
          </div>

          {/* Neural Interfaces */}
          <div className="group bg-gradient-to-br from-green-50 to-teal-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl">🧠</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Neural Interfaces</h3>
            <p className="text-gray-600 mb-6">
              Direct brain-computer interfaces for enhanced human capabilities and communication.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                BCI Technology
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Neural Decoding
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Medical Applications
              </div>
            </div>
          </div>

          {/* Advanced Robotics */}
          <div className="group bg-gradient-to-br from-orange-50 to-red-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl">🤖</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Robotics</h3>
            <p className="text-gray-600 mb-6">
              Intelligent robotic systems for manufacturing, healthcare, and service industries.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                Autonomous Robots
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                Human-Robot Collaboration
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                Precision Manufacturing
              </div>
            </div>
          </div>

          {/* Blockchain & Web3 */}
          <div className="group bg-gradient-to-br from-cyan-50 to-blue-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl">⛓️</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Blockchain & Web3</h3>
            <p className="text-gray-600 mb-6">
              Decentralized solutions and Web3 technologies for secure and transparent systems.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                Smart Contracts
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                DeFi Solutions
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                NFT Platforms
              </div>
            </div>
          </div>

          {/* Space Technology */}
          <div className="group bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-r from-slate-500 to-gray-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl">🚀</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Space Technology</h3>
            <p className="text-gray-600 mb-6">
              Advanced space technologies for exploration, communication, and Earth observation.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-slate-500 rounded-full mr-3"></span>
                Satellite Systems
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-slate-500 rounded-full mr-3"></span>
                Space Exploration
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-slate-500 rounded-full mr-3"></span>
                Earth Observation
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Stats */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 mb-16 text-white">
          <h2 className="text-3xl font-bold text-center mb-12">Innovation by the Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">1000+</div>
              <div className="text-xl opacity-90">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-xl opacity-90">Patents Filed</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">99.9%</div>
              <div className="text-xl opacity-90">Success Rate</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-xl opacity-90">Innovation Support</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-50 rounded-3xl p-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Innovate?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join the innovation revolution and transform your business with cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Innovation Journey
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovationHub2026;
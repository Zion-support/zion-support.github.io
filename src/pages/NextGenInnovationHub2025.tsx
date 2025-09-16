import React from 'react';

const NextGenInnovationHub2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🧠 NEXT-GEN INNOVATION • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Next-Gen Innovation Hub 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              The world's most advanced innovation laboratory where the future is being built today
            </p>
          </div>
        </div>
      </div>

      {/* Innovation Categories */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Innovation Categories</h2>
          <p className="text-xl opacity-90">Explore our cutting-edge research and development areas</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AI & Machine Learning */}
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center">AI & Machine Learning</h3>
            <p className="text-purple-100 mb-6 text-center">
              Advanced artificial intelligence systems and machine learning algorithms
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Deep Learning Networks</li>
              <li>• Neural Architecture Search</li>
              <li>• Reinforcement Learning</li>
              <li>• Generative AI Models</li>
            </ul>
            <div className="text-center">
              <span className="px-3 py-1 bg-purple-500 text-white text-xs rounded-full">AI RESEARCH</span>
            </div>
          </div>

          {/* Quantum Computing */}
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Computing</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Revolutionary quantum computing technologies and applications
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Quantum Algorithms</li>
              <li>• Quantum Cryptography</li>
              <li>• Quantum Simulation</li>
              <li>• Quantum Machine Learning</li>
            </ul>
            <div className="text-center">
              <span className="px-3 py-1 bg-cyan-500 text-white text-xs rounded-full">QUANTUM</span>
            </div>
          </div>

          {/* Biotechnology */}
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Biotechnology</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Cutting-edge biotech innovations and life sciences research
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Gene Editing</li>
              <li>• Synthetic Biology</li>
              <li>• Personalized Medicine</li>
              <li>• Bio-Interfaces</li>
            </ul>
            <div className="text-center">
              <span className="px-3 py-1 bg-emerald-500 text-white text-xs rounded-full">BIOTECH</span>
            </div>
          </div>

          {/* Space Technology */}
          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Technology</h3>
            <p className="text-orange-100 mb-6 text-center">
              Advanced space exploration and satellite technologies
            </p>
            <ul className="text-orange-200 space-y-2 mb-6 text-sm">
              <li>• Satellite Networks</li>
              <li>• Space Manufacturing</li>
              <li>• Interplanetary Travel</li>
              <li>• Space Habitats</li>
            </ul>
            <div className="text-center">
              <span className="px-3 py-1 bg-orange-500 text-white text-xs rounded-full">SPACE</span>
            </div>
          </div>

          {/* Robotics */}
          <div className="bg-gradient-to-br from-violet-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-violet-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Advanced Robotics</h3>
            <p className="text-violet-100 mb-6 text-center">
              Next-generation robotic systems and automation technologies
            </p>
            <ul className="text-violet-200 space-y-2 mb-6 text-sm">
              <li>• Humanoid Robots</li>
              <li>• Swarm Robotics</li>
              <li>• Soft Robotics</li>
              <li>• Autonomous Systems</li>
            </ul>
            <div className="text-center">
              <span className="px-3 py-1 bg-violet-500 text-white text-xs rounded-full">ROBOTICS</span>
            </div>
          </div>

          {/* Energy Systems */}
          <div className="bg-gradient-to-br from-yellow-600/30 to-orange-600/30 backdrop-blur-sm rounded-xl p-8 border border-yellow-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Energy Systems</h3>
            <p className="text-yellow-100 mb-6 text-center">
              Revolutionary energy generation and storage technologies
            </p>
            <ul className="text-yellow-200 space-y-2 mb-6 text-sm">
              <li>• Fusion Power</li>
              <li>• Solar Innovation</li>
              <li>• Energy Storage</li>
              <li>• Smart Grids</li>
            </ul>
            <div className="text-center">
              <span className="px-3 py-1 bg-yellow-500 text-white text-xs rounded-full">ENERGY</span>
            </div>
          </div>
        </div>
      </div>

      {/* Research Statistics */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-12 border border-emerald-400/30">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Research Impact</h2>
            <p className="text-xl opacity-90">Our innovation hub's contributions to global progress</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-emerald-400 mb-2">500+</div>
              <div className="text-lg opacity-90 mb-2">Active Projects</div>
              <div className="text-sm opacity-75">Currently in development</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-cyan-400 mb-2">1000+</div>
              <div className="text-lg opacity-90 mb-2">Researchers</div>
              <div className="text-sm opacity-75">World-class scientists</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-teal-400 mb-2">50+</div>
              <div className="text-lg opacity-90 mb-2">Patents Filed</div>
              <div className="text-sm opacity-75">Breakthrough innovations</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-green-400 mb-2">99%</div>
              <div className="text-lg opacity-90 mb-2">Success Rate</div>
              <div className="text-sm opacity-75">Project completion</div>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Showcase */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Innovations</h2>
          <p className="text-xl opacity-90">Breakthrough technologies currently in development</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
            <div className="flex items-center mb-6">
              <div className="text-5xl mr-4">🧠</div>
              <div>
                <h3 className="text-2xl font-bold">Conscious AI Systems</h3>
                <p className="text-purple-200">Self-aware artificial intelligence</p>
              </div>
            </div>
            <p className="text-purple-100 mb-4">
              Developing AI systems that possess true consciousness, self-awareness, and the ability to experience emotions and make autonomous decisions.
            </p>
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-purple-500 text-white text-xs rounded-full">IN DEVELOPMENT</span>
              <span className="text-purple-300 text-sm">85% Complete</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
            <div className="flex items-center mb-6">
              <div className="text-5xl mr-4">⚛️</div>
              <div>
                <h3 className="text-2xl font-bold">Quantum Internet</h3>
                <p className="text-cyan-200">Ultra-secure quantum communication</p>
              </div>
            </div>
            <p className="text-cyan-100 mb-4">
              Building a quantum internet that enables ultra-secure communication and quantum computing across global networks.
            </p>
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-cyan-500 text-white text-xs rounded-full">IN DEVELOPMENT</span>
              <span className="text-cyan-300 text-sm">70% Complete</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
            <div className="flex items-center mb-6">
              <div className="text-5xl mr-4">🧬</div>
              <div>
                <h3 className="text-2xl font-bold">Neural Enhancement</h3>
                <p className="text-emerald-200">Brain-computer interface technology</p>
              </div>
            </div>
            <p className="text-emerald-100 mb-4">
              Developing non-invasive neural interfaces that enhance human cognitive abilities and enable direct brain-computer communication.
            </p>
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-emerald-500 text-white text-xs rounded-full">IN DEVELOPMENT</span>
              <span className="text-emerald-300 text-sm">60% Complete</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30">
            <div className="flex items-center mb-6">
              <div className="text-5xl mr-4">🚀</div>
              <div>
                <h3 className="text-2xl font-bold">Space Manufacturing</h3>
                <p className="text-orange-200">Zero-gravity production facilities</p>
              </div>
            </div>
            <p className="text-orange-100 mb-4">
              Creating manufacturing facilities in space that can produce materials and products impossible to make on Earth.
            </p>
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-orange-500 text-white text-xs rounded-full">IN DEVELOPMENT</span>
              <span className="text-orange-300 text-sm">45% Complete</span>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Innovation Revolution</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Be part of the most advanced innovation hub in the world. Collaborate with leading scientists and shape the future of technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Join Our Team
            </button>
            <button className="border border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400/10 transition-colors font-semibold text-lg">
              Explore Research
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2025;
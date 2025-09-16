import React from 'react';

const UltimateTechShowcase2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 ULTIMATE TECH SHOWCASE • JANUARY 2026
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Ultimate Technology Showcase 2026
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the most advanced technology solutions that are revolutionizing industries and transforming the future
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Technologies →
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Technology Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Artificial Intelligence</h3>
            <p className="text-blue-100 mb-6 text-center">
              Advanced AI systems with machine learning, natural language processing, and computer vision capabilities
            </p>
            <ul className="text-blue-200 space-y-2 mb-6 text-sm">
              <li>• Deep Learning Networks</li>
              <li>• Neural Language Models</li>
              <li>• Computer Vision AI</li>
              <li>• Predictive Analytics</li>
            </ul>
            <a href="/pages/AIInnovationHub2026" className="block w-full bg-white text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-center">
              Explore AI →
            </a>
          </div>

          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Computing</h3>
            <p className="text-purple-100 mb-6 text-center">
              Revolutionary quantum computing solutions with exponential processing power and quantum supremacy
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Quantum Algorithms</li>
              <li>• Quantum Cryptography</li>
              <li>• Quantum Simulation</li>
              <li>• Quantum Optimization</li>
            </ul>
            <a href="/pages/QuantumComputingSolutions2026" className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
              Explore Quantum →
            </a>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Biotechnology</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Cutting-edge biotechnology revolutionizing healthcare, agriculture, and environmental sustainability
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Gene Editing Technology</li>
              <li>• Synthetic Biology</li>
              <li>• Personalized Medicine</li>
              <li>• Lab-Grown Organs</li>
            </ul>
            <a href="/pages/BiotechRevolution2026" className="block w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center">
              Explore Biotech →
            </a>
          </div>

          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Technology</h3>
            <p className="text-orange-100 mb-6 text-center">
              Revolutionary space technology enabling interplanetary travel and cosmic exploration
            </p>
            <ul className="text-orange-200 space-y-2 mb-6 text-sm">
              <li>• Advanced Propulsion</li>
              <li>• Space Habitats</li>
              <li>• Satellite Networks</li>
              <li>• Terraforming Tech</li>
            </ul>
            <a href="/pages/SpaceTechInnovation2026" className="block w-full bg-white text-orange-600 py-3 rounded-lg hover:bg-orange-50 transition-colors font-semibold text-center">
              Explore Space →
            </a>
          </div>

          <div className="bg-gradient-to-br from-violet-600/30 to-purple-600/30 backdrop-blur-sm rounded-2xl p-8 border border-violet-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Neural Interfaces</h3>
            <p className="text-violet-100 mb-6 text-center">
              Direct brain-computer interfaces for seamless human-machine interaction
            </p>
            <ul className="text-violet-200 space-y-2 mb-6 text-sm">
              <li>• Brain-Computer Interface</li>
              <li>• Neural Prosthetics</li>
              <li>• Cognitive Enhancement</li>
              <li>• Medical Applications</li>
            </ul>
            <a href="/pages/NeuralInterfaceRevolution2026" className="block w-full bg-white text-violet-600 py-3 rounded-lg hover:bg-violet-50 transition-colors font-semibold text-center">
              Explore Neural →
            </a>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Energy Solutions</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Revolutionary energy technologies for sustainable and efficient power generation
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Fusion Power</li>
              <li>• Solar Technology</li>
              <li>• Energy Storage</li>
              <li>• Smart Grids</li>
            </ul>
            <a href="/pages/EnergyRevolution2026" className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
              Explore Energy →
            </a>
          </div>
        </div>

        {/* Technology Stats */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Technology Impact Statistics</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-lg text-cyan-200 mb-2">Accuracy Rate</div>
              <div className="text-sm text-gray-400">AI-powered systems</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">10,000x</div>
              <div className="text-lg text-blue-200 mb-2">Speed Increase</div>
              <div className="text-sm text-gray-400">Quantum computing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">∞</div>
              <div className="text-lg text-purple-200 mb-2">Possibilities</div>
              <div className="text-sm text-gray-400">Future applications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">0ms</div>
              <div className="text-lg text-pink-200 mb-2">Latency</div>
              <div className="text-sm text-gray-400">Neural interfaces</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join us in revolutionizing technology and shaping the future of humanity with our cutting-edge solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey →
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechShowcase2026;
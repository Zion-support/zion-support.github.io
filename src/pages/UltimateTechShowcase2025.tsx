import React from 'react';

const UltimateTechShowcase2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE SHOWCASE • JANUARY 2025
          </div>
          <h1 className="text-6xl font-bold mb-6">Ultimate Tech Showcase 2025</h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover the most comprehensive collection of cutting-edge technologies and innovations
          </p>
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-center mb-8">Interactive Technology Demos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-6 rounded-xl border border-blue-400/30">
                <h3 className="text-2xl font-bold mb-4">🤖 AI Assistant Demo</h3>
                <p className="text-blue-100 mb-4">Experience our most advanced AI assistant in action</p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Try AI Demo
                </button>
              </div>
              <div className="bg-gradient-to-r from-green-600/20 to-teal-600/20 p-6 rounded-xl border border-green-400/30">
                <h3 className="text-2xl font-bold mb-4">⚡ Quantum Simulator</h3>
                <p className="text-green-100 mb-4">Explore quantum computing concepts interactively</p>
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                  Launch Simulator
                </button>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-6 rounded-xl border border-purple-400/30">
                <h3 className="text-2xl font-bold mb-4">🧠 Neural Interface</h3>
                <p className="text-purple-100 mb-4">Test our brain-computer interface technology</p>
                <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                  Connect Neural
                </button>
              </div>
              <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 p-6 rounded-xl border border-orange-400/30">
                <h3 className="text-2xl font-bold mb-4">🌌 Reality Engine</h3>
                <p className="text-orange-100 mb-4">Create and explore virtual environments</p>
                <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors">
                  Enter Reality
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* AI & Machine Learning */}
          <div className="bg-gradient-to-br from-blue-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30">
            <div className="text-5xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center">AI & Machine Learning</h3>
            <ul className="text-blue-100 space-y-2 mb-6">
              <li>• Advanced Neural Networks</li>
              <li>• Natural Language Processing</li>
              <li>• Computer Vision</li>
              <li>• Predictive Analytics</li>
              <li>• Autonomous Systems</li>
            </ul>
            <div className="text-center">
              <span className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full">25+ Solutions</span>
            </div>
          </div>

          {/* Quantum Computing */}
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
            <div className="text-5xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Computing</h3>
            <ul className="text-purple-100 space-y-2 mb-6">
              <li>• Quantum Algorithms</li>
              <li>• Quantum Cryptography</li>
              <li>• Quantum Simulation</li>
              <li>• Quantum Machine Learning</li>
              <li>• Quantum Networking</li>
            </ul>
            <div className="text-center">
              <span className="px-3 py-1 bg-purple-500 text-white text-xs rounded-full">15+ Applications</span>
            </div>
          </div>

          {/* Neural Interfaces */}
          <div className="bg-gradient-to-br from-green-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-green-400/30">
            <div className="text-5xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Neural Interfaces</h3>
            <ul className="text-green-100 space-y-2 mb-6">
              <li>• Brain-Computer Interfaces</li>
              <li>• Neural Prosthetics</li>
              <li>• Cognitive Enhancement</li>
              <li>• Memory Augmentation</li>
              <li>• Thought Control</li>
            </ul>
            <div className="text-center">
              <span className="px-3 py-1 bg-green-500 text-white text-xs rounded-full">10+ Interfaces</span>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">$2.5B</div>
              <div className="text-lg mb-2">Revenue Generated</div>
              <div className="text-sm opacity-75">For our clients using our technologies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-lg mb-2">Companies Transformed</div>
              <div className="text-sm opacity-75">Across various industries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-lg mb-2">Uptime Achieved</div>
              <div className="text-sm opacity-75">With our technology solutions</div>
            </div>
          </div>
        </div>

        {/* Innovation Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Innovation Timeline</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500"></div>
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-purple-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-xl font-bold">Q1 2025</h3>
                  <p className="text-sm opacity-75">AI Consciousness Breakthrough</p>
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                <div className="w-1/2 pr-8"></div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-xl font-bold">Q2 2025</h3>
                  <p className="text-sm opacity-75">Quantum Interface Launch</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-xl font-bold">Q3 2025</h3>
                  <p className="text-sm opacity-75">Neural Network Revolution</p>
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-orange-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                <div className="w-1/2 pr-8"></div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-xl font-bold">Q4 2025</h3>
                  <p className="text-sm opacity-75">Interdimensional Technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Experience the Future Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Join the technological revolution and transform your business with our cutting-edge solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 font-semibold text-lg">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechShowcase2025;
import React from 'react';

const NextGenQuantumComputing2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            ⚡ QUANTUM BREAKTHROUGH • JANUARY 2025
          </div>
          <h1 className="text-6xl font-bold mb-6">Next-Gen Quantum Computing 2025</h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Unlock the power of quantum computing with our revolutionary quantum systems that solve impossible problems and accelerate innovation across all industries.
          </p>
        </div>

        {/* Quantum Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Exponential Speed</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Process complex calculations millions of times faster than classical computers
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Quantum parallelism</li>
              <li>• Exponential speedup</li>
              <li>• Complex optimization</li>
              <li>• Real-time processing</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🔐</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Cryptography</h3>
            <p className="text-purple-100 mb-6 text-center">
              Unbreakable encryption using quantum principles for ultimate security
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Quantum key distribution</li>
              <li>• Unbreakable encryption</li>
              <li>• Quantum random numbers</li>
              <li>• Future-proof security</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Molecular Simulation</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Simulate molecular interactions for drug discovery and materials science
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Drug discovery</li>
              <li>• Materials design</li>
              <li>• Chemical reactions</li>
              <li>• Molecular optimization</li>
            </ul>
          </div>
        </div>

        {/* Quantum Technologies */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Revolutionary Quantum Technologies</h2>
            <p className="text-xl opacity-90">Explore the cutting-edge quantum technologies that are reshaping computing</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">🔮 Quantum Supremacy</h3>
                <p className="text-gray-200">Achieve computational tasks that are impossible for classical computers, opening new frontiers in science and technology.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">🌊 Quantum Entanglement</h3>
                <p className="text-gray-200">Leverage quantum entanglement for instant communication and ultra-secure data transmission across any distance.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">⚛️ Quantum Annealing</h3>
                <p className="text-gray-200">Solve complex optimization problems using quantum annealing for logistics, finance, and resource allocation.</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">🔬 Quantum Machine Learning</h3>
                <p className="text-gray-200">Combine quantum computing with machine learning for unprecedented pattern recognition and data analysis capabilities.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">🌌 Quantum Simulation</h3>
                <p className="text-gray-200">Simulate quantum systems and complex physical phenomena for scientific research and technological advancement.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">🎯 Quantum Optimization</h3>
                <p className="text-gray-200">Optimize complex systems and processes using quantum algorithms for maximum efficiency and performance.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Applications Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Quantum Applications</h2>
            <p className="text-xl opacity-90">Discover how quantum computing is revolutionizing industries</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-8">
              <div className="text-5xl mb-6 text-center">🏥</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Healthcare & Life Sciences</h3>
              <ul className="text-cyan-200 space-y-3">
                <li>• Drug discovery acceleration</li>
                <li>• Protein folding simulation</li>
                <li>• Personalized medicine</li>
                <li>• Genetic analysis</li>
                <li>• Disease modeling</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8">
              <div className="text-5xl mb-6 text-center">💰</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Finance & Economics</h3>
              <ul className="text-purple-200 space-y-3">
                <li>• Risk modeling</li>
                <li>• Portfolio optimization</li>
                <li>• Fraud detection</li>
                <li>• Market simulation</li>
                <li>• Cryptocurrency security</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8">
              <div className="text-5xl mb-6 text-center">🌍</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Climate & Environment</h3>
              <ul className="text-emerald-200 space-y-3">
                <li>• Climate modeling</li>
                <li>• Carbon capture optimization</li>
                <li>• Renewable energy design</li>
                <li>• Environmental monitoring</li>
                <li>• Sustainable materials</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Quantum Performance Metrics</h2>
            <p className="text-xl opacity-90">See the incredible performance improvements quantum computing delivers</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">10^15</div>
              <div className="text-lg font-semibold mb-2">Speed Increase</div>
              <div className="text-sm text-gray-300">Times faster than classical computers</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-lg font-semibold mb-2">Accuracy Rate</div>
              <div className="text-sm text-gray-300">Quantum error correction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">∞</div>
              <div className="text-lg font-semibold mb-2">Security Level</div>
              <div className="text-sm text-gray-300">Unbreakable quantum encryption</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">24/7</div>
              <div className="text-lg font-semibold mb-2">Availability</div>
              <div className="text-sm text-gray-300">Continuous quantum processing</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Harness Quantum Power?</h2>
            <p className="text-xl mb-8 opacity-90">Join the quantum revolution and solve problems that were previously impossible</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-bold hover:bg-cyan-50 transition-colors">
                Access Quantum Cloud
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenQuantumComputing2025;
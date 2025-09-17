import React from 'react';

const QuantumBreakthroughShowcase2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              ⚡ QUANTUM BREAKTHROUGH • 2025
            </div>
            <h1 className="text-6xl font-bold mb-6">Quantum Breakthrough Showcase 2025</h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Witness the most significant quantum computing breakthroughs of 2025, featuring 
              quantum supremacy, error correction, and revolutionary applications
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Quantum Breakthroughs */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Supremacy Achieved</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Our quantum computers have achieved supremacy, solving problems impossible for classical computers
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• 1000+ logical qubits</li>
              <li>• Quantum error correction</li>
              <li>• Exponential speed gains</li>
              <li>• Real-world applications</li>
            </ul>
            <a href="/pages/QuantumComputingBreakthrough" className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
              Explore Quantum Supremacy →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🔬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Error Correction</h3>
            <p className="text-purple-100 mb-6 text-center">
              Revolutionary error correction techniques that make quantum computing practical and reliable
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Surface code implementation</li>
              <li>• Fault-tolerant operations</li>
              <li>• Noise reduction algorithms</li>
              <li>• Scalable architecture</li>
            </ul>
            <a href="/pages/QuantumComputingSolutions2025" className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
              Learn More →
            </a>
          </div>
        </div>

        {/* Quantum Applications */}
        <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Revolutionary Quantum Applications</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Discover how quantum computing is revolutionizing industries and solving complex problems
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
              <div className="text-5xl mb-4 text-center">🧬</div>
              <h3 className="text-xl font-semibold mb-4 text-center">Drug Discovery</h3>
              <p className="text-sm text-center opacity-90 mb-4">
                Quantum computers simulating molecular interactions for faster drug development
              </p>
              <ul className="text-sm space-y-1 text-center">
                <li>• Protein folding simulation</li>
                <li>• Molecular optimization</li>
                <li>• Drug interaction modeling</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
              <div className="text-5xl mb-4 text-center">🔐</div>
              <h3 className="text-xl font-semibold mb-4 text-center">Quantum Cryptography</h3>
              <p className="text-sm text-center opacity-90 mb-4">
                Unbreakable encryption using quantum principles for ultimate security
              </p>
              <ul className="text-sm space-y-1 text-center">
                <li>• Quantum key distribution</li>
                <li>• Post-quantum cryptography</li>
                <li>• Secure communication</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
              <div className="text-5xl mb-4 text-center">🌍</div>
              <h3 className="text-xl font-semibold mb-4 text-center">Climate Modeling</h3>
              <p className="text-sm text-center opacity-90 mb-4">
                Advanced climate simulations for better understanding and prediction
              </p>
              <ul className="text-sm space-y-1 text-center">
                <li>• Weather pattern analysis</li>
                <li>• Climate change modeling</li>
                <li>• Environmental optimization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quantum Technology Stack */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
            <h3 className="text-2xl font-bold mb-6 text-center">Quantum Hardware</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                <span>Superconducting qubits</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                <span>Trapped ion systems</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                <span>Topological qubits</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                <span>Photonic quantum computers</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30">
            <h3 className="text-2xl font-bold mb-6 text-center">Quantum Software</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                <span>Quantum algorithms</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                <span>Error correction protocols</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                <span>Quantum machine learning</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                <span>Hybrid classical-quantum systems</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for the Quantum Revolution?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join us in exploring the limitless possibilities of quantum computing and its transformative potential
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/pages/QuantumComputingSolutions2025" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Quantum Solutions
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 font-semibold text-lg">
              Get Quantum Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumBreakthroughShowcase2025;
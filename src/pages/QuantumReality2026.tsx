import React, { useState, useEffect } from 'react';

const QuantumReality2026: React.FC = () => {
  const [quantumState, setQuantumState] = useState('superposition');
  const [isObserved, setIsObserved] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isObserved) {
        setQuantumState(prev => prev === 'superposition' ? 'entangled' : 'superposition');
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [isObserved]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center text-white">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 mb-8">
              <span className="text-cyan-400">⚛️</span>
              <span className="text-cyan-300 font-semibold ml-2">QUANTUM REALITY 2026</span>
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Quantum Reality Simulation
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Step into a world where quantum mechanics shapes reality itself. Experience superposition, 
              entanglement, and quantum tunneling in an immersive virtual environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105 transform">
                🌌 Enter Quantum Realm
              </button>
              <button className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                🧪 Run Experiments
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quantum State Visualization */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-br from-gray-800/50 to-indigo-800/50 backdrop-blur-sm rounded-3xl p-12 border border-indigo-400/30">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Quantum State Visualization</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Observe quantum phenomena in real-time through our advanced visualization system
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Quantum Particle */}
            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-600/30">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Quantum Particle State</h3>
              <div className="relative h-64 bg-gradient-to-br from-indigo-900 to-purple-900 rounded-xl overflow-hidden">
                <div className={`absolute inset-0 transition-all duration-1000 ${
                  quantumState === 'superposition' 
                    ? 'bg-gradient-to-r from-cyan-400/30 to-purple-400/30 animate-pulse' 
                    : 'bg-gradient-to-r from-pink-400/30 to-orange-400/30'
                }`}>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className={`w-8 h-8 rounded-full transition-all duration-1000 ${
                      quantumState === 'superposition' 
                        ? 'bg-cyan-400 animate-ping' 
                        : 'bg-pink-400'
                    }`}></div>
                  </div>
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
                  <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white/30 rounded-full animate-pulse"></div>
                </div>
                <div className="absolute bottom-4 left-4 text-white text-sm font-semibold">
                  State: {quantumState === 'superposition' ? 'Superposition' : 'Entangled'}
                </div>
              </div>
              <div className="mt-6 flex justify-center space-x-4">
                <button 
                  onClick={() => setIsObserved(!isObserved)}
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  {isObserved ? 'Stop Observation' : 'Observe Particle'}
                </button>
              </div>
            </div>

            {/* Quantum Field */}
            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-600/30">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Quantum Field Fluctuations</h3>
              <div className="relative h-64 bg-gradient-to-br from-purple-900 to-indigo-900 rounded-xl overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 400 200">
                  <defs>
                    <linearGradient id="quantumGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8"/>
                      <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6"/>
                      <stop offset="100%" stopColor="#ec4899" stopOpacity="0.4"/>
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,100 Q100,50 200,100 T400,100"
                    stroke="url(#quantumGradient)"
                    strokeWidth="3"
                    fill="none"
                    className="animate-pulse"
                  />
                  <path
                    d="M0,120 Q100,80 200,120 T400,120"
                    stroke="url(#quantumGradient)"
                    strokeWidth="2"
                    fill="none"
                    className="animate-pulse"
                    style={{ animationDelay: '0.5s' }}
                  />
                  <path
                    d="M0,80 Q100,120 200,80 T400,80"
                    stroke="url(#quantumGradient)"
                    strokeWidth="2"
                    fill="none"
                    className="animate-pulse"
                    style={{ animationDelay: '1s' }}
                  />
                </svg>
                <div className="absolute bottom-4 left-4 text-white text-sm font-semibold">
                  Field Energy: {Math.floor(Math.random() * 100)}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quantum Phenomena */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Quantum Phenomena Explained</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the mind-bending principles that govern the quantum world
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Superposition */}
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌀</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Superposition</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Particles exist in multiple states simultaneously until observed
            </p>
            <div className="bg-gray-900/50 rounded-xl p-4 mb-4">
              <div className="flex justify-center space-x-4">
                <div className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-4 h-4 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
              <p className="text-cyan-200 text-sm text-center mt-2">Multiple states at once</p>
            </div>
            <button className="w-full bg-cyan-500 text-white py-3 rounded-lg hover:bg-cyan-600 transition-colors font-semibold">
              Learn More →
            </button>
          </div>

          {/* Entanglement */}
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🔗</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Entanglement</h3>
            <p className="text-purple-100 mb-6 text-center">
              Particles remain connected regardless of distance
            </p>
            <div className="bg-gray-900/50 rounded-xl p-4 mb-4">
              <div className="flex justify-between items-center">
                <div className="w-6 h-6 bg-purple-400 rounded-full"></div>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 mx-4"></div>
                <div className="w-6 h-6 bg-pink-400 rounded-full"></div>
              </div>
              <p className="text-purple-200 text-sm text-center mt-2">Instant connection</p>
            </div>
            <button className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition-colors font-semibold">
              Explore →
            </button>
          </div>

          {/* Tunneling */}
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🚪</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Quantum Tunneling</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Particles pass through barriers they shouldn't be able to cross
            </p>
            <div className="bg-gray-900/50 rounded-xl p-4 mb-4">
              <div className="relative">
                <div className="w-full h-2 bg-gray-600 rounded"></div>
                <div className="absolute top-0 left-0 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <div className="absolute top-0 right-0 w-2 h-2 bg-teal-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
              <p className="text-emerald-200 text-sm text-center mt-2">Barrier penetration</p>
            </div>
            <button className="w-full bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-600 transition-colors font-semibold">
              Discover →
            </button>
          </div>
        </div>
      </div>

      {/* Quantum Computing Applications */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-br from-gray-800/50 to-purple-800/50 backdrop-blur-sm rounded-3xl p-12 border border-purple-400/30">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Quantum Computing Applications</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how quantum computing is revolutionizing industries and solving impossible problems
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-indigo-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30">
              <div className="text-4xl mb-4 text-center">🔐</div>
              <h3 className="text-lg font-bold mb-2 text-center text-white">Cryptography</h3>
              <p className="text-indigo-100 text-sm text-center">Unbreakable quantum encryption</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
              <div className="text-4xl mb-4 text-center">🧬</div>
              <h3 className="text-lg font-bold mb-2 text-center text-white">Drug Discovery</h3>
              <p className="text-purple-100 text-sm text-center">Molecular simulation at scale</p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
              <div className="text-4xl mb-4 text-center">🌍</div>
              <h3 className="text-lg font-bold mb-2 text-center text-white">Climate Modeling</h3>
              <p className="text-cyan-100 text-sm text-center">Complex climate simulations</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30">
              <div className="text-4xl mb-4 text-center">🚀</div>
              <h3 className="text-lg font-bold mb-2 text-center text-white">Space Exploration</h3>
              <p className="text-orange-100 text-sm text-center">Navigation and communication</p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Quantum Lab */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-br from-gray-800/50 to-indigo-800/50 backdrop-blur-sm rounded-3xl p-12 border border-indigo-400/30">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Interactive Quantum Laboratory</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Conduct your own quantum experiments in our virtual laboratory
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-600/30">
              <h3 className="text-2xl font-bold text-white mb-6">Quantum Interference Experiment</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <button className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors">
                    Fire Photons
                  </button>
                  <span className="text-gray-300">→</span>
                  <div className="w-32 h-1 bg-gray-600 rounded"></div>
                  <span className="text-gray-300">→</span>
                  <div className="w-8 h-8 bg-purple-400 rounded-full animate-pulse"></div>
                </div>
                <p className="text-gray-300 text-sm">
                  Observe wave-particle duality in action as photons create interference patterns
                </p>
              </div>
            </div>
            
            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-600/30">
              <h3 className="text-2xl font-bold text-white mb-6">Bell State Preparation</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">+</span>
                  <div className="w-8 h-8 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">→</span>
                  <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded"></div>
                </div>
                <p className="text-gray-300 text-sm">
                  Create entangled particle pairs for quantum communication experiments
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Enter the Quantum Age</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience the future of computing and reality itself through quantum technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105 transform">
              ⚛️ Start Quantum Journey
            </button>
            <button className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
              🧪 Run Experiments
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumReality2026;
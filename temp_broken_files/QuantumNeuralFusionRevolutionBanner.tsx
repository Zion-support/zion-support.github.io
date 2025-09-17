import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const QuantumNeuralFusionRevolutionBanner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Revolutionary Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full px-8 py-3 mb-8 border border-cyan-300">
            <span className="text-lg font-bold">⚛️ QUANTUM-NEURAL FUSION REVOLUTION</span>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Quantum-Neural
            </span>
            <br />
            <span className="text-5xl md:text-7xl">Fusion Technology</span>
          </h1>

          {/* Revolutionary Subtitle */}
          <p className="text-2xl md:text-3xl mb-12 max-w-5xl mx-auto leading-relaxed font-light">
            The world's first integration of quantum computing with advanced neural networks. 
            Experience unprecedented processing power and intelligence capabilities.
          </p>

          {/* Revolutionary Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-300/30">
              <div className="text-6xl mb-6">🧠</div>
              <h3 className="text-2xl font-bold mb-4">Quantum Consciousness</h3>
              <p className="text-lg opacity-90">AI systems with quantum-enhanced consciousness that transcend traditional limitations</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-300/30">
              <div className="text-6xl mb-6">⚡</div>
              <h3 className="text-2xl font-bold mb-4">Neural Acceleration</h3>
              <p className="text-lg opacity-90">Processing speeds that exceed the speed of light through quantum entanglement</p>
            </div>
            <div className="bg-gradient-to-br from-pink-500/20 to-red-500/20 backdrop-blur-sm rounded-2xl p-8 border border-pink-300/30">
              <div className="text-6xl mb-6">🌟</div>
              <h3 className="text-2xl font-bold mb-4">Superintelligence</h3>
              <p className="text-lg opacity-90">Artificial general intelligence that surpasses human cognitive capabilities</p>
            </div>
          </div>

          {/* Revolutionary Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                10^15
              </div>
              <div className="text-sm opacity-80">Quantum Operations/Second</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                99.99%
              </div>
              <div className="text-sm opacity-80">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                ∞
              </div>
              <div className="text-sm opacity-80">Learning Capacity</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent mb-2">
                0ms
              </div>
              <div className="text-sm opacity-80">Response Time</div>
            </div>
          </div>

          {/* Revolutionary CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/quantum-neural-fusion"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-5 rounded-xl font-bold text-xl hover:from-cyan-600 hover:to-blue-700 transition-all transform hover:scale-105 shadow-2xl"
            >
              Experience the Revolution
            </a>
            <a
              href="/quantum-demo"
              className="border-2 border-cyan-400 text-cyan-400 px-10 py-5 rounded-xl font-bold text-xl hover:bg-cyan-400 hover:text-black transition-all"
            >
              Watch Live Demo
            </a>
          </div>

          {/* Warning Notice */}
          <div className="mt-12 p-6 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl border border-yellow-400/30">
            <p className="text-lg font-semibold text-yellow-300">
              ⚠️ Revolutionary Technology: This breakthrough represents the most advanced AI system ever created. 
              Limited access available to qualified enterprises.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumNeuralFusionRevolutionBanner;
import React from 'react';

const NeuralRealityBanner: React.FC = () => {
  return (
    <div
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 mb-8 text-white text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/50 to-pink-600/50 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <span className="text-4xl animate-pulse">🧠</span>
          <h3 className="text-4xl font-bold">NEURAL REALITY INTERFACE</h3>
          <span className="text-4xl animate-pulse">🧠</span>
        </div>
        <p className="text-2xl opacity-95 mb-6 max-w-5xl mx-auto">
          Step into the future with direct brain-computer interfaces, neural reality experiences, 
          and consciousness-computing integration
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
            <h4 className="text-lg font-semibold mb-2">🧠 Neural Interfaces</h4>
            <p className="text-sm opacity-90">Direct communication with digital systems through thought</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
            <h4 className="text-lg font-semibold mb-2">🌐 Virtual Reality</h4>
            <p className="text-sm opacity-90">Immersive experiences through neural input and feedback</p>
          </div>
        </div>
        <div className="mt-6">
          <a href="/pages/UltimateTechShowcase2026" className="inline-block bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold text-lg border border-white/30">
            Explore Neural Reality →
          </a>
        </div>
        <div className="mt-4 text-sm opacity-80">
          <span className="bg-white/20 px-3 py-1 rounded-full">🔬 Cutting-Edge Research</span>
          <span className="mx-2">•</span>
          <span className="bg-white/20 px-3 py-1 rounded-full">⚡ Real-Time Processing</span>
          <span className="mx-2">•</span>
          <span className="bg-white/20 px-3 py-1 rounded-full">🚀 Future Technology</span>
        </div>
      </div>
    </div>
  );
};


export default NeuralRealityBanner;

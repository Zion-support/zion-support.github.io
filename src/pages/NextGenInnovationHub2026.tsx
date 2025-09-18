import React from 'react';

const NextGenInnovationHub2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-sm font-semibold mb-6">
              🚀 NEXT-GEN INNOVATION HUB 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Innovation Hub 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              The central hub for next-generation innovations and breakthrough technologies
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
            <div className="text-5xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-4">AI Innovation Lab</h3>
            <p className="text-emerald-100 mb-4">
              Advanced AI research and development facility for next-generation intelligence
            </p>
            <ul className="text-emerald-200 space-y-2">
              <li>• Conscious AI development</li>
              <li>• Neural network optimization</li>
              <li>• Machine learning breakthroughs</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-teal-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-teal-400/30">
            <div className="text-5xl mb-4">⚛️</div>
            <h3 className="text-2xl font-bold mb-4">Quantum Research</h3>
            <p className="text-teal-100 mb-4">
              Cutting-edge quantum computing research and practical applications
            </p>
            <ul className="text-teal-200 space-y-2">
              <li>• Quantum algorithm development</li>
              <li>• Quantum networking protocols</li>
              <li>• Quantum-classical integration</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
            <div className="text-5xl mb-4">🌐</div>
            <h3 className="text-2xl font-bold mb-4">Future Technologies</h3>
            <p className="text-cyan-100 mb-4">
              Experimental technologies that will shape the future of humanity
            </p>
            <ul className="text-cyan-200 space-y-2">
              <li>• Biotechnology integration</li>
              <li>• Space technology advancement</li>
              <li>• Sustainable tech solutions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8">Join the Innovation Revolution</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Innovations →
            </button>
            <button className="border border-emerald-400 text-emerald-300 px-8 py-4 rounded-lg hover:bg-emerald-50 hover:text-emerald-600 transition-colors font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2026;
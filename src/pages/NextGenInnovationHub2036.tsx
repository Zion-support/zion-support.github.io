import React from 'react';

const NextGenInnovationHub2036: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-teal-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-full text-sm font-semibold mb-6">
              🚀 NEXT-GEN INNOVATION HUB 2036
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
              Innovation Hub 2036
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              The future of innovation - where breakthrough technologies are born and perfected
            </p>
          </div>
        </div>
      </div>

      {/* Innovation Areas */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-green-600/30 to-emerald-600/30 backdrop-blur-sm rounded-xl p-8 border border-green-400/30">
            <div className="text-5xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-4">AI Innovation Lab</h3>
            <p className="text-green-100 mb-4">
              Advanced research facility for next-generation artificial intelligence
            </p>
            <ul className="text-green-200 space-y-2">
              <li>• Conscious AI development</li>
              <li>• Neural architecture research</li>
              <li>• Cognitive computing advances</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
            <div className="text-5xl mb-4">⚛️</div>
            <h3 className="text-2xl font-bold mb-4">Quantum Research</h3>
            <p className="text-emerald-100 mb-4">
              Cutting-edge quantum computing and physics research center
            </p>
            <ul className="text-emerald-200 space-y-2">
              <li>• Quantum algorithm development</li>
              <li>• Quantum-classical integration</li>
              <li>• Quantum networking protocols</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-teal-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-teal-400/30">
            <div className="text-5xl mb-4">🌐</div>
            <h3 className="text-2xl font-bold mb-4">Future Tech Division</h3>
            <p className="text-teal-100 mb-4">
              Experimental technologies for the next decade and beyond
            </p>
            <ul className="text-teal-200 space-y-2">
              <li>• Biotechnology integration</li>
              <li>• Space technology advancement</li>
              <li>• Sustainable innovation</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8">Join the Innovation Revolution</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Innovations →
            </button>
            <button className="border border-green-400 text-green-300 px-8 py-4 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2036;
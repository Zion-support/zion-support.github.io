import React from 'react';

const SyntheticBiologyRevolution2027: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🧬 SYNTHETIC BIOLOGY • 2027
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Synthetic Biology Revolution 2027
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the future of life itself with revolutionary synthetic biology 
            that creates new life forms and transforms human existence.
          </p>
        </div>

        {/* Revolutionary Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Synthetic DNA</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Create custom life forms with programmable DNA sequences
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Custom genetic codes</li>
              <li>• Designer organisms</li>
              <li>• Bio-manufacturing</li>
              <li>• Therapeutic applications</li>
            </ul>
            <button className="w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
              Design Life →
            </button>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🔬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Bio-Engineering</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Engineer biological systems for enhanced human capabilities
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Enhanced organs</li>
              <li>• Disease resistance</li>
              <li>• Longevity treatments</li>
              <li>• Cognitive enhancement</li>
            </ul>
            <button className="w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
              Enhance Biology →
            </button>
          </div>

          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌱</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Living Materials</h3>
            <p className="text-purple-100 mb-6 text-center">
              Create self-healing, self-replicating materials from living cells
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Self-healing structures</li>
              <li>• Living buildings</li>
              <li>• Bio-computers</li>
              <li>• Environmental repair</li>
            </ul>
            <button className="w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
              Create Living Materials →
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Redesign Life?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join the synthetic biology revolution and help create the future of life itself
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey →
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SyntheticBiologyRevolution2027;
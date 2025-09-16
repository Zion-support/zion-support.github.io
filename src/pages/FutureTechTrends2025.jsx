import React from "react";

const FutureTechTrends2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Future Tech Trends 2025
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionary technology solutions and insights for the future
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-4">AI Revolution</h3>
            <p className="text-gray-300 mb-6">
              Advanced artificial intelligence systems that will transform industries
            </p>
            <ul className="text-blue-200 space-y-2 text-sm">
              <li>• Autonomous AI agents</li>
              <li>• Edge AI computing</li>
              <li>• Generative AI 2.0</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4">Quantum Computing</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary quantum technology solving impossible problems
            </p>
            <ul className="text-purple-200 space-y-2 text-sm">
              <li>• Exponential speed</li>
              <li>• Quantum cryptography</li>
              <li>• Molecular simulation</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-indigo-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30">
            <div className="text-4xl mb-4">🧬</div>
            <h3 className="text-2xl font-bold mb-4">Neural Interfaces</h3>
            <p className="text-gray-300 mb-6">
              Direct brain-computer interfaces bridging mind and machine
            </p>
            <ul className="text-indigo-200 space-y-2 text-sm">
              <li>• Non-invasive BCI</li>
              <li>• Thought control</li>
              <li>• Neural feedback</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-6">Ready for the Future?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join us in exploring the most revolutionary technology trends of 2025
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Trends →
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureTechTrends2025;
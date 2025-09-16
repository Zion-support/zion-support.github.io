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
            Discover the revolutionary technology trends that will shape the future
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-800/50 to-purple-800/50 rounded-xl p-6 backdrop-blur-sm border border-blue-400/20">
            <h3 className="text-2xl font-bold mb-4 text-blue-300">AI Revolution</h3>
            <p className="text-gray-300 mb-4">
              Artificial intelligence is transforming every industry with unprecedented capabilities
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Generative AI</li>
              <li>• Autonomous Systems</li>
              <li>• AI-Powered Automation</li>
              <li>• Conversational AI</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 rounded-xl p-6 backdrop-blur-sm border border-purple-400/20">
            <h3 className="text-2xl font-bold mb-4 text-purple-300">Quantum Computing</h3>
            <p className="text-gray-300 mb-4">
              Quantum computing is solving problems that were previously impossible
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Quantum Supremacy</li>
              <li>• Quantum Algorithms</li>
              <li>• Quantum Cryptography</li>
              <li>• Quantum Machine Learning</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-green-800/50 to-teal-800/50 rounded-xl p-6 backdrop-blur-sm border border-green-400/20">
            <h3 className="text-2xl font-bold mb-4 text-green-300">Neural Interfaces</h3>
            <p className="text-gray-300 mb-4">
              Direct brain-computer interfaces are becoming a reality
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Brain-Computer Interfaces</li>
              <li>• Neural Prosthetics</li>
              <li>• Thought-Controlled Devices</li>
              <li>• Memory Enhancement</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureTechTrends2025;
import React from 'react';

const NewAIUseCases2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            New AI Use Cases 2025
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the latest AI applications and use cases that are transforming industries in 2025
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-800/50 to-purple-800/50 rounded-xl p-6 backdrop-blur-sm border border-blue-400/20">
            <h3 className="text-2xl font-bold mb-4 text-blue-300">Autonomous AI Agents</h3>
            <p className="text-gray-300 mb-4">
              Self-managing AI systems that can handle complex tasks without human intervention
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Customer service automation</li>
              <li>• Content generation and curation</li>
              <li>• Data analysis and reporting</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 rounded-xl p-6 backdrop-blur-sm border border-purple-400/20">
            <h3 className="text-2xl font-bold mb-4 text-purple-300">AI-Powered Creativity</h3>
            <p className="text-gray-300 mb-4">
              Advanced AI systems that enhance human creativity and artistic expression
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Music and art generation</li>
              <li>• Creative writing assistance</li>
              <li>• Design and architecture</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-green-800/50 to-teal-800/50 rounded-xl p-6 backdrop-blur-sm border border-green-400/20">
            <h3 className="text-2xl font-bold mb-4 text-green-300">Healthcare AI</h3>
            <p className="text-gray-300 mb-4">
              Revolutionary AI applications in medical diagnosis and treatment
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Medical image analysis</li>
              <li>• Drug discovery acceleration</li>
              <li>• Personalized treatment plans</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAIUseCases2025;
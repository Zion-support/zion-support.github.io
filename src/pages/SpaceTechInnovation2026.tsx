import React from 'react';

const SpaceTechInnovation2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Space Tech Innovation 2026
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionary space technology solutions that push the boundaries of space exploration
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4">🚀 Advanced Propulsion</h3>
            <p className="text-gray-200">
              Revolutionary propulsion systems for faster and more efficient space travel.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4">⚡ Quantum Space Tech</h3>
            <p className="text-gray-200">
              Quantum-enhanced space technology with unprecedented capabilities.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4">🌟 Space Habitats</h3>
            <p className="text-gray-200">
              Advanced space habitat technology for long-term space exploration.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a
            href="/services"
            className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Learn More About Space Tech →
          </a>
        </div>
      </div>
    </div>
  );
};

export default SpaceTechInnovation2026;
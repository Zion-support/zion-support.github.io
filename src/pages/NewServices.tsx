import React from 'react';

const NewServices: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-8">
          New Services
        </h1>
        <p className="text-xl text-center text-gray-300 mb-12">
          Discover our latest innovative solutions
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-3">AI Autonomous Systems</h3>
            <p className="text-gray-300">Next-generation autonomous AI solutions</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-3">Quantum Computing</h3>
            <p className="text-gray-300">Quantum-powered computational solutions</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-3">Edge AI</h3>
            <p className="text-gray-300">Intelligent edge computing solutions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewServices;
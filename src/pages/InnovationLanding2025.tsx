import React from 'react';

const InnovationLanding2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6">Innovation Landing 2025</h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover the latest innovations and breakthrough technologies
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">AI Innovation</h3>
            <p className="text-blue-100">Cutting-edge artificial intelligence solutions</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Quantum Computing</h3>
            <p className="text-blue-100">Revolutionary quantum computing technologies</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Neural Interfaces</h3>
            <p className="text-blue-100">Direct brain-computer interface solutions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovationLanding2025;
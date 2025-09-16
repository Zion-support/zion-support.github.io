import React from 'react';

const InnovationLanding2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Innovation Landing 2025
          </h1>
          <p className="text-xl text-gray-600">
            Welcome to the future of technology and innovation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">AI Innovation</h3>
            <p className="text-gray-600">
              Cutting-edge artificial intelligence solutions.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Quantum Computing</h3>
            <p className="text-gray-600">
              Revolutionary quantum computing technologies.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Cybersecurity</h3>
            <p className="text-gray-600">
              Advanced security solutions for the digital age.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovationLanding2025;
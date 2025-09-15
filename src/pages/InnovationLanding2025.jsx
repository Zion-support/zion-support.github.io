import React from 'react';

const InnovationLanding2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Innovation Landing 2025</h1>
          <p className="text-xl text-gray-700">
            Discover the latest innovations and breakthrough technologies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-4xl mb-4">🚀</div>
            <h2 className="text-2xl font-bold mb-4">Innovation Hub</h2>
            <p className="text-gray-600">
              Explore cutting-edge technologies and breakthrough innovations.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-4xl mb-4">💡</div>
            <h2 className="text-2xl font-bold mb-4">Creative Solutions</h2>
            <p className="text-gray-600">
              Discover creative solutions to complex business challenges.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-4xl mb-4">🌟</div>
            <h2 className="text-2xl font-bold mb-4">Future Tech</h2>
            <p className="text-gray-600">
              Experience the future of technology today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovationLanding2025;
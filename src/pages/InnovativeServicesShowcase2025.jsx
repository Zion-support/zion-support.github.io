import React from 'react';

const InnovativeServicesShowcase2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Innovative Services Showcase 2025
          </h1>
          <p className="text-xl text-gray-600">
            Discover our cutting-edge services that are transforming industries
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">AI Solutions</h3>
            <p className="text-gray-600">
              Advanced artificial intelligence solutions for your business needs.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Cloud Services</h3>
            <p className="text-gray-600">
              Scalable cloud infrastructure and deployment solutions.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Blockchain</h3>
            <p className="text-gray-600">
              Secure, decentralized solutions powered by blockchain technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovativeServicesShowcase2025;
import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
          Our Services
        </h1>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">AI Services</h3>
            <p className="text-gray-300">
              Advanced artificial intelligence solutions to automate and optimize your business processes.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">IT Services</h3>
            <p className="text-gray-300">
              Comprehensive IT solutions including cloud computing, cybersecurity, and infrastructure management.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Micro SaaS</h3>
            <p className="text-gray-300">
              Custom micro software-as-a-service solutions tailored to your specific business needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
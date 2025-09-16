import React from 'react';

const FutureTechTrends2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Future Tech Trends 2025
          </h1>
          <p className="text-xl text-gray-600">
            Discover the technology trends that will shape the future
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">AI Revolution</h3>
            <p className="text-gray-600">
              Artificial intelligence transforming every industry.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Quantum Computing</h3>
            <p className="text-gray-600">
              Next-generation computing power and capabilities.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Neural Interfaces</h3>
            <p className="text-gray-600">
              Direct brain-computer interfaces and communication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureTechTrends2025;
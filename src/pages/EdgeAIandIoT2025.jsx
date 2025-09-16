import React from 'react';

const EdgeAIandIoT2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Edge AI and IoT 2025
          </h1>
          <p className="text-xl text-gray-600">
            Next-generation edge computing and IoT solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Edge AI</h3>
            <p className="text-gray-600">
              AI processing at the edge for real-time insights.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">IoT Solutions</h3>
            <p className="text-gray-600">
              Connected devices and smart infrastructure.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Real-time Analytics</h3>
            <p className="text-gray-600">
              Instant data processing and decision making.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EdgeAIandIoT2025;
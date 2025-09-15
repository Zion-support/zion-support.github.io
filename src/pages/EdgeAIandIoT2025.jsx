import React from 'react';

const EdgeAIandIoT2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Edge AI and IoT 2025</h1>
          <p className="text-xl text-gray-700">
            Edge computing and IoT solutions powered by AI
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-4xl mb-4">🌐</div>
            <h2 className="text-2xl font-bold mb-4">Edge Computing</h2>
            <p className="text-gray-600">
              Edge computing solutions for real-time processing.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-4xl mb-4">📡</div>
            <h2 className="text-2xl font-bold mb-4">IoT Networks</h2>
            <p className="text-gray-600">
              Internet of Things networks and connectivity solutions.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-4xl mb-4">⚡</div>
            <h2 className="text-2xl font-bold mb-4">Real-time AI</h2>
            <p className="text-gray-600">
              Real-time AI processing at the edge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EdgeAIandIoT2025;
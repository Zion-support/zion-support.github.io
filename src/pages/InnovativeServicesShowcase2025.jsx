import React from 'react';

const InnovativeServicesShowcase2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Innovative Services Showcase 2025</h1>
          <p className="text-xl text-gray-700">
            Explore our comprehensive range of innovative technology services
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-4xl mb-4">🤖</div>
            <h2 className="text-2xl font-bold mb-4">AI Solutions</h2>
            <p className="text-gray-600">
              Advanced artificial intelligence solutions for your business needs.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-4xl mb-4">☁️</div>
            <h2 className="text-2xl font-bold mb-4">Cloud Services</h2>
            <p className="text-gray-600">
              Scalable cloud infrastructure and deployment solutions.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-4xl mb-4">🔒</div>
            <h2 className="text-2xl font-bold mb-4">Security</h2>
            <p className="text-gray-600">
              Comprehensive cybersecurity solutions and protection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default InnovativeServicesShowcase2025;

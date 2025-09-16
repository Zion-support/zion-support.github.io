import React from 'react';

const InnovativeServicesShowcase2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Innovative Services Showcase 2025</h1>
          <p className="text-xl text-gray-600">Explore our cutting-edge services and solutions</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">AI Solutions</h3>
            <p className="text-gray-600">Advanced artificial intelligence services</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Cloud Services</h3>
            <p className="text-gray-600">Scalable cloud infrastructure solutions</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Cybersecurity</h3>
            <p className="text-gray-600">Comprehensive security solutions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovativeServicesShowcase2025;
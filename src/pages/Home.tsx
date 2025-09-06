import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to Zion Tech</h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          Your trusted partner for AI and IT solutions
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">AI Solutions</h2>
            <p className="text-gray-600">
              Cutting-edge artificial intelligence solutions for your business needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">IT Services</h2>
            <p className="text-gray-600">
              Comprehensive IT services and infrastructure management.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Cloud Solutions</h2>
            <p className="text-gray-600">
              Scalable cloud infrastructure and migration services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
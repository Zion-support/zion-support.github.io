import React from 'react';

const ComprehensiveServices: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Comprehensive Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-16">
          Complete technology solutions for your business needs.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              AI Solutions
            </h3>
            <p className="text-gray-600 mb-6">
              Advanced artificial intelligence services.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              IT Services
            </h3>
            <p className="text-gray-600 mb-6">
              Complete IT infrastructure management.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Micro SaaS
            </h3>
            <p className="text-gray-600 mb-6">
              Scalable software solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveServices;
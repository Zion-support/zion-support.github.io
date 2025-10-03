import React from 'react';

const Support: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Support Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get help and support for all our services and solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Documentation</h3>
            <p className="text-gray-600 mb-6">
              Comprehensive guides and documentation for all our products.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Contact Support</h3>
            <p className="text-gray-600 mb-6">
              Reach out to our support team for technical assistance.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">FAQ</h3>
            <p className="text-gray-600 mb-6">
              Find answers to frequently asked questions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
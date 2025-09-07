import React from 'react';
import { Helmet } from 'react-helmet-async';
const Marketplace: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Marketplace - Zion Tech Group</title>
        <meta name="description" content="Browse and purchase technology solutions, services, and equipment from Zion Tech Group's comprehensive marketplace." />
      </Helmet>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Marketplace</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse and purchase technology solutions, services, and equipment from our comprehensive marketplace.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 text-center">
              Marketplace coming soon. We're building a comprehensive technology marketplace.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Marketplace;

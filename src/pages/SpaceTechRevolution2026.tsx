import React from 'react';
import { Helmet }  from 'react-helmet-async';

const SpaceTechRevolution2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <Helmet>
        <title>SpaceTechRevolution2026 - Zion Tech Group</title>
        <meta name="description" content="Advanced technology solutions and services from Zion Tech Group." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            SpaceTechRevolution2026
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            This page is currently under development. Please check back soon for updates.
          </p>
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              We're working hard to bring you the latest in technology innovation. 
              This page will be available soon with comprehensive information about our services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  };
export default SpaceTechRevolution2026;
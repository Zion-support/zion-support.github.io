import React from 'react';
import { Helmet } from 'react-helmet-async';

const Enterprise: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Enterprise Solutions - Zion Tech Group</title>
        <meta name="description" content="Enterprise-grade technology solutions from Zion Tech Group. Transform your business with our comprehensive services." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Enterprise Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed for enterprise-scale organizations.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 text-center">
              Enterprise solutions page coming soon. We're building comprehensive enterprise offerings.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Enterprise;
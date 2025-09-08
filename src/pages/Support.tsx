import React from 'react';
import { Helmet } from 'react-helmet-async';

const Support: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for our services." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">
            Support
          </h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Get help and support for our services
          </p>
        </div>
      </div>
    </>
  );
};

export default Support;
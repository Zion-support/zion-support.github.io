import React from 'react';
import { Helmet } from 'react-helmet-async';

const Terms: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Our terms of service and usage guidelines." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Our terms and conditions for using our services
          </p>
        </div>
      </div>
    </>
  );
};

export default Terms;
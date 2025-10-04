import React from 'react';
import { Helmet } from 'react-helmet-async';

const Terms: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta
          name="description"
          content="Terms of Service for Zion Tech Group - Learn about our terms and conditions for using our services."
        />
      </Helmet>
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service - Zion Tech Group</h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is currently under development. Please check back soon for updates.
          </p>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <p className="text-gray-600">
              We are working on creating comprehensive terms of service that will outline the terms and conditions for using our services. Thank you for your patience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
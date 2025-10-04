import React from 'react';
import { Helmet } from 'react-helmet-async';

const Terms: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group - Learn about our terms and conditions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-gray-600 mb-4">
                This page is currently under development. Please check back soon for our complete terms of service.
              </p>
              <p className="text-gray-600">
                For any terms-related questions, please contact us at legal@ziontechgroup.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;

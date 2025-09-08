import React from 'react';
import { Helmet } from 'react-helmet-async';

const MobileDevelopment: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Mobile Development - Zion Tech Group</title>
        <meta name="description" content="Custom mobile applications for iOS and Android." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">
            Mobile Development
          </h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Custom mobile applications for iOS and Android
          </p>
        </div>
      </div>
    </>
  );
};

export default MobileDevelopment;
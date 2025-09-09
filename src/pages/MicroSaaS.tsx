import React from 'react';
import { Helmet } from 'react-helmet-async';

const MicroSaaS: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Micro SaaS - Zion Tech Group</title>
        <meta name="description" content="Scalable micro SaaS applications for your business needs." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">
            Micro SaaS
          </h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Scalable micro SaaS applications designed for specific business needs
          </p>
        </div>
      </div>
    </>
  );
};

export default MicroSaaS;
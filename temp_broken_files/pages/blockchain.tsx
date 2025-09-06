import React from 'react';
import Head from 'next/head';

const BlockchainPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Blockchain Solutions - Zion Tech Group</title>
        <meta name="description" content="Blockchain technology solutions and services" />
      </Head>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Blockchain Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our cutting-edge blockchain technology solutions and services.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockchainPage;
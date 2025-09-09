import React from 'react';
import { Helmet } from 'react-helmet-async';

const Cybersecurity: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cybersecurity - Zion Tech Group</title>
        <meta name="description" content="Advanced security solutions to protect your business." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">
            Cybersecurity
          </h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Protect your business from evolving threats
          </p>
        </div>
      </div>
    </>
  );
};

export default Cybersecurity;
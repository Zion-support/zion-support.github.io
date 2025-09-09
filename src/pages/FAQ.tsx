import React from 'react';
import { Helmet } from 'react-helmet-async';

const FAQ: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>FAQ - Zion Tech Group</title>
        <meta name="description" content="Frequently asked questions about our services." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Find answers to common questions about our services
          </p>
        </div>
      </div>
    </>
  );
};

export default FAQ;
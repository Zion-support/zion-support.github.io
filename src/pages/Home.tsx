import React from 'react';
import { Helmet } from 'react-helmet-async';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - AI Micro SaaS and IT Services</title>
        <meta name="description" content="Enterprise-grade AI micro SaaS and IT solutions. Transform your business with cutting-edge technology and automation." />
      </Helmet>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Zion Tech Group</h1>
            <p className="text-xl text-gray-600 mb-8">
              Enterprise-grade AI micro SaaS and IT solutions
            </p>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-600">Homepage content coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
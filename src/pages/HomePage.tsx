import React from 'react';
import { Helmet } from 'react-helmet-async';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - AI & IT Solutions</title>
        <meta
          name="description"
          content="Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services."
        />
      </Helmet>
      <div className="min-h-screen bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              Welcome to <span className="text-blue-400">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leading provider of AI-powered enterprise solutions, quantum computing, 
              autonomous systems, and digital transformation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Get Started
              </a>
              <a
                href="/services"
                className="bg-transparent hover:bg-blue-600 text-blue-400 font-semibold hover:text-white py-3 px-8 border border-blue-500 hover:border-transparent rounded-lg transition-colors"
              >
                Our Services
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">AI Solutions</h3>
              <p className="text-gray-300">
                Advanced artificial intelligence solutions for enterprise applications.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Quantum Computing</h3>
              <p className="text-gray-300">
                Cutting-edge quantum computing research and applications.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Digital Transformation</h3>
              <p className="text-gray-300">
                Complete digital transformation services for modern businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
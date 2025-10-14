import React from 'react';
import { Helmet } from 'react-helmet-async';

const SolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT solutions by Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Our Solutions</h1>
            <p className="text-xl text-gray-300 text-center mb-12">
              Comprehensive AI and IT solutions tailored to your business needs
            </p>
            <section className="mb-16">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="h-12 w-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">AI</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">AI Solutions</h3>
                  <p className="text-gray-300">
                    Advanced artificial intelligence solutions for business automation and optimization.
                  </p>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="h-12 w-12 bg-green-600 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">☁️</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Cloud Services</h3>
                  <p className="text-gray-300">
                    Scalable and secure cloud infrastructure solutions.
                  </p>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="h-12 w-12 bg-red-600 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">🔒</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Cybersecurity</h3>
                  <p className="text-gray-300">
                    Comprehensive security solutions to protect your digital assets.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolutionsPage;
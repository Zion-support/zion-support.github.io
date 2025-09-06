

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

=======

import React from 'react';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">IT Solutions</h3>
            <p className="text-gray-600">
              Comprehensive IT infrastructure and support services.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">AI Services</h3>
            <p className="text-gray-600">
              Artificial intelligence solutions and automation services.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Blockchain</h3>
            <p className="text-gray-600">
              Blockchain development and Web3 solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ServicesPage;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

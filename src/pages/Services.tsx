import React from 'react';
// import Footer from '../components/Footer';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Our Services</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">AI Solutions</h3>
              <p className="text-gray-300">
                Custom artificial intelligence solutions tailored to your business needs.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">IT Consulting</h3>
              <p className="text-gray-300">
                Strategic IT consulting to optimize your technology infrastructure.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Data Analytics</h3>
              <p className="text-gray-300">
                Advanced data analytics to drive informed business decisions.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
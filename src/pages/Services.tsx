import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">Comprehensive technology solutions for your business</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Solutions</h3>
            <p className="text-gray-600">Leverage artificial intelligence to automate processes and gain insights.</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Web Development</h3>
            <p className="text-gray-600">Modern, responsive web applications built with cutting-edge technologies.</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Services</h3>
            <p className="text-gray-600">Scalable cloud infrastructure and deployment solutions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and technology services from Zion Tech Group. Quantum computing, autonomous enterprise, and ROI optimization solutions." />
      </Helmet>
      
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 mb-8">
            Comprehensive AI and technology solutions to transform your business
          </p>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <p className="text-gray-600">
              Our services page is currently under development. Please contact us for more information about our AI and technology solutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
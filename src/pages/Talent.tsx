import React from 'react';
import { Helmet } from 'react-helmet-async';

const Talent: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Talent - Zion Tech Group</title>
        <meta name="description" content="Find and hire top technology talent through Zion Tech Group. Connect with skilled professionals for your projects." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Talent</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find and hire top technology talent for your projects. Connect with skilled professionals across all technology domains.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 text-center">
              Talent page coming soon. We're building a comprehensive talent platform.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Talent;
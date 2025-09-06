import React from 'react';

const RequestQuote: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Request a Quote</h1>
        <p className="text-xl text-gray-600 mb-8">
          Get a personalized quote for your project needs.
        </p>
        <a 
          href="/contact" 
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Contact Us for Quote
        </a>
      </div>
    </div>
  );
};

export default RequestQuote;
import React from 'react';

const IndexPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-4xl font-bold mb-4">Zion Tech Group</h1>
        <p className="text-gray-300 mb-6">Home is managed by the SPA router. Visit our services to explore offerings.</p>
        <a href="/services" className="inline-block bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-lg font-semibold">Explore Services</a>
      </div>
    </div>
  );
};

export default IndexPage;
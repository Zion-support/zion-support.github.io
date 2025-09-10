import React from 'react';
import SEO from '../../components/SEO';

const IoTEdgeComputing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="IoT Edge Computing - Zion Tech Group"
        description="IoT and edge computing solutions for connected devices and real-time data processing."
      />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto text-white">
          <h1 className="text-5xl font-bold mb-8 text-center">IoT Edge Computing</h1>
          <p className="text-xl text-gray-300 mb-12 text-center">
            Connect and process data at the edge
          </p>
          <div className="text-center">
            <p className="text-lg text-gray-400">Service details coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IoTEdgeComputing;
import React from 'react';
import SEO from '../components/SEO';

const ScheduleDemo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Schedule Demo - Zion Tech Group"
        description="Schedule a personalized demo of our AI-powered technology solutions."
      />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-white">
          <h1 className="text-5xl font-bold mb-8 text-center">Schedule a Demo</h1>
          <div className="text-center">
            <p className="text-lg text-gray-400">Demo scheduling coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleDemo;
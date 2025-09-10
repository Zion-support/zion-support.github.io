import React from 'react';
import SEO from '../components/SEO';

const WhitePapers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="White Papers - Zion Tech Group"
        description="Access our comprehensive collection of white papers on AI, technology trends, and industry insights."
      />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-white">
          <h1 className="text-5xl font-bold mb-8 text-center">White Papers</h1>
          <div className="text-center">
            <p className="text-lg text-gray-400">White papers coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhitePapers;
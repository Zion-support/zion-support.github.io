import React from 'react';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Zion Tech Group
          </h1>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Revolutionary Technology Solutions with AI, Quantum Computing, and Autonomous Solutions
          </p>
          <div className="space-x-4">
            <a 
              href="/innovative-services-showcase-2027" 
              className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Explore Services
            </a>
            <a 
              href="/comprehensive-pricing-2027" 
              className="inline-block bg-transparent border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              View Pricing
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

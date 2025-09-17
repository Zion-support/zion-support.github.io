import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const NewContent2025FutureTrendsBanner = () => {
  return (
    <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Future Trends 2025
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-teal-100">
            Stay ahead of the curve with cutting-edge AI technologies and emerging trends that will shape the future of business
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-bold mb-3 text-emerald-400">Quantum AI</h3>
            <p className="text-teal-100 text-sm">Next-generation computing power</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-bold mb-3 text-emerald-400">Autonomous Systems</h3>
            <p className="text-teal-100 text-sm">Self-managing business operations</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-bold mb-3 text-emerald-400">Neural Networks</h3>
            <p className="text-teal-100 text-sm">Advanced pattern recognition</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-bold mb-3 text-emerald-400">Predictive Analytics</h3>
            <p className="text-teal-100 text-sm">Future-ready decision making</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/ai-2025-2026-ultimate-breakthrough" 
            className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-emerald-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105"
          >
            Explore Future Trends
          </a>
          <a 
            href="/contact" 
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-emerald-900 transition-all duration-300"
          >
            Get Expert Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025FutureTrendsBanner;
import React from 'react';
import { SEO } from '@/components/SEO';

const GreenIT = () => {
  return (
    <>
      <SEO 
        title="Green IT Solutions - Zion Tech Group"
        description="Sustainable technology solutions for a greener future. Eco-friendly IT services and green computing solutions."
        keywords="green IT, sustainable technology, eco-friendly computing, green solutions"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Green <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">IT Solutions</span>
            </h1>
            <p className="text-xl text-green-200 max-w-3xl mx-auto">
              Sustainable technology solutions for a greener, more efficient future
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-green-400/20">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold text-white mb-3">Energy Efficiency</h3>
              <p className="text-green-200 mb-4">Optimize power consumption and reduce carbon footprint</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-green-400/20">
              <div className="text-4xl mb-4">♻️</div>
              <h3 className="text-xl font-semibold text-white mb-3">Sustainable Practices</h3>
              <p className="text-green-200 mb-4">Implement eco-friendly IT strategies and policies</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-green-400/20">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-white mb-3">Environmental Impact</h3>
              <p className="text-green-200 mb-4">Reduce environmental impact through smart technology</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GreenIT;
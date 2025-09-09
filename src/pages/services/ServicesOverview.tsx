import React from 'react';
import { SEO } from "@/components/SEO";

const ServicesOverview: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zion-blue-dark to-zion-blue-darker">
      <SEO 
        title="Services Overview - Zion Tech Group"
        description="Comprehensive overview of our AI, IT, and technology services designed to transform your business."
        keywords="services, AI, IT, technology, solutions, overview"
      />
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-zion-blue-light max-w-3xl mx-auto">
            Comprehensive AI, IT, and technology services designed to transform your business.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">AI Autonomous Systems</h3>
              <p className="text-zion-blue-light">
                Cutting-edge AI solutions that automate processes and enhance decision-making.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
              <p className="text-zion-blue-light">
                Comprehensive security solutions to protect your digital assets and data.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">IT Infrastructure</h3>
              <p className="text-zion-blue-light">
                Robust IT infrastructure solutions for scalable and reliable operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;
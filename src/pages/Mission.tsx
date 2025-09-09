import React from 'react';
import { SEO } from "@/components/SEO";

const Mission: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zion-blue-dark to-zion-blue-darker">
      <SEO 
        title="Our Mission - Zion Tech Group"
        description="Learn about Zion Tech Group's mission to revolutionize technology through AI, innovation, and cutting-edge solutions."
        keywords="mission, technology, AI, innovation, vision"
      />
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Our Mission</h1>
          <p className="text-xl text-zion-blue-light max-w-3xl mx-auto">
            To revolutionize technology through AI, innovation, and cutting-edge solutions that transform businesses and empower communities.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">Empowering the Future</h2>
            <p className="text-lg text-zion-blue-light mb-6">
              At Zion Tech Group, we believe technology should be accessible, powerful, and transformative. 
              Our mission is to bridge the gap between cutting-edge innovation and practical business solutions.
            </p>
            <p className="text-lg text-zion-blue-light">
              We're committed to delivering exceptional value through AI-powered solutions, 
              comprehensive IT services, and innovative micro SAAS platforms that drive real results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
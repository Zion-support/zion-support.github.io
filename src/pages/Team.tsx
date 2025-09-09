import React from 'react';
import { SEO } from "@/components/SEO";

const Team: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zion-blue-dark to-zion-blue-darker">
      <SEO 
        title="Our Team - Zion Tech Group"
        description="Meet the expert team behind Zion Tech Group's innovative technology solutions and AI-powered services."
        keywords="team, experts, technology, AI, professionals"
      />
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Our Team</h1>
          <p className="text-xl text-zion-blue-light max-w-3xl mx-auto">
            Meet the expert team behind our innovative technology solutions and AI-powered services.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">Expert Professionals</h2>
            <p className="text-lg text-zion-blue-light mb-6">
              Our team consists of industry experts, AI specialists, and technology professionals 
              who are passionate about delivering exceptional solutions.
            </p>
            <p className="text-lg text-zion-blue-light">
              With years of experience in AI, machine learning, cybersecurity, and IT infrastructure, 
              we're equipped to tackle the most complex technological challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
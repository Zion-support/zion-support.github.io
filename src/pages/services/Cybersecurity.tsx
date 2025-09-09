import React from 'react';
import { SEO } from "@/components/SEO";

const Cybersecurity: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zion-blue-dark to-zion-blue-darker">
      <SEO 
        title="Cybersecurity Services - Zion Tech Group"
        description="Comprehensive cybersecurity solutions to protect your digital assets and ensure business continuity."
        keywords="cybersecurity, security, protection, digital assets, threat prevention"
      />
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Cybersecurity Services</h1>
          <p className="text-xl text-zion-blue-light max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions to protect your digital assets and ensure business continuity.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">Advanced Security Solutions</h2>
            <p className="text-lg text-zion-blue-light mb-6">
              Our cybersecurity services provide multi-layered protection against evolving threats, 
              ensuring your business remains secure and compliant.
            </p>
            <p className="text-lg text-zion-blue-light">
              From threat detection to incident response, we offer comprehensive security 
              solutions tailored to your specific needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cybersecurity;
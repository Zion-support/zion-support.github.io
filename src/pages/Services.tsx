import React from 'react';
import SEO from '../components/SEO';

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Services - Zion Tech Group"
        description="Explore our comprehensive range of AI-powered services, technology solutions, and innovative micro-SaaS platforms."
      />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto text-white">
          <h1 className="text-5xl font-bold mb-8 text-center">Our Services</h1>
          <p className="text-xl text-gray-300 mb-12 text-center">
            Comprehensive AI-powered solutions for modern businesses
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">AI Solutions</h3>
              <p className="text-gray-300 mb-4">
                Cutting-edge artificial intelligence services including machine learning, 
                natural language processing, and computer vision.
              </p>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Cloud Services</h3>
              <p className="text-gray-300 mb-4">
                Scalable cloud infrastructure, DevOps automation, and cloud migration services.
              </p>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Quantum Computing</h3>
              <p className="text-gray-300 mb-4">
                Revolutionary quantum computing solutions for complex problem-solving and optimization.
              </p>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Micro-SaaS Platforms</h3>
              <p className="text-gray-300 mb-4">
                Innovative micro-SaaS solutions designed for specific business needs and workflows.
              </p>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Cybersecurity</h3>
              <p className="text-gray-300 mb-4">
                Advanced security solutions including threat detection, compliance, and risk management.
              </p>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Consulting</h3>
              <p className="text-gray-300 mb-4">
                Strategic technology consulting to help businesses navigate digital transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
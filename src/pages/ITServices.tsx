import React from 'react';
import { SEO } from '../components/SEO';

export default function ITServices() {
  return (
    <>
      <SEO 
        title="IT Services - Zion Tech Group" 
        description="Professional IT services and infrastructure solutions" 
        keywords="IT services, infrastructure, technology solutions"
      />
      <div className="min-h-screen bg-zion-blue pt-20 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              IT Services
            </h1>
            <p className="text-xl text-zion-slate-light mb-8">
              Professional IT services and infrastructure solutions
            </p>
            <div className="bg-white rounded-lg p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-zion-slate-dark mb-4">
                Our IT Services
              </h2>
              <p className="text-zion-slate-light">
                We provide comprehensive IT services to help businesses optimize their technology infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
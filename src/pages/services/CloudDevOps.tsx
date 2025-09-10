import React from 'react';
import { SEO } from '../../components/SEO';

export default function CloudDevOps() {
  return (
    <>
      <SEO 
        title="CloudDevOps - Zion Tech Group" 
        description="CloudDevOps service from Zion Tech Group" 
        keywords="CloudDevOps, zion tech group, services"
      />
      <div className="min-h-screen bg-zion-blue pt-20 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              CloudDevOps
            </h1>
            <p className="text-xl text-zion-slate-light mb-8">
              Professional CloudDevOps services
            </p>
            <div className="bg-white rounded-lg p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-zion-slate-dark mb-4">
                CloudDevOps Service
              </h2>
              <p className="text-zion-slate-light">
                We provide comprehensive CloudDevOps solutions to help businesses achieve their goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

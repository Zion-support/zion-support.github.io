import React from 'react';
import { SEO } from '../../components/SEO';

export default function IoTEdge() {
  return (
    <>
      <SEO 
        title="IoTEdge - Zion Tech Group" 
        description="IoTEdge service from Zion Tech Group" 
        keywords="IoTEdge, zion tech group, services"
      />
      <div className="min-h-screen bg-zion-blue pt-20 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              IoTEdge
            </h1>
            <p className="text-xl text-zion-slate-light mb-8">
              Professional IoTEdge services
            </p>
            <div className="bg-white rounded-lg p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-zion-slate-dark mb-4">
                IoTEdge Service
              </h2>
              <p className="text-zion-slate-light">
                We provide comprehensive IoTEdge solutions to help businesses achieve their goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from 'react';
import { SEO } from '../../components/SEO';

export default function Sustainability() {
  return (
    <>
      <SEO 
        title="Sustainability - Zion Tech Group" 
        description="Sustainability service from Zion Tech Group" 
        keywords="Sustainability, zion tech group, services"
      />
      <div className="min-h-screen bg-zion-blue pt-20 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              Sustainability
            </h1>
            <p className="text-xl text-zion-slate-light mb-8">
              Professional Sustainability services
            </p>
            <div className="bg-white rounded-lg p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-zion-slate-dark mb-4">
                Sustainability Service
              </h2>
              <p className="text-zion-slate-light">
                We provide comprehensive Sustainability solutions to help businesses achieve their goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

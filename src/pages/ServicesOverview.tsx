import React from 'react';
import { SEO } from '../components/SEO';

export default function ServicesOverview() {
  return (
    <>
      <SEO 
        title="ServicesOverview - Zion Tech Group" 
        description="ServicesOverview page for Zion Tech Group" 
        keywords="ServicesOverview, zion tech group"
      />
      <div className="min-h-screen bg-zion-blue pt-20 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              ServicesOverview
            </h1>
            <p className="text-xl text-zion-slate-light mb-8">
              Welcome to our ServicesOverview page
            </p>
            <div className="bg-white rounded-lg p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-zion-slate-dark mb-4">
                ServicesOverview Content
              </h2>
              <p className="text-zion-slate-light">
                This is the ServicesOverview page content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

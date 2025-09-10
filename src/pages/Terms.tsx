import React from 'react';
import SEO from '../components/SEO';

<<<<<<< HEAD
const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Terms of Service - Zion Tech Group"
        description="Read our terms of service and user agreement."
        keywords={["terms of service", "user agreement", "terms", "legal"]}
      />
      
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Terms of Service</h1>
          <p className="text-xl text-gray-300">
            Last updated: January 1, 2024
          </p>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <div className="bg-slate-800/50 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Acceptance of Terms</h2>
            <p className="text-gray-300 text-lg">
              By accessing and using our services, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, 
              please do not use this service.
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Use License</h2>
            <p className="text-gray-300 text-lg">
              Permission is granted to temporarily download one copy of our services for personal, 
              non-commercial transitory viewing only. This is the grant of a license, not a transfer 
              of title, and under this license you may not modify or copy the materials.
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Service Availability</h2>
            <p className="text-gray-300 text-lg">
              We strive to maintain high availability of our services, but we do not guarantee 
              uninterrupted access. We reserve the right to modify, suspend, or discontinue 
              any part of our services at any time.
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Contact Information</h2>
            <p className="text-gray-300 text-lg">
              If you have any questions about these Terms of Service, please contact us at 
              legal@ziontechgroup.com or through our contact page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
=======
export default function Terms() {
  return (
    <>
      <SEO 
        title="Terms of Service - Zion Tech Group"
        description="Our terms of service and usage guidelines."
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Terms of Service</h1>
            <p className="text-xl text-slate-300">Our terms of service and usage guidelines.</p>
          </div>
        </div>
      </div>
    </>
  );
}
>>>>>>> 2e76c8f17382c83630cd66eed177eb9d0ef16e40

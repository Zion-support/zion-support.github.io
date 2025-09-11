import React from 'react';
import { SEO } from '../components/SEO';

export default function RequestQuote() {
  return (
    <>
      <SEO 
        title="Request Quote - Zion Tech Group" 
        description="Get a custom quote for our services" 
        keywords="quote, pricing, services"
      />
      <div className="min-h-screen bg-zion-blue pt-20 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              Request a Quote
            </h1>
            <p className="text-xl text-zion-slate-light mb-8">
              Get a custom quote for our services
            </p>
            <div className="bg-white rounded-lg p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-zion-slate-dark mb-4">
                Contact Us for a Quote
              </h2>
              <p className="text-zion-slate-light">
                Please contact us to discuss your requirements and get a personalized quote.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
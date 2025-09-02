import React from 'react';
export const config = { unstable_runtimeJS: false };
export default function PricingGuide() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-5xl mx-auto py-20 px-4">
        <h1 className="text-3xl font-bold mb-4">Pricing Guide</h1>
        <p className="text-gray-600">
          Contact us for a tailored quote. Phone: +1 302 464 0950 · Email: kleber@ziontechgroup.com
        </p>
      </div>
    </div>
  );
}
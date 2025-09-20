import React from 'react';
import { SEO } from '@/components/SEO';

export default function Status() {
  return (
    <>
      <SEO
        title="System Status | Zion AI Marketplace"
        description="Check the current status of our services."
      />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">System Status</h1>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600">All systems are operational.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
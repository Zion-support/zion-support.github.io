import React from 'react';
import { SEO } from '@/components/SEO';

export default function TalentsPage() {
  return (
    <>
      <SEO
        title="Talents | Zion AI Marketplace"
        description="Discover talented professionals in our marketplace."
      />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Talents</h1>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600">Talented professionals will be listed here.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
import React from 'react';
import { SEO } from '@/components/SEO';

export default function Home() {
  return (
    <>
      <SEO
        title="Home | Zion AI Marketplace"
        description="Welcome to the Zion AI Marketplace - Your gateway to AI-powered solutions."
      />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome to Zion AI Marketplace</h1>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600">Discover AI-powered solutions for your business needs.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
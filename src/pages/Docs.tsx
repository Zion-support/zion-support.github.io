import React from 'react';
import { SEO } from '../components/SEO';

export default function Docs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center py-24">
      <SEO title="Documentation - Zion Tech Group" description="Technical documentation and guides for Zion Tech Group." />
      <div className="text-center text-white max-w-2xl px-6">
        <h1 className="text-4xl font-bold mb-4">Documentation</h1>
        <p className="text-lg text-gray-300">Developer guides and API documentation coming soon.</p>
      </div>
    </div>
  );
}


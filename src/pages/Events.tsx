import React from 'react';
import { SEO } from '@/components/SEO';

export default function Events() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16">
      <SEO title="Events - Zion Tech Group" description="Upcoming and past events, webinars, and conferences." />
      <div className="container-responsive text-white">
        <h1 className="text-4xl font-bold mb-4">Events</h1>
        <p className="text-lg text-gray-300 max-w-2xl">Stay tuned for our upcoming webinars and conferences.</p>
      </div>
    </div>
  );
}


import React from 'react';
import { SEO } from '../components/SEO';

export default function Events() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center py-24">
      <SEO title="Events - Zion Tech Group" description="Upcoming events, webinars, and conferences from Zion Tech Group." />
      <div className="text-center text-white max-w-2xl px-6">
        <h1 className="text-4xl font-bold mb-4">Events</h1>
        <p className="text-lg text-gray-300">Stay tuned for our upcoming webinars, workshops, and conferences.</p>
      </div>
    </div>
  );
}


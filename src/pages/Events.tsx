import React from 'react';
import { SEO } from '@/components/SEO';

const Events: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO title="Events - Zion Tech Group" description="Upcoming events, webinars, and conferences by Zion Tech Group." />
      <div className="container mx-auto px-4 py-16 text-white">
        <h1 className="text-4xl font-bold mb-6">Events</h1>
        <p className="text-slate-300 mb-12 max-w-2xl">
          Explore our upcoming events, webinars, and conferences. Check back soon for our latest schedule.
        </p>
        <div className="rounded-xl border border-cyan-400/20 bg-slate-900/60 p-8">
          <p className="text-slate-400">No events scheduled yet. Subscribe to our newsletter for updates.</p>
        </div>
      </div>
    </div>
  );
};

export default Events;


import React from 'react';
import { SEO  } from '@/components/SEO';

export default function Demo(...args: any[]): any {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
      <SEO title="Request a Demo - Zion Tech Group" description="Book a personalized demo of our AI and IT solutions." />
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">Request a Demo</h1>
        <p className="text-slate-300 mb-8">See our solutions in action. Share a few details and our team will follow up to schedule a personalized walkthrough.</p>
        <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
          <form className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Full Name</label>
              <input className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2" placeholder="Jane Doe" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Work Email</label>
                <input className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2" placeholder="jane@company.com" />
              </div>
              <div>
                <label className="block text-sm mb-1">Company</label>
                <input className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2" placeholder="Acme Inc." />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-1">What would you like to see?</label>
              <textarea className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2" rows={4} placeholder="Tell us about your goals and use cases" />
            </div>
            <button type="button" className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 font-semibold">Request Demo</button>
          </form>
        </div>
      </div>
    </div>
  );
}


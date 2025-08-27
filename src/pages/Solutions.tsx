import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';

export default function Solutions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <SEO title="Solutions - Zion Tech Group" description="Industry solutions for enterprise and healthcare with AI-first capabilities." />
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Solutions</h1>
        <p className="text-lg text-gray-300 max-w-3xl mb-8">
          Explore tailored solutions and architectures for key industries and functions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/solutions/enterprise" className="p-6 rounded-xl bg-slate-800/60 hover:bg-slate-700/60 transition">
            <h2 className="text-2xl font-semibold mb-2">Enterprise</h2>
            <p className="text-gray-300">Cloud foundations, data platforms, AI automation, and security at scale.</p>
          </Link>
          <Link to="/solutions/healthcare" className="p-6 rounded-xl bg-slate-800/60 hover:bg-slate-700/60 transition">
            <h2 className="text-2xl font-semibold mb-2">Healthcare</h2>
            <p className="text-gray-300">Clinical AI, interoperability, and analytics with strict compliance.</p>
          </Link>
        </div>
      </section>
    </div>
    </div>
  );
}

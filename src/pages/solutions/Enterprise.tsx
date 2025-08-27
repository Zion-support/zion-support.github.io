import React from 'react';
import { SEO } from '@/components/SEO';

export default function EnterpriseSolutions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <SEO title="Enterprise Solutions - Zion Tech Group" description="End-to-end enterprise platforms, AI automation, and secure cloud foundations." />
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Enterprise Solutions</h1>
        <p className="text-lg text-gray-300 max-w-3xl">
          Modernize operations with secure cloud, data platforms, AI-driven workflows, and enterprise-grade integrations.
        </p>
      </section>
    </div>
  );
}


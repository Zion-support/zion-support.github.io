import React from 'react';
import { SEO } from '@/components/SEO';

const CustomerDataPlatform: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SEO 
        title="Customer Data Platform (CDP) - Zion Tech Group"
        description="Unify customer data across channels for personalization, analytics, and privacy compliance."
      />
      <section className="container mx-auto px-4 py-16 space-y-8">
        <header className="space-y-3">
          <h1 className="text-4xl font-bold">Customer Data Platform (CDP)</h1>
          <p className="text-slate-300 max-w-3xl">
            Real-time identity resolution, event ingestion, profiles, segments, and activation to ad and email platforms with full consent and privacy controls.
          </p>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <article className="p-6 rounded-xl bg-slate-900 border border-slate-800">
            <h2 className="text-xl font-semibold mb-2">Features</h2>
            <ul className="list-disc ml-5 space-y-1 text-slate-300">
              <li>SDKs and server APIs for events</li>
              <li>Identity graph and merge rules</li>
              <li>Segments, traits, and computed fields</li>
              <li>Destinations: Meta, Google, Braze, Klaviyo</li>
              <li>Consent logging and regional routing</li>
            </ul>
          </article>
          <article className="p-6 rounded-xl bg-slate-900 border border-slate-800">
            <h2 className="text-xl font-semibold mb-2">Pricing</h2>
            <ul className="space-y-2 text-slate-300">
              <li>Starter: $99/mo – 100k events</li>
              <li>Growth: $399/mo – 2M events</li>
              <li>Pro: $1,499/mo – 20M events, SSO</li>
              <li>Enterprise: Custom – VPC, SLA</li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
};

export default CustomerDataPlatform;


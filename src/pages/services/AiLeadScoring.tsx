import React from 'react';
import { SEO } from '@/components/SEO';

const AiLeadScoring: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <SEO title="AI Lead Scoring - Zion Tech Group" description="Prioritize leads with AI-driven scoring models integrated with your CRM." />
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">AI Lead Scoring</h1>
        <p className="text-slate-300 max-w-3xl">Boost conversion by ranking leads using machine learning on engagement, firmographics, and historical outcomes. Native integrations with HubSpot, Salesforce, and Pipedrive.</p>
      </section>
      <section className="container mx-auto px-4 pb-8 grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
          <h3 className="font-semibold mb-2">Core Features</h3>
          <ul className="list-disc ml-5 text-slate-300 space-y-1">
            <li>Auto-training on CRM outcomes (won/lost)</li>
            <li>Behavioral and intent signals enrichment</li>
            <li>Bias detection and explainable insights</li>
            <li>Priority queues for SDR workflows</li>
          </ul>
        </div>
        <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
          <h3 className="font-semibold mb-2">Integrations</h3>
          <ul className="list-disc ml-5 text-slate-300 space-y-1">
            <li>HubSpot, Salesforce, Pipedrive</li>
            <li>Segment, Clearbit, 6sense</li>
            <li>Google Sheets, Snowflake, BigQuery</li>
          </ul>
        </div>
        <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
          <h3 className="font-semibold mb-2">Pricing</h3>
          <ul className="text-slate-300 space-y-1">
            <li>Starter: $499/mo up to 10k leads</li>
            <li>Growth: $1,499/mo up to 100k leads</li>
            <li>Enterprise: custom, SSO + SLA</li>
          </ul>
        </div>
      </section>
      <section className="container mx-auto px-4 pb-16">
        <a href="/contact" className="inline-block px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 transition">Book a demo</a>
      </section>
    </div>
  );
};

export default AiLeadScoring;


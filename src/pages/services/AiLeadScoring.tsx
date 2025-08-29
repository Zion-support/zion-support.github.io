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
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
            <h3 className="font-semibold mb-2">References</h3>
            <ul className="list-disc ml-5 text-slate-300 space-y-1">
              <li>
                Average pricing benchmarks for AI tools: 
                <a className="text-cyan-400 hover:underline" href="https://www.g2.com/categories/predictive-lead-scoring" target="_blank" rel="noreferrer">G2 Predictive Lead Scoring</a>
              </li>
              <li>
                CRM integrations and APIs: 
                <a className="text-cyan-400 hover:underline" href="https://developers.hubspot.com/" target="_blank" rel="noreferrer">HubSpot Developers</a>, 
                <a className="text-cyan-400 hover:underline" href="https://developer.salesforce.com/" target="_blank" rel="noreferrer">Salesforce Developer</a>
              </li>
              <li>
                Intent data providers: 
                <a className="text-cyan-400 hover:underline" href="https://clearbit.com" target="_blank" rel="noreferrer">Clearbit</a>, 
                <a className="text-cyan-400 hover:underline" href="https://6sense.com" target="_blank" rel="noreferrer">6sense</a>
              </li>
            </ul>
          </div>
          <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
            <h3 className="font-semibold mb-2">Contact</h3>
            <p className="text-slate-300">Mobile: <a className="text-cyan-400" href="tel:+13024640950">+1 302 464 0950</a></p>
            <p className="text-slate-300">E-mail: <a className="text-cyan-400" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></p>
            <p className="text-slate-300">Address: 364 E Main St STE 1008 Middletown DE 19709</p>
          </div>
        </div>
        <a href="/contact" className="inline-block px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 transition">Book a demo</a>
      </section>
    </div>
  );
};

export default AiLeadScoring;


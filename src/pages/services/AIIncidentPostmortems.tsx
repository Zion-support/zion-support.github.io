import React from 'react';
import { SEO } from '@/components/SEO';

const AIIncidentPostmortems: React.FC = () => (
  <div className="min-h-screen bg-slate-900 text-white">
    <SEO title="AI Incident Postmortems - Zion Tech Group" description="Auto-generate blameless postmortems with timeline synthesis, contributing factor analysis, and action items." />
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-3">AI Incident Postmortems</h1>
      <p className="text-slate-300 max-w-3xl">Ingest alerts, logs, chat transcripts, and PRs to synthesize a coherent incident timeline. Generate blameless postmortems, tag contributing factors, and create actionable follow-ups.</p>
    </section>
    <section className="container mx-auto px-4 pb-8 grid md:grid-cols-3 gap-6">
      <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
        <h3 className="font-semibold mb-2">Capabilities</h3>
        <ul className="list-disc ml-5 text-slate-300 space-y-1">
          <li>Automated incident timeline reconstruction</li>
          <li>Root-cause hypothesis and factor tagging</li>
          <li>Action item extraction with owners and due dates</li>
          <li>Knowledge base publishing & search</li>
        </ul>
      </div>
      <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
        <h3 className="font-semibold mb-2">Integrations</h3>
        <ul className="list-disc ml-5 text-slate-300 space-y-1">
          <li>PagerDuty, Opsgenie, Slack, MS Teams</li>
          <li>GitHub/GitLab, Jira</li>
          <li>Datadog, New Relic, Elastic</li>
        </ul>
      </div>
      <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
        <h3 className="font-semibold mb-2">Pricing</h3>
        <ul className="text-slate-300 space-y-1">
          <li>Starter: $129/mo up to 10 incidents</li>
          <li>Growth: $399/mo up to 50 incidents</li>
          <li>Enterprise: custom, SOC 2 export bundle</li>
        </ul>
      </div>
    </section>
    <section className="container mx-auto px-4 pb-16 space-x-4">
      <a href="/contact" className="inline-block px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 transition">Request demo</a>
      <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="inline-block px-6 py-3 rounded-lg bg-slate-800 border border-slate-700 hover:bg-slate-700 transition">Learn more</a>
    </section>
  </div>
);

export default AIIncidentPostmortems;


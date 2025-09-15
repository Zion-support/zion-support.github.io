import React from 'react';

const AIPoweredEmailResponder: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            AI-Powered Email Responder
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl">
            Reduce response times and triage inboxes with an on-brand, compliant, and secure AI assistant
            that drafts and automates replies, prioritizes important threads, and escalates to humans when needed.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-2xl border border-cyan-400/20 bg-slate-900/60 p-6">
              <h2 className="text-2xl font-semibold mb-3">Key Capabilities</h2>
              <ul className="grid sm:grid-cols-2 gap-3 text-slate-300">
                <li className="p-3 rounded-lg bg-slate-800/50">Intelligent drafting with knowledge-base grounding</li>
                <li className="p-3 rounded-lg bg-slate-800/50">Auto-tagging, prioritization, and SLA-aware routing</li>
                <li className="p-3 rounded-lg bg-slate-800/50">Tone and policy controls, redaction, PII safeguards</li>
                <li className="p-3 rounded-lg bg-slate-800/50">Integrations: Gmail, Outlook 365, Zendesk, HubSpot</li>
                <li className="p-3 rounded-lg bg-slate-800/50">Approval workflows with human-in-the-loop (HITL)</li>
                <li className="p-3 rounded-lg bg-slate-800/50">Analytics: response time, CSAT proxy, deflection rate</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-cyan-400/20 bg-slate-900/60 p-6">
              <h2 className="text-2xl font-semibold mb-3">Pricing (avg market ranges)</h2>
              <ul className="space-y-2 text-slate-300">
                <li>Starter: $299–$499/mo — up to 3 inboxes, 10k emails/mo</li>
                <li>Growth: $799–$1,499/mo — 10 inboxes, 50k emails/mo, basic HITL</li>
                <li>Scale: $2,500–$5,000/mo — unlimited inboxes, advanced HITL, SSO, SOC2</li>
                <li>Enterprise: Custom — on-prem/VPC, DLP, custom compliance</li>
              </ul>
              <p className="mt-3 text-sm text-slate-400">
                Benchmarks informed by public pricing from common CX platforms and AI add-ons.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-400/20 bg-slate-900/60 p-6">
              <h2 className="text-2xl font-semibold mb-3">Resources</h2>
              <ul className="list-disc ml-6 space-y-2 text-cyan-300">
                <li><a className="hover:underline" href="https://workspace.google.com/marketplace" target="_blank" rel="noreferrer">Google Workspace Marketplace</a></li>
                <li><a className="hover:underline" href="https://learn.microsoft.com/exchange/" target="_blank" rel="noreferrer">Microsoft Exchange/Outlook documentation</a></li>
                <li><a className="hover:underline" href="https://platform.openai.com/docs" target="_blank" rel="noreferrer">OpenAI Platform docs</a></li>
                <li><a className="hover:underline" href="https://developers.google.com/gmail/api" target="_blank" rel="noreferrer">Gmail API</a></li>
              </ul>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-cyan-400/20 bg-slate-900/60 p-6">
              <h3 className="text-xl font-semibold">Get a Quote</h3>
              <p className="mt-2 text-slate-300">Call +1 302 464 0950 or email kleber@ziontechgroup.com</p>
              <a href="/contact" className="mt-4 inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-500 hover:to-blue-600">Contact Us</a>
            </div>
            <div className="rounded-2xl border border-cyan-400/20 bg-slate-900/60 p-6">
              <h3 className="text-xl font-semibold">Implementation</h3>
              <ul className="mt-2 space-y-2 text-slate-300">
                <li>2–4 weeks typical deployment</li>
                <li>SAML/SSO, RBAC, audit logs</li>
                <li>Optional on-prem/VPC deployment</li>
              </ul>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}

export default AIPoweredEmailResponder;


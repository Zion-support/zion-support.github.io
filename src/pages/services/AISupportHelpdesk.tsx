import React from 'react';
import { SEO } from '@/components/SEO';

export default function AISupportHelpdesk() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <SEO
        title="AI Support Helpdesk"
        description="AI triage, RAG knowledge base, generative replies, CSAT insights, and SLA routing."
        url="/services/ai-support-helpdesk"
        type="service"
      />
      <div className="container mx-auto px-4 py-14 max-w-5xl">
        <h1 className="text-3xl font-bold mb-3">AI Support Helpdesk</h1>
        <p className="text-slate-300 mb-6">Deflect tickets and accelerate resolution with AI: summarize, extract intents, propose replies, and auto-log CRM notes.</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-300 list-disc pl-6">
          <li>Multichannel: email, chat, web forms, APIs</li>
          <li>RAG: private docs, release notes, runbooks</li>
          <li>Guardrails: PII redaction, policy checks</li>
          <li>Integrations: Zendesk, Freshdesk, HubSpot, Salesforce</li>
        </ul>
        <div className="mt-6 text-slate-400 text-sm">Pricing: $99–$399/agent/mo typical. Sources: <a className="text-cyan-400 underline" href="https://www.zendesk.com/pricing/" target="_blank" rel="noreferrer">Zendesk</a>, <a className="text-cyan-400 underline" href="https://www.intercom.com/pricing" target="_blank" rel="noreferrer">Intercom</a>.</div>
      </div>
    </div>
  );
}


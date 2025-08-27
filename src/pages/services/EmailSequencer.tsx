import React from 'react';
import { SEO } from '@/components/SEO';

function EmailSequencer() {
  return (
    <div className="min-h-screen bg-futuristic text-white">
      <SEO 
        title="Automated Email Follow‑up Sequencer"
        description="Schedule multi‑step sequences with AI copy, reply detection, CRM sync, and deliverability insights."
      />
      <section className="container-responsive section-padding">
        <h1 className="heading-responsive text-gradient">Automated Email Follow‑ups</h1>
        <p className="mt-4 max-w-3xl text-zion-slate-light text-responsive">
          Drive higher conversions with AI‑written multi‑step sequences, reply and
          intent detection, and auto‑pausing when meetings are booked.
        </p>
        <div className="grid-futuristic mt-10">
          <div className="card-futuristic">
            <h2 className="text-xl font-semibold mb-2">Features</h2>
            <ul className="list-disc pl-5 space-y-2 text-zion-slate-light">
              <li>Sequence templates for SDR, onboarding, collections</li>
              <li>AI copy drafts on‑brand with compliance guardrails</li>
              <li>Reply, bounce, and OOO detection with auto‑routing</li>
              <li>CRM integrations: HubSpot, Salesforce, Pipedrive</li>
              <li>Warm‑up and deliverability health diagnostics</li>
            </ul>
          </div>
          <div className="card-futuristic">
            <h2 className="text-xl font-semibold mb-2">Pricing</h2>
            <ul className="list-disc pl-5 space-y-2 text-zion-slate-light">
              <li>Starter: $49/mo per seat</li>
              <li>Growth: $199/mo up to 10 seats</li>
              <li>Enterprise: Custom + SSO + SAML</li>
            </ul>
            <a href="/request-quote" className="btn-futuristic mt-4 inline-block">Start trial</a>
          </div>
        </div>
        <p className="mt-10 text-sm text-zion-slate-light">
          Visit <a className="text-cyan-400 underline" href="https://ziontechgroup.com/services/ai" target="_blank" rel="noreferrer">AI Services</a>
        </p>
      </section>
    </div>
  );
}

export default EmailSequencer;


import React from 'react';
import { SEO } from '@/components/SEO';

export default function AIComplianceCopilot() {
  return (
    <div className="min-h-screen bg-futuristic text-white">
      <SEO
        title="AI Compliance Copilot | Zion Tech Group"
        description="Continuously map controls, flag risks, and auto-generate audit evidence for SOC 2, ISO 27001, HIPAA, GDPR."
      />
      <section className="container-responsive py-16">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
          AI Compliance Copilot
        </h1>
        <p className="text-zion-slate-light max-w-3xl">
          Automate compliance with real-time control monitoring, policy mapping, gap analysis, and auto-evidence generation.
          Integrates with cloud, code, identity, and ticketing to reduce audit prep from months to days.
        </p>

        <div className="grid gap-8 md:grid-cols-3 mt-10">
          <div className="rounded-xl border border-cyan-400/20 bg-slate-900/50 p-6">
            <h2 className="text-lg font-semibold mb-2">Frameworks</h2>
            <p className="text-sm text-zion-slate-light">SOC 2, ISO 27001, HIPAA, GDPR, PCI DSS, NIST 800-53.</p>
          </div>
          <div className="rounded-xl border border-cyan-400/20 bg-slate-900/50 p-6">
            <h2 className="text-lg font-semibold mb-2">Integrations</h2>
            <p className="text-sm text-zion-slate-light">AWS, GCP, Azure, GitHub, GitLab, Okta, Jira, Slack.</p>
          </div>
          <div className="rounded-xl border border-cyan-400/20 bg-slate-900/50 p-6">
            <h2 className="text-lg font-semibold mb-2">Pricing</h2>
            <p className="text-sm text-zion-slate-light">From $1,500/mo; enterprise tiers with dedicated CSM.</p>
            <p className="text-xs text-zion-slate-light mt-2">
              References: <a className="text-cyan-400" href="https://drata.com/pricing" target="_blank" rel="noreferrer">Drata</a>, <a className="text-cyan-400" href="https://vanta.com/pricing" target="_blank" rel="noreferrer">Vanta</a>
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-cyan-400/20 bg-slate-900/50 p-6">
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-sm text-zion-slate-light">+1 302 464 0950 — <a className="text-cyan-400" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></p>
        </div>
      </section>
    </div>
  );
}


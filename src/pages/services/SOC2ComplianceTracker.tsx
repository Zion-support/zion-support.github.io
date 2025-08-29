import { motion } from "framer-motion";
import React from 'react';
import { SEO } from '@/components/SEO';

export default function SOC2ComplianceTracker() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <SEO
        title="SOC 2 Compliance Tracker - Micro SaaS"
        description="Controls mapping, policy workflows, evidence automation, and auditor-ready exports."
        url="/services/soc2-compliance-tracker"
        type="service"
      />
      <div className="container mx-auto px-4 py-14 max-w-5xl">
        <h1 className="text-3xl font-bold mb-3">SOC 2 Compliance Tracker</h1>
        <p className="text-slate-300 mb-6">Accelerate audits with automated evidence collection, risk registers, exceptions, and remediation tracking.</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-300 list-disc pl-6">
          <li>Control library (TSC), mappings to ISO 27001, NIST</li>
          <li>Evidence integrations: AWS, GCP, Azure, Okta, GitHub</li>
          <li>Policy lifecycle: draft, approval, distribution, attest</li>
          <li>Auditor exports: population, samples, audit logs</li>
        </ul>
        <div className="mt-6 text-slate-400 text-sm">Pricing: $100–$500/mo typical. Sources: <a className="text-cyan-400 underline" href="https://drata.com/pricing" target="_blank" rel="noreferrer">Drata</a>, <a className="text-cyan-400 underline" href="https://secureframe.com/pricing" target="_blank" rel="noreferrer">Secureframe</a>.</div>
      </div>
    </div>
  );
}


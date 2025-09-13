import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Agentic Vendor Management 2025: From Intake to Renewal | Zion Tech Group',
  description: 'Design agentic workflows for vendor intake, risk reviews, contract negotiations, and renewals. Patterns, guardrails, and KPIs for 2025.',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Agentic Vendor Management 2025</h1>
          <p className="text-lg text-teal-100">From intake to renewal: automate diligence, negotiate smarter, and enforce policy-as-code guardrails end-to-end.</p>
          <div className="mt-4 text-sm text-teal-100">📝 14 min read • Sep 12, 2025 • Operations</div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-teal">
        <p>
          Vendor lifecycles are ripe for agentic automation. By instrumenting intake, risk assessment, redlines, and renewals with structured
          telemetry and policy-as-code, enterprises reduce cycle time and leakage while improving compliance.
        </p>

        <h2>Reference Workflow</h2>
        <ol>
          <li>Intake triage and data collection with dynamic checklists</li>
          <li>Risk reviews: security, privacy, and compliance evaluations</li>
          <li>Negotiation copilot: clause suggestions with fallback playbooks</li>
          <li>Renewal automation with usage insights and guardrails</li>
        </ol>

        <h2>Key KPIs</h2>
        <ul>
          <li>32% faster cycle time from intake to signature</li>
          <li>21% reduction in non-compliant exceptions</li>
          <li>15% savings via benchmarked clause packages</li>
        </ul>

        <div className="mt-10 p-6 rounded-xl bg-teal-50 border border-teal-100">
          <h3 className="m-0">Next up</h3>
          <div className="flex flex-col sm:flex-row gap-3 mt-3">
            <Link href="/case-studies/ai-2025-vendor-management-impact" className="inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg">📊 Read the Case Study</Link>
            <Link href="/content-showcase" className="inline-flex items-center px-4 py-2 border border-teal-600 text-teal-700 rounded-lg">Explore More Content</Link>
          </div>
        </div>
      </div>
    </div>
  );
}


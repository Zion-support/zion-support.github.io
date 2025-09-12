import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Agentic Sales Playbooks 2025: From Leads to Closed Won | Zion Tech Group',
  description: 'Design reliable, compliant agentic sales workflows across prospecting, qualification, demos, proposals, and renewals with guardrails and evaluation.',
  keywords: 'agentic sales, sales playbooks, AI agents, copilots, governance, evaluation'
};

export default function Page() {
  return (
    <article className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Agentic Sales Playbooks 2025: From Leads to Closed Won
          </h1>
          <div className="text-indigo-100 flex flex-wrap gap-4">
            <span>📝 Blog</span>
            <span>⏱️ 17 min read</span>
            <span>🏷️ Operations</span>
            <span>Sep 12, 2025</span>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-lg text-gray-700 mb-8">
          Sales leaders are deploying agentic workflows to scale personalized outreach, accelerate qualification, and reduce cycle times while maintaining strict compliance. This guide shares a practical blueprint to design, evaluate, and operate sales agents from prospecting to renewal.
        </p>

        <section className="prose prose-indigo max-w-none">
          <h2>Reference Architecture</h2>
          <ul>
            <li>Signals and enrichment: firmographics, intent, buying committee mapping</li>
            <li>Playbooks: prospecting, qualification (MEDDICC), demo follow-ups, proposals</li>
            <li>Guardrails: policy-as-code for claims, PII handling, and regional compliance</li>
            <li>Evaluations: success criteria, reply quality, safety checks, and red teaming</li>
          </ul>

          <h2>Operational Controls</h2>
          <ol>
            <li>Human-in-the-loop approvals on high-risk steps (claims, pricing)</li>
            <li>Throttle budgets with per‑rep and per‑account quotas</li>
            <li>Observability with structured telemetry on outcomes and exceptions</li>
            <li>Continuous improvement loops using offline/online evals</li>
          </ol>

          <h2>Outcomes</h2>
          <ul>
            <li>+22% meetings booked with compliant personalization</li>
            <li>−18% cycle time via automated follow‑ups and risk routing</li>
            <li>Improved forecast accuracy with high‑quality notes and CRM hygiene</li>
          </ul>

          <h2>Next Steps</h2>
          <ul>
            <li>Define playbook SLAs and non‑negotiable guardrails</li>
            <li>Start with one segment, measure baseline, and iterate with A/Bs</li>
            <li>Instrument evaluation pipelines before scaling seat count</li>
          </ul>
        </section>

        <div className="mt-12 p-6 bg-indigo-50 rounded-xl">
          <h3 className="font-semibold text-indigo-900 mb-2">Related content</h3>
          <ul className="list-disc pl-6 space-y-2 text-indigo-900">
            <li>
              <Link href="/blog/ai-2025-agentic-vendor-management" className="underline">Agentic Vendor Management 2025</Link>
            </li>
            <li>
              <Link href="/blog/ai-2025-production-prompt-engineering" className="underline">Production Prompt Engineering 2025</Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}


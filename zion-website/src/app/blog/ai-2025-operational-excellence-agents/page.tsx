import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Operational Excellence with AI Agents (2025) | Zion Tech Group',
  description: 'Blueprint for using AI agents to drive operational excellence across planning, ops, and support. Metrics, patterns, and production checklist.',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Operational Excellence with AI Agents (2025)</h1>
          <p className="text-lg text-indigo-100">From incident automation to forecasting-to-fulfillment, learn how agentic workflows reduce toil, improve SLOs, and cut costs.</p>
          <div className="mt-4 text-sm text-indigo-200">📝 16 min read • Sep 12, 2025 • Agents</div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-indigo">
        <p>
          AI agents unlock step-function improvements in operational performance when paired with robust guardrails, observability, and well-designed
          human-in-the-loop controls. In this guide, we cover reference architectures, common pitfalls, and a production checklist you can use today.
        </p>

        <h2>Key Outcomes</h2>
        <ul>
          <li>41% lower MTTR through automated diagnostics and remediation</li>
          <li>27% fewer expedites by tying forecasting to fulfillment decisions</li>
          <li>6 points improvement in OTIF with policy-aware orchestration</li>
        </ul>

        <h2>Production Checklist</h2>
        <ol>
          <li>Policy-as-code guardrails and safety evaluations</li>
          <li>Structured telemetry with tracing and eval signals</li>
          <li>Budget and quota controls, plus circuit breakers</li>
          <li>Incident response runbooks for failure paths</li>
        </ol>

        <div className="mt-10 p-6 rounded-xl bg-indigo-50 border border-indigo-100">
          <h3 className="m-0">Next up</h3>
          <div className="flex flex-col sm:flex-row gap-3 mt-3">
            <Link href="/case-studies/ai-2025-operations-excellence-impact" className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg">📊 Read the Case Study</Link>
            <Link href="/content-showcase" className="inline-flex items-center px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg">Explore More Content</Link>
          </div>
        </div>
      </div>
    </div>
  );
}


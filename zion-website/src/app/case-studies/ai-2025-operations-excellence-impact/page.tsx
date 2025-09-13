import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Operations Excellence Impact: 41% MTTR Reduction | Zion Tech Group',
  description: 'Case study: Agentic operations reduced MTTR by 41% and improved OTIF by 6 points by automating diagnostics, remediation, and planning-to-fulfillment coordination.',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Operations Excellence Impact: 41% MTTR Reduction</h1>
          <p className="text-lg text-white/90">How agentic workflows automated runbooks, improved service, and reduced expedited costs across a global platform.</p>
          <div className="mt-4 text-sm text-white/80">📊 Case Study • 10 min read • Sep 12, 2025</div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose">
        <h2>Summary</h2>
        <p>
          By instrumenting incidents with structured telemetry and delegating diagnostics to AI agents with strict guardrails,
          the team achieved a 41% reduction in MTTR and eliminated repeat toil. Planning-to-fulfillment coordination via
          policy-aware agents cut expedites by 27% and lifted OTIF by 6 points.
        </p>

        <h2>Architecture</h2>
        <ul>
          <li>Observability: tracing + inline evals for action correctness</li>
          <li>Controls: budgets, circuit breakers, policy-as-code</li>
          <li>HITL: approvals for high‑risk actions and learning loops</li>
        </ul>

        <div className="mt-10 p-6 rounded-xl bg-blue-50 border border-blue-100">
          <h3 className="m-0">Explore the companion article</h3>
          <div className="flex flex-col sm:flex-row gap-3 mt-3">
            <Link href="/blog/ai-2025-operational-excellence-agents" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg">📝 Read the Guide</Link>
            <Link href="/content-showcase" className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg">Browse More</Link>
          </div>
        </div>
      </div>
    </div>
  );
}


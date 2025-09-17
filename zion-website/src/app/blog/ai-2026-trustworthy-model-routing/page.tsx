<<<<<<< HEAD
import React from 'react';

const page: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">page</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
=======
// @ts-nocheck
import Link from 'next/link'

export default function TrustworthyModelRoutingPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
        <Link href="/blog" className="text-blue-400 hover:text-blue-300">← Back to Blog</Link>
        <header className="mt-6 mb-10">
          <div className="flex items-center gap-3 text-sm text-gray-300 mb-4">
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-medium">Field Guide</span>
            <time className="text-gray-400">2025-09-16</time>
            <span className="text-gray-400">8 min read</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Trustworthy Model Routing (2026): Evidence‑Backed Decisions Under Budgets
          </h1>
          <p className="mt-4 text-gray-300 max-w-3xl">
            A practical field guide to build objective, auditable routing that balances quality, latency, and cost using eval gates, risk tiers, and policy‑as‑code.
          </p>
        </header>

        <article className="prose prose-invert prose-lg max-w-none">
          <h2>Core Principles</h2>
          <ul>
            <li>Measure before you route: define SLIs and target SLOs.</li>
            <li>Ground routing decisions in evals and risk signals.</li>
            <li>Make budgets explicit: latency, cost, carbon, and risk.</li>
            <li>Capture evidence: inputs, decisions, outcomes, and rollbacks.</li>
          </ul>

          <h2>Reference Architecture</h2>
          <p>
            Implement a routing controller that fetches model candidates, retrieves live signals
            (quality, latency, cost), applies policy‑as‑code, and emits an auditable decision record.
          </p>

          <pre><code>{`// pseudo
const decision = route({
  task, candidates, budgets: { p95LatencyMs: 800, maxCents: 12 },
  signals: { groundedness, faithfulness, overrideRate },
  policies: [guardrails.minQuality, guardrails.maxLatency, guardrails.riskTier]
})
if (!decision.ok) rollback()
logEvidence(decision)
`}</code></pre>

          <h2>Operational Controls</h2>
          <ol>
            <li>Pre‑deployment eval suites with golden tasks.</li>
            <li>Runtime canaries with automatic rollbacks.</li>
            <li>Budget enforcement and anomaly alerts.</li>
            <li>Weekly scorecards and incident‑ready postmortems.</li>
          </ol>

          <h2>Rollout Checklist</h2>
          <ul>
            <li>Define SLIs for quality, latency, cost, and safety.</li>
            <li>Codify risk tiers and permissions for tool use.</li>
            <li>Wire policy checks into CI/CD and runtime.</li>
            <li>Publish evidence to your governance hub.</li>
          </ul>

          <p className="mt-10">
            Continue with our deep dives on <Link href="/updates/real-time-rag-benchmark-suite-1-0" className="text-blue-400">RAG benchmarking</Link> and
            {' '}<Link href="/blog/ai-2026-enterprise-agent-observability-deep-dive" className="text-blue-400">agent observability</Link>.
          </p>
        </article>
      </div>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
    </div>
  );
};

export default page;
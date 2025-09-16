import Link from 'next/link'

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <article className="mx-auto max-w-3xl px-6 py-16">
        <header className="mb-10">
          <p className="text-sm text-blue-300">Guide · 2026</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight">Production RAG Latency Budgets</h1>
          <p className="mt-4 text-gray-300 text-lg">A pragmatic framework to set and enforce latency budgets for production RAG systems.</p>
        </header>

        <section className="prose prose-invert prose-blue max-w-none">
          <h2>Why latency budgets matter</h2>
          <p>
            Retrieval‑Augmented Generation (RAG) workloads often regress as knowledge bases grow
            and traffic patterns shift. Latency budgets keep your experience predictable and
            measurable across query types, content domains, and device classes.
          </p>

          <h2>Define user‑centric budgets</h2>
          <ul>
            <li>Cold start: ≤ 1.5s P95 for first token</li>
            <li>Interactive follow‑ups: ≤ 800ms P95 end‑to‑end</li>
            <li>Background tasks: ≤ 3s P95 with streaming feedback</li>
          </ul>

          <h2>Enforce with guardrails</h2>
          <ol>
            <li>Pre‑compute embeddings and cache top‑K for hot shards</li>
            <li>Use hybrid retrieval and early‑exit strategies with quality floors</li>
            <li>Set eval‑gated rollouts for changes that affect latency or quality</li>
          </ol>

          <h2>Operational playbook</h2>
          <p>
            Track SLIs for retrieval latency, grounding quality, and cache hit rate. Trigger
            auto‑rollback when budgets or groundedness fall below thresholds.
          </p>
        </section>

        <footer className="mt-12 border-t border-white/10 pt-6 flex items-center justify-between">
          <Link href="/blog" className="text-blue-400 hover:text-white">← Back to Blog</Link>
          <Link href="/contact" className="text-blue-400 hover:text-white">Talk to us →</Link>
        </footer>
      </article>
    </main>
  )
}

import React from 'react'

export const metadata = {
  title: 'Production RAG Latency Budgets (2026) — Practical Guide',
  description:
    'A pragmatic framework for setting and enforcing latency budgets for Retrieval-Augmented Generation (RAG) systems in production.',
}

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-gray-200">
      <h1 className="text-3xl sm:text-4xl font-bold text-white">Production RAG Latency Budgets (2026)</h1>
      <p className="mt-4 text-lg text-gray-300">
        This guide outlines actionable patterns to define, measure, and enforce latency budgets for production-grade
        RAG systems, including cache strategies, real-time fallbacks, and observability signals.
      </p>

      <section className="mt-10 space-y-6">
        <h2 className="text-2xl font-semibold text-white">Key Takeaways</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Define hard SLOs: p50/p95/p99 response budgets for end-to-end requests.</li>
          <li>Use tiered retrieval with dynamic timeouts and partial responses.</li>
          <li>Adopt real-user monitoring to align budgets with perceived latency.</li>
          <li>Instrument cache hit rate, embedding latency, vector scan latency, and model inference.</li>
          <li>Create playbooks for brownout/blackout modes when budgets are exceeded.</li>
        </ul>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-white">Suggested Budgets</h2>
        <p className="text-gray-300">
          Example enterprise targets for interactive experiences: p50 ≤ 600ms, p95 ≤ 1.8s, p99 ≤ 3.5s. Adjust by
          modality, network, and device class.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-white">Implementation Checklist</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Add end-to-end tracing IDs across retrieval and generation hops.</li>
          <li>Emit structured metrics with per-stage timings and sample payload sizes.</li>
          <li>Use adaptive timeouts, speculative queries, and aggressive memoization.</li>
          <li>Gate deploys with latency regression tests and synthetic probes.</li>
        </ol>
      </section>
    </main>
  )
}


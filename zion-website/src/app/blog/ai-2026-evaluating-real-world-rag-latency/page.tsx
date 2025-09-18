import React from 'react'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
        <Link href="/blog" className="text-blue-400 hover:text-blue-300">← Back to Blog</Link>
        <header className="mt-6 mb-10">
          <div className="flex items-center gap-3 text-sm text-gray-300 mb-4">
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-medium">RAG Systems</span>
            <time className="text-gray-400" dateTime="2025-09-16">Sep 16, 2025</time>
            <span>7 min read</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Evaluating Real-World RAG Latency: Patterns, Budgets, and Tradeoffs
          </h1>
          <p className="mt-4 text-gray-300">Practical architectures and measurement techniques to keep retrieval‑augmented generation fast, grounded, and affordable in production.</p>
        </header>

        <article className="prose prose-invert max-w-none">
          <h2>Why latency budgets matter</h2>
          <p>
            In production RAG, every millisecond compounds across retrieval, reranking, generation, and post‑processing. Clear budgets and
            guardrails are the difference between a responsive experience and user drop‑off.
          </p>
          <ul>
            <li>Separate <strong>interactive</strong> and <strong>batch</strong> SLOs</li>
            <li>Track tokenization, network, and cold‑start overheads</li>
            <li>Use streaming and partial rendering for perceived performance</li>
          </ul>

          <h2>Low‑latency retrieval patterns</h2>
          <p>Combine fast caches with hybrid retrieval to hit sub‑second targets:</p>
          <ol>
            <li>Query cache → vector or keyword depending on hit</li>
            <li>Hybrid retrieve (dense + sparse) with short timeouts</li>
            <li>Lightweight rerank ≤ 50ms on top‑k</li>
          </ol>

          <h2>Telemetry and evals</h2>
          <p>
            Instrument spans for each stage and run objective evals continuously. Track groundedness, answer completeness, and policy
            violations alongside latency percentiles (p50/p95/p99).
          </p>

          <h2>Cost controls</h2>
          <p>
            Keep costs predictable with context window caps, selective truncation, and model routing. Prefer small models for rerank,
            keep large models for generation only when quality requires it.
          </p>
        </article>

        <section className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-xl font-semibold text-white mb-4">Related</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/blog/ai-2026-real-time-retrieval-architectures" className="bg-white/5 p-4 rounded-xl hover:bg-white/10 transition">Real‑Time Retrieval Architectures</Link>
            <Link href="/blog/ai-2026-enterprise-rag-observability" className="bg-white/5 p-4 rounded-xl hover:bg-white/10 transition">Enterprise RAG Observability</Link>
          </div>
        </section>
      </div>
    </div>
  )
}


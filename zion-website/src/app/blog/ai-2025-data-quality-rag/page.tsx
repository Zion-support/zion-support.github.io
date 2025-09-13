import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Data Quality for RAG in Production (2025) | Zion Tech Group',
  description: 'A practical guide to data quality for Retrieval-Augmented Generation (RAG) systems in production: curation, evaluation, governance, and continuous improvement.',
  keywords: 'RAG, data quality, retrieval augmented generation, AI reliability, evaluations, production AI'
};

export default function Page() {
  return (
    <article className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Data Quality for RAG in Production (2025)
          </h1>
          <div className="text-indigo-100 flex flex-wrap gap-4">
            <span>📝 Blog</span>
            <span>⏱️ 18 min read</span>
            <span>🏷️ RAG</span>
            <span>Sep 12, 2025</span>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-lg text-gray-700 mb-8">
          High-performing Retrieval-Augmented Generation (RAG) systems depend more on curated, monitored knowledge than model size. This guide distills operator lessons for building reliable, cost‑efficient RAG in production through data quality: sourcing, normalization, chunking, indexing, evaluation, and continuous improvement.
        </p>

        <section className="prose prose-indigo max-w-none">
          <h2>Why Data Quality Beats Model Size</h2>
          <ul>
            <li>Reduce hallucinations via grounded retrieval and tight prompt schemas.</li>
            <li>Lower cost through high signal‑to‑noise corpora and tiered indexing.</li>
            <li>Improve latency with right‑sized chunks, hybrid search, and cache hits.</li>
          </ul>

          <h2>Operational Pillars</h2>
          <ol>
            <li>
              <strong>Curate</strong>: De‑duplicate, normalize, and label sources. Track lineage and freshness.
            </li>
            <li>
              <strong>Chunk</strong>: Optimize windowed chunks (semantic + structural) with overlap tuned by task.
            </li>
            <li>
              <strong>Index</strong>: Use hybrid search (vector + BM25 + filters). Maintain tiered stores for hot/cold data.
            </li>
            <li>
              <strong>Evaluate</strong>: Offline retrieval precision/recall, groundedness, and answer faithfulness.
            </li>
            <li>
              <strong>Observe</strong>: Traces with retrieval spans, top‑k artifacts, and prompt versions.
            </li>
            <li>
              <strong>Improve</strong>: Feedback loops from users and automated canaries drive dataset updates.
            </li>
          </ol>

          <h2>Production Playbook</h2>
          <p>
            Start small with a curated golden set and tight prompts. Add guardrails, human review for high‑risk flows, and automated evaluations per release. Measure retrieval quality, not just answer quality.
          </p>

          <h3>Key Metrics</h3>
          <ul>
            <li>Retrieval precision@k and coverage by intent.</li>
            <li>Groundedness and faithfulness (LLM‑assisted + sampled human review).</li>
            <li>Time‑to‑freshness for updated knowledge.</li>
            <li>Cost per successful answer and cache hit rate.</li>
          </ul>

          <h2>Governance and Compliance</h2>
          <p>
            Treat knowledge as code. Enforce schemas, run policy checks on ingestion, and keep immutable corpora snapshots. For regulated domains, maintain consent and usage policies alongside documents.
          </p>

          <h2>What to Do Next</h2>
          <ul>
            <li>Ship a minimal golden dataset and evaluate retrieval by top intents.</li>
            <li>Instrument traces with retrieval spans, prompt IDs, and evaluation scores.</li>
            <li>Close the loop with user feedback to continuously refine sources and chunks.</li>
          </ul>
        </section>

        <div className="mt-12 p-6 bg-indigo-50 rounded-xl">
          <h3 className="font-semibold text-indigo-900 mb-2">Continue learning</h3>
          <ul className="list-disc pl-6 space-y-2 text-indigo-900">
            <li>
              <Link href="/blog/ai-2025-advanced-rag-systems" className="underline">Advanced RAG Systems 2025</Link>
            </li>
            <li>
              <Link href="/blog/llm-observability-2025" className="underline">LLM Observability 2025</Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}


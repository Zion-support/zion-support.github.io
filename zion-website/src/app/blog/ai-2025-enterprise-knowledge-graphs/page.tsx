import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Enterprise Knowledge Graphs 2025: Unified Search & Reasoning | Zion Tech Group',
  description: 'Design and operate enterprise knowledge graphs to power unified semantic search, RAG, and compliant reasoning across domains.',
  keywords: 'knowledge graphs, enterprise search, semantic search, RAG, ontology, governance'
};

export default function Page() {
  return (
    <article className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Enterprise Knowledge Graphs 2025: Unified Search & Reasoning
          </h1>
          <div className="text-indigo-100 flex flex-wrap gap-4">
            <span>📝 Blog</span>
            <span>⏱️ 19 min read</span>
            <span>🏷️ Knowledge</span>
            <span>Sep 12, 2025</span>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-lg text-gray-700 mb-8">
          Knowledge graphs connect people, data, and decisions. In 2025, they underpin unified semantic search,
          high‑quality RAG, and governed reasoning. This guide covers ontology strategy, ingestion pipelines,
          indexing for hybrid search, and guardrails for trustworthy retrieval and reasoning.
        </p>

        <section className="prose prose-indigo max-w-none">
          <h2>Architecture Blueprint</h2>
          <ul>
            <li>Source systems → staging lake → curation → graph store with versioning</li>
            <li>Entity/relationship extraction with human‑in‑the‑loop quality checks</li>
            <li>Hybrid search (symbolic + vector) fronted by evaluation‑driven routers</li>
          </ul>

          <h2>Operational Foundations</h2>
          <ol>
            <li><strong>Ontology lifecycle:</strong> proposals, review, approvals, and change logs.</li>
            <li><strong>Data lineage:</strong> provenance, access controls, and consent propagation.</li>
            <li><strong>RAG quality:</strong> retrieval evals, answer grading, and budget guardrails.</li>
          </ol>

          <h2>Metrics</h2>
          <ul>
            <li>Search success rate, first‑result relevance, citation coverage</li>
            <li>Entity/edge accuracy and drift by domain</li>
            <li>Answer faithfulness and cost per resolved query</li>
          </ul>

          <h2>Next Steps</h2>
          <ul>
            <li>Define the top 10 entities and relationships that unlock key use cases</li>
            <li>Stand up hybrid search with A/B routing and online evals</li>
            <li>Instrument policy‑as‑code for redaction and attribution</li>
          </ul>
        </section>

        <div className="mt-12 p-6 bg-indigo-50 rounded-xl">
          <h3 className="font-semibold text-indigo-900 mb-2">Related content</h3>
          <ul className="list-disc pl-6 space-y-2 text-indigo-900">
            <li>
              <Link href="/blog/ai-2025-enterprise-retrieval-playbook" className="underline">Enterprise Retrieval Playbook 2025</Link>
            </li>
            <li>
              <Link href="/blog/ai-2025-data-quality-rag" className="underline">Data Quality for RAG in Production</Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}


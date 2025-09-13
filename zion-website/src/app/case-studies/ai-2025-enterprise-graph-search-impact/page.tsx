import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Enterprise Graph Search: 21% Case Resolution Lift (2025) | Zion Tech Group',
  description: 'Case study: Enterprise knowledge graph and hybrid search improved first‑contact resolution by 21% and reduced average handle time by 18%.',
  keywords: 'case study, knowledge graph, hybrid search, RAG, customer service, resolution rate'
};

export default function Page() {
  return (
    <article className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Enterprise Graph Search: 21% Case Resolution Lift
          </h1>
          <div className="text-indigo-100 flex flex-wrap gap-4">
            <span>📊 Case Study</span>
            <span>⏱️  nine min read</span>
            <span>🏷️ Case Study</span>
            <span>Sep 12, 2025</span>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-lg text-gray-700 mb-8">
          A global software company unified product, support, and community knowledge into a governed knowledge graph
          with hybrid search. Agents found answers faster, with grounded citations. First‑contact resolution increased by 21%,
          and average handle time dropped 18% while improving compliance.
        </p>

        <section className="prose prose-indigo max-w-none">
          <h2>Approach</h2>
          <ul>
            <li>Ingested support tickets, product docs, and forum posts into a versioned graph</li>
            <li>Deployed hybrid search with retrieval evals and budget guardrails</li>
            <li>Added policy‑as‑code for redaction and role‑based access</li>
          </ul>

          <h2>Outcomes</h2>
          <ul>
            <li>+21% first‑contact resolution rate</li>
            <li>−18% average handle time</li>
            <li>90% answers with citations and provenance</li>
          </ul>

          <h2>What We Learned</h2>
          <ol>
            <li>Ontology governance prevents drift and preserves answer quality</li>
            <li>Online evaluations catch regressions and control costs</li>
            <li>Human‑in‑the‑loop feedback accelerates relevance improvements</li>
          </ol>
        </section>

        <div className="mt-12 p-6 bg-indigo-50 rounded-xl">
          <h3 className="font-semibold text-indigo-900 mb-2">Related content</h3>
          <ul className="list-disc pl-6 space-y-2 text-indigo-900">
            <li>
              <Link href="/blog/ai-2025-enterprise-knowledge-graphs" className="underline">Enterprise Knowledge Graphs 2025</Link>
            </li>
            <li>
              <Link href="/blog/ai-2025-enterprise-retrieval-playbook" className="underline">Enterprise Retrieval Playbook 2025</Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}


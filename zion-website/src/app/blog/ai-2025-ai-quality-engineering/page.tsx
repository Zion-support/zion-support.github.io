import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Quality Engineering 2025: Evaluations, Guardrails, and SLAs | Zion Tech Group',
  description: 'An end-to-end playbook for AI quality engineering with automated evaluations, runtime guardrails, and SLO-driven operations.',
  keywords: 'AI quality engineering, evaluations, guardrails, SLAs, SLOs, reliability'
};

export default function Page() {
  return (
    <article className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AI Quality Engineering 2025: Evaluations, Guardrails, and SLAs
          </h1>
          <div className="text-indigo-100 flex flex-wrap gap-4">
            <span>📝 Blog</span>
            <span>⏱️ 20 min read</span>
            <span>🏷️ Evaluation</span>
            <span>Sep 12, 2025</span>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-lg text-gray-700 mb-8">
          Ship AI with confidence by engineering quality from design to operations. This guide covers eval pipelines, dataset curation, policy-as-code, and runtime guardrails aligned to business SLAs.
        </p>

        <section className="prose prose-indigo max-w-none">
          <h2>Quality System Design</h2>
          <ul>
            <li>Define task-specific success metrics tied to user outcomes</li>
            <li>Curate gold datasets and human-in-the-loop review workflows</li>
            <li>Version prompts, tools, and policies with traceable lineage</li>
          </ul>

          <h2>Evaluation Pipelines</h2>
          <ol>
            <li><strong>Offline:</strong> Regression suites with bias, safety, and cost checks.</li>
            <li><strong>Shadow:</strong> Observe in production alongside existing systems.</li>
            <li><strong>Online:</strong> Canary/A-B with auto rollback on SLO breaches.</li>
          </ol>

          <h2>Runtime Guardrails</h2>
          <ul>
            <li>Policy enforcement for PII, content categories, and tool access</li>
            <li>Rate limits, budget caps, and circuit breakers</li>
            <li>Inline evaluations to detect drift and unsafe behavior</li>
          </ul>

          <h2>Operating to SLAs</h2>
          <ul>
            <li>Define SLOs for latency, cost, and task success; monitor p95 and budgets</li>
            <li>Incident response playbooks with postmortems and feedback loops</li>
            <li>Continuous improvement via retraining and prompt revisions</li>
          </ul>

          <h2>Next Steps</h2>
          <ul>
            <li>Stand up a minimal eval harness in CI</li>
            <li>Instrument production for per-route metrics and tracing</li>
            <li>Roll out policy libraries and access reviews</li>
          </ul>
        </section>

        <div className="mt-12 p-6 bg-indigo-50 rounded-xl">
          <h3 className="font-semibold text-indigo-900 mb-2">Related content</h3>
          <ul className="list-disc pl-6 space-y-2 text-indigo-900">
            <li>
              <Link href="/blog/ai-2025-evaluations-in-production" className="underline">Evaluations in Production (2025)</Link>
            </li>
            <li>
              <Link href="/blog/ai-2025-genai-security-blueprint" className="underline">Enterprise GenAI Security Blueprint (2025)</Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
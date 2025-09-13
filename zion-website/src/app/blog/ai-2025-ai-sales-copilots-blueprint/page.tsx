import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Sales Copilots Blueprint 2025 | Zion Tech Group',
  description: 'Blueprint to design, deploy, and govern AI sales copilots that improve win rates and cycle time while maintaining compliance.',
};

export default function Page() {
  return (
    <article className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AI Sales Copilots Blueprint 2025
          </h1>
          <div className="text-indigo-100 flex flex-wrap gap-4">
            <span>📝 Blog</span>
            <span>⏱️ 20 min read</span>
            <span>🏷️ Go-to-Market</span>
            <span>Sep 12, 2025</span>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-lg text-gray-700 mb-8">
          Modern sales copilots combine retrieval-augmented generation, policy-aware guardrails, and CRM/tool
          integrations to help reps qualify, craft proposals, and navigate procurement faster—without leaking data
          or violating compliance.
        </p>

        <section className="prose prose-indigo max-w-none">
          <h2>Reference Architecture</h2>
          <ul>
            <li>Knowledge: product docs, pricing, legal clauses, win/loss insights</li>
            <li>Tools: CRM, CPQ, email, meeting notes, contract editor</li>
            <li>Guardrails: PII filtering, export controls, brand tone, legal clauses</li>
          </ul>

          <h2>Key Outcomes</h2>
          <ul>
            <li>7–12% lift in win rate via better discovery and tailored proposals</li>
            <li>21–35% faster cycle time through automated follow-ups and approvals</li>
            <li>Reduced risk with policy-as-code and evaluation gates</li>
          </ul>

          <h2>Implementation Steps</h2>
          <ol>
            <li>Map sales stages and define high-value copilot actions</li>
            <li>Instrument evaluations for task success and policy violations</li>
            <li>Launch with shadow mode, then canary with representative segments</li>
          </ol>
        </section>

        <div className="mt-12 p-6 bg-indigo-50 rounded-xl">
          <h3 className="font-semibold text-indigo-900 mb-2">Related content</h3>
          <ul className="list-disc pl-6 space-y-2 text-indigo-900">
            <li>
              <Link href="/blog/ai-2025-agent-marketplaces-strategy" className="underline">Agent Marketplaces in 2025</Link>
            </li>
            <li>
              <Link href="/blog/ai-2025-genai-security-blueprint" className="underline">GenAI Security Blueprint 2025</Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}


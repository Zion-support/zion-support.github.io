import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Case Study: AI Governance Operating Model Impact (2025) | Zion Tech Group',
  description: 'How a global enterprise accelerated AI delivery 35% while reducing incidents 28% by implementing an AI governance operating model.',
  keywords: 'AI governance case study, operating model, enterprise AI, compliance',
  openGraph: {
    title: 'Case Study: AI Governance Operating Model Impact (2025)',
    description: '35% faster delivery, 28% fewer incidents: governance operating model in action.'
  }
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Study: AI Governance Operating Model Impact</h1>
          <p className="text-lg text-indigo-200">Outcome-focused rollout across data, policy, and runtime controls.</p>
          <div className="mt-6 text-sm text-indigo-200">Sep 12, 2025 • 10 min read • Case Study</div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-indigo">
        <h2>Results</h2>
        <ul>
          <li>35% faster feature delivery through automated approvals</li>
          <li>28% fewer incidents via runtime guardrails and evaluations</li>
          <li>Audit time reduced from weeks to hours with policy-as-code</li>
        </ul>
        <h2>Approach</h2>
        <ol>
          <li>Defined decision rights and ownership</li>
          <li>Implemented data classification and usage controls</li>
          <li>Added runtime enforcement and observability</li>
        </ol>
        <div className="not-prose mt-8">
          <Link href="/content-showcase" className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700">
            Explore more content
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
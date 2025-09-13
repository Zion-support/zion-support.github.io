import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Case Study: AI Sales Cycle Acceleration (2025) | Zion Tech Group',
  description: 'How AI copilots and agentic workflows accelerated enterprise sales cycles by 28% while improving compliance.',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Sales Cycle Acceleration (2025)</h1>
          <p className="text-lg text-indigo-100">Agentic copilots cut cycle time by 28% with policy-aware proposals, automated follow-ups, and approval routing.</p>
          <div className="mt-4 text-sm text-indigo-200">📊 Case Study • 9 min read • Sep 12, 2025</div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-indigo">
        <h2>Outcomes</h2>
        <ul>
          <li>28% faster average sales cycle across segments</li>
          <li>7.5% lift in win rate for target ICP deals</li>
          <li>Zero policy violations after rollout with policy-as-code guardrails</li>
        </ul>

        <h2>What We Built</h2>
        <ul>
          <li>RAG over product, pricing, legal, and win/loss insights</li>
          <li>Copilot tools for discovery, proposals, and redlines with audit trail</li>
          <li>Approval workflows and quota-aware model routing</li>
        </ul>

        <div className="mt-10 p-6 rounded-xl bg-indigo-50 border border-indigo-100">
          <h3 className="m-0">Explore More</h3>
          <div className="flex flex-col sm:flex-row gap-3 mt-3">
            <Link href="/blog/ai-2025-ai-sales-copilots-blueprint" className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg">🧭 Read the Blueprint</Link>
            <Link href="/content-showcase" className="inline-flex items-center px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg">Explore Content</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

